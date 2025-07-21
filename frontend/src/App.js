import React from 'react';
import { CartProvider } from './context/CartContext';
import AddProduct from './components/AddProduct';
import ProductList from './components/ProductList';

function App() {
  return (
    <CartProvider>
      <div>
        <h1>🛒 My Simple Cart</h1>
        <ProductList />
        <Cart />
      </div>
    </CartProvider>
  );
}

export default App;
