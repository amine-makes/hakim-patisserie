const WHATSAPP_NUMBER = "212625783839";
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
    categoryMiniCakes: "Mini cakes",
    categoryWeddingCakes: "Wedding cakes",
    categoryPlateaux: "Plateaux",
    priceOnRequest: "Price on request",
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
    categoryMiniCakes: "Mini-gâteaux",
    categoryWeddingCakes: "Pièces montées de mariage",
    categoryPlateaux: "Plateaux",
    priceOnRequest: "Prix sur demande",
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
    categoryMiniCakes: "كعكات صغيرة",
    categoryWeddingCakes: "كعكات زفاف متعددة الطبقات",
    categoryPlateaux: "صواني الحلوى",
    priceOnRequest: "السعر عند الطلب",
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
    id: "birthday-cake-01", category: "cakes", image: "images/birthday-cakes/birthday cake (1).jpeg",
    name: { en: "Frozen birthday cake", fr: "Gâteau d'anniversaire Frozen", ar: "كعكة عيد ميلاد فروزن" },
    description: { en: "A magical blue cake inspired by Frozen, with a royal finish", fr: "Un gâteau bleu magique inspiré de Frozen, avec une finition royale", ar: "كعكة زرقاء ساحرة مستوحاة من فروزن مع لمسة ملكية" },
    price: 280, tag: { en: "Birthday", fr: "Anniversaire", ar: "عيد ميلاد" }
  },
  {
    id: "birthday-cake-02", category: "cakes", image: "images/birthday-cakes/birthday cake (2).jpeg",
    name: { en: "Unicorn celebration cake", fr: "Gâteau d'anniversaire licorne", ar: "كعكة احتفال لونيكورن" },
    description: { en: "Soft pastel colours, a unicorn topper and a sweet party table", fr: "Couleurs pastel douces, topper licorne et table de fête gourmande", ar: "ألوان هادئة، تاج لونيكورن وطاولة احتفال حلوة" },
    price: 310, tag: { en: "Party special", fr: "Spécial fête", ar: "حصري للاحتفال" }
  },
  {
    id: "birthday-cake-03", category: "cakes", image: "images/birthday-cakes/birthday cake (3).jpeg",
    name: { en: "Chanel inspired birthday cake", fr: "Gâteau d'anniversaire inspiré Chanel", ar: "كعكة عيد ميلاد مستوحاة من شانيل" },
    description: { en: "Pink statement cake with luxe finishing touches", fr: "Gâteau rose audacieux avec des détails luxe", ar: "كعكة وردية فخمة بتفاصيل أنيقة" },
    price: 330, tag: { en: "Luxury", fr: "Luxe", ar: "فخامة" }
  },
  {
    id: "birthday-cake-04", category: "cakes", image: "images/birthday-cakes/birthday cake (4).jpeg",
    name: { en: "Minnie Mouse birthday cake", fr: "Gâteau d'anniversaire Minnie Mouse", ar: "كعكة عيد ميلاد ميني ماوس" },
    description: { en: "Classic Minnie design with red polka dots and cupcakes", fr: "Design Minnie classique avec pois rouges et cupcakes", ar: "تصميم كلاسيكي لميني ماوس بنقاط حمراء وكاب كيك" },
    price: 340, tag: { en: "Classic", fr: "Classique", ar: "كلاسيكي" }
  },
  {
    id: "birthday-cake-05", category: "cakes", image: "images/birthday-cakes/birthday cake (5).jpeg",
    name: { en: "Butterfly pastel birthday cake", fr: "Gâteau d'anniversaire pastel aux papillons", ar: "كعكة عيد ميلاد باستيل بفراشات" },
    description: { en: "Lilac tones, butterflies and pearl details for a dreamy finish", fr: "Tons lilas, papillons et détails perlés pour une finition romantique", ar: "ألوان بنفسجية وفراشات وتفاصيل لؤلؤية لنتيجة رومانسية" },
    price: 300, tag: { en: "Dreamy", fr: "Rêveur", ar: "حلمي" }
  },
  {
    id: "birthday-cake-06", category: "cakes", image: "images/birthday-cakes/birthday cake (6).jpeg",
    name: { en: "Hakim pastry birthday cake", fr: "Gâteau d'anniversaire Hakim Pâtisserie", ar: "كعكة عيد ميلاد من حلويات حكيم" },
    description: { en: "Rich burgundy design with elegant gold lettering", fr: "Design bordeaux élégant avec lettrage doré", ar: "تصميم أحمر داكن مع كتابة ذهبية أنيقة" },
    price: 360, tag: { en: "Custom", fr: "Personnalisé", ar: "مخصص" }
  },
  {
    id: "birthday-cake-07", category: "cakes", image: "images/birthday-cakes/birthday cake (7).jpeg",
    name: { en: "Blue ocean birthday cake", fr: "Gâteau d'anniversaire bleu océan", ar: "كعكة عيد ميلاد زرقاء بحجم كبير" },
    description: { en: "Ocean-inspired blue layers with a silver sparkle finish", fr: "Étages bleus inspirés de la mer avec des détails argentés", ar: "طبقات زرقاء مستوحاة من المحيط مع لمسة فضية متلألئة" },
    price: 320, tag: { en: "Ocean", fr: "Océan", ar: "محيط" }
  },
  {
    id: "birthday-cake-08", category: "cakes", image: "images/birthday-cakes/birthday cake (8).jpeg",
    name: { en: "Barbie birthday cake", fr: "Gâteau d'anniversaire Barbie", ar: "كعكة عيد ميلاد باربي" },
    description: { en: "Pink princess styling with a portrait topper and pearl details", fr: "Style princess rose avec portrait en topper et détails perlés", ar: "ستايل وردي ملكي مع صورة في الطبقة العلوية وتفاصيل لؤلؤية" },
    price: 350, tag: { en: "Princess", fr: "Princesse", ar: "أميرة" }
  },
  {
    id: "birthday-cake-09", category: "cakes", image: "images/birthday-cakes/birthday cake (10).jpeg",
    name: { en: "Bluey birthday cake", fr: "Gâteau d'anniversaire Bluey", ar: "كعكة عيد ميلاد بلويا" },
    description: { en: "Bright blue buttercream cake with playful character toppers", fr: "Gâteau bleu vif au beurre avec personnages joyeux", ar: "كعكة زرقاء زاهية مع شخصيات مسلية في الأعلى" },
    price: 340, tag: { en: "Character", fr: "Personnage", ar: "شخصية" }
  },
  {
    id: "birthday-cake-10", category: "cakes", image: "images/birthday-cakes/birthday cake (11).jpeg",
    name: { en: "Elsa and Anna birthday cake", fr: "Gâteau d'anniversaire Elsa et Anna", ar: "كعكة عيد ميلاد إلسا وآنا" },
    description: { en: "A frosted princess-inspired cake with snowflake details", fr: "Un gâteau princesse glacé avec des motifs flocons", ar: "كعكة ملكية متجمدة بتفاصيل ندف الثلج" },
    price: 360, tag: { en: "Ice queen", fr: "Reine des neiges", ar: "ملكة الثلج" }
  },
  {
    id: "birthday-cake-11", category: "cakes", image: "images/birthday-cakes/birthday cake (12).jpeg",
    name: { en: "Dreamy butterfly birthday cake", fr: "Gâteau d'anniversaire papillon romantique", ar: "كعكة عيد ميلاد فراشات رومانسي" },
    description: { en: "Lilac buttercream with soft blooms and elegant butterflies", fr: "Crème lilas avec fleurs douces et papillons élégants", ar: "كريمة بنفسجية مع أزهار ناعمة وفراشات أنيقة" },
    price: 300, tag: { en: "Romantic", fr: "Romantique", ar: "رومانسي" }
  },
  {
    id: "birthday-cake-12", category: "cakes", image: "images/birthday-cakes/birthday cake (13).jpeg",
    name: { en: "Princess Jasmine birthday cake", fr: "Gâteau d'anniversaire Princess Jasmine", ar: "كعكة عيد ميلاد الأميرة Jasmine" },
    description: { en: "Royal blue and gold cake with princess-inspired details", fr: "Gâteau bleu royal et doré inspiré des princesses", ar: "كعكة زرقاء ملكية وذهبية مستوحاة من الأميرات" },
    price: 370, tag: { en: "Royal", fr: "Royal", ar: "ملكي" }
  },
  {
    id: "birthday-cake", category: "cakes", image: "https://images.unsplash.com/photo-1562777717-dc6984f65a63?auto=format&fit=crop&w=900&q=80",
    name: { en: "Birthday dream cake", fr: "Gâteau d'anniversaire", ar: "كعكة عيد الميلاد" },
    description: { en: "Choose your flavour, colour & message", fr: "Choisissez le parfum, la couleur et le message", ar: "اختاروا النكهة واللون والعبارة" },
    price: 280, tag: { en: "Birthday", fr: "Anniversaire", ar: "عيد ميلاد" }
  },
  {
    id: "mini-cake-01", category: "mini-cakes", image: "mini-cake-01.jpeg",
    name: { en: "Chocolate celebration mini cake", fr: "Mini-gâteau de fête au chocolat", ar: "كعكة احتفالية صغيرة بالشوكولاتة" },
    description: { en: "A personal-sized chocolate cake, made to order", fr: "Un gâteau au chocolat individuel, préparé sur commande", ar: "كعكة شوكولاتة بحجم فردي، تُحضّر حسب الطلب" },
    price: null, tag: { en: "Mini cakes", fr: "Mini-gâteaux", ar: "كعكات صغيرة" }
  },
  {
    id: "mini-cake-02", category: "mini-cakes", image: "mini-cake-02.jpeg",
    name: { en: "Strawberry mini celebration cake", fr: "Mini-gâteau de fête aux fraises", ar: "كعكة احتفالية صغيرة بالفراولة" },
    description: { en: "Fresh strawberries, soft cream and a personal message", fr: "Fraises fraîches, crème légère et message personnalisé", ar: "فراولة طازجة وكريمة خفيفة وعبارة شخصية" },
    price: null, tag: { en: "Mini cakes", fr: "Mini-gâteaux", ar: "كعكات صغيرة" }
  },
  {
    id: "mini-cake-03", category: "mini-cakes", image: "mini-cake-03.jpeg",
    name: { en: "Floral birthday mini cake", fr: "Mini-gâteau d'anniversaire fleuri", ar: "كعكة عيد ميلاد صغيرة مزينة بالزهور" },
    description: { en: "A little cake with delicate floral decorations", fr: "Un petit gâteau orné de délicates fleurs", ar: "كعكة صغيرة مزينة بزهور رقيقة" },
    price: null, tag: { en: "Birthdays", fr: "Anniversaires", ar: "أعياد الميلاد" }
  },
  {
    id: "mini-cake-04", category: "mini-cakes", image: "mini-cake-04.jpeg",
    name: { en: "Classic message mini cake", fr: "Mini-gâteau classique avec message", ar: "كعكة صغيرة كلاسيكية بعبارة شخصية" },
    description: { en: "Choose your message and favourite colours", fr: "Choisissez votre message et vos couleurs préférées", ar: "اختاروا العبارة وألوانكم المفضلة" },
    price: null, tag: { en: "Made personal", fr: "Personnalisable", ar: "حسب اختياركم" }
  },
  {
    id: "mini-cake-05", category: "mini-cakes", image: "mini-cake-05.jpeg",
    name: { en: "Blue anniversary mini cake", fr: "Mini-gâteau d'anniversaire bleu", ar: "كعكة ذكرى سنوية صغيرة باللون الأزرق" },
    description: { en: "A calendar-style design for a special date", fr: "Un décor calendrier pour une date spéciale", ar: "تصميم تقويم للاحتفال بتاريخ مميز" },
    price: null, tag: { en: "Anniversaries", fr: "Anniversaires", ar: "الذكرى السنوية" }
  },
  {
    id: "mini-cake-06", category: "mini-cakes", image: "mini-cake-06.jpeg",
    name: { en: "First anniversary mini cake", fr: "Mini-gâteau de premier anniversaire", ar: "كعكة صغيرة للاحتفال بذكرى الزواج الأولى" },
    description: { en: "A floral little cake to celebrate your first year", fr: "Un petit gâteau fleuri pour célébrer votre première année", ar: "كعكة صغيرة مزينة بالزهور للاحتفال بعامكما الأول" },
    price: null, tag: { en: "Made for two", fr: "À partager à deux", ar: "للمشاركة بين شخصين" }
  },
  {
    id: "wedding-cake-01", category: "wedding-cakes", image: "images/wedding-cakes/wedding-cake-01.jpeg",
    name: { en: "Burgundy rose tiered cake", fr: "Pièce montée de mariage aux roses bordeaux", ar: "كعكة زفاف متعددة الطبقات بزهور حمراء داكنة" },
    description: { en: "Ivory tiers with burgundy ribbon and roses", fr: "Étages ivoire, rubans bordeaux et roses", ar: "طبقات عاجية مع شرائط وزهور حمراء داكنة" },
    price: null, tag: { en: "Wedding collection", fr: "Collection mariage", ar: "تشكيلة الزفاف" }
  },
  {
    id: "wedding-cake-02", category: "wedding-cakes", image: "images/wedding-cakes/wedding-cake-02.jpeg",
    name: { en: "Ivory rose wedding cake", fr: "Pièce montée de mariage aux roses ivoire", ar: "كعكة زفاف متعددة الطبقات بزهور عاجية" },
    description: { en: "Sculpted tiers with delicate sugar roses", fr: "Étages sculptés et délicates roses en sucre", ar: "طبقات مزخرفة وورود رقيقة من السكر" },
    price: null, tag: { en: "Wedding collection", fr: "Collection mariage", ar: "تشكيلة الزفاف" }
  },
  {
    id: "wedding-cake-03", category: "wedding-cakes", image: "images/wedding-cakes/wedding-cake-03.jpeg",
    name: { en: "Ivory and gold wedding cake", fr: "Pièce montée de mariage ivoire et or", ar: "كعكة زفاف متعددة الطبقات بالعاجي والذهبي" },
    description: { en: "Elegant white tiers with golden details", fr: "Élégants étages blancs aux détails dorés", ar: "طبقات بيضاء أنيقة بتفاصيل ذهبية" },
    price: null, tag: { en: "Wedding collection", fr: "Collection mariage", ar: "تشكيلة الزفاف" }
  },
  {
    id: "wedding-cake-04", category: "wedding-cakes", image: "images/wedding-cakes/wedding-cake-04.jpeg",
    name: { en: "Classic white wedding cake", fr: "Pièce montée de mariage blanche classique", ar: "كعكة زفاف بيضاء كلاسيكية متعددة الطبقات" },
    description: { en: "A timeless design with refined piping", fr: "Un décor intemporel aux finitions délicates", ar: "تصميم خالد بزخارف أنيقة" },
    price: null, tag: { en: "Wedding collection", fr: "Collection mariage", ar: "تشكيلة الزفاف" }
  },
  {
    id: "wedding-cake-05", category: "wedding-cakes", image: "images/wedding-cakes/wedding-cake-05.jpeg",
    name: { en: "Lavender floral wedding cake", fr: "Pièce montée de mariage fleurie aux tons lavande", ar: "كعكة زفاف متعددة الطبقات بزهور بنفسجية" },
    description: { en: "Ivory tiers with fresh-flower styling", fr: "Étages ivoire ornés de fleurs fraîches", ar: "طبقات عاجية مزينة بزهور طبيعية" },
    price: null, tag: { en: "Wedding collection", fr: "Collection mariage", ar: "تشكيلة الزفاف" }
  },
  {
    id: "wedding-cake-06", category: "wedding-cakes", image: "images/wedding-cakes/wedding-cake-06.jpeg",
    name: { en: "Romantic rose cascade cake", fr: "Pièce montée de mariage à cascade de roses", ar: "كعكة زفاف متعددة الطبقات بزهور متدلية" },
    description: { en: "Flowing fondant with a cascade of roses", fr: "Un voile de pâte à sucre et une cascade de roses", ar: "كريمة متدفقة تتزين بباقة من الورود" },
    price: null, tag: { en: "Wedding collection", fr: "Collection mariage", ar: "تشكيلة الزفاف" }
  },
  {
    id: "wedding-cake-07", category: "wedding-cakes", image: "images/wedding-cakes/wedding-cake-07.jpeg",
    name: { en: "Pearl and lace wedding cake", fr: "Pièce montée de mariage perlée et dentelée", ar: "كعكة زفاف متعددة الطبقات باللؤلؤ والدانتيل" },
    description: { en: "Pearl details and delicate lace-inspired piping", fr: "Détails perlés et décor finement travaillé", ar: "حبات لؤلؤ وزخارف دقيقة مستوحاة من الدانتيل" },
    price: null, tag: { en: "Wedding collection", fr: "Collection mariage", ar: "تشكيلة الزفاف" }
  },
  {
    id: "wedding-cake-08", category: "wedding-cakes", image: "images/wedding-cakes/wedding-cake-08.jpeg",
    name: { en: "Bride and groom wedding cake", fr: "Pièce montée de mariage des mariés", ar: "كعكة زفاف متعددة الطبقات للعروسين" },
    description: { en: "A personalised design for the newlyweds", fr: "Une création personnalisée pour les mariés", ar: "تصميم مخصص للعروسين" },
    price: null, tag: { en: "Wedding collection", fr: "Collection mariage", ar: "تشكيلة الزفاف" }
  },
  {
    id: "plateau-01", category: "plateaux", image: "images/plateaux/Plateau  (1).jpeg",
    name: { en: "Signature chocolate tray", fr: "Plateau signature chocolat", ar: "صينية شوكولاتة فاخرة" },
    description: { en: "A premium assortment of mini chocolate desserts", fr: "Un assortiment premium de mini desserts au chocolat", ar: "مزيج فاخر من الحلوى الصغيرة بالشوكولاتة" },
    price: null, tag: { en: "Signature", fr: "Signature", ar: "توقيع" }
  },
  {
    id: "plateau-02", category: "plateaux", image: "images/plateaux/Plateau  (2).jpeg",
    name: { en: "Fruit tart selection", fr: "Plateau de tartelettes aux fruits", ar: "صينية تارتات بالفواكه" },
    description: { en: "Fresh fruit tartlets with refined pastry shells", fr: "Tartelettes aux fruits frais et pâte raffinée", ar: "تارتات فواكه طازجة وقشرة خبز فاخرة" },
    price: null, tag: { en: "Fresh fruit", fr: "Fruits frais", ar: "فواكه طازجة" }
  },
  {
    id: "plateau-03", category: "plateaux", image: "images/plateaux/Plateau  (3).jpeg",
    name: { en: "Luxury mini tart tray", fr: "Plateau mini tartes de luxe", ar: "صينية تارتات صغيرة فاخرة" },
    description: { en: "A collection of elegant bites with creamy fillings", fr: "Une sélection élégante de bouchées aux garnitures crémeuses", ar: "مجموعة أنيقة من القطع الصغيرة بملء كريمي" },
    price: null, tag: { en: "Luxury", fr: "Luxe", ar: "فخامة" }
  },
  {
    id: "plateau-04", category: "plateaux", image: "images/plateaux/Plateau  (4).jpeg",
    name: { en: "Mini burger platter", fr: "Plateau mini burgers", ar: "صينية من الميني برغر" },
    description: { en: "A savoury tray for a lively and generous table", fr: "Un plateau salé pour une table gourmande et animée", ar: "صينية مالحة لجدول غني وحيوي" },
    price: null, tag: { en: "Savory", fr: "Salé", ar: "مالح" }
  },
  {
    id: "plateau-05", category: "plateaux", image: "images/plateaux/Plateau  (5).jpeg",
    name: { en: "Petit fours tray", fr: "Plateau de petits fours", ar: "صينية بيتي فور" },
    description: { en: "A wide variety of refined and delicate pastries", fr: "Une grande variété de pâtisseries délicates et raffinées", ar: "تنوع واسع من الحلويات الدقيقة والفاخرة" },
    price: null, tag: { en: "Petit fours", fr: "Petits fours", ar: "بيتي فور" }
  },
  {
    id: "plateau-06", category: "plateaux", image: "images/plateaux/Plateau  (6).jpeg",
    name: { en: "Pastry assortment", fr: "Plateau de pâtisseries", ar: "صينية حلويات متنوعة" },
    description: { en: "A premium mix of creamy and crunchy pieces", fr: "Un mélange premium de morceaux crémeux et croustillants", ar: "مزيج فاخر من القطع الكريمية والمقرمشة" },
    price: null, tag: { en: "Assortment", fr: "Assortiment", ar: "تنوع" }
  },
  {
    id: "plateau-07", category: "plateaux", image: "images/plateaux/Plateau  (7).jpeg",
    name: { en: "Creamy pastry tray", fr: "Plateau de pâtisseries crémeuses", ar: "صينية حلويات كريمية" },
    description: { en: "Soft textures and rich flavours in one elegant set", fr: "Des textures douces et des saveurs riches dans un bel assortiment", ar: "قوام ناعم ونكهات غنية في تشكيلة أنيقة" },
    price: null, tag: { en: "Creamy", fr: "Crémeux", ar: "كريمي" }
  },
  {
    id: "plateau-08", category: "plateaux", image: "images/plateaux/Plateau  (8).jpeg",
    name: { en: "Mixed berry tart tray", fr: "Plateau de tartes aux baies", ar: "صينية تارتات بالتوت" },
    description: { en: "A bright assortment with red, black and blue berries", fr: "Un assortiment coloré de baies rouges, noires et bleues", ar: "مجموعة زاهية من التوت الأحمر والأسود والأزرق" },
    price: null, tag: { en: "Berries", fr: "Baies", ar: "التوت" }
  },
  {
    id: "plateau-09", category: "plateaux", image: "images/plateaux/Plateau  (9).jpeg",
    name: { en: "Summer fruit platter", fr: "Plateau de fruits d'été", ar: "صينية فواكه صيفية" },
    description: { en: "Fresh slices and bright colours for a cheerful serving", fr: "Tranches fraîches et couleurs vives pour un service joyeux", ar: "شرائح طازجة وألوان زاهية لخدمة مبهجة" },
    price: null, tag: { en: "Summer", fr: "Été", ar: "صيف" }
  },
  {
    id: "plateau-10", category: "plateaux", image: "images/plateaux/Plateau  (10).jpeg",
    name: { en: "Tartlet showcase", fr: "Plateau de mini tartes", ar: "صينية تارتات صغيرة" },
    description: { en: "A colourful mix of tartlets with varied toppings", fr: "Un mélange coloré de tartelettes aux garnitures variées", ar: "مزيج ملون من التارتلات بتغطيات متنوعة" },
    price: null, tag: { en: "Colourful", fr: "Coloré", ar: "ملون" }
  },
  {
    id: "plateau-11", category: "plateaux", image: "images/plateaux/Plateau  (11).jpeg",
    name: { en: "Artisan pastry tray", fr: "Plateau de pâtisserie artisanale", ar: "صينية حلويات حرفية" },
    description: { en: "A carefully composed tray of artisan sweets", fr: "Un plateau soigneusement composé de douceurs artisanales", ar: "صينية مُركّبة بعناية من الحلويات الحرفية" },
    price: null, tag: { en: "Artisan", fr: "Artisanal", ar: "حرفي" }
  },
  {
    id: "plateau-12", category: "plateaux", image: "images/plateaux/Plateau  (12).jpeg",
    name: { en: "Fruit and cream tray", fr: "Plateau fruits et crème", ar: "صينية فواكه وكريمة" },
    description: { en: "A polished mix of pastries, fruit and cream textures", fr: "Un mélange raffiné de pâtisseries, fruits et textures crémeuses", ar: "مزيج أنيق من الحلويات والفواكه والمواد الكريمية" },
    price: null, tag: { en: "Refined", fr: "Raffiné", ar: "أنيق" }
  },
  {
    id: "plateau-13", category: "plateaux", image: "images/plateaux/Plateau  (13).jpeg",
    name: { en: "Luxury fruit tart tray", fr: "Plateau de tartes fruitées de luxe", ar: "صينية تارتات فواكه فاخرة" },
    description: { en: "Elegant fruit tartlets finished with delicate toppings", fr: "Petites tartes aux fruits élégantes finement décorées", ar: "تارتات صغيرة فاخرة مغطاة بتزيينات أنيقة" },
    price: null, tag: { en: "Elegant", fr: "Élégant", ar: "أنيق" }
  },
  {
    id: "plateau-14", category: "plateaux", image: "images/plateaux/Plateau  (14).jpeg",
    name: { en: "Chocolate caramel tray", fr: "Plateau chocolat et caramel", ar: "صينية كراميل وشوكولاتة" },
    description: { en: "A rich tray with caramel, chocolate and nuts", fr: "Un plateau généreux au caramel, chocolat et noix", ar: "صينية غنية بالكراميل والشوكولاتة والمكسرات" },
    price: null, tag: { en: "Chocolate", fr: "Chocolat", ar: "شوكولاتة" }
  },
  {
    id: "plateau-15", category: "plateaux", image: "images/plateaux/Plateau  (15).jpeg",
    name: { en: "Gourmet berry tray", fr: "Plateau gourmand aux baies", ar: "صينية توت غنية" },
    description: { en: "An opulent selection of berry cakes and tartlets", fr: "Une sélection opulente de gâteaux aux baies et tartelettes", ar: "اختيار فاخر من الكعك والتارتات بالتوت" },
    price: null, tag: { en: "Gourmet", fr: "Gourmand", ar: "فاخر" }
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

function formatPrice(product) {
  if (product.price === null) return t("priceOnRequest");
  const prefix = language === "ar" ? "ابتداءً من " : language === "fr" ? "Dès " : "From ";
  const currency = language === "ar" ? "د.م." : "MAD";
  return `${prefix}${product.price} ${currency}`;
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
        <span class="product-price">${formatPrice(product)}</span>
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
        <p>${formatPrice(product)}</p>
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
      ...entries.map(product => `• ${cart[product.id]} × ${product.name[language]}${product.price === null ? "" : ` (${formatPrice(product)})`}`),
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
