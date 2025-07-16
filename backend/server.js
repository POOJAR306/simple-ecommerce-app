// Import modules
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require("dotenv").config();

// Import MongoDB models
const Product = require('./models/Product');
const CartItem = require('./models/CartItem');

// Setup app
const app = express();
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log("✅ MongoDB Connected"))
.catch(err => console.error("❌ Mongo Error", err));

// ROUTES

// Get all products
app.get("/products", async (req, res) => {
  const products = await Product.find();
  res.json(products);
});

// Get a single product by ID
app.get("/products/:id", async (req, res) => {
  const product = await Product.findOne({ id: parseInt(req.params.id) });
  if (!product) {
    return res.status(404).json({ message: "Product not found" });
  }
  res.json(product);
});

// Add item to cart
app.post("/cart", async (req, res) => {
  const newItem = new CartItem(req.body);
  await newItem.save();
  res.status(201).json({ message: 'Item added to cart' });
});

// Get all cart items
app.get('/cart', async (req, res) => {
  const items = await CartItem.find();
  res.json(items);
});

// Remove from cart
app.delete("/cart/remove/:id", async (req, res) => {
  const id = parseInt(req.params.id);
  await CartItem.findOneAndDelete({ id });
  res.json({ message: "Item removed from cart" });
});

// Start the server
app.listen(5000, () => {
  console.log("🚀 Server running on http://localhost:5000");

});
