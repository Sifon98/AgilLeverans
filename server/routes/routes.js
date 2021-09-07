
const express = require("express");
const passport = require("passport");
const User = require("../models/user");
const router = express.Router();
const Products = require('../models/product')


// USER
router.get("/user", (req, res) => {
  // Get user
});

router.post("/register", async (req, res) => {
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
  } catch(e) {
    next(e);
  }

});
router.post("/login", async (req, res) => {
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

router.get("/wishlist", (req, res) => {
  // Get wishlist items
});
router.post("/wishlist", (req, res) => {
  // Add item to wishlist
});
router.put("/wishlist", (req, res) => {
  // Edit wishlist
});

router.get("/cart", (req, res) => {
  // Get shopping-cart items
});
router.post("/cart", (req, res) => {
  // Add item to shopping-cart
});
router.put("/cart", (req, res) => {
  /// Edit shopping-cart
});


// PRODUCTS
router.get("/products", async (req, res) => {
  // Get All (or sorted) products logic
  try {
    const products = await Products.find()
    res.send(products)
  } catch (error) {
    res.send({ message: error })
  }
});

router.get("/products/:id", (req, res) => {
  // Get induvidual products
});

// router.route("/").get((req, res) => {
//   // Get build folder
// });


module.exports = router;
