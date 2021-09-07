
const express = require("express");
const router = express.Router();
const Products = require('../models/product')


// USER
router.get("/user", (req, res) => {
  // Get user
});
router.post("/user", (req, res) => {
  // Create user
});

router.get("/wishlist", (req, res) => {
  // checkout
});

router.get("/cart", (req, res) => {
  // checkout
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

router.get("/", (req, res) => {
  // Get build folder
});

module.exports = router