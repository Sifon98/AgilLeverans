
const express = require("express");
const router = express.Router();


// USER
router.get("/api/user", (req, res) => {
  // Get user
});
router.post("/api/register", (req, res) => {
  // Create user
});
router.post("/api/login", (req, res) => {
  // Create user
});
router.post("/api/logout", (req, res) => {
  // Create user
});

router.get("/api/wishlist", (req, res) => {
  // Get wishlist items
});
router.post("/api/wishlist", (req, res) => {
  // Add item to wishlist
});
router.put("/api/wishlist", (req, res) => {
  // Edit wishlist
});

router.get("/api/cart", (req, res) => {
  // Get shopping-cart items
});
router.post("/api/cart", (req, res) => {
  // Add item to shopping-cart
});
router.put("/api/cart", (req, res) => {
  /// Edit shopping-cart
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