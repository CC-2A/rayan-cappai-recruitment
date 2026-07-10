const STORAGE_KEY = "rayan-cappai-language";
const SUPPORTED_LANGUAGES = ["en", "fr", "es"];

const CV_FILES = {
  en: "./Rayan_Cappai_Sport_CV_EN.pdf",
  fr: "./Rayan_Cappai_CV_Sportif_FR.pdf",
  es: "./Rayan_Cappai_CV_Deportivo_ES.pdf",
};

const translations = {
  en: {
    meta: {
      title: "Rayan Cappai | 2006 French Central Midfielder",
      description:
        "Official recruitment profile for Rayan Cappai, a 2006 French central midfielder (6/8/10) with recent U.S. footage, a full match and a multilingual Sport CV.",
    },
    a11y: {
      skip: "Skip to main content",
      navigation: "Primary navigation",
      home: "Rayan Cappai home",
      language: "Select language",
      openMenu: "Open menu",
      keyFacts: "Key player facts",
      recentExperience: "Recent verified experience",
      reviewPoints: "Full-match evaluation points",
      cvLanguages: "All Sport CV languages",
      quickActions: "Quick actions",
    },
    brand: { role: "Central Midfielder" },
    nav: {
      profile: "Profile",
      videos: "Videos",
      career: "Career",
      cv: "Sport CV",
      contact: "Contact",
    },
    hero: {
      status: "Based in France · Available for club trials",
      eyebrow: "Official player recruitment profile",
      role: "2006 French Central Midfielder · 6 / 8 / 10",
      lead: "French National youth background, U.S. college experience and recent competitive footage with First State FC. A concise profile built for coaches, scouts and sporting directors.",
      recentLabel: "Most recent competition",
      recentValue: "First State FC · Summer 2026",
      recognitionLabel: "Verified recognition",
      recognitionValue: "Conference Team of the Week",
      photoKicker: "First State FC · Summer 2026",
      photoCaption: "Recent match footage available",
    },
    facts: {
      positionLabel: "Position",
      position: "6 / 8 / 10",
      footLabel: "Preferred foot",
      foot: "Right",
      heightLabel: "Height",
      weightLabel: "Weight",
    },
    actions: {
      highlights: "Watch Highlights 2026",
      highlightsShort: "Highlights",
      fullMatch: "Full Match · #27",
      cv: "Download Sport CV",
    },
    profile: {
      eyebrow: "Recruiter snapshot",
      title: "The essentials, immediately.",
      intro:
        "Verified information for a fast first review. Detailed context and full-match evidence follow below.",
      card1Label: "French youth level",
      card1Value: "U17 National · U19 National",
      card2Label: "U.S. college experience",
      card3Label: "Recent club experience",
      card3Value: "First State FC · Summer 2026",
      card4Label: "Competition",
      card4Value: "The League for Clubs",
      card5Label: "Recognition",
      card5Value: "Northeast Conference TOTW",
      card6Label: "Current status",
      card6Value: "France · Available for trials",
    },
    videos: {
      eyebrow: "Coach video review",
      title: "Highlights first. Full match second.",
      intro:
        "A simple review sequence: use the highlights for the first screening, then the full match to assess positioning, decisions, tempo and work rate.",
      highlightsAria: "Watch Rayan Cappai 2026 highlights",
      firstScreening: "First screening",
      highlightsTitle: "Rayan Cappai · Highlights 2026",
      highlightsCopy:
        "A concise overview of technical actions, movement and midfield involvement.",
      watchHighlights: "Watch highlights",
      fullMatchAria: "Watch the full match, Rayan Cappai number 27",
      fullMatchKicker: "Full match · June 20, 2026",
      fullMatchTitle: "FC Monmouth vs First State FC",
      fullMatchCopy:
        "Rayan wears number 27. Use this match for an unedited evaluation of his role and decisions.",
      watchFullMatch: "Watch full match",
      review1: "Scanning & positioning",
      review2: "Tempo & decision-making",
      review3: "Defensive work rate",
      review4: "Role flexibility · 6 / 8 / 10",
    },
    career: {
      eyebrow: "Football background",
      title: "A clear pathway across France and the U.S.",
      step1Date: "France · Youth pathway",
      step1Title: "U17 National · U19 National",
      step1Copy: "Development in French National youth competition.",
      step2Date: "United States · College experience",
      step2Copy: "Experience in a U.S. university football environment.",
      step3Date: "Summer 2026 · Recent competition",
      step3Title: "First State FC",
      step3Copy:
        "The League for Clubs, Northeast Conference. Recent match footage available.",
    },
    recognition: {
      eyebrow: "Verified recognition",
      title: "The League for Clubs · Northeast Conference Team of the Week",
      copy: "Selected for the June 26 – July 2, 2026 Team of the Week with First State FC.",
      source: "View the source publication",
    },
    photos: {
      eyebrow: "Recent action",
      title: "Match context, not studio poses.",
      intro:
        "Recent competitive images with First State FC during Summer 2026.",
    },
    cv: {
      eyebrow: "Sport CV",
      title: "One-page CV. Three languages.",
      intro:
        "The Sport CV matches the information on this profile and includes direct links to both videos.",
      check1: "Current status and recent experience",
      check2: "Player profile and role flexibility",
      check3: "Highlights, full match and direct contact",
      documentLabel: "Sport CV · 2026",
      primaryButton: "Download English CV",
      updated: "Updated July 2026",
    },
    contact: {
      eyebrow: "Direct contact",
      title: "Interested in evaluating Rayan?",
      copy: "For a club trial, staff evaluation or a request for supporting documents, contact Rayan directly. Please include the club, level and proposed dates.",
      emailLabel: "Email",
      callLabel: "Call",
      copyLink: "Copy profile link",
      copied: "Profile link copied.",
      copyError:
        "Unable to copy automatically. Please copy the address from your browser.",
    },
    footer: { copy: "Official recruitment profile", top: "Back to top" },
    images: {
      hero: "Rayan Cappai striking a forward pass for First State FC",
      highlights: "Rayan Cappai carrying the ball forward",
      fullMatch: "Rayan Cappai scanning the field during a match",
      recognition:
        "The League for Clubs Northeast Conference Team of the Week featuring Rayan Cappai",
      photo1: "Rayan Cappai controlling possession under pressure",
      photo2: "Rayan Cappai carrying the ball forward",
      photo3: "Rayan Cappai playing a forward pass",
      photo4: "Rayan Cappai scanning the field",
    },
  },
  fr: {
    meta: {
      title: "Rayan Cappai | Milieu central français 2006",
      description:
        "Profil officiel de recrutement de Rayan Cappai, milieu central français 2006 (6/8/10), avec images récentes aux États-Unis, match complet et CV sportif multilingue.",
    },
    a11y: {
      skip: "Aller au contenu principal",
      navigation: "Navigation principale",
      home: "Accueil Rayan Cappai",
      language: "Choisir la langue",
      openMenu: "Ouvrir le menu",
      keyFacts: "Informations principales du joueur",
      recentExperience: "Expérience récente vérifiée",
      reviewPoints: "Points à observer sur le match complet",
      cvLanguages: "Toutes les langues du CV sportif",
      quickActions: "Actions rapides",
    },
    brand: { role: "Milieu central" },
    nav: {
      profile: "Profil",
      videos: "Vidéos",
      career: "Parcours",
      cv: "CV sportif",
      contact: "Contact",
    },
    hero: {
      status: "Basé en France · Disponible pour essais en club",
      eyebrow: "Profil officiel de recrutement",
      role: "Milieu central français 2006 · 6 / 8 / 10",
      lead: "Parcours en championnats nationaux jeunes français, expérience universitaire aux États-Unis et images compétitives récentes avec First State FC. Un profil concis pour entraîneurs, recruteurs et directeurs sportifs.",
      recentLabel: "Compétition la plus récente",
      recentValue: "First State FC · Été 2026",
      recognitionLabel: "Distinction vérifiée",
      recognitionValue: "Équipe type de la conférence",
      photoKicker: "First State FC · Été 2026",
      photoCaption: "Images récentes de match disponibles",
    },
    facts: {
      positionLabel: "Postes",
      position: "6 / 8 / 10",
      footLabel: "Pied fort",
      foot: "Droit",
      heightLabel: "Taille",
      weightLabel: "Poids",
    },
    actions: {
      highlights: "Voir les highlights 2026",
      highlightsShort: "Highlights",
      fullMatch: "Match complet · #27",
      cv: "Télécharger le CV sportif",
    },
    profile: {
      eyebrow: "Aperçu recruteur",
      title: "L’essentiel, immédiatement.",
      intro:
        "Informations vérifiées pour une première lecture rapide. Le contexte détaillé et le match complet sont disponibles ci-dessous.",
      card1Label: "Niveau jeunes France",
      card1Value: "U17 Nationaux · U19 Nationaux",
      card2Label: "Expérience universitaire US",
      card3Label: "Expérience club récente",
      card3Value: "First State FC · Été 2026",
      card4Label: "Compétition",
      card4Value: "The League for Clubs",
      card5Label: "Distinction",
      card5Value: "Équipe type · Northeast Conference",
      card6Label: "Situation actuelle",
      card6Value: "France · Disponible pour essais",
    },
    videos: {
      eyebrow: "Évaluation vidéo",
      title: "Highlights d’abord. Match complet ensuite.",
      intro:
        "Une lecture simple : les highlights pour la première sélection, puis le match complet pour évaluer le positionnement, les décisions, le tempo et le volume de travail.",
      highlightsAria: "Voir les highlights 2026 de Rayan Cappai",
      firstScreening: "Première sélection",
      highlightsTitle: "Rayan Cappai · Highlights 2026",
      highlightsCopy:
        "Une présentation concise des actions techniques, déplacements et interventions au milieu.",
      watchHighlights: "Voir les highlights",
      fullMatchAria: "Voir le match complet, Rayan Cappai numéro 27",
      fullMatchKicker: "Match complet · 20 juin 2026",
      fullMatchTitle: "FC Monmouth contre First State FC",
      fullMatchCopy:
        "Rayan porte le numéro 27. Ce match permet une évaluation sans montage de son rôle et de ses décisions.",
      watchFullMatch: "Voir le match complet",
      review1: "Prise d’information & placement",
      review2: "Tempo & prise de décision",
      review3: "Volume de travail défensif",
      review4: "Polyvalence de rôle · 6 / 8 / 10",
    },
    career: {
      eyebrow: "Parcours football",
      title: "Un parcours clair entre la France et les États-Unis.",
      step1Date: "France · Formation jeunes",
      step1Title: "U17 Nationaux · U19 Nationaux",
      step1Copy:
        "Développement dans les championnats nationaux jeunes français.",
      step2Date: "États-Unis · Expérience universitaire",
      step2Copy: "Expérience dans un environnement universitaire américain.",
      step3Date: "Été 2026 · Compétition récente",
      step3Title: "First State FC",
      step3Copy:
        "The League for Clubs, Northeast Conference. Images récentes de match disponibles.",
    },
    recognition: {
      eyebrow: "Distinction vérifiée",
      title: "The League for Clubs · Équipe type de la Northeast Conference",
      copy: "Sélectionné dans l’équipe type de la semaine du 26 juin au 2 juillet 2026 avec First State FC.",
      source: "Voir la publication source",
    },
    photos: {
      eyebrow: "Actions récentes",
      title: "Des images de match, pas des poses.",
      intro:
        "Photos récentes en compétition avec First State FC durant l’été 2026.",
    },
    cv: {
      eyebrow: "CV sportif",
      title: "Un CV d’une page. Trois langues.",
      intro:
        "Le CV sportif reprend les mêmes informations que ce profil et contient les liens directs vers les deux vidéos.",
      check1: "Situation actuelle et expérience récente",
      check2: "Profil joueur et polyvalence de rôle",
      check3: "Highlights, match complet et contact direct",
      documentLabel: "CV sportif · 2026",
      primaryButton: "Télécharger le CV français",
      updated: "Mis à jour en juillet 2026",
    },
    contact: {
      eyebrow: "Contact direct",
      title: "Vous souhaitez évaluer Rayan ?",
      copy: "Pour un essai en club, une évaluation par le staff ou une demande de documents complémentaires, contactez directement Rayan. Merci d’indiquer le club, le niveau et les dates proposées.",
      emailLabel: "E-mail",
      callLabel: "Appeler",
      copyLink: "Copier le lien du profil",
      copied: "Lien du profil copié.",
      copyError:
        "Copie automatique impossible. Copiez l’adresse depuis votre navigateur.",
    },
    footer: { copy: "Profil officiel de recrutement", top: "Retour en haut" },
    images: {
      hero: "Rayan Cappai joue une passe vers l’avant avec First State FC",
      highlights: "Rayan Cappai progresse avec le ballon",
      fullMatch: "Rayan Cappai observe le jeu pendant un match",
      recognition:
        "Équipe type de la Northeast Conference de The League for Clubs avec Rayan Cappai",
      photo1: "Rayan Cappai contrôle le ballon sous pression",
      photo2: "Rayan Cappai progresse avec le ballon",
      photo3: "Rayan Cappai joue une passe vers l’avant",
      photo4: "Rayan Cappai observe le jeu",
    },
  },
  es: {
    meta: {
      title: "Rayan Cappai | Mediocampista central francés 2006",
      description:
        "Perfil oficial de reclutamiento de Rayan Cappai, mediocampista central francés 2006 (6/8/10), con vídeo reciente en EE. UU., partido completo y CV deportivo multilingüe.",
    },
    a11y: {
      skip: "Saltar al contenido principal",
      navigation: "Navegación principal",
      home: "Inicio Rayan Cappai",
      language: "Elegir idioma",
      openMenu: "Abrir menú",
      keyFacts: "Datos principales del jugador",
      recentExperience: "Experiencia reciente verificada",
      reviewPoints: "Puntos de evaluación del partido completo",
      cvLanguages: "Todos los idiomas del CV deportivo",
      quickActions: "Acciones rápidas",
    },
    brand: { role: "Mediocampista central" },
    nav: {
      profile: "Perfil",
      videos: "Vídeos",
      career: "Trayectoria",
      cv: "CV deportivo",
      contact: "Contacto",
    },
    hero: {
      status: "En Francia · Disponible para pruebas de club",
      eyebrow: "Perfil oficial de reclutamiento",
      role: "Mediocampista central francés 2006 · 6 / 8 / 10",
      lead: "Trayectoria en competiciones nacionales juveniles francesas, experiencia universitaria en Estados Unidos y vídeo competitivo reciente con First State FC. Un perfil conciso para entrenadores, scouts y directores deportivos.",
      recentLabel: "Competición más reciente",
      recentValue: "First State FC · Verano 2026",
      recognitionLabel: "Reconocimiento verificado",
      recognitionValue: "Equipo de la semana de la conferencia",
      photoKicker: "First State FC · Verano 2026",
      photoCaption: "Vídeo reciente de partido disponible",
    },
    facts: {
      positionLabel: "Posiciones",
      position: "6 / 8 / 10",
      footLabel: "Pie dominante",
      foot: "Derecho",
      heightLabel: "Altura",
      weightLabel: "Peso",
    },
    actions: {
      highlights: "Ver highlights 2026",
      highlightsShort: "Highlights",
      fullMatch: "Partido completo · #27",
      cv: "Descargar CV deportivo",
    },
    profile: {
      eyebrow: "Resumen para scouts",
      title: "Lo esencial, de inmediato.",
      intro:
        "Información verificada para una primera revisión rápida. El contexto detallado y el partido completo aparecen a continuación.",
      card1Label: "Nivel juvenil en Francia",
      card1Value: "U17 Nacional · U19 Nacional",
      card2Label: "Experiencia universitaria en EE. UU.",
      card3Label: "Experiencia reciente de club",
      card3Value: "First State FC · Verano 2026",
      card4Label: "Competición",
      card4Value: "The League for Clubs",
      card5Label: "Reconocimiento",
      card5Value: "Equipo de la semana · Northeast Conference",
      card6Label: "Situación actual",
      card6Value: "Francia · Disponible para pruebas",
    },
    videos: {
      eyebrow: "Evaluación en vídeo",
      title: "Highlights primero. Partido completo después.",
      intro:
        "Una revisión sencilla: highlights para el primer filtro y el partido completo para evaluar posicionamiento, decisiones, ritmo y volumen de trabajo.",
      highlightsAria: "Ver los highlights 2026 de Rayan Cappai",
      firstScreening: "Primer filtro",
      highlightsTitle: "Rayan Cappai · Highlights 2026",
      highlightsCopy:
        "Un resumen conciso de acciones técnicas, movimientos e influencia en el mediocampo.",
      watchHighlights: "Ver highlights",
      fullMatchAria: "Ver el partido completo, Rayan Cappai número 27",
      fullMatchKicker: "Partido completo · 20 de junio de 2026",
      fullMatchTitle: "FC Monmouth contra First State FC",
      fullMatchCopy:
        "Rayan lleva el número 27. Este partido permite una evaluación sin editar de su rol y sus decisiones.",
      watchFullMatch: "Ver partido completo",
      review1: "Lectura previa & posicionamiento",
      review2: "Ritmo & toma de decisiones",
      review3: "Trabajo defensivo",
      review4: "Flexibilidad de rol · 6 / 8 / 10",
    },
    career: {
      eyebrow: "Trayectoria futbolística",
      title: "Un recorrido claro entre Francia y EE. UU.",
      step1Date: "Francia · Formación juvenil",
      step1Title: "U17 Nacional · U19 Nacional",
      step1Copy: "Desarrollo en competiciones nacionales juveniles francesas.",
      step2Date: "Estados Unidos · Experiencia universitaria",
      step2Copy:
        "Experiencia en un entorno de fútbol universitario estadounidense.",
      step3Date: "Verano 2026 · Competición reciente",
      step3Title: "First State FC",
      step3Copy:
        "The League for Clubs, Northeast Conference. Vídeo reciente de partido disponible.",
    },
    recognition: {
      eyebrow: "Reconocimiento verificado",
      title:
        "The League for Clubs · Equipo de la semana de la Northeast Conference",
      copy: "Seleccionado en el equipo de la semana del 26 de junio al 2 de julio de 2026 con First State FC.",
      source: "Ver la publicación original",
    },
    photos: {
      eyebrow: "Acción reciente",
      title: "Contexto de partido, no poses.",
      intro:
        "Imágenes recientes de competición con First State FC durante el verano de 2026.",
    },
    cv: {
      eyebrow: "CV deportivo",
      title: "Un CV de una página. Tres idiomas.",
      intro:
        "El CV deportivo coincide con la información de este perfil e incluye enlaces directos a los dos vídeos.",
      check1: "Situación actual y experiencia reciente",
      check2: "Perfil de jugador y flexibilidad de rol",
      check3: "Highlights, partido completo y contacto directo",
      documentLabel: "CV deportivo · 2026",
      primaryButton: "Descargar CV en español",
      updated: "Actualizado en julio de 2026",
    },
    contact: {
      eyebrow: "Contacto directo",
      title: "¿Interesado en evaluar a Rayan?",
      copy: "Para una prueba de club, evaluación del staff o solicitud de documentos adicionales, contacte directamente con Rayan. Indique el club, nivel y fechas propuestas.",
      emailLabel: "Correo",
      callLabel: "Llamar",
      copyLink: "Copiar enlace del perfil",
      copied: "Enlace del perfil copiado.",
      copyError:
        "No se pudo copiar automáticamente. Copie la dirección desde el navegador.",
    },
    footer: { copy: "Perfil oficial de reclutamiento", top: "Volver arriba" },
    images: {
      hero: "Rayan Cappai juega un pase hacia delante con First State FC",
      highlights: "Rayan Cappai avanza con el balón",
      fullMatch: "Rayan Cappai observa el juego durante un partido",
      recognition:
        "Equipo de la semana de la Northeast Conference de The League for Clubs con Rayan Cappai",
      photo1: "Rayan Cappai controla la posesión bajo presión",
      photo2: "Rayan Cappai avanza con el balón",
      photo3: "Rayan Cappai juega un pase hacia delante",
      photo4: "Rayan Cappai observa el juego",
    },
  },
};

const getValue = (object, path) =>
  path.split(".").reduce((value, key) => value?.[key], object);
let currentLanguage = "en";

function applyLanguage(language, updateUrl = false) {
  const lang = SUPPORTED_LANGUAGES.includes(language) ? language : "en";
  const dictionary = translations[lang];
  currentLanguage = lang;

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const value = getValue(dictionary, element.dataset.i18n);
    if (typeof value === "string") element.textContent = value;
  });

  document.querySelectorAll("[data-i18n-aria]").forEach((element) => {
    const value = getValue(dictionary, element.dataset.i18nAria);
    if (typeof value === "string") element.setAttribute("aria-label", value);
  });

  document.querySelectorAll("[data-i18n-alt]").forEach((element) => {
    const value = getValue(dictionary, element.dataset.i18nAlt);
    if (typeof value === "string") element.setAttribute("alt", value);
  });

  document.querySelectorAll("[data-cv-primary]").forEach((link) => {
    link.href = CV_FILES[lang];
  });

  document.querySelectorAll("[data-language]").forEach((button) => {
    const active = button.dataset.language === lang;
    button.classList.toggle("is-active", active);
    button.setAttribute("aria-pressed", String(active));
  });

  document.documentElement.lang = lang;
  document.title = dictionary.meta.title;
  document
    .querySelector('meta[name="description"]')
    ?.setAttribute("content", dictionary.meta.description);
  document
    .querySelector('meta[property="og:title"]')
    ?.setAttribute("content", dictionary.meta.title);
  document
    .querySelector('meta[property="og:description"]')
    ?.setAttribute("content", dictionary.meta.description);
  document
    .querySelector('meta[name="twitter:title"]')
    ?.setAttribute("content", dictionary.meta.title);
  document
    .querySelector('meta[name="twitter:description"]')
    ?.setAttribute("content", dictionary.meta.description);

  localStorage.setItem(STORAGE_KEY, lang);

  if (updateUrl) {
    const url = new URL(window.location.href);
    url.searchParams.set("lang", lang);
    history.replaceState({}, "", url);
  }
}

function initializeLanguage() {
  const queryLanguage = new URLSearchParams(window.location.search).get("lang");
  const savedLanguage = localStorage.getItem(STORAGE_KEY);
  const initialLanguage = SUPPORTED_LANGUAGES.includes(queryLanguage)
    ? queryLanguage
    : SUPPORTED_LANGUAGES.includes(savedLanguage)
      ? savedLanguage
      : "en";

  applyLanguage(initialLanguage);

  document.querySelectorAll("[data-language]").forEach((button) => {
    button.addEventListener("click", () =>
      applyLanguage(button.dataset.language, true),
    );
  });
}

function initializeMenu() {
  const toggle = document.querySelector("[data-menu-toggle]");
  const menu = document.querySelector("[data-menu]");
  if (!toggle || !menu) return;

  const closeMenu = () => {
    toggle.setAttribute("aria-expanded", "false");
    menu.classList.remove("is-open");
    document.body.classList.remove("nav-open");
  };

  toggle.addEventListener("click", () => {
    const open = toggle.getAttribute("aria-expanded") !== "true";
    toggle.setAttribute("aria-expanded", String(open));
    menu.classList.toggle("is-open", open);
    document.body.classList.toggle("nav-open", open);
  });

  menu.addEventListener("click", (event) => {
    if (event.target.closest("a")) closeMenu();
  });

  window.addEventListener("keydown", (event) => {
    if (event.key === "Escape") closeMenu();
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth > 900) closeMenu();
  });
}

function initializeHeader() {
  const header = document.querySelector("[data-header]");
  if (!header) return;
  const update = () =>
    header.classList.toggle("is-scrolled", window.scrollY > 16);
  update();
  window.addEventListener("scroll", update, { passive: true });
}

async function copyProfileLink() {
  const feedback = document.querySelector("[data-copy-feedback]");
  const dictionary = translations[currentLanguage];
  const url = new URL(window.location.href);
  url.searchParams.set("lang", currentLanguage);

  try {
    await navigator.clipboard.writeText(url.toString());
    if (feedback) feedback.textContent = dictionary.contact.copied;
  } catch {
    const input = document.createElement("textarea");
    input.value = url.toString();
    input.setAttribute("readonly", "");
    input.style.position = "fixed";
    input.style.opacity = "0";
    document.body.append(input);
    input.select();
    const copied = document.execCommand("copy");
    input.remove();
    if (feedback)
      feedback.textContent = copied
        ? dictionary.contact.copied
        : dictionary.contact.copyError;
  }

  window.setTimeout(() => {
    if (feedback) feedback.textContent = "";
  }, 3500);
}

initializeLanguage();
initializeMenu();
initializeHeader();
document
  .querySelector("[data-copy-link]")
  ?.addEventListener("click", copyProfileLink);
document.querySelector("[data-year]").textContent = new Date().getFullYear();
