const mongoose = require("mongoose");

const CartItemSchema = new mongoose.Schema({
  id: Number,
  name: String,
  price: Number,
  image: String
});

module.exports = mongoose.model("CartItem", CartItemSchema);
