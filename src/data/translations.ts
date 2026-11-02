export type Language = "en" | "fr" | "tn";

export interface Translations {
  nav: {
    services: string;
    process: string;
    whyUs: string;
    about: string;
    contact: string;
    letsTalk: string;
  };
  hero: {
    weBuild: string;
    digital: string;
    experiences: string;
    thatMove: string;
    businessesForward: string;
    subtext: string;
    exploreServices: string;
    startProject: string;
    scroll: string;
  };
  services: {
    badge: string;
    title: string;
    subtitle: string;
    includedDeliverables: string;
    inquireAbout: string;
    needTailored: string;
    exploreAll: string;
    items: Record<
      string,
      {
        title: string;
        shortDescription: string;
        fullDescription?: string;
        metricsHighlight: string;
        techTag: string;
        deliverables: string[];
      }
    >;
  };
  process: {
    badge: string;
    title: string;
    subtitle: string;
    keyDeliverables: string;
    stages: Record<
      string,
      {
        title: string;
        tagline: string;
        description: string;
        duration: string;
        deliverables: string[];
      }
    >;
    ctaCard: {
      badge: string;
      reviewTime: string;
      title: string;
      description: string;
      button: string;
      footerNote: string;
    };
  };
  about: {
    badge: string;
    headlinePart1: string;
    headlineUnderline: string;
    headlinePart2: string;
    desc1: string;
    desc2: string;
    readStory: string;
    stats: { value: string; label: string }[];
  };
  whyUs: {
    badge: string;
    title: string;
    subtitle: string;
    commitmentPills: string[];
    hoverNotice: string;
    pillars: Record<
      string,
      {
        headline: string;
        description: string;
        stat: string;
        statLabel: string;
        title: string;
      }
    >;
  };
  finalCta: {
    badge: string;
    title: string;
    subtitle: string;
    servicesLabel: string;
    budgetLabel: string;
    namePlaceholder: string;
    emailPlaceholder: string;
    messagePlaceholder: string;
    buttonSubmit: string;
    buttonSending: string;
    messageSentTitle: string;
    messageSentDesc: string;
    sendAnother: string;
    directContactTitle: string;
    talkToPartner: string;
  };
  footer: {
    agencyDesc: string;
    navTitle: string;
    servicesTitle: string;
    connectTitle: string;
    rights: string;
    backToTop: string;
  };
  aboutPage: {
    badge: string;
    headlinePart1: string;
    headlineUnderline: string;
    leadText: string;
    subText: string;
    disciplinesTitle: string;
    disciplines: { role: string; desc: string }[];
    ctaTitle: string;
    ctaSub: string;
    ctaButton: string;
  };
  servicesPage: {
    badge: string;
    title: string;
    subtitle: string;
    inquireFor: string;
  };
  contactPage: {
    badge: string;
    title: string;
    subtitle: string;
    servicesLabel: string;
    budgetLabel: string;
    namePlaceholder: string;
    emailPlaceholder: string;
    messagePlaceholder: string;
    buttonSubmit: string;
    buttonSending: string;
    messageSentTitle: string;
    messageSentDesc: string;
    sendAnother: string;
    coordinatesTitle: string;
    studioTitle: string;
    hours: string;
  };
}

export const TRANSLATIONS: Record<Language, Translations> = {
  en: {
    nav: {
      services: "Services",
      process: "Process",
      whyUs: "Why Us",
      about: "About",
      contact: "Contact",
      letsTalk: "Let's Talk",
    },
    hero: {
      weBuild: "We build",
      digital: "digital",
      experiences: "experiences",
      thatMove: "that move",
      businessesForward: "businesses forward.",
      subtext:
        "From bold brand identities to powerful websites and digital strategies, we help businesses turn ideas into measurable growth.",
      exploreServices: "Explore Services",
      startProject: "Start a Project",
      scroll: "SCROLL",
    },
    services: {
      badge: "SERVICES",
      title: "What we do.",
      subtitle:
        "Six core digital growth capabilities engineered to launch modern brands, outpace competitors, and generate measurable commercial value.",
      includedDeliverables: "Included Deliverables",
      inquireAbout: "Inquire About This",
      needTailored: "Need a tailored scope or multi-pillar engagement?",
      exploreAll: "Explore All 6 Full Capabilities",
      items: {
        "web-development": {
          title: "Web Development",
          shortDescription:
            "Ultra-fast websites and web applications built with Next.js.",
          fullDescription:
            "We build bespoke digital platforms with sub-second speeds, smooth interactions, and rock-solid architecture.",
          metricsHighlight: "99+ Performance",
          techTag: "Next.js 16 • React 19 • WebGL",
          deliverables: [
            "Custom Next.js & React",
            "Corporate & Portfolio Sites",
            "Headless E-Commerce",
            "Web Apps & Portals",
          ],
        },
        "branding-graphic-design": {
          title: "Branding & Identity",
          shortDescription:
            "Distinct visual identities that give brands an unmistakable voice.",
          fullDescription:
            "From bespoke typography and logos to comprehensive design systems, we craft brands people remember.",
          metricsHighlight: "Bespoke Design Systems",
          techTag: "Visual Systems • Bespoke Type",
          deliverables: [
            "Logomark & Typography",
            "Visual Design System",
            "Brand Guidelines",
            "Digital & Print Assets",
          ],
        },
        "social-media-management": {
          title: "Social Media",
          shortDescription:
            "Editorial-grade content and active community growth.",
          fullDescription:
            "We turn casual scrollers into loyal customers with viral short-form video and high-retention storytelling.",
          metricsHighlight: "High-Retention Reach",
          techTag: "Short-Form Video • TikTok & IG",
          deliverables: [
            "Content Strategy & Calendars",
            "Reels & Short-Form Video",
            "Instagram & TikTok",
            "Community Moderation",
          ],
        },
        "digital-marketing": {
          title: "Digital Marketing",
          shortDescription:
            "Targeted paid ads and SEO funnels that drive real revenue.",
          fullDescription:
            "We design data-driven acquisition campaigns across Meta and Google, tracking every cent to actual revenue.",
          metricsHighlight: "Targeted ROAS",
          techTag: "Meta & Google Ads • Technical SEO",
          deliverables: [
            "Meta Ads (IG & FB)",
            "Google Search & P-Max",
            "Technical & On-Page SEO",
            "Attribution Analytics",
          ],
        },
        "ai-automation": {
          title: "AI & Automation",
          shortDescription:
            "Intelligent AI agents and workflow automations that save hours.",
          fullDescription:
            "We connect your tools and deploy autonomous AI helpers to handle repetitive tasks and customer queries 24/7.",
          metricsHighlight: "Autonomous Workflows",
          techTag: "Autonomous AI • Workflow Engine",
          deliverables: [
            "AI Customer Assistants",
            "Automated Workflows (n8n)",
            "CRM & Data Sync",
            "Custom AI Integrations",
          ],
        },
        "photo-video-production": {
          title: "Photo & Video",
          shortDescription:
            "Cinema-grade photography and films that give products luxury status.",
          fullDescription:
            "From studio lighting to on-location cinema cameras, our production team crafts visuals that elevate your brand.",
          metricsHighlight: "Cinema 4K/6K Video",
          techTag: "Cinema 4K/6K • Commercial Art",
          deliverables: [
            "Studio Product Photos",
            "Commercial Brand Films",
            "Executive Interviews",
            "Drone Cinematography",
          ],
        },
      },
    },
    process: {
      badge: "METHODOLOGY",
      title: "Our Process.",
      subtitle:
        "A structured, 5-stage sprint model designed to eliminate guesswork, maintain clear momentum, and ship high-performance digital flagships on time.",
      keyDeliverables: "Key Deliverables",
      stages: {
        "01": {
          title: "Discover",
          tagline: "Listen & Understand",
          description:
            "We dig into your business, your customers, and your competition to uncover your real advantage.",
          duration: "Week 1",
          deliverables: [
            "Project Roadmap",
            "Audience Insights",
            "Competitor Audit",
          ],
        },
        "02": {
          title: "Strategize",
          tagline: "The Blueprint",
          description:
            "We map out the architecture, user journeys, messaging, and tech stack before writing a single line of code.",
          duration: "Week 2",
          deliverables: [
            "Sitemap & Flows",
            "Tech Architecture",
            "Content Direction",
          ],
        },
        "03": {
          title: "Create",
          tagline: "Design That Moves",
          description:
            "We design distinct visual identities, high-fidelity prototypes, and fluid interactive experiences.",
          duration: "Weeks 3 — 4",
          deliverables: [
            "Figma Prototypes",
            "Design System",
            "Art Direction",
          ],
        },
        "04": {
          title: "Develop",
          tagline: "Clean, Fast Code",
          description:
            "We build with Next.js, TypeScript, and Three.js — creating lightweight, accessible, sub-second platforms.",
          duration: "Weeks 5 — 7",
          deliverables: [
            "Production Codebase",
            "CMS Integration",
            "Core Web Vitals 99+",
          ],
        },
        "05": {
          title: "Launch & Grow",
          tagline: "Go-to-Market",
          description:
            "Zero-downtime deployment, team training, and continuous paid acquisition to drive immediate traction.",
          duration: "Continuous",
          deliverables: [
            "Live Platform",
            "Analytics & Tracking",
            "Ongoing Support",
          ],
        },
      },
      ctaCard: {
        badge: "START A SPRINT",
        reviewTime: "24h Review",
        title: "Ready to Build?",
        description:
          "Tell us about your objectives. We will review your project brief, assemble the right senior team, and prepare a detailed roadmap within 24 hours.",
        button: "Submit Project Brief",
        footerNote: "Direct partner access • Zero obligations",
      },
    },
    about: {
      badge: "ABOUT KONTRAST",
      headlinePart1: "More than an agency.",
      headlineUnderline: "Your partner",
      headlinePart2: "in digital growth.",
      desc1:
        "We believe great work happens when bold design, clean code, and commercial strategy operate together from day one.",
      desc2:
        "Based in Tunis and working worldwide, we build digital flagships that make brands impossible to ignore and engineered to convert.",
      readStory: "Read our story & principles",
      stats: [
        { value: "100%", label: "Custom Architecture" },
        { value: "1:1", label: "Direct Partner Focus" },
        { value: "< 1s", label: "Page Load Speed" },
        { value: "24h", label: "Brief Response Time" },
      ],
    },
    whyUs: {
      badge: "WHY KONTRAST",
      title: "The Standard.",
      subtitle:
        "Boutique agility combined with senior engineering rigor. Direct partner access, lightning turnaround, and zero layers of bureaucracy.",
      commitmentPills: [
        "100% Bespoke Craft",
        "Sub-Second Speed",
        "1:1 Senior Partners",
        "Zero Legacy Debt",
      ],
      hoverNotice: "Hover over any card to pause",
      pillars: {
        "01": {
          headline: "Distinct & Bespoke",
          description:
            "No generic templates or off-the-shelf themes. Every brand identity, interface, and motion element is crafted from scratch to stand out.",
          stat: "100%",
          statLabel: "Custom Design",
          title: "Creative Architecture",
        },
        "02": {
          headline: "Sub-Second Performance",
          description:
            "Modern Next.js, Three.js WebGL, and optimized rendering. Lightning-fast load times, flawless responsiveness, and 99+ Core Web Vitals.",
          stat: "< 1s",
          statLabel: "Load Speed",
          title: "Technical Excellence",
        },
        "03": {
          headline: "Senior Talent Only",
          description:
            "Work directly with senior designers and software architects. Zero junior handoffs, account manager middlemen, or bureaucratic delays.",
          stat: "1:1",
          statLabel: "Direct Partner Focus",
          title: "Direct Access",
        },
        "04": {
          headline: "Rapid Sprint Cycles",
          description:
            "Agile 2-week delivery sprints engineered to eliminate bloat, test core assumptions, and ship high-impact digital experiences on schedule.",
          stat: "14d",
          statLabel: "Sprint Cadence",
          title: "High Velocity",
        },
        "05": {
          headline: "Zero Legacy Tech Debt",
          description:
            "Clean, strictly typed TypeScript codebases with modular component architectures that allow rapid feature iteration and painless scaling.",
          stat: "0%",
          statLabel: "Legacy Debt",
          title: "Modern Architecture",
        },
        "06": {
          headline: "Open Collaboration",
          description:
            "Live staging previews, shared roadmap trackers, and direct communication channels. Complete visibility across every stage of development.",
          stat: "24/7",
          statLabel: "Live Visibility",
          title: "Radical Transparency",
        },
      },
    },
    finalCta: {
      badge: "START A PROJECT",
      title: "Let's build something that moves your business forward.",
      subtitle:
        "Have an idea, a project, or a business ready to grow? Let's make it happen.",
      servicesLabel: "Select Services",
      budgetLabel: "Estimated Budget",
      namePlaceholder: "Your Name *",
      emailPlaceholder: "Email Address *",
      messagePlaceholder: "Tell us briefly about the project...",
      buttonSubmit: "Start a Project",
      buttonSending: "Sending...",
      messageSentTitle: "Message Received.",
      messageSentDesc:
        "We will review your brief and get back to you within 24 hours.",
      sendAnother: "Send another message",
      directContactTitle: "DIRECT CONTACT",
      talkToPartner: "Talk to a partner.",
    },
    footer: {
      agencyDesc:
        "Digital growth partner based in Tunis. Crafting websites, brands, and AI automations for ambitious companies worldwide.",
      navTitle: "Navigation",
      servicesTitle: "Services",
      connectTitle: "Connect",
      rights: "All rights reserved.",
      backToTop: "BACK TO TOP",
    },
    aboutPage: {
      badge: "THE STUDIO",
      headlinePart1: "Crafted in Tunis.",
      headlineUnderline: "Built for the world.",
      leadText:
        "We are a boutique studio combining art direction with software engineering. We build digital flagships that help brands stand out and grow.",
      subText:
        "From our studio in Tunis, we collaborate seamlessly with clients across North Africa, Europe, the GCC, and North America.",
      disciplinesTitle: "Disciplines",
      disciplines: [
        {
          role: "Creative Direction",
          desc: "Brand identity, typography, and visual systems.",
        },
        {
          role: "Software Architecture",
          desc: "Next.js, Three.js, and serverless engineering.",
        },
        {
          role: "Growth Strategy",
          desc: "Paid media funnels and conversion rate optimization.",
        },
        {
          role: "AI & Automation",
          desc: "Autonomous workflow pipelines and custom LLM tools.",
        },
      ],
      ctaTitle: "Have a project in mind?",
      ctaSub: "We take on a limited number of clients each quarter.",
      ctaButton: "Start a Project",
    },
    servicesPage: {
      badge: "CAPABILITIES",
      title: "Services.",
      subtitle:
        "Everything ambitious brands need to launch, scale, and automate.",
      inquireFor: "Inquire for",
    },
    contactPage: {
      badge: "START A CONVERSATION",
      title: "Contact.",
      subtitle:
        "Tell us about your objectives. We will review your brief within 24 hours.",
      servicesLabel: "Services",
      budgetLabel: "Estimated Budget",
      namePlaceholder: "Your Name *",
      emailPlaceholder: "Email Address *",
      messagePlaceholder: "Tell us about the project...",
      buttonSubmit: "Submit Project Brief",
      buttonSending: "Sending...",
      messageSentTitle: "Message Sent.",
      messageSentDesc:
        "A partner will review your project and reply within 24 hours.",
      sendAnother: "Send another message",
      coordinatesTitle: "COORDINATES",
      studioTitle: "Tunis Studio",
      hours: "Mon — Fri: 09:00 — 18:30 (GMT+1)",
    },
  },
  fr: {
    nav: {
      services: "Services",
      process: "Méthodologie",
      whyUs: "Pourquoi Nous",
      about: "À Propos",
      contact: "Contact",
      letsTalk: "Discutons",
    },
    hero: {
      weBuild: "Nous créons",
      digital: "des expériences",
      experiences: "numériques",
      thatMove: "qui propulsent",
      businessesForward: "votre entreprise.",
      subtext:
        "De l'identité de marque aux plateformes web sur mesure et stratégies d'acquisition, nous transformons vos ambitions en croissance mesurable.",
      exploreServices: "Explorer nos Services",
      startProject: "Démarrer un Projet",
      scroll: "DÉFILER",
    },
    services: {
      badge: "SERVICES",
      title: "Notre expertise.",
      subtitle:
        "Six piliers de croissance conçus pour propulser les marques modernes, surpasser la concurrence et générer un retour sur investissement tangible.",
      includedDeliverables: "Livrables Inclus",
      inquireAbout: "Demander ce service",
      needTailored: "Besoin d'un accompagnement sur mesure ou multi-expertises ?",
      exploreAll: "Découvrir nos 6 expertises complètes",
      items: {
        "web-development": {
          title: "Développement Web",
          shortDescription:
            "Sites web et applications ultra-rapides conçus avec Next.js.",
          fullDescription:
            "Nous concevons des plateformes digitales sur mesure avec des temps de chargement ultra-rapides, des interactions fluides et une architecture pérenne.",
          metricsHighlight: "Performance 99+",
          techTag: "Next.js 16 • React 19 • WebGL",
          deliverables: [
            "Next.js & React sur-mesure",
            "Sites corporate & vitrines",
            "E-Commerce Headless",
            "Applications Web & Portails",
          ],
        },
        "branding-graphic-design": {
          title: "Branding & Identité",
          shortDescription:
            "Identités visuelles marquantes qui confèrent une présence unique.",
          fullDescription:
            "De la typographie singulière aux logos distinctifs et systèmes graphiques complets, nous bâtissons des identités fortes et mémorables.",
          metricsHighlight: "Design Systems Sur Mesure",
          techTag: "Systèmes Visuels • Typographie",
          deliverables: [
            "Logotype & Typographie",
            "Design System Global",
            "Charte Graphique Complète",
            "Supports Digitaux & Print",
          ],
        },
        "social-media-management": {
          title: "Réseaux Sociaux",
          shortDescription:
            "Contenu éditorial premium et engagement communautaire ciblé.",
          fullDescription:
            "Nous transformons votre audience en clients fidèles grâce à des vidéos courtes virales et une narration visuelle à fort taux de rétention.",
          metricsHighlight: "Forte Rétention",
          techTag: "Vidéos Courtes • TikTok & IG",
          deliverables: [
            "Stratégie & Calendrier",
            "Reels & Formats Courts",
            "Instagram & TikTok",
            "Modération Communautaire",
          ],
        },
        "digital-marketing": {
          title: "Marketing Digital",
          shortDescription:
            "Campagnes payantes et tunnels SEO axés sur la rentabilité.",
          fullDescription:
            "Nous déployons des campagnes d'acquisition basées sur la data via Meta et Google, mesurant chaque investissement jusqu'au chiffre d'affaires réel.",
          metricsHighlight: "ROAS Optimisé",
          techTag: "Meta & Google Ads • SEO Technique",
          deliverables: [
            "Publicités Meta (IG & FB)",
            "Google Ads & Search",
            "SEO Technique & Sémantique",
            "Analytique & Attribution",
          ],
        },
        "ai-automation": {
          title: "IA & Automatisation",
          shortDescription:
            "Agents d'IA intelligents et workflows qui libèrent vos équipes.",
          fullDescription:
            "Nous interconnectons vos outils métier et déployons des agents IA autonomes pour traiter les requêtes clients et automatiser vos tâches 24h/24.",
          metricsHighlight: "Workflows Autonomes",
          techTag: "IA Autonome • Moteur de Flux",
          deliverables: [
            "Assistants Clients IA",
            "Automatisations (n8n)",
            "Synchronisation CRM & Données",
            "Intégrations IA Personnalisées",
          ],
        },
        "photo-video-production": {
          title: "Photo & Vidéo",
          shortDescription:
            "Productions audiovisuelles cinématographiques valorisant votre marque.",
          fullDescription:
            "De l'éclairage de studio aux caméras cinéma sur site, notre équipe de production réalise des visuels d'exception qui subliment vos produits.",
          metricsHighlight: "Vidéo Cinéma 4K/6K",
          techTag: "Caméras Cinéma • Studio & Drone",
          deliverables: [
            "Photos Produits Studio",
            "Films de Marque",
            "Interviews de Dirigeants",
            "Prises de Vue par Drone",
          ],
        },
      },
    },
    process: {
      badge: "MÉTHODOLOGIE",
      title: "Notre Processus.",
      subtitle:
        "Un modèle de sprints en 5 étapes pensé pour éliminer les incertitudes, garantir un rythme soutenu et livrer dans les délais convenus.",
      keyDeliverables: "Livrables Clés",
      stages: {
        "01": {
          title: "Découverte",
          tagline: "Écoute & Analyse",
          description:
            "Nous analysons votre modèle d'affaires, vos clients et vos concurrents pour révéler votre réel avantage concurrentiel.",
          duration: "Semaine 1",
          deliverables: [
            "Feuille de Route",
            "Étude d'Audience",
            "Audit Concurrentiel",
          ],
        },
        "02": {
          title: "Stratégie",
          tagline: "Le Plan d'Action",
          description:
            "Nous structurons l'architecture, les parcours utilisateurs et le stack technologique avant d'écrire la moindre ligne de code.",
          duration: "Semaine 2",
          deliverables: [
            "Arborescence & Flux",
            "Architecture Technique",
            "Stratégie de Contenu",
          ],
        },
        "03": {
          title: "Création",
          tagline: "Design d'Impact",
          description:
            "Nous concevons des identités visuelles singulières, des maquettes haute fidélité et des interactions fluides.",
          duration: "Semaines 3 — 4",
          deliverables: [
            "Prototypes Figma",
            "Design System",
            "Direction Artistique",
          ],
        },
        "04": {
          title: "Développement",
          tagline: "Code Propre & Rapide",
          description:
            "Développement Next.js, TypeScript et Three.js garantissant une accessibilité irréprochable et des temps de chargement éclair.",
          duration: "Semaines 5 — 7",
          deliverables: [
            "Codebase de Production",
            "Intégration CMS",
            "Score Core Web Vitals 99+",
          ],
        },
        "05": {
          title: "Lancement & Croissance",
          tagline: "Mise en Marché",
          description:
            "Mise en ligne sans interruption, formation des équipes et activation des leviers d'acquisition pour des résultats immédiats.",
          duration: "En Continu",
          deliverables: [
            "Plateforme en Ligne",
            "Tableaux de Bord",
            "Support & Évolution",
          ],
        },
      },
      ctaCard: {
        badge: "DÉMARRER UN SPRINT",
        reviewTime: "Réponse en 24h",
        title: "Prêt à construire ?",
        description:
          "Présentez-nous vos objectifs. Nous analysons votre brief, mobilisons l'équipe senior adéquate et préparons un plan d'action en 24h.",
        button: "Soumettre un Brief",
        footerNote: "Accès direct aux associés • Sans engagement",
      },
    },
    about: {
      badge: "À PROPOS DE KONTRAST",
      headlinePart1: "Plus qu'une agence.",
      headlineUnderline: "Votre partenaire",
      headlinePart2: "de croissance.",
      desc1:
        "Nous croyons que l'excellence naît de la convergence entre design audacieux, rigueur d'ingénierie et stratégie commerciale.",
      desc2:
        "Établis à Tunis avec un rayonnement international, nous créons des plateformes qui captivent et convertissent.",
      readStory: "Découvrir notre vision & nos principes",
      stats: [
        { value: "100%", label: "Architecture Sur Mesure" },
        { value: "1:1", label: "Accès Direct aux Associés" },
        { value: "< 1s", label: "Vitesse de Chargement" },
        { value: "24h", label: "Délai de Réponse" },
      ],
    },
    whyUs: {
      badge: "POURQUOI KONTRAST",
      title: "Notre Standard.",
      subtitle:
        "L'agilité d'un studio d'élite alliée à une rigueur d'ingénierie senior. Interlocuteurs directs, exécution rapide et zéro bureaucratie.",
      commitmentPills: [
        "100% Sur Mesure",
        "Vitesse Éclair (< 1s)",
        "Associés Seniors 1:1",
        "Zéro Dette Technique",
      ],
      hoverNotice: "Survolez une carte pour suspendre le défilement",
      pillars: {
        "01": {
          headline: "Distinct & Unique",
          description:
            "Aucun template préfabriqué. Chaque identité, interface et animation est conçue sur mesure pour démarquer votre marque.",
          stat: "100%",
          statLabel: "Création Sur Mesure",
          title: "Architecture Créative",
        },
        "02": {
          headline: "Performance Sous la Seconde",
          description:
            "Next.js, Three.js WebGL et assets optimisés. Vitesse d'affichage ultra-rapide et score 99+ Core Web Vitals.",
          stat: "< 1s",
          statLabel: "Temps de Chargement",
          title: "Excellence Technique",
        },
        "03": {
          headline: "Talents Seniors Uniquement",
          description:
            "Travaillez directement avec nos directeurs artistiques et architectes logiciels. Aucun intermédiaire junior ni commercial.",
          stat: "1:1",
          statLabel: "Partenaires Dédiés",
          title: "Accès Direct",
        },
        "04": {
          headline: "Cycles de Sprint Courts",
          description:
            "Sprints de 2 semaines pensés pour éliminer le superflu, valider les étapes clés et lancer dans les délais.",
          stat: "14j",
          statLabel: "Cadence de Sprint",
          title: "Haute Vélocité",
        },
        "05": {
          headline: "Zéro Dette Technique",
          description:
            "Codebases TypeScript modernes et composants modulaires assurant des évolutions sereines et durables.",
          stat: "0%",
          statLabel: "Dette Technique",
          title: "Stack Moderne",
        },
        "06": {
          headline: "Collaboration Ouverte",
          description:
            "Environnements de prévisualisation en direct, suivi clair et canaux de communication directs (Slack/WhatsApp).",
          stat: "24/7",
          statLabel: "Visibilité Totale",
          title: "Transparence Totale",
        },
      },
    },
    finalCta: {
      badge: "LANCER UN PROJET",
      title: "Construisons ce qui fera grandir votre entreprise.",
      subtitle:
        "Vous avez une idée, une ambition ou une plateforme à réinventer ? Donnons-lui vie.",
      servicesLabel: "Sélectionnez vos besoins",
      budgetLabel: "Budget estimé",
      namePlaceholder: "Votre Nom *",
      emailPlaceholder: "Adresse E-mail *",
      messagePlaceholder: "Présentez brièvement vos objectifs...",
      buttonSubmit: "Démarrer un Projet",
      buttonSending: "Envoi en cours...",
      messageSentTitle: "Message Reçu.",
      messageSentDesc:
        "Un associé analysera votre projet et vous répondra sous 24h.",
      sendAnother: "Envoyer un autre message",
      directContactTitle: "CONTACT DIRECT",
      talkToPartner: "Parlez à un associé.",
    },
    footer: {
      agencyDesc:
        "Partenaire de croissance digitale basé à Tunis. Nous concevons sites web, marques et automatisations pour entreprises ambitieuses.",
      navTitle: "Navigation",
      servicesTitle: "Services",
      connectTitle: "Réseaux",
      rights: "Tous droits réservés.",
      backToTop: "RETOUR EN HAUT",
    },
    aboutPage: {
      badge: "LE STUDIO",
      headlinePart1: "Conçu à Tunis.",
      headlineUnderline: "Déployé pour le monde.",
      leadText:
        "Nous sommes un studio d'élite alliant direction artistique exigeante et ingénierie logicielle de pointe. Nous concevons des plateformes numériques emblématiques qui distinguent votre marque et accélèrent votre croissance.",
      subText:
        "Depuis notre studio à Tunis (Les Berges du Lac II), nous accompagnons avec fluidité des clients en Afrique du Nord, en Europe, dans le Golfe et en Amérique du Nord.",
      disciplinesTitle: "Nos Disciplines",
      disciplines: [
        {
          role: "Direction Artistique",
          desc: "Identité de marque, typographie sur-mesure et systèmes visuels.",
        },
        {
          role: "Architecture Logicielle",
          desc: "Next.js, Three.js et ingénierie cloud sans serveur.",
        },
        {
          role: "Stratégie de Croissance",
          desc: "Tunnels d'acquisition payante et optimisation de la conversion.",
        },
        {
          role: "IA & Automatisation",
          desc: "Pipelines de travail autonomes et intégration de modèles LLM.",
        },
      ],
      ctaTitle: "Vous avez un projet en tête ?",
      ctaSub: "Nous sélectionnons un nombre restreint de partenaires par trimestre.",
      ctaButton: "Démarrer un Projet",
    },
    servicesPage: {
      badge: "EXPERTISES",
      title: "Nos Services.",
      subtitle:
        "Tout ce dont les marques ambitieuses ont besoin pour lancer, développer et automatiser leurs opérations.",
      inquireFor: "Demander un accompagnement en",
    },
    contactPage: {
      badge: "DÉMARRER UNE CONVERSATION",
      title: "Contact.",
      subtitle:
        "Présentez-nous vos objectifs. Un associé étudiera votre brief et vous répondra sous 24 heures.",
      servicesLabel: "Services souhaités",
      budgetLabel: "Budget Estimé",
      namePlaceholder: "Votre Nom *",
      emailPlaceholder: "Adresse Email *",
      messagePlaceholder: "Parlez-nous brièvement de votre projet...",
      buttonSubmit: "Envoyer le Brief",
      buttonSending: "Envoi en cours...",
      messageSentTitle: "Message Envoyé.",
      messageSentDesc:
        "Un associé étudiera votre projet et vous contactera dans les 24 heures.",
      sendAnother: "Envoyer un autre message",
      coordinatesTitle: "COORDONNÉES",
      studioTitle: "Studio Tunis",
      hours: "Lun — Ven : 09:00 — 18:30 (GMT+1)",
    },
  },
  tn: {
    nav: {
      services: "الخدمات",
      process: "المنهجية",
      whyUs: "علاش أحنا",
      about: "شكون أحنا",
      contact: "اتصل بنا",
      letsTalk: "نحكيو",
    },
    hero: {
      weBuild: "نصنعو",
      digital: "تجارب",
      experiences: "رقمية",
      thatMove: "تطوّر وتكبّر",
      businessesForward: "مشروعك للقدام.",
      subtext:
        "من هوية بصرية قوية لمواقع وتطبيقات سريعة وحملات إشهار مدروسة، نرافقوك خطوة بخطوة باش تكبر وتوصل لأهدافك.",
      exploreServices: "اكتشف خدماتنا",
      startProject: "ابدأ مشروعك",
      scroll: "هبّط وشوف",
    },
    services: {
      badge: "خدماتنا",
      title: "شنوة نخدمو.",
      subtitle:
        "6 مجالات رقمية متكاملة تضمنلك منصة سريعة، هوية تفرّقك على المنافسين، ومردودية حقيقية لمشروعك.",
      includedDeliverables: "شنوة تستلم بالتحديد",
      inquireAbout: "استفسر على الخدمة",
      needTailored: "تحب خدمة مفصلة على قياسك ؟",
      exploreAll: "شوف الخدمات الستة بالتفصيل",
      items: {
        "web-development": {
          title: "تطوير المواقع والتطبيقات",
          shortDescription:
            "مواقع وتطبيقات ويب سريعة برشا ومخدومة بـ Next.js.",
          fullDescription:
            "نطورو منصات وتطبيقات ويب سريعة برشا بمقاييس عالمية، تفاعل سلس وهندسة برمجية قوية بـ Next.js.",
          metricsHighlight: "سرعة استثنائية +99",
          techTag: "Next.js 16 • React 19 • WebGL",
          deliverables: [
            "مواقع وتطبيقات Next.js & React",
            "مواقع شركات وبورتفوليو احترافي",
            "متاجر إلكترونية سريعة",
            "بوابات رقمية ولوحات تحكم",
          ],
        },
        "branding-graphic-design": {
          title: "الهوية البصرية والديزاين",
          shortDescription:
            "هوية فريدة وتصاميم تخلي اسمك يعلّق في بال الناس.",
          fullDescription:
            "من التايبوغرافي والشعار المتقن حتى لنظام الهوية البصرية الكامل، نصنعو لعلامتك طابع يترسخ في البال.",
          metricsHighlight: "تصميم احترافي من الصفر",
          techTag: "هوية بصرية • تايبوغرافي مخصص",
          deliverables: [
            "شعار وتايبوغرافي مخصصة",
            "نظام تصميم بصري شامل",
            "دليل الهوية البصرية (Brand Guidelines)",
            "تصاميم رقمية ومطبوعات",
          ],
        },
        "social-media-management": {
          title: "إدارة السوشيال ميديا",
          shortDescription:
            "محتوى احترافي وفيديوهات قصيرة تجيبلك تفاعل ومتابعين حقيقيين.",
          fullDescription:
            "نحولو مستخدمي السوشيال ميديا لحرفاء وفيين من خلال محتوى فيديو قصير (Reels & TikTok) يشد الانتباه.",
          metricsHighlight: "نسبة مشاهدة ومتابعة عالية",
          techTag: "فيديوهات ريلز • تيك توك وإنستغرام",
          deliverables: [
            "استراتيجية وجدول محتوى",
            "فيديوهات قصيرة ريلز وتيك توك",
            "إدارة حسابات Instagram & TikTok",
            "تفاعل وإدارة المجتمع",
          ],
        },
        "digital-marketing": {
          title: "التسويق الرقمي الممول",
          shortDescription:
            "حملات إعلانية في ميتا وجوجل وسيو (SEO) موجهة باش تجيب مبيعات حقيقية.",
          fullDescription:
            "نصممو حملات إشهارية موجهة ومدروسة على Meta و Google مع تحسين محركات البحث SEO، وتتبع كل مليم يصنعلك مرابيح.",
          metricsHighlight: "أعلى عائد استثماري (ROAS)",
          techTag: "إعلانات ميتا وجوجل • سيو تقني",
          deliverables: [
            "إعلانات Meta (فيسبوك وإنستغرام)",
            "إعلانات بحث Google & Performance Max",
            "تحسين محركات البحث SEO التقني",
            "لوحات قياس العائد على الإشهار",
          ],
        },
        "ai-automation": {
          title: "الذكاء الاصطناعي والأوتوماسيون",
          shortDescription:
            "مساعدين أذكياء يخدمو 24/7 وأوتوماسيون تريحك من الخدمة المكررة.",
          fullDescription:
            "نربطو أدواتك اليومية ونركبولك مساعدين ذكاء اصطناعي يجاوبو حرفائك ويقضيو المهام المتكررة 24 ساعة على 24.",
          metricsHighlight: "ربح وقت حتى 80%",
          techTag: "وكلاء ذكاء اصطناعي • أوتوماسيون",
          deliverables: [
            "مساعدين أذكياء لخدمة الحرفاء",
            "أوتوماتيزاسيون مسارات العمل (n8n)",
            "ربط الـ CRM وقواعد البيانات",
            "تطبيقات ذكاء اصطناعي مفصلة",
          ],
        },
        "photo-video-production": {
          title: "التصوير الفوتوغرافي والفيديو",
          shortDescription:
            "تصوير سينمائي احترافي يرفع من قيمة البراند والمنتوجات متاعك.",
          fullDescription:
            "من إضاءة الأستوديو لكاميرات السينما، فريق الإنتاج متاعنا يصورلك منتجاتك وشركتك بجودة تخلي علامتك فاخرة وتفرق.",
          metricsHighlight: "جودة سينمائية 4K/6K",
          techTag: "كاميرات سينما • استوديو ودرون",
          deliverables: [
            "تصوير منتجات احترافي بالأستوديو",
            "أفلام إشهارية للعلامة التجارية",
            "مقابلات احترافية للإدارة",
            "تصوير جوي بالدرون بدقة 4K/6K",
          ],
        },
      },
    },
    process: {
      badge: "المنهجية",
      title: "كيفاش نخدمو.",
      subtitle:
        "منهجية سباقات سريعة في 5 مراحل واضحة، من غير تضييع وقت، تضمنلك تخرج بمشروع ناجح في الوقت المضبوط.",
      keyDeliverables: "أهم المخرجات",
      stages: {
        "01": {
          title: "الفهم والاكتشاف",
          tagline: "نسمعوك ونحللو السوق",
          description:
            "نقعدو معاك، نفهمو طبيعة مشروعك، شكون هما حرفائك، وشنوة اللي يفرّقك على المنافسين في السوق.",
          duration: "الجمعة 1",
          deliverables: [
            "خارطة طريق المشروع",
            "تحليل الحرفاء المستهدفين",
            "دراسة المنافسين",
          ],
        },
        "02": {
          title: "التخطيط والاستراتيجية",
          tagline: "مخطط البناء",
          description:
            "نحددو معمارية الموقع، رحلة المستخدم، المحتوى والتقنيات اللازمة قبل ما نكتبو حتى سطر كود.",
          duration: "الجمعة 2",
          deliverables: [
            "مخطط الصفحات والتدفق",
            "المعمارية التقنية",
            "استراتيجية المحتوى",
          ],
        },
        "03": {
          title: "الديزاين والإبداع",
          tagline: "تصميم حيوي وعصري",
          description:
            "نصممو نماذج تفاعلية كاملة على فيغما وهوية بصرية مدروسة تخلي التجربة ممتعة للعين وساهلة في الاستعمال.",
          duration: "الجمعة 3 — 4",
          deliverables: [
            "نماذج فيغما التفاعلية",
            "ديزاين سيستيم كامل",
            "إدارة فنية متناسقة",
          ],
        },
        "04": {
          title: "البرمجة والتطوير",
          tagline: "كود سريع ونظيف",
          description:
            "نبرمجولك المنصة بـ Next.js و TypeScript مع أحدث تقنيات الويب، خفيفة، سريعة وتخدم على التيليفونات الكل.",
          duration: "الجمعة 5 — 7",
          deliverables: [
            "كود جاهز للإنتاج",
            "لوحة تحكم سهلة (CMS)",
            "أعلى سرعة تحميل 99+",
          ],
        },
        "05": {
          title: "الإطلاق والمتابعة",
          tagline: "الانطلاق في السوق",
          description:
            "نحطو مشروعك أونلاين، ندرّبو فريقك، ونطلقو حملات التسويق باش تبدا تجني الثمار من النهار الأول.",
          duration: "متواصل",
          deliverables: [
            "منصة لايف تخدم بامتياز",
            "لوحات قياس وتحليل الأرقام",
            "دعم فني وتطوير مستمر",
          ],
        },
      },
      ctaCard: {
        badge: "ابدأ توّا",
        reviewTime: "رد في 24 ساعة",
        title: "جاهز باش تبدا مشروعك ؟",
        description:
          "احكيلنا على فكرتك وأهدافك. ندرسو طلبك ونحضرولك خطة عمل واضحة وفريق خبير في ظرف 24 ساعة.",
        button: "ابعثلنا تفاصيل مشروعك",
        footerNote: "اتصال مباشر مع الشركاء • من غير أي التزام",
      },
    },
    about: {
      badge: "شكون KONTRAST",
      headlinePart1: "أكثر من مجرد وكالة.",
      headlineUnderline: "شريكك المباشر",
      headlinePart2: "في النجاح الرقمي.",
      desc1:
        "نآمنو اللي الخدمة الصحيحة تجي وقت اللي يلتقي ديزاين مزيان مع كود نظيف واستراتيجية بيع وتطوير قوية.",
      desc2:
        "مقرنا في تونس العاصمة ونخدمو مع شركات ورواد أعمال في تونس، الخليج، أوروبا وأمريكا.",
      readStory: "اكتشف مبادئنا وقصتنا",
      stats: [
        { value: "100%", label: "تطوير مخصص من الصفر" },
        { value: "1:1", label: "متابعة مباشرة من الشركاء" },
        { value: "< 1s", label: "سرعة خيالية أقل من ثانية" },
        { value: "24h", label: "إجابة سريعة على طلباتكم" },
      ],
    },
    whyUs: {
      badge: "علاش KONTRAST",
      title: "معاييرنا.",
      subtitle:
        "سرعة ومرونة مع خبرة هندسية عالية. تحكي وتخدم ديراكت مع ناس خبراء، من غير وسطاء ولا تضييع وقت.",
      commitmentPills: [
        "خدمة 100% مخصصة",
        "سرعة خيالية أقل من ثانية",
        "شركاء كبار يتبعو معاك",
        "تقنيات حديثة من غير تعقيد",
      ],
      hoverNotice: "حط الماوس فوق أي كارت باش تحبس الحركة",
      pillars: {
        "01": {
          headline: "تصاميم فريدة ومميزة",
          description:
            "ما نستعملوش قوالب جاهزة. كل ديزاين وكل حركة تترسم وتتخدم من الصفر باش تكون انت المميز في مجالك.",
          stat: "100%",
          statLabel: "ديزاين مخصص",
          title: "إبداع معماري",
        },
        "02": {
          headline: "سرعة فائقة أقل من ثانية",
          description:
            "نخدمو بأحدث التقنيات Next.js و Three.js WebGL باش يكون موقعك سريع، خفيف وما يضيعلك حتى حريف.",
          stat: "< 1s",
          statLabel: "سرعة التحميل",
          title: "امتياز تقني",
        },
        "03": {
          headline: "تخدم مع الخبراء ديراكت",
          description:
            "متابعتك تكون مباشرة مع مدراء الديزاين ومهندسي البرمجة. ما ثماش وسطاء ولا متدربين يخدمو على مشروعك.",
          stat: "1:1",
          statLabel: "متابعة حصرية",
          title: "اتصال مباشر",
        },
        "04": {
          headline: "سرعة في الإنجاز (سباقات)",
          description:
            "نخدمو بسباقات مركزة متاع جمعتين باش نحققو نتائج حقيقية ونخرجو بالمنصة في وقت قياسي.",
          stat: "14j",
          statLabel: "مدة كل سباق",
          title: "سرعة فائقة",
        },
        "05": {
          headline: "تقنيات المستقبل",
          description:
            "كود مكتوب بـ TypeScript نظيف ومنظم يخلي موقعك ساهل في التعديل ويكبر مع كبران شركتك من غير مشاكل.",
          stat: "0%",
          statLabel: "مشاكل تقنية قديمة",
          title: "أحدث التقنيات",
        },
        "06": {
          headline: "شفافية وتواصل دائم",
          description:
            "تشوف تقدم المشروع لحظة بلحظة على روابط حية، ومعاك قناة تواصل مباشرة (واتساب/سلاك) نجاوبوك فيها ديما.",
          stat: "24/7",
          statLabel: "متابعة واضحة",
          title: "شفافية كاملة",
        },
      },
    },
    finalCta: {
      badge: "ابدأ مشروعك",
      title: "خلّينا نبنيو حاجة تفرّقك وتطوّر مشروعك بالحق.",
      subtitle:
        "عندك فكرة، مشروع جديد، والا تحب تطور شركتك ؟ مرحبا بيك، خلينا نحققوها مع بعضنا.",
      servicesLabel: "شنوة الخدمات اللي تستحقها ؟",
      budgetLabel: "الميزانية التقريبية",
      namePlaceholder: "اسمك الكريم *",
      emailPlaceholder: "البريد الإلكتروني *",
      messagePlaceholder: "احكيلنا باختصار على مشروعك...",
      buttonSubmit: "ارسل طلبك",
      buttonSending: "قاعد يتبعت...",
      messageSentTitle: "وصلنا ميساجك بنجاح.",
      messageSentDesc:
        "شريك من الفريق باش يدرس طلبك ويتصل بيك في ظرف 24 ساعة.",
      sendAnother: "ارسل رسالة أخرى",
      directContactTitle: "اتصال مباشر",
      talkToPartner: "احكي مع شريك ديراكت.",
    },
    footer: {
      agencyDesc:
        "شريكك في التطور والنمو الرقمي في تونس والعالم. نصنعو مواقع، براندينغ وأوتوماسيون لشركات طموحة.",
      navTitle: "الأقسام",
      servicesTitle: "الخدمات",
      connectTitle: "تابعنا",
      rights: "جميع الحقوق محفوظة.",
      backToTop: "اطلع للفوق",
    },
    aboutPage: {
      badge: "الأستوديو",
      headlinePart1: "مصنوع في تونس.",
      headlineUnderline: "مخدوم للعالم.",
      leadText:
        "أحنا أستوديو يجمع بين قوة التصميم والهندسة البرمجية العالية. نصنعو منصات رقمية مميزة تعاون مشروعك باش يبرز ويكبر بطريقة واضحة.",
      subText:
        "من مقرنا في تونس (ضفاف البحيرة 2)، نخدمو بسلاسة مع حرفاء في تونس، شمال إفريقيا، أوروبا، دول الخليج، وأمريكا الشمالية.",
      disciplinesTitle: "المجالات والتخصصات",
      disciplines: [
        {
          role: "الإخراج الفني والتصميم",
          desc: "هوية بصرية، تايبوغرافي خاصة، ونظم تصميم متكاملة.",
        },
        {
          role: "الهندسة البرمجية",
          desc: "Next.js 16، WebGL و Three.js، وسيرفرات سريعة.",
        },
        {
          role: "استراتيجيات النمو",
          desc: "إعلانات موجهة، حملات تحويل، ومتابعة دقيقة للنتائج.",
        },
        {
          role: "الذكاء الاصطناعي والأوتوماتيزاسيون",
          desc: "أنظمة آلية توفر الوقت ومساعدين أذكياء يجاوبو حرفائك 24/7.",
        },
      ],
      ctaTitle: "عندك فكرة ولا مشروع في بالك ؟",
      ctaSub: "نقبلو عدد محدود من المشاريع كل فترة باش نضمنو أعلى معايير الجودة.",
      ctaButton: "ابدأ مشروعك",
    },
    servicesPage: {
      badge: "الخدمات والقدرات",
      title: "خدماتنا.",
      subtitle:
        "كل ما يلزم الشركات والمشاريع الطموحة باش تبدا، تكبر، وتخدم بأوتوماتيزاسيون حديثة.",
      inquireFor: "اطلب خدمة",
    },
    contactPage: {
      badge: "تواصل معنا",
      title: "اتصل بنا.",
      subtitle:
        "احكيلنا على أهدافك وتفاصيل مشروعك. شريك معانا باش يدرس طلبك ويرجعلك في أقل من 24 ساعة.",
      servicesLabel: "الخدمات اللي تستحقها",
      budgetLabel: "الميزانية التقديرية",
      namePlaceholder: "الاسم واللقب *",
      emailPlaceholder: "البريد الإلكتروني *",
      messagePlaceholder: "احكيلنا شوية على مشروعك...",
      buttonSubmit: "ابعث تفاصيل المشروع",
      buttonSending: "قاعد يتبعت...",
      messageSentTitle: "الميساج وصل بنجاح.",
      messageSentDesc:
        "شريك معانا باش يراجع مشروعك ويرجعلك في أقل من 24 ساعة.",
      sendAnother: "ابعث ميساج آخر",
      coordinatesTitle: "معلومات التواصل",
      studioTitle: "أستوديو تونس",
      hours: "من الإثنين للجمعة : 09:00 — 18:30 (توقيت تونس GMT+1)",
    },
  },
};
