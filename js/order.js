const products = [
  // PIZZAS — preços transcritos
  { id:1, category:"pizzas", name:"Muçarela", description:"Muçarela, tomate, cebola e orégano.", sizes:{pequena:24,media:29,grande:35,gigante:43} },
  { id:2, category:"pizzas", name:"Mista", description:"Muçarela, presunto, tomate, cebola e orégano.", sizes:{pequena:24,media:29,grande:35,gigante:43} },
  { id:3, category:"pizzas", name:"Calabresa", description:"Muçarela, calabresa, tomate, cebola e orégano.", sizes:{pequena:24,media:29,grande:35,gigante:43} },
  { id:4, category:"pizzas", name:"Frango", description:"Muçarela, frango, milho, tomate, cebola e orégano.", sizes:{pequena:24,media:29,grande:35,gigante:43} },
  { id:5, category:"pizzas", name:"Baiana", description:"Muçarela, baiana, tomate, cebola e orégano.", sizes:{pequena:24,media:29,grande:35,gigante:43} },
  { id:6, category:"pizzas", name:"Bolonhesa", description:"Muçarela, bolonhesa, tomate, cebola e orégano.", sizes:{pequena:24,media:29,grande:35,gigante:43} },
  { id:7, category:"pizzas", name:"Frango c/ Catupiry", description:"Muçarela, frango, milho, tomate, cebola e orégano.", sizes:{pequena:25,media:30,grande:36,gigante:43} },
  { id:8, category:"pizzas", name:"Portuguesa", description:"Muçarela, presunto, ovo, tomate, cebola e orégano.", sizes:{pequena:24,media:29,grande:35,gigante:43} },
  { id:9, category:"pizzas", name:"A Moda da Casa", description:"Muçarela, 1/4 frango, 1/4 presunto, 1/4 bacon, 1/4 calabresa, milho, tomate, cebola e orégano.", sizes:{pequena:25,media:29,grande:36,gigante:43} },
  { id:10, category:"pizzas", name:"Chocolate", description:"Muçarela, chocolate e brigadeiro.", sizes:{pequena:24,media:29,grande:35,gigante:43} },
  { id:11, category:"pizzas", name:"Romeu e Julieta", description:"Muçarela e goiabada.", sizes:{pequena:24,media:29,grande:35,gigante:43} },
  { id:12, category:"pizzas", name:"Banana", description:"Muçarela, banana e canela.", sizes:{pequena:24,media:29,grande:35,gigante:43} },
  { id:13, category:"pizzas", name:"Alho", description:"Muçarela, alho dourado, tomate, cebola e orégano.", sizes:{pequena:24,media:29,grande:35,gigante:43} },
  { id:14, category:"pizzas", name:"Atum", description:"Muçarela, atum, cebola, tomate e orégano.", sizes:{pequena:25,media:30,grande:38,gigante:43} },
  { id:15, category:"pizzas", name:"Carne do Sol", description:"Muçarela, carne do sol, cebola, tomate e orégano.", sizes:{pequena:25,media:33,grande:43,gigante:48} },
  { id:16, category:"pizzas", name:"Bacon", description:"Muçarela, bacon, cebola, tomate e orégano.", sizes:{pequena:26,media:31,grande:39,gigante:43} },

  // SANDUÍCHES — pão árabe e pão bola.
  { id:101, category:"sanduiches", name:"Queijo", price:12, description:"Queijo." },
  { id:102, category:"sanduiches", name:"Misto", price:12, description:"Queijo e presunto." },
  { id:103, category:"sanduiches", name:"Hamburger", price:13, description:"Hamburger, alface e tomate." },
  { id:104, category:"sanduiches", name:"X-Burger", price:15, description:"Carne, queijo, alface e tomate." },
  { id:105, category:"sanduiches", name:"Italiano", price:17, description:"Carne, queijo, presunto, alface e tomate." },
  { id:106, category:"sanduiches", name:"Frango", price:17, description:"Creme de frango, queijo, alface e tomate." },
  { id:107, category:"sanduiches", name:"X-Frango", price:19, description:"Creme de frango, queijo, presunto, alface e tomate." },
  { id:108, category:"sanduiches", name:"Americano", price:18, description:"Carne, queijo, ovo, alface e tomate." },
  { id:109, category:"sanduiches", name:"Bauru", price:19, description:"Carne, queijo, ovo, presunto, alface e tomate." },
  { id:110, category:"sanduiches", name:"X-Calabresa", price:20, description:"Carne, queijo, calabresa, alface e tomate." },
  { id:111, category:"sanduiches", name:"X-Bacon", price:20, description:"Carne, queijo, bacon, alface e tomate." },
  { id:112, category:"sanduiches", name:"A Moda", price:22, description:"Carne, queijo, presunto, ovo, bacon, alface e tomate." },
  { id:113, category:"sanduiches", name:"Carne do Sol", price:23, description:"Carne do sol, queijo, alface e tomate." },
  { id:114, category:"sanduiches", name:"X-Tudo", price:30, description:"Carne, queijo, presunto, ovo, frango, calabresa, bacon, salsicha, alface e tomate." },
  { id:115, category:"sanduiches", name:"Filé Mignon", price:30, description:"Filé mignon, queijo, alface e tomate." },
  { id:116, category:"sanduiches", name:"Maminha", price:27, description:"Maminha, queijo, alface e tomate." }
];

let cart = JSON.parse(localStorage.getItem("francivanCart") || "[]");
const money = value => value.toLocaleString("pt-BR", {style:"currency", currency:"BRL"});
const save = () => localStorage.setItem("francivanCart", JSON.stringify(cart));
const total = () => cart.reduce((sum,item) => sum + item.price * item.quantity, 0);

function renderProducts(category = "todos") {
  const grid = document.querySelector("#product-grid");
  const list = category === "todos" ? products : products.filter(p => p.category === category);

  grid.innerHTML = list.map(product => {
    const isPizza = product.category === "pizzas";
    const initialPrice = isPizza ? product.sizes.media : product.price;
    const sizes = isPizza ? `
      <label class="product-size-label">
        Tamanho
        <select class="product-size" data-id="${product.id}">
          <option value="pequena">Pequena — ${money(product.sizes.pequena)}</option>
          <option value="media" selected>Média — ${money(product.sizes.media)}</option>
          <option value="grande">Grande — ${money(product.sizes.grande)}</option>
          <option value="gigante">Gigante — ${money(product.sizes.gigante)}</option>
        </select>
      </label>` : "";

    return `<article class="product-card">
      <div class="product-visual ${isPizza ? "pizza-visual" : "sandwich-visual"}"><span>${isPizza ? "PIZZA" : "SANDUÍCHE"}</span></div>
      <div class="product-body">
        <span class="product-category">${isPizza ? "PIZZA" : "SANDUÍCHE"}</span>
        <h3>${product.name}</h3>
        <p>${product.description}</p>
        ${sizes}
        <div class="product-bottom">
          <strong class="product-price" data-price-for="${product.id}">${money(initialPrice)}</strong>
          <button class="add-product" type="button" data-id="${product.id}">Adicionar +</button>
        </div>
      </div>
    </article>`;
  }).join("");

  grid.querySelectorAll(".product-size").forEach(select => {
    select.addEventListener("change", () => {
      const product = products.find(p => p.id === Number(select.dataset.id));
      grid.querySelector(`[data-price-for="${product.id}"]`).textContent = money(product.sizes[select.value]);
    });
  });

  grid.querySelectorAll(".add-product").forEach(button => {
    button.addEventListener("click", () => {
      const id = Number(button.dataset.id);
      const product = products.find(p => p.id === id);
      const select = grid.querySelector(`.product-size[data-id="${id}"]`);
      add(id, select ? select.value : null);
    });
  });
}

function add(id, size = null) {
  const product = products.find(p => p.id === id);
  if (!product) return;
  const price = size ? product.sizes[size] : product.price;
  const key = size ? `${id}-${size}` : String(id);
  const existing = cart.find(item => item.key === key);

  if (existing) existing.quantity++;
  else cart.push({key, id, name:product.name, size, price, quantity:1});

  save();
  renderCart();
  if (innerWidth <= 1000) document.querySelector("#cart-panel").classList.add("open");
}

function change(key, amount) {
  const item = cart.find(i => i.key === key);
  if (!item) return;
  item.quantity += amount;
  if (item.quantity <= 0) cart = cart.filter(i => i.key !== key);
  save();
  renderCart();
}

function renderCart() {
  const box = document.querySelector("#cart-items");
  const count = cart.reduce((sum,item) => sum + item.quantity, 0);
  document.querySelector("#cart-count").textContent = count;
  document.querySelector("#cart-count-mobile").textContent = count;
  document.querySelector("#cart-total").textContent = money(total());
  document.querySelector("#checkout").disabled = !cart.length;

  if (!cart.length) {
    box.innerHTML = '<div class="empty-cart"><span class="empty-cart-icon">＋</span><strong>Seu carrinho está vazio.</strong><p>Adicione uma pizza ou sanduíche para começar.</p></div>';
    return;
  }

  box.innerHTML = cart.map(item => `<div class="cart-item">
    <div class="cart-item-info"><strong>${item.name}</strong><small>${item.size ? `${item.size} • ` : ""}${money(item.price)} cada</small></div>
    <div class="cart-item-actions">
      <button class="qty-btn" data-key="${item.key}" data-n="-1">−</button>
      <span class="qty">${item.quantity}</span>
      <button class="qty-btn" data-key="${item.key}" data-n="1">+</button>
    </div>
    <div class="cart-item-price">${money(item.price * item.quantity)}</div>
    <button class="remove-btn" data-remove="${item.key}">Remover</button>
  </div>`).join("");

  box.querySelectorAll("[data-n]").forEach(button => button.onclick = () => change(button.dataset.key, Number(button.dataset.n)));
  box.querySelectorAll("[data-remove]").forEach(button => button.onclick = () => {
    cart = cart.filter(item => item.key !== button.dataset.remove);
    save();
    renderCart();
  });
}

function checkout() {
  if (!cart.length) return;
  const message = [
    "Boa noite! Quero fazer este pedido:", "",
    ...cart.map(item => `${item.quantity}x ${item.name}${item.size ? ` (${item.size})` : ""} — ${money(item.price * item.quantity)}`),
    "", `Total estimado: ${money(total())}`, "",
    "Pode confirmar disponibilidade, valor final e entrega?"
  ].join("\n");
  window.open(`https://wa.me/558587812719?text=${encodeURIComponent(message)}`, "_blank", "noopener");
}

document.addEventListener("DOMContentLoaded", () => {
  renderProducts();
  renderCart();

  document.querySelectorAll(".category-tab").forEach(tab => tab.onclick = () => {
    document.querySelectorAll(".category-tab").forEach(item => item.classList.remove("active"));
    tab.classList.add("active");
    renderProducts(tab.dataset.category);
  });

  const panel = document.querySelector("#cart-panel");
  document.querySelector("#open-cart").onclick = () => panel.classList.add("open");
  document.querySelector("#open-cart-mobile").onclick = () => panel.classList.add("open");
  document.querySelector("#close-cart").onclick = () => panel.classList.remove("open");
  document.querySelector("#checkout").onclick = checkout;

  const toggle = document.querySelector(".menu-toggle");
  const nav = document.querySelector(".mobile-nav");
  toggle.onclick = () => {
    const open = nav.classList.toggle("open");
    toggle.setAttribute("aria-expanded", open);
  };

  document.querySelector("#year").textContent = new Date().getFullYear();
});
