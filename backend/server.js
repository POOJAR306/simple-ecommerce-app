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
  { id: 1, name: "T-Shirt", price: 499, image: "https://via.placeholder.com/150" },
  { id: 2, name: "Shoes", price: 999, image: "https://via.placeholder.com/150" },
  { id: 3, name: "Watch", price: 1299, image: "https://via.placeholder.com/150" }
];

// Route
app.get('/products', (req, res) => {
  res.json(products);
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
