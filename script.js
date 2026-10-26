const WHATSAPP_NUMBER = "212682231817";
const CART_STORAGE_KEY = "hakim-patisserie-order";
const THEME_STORAGE_KEY = "hakim-patisserie-theme";

const translations = {
  en: {
    announcement: "A little sweetness, freshly made in Morocco ✳ Made to order, made with love",
    navMenu: "The menu", navStory: "Our little story", bag: "Your order",
    heroEyebrow: "A neighbourhood pâtisserie", heroTitle: "For the love<br>of <em>little</em> moments.",
    heroDescription: "Slow mornings, shared tables and one more slice. Find something lovely for your next little celebration.",
    exploreMenu: "Explore the menu", heroNote: "Baked fresh, always", heroFootnote: "A little joy, wrapped in paper.",
    stickerTop: "MADE BY HAND", stickerBottom: "SHARED WITH LOVE", heroCaption: "The Sunday cake",
    marquee: "A little sweetness goes a long way", marqueeTwo: "Made for sharing",
    menuEyebrow: "From our little kitchen", menuTitle: "Something for <em>every</em> sweet tooth.",
    menuIntro: "From birthdays and weddings to study milestones and New Year, find a little something for every occasion.",
    categoryAll: "Everything", categoryCakes: "Cakes", categoryPastries: "Pâtisserie",
    categoryCelebrations: "Celebrations", categoryGiftBoxes: "Gift boxes",
    menuCount: "little favourites", priceNote: "Prices are starting prices in MAD. Celebration cakes are made to order. Message us to confirm availability and personalise your order.",
    storyEyebrow: "A little about us", storyTitle: "Good things take<br><em>a little time.</em>",
    storyBody: "At Hakim Patisserie, every bake begins with a simple idea: make something worth gathering around. From everyday treats to cakes for your biggest days, we prepare each order with care, here in Morocco.",
    storyLink: "Meet your new favourite", signatureLabel: "Made with care, every day",
    orderEyebrow: "A good day starts here", orderTitle: "Your next lovely<br>thing is <em>just a message away.</em>",
    orderCopy: "Tell us what you're celebrating. We'll help make it a little sweeter.",
    whatsappCta: "Let's talk on WhatsApp", floatingLabel: "Chat with us", footerNote: "A little sweetness, made by hand in Morocco.",
    backToTop: "Back to the top ↑", drawerEyebrow: "Something lovely", drawerTitle: "Your order",
    drawerEmpty: "Your order is waiting for a little something.", continueShopping: "Take a look at the menu",
    drawerDisclaimer: "We'll confirm your order and final price with you on WhatsApp.",
    sendOrder: "Send order on WhatsApp", added: "Added to your order", remove: "Remove",
    whatsappMessage: "Hello Hakim Patisserie! I'd like to order:",
    availabilityMessage: "Could you confirm availability and the final price?",
    whatsappGreeting: "Hello Hakim Patisserie! I'd love to know more about your treats.",
    themeLight: "Switch to light mode", themeDark: "Switch to dark mode",
    themeDarkText: "Turn on dark mode", themeLightText: "Turn on light mode",
    menuAria: "Filter menu by category", navAria: "Main navigation",
    logoAria: "Hakim Patisserie home", drawerClose: "Close order",
    floatingAria: "Chat with Hakim Patisserie on WhatsApp", itemAdded: "Added to your order"
  },
  fr: {
    announcement: "Une touche de douceur, préparée au Maroc ✳ Sur commande, avec amour",
    navMenu: "La carte", navStory: "Notre histoire", bag: "Ma commande",
    heroEyebrow: "Votre pâtisserie de quartier", heroTitle: "Pour l'amour<br>des <em>petits</em> moments.",
    heroDescription: "Des matins tranquilles, une table à partager et une dernière part. Trouvez une douceur pour votre prochaine fête.",
    exploreMenu: "Découvrir la carte", heroNote: "Toujours frais, toujours fait maison", heroFootnote: "Un peu de bonheur, joliment emballé.",
    stickerTop: "FAIT À LA MAIN", stickerBottom: "À PARTAGER AVEC AMOUR", heroCaption: "Le gâteau du dimanche",
    marquee: "Un peu de douceur change tout", marqueeTwo: "À partager",
    menuEyebrow: "Tout droit de notre cuisine", menuTitle: "Une douceur pour <em>chaque</em> envie.",
    menuIntro: "Anniversaires, mariages, réussite aux examens ou Nouvel An : une douceur pour chaque occasion.",
    categoryAll: "Tout", categoryCakes: "Gâteaux", categoryPastries: "Pâtisseries",
    categoryCelebrations: "Célébrations", categoryGiftBoxes: "Coffrets cadeaux",
    menuCount: "douceurs préférées", priceNote: "Prix à partir de, en MAD. Les gâteaux de fête sont préparés sur commande. Écrivez-nous pour confirmer la disponibilité et personnaliser votre commande.",
    storyEyebrow: "Un peu de nous", storyTitle: "Les bonnes choses<br>prennent <em>leur temps.</em>",
    storyBody: "Chez Hakim Pâtisserie, chaque création part d'une idée toute simple : préparer de bonnes choses autour desquelles se retrouver. Des douceurs du quotidien aux gâteaux des grands jours, chaque commande est préparée avec soin, ici au Maroc.",
    storyLink: "Trouvez votre nouvelle préférée", signatureLabel: "Préparé avec soin, chaque jour",
    orderEyebrow: "Les bons jours commencent ici", orderTitle: "Votre prochaine douceur<br>est <em>à un message d'ici.</em>",
    orderCopy: "Dites-nous ce que vous fêtez. Nous rendrons ce moment encore plus doux.",
    whatsappCta: "Parlons sur WhatsApp", floatingLabel: "Écrivez-nous", footerNote: "Un peu de douceur, faite à la main au Maroc.",
    backToTop: "Retour en haut ↑", drawerEyebrow: "Une jolie envie", drawerTitle: "Ma commande",
    drawerEmpty: "Votre commande attend encore quelques douceurs.", continueShopping: "Découvrir la carte",
    drawerDisclaimer: "Nous confirmerons votre commande et le prix final sur WhatsApp.",
    sendOrder: "Envoyer sur WhatsApp", added: "Ajouté à votre commande", remove: "Supprimer",
    whatsappMessage: "Bonjour Hakim Pâtisserie ! J'aimerais commander :",
    availabilityMessage: "Pouvez-vous confirmer la disponibilité et le prix final ?",
    whatsappGreeting: "Bonjour Hakim Pâtisserie ! J'aimerais en savoir plus sur vos douceurs.",
    themeLight: "Passer en mode clair", themeDark: "Passer en mode sombre",
    themeDarkText: "Activer le mode sombre", themeLightText: "Activer le mode clair",
    menuAria: "Filtrer la carte par catégorie", navAria: "Navigation principale",
    logoAria: "Accueil Hakim Pâtisserie", drawerClose: "Fermer la commande",
    floatingAria: "Contacter Hakim Pâtisserie sur WhatsApp", itemAdded: "Ajouté à votre commande"
  },
  ar: {
    announcement: "حلويات طازجة تُحضّر بحب في المغرب ✳ حسب الطلب وبكل محبة",
    navMenu: "قائمة الحلويات", navStory: "قصتنا", bag: "طلبي",
    heroEyebrow: "حلويات حارتكم", heroTitle: "لأجل <em>اللحظات</em><br>الجميلة.",
    heroDescription: "صباح هادئ، مائدة تجمع الأحباب، وقطعة حلوى أخرى. اكتشفوا ما يجعل مناسبتكم القادمة أجمل.",
    exploreMenu: "اكتشفوا القائمة", heroNote: "طازجة كل يوم", heroFootnote: "قليل من الفرح، مغلف بعناية.",
    stickerTop: "صُنع يدويًا", stickerBottom: "بكل محبة", heroCaption: "كعكة يوم الأحد",
    marquee: "قليل من الحلاوة يصنع فرقًا كبيرًا", marqueeTwo: "أحلى مع الأحباب",
    menuEyebrow: "من مطبخنا الصغير", menuTitle: "حلوى لكل <em>مناسبة.</em>",
    menuIntro: "من أعياد الميلاد والأعراس إلى النجاح الدراسي ورأس السنة، اختاروا ما يناسب كل مناسبة.",
    categoryAll: "الكل", categoryCakes: "كعكات", categoryPastries: "حلويات",
    categoryCelebrations: "مناسبات", categoryGiftBoxes: "علب هدايا",
    menuCount: "من حلوياتنا المميزة", priceNote: "الأسعار تبدأ بالدرهم المغربي. كعكات المناسبات تُحضّر حسب الطلب. راسلونا لتأكيد التوفر واختيار التفاصيل.",
    storyEyebrow: "تعرفوا علينا", storyTitle: "الأشياء الجميلة<br>تحتاج <em>قليلًا من الوقت.</em>",
    storyBody: "في حلويات حكيم، تبدأ كل وصفة بفكرة بسيطة: أن نصنع شيئًا يجمع الأحباب. من حلويات كل يوم إلى كعكات أهم المناسبات، نحضّر كل طلب بعناية هنا في المغرب.",
    storyLink: "اكتشفوا حلوى جديدة", signatureLabel: "محضّر بعناية كل يوم",
    orderEyebrow: "يبدأ اليوم الجميل من هنا", orderTitle: "حلاوتكم القادمة<br><em>على بُعد رسالة.</em>",
    orderCopy: "أخبرونا ما المناسبة، وسنضيف إليها المزيد من الحلاوة.",
    whatsappCta: "تواصلوا معنا عبر واتساب", floatingLabel: "راسلونا",
    footerNote: "حلاوة مغربية، محضرة يدويًا بكل حب.",
    backToTop: "العودة إلى الأعلى ↑", drawerEyebrow: "اختيار لذيذ", drawerTitle: "طلبي",
    drawerEmpty: "طلبكم ينتظر إضافة شيء لذيذ.", continueShopping: "تصفحوا قائمة الحلويات",
    drawerDisclaimer: "سنؤكد طلبكم والسعر النهائي عبر واتساب.",
    sendOrder: "إرسال الطلب عبر واتساب", added: "أُضيف إلى طلبكم", remove: "حذف",
    whatsappMessage: "مرحبًا حلويات حكيم! أود طلب:",
    availabilityMessage: "هل يمكنكم تأكيد التوفر والسعر النهائي؟",
    whatsappGreeting: "مرحبًا حلويات حكيم! أود معرفة المزيد عن حلوياتكم.",
    themeLight: "التبديل إلى الوضع الفاتح", themeDark: "التبديل إلى الوضع الداكن",
    themeDarkText: "تفعيل الوضع الداكن", themeLightText: "تفعيل الوضع الفاتح",
    menuAria: "تصفية الحلويات حسب الفئة", navAria: "التنقل الرئيسي",
    logoAria: "الصفحة الرئيسية لحلويات حكيم", drawerClose: "إغلاق الطلب",
    floatingAria: "تواصلوا مع حلويات حكيم عبر واتساب", itemAdded: "أُضيف إلى طلبكم"
  }
};

const products = [
  {
    id: "birthday-cake", category: "cakes", image: "https://images.unsplash.com/photo-1562777717-dc6984f65a63?auto=format&fit=crop&w=900&q=80",
    name: { en: "Birthday dream cake", fr: "Gâteau d'anniversaire", ar: "كعكة عيد الميلاد" },
    description: { en: "Choose your flavour, colour & message", fr: "Choisissez le parfum, la couleur et le message", ar: "اختاروا النكهة واللون والعبارة" },
    price: 280, tag: { en: "Birthday", fr: "Anniversaire", ar: "عيد ميلاد" }
  },
  {
    id: "wedding-cake", category: "celebrations", image: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=900&q=80",
    name: { en: "Wedding celebration cake", fr: "Gâteau de mariage", ar: "كعكة الزفاف" },
    description: { en: "Elegant tiers, made for your day", fr: "Des étages élégants, pour votre grand jour", ar: "طبقات أنيقة ليومكم المميز" },
    price: 950, tag: { en: "Weddings", fr: "Mariages", ar: "الأعراس" }
  },
  {
    id: "study-success-box", category: "gift-boxes", image: "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?auto=format&fit=crop&w=900&q=80",
    name: { en: "Study success treat box", fr: "Coffret réussite aux examens", ar: "علبة النجاح الدراسي" },
    description: { en: "A sweet reward for a job well done", fr: "Une douce récompense pour vos efforts", ar: "مكافأة حلوة على الاجتهاد" },
    price: 150, tag: { en: "You did it!", fr: "Bravo !", ar: "أحسنتم!" }
  },
  {
    id: "new-year-cake", category: "celebrations", image: "https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&w=900&q=80",
    name: { en: "New Year sparkle cake", fr: "Gâteau du Nouvel An", ar: "كعكة رأس السنة" },
    description: { en: "A festive centrepiece to welcome the year", fr: "Une création festive pour la nouvelle année", ar: "كعكة احتفالية لاستقبال العام الجديد" },
    price: 320, tag: { en: "New Year", fr: "Nouvel An", ar: "رأس السنة" }
  },
  {
    id: "graduation-cake", category: "cakes", image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=900&q=80",
    name: { en: "Graduation day cake", fr: "Gâteau de remise de diplôme", ar: "كعكة التخرج" },
    description: { en: "Personalised for their big achievement", fr: "Personnalisé pour leur belle réussite", ar: "مخصصة للاحتفال بإنجازهم الكبير" },
    price: 290, tag: { en: "Big achievement", fr: "Belle réussite", ar: "إنجاز كبير" }
  },
  {
    id: "engagement-cake", category: "celebrations", image: "https://images.unsplash.com/photo-1535254973040-607b474cb50d?auto=format&fit=crop&w=900&q=80",
    name: { en: "Engagement cake", fr: "Gâteau de fiançailles", ar: "كعكة الخطوبة" },
    description: { en: "A lovely beginning, made sweeter", fr: "Un beau début, encore plus doux", ar: "بداية جميلة بطعم أحلى" },
    price: 380, tag: { en: "Engagements", fr: "Fiançailles", ar: "الخطوبة" }
  },
  {
    id: "eid-cookie-box", category: "gift-boxes", image: "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?auto=format&fit=crop&w=900&q=80",
    name: { en: "Eid sharing box", fr: "Coffret à partager pour l'Aïd", ar: "علبة حلويات العيد" },
    description: { en: "A festive mix of little sweet bites", fr: "Un assortiment festif de petites douceurs", ar: "تشكيلة احتفالية من الحلويات الصغيرة" },
    price: 180, tag: { en: "Made for sharing", fr: "À partager", ar: "للمشاركة" }
  },
  {
    id: "baby-celebration-cake", category: "celebrations", image: "https://images.unsplash.com/photo-1562777717-dc6984f65a63?auto=format&fit=crop&w=900&q=80",
    name: { en: "Little one celebration cake", fr: "Gâteau pour une naissance", ar: "كعكة استقبال المولود" },
    description: { en: "A sweet welcome for your newest love", fr: "Une douce bienvenue à votre petit trésor", ar: "ترحيب حلو بأجمل هدية" },
    price: 300, tag: { en: "New arrivals", fr: "Naissance", ar: "المولود الجديد" }
  },
  {
    id: "pistachio-tart", category: "pastries", image: "https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&w=900&q=80",
    name: { en: "Pistachio tart", fr: "Tarte pistache", ar: "تارت الفستق" },
    description: { en: "Silky pistachio, buttery shell", fr: "Pistache fondante, pâte sablée", ar: "فستق كريمي وقاعدة مقرمشة" },
    price: 42, tag: { en: "Baker's pick", fr: "Le choix du chef", ar: "اختيار الشيف" }
  },
  {
    id: "berry-tart", category: "pastries", image: "https://images.unsplash.com/photo-1464305795204-6f5bbfc7fb81?auto=format&fit=crop&w=900&q=80",
    name: { en: "Seasonal fruit tart", fr: "Tarte aux fruits de saison", ar: "تارت الفواكه الموسمية" },
    description: { en: "Fresh fruit, smooth vanilla custard", fr: "Fruits frais et crème vanille", ar: "فواكه طازجة وكريمة الفانيلا" },
    price: 38, tag: { en: "Seasonal", fr: "De saison", ar: "فواكه موسمية" }
  },
  {
    id: "chocolate-eclairs", category: "pastries", image: "https://images.unsplash.com/photo-1551024506-0bccd828d307?auto=format&fit=crop&w=900&q=80",
    name: { en: "Chocolate éclairs", fr: "Éclairs au chocolat", ar: "إكلير بالشوكولاتة" },
    description: { en: "Light choux, rich chocolate cream", fr: "Pâte à choux légère, crème chocolat", ar: "عجينة خفيفة وكريمة شوكولاتة غنية" },
    price: 24, tag: { en: "A little classic", fr: "Un grand classique", ar: "حلوى كلاسيكية" }
  },
  {
    id: "celebration-cupcakes", category: "gift-boxes", image: "https://images.unsplash.com/photo-1426869981800-95ebf51ce900?auto=format&fit=crop&w=900&q=80",
    name: { en: "Celebration cupcakes", fr: "Cupcakes de fête", ar: "كعكات الاحتفال الصغيرة" },
    description: { en: "A colourful box of six little cakes", fr: "Une boîte colorée de six petits gâteaux", ar: "علبة ملونة تضم ست كعكات صغيرة" },
    price: 120, tag: { en: "Box of six", fr: "Boîte de six", ar: "علبة من ست قطع" }
  }
];

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

function applyTheme() {
  document.documentElement.dataset.theme = theme;
  const themeToggle = document.querySelector(".theme-toggle");
  themeToggle.innerHTML = `<span aria-hidden="true">${theme === "dark" ? "☀" : "☾"}</span>`;
  themeToggle.setAttribute("aria-label", theme === "dark" ? t("themeLightText") : t("themeDarkText"));
  document.querySelector('meta[name="theme-color"]').content = theme === "dark" ? "#211f1b" : "#f8f5ef";
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
        <img class="product-image" src="${product.image}" alt="${product.name[language]}" loading="lazy">
        <span class="product-tag">${product.tag[language]}</span>
        <button class="add-button" type="button" data-add="${product.id}" aria-label="${language === "fr" ? "Ajouter" : language === "ar" ? "أضيفوا" : "Add"} ${product.name[language]} ${language === "fr" ? "à la commande" : language === "ar" ? "إلى الطلب" : "to your order"}">+</button>
      </div>
      <div class="product-meta">
        <div><h3 class="product-name">${product.name[language]}</h3><p class="product-description">${product.description[language]}</p></div>
        <span class="product-price">${language === "ar" ? "ابتداءً من " : language === "fr" ? "Dès " : "From "}${product.price} ${language === "ar" ? "د.م." : "MAD"}</span>
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
        <h3>${product.name[language]}</h3>
        <p>${language === "ar" ? "ابتداءً من " : language === "fr" ? "Dès " : "From "}${product.price} ${language === "ar" ? "د.م." : "MAD"}</p>
        <div class="quantity-control" aria-label="${product.name[language]} ${language === "fr" ? "quantité" : language === "ar" ? "الكمية" : "quantity"}">
          <button type="button" data-quantity="${product.id}" data-change="-1" aria-label="${language === "fr" ? "Retirer un" : language === "ar" ? "إنقاص الكمية" : "Remove one"}">−</button>
          <span>${cart[product.id]}</span>
          <button type="button" data-quantity="${product.id}" data-change="1" aria-label="${language === "fr" ? "Ajouter un" : language === "ar" ? "زيادة الكمية" : "Add one"}">+</button>
        </div>
      </div>
      <button class="remove-item" type="button" data-remove="${product.id}" aria-label="${t("remove")} ${product.name[language]}">×</button>
    </div>
  `).join("");
  drawerEmpty.hidden = entries.length > 0;
  drawerItems.hidden = entries.length === 0;
  document.querySelector(".drawer-whatsapp").hidden = entries.length === 0;
  if (entries.length) {
    const message = [
      t("whatsappMessage"),
      ...entries.map(product => `• ${cart[product.id]} × ${product.name[language]} (${product.price} ${language === "ar" ? "د.م." : "MAD"} ${language === "fr" ? "à partir de" : language === "ar" ? "ابتداءً من" : "starting"})`),
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
  showToast(`${products.find(product => product.id === id).name[language]} — ${t("added")}`);
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
