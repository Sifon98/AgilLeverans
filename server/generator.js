const mongoose = require("mongoose");
const Product = require("./models/product");
const User = require("./models/user");
const {products} = require("./utils/products")


// Connect to database
const dbUrl = "mongodb://localhost:27017/leverans-app";
mongoose.connect(dbUrl);

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
});


const addProductsToDB = async () => {
  for(let {name, price, category, gender, images, description, colors, sizes} of products) {
    const product = await new Product({name, price, category, gender, images, description, colors, sizes});
    product.save();
  }
}

const removeAllProducts = async () => {
  await Product.deleteMany({});
}


// Run this once to generate products
// addProductsToDB();

// Run this once to remove all products
// removeAllProducts();



// const createUser = async () => {
//   const user = await new User({})
// }