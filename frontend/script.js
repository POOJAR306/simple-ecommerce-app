fetch("http://localhost:5000/products")
  .then(res => res.json())
  .then(data => {
    const container = document.getElementById("product-list");

    data.forEach(product => {
      const card = document.createElement("div");
      card.innerHTML = `
        <h3>${product.name}</h3>
        <img src="${product.image}" width="150">
        <p>₹${product.price}</p>
      `;
      card.style.border = "1px solid #ccc";
      card.style.padding = "10px";
      card.style.margin = "10px";
      card.style.display = "inline-block";
      container.appendChild(card);
    });
  });
function clearCart() {
  fetch('http://localhost:5000/cart/clear', {
    method: 'DELETE'
  })
  .then(res => res.json())
  .then(data => {
    alert(data.message);
    loadCart(); // reload the cart
  });
}
