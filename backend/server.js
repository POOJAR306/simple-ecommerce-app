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

//Connect Mongoose in server.js
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log(" MongoDB Connected"))
  .catch(err => console.error(" Mongo Error", err));

// app.use(cors());
// app.use(express.json());
// require("dotenv").config();

// Dummy product data
// const products = [
//   {
//     id: 1,
//     name: "T-Shirt",
//     price: 499,
//     image: "https://th.bing.com/th/id/OIP.mFTQb5ckk1NyecPwD_yFgAHaEM?o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3"
//   },
//   {
//     id: 2,
//     name: "Shoes",
//     price: 999,
//     image: "https://img.kwcdn.com/product/1dec4a1170/5162f26f-308e-4081-8604-e86edbc4ffe1_800x800.jpeg.a.jpg"
//   },
//   {
//     id: 3,
//     name: "Watch",
//     price: 1299,
//     image: "https://th.bing.com/th/id/OIP.VLExFxIQyIkdAQo5KGe7vwHaGu?o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3"
//   }
// ];

// let cart = [];

// Routes

// Get products
app.get("/products", async (req, res) => {
  const products = await Product.find();
  res.json(products);
});

// Add to cart
app.post("/cart/add", async (req, res) => {
  const { productId } = req.body;

  try {
    const product = await Product.findById(productId);
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    const CartItem = require('./models/CartItem');

// Get all cart items
app.get('/cart', async (req, res) => {
  const items = await CartItem.find();
  res.json(items);
});

// Add item to cart
app.post('/cart', async (req, res) => {
  const newItem = new CartItem(req.body);
  await newItem.save();
  res.status(201).json({ message: 'Item added to cart' });
});

//Remove from Cart Functionality
app.delete("/cart/remove/:id", async (req, res) => {
  const productId = req.params.id;
  await CartItem.findOneAndDelete({ productId });
  res.json({ message: "Item removed from cart" });
});


// Start server
app.listen(5000, () => console.log("🚀 Server running on http://localhost:5000"));
