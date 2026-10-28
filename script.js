// Configuration: change this constant to update Hakim Pastry's WhatsApp Business number.
const WHATSAPP_NUMBER = "212625783839";
const CUSTOM_CAKE_IMAGE_MAX_SIZE = 5 * 1024 * 1024;
const CART_STORAGE_KEY = "hakim-patisserie-order";
const THEME_STORAGE_KEY = "hakim-patisserie-theme";
const CAKE_PRICING = {
  "birthday-cakes": {
    title: "GÃ¢teaux Design",
    subtitle: "GÃ¢teaux dâ€™anniversaire â€¢ Layer Cakes",
    sizes: [
      { people: 6, price: 300 },
      { people: 8, price: 400 },
      { people: 10, price: 500 },
      { people: 12, price: 600 },
      { people: 15, price: 750 },
      { people: 20, price: 1000 }
    ]
  },
  "wedding-cakes": {
    title: "PiÃ¨ces MontÃ©es de Mariage",
    subtitle: "GÃ¢teaux de mariage",
    sizeLabel: "Nombre de personnes",
    unit: "personnes",
    buttonLabel: "Choisir ce gÃ¢teau",
    sizes: [
      { people: 40, price: 2000 },
      { people: 50, price: 2500 },
      { people: 60, price: 3500 },
      { people: 70, price: 3500 },
      { people: 80, price: 4000 }
    ]
  },
  plateaux: {
    title: "Plateau",
    subtitle: "Assortiments Ã  partager",
    sizeLabel: "Nombre de piÃ¨ces",
    unit: "piÃ¨ces",
    buttonLabel: "Choisir ce plateau",
    sizes: [
      { people: 24, price: 140 },
      { people: 48, price: 250 }
    ]
  }
};

const translations = {
  en: {
    announcement: "A little sweetness, freshly made in Morocco âœ³ Made to order, made with love",
    navMenu: "The menu", navStory: "Our little story", bag: "Your order",
    heroEyebrow: "Handcrafted in Morocco", heroTitle: "Make every moment<br><em>taste extraordinary.</em>",
    heroDescription: "Slow mornings, shared tables and one more slice. Find something lovely for your next little celebration.",
    exploreMenu: "Explore the menu", heroNote: "Baked fresh, always", heroFootnote: "A little joy, wrapped in paper.",
    stickerTop: "MADE BY HAND", stickerBottom: "SHARED WITH LOVE", heroCaption: "Hakim Pastry Â· Morocco",
    marquee: "A little sweetness goes a long way", marqueeTwo: "Made for sharing",
    menuEyebrow: "From our little kitchen", menuTitle: "Something for <em>every</em> sweet tooth.",
    menuIntro: "Explore our own collection of birthday cakes, mini cakes, wedding cakes and pastry platters.",
    categoryAll: "Everything", categoryBirthdayCakes: "Design cakes",
    categoryMiniCakes: "Mini cakes",
    categoryWeddingCakes: "Wedding tiers",
    categoryPlateaux: "Plateaux",
    priceOnRequest: "Price on request",
    productBirthdayCake: "Birthday cake", productMiniCake: "Mini cake",
    productWeddingCake: "Wedding cake", productPlateau: "Plateau",
    productDescription: "Message us for details and availability.", productTag: "Made to order",
    menuCount: "photo designs", priceNote: "Prices shown apply to the listed sizes. For other creations, contact us for details and pricing.",
    storyEyebrow: "A little about us", storyTitle: "Good things take<br><em>a little time.</em>",
    storyBody: "At Hakim Pastry, every creation begins with a simple idea: make something worth gathering around. Explore our photo collection and message us to discuss your order, here in Morocco.",
    storyLink: "Meet your new favourite", signatureLabel: "Made with care, every day",
    orderEyebrow: "A good day starts here", orderTitle: "Your next lovely<br>thing is <em>just a message away.</em>",
    orderCopy: "Tell us what you're celebrating. We'll help make it a little sweeter.",
    whatsappCta: "Let's talk on WhatsApp", floatingLabel: "Chat with us", footerNote: "A little sweetness, made by hand in Morocco.",
    backToTop: "Back to the top â†‘", drawerEyebrow: "Something lovely", drawerTitle: "Your order",
    drawerEmpty: "Your order is waiting for a little something.", continueShopping: "Take a look at the menu",
    drawerDisclaimer: "Your order is only confirmed once Hakim Pastry has checked and confirmed it on WhatsApp.",
    sendOrder: "Order on WhatsApp", added: "Added to your order", remove: "Remove",
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
    announcement: "Une touche de douceur, prÃ©parÃ©e au Maroc âœ³ Sur commande, avec amour",
    navMenu: "La carte", navStory: "Notre histoire", bag: "Ma commande",
    heroEyebrow: "PrÃ©parÃ© avec soin au Maroc", heroTitle: "Chaque moment mÃ©rite<br><em>une touche d'exception.</em>",
    heroDescription: "Des matins tranquilles, une table Ã  partager et une derniÃ¨re part. Trouvez une douceur pour votre prochaine fÃªte.",
    exploreMenu: "DÃ©couvrir la carte", heroNote: "Toujours frais, toujours fait maison", heroFootnote: "Un peu de bonheur, joliment emballÃ©.",
    stickerTop: "FAIT Ã€ LA MAIN", stickerBottom: "Ã€ PARTAGER AVEC AMOUR", heroCaption: "Hakim Pastry Â· Maroc",
    marquee: "Un peu de douceur change tout", marqueeTwo: "Ã€ partager",
    menuEyebrow: "Tout droit de notre cuisine", menuTitle: "Une douceur pour <em>chaque</em> envie.",
    menuIntro: "DÃ©couvrez notre collection de gÃ¢teaux d'anniversaire, mini-gÃ¢teaux, gÃ¢teaux de mariage et plateaux.",
    categoryAll: "Tout", categoryBirthdayCakes: "GÃ¢teaux Design",
    categoryMiniCakes: "Mini-gÃ¢teaux",
    categoryWeddingCakes: "PiÃ¨ces MontÃ©es de Mariage",
    categoryPlateaux: "Plateaux",
    priceOnRequest: "Prix sur demande",
    productBirthdayCake: "GÃ¢teau d'anniversaire", productMiniCake: "Mini-gÃ¢teau",
    productWeddingCake: "GÃ¢teau de mariage", productPlateau: "Plateau",
    productDescription: "Ã‰crivez-nous pour les dÃ©tails et la disponibilitÃ©.", productTag: "Sur commande",
    menuCount: "modÃ¨les en photo", priceNote: "Les prix affichÃ©s concernent les tailles indiquÃ©es. Pour les autres crÃ©ations, contactez-nous afin de connaÃ®tre les dÃ©tails et le tarif.",
    storyEyebrow: "Un peu de nous", storyTitle: "Les bonnes choses<br>prennent <em>leur temps.</em>",
    storyBody: "Chez Hakim Pastry, chaque crÃ©ation part d'une idÃ©e toute simple : prÃ©parer de bonnes choses autour desquelles se retrouver. DÃ©couvrez notre collection en photo et Ã©crivez-nous pour votre commande, ici au Maroc.",
    storyLink: "Trouvez votre nouvelle prÃ©fÃ©rÃ©e", signatureLabel: "PrÃ©parÃ© avec soin, chaque jour",
    orderEyebrow: "Les bons jours commencent ici", orderTitle: "Votre prochaine douceur<br>est <em>Ã  un message d'ici.</em>",
    orderCopy: "Dites-nous ce que vous fÃªtez. Nous rendrons ce moment encore plus doux.",
    whatsappCta: "Parlons sur WhatsApp", floatingLabel: "Ã‰crivez-nous", footerNote: "Un peu de douceur, faite Ã  la main au Maroc.",
    backToTop: "Retour en haut â†‘", drawerEyebrow: "Une jolie envie", drawerTitle: "Ma commande",
    drawerEmpty: "Votre panier est vide. Ajoutez dâ€™abord un gÃ¢teau pour passer commande.", continueShopping: "DÃ©couvrir la carte",
    drawerDisclaimer: "Votre commande ne sera confirmÃ©e quâ€™aprÃ¨s vÃ©rification et confirmation de Hakim Pastry sur WhatsApp.",
    sendOrder: "Commander sur WhatsApp", added: "AjoutÃ© au panier", remove: "Supprimer",
    whatsappMessage: "Bonjour Hakim Pastry ! J'aimerais commander :",
    availabilityMessage: "Pouvez-vous confirmer la disponibilitÃ© et le prix final ?",
    whatsappGreeting: "Bonjour Hakim Pastry ! J'aimerais en savoir plus sur vos douceurs.",
    themeLight: "Passer en mode clair", themeDark: "Passer en mode sombre",
    themeDarkText: "Activer le mode sombre", themeLightText: "Activer le mode clair",
    menuAria: "Filtrer la carte par catÃ©gorie", navAria: "Navigation principale",
    logoAria: "Accueil Hakim Pastry", drawerClose: "Fermer la commande",
    floatingAria: "Contacter Hakim Pastry sur WhatsApp", itemAdded: "AjoutÃ© Ã  votre commande"
  },
  ar: {
    announcement: "Ø­Ù„ÙˆÙŠØ§Øª Ø·Ø§Ø²Ø¬Ø© ØªÙØ­Ø¶Ù‘Ø± Ø¨Ø­Ø¨ ÙÙŠ Ø§Ù„Ù…ØºØ±Ø¨ âœ³ Ø­Ø³Ø¨ Ø§Ù„Ø·Ù„Ø¨ ÙˆØ¨ÙƒÙ„ Ù…Ø­Ø¨Ø©",
    navMenu: "Ù‚Ø§Ø¦Ù…Ø© Ø§Ù„Ø­Ù„ÙˆÙŠØ§Øª", navStory: "Ù‚ØµØªÙ†Ø§", bag: "Ø·Ù„Ø¨ÙŠ",
    heroEyebrow: "Ø­Ù„ÙˆÙŠØ§Øª Ø­Ø§Ø±ØªÙƒÙ…", heroTitle: "Ù„Ø£Ø¬Ù„ <em>Ø§Ù„Ù„Ø­Ø¸Ø§Øª</em><br>Ø§Ù„Ø¬Ù…ÙŠÙ„Ø©.",
    heroDescription: "ØµØ¨Ø§Ø­ Ù‡Ø§Ø¯Ø¦ØŒ Ù…Ø§Ø¦Ø¯Ø© ØªØ¬Ù…Ø¹ Ø§Ù„Ø£Ø­Ø¨Ø§Ø¨ØŒ ÙˆÙ‚Ø·Ø¹Ø© Ø­Ù„ÙˆÙ‰ Ø£Ø®Ø±Ù‰. Ø§ÙƒØªØ´ÙÙˆØ§ Ù…Ø§ ÙŠØ¬Ø¹Ù„ Ù…Ù†Ø§Ø³Ø¨ØªÙƒÙ… Ø§Ù„Ù‚Ø§Ø¯Ù…Ø© Ø£Ø¬Ù…Ù„.",
    exploreMenu: "Ø§ÙƒØªØ´ÙÙˆØ§ Ø§Ù„Ù‚Ø§Ø¦Ù…Ø©", heroNote: "Ø·Ø§Ø²Ø¬Ø© ÙƒÙ„ ÙŠÙˆÙ…", heroFootnote: "Ù‚Ù„ÙŠÙ„ Ù…Ù† Ø§Ù„ÙØ±Ø­ØŒ Ù…ØºÙ„Ù Ø¨Ø¹Ù†Ø§ÙŠØ©.",
    stickerTop: "ØµÙÙ†Ø¹ ÙŠØ¯ÙˆÙŠÙ‹Ø§", stickerBottom: "Ø¨ÙƒÙ„ Ù…Ø­Ø¨Ø©", heroCaption: "Hakim Pastry Â· Ø§Ù„Ù…ØºØ±Ø¨",
    marquee: "Ù‚Ù„ÙŠÙ„ Ù…Ù† Ø§Ù„Ø­Ù„Ø§ÙˆØ© ÙŠØµÙ†Ø¹ ÙØ±Ù‚Ù‹Ø§ ÙƒØ¨ÙŠØ±Ù‹Ø§", marqueeTwo: "Ø£Ø­Ù„Ù‰ Ù…Ø¹ Ø§Ù„Ø£Ø­Ø¨Ø§Ø¨",
    menuEyebrow: "Ù…Ù† Ù…Ø·Ø¨Ø®Ù†Ø§ Ø§Ù„ØµØºÙŠØ±", menuTitle: "Ø­Ù„ÙˆÙ‰ Ù„ÙƒÙ„ <em>Ù…Ù†Ø§Ø³Ø¨Ø©.</em>",
    menuIntro: "Ø§ÙƒØªØ´ÙÙˆØ§ Ù…Ø¬Ù…ÙˆØ¹ØªÙ†Ø§ Ø§Ù„Ù…ØµÙˆÙ‘Ø±Ø© Ù…Ù† ÙƒØ¹ÙƒØ§Øª Ø£Ø¹ÙŠØ§Ø¯ Ø§Ù„Ù…ÙŠÙ„Ø§Ø¯ ÙˆØ§Ù„ÙƒØ¹ÙƒØ§Øª Ø§Ù„ØµØºÙŠØ±Ø© ÙˆÙƒØ¹ÙƒØ§Øª Ø§Ù„Ø²ÙØ§Ù ÙˆØµÙˆØ§Ù†ÙŠ Ø§Ù„Ø­Ù„ÙˆÙŠØ§Øª.",
    categoryAll: "Ø§Ù„ÙƒÙ„", categoryBirthdayCakes: "ÙƒØ¹ÙƒØ§Øª Ø£Ø¹ÙŠØ§Ø¯ Ø§Ù„Ù…ÙŠÙ„Ø§Ø¯",
    categoryMiniCakes: "ÙƒØ¹ÙƒØ§Øª ØµØºÙŠØ±Ø©",
    categoryWeddingCakes: "ÙƒØ¹ÙƒØ§Øª Ø²ÙØ§Ù Ù…ØªØ¹Ø¯Ø¯Ø© Ø§Ù„Ø·Ø¨Ù‚Ø§Øª",
    categoryPlateaux: "ØµÙˆØ§Ù†ÙŠ Ø§Ù„Ø­Ù„ÙˆÙ‰",
    priceOnRequest: "Ø§Ù„Ø³Ø¹Ø± Ø¹Ù†Ø¯ Ø§Ù„Ø·Ù„Ø¨",
    productBirthdayCake: "ÙƒØ¹ÙƒØ© Ø¹ÙŠØ¯ Ù…ÙŠÙ„Ø§Ø¯", productMiniCake: "ÙƒØ¹ÙƒØ© ØµØºÙŠØ±Ø©",
    productWeddingCake: "ÙƒØ¹ÙƒØ© Ø²ÙØ§Ù", productPlateau: "ØµÙŠÙ†ÙŠØ© Ø­Ù„ÙˆÙŠØ§Øª",
    productDescription: "Ø±Ø§Ø³Ù„ÙˆÙ†Ø§ Ù„Ù…Ø¹Ø±ÙØ© Ø§Ù„ØªÙØ§ØµÙŠÙ„ ÙˆØ§Ù„ØªÙˆÙØ±.", productTag: "Ø­Ø³Ø¨ Ø§Ù„Ø·Ù„Ø¨",
    menuCount: "ØªØµØ§Ù…ÙŠÙ… Ù…ØµÙˆÙ‘Ø±Ø©", priceNote: "ÙŠÙØ­Ø¶Ù‘Ø± ÙƒÙ„ ØªØµÙ…ÙŠÙ… Ø­Ø³Ø¨ Ø§Ù„Ø·Ù„Ø¨. Ø±Ø§Ø³Ù„ÙˆÙ†Ø§ Ù„Ù…Ø¹Ø±ÙØ© Ø§Ù„ØªÙØ§ØµÙŠÙ„ ÙˆØ§Ù„ØªÙˆÙØ±.",
    storyEyebrow: "ØªØ¹Ø±ÙÙˆØ§ Ø¹Ù„ÙŠÙ†Ø§", storyTitle: "Ø§Ù„Ø£Ø´ÙŠØ§Ø¡ Ø§Ù„Ø¬Ù…ÙŠÙ„Ø©<br>ØªØ­ØªØ§Ø¬ <em>Ù‚Ù„ÙŠÙ„Ù‹Ø§ Ù…Ù† Ø§Ù„ÙˆÙ‚Øª.</em>",
    storyBody: "ÙÙŠ Hakim PastryØŒ ØªØ¨Ø¯Ø£ ÙƒÙ„ ÙˆØµÙØ© Ø¨ÙÙƒØ±Ø© Ø¨Ø³ÙŠØ·Ø©: Ø£Ù† Ù†ØµÙ†Ø¹ Ø´ÙŠØ¦Ù‹Ø§ ÙŠØ¬Ù…Ø¹ Ø§Ù„Ø£Ø­Ø¨Ø§Ø¨. Ø§ÙƒØªØ´ÙÙˆØ§ Ù…Ø¬Ù…ÙˆØ¹ØªÙ†Ø§ Ø§Ù„Ù…ØµÙˆÙ‘Ø±Ø© ÙˆØ±Ø§Ø³Ù„ÙˆÙ†Ø§ Ù„Ù…Ù†Ø§Ù‚Ø´Ø© Ø·Ù„Ø¨ÙƒÙ…ØŒ Ù‡Ù†Ø§ ÙÙŠ Ø§Ù„Ù…ØºØ±Ø¨.",
    storyLink: "Ø§ÙƒØªØ´ÙÙˆØ§ Ø­Ù„ÙˆÙ‰ Ø¬Ø¯ÙŠØ¯Ø©", signatureLabel: "Ù…Ø­Ø¶Ù‘Ø± Ø¨Ø¹Ù†Ø§ÙŠØ© ÙƒÙ„ ÙŠÙˆÙ…",
    orderEyebrow: "ÙŠØ¨Ø¯Ø£ Ø§Ù„ÙŠÙˆÙ… Ø§Ù„Ø¬Ù…ÙŠÙ„ Ù…Ù† Ù‡Ù†Ø§", orderTitle: "Ø­Ù„Ø§ÙˆØªÙƒÙ… Ø§Ù„Ù‚Ø§Ø¯Ù…Ø©<br><em>Ø¹Ù„Ù‰ Ø¨ÙØ¹Ø¯ Ø±Ø³Ø§Ù„Ø©.</em>",
    orderCopy: "Ø£Ø®Ø¨Ø±ÙˆÙ†Ø§ Ù…Ø§ Ø§Ù„Ù…Ù†Ø§Ø³Ø¨Ø©ØŒ ÙˆØ³Ù†Ø¶ÙŠÙ Ø¥Ù„ÙŠÙ‡Ø§ Ø§Ù„Ù…Ø²ÙŠØ¯ Ù…Ù† Ø§Ù„Ø­Ù„Ø§ÙˆØ©.",
    whatsappCta: "ØªÙˆØ§ØµÙ„ÙˆØ§ Ù…Ø¹Ù†Ø§ Ø¹Ø¨Ø± ÙˆØ§ØªØ³Ø§Ø¨", floatingLabel: "Ø±Ø§Ø³Ù„ÙˆÙ†Ø§",
    footerNote: "Ø­Ù„Ø§ÙˆØ© Ù…ØºØ±Ø¨ÙŠØ©ØŒ Ù…Ø­Ø¶Ø±Ø© ÙŠØ¯ÙˆÙŠÙ‹Ø§ Ø¨ÙƒÙ„ Ø­Ø¨.",
    backToTop: "Ø§Ù„Ø¹ÙˆØ¯Ø© Ø¥Ù„Ù‰ Ø§Ù„Ø£Ø¹Ù„Ù‰ â†‘", drawerEyebrow: "Ø§Ø®ØªÙŠØ§Ø± Ù„Ø°ÙŠØ°", drawerTitle: "Ø·Ù„Ø¨ÙŠ",
    drawerEmpty: "Ø·Ù„Ø¨ÙƒÙ… ÙŠÙ†ØªØ¸Ø± Ø¥Ø¶Ø§ÙØ© Ø´ÙŠØ¡ Ù„Ø°ÙŠØ°.", continueShopping: "ØªØµÙØ­ÙˆØ§ Ù‚Ø§Ø¦Ù…Ø© Ø§Ù„Ø­Ù„ÙˆÙŠØ§Øª",
    drawerDisclaimer: "Ø³Ù†Ø¤ÙƒØ¯ Ø·Ù„Ø¨ÙƒÙ… ÙˆØ§Ù„Ø³Ø¹Ø± Ø§Ù„Ù†Ù‡Ø§Ø¦ÙŠ Ø¹Ø¨Ø± ÙˆØ§ØªØ³Ø§Ø¨.",
    sendOrder: "Ø¥Ø±Ø³Ø§Ù„ Ø§Ù„Ø·Ù„Ø¨ Ø¹Ø¨Ø± ÙˆØ§ØªØ³Ø§Ø¨", added: "Ø£ÙØ¶ÙŠÙ Ø¥Ù„Ù‰ Ø·Ù„Ø¨ÙƒÙ…", remove: "Ø­Ø°Ù",
    whatsappMessage: "Ù…Ø±Ø­Ø¨Ù‹Ø§ Hakim Pastry! Ø£ÙˆØ¯ Ø·Ù„Ø¨:",
    availabilityMessage: "Ù‡Ù„ ÙŠÙ…ÙƒÙ†ÙƒÙ… ØªØ£ÙƒÙŠØ¯ Ø§Ù„ØªÙˆÙØ± ÙˆØ§Ù„Ø³Ø¹Ø± Ø§Ù„Ù†Ù‡Ø§Ø¦ÙŠØŸ",
    whatsappGreeting: "Ù…Ø±Ø­Ø¨Ù‹Ø§ Hakim Pastry! Ø£ÙˆØ¯ Ù…Ø¹Ø±ÙØ© Ø§Ù„Ù…Ø²ÙŠØ¯ Ø¹Ù† Ø­Ù„ÙˆÙŠØ§ØªÙƒÙ….",
    themeLight: "Ø§Ù„ØªØ¨Ø¯ÙŠÙ„ Ø¥Ù„Ù‰ Ø§Ù„ÙˆØ¶Ø¹ Ø§Ù„ÙØ§ØªØ­", themeDark: "Ø§Ù„ØªØ¨Ø¯ÙŠÙ„ Ø¥Ù„Ù‰ Ø§Ù„ÙˆØ¶Ø¹ Ø§Ù„Ø¯Ø§ÙƒÙ†",
    themeDarkText: "ØªÙØ¹ÙŠÙ„ Ø§Ù„ÙˆØ¶Ø¹ Ø§Ù„Ø¯Ø§ÙƒÙ†", themeLightText: "ØªÙØ¹ÙŠÙ„ Ø§Ù„ÙˆØ¶Ø¹ Ø§Ù„ÙØ§ØªØ­",
    menuAria: "ØªØµÙÙŠØ© Ø§Ù„Ø­Ù„ÙˆÙŠØ§Øª Ø­Ø³Ø¨ Ø§Ù„ÙØ¦Ø©", navAria: "Ø§Ù„ØªÙ†Ù‚Ù„ Ø§Ù„Ø±Ø¦ÙŠØ³ÙŠ",
    logoAria: "Ø§Ù„ØµÙØ­Ø© Ø§Ù„Ø±Ø¦ÙŠØ³ÙŠØ© Hakim Pastry", drawerClose: "Ø¥ØºÙ„Ø§Ù‚ Ø§Ù„Ø·Ù„Ø¨",
    floatingAria: "ØªÙˆØ§ØµÙ„ÙˆØ§ Ù…Ø¹ Hakim Pastry Ø¹Ø¨Ø± ÙˆØ§ØªØ³Ø§Ø¨", itemAdded: "Ø£ÙØ¶ÙŠÙ Ø¥Ù„Ù‰ Ø·Ù„Ø¨ÙƒÙ…"
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
const selectedServings = new Map();
products.forEach(product => {
  const number = (productCategoryCounts.get(product.category) || 0) + 1;
  productCategoryCounts.set(product.category, number);
  productNumbers.set(product.id, number);
});

function getProductName(product) {
  const pricing = CAKE_PRICING[product.category];
  if (pricing) {
    return `${pricing.title} Â· ModÃ¨le ${String(productNumbers.get(product.id)).padStart(2, "0")}`;
  }
  return `${t(productNameKeys[product.category])} ${String(productNumbers.get(product.id)).padStart(2, "0")}`;
}

function getCartKey(productId, servings) {
  return `${productId}::${servings || "Ã -confirmer"}`;
}

function getServingPrice(productId, servings) {
  const product = products.find(item => item.id === productId);
  const pricing = product && CAKE_PRICING[product.category];
  const size = pricing && pricing.sizes.find(item => item.people === servings);
  return size ? size.price : null;
}

function getServingLabel(productId, servings) {
  const product = products.find(item => item.id === productId);
  const unit = product && CAKE_PRICING[product.category]?.unit;
  return `${servings} ${unit || "personnes"}`;
}

function formatMoney(amount) {
  return `${new Intl.NumberFormat("fr-FR").format(amount)} DH`;
}

function formatBusinessNumber() {
  return `+${WHATSAPP_NUMBER.slice(0, 3)} ${WHATSAPP_NUMBER.slice(3, 6)} ${WHATSAPP_NUMBER.slice(6, 9)} ${WHATSAPP_NUMBER.slice(9)}`;
}

let language = "fr";
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
const customCakeForm = document.querySelector("#custom-cake-form");
const customCakeOpenButton = document.querySelector("#custom-cake-open");
const inspirationInput = document.querySelector("#cake-inspiration");
const photoPreview = document.querySelector("#photo-preview");
const photoPreviewImage = document.querySelector("#photo-preview-image");
const photoError = document.querySelector("#photo-error");
const photoWhatsappNote = document.querySelector("#photo-whatsapp-note");
let inspirationPreviewUrl = "";

function loadCart() {
  try {
    const saved = JSON.parse(localStorage.getItem(CART_STORAGE_KEY) || "{}");
    if (!saved || typeof saved !== "object" || Array.isArray(saved)) return {};
    return Object.entries(saved).reduce((restored, [key, value]) => {
      const item = Number.isInteger(value)
        ? { productId: key, servings: null, quantity: value }
        : value;
      if (!item || typeof item !== "object" ||
          !products.some(product => product.id === item.productId) ||
          !Number.isInteger(item.quantity) || item.quantity < 1 ||
          (item.servings !== null && !Number.isInteger(item.servings)) ||
          (item.servings !== null && getServingPrice(item.productId, item.servings) === null)) {
        return restored;
      }
      const cartKey = getCartKey(item.productId, item.servings);
      restored[cartKey] = {
        productId: item.productId,
        servings: item.servings,
        quantity: item.quantity
      };
      return restored;
    }, {});
  } catch (error) {
    console.error("Unable to load the saved order.", error);
    return {};
  }
}

function loadTheme() {
  try {
    return localStorage.getItem(THEME_STORAGE_KEY) === "light" ? "light" : "dark";
  } catch (error) {
    console.error("Unable to load the saved color theme.", error);
    return "dark";
  }
}

function saveCart() {
  try {
    localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cart));
  } catch (error) {
    console.error("Unable to save the current order.", error);
    showToast(language === "fr" ? "La commande ne peut pas Ãªtre enregistrÃ©e sur cet appareil." : language === "ar" ? "ØªØ¹Ø°Ø± Ø­ÙØ¸ Ø§Ù„Ø·Ù„Ø¨ Ø¹Ù„Ù‰ Ù‡Ø°Ø§ Ø§Ù„Ø¬Ù‡Ø§Ø²." : "This order could not be saved on this device.");
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
  themeToggle.innerHTML = `<span aria-hidden="true">${theme === "dark" ? "â˜€" : "â˜¾"}</span>`;
  themeToggle.setAttribute("aria-label", theme === "dark" ? t("themeLightText") : t("themeDarkText"));
  document.querySelector('meta[name="theme-color"]').content = theme === "dark" ? "#11100e" : "#f7f1e7";
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
  languageToggle.setAttribute("aria-label", language === "ar" ? "Ø§Ù„ØªØ¨Ø¯ÙŠÙ„ Ø¥Ù„Ù‰ Ø§Ù„Ø¥Ù†Ø¬Ù„ÙŠØ²ÙŠØ©" : language === "fr" ? "Passer en arabe" : "Switch to French");
  document.querySelector(".main-nav").setAttribute("aria-label", t("navAria"));
  document.querySelector(".category-list").setAttribute("aria-label", t("menuAria"));
  document.querySelectorAll(".wordmark").forEach(link => link.setAttribute("aria-label", t("logoAria")));
  document.querySelector(".drawer-close").setAttribute("aria-label", t("drawerClose"));
  document.querySelector(".floating-whatsapp").setAttribute("aria-label", t("floatingAria"));
  document.querySelector("[data-business-phone]").textContent = formatBusinessNumber();
  document.querySelector(".language-toggle").title = nextLanguageName;
  renderProducts();
  renderCart();
  updateWhatsAppLinks();
  applyTheme();
}

function renderProducts() {
  const visibleProducts = activeCategory === "all" ? products : products.filter(product => product.category === activeCategory);
  count.textContent = String(visibleProducts.length);
  grid.innerHTML = visibleProducts.map(product => {
    const pricing = CAKE_PRICING[product.category];
    const sizes = pricing?.sizes;
    const selectedSize = sizes && (
      sizes.find(size => size.people === selectedServings.get(product.id)) || sizes[0]
    );
    if (selectedSize) selectedServings.set(product.id, selectedSize.people);
    return `
    <article class="product-card${pricing ? " product-card-priced" : ""}" data-product-card="${product.id}">
      <div class="product-image-wrap">
        <img class="product-image" src="${product.image}" alt="${getProductName(product)}" loading="lazy">
        <span class="product-tag">${t("productTag")}</span>
        ${pricing ? "" : `<button class="add-button" type="button" data-add="${product.id}" aria-label="${language === "fr" ? "Ajouter" : language === "ar" ? "Ø£Ø¶ÙŠÙÙˆØ§" : "Add"} ${getProductName(product)} ${language === "fr" ? "Ã  la commande" : language === "ar" ? "Ø¥Ù„Ù‰ Ø§Ù„Ø·Ù„Ø¨" : "to your order"}">+</button>`}
      </div>
      <div class="product-meta">
        <div><h3 class="product-name">${getProductName(product)}</h3><p class="product-description">${pricing ? pricing.subtitle : t("productDescription")}</p></div>
        <span class="product-price"${pricing ? ` data-starting-price="${product.id}"` : ""}>${pricing ? `Ã€ partir de ${formatMoney(pricing.sizes[0].price)}` : formatPrice()}</span>
      </div>
      ${pricing ? `
        <div class="product-order-options">
          <label class="serving-size-label" for="${product.id}-serving-size">${pricing.sizeLabel || "Nombre de personnes"}
            <select id="${product.id}-serving-size" data-serving-size="${product.id}">
              ${sizes.map(size => `<option value="${size.people}" ${size.people === selectedSize.people ? "selected" : ""}>${getServingLabel(product.id, size.people)} â€” ${formatMoney(size.price)}</option>`).join("")}
            </select>
          </label>
          <p class="product-selection" aria-live="polite">Votre sÃ©lection : <span data-selection-size="${product.id}">${getServingLabel(product.id, selectedSize.people)}</span> Â· <strong data-selection-price="${product.id}">${formatMoney(selectedSize.price)}</strong></p>
          <button class="button button-dark product-select-button" type="button" data-add="${product.id}" data-servings="${selectedSize.people}">${pricing.buttonLabel || "Choisir ce gÃ¢teau"} <span aria-hidden="true">â†—</span></button>
        </div>
      ` : ""}
    </article>
  `}).join("");
}

function updateWhatsAppLinks() {
  const message = encodeURIComponent(t("whatsappGreeting"));
  document.querySelectorAll(".whatsapp-link").forEach(link => {
    link.href = `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`;
  });
  updateCustomCakeWhatsAppLinks();
}

function updateCustomCakeWhatsAppLinks() {
  const fields = [
    ["cake-servings", "ðŸŽ‚ Nombre de personnes"],
    ["cake-flavor", "ðŸ° Saveur souhaitÃ©e"],
    ["cake-date", "ðŸ“… Date souhaitÃ©e"],
    ["cake-budget", "ðŸ’° Budget approximatif"],
    ["cake-details", "ðŸ“ DÃ©tails"]
  ];
  const details = fields
    .map(([id, label]) => [label, document.querySelector(`#${id}`).value.trim()])
    .filter(([, value]) => value)
    .map(([label, value]) => `${label} : ${value}`);
  if (inspirationInput.files.length) {
    details.push("ðŸ“· Photo dâ€™inspiration : je la joindrai dans WhatsApp.");
  }
  const message = details.length
    ? `Bonjour Hakim Pastry ! ðŸ‘‹ Je souhaite me renseigner pour un gÃ¢teau personnalisÃ©.\n\n${details.join("\n")}\n\nPouvez-vous me renseigner sur les possibilitÃ©s et le prix ? Merci !`
    : "Bonjour Hakim Pastry ! ðŸ‘‹ Je voudrais avoir quelques renseignements, sâ€™il vous plaÃ®t.";
  const href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
  document.querySelectorAll("[data-custom-whatsapp]").forEach(link => {
    link.href = href;
  });
}

function clearInspirationPreview() {
  if (inspirationPreviewUrl) URL.revokeObjectURL(inspirationPreviewUrl);
  inspirationPreviewUrl = "";
  photoPreviewImage.removeAttribute("src");
  photoPreview.hidden = true;
  photoWhatsappNote.hidden = true;
  photoError.hidden = true;
  photoError.textContent = "";
}

function showPhotoError(message) {
  clearInspirationPreview();
  inspirationInput.value = "";
  photoError.textContent = message;
  photoError.hidden = false;
  updateCustomCakeWhatsAppLinks();
}

function updateBagCount() {
  const total = Object.values(cart).reduce((sum, item) => sum + item.quantity, 0);
  bagCount.textContent = String(total);
  bagCount.hidden = total === 0;
  document.querySelector(".bag-button").setAttribute("aria-label", `${t("bag")}, ${total}`);
  document.querySelector(".bag-button").title = `${t("bag")}, ${total}`;
}

function renderCart() {
  const entries = Object.entries(cart).map(([key, item]) => ({
    key,
    item,
    product: products.find(product => product.id === item.productId),
    unitPrice: getServingPrice(item.productId, item.servings)
  })).filter(entry => entry.product);
  const knownTotal = entries.reduce((sum, entry) =>
    entry.unitPrice === null ? sum : sum + entry.unitPrice * entry.item.quantity, 0
  );
  const hasUnpricedItems = entries.some(entry => entry.unitPrice === null);

  drawerItems.innerHTML = entries.map(({ key, item, product, unitPrice }) => `
    <div class="drawer-item">
      <img src="${product.image}" alt="" loading="lazy">
      <div class="drawer-item-details">
        <h3>${getProductName(product)}</h3>
        <p>${item.servings ? `Pour ${getServingLabel(item.productId, item.servings)}` : "Format Ã  choisir ou prix Ã  confirmer"}</p>
        <p>Prix unitaire : ${unitPrice === null ? "Ã  confirmer" : formatMoney(unitPrice)}</p>
        <p class="drawer-line-total">Total ligne : ${unitPrice === null ? "Ã  confirmer" : formatMoney(unitPrice * item.quantity)}</p>
        <div class="quantity-control" aria-label="${getProductName(product)} ${language === "fr" ? "quantitÃ©" : language === "ar" ? "Ø§Ù„ÙƒÙ…ÙŠØ©" : "quantity"}">
          <button type="button" data-quantity="${key}" data-change="-1" aria-label="${language === "fr" ? "Retirer un" : language === "ar" ? "Ø¥Ù†Ù‚Ø§Øµ Ø§Ù„ÙƒÙ…ÙŠØ©" : "Remove one"}">âˆ’</button>
          <span>${item.quantity}</span>
          <button type="button" data-quantity="${key}" data-change="1" aria-label="${language === "fr" ? "Ajouter un" : language === "ar" ? "Ø²ÙŠØ§Ø¯Ø© Ø§Ù„ÙƒÙ…ÙŠØ©" : "Add one"}">+</button>
        </div>
      </div>
      <button class="remove-item" type="button" data-remove="${key}" aria-label="${t("remove")} ${getProductName(product)}">Ã—</button>
    </div>
  `).join("");
  drawerEmpty.hidden = entries.length > 0;
  drawerItems.hidden = entries.length === 0;
  const cartTotal = document.querySelector("#cart-total");
  cartTotal.textContent = entries.length === 0
    ? ""
    : hasUnpricedItems
    ? knownTotal > 0
      ? `Sous-total estimÃ© (hors articles Ã  prix Ã  confirmer) : ${formatMoney(knownTotal)}`
      : "Total Ã  confirmer auprÃ¨s de Hakim Pastry."
    : `Total estimÃ© : ${formatMoney(knownTotal)}`;
  const cartValidation = document.querySelector("#cart-validation");
  cartValidation.hidden = true;
  cartValidation.textContent = "";
  const checkout = document.querySelector("#checkout-whatsapp");
  checkout.href = entries.length
    ? `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(buildOrderMessage(entries, knownTotal, hasUnpricedItems))}`
    : "#";
  checkout.setAttribute("aria-label", t("sendOrder"));
  updateBagCount();
}

function buildOrderMessage(entries, knownTotal, hasUnpricedItems) {
  const lines = [
    "Bonjour Hakim Pastry ! ðŸŽ‚",
    "",
    "Je souhaite commander :",
    "",
    ...entries.flatMap(({ item, product, unitPrice }, index) => [
      `${index + 1}. ${getProductName(product)}`,
      `   * Pour : ${item.servings ? getServingLabel(item.productId, item.servings) : "format Ã  dÃ©finir"}`,
      `   * QuantitÃ© : ${item.quantity}`,
      `   * Prix unitaire : ${unitPrice === null ? "Ã  confirmer" : formatMoney(unitPrice)}`,
      `   * Total ligne : ${unitPrice === null ? "Ã  confirmer" : formatMoney(unitPrice * item.quantity)}`
    ]),
    ""
  ];
  if (!hasUnpricedItems) {
    lines.push(`Total estimÃ© : ${formatMoney(knownTotal)}`);
  } else if (knownTotal > 0) {
    lines.push(`Sous-total estimÃ© (hors articles Ã  prix Ã  confirmer) : ${formatMoney(knownTotal)}`);
  } else {
    lines.push("Total estimÃ© : Ã  confirmer avec Hakim Pastry.");
  }
  if (inspirationInput.files.length) {
    lines.push("", "ðŸ“· Jâ€™ai choisi une photo dâ€™inspiration pour mon gÃ¢teau personnalisÃ© ; je la joindrai manuellement dans WhatsApp.");
  }
  lines.push("", "Bonjour, merci de confirmer la disponibilitÃ©, les dÃ©tails et le prix final de ma commande.");
  return lines.join("\n");
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

customCakeOpenButton.addEventListener("click", () => {
  customCakeForm.hidden = false;
  customCakeOpenButton.setAttribute("aria-expanded", "true");
  customCakeForm.querySelector("#cake-servings").focus();
});

document.querySelectorAll(".custom-cake-close").forEach(button => {
  button.addEventListener("click", () => {
    customCakeForm.hidden = true;
    customCakeOpenButton.setAttribute("aria-expanded", "false");
    customCakeOpenButton.focus();
  });
});

customCakeForm.addEventListener("input", updateCustomCakeWhatsAppLinks);

inspirationInput.addEventListener("change", () => {
  clearInspirationPreview();
  const [file] = inspirationInput.files;
  if (!file) {
    updateCustomCakeWhatsAppLinks();
    return;
  }
  const supportedTypes = ["image/jpeg", "image/png", "image/webp"];
  const hasSupportedExtension = /\.(jpe?g|png|webp)$/i.test(file.name);
  if (!supportedTypes.includes(file.type) && !hasSupportedExtension) {
    showPhotoError("Choisissez une image au format JPG, PNG ou WEBP.");
    return;
  }
  if (file.size > CUSTOM_CAKE_IMAGE_MAX_SIZE) {
    showPhotoError("Cette image dÃ©passe 5 Mo. Choisissez une image plus lÃ©gÃ¨re, sâ€™il vous plaÃ®t.");
    return;
  }
  inspirationPreviewUrl = URL.createObjectURL(file);
  photoPreviewImage.src = inspirationPreviewUrl;
  photoPreview.hidden = false;
  photoWhatsappNote.hidden = false;
  updateCustomCakeWhatsAppLinks();
});

document.querySelector("#photo-remove").addEventListener("click", () => {
  inspirationInput.value = "";
  clearInspirationPreview();
  updateCustomCakeWhatsAppLinks();
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
  const productId = button.dataset.add;
  const product = products.find(item => item.id === productId);
  if (!product) return;
  const servings = button.dataset.servings ? Number(button.dataset.servings) : null;
  const unitPrice = servings === null ? null : getServingPrice(productId, servings);
  if (CAKE_PRICING[product.category] && unitPrice === null) {
    showToast("Choisissez un nombre de personnes avant dâ€™ajouter ce gÃ¢teau.");
    return;
  }
  const key = getCartKey(productId, servings);
  const existing = cart[key];
  cart[key] = { productId, servings, quantity: (existing?.quantity || 0) + 1 };
  saveCart();
  renderCart();
  showToast(`${getProductName(product)}${servings ? ` Â· ${getServingLabel(productId, servings)}` : ""} â€” ${t("added")}`);
});

grid.addEventListener("change", event => {
  const select = event.target.closest("[data-serving-size]");
  if (!select) return;
  const productId = select.dataset.servingSize;
  const servings = Number(select.value);
  const price = getServingPrice(productId, servings);
  const card = select.closest("[data-product-card]");
  if (!card || price === null) return;
  selectedServings.set(productId, servings);
  card.querySelector(`[data-selection-size="${productId}"]`).textContent = getServingLabel(productId, servings);
  card.querySelector(`[data-selection-price="${productId}"]`).textContent = formatMoney(price);
  card.querySelector(`[data-starting-price="${productId}"]`).textContent = formatMoney(price);
  card.querySelector(`[data-add="${productId}"]`).dataset.servings = String(servings);
});

drawerItems.addEventListener("click", event => {
  const quantityButton = event.target.closest("[data-quantity]");
  const removeButton = event.target.closest("[data-remove]");
  if (removeButton) {
    delete cart[removeButton.dataset.remove];
  } else if (quantityButton) {
    const key = quantityButton.dataset.quantity;
    cart[key].quantity += Number(quantityButton.dataset.change);
    if (cart[key].quantity < 1) delete cart[key];
  } else {
    return;
  }
  saveCart();
  renderCart();
});

document.querySelector(".bag-button").addEventListener("click", openDrawer);
document.querySelector(".drawer-close").addEventListener("click", closeDrawer);
document.querySelector("#checkout-whatsapp").addEventListener("click", event => {
  if (Object.keys(cart).length) return;
  event.preventDefault();
  const message = "Ajoutez dâ€™abord un gÃ¢teau Ã  votre panier avant de commander.";
  const validation = document.querySelector("#cart-validation");
  validation.textContent = message;
  validation.hidden = false;
  showToast(message);
});
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
