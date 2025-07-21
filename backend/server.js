// Import modules
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require("dotenv").config();

// Import MongoDB models
const Product = require('./models/Product.js');
const CartItem = require('./models/CartItem_temp.js');

// Setup app
const app = express();
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.error(err));

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

// Add to cart with quantity management
app.post('/cart', async (req, res) => {
  const { productId } = req.body;

  try {
    const product = await Product.findById(productId);
    if (!product) return res.status(404).json({ message: "Product not found" });

    const existingItem = await CartItem.findOne({ productId });

    if (existingItem) {
      existingItem.quantity += 1;
      await existingItem.save();
      return res.json({ message: "Quantity updated in cart" });
    } else {
      const newItem = new CartItem({ productId, quantity: 1 });
      await newItem.save();
      return res.status(201).json({ message: "Item added to cart" });
    }
  } catch (err) {
    res.status(500).json({ message: "Error adding to cart" });
  }
});

//  PUT: Update quantity of item in cart
app.put("/cart/update/:productId", async (req, res) => {
  const { quantity } = req.body;

  try {
    const item = await CartItem.findOne({ productId: req.params.productId });

    if (!item) return res.status(404).json({ message: "Item not found in cart" });

    item.quantity = quantity;
    await item.save();

    res.json({ message: "Cart quantity updated" });
  } catch (err) {
    res.status(500).json({ message: "Error updating cart quantity" });
  }
});

// Get total cart price
app.get("/cart/total", async (req, res) => {
  const items = await CartItem.find();
  let total = 0;

  for (const item of items) {
    const product = await Product.findById(item.productId);
    if (product) {
      total += product.price * item.quantity;
    }
  }
  res.json({ total });
});

// Remove from cart using productId
app.delete("/cart/remove/:productId", async (req, res) => {
  try {
    const { productId } = req.params;
    const result = await CartItem.findOneAndDelete({ productId });

    if (!result) {
      return res.status(404).json({ message: "Item not found in cart" });
    }

    res.json({ message: "❌ Item removed from cart" });
  } catch (err) {
    res.status(500).json({ message: "❌ Error removing item from cart" });
  }
});

// Get all cart items with product info
app.get('/cart', async (req, res) => {
  try {
    const items = await CartItem.find().populate('productId');
    
    // Format items for frontend
    const formatted = items.map(item => ({
      productId: item.productId._id,
      name: item.productId.name,
      price: item.productId.price,
      image: item.productId.image,
      quantity: item.quantity
    }));

    res.json(formatted);
  } catch (err) {
    res.status(500).json({ message: "Failed to load cart" });
  }
});
// Start server last — do NOT put routes inside this
app.listen(5000, () => {
  console.log("Server running on http://localhost:5000");
});
