function addToCart(productId) {
  fetch(`http://localhost:5000/products/${productId}`)
    .then(response => response.json())
    .then(product => {
      fetch("http://localhost:5000/cart", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(product)
      }).then(res => {
        if (res.ok) alert("🛒 Added to cart!");
      });
    });
}
