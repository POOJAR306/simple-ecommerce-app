import React, { useState } from 'react';
import ProductList from './ProductList';
import Cart from './Cart';

function App() {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  return (
    <div>
      <h1>🛒 Ecommerce Dashboard</h1>
      <ProductList addToCart={addToCart} />
      <Cart cartItems={cartItems} />
    </div>
  );
}

export default App;
