
const express = require("express");
const passport = require("passport");
const User = require("../models/user");
const Product = require("../models/product");
const router = express.Router();
const {products} = require("../utils/products")

const {validateQuery} = require("../utils/validation")



// USER
router.get("/user", (req, res) => {
  if (!req.isAuthenticated()) return res.json(null);
  const { _id, email, username, wishlist, cart } = req.user;
  res.json({ _id, email, username, wishlist, cart });
});

router.post("/register", async (req, res, next) => {
  try {
    // User info
    const { email, username, password } = req.body;
    const user = new User({email, username});
    // Register User
    const registerUser = await User.register(user, password);
    // Log in user
    req.login(registerUser, (err) => {
      if (err) return next(err);
      // Extract necessary data from user
      const { _id, email, username} = registerUser;
      // Give user a message that he is logged in
      res.json({ _id, email, username })
    })
  } catch(err) {
    next(err);
  }
});
router.post("/login", async (req, res, next) => {
  // Tell passport that we will log in via "local" strategy
  passport.authenticate("local", function(err,user,info) {
    if(err) return next(err);
    if(!user) return res.json({error: "Invalid username or password."})
    // Log in user
    req.login(user, function (err) {
      if (err) return next(err);
      // Extract necessary data from user
      const { _id, email, username } = user;
      // Give user a message that he is logged in
      res.json({ _id, email, username});
    })
  })(req,res,next)
});

router.post("/logout", (req, res) => {
  // Logout user
  req.logout();
  // Send message of OK
  res.send(200)
});

// Get wishlist || shopping-cart items
router.get("/saved-products", async (req, res, next) => {
  try {
    if (!req.user) return;
    const userId = req.user._id;
    const { type } = req.query; // type should be "wishlist" or "cart"
    validateQuery(type); // returns error if not valid
  
    const user = await User.findById(userId, "-_id -username -email").populate("cart.item").populate("wishlist.item");
    res.json({
      ...(type === "wishlist" && {products: user.wishlist}),
      ...(type === "cart" && {products: user.cart})
    });
  } catch(err) {
    console.log(err)
    return next(err);
  }
});


// Increment or Decrement item from wishlist || shopping-cart
router.post("/saved-products/count/:id", async (req, res, next) => {
  try {
    const userId = req.user._id;
    const productId = req.params.id;
    const { type, count } = req.query; // type should be "wishlist" or "cart"

    await User.findOneAndUpdate(
      { _id: userId},
      {
        $set: {
          "cart.$[elem].count": count
        }
      },
      { arrayFilters: [{ "elem._id": productId }]}
    ).populate("cart.item").populate("wishlist.item")

    res.sendStatus(200);
  } catch (err) {
    console.log(err)
    return next(err);
  }
})


// Add item to wishlist || shopping-cart
router.post("/saved-products/:id", async (req, res, next) => {
  try {
    const userId = req.user._id;
    const productId = req.params.id;
    const { type } = req.query; // type should be "wishlist" or "cart"
    const { size, color } = req.body;
    validateQuery(type); // returns error if not valid

    const productInfo = {
      item: productId,
      color: { name: color.name, hex: color.hex },
      size,
      count: 1
    }

    const user = await User.findOneAndUpdate(
      { _id: userId }, 
      {
        $addToSet: {
          ...(type === "wishlist" && {wishlist: productInfo}),
          ...(type === "cart" && {cart: productInfo})
        },
      },
      {new: true}
    );

    res.send({wishlist: user.wishlist, cart: user.cart});

  } catch (err) {
    return next(err);
  };

});


router.post("/add-multiple-to-cart", async (req, res, next) => {
  try {
    const userId = req.user._id;
    // Products will be an array of products, from wishlist.
    const { products } = req.body;

    const user = await User.findOneAndUpdate(
      { _id: userId }, 
      {
        $push: {
          cart: {$each: products}
        },
      },
      {new: true}
    );

    res.send({cart: user.cart});

  } catch (err) {
    return next(err);
  };
});


// Remove wishlist || shopping-cart
router.delete("/saved-products/:id", async (req, res, next) => {
  console.log("DELETE")
  try {
    const userId = req.user._id;
    const productId = req.params.id;
    const { type } = req.query; // type should be "wishlist" or "cart"
    validateQuery(type); // returns error if not valid

    console.log(productId)
  
    const user = await User.findByIdAndUpdate(userId, {
      $pull: {
        ...(type === "wishlist" && {wishlist: {_id: productId}}),
        ...(type === "cart" && {cart: {_id: productId}})
      }
    }, {new: true}).populate("cart.item").populate("wishlist.item");

    res.send({wishlist: user.wishlist, cart: user.cart});
  } catch(err) {
    next(err);
  }
});


// PRODUCTS
router.get("/products", async (req, res, next) => {
  // Get All (or sorted) products logic
  try {
    // const {wishlist} = req.user;
    
    let products = await Product.find();
    products = JSON.parse(JSON.stringify(products));

    // const updateProducts = products.map(prod => {
    //   if(wishlist.includes(prod._id)) return {...prod, isWishlisted: true}
    //   return {...prod, isWishlisted: false}
    // })

    res.json({products});
  } catch(err) {
    return next(err);
  }
});

router.get("/products/:id", async (req, res, next) => {
  try {
    const productId = req.params.id;
    const product = await Product.findById(productId);
    const randomProducts = await findRandomProducts(3);
    res.json({product, randomProducts});
  } catch(err) {
    console.log(err)
    return next(err);
  }
});

const findRandomProducts = async (count) => {
  const skip = Math.floor(Math.random() * (products.length - count));
  const randomProducts = await Product.find().skip(skip).limit(count);
  return randomProducts;
}

// router.route("/").get((req, res) => {
//   // Get build folder
// });


module.exports = router;
