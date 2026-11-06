export type Language = "en" | "fr";

export type PageKey =
  | "home"
  | "about"
  | "mission"
  | "education"
  | "faith"
  | "community"
  | "haiti"
  | "leadership"
  | "partnerships"
  | "news"
  | "getInvolved"
  | "donate"
  | "contact"
  | "taxStatus"
  | "privacy"
  | "terms";

export const routePaths: Record<PageKey, string> = {
  home: "/",
  about: "/about",
  mission: "/mission",
  education: "/education",
  faith: "/faith",
  community: "/community",
  haiti: "/haiti",
  leadership: "/leadership",
  partnerships: "/partnerships",
  news: "/news",
  getInvolved: "/get-involved",
  donate: "/donate",
  contact: "/contact",
  taxStatus: "/statut-fiscal",
  privacy: "/privacy",
  terms: "/terms",
};

export const pathToPage: Record<string, PageKey> = {
  ...Object.fromEntries(
    Object.entries(routePaths).map(([key, path]) => [path, key]),
  ),
  "/politique-de-confidentialite": "privacy",
  "/confidentialite": "privacy",
  "/privacy-policy": "privacy",
  "/conditions-utilisation": "terms",
  "/conditions-d-utilisation": "terms",
  "/terms-of-use": "terms",
  "/tax-status": "taxStatus",
  "/legal": "taxStatus",
  "/mentions-legales": "taxStatus",
  "/recus-fiscaux": "taxStatus",
  "/a-propos": "about",
  "/travaux": "haiti",
  "/travaux-en-cours": "haiti",
  "/travaux-en-cours/": "haiti",
  "/faire-un-don": "donate",
  "/blog": "news",
  "/actualites": "news",
  "/articles": "news",
  "/coin-de-la-fondatrice": "leadership",
  "/coindelafondatrice": "leadership",
  "/fondatrice": "leadership",
};

export type NavItem = { key: PageKey; label: Record<Language, string> };

export const primaryNav: NavItem[] = [
  { key: "about", label: { en: "About", fr: "À propos" } },
  { key: "education", label: { en: "Education", fr: "Éducation" } },
  { key: "haiti", label: { en: "Haiti", fr: "Haïti" } },
  { key: "partnerships", label: { en: "Partnerships", fr: "Partenariats" } },
  { key: "news", label: { en: "Blog & News", fr: "Blog & Actualités" } },
];

export const secondaryNav: NavItem[] = [
  { key: "mission", label: { en: "Our mission & vision", fr: "Mission & vision" } },
  { key: "faith", label: { en: "Faith & evangelism", fr: "Foi & évangélisation" } },
  { key: "community", label: { en: "Community transformation", fr: "Transformation communautaire" } },
  { key: "leadership", label: { en: "Our leadership", fr: "Notre équipe dirigeante" } },
  { key: "getInvolved", label: { en: "Get involved", fr: "Participer" } },
  { key: "donate", label: { en: "Donate", fr: "Faire un don" } },
  { key: "contact", label: { en: "Contact", fr: "Contact" } },
];

export const legalNav: NavItem[] = [
  { key: "taxStatus", label: { en: "Legal status & transparency", fr: "Statut juridique & transparence" } },
  { key: "privacy", label: { en: "Privacy policy", fr: "Politique de confidentialité" } },
  { key: "terms", label: { en: "Terms of use", fr: "Conditions d’utilisation" } },
];

export const pageLabels: Record<PageKey, Record<Language, string>> = {
  home: { en: "Home", fr: "Accueil" },
  about: { en: "About us", fr: "À propos" },
  mission: { en: "Our mission & vision", fr: "Mission & vision" },
  education: { en: "Education", fr: "Éducation" },
  faith: { en: "Faith & evangelism", fr: "Foi & évangélisation" },
  community: { en: "Community transformation", fr: "Transformation communautaire" },
  haiti: { en: "Haiti", fr: "Haïti" },
  leadership: { en: "Our leadership", fr: "Notre équipe dirigeante" },
  partnerships: { en: "Partnerships", fr: "Partenariats" },
  news: { en: "Blog & News", fr: "Blog & Actualités" },
  getInvolved: { en: "Get involved", fr: "Participer" },
  donate: { en: "Donate", fr: "Faire un don" },
  contact: { en: "Contact", fr: "Contact" },
  taxStatus: { en: "Legal status & transparency", fr: "Statut juridique & transparence" },
  privacy: { en: "Privacy policy", fr: "Politique de confidentialité" },
  terms: { en: "Terms of use", fr: "Conditions d’utilisation" },
};

export const ui = {
  en: {
    language: "Language",
    explore: "Explore",
    exploreLabel: "Explore all pages",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    readMore: "Read more",
    learnMore: "Learn more",
    getInvolved: "Get involved",
    donate: "Donate",
    contact: "Connect with us",
    homeLabel: "Blessed Vally Foundation home",
    footerLine: "Serving today. Educating tomorrow. Transforming generations.",
    footerNote: "A faith-driven foundation serving children, families and communities in the United States and Haiti through evangelism and concrete actions.",
    archive: "Archive",
    current: "Current focus",
    send: "Open your email app",
    email: "Email",
    formName: "Your name",
    formEmail: "Your email",
    formMessage: "How would you like to connect?",
    legal: "Website designed and developed by INFUSA (www.infusa.pro).",
  },
  fr: {
    language: "Langue",
    explore: "Explorer",
    exploreLabel: "Explorer toutes les pages",
    openMenu: "Ouvrir le menu",
    closeMenu: "Fermer le menu",
    readMore: "Lire la suite",
    learnMore: "En savoir plus",
    getInvolved: "Participer",
    donate: "Faire un don",
    contact: "Nous contacter",
    homeLabel: "Accueil de la Fondation Blessed Vally",
    footerLine: "Servir aujourd’hui. Éduquer demain. Transformer les générations.",
    footerNote: "Une fondation fondée sur la foi au service des enfants, des familles et des communautés aux États-Unis et en Haïti par l'évangélisation et l'action concrète.",
    archive: "Archives",
    current: "Priorité actuelle",
    send: "Ouvrir votre messagerie",
    email: "Courriel",
    formName: "Votre nom",
    formEmail: "Votre courriel",
    formMessage: "Comment souhaitez-vous entrer en contact ?",
    legal: "Site conçu et développé par INFUSA (www.infusa.pro).",
  },
} as const;

export type Pillar = {
  number: string;
  title: string;
  short: string;
  body: string;
  page: PageKey;
  accent: "coral" | "leaf" | "gold" | "ocean" | "ink";
};

export const pillars: Record<Language, Pillar[]> = {
  en: [
    {
      number: "01",
      title: "Faith & evangelism",
      short: "Rooted in Christ",
      body: "We proclaim the Gospel of Jesus Christ and win souls through practical deeds proving that Jesus is the only One in Whom we must place our trust.",
      page: "faith",
      accent: "coral",
    },
    {
      number: "02",
      title: "Christian education",
      short: "Schools & whole-person learning",
      body: "We envision Christian educational institutions combining academic rigor, godly character, leadership and faith in the United States and Haiti.",
      page: "education",
      accent: "leaf",
    },
    {
      number: "03",
      title: "Children & youth",
      short: "Investing in future generations",
      body: "We invest in children and youth through schooling, nutrition, moral guidance and vocational mentorship so they fulfill their God-given potential.",
      page: "education",
      accent: "gold",
    },
    {
      number: "04",
      title: "Community transformation",
      short: "Sustainable self-reliance",
      body: "We uplift communities through clean water autonomy, community lodging, agricultural self-sufficiency and local economic development.",
      page: "community",
      accent: "ocean",
    },
    {
      number: "05",
      title: "Humanitarian assistance",
      short: "Compassion in action",
      body: "We serve vulnerable families and children facing acute hardship with immediate practical relief, clean water, healthcare access and dignified shelter.",
      page: "haiti",
      accent: "ink",
    },
  ],
  fr: [
    {
      number: "01",
      title: "Foi & évangélisation",
      short: "Enracinés en Christ",
      body: "Gagner des âmes pour Christ à travers des activités concrètes prouvant que Jésus est le seul Homme en Qui nous devons nous confier.",
      page: "faith",
      accent: "coral",
    },
    {
      number: "02",
      title: "Éducation chrétienne",
      short: "Écoles & formation intégrale",
      body: "Implanter des établissements scolaires chrétiens d'excellence alliant rigueur académique, foi, caractère et discernement aux États-Unis et en Haïti.",
      page: "education",
      accent: "leaf",
    },
    {
      number: "03",
      title: "Enfants & jeunesse",
      short: "Investir dans l'avenir",
      body: "Accompagner les enfants et les jeunes par la scolarisation, la nutrition, l'éducation morale et le développement des compétences.",
      page: "education",
      accent: "gold",
    },
    {
      number: "04",
      title: "Transformation communautaire",
      short: "Autonomie & dignité",
      body: "Bâtir des solutions durables avec les familles : accès à l'eau potable, hébergement communautaire, agriculture et développement économique local.",
      page: "community",
      accent: "ocean",
    },
    {
      number: "05",
      title: "Assistance humanitaire",
      short: "La compassion en action",
      body: "Secourir avec dignité les personnes et enfants vulnérables par des actions concrètes : eau pure, soutien sanitaire, cantines et abris décents.",
      page: "haiti",
      accent: "ink",
    },
  ],
};

/* =============================================================================
   PROGRAMMES ET DOMAINES D'INTERVENTION CONCRETS (DIRECTIVE 4)
   ============================================================================= */
export interface ProgramDomain {
  id: string;
  number: string;
  title: Record<Language, string>;
  category: Record<Language, string>;
  description: Record<Language, string>;
  status: Record<Language, string>;
  statusType: "operational" | "development" | "preparation";
  pillarNumber: string;
  page: PageKey;
}

export const programDomains: ProgramDomain[] = [
  {
    id: "education-schools",
    number: "01",
    title: {
      fr: "Éducation et création d'écoles chrétiennes",
      en: "Education & Christian School Establishment",
    },
    category: {
      fr: "Éducation chrétienne",
      en: "Christian Education",
    },
    description: {
      fr: "Construction d'un campus éducatif R+1 à Brostage (Dondon) et projet d'écoles chrétiennes aux États-Unis et en Haïti pour former la jeunesse selon des valeurs académiques et bibliques élevées.",
      en: "Construction of a two-story educational campus in Brostage (Dondon) and plans for Christian schools in the United States and Haiti shaping youth with high academic and biblical standards.",
    },
    status: {
      fr: "En développement (Chantier en cours)",
      en: "Under Development (Active Building Phase)",
    },
    statusType: "development",
    pillarNumber: "02",
    page: "education",
  },
  {
    id: "spiritual-evangelism",
    number: "02",
    title: {
      fr: "Accompagnement spirituel et évangélisation",
      en: "Spiritual Mentorship & Evangelism",
    },
    category: {
      fr: "Foi & Évangélisation",
      en: "Faith & Evangelism",
    },
    description: {
      fr: "Annonce de l'Évangile, discipulat chrétien et témoignage vivant par des œuvres concrètes prouvant que Jésus est le seul Homme en Qui nous devons nous confier.",
      en: "Gospel outreach, Christian discipleship, and living witness through concrete deeds demonstrating that Jesus is the only One in Whom we must place our trust.",
    },
    status: {
      fr: "Opérationnel (Activité continue)",
      en: "Operational (Ongoing Ministry)",
    },
    statusType: "operational",
    pillarNumber: "01",
    page: "faith",
  },
  {
    id: "clean-water",
    number: "03",
    title: {
      fr: "Eau potable et assainissement",
      en: "Clean Drinking Water & Sanitation",
    },
    category: {
      fr: "Assistance humanitaire & Santé",
      en: "Humanitarian Relief & Health",
    },
    description: {
      fr: "Forage d'un puits artésien, réseau de canalisations, réservoir de filtration et érection d'un bloc sanitaire hygiénique à 4 cabines pour les écoliers et villageois de Brostage.",
      en: "Artesian well drilling, supply piping, filtration reservoir, and construction of a modern 4-stall hygiene block for schoolchildren and local residents in Brostage.",
    },
    status: {
      fr: "En développement (Forage réalisé & Réservoir en cours)",
      en: "Under Development (Well Drilled & Tank Underway)",
    },
    statusType: "development",
    pillarNumber: "05",
    page: "haiti",
  },
  {
    id: "health-vulnerable",
    number: "04",
    title: {
      fr: "Santé et assistance aux personnes vulnérables",
      en: "Healthcare & Care for Vulnerable Persons",
    },
    category: {
      fr: "Assistance humanitaire",
      en: "Humanitarian Assistance",
    },
    description: {
      fr: "Projet de dispensaire de premiers soins à Dondon, distributions de secours d'urgence et soutien ciblé aux enfants orphelins et familles en situation de grande précarité.",
      en: "Community first-aid clinic project in Dondon, emergency relief distributions, and targeted support for orphaned children and vulnerable families.",
    },
    status: {
      fr: "En préparation (Phase projet)",
      en: "In Preparation (Planning Phase)",
    },
    statusType: "preparation",
    pillarNumber: "05",
    page: "haiti",
  },
  {
    id: "housing-shelter",
    number: "05",
    title: {
      fr: "Logement et hébergement communautaire",
      en: "Housing & Community Shelter",
    },
    category: {
      fr: "Transformation communautaire",
      en: "Community Transformation",
    },
    description: {
      fr: "Aménagement de la Résidence Missionnaire à Delmas/Dondon pour l'accueil sécurisé des ouvriers du Seigneur, et projet de Guesthouse communautaire à Dondon pour le développement local.",
      en: "Development of the Missionary Residence in Delmas/Dondon for secure missionary lodging, and the Dondon community guesthouse project supporting local hospitality.",
    },
    status: {
      fr: "En développement & préparation",
      en: "Under Development & Preparation",
    },
    statusType: "development",
    pillarNumber: "04",
    page: "community",
  },
  {
    id: "agriculture-food",
    number: "06",
    title: {
      fr: "Agriculture et autonomie alimentaire",
      en: "Agriculture & Food Security",
    },
    category: {
      fr: "Transformation communautaire",
      en: "Community Transformation",
    },
    description: {
      fr: "Initiatives pilotes d'agriculture durable, jardins scolaires pédagogiques et approvisionnement des cantines pour garantir la sécurité nutritionnelle des enfants.",
      en: "Sustainable agriculture initiatives, pedagogical school gardens, and school canteen supply chains to guarantee children's daily nutritional security.",
    },
    status: {
      fr: "En préparation (Études de terrain)",
      en: "In Preparation (Field Feasibility Studies)",
    },
    statusType: "preparation",
    pillarNumber: "04",
    page: "community",
  },
  {
    id: "skills-training",
    number: "07",
    title: {
      fr: "Formation et développement des compétences",
      en: "Vocational & Skills Development",
    },
    category: {
      fr: "Éducation & Jeunesse",
      en: "Education & Youth",
    },
    description: {
      fr: "Ateliers de formation professionnelle pour les jeunes adultes, perfectionnement pédagogique des enseignants locaux et formation au leadership chrétien responsable.",
      en: "Vocational training workshops for young adults, teacher development seminars, and mentorship in responsible Christian leadership.",
    },
    status: {
      fr: "En préparation (Planification des cycles)",
      en: "In Preparation (Curriculum Planning)",
    },
    statusType: "preparation",
    pillarNumber: "03",
    page: "education",
  },
];

/* =============================================================================
   LES TROIS ENTITÉS COMPOSANTES DE BVF (DIRECTIVE 5)
   ============================================================================= */
export interface BvfEntity {
  id: string;
  letter: string;
  name: string;
  role: Record<Language, string>;
  description: Record<Language, string>;
  status: Record<Language, string>;
  statusType: "operational" | "development" | "preparation";
  location: Record<Language, string>;
}

export const bvfEntities: BvfEntity[] = [
  {
    id: "foundation",
    letter: "A",
    name: "Blessed Vally Foundation",
    role: {
      fr: "Organisation centrale & Mission générale",
      en: "Parent Organization & General Mission",
    },
    description: {
      fr: "Organisation consacrée à l'évangélisation et à l'amélioration des conditions de vie des communautés à travers des projets éducatifs, sociaux, sanitaires et économiques.",
      en: "Organization dedicated to evangelism and improving community living conditions through educational, social, healthcare, and economic projects.",
    },
    status: {
      fr: "Opérationnelle (En activité)",
      en: "Operational (Active)",
    },
    statusType: "operational",
    location: {
      fr: "Miami, FL (États-Unis) & Haïti",
      en: "Miami, FL (United States) & Haiti",
    },
  },
  {
    id: "missionary-residence",
    letter: "B",
    name: "Missionary Residence",
    role: {
      fr: "Accueil & Hébergement des missionnaires",
      en: "Missionary Hospitality & Lodging",
    },
    description: {
      fr: "Structure destinée à faciliter l'accueil et l'hébergement des missionnaires participant aux activités spirituelles et communautaires.",
      en: "Structure established to facilitate welcoming and lodging missionaries participating in spiritual and community activities.",
    },
    status: {
      fr: "En cours de développement et aménagement",
      en: "Under Development & Furnishing",
    },
    statusType: "development",
    location: {
      fr: "Delmas & Dondon, Haïti",
      en: "Delmas & Dondon, Haiti",
    },
  },
  {
    id: "guesthouse",
    letter: "C",
    name: "Guesthouse de Dondon",
    role: {
      fr: "Hébergement communautaire & Économie locale",
      en: "Community Lodging & Local Economic Development",
    },
    description: {
      fr: "Projet d'hébergement communautaire à vocation sociale et économique, destiné notamment à favoriser l'accueil et le développement local.",
      en: "Community lodging project with social and economic purpose, specifically intended to foster local hospitality and community development.",
    },
    status: {
      fr: "En préparation (Phase de projet)",
      en: "In Preparation (Project Phase)",
    },
    statusType: "preparation",
    location: {
      fr: "Brostage, Dondon, Nord – Haïti",
      en: "Brostage, Dondon, North – Haiti",
    },
  },
];

export type PageSection = {
  eyebrow: string;
  title: string;
  body: string;
  bullets?: string[];
  quote?: string;
};

export type PageModel = {
  kicker: string;
  title: string;
  description: string;
  image: string;
  metaTitle: string;
  metaDescription: string;
  sections: PageSection[];
};

export const pageContent: Record<Language, Record<Exclude<PageKey, "home">, PageModel>> = {
  en: {
    about: {
      kicker: "Who we are",
      title: "Serving God and uplifting communities through concrete action.",
      description: "Blessed Vally Foundation is a faith-driven organization serving children, families and communities through evangelism, Christian education, healthcare, clean water and sustainable community development in the United States and Haiti.",
      image: "/images/community-children.jpg",
      metaTitle: "About Us | Blessed Vally Foundation",
      metaDescription: "Learn about Blessed Vally Foundation, dedicated to evangelism and concrete community action in the United States and Haiti.",
      sections: [
        {
          eyebrow: "Our Core Calling",
          title: "Faith in action to transform lives.",
          body: "The core identity of Blessed Vally Foundation is evangelism through concrete actions serving communities. We believe that true faith expresses itself in sacrificial, measurable service to those who need it most.",
          quote: "Winning souls for Christ through concrete activities demonstrating that Jesus is the only One in Whom we must place our trust.",
        },
        {
          eyebrow: "Founder & Leadership",
          title: "Dr. Vally D. Jn.-Ls. Legouté (In Haiti: Dr. Vally Docteur Jean-Louis)",
          body: "Dr. Vally D. Jn.-Ls. Legouté is the Founder and President of Blessed Vally Foundation. Born in Ranquitte, Haiti, and holding a Doctorate in Education and a Master’s in Theology, she devoted over 40 years to teaching and educational service. Her lifelong commitment combines evangelism, whole-person education, and the vision of establishing high-quality Christian schools in the United States and Haiti.",
          bullets: [
            "Official U.S. Name: Dr. Vally D. Jn.-Ls. Legouté",
            "Official Haiti Name: Dr. Vally Docteur Jean-Louis",
            "Doctorate in Education & Master’s in Theology",
            "Vision to establish accredited Christian schools in the U.S. and Haiti",
          ],
        },
        {
          eyebrow: "The Three Entities",
          title: "A complementary organizational structure.",
          body: "Blessed Vally Foundation operates through three coordinated entities designed to serve the community holistically:\n\n• Blessed Vally Foundation (Operational): Central organization dedicated to evangelism and improving living conditions through educational, social, healthcare, and economic projects.\n• Missionary Residence (Under Development): Facility designed to facilitate welcoming and housing missionaries participating in spiritual and community missions.\n• Guesthouse de Dondon (In Preparation): Community lodging project with social and economic purpose, fostering hospitality and local development.",
        },
      ],
    },
    mission: {
      kicker: "Our mission & vision",
      title: "Winning souls for Christ through concrete activities.",
      description: "Our official mission: winning souls for Christ through concrete activities demonstrating that Jesus is the only One in Whom we must place our trust.",
      image: "/images/children-school.jpg",
      metaTitle: "Mission & Vision | Blessed Vally Foundation",
      metaDescription: "Discover the official mission and vision of Blessed Vally Foundation: winning souls for Christ through concrete activities serving communities.",
      sections: [
        {
          eyebrow: "Official Mission",
          title: "Our Fundamental Calling",
          body: "“Winning souls for Christ through concrete activities demonstrating that Jesus is the only One in Whom we must place our trust.”",
          quote: "Evangelism through concrete deeds serving local communities.",
        },
        {
          eyebrow: "Official Vision",
          title: "Our Guiding Vision",
          body: "“Accompanying communities with activities aimed at helping them know God, understand His will, and adhere to it for the establishment of the Kingdom of Jesus Christ.”",
          quote: "Accompanying communities for the establishment of the Kingdom of Jesus Christ.",
        },
        {
          eyebrow: "Spheres of Impact",
          title: "Seven key programmatic domains serving our mission.",
          body: "To fulfill our spiritual and human mission, the Foundation focuses on seven complementary areas of intervention, distinguishing active operations from projects in progress:\n\n1. Education & Christian schools (Under Development)\n2. Spiritual mentorship & evangelism (Operational)\n3. Clean drinking water & sanitation (Under Development)\n4. Healthcare & care for vulnerable persons (In Preparation)\n5. Housing & community shelter (Under Development)\n6. Agriculture & food security (In Preparation)\n7. Vocational training & skills development (In Preparation)",
          bullets: [
            "Evangelism and spiritual discipleship as the center",
            "High-standard Christian schools in the U.S. and Haiti",
            "Clean water autonomy and sanitation blocks",
            "Missionary hospitality and community lodging",
          ],
        },
      ],
    },
    education: {
      kicker: "Education is our future",
      title: "Education that forms the whole person in Christ.",
      description: "True Christian education develops the mind, character, leadership, faith and sense of purpose of every learner.",
      image: "/images/children-classroom.jpg",
      metaTitle: "Education | Blessed Vally Foundation",
      metaDescription: "Explore Blessed Vally Foundation’s vision for Christian schools, accredited curricula, and whole-person education in the U.S. and Haiti.",
      sections: [
        {
          eyebrow: "The BVF Approach",
          title: "Academic excellence rooted in Christian faith.",
          body: "We envision Christian educational environments where academic rigor, character development, biblical truth, creativity, leadership, and individualized learning work together to prepare students for their God-given purpose in life.",
          bullets: [
            "Christian schools and innovative pedagogical models",
            "Campus construction in Brostage (Dondon) and plans for U.S. schools",
            "Individualized learning, character formation, and biblical literacy",
            "Teacher professional development and family engagement",
            "Access and scholarships for underserved children",
          ],
        },
        {
          eyebrow: "Campus in Progress",
          title: "Building modern classrooms for children in Brostage.",
          body: "On our grounds in Brostage, Dondon, we are actively raising a two-story educational facility designed to shelter illuminated classrooms, an administrative wing, a learning library, and safe outdoor courtyards.",
          quote: "Founder Dr. Vally D. Jn.-Ls. Legouté has invested extensive personal resources and over 40 years of teaching experience to bring this school to life.",
        },
      ],
    },
    faith: {
      kicker: "Faith & evangelism",
      title: "Lasting transformation begins with a relationship with God.",
      description: "Christian faith is not a decorative element at BVF; it is the spiritual foundation from which we serve, teach, build and care for others.",
      image: "/images/community-gathering.jpg",
      metaTitle: "Faith & Evangelism | Blessed Vally Foundation",
      metaDescription: "Learn how Christian faith, the Great Commission, discipleship and evangelism shape the mission of Blessed Vally Foundation.",
      sections: [
        {
          eyebrow: "Our Core Mission",
          title: "Living faith manifested through practical compassion.",
          body: "“Winning souls for Christ through concrete activities demonstrating that Jesus is the only One in Whom we must place our trust.” We believe faith is authenticated when it brings water to the thirsty, education to children, and hope to the forgotten.",
          quote: "Faith gives the work its center. Service gives it its shape.",
        },
        {
          eyebrow: "Spiritual Vision",
          title: "Accompanying communities toward the Kingdom of God.",
          body: "“Accompanying communities with activities aimed at helping them know God, understand His will, and adhere to it for the establishment of the Kingdom of Jesus Christ.” Our initiatives invite children, families, churches and partners into a shared journey of salvation, responsibility and purpose.",
        },
      ],
    },
    community: {
      kicker: "Community transformation",
      title: "From immediate assistance to sustainable agency.",
      description: "We respond to community needs while building the education, clean water, shelter, and economic opportunities that make lasting transformation possible.",
      image: "/images/community-gathering.jpg",
      metaTitle: "Community Transformation | Blessed Vally Foundation",
      metaDescription: "See how Blessed Vally Foundation connects faith, education, clean water and housing to empower families in Haiti and the United States.",
      sections: [
        {
          eyebrow: "Our Approach",
          title: "Invest in people, then build with them.",
          body: "We address pressing community needs while developing sustainable solutions that empower families. Our holistic approach moves beyond dependency toward education, dignity, local leadership, and community self-reliance.",
          bullets: [
            "Listen to community elders and local families before building",
            "Strengthen local leadership, artisans and craftsmen",
            "Pair emergency humanitarian aid with long-term infrastructure",
            "Build sustainable facilities that serve for generations",
          ],
        },
        {
          eyebrow: "Entities in Development",
          title: "Shelter and local development.",
          body: "Through the Missionary Residence (designed to accommodate visiting ministry workers) and the planned Guesthouse de Dondon (designed for community hospitality and local economic activity), we establish physical hubs for community transformation.",
        },
      ],
    },
    haiti: {
      kicker: "Works in Haiti & Field Calling",
      title: "Building to transform lives and communities in Haiti.",
      description: "From Brostage/Dondon to Delmas, Blessed Vally Foundation is raising lasting infrastructure: an educational campus, clean drinking water reservoir, modern sanitation block, and a missionary residence.",
      image: "/images/travaux/chantier-facade-colonnes.jpg",
      metaTitle: "Works in Haiti | Blessed Vally Foundation",
      metaDescription: "Discover active construction in Haiti: educational campus, artesian well, clean water reservoir, sanitation block, and machinery on the ground.",
      sections: [
        {
          eyebrow: "Our Field Mission in Haiti",
          title: "Faith, education, and infrastructure for Brostage and Delmas.",
          body: "In Brostage (Dondon, Northern Department) and Delmas (Western Department), Blessed Vally Foundation is carrying out concrete works to uplift underserved families. Our mission connects the proclamation of the Gospel with classroom construction, clean drinking water autonomy, and health care.",
          quote: "Winning souls for Christ through concrete activities demonstrating that Jesus is the only One in Whom we must place our trust.",
        },
        {
          eyebrow: "Progress Status & Transparency",
          title: "Clear distinction between completed, active, and planned initiatives.",
          body: "To maintain rigorous transparency, our initiatives in Haiti are organized into four verified categories:\n\n• Completed Milestones: Deep earthquake-resistant foundations, load-bearing concrete structural frame for the main two-story building, upper slab pour, initial artesian borehole, and educational kit distributions.\n• Active Works: Second-phase classroom finishing, molded safety balustrades, rainwater drainage and clean water storage reservoir construction, and modern four-stall sanitary block erection.\n• Projects in Preparation: Fully equipped computer learning laboratory, permanent school canteen feeding program, community first-aid health clinic, and the Dondon Guesthouse.\n• Current Urgent Needs: Cement bags, steel rebar reinforcement, solar energy panels, student desks and classroom furniture.",
        },
      ],
    },
    leadership: {
      kicker: "Our leadership",
      title: "The Board of Directors guiding the Foundation.",
      description: "The Board of Directors of Blessed Vally Foundation brings together Christian faith, educational excellence, legal stewardship, engineering expertise, and dedicated service in the United States and Haiti.",
      image: "/images/community-children.jpg",
      metaTitle: "Leadership & Board of Directors | Blessed Vally Foundation",
      metaDescription: "Meet the Board of Directors of Blessed Vally Foundation: Dr. Vally D. Jn.-Ls. Legouté, Mr. Jean-Ronald Legouté, Mrs. Vanessa R. Bastien-Joseph, Ms. Corie-Henrie Bastien, Ms. Sasha-Vally Bastien, and Mr. Geraldyr Lourdy Pierre.",
      sections: [
        {
          eyebrow: "Board President",
          title: "Dr. Vally D. Jn.-Ls. Legouté (In Haiti: Dr. Vally Docteur Jean-Louis)",
          body: "Founder & President of the Board of Directors. Leads the spiritual vision, evangelism initiatives, Christian educational strategy, and the founding of schools in the U.S. and Haiti.",
        },
        {
          eyebrow: "Vice President",
          title: "Mr. Jean-Ronald Legouté",
          body: "Vice President of the Board of Directors. Coordinates strategic initiatives, institutional development, external relations, and humanitarian partnerships.",
        },
        {
          eyebrow: "Treasurer",
          title: "Mrs. Vanessa R. Bastien-Joseph",
          body: "Treasurer of the Board of Directors. Manages financial oversight, budget administration, accounting transparency, gift recordkeeping, and resource allocation.",
        },
        {
          eyebrow: "Secretary",
          title: "Ms. Corie-Henrie Bastien",
          body: "Secretary of the Board of Directors. Manages statutory records, board meeting minutes, official correspondence, and administrative documentation.",
        },
        {
          eyebrow: "Board Trustee",
          title: "Ms. Sasha-Vally Bastien",
          body: "Trustee / Board Member. Participates in board deliberations, ensures programmatic alignment with the Foundation’s statutory mission, and supports organizational governance.",
        },
        {
          eyebrow: "Counselor",
          title: "Mr. Geraldyr Lourdy Pierre",
          body: "Counselor to the Board. Provides strategic engineering expertise, technical counsel, and advisory guidance for on-site infrastructure and clean water projects.",
        },
      ],
    },
    partnerships: {
      kicker: "Partner with us",
      title: "Lasting transformation happens through genuine partnership.",
      description: "Bring your experience, network, generosity or prayer to a mission connecting Christian education, evangelism, clean water and community transformation.",
      image: "/images/community-gathering.jpg",
      metaTitle: "Partnerships | Blessed Vally Foundation",
      metaDescription: "Partner with Blessed Vally Foundation to expand Christian education, uplift families and create sustainable community impact in the U.S. and Haiti.",
      sections: [
        {
          eyebrow: "We Welcome",
          title: "Partners who want to build, not simply observe.",
          body: "We invite relationships with Christian ministries and churches, schools and educators, philanthropic partners, mission organizations, businesses and individuals who share our vision to win souls for Christ and serve communities through concrete deeds.",
          bullets: [
            "Support Christian schools and educational programs",
            "Underwrite clean water and community infrastructure",
            "Send or host missionary workers through the Missionary Residence",
            "Sponsor student scholarships and teacher training",
          ],
        },
        {
          eyebrow: "Start a Conversation",
          title: "Tell us what you are building.",
          body: "If your organization shares our dedication to faith, education, and community transformation, we look forward to exploring a thoughtful collaboration.",
        },
      ],
    },
    news: {
      kicker: "Official Blog & Field Dispatches",
      title: "Articles, insights and field dispatches from leadership.",
      description: "Read official publications from Founder Dr. Vally D. Jn.-Ls. Legouté and leadership: Brostage clean water well project, educational campus milestones, and our global missionary vision.",
      image: "/images/children-school.jpg",
      metaTitle: "Blog & Field Dispatches | Blessed Vally Foundation",
      metaDescription: "Official published articles and milestone accounts from Blessed Vally Foundation on clean water, Christian education, and community works.",
      sections: [
        {
          eyebrow: "Editorial Archive",
          title: "Documenting every milestone with context and faith.",
          body: "Blessed Vally Foundation preserves its authentic published accounts from 2022 and 2023. These dispatches record our foundational convictions, the urgent water initiatives in Brostage, and the broader organizational vision.",
        },
      ],
    },
    getInvolved: {
      kicker: "Join the mission",
      title: "There is a place for you in this work.",
      description: "Volunteer. Give. Pray. Partner. Serve. Educate. A faith-driven mission grows when people bring their gifts with intention.",
      image: "/images/children-uniforms.jpg",
      metaTitle: "Get Involved | Blessed Vally Foundation",
      metaDescription: "Find ways to volunteer, give, pray, partner and serve with Blessed Vally Foundation.",
      sections: [
        {
          eyebrow: "Ways to Participate",
          title: "Move from interest to contribution.",
          body: "Whether you are an educator, ministry worker, professional, business leader, donor, or volunteer, there is an active place for you in this mission.",
          bullets: [
            "Volunteer your skills and professional expertise",
            "Contribute financially toward building materials and student kits",
            "Pray for children, teachers, workers, and field missionaries",
            "Partner with us on school equipment and clean water wells",
          ],
        },
      ],
    },
    donate: {
      kicker: "Your gift transforms lives",
      title: "Give strength to a vision that lasts.",
      description: "Your generosity helps Blessed Vally Foundation advance Christian education, clean drinking water, missionary support, and community development.",
      image: "/images/children-classroom.jpg",
      metaTitle: "Donate | Blessed Vally Foundation",
      metaDescription: "Support Blessed Vally Foundation’s Christian schools, clean water projects, and community relief in Haiti and the United States.",
      sections: [
        {
          eyebrow: "Faithful Stewardship",
          title: "Every contribution directly serves the mission.",
          body: "Donations support ongoing construction of the Christian school campus in Brostage, the artesian well clean water reservoir, student learning materials, and community care. We operate with strict financial stewardship.",
          bullets: [
            "Direct funding for classroom construction and school furniture",
            "Support for clean water drilling and sanitation blocks",
            "Sponsorship of student tuition, textbooks, and nutrition",
            "Official acknowledgment receipts provided for every contribution",
          ],
        },
        {
          eyebrow: "Payment Modalities",
          title: "Secure online checkout and direct bank transfers.",
          body: "Supporters can give online securely via Stripe (credit or debit card), via Zelle, via domestic Bank of America wire, via BUH in Haiti, or by mailed check payable to Blessed Vally Foundation Inc.",
        },
      ],
    },
    contact: {
      kicker: "Connect with us",
      title: "Let’s talk about what is possible.",
      description: "We welcome all inquiries regarding our mission, Christian schools, partnerships, volunteering, or donations.",
      image: "/images/community-gathering.jpg",
      metaTitle: "Contact | Blessed Vally Foundation",
      metaDescription: "Contact Blessed Vally Foundation: official offices in Miami, Florida and Petionville/Dondon, Haiti, phone numbers and email.",
      sections: [
        {
          eyebrow: "Official Directory",
          title: "Blessed Vally Foundation Inc.",
          body: "Official Directory:\n• U.S. Mailing Address: 12933 SW 129 Street, Miami, FL 33177, USA\n• Administrative Office: 609 NE 123rd Street, North-Miami, FL 33161, USA\n• Haiti Address: 12, Pelerin 4A, Petionville-Haiti\n• Haiti Mission Center: Brostage, Dondon, Northern Department, Haiti\n• Email: blessedvallyfoundation@gmail.com\n• Website: blessedvallyfoundation.org\n• U.S. Phones: +1 (786) 443-0472 / +1 (845) 655-7399\n• Haiti Phones: +509 3618-4340 / +509 4310-8621 / +509 48 34 2601",
        },
      ],
    },
    taxStatus: {
      kicker: "Legal Status, Tax Status & Transparency",
      title: "A Christian Foundation Committed to Serving Communities.",
      description: "Blessed Vally Foundation, Inc. (BVF) is a nonprofit corporation incorporated in the State of Florida, United States, in 2012, and registered with the Florida Department of State, Division of Corporations (Sunbiz - N12000006840).",
      image: "/images/community-children.jpg",
      metaTitle: "Legal Status, Tax Status & Transparency | Blessed Vally Foundation",
      metaDescription: "Review official corporate records, institutional mission, board governance, and administrative & tax standing of Blessed Vally Foundation, Inc. (Sunbiz N12000006840).",
      sections: [
        {
          eyebrow: "Official Name & Registration",
          title: "Nonprofit corporation incorporated in the State of Florida (Sunbiz).",
          body: "Blessed Vally Foundation, Inc. (BVF) is a nonprofit corporation incorporated in the State of Florida, United States, in 2012, and registered with the Florida Department of State, Division of Corporations (Sunbiz).\n\n• Official Legal Name: BLESSED VALLY FOUNDATION, INC.\n• Florida Document Number: N12000006840\n• Official Registry: Florida Department of State – Division of Corporations (Sunbiz)\n• Leadership: Founded and presided by Dr. Vally D. Jn.-Ls. Legouté\n\nOur Institutional Mission:\nThe Foundation is dedicated to sharing the Gospel of Jesus Christ through meaningful and practical actions, particularly in the following areas:\n• Christian education and the development of children and youth.\n• Access to clean drinking water and improved sanitation infrastructure.\n• Food security and humanitarian assistance.\n• Support for vulnerable families and individuals.\n• Sustainable community development.\n\nOur initiatives focus particularly on communities in Haiti, including Fragneauville–Delmas and Brostage–Dondon, with the goal of fostering spiritual, educational, and social transformation.",
          bullets: [
            "Official Legal Name: BLESSED VALLY FOUNDATION, INC.",
            "Incorporated as a Florida Nonprofit Corporation in 2012 (Florida Non-Profit Corporation)",
            "Florida Document Number: N12000006840",
            "Field initiatives in Fragneauville–Delmas and Brostage–Dondon, Haiti",
          ],
        },
        {
          eyebrow: "Foundation Governance",
          title: "Leadership and Board of Directors.",
          body: "Blessed Vally Foundation is led by a committed Board of Directors:\n\n• President: Dr. Vally D. Jn.-Ls. Legouté\n• Vice President: Jean-Ronald Legouté\n• Treasurer: Vanessa R. Bastien-Joseph\n• Secretary: Corie-Henrie Bastien\n• Administrator: Sasha-Vally Bastien\n• Counselor: Geraldyr Lourdy Pierre\n\nThe leadership team supports the Foundation’s strategic direction, administration, and organizational objectives, subject to the responsibilities established in its official governing documents.",
          bullets: [
            "President: Dr. Vally D. Jn.-Ls. Legouté",
            "Vice President: Jean-Ronald Legouté",
            "Treasurer: Vanessa R. Bastien-Joseph",
            "Secretary: Corie-Henrie Bastien",
            "Administrator: Sasha-Vally Bastien",
            "Counselor: Geraldyr Lourdy Pierre",
          ],
        },
        {
          eyebrow: "Administrative & Tax Status",
          title: "Administrative proceedings and 501(c)(3) federal tax status.",
          body: "Blessed Vally Foundation is currently pursuing the administrative steps necessary to regularize and reactivate its corporate record with the appropriate Florida authorities.\n\nThe Foundation also intends to pursue reinstatement of its federal tax-exempt recognition under Section 501(c)(3) of the Internal Revenue Code.\n\nAt this time, the Foundation does not represent its federal 501(c)(3) tax-exempt status as currently reinstated or recognized by the Internal Revenue Service (IRS).\n\nFinancial contributions should not be assumed to be tax-deductible solely because the Foundation is incorporated in Florida. Tax treatment depends on the organization’s officially recognized status and applicable law.",
          quote: "Responsible governance, complete transparency, and accurate communication guide all our interactions with donors and partners.",
          bullets: [
            "Administrative steps underway to regularize and reactivate corporate record with Florida authorities",
            "Procedures planned to pursue reinstatement of federal 501(c)(3) tax-exempt status with the IRS",
            "Federal 501(c)(3) tax-exempt status is not represented as currently active or reinstated at this time",
            "Tax treatment of gifts depends on officially recognized status and applicable governing tax laws",
          ],
        },
        {
          eyebrow: "Transparency & Accountability",
          title: "Public registry, accountability and our enduring commitment.",
          body: "Blessed Vally Foundation is committed to responsible governance, transparent resource management, and accurate communication regarding its activities and administrative standing.\n\nOfficial information will be updated as the Foundation completes its legal and tax-related procedures.\n\n• Official Corporate Registry: Florida Division of Corporations – Sunbiz (Document #N12000006840)\n\nOur Commitment:\nTo serve God by serving others, proclaim the Gospel through concrete action, and help build stronger, more dignified, and hope-filled communities.\n\nBlessed Vally Foundation — Faith in Action, Serving Humanity.",
          quote: "To serve God by serving others, proclaim the Gospel through concrete action, and help build stronger, more dignified, and hope-filled communities.",
        },
        {
          eyebrow: "Official Addresses",
          title: "Registered postal mailing address and office locations.",
          body: "In accordance with the Foundation's official directory (as published on blessedvallyfoundation.org) :\n\n• OFFICIAL POSTAL MAILING ADDRESS:\nBlessed Vally Foundation Inc.\n12933 SW 129 Street\nMiami, FL 33177, United States\n(Official address for check contributions, legal correspondence and administrative mail)\n\n• ADMINISTRATIVE OFFICE:\n609 NE 123rd Street\nNorth-Miami, FL 33161, United States\n\n• HAITI ADDRESS:\n12, Pelerin 4A, Petionville-Haiti\n\n• HAITI MISSION CENTER & PROGRAM GROUNDS:\nBrostage, Dondon, Northern Department, Haiti\n(Site of the educational campus, community agora, and ongoing construction complex)",
        },
        {
          eyebrow: "Official Phone & Hours",
          title: "Direct telephone numbers and operating hours.",
          body: "The Foundation may be contacted through its verified telephone lines and email:\n\n• OFFICIAL U.S. TELEPHONES:\n+1 (786) 443-0472\n+1 (845) 655-7399\n\n• OFFICIAL HAITI TELEPHONES:\n+509 3618-4340\n+509 4310-8621\n+509 48 34 2601\n\n• OFFICIAL EMAIL:\nblessedvallyfoundation@gmail.com\n\n• OPERATING HOURS:\nMonday – Friday: 9:00 AM – 11:00 PM (EST)\nSunday: 9:00 AM – 4:00 PM (EST)",
        },
      ],
    },
    privacy: {
      kicker: "Data Protection & Donor Care",
      title: "Privacy policy.",
      description: "Blessed Vally Foundation Inc. is dedicated to safeguarding the privacy, trust and security of our donors, partners and website visitors.",
      image: "/images/community-gathering.jpg",
      metaTitle: "Privacy Policy | Blessed Vally Foundation",
      metaDescription: "Learn how Blessed Vally Foundation protects personal data, ensures secure donation handling, and respects donor confidentiality.",
      sections: [
        {
          eyebrow: "Core Principles",
          title: "An enduring commitment to donor trust and integrity.",
          body: "Blessed Vally Foundation Inc. ('BVF') treats personal information with the same dignity and ethical discipline that guides our ministry and educational programs.\nWe never sell, trade, rent or license donor contact lists or personal data to third parties, marketers or data aggregators.",
          bullets: ["Zero sale or sharing of donor contact lists", "Data collection strictly limited to mission and receipt delivery", "Bank-grade encrypted processing with no stored card data", "Full rights to access, update or delete your information upon request"],
        },
        {
          eyebrow: "Information Collected",
          title: "Transparent and purposeful data gathering.",
          body: "When you interact with our website (contact form, online donation via Stripe, wire/Zelle transfer, or receipt request), we collect only necessary details:\n• Contact details: Full name, email address, phone number, and postal mailing address (required for official donor receipts).\n• Gift history: Donation amount, date, designated project, and transaction reference.\n• Technical logs: Anonymized analytics to ensure website uptime and security.\nIMPORTANT: Credit and debit card transactions are processed directly by our PCI-compliant payment processor Stripe via secure TLS encryption. Blessed Vally Foundation does not store and never has access to your full card numbers.",
        },
        {
          eyebrow: "Data Usage & Retention",
          title: "How your information is used.",
          body: "Information provided to us is solely used to:\n1. Issue official donor receipts, confirmations and administrative statements.\n2. Respond promptly to inquiries, partnership proposals, and questions regarding our construction in Haiti.\n3. Share programmatic updates and news regarding the Foundation's impact, strictly when requested.\nRecords are retained only for the duration required by Florida non-profit statutes and administrative best practices.",
        },
        {
          eyebrow: "Your Rights & Contact",
          title: "Exercising your privacy rights.",
          body: "You may at any time request access to, correction of, or deletion of your personal records, or opt out of any future communications.\nFor all privacy inquiries, please contact our administrative team:\n• Official Email: blessedvallyfoundation@gmail.com\n• Official Phone: +1 (786) 443-0472 / +1 (845) 655-7399\n• Mailing Address: Blessed Vally Foundation Inc., 12933 SW 129 Street, Miami, FL 33177, USA.",
          quote: "Donor trust and community integrity are the foundation of everything we build together.",
        },
      ],
    },
    terms: {
      kicker: "Legal Terms & Site Policies",
      title: "Terms of use.",
      description: "These terms govern access to and use of Blessed Vally Foundation Inc.'s official website, services, and donation platforms.",
      image: "/images/children-school.jpg",
      metaTitle: "Terms of Use | Blessed Vally Foundation",
      metaDescription: "Read the official terms and conditions governing the use of Blessed Vally Foundation Inc.'s website and donor contributions.",
      sections: [
        {
          eyebrow: "Scope & Acceptance",
          title: "Agreement to terms and mission purpose.",
          body: "By accessing and using this website (blessedvallyfoundation.org), you acknowledge and agree to abide by these Terms of Use and all applicable laws and regulations.\nThis platform serves to communicate Blessed Vally Foundation Inc.'s humanitarian, educational, and faith mission, and to provide secure giving mechanisms for supporters across the United States, Haiti, and worldwide.",
        },
        {
          eyebrow: "Intellectual Property",
          title: "Copyright protection for imagery and text.",
          body: "All materials published on this website — including editorial texts, brand emblems, design layouts, and original field photography documenting ongoing construction and student life in Haiti — are the intellectual property of Blessed Vally Foundation Inc.\nUnauthorized reproduction, redistribution, or commercial use of our photos, texts, or trademarks without prior written permission is strictly prohibited.",
          bullets: ["Original on-the-ground photo documentation protected by copyright", "Blessed Vally Foundation name and branding emblems reserved", "Personal non-commercial reading and sharing permitted"],
        },
        {
          eyebrow: "Donations & Contributions",
          title: "Guidelines governing charitable gifts.",
          body: "All contributions made to the Foundation — via Stripe online card processing, Bank of America check deposits, wire transfers, or Zelle — represent voluntary, irrevocable charitable donations dedicated to the organization's mission.\n• Allocation: Donations are directed toward educational facilities, ongoing building construction in Haiti, community health, and clean water autonomy.\n• Documentation: Official confirmation receipts are issued for gifts received.\n• Security: Online card processing is performed in compliance with PCI-DSS standards via Stripe.",
        },
        {
          eyebrow: "Governing Law & Contact",
          title: "Applicable legal jurisdiction and official contacts.",
          body: "These terms are governed by and construed in accordance with the laws of the State of Florida and the United States of America.\nFor any legal questions regarding these terms, contact our executive office:\n• Blessed Vally Foundation Inc.\n• Executive Office: 609 NE 123rd Street, North Miami, FL 33161\n• Official Mailing Address: 12933 SW 129 Street, Miami, FL 33177\n• Official Telephones: +1 (786) 443-0472 / +1 (845) 655-7399 / +509 3618-4340\n• Official Email: blessedvallyfoundation@gmail.com",
        },
      ],
    },
  },
  fr: {
    about: {
      kicker: "Qui nous sommes",
      title: "Servir Dieu et relever les communautés par l'action concrète.",
      description: "La Fondation Blessed Vally est une organisation fondée sur la foi chrétienne, vouée à l'évangélisation et à l'amélioration durable des conditions de vie des familles par l'éducation, l'eau potable, la santé et le développement communautaire aux États-Unis et en Haïti.",
      image: "/images/community-children.jpg",
      metaTitle: "À propos de la Fondation Blessed Vally",
      metaDescription: "Découvrez la Fondation Blessed Vally, son identité spirituelle, son engagement envers l'évangélisation et ses actions concrètes aux États-Unis et en Haïti.",
      sections: [
        {
          eyebrow: "Identité fondamentale",
          title: "L'évangélisation à travers des actions concrètes.",
          body: "L'identité fondamentale de Blessed Vally Foundation est l'évangélisation à travers des actions concrètes au service des communautés. Nous croyons que la foi en Christ s'incarne dans des œuvres palpables d'amour, de vérité et de relèvement pour les personnes les plus vulnérables.",
          quote: "« Gagner des âmes pour Christ à travers des activités concrètes prouvant que Jésus est le seul Homme en Qui nous devons nous confier. »",
        },
        {
          eyebrow: "La Fondatrice & Présidente",
          title: "Dr. Vally D. Jn.-Ls. Legouté (En Haïti : Dr. Vally Docteur Jean-Louis)",
          body: "Dr. Vally D. Jn.-Ls. Legouté est la Fondatrice et Présidente de la Fondation Blessed Vally. Née à Ranquitte, dans le Nord d’Haïti, elle a consacré plus de 40 années de sa vie à l'enseignement et au service des jeunes. Titulaire d'un Doctorat en Éducation et d'une Maîtrise en Théologie, elle porte une vision audacieuse : unir l'évangélisation, l'éducation chrétienne d'excellence et l'implantation d'établissements scolaires chrétiens aux États-Unis et en Haïti.",
          bullets: [
            "Nom officiel aux États-Unis : Dr. Vally D. Jn.-Ls. Legouté",
            "Nom officiel en Haïti : Dr. Vally Docteur Jean-Louis",
            "Doctorat en Éducation & Maîtrise en Théologie",
            "Vision de création d'écoles chrétiennes de référence aux USA et en Haïti",
          ],
        },
        {
          eyebrow: "Les Trois Entités de BVF",
          title: "Une organisation complémentaire et structurée.",
          body: "La Fondation structure ses initiatives autour de trois composantes distinctes et complémentaires :\n\n• A. Blessed Vally Foundation (Opérationnelle) : Organisation consacrée à l'évangélisation et à l'amélioration des conditions de vie des communautés à travers des projets éducatifs, sociaux, sanitaires et économiques.\n• B. Missionary Residence (En cours de développement) : Structure destinée à faciliter l'accueil et l'hébergement des missionnaires participant aux activités spirituelles et communautaires.\n• C. Guesthouse de Dondon (En préparation) : Projet d'hébergement communautaire à vocation sociale et économique, destiné notamment à favoriser l'accueil et le développement local.",
        },
      ],
    },
    mission: {
      kicker: "Mission & vision officielles",
      title: "Gagner des âmes pour Christ à travers des activités concrètes.",
      description: "Notre mission officielle : gagner des âmes pour Christ à travers des activités concrètes prouvant que Jésus est le seul Homme en Qui nous devons nous confier.",
      image: "/images/children-school.jpg",
      metaTitle: "Mission & Vision officielles | Fondation Blessed Vally",
      metaDescription: "Découvrez les déclarations officielles de mission et de vision de la Fondation Blessed Vally pour l'évangélisation et le service en Haïti et aux USA.",
      sections: [
        {
          eyebrow: "Mission officielle",
          title: "Texte officiel de notre mission",
          body: "« Gagner des âmes pour Christ à travers des activités concrètes prouvant que Jésus est le seul Homme en Qui nous devons nous confier. »",
          quote: "L'évangélisation à travers des actions concrètes au service des communautés.",
        },
        {
          eyebrow: "Vision officielle",
          title: "Texte officiel de notre vision",
          body: "« Accompagner les communautés avec des activités visant à les aider à connaître Dieu, à comprendre Sa volonté et à y adhérer pour l’établissement du Royaume de Jésus-Christ. »",
          quote: "Accompagner les communautés pour l'établissement du Royaume de Jésus-Christ.",
        },
        {
          eyebrow: "Nos Domaines d'Intervention",
          title: "Sept programmes concrets au service de la mission globale.",
          body: "Pour accomplir cette vision spirituelle et humaine, la Fondation articule ses activités autour de sept domaines d'intervention, en distinguant clairement les actions opérationnelles des projets en préparation :\n\n1. Éducation et création d'écoles chrétiennes (En développement)\n2. Accompagnement spirituel et évangélisation (Opérationnel)\n3. Eau potable et assainissement (En développement)\n4. Santé et assistance aux personnes vulnérables (En préparation)\n5. Logement et hébergement communautaire (En développement)\n6. Agriculture et autonomie alimentaire (En préparation)\n7. Formation et développement des compétences (En préparation)",
          bullets: [
            "L'évangélisation et la foi chrétienne au cœur de chaque action",
            "Implantation d'écoles chrétiennes aux États-Unis et en Haïti",
            "Autonomie en eau potable par puits artésien et réservoirs",
            "Hébergement missionnaire et accueil communautaire",
          ],
        },
      ],
    },
    education: {
      kicker: "L’éducation est notre avenir",
      title: "Une éducation chrétienne qui forme la personne dans sa globalité.",
      description: "Une véritable éducation chrétienne développe l’intelligence, le caractère moral, les dons relationnels, la foi et le sens de la vocation divine de chaque enfant.",
      image: "/images/children-classroom.jpg",
      metaTitle: "Éducation chrétienne | Fondation Blessed Vally",
      metaDescription: "Découvrez la vision éducative de la Fondation Blessed Vally : implantation d'écoles chrétiennes d'excellence aux États-Unis et en Haïti.",
      sections: [
        {
          eyebrow: "L’approche BVF",
          title: "L’excellence académique enracinée dans la foi chrétienne.",
          body: "Nous envisageons des environnements d'apprentissage où l’excellence scolaire, le développement du caractère, la vérité biblique, la créativité, le leadership et l’enseignement individualisé préparent les élèves à accomplir le dessein que Dieu a pour leur vie.",
          bullets: [
            "Écoles chrétiennes et modèles scolaires innovants de haute qualité",
            "Construction du campus scolaire à Brostage (Dondon) et projets aux USA",
            "Formation du caractère, valeurs bibliques et pensée critique",
            "Perfectionnement pédagogique des enseignants et implication parentale",
            "Bourses et opportunités d'accès pour les enfants défavorisés",
          ],
        },
        {
          eyebrow: "Le Campus de Brostage",
          title: "Bâtir des salles de classe dignes pour les enfants de Dondon.",
          body: "Sur notre site de Brostage à Dondon, les travaux progressent pour ériger un bâtiment scolaire à deux niveaux comprenant des salles de classe claires, des bureaux administratifs, une bibliothèque et des espaces de récréation sécurisés.",
          quote: "La Présidente Dre Vally D. Jn.-Ls. Legouté consacre son expérience de plus de 40 ans d'enseignement pour faire de ce campus un phare d'espérance.",
        },
      ],
    },
    faith: {
      kicker: "Foi & évangélisation",
      title: "Une transformation durable commence par une relation avec Dieu.",
      description: "La foi chrétienne n’est pas un élément secondaire de la BVF : elle est le fondement spirituel absolu à partir duquel nous servons, enseignons et aimons notre prochain.",
      image: "/images/community-gathering.jpg",
      metaTitle: "Foi & Évangélisation | Fondation Blessed Vally",
      metaDescription: "Découvrez comment la foi chrétienne et la proclamation de l'Évangile constituent l'identité fondamentale de la Fondation Blessed Vally.",
      sections: [
        {
          eyebrow: "Notre Mission Fondamentale",
          title: "Gagner des âmes pour Christ à travers des actes concrets.",
          body: "« Gagner des âmes pour Christ à travers des activités concrètes prouvant que Jésus est le seul Homme en Qui nous devons nous confier. » Nous croyons que la parole de l'Évangile prend toute sa force lorsqu'elle s'accompagne d'un verre d'eau pure, d'un livre d'école et d'un toit digne.",
          quote: "La foi donne au travail son centre. Le service lui donne sa forme.",
        },
        {
          eyebrow: "Notre Vision Spirituelle",
          title: "Accompagner les communautés pour le Royaume de Dieu.",
          body: "« Accompagner les communautés avec des activités visant à les aider à connaître Dieu, à comprendre Sa volonté et à y adhérer pour l’établissement du Royaume de Jésus-Christ. » Nous invitons les familles, les Églises et nos partenaires à marcher ensemble dans la vérité, l'obéissance à la Parole et l'espérance éternelle.",
        },
      ],
    },
    community: {
      kicker: "Transformation communautaire",
      title: "De l’aide immédiate à l’autonomie durable et digne.",
      description: "Nous répondons aux urgences tout en développant l’éducation chrétienne, l’eau potable, l’hébergement et les capacités économiques des familles.",
      image: "/images/community-gathering.jpg",
      metaTitle: "Transformation communautaire | Fondation Blessed Vally",
      metaDescription: "Voyez comment la Fondation Blessed Vally favorise l'autonomie communautaire, l'hébergement missionnaire et le développement local.",
      sections: [
        {
          eyebrow: "Notre Démarche",
          title: "Investir dans les personnes, puis construire avec elles.",
          body: "Nous cherchons à répondre aux besoins vitaux tout en renforçant l'autonomie des familles. Notre action dépasse la simple assistance ponctuelle pour instaurer des solutions pérennes : adduction d'eau potable, écoles, formation et accueil communautaire.",
          bullets: [
            "Écouter et respecter les familles et les responsables locaux",
            "Mobiliser et valoriser les artisans et maçons haïtiens sur les chantiers",
            "Associer le secours immédiat à des infrastructures faites pour durer",
            "Créer des opportunités d'autonomie alimentaire et économique",
          ],
        },
        {
          eyebrow: "Les Structures d'Accueil",
          title: "Résidence missionnaire et guesthouse communautaire.",
          body: "À travers la Missionary Residence (pour l'hébergement des missionnaires et volontaires) et le projet de Guesthouse de Dondon (hébergement communautaire à vocation sociale et économique), nous créons des points d'appui durables pour la vie locale.",
        },
      ],
    },
    haiti: {
      kicker: "Chantier en cours & Vocation de service",
      title: "Travaux en cours : bâtir pour transformer des vies en Haïti.",
      description: "De Brostage/Dondon à Delmas, la Fondation Blessed Vally érige un complexe éducatif, sécurise l'accès à l'eau potable, bâtit un bloc sanitaire moderne et implante une résidence missionnaire au service des enfants et des familles.",
      image: "/images/travaux/chantier-facade-colonnes.jpg",
      metaTitle: "Travaux en cours en Haïti | Fondation Blessed Vally",
      metaDescription: "Suivez l'avancement concret des travaux en Haïti : complexe éducatif R+1, réservoir d'eau potable, bloc sanitaire et matériels mobilisés.",
      sections: [
        {
          eyebrow: "Notre Vocation de Terrain en Haïti",
          title: "Foi, éducation et infrastructures pour Brostage et Delmas.",
          body: "À Brostage (commune de Dondon, Département du Nord) et à Delmas (Département de l'Ouest), la Fondation Blessed Vally déploie des actions concrètes pour transformer durablement les conditions de vie des communautés. Notre vocation relie l'évangélisation à la construction d'un campus scolaire, à l'accès sécurisé à l'eau potable et à l'assistance fraternelle.",
          quote: "« Gagner des âmes pour Christ à travers des activités concrètes prouvant que Jésus est le seul Homme en Qui nous devons nous confier. »",
        },
        {
          eyebrow: "État d'Avancement & Transparence",
          title: "Distinction claire entre réalisations, chantiers en cours et projets.",
          body: "Dans un souci de rigueur et d'honnêteté envers nos donateurs, nous distinguons clairement les étapes de notre travail en Haïti :\n\n• Réalisations achevées : Fondations parasismiques coulées, structure porteuse en béton armé du bâtiment principal R+1 achevée, dalle supérieure coulée, forage préliminaire du puits artésien et distributions de kits scolaires.\n• Activités en cours : Second œuvre et crépissage des salles de classe, pose des balustrades moulées de sécurité, creusement et maçonnerie du réservoir d'eau potable, construction du bloc sanitaire à 4 cabines.\n• Projets en préparation : Équipement de la salle informatique et bibliothèque, cantine scolaire pérenne, dispensaire de soins primaires, et aménagement de la Guesthouse de Dondon.\n• Besoins actuels prioritaires : Sacs de ciment, fer à béton, panneaux photovoltaïques solaires, pupitres et tables scolaires pour les élèves.",
        },
      ],
    },
    leadership: {
      kicker: "Notre équipe dirigeante",
      title: "Le Conseil d’Administration de la Fondation.",
      description: "Le Conseil d’Administration de la Fondation Blessed Vally réunit foi chrétienne, compétence éducative, responsabilité légale, ingénierie et dévouement au service des communautés aux États-Unis et en Haïti.",
      image: "/images/community-children.jpg",
      metaTitle: "Direction & Conseil d'Administration | Fondation Blessed Vally",
      metaDescription: "Découvrez le Conseil d'Administration de la Fondation Blessed Vally : Dr. Vally D. Jn.-Ls. Legouté, Mr. Jean-Ronald Legouté, Mrs. Vanessa R. Bastien-Joseph, Ms. Corie-Henrie Bastien, Ms. Sasha-Vally Bastien et Mr. Geraldyr Lourdy Pierre.",
      sections: [
        {
          eyebrow: "Présidente du Conseil",
          title: "Dr. Vally D. Jn.-Ls. Legouté (En Haïti : Dr. Vally Docteur Jean-Louis)",
          body: "Fondatrice et Présidente du Conseil d’Administration. Porte la vision de l'évangélisation à travers des actions concrètes, l'éducation chrétienne d'excellence et l'implantation d'écoles aux États-Unis et en Haïti.",
        },
        {
          eyebrow: "Vice-président",
          title: "Mr. Jean-Ronald Legouté",
          body: "Vice-président du Conseil d'Administration. Coordonne les initiatives stratégiques, le développement institutionnel, les relations extérieures et les partenariats humanitaires et communautaires.",
        },
        {
          eyebrow: "Trésorière",
          title: "Mrs. Vanessa R. Bastien-Joseph",
          body: "Trésorière du Conseil d'Administration. Assure la gestion financière, la supervision budgétaire, la transparence comptable, la conservation des registres de dons et l'allocation rigoureuse des ressources.",
        },
        {
          eyebrow: "Secrétaire",
          title: "Ms. Corie-Henrie Bastien",
          body: "Secrétaire du Conseil d'Administration. Assure la tenue des registres statutaires, la rédaction des procès-verbaux des assemblées, la correspondance officielle et le suivi des formalités administratives.",
        },
        {
          eyebrow: "Administratrice",
          title: "Ms. Sasha-Vally Bastien",
          body: "Administratrice au Conseil. Participe aux délibérations du Conseil, veille à l'adéquation des projets avec la mission statutaire de la Fondation et appuie la gouvernance générale.",
        },
        {
          eyebrow: "Conseiller",
          title: "Mr. Geraldyr Lourdy Pierre",
          body: "Conseiller auprès du Conseil. Apporte son expertise technique et d'ingénierie, ses conseils stratégiques et son orientation continue au déploiement des chantiers et infrastructures de la Fondation.",
        },
      ],
    },
    partnerships: {
      kicker: "Partenaires avec nous",
      title: "Une transformation véritable passe par la collaboration fraternelle.",
      description: "Apportez votre expérience, votre réseau, votre générosité ou votre prière à une mission qui unit foi chrétienne, éducation d'excellence et développement communautaire.",
      image: "/images/community-gathering.jpg",
      metaTitle: "Partenariats | Fondation Blessed Vally",
      metaDescription: "Collaborez avec la Fondation Blessed Vally pour développer des écoles chrétiennes, l'accès à l'eau potable et soutenir les familles en Haïti et aux USA.",
      sections: [
        {
          eyebrow: "Nous Accueillons",
          title: "Des partenaires qui veulent construire concrètement.",
          body: "Nous accueillons les ministères et Églises chrétiennes, les écoles et corps professoral, les organisations philanthropiques, les entreprises et les personnes de foi engagées à proclamer l'Évangile et à servir les communautés par des œuvres tangibles.",
          bullets: [
            "Soutenir la création d'écoles chrétiennes de référence",
            "Participer au financement de l'eau potable et des infrastructures",
            "Envoyer ou soutenir des équipes missionnaires sur le terrain",
            "Parrainer la scolarisation d'enfants et la formation des maîtres",
          ],
        },
        {
          eyebrow: "Ouvrir le Dialogue",
          title: "Dites-nous ce que vous souhaitez bâtir avec nous.",
          body: "Si votre organisation partage notre engagement pour Christ, les enfants et la transformation communautaire, nous serons heureux d'échanger avec vous.",
        },
      ],
    },
    news: {
      kicker: "Blog officiel & Chroniques du terrain",
      title: "Articles, réflexions et publications de la direction.",
      description: "Découvrez les publications officielles de la Fondatrice Dr. Vally D. Jn.-Ls. Legouté et de la direction : projet de puits artésien à Brostage, avancées du complexe éducatif et vision missionnaire globale.",
      image: "/images/children-school.jpg",
      metaTitle: "Blog officiel & Chroniques | Fondation Blessed Vally",
      metaDescription: "Lisez les articles officiels et chroniques historiques de la Fondation Blessed Vally sur l'eau potable, l'éducation chrétienne et la foi en action.",
      sections: [
        {
          eyebrow: "Archives & Mémoire",
          title: "Documenter fidèlement chaque étape de la mission.",
          body: "La Fondation Blessed Vally préserve ses publications authentiques parues en 2022 et 2023. Elles témoignent des convictions spirituelles fondatrices, de l'urgence de l'eau potable à Brostage et du déploiement continu de la vision missionnaire.",
        },
      ],
    },
    getInvolved: {
      kicker: "Rejoignez la mission",
      title: "Vous avez une place dans cette œuvre.",
      description: "Bénévolat. Don. Prière. Partenariat. Service. Éducation. Une mission fondée sur la foi grandit lorsque chacun apporte ses talents avec intention.",
      image: "/images/children-uniforms.jpg",
      metaTitle: "Participer | Fondation Blessed Vally",
      metaDescription: "Découvrez comment donner, prier, servir, faire du bénévolat et soutenir la Fondation Blessed Vally.",
      sections: [
        {
          eyebrow: "Façons de Participer",
          title: "Passer de l’intérêt à la contribution concrète.",
          body: "Que vous soyez enseignant, responsable chrétien, professionnel, bienfaiteur, bénévole ou membre de la communauté, vous avez un rôle à jouer dans cette mission.",
          bullets: [
            "Partager vos compétences techniques ou éducatives",
            "Contribuer financièrement aux chantiers et aux fournitures scolaires",
            "Prier fidèlement pour les enfants, les enseignants et les missionnaires",
            "Faire connaître les besoins en eau potable et en éducation de Brostage",
          ],
        },
      ],
    },
    donate: {
      kicker: "Votre don change des vies",
      title: "Donner de la force à une vision qui dure.",
      description: "Votre générosité permet à la Fondation Blessed Vally de faire progresser l’éducation chrétienne, l’accès à l’eau potable, le soutien missionnaire et le secours humanitaire.",
      image: "/images/children-classroom.jpg",
      metaTitle: "Faire un don | Fondation Blessed Vally",
      metaDescription: "Soutenez la construction de l'école chrétienne, le forage d'eau potable et l'aide humanitaire de la Fondation Blessed Vally en Haïti et aux USA.",
      sections: [
        {
          eyebrow: "Gestion Intègre & Transparente",
          title: "Chaque don sert directement la mission sur le terrain.",
          body: "Vos contributions financent directement la construction des salles de classe à Brostage, l'adduction d'eau potable, les livres scolaires et l'assistance aux enfants vulnérables. Nous veillons à une stricte discipline budgétaire.",
          bullets: [
            "Achat direct de matériaux de construction (ciment, fer, toiture)",
            "Forage de puits artésien et installation de réservoirs filtrants",
            "Prise en charge de la scolarité et de la cantine des écoliers",
            "Émission d'un reçu officiel de confirmation pour chaque don",
          ],
        },
        {
          eyebrow: "Modalités de Don",
          title: "Paiement en ligne sécurisé ou virement direct.",
          body: "Vous pouvez donner en ligne par carte bancaire sécurisée via Stripe, par transfert Zelle, par virement bancaire direct (Wire Bank of America ou BUH en Haïti), ou par envoi de chèque postal à l'ordre de Blessed Vally Foundation Inc.",
        },
      ],
    },
    contact: {
      kicker: "Contactez-nous",
      title: "Parlons de ce qui est possible ensemble.",
      description: "Nous accueillons avec joie les personnes et organisations qui souhaitent échanger sur notre mission spirituelle, notre vision éducative, nos projets ou nos partenariats.",
      image: "/images/community-gathering.jpg",
      metaTitle: "Contact | Fondation Blessed Vally",
      metaDescription: "Contactez la Fondation Blessed Vally : adresses à Miami (USA) et Pétion-Ville / Dondon (Haïti), téléphones vérifiés et courriel officiel.",
      sections: [
        {
          eyebrow: "Coordonnées Officielles",
          title: "Fondation Blessed Vally Inc.",
          body: "Coordonnées officielles :\n• Adresse postale (Mailing) : 12933 SW 129 Street, Miami, FL 33177, États-Unis\n• Bureau administratif : 609 NE 123rd Street, North-Miami, FL 33161, États-Unis\n• Adresse en Haïti : 12, Pelerin 4A, Petionville-Haiti\n• Centre de mission Haïti : Brostage, Dondon, Département du Nord, Haïti\n• Courriel : blessedvallyfoundation@gmail.com\n• Site web : blessedvallyfoundation.org\n• Téléphones (USA) : +1 (786) 443-0472 / +1 (845) 655-7399\n• Téléphones (Haïti) : +509 3618-4340 / +509 4310-8621 / +509 48 34 2601",
        },
      ],
    },
    taxStatus: {
      kicker: "Statut Juridique, Fiscal & Transparence",
      title: "Une fondation chrétienne engagée au service des communautés.",
      description: "Blessed Vally Foundation, Inc. (BVF) est une organisation à but non lucratif constituée dans l’État de Floride, aux États-Unis, en 2012, et enregistrée auprès de la Division des corporations du Département d’État de Floride (Sunbiz - N12000006840).",
      image: "/images/community-children.jpg",
      metaTitle: "Statut juridique, fiscal et transparence | Fondation Blessed Vally",
      metaDescription: "Mentions légales officielles, gouvernance, mission institutionnelle et situation administrative et fiscale de Blessed Vally Foundation, Inc. en Floride (Sunbiz N12000006840).",
      sections: [
        {
          eyebrow: "Dénomination & Immatriculation",
          title: "Organisation sans but lucratif constituée en Floride (Sunbiz).",
          body: "Blessed Vally Foundation, Inc. (BVF) est une organisation à but non lucratif (Florida Non-Profit Corporation) constituée dans l’État de Floride, aux États-Unis, en 2012, et enregistrée auprès de la Division des corporations du Département d’État de Floride (Sunbiz).\n\n• Dénomination légale : BLESSED VALLY FOUNDATION, INC.\n• Numéro d’enregistrement en Floride : N12000006840\n• Registre officiel : Florida Department of State – Division of Corporations (Sunbiz)\n• Direction : Fondée et présidée par Dr. Vally D. Jn.-Ls. Legouté\n\nNotre mission institutionnelle :\nLa fondation œuvre à l’annonce de l’Évangile de Jésus-Christ par des actions concrètes, notamment dans les domaines suivants :\n• L’éducation chrétienne et le développement des enfants et des jeunes.\n• L’accès à l’eau potable et l’amélioration des infrastructures sanitaires.\n• La sécurité alimentaire et l’assistance humanitaire.\n• Le soutien aux familles et aux personnes vulnérables.\n• Le développement communautaire durable.\n\nNos interventions se concentrent particulièrement en Haïti, notamment à Fragneauville–Delmas et à Brostage–Dondon, dans une perspective de transformation spirituelle, éducative et sociale.",
          bullets: [
            "Dénomination légale : BLESSED VALLY FOUNDATION, INC.",
            "Organisation à but non lucratif constituée en Floride en 2012 (Florida Non-Profit Corporation)",
            "Numéro de dossier Sunbiz : N12000006840",
            "Missions à Fragneauville–Delmas et Brostage–Dondon (Haïti)",
          ],
        },
        {
          eyebrow: "Gouvernance de la fondation",
          title: "Direction et Conseil d'Administration de la Fondation.",
          body: "La direction de Blessed Vally Foundation est assurée par un Conseil d'Administration engagé :\n\n• Présidente : Dr. Vally D. Jn.-Ls. Legouté\n• Vice-président : Jean-Ronald Legouté\n• Trésorière : Vanessa R. Bastien-Joseph\n• Secrétaire : Corie-Henrie Bastien\n• Administratrice : Sasha-Vally Bastien\n• Conseiller : Geraldyr Lourdy Pierre\n\nCette équipe contribue à l’orientation stratégique, à l’administration et à la réalisation des objectifs de la fondation, sous réserve des responsabilités définies dans ses documents officiels.",
          bullets: [
            "Présidente : Dr. Vally D. Jn.-Ls. Legouté",
            "Vice-président : Jean-Ronald Legouté",
            "Trésorière : Vanessa R. Bastien-Joseph",
            "Secrétaire : Corie-Henrie Bastien",
            "Administratrice : Sasha-Vally Bastien",
            "Conseiller : Geraldyr Lourdy Pierre",
          ],
        },
        {
          eyebrow: "Situation Administrative & Fiscale",
          title: "Démarches administratives et statut fiscal 501(c)(3).",
          body: "Blessed Vally Foundation entreprend actuellement les démarches nécessaires à la régularisation et à la réactivation de son dossier administratif auprès des autorités compétentes de Floride.\n\nLes démarches relatives au rétablissement de sa reconnaissance d’exonération fiscale fédérale au titre de la section 501(c)(3) de l’Internal Revenue Code sont également prévues.\n\nÀ ce jour, la fondation ne présente pas son statut 501(c)(3) comme étant rétabli ou actuellement reconnu par l’IRS.\n\nLes contributions financières ne doivent pas être considérées comme fiscalement déductibles sur la seule base de l’enregistrement de la fondation en Floride. Leur traitement fiscal dépend du statut officiellement reconnu et des lois applicables.",
          quote: "Transparence, vérité et rigueur administrative forment le fondement de la relation de confiance avec nos donateurs et partenaires.",
          bullets: [
            "Démarches de régularisation et de réactivation administrative en cours auprès de l'État de Floride",
            "Démarches relatives au rétablissement du statut d'exonération fiscale fédérale 501(c)(3) prévues avec l'IRS",
            "Statut 501(c)(3) non présenté comme rétabli ou actuellement reconnu à ce jour",
            "Traitement fiscal des dons soumis aux lois applicables et au statut officiellement reconnu",
          ],
        },
        {
          eyebrow: "Transparence & Responsabilité",
          title: "Transparence, registre officiel Sunbiz et notre engagement.",
          body: "Blessed Vally Foundation s’engage à promouvoir une gouvernance responsable, une gestion transparente des ressources et une communication fidèle concernant ses activités et son statut administratif.\n\nLes informations officielles seront actualisées au fur et à mesure de l’achèvement des démarches légales et fiscales.\n\n• Consultation du registre officiel : Florida Division of Corporations – Sunbiz (Document #N12000006840)\n\nNotre engagement :\nServir Dieu en servant notre prochain, annoncer l’Évangile par des actions concrètes et contribuer à bâtir des communautés plus fortes, plus dignes et porteuses d’espérance.\n\nBlessed Vally Foundation — La foi en action au service de l’humanité.",
          quote: "Servir Dieu en servant notre prochain, annoncer l’Évangile par des actions concrètes et contribuer à bâtir des communautés plus fortes, plus dignes et porteuses d’espérance.",
        },
        {
          eyebrow: "Adresses Officielles",
          title: "Adresse postale officielle et bureaux de la Fondation.",
          body: "Conformément aux registres officiels de la Fondation (consultables sur blessedvallyfoundation.org) :\n\n• ADRESSE POSTALE OFFICIELLE (Mailing Address) :\nBlessed Vally Foundation Inc.\n12933 SW 129 Street\nMiami, FL 33177, États-Unis\n(Adresse officielle pour l'envoi des chèques de dons, courriers administratifs et documents officiels)\n\n• BUREAU ADMINISTRATIF (Office Address) :\n609 NE 123rd Street\nNorth-Miami, FL 33161, États-Unis\n\n• ADRESSE EN HAÏTI :\n12, Pelerin 4A, Petionville-Haiti\n\n• SIÈGE ET CENTRE DE MISSION EN HAÏTI :\nBrostage, Dondon, Département du Nord, Haïti\n(Lieu d'implantation du complexe éducatif, de l'école et des travaux en cours)",
        },
        {
          eyebrow: "Téléphones & Disponibilité",
          title: "Numéros de téléphone officiels et permanence.",
          body: "La Fondation est joignable directement par téléphone et par messagerie électronique aux coordonnées officielles suivantes :\n\n• TÉLÉPHONES OFFICIELS ÉTATS-UNIS :\n+1 (786) 443-0472\n+1 (845) 655-7399\n\n• TÉLÉPHONES OFFICIELS HAÏTI :\n+509 3618-4340\n+509 4310-8621\n+509 48 34 2601\n\n• COURRIEL OFFICIEL :\nblessedvallyfoundation@gmail.com\n\n• HORAIRES D'OUVERTURE ET DE PERMANENCE :\nLundi – Vendredi : 09h00 – 23h00 (Heure de l'Est / EST)\nDimanche : 09h00 – 16h00 (Heure de l'Est / EST)",
        },
      ],
    },
    privacy: {
      kicker: "Protection des données & Respect des donateurs",
      title: "Politique de confidentialité.",
      description: "La Fondation Blessed Vally Inc. veille à la sécurité, à la confidentialité et au respect absolu de la vie privée de ses donateurs, partenaires et visiteurs.",
      image: "/images/community-gathering.jpg",
      metaTitle: "Politique de confidentialité | Fondation Blessed Vally",
      metaDescription: "Découvrez notre engagement envers la protection de vos données personnelles, la sécurisation des transactions et le respect des donateurs.",
      sections: [
        {
          eyebrow: "Principes fondamentaux",
          title: "Un engagement fondé sur la confiance et l’intégrité.",
          body: "La Fondation Blessed Vally Inc. (« BVF ») traite les renseignements personnels avec le même respect et la même exigence éthique que ses actions humanitaires et éducatives sur le terrain.\nNous ne vendons, ne louons, n’échangeons et ne commercialisons jamais les coordonnées ou les informations personnelles de nos donateurs et correspondants auprès d’aucun organisme tiers ou annonceur publicitaire.",
          bullets: ["Aucune revente ni échange de listes de donateurs", "Collecte strictement limitée aux besoins de la mission et des reçus", "Sécurisation bancaire certifiée TLS sans stockage des numéros de carte", "Droit d’accès, de rectification et d’effacement garanti sur simple demande"],
        },
        {
          eyebrow: "Données collectées",
          title: "Des informations recueillies avec clarté et mesure.",
          body: "Lorsque vous interagissez avec notre site (formulaire de contact, don en ligne Stripe, virement bancaire, demande de reçu officiel), nous ne recueillons que les informations indispensables :\n• Vos coordonnées de contact : nom, prénom, adresse courriel, numéro de téléphone et adresse postale (nécessaire à l'envoi des reçus officiels pour chèques ou déclarations administratives).\n• Vos données de contribution : montant du don, date, affectation choisie et référence bancaire.\n• Données de navigation : données anonymisées d'audience pour assurer la fiabilité technique du site.\nIMPORTANT : Les données relatives aux cartes de crédit ou de débit sont traitées exclusivement par notre processeur certifié Stripe sous le protocole de chiffrement TLS/SSL. La Fondation ne conserve et n'a jamais accès à vos numéros complets de carte bancaire.",
        },
        {
          eyebrow: "Utilisation & Conservation",
          title: "Comment vos renseignements sont utilisés.",
          body: "Les renseignements recueillis ont pour finalité exclusive :\n1. L’émission et la transmission de vos reçus de dons et confirmations administratives.\n2. La réponse à vos sollicitations, demandes de partenariats ou questions concernant nos chantiers en Haïti.\n3. L’envoi de nouvelles régulières sur les avancées de la mission, uniquement si vous en avez manifesté le souhait.\nVos données sont conservées pour la durée strictement requise par les obligations comptables et juridiques applicables aux organisations à but non lucratif dans l'État de Floride et aux États-Unis.",
        },
        {
          eyebrow: "Vos droits & Contact",
          title: "Exercer vos droits auprès de la Fondation.",
          body: "Vous disposez à tout moment du droit de consulter, rectifier ou demander la suppression de vos données personnelles conservées par la Fondation, ou de vous désinscrire de toute communication future.\nPour toute demande relative à la protection de vos données, vous pouvez nous écrire à notre adresse officielle :\n• Courriel officiel : blessedvallyfoundation@gmail.com\n• Téléphone officiel : +1 (786) 443-0472 / +1 (845) 655-7399\n• Adresse postale : Blessed Vally Foundation Inc., 12933 SW 129 Street, Miami, FL 33177, États-Unis.",
          quote: "La confiance de nos donateurs et des familles que nous servons constitue le pilier fondamental de notre action.",
        },
      ],
    },
    terms: {
      kicker: "Cadre légal & Règles du site",
      title: "Conditions d’utilisation.",
      description: "Les présentes conditions encadrent l’accès et l’utilisation du site officiel de la Fondation Blessed Vally Inc. ainsi que les modalités applicables aux dons et contributions.",
      image: "/images/children-school.jpg",
      metaTitle: "Conditions d’utilisation | Fondation Blessed Vally",
      metaDescription: "Consultez les conditions générales d’utilisation du site de la Fondation Blessed Vally Inc. et les modalités encadrant les contributions.",
      sections: [
        {
          eyebrow: "Objet & Champ d'application",
          title: "Acceptation des conditions régissant ce site.",
          body: "En accédant au présent site web (blessedvallyfoundation.org) et à ses services associés, vous acceptez de vous conformer aux présentes conditions d’utilisation ainsi qu’à l’ensemble des lois et règlements applicables.\nLe site a pour vocation d’informer le public sur les actions de la Fondation Blessed Vally Inc., de favoriser le dialogue avec nos partenaires et de permettre aux bienfaiteurs de soutenir nos projets éducatifs, spirituels et humanitaires aux États-Unis et en Haïti.",
        },
        {
          eyebrow: "Propriété intellectuelle",
          title: "Protection des contenus, photographies et marque.",
          body: "L’ensemble des éléments présents sur ce site — y compris les textes, logos, identité graphique, vidéos et photographies documentant les chantiers et la vie des enfants en Haïti — sont la propriété exclusive de la Fondation Blessed Vally Inc. ou font l’objet d’autorisations d’exploitation spécifiques.\nToute reproduction, représentation, modification ou diffusion totale ou partielle de ces contenus sans l’accord préalable écrit de la Fondation est strictement interdite.",
          bullets: ["Photographies du terrain et des écoles protégées par le droit d'auteur", "Marque, logos et sceau Blessed Vally Foundation réservés", "Usage strictement personnel et non commercial autorisé pour consultation"],
        },
        {
          eyebrow: "Dons & Engagements financiers",
          title: "Modalités et nature des contributions.",
          body: "Toutes les contributions financières versées à la Fondation — par paiement en ligne Stripe, chèque postal Bank of America, virement bancaire Wire ou transfert Zelle — constituent des dons volontaires et irrévocables en faveur de l'objet statutaire de la Fondation.\n• Affectation des fonds : Les dons sont alloués aux programmes éducatifs, à la construction des infrastructures scolaires en Haïti, à l’assistance humanitaire et à l'autonomie en eau potable.\n• Reçus officiels : Un reçu officiel de confirmation est émis pour chaque don selon les directives administratives applicables.\n• Sécurité : Les transactions par carte en ligne sont opérées sous environnement sécurisé TLS par Stripe.",
        },
        {
          eyebrow: "Droit applicable & Siège officiel",
          title: "Juridiction compétente et coordonnées officielles.",
          body: "Les présentes conditions d’utilisation sont régies et interprétées conformément aux lois de l’État de Floride et aux lois fédérales des États-Unis d’Amérique.\nPour toute question relative aux présentes conditions d’utilisation, vous pouvez joindre la direction de la Fondation :\n• Blessed Vally Foundation Inc.\n• Bureau officiel : 609 NE 123rd Street, North Miami, FL 33161\n• Adresse postale : 12933 SW 129 Street, Miami, FL 33177\n• Téléphones officiels : +1 (786) 443-0472 / +1 (845) 655-7399 / +509 3618-4340\n• Courriel officiel : blessedvallyfoundation@gmail.com",
        },
      ],
    },
  },
};

export const homeContent = {
  en: {
    eyebrow: "United States + Haiti",
    title: "Our community is our responsibility.",
    description: "“Our community is our responsibility, but our ultimate mission is to win souls for Christ through concrete actions of love and service.” We bring together faith, education, service, leadership and community development across the United States and Haiti.",
    visionLabel: "Our official vision",
    visionTitle: "Accompanying communities for the establishment of the Kingdom of Jesus Christ.",
    visionBody: "“Accompanying communities with activities aimed at helping them know God, understand His will, and adhere to it for the establishment of the Kingdom of Jesus Christ.” Our mission is winning souls for Christ through concrete activities demonstrating that Jesus is the only One in Whom we must place our trust.",
    pillarLabel: "The five pillars",
    pillarTitle: "A whole-person approach to transformation.",
    pillarBody: "Lasting change needs more than one answer. These five areas move together, with evangelism, children and communities at the center.",
    impactEyebrow: "The official mission",
    impactTitle: "Winning souls for Christ through concrete activities.",
    impactBody: "“Gagner des âmes pour Christ à travers des activités concrètes prouvant que Jésus est le seul Homme en Qui nous devons nous confier.” When faith in Christ, Christian education, clean water, and loving service unite, families grow resilient and generations are transformed.",
    impactCta: "Discover our mission",
    haitiLabel: "Our work in Haiti",
    haitiTitle: "A place of purpose, faith and concrete service.",
    haitiBody: "Haiti remains at the heart of BVF’s mission. We believe every child deserves Christian education, clean water, healthcare access, hope, and an environment in which they can thrive.",
    haitiCta: "Explore our Haiti works",
    storiesLabel: "Official Blog & Archives",
    storiesTitle: "Authentic dispatches and published milestone accounts.",
    storiesBody: "Explore our published articles, words from the founder, and documented progress from our community works in Haiti.",
    finalTitle: "Help build what comes next.",
    finalBody: "Whether you want to give, partner, pray, serve or learn more, there is an active place for you in this mission.",
  },
  fr: {
    eyebrow: "États-Unis + Haïti",
    title: "Notre communauté est notre responsabilité.",
    description: "« Notre communauté est notre responsabilité, mais notre mission ultime est de gagner des âmes pour Christ à travers des actions concrètes d’amour et de service. » Nous réunissons la foi vivante, l’éducation chrétienne, le service, le leadership et le développement communautaire aux États-Unis et en Haïti.",
    visionLabel: "Notre vision officielle",
    visionTitle: "Accompagner les communautés pour l'établissement du Royaume de Jésus-Christ.",
    visionBody: "« Accompagner les communautés avec des activités visant à les aider à connaître Dieu, à comprendre Sa volonté et à y adhérer pour l’établissement du Royaume de Jésus-Christ. » Notre mission est de gagner des âmes pour Christ à travers des activités concrètes prouvant que Jésus est le seul Homme en Qui nous devons nous confier.",
    pillarLabel: "Les cinq piliers",
    pillarTitle: "Une approche globale de la transformation.",
    pillarBody: "Le changement durable demande plus d’une réponse. Ces cinq domaines avancent ensemble, avec l'évangélisation, les enfants et les communautés au centre.",
    impactEyebrow: "La mission officielle",
    impactTitle: "Gagner des âmes pour Christ à travers des activités concrètes.",
    impactBody: "« Gagner des âmes pour Christ à travers des activités concrètes prouvant que Jésus est le seul Homme en Qui nous devons nous confier. » Lorsque la foi en Jésus-Christ, l'éducation chrétienne d'excellence, l'eau potable et l'amour en action s'unissent, les familles sont relevées et les générations transformées.",
    impactCta: "Découvrir notre mission",
    haitiLabel: "Notre travail en Haïti",
    haitiTitle: "Un lieu de vocation, de foi et de service concret.",
    haitiBody: "Haïti demeure au cœur de la mission de la BVF. Nous croyons que chaque enfant mérite une éducation chrétienne d'excellence, l'eau potable, l'espérance et un cadre où grandir en toute dignité.",
    haitiCta: "Découvrir nos chantiers en Haïti",
    storiesLabel: "Blog officiel & Archives",
    storiesTitle: "Chroniques authentiques et publications de référence.",
    storiesBody: "Découvrez les articles publiés, le message fondateur et les avancées concrètes de nos chantiers documentés en Haïti.",
    finalTitle: "Construisons la suite ensemble.",
    finalBody: "Que vous souhaitiez donner, devenir partenaire, prier, servir ou simplement en savoir plus, vous avez une place dans cette mission.",
  },
} as const;

export const newsCards: Record<Language, { date: string; label: string; title: string; body: string; page: PageKey }[]> = {
  en: [
    {
      date: "Nov 23, 2023",
      label: "Clean Water & Health",
      title: "Access to Clean Water and Community Growth in Brostage",
      body: "Discover our hydraulic project establishing an artesian well, filtration cisterns and sanitation blocks in Dondon.",
      page: "news",
    },
    {
      date: "Feb 03, 2023",
      label: "Mission & Pillars",
      title: "Blessed Vally Foundation: Global Vision and Three Core Entities",
      body: "An overview of our three core entities: the Foundation, Missionary Residence, and Dondon community guesthouse.",
      page: "news",
    },
    {
      date: "Mar 07, 2022",
      label: "Faith & Calling",
      title: "Word from the Founder: Our Community is Our Responsibility",
      body: "“Our community is our responsibility, but our ultimate mission is to win souls for Christ through concrete actions of love and service.” Dr. Vally D. Jn.-Ls. Legouté shares the founding spiritual conviction.",
      page: "news",
    },
  ],
  fr: [
    {
      date: "23 Nov. 2023",
      label: "Eau potable & Santé",
      title: "Accès à l’eau potable, puits artésien et développement à Brostage",
      body: "Découvrez notre projet d’établissement d’un réseau hydraulique, d’un puits artésien et de blocs sanitaires à Dondon.",
      page: "news",
    },
    {
      date: "03 Fév. 2023",
      label: "Mission & Piliers",
      title: "Blessed Vally Foundation : Vision globale et trois entités complémentaires",
      body: "Présentation des trois entités clés : la Fondation, la Résidence missionnaire et la structure d’accueil à Dondon.",
      page: "news",
    },
    {
      date: "07 Mars 2022",
      label: "Foi & Vocation",
      title: "Mot de la Fondatrice : Notre communauté est notre responsabilité",
      body: "« Notre communauté est notre responsabilité, mais notre mission ultime est de gagner des âmes pour Christ à travers des actions concrètes d’amour et de service. » Le message fondateur de Dre Vally D. Jn.-Ls. Legouté.",
      page: "news",
    },
  ],
};
