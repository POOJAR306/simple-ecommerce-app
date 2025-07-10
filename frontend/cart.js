fetch("http://localhost:5000/cart")
  .then(res => res.json())
  .then(items => {
    const container = document.getElementById("cart-container");
    let total = 0;

    items.forEach(item => {
      total += item.price;

      const div = document.createElement("div");
      div.innerHTML = `
        <h3>${item.name}</h3>
        <p>₹${item.price}</p>
        <button onclick="removeFromCart(${item.id})">Remove</button>
        <hr/>
      `;
      container.appendChild(div);
    });

    const totalElement = document.createElement("h2");
    totalElement.textContent = `Total: ₹${total}`;
    container.appendChild(totalElement);
  });

function removeFromCart(productId) {
  fetch(`http://localhost:5000/cart/remove/${productId}`, {
    method: "DELETE"
  })
    .then(res => res.json())
    .then(data => {
      alert("Item removed from cart!");
      location.reload(); // reload the cart page to reflect changes
    })
    .catch(err => {
      console.error("Error removing item:", err);
    });
}
