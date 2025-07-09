fetch("http://localhost:5000/products")
  .then(response => response.json())
  .then(products => {
    console.log("Fetched Products:", products);
    // Now loop through the products and show them on the page
    const productContainer = document.getElementById("product-container");

    products.forEach(product => {
      const card = document.createElement("div");
      card.classList.add("product-card");
      card.innerHTML = `
        <img src="${product.image}" alt="${product.name}" />
        <h3>${product.name}</h3>
        <p>₹${product.price}</p>
        <button onclick="addToCart(${product.id})">Add to Cart</button>
      `;
      productContainer.appendChild(card);
    });
  })
  .catch(error => {
    console.error("Error fetching products:", error);
  });
