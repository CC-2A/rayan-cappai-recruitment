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
    langName: 'français',
    text: {
      'Skip to content': 'Aller au contenu',
      'Open navigation': 'Ouvrir la navigation',
      'Snapshot': 'Aperçu',
      'Video': 'Vidéo',
      'Soccer CV': 'CV football',
      'Action Photos': 'Photos en action',
      'Recruiting Fit': 'Profil recherché',
      'Contact': 'Contact',
      'Fall 2026 recruitment · French central midfielder · United States': 'Recrutement Fall 2026 · Milieu central français · États-Unis',
      'French Central Midfielder | 6 / 8 / 10 | Fall 2026 Available': 'Milieu central français | 6 / 8 / 10 | Disponible Fall 2026',
      'Currently starting in U.S. Summer League with First State FC / Midnight Riders, providing recent U.S. match footage for immediate coach evaluation. Built for programs needing a reliable central midfielder who can connect phases, protect possession, and arrive in advanced areas.': 'Titulaire actuellement en U.S. Summer League avec First State FC / Midnight Riders, avec des images récentes aux États-Unis pour une évaluation immédiate par les coachs. Profil conçu pour les programmes recherchant un milieu central fiable, capable de relier les phases, sécuriser la possession et se projeter dans les zones avancées.',
      'A coach-ready central midfielder profile with verified highlights, two full-match references, Sport CV PDFs, and direct contact in one place.': 'Profil de milieu central prêt pour les coachs, avec highlights vérifiés, deux matchs complets, CV football PDF et contact direct au même endroit.',
      'Right-footed': 'Droitier',
      'Coach Review': 'Revue coach',
      'Highlights': 'Highlights',
      'Sport CV PDFs': 'CV football PDF',
      'Essential facts only for a fast first review.': 'Uniquement les faits essentiels pour une première lecture rapide.',
      'Video Evaluation': 'Évaluation vidéo',
      'Highlights + two full-match references': 'Highlights + deux références de match complet',
      'Start with the short highlight reel, then review Full Match #6 and Full Match #10 for role, positioning, and decision-making.': 'Commencez par les highlights courts, puis regardez le match complet #6 et le match complet #10 pour le rôle, le positionnement et la prise de décision.',
      'Right-footed midfielder who can protect possession, connect phases, and adjust his height based on match needs.': 'Milieu droitier capable de sécuriser la possession, relier les phases et ajuster sa hauteur selon les besoins du match.',
      'Concise evaluation profile': 'Profil d’évaluation concis',
      'Comfortable as a deeper organizer, box-to-box connector, or advanced link between lines.': 'À l’aise comme organisateur plus bas, relais box-to-box ou lien avancé entre les lignes.',
      'U.S. experience gives coaches recent context for speed of play, physicality, and adaptation.': 'Son expérience aux États-Unis donne aux coachs un contexte récent sur le rythme, l’impact physique et l’adaptation.',
      'Full-match footage supports evaluation of scanning, tempo control, defensive work, and decisions under pressure.': 'Les matchs complets aident à évaluer la prise d’information, le contrôle du tempo, le travail défensif et les décisions sous pression.',
      'Best reviewed through the video sequence first, then the Sport CV for background details.': 'À évaluer d’abord via la séquence vidéo, puis avec le CV football pour les détails de parcours.',
      'Download the Sport CV': 'Télécharger le CV football',
      'Use the PDF for roster review, background checks, and next-step recruiting conversations.': 'Utilisez le PDF pour l’étude d’effectif, les vérifications de parcours et les prochaines discussions de recrutement.',
      'PDF downloads': 'Téléchargements PDF',
      'Select the preferred language and open the current Sport CV in a new tab.': 'Sélectionnez la langue souhaitée et ouvrez le CV football actuel dans un nouvel onglet.',
      'Request supporting documents': 'Demander les documents de support',
      'College staffs can request academics, eligibility materials, and references by email when ready to move forward.': 'Les staffs universitaires peuvent demander les documents académiques, d’éligibilité et les références par email lorsqu’ils souhaitent avancer.',
      'Pre-professional evaluation environments': 'Environnements d’évaluation préprofessionnels',
      'Central midfield 6 / 8 / 10 role': 'Rôle de milieu central 6 / 8 / 10',
      'For recruitment, evaluation, or next-step conversations, contact Rayan directly after reviewing the video and Sport CV.': 'Pour le recrutement, l’évaluation ou les prochaines discussions, contactez directement Rayan après avoir consulté la vidéo et le CV football.',
      'Current U.S. Summer League Starter': 'Titulaire actuel en U.S. Summer League',
      'Former AC Ajaccio U17 National Captain': 'Ancien capitaine U17 National de l’AC Ajaccio',
      'Right-footed | 1.82 m / 77 kg': 'Droitier | 1.82 m / 77 kg',
      'Watch Highlights': 'Voir les highlights',
      'Watch Full Match #6': 'Voir le match complet #6',
      'Watch Full Match #10': 'Voir le match complet #10',
      'Download Sport CV PDF': 'Télécharger le CV football PDF',
      'Download CV — English': 'Télécharger CV — Anglais',
      'Télécharger CV — Français': 'Télécharger CV — Français',
      'Descargar CV — Español': 'Télécharger CV — Espagnol',
      'Contact Rayan': 'Contacter Rayan',
      'Fall 2026 Available': 'Disponible Fall 2026',
      'Current club': 'Club actuel',
      'Current status': 'Statut actuel',
      'Current Summer League starter': 'Titulaire actuel en Summer League',
      'Current U.S. Summer League starter': 'Titulaire actuel en U.S. Summer League',
      'Previous college': 'Université précédente',
      'Height / Weight': 'Taille / Poids',
      'Recruitment Snapshot': 'Aperçu recrutement',
      'Key facts at a glance': 'Points clés en un coup d’œil',
      'Concise recruitment data for U.S. college soccer coaches, scouts, and pre-professional evaluators.': 'Données de recrutement synthétiques pour coachs universitaires américains, recruteurs et environnements préprofessionnels.',
      'Position': 'Poste',
      'Central Midfielder': 'Milieu central',
      'Role': 'Rôle',
      'Current Club': 'Club actuel',
      'Current Level': 'Niveau actuel',
      'U.S. Summer League': 'U.S. Summer League',
      'Starter Status': 'Statut de titulaire',
      'Current Starter': 'Titulaire actuel',
      'Availability': 'Disponibilité',
      'Previous College': 'Université précédente',
      'Nationality': 'Nationalité',
      'French': 'Français',
      'Current pathway': 'Parcours actuel',
      'Active Summer League player with First State FC / Midnight Riders': 'Joueur actif en Summer League avec First State FC / Midnight Riders',
      'Currently starting in U.S. Summer League with First State FC / Midnight Riders, providing recent U.S. match footage for immediate coach evaluation. His recent match exposure includes three starts, his previous U.S. college experience is with William Penn University, and his next college availability is Fall 2026.': 'Actuellement titulaire en U.S. Summer League avec First State FC / Midnight Riders, il offre aux coachs des images récentes aux États-Unis pour une évaluation immédiate. Ses dernières apparitions comprennent trois titularisations, son expérience universitaire américaine précédente est avec William Penn University, et sa prochaine disponibilité universitaire est Fall 2026.',
      'Recruitment fit': 'Profil de recrutement',
      'Fall 2026 college soccer recruitment': 'Recrutement universitaire Fall 2026',
      'Pre-professional training and roster evaluation environments': 'Environnements d’entraînement préprofessionnel et d’évaluation d’effectif',
      'Programs needing midfield versatility across 6 / 8 / 10 roles': 'Programmes recherchant de la polyvalence au milieu sur les rôles 6 / 8 / 10',
      'Player profile': 'Profil joueur',
      'Right-footed central midfielder with the tactical flexibility to play deeper as a 6, box-to-box as an 8, or higher between lines as a 10.': 'Milieu central droitier avec la flexibilité tactique pour évoluer plus bas en 6, box-to-box en 8, ou plus haut entre les lignes en 10.',
      'Coach-facing profile': 'Profil pour coachs',
      'French midfielder with U.S. college and current Summer League experience': 'Milieu français avec expérience universitaire américaine et Summer League actuelle',
      'Rayan Cappai is a 2006-born French central midfielder currently based in the United States. Coaches can use this page to review his highlights, two full-match references, Sport CV PDF, current club status, and direct contact details without requesting extra links first.': 'Rayan Cappai est un milieu central français né en 2006, actuellement basé aux États-Unis. Les coachs peuvent utiliser cette page pour consulter ses highlights, deux matchs complets de référence, son CV football PDF, sa situation de club actuelle et ses coordonnées directes sans devoir demander d’autres liens au préalable.',
      'Coach video room': 'Espace vidéo coachs',
      'Watch the complete evaluation sequence': 'Voir la séquence complète d’évaluation',
      'Start with the short highlight reel, then review Full Match #6 and Full Match #10 before downloading the Sport CV PDF or contacting Rayan directly.': 'Commencez par la courte vidéo de highlights, puis analysez le match complet #6 et le match complet #10 avant de télécharger le CV football PDF ou de contacter Rayan directement.',
      'Download Sport CV PDF': 'Télécharger le CV football PDF',
      'Download CV in English, French, or Spanish': 'Télécharger le CV en anglais, français ou espagnol',
      'Fast review': 'Évaluation rapide',
      '3-min Highlight Video': 'Vidéo highlights 3 min',
      'Quick first look for technical quality, movement, ball security, and midfield range.': 'Premier aperçu rapide de la qualité technique, des déplacements, de la sécurité balle au pied et de la couverture au milieu.',
      'Full-match review': 'Analyse match complet',
      'Full Match #6': 'Match complet #6',
      'Full-match footage for deeper review of positioning, defensive work, and midfield decision-making.': 'Match complet pour une analyse approfondie du placement, du travail défensif et de la prise de décision au milieu.',
      'Full Match #10': 'Match complet #10',
      'Additional match context for role flexibility, scanning, tempo control, and actions between lines.': 'Contexte de match supplémentaire pour évaluer la polyvalence, la prise d’information, la maîtrise du tempo et les actions entre les lignes.',
      'Sport CV': 'CV football',
      'Download Sport CV PDFs': 'Télécharger les CV football PDF',
      'Download the current Sport CV PDF for measurements, playing background, current pathway, video links, and contact details.': 'Téléchargez le CV football PDF actuel pour les mensurations, le parcours de joueur, la situation actuelle, les liens vidéo et les coordonnées.',
      'Previous college experience': 'Expérience universitaire précédente',
      'U.S. college soccer experience': 'Expérience en soccer universitaire américain',
      'Current starter in U.S. Summer League match exposure': 'Titulaire actuel avec exposition en matchs de U.S. Summer League',
      'College availability': 'Disponibilité universitaire',
      'Available for U.S. college soccer recruitment': 'Disponible pour le recrutement universitaire américain',
      'Updated 2026': 'Mis à jour 2026',
      'Current': 'Actuel',
      'Current level': 'Niveau actuel',
      'Central Midfielder 6 / 8 / 10': 'Milieu central 6 / 8 / 10',
      'Action Photos': 'Photos en action',
      'Current match photo set': 'Sélection de photos de match récentes',
      'Recent match photos from Rayan’s current U.S. Summer League experience.': 'Photos récentes de match issues de l’expérience actuelle de Rayan en U.S. Summer League.',
      'Request documents': 'Demander les documents',
      'Academic transcript available upon request': 'Relevé académique disponible sur demande',
      'References available upon request': 'Références disponibles sur demande',
      'Admissions/eligibility documents available upon request': 'Documents d’admission/éligibilité disponibles sur demande',
      'Request Documents': 'Demander les documents',
      'Academic & Eligibility Documents': 'Documents académiques et d’éligibilité',
      'Single document request hub for college staffs': 'Point unique de demande de documents pour staffs universitaires',
      'College coaches can request academic, admissions, eligibility, and reference documents directly by email. This keeps the evaluation flow clean while preserving access to supporting materials when a program is ready to move forward.': 'Les coachs universitaires peuvent demander directement par email les documents académiques, d’admission, d’éligibilité et les références. Cela garde le processus d’évaluation clair tout en conservant l’accès aux pièces complémentaires lorsqu’un programme souhaite avancer.',
      'Recruiting fit': 'Profil recherché',
      'Best-fit opportunities': 'Opportunités les plus adaptées',
      'U.S. college soccer Fall 2026': 'Soccer universitaire américain Fall 2026',
      'For programs seeking a 2006 French central midfielder with U.S. college experience, current Summer League minutes, and verified video for staff review.': 'Pour les programmes recherchant un milieu central français né en 2006, avec expérience universitaire américaine, minutes actuelles en Summer League et vidéos vérifiées pour analyse du staff.',
      'Pre-professional pathway': 'Parcours préprofessionnel',
      'For development-focused environments that value midfield range, role flexibility, and players prepared to be evaluated through full-match footage.': 'Pour les environnements axés sur le développement qui valorisent le volume au milieu, la flexibilité de rôle et les joueurs prêts à être évalués sur matchs complets.',
      'Club / evaluation setting': 'Club / cadre d’évaluation',
      'For clubs seeking a right-footed 6 / 8 / 10 profile available for direct communication, review, and next-step evaluation conversations.': 'Pour les clubs recherchant un profil droitier 6 / 8 / 10 disponible pour échange direct, analyse et discussions sur les prochaines étapes d’évaluation.',
      'Interested coaches and clubs': 'Coachs et clubs intéressés',
      'For Fall 2026 college recruitment, pre-professional evaluation, or club opportunities, contact Rayan directly. Coaches can request transcripts, references, admissions/eligibility documents, or additional match context after reviewing the video sequence and Sport CV PDF.': 'Pour le recrutement universitaire Fall 2026, une évaluation préprofessionnelle ou des opportunités en club, contactez Rayan directement. Les coachs peuvent demander les relevés, références, documents d’admission/éligibilité ou un contexte de match supplémentaire après avoir consulté la séquence vidéo et le CV football PDF.',
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
      'Key recruitment badges': 'Badges clés de recrutement',
      'Coach priority actions': 'Actions prioritaires pour coachs',
      'Watch Rayan Cappai 3-minute highlight video in a new tab': 'Voir la vidéo highlights de 3 minutes de Rayan Cappai dans un nouvel onglet',
      'Watch Rayan Cappai full match number 6 in a new tab': 'Voir le match complet numéro 6 de Rayan Cappai dans un nouvel onglet',
      'Watch Rayan Cappai full match number 10 in a new tab': 'Voir le match complet numéro 10 de Rayan Cappai dans un nouvel onglet',
      'Download Rayan Cappai Sport CV PDF': 'Télécharger le CV football PDF de Rayan Cappai',
      'Download Rayan Cappai Sport CV in English': 'Télécharger le CV football de Rayan Cappai en anglais',
      'Download Rayan Cappai Sport CV in French': 'Télécharger le CV football de Rayan Cappai en français',
      'Download Rayan Cappai Sport CV in Spanish': 'Télécharger le CV football de Rayan Cappai en espagnol',
      'Sport CV download options': 'Options de téléchargement du CV football',
      'Quick player facts': 'Informations rapides sur le joueur',
      'Coach review sequence': 'Séquence de revue coach',
      'Warning-free coach flow': 'Parcours clair pour coachs',
      'Soccer experience timeline': 'Chronologie de l’expérience football',
      'Current Sport CV summary and download': 'Résumé et téléchargement du CV football actuel',
      'Sport CV updated 2026 summary': 'Résumé du CV football mis à jour 2026',
      'Recent action photos of Rayan Cappai': 'Photos récentes de Rayan Cappai en action',
      'Rayan Cappai carrying the ball forward in a Summer League match': 'Rayan Cappai progresse balle au pied lors d’un match de Summer League',
      'Rayan Cappai controlling possession under midfield pressure': 'Rayan Cappai conserve la possession sous pression au milieu',
      'Rayan Cappai striking a forward pass during Summer League action': 'Rayan Cappai joue une passe vers l’avant en Summer League',
      'Rayan Cappai scanning the field before receiving the ball': 'Rayan Cappai analyse le jeu avant de recevoir le ballon',
      'Switch website language to English': 'Passer le site en anglais',
      'Switch website language to French': 'Passer le site en français',
      'Switch website language to Spanish': 'Passer le site en espagnol'
    },
    meta: {
      'Coach-ready recruitment profile for Rayan Cappai: 2006 French central midfielder with William Penn University experience, currently with First State FC / Midnight Riders, available for Fall 2026 college soccer.': 'Profil de recrutement prêt pour coachs de Rayan Cappai : milieu central français né en 2006 avec expérience à William Penn University, actuellement avec First State FC / Midnight Riders, disponible pour le soccer universitaire Fall 2026.',
      'Rayan Cappai | Fall 2026 Central Midfielder Recruitment Profile': 'Rayan Cappai | Profil de recrutement milieu central Fall 2026',
      'Coach-ready highlights, full matches #6 and #10, Sport CV, and contact details for Rayan Cappai, a French 6/8/10 midfielder available Fall 2026.': 'Highlights, matchs complets #6 et #10, CV football et coordonnées de Rayan Cappai, milieu français 6/8/10 disponible Fall 2026.',
      'Rayan Cappai current match action photo': 'Photo récente de Rayan Cappai en match',
      'Highlights, full matches #6 and #10, Sport CV PDF, and direct coach contact for Rayan Cappai.': 'Highlights, matchs complets #6 et #10, CV football PDF et contact direct pour les coachs de Rayan Cappai.',
      'Rayan Cappai Recruitment | Fall 2026 Central Midfielder & Sport CV': 'Recrutement Rayan Cappai | Milieu central Fall 2026 & CV football'
    }
  },
  es: {
    langName: 'español',
    text: {
      'Skip to content': 'Saltar al contenido',
      'Open navigation': 'Abrir navegación',
      'Snapshot': 'Resumen',
      'Video': 'Video',
      'Soccer CV': 'CV deportivo',
      'Action Photos': 'Fotos en acción',
      'Recruiting Fit': 'Encaje deportivo',
      'Contact': 'Contacto',
      'Fall 2026 recruitment · French central midfielder · United States': 'Reclutamiento Fall 2026 · Mediocampista central francés · Estados Unidos',
      'French Central Midfielder | 6 / 8 / 10 | Fall 2026 Available': 'Mediocampista central francés | 6 / 8 / 10 | Disponible Fall 2026',
      'Currently starting in U.S. Summer League with First State FC / Midnight Riders, providing recent U.S. match footage for immediate coach evaluation. Built for programs needing a reliable central midfielder who can connect phases, protect possession, and arrive in advanced areas.': 'Actualmente titular en la U.S. Summer League con First State FC / Midnight Riders, con video reciente en Estados Unidos para evaluación inmediata de entrenadores. Perfil preparado para programas que necesitan un mediocampista central confiable, capaz de conectar fases, proteger la posesión y llegar a zonas avanzadas.',
      'A coach-ready central midfielder profile with verified highlights, two full-match references, Sport CV PDFs, and direct contact in one place.': 'Perfil de mediocampista central listo para entrenadores, con highlights verificados, dos partidos completos, CV deportivo PDF y contacto directo en un solo lugar.',
      'Right-footed': 'Diestro',
      'Coach Review': 'Revisión del entrenador',
      'Highlights': 'Highlights',
      'Sport CV PDFs': 'CV deportivos PDF',
      'Essential facts only for a fast first review.': 'Solo datos esenciales para una primera revisión rápida.',
      'Video Evaluation': 'Evaluación en video',
      'Highlights + two full-match references': 'Highlights + dos referencias de partido completo',
      'Start with the short highlight reel, then review Full Match #6 and Full Match #10 for role, positioning, and decision-making.': 'Empiece con el video corto de highlights y luego revise el partido completo #6 y el partido completo #10 para analizar rol, posicionamiento y toma de decisiones.',
      'Right-footed midfielder who can protect possession, connect phases, and adjust his height based on match needs.': 'Mediocampista diestro capaz de proteger la posesión, conectar fases y ajustar su altura según las necesidades del partido.',
      'Concise evaluation profile': 'Perfil de evaluación conciso',
      'Comfortable as a deeper organizer, box-to-box connector, or advanced link between lines.': 'Cómodo como organizador más bajo, conector box-to-box o enlace avanzado entre líneas.',
      'U.S. experience gives coaches recent context for speed of play, physicality, and adaptation.': 'La experiencia en Estados Unidos da a los entrenadores contexto reciente sobre ritmo de juego, físico y adaptación.',
      'Full-match footage supports evaluation of scanning, tempo control, defensive work, and decisions under pressure.': 'Los partidos completos ayudan a evaluar lectura previa, control del ritmo, trabajo defensivo y decisiones bajo presión.',
      'Best reviewed through the video sequence first, then the Sport CV for background details.': 'Se recomienda revisar primero la secuencia de video y luego el CV deportivo para los detalles de trayectoria.',
      'Download the Sport CV': 'Descargar el CV deportivo',
      'Use the PDF for roster review, background checks, and next-step recruiting conversations.': 'Use el PDF para revisión de plantilla, verificación de trayectoria y próximas conversaciones de reclutamiento.',
      'PDF downloads': 'Descargas PDF',
      'Select the preferred language and open the current Sport CV in a new tab.': 'Seleccione el idioma preferido y abra el CV deportivo actual en una pestaña nueva.',
      'Request supporting documents': 'Solicitar documentos de apoyo',
      'College staffs can request academics, eligibility materials, and references by email when ready to move forward.': 'Los staffs universitarios pueden solicitar documentos académicos, elegibilidad y referencias por email cuando estén listos para avanzar.',
      'Pre-professional evaluation environments': 'Entornos de evaluación preprofesional',
      'Central midfield 6 / 8 / 10 role': 'Rol de mediocampo central 6 / 8 / 10',
      'For recruitment, evaluation, or next-step conversations, contact Rayan directly after reviewing the video and Sport CV.': 'Para reclutamiento, evaluación o próximos pasos, contacte directamente a Rayan después de revisar el video y el CV deportivo.',
      'Current U.S. Summer League Starter': 'Titular actual en U.S. Summer League',
      'Former AC Ajaccio U17 National Captain': 'Ex capitán U17 National de AC Ajaccio',
      'Right-footed | 1.82 m / 77 kg': 'Diestro | 1.82 m / 77 kg',
      'Watch Highlights': 'Ver highlights',
      'Watch Full Match #6': 'Ver partido completo #6',
      'Watch Full Match #10': 'Ver partido completo #10',
      'Download Sport CV PDF': 'Descargar CV deportivo PDF',
      'Download CV — English': 'Descargar CV — Inglés',
      'Télécharger CV — Français': 'Descargar CV — Francés',
      'Descargar CV — Español': 'Descargar CV — Español',
      'Contact Rayan': 'Contactar a Rayan',
      'Fall 2026 Available': 'Disponible Fall 2026',
      'Current club': 'Club actual',
      'Current status': 'Estado actual',
      'Current Summer League starter': 'Titular actual en Summer League',
      'Current U.S. Summer League starter': 'Titular actual en U.S. Summer League',
      'Previous college': 'Universidad anterior',
      'Height / Weight': 'Altura / Peso',
      'Recruitment Snapshot': 'Resumen de reclutamiento',
      'Key facts at a glance': 'Datos clave de un vistazo',
      'Concise recruitment data for U.S. college soccer coaches, scouts, and pre-professional evaluators.': 'Datos de reclutamiento claros para entrenadores universitarios de Estados Unidos, scouts y evaluadores preprofesionales.',
      'Position': 'Posición',
      'Central Midfielder': 'Mediocampista central',
      'Role': 'Rol',
      'Current Club': 'Club actual',
      'Current Level': 'Nivel actual',
      'U.S. Summer League': 'U.S. Summer League',
      'Starter Status': 'Condición de titular',
      'Current Starter': 'Titular actual',
      'Availability': 'Disponibilidad',
      'Previous College': 'Universidad anterior',
      'Nationality': 'Nacionalidad',
      'French': 'Francés',
      'Current pathway': 'Trayectoria actual',
      'Active Summer League player with First State FC / Midnight Riders': 'Jugador activo de Summer League con First State FC / Midnight Riders',
      'Currently starting in U.S. Summer League with First State FC / Midnight Riders, providing recent U.S. match footage for immediate coach evaluation. His recent match exposure includes three starts, his previous U.S. college experience is with William Penn University, and his next college availability is Fall 2026.': 'Actualmente titular en la U.S. Summer League con First State FC / Midnight Riders, aporta video reciente en Estados Unidos para evaluación inmediata de entrenadores. Su exposición reciente incluye tres titularidades, su experiencia universitaria previa en Estados Unidos fue con William Penn University y su próxima disponibilidad universitaria es Fall 2026.',
      'Recruitment fit': 'Encaje de reclutamiento',
      'Fall 2026 college soccer recruitment': 'Reclutamiento universitario Fall 2026',
      'Pre-professional training and roster evaluation environments': 'Entornos de entrenamiento preprofesional y evaluación de plantilla',
      'Programs needing midfield versatility across 6 / 8 / 10 roles': 'Programas que necesitan versatilidad en el mediocampo en roles 6 / 8 / 10',
      'Player profile': 'Perfil del jugador',
      'Right-footed central midfielder with the tactical flexibility to play deeper as a 6, box-to-box as an 8, or higher between lines as a 10.': 'Mediocampista central diestro con flexibilidad táctica para jugar más bajo como 6, de área a área como 8 o más adelantado entre líneas como 10.',
      'Coach-facing profile': 'Perfil para entrenadores',
      'French midfielder with U.S. college and current Summer League experience': 'Mediocampista francés con experiencia universitaria en EE. UU. y Summer League actual',
      'Rayan Cappai is a 2006-born French central midfielder currently based in the United States. Coaches can use this page to review his highlights, two full-match references, Sport CV PDF, current club status, and direct contact details without requesting extra links first.': 'Rayan Cappai es un mediocampista central francés nacido en 2006 y actualmente basado en Estados Unidos. Los entrenadores pueden usar esta página para revisar sus highlights, dos referencias de partido completo, el CV deportivo PDF, su situación actual de club y los datos de contacto directo sin pedir enlaces adicionales primero.',
      'Coach video room': 'Sala de video para entrenadores',
      'Watch the complete evaluation sequence': 'Ver la secuencia completa de evaluación',
      'Start with the short highlight reel, then review Full Match #6 and Full Match #10 before downloading the Sport CV PDF or contacting Rayan directly.': 'Comience con el video corto de highlights, luego revise el partido completo #6 y el partido completo #10 antes de descargar el CV deportivo PDF o contactar directamente a Rayan.',
      'Download CV in English, French, or Spanish': 'Descargar el CV en inglés, francés o español',
      'Fast review': 'Revisión rápida',
      '3-min Highlight Video': 'Video de highlights de 3 min',
      'Quick first look for technical quality, movement, ball security, and midfield range.': 'Primera revisión rápida de calidad técnica, movilidad, seguridad con el balón y recorrido en el mediocampo.',
      'Full-match review': 'Análisis de partido completo',
      'Full Match #6': 'Partido completo #6',
      'Full-match footage for deeper review of positioning, defensive work, and midfield decision-making.': 'Video de partido completo para analizar en profundidad posicionamiento, trabajo defensivo y toma de decisiones en el mediocampo.',
      'Full Match #10': 'Partido completo #10',
      'Additional match context for role flexibility, scanning, tempo control, and actions between lines.': 'Contexto adicional de partido para evaluar flexibilidad de rol, lectura previa, control del ritmo y acciones entre líneas.',
      'Sport CV': 'CV deportivo',
      'Download Sport CV PDFs': 'Descargar los CV deportivos PDF',
      'Download the current Sport CV PDF for measurements, playing background, current pathway, video links, and contact details.': 'Descargue el CV deportivo PDF actual con medidas, trayectoria, situación actual, enlaces de video y datos de contacto.',
      'Previous college experience': 'Experiencia universitaria previa',
      'U.S. college soccer experience': 'Experiencia en soccer universitario de EE. UU.',
      'Current starter in U.S. Summer League match exposure': 'Titular actual con exposición en partidos de U.S. Summer League',
      'College availability': 'Disponibilidad universitaria',
      'Available for U.S. college soccer recruitment': 'Disponible para reclutamiento universitario en EE. UU.',
      'Updated 2026': 'Actualizado 2026',
      'Current': 'Actual',
      'Current level': 'Nivel actual',
      'Central Midfielder 6 / 8 / 10': 'Mediocampista central 6 / 8 / 10',
      'Current match photo set': 'Selección actual de fotos de partido',
      'Recent match photos from Rayan’s current U.S. Summer League experience.': 'Fotos recientes de partidos de la experiencia actual de Rayan en U.S. Summer League.',
      'Request documents': 'Solicitar documentos',
      'Academic transcript available upon request': 'Historial académico disponible a pedido',
      'References available upon request': 'Referencias disponibles a pedido',
      'Admissions/eligibility documents available upon request': 'Documentos de admisión/elegibilidad disponibles a pedido',
      'Request Documents': 'Solicitar documentos',
      'Academic & Eligibility Documents': 'Documentos académicos y de elegibilidad',
      'Single document request hub for college staffs': 'Centro único de solicitud de documentos para staffs universitarios',
      'College coaches can request academic, admissions, eligibility, and reference documents directly by email. This keeps the evaluation flow clean while preserving access to supporting materials when a program is ready to move forward.': 'Los entrenadores universitarios pueden solicitar por email documentos académicos, de admisión, elegibilidad y referencias. Esto mantiene el proceso de evaluación ordenado y conserva el acceso a materiales de apoyo cuando un programa esté listo para avanzar.',
      'Recruiting fit': 'Encaje deportivo',
      'Best-fit opportunities': 'Oportunidades más adecuadas',
      'U.S. college soccer Fall 2026': 'Soccer universitario de EE. UU. Fall 2026',
      'For programs seeking a 2006 French central midfielder with U.S. college experience, current Summer League minutes, and verified video for staff review.': 'Para programas que buscan un mediocampista central francés nacido en 2006, con experiencia universitaria en EE. UU., minutos actuales en Summer League y video verificado para revisión del staff.',
      'Pre-professional pathway': 'Trayectoria preprofesional',
      'For development-focused environments that value midfield range, role flexibility, and players prepared to be evaluated through full-match footage.': 'Para entornos enfocados en desarrollo que valoran recorrido en el mediocampo, flexibilidad de rol y jugadores preparados para ser evaluados mediante partidos completos.',
      'Club / evaluation setting': 'Club / entorno de evaluación',
      'For clubs seeking a right-footed 6 / 8 / 10 profile available for direct communication, review, and next-step evaluation conversations.': 'Para clubes que buscan un perfil diestro 6 / 8 / 10 disponible para comunicación directa, revisión y conversaciones sobre próximos pasos de evaluación.',
      'Interested coaches and clubs': 'Entrenadores y clubes interesados',
      'For Fall 2026 college recruitment, pre-professional evaluation, or club opportunities, contact Rayan directly. Coaches can request transcripts, references, admissions/eligibility documents, or additional match context after reviewing the video sequence and Sport CV PDF.': 'Para reclutamiento universitario Fall 2026, evaluación preprofesional u oportunidades de club, contacte directamente a Rayan. Los entrenadores pueden solicitar historiales, referencias, documentos de admisión/elegibilidad o contexto adicional de partidos después de revisar la secuencia de video y el CV deportivo PDF.',
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
      'Key recruitment badges': 'Insignias clave de reclutamiento',
      'Coach priority actions': 'Acciones prioritarias para entrenadores',
      'Watch Rayan Cappai 3-minute highlight video in a new tab': 'Ver el video de highlights de 3 minutos de Rayan Cappai en una nueva pestaña',
      'Watch Rayan Cappai full match number 6 in a new tab': 'Ver el partido completo número 6 de Rayan Cappai en una nueva pestaña',
      'Watch Rayan Cappai full match number 10 in a new tab': 'Ver el partido completo número 10 de Rayan Cappai en una nueva pestaña',
      'Download Rayan Cappai Sport CV PDF': 'Descargar el CV deportivo PDF de Rayan Cappai',
      'Download Rayan Cappai Sport CV in English': 'Descargar el CV deportivo de Rayan Cappai en inglés',
      'Download Rayan Cappai Sport CV in French': 'Descargar el CV deportivo de Rayan Cappai en francés',
      'Download Rayan Cappai Sport CV in Spanish': 'Descargar el CV deportivo de Rayan Cappai en español',
      'Sport CV download options': 'Opciones de descarga del CV deportivo',
      'Quick player facts': 'Datos rápidos del jugador',
      'Coach review sequence': 'Secuencia de revisión del entrenador',
      'Warning-free coach flow': 'Flujo claro para entrenadores',
      'Soccer experience timeline': 'Cronología de experiencia futbolística',
      'Current Sport CV summary and download': 'Resumen y descarga del CV deportivo actual',
      'Sport CV updated 2026 summary': 'Resumen del CV deportivo actualizado 2026',
      'Recent action photos of Rayan Cappai': 'Fotos recientes de Rayan Cappai en acción',
      'Rayan Cappai carrying the ball forward in a Summer League match': 'Rayan Cappai conduciendo el balón hacia adelante en un partido de Summer League',
      'Rayan Cappai controlling possession under midfield pressure': 'Rayan Cappai controlando la posesión bajo presión en el mediocampo',
      'Rayan Cappai striking a forward pass during Summer League action': 'Rayan Cappai ejecutando un pase hacia adelante durante acción de Summer League',
      'Rayan Cappai scanning the field before receiving the ball': 'Rayan Cappai observando el campo antes de recibir el balón',
      'Switch website language to English': 'Cambiar el sitio a inglés',
      'Switch website language to French': 'Cambiar el sitio a francés',
      'Switch website language to Spanish': 'Cambiar el sitio a español'
    },
    meta: {
      'Coach-ready recruitment profile for Rayan Cappai: 2006 French central midfielder with William Penn University experience, currently with First State FC / Midnight Riders, available for Fall 2026 college soccer.': 'Perfil de reclutamiento listo para entrenadores de Rayan Cappai: mediocampista central francés nacido en 2006 con experiencia en William Penn University, actualmente con First State FC / Midnight Riders, disponible para soccer universitario Fall 2026.',
      'Rayan Cappai | Fall 2026 Central Midfielder Recruitment Profile': 'Rayan Cappai | Perfil de reclutamiento mediocampista central Fall 2026',
      'Coach-ready highlights, full matches #6 and #10, Sport CV, and contact details for Rayan Cappai, a French 6/8/10 midfielder available Fall 2026.': 'Highlights listos para entrenadores, partidos completos #6 y #10, CV deportivo y datos de contacto de Rayan Cappai, mediocampista francés 6/8/10 disponible Fall 2026.',
      'Rayan Cappai current match action photo': 'Foto actual de Rayan Cappai en partido',
      'Highlights, full matches #6 and #10, Sport CV PDF, and direct coach contact for Rayan Cappai.': 'Highlights, partidos completos #6 y #10, CV deportivo PDF y contacto directo para entrenadores de Rayan Cappai.',
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
  const key = original.trim();
  const translated = dictionary?.text?.[key] || key;
  const leading = original.match(/^\s*/)[0];
  const trailing = original.match(/\s*$/)[0];
  node.nodeValue = `${leading}${translated}${trailing}`;
};

const captureOriginalAttributes = () => {
  document.querySelectorAll('[aria-label], img[alt]').forEach((element) => {
    originalAttributes.set(element, {
      ariaLabel: element.getAttribute('aria-label'),
      alt: element.getAttribute('alt')
    });
  });
};

const translateAttribute = (element, attribute, dictionary, keyOverride) => {
  const savedAttributes = originalAttributes.get(element);
  const originalAttribute = attribute === 'aria-label' ? savedAttributes?.ariaLabel : savedAttributes?.alt;
  const key = keyOverride || originalAttribute || element.getAttribute(attribute);
  const translated = dictionary?.attributes?.[key] || dictionary?.meta?.[key] || key;
  element.setAttribute(attribute, translated);
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
    if (!supportedLanguages.includes(selectedLanguage)) {
      return;
    }

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
  if (window.innerWidth >= 860) {
    closeMenu();
  }
});

if (year) {
  year.textContent = new Date().getFullYear();
}

captureOriginalText();
captureOriginalAttributes();
applyLanguage(getLanguage());
setHeaderState();
