import React, { useEffect, useState } from 'react';

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/products') // Backend endpoint
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.error('Error fetching products:', err));
  }, []);

  return (
    <div style={{ padding: '20px' }}>
      <h2>Product List</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
        {products.map((product) => (
          <div
            key={product._id}
            style={{
              border: '1px solid #ccc',
              padding: '10px',
              width: '200px',
              borderRadius: '8px',
              textAlign: 'center',
            }}
          >
            <img
              src={product.image}
              alt={product.name}
              style={{ width: '150px', height: '150px', objectFit: 'cover' }}
            />
            <h3>{product.name}</h3>
            <p>₹{product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
