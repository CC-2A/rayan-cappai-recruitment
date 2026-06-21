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
      "Skip to content": "Aller au contenu",
      "Open navigation": "Ouvrir la navigation",
      "Snapshot": "Aperçu",
      "Video": "Vidéo",
      "Profile": "Profil",
      "Sport CV": "CV sportif",
      "Action Photos": "Photos en action",
      "Recruiting Fit": "Profil recherché",
      "Contact": "Contact",
      "Club recruitment · French midfielder · France + United States": "Recrutement club · Milieu français · France + États-Unis",
      "Rayan Cappai": "Rayan Cappai",
      "2006 French Central Midfielder | 6 / 8 / 10 | Club Trial / Evaluation": "Milieu central français 2006 | 6 / 8 / 10 | Essai / évaluation club",
      "U17 Nationaux / U19 Nationaux background in France, then U.S. experience with William Penn University and current U.S. Summer League with First State FC / Midnight Riders. Available for club trial and next-step evaluation, with 2026 highlights and the latest full-match reference from June 20, 2026 ready for staff review.": "Parcours en U17 Nationaux / U19 Nationaux en France, puis expérience US avec William Penn University et U.S. Summer League actuelle avec First State FC / Midnight Riders. Disponible pour essai ou évaluation en club, avec highlights 2026 et dernier match complet du 20 juin 2026 prêts pour les staffs.",
      "2006-born": "Né en 2006",
      "1.82 m / 77 kg": "1,82 m / 77 kg",
      "Right-footed": "Droitier",
      "U17 Nationaux / U19 Nationaux": "U17 Nationaux / U19 Nationaux",
      "William Penn + First State FC": "William Penn + First State FC",
      "Highlights 2026 Rayan Cappai": "Highlights 2026 Rayan Cappai",
      "Latest Full Match — June 20, 2026 (#27)": "Dernier match complet — 20 juin 2026 (#27)",
      "Download CV — English": "Télécharger CV — Anglais",
      "Télécharger CV — Français": "Télécharger CV — Français",
      "Descargar CV — Español": "Télécharger CV — Espagnol",
      "Contact Rayan": "Contacter Rayan",
      "Club Review": "Revue club",
      "William Penn University": "William Penn University",
      "First State FC / Midnight Riders": "First State FC / Midnight Riders",
      "Latest Full Match #27": "Dernier match complet #27",
      "Sport CV PDFs": "CV sportif PDF",
      "Direct WhatsApp contact": "Contact WhatsApp direct",
      "Recruitment Snapshot": "Aperçu recrutement",
      "Key facts at a glance": "Points clés en un coup d’œil",
      "Concise recruitment data for coaches, scouts, sporting directors, and club staff.": "Informations clés pour coachs, recruteurs, directeurs sportifs et staffs de clubs.",
      "Position": "Poste",
      "Central Midfielder": "Milieu central",
      "Role": "Rôle",
      "6 / 8 / 10": "6 / 8 / 10",
      "French Youth Level": "Niveau jeunes France",
      "Current Club": "Club actuel",
      "Current Level": "Niveau actuel",
      "U.S. Summer League": "U.S. Summer League",
      "Height / Weight": "Taille / Poids",
      "Foot": "Pied",
      "U.S. Experience": "Expérience US",
      "William Penn University + First State FC": "William Penn University + First State FC",
      "Availability": "Disponibilité",
      "Club trial / evaluation": "Essai / évaluation club",
      "Video Evaluation": "Évaluation vidéo",
      "Highlights 2026 + latest full-match reference": "Highlights 2026 + dernier match complet de référence",
      "Start with the 2026 highlights, then use the June 20, 2026 full match to evaluate decisions, positioning, tempo, and work rate. Rayan wears number 27.": "Commencez par les highlights 2026, puis utilisez le match complet du 20 juin 2026 pour évaluer les décisions, le positionnement, le tempo et le volume de travail. Rayan porte le numéro 27.",
      "Fast review": "Évaluation rapide",
      "Latest 2026 highlight reel for a fast first review of technical quality, movement, and ball security.": "Derniers highlights 2026 pour une première évaluation rapide de la qualité technique, des déplacements et de la sécurité balle au pied.",
      "Latest full-match review": "Dernière analyse match complet",
      "Latest Full Match — June 20, 2026": "Dernier match complet — 20 juin 2026",
      "Full-match reference from June 20, 2026. Rayan wears number 27.": "Match complet de référence du 20 juin 2026. Rayan porte le numéro 27.",
      "Watch Latest Full Match #27": "Voir le dernier match complet #27",
      "Best evaluated as a central midfielder who keeps possession alive, connects phases, and can move between deeper organizing, box-to-box support, and advanced link play.": "À évaluer comme un milieu central capable de maintenir la possession, relier les phases et évoluer entre organisation basse, soutien box-to-box et jeu avancé entre les lignes.",
      "Coach-facing profile": "Profil pour staffs",
      "Why review Rayan?": "Pourquoi étudier le profil de Rayan ?",
      "U17 Nationaux / U19 Nationaux background in France before moving into U.S. environments.": "Parcours en U17 Nationaux / U19 Nationaux en France avant l’expérience aux États-Unis.",
      "U.S. experience combines William Penn University and current U.S. Summer League competition with First State FC / Midnight Riders.": "Son expérience US combine William Penn University et la U.S. Summer League actuelle avec First State FC / Midnight Riders.",
      "Flexible 6 / 8 / 10 profile: can organize deeper, connect box-to-box, or receive higher between lines.": "Profil polyvalent 6 / 8 / 10 : capable d’organiser plus bas, de relier box-to-box ou de recevoir plus haut entre les lignes.",
      "Latest full-match video supports evaluation beyond highlights: scanning, tempo control, defensive work, and decisions under pressure.": "La dernière vidéo en match complet permet une évaluation au-delà des highlights : prise d’information, contrôle du tempo, travail défensif et décisions sous pression.",
      "Download the Sport CV": "Télécharger le CV sportif",
      "Download the CV in the preferred language.": "Téléchargez le CV dans la langue souhaitée.",
      "PDF downloads": "Téléchargements PDF",
      "Current match photo set": "Sélection actuelle de photos de match",
      "Action photos remain available for visual context.": "Les photos en action restent disponibles pour le contexte visuel.",
      "Supporting Documents": "Documents complémentaires",
      "Additional documents": "Documents additionnels",
      "Sporting, academic, and reference documents are available by email request if needed by club staff.": "Les documents sportifs, académiques et références sont disponibles sur demande si le staff du club en a besoin.",
      "Request Documents": "Demander les documents",
      "Recruiting fit": "Profil de recrutement",
      "Best-fit opportunities": "Opportunités les plus adaptées",
      "Clubs seeking a 2006 central midfielder with U17 Nationaux / U19 Nationaux background and current U.S. match footage.": "Clubs recherchant un milieu central 2006 avec parcours U17 Nationaux / U19 Nationaux et images récentes aux États-Unis.",
      "Pre-professional and semi-professional environments that value midfield range, role flexibility, and full-match evaluation.": "Environnements préprofessionnels et semi-professionnels qui valorisent le volume au milieu, la flexibilité de rôle et l’évaluation sur match complet.",
      "Teams needing a right-footed 6 / 8 / 10 profile with current U.S. match footage and direct communication available.": "Équipes recherchant un profil droitier 6 / 8 / 10 avec images récentes aux États-Unis et échange direct possible.",
      "Interested coaches and clubs": "Coachs et clubs intéressés",
      "For club trials, staff evaluation, pre-professional environments, or next-step opportunities, contact Rayan directly after reviewing the video sequence and Sport CV.": "Pour un essai en club, une évaluation staff, un environnement préprofessionnel ou une opportunité suivante, contactez Rayan directement après avoir consulté les vidéos et le CV sportif.",
      "Email:": "Email :",
      "Phone / WhatsApp:": "Téléphone / WhatsApp :",
      "WhatsApp / Call": "WhatsApp / Appel",
      "View Player Profile": "Voir le profil joueur",
      "Rayan Cappai Recruitment Profile": "Profil de recrutement Rayan Cappai",
      "Back to top": "Retour en haut"
    },
    attributes: {
      "Primary navigation": "Navigation principale",
      "Rayan Cappai home": "Accueil Rayan Cappai",
      "Select website language": "Sélectionner la langue du site",
      "Switch website language to English": "Passer le site en anglais",
      "Switch website language to French": "Passer le site en français",
      "Switch website language to Spanish": "Passer le site en espagnol",
      "Key recruitment badges": "Badges clés de recrutement",
      "Coach priority actions": "Actions prioritaires pour staffs",
      "Coach review sequence": "Séquence de revue staff",
      "Watch Rayan Cappai latest full match number 27 from June 20 2026 in a new tab": "Voir le dernier match complet numéro 27 de Rayan Cappai du 20 juin 2026 dans un nouvel onglet",
      "Watch Rayan Cappai 2026 highlights video in a new tab": "Voir les highlights 2026 de Rayan Cappai dans un nouvel onglet",
      "Sport CV download options": "Options de téléchargement du CV sportif",
      "Recent action photos of Rayan Cappai": "Photos récentes de Rayan Cappai en action",
      "Download Rayan Cappai Sport CV in English": "Télécharger le CV sportif de Rayan Cappai en anglais",
      "Download Rayan Cappai Sport CV in French": "Télécharger le CV sportif de Rayan Cappai en français",
      "Download Rayan Cappai Sport CV in Spanish": "Télécharger le CV sportif de Rayan Cappai en espagnol"
    },
    meta: {
      "Coach-ready recruitment profile for Rayan Cappai: 2006 French central midfielder with U17 Nationaux / U19 Nationaux background, U.S. experience at William Penn University, and current U.S. Summer League footage with First State FC / Midnight Riders.": "Profil prêt pour staffs de Rayan Cappai : milieu central français né en 2006 avec parcours U17 Nationaux / U19 Nationaux, expérience US à William Penn University et images actuelles en U.S. Summer League avec First State FC / Midnight Riders.",
      "Rayan Cappai | 2006 Central Midfielder Club Evaluation Profile": "Rayan Cappai | Profil club milieu central 2006",
      "Coach-ready highlights, latest full match #27, Sport CV, and contact details for Rayan Cappai, a French 6/8/10 midfielder with U17 Nationaux / U19 Nationaux background and U.S. experience.": "Highlights, dernier match complet #27, CV sportif et coordonnées de Rayan Cappai, milieu français 6/8/10 avec parcours U17 Nationaux / U19 Nationaux et expérience US.",
      "U17 Nationaux / U19 Nationaux background, U.S. experience, highlights 2026, latest full match #27, Sport CV PDF, and direct club contact for Rayan Cappai.": "Parcours U17 Nationaux / U19 Nationaux, expérience US, highlights 2026, dernier match complet #27, CV sportif PDF et contact direct club pour Rayan Cappai.",
      "Rayan Cappai Recruitment | 2006 Central Midfielder & Sport CV": "Recrutement Rayan Cappai | Milieu central 2006 & CV sportif"
    }
  },
  es: {
    text: {
      "Club recruitment · French midfielder · France + United States": "Reclutamiento de club · Mediocampista francés · Francia + Estados Unidos",
      "2006 French Central Midfielder | 6 / 8 / 10 | Club Trial / Evaluation": "Mediocampista central francés 2006 | 6 / 8 / 10 | Prueba / evaluación de club",
      "U17 Nationaux / U19 Nationaux background in France, then U.S. experience with William Penn University and current U.S. Summer League with First State FC / Midnight Riders. Available for club trial and next-step evaluation, with 2026 highlights and the latest full-match reference from June 20, 2026 ready for staff review.": "Trayectoria en U17 Nationaux / U19 Nationaux en Francia, luego experiencia en EE. UU. con William Penn University y U.S. Summer League actual con First State FC / Midnight Riders. Disponible para prueba o evaluación de club, con highlights 2026 y el último partido completo del 20 de junio de 2026 listo para revisión del staff.",
      "U17 Nationaux / U19 Nationaux": "U17 Nationaux / U19 Nationaux",
      "French Youth Level": "Nivel juvenil francés",
      "U17 Nationaux / U19 Nationaux background in France before moving into U.S. environments.": "Trayectoria en U17 Nationaux / U19 Nationaux en Francia antes de la experiencia en EE. UU.",
      "U.S. experience combines William Penn University and current U.S. Summer League competition with First State FC / Midnight Riders.": "Su experiencia en EE. UU. combina William Penn University y U.S. Summer League actual con First State FC / Midnight Riders.",
      "Clubs seeking a 2006 central midfielder with U17 Nationaux / U19 Nationaux background and current U.S. match footage.": "Clubes que buscan un mediocampista central 2006 con trayectoria U17 Nationaux / U19 Nationaux y video actual en EE. UU.",
      "Back to top": "Volver arriba"
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
