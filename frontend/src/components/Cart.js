// src/components/Cart.js

import React from 'react';
import { useCart } from '../context/CartContext';

const Cart = () => {
  const { cartItems, removeFromCart, clearCart } = useCart();

  return (
    <div style={{ marginTop: '40px' }}>
      <h2>🛒 Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <ul>
            {cartItems.map((item) => (
              <li key={item._id} style={{ marginBottom: '10px' }}>
                {item.name} - ₹{item.price}
                <button
                  onClick={() => removeFromCart(item._id)}
                  style={{ marginLeft: '10px', background: 'red', color: 'white' }}
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
          <button onClick={clearCart} style={{ marginTop: '10px' }}>
            Clear Cart
          </button>
        </>
      )}
    </div>
  );
};

export default Cart;
