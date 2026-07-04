const header = document.querySelector('[data-header]');
const navToggle = document.querySelector('[data-nav-toggle]');
const navMenu = document.querySelector('[data-nav-menu]');
const year = document.querySelector('[data-year]');
const languageButtons = document.querySelectorAll('[data-lang-option]');
const languageStorageKey = 'rayan-cappai-language';
const supportedLanguages = ['en', 'fr', 'es'];
const defaultLanguage = 'en';
const teamOfWeekImage = 'rayan-cappai-team-northeast-conference.jpg?v=20260704-real';

const translations = {
  fr: {
    text: {
      'Skip to content': 'Aller au contenu',
      'Open navigation': 'Ouvrir la navigation',
      'Snapshot': 'Aperçu',
      'Recognition': 'Distinction',
      'Video': 'Vidéo',
      'Profile': 'Profil',
      'Sport CV': 'CV sportif',
      'Action Photos': 'Photos en action',
      'Recruiting Fit': 'Profil recherché',
      'Contact': 'Contact',
      'Club recruitment · Central midfielder · France + United States': 'Recrutement club · Milieu central · France + États-Unis',
      'Rayan Cappai': 'Rayan Cappai',
      '2006 French Central Midfielder | Club Trial / Evaluation': 'Milieu central français 2006 | Essai / évaluation club',
      'U17 Nationaux / U19 Nationaux background in France, then U.S. experience with William Penn University and current U.S. Summer League with First State FC / Midnight Riders. Selected in the Northeast Conference Team of the Week for June 26 - July 2, 2026. Available for club trial and next-step evaluation, with 2026 highlights and full-match footage ready for staff review.': 'Parcours en U17 Nationaux / U19 Nationaux en France, puis expérience US avec William Penn University et U.S. Summer League actuelle avec First State FC / Midnight Riders. Sélectionné dans l’équipe type de la semaine de la Northeast Conference du 26 juin au 2 juillet 2026. Disponible pour essai ou évaluation en club, avec highlights 2026 et matchs complets prêts pour les staffs.',
      '2006-born': 'Né en 2006',
      '1.82 m / 77 kg': '1,82 m / 77 kg',
      'Right-footed': 'Droitier',
      'Central Midfielder': 'Milieu central',
      'Northeast Team of the Week': 'Équipe type Northeast',
      'Northeast Conference Team of the Week': 'Équipe type de la semaine — Northeast Conference',
      'Recent Recognition': 'Distinction récente',
      'Selected in the Northeast Conference Team of the Week for June 26 - July 2, 2026 with First State FC.': 'Sélectionné dans l’équipe type de la semaine de la Northeast Conference du 26 juin au 2 juillet 2026 avec First State FC.',
      'Official Team of the Week visual': 'Visuel officiel Team of the Week',
      'First State FC · Northeast Conference · June 26 - July 2, 2026': 'First State FC · Northeast Conference · 26 juin - 2 juillet 2026',
      'Position': 'Poste',
      'Recognition': 'Distinction',
      'French Youth Level': 'Niveau jeunes France',
      'Current Club': 'Club actuel',
      'Current Level': 'Niveau actuel',
      'Height / Weight': 'Taille / Poids',
      'Foot': 'Pied',
      'U.S. Experience': 'Expérience US',
      'Availability': 'Disponibilité',
      'Club trial / evaluation': 'Essai / évaluation club',
      'Video Evaluation': 'Évaluation vidéo',
      'Highlights 2026 + latest full-match reference': 'Highlights 2026 + dernier match complet de référence',
      'Best evaluated as a central midfielder: reliable in possession, useful between phases, and visible in current U.S. Summer League footage.': 'À évaluer comme milieu central : fiable dans la possession, utile pour relier les phases et visible sur des images actuelles de U.S. Summer League.',
      'Central midfielder profile: reliable in possession, connects play, and supports both sides of the ball.': 'Profil de milieu central : fiable dans la possession, connecte le jeu et travaille dans les deux phases.',
      'Recent Northeast Conference Team of the Week selection adds a current performance marker.': 'Sa sélection récente dans l’équipe type de la Northeast Conference ajoute un marqueur de performance actuel.',
      'Back to top': 'Retour en haut'
    },
    attributes: {
      'Northeast Conference Team of the Week official visual showing Rayan Cappai with First State FC': 'Visuel officiel Team of the Week indiquant Rayan Cappai avec First State FC'
    }
  },
  es: {
    text: {
      'Recognition': 'Reconocimiento',
      'Club recruitment · Central midfielder · France + United States': 'Reclutamiento de club · Mediocampista central · Francia + Estados Unidos',
      '2006 French Central Midfielder | Club Trial / Evaluation': 'Mediocampista central francés 2006 | Prueba / evaluación de club',
      'Central Midfielder': 'Mediocampista central',
      'Northeast Conference Team of the Week': 'Equipo de la semana — Northeast Conference',
      'Recent Recognition': 'Reconocimiento reciente',
      'Official Team of the Week visual': 'Visual oficial Team of the Week',
      'Back to top': 'Volver arriba'
    },
    attributes: {}
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

const insertRecognitionSection = () => {
  const snapshotSection = document.querySelector('#snapshot');
  if (!snapshotSection || document.querySelector('#recognition')) return;

  snapshotSection.insertAdjacentHTML('afterend', `
    <section class="section" id="recognition" aria-labelledby="recognition-title">
      <div class="container two-column">
        <div>
          <p class="eyebrow">Recent Recognition</p>
          <h2 id="recognition-title">Northeast Conference Team of the Week</h2>
          <p>Selected in the Northeast Conference Team of the Week for June 26 - July 2, 2026 with First State FC.</p>
        </div>
        <article class="profile-card" aria-label="Northeast Conference Team of the Week recognition card" style="overflow:hidden; padding:0;">
          <img src="${teamOfWeekImage}" alt="Northeast Conference Team of the Week official visual showing Rayan Cappai with First State FC" loading="lazy" decoding="async" style="display:block; width:100%; height:auto; border-radius:24px;" />
          <div style="padding:1rem 1.1rem 1.2rem;">
            <p class="eyebrow">Official Team of the Week visual</p>
            <p style="margin:0; color:var(--muted);">First State FC · Northeast Conference · June 26 - July 2, 2026</p>
          </div>
        </article>
      </div>
    </section>
  `);

  if (navMenu && !navMenu.querySelector('a[href="#recognition"]')) {
    const item = document.createElement('li');
    item.innerHTML = '<a href="#recognition">Recognition</a>';
    navMenu.querySelector('a[href="#snapshot"]')?.parentElement?.insertAdjacentElement('afterend', item);
  }
};

const normalizeCentralMidfielderWording = () => {
  const firstEyebrow = document.querySelector('.eyebrow');
  if (firstEyebrow) firstEyebrow.textContent = 'Club recruitment · Central midfielder · France + United States';

  const heroPosition = document.querySelector('.hero-position');
  if (heroPosition) heroPosition.textContent = '2006 French Central Midfielder | Club Trial / Evaluation';

  const heroCopy = document.querySelector('.hero-copy');
  if (heroCopy) {
    heroCopy.textContent = 'U17 Nationaux / U19 Nationaux background in France, then U.S. experience with William Penn University and current U.S. Summer League with First State FC / Midnight Riders. Selected in the Northeast Conference Team of the Week for June 26 - July 2, 2026. Available for club trial and next-step evaluation, with 2026 highlights and full-match footage ready for staff review.';
  }

  const badges = document.querySelector('.hero-badges');
  if (badges) {
    badges.innerHTML = '<span>2006-born</span><span>1.82 m / 77 kg</span><span>Right-footed</span><span>Central Midfielder</span><span>Northeast Team of the Week</span>';
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
    if (text.startsWith('Latest full-match video supports evaluation beyond highlights') && !item.parentElement.textContent.includes('Recent Northeast Conference Team of the Week selection adds a current performance marker.')) {
      item.insertAdjacentHTML('beforebegin', '<li>Recent Northeast Conference Team of the Week selection adds a current performance marker.</li>');
    }
    if (text.startsWith('Teams needing a right-footed 6 / 8 / 10 profile')) {
      item.textContent = 'Teams needing a right-footed central midfielder with current U.S. match footage, recent recognition, and direct communication available.';
    }
  });
};

const captureOriginalText = () => {
  originalTextNodes.clear();
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

const captureOriginalAttributes = () => {
  originalAttributes.clear();
  document.querySelectorAll('[aria-label], img[alt], [data-i18n-content]').forEach((element) => {
    originalAttributes.set(element, {
      ariaLabel: element.getAttribute('aria-label'),
      alt: element.getAttribute('alt'),
      content: element.getAttribute('content')
    });
  });
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

const applyLanguage = (language) => {
  const dictionary = translations[language];
  originalTextNodes.forEach((_, node) => translateTextNode(node, dictionary));
  document.querySelectorAll('[aria-label]').forEach((element) => {
    const saved = originalAttributes.get(element);
    const key = element.dataset.i18nAriaLabel || saved?.ariaLabel || element.getAttribute('aria-label');
    element.setAttribute('aria-label', dictionary?.attributes?.[key] || key);
  });
  document.querySelectorAll('img[alt]').forEach((element) => {
    const saved = originalAttributes.get(element);
    const key = saved?.alt || element.getAttribute('alt');
    element.setAttribute('alt', dictionary?.attributes?.[key] || key);
  });
  document.documentElement.lang = language;
  languageButtons.forEach((button) => {
    const active = button.dataset.langOption === language;
    button.classList.toggle('is-active', active);
    button.setAttribute('aria-pressed', String(active));
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
  if (event.target instanceof HTMLAnchorElement) closeMenu();
});
window.addEventListener('scroll', requestHeaderState, { passive: true });
window.addEventListener('resize', () => {
  if (window.innerWidth >= 860) closeMenu();
});
if (year) year.textContent = new Date().getFullYear();

insertRecognitionSection();
normalizeCentralMidfielderWording();
captureOriginalText();
captureOriginalAttributes();
applyLanguage(getLanguage());
setHeaderState();