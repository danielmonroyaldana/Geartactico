// =========================================
// CONFIGURACIÓN GENERAL
// =========================================
const whatsappNumber = "57XXXXXXXXXX"; // ← CAMBIAR: país + número, sin + ni espacios
const PLACEHOLDER = "assets/images/placeholder.svg";

// Categorías (id = valor usado en products, label = texto visible)
const categories = [
  { id: "mochilas", label: "Mochilas", image: "assets/images/cat-mochilas.jpg" },
  { id: "bolsos", label: "Bolsos", image: "assets/images/cat-bolsos.jpg" },
  { id: "tulas", label: "Tulas", image: "assets/images/cat-rinoneras.jpg" },
  { id: "chalecos", label: "Chalecos", image: "assets/images/cat-canguros.jpg" },
  { id: "accesorios", label: "Accesorios", image: "assets/images/cat-accesorios.jpg" }
];

// =========================================
// CATÁLOGO DE PRODUCTOS  (DATOS DE DEMOSTRACIÓN: reemplazar)
// Campos opcionales: oldPrice, badge, colors, gallery (hasta 3 fotos extra: {src, label}), video (ruta o {src, label}), features, material, dimensions, capacity
// =========================================
const products = [
  { id: 1, name: "Mochila  40L", category: "mochilas", price: 189900, oldPrice: 219900, image: "assets/images/mochila-40l.jpg", badge: "OFERTA", description: "Mochila de alta capacidad para jornadas largas.", colors: ["Negro", "Verde", "Camuflado"], stock: true, material: "Poliéster 600D", dimensions: "50 x 30 x 25 cm", capacity: "40 L", features: ["Sistema modular", "Correas acolchadas", "Múltiples compartimentos"] },
  { id: 2, name: "Mochila  25L", category: "mochilas", price: 149900, image: "assets/images/mochila-25l.jpg", badge: "NUEVO", description: "Compacta y versátil para el día a día.", colors: ["Negro", "Verde"], stock: true, material: "Nailon", dimensions: "42 x 28 x 20 cm", capacity: "25 L", features: ["Compartimento para laptop", "Panel trasero ventilado"] },
  { id: 3, name: "Porta aseo Grande", category: "bolsos", price: 129900, image: "assets/images/duffel.jpg", badge: "DESTACADO", description: "Bolso de viaje resistente con asas reforzadas.", colors: ["Negro", "Arena"], stock: true, material: "", dimensions: "60 x 28 x 28 cm", capacity: "45 L", features: ["Correa de hombro", "Cierres resistentes"] },
  { id: 4, name: "Porta aseo pequeño", category: "bolsos", price: 79900, oldPrice: 99900, image: "assets/images/bandolera.jpg", badge: "OFERTA", description: "Práctico bolso cruzado de uso diario.", colors: ["Negro", "Verde"], stock: true, material: "", dimensions: "30 x 20 x 10 cm", capacity: "6 L", features: ["Correa ajustable", "Bolsillo oculto"] },
  { id: 5, name: "Tula", category: "tulas", price: 39900, image: "assets/images/rinonera.jpg", badge: "NUEVO", description: "Ligera, con espacio para lo esencial.", colors: ["Negro", "Verde", "Camuflado"], stock: true, material: "non", dimensions: "25 x 14 x 8 cm", capacity: "3 L", features: ["Cinturón ajustable", "Dos compartimentos"] },
  { id: 6, name: "Porta cantimplora", category: "accesorios", price: 54900, oldPrice: 64900, image: "assets/images/rinonera-pro.jpg", badge: "OFERTA", description: "Más capacidad y sistema modular.", colors: ["Negro", "Arena"], stock: true, material: "Nailon", dimensions: "28 x 16 x 9 cm", capacity: "4 L", features: ["Sistema modular", "Bolsillo frontal"] },
  { id: 7, name: "Chaleco Portaequipo (Policia)", category: "chalecos", price: 69900, image: "assets/images/canguro.jpg", badge: "DESTACADO", description: "Chaleco modular para llevar equipo..", colors: ["Verde"], stock: true, material: "non", dimensions: "Talla ajustable", capacity: "non", features: ["Correa cruzada", "Cierre oculto"] },
  { id: 8, name: "Chaleco Portaequipo (Militar)", category: "chalecos", price: 119900, image: "assets/images/chaleco.jpg", description: "Chaleco modular para llevar equipo.", colors: ["Verde"], stock: true, material: "non", dimensions: "Talla ajustable", capacity: "non", features: ["Correa cruzada", "Cierre oculto"] },

  
];

// =========================================
// UTILIDADES
// =========================================
const $ = (s) => document.querySelector(s);
const money = (n) => "$" + n.toLocaleString("es-CO");
const discount = (p) => p.oldPrice ? Math.round((1 - p.price / p.oldPrice) * 100) : 0;
const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
const imgTag = (src, alt) => `<img loading="lazy" decoding="async" src="${esc(src)}" alt="${esc(alt)}" onerror="this.onerror=null;this.src='${PLACEHOLDER}'">`;
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
function cardHTML(p) {
  const d = discount(p);
  const colors = p.colors && p.colors.length > 1
    ? `<div class="colors" role="group" aria-label="Selecciona uno o más colores">${p.colors.map((c, i) => `<label><input type="checkbox" value="${esc(c)}" ${i === 0 ? "checked" : ""}><span>${esc(c)}</span></label>`).join("")}</div>` : "";
  return `<article class="card" data-id="${p.id}">
    <button class="card-img" data-action="open" aria-label="Ver detalle de ${esc(p.name)}">${imgTag(p.image, p.name)}${p.badge ? `<span class="badge ${p.badge === "OFERTA" ? "off" : ""}">${esc(p.badge)}</span>` : ""}</button>
    <div class="card-body"><h3>${esc(p.name)}</h3><p class="desc">${esc(p.description)}</p>
    <p class="price">${money(p.price)}${p.oldPrice ? `<s>${money(p.oldPrice)}</s><em>-${d}%</em>` : ""}</p>${colors}
    <div class="card-btns">${p.stock ? `<button class="btn btn-dark" data-action="add">Agregar al carrito</button><button class="btn btn-wa" data-action="buy">Comprar por WhatsApp</button>` : `<span class="soldout">Agotado</span>`}</div></div></article>`;
}
const renderList = (el, list) => {
  el.innerHTML = list.length ? list.map(cardHTML).join("") : "<p>No encontramos productos con esos filtros.</p>";
  observeReveals(el);
};

// =========================================
// CATEGORÍAS (render + clic)
// =========================================
let activeCategory = "";

function renderCategories() {
  $("#catGrid").innerHTML = categories.map((c) => `<a class="cat" href="#catalogo" data-cat="${c.id}">${imgTag(c.image, c.label)}<span>${esc(c.label)}</span></a>`).join("");
  observeReveals($("#catGrid"));
  $("#footCats").innerHTML = categories.map((c) => `<a href="#catalogo" data-cat="${c.id}">${esc(c.label)}</a>`).join("");
}

function toggleCatalogBackButton() {
  $("#catalogBackBtn").hidden = !activeCategory;
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
  const q = $("#fSearch").value.trim().toLowerCase();
  const sort = $("#fSort").value;
  const list = products.filter((p) => (!q || (p.name + " " + p.description).toLowerCase().includes(q)) && (!activeCategory || p.category === activeCategory));
  if (sort === "asc") list.sort((a, b) => a.price - b.price);
  if (sort === "desc") list.sort((a, b) => b.price - a.price);
  if (sort === "new") list.sort((a, b) => (b.badge === "NUEVO") - (a.badge === "NUEVO") || b.id - a.id);
  $("#resultCount").textContent = list.length + " producto(s)";
  renderList($("#catalogGrid"), list);
  toggleCatalogBackButton();
}
["fSearch", "fSort"].forEach((id) => $("#" + id).addEventListener("input", () => {
  applyFilters();
}));
$("#catalogBackBtn").addEventListener("click", () => {
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
  const inputs = root.querySelectorAll(".colors input");
  return inputs.length
    ? Array.from(inputs).filter((input) => input.checked).map((input) => input.value)
    : (product.colors || []).slice(0, 1);
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
  const views = [
    { src: p.image, label: "Frente" },
    ...(p.gallery || []).slice(0, 3).map((view, index) => typeof view === "string"
      ? { src: view, label: ["Trasera", "Lado izquierdo", "Lado derecho"][index] }
      : { src: view.src, label: view.label || ["Trasera", "Lado izquierdo", "Lado derecho"][index] })
  ];
  const video = typeof p.video === "string" ? { src: p.video, label: "Video" } : p.video;
  const mediaButtons = [
    ...views.map((view, index) => `<button class="media-thumb${index === 0 ? " is-active" : ""}" type="button" data-media-type="image" data-media-src="${esc(view.src)}" data-media-label="${esc(view.label)}" aria-label="Ver ${esc(view.label)}" aria-pressed="${index === 0}">${imgTag(view.src, `${p.name} - ${view.label}`)}</button>`),
    ...(video?.src ? [`<button class="media-thumb media-video-thumb" type="button" data-media-type="video" data-media-src="${esc(video.src)}" data-media-label="${esc(video.label || "Video")}" aria-label="Ver ${esc(video.label || "Video")}"><span aria-hidden="true">▶</span><span>${esc(video.label || "Video")}</span></button>`] : [])
  ].join("");
  $("#modalBox").innerHTML = `<button class="icon-btn close" id="mClose" aria-label="Cerrar">✕</button><div class="modal-gallery"><div class="product-media">${imgTag(p.image, `${p.name} - Frente`).replace("<img", '<img id="mMain"')}<video id="mVideo" controls playsinline preload="metadata" hidden></video></div><div class="thumbs" aria-label="Fotos y video del producto">${mediaButtons}</div></div>
  <div class="modal-info"><h2>${esc(p.name)}</h2><p class="price">${money(p.price)}${p.oldPrice ? `<s>${money(p.oldPrice)}</s><em>-${d}%</em>` : ""}</p><p>${esc(p.description)}</p>
  <ul>${(p.features || []).map((f) => `<li>${esc(f)}</li>`).join("")}</ul>
  <p><strong>Material:</strong> ${esc(p.material || "—")}<br><strong>Dimensiones:</strong> ${esc(p.dimensions || "—")}<br><strong>Capacidad:</strong> ${esc(p.capacity || "—")}</p>
  ${p.colors ? `<div><strong>Color${p.colors.length > 1 ? "es (puedes elegir varios)" : ""}</strong><div class="colors" id="mColors" role="group" aria-label="Selecciona uno o más colores">${p.colors.map((c, i) => `<label><input type="checkbox" value="${esc(c)}" ${i === 0 ? "checked" : ""}><span>${esc(c)}</span></label>`).join("")}</div></div>` : ""}
  <p>${p.stock ? "✅ Disponible" : '<span class="soldout">Agotado</span>'}</p>
  <div class="qty" style="width:max-content"><button id="mDec" aria-label="Disminuir">−</button><span id="mQty">1</span><button id="mInc" aria-label="Aumentar">+</button></div>
  ${p.stock ? `<button class="btn btn-dark" id="mAdd">Agregar al carrito</button><button class="btn btn-wa" id="mBuy">Comprar ahora por WhatsApp</button>` : ""}</div>`;
  const m = $("#modal"); m.hidden = false; let qty = 1;
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
const closeModal = () => ($("#modal").hidden = true);
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
    featuredViewport.setPointerCapture(event.pointerId);
  });
  featuredViewport.addEventListener("pointermove", (event) => {
    if (!dragState || event.pointerId !== dragState.pointerId) return;
    const deltaX = event.clientX - dragState.startX;
    const deltaY = event.clientY - dragState.startY;
    if (!dragState.dragging && Math.abs(deltaX) > 8 && Math.abs(deltaX) > Math.abs(deltaY)) {
      dragState.dragging = true;
      featuredTrack.style.transition = "none";
    }
    if (!dragState.dragging) return;
    event.preventDefault();
    featuredTrack.style.transform = `translateX(${dragState.startOffset + deltaX}px)`;
  });
  const finishFeaturedDrag = (event, cancelled = false) => {
    if (!dragState || event.pointerId !== dragState.pointerId) return;
    const { dragging } = dragState;
    dragState = null;
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
renderList($("#offersGrid"), products.filter((p) => p.oldPrice));
initializeProductCarousel("#featuredGrid", "#featuredViewport", "#featuredIndicators");
initializeProductCarousel("#offersGrid", "#offersViewport", "#offersIndicators");
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
