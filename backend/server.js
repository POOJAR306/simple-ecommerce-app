const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 5000;

// Enable CORS
app.use(cors());

// Middleware
app.use(express.json());

// Dummy product data
const products = [
  { id: 1, name: "T-Shirt", price: 499, image: "https://th.bing.com/th/id/OIP.mFTQb5ckk1NyecPwD_yFgAHaEM?o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3" },
  { id: 2, name: "Shoes", price: 999, image: "https://img.kwcdn.com/product/1dec4a1170/5162f26f-308e-4081-8604-e86edbc4ffe1_800x800.jpeg.a.jpg" },
  { id: 3, name: "Watch", price: 1299, image: "https://th.bing.com/th/id/OIP.VLExFxIQyIkdAQo5KGe7vwHaGu?o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3" }
];

// Route
app.get('/products', (req, res) => {
  res.json(products);
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

