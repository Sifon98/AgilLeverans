const mongoose = require("mongoose");
const passportLocalMongoose = require("passport-local-mongoose");

const Schema = mongoose.Schema;

const UserSchema = new Schema(
  {
    username: {type: String, required: true},
    email: {type: String, required: true, unique: true},
    wishlist: [{type: Schema.Types.ObjectId, ref: "Product"}],
    cart: [{type: Schema.Types.ObjectId, ref: "Product"}],
  },
  {timestamps: true},
)
UserSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model("User", UserSchema);


