// src/context/CartContext.js

import React, { createContext, useContext, useState } from 'react';

// Step 1: Create Context
const CartContext = createContext();

// Step 2: Create Provider
export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  // Function to add product
  const addToCart = (product) => {
    const isExisting = cartItems.find((item) => item._id === product._id);
    if (isExisting) {
      alert('Item already in cart');
    } else {
      setCartItems([...cartItems, product]);
    }
  };

  // Function to remove product
  const removeFromCart = (id) => {
    setCartItems(cartItems.filter((item) => item._id !== id));
  };

  // Function to clear the cart
  const clearCart = () => {
    setCartItems([]);
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};

// Step 3: Create custom hook to use context
export const useCart = () => useContext(CartContext);
