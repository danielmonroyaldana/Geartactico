// =========================================
// CONFIGURACIÓN GENERAL
// =========================================
const whatsappNumber = "573223741809";
const PLACEHOLDER = "assets/images/placeholder.svg";
const colorSwatches = {
  Negro: "#111111",
  Verde: "#4c5b53",
  Camuflado: "linear-gradient(135deg,#526248 0 33%,#b19b73 33% 66%,#303b30 66%)",
  Arena: "#cbb99a"
};

// Categorías (id = valor usado en products, label = texto visible, icon = trazos SVG)
const categories = [
  { id: "morrales", label: "MORRALES", icon: '<path d="M19 12h10a6 6 0 0 1 6 6v18a6 6 0 0 1-6 6H19a6 6 0 0 1-6-6V18a6 6 0 0 1 6-6z"/><path d="M22 12V8h4v4M20 22h8M20 27h8"/>' },
  { id: "tulas", label: "TULAS", icon: '<path d="M18 15l3-6h6l3 6M15 16h18l4 7v15a4 4 0 0 1-4 4H14a4 4 0 0 1-4-4V23z"/><path d="M15 16l-5 7h28l-5-7M18 27v9M30 27v9"/>' },
  { id: "chalecos", label: "CHALECOS", icon: '<path d="M18 8l6 4 6-4 8 5-4 11v18H14V24l-4-11z"/><path d="M18 8v13l6 4 6-4V8M24 25v17M14 25h5M29 25h5"/>' },
  { id: "pecheras", label: "PECHERAS", icon: '<path d="M17 7l7 4 7-4 8 6-3 8-2 19H14l-2-19-3-8z"/><path d="M17 7l3 11h8l3-11M24 18v22M14 25h20M16 25v10h6V25M26 25v10h6V25"/>' },
  { id: "botas", label: "BOTAS", icon: '<path d="M15 6h13v16c0 4 2 7 6 10l8 5v4H7v-4l7-3c1-1 1-3 1-6V6z"/><path d="M19 11h7M19 15h7M19 19h7M16 25h13M8 38h34"/>' },
  { id: "accesorios", label: "ACCESORIOS Y OTROS", icon: '<path d="M14 11h20v31H14z"/><path d="M19 11V7h10v4M19 17h10M19 22h10M19 27h6M34 38l6 6"/><circle cx="30" cy="34" r="5"/>' },
  { id: "forros-cantimplora", label: "FORROS DE CANTIMPLORA", icon: '<path d="M18 8h12v32H18z"/><path d="M22 8V4h4v4M18 16h12M18 22h12M18 28h12"/>' }
];

// =========================================
// CATÁLOGO DE PRODUCTOS  (DATOS DE DEMOSTRACIÓN: reemplazar)
// Campos opcionales: oldPrice, badge, colors, gallery (hasta 3 fotos extra: {src, label}), video (ruta o {src, label}), features, material, dimensions, capacity
// =========================================
const products = [
  { id: 1, name: "Morral de campaña", category: "morrales", price: 149900, image: PLACEHOLDER, badge: "NUEVO", description: "Morral robusto para uso diario y recorridos extendidos.", colors: ["Negro", "Verde"], stock: true, material: "Poliéster 600D", dimensions: "45 x 28 x 18 cm", capacity: "30 L", features: ["Sistema ergonómico", "Compartimiento principal", "Malla lateral"] },
  { id: 2, name: "Morral de campaña — norma técnica", category: "morrales", price: 169900, image: PLACEHOLDER, description: "Modelo técnico con mejor distribución y resistencia.", colors: ["Negro", "Camuflado"], stock: true, material: "Nailon 1000D", dimensions: "48 x 30 x 20 cm", capacity: "35 L", features: ["Costuras reforzadas", "Panel trasero acolchado", "Canal para botella"] },
  { id: 3, name: "Morral de campaña — sencillo", category: "morrales", price: 129900, image: PLACEHOLDER, description: "Diseño minimalista para movilidad y confort.", colors: ["Negro", "Verde"], stock: true, material: "Poliéster", dimensions: "44 x 27 x 17 cm", capacity: "28 L", features: ["Fácil acceso", "Cintas de ajuste", "Ligero"] },
  { id: 4, name: "Morral de campaña — mediano", category: "morrales", price: 159900, image: PLACEHOLDER, description: "Tamaño ideal para recorridos medianos.", colors: ["Negro", "Arena"], stock: true, material: "Poliéster 600D", dimensions: "50 x 32 x 22 cm", capacity: "38 L", features: ["Bolsillo externo", "Cadera acolchada", "Sistema modular"] },
  { id: 5, name: "Morral de campaña — crucero", category: "morrales", price: 179900, image: PLACEHOLDER, badge: "DESTACADO", description: "Diseñado para desplazamientos y carga moderada.", colors: ["Negro", "Verde", "Camuflado"], stock: true, material: "Nailon 600D", dimensions: "52 x 35 x 22 cm", capacity: "40 L", features: ["Sistema de carga por torso", "Cierres reforzados", "Bolsillos laterales"] },
  { id: 6, name: "Morral de campaña — pequeño", category: "morrales", price: 119900, image: PLACEHOLDER, description: "Compacto y funcional para salidas rápidas.", colors: ["Negro", "Verde"], stock: true, material: "Poliéster", dimensions: "38 x 24 x 16 cm", capacity: "22 L", features: ["Ligereza", "Sistema de compresión", "Porta accesorios"] },
  { id: 7, name: "Morral de 30 L", category: "morrales", price: 139900, image: PLACEHOLDER, description: "Capacidad equilibrada para trabajo y ocio.", colors: ["Negro", "Verde", "Arena"], stock: true, material: "Poliéster 500D", dimensions: "44 x 26 x 18 cm", capacity: "30 L", features: ["Compartimento interior", "Correas ajustables", "Panel trasero ventilado"] },
  { id: 8, name: "Morral de 40 L", category: "morrales", price: 169900, image: PLACEHOLDER, description: "Capacidad para mayor equipaje y mayor duración.", colors: ["Negro", "Verde"], stock: true, material: "Poliéster 600D", dimensions: "50 x 30 x 22 cm", capacity: "40 L", features: ["Cinturón para cadera", "Cierre reforzado", "Bolsillo para botella"] },
  { id: 9, name: "Morral de 50 L", category: "morrales", price: 199900, image: PLACEHOLDER, badge: "NUEVO", description: "Gran capacidad para viajes y logística.", colors: ["Negro", "Camuflado"], stock: true, material: "Poliéster 600D", dimensions: "56 x 32 x 24 cm", capacity: "50 L", features: ["Compartimientos múltiples", "Sistema de transporte seguro", "Ajuste de hombros"] },
  { id: 10, name: "Morral de aseo", category: "morrales", price: 89900, image: PLACEHOLDER, description: "Ideal para artículos y accesorios personales.", colors: ["Negro", "Verde"], stock: true, material: "Poliéster", dimensions: "32 x 20 x 14 cm", capacity: "12 L", features: ["Bolsillo interno", "Acceso rápido", "Corrección de tamaño"] },
  { id: 11, name: "Morral de aseo — tipo Toto", category: "morrales", price: 94900, image: PLACEHOLDER, description: "Diseño práctico para aseo y accesorios.", colors: ["Negro", "Arena"], stock: true, material: "Poliéster", dimensions: "33 x 22 x 15 cm", capacity: "13 L", features: ["Asa reforzada", "Cierre de seguridad", "Compartimento auxiliar"] },
  { id: 12, name: "Morral de aseo — acolchado", category: "morrales", price: 109900, image: PLACEHOLDER, description: "Acolchado extra para mayor protección de elementos.", colors: ["Negro", "Verde"], stock: true, material: "Poliéster acolchado", dimensions: "34 x 22 x 16 cm", capacity: "14 L", features: ["Funda acolchada", "Bolsillo externo", "Ajuste ergonómico"] },
  { id: 13, name: "Morral de aseo mediano — abre todo", category: "morrales", price: 124900, image: PLACEHOLDER, description: "Apertura total para una organización rápida.", colors: ["Negro", "Verde", "Camuflado"], stock: true, material: "Poliéster 600D", dimensions: "38 x 25 x 18 cm", capacity: "18 L", features: ["Apertura completa", "Variedad de compartidores", "Asa de transporte"] },
  { id: 14, name: "Tula de incorporación", category: "tulas", price: 39900, image: PLACEHOLDER, showColorSelector: true, description: "Tula ligera y práctica para uso de campo y desplazamientos diarios.", colors: ["Negro", "Verde"], stock: true, material: "Tela resistente", dimensions: "28 x 18 x 8 cm", capacity: "4 L", features: ["Uso diario", "Cinturón ajustable", "Ligera", "Color configurable"] },
  { id: 15, name: "Tula de recuperación", category: "tulas", price: 44900, image: PLACEHOLDER, badge: "NUEVO", description: "Tula de recuperación con almacenamiento práctico.", stock: true, material: "Nailon", dimensions: "30 x 20 x 10 cm", capacity: "5 L", features: ["Gran acceso", "Bolsillo lateral", "Uso versátil"] },
  { id: 17, name: "Chaleco arnés", category: "chalecos", price: 89900, image: PLACEHOLDER, description: "Chaleco de carga y acceso rápido.", colors: ["Negro", "Verde"], stock: true, material: "Nylon", dimensions: "Talla ajustable", capacity: "—", features: ["Arnés ergonómico", "Puntos de sujeción", "Malla ventilada"] },
  { id: 18, name: "Chaleco tejido de plástico — tipo MOL", category: "chalecos", price: 109900, image: PLACEHOLDER, description: "Chaleco reforzado con tejido resistente para uso intensivo.", colors: ["Verde"], stock: true, material: "Plástico tejido", dimensions: "Talla ajustable", capacity: "—", features: ["Cinturón reforzado", "Bolsillos frontales", "Diseño robusto"] },
  { id: 19, name: "Chaleco 511", category: "chalecos", price: 119900, image: PLACEHOLDER, badge: "DESTACADO", description: "Modelo de alta resistencia y amplio campo de uso.", colors: ["Negro", "Verde"], stock: true, material: "Nailon", dimensions: "Talla ajustable", capacity: "—", features: ["Mayor movilidad", "Puntos de amarre", "Sistema modular"] },
  { id: 20, name: "Chaleco de policía", category: "chalecos", price: 139900, image: PLACEHOLDER, description: "Chaleco funcional con organización y durabilidad.", colors: ["Negro", "Verde"], stock: true, material: "Poliéster", dimensions: "Talla ajustable", capacity: "—", features: ["Paneles de carga", "Seguro durable", "Cables y bolsillos"] },
  { id: 21, name: "Chaleco de vigilancia", category: "chalecos", price: 99900, image: PLACEHOLDER, description: "Chaleco de control y acceso con materiales resistentes.", colors: ["Verde", "Negro"], stock: true, material: "Poliéster", dimensions: "Talla ajustable", capacity: "—", features: ["Versatilidad", "Bolsillos múltiples", "Ajuste rápido"] },
  { id: 22, name: "Pechera trenzada", category: "pecheras", price: 89900, image: PLACEHOLDER, description: "Pechera resistente con textura trenzada.", colors: ["Negro", "Verde"], stock: true, material: "Tela trenzada", dimensions: "Talla ajustable", capacity: "—", features: ["Resistencia", "Ajuste cómodo", "Uso exterior"] },
  { id: 23, name: "Pechera de plástico", category: "pecheras", price: 84900, image: PLACEHOLDER, description: "Protección ligera para uso cotidiano y de campo.", colors: ["Negro", "Arena"], stock: true, material: "Plástico", dimensions: "Talla ajustable", capacity: "—", features: ["Impermeable", "Ligera", "Bolsillos laterales"] },
  { id: 24, name: "Pechera con M1", category: "pecheras", price: 109900, image: PLACEHOLDER, badge: "NUEVO", description: "Modelo con sistema M1 y mejor distribución.", colors: ["Verde", "Negro"], stock: true, material: "Nailon 500D", dimensions: "Talla ajustable", capacity: "—", features: ["Sistema M1", "Protección", "Transpirabilidad"] },
  { id: 25, name: "Pechera sencilla", category: "pecheras", price: 79900, image: PLACEHOLDER, description: "Pechera funcional y práctica para uso diario.", colors: ["Negro", "Verde"], stock: true, material: "Nylon", dimensions: "Talla ajustable", capacity: "—", features: ["Simple y sólida", "Ajuste seguro", "Uso versátil"] },
  { id: 26, name: "Arnés", category: "accesorios", price: 74900, image: PLACEHOLDER, description: "Arnés cómodo y resistente para equipos y accesorios.", colors: ["Negro", "Verde"], stock: true, material: "Poliéster", dimensions: "Talla ajustable", capacity: "—", features: ["Ajuste reforzado", "Distribución de peso", "Resistente"] },
  { id: 27, name: "Porta proveedores", category: "accesorios", price: 64900, image: PLACEHOLDER, description: "Accesorio para transporte de útiles y equipos.", colors: ["Negro", "Arena"], stock: true, material: "Nailon", dimensions: "30 x 20 x 10 cm", capacity: "8 L", features: ["Bolsillo seguro", "Ajuste cómodo", "Versátil"] },
  { id: 28, name: "Porta celulares", category: "accesorios", price: 29900, image: PLACEHOLDER, description: "Soporte compacto para llevar el celular con seguridad.", colors: ["Negro", "Verde"], stock: true, material: "Poliéster", dimensions: "18 x 10 x 4 cm", capacity: "1 L", features: ["Protección", "Fácil acceso", "Ligero"] },
  { id: 29, name: "Canguro", category: "accesorios", price: 59900, image: PLACEHOLDER, description: "Accesorio de seguridad y portabilidad para uso diario.", colors: ["Negro", "Verde"], stock: true, material: "Nailon", dimensions: "35 x 25 x 12 cm", capacity: "10 L", features: ["Ajuste cómodo", "Transporte seguro", "Uso práctico"] },
  { id: 30, name: "Correa N.º 4 de policía — sin telas", category: "accesorios", price: 69900, image: PLACEHOLDER, description: "Correa de alta resistencia para uso profesional.", colors: ["Negro", "Verde"], stock: true, material: "Tela reforzada", dimensions: "Talla ajustable", capacity: "—", features: ["Resistencia", "Durabilidad", "Fijación sólida"] },
  { id: 31, name: "Hamaca", category: "accesorios", price: 119900, image: PLACEHOLDER, description: "Hamaca ligera para descanso y campo.", colors: ["Verde", "Negro"], stock: true, material: "Nylon", dimensions: "220 x 120 cm", capacity: "—", features: ["Ligera", "Fácil de instalar", "Uso exterior"] },
  { id: 32, name: "Riñonera", category: "accesorios", price: 69900, image: PLACEHOLDER, description: "Riñonera ligera con acceso rápido.", colors: ["Negro", "Verde"], stock: true, material: "Nailon", dimensions: "24 x 14 x 8 cm", capacity: "5 L", features: ["Portabilidad", "Acceso rápido", "Cómodo"] },
  { id: 33, name: "Porta vestidos", category: "accesorios", price: 89900, image: PLACEHOLDER, description: "Porta vestidos para transporte seguro y ordenado.", colors: ["Negro", "Arena"], stock: true, material: "Poliéster", dimensions: "60 x 28 x 18 cm", capacity: "18 L", features: ["Apertura amplia", "Protección", "Fácil traslado"] },
  { id: 34, name: "Chapuza Bianchi", category: "accesorios", price: 65900, image: PLACEHOLDER, description: "Accesorio adaptable para protección y soporte.", colors: ["Negro", "Verde"], stock: true, material: "Tela resistente", dimensions: "Talla ajustable", capacity: "—", features: ["Uso versátil", "Ajuste cómodo", "Resistente"] },
  { id: 35, name: "Chapuza oreja de perro", category: "accesorios", price: 69900, image: PLACEHOLDER, description: "Modelo con forma funcional y diseño resistente.", colors: ["Negro", "Camuflado"], stock: true, material: "Nylon", dimensions: "Talla estándar", capacity: "—", features: ["Diseño práctico", "Ajuste seguro", "Ligero"] },
  { id: 36, name: "Chapuza de plataforma", category: "accesorios", price: 79900, image: PLACEHOLDER, description: "Chapuza robusta con apoyo para uso práctico.", colors: ["Verde", "Negro"], stock: true, material: "Poliéster reforzado", dimensions: "Talla ajustable", capacity: "—", features: ["Ajuste funcional", "Resistente", "Uso técnico"] },
  { id: 37, name: "Portasables", category: "accesorios", price: 54900, image: PLACEHOLDER, description: "Porta útiles para trabajo y recorridos.", colors: ["Negro", "Verde"], stock: true, material: "Nylon", dimensions: "30 x 20 x 10 cm", capacity: "7 L", features: ["Bolsillo interno", "Asa de transporte", "Ligero"] },
  { id: 38, name: "Portakepis hombre", category: "accesorios", price: 59000, image: PLACEHOLDER, description: "Accesorio de estilo y funcionalidad para uso cotidiano.", colors: ["Negro", "Verde"], stock: true, material: "Poliéster", dimensions: "22 x 18 x 10 cm", capacity: "4 L", features: ["Fácil de llevar", "Ajuste seguro", "Práctico"] },
  { id: 39, name: "Portakepis dama", category: "accesorios", price: 59000, image: PLACEHOLDER, description: "Modelo para mujer con diseño cómodo y práctico.", colors: ["Negro", "Arena"], stock: true, material: "Poliéster", dimensions: "22 x 18 x 10 cm", capacity: "4 L", features: ["Diseño cómodo", "Variación de color", "Portabilidad"] },
  { id: 40, name: "Forro de cantimplora — tipo americano", category: "forros-cantimplora", price: 29900, image: PLACEHOLDER, description: "Forro para cantimplora tipo americano con ajuste seguro.", colors: ["Negro", "Verde"], stock: true, material: "Nylon", dimensions: "24 x 10 cm", capacity: "1 L", features: ["Fácil transporte", "Ajuste seguro", "Protector"] },
  { id: 41, name: "Forro de cantimplora — sencillo", category: "forros-cantimplora", price: 24900, image: PLACEHOLDER, description: "Forro básico para cantimplora con diseño funcional.", colors: ["Negro", "Arena"], stock: true, material: "Tela resistente", dimensions: "20 x 9 cm", capacity: "1 L", features: ["Ligerísimo", "Protección básica", "Ajuste sencillo"] }
];

// =========================================
// UTILIDADES
// =========================================
const $ = (s) => document.querySelector(s);
const money = (n) => "$" + n.toLocaleString("es-CO");
const discount = (p) => p.oldPrice ? Math.round((1 - p.price / p.oldPrice) * 100) : 0;
const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
const imgTag = (src, alt) => `<img loading="lazy" decoding="async" draggable="false" src="${esc(src)}" alt="${esc(alt)}" onerror="this.onerror=null;this.src='${PLACEHOLDER}'">`;
const byId = (id) => products.find((p) => p.id === Number(id));
function toast(msg) { const t = $("#toast"); t.textContent = msg; t.classList.add("show"); clearTimeout(t._t); t._t = setTimeout(() => t.classList.remove("show"), 2200); }

const revealObserver = "IntersectionObserver" in window && !window.matchMedia("(prefers-reduced-motion: reduce)").matches
  ? new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -32px 0px" })
  : null;

function observeReveals(root = document) {
  if (!revealObserver) return;
  root.querySelectorAll(".section .container > h2, .cat, .card, .why-item, .life figure, .narrow > p, details")
    .forEach((element, index) => {
      if (element.classList.contains("reveal")) return;
      element.classList.add("reveal");
      element.style.setProperty("--reveal-delay", `${Math.min(index * 70, 280)}ms`);
      revealObserver.observe(element);
    });
}

// =========================================
// RENDER DE TARJETAS
// =========================================
function productHasColorSelector(p) {
  return Boolean(p.showColorSelector || p.name === "Tula de incorporación");
}

function cardHTML(p) {
  const d = discount(p);
  const colors = productHasColorSelector(p) && p.colors && p.colors.length
    ? `<div class="colors card-colors" role="group" aria-label="Selecciona un color">${p.colors.map((c, i) => `<label title="${esc(c)}"><input type="radio" name="color-${p.id}" value="${esc(c)}" aria-label="${esc(c)}" ${i === 0 ? "checked" : ""}><span aria-hidden="true" style="--swatch-color:${Object.prototype.hasOwnProperty.call(colorSwatches, c) ? colorSwatches[c] : "#d9d9d9"}"></span></label>`).join("")}</div>` : "";
  return `<article class="card" data-id="${p.id}">
    <button class="card-img" data-action="open" aria-label="Ver detalle de ${esc(p.name)}">${imgTag(p.image, p.name)}${p.badge ? `<span class="badge ${p.badge === "OFERTA" ? "off" : ""}">${esc(p.badge)}</span>` : ""}</button>
    <div class="card-body"><h3>${esc(p.name)}</h3>
    <p class="price">${money(p.price)}${p.oldPrice ? `<s>${money(p.oldPrice)}</s>` : ""}</p>${p.oldPrice ? `<p class="saving">Ahorras ${money(p.oldPrice - p.price)}</p>` : ""}${colors}
    <div class="card-btns">${p.stock ? `<button class="btn btn-dark" data-action="add">Agregar al carrito</button>` : `<span class="soldout">Agotado</span>`}</div></div></article>`;
}
const renderList = (el, list) => {
  el.innerHTML = list.length ? list.map(cardHTML).join("") : '<div class="empty-state"><p>No encontramos productos con esos filtros.</p></div>';
  observeReveals(el);
};

// =========================================
// CATEGORÍAS (render + clic)
// =========================================
let activeCategory = "";

function renderCategories() {
  $("#catGrid").innerHTML = categories.map((c) => `<a class="cat" href="#catalogo" data-cat="${c.id}"><span class="cat-icon"><svg viewBox="0 0 48 48" aria-hidden="true">${c.icon}</svg></span><span class="cat-label">${esc(c.label)}</span></a>`).join("");
  observeReveals($("#catGrid"));
  $("#footCats").innerHTML = categories.map((c) => `<a href="#catalogo" data-cat="${c.id}">${esc(c.label)}</a>`).join("");
}

function toggleCatalogBackButton() {
  const button = $("#catalogBackBtn");
  if (button) button.hidden = !activeCategory;
}

document.addEventListener("click", (e) => {
  const a = e.target.closest("[data-cat]"); if (!a) return;
  activeCategory = a.dataset.cat || "";
  $("#catalogo").scrollIntoView({ behavior: "smooth", block: "start" });
  applyFilters();
});

// =========================================
// FILTROS Y BÚSQUEDA
// =========================================
function applyFilters() {
  const q = ($("#fSearch")?.value || "").trim().toLowerCase();
  const sort = $("#fSort")?.value || "";
  const list = products.filter((p) => (!q || (p.name + " " + p.description).toLowerCase().includes(q)) && (!activeCategory || p.category === activeCategory));
  if (sort === "asc") list.sort((a, b) => a.price - b.price);
  if (sort === "desc") list.sort((a, b) => b.price - a.price);
  if (sort === "new") list.sort((a, b) => (b.badge === "NUEVO") - (a.badge === "NUEVO") || b.id - a.id);
  $("#resultCount").textContent = list.length + " producto(s)";
  renderList($("#catalogGrid"), list);
  toggleCatalogBackButton();
}
["fSearch", "fSort"].forEach((id) => $("#" + id)?.addEventListener("input", applyFilters));
$("#catalogBackBtn")?.addEventListener("click", () => {
  activeCategory = "";
  applyFilters();
});
$("#searchBtn").addEventListener("click", () => { location.hash = "#catalogo"; setTimeout(() => $("#fSearch").focus(), 400); });

// =========================================
// CARRITO
// =========================================
let cart = JSON.parse(localStorage.getItem("cart") || "[]"); // [{id,color,qty}]
const saveCart = () => localStorage.setItem("cart", JSON.stringify(cart));

function addToCart(id, colors, qty = 1) {
  const selected = Array.isArray(colors) ? colors : [colors];
  if (!selected.length) return false;
  selected.forEach((color) => {
    const line = cart.find((l) => l.id === id && l.color === color);
    line ? (line.qty += qty) : cart.push({ id, color, qty });
  });
  saveCart(); renderCart(); toast(selected.length > 1 ? "Productos agregados al carrito" : "Producto agregado al carrito");
  const c = $("#cartCount"); c.classList.remove("bump"); void c.offsetWidth; c.classList.add("bump");
  return true;
}
function cartTotal() { return cart.reduce((s, l) => s + byId(l.id).price * l.qty, 0); }
function renderCart() {
  cart = cart.filter((l) => byId(l.id));
  $("#cartCount").textContent = cart.reduce((s, l) => s + l.qty, 0);
  $("#cartTotal").textContent = money(cartTotal());
  $("#cartItems").innerHTML = cart.length ? cart.map((l, i) => { const p = byId(l.id);
    return `<div class="item" data-i="${i}">${imgTag(p.image, p.name)}<div><strong>${esc(p.name)}</strong><br><small>${l.color ? esc(l.color) + " · " : ""}${money(p.price)}</small>
    <button class="rm" data-act="rm">Eliminar</button></div><div class="qty"><button data-act="dec" aria-label="Disminuir">−</button><span>${l.qty}</span><button data-act="inc" aria-label="Aumentar">+</button></div></div>`; }).join("") : "<p>Tu carrito está vacío.</p>";
}
$("#cartItems").addEventListener("click", (e) => {
  const b = e.target.closest("[data-act]"), it = e.target.closest(".item"); if (!b || !it) return;
  const l = cart[it.dataset.i];
  if (b.dataset.act === "inc") l.qty++;
  if (b.dataset.act === "dec") l.qty--;
  if (b.dataset.act === "rm" || l.qty < 1) cart.splice(it.dataset.i, 1);
  saveCart(); renderCart();
});
$("#clearCart").addEventListener("click", () => { cart = []; saveCart(); renderCart(); });
const toggleCart = (open) => { $("#cart").classList.toggle("open", open); $("#overlay").classList.toggle("show", open); $("#cart").setAttribute("aria-hidden", !open); };
$("#cartBtn").addEventListener("click", () => toggleCart(true));
$("#cartClose").addEventListener("click", () => toggleCart(false));
$("#overlay").addEventListener("click", () => toggleCart(false));

// =========================================
// WHATSAPP
// =========================================
const waLink = (text) => `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`;
document.querySelectorAll("[data-wa]").forEach((a) => (a.href = waLink(a.dataset.wa)));
function orderMessage(lines) {
  const body = lines.map(({ p, qty, color }) => `• ${p.name}${color ? " (" + color + ")" : ""}\nCantidad: ${qty}\nPrecio: ${money(p.price * qty)}`).join("\n\n");
  const total = lines.reduce((s, { p, qty }) => s + p.price * qty, 0);
  return `Hola, quiero realizar el siguiente pedido:\n\n${body}\n\nTotal: ${money(total)}\n\nQuisiera confirmar disponibilidad, costo de envío y métodos de pago.`;
}
const openWA = (text) => window.open(waLink(text), "_blank", "noopener");
$("#checkout").addEventListener("click", () => {
  if (!cart.length) return toast("Tu carrito está vacío");
  openWA(orderMessage(cart.map((l) => ({ p: byId(l.id), qty: l.qty, color: l.color }))));
});

// =========================================
// ACCIONES DE TARJETAS Y MODAL DE PRODUCTO
// =========================================
const selectedColors = (root, product) => {
  if (!productHasColorSelector(product)) return [""];
  const inputs = root.querySelectorAll(".colors input");
  if (inputs.length) return Array.from(inputs).filter((input) => input.checked).map((input) => input.value);
  return (product.colors || []).slice(0, 1);
};
const orderLines = (p, colors, qty = 1) => colors.map((color) => ({ p, qty, color }));
document.addEventListener("click", (e) => {
  const b = e.target.closest("[data-action]"), card = e.target.closest(".card"); if (!b || !card) return;
  const p = byId(card.dataset.id), colors = selectedColors(card, p);
  if ((b.dataset.action === "add" || b.dataset.action === "buy") && !colors.length) return toast("Selecciona al menos un color");
  if (b.dataset.action === "add") addToCart(p.id, colors);
  if (b.dataset.action === "buy") openWA(orderMessage(orderLines(p, colors)));
  if (b.dataset.action === "open") openModal(p);
});
function openModal(p) {
  const d = discount(p);
  const galleryViews = (p.gallery || []).slice(0, 3).map((view, index) => typeof view === "string"
    ? { src: view, label: ["Trasera", "Lado izquierdo", "Lado derecho"][index] }
    : { src: view.src, label: view.label || ["Trasera", "Lado izquierdo", "Lado derecho"][index] });
  const views = [
    { src: p.image, label: "Frente" },
    ...galleryViews
  ];
  while (views.length < 4) views.push({ src: "", label: `Foto ${views.length + 1}` });
  const video = typeof p.video === "string" ? { src: p.video, label: "Video" } : p.video;
  const mediaButtons = [
    ...views.map((view, index) => view.src
      ? `<button class="media-thumb${index === 0 ? " is-active" : ""}" type="button" data-media-type="image" data-media-src="${esc(view.src)}" data-media-label="${esc(view.label)}" aria-label="Ver ${esc(view.label)}" aria-pressed="${index === 0}">${imgTag(view.src, `${p.name} - ${view.label}`)}</button>`
      : `<button class="media-thumb media-thumb-empty" type="button" disabled aria-label="${esc(view.label)} pendiente"><svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="2"></rect><circle cx="8.5" cy="8.5" r="1.5"></circle><path d="m21 15-5-5L5 21"></path></svg></button>`),
    ...(video?.src ? [`<button class="media-thumb media-video-thumb" type="button" data-media-type="video" data-media-src="${esc(video.src)}" data-media-label="${esc(video.label || "Video")}" aria-label="Ver ${esc(video.label || "Video")}"><span aria-hidden="true">▶</span><span>${esc(video.label || "Video")}</span></button>`] : [])
  ].join("");
  $("#modalBox").innerHTML = `<button class="icon-btn close" id="mClose" aria-label="Cerrar">✕</button><div class="modal-gallery"><div class="product-media">${imgTag(p.image, `${p.name} - Frente`).replace("<img", '<img id="mMain"')}<video id="mVideo" controls playsinline preload="metadata" hidden></video></div><div class="thumbs" aria-label="Fotos y video del producto">${mediaButtons}</div></div>
  <div class="modal-info"><h2>${esc(p.name)}</h2><p class="price">${money(p.price)}${p.oldPrice ? `<s>${money(p.oldPrice)}</s><em>-${d}%</em>` : ""}</p><p>${esc(p.description)}</p>
  <ul>${(p.features || []).map((f) => `<li>${esc(f)}</li>`).join("")}</ul>
  <p><strong>Material:</strong> ${esc(p.material || "—")}<br><strong>Dimensiones:</strong> ${esc(p.dimensions || "—")}<br><strong>Capacidad:</strong> ${esc(p.capacity || "—")}</p>
  ${productHasColorSelector(p) && p.colors ? `<div class="modal-color-group"><strong>Color</strong><div class="colors card-colors" id="mColors" role="group" aria-label="Selecciona un color">${p.colors.map((c, i) => `<label title="${esc(c)}"><input type="radio" name="modal-color-${p.id}" value="${esc(c)}" aria-label="${esc(c)}" ${i === 0 ? "checked" : ""}><span aria-hidden="true" style="--swatch-color:${Object.prototype.hasOwnProperty.call(colorSwatches, c) ? colorSwatches[c] : "#d9d9d9"}"></span></label>`).join("")}</div></div>` : ""}
  <p>${p.stock ? "✅ Disponible" : '<span class="soldout">Agotado</span>'}</p>
  <div class="qty" style="width:max-content"><button id="mDec" aria-label="Disminuir">−</button><span id="mQty">1</span><button id="mInc" aria-label="Aumentar">+</button></div>
  ${p.stock ? `<div class="modal-actions"><button class="btn btn-dark" id="mAdd">Agregar al carrito</button><button class="btn btn-wa" id="mBuy">Compra</button></div>` : ""}</div>`;
  const m = $("#modal"); m.hidden = false; document.body.classList.add("modal-open"); let qty = 1;
  const col = () => selectedColors($("#modalBox"), p);
  $("#mClose").onclick = closeModal; $("#mClose").focus();
  $("#mInc").onclick = () => ($("#mQty").textContent = ++qty);
  $("#mDec").onclick = () => ($("#mQty").textContent = qty = Math.max(1, qty - 1));
  if (p.stock) {
    $("#mAdd").onclick = () => {
      const colors = col();
      if (!colors.length) return toast("Selecciona al menos un color");
      addToCart(p.id, colors, qty); closeModal(); toggleCart(true);
    };
    $("#mBuy").onclick = () => {
      const colors = col();
      if (!colors.length) return toast("Selecciona al menos un color");
      openWA(orderMessage(orderLines(p, colors, qty)));
    };
  }
  const mainImage = $("#mMain");
  const mainVideo = $("#mVideo");
  document.querySelectorAll("[data-media-type]").forEach((button) => {
    button.addEventListener("click", () => {
      document.querySelectorAll("[data-media-type]").forEach((thumb) => {
        const active = thumb === button;
        thumb.classList.toggle("is-active", active);
        thumb.setAttribute("aria-pressed", String(active));
      });
      if (button.dataset.mediaType === "video") {
        mainImage.hidden = true;
        mainVideo.hidden = false;
        mainVideo.src = button.dataset.mediaSrc;
        mainVideo.load();
      } else {
        mainVideo.pause();
        mainVideo.removeAttribute("src");
        mainVideo.load();
        mainVideo.hidden = true;
        mainImage.src = button.dataset.mediaSrc;
        mainImage.alt = `${p.name} - ${button.dataset.mediaLabel}`;
        mainImage.hidden = false;
      }
    });
  });
}
const closeModal = () => {
  $("#modal").hidden = true;
  document.body.classList.remove("modal-open");
};
$("#modal").addEventListener("click", (e) => { if (e.target.id === "modal") closeModal(); });
document.addEventListener("keydown", (e) => { if (e.key === "Escape") { closeModal(); toggleCart(false); } });

// =========================================
// MENÚ MÓVIL
// =========================================
$("#burger").addEventListener("click", () => { const o = $("#menu").classList.toggle("open"); $("#burger").setAttribute("aria-expanded", o); });
$("#menu").addEventListener("click", (e) => { if (e.target.tagName === "A") $("#menu").classList.remove("open"); });

// =========================================
// INICIO
// =========================================
renderCategories();
const initializeProductCarousel = (trackSelector, viewportSelector, indicatorsSelector) => {
  const featuredTrack = $(trackSelector);
  const featuredViewport = $(viewportSelector);
  const featuredOriginals = Array.from(featuredTrack.children);
  if (featuredOriginals.length <= 1) return;
  const indicators = $(indicatorsSelector);
  indicators.replaceChildren(...featuredOriginals.map(() => {
    const segment = document.createElement("span");
    segment.className = "carousel-indicator";
    return segment;
  }));

  const cloneCard = (card) => {
    const clone = card.cloneNode(true);
    clone.classList.remove("is-featured", "is-adjacent", "reveal");
    clone.classList.add("featured-clone");
    clone.classList.add("is-visible");
    clone.setAttribute("aria-hidden", "true");
    clone.inert = true;
    clone.querySelectorAll("button, input, a").forEach((control) => control.setAttribute("tabindex", "-1"));
    return clone;
  };
  const cloneSet = () => featuredOriginals.map(cloneCard);
  const leadingClones = document.createDocumentFragment();
  const trailingClones = document.createDocumentFragment();
  for (let set = 0; set < 2; set++) {
    cloneSet().forEach((clone) => leadingClones.append(clone));
    cloneSet().forEach((clone) => trailingClones.append(clone));
  }
  featuredTrack.prepend(leadingClones);
  featuredTrack.append(trailingClones);

  let featuredIndex = 0;
  let featuredSnapTimer;
  let featuredPosition = featuredOriginals.length * 2;
  let dragState = null;
  let suppressSwipeClick = false;
  let suppressSwipeClickTimer;
  const allFeaturedCards = () => Array.from(featuredTrack.children);
  const centerFeaturedCard = (position, animate = true) => {
    const cards = allFeaturedCards();
    const activeCard = cards[position];
    if (!activeCard) return;
    featuredPosition = position;
    featuredTrack.style.transition = animate ? "" : "none";
    const cardTransitions = animate ? null : cards.map((card) => card.style.transition);
    if (!animate) cards.forEach((card) => { card.style.transition = "none"; });
    const cardOffset = activeCard.getBoundingClientRect().left - featuredTrack.getBoundingClientRect().left;
    const offset = featuredViewport.clientWidth / 2 - cardOffset - activeCard.offsetWidth / 2;
    featuredTrack.style.transform = `translateX(${offset}px)`;
    Array.from(indicators.children).forEach((indicator, index) => {
      indicator.classList.toggle("is-active", index === featuredIndex);
    });
    cards.forEach((card, index) => {
      const isActive = index === position;
      const isClone = card.classList.contains("featured-clone");
      card.classList.toggle("is-featured", isActive);
      card.classList.toggle("is-adjacent", Math.abs(index - position) === 1);
      if (isClone) {
        card.inert = !isActive;
        card.setAttribute("aria-hidden", String(!isActive));
        card.querySelectorAll("button, input, a").forEach((control) => {
          control.tabIndex = isActive ? 0 : -1;
        });
      }
    });
    if (!animate) {
      featuredTrack.offsetHeight;
      cards.forEach((card) => { void card.offsetHeight; });
      cards.forEach((card, index) => { card.style.transition = cardTransitions[index]; });
      featuredTrack.style.transition = "";
    }
  };
  featuredTrack.addEventListener("transitionend", (event) => {
    if (event.target !== featuredTrack || event.propertyName !== "transform") return;
    const firstOriginalPosition = featuredOriginals.length * 2;
    const lastOriginalPosition = firstOriginalPosition + featuredOriginals.length - 1;
    if (featuredPosition < firstOriginalPosition || featuredPosition > lastOriginalPosition) {
      centerFeaturedCard(firstOriginalPosition + featuredIndex, false);
    }
  });
  featuredViewport.addEventListener("pointerdown", (event) => {
    if (!event.isPrimary || (event.pointerType === "mouse" && event.button !== 0)) return;
    const currentTransform = getComputedStyle(featuredTrack).transform;
    dragState = {
      pointerId: event.pointerId,
      startX: event.clientX,
      startY: event.clientY,
      startOffset: currentTransform === "none" ? 0 : new DOMMatrixReadOnly(currentTransform).m41,
      dragging: false
    };
    featuredTrack.style.transition = "none";
    featuredTrack.style.transform = `translateX(${dragState.startOffset}px)`;
    featuredTrack.offsetHeight;
  });
  featuredViewport.addEventListener("dragstart", (event) => event.preventDefault());
  featuredViewport.addEventListener("pointermove", (event) => {
    if (!dragState || event.pointerId !== dragState.pointerId) return;
    const deltaX = event.clientX - dragState.startX;
    const deltaY = event.clientY - dragState.startY;
    if (!dragState.dragging && Math.abs(deltaX) > 8 && Math.abs(deltaX) > Math.abs(deltaY)) {
      dragState.dragging = true;
      featuredViewport.classList.add("is-dragging");
      featuredTrack.style.transition = "none";
      featuredViewport.setPointerCapture(event.pointerId);
    }
    if (!dragState.dragging) return;
    event.preventDefault();
    featuredTrack.style.transform = `translateX(${dragState.startOffset + deltaX}px)`;
  });
  const finishFeaturedDrag = (event, cancelled = false) => {
    if (!dragState || event.pointerId !== dragState.pointerId) return;
    const { dragging } = dragState;
    dragState = null;
    featuredViewport.classList.remove("is-dragging");
    if (dragging) {
      suppressSwipeClick = !cancelled;
      window.clearTimeout(suppressSwipeClickTimer);
      suppressSwipeClickTimer = window.setTimeout(() => { suppressSwipeClick = false; }, 400);
      const viewportCenter = featuredViewport.getBoundingClientRect().left + featuredViewport.clientWidth / 2;
      const cards = allFeaturedCards();
      const nearestPosition = cards.reduce((nearest, card, index) => {
        const distance = Math.abs(card.getBoundingClientRect().left + card.offsetWidth / 2 - viewportCenter);
        return distance < nearest.distance ? { index, distance } : nearest;
      }, { index: featuredPosition, distance: Infinity }).index;
      const firstOriginalPosition = featuredOriginals.length * 2;
      featuredIndex = (nearestPosition - firstOriginalPosition + featuredOriginals.length) % featuredOriginals.length;
      centerFeaturedCard(nearestPosition);
    } else centerFeaturedCard(featuredPosition);
  };
  featuredViewport.addEventListener("pointerup", (event) => finishFeaturedDrag(event));
  featuredViewport.addEventListener("pointercancel", (event) => finishFeaturedDrag(event, true));
  featuredViewport.addEventListener("click", (event) => {
    if (!suppressSwipeClick) return;
    suppressSwipeClick = false;
    window.clearTimeout(suppressSwipeClickTimer);
    event.preventDefault();
    event.stopPropagation();
  }, true);
  window.addEventListener("resize", () => {
    window.clearTimeout(featuredSnapTimer);
    featuredSnapTimer = window.setTimeout(() => centerFeaturedCard(featuredPosition, false), 120);
  });
  centerFeaturedCard(featuredPosition, false);
};
renderList($("#featuredGrid"), products.filter((p) => p.badge === "DESTACADO" || p.badge === "NUEVO").slice(0, 4));
initializeProductCarousel("#featuredGrid", "#featuredViewport", "#featuredIndicators");
applyFilters();
observeReveals();
renderCart();

const heroSlides = Array.from(document.querySelectorAll(".hero-slide"));
if (heroSlides.length > 1) {
  let activeHeroSlide = 0;
  let heroTimer;
  const showHeroSlide = (index) => {
    activeHeroSlide = (index + heroSlides.length) % heroSlides.length;
    heroSlides.forEach((slide, i) => {
      const active = i === activeHeroSlide;
      slide.classList.toggle("is-active", active);
      slide.setAttribute("aria-hidden", String(!active));
      slide.inert = !active;
    });
  };
  const stopHeroTimer = () => window.clearInterval(heroTimer);
  const startHeroTimer = () => {
    stopHeroTimer();
    if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      heroTimer = window.setInterval(() => {
        if (!document.hidden) showHeroSlide(activeHeroSlide + 1);
      }, 3000);
    }
  };
  startHeroTimer();
}
