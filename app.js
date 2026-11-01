const STORAGE_KEY = "rayan-cappai-language";
const SUPPORTED_LANGUAGES = ["en", "fr", "es"];

const CV_FILES = {
  en: "./Rayan_Cappai_Sport_CV_EN.pdf?v=20261101-blue2027",
  fr: "./Rayan_Cappai_CV_Sportif_FR.pdf?v=20261101-blue2027",
  es: "./Rayan_Cappai_CV_Deportivo_ES.pdf?v=20261101-blue2027",
};

const translations = {
  en: {
    meta: {
      title: "Rayan Cappai | 2006 French Defensive Midfielder",
      description:
        "Official recruitment profile for Rayan Cappai, a 2006 French defensive midfielder (6) currently playing in Norway with Nybergsund IL Trysil and signed with the club for the 2027 season.",
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
    brand: { role: "Defensive Midfielder" },
    nav: {
      profile: "Profile",
      videos: "Videos",
      career: "Career",
      cv: "Sport CV",
      contact: "Contact",
    },
    hero: {
      specialty: "Ball-winning · Playmaking",
      status: "Nybergsund IL Trysil · Signed for the 2027 season",
      eyebrow: "Player profile",
      role: "French Defensive Midfielder · 6",
      lead: "French youth development at AC Ajaccio and Gazélec Ajaccio, followed by experience in the United States and Norway. At Nybergsund IL Trysil since July 2026, signed for the 2027 season.",
      recentLabel: "Current club",
      recentValue: "Nybergsund IL Trysil · 2027",
      recognitionLabel: "Verified recognition",
      recognitionValue: "Conference Team of the Week",
      photoKicker: "Nybergsund IL Trysil",
      photoCaption: "Signed for the 2027 season",
    },
    facts: {
      positionLabel: "Position",
      position: "6",
      footLabel: "Preferred foot",
      foot: "Right",
      heightLabel: "Height",
      weightLabel: "Weight",
    },
    actions: {
      highlights: "Watch video",
      highlightsShort: "Highlights",
      fullMatch: "Full Match · #27",
      cv: "Download CV",
    },
    profile: {
      eyebrow: "Recruiter snapshot",
      title: "Player profile",
      intro:
        "Verified information for a fast first review. Detailed context and full-match evidence follow below.",
      card1Label: "French youth level",
      card1Value: "AC Ajaccio · U17 National / Gazélec Ajaccio · U19 National",
      card2Label: "U.S. college experience",
      card3Label: "Current club",
      card3Value: "Nybergsund IL Trysil · Norway",
      card4Label: "2026 competition",
      card4Value: "4. divisjon menn · 2026",
      card5Label: "Recognition",
      card5Value: "Northeast Conference TOTW",
      card6Label: "Contract status",
      card6Value:
        "Signed with Nybergsund IL Trysil for the 2027 season",
    },
    norway: {
      eyebrow: "Norway · 2026 season",
      title: "Nybergsund · 2026 season",
      date: "As of 11 October 2026 · Joined 20 July 2026",
      matchesLabel: "League appearances",
      matchesValue: "11 / 11 since joining",
      goalsLabel: "League goals",
      goalsValue: "3 goals",
      positionLabel: "Club league position",
      positionValue: "3rd · 41 points",
      returnLabel: "Second-half points ranking",
      returnValue: "1st · 25 points",
      note: "Second half: matchweeks 14–23, 8 wins, 1 draw and 1 defeat in 10 matches. Nybergsund: 25 points in 10 matches; HamKam 2: 22 points in 9. Ranking calculated from NFF results as of 11 October 2026; games played differ.",
      playerSource: "NFF player statistics",
      leagueSource: "NFF league table and results",
    },
    videos: {
      eyebrow: "Coach video review",
      title: "Video selection and full match",
      intro:
        "A selection of actions provides a concise overview of his player profile. The full match supports a broader assessment of his positioning, decision-making, execution speed, and activity with and without the ball.",
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
      review4: "Ball-winning & playmaking · 6",
    },
    career: {
      eyebrow: "Football background",
      title: "A clear pathway across France, the U.S. and Norway.",
      step1Date: "France · U16 / U17 years",
      step1Title: "AC Ajaccio · U17 National",
      step1Copy: "Two seasons in U17 National during his U16 and U17 years.",
      step1bDate: "France · U18 / U19 years",
      step1bTitle: "Gazélec Ajaccio · U19 National",
      step1bCopy: "Two seasons in U19 National during his U18 and U19 years.",
      step2Date: "United States · College experience",
      step2Copy: "Experience in a U.S. university football environment.",
      step3Date: "Summer 2026 · United States",
      step3Title: "First State FC",
      step3Copy:
        "The League for Clubs, Northeast Conference. Recent match footage available.",
      step4Date: "Since 20 July 2026 · Norway",
      step4Title: "Nybergsund IL Trysil",
      step4Copy:
        "4. divisjon menn, NFF Indre Østland. 11 league appearances and 3 goals as of 11 October 2026. Signed with the club for the 2027 season.",
      nffSource: "View official NFF player profile",
      currentPhotoLabel: "Signed for the 2027 season",
    },
    recognition: {
      eyebrow: "Verified recognition",
      title: "The League for Clubs · Northeast Conference Team of the Week",
      copy: "Selected for the June 26 – July 2, 2026 Team of the Week with First State FC.",
      source: "View the source publication",
    },
    photos: {
      eyebrow: "Competition photography",
      title: "In match action",
      intro:
        "A selection of competitive images with First State FC during Summer 2026, before his move to Nybergsund IL Trysil.",
    },
    cv: {
      eyebrow: "Sport CV",
      title: "One-page CV. Three languages.",
      intro:
        "The Sport CV matches the information on this profile and includes direct links to both videos.",
      check1: "Current status and recent experience",
      check2: "Player profile and current role",
      check3: "Highlights, full match and direct contact",
      documentLabel: "Sport CV · 2026",
      primaryButton: "Download English CV",
      updated: "Updated 1 November 2026",
    },
    contact: {
      eyebrow: "Direct contact",
      title: "Interested in evaluating Rayan?",
      copy: "Rayan has signed with Nybergsund IL Trysil for the 2027 season. For staff enquiries or supporting documents, contact him directly.",
      emailLabel: "Email",
      callLabel: "Call",
      copyLink: "Copy profile link",
      copied: "Profile link copied.",
      copyError:
        "Unable to copy automatically. Please copy the address from your browser.",
    },
    footer: { copy: "Official recruitment profile", top: "Back to top" },
    images: {
      hero: "Rayan Cappai · Nybergsund IL Trysil · Season 2027",
      highlights: "Rayan Cappai carrying the ball forward",
      fullMatch: "Rayan Cappai scanning the field during a match",
      recognition:
        "The League for Clubs Northeast Conference Team of the Week featuring Rayan Cappai",
      currentClub:
        "Rayan Cappai · Nybergsund IL Trysil · Signed for the 2027 season",
      photo1: "Rayan Cappai controlling possession under pressure",
      photo2: "Rayan Cappai carrying the ball forward",
      photo3: "Rayan Cappai playing a forward pass",
      photo4: "Rayan Cappai scanning the field",
    },
  },
  fr: {
    meta: {
      title: "Rayan Cappai | Milieu défensif français 2006",
      description:
        "Profil du joueur de Rayan Cappai, milieu défensif français 2006 (6), actuellement joueur de Nybergsund IL Trysil en Norvège et engagé avec le club pour la saison 2027.",
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
    brand: { role: "Milieu défensif" },
    nav: {
      profile: "Profil",
      videos: "Vidéos",
      career: "Parcours",
      cv: "CV sportif",
      contact: "Contact",
    },
    hero: {
      specialty: "Récupérateur · Organisateur",
      status: "Nybergsund IL Trysil · Signé pour la saison 2027",
      eyebrow: "Profil du joueur",
      role: "Milieu défensif français · 6",
      lead: "Formé à l’AC Ajaccio et au Gazélec Ajaccio, puis passé par les États-Unis et la Norvège. À Nybergsund IL Trysil depuis juillet 2026, engagé pour la saison 2027.",
      recentLabel: "Club actuel",
      recentValue: "Nybergsund IL Trysil · 2027",
      recognitionLabel: "Distinction vérifiée",
      recognitionValue: "Équipe type de la conférence",
      photoKicker: "Nybergsund IL Trysil",
      photoCaption: "Signé pour la saison 2027",
    },
    facts: {
      positionLabel: "Poste",
      position: "6",
      footLabel: "Pied fort",
      foot: "Droit",
      heightLabel: "Taille",
      weightLabel: "Poids",
    },
    actions: {
      highlights: "Voir la vidéo",
      highlightsShort: "Highlights",
      fullMatch: "Match complet · #27",
      cv: "Télécharger le CV",
    },
    profile: {
      eyebrow: "Aperçu recruteur",
      title: "Profil du joueur",
      intro:
        "Informations vérifiées pour une première lecture rapide. Le contexte détaillé et le match complet sont disponibles ci-dessous.",
      card1Label: "Niveau jeunes France",
      card1Value: "AC Ajaccio · U17 Nationaux / Gazélec Ajaccio · U19 Nationaux",
      card2Label: "Expérience universitaire US",
      card3Label: "Club actuel",
      card3Value: "Nybergsund IL Trysil · Norvège",
      card4Label: "Compétition 2026",
      card4Value: "4. divisjon menn · 2026",
      card5Label: "Distinction",
      card5Value: "Équipe type · Northeast Conference",
      card6Label: "Situation contractuelle",
      card6Value:
        "Signé avec Nybergsund IL Trysil pour la saison 2027",
    },
    norway: {
      eyebrow: "Norvège · Saison 2026",
      title: "Nybergsund · Saison 2026",
      date: "Au 11 octobre 2026 · Arrivée le 20 juillet 2026",
      matchesLabel: "Matchs de championnat",
      matchesValue: "11 / 11 depuis son arrivée",
      goalsLabel: "Buts en championnat",
      goalsValue: "3 buts",
      positionLabel: "Classement du club",
      positionValue: "3e · 41 points",
      returnLabel: "Classement aux points sur la phase retour",
      returnValue: "1er · 25 points",
      note: "Phase retour : journées 14 à 23, 8 victoires, 1 nul et 1 défaite en 10 matchs. Nybergsund : 25 points en 10 matchs ; HamKam 2 : 22 points en 9 matchs. Classement recalculé à partir des résultats NFF au 11 octobre 2026, avec des nombres de matchs différents.",
      playerSource: "Statistiques du joueur sur la NFF",
      leagueSource: "Classement et résultats sur la NFF",
    },
    videos: {
      eyebrow: "Évaluation vidéo",
      title: "Sélection vidéo et match intégral",
      intro:
        "Une sélection d’actions permet d’identifier rapidement son profil. Le match intégral complète l’évaluation de son positionnement, de sa prise de décision, de son rythme d’exécution et de son activité avec et sans ballon.",
      highlightsAria: "Voir la vidéo de Rayan Cappai",
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
      review4: "Récupération & organisation · 6",
    },
    career: {
      eyebrow: "Parcours football",
      title: "Un parcours clair entre la France, les États-Unis et la Norvège.",
      step1Date: "France · Années U16 / U17",
      step1Title: "AC Ajaccio · U17 Nationaux",
      step1Copy:
        "Deux saisons en U17 Nationaux durant ses années U16 et U17.",
      step1bDate: "France · Années U18 / U19",
      step1bTitle: "Gazélec Ajaccio · U19 Nationaux",
      step1bCopy: "Deux saisons en U19 Nationaux durant ses années U18 et U19.",
      step2Date: "États-Unis · Expérience universitaire",
      step2Copy: "Expérience dans un environnement universitaire américain.",
      step3Date: "Été 2026 · États-Unis",
      step3Title: "First State FC",
      step3Copy:
        "The League for Clubs, Northeast Conference. Images récentes de match disponibles.",
      step4Date: "Depuis le 20 juillet 2026 · Norvège",
      step4Title: "Nybergsund IL Trysil",
      step4Copy:
        "4. divisjon menn, NFF Indre Østland. 11 matchs de championnat et 3 buts au 11 octobre 2026. Signé pour la saison 2027.",
      nffSource: "Voir le profil officiel NFF",
      currentPhotoLabel: "Signé pour la saison 2027",
    },
    recognition: {
      eyebrow: "Distinction vérifiée",
      title: "The League for Clubs · Équipe type de la Northeast Conference",
      copy: "Sélectionné dans l’équipe type de la semaine du 26 juin au 2 juillet 2026 avec First State FC.",
      source: "Voir la publication source",
    },
    photos: {
      eyebrow: "Photos de compétition",
      title: "En situation de match",
      intro:
        "Sélection d’images prises en compétition avec First State FC durant l’été 2026, avant son arrivée à Nybergsund IL Trysil.",
    },
    cv: {
      eyebrow: "CV sportif",
      title: "Un CV d’une page. Trois langues.",
      intro:
        "Le CV sportif reprend les mêmes informations que ce profil et contient les liens directs vers les deux vidéos.",
      check1: "Situation actuelle et expérience récente",
      check2: "Profil joueur et poste actuel",
      check3: "Highlights, match complet et contact direct",
      documentLabel: "CV sportif · 2026",
      primaryButton: "Télécharger le CV français",
      updated: "Mis à jour le 1er novembre 2026",
    },
    contact: {
      eyebrow: "Contact direct",
      title: "Vous souhaitez évaluer Rayan ?",
      copy: "Rayan a signé avec Nybergsund IL Trysil pour la saison 2027. Pour une prise de contact par un staff ou une demande de documents complémentaires, contactez-le directement.",
      emailLabel: "E-mail",
      callLabel: "Appeler",
      copyLink: "Copier le lien du profil",
      copied: "Lien du profil copié.",
      copyError:
        "Copie automatique impossible. Copiez l’adresse depuis votre navigateur.",
    },
    footer: { copy: "Profil du joueur", top: "Retour en haut" },
    images: {
      hero: "Rayan Cappai · Nybergsund IL Trysil · Saison 2027",
      highlights: "Rayan Cappai progresse avec le ballon",
      fullMatch: "Rayan Cappai observe le jeu pendant un match",
      recognition:
        "Équipe type de la Northeast Conference de The League for Clubs avec Rayan Cappai",
      currentClub:
        "Rayan Cappai · Nybergsund IL Trysil · Signé pour la saison 2027",
      photo1: "Rayan Cappai contrôle le ballon sous pression",
      photo2: "Rayan Cappai progresse avec le ballon",
      photo3: "Rayan Cappai joue une passe vers l’avant",
      photo4: "Rayan Cappai observe le jeu",
    },
  },
  es: {
    meta: {
      title: "Rayan Cappai | Mediocentro defensivo francés 2006",
      description:
        "Perfil del jugador de Rayan Cappai, mediocentro defensivo francés 2006 (6), actualmente jugador del Nybergsund IL Trysil en Noruega y con contrato para la temporada 2027.",
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
    brand: { role: "Mediocentro defensivo" },
    nav: {
      profile: "Perfil",
      videos: "Vídeos",
      career: "Trayectoria",
      cv: "CV deportivo",
      contact: "Contacto",
    },
    hero: {
      specialty: "Recuperador · Organizador",
      status: "Nybergsund IL Trysil · Contrato para la temporada 2027",
      eyebrow: "Perfil del jugador",
      role: "Mediocentro defensivo francés · 6",
      lead: "Formado en el AC Ajaccio y el Gazélec Ajaccio, con experiencia posterior en Estados Unidos y Noruega. En el Nybergsund IL Trysil desde julio de 2026, con contrato para la temporada 2027.",
      recentLabel: "Club actual",
      recentValue: "Nybergsund IL Trysil · 2027",
      recognitionLabel: "Reconocimiento verificado",
      recognitionValue: "Equipo de la semana de la conferencia",
      photoKicker: "Nybergsund IL Trysil",
      photoCaption: "Contrato para la temporada 2027",
    },
    facts: {
      positionLabel: "Posición",
      position: "6",
      footLabel: "Pie dominante",
      foot: "Derecho",
      heightLabel: "Altura",
      weightLabel: "Peso",
    },
    actions: {
      highlights: "Ver vídeo",
      highlightsShort: "Highlights",
      fullMatch: "Partido completo · #27",
      cv: "Descargar CV",
    },
    profile: {
      eyebrow: "Resumen para scouts",
      title: "Perfil del jugador",
      intro:
        "Información verificada para una primera revisión rápida. El contexto detallado y el partido completo aparecen a continuación.",
      card1Label: "Nivel juvenil en Francia",
      card1Value: "AC Ajaccio · U17 Nacional / Gazélec Ajaccio · U19 Nacional",
      card2Label: "Experiencia universitaria en EE. UU.",
      card3Label: "Club actual",
      card3Value: "Nybergsund IL Trysil · Noruega",
      card4Label: "Competición 2026",
      card4Value: "4. divisjon menn · 2026",
      card5Label: "Reconocimiento",
      card5Value: "Equipo de la semana · Northeast Conference",
      card6Label: "Situación contractual",
      card6Value:
        "Contrato con el Nybergsund IL Trysil para la temporada 2027",
    },
    norway: {
      eyebrow: "Noruega · Temporada 2026",
      title: "Nybergsund · Temporada 2026",
      date: "A 11 de octubre de 2026 · Llegada el 20 de julio de 2026",
      matchesLabel: "Partidos de liga",
      matchesValue: "11 / 11 desde su llegada",
      goalsLabel: "Goles en liga",
      goalsValue: "3 goles",
      positionLabel: "Posición del club",
      positionValue: "3.º · 41 puntos",
      returnLabel: "Clasificación por puntos en la segunda vuelta",
      returnValue: "1.º · 25 puntos",
      note: "Segunda vuelta: jornadas 14–23, 8 victorias, 1 empate y 1 derrota en 10 partidos. Nybergsund: 25 puntos en 10 partidos; HamKam 2: 22 puntos en 9. Clasificación calculada a partir de los resultados de la NFF a 11 de octubre de 2026, con distinto número de partidos disputados.",
      playerSource: "Estadísticas del jugador en la NFF",
      leagueSource: "Clasificación y resultados en la NFF",
    },
    videos: {
      eyebrow: "Evaluación en vídeo",
      title: "Selección de vídeo y partido completo",
      intro:
        "Una selección de acciones permite identificar rápidamente su perfil. El partido completo amplía la evaluación de su posicionamiento, toma de decisiones, velocidad de ejecución y actividad con y sin balón.",
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
      review4: "Recuperación & organización · 6",
    },
    career: {
      eyebrow: "Trayectoria futbolística",
      title: "Un recorrido claro entre Francia, EE. UU. y Noruega.",
      step1Date: "Francia · Etapas U16 / U17",
      step1Title: "AC Ajaccio · U17 Nacional",
      step1Copy: "Dos temporadas en U17 Nacional durante sus etapas U16 y U17.",
      step1bDate: "Francia · Etapas U18 / U19",
      step1bTitle: "Gazélec Ajaccio · U19 Nacional",
      step1bCopy: "Dos temporadas en U19 Nacional durante sus etapas U18 y U19.",
      step2Date: "Estados Unidos · Experiencia universitaria",
      step2Copy:
        "Experiencia en un entorno de fútbol universitario estadounidense.",
      step3Date: "Verano 2026 · Estados Unidos",
      step3Title: "First State FC",
      step3Copy:
        "The League for Clubs, Northeast Conference. Vídeo reciente de partido disponible.",
      step4Date: "Desde el 20 de julio de 2026 · Noruega",
      step4Title: "Nybergsund IL Trysil",
      step4Copy:
        "4. divisjon menn, NFF Indre Østland. 11 partidos de liga y 3 goles a 11 de octubre de 2026. Contrato para la temporada 2027.",
      nffSource: "Ver el perfil oficial de la NFF",
      currentPhotoLabel: "Contrato para la temporada 2027",
    },
    recognition: {
      eyebrow: "Reconocimiento verificado",
      title:
        "The League for Clubs · Equipo de la semana de la Northeast Conference",
      copy: "Seleccionado en el equipo de la semana del 26 de junio al 2 de julio de 2026 con First State FC.",
      source: "Ver la publicación original",
    },
    photos: {
      eyebrow: "Fotografías de competición",
      title: "En acción durante el partido",
      intro:
        "Selección de imágenes de competición con First State FC durante el verano de 2026, antes de su incorporación al Nybergsund IL Trysil.",
    },
    cv: {
      eyebrow: "CV deportivo",
      title: "Un CV de una página. Tres idiomas.",
      intro:
        "El CV deportivo coincide con la información de este perfil e incluye enlaces directos a los dos vídeos.",
      check1: "Situación actual y experiencia reciente",
      check2: "Perfil de jugador y posición actual",
      check3: "Highlights, partido completo y contacto directo",
      documentLabel: "CV deportivo · 2026",
      primaryButton: "Descargar CV en español",
      updated: "Actualizado el 1 de noviembre de 2026",
    },
    contact: {
      eyebrow: "Contacto directo",
      title: "¿Interesado en evaluar a Rayan?",
      copy: "Rayan ha firmado con el Nybergsund IL Trysil para la temporada 2027. Para consultas del cuerpo técnico o documentos adicionales, contacte directamente con él.",
      emailLabel: "Correo",
      callLabel: "Llamar",
      copyLink: "Copiar enlace del perfil",
      copied: "Enlace del perfil copiado.",
      copyError:
        "No se pudo copiar automáticamente. Copie la dirección desde el navegador.",
    },
    footer: { copy: "Perfil del jugador", top: "Volver arriba" },
    images: {
      hero: "Rayan Cappai · Nybergsund IL Trysil · Temporada 2027",
      highlights: "Rayan Cappai avanza con el balón",
      fullMatch: "Rayan Cappai observa el juego durante un partido",
      recognition:
        "Equipo de la semana de la Northeast Conference de The League for Clubs con Rayan Cappai",
      currentClub:
        "Rayan Cappai · Nybergsund IL Trysil · Contrato para la temporada 2027",
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

