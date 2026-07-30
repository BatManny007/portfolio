/**
 * i18n.js — Internationalization (EN / FR) system for Batmanny Portfolio
 */

(function () {
  const STORAGE_KEY = 'batmanny_lang';

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
    }
  };

  /**
   * Get current selected language
   * Priority:
   * 1. URL parameter (?lang=fr)
   * 2. LocalStorage saved choice
   * 3. Browser language settings (France / French locales -> 'fr')
   */
  function getLanguage() {
    // 1. Check URL query parameter
    try {
      const urlParams = new URLSearchParams(window.location.search);
      const urlLang = (urlParams.get('lang') || '').toLowerCase();
      if (urlLang === 'fr' || urlLang === 'en') return urlLang;
    } catch (e) {}

    // 2. Check saved choice in localStorage
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved === 'fr' || saved === 'en') return saved;

    // 3. Automatic browser detection for users in France / French language settings
    const userLangs = Array.from(navigator.languages || [navigator.language || '']);
    const isFrench = userLangs.some((l) => (l || '').toLowerCase().startsWith('fr'));
    if (isFrench) return 'fr';

    return 'en';
  }

  /**
   * Translate the DOM elements
   */
  function applyLanguage(lang) {
    document.documentElement.lang = lang;
    const dict = translations[lang] || translations.en;

    // Plain text replacements
    document.querySelectorAll('[data-i18n]').forEach((el) => {
      const key = el.getAttribute('data-i18n');
      if (dict[key] !== undefined) {
        // If element uses typewriter, update data-text as well
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

    // HTML content replacements (e.g. strong tags inside text)
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

    // Update active states on toggle buttons
    document.querySelectorAll('.lang-btn').forEach((btn) => {
      const btnLang = btn.getAttribute('data-lang');
      btn.classList.toggle('active', btnLang === lang);
    });
  }

  /**
   * Change current language
   */
  function setLanguage(lang) {
    if (lang !== 'en' && lang !== 'fr') return;
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

    // Event delegation for language toggle buttons
    document.body.addEventListener('click', function (e) {
      const toggleBtn = e.target.closest('.lang-btn');
      if (toggleBtn) {
        const lang = toggleBtn.getAttribute('data-lang');
        if (lang) setLanguage(lang);
      }
    });
  });
})();
