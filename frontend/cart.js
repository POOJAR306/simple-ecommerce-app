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
        <hr/>
      `;
      container.appendChild(div);
    });

    const totalElement = document.createElement("h2");
    totalElement.textContent = `Total: ₹${total}`;
    container.appendChild(totalElement);
  });
