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
      "Recognition": "Distinction",
      "Video": "Vidéo",
      "Profile": "Profil",
      "Sport CV": "CV sportif",
      "Action Photos": "Photos en action",
      "Recruiting Fit": "Profil recherché",
      "Contact": "Contact",
      "Club recruitment · French midfielder · France + United States": "Recrutement club · Milieu français · France + États-Unis",
      "Rayan Cappai": "Rayan Cappai",
      "2006 French Central Midfielder | Club Trial / Evaluation": "Milieu central français 2006 | Essai / évaluation club",
      "U17 Nationaux / U19 Nationaux background in France, then U.S. experience with William Penn University and current U.S. Summer League with First State FC / Midnight Riders. Selected in the Northeast Conference Team of the Week for June 26 - July 2, 2026. Available for club trial and next-step evaluation, with 2026 highlights and full-match footage ready for staff review.": "Parcours en U17 Nationaux / U19 Nationaux en France, puis expérience US avec William Penn University et U.S. Summer League actuelle avec First State FC / Midnight Riders. Sélectionné dans l’équipe type de la semaine de la Northeast Conference du 26 juin au 2 juillet 2026. Disponible pour essai ou évaluation en club, avec highlights 2026 et matchs complets prêts pour les staffs.",
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
      "Recognition": "Distinction",
      "Northeast Conference Team of the Week": "Équipe type de la semaine — Northeast Conference",
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
      "Recent Recognition": "Distinction récente",
      "Selected for June 26 - July 2, 2026 after his recent First State FC performances. This gives coaches a recent, competition-based proof point in addition to the highlights and full-match video.": "Sélectionné pour la période du 26 juin au 2 juillet 2026 après ses performances récentes avec First State FC. Cela donne aux coachs une preuve récente, liée à la compétition, en plus des highlights et des matchs complets.",
      "Selected in the Northeast Conference Team of the Week — June 26 to July 2, 2026.": "Sélectionné dans l’équipe type de la semaine de la Northeast Conference — 26 juin au 2 juillet 2026.",
      "Recognition linked to his current U.S. Summer League period with First State FC.": "Distinction liée à sa période actuelle en U.S. Summer League avec First State FC.",
      "Useful recent reference for coaches reviewing performance level, match impact, and current form.": "Référence récente utile pour les coachs qui évaluent son niveau, son impact en match et sa forme actuelle.",
      "RAYAN CAPPAI": "RAYAN CAPPAI",
      "FIRST STATE FC": "FIRST STATE FC",
      "Conference selection": "Sélection conférence",
      "June 26 - July 2, 2026": "26 juin - 2 juillet 2026",
      "Video Evaluation": "Évaluation vidéo",
      "Highlights 2026 + latest full-match reference": "Highlights 2026 + dernier match complet de référence",
      "Start with the 2026 highlights, then use the June 20, 2026 full match to evaluate decisions, positioning, tempo, and work rate. Rayan wears number 27.": "Commencez par les highlights 2026, puis utilisez le match complet du 20 juin 2026 pour évaluer les décisions, le positionnement, le tempo et le volume de travail. Rayan porte le numéro 27.",
      "Fast review": "Évaluation rapide",
      "Latest 2026 highlight reel for a fast first review of technical quality, movement, and ball security.": "Derniers highlights 2026 pour une première évaluation rapide de la qualité technique, des déplacements et de la sécurité balle au pied.",
      "Latest full-match review": "Dernière analyse match complet",
      "Latest Full Match — June 20, 2026": "Dernier match complet — 20 juin 2026",
      "Full-match reference from June 20, 2026. Rayan wears number 27.": "Match complet de référence du 20 juin 2026. Rayan porte le numéro 27.",
      "Watch Latest Full Match #27": "Voir le dernier match complet #27",
      "Best evaluated as a central midfielder: reliable in possession, useful between phases, and visible in current U.S. Summer League footage.": "À évaluer comme milieu central : fiable dans la possession, utile pour relier les phases et visible sur des images actuelles de U.S. Summer League.",
      "Coach-facing profile": "Profil pour staffs",
      "Why review Rayan?": "Pourquoi étudier le profil de Rayan ?",
      "U17 Nationaux / U19 Nationaux background in France before moving into U.S. environments.": "Parcours en U17 Nationaux / U19 Nationaux en France avant l’expérience aux États-Unis.",
      "U.S. experience combines William Penn University and current U.S. Summer League competition with First State FC / Midnight Riders.": "Son expérience US combine William Penn University et la U.S. Summer League actuelle avec First State FC / Midnight Riders.",
      "Central midfielder profile: reliable in possession, connects play, and supports both sides of the ball.": "Profil de milieu central : fiable dans la possession, connecte le jeu et travaille dans les deux phases.",
      "Recent Northeast Conference Team of the Week selection adds a current performance marker.": "Sa sélection récente dans l’équipe type de la Northeast Conference ajoute un marqueur de performance actuel.",
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
      "Pre-professional and semi-professional environments that value midfield range, reliable possession, and full-match evaluation.": "Environnements préprofessionnels et semi-professionnels qui valorisent le volume au milieu, la possession fiable et l’évaluation sur match complet.",
      "Teams needing a right-footed central midfielder with current U.S. match footage, recent recognition, and direct communication available.": "Équipes recherchant un milieu central droitier avec images récentes aux États-Unis, distinction récente et échange direct possible.",
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
      "Download Rayan Cappai Sport CV in Spanish": "Télécharger le CV sportif de Rayan Cappai en espagnol",
      "Northeast Conference Team of the Week recognition card": "Carte de distinction équipe type de la semaine de la Northeast Conference"
    },
    meta: {
      "Coach-ready recruitment profile for Rayan Cappai: 2006 French central midfielder with U17 Nationaux / U19 Nationaux background, U.S. experience at William Penn University, and current U.S. Summer League footage with First State FC / Midnight Riders.": "Profil prêt pour staffs de Rayan Cappai : milieu central français né en 2006 avec parcours U17 Nationaux / U19 Nationaux, expérience US à William Penn University et images actuelles en U.S. Summer League avec First State FC / Midnight Riders.",
      "Rayan Cappai | 2006 Central Midfielder Club Evaluation Profile": "Rayan Cappai | Profil club milieu central 2006",
      "Coach-ready highlights, latest full match #27, Sport CV, and contact details for Rayan Cappai, a French 6/8/10 midfielder with U17 Nationaux / U19 Nationaux background and U.S. experience.": "Highlights, dernier match complet #27, CV sportif et coordonnées de Rayan Cappai, milieu central français avec parcours U17 Nationaux / U19 Nationaux et expérience US.",
      "U17 Nationaux / U19 Nationaux background, U.S. experience, highlights 2026, latest full match #27, Sport CV PDF, and direct club contact for Rayan Cappai.": "Parcours U17 Nationaux / U19 Nationaux, expérience US, highlights 2026, dernier match complet #27, CV sportif PDF et contact direct club pour Rayan Cappai.",
      "Rayan Cappai Recruitment | 2006 Central Midfielder & Sport CV": "Recrutement Rayan Cappai | Milieu central 2006 & CV sportif"
    }
  },
  es: {
    text: {
      "Recognition": "Reconocimiento",
      "2006 French Central Midfielder | Club Trial / Evaluation": "Mediocampista central francés 2006 | Prueba / evaluación de club",
      "U17 Nationaux / U19 Nationaux background in France, then U.S. experience with William Penn University and current U.S. Summer League with First State FC / Midnight Riders. Selected in the Northeast Conference Team of the Week for June 26 - July 2, 2026. Available for club trial and next-step evaluation, with 2026 highlights and full-match footage ready for staff review.": "Trayectoria en U17 Nationaux / U19 Nationaux en Francia, luego experiencia en EE. UU. con William Penn University y U.S. Summer League actual con First State FC / Midnight Riders. Seleccionado en el Northeast Conference Team of the Week del 26 de junio al 2 de julio de 2026. Disponible para prueba o evaluación de club, con highlights 2026 y partidos completos listos para revisión del staff.",
      "U17 Nationaux / U19 Nationaux": "U17 Nationaux / U19 Nationaux",
      "French Youth Level": "Nivel juvenil francés",
      "Northeast Conference Team of the Week": "Equipo de la semana — Northeast Conference",
      "Recent Recognition": "Reconocimiento reciente",
      "Selected for June 26 - July 2, 2026 after his recent First State FC performances. This gives coaches a recent, competition-based proof point in addition to the highlights and full-match video.": "Seleccionado para el periodo del 26 de junio al 2 de julio de 2026 después de sus actuaciones recientes con First State FC. Esto ofrece a los entrenadores una prueba reciente basada en competición, además de los highlights y los partidos completos.",
      "Selected in the Northeast Conference Team of the Week — June 26 to July 2, 2026.": "Seleccionado en el Northeast Conference Team of the Week — 26 de junio al 2 de julio de 2026.",
      "Recognition linked to his current U.S. Summer League period with First State FC.": "Reconocimiento ligado a su periodo actual en U.S. Summer League con First State FC.",
      "Useful recent reference for coaches reviewing performance level, match impact, and current form.": "Referencia reciente útil para entrenadores que evalúan nivel, impacto en partido y forma actual.",
      "Central midfielder profile: reliable in possession, connects play, and supports both sides of the ball.": "Perfil de mediocampista central: fiable en la posesión, conecta el juego y ayuda en ambas fases.",
      "Recent Northeast Conference Team of the Week selection adds a current performance marker.": "La selección reciente en el Northeast Conference Team of the Week añade un indicador actual de rendimiento.",
      "Clubs seeking a 2006 central midfielder with U17 Nationaux / U19 Nationaux background and current U.S. match footage.": "Clubes que buscan un mediocampista central 2006 con trayectoria U17 Nationaux / U19 Nationaux y video actual en EE. UU.",
      "Pre-professional and semi-professional environments that value midfield range, reliable possession, and full-match evaluation.": "Entornos preprofesionales y semiprofesionales que valoran el recorrido en el medio, la posesión fiable y la evaluación en partido completo.",
      "Teams needing a right-footed central midfielder with current U.S. match footage, recent recognition, and direct communication available.": "Equipos que necesitan un mediocampista central diestro con video actual en EE. UU., reconocimiento reciente y comunicación directa disponible.",
      "Back to top": "Volver arriba"
    },
    attributes: {},
    meta: {}
  }
};

const insertRecognitionSection = () => {
  const snapshotSection = document.querySelector('#snapshot');
  if (!snapshotSection || document.querySelector('#recognition')) return;

  snapshotSection.insertAdjacentHTML('afterend', `
    <section class="section" id="recognition" aria-labelledby="recognition-title">
      <div class="container two-column">
        <div>
          <p class="eyebrow">Recent Recognition</p>
          <h2 id="recognition-title">Northeast Conference Team of the Week</h2>
          <p>Selected for June 26 - July 2, 2026 after his recent First State FC performances. This gives coaches a recent, competition-based proof point in addition to the highlights and full-match video.</p>
          <ul class="check-list profile-lines">
            <li>Selected in the Northeast Conference Team of the Week — June 26 to July 2, 2026.</li>
            <li>Recognition linked to his current U.S. Summer League period with First State FC.</li>
            <li>Useful recent reference for coaches reviewing performance level, match impact, and current form.</li>
          </ul>
        </div>
        <article class="profile-card" aria-label="Northeast Conference Team of the Week recognition card" style="overflow:hidden; padding:0;">
          <svg viewBox="0 0 900 1050" role="img" aria-labelledby="totw-title totw-desc" style="display:block; width:100%; height:auto; border-radius:24px;">
            <title id="totw-title">Rayan Cappai selected in Northeast Conference Team of the Week</title>
            <desc id="totw-desc">Recognition card showing Rayan Cappai selected in the Northeast Conference Team of the Week for June 26 to July 2, 2026.</desc>
            <rect width="900" height="1050" rx="42" fill="#f7f4ec" />
            <rect x="18" y="18" width="864" height="1014" rx="34" fill="none" stroke="#0d1b2a" stroke-width="18" />
            <text x="450" y="105" text-anchor="middle" font-family="Inter, Arial, sans-serif" font-size="34" font-weight="800" letter-spacing="15" fill="#0c7a56">NORTHEAST CONFERENCE</text>
            <text x="450" y="235" text-anchor="middle" font-family="Impact, Arial Black, sans-serif" font-size="98" font-weight="900" fill="#111827">TEAM OF THE WEEK</text>
            <rect x="300" y="275" width="300" height="58" rx="29" fill="#087f5b" />
            <text x="450" y="314" text-anchor="middle" font-family="Inter, Arial, sans-serif" font-size="28" font-weight="900" letter-spacing="8" fill="#ffffff">JUNE 26 - JULY 2</text>
            <circle cx="450" cy="515" r="112" fill="#0b7a54" opacity="0.12" />
            <path d="M450 390 L520 450 L605 450 L545 518 L565 610 L450 560 L335 610 L355 518 L295 450 L380 450 Z" fill="#0b7a54" />
            <text x="450" y="710" text-anchor="middle" font-family="Inter, Arial, sans-serif" font-size="54" font-weight="950" fill="#111827">RAYAN CAPPAI</text>
            <text x="450" y="765" text-anchor="middle" font-family="Inter, Arial, sans-serif" font-size="35" font-weight="900" fill="#0d1b2a">FIRST STATE FC</text>
            <text x="450" y="830" text-anchor="middle" font-family="Inter, Arial, sans-serif" font-size="30" font-weight="800" fill="#0c7a56">Central Midfielder</text>
            <text x="450" y="910" text-anchor="middle" font-family="Inter, Arial, sans-serif" font-size="28" font-weight="800" fill="#111827">Conference selection</text>
            <text x="450" y="956" text-anchor="middle" font-family="Inter, Arial, sans-serif" font-size="24" font-weight="700" fill="#475569">June 26 - July 2, 2026</text>
          </svg>
        </article>
      </div>
    </section>
  `);

  if (navMenu && !navMenu.querySelector('a[href="#recognition"]')) {
    const recognitionItem = document.createElement('li');
    recognitionItem.innerHTML = '<a href="#recognition">Recognition</a>';
    const snapshotLink = navMenu.querySelector('a[href="#snapshot"]')?.parentElement;
    snapshotLink?.insertAdjacentElement('afterend', recognitionItem);
  }
};

const normalizeCentralMidfielderWording = () => {
  const heroPosition = document.querySelector('.hero-position');
  if (heroPosition) {
    heroPosition.textContent = '2006 French Central Midfielder | Club Trial / Evaluation';
  }

  const heroCopy = document.querySelector('.hero-copy');
  if (heroCopy) {
    heroCopy.textContent = 'U17 Nationaux / U19 Nationaux background in France, then U.S. experience with William Penn University and current U.S. Summer League with First State FC / Midnight Riders. Selected in the Northeast Conference Team of the Week for June 26 - July 2, 2026. Available for club trial and next-step evaluation, with 2026 highlights and full-match footage ready for staff review.';
  }

  document.querySelectorAll('.stat-card').forEach((card) => {
    const label = card.querySelector('.stat-label');
    const value = card.querySelector('strong');
    if (label?.textContent.trim() === 'Role') {
      label.textContent = 'Recognition';
      if (value) value.textContent = 'Northeast Conference Team of the Week';
    }
  });

  document.querySelectorAll('.profile-card p').forEach((paragraph) => {
    if (paragraph.textContent.includes('Best evaluated as a central midfielder')) {
      paragraph.textContent = 'Best evaluated as a central midfielder: reliable in possession, useful between phases, and visible in current U.S. Summer League footage.';
    }
  });

  document.querySelectorAll('.profile-lines li, .fit-bullets li').forEach((item) => {
    const text = item.textContent.trim();
    if (text.startsWith('Flexible 6 / 8 / 10 profile')) {
      item.textContent = 'Central midfielder profile: reliable in possession, connects play, and supports both sides of the ball.';
    }
    if (text.startsWith('Latest full-match video supports evaluation beyond highlights')) {
      item.insertAdjacentHTML('beforebegin', '<li>Recent Northeast Conference Team of the Week selection adds a current performance marker.</li>');
    }
    if (text.startsWith('Pre-professional and semi-professional environments that value midfield range')) {
      item.textContent = 'Pre-professional and semi-professional environments that value midfield range, reliable possession, and full-match evaluation.';
    }
    if (text.startsWith('Teams needing a right-footed 6 / 8 / 10 profile')) {
      item.textContent = 'Teams needing a right-footed central midfielder with current U.S. match footage, recent recognition, and direct communication available.';
    }
  });
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

insertRecognitionSection();
normalizeCentralMidfielderWording();
captureOriginalText();
captureOriginalAttributes();
applyLanguage(getLanguage());
setHeaderState();