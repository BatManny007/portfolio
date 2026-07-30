/**
 * i18n.js — Internationalization (EN / FR / ES / DE / JA) system for Batmanny Portfolio
 */

(function () {
  const STORAGE_KEY = 'batmanny_lang';

  const SUPPORTED_LANGS = ['en', 'fr', 'es', 'de', 'ja'];

  const FLAGS = {
    en: '🇬🇧',
    fr: '🇫🇷',
    es: '🇪🇸',
    de: '🇩🇪',
    ja: '🇯🇵'
  };

  const translations = {
    en: {
      // General / Nav
      'nav.home': 'HOME',
      'nav.work': 'WORK',
      'nav.about': 'ABOUT',
      'nav.contact': 'CONTACT',

      // Loader
      'loader.loading': 'Loading',
      'loader.start': 'Start',

      // Hero
      'hero.headline': 'Designing products people trust with their money, time, and attention.',
      'hero.sub': 'Product Designer with 4+ years of experience across Web3, Gaming, and AI.',
      'hero.stat': 'Redesigned Razor DAO onboarding, contributing to <strong>100K+ users in 72 hours</strong>.',
      'hero.btn.work': 'View Work',
      'hero.btn.contact': 'Send the Bat-Signal',

      // Work section & Filter tabs
      'filter.all': 'All',
      'filter.caseStudy': 'Case Study',
      'filter.vibeCoded': 'Vibe-Coded',
      'filter.sideQuests': 'Side Quests',
      'filter.brandVisual': 'Brand & Visual',
      'filter.empty': 'NO PROJECTS IN THIS CATEGORY YET',

      // Project Cards
      'card.razor.title': 'Redesigned onboarding, contributing to 100K+ users in 72 hours',
      'card.razor.desc': 'Reduced friction during wallet creation and built a scalable design system.',
      'card.elite.title': 'Onboarding That Feels Like a Conversation, Not a Form',
      'card.elite.desc': 'A 14-screen onboarding and payoff flow designed to feel like a conversation, making a complex AI job-matching experience clearer and more trustworthy.',
      'card.pendax.title': 'Making Crypto-to-Naira Transfers Feel as Safe as Banking',
      'card.pendax.desc': 'A mobile-first fintech flow that makes crypto-to-bank transfers feel familiar, secure, and easy to understand for everyday users.',
      'card.cosmic.title': 'A Game UI Built to Stay Readable at Full Throttle',
      'card.cosmic.desc': 'A game UI case study focused on onboarding, scoring, and a lighter interface that stays readable and responsive while the action is moving.',

      // About Section
      'about.heading': 'ABOUT ME',
      'about.p1': 'I’m Emmanuel, a product designer who likes to get close to the work: sketching the idea, shaping the interface, and sometimes building the thing myself.',
      'about.p2': 'I enjoy products that have a bit of character. The kind where the empty states, buttons, motion, and tiny details all feel like someone actually cared. That is the part of design I keep coming back to: making useful things feel clear, alive, and easy to trust.',
      'about.p3': 'Most of my work sits around product design, UI systems, visual design, and front-end implementation. I have worked across Web3, fintech, games, dashboards, and experimental tools, usually in places where the product needs to feel sharp without becoming confusing.',
      'about.p4': 'I also make illustrations and brand visuals, so I think a lot about mood and personality, not just screens. Sometimes the right visual language can explain a product faster than another paragraph ever could.',
      'about.p5': 'I use tools like Figma, HTML, CSS, JavaScript, Codex, and Claude Code to move from rough idea to working prototype quickly. I like teams that care about taste, clarity, and shipping work that feels considered.',

      // Contact Section
      'contact.heading': 'CONTACT',
      'contact.lead': 'If you’re building something ambitious (or you want your product to feel like it has a pulse), let’s talk. I’m open to product design, interaction design, and design-engineering collaborations.',
      'contact.btn.message': 'MESSAGE ME',
      'contact.btn.copy': 'COPY EMAIL',
      'contact.quick': 'QUICK MESSAGE',
      'contact.label.name': 'NAME',
      'contact.label.email': 'EMAIL',
      'contact.label.message': 'MESSAGE',
      'contact.ph.name': 'Your name',
      'contact.ph.email': 'you@email.com',
      'contact.ph.message': 'What are we building?',
      'contact.btn.send': 'SEND',
      'contact.btn.sending': 'SENDING...',
      'contact.btn.reset': 'RESET',
      'toast.emailCopied': 'EMAIL COPIED',
      'toast.copyFailed': 'COPY FAILED',
      'toast.fillAll': 'FILL ALL FIELDS',
      'toast.openingMail': 'OPENING EMAIL APP',
      'toast.mailFailed': 'EMAIL APP FAILED',

      // Shared Case Study UI
      'cs.back': 'Back',
      'cs.backWork': 'Back to work',
      'cs.backTop': 'Back to top',
      'cs.home': 'Home',
      'cs.moreWork': 'More work',
      'cs.footer': 'Built as part of the Batmanny portfolio.'
    },

    fr: {
      // General / Nav
      'nav.home': 'ACCUEIL',
      'nav.work': 'PROJETS',
      'nav.about': 'À PROPOS',
      'nav.contact': 'CONTACT',

      // Loader
      'loader.loading': 'Chargement',
      'loader.start': 'Démarrer',

      // Hero
      'hero.headline': 'Conception de produits auxquels les gens confient leur argent, leur temps et leur attention.',
      'hero.sub': 'Product Designer avec plus de 4 ans d’expérience dans le Web3, le jeu vidéo et l’IA.',
      'hero.stat': 'Refonte de l’onboarding de Razor DAO, contribuant à <strong>plus de 100K utilisateurs en 72h</strong>.',
      'hero.btn.work': 'Voir mes projets',
      'hero.btn.contact': 'Envoyer le Bat-Signal',

      // Work section & Filter tabs
      'filter.all': 'Tous',
      'filter.caseStudy': 'Étude de cas',
      'filter.vibeCoded': 'Code Vibe',
      'filter.sideQuests': 'Projets annexes',
      'filter.brandVisual': 'Marque & Visuel',
      'filter.empty': 'AUCUN PROJET DANS CETTE CATÉGORIE POUR LE MOMENT',

      // Project Cards
      'card.razor.title': 'Refonte de l’onboarding, contribuant à +100K utilisateurs en 72 heures',
      'card.razor.desc': 'Friction réduite lors de la création de portefeuille et création d’un système de design évolutif.',
      'card.elite.title': 'Un onboarding perçu comme une conversation, pas comme un formulaire',
      'card.elite.desc': 'Un parcours d’intégration de 14 écrans conçu comme un dialogue, rendant l’expérience de jumelage d’emplois par IA claire et digne de confiance.',
      'card.pendax.title': 'Sécuriser les transferts Crypto vers Naira comme des opérations bancaires',
      'card.pendax.desc': 'Un flux fintech mobile qui rend les transferts crypto-vers-banque familiers, sécurisés et intuitifs pour tous.',
      'card.cosmic.title': 'Une interface de jeu lisible même en plein cœur de l’action',
      'card.cosmic.desc': 'Une étude de cas d’interface de jeu axée sur l’intégration, le score et une UI fluide qui reste lisible à toute vitesse.',

      // About Section
      'about.heading': 'À PROPOS DE MOI',
      'about.p1': 'Je m’appelle Emmanuel, un product designer qui aime s’investir pleinement dans le travail : esquisser l’idée, façonner l’interface et parfois développer le produit moi-même.',
      'about.p2': 'J’apprécie les produits qui ont du caractère. Ceux où les états vides, les boutons, les animations et les moindres détails montrent une réelle attention. C’est cet aspect du design qui me passionne : rendre les choses utiles claires, vivantes et inspirant la confiance.',
      'about.p3': 'La majeure partie de mon travail tourne autour du product design, des systèmes d’interface (UI), du design visuel et du développement front-end. J’ai travaillé dans le Web3, la fintech, les jeux vidéo, les tableaux de bord et les outils expérimentaux, toujours là où le produit doit être percutant tout en restant fluide.',
      'about.p4': 'Je réalise aussi des illustrations et des visuels de marque. Je pense donc beaucoup à l’atmosphère et à la personnalité, pas seulement aux écrans. Parfois, le bon langage visuel explique un produit plus rapidement qu’un long paragraphe.',
      'about.p5': 'J’utilise des outils comme Figma, HTML, CSS, JavaScript, Codex et Claude Code pour passer rapidement d’une idée brute à un prototype fonctionnel. J’aime travailler avec des équipes qui valorisent le goût, la clarté et la qualité.',

      // Contact Section
      'contact.heading': 'CONTACT',
      'contact.lead': 'Si vous construisez quelque chose d’ambitieux (ou si vous voulez donner une vraie âme à votre produit), discutons-en. Je suis ouvert aux collaborations en product design, interaction design et design-engineering.',
      'contact.btn.message': 'CONTACTEZ-MOI',
      'contact.btn.copy': 'COPIER L’EMAIL',
      'contact.quick': 'MESSAGE RAPIDE',
      'contact.label.name': 'NOM',
      'contact.label.email': 'EMAIL',
      'contact.label.message': 'MESSAGE',
      'contact.ph.name': 'Votre nom',
      'contact.ph.email': 'vous@email.com',
      'contact.ph.message': 'Que construisons-nous ensemble ?',
      'contact.btn.send': 'ENVOYER',
      'contact.btn.sending': 'ENVOI EN COURS...',
      'contact.btn.reset': 'RÉINITIALISER',
      'toast.emailCopied': 'EMAIL COPIÉ',
      'toast.copyFailed': 'ÉCHEC DE LA COPIE',
      'toast.fillAll': 'REMPLISSEZ TOUS LES CHAMPS',
      'toast.openingMail': 'OUVERTURE DE L’APPLICATION EMAIL',
      'toast.mailFailed': 'ÉCHEC DE L’APP EMAIL',

      // Shared Case Study UI
      'cs.back': 'Retour',
      'cs.backWork': 'Retour aux projets',
      'cs.backTop': 'Haut de page',
      'cs.home': 'Accueil',
      'cs.moreWork': 'Autres projets',
      'cs.footer': 'Conçu dans le cadre du portfolio Batmanny.'
    },

    es: {
      // General / Nav
      'nav.home': 'INICIO',
      'nav.work': 'PROYECTOS',
      'nav.about': 'SOBRE MÍ',
      'nav.contact': 'CONTACTO',

      // Loader
      'loader.loading': 'Cargando',
      'loader.start': 'Iniciar',

      // Hero
      'hero.headline': 'Diseñando productos en los que la gente confía su dinero, tiempo y atención.',
      'hero.sub': 'Diseñador de Productos con más de 4 años de experiencia en Web3, videojuegos e IA.',
      'hero.stat': 'Rediseñé la incorporación de Razor DAO, contribuyendo a <strong>más de 100K usuarios en 72 horas</strong>.',
      'hero.btn.work': 'Ver Proyectos',
      'hero.btn.contact': 'Enviar la Bat-Señal',

      // Work section & Filter tabs
      'filter.all': 'Todos',
      'filter.caseStudy': 'Caso de Estudio',
      'filter.vibeCoded': 'Código Vibe',
      'filter.sideQuests': 'Proyectos Secundarios',
      'filter.brandVisual': 'Marca y Visual',
      'filter.empty': 'NO HAY PROYECTOS EN ESTA CATEGORÍA TODAVÍA',

      // Project Cards
      'card.razor.title': 'Rediseño de incorporación, contribuyendo a más de 100K usuarios en 72 horas',
      'card.razor.desc': 'Reduje la fricción durante la creación de carteras y creé un sistema de diseño escalable.',
      'card.elite.title': 'Una incorporación que se siente como una conversación, no como un formulario',
      'card.elite.desc': 'Un flujo de 14 pantallas diseñado como un diálogo, haciendo que la experiencia de coincidencia de empleo con IA sea clara y confiable.',
      'card.pendax.title': 'Transferencias de Cripto a Naira tan seguras como la banca',
      'card.pendax.desc': 'Un flujo fintech enfocado en móviles que hace que las transferencias cripto a banco se sientan familiares y seguras.',
      'card.cosmic.title': 'Una interfaz de juego diseñada para mantenerse legible a máxima velocidad',
      'card.cosmic.desc': 'Caso de estudio de interfaz enfocado en incorporación, puntuación y una UI ligera que se mantiene clara durante la acción.',

      // About Section
      'about.heading': 'SOBRE MÍ',
      'about.p1': 'Soy Emmanuel, un diseñador de productos al que le gusta estar cerca del proceso: bocetar la idea, dar forma a la interfaz y a veces construirla yo mismo.',
      'about.p2': 'Disfruto de los productos con personalidad. Esos donde los estados vacíos, botones, animaciones y pequeños detalles muestran un cuidado real. Ese es el aspecto del diseño al que siempre vuelvo.',
      'about.p3': 'La mayor parte de mi trabajo abarca diseño de productos, sistemas UI, diseño visual e integración front-end en Web3, fintech, videojuegos y herramientas experimentales.',
      'about.p4': 'También hago ilustraciones y gráficos de marca, por lo que pienso mucho en el tono y la personalidad. A veces, el lenguaje visual adecuado explica un producto más rápido que un párrafo.',
      'about.p5': 'Utilizo herramientas como Figma, HTML, CSS, JavaScript, Codex y Claude Code para crear prototipos funcionales rápidamente. Me gustan los equipos que valoran el gusto, la claridad y el trabajo bien hecho.',

      // Contact Section
      'contact.heading': 'CONTACTO',
      'contact.lead': 'Si estás construyendo algo ambicioso, hablemos. Estoy abierto a colaboraciones en diseño de producto, diseño de interacción e ingeniería de diseño.',
      'contact.btn.message': 'ENVIAR MENSAJE',
      'contact.btn.copy': 'COPIAR EMAIL',
      'contact.quick': 'MENSAJE RÁPIDO',
      'contact.label.name': 'NOMBRE',
      'contact.label.email': 'EMAIL',
      'contact.label.message': 'MENSAJE',
      'contact.ph.name': 'Tu nombre',
      'contact.ph.email': 'tu@email.com',
      'contact.ph.message': '¿Qué vamos a construir?',
      'contact.btn.send': 'ENVIAR',
      'contact.btn.sending': 'ENVIANDO...',
      'contact.btn.reset': 'REINICIAR',
      'toast.emailCopied': 'EMAIL COPIADO',
      'toast.copyFailed': 'ERROR AL COPIAR',
      'toast.fillAll': 'LLENA TODOS LOS CAMPOS',
      'toast.openingMail': 'ABRIENDO CORREO',
      'toast.mailFailed': 'ERROR DE CORREO',

      // Shared Case Study UI
      'cs.back': 'Volver',
      'cs.backWork': 'Volver a proyectos',
      'cs.backTop': 'Ir arriba',
      'cs.home': 'Inicio',
      'cs.moreWork': 'Más proyectos',
      'cs.footer': 'Construido como parte del portafolio de Batmanny.'
    },

    de: {
      // General / Nav
      'nav.home': 'START',
      'nav.work': 'PROJEKTE',
      'nav.about': 'ÜBER MICH',
      'nav.contact': 'KONTAKT',

      // Loader
      'loader.loading': 'Laden',
      'loader.start': 'Starten',

      // Hero
      'hero.headline': 'Entwicklung von Produkten, denen Menschen ihr Geld, ihre Zeit und ihre Aufmerksamkeit anvertrauen.',
      'hero.sub': 'Product Designer mit mehr als 4 Jahren Erfahrung in Web3, Gaming und KI.',
      'hero.stat': 'Neugestaltung des Razor DAO Onboardings mit <strong>über 100.000 Nutzern in 72 Stunden</strong>.',
      'hero.btn.work': 'Projekte Ansehen',
      'hero.btn.contact': 'Bat-Signal Senden',

      // Work section & Filter tabs
      'filter.all': 'Alle',
      'filter.caseStudy': 'Fallstudie',
      'filter.vibeCoded': 'Vibe-Code',
      'filter.sideQuests': 'Nebenprojekte',
      'filter.brandVisual': 'Marke & Visuelles',
      'filter.empty': 'NOCH KEINE PROJEKTE IN DIESER KATEGORIE',

      // Project Cards
      'card.razor.title': 'Onboarding-Neugestaltung für über 100K Nutzer in 72 Stunden',
      'card.razor.desc': 'Reduzierung von Hürden bei der Wallet-Erstellung und Aufbau eines skalierbaren Design-Systems.',
      'card.elite.title': 'Ein Onboarding, das sich wie ein Gespräch anfühlt, nicht wie ein Formular',
      'card.elite.desc': 'Ein 14-Bildschirm-Ablauf, der als Dialog gestaltet ist und KI-Job-Matching klarer und vertrauenswürdiger macht.',
      'card.pendax.title': 'Krypto-zu-Naira Überweisungen so sicher wie Bankgeschäfte',
      'card.pendax.desc': 'Ein Mobile-First Fintech-Ablauf, der Krypto-Überweisungen vertraut und einfach verständlich macht.',
      'card.cosmic.title': 'Eine Spiel-UI, die auch bei voller Geschwindigkeit lesbar bleibt',
      'card.cosmic.desc': 'Eine Spiel-UI Fallstudie mit Fokus auf Onboarding, Punktesystem und eine übersichtliche Benutzeroberfläche.',

      // About Section
      'about.heading': 'ÜBER MICH',
      'about.p1': 'Ich bin Emmanuel, ein Product Designer, der gerne nah am Projekt arbeitet: Ideen skizzieren, Interfaces gestalten und Dinge selbst bauen.',
      'about.p2': 'Ich mag Produkte mit Charakter. Solche, bei denen leere Zustände, Buttons, Motion und kleine Details echte Sorgfalt zeigen. Das ist der Teil des Designs, der mich begeistert.',
      'about.p3': 'Mein Schwerpunkt liegt auf Product Design, UI-Systemen, visuellem Design und Frontend-Entwicklung in Web3, Fintech, Spielen und experimentellen Tools.',
      'about.p4': 'Ich erstelle auch Illustrationen und Markenauftritte und denke viel über Stimmung und Persönlichkeit nach. Manchmal erklärt eine gute Bildsprache ein Produkt schneller als ein Text.',
      'about.p5': 'Mit Figma, HTML, CSS, JavaScript, Codex und Claude Code erstelle ich schnell funktionierende Prototypen. Ich mag Teams, die Wert auf Geschmack, Klarheit und Qualität legen.',

      // Contact Section
      'contact.heading': 'KONTAKT',
      'contact.lead': 'Wenn Sie etwas Ambitioniertes bauen, lassen Sie uns sprechen. Ich bin offen für Kooperationen in Product Design, Interaction Design und Design-Engineering.',
      'contact.btn.message': 'NACHRICHT SENDEN',
      'contact.btn.copy': 'E-MAIL KOPIEREN',
      'contact.quick': 'SCHNELLE NACHRICHT',
      'contact.label.name': 'NAME',
      'contact.label.email': 'E-MAIL',
      'contact.label.message': 'NACHRICHT',
      'contact.ph.name': 'Ihr Name',
      'contact.ph.email': 'ihre@email.com',
      'contact.ph.message': 'Was bauen wir?',
      'contact.btn.send': 'SENDEN',
      'contact.btn.sending': 'SENDEN...',
      'contact.btn.reset': 'ZURÜCKSETZEN',
      'toast.emailCopied': 'E-MAIL KOPIERT',
      'toast.copyFailed': 'KOPIEREN FEHLGESCHLAGEN',
      'toast.fillAll': 'ALLE FELDER AUSFÜLLEN',
      'toast.openingMail': 'E-MAIL APP WIRD GEÖFFNET',
      'toast.mailFailed': 'E-MAIL APP FEHLER',

      // Shared Case Study UI
      'cs.back': 'Zurück',
      'cs.backWork': 'Zurück zu Projekten',
      'cs.backTop': 'Nach oben',
      'cs.home': 'Start',
      'cs.moreWork': 'Weitere Projekte',
      'cs.footer': 'Erstellt als Teil des Batmanny Portfolios.'
    },

    ja: {
      // General / Nav
      'nav.home': 'ホーム',
      'nav.work': '実績',
      'nav.about': '私について',
      'nav.contact': 'お問い合わせ',

      // Loader
      'loader.loading': '読み込み中',
      'loader.start': 'スタート',

      // Hero
      'hero.headline': 'お金、時間、注意を安心して託せるプロダクトをデザインする。',
      'hero.sub': 'Web3、ゲーム、AI領域で4年以上の実績を持つプロダクトデザイナー。',
      'hero.stat': 'Razor DAOのオンボーディングを再設計し、<strong>72時間で10万人以上のユーザー獲得に貢献</strong>。',
      'hero.btn.work': '実績を見る',
      'hero.btn.contact': 'バットシグナルを送る',

      // Work section & Filter tabs
      'filter.all': 'すべて',
      'filter.caseStudy': 'ケーススタディ',
      'filter.vibeCoded': 'バイブコード',
      'filter.sideQuests': 'サイドクエスト',
      'filter.brandVisual': 'ブランド＆ビジュアル',
      'filter.empty': 'このカテゴリーのプロジェクトはまだありません',

      // Project Cards
      'card.razor.title': 'オンボーディングの再設計により72時間で10万人以上のユーザー獲得に貢献',
      'card.razor.desc': 'ウォレット作成時の摩擦を削減し、拡張可能なデザインシステムを構築。',
      'card.elite.title': 'フォームではなく、会話のように感じられるオンボーディング',
      'card.elite.desc': 'AIマッチング体験をより明確で信頼できるものにする、14画面の会話型フロー。',
      'card.pendax.title': '暗号資産からナイラへの送金を銀行並みに安全に',
      'card.pendax.desc': '暗号資産から銀行口座への送金を親しみやすく安全に感じさせるモバイルファーストのUI。',
      'card.cosmic.title': '全速力でも読みやすさを保つゲームUI',
      'card.cosmic.desc': 'アクションが激しく動く中でも高い視認性とレスポンスを維持するゲームUIケーススタディ。',

      // About Section
      'about.heading': '私について',
      'about.p1': '私はエマニュエルです。アイデアのスケッチ、UIの設計、時には自らコードを書いて開発まで手がけるプロダクトデザイナーです。',
      'about.p2': '空の状態、ボタン、モーション、細部に至るまでこだわりが感じられる、個性あるプロダクトが好きです。それこそがデザインで私が探求し続ける部分です。',
      'about.p3': 'Web3、フィンテック、ゲーム、ダッシュボード領域で、プロダクトデザイン、UIシステム、フロントエンド実装を担当してきました。',
      'about.p4': 'イラストやブランドビジュアルも制作しており、単なる画面構成だけでなく雰囲気や世界観も大切にしています。言葉以上に適切なビジュアル言語が雄弁に語ることもあります。',
      'about.p5': 'Figma、HTML、CSS、JavaScript、Codex、Claude Codeを活用し、アイデアから動くプロトタイプへ迅速に落とし込みます。品質と美意識を重視するチームでの作業を愛しています。',

      // Contact Section
      'contact.heading': 'お問い合わせ',
      'contact.lead': '野心的なプロダクトの開発やデザインコラボレーションについて、ぜひお気軽にご相談ください。',
      'contact.btn.message': 'メッセージを送る',
      'contact.btn.copy': 'メールをコピー',
      'contact.quick': 'クイックメッセージ',
      'contact.label.name': 'お名前',
      'contact.label.email': 'メールアドレス',
      'contact.label.message': 'メッセージ',
      'contact.ph.name': 'お名前を入力',
      'contact.ph.email': 'example@email.com',
      'contact.ph.message': '制作内容について記述してください',
      'contact.btn.send': '送信',
      'contact.btn.sending': '送信中...',
      'contact.btn.reset': 'リセット',
      'toast.emailCopied': 'メールアドレスをコピーしました',
      'toast.copyFailed': 'コピーに失敗しました',
      'toast.fillAll': 'すべての項目を入力してください',
      'toast.openingMail': 'メールアプリを起動しています',
      'toast.mailFailed': 'メールアプリの起動に失敗しました',

      // Shared Case Study UI
      'cs.back': '戻る',
      'cs.backWork': '実績一覧へ戻る',
      'cs.backTop': 'ページ上部へ',
      'cs.home': 'ホーム',
      'cs.moreWork': '他の実績を見る',
      'cs.footer': 'Batmanny Portfolioの一部として制作されました。'
    }
  };

  /**
   * Get current selected language
   */
  function getLanguage() {
    // 1. Check URL query parameter
    try {
      const urlParams = new URLSearchParams(window.location.search);
      const urlLang = (urlParams.get('lang') || '').toLowerCase();
      if (SUPPORTED_LANGS.includes(urlLang)) return urlLang;
    } catch (e) {}

    // 2. Check saved choice in localStorage
    const saved = localStorage.getItem(STORAGE_KEY);
    if (SUPPORTED_LANGS.includes(saved)) return saved;

    // 3. Automatic browser language detection
    const userLangs = Array.from(navigator.languages || [navigator.language || '']);
    for (let l of userLangs) {
      const code = (l || '').toLowerCase().slice(0, 2);
      if (SUPPORTED_LANGS.includes(code)) return code;
    }

    return 'en';
  }

  /**
   * Translate the DOM elements
   */
  function applyLanguage(lang) {
    if (!SUPPORTED_LANGS.includes(lang)) lang = 'en';
    document.documentElement.lang = lang;
    const dict = translations[lang] || translations.en;

    // Plain text replacements
    document.querySelectorAll('[data-i18n]').forEach((el) => {
      const key = el.getAttribute('data-i18n');
      if (dict[key] !== undefined) {
        if (el.hasAttribute('data-typewriter')) {
          el.setAttribute('data-text', dict[key]);
          if (el.textContent.trim() !== '') {
            el.textContent = dict[key];
          }
        } else {
          el.textContent = dict[key];
        }
      }
    });

    // HTML content replacements
    document.querySelectorAll('[data-i18n-html]').forEach((el) => {
      const key = el.getAttribute('data-i18n-html');
      if (dict[key] !== undefined) {
        el.innerHTML = dict[key];
      }
    });

    // Input placeholders
    document.querySelectorAll('[data-i18n-ph]').forEach((el) => {
      const key = el.getAttribute('data-i18n-ph');
      if (dict[key] !== undefined) {
        el.setAttribute('placeholder', dict[key]);
      }
    });

    // Alt text
    document.querySelectorAll('[data-i18n-alt]').forEach((el) => {
      const key = el.getAttribute('data-i18n-alt');
      if (dict[key] !== undefined) {
        el.setAttribute('alt', dict[key]);
      }
    });

    // Aria labels
    document.querySelectorAll('[data-i18n-aria]').forEach((el) => {
      const key = el.getAttribute('data-i18n-aria');
      if (dict[key] !== undefined) {
        el.setAttribute('aria-label', dict[key]);
      }
    });

    // Update dropdown button label (flag + code)
    const upperCode = lang.toUpperCase();
    document.querySelectorAll('.lang-current').forEach((el) => {
      el.textContent = upperCode;
    });
    document.querySelectorAll('.lang-current-flag').forEach((el) => {
      el.textContent = FLAGS[lang] || '';
    });

    // Mark active option
    document.querySelectorAll('.lang-option').forEach((btn) => {
      const btnLang = btn.getAttribute('data-lang');
      btn.classList.toggle('active', btnLang === lang);
    });
  }

  /**
   * Change current language
   */
  function setLanguage(lang) {
    if (!SUPPORTED_LANGS.includes(lang)) return;
    localStorage.setItem(STORAGE_KEY, lang);
    applyLanguage(lang);
  }

  // Global helper for toast messages or dynamic JS strings
  window.i18n = {
    getLanguage: getLanguage,
    setLanguage: setLanguage,
    t: function (key) {
      const lang = getLanguage();
      const dict = translations[lang] || translations.en;
      return dict[key] || translations.en[key] || key;
    }
  };

  // Initialize on DOM ready
  document.addEventListener('DOMContentLoaded', function () {
    const currentLang = getLanguage();
    applyLanguage(currentLang);

    // Event delegation for language dropdown toggle
    document.body.addEventListener('click', function (e) {
      const toggleBtn = e.target.closest('.lang-dropdown-btn');
      if (toggleBtn) {
        e.stopPropagation();
        const dropdown = toggleBtn.closest('.lang-dropdown');
        const isExpanded = dropdown.classList.contains('open');

        // Close all other dropdowns
        document.querySelectorAll('.lang-dropdown').forEach((d) => {
          if (d !== dropdown) {
            d.classList.remove('open');
            d.querySelector('.lang-dropdown-btn')?.setAttribute('aria-expanded', 'false');
          }
        });

        dropdown.classList.toggle('open', !isExpanded);
        toggleBtn.setAttribute('aria-expanded', !isExpanded ? 'true' : 'false');
        return;
      }

      // Handle selecting a language option
      const optionBtn = e.target.closest('.lang-option');
      if (optionBtn) {
        const lang = optionBtn.getAttribute('data-lang');
        if (lang) {
          setLanguage(lang);
          const dropdown = optionBtn.closest('.lang-dropdown');
          if (dropdown) {
            dropdown.classList.remove('open');
            dropdown.querySelector('.lang-dropdown-btn')?.setAttribute('aria-expanded', 'false');
          }
        }
        return;
      }

      // Click outside to close dropdowns
      document.querySelectorAll('.lang-dropdown.open').forEach((dropdown) => {
        dropdown.classList.remove('open');
        dropdown.querySelector('.lang-dropdown-btn')?.setAttribute('aria-expanded', 'false');
      });
    });

    // Press Escape to close dropdowns
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') {
        document.querySelectorAll('.lang-dropdown.open').forEach((dropdown) => {
          dropdown.classList.remove('open');
          dropdown.querySelector('.lang-dropdown-btn')?.setAttribute('aria-expanded', 'false');
        });
      }
    });
  });
})();
