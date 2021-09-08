const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ProductSchema = new Schema(
  {
    name: {type: String, required: true},
    price: {type: Number, required: true},
    category: {type: Number, required: true},
    image: {type: String, required: true},
    // 0 = Tops
    // 1 = Bottoms
    // 2 = Shoes
    description: String,
    // tags: Array,
    colors: Array,
    sizes: Array,

  },
  {timestamps: true},
)

module.exports = mongoose.model("Product", ProductSchema);
