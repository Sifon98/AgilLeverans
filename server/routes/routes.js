
const express = require("express");
const passport = require("passport");
const User = require("../models/user");
const Product = require("../models/product");
const router = express.Router();

const {validateQuery} = require("../utils/validation")



// USER
router.get("/user", (req, res) => {
  // Get user
});

router.post("/register", async (req, res, next) => {

  try {
    // User info
    const user = new User({email: "testuser@gmail.com", username: "testuser"});
    const password = "password123"
    // Register User
    const registerUser = await User.register(user, password);
    // Log in user
    req.login(registerUser, (err) => {
      if (err) return next(err);
      // Give user a message that he is logged in
      res.json({text: "Registered!"})
    })
  } catch(err) {
    next(err);
  }
});
router.post("/login", async (req, res, next) => {
  // Tell passport that we will log in via "local" strategy
  passport.authenticate("local", function(err,user,info) {
    // Handle error
    if(err) return next(err);
    if(!user) return res.json({error: "Invalid username or password."})
    // Log in user
    req.login(user, function (err) {
      // Handle error
      if (err) return next(err);
      // Give user a message that he is logged in
      res.json({text: "logged in!"})
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
    const userId = "61371decd184969720e706ee";
    const productId = req.params.id;
    const { type } = req.query; // type should be "wishlist" or "cart"
    validateQuery(type); // returns error if not valid

    await User.findByIdAndUpdate(userId, {
      $addToSet: {
        ...(type === "wishlist" && {wishlist: productId}),
        ...(type === "cart" && {cart: productId})
      }
    });
  } catch (err) {
    return next(err);
  };

  res.json("ok")
});
// Remove wishlist || shopping-cart
router.delete("/saved-products/:id", async (req, res, next) => {
  try {
    const userId = "61371decd184969720e706ee";
    const productId = req.params.id;
    const { type } = req.query; // type should be "wishlist" or "cart"
    validateQuery(type); // returns error if not valid
  
    await User.findByIdAndUpdate(userId, {
      $pull: {
        ...(type === "wishlist" && {wishlist: productId}),
        ...(type === "cart" && {cart: productId})
      }
    });
  } catch(err) {
    next(err);
  }
  res.send("ok");
});


// PRODUCTS

router.get("/products", async (req, res, next) => {
  // Get All (or sorted) products logic
  try {
    const products = await Product.find();

    res.json({products});
  } catch(err) {
    return next(err);
  }
  

});

router.get("/products/:id", (req, res) => {
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
