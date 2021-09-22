const mongoose = require("mongoose");
const passportLocalMongoose = require("passport-local-mongoose");

const Schema = mongoose.Schema;

const UserSchema = new Schema(
  {
    username: {type: String, required: true},
    email: {type: String, required: true, unique: true},
    wishlist: [
      {
        item: {type: Schema.Types.ObjectId, ref: "Product"},
        color: {name: String, hex: String},
        size: String,
      }
   ],
    cart: [
      {
        item: {type: Schema.Types.ObjectId, ref: "Product"},
        color: {name: String, hex: String},
        size: String,
        count: Number
      }
    ]
  },
  {timestamps: true},
)
UserSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model("User", UserSchema);


