const mongoose = require("mongoose");

const CartItemSchema = new mongoose.Schema({
    productId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Product',
    required: true
  },
  quantity: {
    type: Number,
    default: 1
  }
});

module.exports = mongoose.model("CartItem", CartItemSchema);
