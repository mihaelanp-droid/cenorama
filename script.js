const products = [
  { name: "Нурофен 200 mg", category: "Лекарства", price: "8 – 12 лв" },
  { name: "Адаптирано мляко Aptamil", category: "Бебешки стоки", price: "25 – 35 лв" },
  { name: "Витамин D3", category: "Витамини", price: "10 – 20 лв" },
  { name: "Крем за лице", category: "Козметика", price: "15 – 40 лв" },
  { name: "Магнезий", category: "Сън и стрес", price: "8 – 18 лв" }
];

const searchInput = document.getElementById("searchInput");
const productList = document.getElementById("productList");

searchInput.addEventListener("input", function () {
  const value = this.value.toLowerCase();
  productList.innerHTML = "";

  products
    .filter(p => p.name.toLowerCase().includes(value))
    .forEach(p => {
      const div = document.createElement("div");
      div.className = "product";
      div.innerHTML = `
        <strong>${p.name}</strong><br>
        Категория: ${p.category}<br>
        Ценови диапазон: ${p.price}
      `;
      productList.appendChild(div);
    });
});
