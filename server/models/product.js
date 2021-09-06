const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ProductSchema = new Schema(
  {
    name: {type: String, required: true},
    price: {type: Number, required: true},
    category: {type: String, required: true},
    description: String,
    // tags: Array,
    // color: String,
    // size: Number,

  },
  {timestamps: true},
)

module.exports = mongoose.model("User", ProductSchema);
