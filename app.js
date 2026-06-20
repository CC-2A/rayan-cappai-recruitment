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
      '2006 French central midfielder currently competing in the U.S. Summer League with First State FC / Midnight Riders. Available for Fall 2026 college soccer and club evaluation, with 2026 highlights and full-match references ready for staff review.': 'Milieu central français né en 2006, actuellement en U.S. Summer League avec First State FC / Midnight Riders. Disponible pour le soccer universitaire Fall 2026 et pour une évaluation en club, avec highlights 2026 et matchs complets disponibles pour les staffs.',
      '2006-born': 'Né en 2006',
      '1.82 m / 77 kg': '1,82 m / 77 kg',
      'Right-footed': 'Droitier',
      'U.S. footage': 'Images récentes aux États-Unis',
      'Highlights 2026 Rayan Cappai': 'Highlights 2026 Rayan Cappai',
      'Watch Full Match #6': 'Voir le match complet #6',
      'Watch Full Match #10': 'Voir le match complet #10',
      'Download CV — English': 'Télécharger CV — Anglais',
      'Télécharger CV — Français': 'Télécharger CV — Français',
      'Descargar CV — Español': 'Télécharger CV — Espagnol',
      'Contact Rayan': 'Contacter Rayan',
      'Coach Review': 'Revue coach',
      'Highlights 2026': 'Highlights 2026',
      'Full Match #6 / #10': 'Matchs complets #6 / #10',
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
      'Highlights 2026 + two full-match references': 'Highlights 2026 + deux matchs complets de référence',
      'Start with the 2026 highlights, then use the two full matches for decisions, positioning, and tempo.': 'Commencez par les highlights 2026, puis utilisez les deux matchs complets pour évaluer les décisions, le positionnement et le tempo.',
      'Fast review': 'Évaluation rapide',
      'Latest 2026 highlight reel for a fast first review of technical quality, movement, and ball security.': 'Derniers highlights 2026 pour une première évaluation rapide de la qualité technique, des déplacements et de la sécurité balle au pied.',
      'Full-match review': 'Analyse match complet',
      'Full Match #6': 'Match complet #6',
      'Extended view of positioning, defensive work, and choices under pressure.': 'Vue prolongée du positionnement, du travail défensif et des choix sous pression.',
      'Full Match #10': 'Match complet #10',
      'Second reference for scanning, tempo, and actions between lines.': 'Deuxième référence pour la prise d’information, le tempo et les actions entre les lignes.',
      'Best evaluated as a central midfielder who keeps possession alive, connects phases, and can move between deeper organizing, box-to-box support, and advanced link play.': 'À évaluer comme un milieu central capable de maintenir la possession, relier les phases et évoluer entre organisation basse, soutien box-to-box et jeu avancé entre les lignes.',
      'Coach-facing profile': 'Profil pour coachs',
      'Why review Rayan?': 'Pourquoi évaluer Rayan ?',
      '2006 French central midfielder with U.S. college experience at William Penn University.': 'Milieu central français né en 2006 avec une expérience universitaire américaine à William Penn University.',
      'Current U.S. Summer League footage gives coaches recent context for speed of play, physicality, and adaptation.': 'Ses images actuelles en U.S. Summer League donnent aux coachs un contexte récent sur le rythme, l’impact physique et l’adaptation.',
      'Flexible 6 / 8 / 10 profile: can organize deeper, connect box-to-box, or receive higher between lines.': 'Profil polyvalent 6 / 8 / 10 : capable d’organiser plus bas, de relier box-to-box ou de recevoir plus haut entre les lignes.',
      'Full-match video supports evaluation beyond highlights: scanning, tempo control, defensive work, and decisions under pressure.': 'Les matchs complets permettent une évaluation au-delà des highlights : prise d’information, contrôle du tempo, travail défensif et décisions sous pression.',
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
      'Pre-professional environments that value midfield range, role flexibility, and full-match evaluation.': 'Environnements préprofessionnels qui valorisent le volume au milieu, la flexibilité de rôle et l’évaluation sur matchs complets.',
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
      'Sport CV download options': 'Options de téléchargement du CV sportif',
      'Recent action photos of Rayan Cappai': 'Photos récentes de Rayan Cappai en action',
      'Watch Rayan Cappai 2026 highlights video in a new tab': 'Voir les highlights 2026 de Rayan Cappai dans un nouvel onglet',
      'Watch Rayan Cappai full match number 6 in a new tab': 'Voir le match complet numéro 6 de Rayan Cappai dans un nouvel onglet',
      'Watch Rayan Cappai full match number 10 in a new tab': 'Voir le match complet numéro 10 de Rayan Cappai dans un nouvel onglet',
      'Download Rayan Cappai Sport CV in English': 'Télécharger le CV sportif de Rayan Cappai en anglais',
      'Download Rayan Cappai Sport CV in French': 'Télécharger le CV sportif de Rayan Cappai en français',
      'Download Rayan Cappai Sport CV in Spanish': 'Télécharger le CV sportif de Rayan Cappai en espagnol',
      'Rayan Cappai carrying the ball forward in a Summer League match': 'Rayan Cappai progresse balle au pied lors d’un match de Summer League',
      'Rayan Cappai controlling possession under midfield pressure': 'Rayan Cappai conserve la possession sous pression au milieu',
      'Rayan Cappai striking a forward pass during Summer League action': 'Rayan Cappai joue une passe vers l’avant en Summer League',
      'Rayan Cappai scanning the field before receiving the ball': 'Rayan Cappai analyse le jeu avant de recevoir le ballon'
    },
    meta: {
      'Coach-ready recruitment profile for Rayan Cappai: 2006 French central midfielder with William Penn University experience, currently with First State FC / Midnight Riders, available for Fall 2026 college soccer.': 'Profil de recrutement prêt pour coachs de Rayan Cappai : milieu central français né en 2006 avec expérience à William Penn University, images actuelles en U.S. Summer League, highlights 2026 et disponibilité Fall 2026.',
      'Rayan Cappai | Fall 2026 Central Midfielder Recruitment Profile': 'Rayan Cappai | Profil de recrutement milieu central Fall 2026',
      'Coach-ready highlights, full matches #6 and #10, Sport CV, and contact details for Rayan Cappai, a French 6/8/10 midfielder available Fall 2026.': 'Highlights 2026, matchs complets #6 et #10, CV sportif et coordonnées de Rayan Cappai, milieu français 6/8/10 disponible Fall 2026.',
      'Rayan Cappai current match action photo': 'Photo récente de Rayan Cappai en match',
      'Highlights, full matches #6 and #10, Sport CV PDF, and direct coach contact for Rayan Cappai.': 'Highlights 2026, matchs complets #6 et #10, CV sportif PDF et contact direct pour Rayan Cappai.',
      'Rayan Cappai Recruitment | Fall 2026 Central Midfielder & Sport CV': 'Recrutement Rayan Cappai | Milieu central Fall 2026 & CV sportif'
    }
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
      '2006 French central midfielder currently competing in the U.S. Summer League with First State FC / Midnight Riders. Available for Fall 2026 college soccer and club evaluation, with 2026 highlights and full-match references ready for staff review.': 'Mediocampista central francés nacido en 2006, actualmente compitiendo en la U.S. Summer League con First State FC / Midnight Riders. Disponible para soccer universitario Fall 2026 y evaluación de clubes, con highlights 2026 y partidos completos listos para revisión del staff.',
      '2006-born': 'Nacido en 2006',
      '1.82 m / 77 kg': '1,82 m / 77 kg',
      'Right-footed': 'Diestro',
      'U.S. footage': 'Video reciente en EE. UU.',
      'Highlights 2026 Rayan Cappai': 'Highlights 2026 Rayan Cappai',
      'Watch Full Match #6': 'Ver partido completo #6',
      'Watch Full Match #10': 'Ver partido completo #10',
      'Download CV — English': 'Descargar CV — Inglés',
      'Télécharger CV — Français': 'Descargar CV — Francés',
      'Descargar CV — Español': 'Descargar CV — Español',
      'Contact Rayan': 'Contactar a Rayan',
      'Coach Review': 'Revisión del entrenador',
      'Highlights 2026': 'Highlights 2026',
      'Full Match #6 / #10': 'Partidos completos #6 / #10',
      'Sport CV PDFs': 'CV deportivo PDF',
      'Direct WhatsApp contact': 'Contacto directo por WhatsApp',
      'Recruitment Snapshot': 'Resumen de reclutamiento',
      'Key facts at a glance': 'Datos clave de un vistazo',
      'Concise recruitment data for U.S. college soccer coaches, scouts, and pre-professional evaluators.': 'Datos de reclutamiento claros para entrenadores universitarios de EE. UU., scouts y evaluadores preprofesionales.',
      'Position': 'Posición',
      'Central Midfielder': 'Mediocampista central',
      'Role': 'Rol',
      '6 / 8 / 10': '6 / 8 / 10',
      'Current Club': 'Club actual',
      'First State FC / Midnight Riders': 'First State FC / Midnight Riders',
      'Current Level': 'Nivel actual',
      'U.S. Summer League': 'U.S. Summer League',
      'Height / Weight': 'Altura / Peso',
      'Foot': 'Pie',
      'Previous College': 'Universidad anterior',
      'William Penn University': 'William Penn University',
      'Availability': 'Disponibilidad',
      'Fall 2026': 'Fall 2026',
      'Video Evaluation': 'Evaluación en video',
      'Highlights 2026 + two full-match references': 'Highlights 2026 + dos partidos completos de referencia',
      'Start with the 2026 highlights, then use the two full matches for decisions, positioning, and tempo.': 'Empiece con los highlights 2026 y luego use los dos partidos completos para evaluar decisiones, posicionamiento y ritmo.',
      'Fast review': 'Revisión rápida',
      'Latest 2026 highlight reel for a fast first review of technical quality, movement, and ball security.': 'Últimos highlights 2026 para una primera revisión rápida de calidad técnica, movilidad y seguridad con balón.',
      'Full-match review': 'Análisis de partido completo',
      'Full Match #6': 'Partido completo #6',
      'Extended view of positioning, defensive work, and choices under pressure.': 'Vista extendida de posicionamiento, trabajo defensivo y decisiones bajo presión.',
      'Full Match #10': 'Partido completo #10',
      'Second reference for scanning, tempo, and actions between lines.': 'Segunda referencia para lectura previa, ritmo y acciones entre líneas.',
      'Best evaluated as a central midfielder who keeps possession alive, connects phases, and can move between deeper organizing, box-to-box support, and advanced link play.': 'Mejor evaluado como mediocampista central capaz de mantener la posesión, conectar fases y moverse entre organización baja, apoyo box-to-box y juego avanzado entre líneas.',
      'Coach-facing profile': 'Perfil para entrenadores',
      'Why review Rayan?': '¿Por qué evaluar a Rayan?',
      '2006 French central midfielder with U.S. college experience at William Penn University.': 'Mediocampista central francés nacido en 2006 con experiencia universitaria en EE. UU. en William Penn University.',
      'Current U.S. Summer League footage gives coaches recent context for speed of play, physicality, and adaptation.': 'El video actual de U.S. Summer League da a los entrenadores contexto reciente sobre ritmo de juego, físico y adaptación.',
      'Flexible 6 / 8 / 10 profile: can organize deeper, connect box-to-box, or receive higher between lines.': 'Perfil flexible 6 / 8 / 10: puede organizar más bajo, conectar box-to-box o recibir más arriba entre líneas.',
      'Full-match video supports evaluation beyond highlights: scanning, tempo control, defensive work, and decisions under pressure.': 'El video de partidos completos permite evaluar más allá de los highlights: lectura previa, control del ritmo, trabajo defensivo y decisiones bajo presión.',
      'Download the Sport CV': 'Descargar el CV deportivo',
      'Download the CV in the preferred language.': 'Descargue el CV en el idioma preferido.',
      'PDF downloads': 'Descargas PDF',
      'Current match photo set': 'Selección actual de fotos de partido',
      'Action photos remain available for visual context.': 'Las fotos en acción siguen disponibles como contexto visual.',
      'Academic & Eligibility Documents': 'Documentos académicos y de elegibilidad',
      'Supporting documents': 'Documentos de apoyo',
      'Academic, eligibility, and reference documents are available by email request.': 'Los documentos académicos, de elegibilidad y referencias están disponibles por solicitud por email.',
      'Request Documents': 'Solicitar documentos',
      'Recruiting fit': 'Encaje de reclutamiento',
      'Best-fit opportunities': 'Oportunidades más adecuadas',
      'U.S. college soccer programs seeking a Fall 2026 central midfielder.': 'Programas universitarios de EE. UU. que buscan un mediocampista central para Fall 2026.',
      'Pre-professional environments that value midfield range, role flexibility, and full-match evaluation.': 'Entornos preprofesionales que valoran recorrido en el mediocampo, flexibilidad de rol y evaluación con partidos completos.',
      'Clubs needing a right-footed 6 / 8 / 10 profile available for direct communication and next-step review.': 'Clubes que necesitan un perfil diestro 6 / 8 / 10 disponible para comunicación directa y próxima evaluación.',
      'Interested coaches and clubs': 'Entrenadores y clubes interesados',
      'For Fall 2026 college recruitment, pre-professional evaluation, or club opportunities, contact Rayan directly after reviewing the video sequence and Sport CV.': 'Para reclutamiento universitario Fall 2026, evaluación preprofesional u oportunidades de club, contacte directamente a Rayan después de revisar las videos y el CV deportivo.',
      'Email:': 'Email:',
      'Phone / WhatsApp:': 'Teléfono / WhatsApp:',
      'WhatsApp / Call': 'WhatsApp / Llamada',
      'View Player Profile': 'Ver perfil del jugador',
      'Rayan Cappai Recruitment Profile': 'Perfil de reclutamiento de Rayan Cappai',
      'Back to top': 'Volver arriba'
    },
    attributes: {
      'Primary navigation': 'Navegación principal',
      'Rayan Cappai home': 'Inicio de Rayan Cappai',
      'Select website language': 'Seleccionar idioma del sitio',
      'Switch website language to English': 'Cambiar el sitio a inglés',
      'Switch website language to French': 'Cambiar el sitio a francés',
      'Switch website language to Spanish': 'Cambiar el sitio a español',
      'Key recruitment badges': 'Insignias clave de reclutamiento',
      'Coach priority actions': 'Acciones prioritarias para entrenadores',
      'Coach review sequence': 'Secuencia de revisión del entrenador',
      'Sport CV download options': 'Opciones de descarga del CV deportivo',
      'Recent action photos of Rayan Cappai': 'Fotos recientes de Rayan Cappai en acción',
      'Watch Rayan Cappai 2026 highlights video in a new tab': 'Ver los highlights 2026 de Rayan Cappai en una nueva pestaña',
      'Watch Rayan Cappai full match number 6 in a new tab': 'Ver el partido completo número 6 de Rayan Cappai en una nueva pestaña',
      'Watch Rayan Cappai full match number 10 in a new tab': 'Ver el partido completo número 10 de Rayan Cappai en una nueva pestaña',
      'Download Rayan Cappai Sport CV in English': 'Descargar el CV deportivo de Rayan Cappai en inglés',
      'Download Rayan Cappai Sport CV in French': 'Descargar el CV deportivo de Rayan Cappai en francés',
      'Download Rayan Cappai Sport CV in Spanish': 'Descargar el CV deportivo de Rayan Cappai en español',
      'Rayan Cappai carrying the ball forward in a Summer League match': 'Rayan Cappai conduciendo el balón hacia adelante en un partido de Summer League',
      'Rayan Cappai controlling possession under midfield pressure': 'Rayan Cappai controlando la posesión bajo presión en el mediocampo',
      'Rayan Cappai striking a forward pass during Summer League action': 'Rayan Cappai ejecutando un pase hacia adelante durante acción de Summer League',
      'Rayan Cappai scanning the field before receiving the ball': 'Rayan Cappai observando el campo antes de recibir el balón'
    },
    meta: {
      'Coach-ready recruitment profile for Rayan Cappai: 2006 French central midfielder with William Penn University experience, currently with First State FC / Midnight Riders, available for Fall 2026 college soccer.': 'Perfil de reclutamiento listo para entrenadores de Rayan Cappai: mediocampista central francés nacido en 2006 con experiencia en William Penn University, video actual de U.S. Summer League, highlights 2026 y disponibilidad Fall 2026.',
      'Rayan Cappai | Fall 2026 Central Midfielder Recruitment Profile': 'Rayan Cappai | Perfil de reclutamiento mediocampista central Fall 2026',
      'Coach-ready highlights, full matches #6 and #10, Sport CV, and contact details for Rayan Cappai, a French 6/8/10 midfielder available Fall 2026.': 'Highlights 2026, partidos completos #6 y #10, CV deportivo y datos de contacto de Rayan Cappai, mediocampista francés 6/8/10 disponible Fall 2026.',
      'Rayan Cappai current match action photo': 'Foto actual de Rayan Cappai en partido',
      'Highlights, full matches #6 and #10, Sport CV PDF, and direct coach contact for Rayan Cappai.': 'Highlights 2026, partidos completos #6 y #10, CV deportivo PDF y contacto directo para Rayan Cappai.',
      'Rayan Cappai Recruitment | Fall 2026 Central Midfielder & Sport CV': 'Reclutamiento Rayan Cappai | Mediocampista central Fall 2026 y CV deportivo'
    }
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
