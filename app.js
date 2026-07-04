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
      'U17 Nationaux / U19 Nationaux background in France, then U.S. experience with William Penn University and current U.S. Summer League with First State FC / Midnight Riders. Selected in the Northeast Conference Team of the Week for June 26 - July 2, 2026. Available for club trial and next-step evaluation, with 2026 highlights and full-match footage ready for staff review.': 'Parcours en U17 Nationaux / U19 Nationaux en France, puis expérience aux États-Unis avec William Penn University et actuellement en U.S. Summer League avec First State FC / Midnight Riders. Sélectionné dans l’équipe type de la semaine de la Northeast Conference du 26 juin au 2 juillet 2026. Disponible pour un essai ou une évaluation en club, avec highlights 2026 et match complet prêts pour l’analyse du staff.',
      '2006-born': 'Né en 2006',
      '1.82 m / 77 kg': '1,82 m / 77 kg',
      'Right-footed': 'Droitier',
      'Central Midfielder': 'Milieu central',
      'Northeast Team of the Week': 'Équipe type Northeast',
      'Highlights 2026 Rayan Cappai': 'Highlights 2026 Rayan Cappai',
      'Latest Full Match — June 20, 2026 (#27)': 'Dernier match complet — 20 juin 2026 (#27)',
      'Download CV — English': 'Télécharger CV — Anglais',
      'Télécharger CV — Français': 'Télécharger CV — Français',
      'Descargar CV — Español': 'Télécharger CV — Espagnol',
      'Contact Rayan': 'Contacter Rayan',
      'Club Review': 'Analyse club',
      'Latest Full Match #27': 'Dernier match complet #27',
      'Sport CV PDFs': 'PDF du CV sportif',
      'Direct WhatsApp contact': 'Contact WhatsApp direct',
      'Recruitment Snapshot': 'Aperçu recrutement',
      'Key facts at a glance': 'Informations clés en un coup d’œil',
      'Concise recruitment data for coaches, scouts, sporting directors, and club staff.': 'Données de recrutement concises pour coachs, recruteurs, directeurs sportifs et staffs de club.',
      'Position': 'Poste',
      'French Youth Level': 'Niveau jeunes France',
      'Current Club': 'Club actuel',
      'Current Level': 'Niveau actuel',
      'Height / Weight': 'Taille / Poids',
      'Foot': 'Pied',
      'U.S. Experience': 'Expérience aux États-Unis',
      'Availability': 'Disponibilité',
      'Northeast Conference Team of the Week': 'Équipe type de la semaine — Northeast Conference',
      'U.S. Summer League': 'U.S. Summer League',
      'William Penn University + First State FC': 'William Penn University + First State FC',
      'Club trial / evaluation': 'Essai / évaluation club',
      'Recent Recognition': 'Distinction récente',
      'Selected in the Northeast Conference Team of the Week for June 26 - July 2, 2026 with First State FC.': 'Sélectionné dans l’équipe type de la semaine de la Northeast Conference du 26 juin au 2 juillet 2026 avec First State FC.',
      'Video Evaluation': 'Évaluation vidéo',
      'Highlights 2026 + latest full-match reference': 'Highlights 2026 + dernier match complet de référence',
      'Start with the 2026 highlights, then use the June 20, 2026 full match to evaluate decisions, positioning, tempo, and work rate. Rayan wears number 27.': 'Commencez par les highlights 2026, puis utilisez le match complet du 20 juin 2026 pour évaluer les décisions, le placement, le tempo et le volume de travail. Rayan porte le numéro 27.',
      '2026': '2026',
      'Fast review': 'Analyse rapide',
      'Latest 2026 highlight reel for a fast first review of technical quality, movement, and ball security.': 'Compilation récente des highlights 2026 pour une première analyse rapide de la qualité technique, des déplacements et de la sécurité avec le ballon.',
      'Latest full-match review': 'Dernière analyse en match complet',
      'Latest Full Match — June 20, 2026': 'Dernier match complet — 20 juin 2026',
      'Full-match reference from June 20, 2026. Rayan wears number 27.': 'Match complet de référence du 20 juin 2026. Rayan porte le numéro 27.',
      'Watch Latest Full Match #27': 'Voir le dernier match complet #27',
      'Best evaluated as a central midfielder: reliable in possession, useful between phases, and visible in current U.S. Summer League footage.': 'À évaluer comme milieu central : fiable en possession, utile entre les phases et visible sur des images actuelles de U.S. Summer League.',
      'Coach-facing profile': 'Profil pour les coachs',
      'Why review Rayan?': 'Pourquoi évaluer Rayan ?',
      'U17 Nationaux / U19 Nationaux background in France before moving into U.S. environments.': 'Parcours en U17 Nationaux / U19 Nationaux en France avant d’intégrer des environnements aux États-Unis.',
      'U.S. experience combines William Penn University and current U.S. Summer League competition with First State FC / Midnight Riders.': 'Son expérience aux États-Unis combine William Penn University et la compétition actuelle en U.S. Summer League avec First State FC / Midnight Riders.',
      'Central midfielder profile: reliable in possession, connects play, and supports both sides of the ball.': 'Profil de milieu central : fiable en possession, connecte le jeu et travaille dans les deux phases.',
      'Recent Northeast Conference Team of the Week selection adds a current performance marker.': 'Sa sélection récente dans l’équipe type de la Northeast Conference ajoute un repère de performance actuel.',
      'Latest full-match video supports evaluation beyond highlights: scanning, tempo control, defensive work, and decisions under pressure.': 'La dernière vidéo de match complet permet une évaluation au-delà des highlights : prise d’information, gestion du tempo, travail défensif et décisions sous pression.',
      'Download the Sport CV': 'Télécharger le CV sportif',
      'Download the CV in the preferred language.': 'Téléchargez le CV dans la langue souhaitée.',
      'PDF downloads': 'Téléchargements PDF',
      'Current match photo set': 'Photos de match actuelles',
      'Action photos remain available for visual context.': 'Les photos en action restent disponibles pour le contexte visuel.',
      'Supporting Documents': 'Documents complémentaires',
      'Additional documents': 'Documents additionnels',
      'Sporting, academic, and reference documents are available by email request if needed by club staff.': 'Les documents sportifs, académiques et de référence sont disponibles sur demande par e-mail si le staff du club en a besoin.',
      'Request Documents': 'Demander les documents',
      'Recruiting fit': 'Profil recherché',
      'Best-fit opportunities': 'Opportunités les plus adaptées',
      'Clubs seeking a 2006 central midfielder with U17 Nationaux / U19 Nationaux background and current U.S. match footage.': 'Clubs recherchant un milieu central né en 2006, avec un parcours U17 Nationaux / U19 Nationaux et des images de match actuelles aux États-Unis.',
      'Pre-professional and semi-professional environments that value midfield range, role flexibility, and full-match evaluation.': 'Environnements préprofessionnels et semi-professionnels qui valorisent le volume au milieu, l’adaptabilité et l’évaluation sur match complet.',
      'Teams needing a right-footed central midfielder with current U.S. match footage, recent recognition, and direct communication available.': 'Équipes ayant besoin d’un milieu central droitier avec images de match actuelles aux États-Unis, distinction récente et communication directe disponible.',
      'Interested coaches and clubs': 'Coachs et clubs intéressés',
      'For club trials, staff evaluation, pre-professional environments, or next-step opportunities, contact Rayan directly after reviewing the video sequence and Sport CV.': 'Pour des essais en club, une évaluation par le staff, des environnements préprofessionnels ou des opportunités de progression, contactez directement Rayan après avoir consulté la séquence vidéo et le CV sportif.',
      'Email:': 'E-mail :',
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
      'Key recruitment badges': 'Badges clés de recrutement',
      'Coach priority actions': 'Actions prioritaires pour les coachs',
      'Watch Rayan Cappai 2026 highlights video in a new tab': 'Voir la vidéo des highlights 2026 de Rayan Cappai dans un nouvel onglet',
      'Watch Rayan Cappai latest full match number 27 from June 20 2026 in a new tab': 'Voir le dernier match complet numéro 27 de Rayan Cappai du 20 juin 2026 dans un nouvel onglet',
      'Download Rayan Cappai Sport CV in English': 'Télécharger le CV sportif de Rayan Cappai en anglais',
      'Download Rayan Cappai Sport CV in French': 'Télécharger le CV sportif de Rayan Cappai en français',
      'Download Rayan Cappai Sport CV in Spanish': 'Télécharger le CV sportif de Rayan Cappai en espagnol',
      'Coach review sequence': 'Séquence d’analyse pour les coachs',
      'Sport CV download options': 'Options de téléchargement du CV sportif',
      'Recent action photos of Rayan Cappai': 'Photos récentes de Rayan Cappai en action',
      'Northeast Conference Team of the Week official visual': 'Visuel officiel de l’équipe type de la semaine de la Northeast Conference',
      'Northeast Conference Team of the Week official visual showing Rayan Cappai with First State FC': 'Visuel officiel de l’équipe type de la semaine de la Northeast Conference montrant Rayan Cappai avec First State FC',
      'Rayan Cappai carrying the ball forward in a Summer League match': 'Rayan Cappai conduit le ballon vers l’avant lors d’un match de Summer League',
      'Rayan Cappai controlling possession under midfield pressure': 'Rayan Cappai contrôle la possession sous pression au milieu de terrain',
      'Rayan Cappai striking a forward pass during Summer League action': 'Rayan Cappai joue une passe vers l’avant pendant une action de Summer League',
      'Rayan Cappai scanning the field before receiving the ball': 'Rayan Cappai analyse le terrain avant de recevoir le ballon'
    }
  },
  es: {
    text: {
      'Skip to content': 'Saltar al contenido',
      'Open navigation': 'Abrir navegación',
      'Snapshot': 'Resumen',
      'Recognition': 'Reconocimiento',
      'Video': 'Vídeo',
      'Profile': 'Perfil',
      'Sport CV': 'CV deportivo',
      'Action Photos': 'Fotos en acción',
      'Recruiting Fit': 'Perfil buscado',
      'Contact': 'Contacto',
      'Club recruitment · Central midfielder · France + United States': 'Reclutamiento de club · Mediocampista central · Francia + Estados Unidos',
      'Rayan Cappai': 'Rayan Cappai',
      '2006 French Central Midfielder | Club Trial / Evaluation': 'Mediocampista central francés 2006 | Prueba / evaluación de club',
      'U17 Nationaux / U19 Nationaux background in France, then U.S. experience with William Penn University and current U.S. Summer League with First State FC / Midnight Riders. Selected in the Northeast Conference Team of the Week for June 26 - July 2, 2026. Available for club trial and next-step evaluation, with 2026 highlights and full-match footage ready for staff review.': 'Trayectoria en U17 Nationaux / U19 Nationaux en Francia, luego experiencia en Estados Unidos con William Penn University y actualmente en la U.S. Summer League con First State FC / Midnight Riders. Seleccionado en el equipo de la semana de la Northeast Conference del 26 de junio al 2 de julio de 2026. Disponible para prueba o evaluación de club, con highlights 2026 y partido completo listos para revisión del staff.',
      '2006-born': 'Nacido en 2006',
      '1.82 m / 77 kg': '1,82 m / 77 kg',
      'Right-footed': 'Diestro',
      'Central Midfielder': 'Mediocampista central',
      'Northeast Team of the Week': 'Equipo de la semana Northeast',
      'Highlights 2026 Rayan Cappai': 'Highlights 2026 Rayan Cappai',
      'Latest Full Match — June 20, 2026 (#27)': 'Último partido completo — 20 de junio de 2026 (#27)',
      'Download CV — English': 'Descargar CV — Inglés',
      'Télécharger CV — Français': 'Descargar CV — Francés',
      'Descargar CV — Español': 'Descargar CV — Español',
      'Contact Rayan': 'Contactar a Rayan',
      'Club Review': 'Evaluación del club',
      'Latest Full Match #27': 'Último partido completo #27',
      'Sport CV PDFs': 'PDF del CV deportivo',
      'Direct WhatsApp contact': 'Contacto directo por WhatsApp',
      'Recruitment Snapshot': 'Resumen de reclutamiento',
      'Key facts at a glance': 'Datos clave de un vistazo',
      'Concise recruitment data for coaches, scouts, sporting directors, and club staff.': 'Datos de reclutamiento concisos para entrenadores, ojeadores, directores deportivos y staffs de club.',
      'Position': 'Posición',
      'French Youth Level': 'Nivel juvenil en Francia',
      'Current Club': 'Club actual',
      'Current Level': 'Nivel actual',
      'Height / Weight': 'Altura / Peso',
      'Foot': 'Pie',
      'U.S. Experience': 'Experiencia en Estados Unidos',
      'Availability': 'Disponibilidad',
      'Northeast Conference Team of the Week': 'Equipo de la semana de la Northeast Conference',
      'U.S. Summer League': 'U.S. Summer League',
      'William Penn University + First State FC': 'William Penn University + First State FC',
      'Club trial / evaluation': 'Prueba / evaluación de club',
      'Recent Recognition': 'Reconocimiento reciente',
      'Selected in the Northeast Conference Team of the Week for June 26 - July 2, 2026 with First State FC.': 'Seleccionado en el equipo de la semana de la Northeast Conference del 26 de junio al 2 de julio de 2026 con First State FC.',
      'Video Evaluation': 'Evaluación en vídeo',
      'Highlights 2026 + latest full-match reference': 'Highlights 2026 + último partido completo de referencia',
      'Start with the 2026 highlights, then use the June 20, 2026 full match to evaluate decisions, positioning, tempo, and work rate. Rayan wears number 27.': 'Empieza con los highlights 2026 y luego utiliza el partido completo del 20 de junio de 2026 para evaluar decisiones, posicionamiento, ritmo y volumen de trabajo. Rayan lleva el número 27.',
      '2026': '2026',
      'Fast review': 'Revisión rápida',
      'Latest 2026 highlight reel for a fast first review of technical quality, movement, and ball security.': 'Vídeo reciente de highlights 2026 para una primera revisión rápida de la calidad técnica, los movimientos y la seguridad con el balón.',
      'Latest full-match review': 'Última revisión de partido completo',
      'Latest Full Match — June 20, 2026': 'Último partido completo — 20 de junio de 2026',
      'Full-match reference from June 20, 2026. Rayan wears number 27.': 'Partido completo de referencia del 20 de junio de 2026. Rayan lleva el número 27.',
      'Watch Latest Full Match #27': 'Ver último partido completo #27',
      'Best evaluated as a central midfielder: reliable in possession, useful between phases, and visible in current U.S. Summer League footage.': 'Se evalúa mejor como mediocampista central: fiable en posesión, útil entre fases y visible en imágenes actuales de la U.S. Summer League.',
      'Coach-facing profile': 'Perfil para entrenadores',
      'Why review Rayan?': '¿Por qué evaluar a Rayan?',
      'U17 Nationaux / U19 Nationaux background in France before moving into U.S. environments.': 'Trayectoria en U17 Nationaux / U19 Nationaux en Francia antes de incorporarse a entornos de Estados Unidos.',
      'U.S. experience combines William Penn University and current U.S. Summer League competition with First State FC / Midnight Riders.': 'Su experiencia en Estados Unidos combina William Penn University y la competición actual en la U.S. Summer League con First State FC / Midnight Riders.',
      'Central midfielder profile: reliable in possession, connects play, and supports both sides of the ball.': 'Perfil de mediocampista central: fiable en posesión, conecta el juego y trabaja en ambas fases.',
      'Recent Northeast Conference Team of the Week selection adds a current performance marker.': 'Su reciente selección en el equipo de la semana de la Northeast Conference añade una referencia actual de rendimiento.',
      'Latest full-match video supports evaluation beyond highlights: scanning, tempo control, defensive work, and decisions under pressure.': 'El último vídeo de partido completo permite evaluar más allá de los highlights: lectura del juego, control del ritmo, trabajo defensivo y decisiones bajo presión.',
      'Download the Sport CV': 'Descargar el CV deportivo',
      'Download the CV in the preferred language.': 'Descarga el CV en el idioma preferido.',
      'PDF downloads': 'Descargas PDF',
      'Current match photo set': 'Fotos actuales de partido',
      'Action photos remain available for visual context.': 'Las fotos en acción siguen disponibles como contexto visual.',
      'Supporting Documents': 'Documentos complementarios',
      'Additional documents': 'Documentos adicionales',
      'Sporting, academic, and reference documents are available by email request if needed by club staff.': 'Los documentos deportivos, académicos y de referencia están disponibles por solicitud de correo electrónico si el staff del club los necesita.',
      'Request Documents': 'Solicitar documentos',
      'Recruiting fit': 'Perfil buscado',
      'Best-fit opportunities': 'Oportunidades más adecuadas',
      'Clubs seeking a 2006 central midfielder with U17 Nationaux / U19 Nationaux background and current U.S. match footage.': 'Clubes que buscan un mediocampista central nacido en 2006, con trayectoria en U17 Nationaux / U19 Nationaux e imágenes actuales de partidos en Estados Unidos.',
      'Pre-professional and semi-professional environments that value midfield range, role flexibility, and full-match evaluation.': 'Entornos preprofesionales y semiprofesionales que valoran el recorrido en el mediocampo, la adaptabilidad y la evaluación en partido completo.',
      'Teams needing a right-footed central midfielder with current U.S. match footage, recent recognition, and direct communication available.': 'Equipos que necesitan un mediocampista central diestro con imágenes actuales de partidos en Estados Unidos, reconocimiento reciente y comunicación directa disponible.',
      'Interested coaches and clubs': 'Entrenadores y clubes interesados',
      'For club trials, staff evaluation, pre-professional environments, or next-step opportunities, contact Rayan directly after reviewing the video sequence and Sport CV.': 'Para pruebas de club, evaluación del staff, entornos preprofesionales u oportunidades de siguiente paso, contacta directamente a Rayan después de revisar la secuencia de vídeo y el CV deportivo.',
      'Email:': 'Correo electrónico:',
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
      'Key recruitment badges': 'Insignias clave de reclutamiento',
      'Coach priority actions': 'Acciones prioritarias para entrenadores',
      'Watch Rayan Cappai 2026 highlights video in a new tab': 'Ver el vídeo de highlights 2026 de Rayan Cappai en una pestaña nueva',
      'Watch Rayan Cappai latest full match number 27 from June 20 2026 in a new tab': 'Ver el último partido completo número 27 de Rayan Cappai del 20 de junio de 2026 en una pestaña nueva',
      'Download Rayan Cappai Sport CV in English': 'Descargar el CV deportivo de Rayan Cappai en inglés',
      'Download Rayan Cappai Sport CV in French': 'Descargar el CV deportivo de Rayan Cappai en francés',
      'Download Rayan Cappai Sport CV in Spanish': 'Descargar el CV deportivo de Rayan Cappai en español',
      'Coach review sequence': 'Secuencia de evaluación para entrenadores',
      'Sport CV download options': 'Opciones de descarga del CV deportivo',
      'Recent action photos of Rayan Cappai': 'Fotos recientes de Rayan Cappai en acción',
      'Northeast Conference Team of the Week official visual': 'Visual oficial del equipo de la semana de la Northeast Conference',
      'Northeast Conference Team of the Week official visual showing Rayan Cappai with First State FC': 'Visual oficial del equipo de la semana de la Northeast Conference que muestra a Rayan Cappai con First State FC',
      'Rayan Cappai carrying the ball forward in a Summer League match': 'Rayan Cappai conduce el balón hacia adelante en un partido de Summer League',
      'Rayan Cappai controlling possession under midfield pressure': 'Rayan Cappai controla la posesión bajo presión en el mediocampo',
      'Rayan Cappai striking a forward pass during Summer League action': 'Rayan Cappai golpea un pase hacia adelante durante una acción de Summer League',
      'Rayan Cappai scanning the field before receiving the ball': 'Rayan Cappai observa el campo antes de recibir el balón'
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

        <article class="profile-card" aria-label="Northeast Conference Team of the Week official visual" style="overflow:hidden; padding:0;">
          <img
            src="rayan-cappai-team-northeast-conference.jpg?v=20260704-real-photo"
            alt="Northeast Conference Team of the Week official visual showing Rayan Cappai with First State FC"
            loading="lazy"
            decoding="async"
            style="display:block; width:100%; height:auto; border-radius:24px;"
          />
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
    if (text.startsWith('Latest full-match video supports evaluation beyond highlights') && !item.parentElement.textContent.includes('Recent Northeast Conference Team of the Week selection adds a current performance marker.')) {
      item.insertAdjacentHTML('beforebegin', '<li>Recent Northeast Conference Team of the Week selection adds a current performance marker.</li>');
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