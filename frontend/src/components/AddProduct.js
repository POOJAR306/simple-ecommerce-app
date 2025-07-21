import React, { useState } from 'react';

const AddProduct = () => {
  const [product, setProduct] = useState({
    name: '',
    image: '',
    price: ''
  });

  const handleChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch('http://localhost:5000/api/products', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(product),
      });

      const data = await res.json();
      alert('Product Added!');
      window.location.reload(); // reloads to see new product
    } catch (err) {
      console.error('Error:', err);
      alert('Failed to add product');
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: '30px' }}>
      <h2>Add New Product</h2>
      <input
        type="text"
        name="name"
        placeholder="Product Name"
        value={product.name}
        onChange={handleChange}
        required
        style={{ padding: '8px', margin: '5px' }}
      />
      <input
        type="text"
        name="image"
        placeholder="Image URL"
        value={product.image}
        onChange={handleChange}
        required
        style={{ padding: '8px', margin: '5px' }}
      />
      <input
        type="number"
        name="price"
        placeholder="Price"
        value={product.price}
        onChange={handleChange}
        required
        style={{ padding: '8px', margin: '5px' }}
      />
      <button type="submit" style={{ padding: '8px 16px', margin: '5px' }}>
        Add Product
      </button>
    </form>
  );
};

export default AddProduct;
