import React from 'react';

const Cart = ({ cartItems }) => (
  <div style={{ padding: '20px' }}>
    <h2>🧺 Cart</h2>
    <ul>
      {cartItems.map((item, index) => (
        <li key={index}>
          {item.name} - ₹{item.price}
        </li>
      ))}
    </ul>
  </div>
);

export default Cart;
