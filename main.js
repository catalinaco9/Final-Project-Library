import "./style.css";

window.addEventListener("load", showProducts);

async function showProducts() {
  console.log("Page fully loaded");
  var response = await fetch(
    "https://652bdb7dd0d1df5273eecee2.mockapi.io/products"
  );
  var products = await response.json();

  var productsDiv = document.getElementById("products");
  var productsHtml = "";
  for (var i = 0; i <= products.length - 1; i++) {
    productsHtml += `
    <div class="card">
      <img src=${products[i].imageURL} />
      <h1>${products[i].name}</h1>
      <p class="price">${products[i].price}</p>
    </div>
    `;
  }
  productsDiv.innerHTML = productsHtml;
}
