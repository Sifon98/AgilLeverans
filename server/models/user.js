const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const UserSchema = new Schema(
  {
    name: {type: String, required: true},
    email: {type: String, required: true, unique: true},
    wishlist: [{type: Schema.Types.ObjectId, ref: "Product"}],
    cart: [{type: Schema.Types.ObjectId, ref: "Product"}],
  },
  {timestamps: true},
)

module.exports = mongoose.model("User", UserSchema);


