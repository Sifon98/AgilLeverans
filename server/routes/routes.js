
const express = require("express");
const router = express.Router();


// USER
router.get("/api/user", (req, res) => {
  // Get user
});
router.post("/api/user", (req, res) => {
  // Create user
});

router.get("/api/wishlist", (req, res) => {
  // checkout
});

router.get("/api/cart", (req, res) => {
  // checkout
});


// PRODUCTS
router.get("/api/products", (req, res) => {
  // Get All (or sorted) products logic
});
router.get("/api/products/:id", (req, res) => {
  // Get induvidual products
});

router.get("/", (req, res) => {
  // Get build folder
});