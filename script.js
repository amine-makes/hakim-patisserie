const WHATSAPP_NUMBER = "212625783839";
const CART_STORAGE_KEY = "hakim-patisserie-order";
const THEME_STORAGE_KEY = "hakim-patisserie-theme";

const translations = {
  en: {
    announcement: "A little sweetness, freshly made in Morocco ✳ Made to order, made with love",
    navMenu: "The menu", navStory: "Our little story", bag: "Your order",
    heroEyebrow: "Handcrafted in Morocco", heroTitle: "Make every moment<br><em>taste extraordinary.</em>",
    heroDescription: "Slow mornings, shared tables and one more slice. Find something lovely for your next little celebration.",
    exploreMenu: "Explore the menu", heroNote: "Baked fresh, always", heroFootnote: "A little joy, wrapped in paper.",
    stickerTop: "MADE BY HAND", stickerBottom: "SHARED WITH LOVE", heroCaption: "Hakim Pastry · Morocco",
    marquee: "A little sweetness goes a long way", marqueeTwo: "Made for sharing",
    menuEyebrow: "From our little kitchen", menuTitle: "Something for <em>every</em> sweet tooth.",
    menuIntro: "Explore our own collection of birthday cakes, mini cakes, wedding cakes and pastry platters.",
    categoryAll: "Everything", categoryBirthdayCakes: "Birthday cakes",
    categoryMiniCakes: "Mini cakes",
    categoryWeddingCakes: "Wedding cakes",
    categoryPlateaux: "Plateaux",
    priceOnRequest: "Price on request",
    productBirthdayCake: "Birthday cake", productMiniCake: "Mini cake",
    productWeddingCake: "Wedding cake", productPlateau: "Plateau",
    productDescription: "Message us for details and availability.", productTag: "Made to order",
    menuCount: "photo designs", priceNote: "Every design is made to order. Message us for details and availability.",
    storyEyebrow: "A little about us", storyTitle: "Good things take<br><em>a little time.</em>",
    storyBody: "At Hakim Pastry, every creation begins with a simple idea: make something worth gathering around. Explore our photo collection and message us to discuss your order, here in Morocco.",
    storyLink: "Meet your new favourite", signatureLabel: "Made with care, every day",
    orderEyebrow: "A good day starts here", orderTitle: "Your next lovely<br>thing is <em>just a message away.</em>",
    orderCopy: "Tell us what you're celebrating. We'll help make it a little sweeter.",
    whatsappCta: "Let's talk on WhatsApp", floatingLabel: "Chat with us", footerNote: "A little sweetness, made by hand in Morocco.",
    backToTop: "Back to the top ↑", drawerEyebrow: "Something lovely", drawerTitle: "Your order",
    drawerEmpty: "Your order is waiting for a little something.", continueShopping: "Take a look at the menu",
    drawerDisclaimer: "We'll confirm your order and final price with you on WhatsApp.",
    sendOrder: "Send order on WhatsApp", added: "Added to your order", remove: "Remove",
    whatsappMessage: "Hello Hakim Pastry! I'd like to order:",
    availabilityMessage: "Could you confirm availability and the final price?",
    whatsappGreeting: "Hello Hakim Pastry! I'd love to know more about your treats.",
    themeLight: "Switch to light mode", themeDark: "Switch to dark mode",
    themeDarkText: "Turn on dark mode", themeLightText: "Turn on light mode",
    menuAria: "Filter menu by category", navAria: "Main navigation",
    logoAria: "Hakim Pastry home", drawerClose: "Close order",
    floatingAria: "Chat with Hakim Pastry on WhatsApp", itemAdded: "Added to your order"
  },
  fr: {
    announcement: "Une touche de douceur, préparée au Maroc ✳ Sur commande, avec amour",
    navMenu: "La carte", navStory: "Notre histoire", bag: "Ma commande",
    heroEyebrow: "Préparé avec soin au Maroc", heroTitle: "Chaque moment mérite<br><em>une touche d'exception.</em>",
    heroDescription: "Des matins tranquilles, une table à partager et une dernière part. Trouvez une douceur pour votre prochaine fête.",
    exploreMenu: "Découvrir la carte", heroNote: "Toujours frais, toujours fait maison", heroFootnote: "Un peu de bonheur, joliment emballé.",
    stickerTop: "FAIT À LA MAIN", stickerBottom: "À PARTAGER AVEC AMOUR", heroCaption: "Hakim Pastry · Maroc",
    marquee: "Un peu de douceur change tout", marqueeTwo: "À partager",
    menuEyebrow: "Tout droit de notre cuisine", menuTitle: "Une douceur pour <em>chaque</em> envie.",
    menuIntro: "Découvrez notre collection de gâteaux d'anniversaire, mini-gâteaux, gâteaux de mariage et plateaux.",
    categoryAll: "Tout", categoryBirthdayCakes: "Gâteaux d'anniversaire",
    categoryMiniCakes: "Mini-gâteaux",
    categoryWeddingCakes: "Pièces montées de mariage",
    categoryPlateaux: "Plateaux",
    priceOnRequest: "Prix sur demande",
    productBirthdayCake: "Gâteau d'anniversaire", productMiniCake: "Mini-gâteau",
    productWeddingCake: "Gâteau de mariage", productPlateau: "Plateau",
    productDescription: "Écrivez-nous pour les détails et la disponibilité.", productTag: "Sur commande",
    menuCount: "modèles en photo", priceNote: "Chaque modèle est préparé sur commande. Écrivez-nous pour les détails et la disponibilité.",
    storyEyebrow: "Un peu de nous", storyTitle: "Les bonnes choses<br>prennent <em>leur temps.</em>",
    storyBody: "Chez Hakim Pastry, chaque création part d'une idée toute simple : préparer de bonnes choses autour desquelles se retrouver. Découvrez notre collection en photo et écrivez-nous pour votre commande, ici au Maroc.",
    storyLink: "Trouvez votre nouvelle préférée", signatureLabel: "Préparé avec soin, chaque jour",
    orderEyebrow: "Les bons jours commencent ici", orderTitle: "Votre prochaine douceur<br>est <em>à un message d'ici.</em>",
    orderCopy: "Dites-nous ce que vous fêtez. Nous rendrons ce moment encore plus doux.",
    whatsappCta: "Parlons sur WhatsApp", floatingLabel: "Écrivez-nous", footerNote: "Un peu de douceur, faite à la main au Maroc.",
    backToTop: "Retour en haut ↑", drawerEyebrow: "Une jolie envie", drawerTitle: "Ma commande",
    drawerEmpty: "Votre commande attend encore quelques douceurs.", continueShopping: "Découvrir la carte",
    drawerDisclaimer: "Nous confirmerons votre commande et le prix final sur WhatsApp.",
    sendOrder: "Envoyer sur WhatsApp", added: "Ajouté à votre commande", remove: "Supprimer",
    whatsappMessage: "Bonjour Hakim Pastry ! J'aimerais commander :",
    availabilityMessage: "Pouvez-vous confirmer la disponibilité et le prix final ?",
    whatsappGreeting: "Bonjour Hakim Pastry ! J'aimerais en savoir plus sur vos douceurs.",
    themeLight: "Passer en mode clair", themeDark: "Passer en mode sombre",
    themeDarkText: "Activer le mode sombre", themeLightText: "Activer le mode clair",
    menuAria: "Filtrer la carte par catégorie", navAria: "Navigation principale",
    logoAria: "Accueil Hakim Pastry", drawerClose: "Fermer la commande",
    floatingAria: "Contacter Hakim Pastry sur WhatsApp", itemAdded: "Ajouté à votre commande"
  },
  ar: {
    announcement: "حلويات طازجة تُحضّر بحب في المغرب ✳ حسب الطلب وبكل محبة",
    navMenu: "قائمة الحلويات", navStory: "قصتنا", bag: "طلبي",
    heroEyebrow: "حلويات حارتكم", heroTitle: "لأجل <em>اللحظات</em><br>الجميلة.",
    heroDescription: "صباح هادئ، مائدة تجمع الأحباب، وقطعة حلوى أخرى. اكتشفوا ما يجعل مناسبتكم القادمة أجمل.",
    exploreMenu: "اكتشفوا القائمة", heroNote: "طازجة كل يوم", heroFootnote: "قليل من الفرح، مغلف بعناية.",
    stickerTop: "صُنع يدويًا", stickerBottom: "بكل محبة", heroCaption: "Hakim Pastry · المغرب",
    marquee: "قليل من الحلاوة يصنع فرقًا كبيرًا", marqueeTwo: "أحلى مع الأحباب",
    menuEyebrow: "من مطبخنا الصغير", menuTitle: "حلوى لكل <em>مناسبة.</em>",
    menuIntro: "اكتشفوا مجموعتنا المصوّرة من كعكات أعياد الميلاد والكعكات الصغيرة وكعكات الزفاف وصواني الحلويات.",
    categoryAll: "الكل", categoryBirthdayCakes: "كعكات أعياد الميلاد",
    categoryMiniCakes: "كعكات صغيرة",
    categoryWeddingCakes: "كعكات زفاف متعددة الطبقات",
    categoryPlateaux: "صواني الحلوى",
    priceOnRequest: "السعر عند الطلب",
    productBirthdayCake: "كعكة عيد ميلاد", productMiniCake: "كعكة صغيرة",
    productWeddingCake: "كعكة زفاف", productPlateau: "صينية حلويات",
    productDescription: "راسلونا لمعرفة التفاصيل والتوفر.", productTag: "حسب الطلب",
    menuCount: "تصاميم مصوّرة", priceNote: "يُحضّر كل تصميم حسب الطلب. راسلونا لمعرفة التفاصيل والتوفر.",
    storyEyebrow: "تعرفوا علينا", storyTitle: "الأشياء الجميلة<br>تحتاج <em>قليلًا من الوقت.</em>",
    storyBody: "في Hakim Pastry، تبدأ كل وصفة بفكرة بسيطة: أن نصنع شيئًا يجمع الأحباب. اكتشفوا مجموعتنا المصوّرة وراسلونا لمناقشة طلبكم، هنا في المغرب.",
    storyLink: "اكتشفوا حلوى جديدة", signatureLabel: "محضّر بعناية كل يوم",
    orderEyebrow: "يبدأ اليوم الجميل من هنا", orderTitle: "حلاوتكم القادمة<br><em>على بُعد رسالة.</em>",
    orderCopy: "أخبرونا ما المناسبة، وسنضيف إليها المزيد من الحلاوة.",
    whatsappCta: "تواصلوا معنا عبر واتساب", floatingLabel: "راسلونا",
    footerNote: "حلاوة مغربية، محضرة يدويًا بكل حب.",
    backToTop: "العودة إلى الأعلى ↑", drawerEyebrow: "اختيار لذيذ", drawerTitle: "طلبي",
    drawerEmpty: "طلبكم ينتظر إضافة شيء لذيذ.", continueShopping: "تصفحوا قائمة الحلويات",
    drawerDisclaimer: "سنؤكد طلبكم والسعر النهائي عبر واتساب.",
    sendOrder: "إرسال الطلب عبر واتساب", added: "أُضيف إلى طلبكم", remove: "حذف",
    whatsappMessage: "مرحبًا Hakim Pastry! أود طلب:",
    availabilityMessage: "هل يمكنكم تأكيد التوفر والسعر النهائي؟",
    whatsappGreeting: "مرحبًا Hakim Pastry! أود معرفة المزيد عن حلوياتكم.",
    themeLight: "التبديل إلى الوضع الفاتح", themeDark: "التبديل إلى الوضع الداكن",
    themeDarkText: "تفعيل الوضع الداكن", themeLightText: "تفعيل الوضع الفاتح",
    menuAria: "تصفية الحلويات حسب الفئة", navAria: "التنقل الرئيسي",
    logoAria: "الصفحة الرئيسية Hakim Pastry", drawerClose: "إغلاق الطلب",
    floatingAria: "تواصلوا مع Hakim Pastry عبر واتساب", itemAdded: "أُضيف إلى طلبكم"
  }
};

let products = [
  {
    id: "birthday-cake-01", category: "birthday-cakes", image: "images/birthday-cakes/birthday cake (1).jpeg",
  },
  {
    id: "birthday-cake-02", category: "birthday-cakes", image: "images/birthday-cakes/birthday cake (2).jpeg",
  },
  {
    id: "birthday-cake-03", category: "birthday-cakes", image: "images/birthday-cakes/birthday cake (3).jpeg",
  },
  {
    id: "birthday-cake-04", category: "birthday-cakes", image: "images/birthday-cakes/birthday cake (4).jpeg",
  },
  {
    id: "birthday-cake-05", category: "birthday-cakes", image: "images/birthday-cakes/birthday cake (5).jpeg",
  },
  {
    id: "birthday-cake-06", category: "birthday-cakes", image: "images/birthday-cakes/birthday cake (6).jpeg",
  },
  {
    id: "birthday-cake-07", category: "birthday-cakes", image: "images/birthday-cakes/birthday cake (7).jpeg",
  },
  {
    id: "birthday-cake-08", category: "birthday-cakes", image: "images/birthday-cakes/birthday cake (8).jpeg",
  },
  {
    id: "birthday-cake-09", category: "birthday-cakes", image: "images/birthday-cakes/birthday cake (10).jpeg",
  },
  {
    id: "birthday-cake-10", category: "birthday-cakes", image: "images/birthday-cakes/birthday cake (11).jpeg",
  },
  {
    id: "birthday-cake-11", category: "birthday-cakes", image: "images/birthday-cakes/birthday cake (12).jpeg",
  },
  {
    id: "birthday-cake-12", category: "birthday-cakes", image: "images/birthday-cakes/birthday cake (13).jpeg",
  },
  {
    id: "mini-cake-01", category: "mini-cakes", image: "mini-cake-01.jpeg",
  },
  {
    id: "mini-cake-02", category: "mini-cakes", image: "mini-cake-02.jpeg",
  },
  {
    id: "mini-cake-03", category: "mini-cakes", image: "mini-cake-03.jpeg",
  },
  {
    id: "mini-cake-04", category: "mini-cakes", image: "mini-cake-04.jpeg",
  },
  {
    id: "mini-cake-05", category: "mini-cakes", image: "mini-cake-05.jpeg",
  },
  {
    id: "mini-cake-06", category: "mini-cakes", image: "mini-cake-06.jpeg",
  },
  {
    id: "wedding-cake-01", category: "wedding-cakes", image: "images/wedding-cakes/wedding-cake-01.jpeg",
  },
  {
    id: "wedding-cake-02", category: "wedding-cakes", image: "images/wedding-cakes/wedding-cake-02.jpeg",
  },
  {
    id: "wedding-cake-03", category: "wedding-cakes", image: "images/wedding-cakes/wedding-cake-03.jpeg",
  },
  {
    id: "wedding-cake-04", category: "wedding-cakes", image: "images/wedding-cakes/wedding-cake-04.jpeg",
  },
  {
    id: "wedding-cake-05", category: "wedding-cakes", image: "images/wedding-cakes/wedding-cake-05.jpeg",
  },
  {
    id: "wedding-cake-06", category: "wedding-cakes", image: "images/wedding-cakes/wedding-cake-06.jpeg",
  },
  {
    id: "wedding-cake-07", category: "wedding-cakes", image: "images/wedding-cakes/wedding-cake-07.jpeg",
  },
  {
    id: "wedding-cake-08", category: "wedding-cakes", image: "images/wedding-cakes/wedding-cake-08.jpeg",
  },
  {
    id: "plateau-01", category: "plateaux", image: "images/plateaux/Plateau  (1).jpeg",
  },
  {
    id: "plateau-02", category: "plateaux", image: "images/plateaux/Plateau  (2).jpeg",
  },
  {
    id: "plateau-03", category: "plateaux", image: "images/plateaux/Plateau  (3).jpeg",
  },
  {
    id: "plateau-04", category: "plateaux", image: "images/plateaux/Plateau  (4).jpeg",
  },
  {
    id: "plateau-05", category: "plateaux", image: "images/plateaux/Plateau  (5).jpeg",
  },
  {
    id: "plateau-06", category: "plateaux", image: "images/plateaux/Plateau  (6).jpeg",
  },
  {
    id: "plateau-07", category: "plateaux", image: "images/plateaux/Plateau  (7).jpeg",
  },
  {
    id: "plateau-08", category: "plateaux", image: "images/plateaux/Plateau  (8).jpeg",
  },
  {
    id: "plateau-09", category: "plateaux", image: "images/plateaux/Plateau  (9).jpeg",
  },
  {
    id: "plateau-10", category: "plateaux", image: "images/plateaux/Plateau  (10).jpeg",
  },
  {
    id: "plateau-11", category: "plateaux", image: "images/plateaux/Plateau  (11).jpeg",
  },
  {
    id: "plateau-12", category: "plateaux", image: "images/plateaux/Plateau  (12).jpeg",
  },
  {
    id: "plateau-13", category: "plateaux", image: "images/plateaux/Plateau  (13).jpeg",
  },
  {
    id: "plateau-14", category: "plateaux", image: "images/plateaux/Plateau  (14).jpeg",
  },
  {
    id: "plateau-15", category: "plateaux", image: "images/plateaux/Plateau  (15).jpeg",
  },
];

const approvedPhotoPrefixes = {
  "birthday-cakes": "images/birthday-cakes/",
  "mini-cakes": "mini-cake-",
  "wedding-cakes": "images/wedding-cakes/",
  plateaux: "images/plateaux/"
};
products = products.filter(product =>
  approvedPhotoPrefixes[product.category] &&
  product.image.startsWith(approvedPhotoPrefixes[product.category])
);
const productNumbers = new Map();
const productCategoryCounts = new Map();
const productNameKeys = {
  "birthday-cakes": "productBirthdayCake",
  "mini-cakes": "productMiniCake",
  "wedding-cakes": "productWeddingCake",
  plateaux: "productPlateau"
};
products.forEach(product => {
  const number = (productCategoryCounts.get(product.category) || 0) + 1;
  productCategoryCounts.set(product.category, number);
  productNumbers.set(product.id, number);
});

function getProductName(product) {
  return `${t(productNameKeys[product.category])} ${String(productNumbers.get(product.id)).padStart(2, "0")}`;
}

let language = "en";
let activeCategory = "all";
let cart = loadCart();
let theme = loadTheme();
let toastTimer;

const grid = document.querySelector("#product-grid");
const count = document.querySelector("#product-count");
const drawer = document.querySelector("#order-drawer");
const backdrop = document.querySelector(".drawer-backdrop");
const drawerItems = document.querySelector(".drawer-items");
const drawerEmpty = document.querySelector(".drawer-empty");
const toast = document.querySelector(".toast");
const bagCount = document.querySelector(".bag-count");

function loadCart() {
  try {
    const saved = JSON.parse(localStorage.getItem(CART_STORAGE_KEY) || "{}");
    if (!saved || typeof saved !== "object" || Array.isArray(saved)) return {};
    return Object.fromEntries(Object.entries(saved).filter(([id, quantity]) =>
      products.some(product => product.id === id) && Number.isInteger(quantity) && quantity > 0
    ));
  } catch (error) {
    console.error("Unable to load the saved order.", error);
    return {};
  }
}

function loadTheme() {
  try {
    return localStorage.getItem(THEME_STORAGE_KEY) === "dark" ? "dark" : "light";
  } catch (error) {
    console.error("Unable to load the saved color theme.", error);
    return "light";
  }
}

function saveCart() {
  try {
    localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cart));
  } catch (error) {
    console.error("Unable to save the current order.", error);
    showToast(language === "fr" ? "La commande ne peut pas être enregistrée sur cet appareil." : language === "ar" ? "تعذر حفظ الطلب على هذا الجهاز." : "This order could not be saved on this device.");
  }
}

function t(key) {
  return translations[language][key];
}

function formatPrice() {
  return t("priceOnRequest");
}

function applyTheme() {
  document.documentElement.dataset.theme = theme;
  const themeToggle = document.querySelector(".theme-toggle");
  themeToggle.innerHTML = `<span aria-hidden="true">${theme === "dark" ? "☀" : "☾"}</span>`;
  themeToggle.setAttribute("aria-label", theme === "dark" ? t("themeLightText") : t("themeDarkText"));
  document.querySelector('meta[name="theme-color"]').content = theme === "dark" ? "#211914" : "#f7f1e7";
}

function applyLanguage() {
  document.documentElement.lang = language;
  document.documentElement.dir = language === "ar" ? "rtl" : "ltr";
  document.querySelectorAll("[data-i18n]").forEach(element => {
    const value = t(element.dataset.i18n);
    if (value !== undefined) element.innerHTML = value;
  });
  const languageToggle = document.querySelector(".language-toggle");
  const nextLanguage = { en: "FR", fr: "AR", ar: "EN" }[language];
  const nextLanguageName = { en: "French", fr: "Arabic", ar: "English" }[language];
  languageToggle.textContent = nextLanguage;
  languageToggle.setAttribute("aria-label", language === "ar" ? "التبديل إلى الإنجليزية" : language === "fr" ? "Passer en arabe" : "Switch to French");
  document.querySelector(".main-nav").setAttribute("aria-label", t("navAria"));
  document.querySelector(".category-list").setAttribute("aria-label", t("menuAria"));
  document.querySelectorAll(".wordmark").forEach(link => link.setAttribute("aria-label", t("logoAria")));
  document.querySelector(".drawer-close").setAttribute("aria-label", t("drawerClose"));
  document.querySelector(".floating-whatsapp").setAttribute("aria-label", t("floatingAria"));
  document.querySelector(".language-toggle").title = nextLanguageName;
  renderProducts();
  renderCart();
  updateWhatsAppLinks();
  applyTheme();
}

function renderProducts() {
  const visibleProducts = activeCategory === "all" ? products : products.filter(product => product.category === activeCategory);
  count.textContent = String(visibleProducts.length);
  grid.innerHTML = visibleProducts.map(product => `
    <article class="product-card">
      <div class="product-image-wrap">
        <img class="product-image" src="${product.image}" alt="${getProductName(product)}" loading="lazy">
        <span class="product-tag">${t("productTag")}</span>
        <button class="add-button" type="button" data-add="${product.id}" aria-label="${language === "fr" ? "Ajouter" : language === "ar" ? "أضيفوا" : "Add"} ${getProductName(product)} ${language === "fr" ? "à la commande" : language === "ar" ? "إلى الطلب" : "to your order"}">+</button>
      </div>
      <div class="product-meta">
        <div><h3 class="product-name">${getProductName(product)}</h3><p class="product-description">${t("productDescription")}</p></div>
        <span class="product-price">${formatPrice()}</span>
      </div>
    </article>
  `).join("");
}

function updateWhatsAppLinks() {
  const message = encodeURIComponent(t("whatsappGreeting"));
  document.querySelectorAll(".whatsapp-link").forEach(link => {
    link.href = `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`;
  });
}

function updateBagCount() {
  const total = Object.values(cart).reduce((sum, quantity) => sum + quantity, 0);
  bagCount.textContent = String(total);
  document.querySelector(".bag-button").setAttribute("aria-label", `${t("bag")}, ${total}`);
}

function renderCart() {
  const entries = products.filter(product => cart[product.id]);
  drawerItems.innerHTML = entries.map(product => `
    <div class="drawer-item">
      <img src="${product.image}" alt="" loading="lazy">
      <div>
        <h3>${getProductName(product)}</h3>
        <p>${formatPrice()}</p>
        <div class="quantity-control" aria-label="${getProductName(product)} ${language === "fr" ? "quantité" : language === "ar" ? "الكمية" : "quantity"}">
          <button type="button" data-quantity="${product.id}" data-change="-1" aria-label="${language === "fr" ? "Retirer un" : language === "ar" ? "إنقاص الكمية" : "Remove one"}">−</button>
          <span>${cart[product.id]}</span>
          <button type="button" data-quantity="${product.id}" data-change="1" aria-label="${language === "fr" ? "Ajouter un" : language === "ar" ? "زيادة الكمية" : "Add one"}">+</button>
        </div>
      </div>
      <button class="remove-item" type="button" data-remove="${product.id}" aria-label="${t("remove")} ${getProductName(product)}">×</button>
    </div>
  `).join("");
  drawerEmpty.hidden = entries.length > 0;
  drawerItems.hidden = entries.length === 0;
  document.querySelector(".drawer-whatsapp").hidden = entries.length === 0;
  if (entries.length) {
    const message = [
      t("whatsappMessage"),
      ...entries.map(product => `• ${cart[product.id]} × ${getProductName(product)}`),
      t("availabilityMessage")
    ].join("\n");
    document.querySelector(".drawer-whatsapp").href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
  }
  updateBagCount();
}

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("is-visible");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove("is-visible"), 1900);
}

function openDrawer() {
  renderCart();
  drawer.hidden = false;
  backdrop.hidden = false;
  document.body.classList.add("drawer-open");
  document.querySelector(".drawer-close").focus();
}

function closeDrawer() {
  drawer.hidden = true;
  backdrop.hidden = true;
  document.body.classList.remove("drawer-open");
  document.querySelector(".bag-button").focus();
}

document.querySelector(".language-toggle").addEventListener("click", () => {
  language = { en: "fr", fr: "ar", ar: "en" }[language];
  applyLanguage();
});

document.querySelector(".theme-toggle").addEventListener("click", () => {
  theme = theme === "light" ? "dark" : "light";
  try {
    localStorage.setItem(THEME_STORAGE_KEY, theme);
  } catch (error) {
    console.error("Unable to save the selected color theme.", error);
  }
  applyTheme();
});

document.querySelector(".category-list").addEventListener("click", event => {
  const button = event.target.closest("[data-category]");
  if (!button) return;
  activeCategory = button.dataset.category;
  document.querySelectorAll(".category-button").forEach(item => item.classList.toggle("is-active", item === button));
  renderProducts();
});

grid.addEventListener("click", event => {
  const button = event.target.closest("[data-add]");
  if (!button) return;
  const id = button.dataset.add;
  cart[id] = (cart[id] || 0) + 1;
  saveCart();
  renderCart();
  showToast(`${getProductName(products.find(product => product.id === id))} — ${t("added")}`);
});

drawerItems.addEventListener("click", event => {
  const quantityButton = event.target.closest("[data-quantity]");
  const removeButton = event.target.closest("[data-remove]");
  if (removeButton) {
    delete cart[removeButton.dataset.remove];
  } else if (quantityButton) {
    const id = quantityButton.dataset.quantity;
    cart[id] += Number(quantityButton.dataset.change);
    if (cart[id] < 1) delete cart[id];
  } else {
    return;
  }
  saveCart();
  renderCart();
});

document.querySelector(".bag-button").addEventListener("click", openDrawer);
document.querySelector(".drawer-close").addEventListener("click", closeDrawer);
document.querySelector(".continue-shopping").addEventListener("click", () => {
  closeDrawer();
  document.querySelector("#menu").scrollIntoView({ behavior: "smooth" });
});
backdrop.addEventListener("click", closeDrawer);
document.addEventListener("keydown", event => {
  if (event.key === "Escape" && !drawer.hidden) closeDrawer();
});
document.querySelector("#year").textContent = String(new Date().getFullYear());
applyLanguage();
