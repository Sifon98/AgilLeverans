
const express = require("express");
const passport = require("passport");
const User = require("../models/user");
const Product = require("../models/product");
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
  } catch(err) {
    next(err);
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

// Get wishlist || shopping-cart items
router.get("/saved-products", async (req, res) => {
  try {
    const userId = req.user._id;
    const type = req.query; // type should be "wishlist" or "cart"
  
    const user = await findById(userId).populate(type);

    res.json({
      ...(type === "wishlist" && {wishlist: user.wishlist}),
      ...(type === "cart" && {cart: user.cart})
    });
  } catch(err) {
    return next(err);
  }
});
// Add item to wishlist || shopping-cart
router.post("/saved-products/:id", async (req, res) => {
  try {
    const userId = req.user._id;
    const productId = req.params.id;
    const type = req.query; // type should be "wishlist" or "cart"
  
    await findByIdAndUpdate(userId, {
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
router.delete("/saved-products/:id", (req, res) => {
  try {
    const userId = req.user._id;
    const productId = req.params.id;
    const type = req.query; // type should be "wishlist" or "cart"
  
    await findByIdAndUpdate(userId, {
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


// router.get("/cart", (req, res) => {
//   // Get shopping-cart items
// });
// router.post("/cart", (req, res) => {
//   // Add item to shopping-cart
// });
// router.put("/cart", (req, res) => {
//   /// Edit shopping-cart
// });


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
