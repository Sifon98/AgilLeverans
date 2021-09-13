
const express = require("express");
const passport = require("passport");
const User = require("../models/user");
const Product = require("../models/product");
const router = express.Router();

const {validateQuery} = require("../utils/validation")



// USER
router.get("/user", (req, res) => {
  if (!req.isAuthenticated()) return res.json(null);
  console.log(req.user)
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
    const userId = "61371decd184969720e706ee";
    const { type } = req.query; // type should be "wishlist" or "cart"
    validateQuery(type); // returns error if not valid
  
    const user = await User.findById(userId).populate(type);
    res.json({
      ...(type === "wishlist" && {wishlist: user.wishlist}),
      ...(type === "cart" && {cart: user.cart})
    });
  } catch(err) {
    return next(err);
  }
});


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
    }

    await User.findOneAndUpdate(
      { _id: userId }, 
      {
        $addToSet: {
          ...(type === "wishlist" && {wishlist: productInfo}),
          ...(type === "cart" && {cart: productInfo})
        },
      },
    );

    let wishlist = null;
    let cart = null;
    if(type === "wishlist") {
      wishlist = [...req.user.wishlist];
      wishlist.push(productInfo);
    }
    if(type === "cart") {
      cart = [...req.user.cart];
      cart.push(productInfo);
    }

    res.send({wishlist, cart});

  } catch (err) {
    return next(err);
  };

  
});
// Remove wishlist || shopping-cart
router.delete("/saved-products/:id", async (req, res, next) => {
  try {
    const userId = req.user._id;
    const productId = req.params.id;
    const { type } = req.query; // type should be "wishlist" or "cart"
    validateQuery(type); // returns error if not valid
  
    await User.findByIdAndUpdate(userId, {
      $pull: {
        ...(type === "wishlist" && {wishlist: {item: productId}}),
        ...(type === "cart" && {cart: {item: productId}})
      }
    });

    let wishlist = null;
    let cart = null;
    if(type === "wishlist") {
      wishlist = req.user.wishlist.filter(item => item.item.toString() !== productId);
    }
    if(type === "cart") {
      cart = req.user.cart.filter(item => item.item.toString() !== productId);
    }

    res.send({wishlist, cart});
  } catch(err) {
    next(err);
  }
});


// PRODUCTS
router.get("/products", async (req, res, next) => {
  // Get All (or sorted) products logic
  try {
    const {wishlist} = req.user;
    
    let products = await Product.find();
    products = JSON.parse(JSON.stringify(products));

    const updateProducts = products.map(prod => {
      if(wishlist.includes(prod._id)) return {...prod, isWishlisted: true}
      return {...prod, isWishlisted: false}
    })

    res.json({products: updateProducts});
  } catch(err) {
    return next(err);
  }
});

router.get("/products/:id", async (req, res, next) => {
  try {
    const productId = req.params.id;
    const product = await Product.findById(productId);
    res.json({product});
  } catch(err) {
    return next(err);
  }

});

// router.route("/").get((req, res) => {
//   // Get build folder
// });


module.exports = router;
