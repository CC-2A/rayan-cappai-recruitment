const STORAGE_KEY = 'rayan-cappai-language';
const SUPPORTED_LANGUAGES = ['en', 'fr', 'es'];

const translations = {
  en: {
    nav: [
      ['#snapshot', 'Snapshot'],
      ['#recognition', 'Recognition'],
      ['#video', 'Video'],
      ['#profile', 'Profile'],
      ['#cv', 'Sport CV'],
      ['#action-photos', 'Action Photos'],
      ['#fit', 'Fit'],
      ['#contact', 'Contact'],
    ],
    hero: {
      eyebrow: 'Club trial profile · Central midfielder · Recent U.S. footage',
      position: '2006 French Central Midfielder',
      copy: 'French central midfielder with U17 Nationaux / U19 Nationaux background, current U.S. Summer League footage with First State FC / Midnight Riders, and a recent Northeast Conference Team of the Week selection. Available for club trial or staff evaluation.',
      badges: ['Born 2006', 'Central Midfielder', 'Right-footed', 'First State FC', 'Team of the Week'],
      actions: ['Highlights 2026 Rayan Cappai', 'Latest Full Match — June 20, 2026 (#27)', 'Download CV — English', 'Download CV — French', 'Download CV — Spanish', 'Contact Rayan'],
      cardTitle: 'Club Review',
      facts: ['Central Midfielder', 'U17 Nationaux / U19 Nationaux', 'William Penn University', 'First State FC / Midnight Riders', 'Latest Full Match #27', 'Sport CV PDFs'],
    },
    snapshot: {
      eyebrow: 'Recruitment Snapshot',
      title: 'Key facts for staff review',
      copy: 'Fast profile data for coaches, scouts and sporting directors.',
      labels: ['Position', 'Recognition', 'French Youth Level', 'Current Club', 'Current Level', 'Height / Weight', 'Foot', 'U.S. Experience', 'Availability'],
      values: ['Central Midfielder', 'Northeast Conference Team of the Week', 'U17 Nationaux / U19 Nationaux', 'First State FC / Midnight Riders', 'U.S. Summer League', '1.82 m / 77 kg', 'Right-footed', 'William Penn University + First State FC', 'Club trial / evaluation'],
    },
    recognition: {
      eyebrow: 'Recent Recognition',
      title: 'Northeast Conference Team of the Week',
      copy: 'Selected in the Northeast Conference Team of the Week for June 26 - July 2, 2026 with First State FC.',
    },
    video: {
      eyebrow: 'Coach Video Review',
      title: 'Start with highlights. Confirm with full match #27.',
      copy: 'Use the highlights for a fast first screening, then use the June 20, 2026 full match to evaluate decisions, positioning, tempo and work rate.',
      cards: [
        ['First screening', 'Highlights 2026 Rayan Cappai', 'Short review of technical quality, movement, ball security and midfield influence.', 'Highlights 2026 Rayan Cappai'],
        ['Full-match review', 'Latest Full Match — June 20, 2026', 'Full-match reference. Rayan wears number 27.', 'Watch Full Match #27'],
      ],
    },
    profile: {
      card: 'Central midfielder profile: reliable in possession, useful between phases, and visible in current U.S. Summer League footage.',
      eyebrow: 'Staff Profile',
      title: 'Why review Rayan?',
      lines: [
        'French U17 Nationaux / U19 Nationaux background.',
        'Current U.S. Summer League footage with First State FC / Midnight Riders.',
        'Central midfielder: secure possession, connects play, supports both sides of the ball.',
        'Recent Northeast Conference Team of the Week selection.',
        'Full-match video available for decision-making, positioning, tempo and work-rate evaluation.',
      ],
    },
    cv: {
      eyebrow: 'Sport CV',
      title: 'Download the Sport CV',
      copy: 'Choose the preferred language for staff review.',
      panel: 'PDF downloads',
      buttons: ['Download CV — English', 'Download CV — French', 'Download CV — Spanish'],
    },
    photos: {
      eyebrow: 'Action Photos',
      title: 'Current match photo set',
      copy: 'Recent action photos for visual context.',
    },
    documents: {
      eyebrow: 'Supporting Documents',
      title: 'Additional documents',
      copy: 'Sporting, academic and reference documents are available by email request.',
      button: 'Request Documents',
    },
    fit: {
      eyebrow: 'Recruitment Fit',
      title: 'Best-fit opportunities',
      lines: [
        'Clubs seeking a 2006 central midfielder with recent match footage.',
        'Staffs needing a right-footed midfielder with reliable possession and full-match evaluation available.',
        'Club trial or evaluation opportunities in Europe / Scandinavia.',
      ],
    },
    contact: {
      eyebrow: 'Contact',
      title: 'Interested coaches and clubs',
      copy: 'For club trials, staff evaluation or next-step opportunities, contact Rayan directly after reviewing the video sequence and Sport CV.',
      phoneLabel: 'WhatsApp / Call',
      buttons: ['Contact Rayan', 'WhatsApp / Call', 'View Player Profile'],
      footer: 'Rayan Cappai Recruitment Profile',
      top: 'Back to top',
      skip: 'Skip to content',
      menu: 'Open navigation',
    },
  },
  fr: {
    nav: [['#snapshot', 'Aperçu'], ['#recognition', 'Distinction'], ['#video', 'Vidéo'], ['#profile', 'Profil'], ['#cv', 'CV sportif'], ['#action-photos', 'Photos'], ['#fit', 'Profil recherché'], ['#contact', 'Contact']],
    hero: { eyebrow: 'Profil pour essai club · Milieu central · Images récentes aux États-Unis', position: 'Milieu central français 2006', copy: 'Milieu central français avec parcours U17 Nationaux / U19 Nationaux, images actuelles en U.S. Summer League avec First State FC / Midnight Riders, et sélection récente dans l’équipe type de la semaine de la Northeast Conference. Disponible pour essai club ou évaluation staff.', badges: ['Né en 2006', 'Milieu central', 'Droitier', 'First State FC', 'Team of the Week'], actions: ['Highlights 2026 Rayan Cappai', 'Dernier match complet — 20 juin 2026 (#27)', 'Télécharger CV — Anglais', 'Télécharger CV — Français', 'Télécharger CV — Espagnol', 'Contacter Rayan'], cardTitle: 'Analyse club', facts: ['Milieu central', 'U17 Nationaux / U19 Nationaux', 'William Penn University', 'First State FC / Midnight Riders', 'Dernier match complet #27', 'PDF du CV sportif'] },
    snapshot: { eyebrow: 'Aperçu recrutement', title: 'Points clés pour staff', copy: 'Données rapides pour coachs, recruteurs et directeurs sportifs.', labels: ['Poste', 'Distinction', 'Niveau jeunes français', 'Club actuel', 'Niveau actuel', 'Taille / Poids', 'Pied', 'Expérience aux États-Unis', 'Disponibilité'], values: ['Milieu central', 'Équipe type de la semaine — Northeast Conference', 'U17 Nationaux / U19 Nationaux', 'First State FC / Midnight Riders', 'U.S. Summer League', '1.82 m / 77 kg', 'Droitier', 'William Penn University + First State FC', 'Essai club / évaluation'] },
    recognition: { eyebrow: 'Distinction récente', title: 'Équipe type de la semaine — Northeast Conference', copy: 'Sélectionné dans l’équipe type de la semaine de la Northeast Conference du 26 juin au 2 juillet 2026 avec First State FC.' },
    video: { eyebrow: 'Évaluation vidéo staff', title: 'Commencer par les highlights. Confirmer avec le match complet #27.', copy: 'Utilisez les highlights pour une première lecture rapide, puis le match complet du 20 juin 2026 pour évaluer les décisions, le positionnement, le tempo et le volume de travail.', cards: [['Première lecture', 'Highlights 2026 Rayan Cappai', 'Revue courte de la qualité technique, des déplacements, de la sécurité balle au pied et de l’influence au milieu.', 'Highlights 2026 Rayan Cappai'], ['Analyse match complet', 'Dernier match complet — 20 juin 2026', 'Référence en match complet. Rayan porte le numéro 27.', 'Voir le match complet #27']] },
    profile: { card: 'Profil de milieu central : fiable dans la possession, utile entre les phases et visible sur des images actuelles de U.S. Summer League.', eyebrow: 'Profil staff', title: 'Pourquoi étudier Rayan ?', lines: ['Parcours français U17 Nationaux / U19 Nationaux.', 'Images actuelles en U.S. Summer League avec First State FC / Midnight Riders.', 'Milieu central : possession sûre, connexion du jeu, travail dans les deux phases.', 'Sélection récente dans l’équipe type de la Northeast Conference.', 'Match complet disponible pour évaluer décisions, positionnement, tempo et volume de travail.'] },
    cv: { eyebrow: 'CV sportif', title: 'Télécharger le CV sportif', copy: 'Choisir la langue souhaitée pour l’analyse du staff.', panel: 'Téléchargements PDF', buttons: ['Télécharger CV — Anglais', 'Télécharger CV — Français', 'Télécharger CV — Espagnol'] },
    photos: { eyebrow: 'Photos en action', title: 'Photos récentes de match', copy: 'Photos récentes pour contexte visuel.' },
    documents: { eyebrow: 'Documents complémentaires', title: 'Documents additionnels', copy: 'Documents sportifs, académiques et références disponibles sur demande par email.', button: 'Demander les documents' },
    fit: { eyebrow: 'Profil de recrutement', title: 'Opportunités les plus adaptées', lines: ['Clubs recherchant un milieu central 2006 avec images de match récentes.', 'Staffs recherchant un milieu droitier fiable dans la possession avec match complet disponible.', 'Opportunités d’essai ou d’évaluation en Europe / Scandinavie.'] },
    contact: { eyebrow: 'Contact', title: 'Coachs et clubs intéressés', copy: 'Pour un essai club, une évaluation staff ou une prochaine opportunité, contactez Rayan directement après avoir consulté les vidéos et le CV sportif.', phoneLabel: 'WhatsApp / Appel', buttons: ['Contacter Rayan', 'WhatsApp / Appel', 'Voir le profil joueur'], footer: 'Profil de recrutement Rayan Cappai', top: 'Retour en haut', skip: 'Aller au contenu', menu: 'Ouvrir la navigation' },
  },
  es: {
    nav: [['#snapshot', 'Resumen'], ['#recognition', 'Reconocimiento'], ['#video', 'Vídeo'], ['#profile', 'Perfil'], ['#cv', 'CV deportivo'], ['#action-photos', 'Fotos'], ['#fit', 'Perfil buscado'], ['#contact', 'Contacto']],
    hero: { eyebrow: 'Perfil para prueba de club · Mediocampista central · Imágenes recientes en EE. UU.', position: 'Mediocampista central francés 2006', copy: 'Mediocampista central francés con trayectoria U17 Nationaux / U19 Nationaux, imágenes actuales en U.S. Summer League con First State FC / Midnight Riders y selección reciente en el equipo de la semana de la Northeast Conference. Disponible para prueba de club o evaluación del staff.', badges: ['Nacido en 2006', 'Mediocampista central', 'Diestro', 'First State FC', 'Team of the Week'], actions: ['Highlights 2026 Rayan Cappai', 'Último partido completo — 20 de junio de 2026 (#27)', 'Descargar CV — Inglés', 'Descargar CV — Francés', 'Descargar CV — Español', 'Contactar a Rayan'], cardTitle: 'Revisión del club', facts: ['Mediocampista central', 'U17 Nationaux / U19 Nationaux', 'William Penn University', 'First State FC / Midnight Riders', 'Último partido completo #27', 'PDF del CV deportivo'] },
    snapshot: { eyebrow: 'Resumen de reclutamiento', title: 'Datos clave para el staff', copy: 'Datos rápidos para entrenadores, reclutadores y directores deportivos.', labels: ['Posición', 'Reconocimiento', 'Nivel juvenil francés', 'Club actual', 'Nivel actual', 'Altura / Peso', 'Pie', 'Experiencia en EE. UU.', 'Disponibilidad'], values: ['Mediocampista central', 'Equipo de la semana — Northeast Conference', 'U17 Nationaux / U19 Nationaux', 'First State FC / Midnight Riders', 'U.S. Summer League', '1.82 m / 77 kg', 'Diestro', 'William Penn University + First State FC', 'Prueba de club / evaluación'] },
    recognition: { eyebrow: 'Reconocimiento reciente', title: 'Equipo de la semana — Northeast Conference', copy: 'Seleccionado en el equipo de la semana de la Northeast Conference del 26 de junio al 2 de julio de 2026 con First State FC.' },
    video: { eyebrow: 'Evaluación de vídeo para staff', title: 'Empezar por los highlights. Confirmar con el partido completo #27.', copy: 'Use los highlights para una primera revisión rápida y luego el partido completo del 20 de junio de 2026 para evaluar decisiones, posicionamiento, ritmo y volumen de trabajo.', cards: [['Primera revisión', 'Highlights 2026 Rayan Cappai', 'Revisión corta de calidad técnica, movimientos, seguridad con balón e influencia en el medio.', 'Highlights 2026 Rayan Cappai'], ['Análisis de partido completo', 'Último partido completo — 20 de junio de 2026', 'Referencia en partido completo. Rayan lleva el número 27.', 'Ver partido completo #27']] },
    profile: { card: 'Perfil de mediocampista central: fiable en la posesión, útil entre fases y visible en imágenes actuales de U.S. Summer League.', eyebrow: 'Perfil para staff', title: '¿Por qué revisar a Rayan?', lines: ['Trayectoria francesa U17 Nationaux / U19 Nationaux.', 'Imágenes actuales en U.S. Summer League con First State FC / Midnight Riders.', 'Mediocampista central: posesión segura, conecta el juego y trabaja en ambas fases.', 'Selección reciente en el equipo de la semana de la Northeast Conference.', 'Partido completo disponible para evaluar decisiones, posicionamiento, ritmo y volumen de trabajo.'] },
    cv: { eyebrow: 'CV deportivo', title: 'Descargar el CV deportivo', copy: 'Elegir el idioma preferido para la revisión del staff.', panel: 'Descargas PDF', buttons: ['Descargar CV — Inglés', 'Descargar CV — Francés', 'Descargar CV — Español'] },
    photos: { eyebrow: 'Fotos en acción', title: 'Fotos recientes de partido', copy: 'Fotos recientes como contexto visual.' },
    documents: { eyebrow: 'Documentos complementarios', title: 'Documentos adicionales', copy: 'Documentos deportivos, académicos y referencias disponibles por email.', button: 'Solicitar documentos' },
    fit: { eyebrow: 'Perfil de reclutamiento', title: 'Oportunidades más adecuadas', lines: ['Clubes que buscan un mediocampista central 2006 con imágenes recientes de partido.', 'Staffs que necesitan un mediocampista diestro fiable en la posesión con partido completo disponible.', 'Oportunidades de prueba o evaluación en Europa / Escandinavia.'] },
    contact: { eyebrow: 'Contacto', title: 'Entrenadores y clubes interesados', copy: 'Para pruebas de club, evaluación del staff o próximas oportunidades, contacte directamente con Rayan después de revisar los vídeos y el CV deportivo.', phoneLabel: 'WhatsApp / llamada', buttons: ['Contactar a Rayan', 'WhatsApp / llamada', 'Ver perfil del jugador'], footer: 'Perfil de reclutamiento Rayan Cappai', top: 'Volver arriba', skip: 'Saltar al contenido', menu: 'Abrir navegación' },
  },
};

const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => [...document.querySelectorAll(selector)];
const setText = (selector, value) => { const element = $(selector); if (element) element.textContent = value; };
const setList = (selector, values) => $$(selector).forEach((element, index) => { if (values[index] !== undefined) element.textContent = values[index]; });

function ensureRecognitionSection() {
  const snapshot = $('#snapshot');
  if (!snapshot || $('#recognition')) return;
  snapshot.insertAdjacentHTML('afterend', '<section class="section" id="recognition" aria-labelledby="recognition-title"><div class="container two-column"><div><p class="eyebrow"></p><h2 id="recognition-title"></h2><p></p></div><article class="profile-card" style="overflow:hidden;padding:0"><img src="rayan-cappai-team-northeast-conference.jpg?v=20260704-real-photo" alt="Northeast Conference Team of the Week recognition for Rayan Cappai" style="display:block;width:100%;height:auto;border-radius:24px" /></article></div></section>');
}

function ensureNavigation(languageData) {
  const menu = $('[data-nav-menu]');
  if (!menu) return;
  menu.innerHTML = languageData.nav.map(([href, label], index) => `<li><a${index === languageData.nav.length - 1 ? ' class="nav-cta"' : ''} href="${href}">${label}</a></li>`).join('');
}

function applyLanguage(language) {
  const lang = SUPPORTED_LANGUAGES.includes(language) ? language : 'en';
  const text = translations[lang];
  ensureRecognitionSection();
  ensureNavigation(text);

  setText('.skip-link', text.contact.skip);
  setText('.hero-content .eyebrow', text.hero.eyebrow);
  setText('.hero-position', text.hero.position);
  setText('.hero-copy', text.hero.copy);
  setList('.hero-badges span', text.hero.badges);
  setList('.hero-actions .btn', text.hero.actions);
  setText('.availability-pill', text.hero.cardTitle);
  setList('.coach-review-list li', text.hero.facts);

  setText('#snapshot .eyebrow', text.snapshot.eyebrow);
  setText('#snapshot-title', text.snapshot.title);
  setText('#snapshot .section-heading p:last-child', text.snapshot.copy);
  setList('#snapshot .stat-label', text.snapshot.labels);
  setList('#snapshot .stat-card strong', text.snapshot.values);

  setText('#recognition .eyebrow', text.recognition.eyebrow);
  setText('#recognition-title', text.recognition.title);
  setText('#recognition-title + p', text.recognition.copy);

  setText('#video .section-heading .eyebrow', text.video.eyebrow);
  setText('#video-title', text.video.title);
  setText('#video .section-heading p:last-child', text.video.copy);
  $$('#video .resource-card').forEach((card, index) => {
    const cardText = text.video.cards[index];
    if (!cardText) return;
    const eyebrow = card.querySelector('.eyebrow');
    const title = card.querySelector('h3');
    const copy = card.querySelector('p:not(.eyebrow)');
    const button = card.querySelector('.btn');
    if (eyebrow) eyebrow.textContent = cardText[0];
    if (title) title.textContent = cardText[1];
    if (copy) copy.textContent = cardText[2];
    if (button) button.textContent = cardText[3];
  });

  setText('#profile .profile-card p', text.profile.card);
  setText('#profile .eyebrow', text.profile.eyebrow);
  setText('#profile-title', text.profile.title);
  setList('#profile .profile-lines li', text.profile.lines);

  setText('#cv .eyebrow', text.cv.eyebrow);
  setText('#cv-title', text.cv.title);
  setText('#cv .two-column > div > p:last-child', text.cv.copy);
  setText('#cv h3', text.cv.panel);
  setList('#cv .cv-download-actions .btn', text.cv.buttons);

  setText('#action-photos .eyebrow', text.photos.eyebrow);
  setText('#action-photos-title', text.photos.title);
  setText('#action-photos .section-heading p:last-child', text.photos.copy);

  setText('#academics .eyebrow', text.documents.eyebrow);
  setText('#documents-title', text.documents.title);
  setText('#academics .compact-documents-note p:not(.eyebrow)', text.documents.copy);
  setText('#academics .btn', text.documents.button);

  setText('#fit .eyebrow', text.fit.eyebrow);
  setText('#fit-title', text.fit.title);
  setList('#fit .fit-bullets li', text.fit.lines);

  setText('#contact .eyebrow', text.contact.eyebrow);
  setText('#contact-title', text.contact.title);
  setText('#contact .contact-card > div:first-child > p:not(.eyebrow):not(:last-child)', text.contact.copy);
  const contactInfo = $('#contact .contact-card > div:first-child > p:last-child');
  if (contactInfo) contactInfo.innerHTML = `Email: <a class="text-link" href="mailto:raykil132a@gmail.com">raykil132a@gmail.com</a><br />${text.contact.phoneLabel}: <a class="text-link" href="https://wa.me/33611530454" target="_blank" rel="noopener noreferrer">+33 6 11 53 04 54</a>`;
  setList('#contact .contact-actions .btn', text.contact.buttons);
  setText('.site-footer p', `© ${new Date().getFullYear()} ${text.contact.footer}`);
  setText('.site-footer a', text.contact.top);
  setText('[data-nav-toggle] .sr-only', text.contact.menu);

  document.documentElement.lang = lang;
  $$('[data-lang-option]').forEach((button) => {
    const active = button.dataset.langOption === lang;
    button.classList.toggle('is-active', active);
    button.setAttribute('aria-pressed', String(active));
  });
}

function initializeLanguageSwitcher() {
  $$('[data-lang-option]').forEach((button) => {
    button.addEventListener('click', () => {
      const language = button.dataset.langOption;
      localStorage.setItem(STORAGE_KEY, language);
      applyLanguage(language);
    });
  });
}

function initializeMobileMenu() {
  const toggle = $('[data-nav-toggle]');
  const menu = $('[data-nav-menu]');
  if (!toggle || !menu) return;
  toggle.addEventListener('click', () => {
    const expanded = toggle.getAttribute('aria-expanded') === 'true';
    toggle.setAttribute('aria-expanded', String(!expanded));
    menu.classList.toggle('is-open', !expanded);
  });
  menu.addEventListener('click', (event) => {
    if (!event.target.closest('a')) return;
    toggle.setAttribute('aria-expanded', 'false');
    menu.classList.remove('is-open');
  });
}

applyLanguage(localStorage.getItem(STORAGE_KEY) || 'en');
initializeLanguageSwitcher();
initializeMobileMenu();
