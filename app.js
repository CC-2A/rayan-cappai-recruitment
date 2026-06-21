const header = document.querySelector('[data-header]');
const navToggle = document.querySelector('[data-nav-toggle]');
const navMenu = document.querySelector('[data-nav-menu]');
const year = document.querySelector('[data-year]');
const languageButtons = document.querySelectorAll('[data-lang-option]');
const languageStorageKey = 'rayan-cappai-language';
const supportedLanguages = ['en', 'fr', 'es'];
const defaultLanguage = 'en';

const translations = {
  fr: {
    text: {
      'Skip to content': 'Aller au contenu',
      'Open navigation': 'Ouvrir la navigation',
      'Snapshot': 'Aperçu',
      'Video': 'Vidéo',
      'Profile': 'Profil',
      'Sport CV': 'CV sportif',
      'Action Photos': 'Photos en action',
      'Recruiting Fit': 'Profil recherché',
      'Contact': 'Contact',
      'Fall 2026 recruitment · French midfielder · United States': 'Recrutement Fall 2026 · Milieu français · États-Unis',
      'Rayan Cappai': 'Rayan Cappai',
      '2006 French Central Midfielder | 6 / 8 / 10 | Fall 2026 Available': 'Milieu central français 2006 | 6 / 8 / 10 | Disponible Fall 2026',
      '2006 French central midfielder currently competing in the U.S. Summer League with First State FC / Midnight Riders. Available for Fall 2026 college soccer and club evaluation, with 2026 highlights and the latest full-match reference from June 20, 2026 ready for staff review.': 'Milieu central français né en 2006, actuellement en U.S. Summer League avec First State FC / Midnight Riders. Disponible pour le soccer universitaire Fall 2026 et pour une évaluation en club, avec les highlights 2026 et le dernier match complet du 20 juin 2026 prêts pour les staffs.',
      '2006-born': 'Né en 2006',
      '1.82 m / 77 kg': '1,82 m / 77 kg',
      'Right-footed': 'Droitier',
      'U.S. footage': 'Images récentes aux États-Unis',
      'Highlights 2026 Rayan Cappai': 'Highlights 2026 Rayan Cappai',
      'Latest Full Match — June 20, 2026 (#27)': 'Dernier match complet — 20 juin 2026 (#27)',
      'Download CV — English': 'Télécharger CV — Anglais',
      'Télécharger CV — Français': 'Télécharger CV — Français',
      'Descargar CV — Español': 'Télécharger CV — Espagnol',
      'Contact Rayan': 'Contacter Rayan',
      'Coach Review': 'Revue coach',
      'Highlights 2026': 'Highlights 2026',
      'Latest Full Match #27': 'Dernier match complet #27',
      'Sport CV PDFs': 'CV sportif PDF',
      'Direct WhatsApp contact': 'Contact WhatsApp direct',
      'Recruitment Snapshot': 'Aperçu recrutement',
      'Key facts at a glance': 'Points clés en un coup d’œil',
      'Concise recruitment data for U.S. college soccer coaches, scouts, and pre-professional evaluators.': 'Données de recrutement synthétiques pour coachs universitaires américains, recruteurs et évaluateurs préprofessionnels.',
      'Position': 'Poste',
      'Central Midfielder': 'Milieu central',
      'Role': 'Rôle',
      '6 / 8 / 10': '6 / 8 / 10',
      'Current Club': 'Club actuel',
      'First State FC / Midnight Riders': 'First State FC / Midnight Riders',
      'Current Level': 'Niveau actuel',
      'U.S. Summer League': 'U.S. Summer League',
      'Height / Weight': 'Taille / Poids',
      'Foot': 'Pied',
      'Previous College': 'Université précédente',
      'William Penn University': 'William Penn University',
      'Availability': 'Disponibilité',
      'Fall 2026': 'Fall 2026',
      'Video Evaluation': 'Évaluation vidéo',
      'Highlights 2026 + latest full-match reference': 'Highlights 2026 + dernier match complet de référence',
      'Start with the 2026 highlights, then use the June 20, 2026 full match to evaluate decisions, positioning, tempo, and work rate. Rayan wears number 27.': 'Commencez par les highlights 2026, puis utilisez le match complet du 20 juin 2026 pour évaluer les décisions, le positionnement, le tempo et le volume de travail. Rayan porte le numéro 27.',
      'Fast review': 'Évaluation rapide',
      'Latest 2026 highlight reel for a fast first review of technical quality, movement, and ball security.': 'Derniers highlights 2026 pour une première évaluation rapide de la qualité technique, des déplacements et de la sécurité balle au pied.',
      'Latest full-match review': 'Dernière analyse match complet',
      'Latest Full Match — June 20, 2026': 'Dernier match complet — 20 juin 2026',
      'Full-match reference from June 20, 2026. Rayan wears number 27.': 'Match complet de référence du 20 juin 2026. Rayan porte le numéro 27.',
      'Watch Latest Full Match #27': 'Voir le dernier match complet #27',
      'Best evaluated as a central midfielder who keeps possession alive, connects phases, and can move between deeper organizing, box-to-box support, and advanced link play.': 'À évaluer comme un milieu central capable de maintenir la possession, relier les phases et évoluer entre organisation basse, soutien box-to-box et jeu avancé entre les lignes.',
      'Coach-facing profile': 'Profil pour coachs',
      'Why review Rayan?': 'Pourquoi évaluer Rayan ?',
      '2006 French central midfielder with U.S. college experience at William Penn University.': 'Milieu central français né en 2006 avec une expérience universitaire américaine à William Penn University.',
      'Current U.S. Summer League footage gives coaches recent context for speed of play, physicality, and adaptation.': 'Ses images actuelles en U.S. Summer League donnent aux coachs un contexte récent sur le rythme, l’impact physique et l’adaptation.',
      'Flexible 6 / 8 / 10 profile: can organize deeper, connect box-to-box, or receive higher between lines.': 'Profil polyvalent 6 / 8 / 10 : capable d’organiser plus bas, de relier box-to-box ou de recevoir plus haut entre les lignes.',
      'Latest full-match video supports evaluation beyond highlights: scanning, tempo control, defensive work, and decisions under pressure.': 'La dernière vidéo en match complet permet une évaluation au-delà des highlights : prise d’information, contrôle du tempo, travail défensif et décisions sous pression.',
      'Download the Sport CV': 'Télécharger le CV sportif',
      'Download the CV in the preferred language.': 'Téléchargez le CV dans la langue souhaitée.',
      'PDF downloads': 'Téléchargements PDF',
      'Current match photo set': 'Sélection actuelle de photos de match',
      'Action photos remain available for visual context.': 'Les photos en action restent disponibles pour le contexte visuel.',
      'Academic & Eligibility Documents': 'Documents académiques et d’éligibilité',
      'Supporting documents': 'Documents complémentaires',
      'Academic, eligibility, and reference documents are available by email request.': 'Les documents académiques, d’éligibilité et les références sont disponibles sur demande par email.',
      'Request Documents': 'Demander les documents',
      'Recruiting fit': 'Profil de recrutement',
      'Best-fit opportunities': 'Opportunités les plus adaptées',
      'U.S. college soccer programs seeking a Fall 2026 central midfielder.': 'Programmes universitaires américains recherchant un milieu central disponible Fall 2026.',
      'Pre-professional environments that value midfield range, role flexibility, and full-match evaluation.': 'Environnements préprofessionnels qui valorisent le volume au milieu, la flexibilité de rôle et l’évaluation sur match complet.',
      'Clubs needing a right-footed 6 / 8 / 10 profile available for direct communication and next-step review.': 'Clubs recherchant un profil droitier 6 / 8 / 10 disponible pour échange direct et évaluation suivante.',
      'Interested coaches and clubs': 'Coachs et clubs intéressés',
      'For Fall 2026 college recruitment, pre-professional evaluation, or club opportunities, contact Rayan directly after reviewing the video sequence and Sport CV.': 'Pour le recrutement universitaire Fall 2026, une évaluation préprofessionnelle ou des opportunités en club, contactez Rayan directement après avoir consulté les vidéos et le CV sportif.',
      'Email:': 'Email :',
      'Phone / WhatsApp:': 'Téléphone / WhatsApp :',
      'WhatsApp / Call': 'WhatsApp / Appel',
      'View Player Profile': 'Voir le profil joueur',
      'Rayan Cappai Recruitment Profile': 'Profil de recrutement Rayan Cappai',
      'Back to top': 'Retour en haut'
    },
    attributes: {
      'Primary navigation': 'Navigation principale',
      'Rayan Cappai home': 'Accueil Rayan Cappai',
      'Select website language': 'Sélectionner la langue du site',
      'Switch website language to English': 'Passer le site en anglais',
      'Switch website language to French': 'Passer le site en français',
      'Switch website language to Spanish': 'Passer le site en espagnol',
      'Key recruitment badges': 'Badges clés de recrutement',
      'Coach priority actions': 'Actions prioritaires pour coachs',
      'Coach review sequence': 'Séquence de revue coach',
      'Watch Rayan Cappai latest full match number 27 from June 20 2026 in a new tab': 'Voir le dernier match complet numéro 27 de Rayan Cappai du 20 juin 2026 dans un nouvel onglet',
      'Watch Rayan Cappai 2026 highlights video in a new tab': 'Voir les highlights 2026 de Rayan Cappai dans un nouvel onglet',
      'Sport CV download options': 'Options de téléchargement du CV sportif',
      'Recent action photos of Rayan Cappai': 'Photos récentes de Rayan Cappai en action',
      'Download Rayan Cappai Sport CV in English': 'Télécharger le CV sportif de Rayan Cappai en anglais',
      'Download Rayan Cappai Sport CV in French': 'Télécharger le CV sportif de Rayan Cappai en français',
      'Download Rayan Cappai Sport CV in Spanish': 'Télécharger le CV sportif de Rayan Cappai en espagnol'
    },
    meta: {}
  },
  es: {
    text: {
      'Skip to content': 'Saltar al contenido',
      'Open navigation': 'Abrir navegación',
      'Snapshot': 'Resumen',
      'Video': 'Video',
      'Profile': 'Perfil',
      'Sport CV': 'CV deportivo',
      'Action Photos': 'Fotos en acción',
      'Recruiting Fit': 'Encaje deportivo',
      'Contact': 'Contacto',
      'Fall 2026 recruitment · French midfielder · United States': 'Reclutamiento Fall 2026 · Mediocampista francés · Estados Unidos',
      'Rayan Cappai': 'Rayan Cappai',
      '2006 French Central Midfielder | 6 / 8 / 10 | Fall 2026 Available': 'Mediocampista central francés 2006 | 6 / 8 / 10 | Disponible Fall 2026',
      '2006 French central midfielder currently competing in the U.S. Summer League with First State FC / Midnight Riders. Available for Fall 2026 college soccer and club evaluation, with 2026 highlights and the latest full-match reference from June 20, 2026 ready for staff review.': 'Mediocampista central francés nacido en 2006, actualmente compitiendo en la U.S. Summer League con First State FC / Midnight Riders. Disponible para soccer universitario Fall 2026 y evaluación de clubes, con highlights 2026 y el último partido completo del 20 de junio de 2026 listo para revisión del staff.',
      '2006-born': 'Nacido en 2006',
      '1.82 m / 77 kg': '1,82 m / 77 kg',
      'Right-footed': 'Diestro',
      'U.S. footage': 'Video reciente en EE. UU.',
      'Highlights 2026 Rayan Cappai': 'Highlights 2026 Rayan Cappai',
      'Latest Full Match — June 20, 2026 (#27)': 'Último partido completo — 20 de junio de 2026 (#27)',
      'Download CV — English': 'Descargar CV — Inglés',
      'Télécharger CV — Français': 'Descargar CV — Francés',
      'Descargar CV — Español': 'Descargar CV — Español',
      'Contact Rayan': 'Contactar a Rayan',
      'Coach Review': 'Revisión del entrenador',
      'Highlights 2026': 'Highlights 2026',
      'Latest Full Match #27': 'Último partido completo #27',
      'Sport CV PDFs': 'CV deportivo PDF',
      'Direct WhatsApp contact': 'Contacto directo por WhatsApp',
      'Recruitment Snapshot': 'Resumen de reclutamiento',
      'Key facts at a glance': 'Datos clave de un vistazo',
      'Video Evaluation': 'Evaluación en video',
      'Highlights 2026 + latest full-match reference': 'Highlights 2026 + último partido completo de referencia',
      'Start with the 2026 highlights, then use the June 20, 2026 full match to evaluate decisions, positioning, tempo, and work rate. Rayan wears number 27.': 'Empiece con los highlights 2026 y luego use el partido completo del 20 de junio de 2026 para evaluar decisiones, posicionamiento, ritmo y trabajo. Rayan usa el número 27.',
      'Latest full-match review': 'Último análisis de partido completo',
      'Latest Full Match — June 20, 2026': 'Último partido completo — 20 de junio de 2026',
      'Full-match reference from June 20, 2026. Rayan wears number 27.': 'Partido completo de referencia del 20 de junio de 2026. Rayan usa el número 27.',
      'Watch Latest Full Match #27': 'Ver último partido completo #27',
      'Why review Rayan?': '¿Por qué evaluar a Rayan?',
      'Latest full-match video supports evaluation beyond highlights: scanning, tempo control, defensive work, and decisions under pressure.': 'El último video de partido completo permite evaluar más allá de los highlights: lectura previa, control del ritmo, trabajo defensivo y decisiones bajo presión.',
      'Back to top': 'Volver arriba'
    },
    attributes: {},
    meta: {}
  }
};

const originalTextNodes = new Map();
const originalAttributes = new Map();

const getLanguage = () => {
  try {
    const storedLanguage = window.localStorage.getItem(languageStorageKey);
    return supportedLanguages.includes(storedLanguage) ? storedLanguage : defaultLanguage;
  } catch {
    return defaultLanguage;
  }
};

const storeLanguage = (language) => {
  try {
    window.localStorage.setItem(languageStorageKey, language);
  } catch {
    // Keep language switching functional even when storage is unavailable.
  }
};

const captureOriginalText = () => {
  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, {
    acceptNode(node) {
      return node.nodeValue.trim() ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT;
    }
  });

  let node = walker.nextNode();
  while (node) {
    originalTextNodes.set(node, node.nodeValue);
    node = walker.nextNode();
  }
};

const translateTextNode = (node, dictionary) => {
  const original = originalTextNodes.get(node);
  if (!original) return;

  const key = original.trim();
  const translated = dictionary?.text?.[key] || key;
  const leading = original.match(/^\s*/)[0];
  const trailing = original.match(/\s*$/)[0];
  node.nodeValue = `${leading}${translated}${trailing}`;
};

const captureOriginalAttributes = () => {
  document.querySelectorAll('[aria-label], img[alt], [data-i18n-content]').forEach((element) => {
    originalAttributes.set(element, {
      ariaLabel: element.getAttribute('aria-label'),
      alt: element.getAttribute('alt'),
      content: element.getAttribute('content')
    });
  });
};

const translateAttribute = (element, attribute, dictionary, keyOverride) => {
  const savedAttributes = originalAttributes.get(element);
  const originalAttribute = keyOverride || savedAttributes?.[attribute === 'aria-label' ? 'ariaLabel' : attribute] || element.getAttribute(attribute);
  const translated = dictionary?.attributes?.[originalAttribute] || dictionary?.meta?.[originalAttribute] || originalAttribute;

  if (translated) {
    element.setAttribute(attribute, translated);
  }
};

const applyLanguage = (language) => {
  const dictionary = translations[language];

  originalTextNodes.forEach((_, node) => translateTextNode(node, dictionary));

  document.querySelectorAll('[aria-label]').forEach((element) => {
    translateAttribute(element, 'aria-label', dictionary, element.dataset.i18nAriaLabel);
  });

  document.querySelectorAll('img[alt]').forEach((element) => {
    translateAttribute(element, 'alt', dictionary);
  });

  document.querySelectorAll('[data-i18n-content]').forEach((element) => {
    translateAttribute(element, 'content', dictionary, element.dataset.i18nContent);
  });

  const titleElement = document.querySelector('[data-i18n-title]');
  if (titleElement) {
    const titleKey = titleElement.dataset.i18nTitle;
    document.title = dictionary?.meta?.[titleKey] || titleKey;
    titleElement.textContent = document.title;
  }

  document.documentElement.lang = language;

  languageButtons.forEach((button) => {
    const isActive = button.dataset.langOption === language;
    button.classList.toggle('is-active', isActive);
    button.setAttribute('aria-pressed', String(isActive));
  });
};

let scrollTicking = false;

const setHeaderState = () => {
  header?.classList.toggle('is-scrolled', window.scrollY > 12);
  scrollTicking = false;
};

const requestHeaderState = () => {
  if (!scrollTicking) {
    window.requestAnimationFrame(setHeaderState);
    scrollTicking = true;
  }
};

const closeMenu = () => {
  document.body.classList.remove('nav-open');
  navMenu?.classList.remove('is-open');
  navToggle?.setAttribute('aria-expanded', 'false');
};

languageButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const selectedLanguage = button.dataset.langOption;
    if (!supportedLanguages.includes(selectedLanguage)) return;

    storeLanguage(selectedLanguage);
    applyLanguage(selectedLanguage);
  });
});

navToggle?.addEventListener('click', () => {
  const isOpen = navMenu?.classList.toggle('is-open');
  document.body.classList.toggle('nav-open', Boolean(isOpen));
  navToggle.setAttribute('aria-expanded', String(Boolean(isOpen)));
});

navMenu?.addEventListener('click', (event) => {
  if (event.target instanceof HTMLAnchorElement) {
    closeMenu();
  }
});

window.addEventListener('scroll', requestHeaderState, { passive: true });
window.addEventListener('resize', () => {
  if (window.innerWidth >= 860) closeMenu();
});

if (year) {
  year.textContent = new Date().getFullYear();
}

captureOriginalText();
captureOriginalAttributes();
applyLanguage(getLanguage());
setHeaderState();
