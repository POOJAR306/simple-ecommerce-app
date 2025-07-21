const mongoose = require("mongoose");
const cartItemSchema = new mongoose.Schema({
  productId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Product",
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
    default: 1,
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User", // This assumes you have a User model
    required: true,
  }
});

module.exports = mongoose.model("CartItem", cartItemSchema);
