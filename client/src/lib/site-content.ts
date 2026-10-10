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
  { key: "mission", label: { en: "Our mission", fr: "Notre mission" } },
  { key: "faith", label: { en: "Faith & evangelism", fr: "Foi & évangélisation" } },
  { key: "community", label: { en: "Community transformation", fr: "Transformation communautaire" } },
  { key: "leadership", label: { en: "Our leadership", fr: "Notre équipe dirigeante" } },
  { key: "getInvolved", label: { en: "Get involved", fr: "Participer" } },
  { key: "donate", label: { en: "Donate", fr: "Faire un don" } },
  { key: "contact", label: { en: "Contact", fr: "Contact" } },
];

export const legalNav: NavItem[] = [
  { key: "taxStatus", label: { en: "Tax status & receipts", fr: "Statut fiscal & reçus" } },
  { key: "privacy", label: { en: "Privacy policy", fr: "Politique de confidentialité" } },
  { key: "terms", label: { en: "Terms of use", fr: "Conditions d’utilisation" } },
];

export const pageLabels: Record<PageKey, Record<Language, string>> = {
  home: { en: "Home", fr: "Accueil" },
  about: { en: "About us", fr: "À propos" },
  mission: { en: "Our mission", fr: "Notre mission" },
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
  taxStatus: { en: "Tax status & official directory", fr: "Statut fiscal & coordonnées officielles" },
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
    footerNote: "A faith-driven foundation serving children, families and communities in the United States and Haiti.",
    archive: "Archive",
    current: "Current focus",
    send: "Open your email app",
    email: "Email",
    formName: "Your name",
    formEmail: "Your email",
    formMessage: "How would you like to connect?",
    legal: "design by INFUSA (www.infusa.pro)",
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
    footerNote: "Une fondation fondée sur la foi au service des enfants, des familles et des communautés aux États-Unis et en Haïti.",
    archive: "Archives",
    current: "Priorité actuelle",
    send: "Ouvrir votre messagerie",
    email: "Courriel",
    formName: "Votre nom",
    formEmail: "Votre courriel",
    formMessage: "Comment souhaitez-vous entrer en contact ?",
    legal: "design by INFUSA (www.infusa.pro)",
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
      body: "We support Christian faith, biblical values, discipleship, evangelism and a life of service to others.",
      page: "faith",
      accent: "coral",
    },
    {
      number: "02",
      title: "Christian education",
      short: "Learning with purpose",
      body: "We imagine learning environments where academic excellence, character, creativity, leadership and faith grow together.",
      page: "education",
      accent: "leaf",
    },
    {
      number: "03",
      title: "Children & youth",
      short: "Investing in the future",
      body: "We invest in children and young people so they can discover their potential and become a positive force in their communities.",
      page: "education",
      accent: "gold",
    },
    {
      number: "04",
      title: "Community transformation",
      short: "From need to agency",
      body: "We address community needs while building opportunity, leadership and sustainable solutions for families.",
      page: "community",
      accent: "ocean",
    },
    {
      number: "05",
      title: "Humanitarian service",
      short: "Dignity in action",
      body: "We serve people facing hardship with practical assistance, compassion and love.",
      page: "haiti",
      accent: "ink",
    },
  ],
  fr: [
    {
      number: "01",
      title: "Foi & évangélisation",
      short: "Enracinés en Christ",
      body: "Nous promouvons la foi chrétienne, les valeurs bibliques, le discipulat, l’évangélisation et le service envers les autres.",
      page: "faith",
      accent: "coral",
    },
    {
      number: "02",
      title: "Éducation chrétienne",
      short: "Apprendre avec vocation",
      body: "Nous imaginons des environnements où excellence académique, caractère, créativité, leadership et foi grandissent ensemble.",
      page: "education",
      accent: "leaf",
    },
    {
      number: "03",
      title: "Enfants & jeunesse",
      short: "Investir dans l’avenir",
      body: "Nous investissons dans les enfants et les jeunes afin qu’ils découvrent leur potentiel et deviennent une force positive dans leur communauté.",
      page: "education",
      accent: "gold",
    },
    {
      number: "04",
      title: "Transformation communautaire",
      short: "Du besoin à l’autonomie",
      body: "Nous répondons aux besoins tout en construisant des opportunités, du leadership et des solutions durables pour les familles.",
      page: "community",
      accent: "ocean",
    },
    {
      number: "05",
      title: "Service humanitaire",
      short: "La dignité en action",
      body: "Nous servons les personnes confrontées aux difficultés avec des actions concrètes, compassion et amour.",
      page: "haiti",
      accent: "ink",
    },
  ],
};

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
      title: "A foundation building for the future.",
      description: "Blessed Vally Foundation serves children, families and communities through education, Christian ministry, humanitarian service and community development.",
      image: "/images/community-children.jpg",
      metaTitle: "About Blessed Vally Foundation",
      metaDescription: "Discover Blessed Vally Foundation, a faith-driven organization serving children, families and communities in the United States and Haiti.",
      sections: [
        { eyebrow: "Our beginning", title: "A response to real needs — and a vision for lasting change.", body: "The Foundation was born from a desire to respond to real needs while creating opportunities for lasting change. Our work has included initiatives supporting children and communities in Haiti, particularly where educational and basic community resources are limited.", quote: "We are not only responding to need. We are building for the future." },
        { eyebrow: "Our next chapter", title: "Faith, education, innovation and service in one shared direction.", body: "Today, BVF is developing a broader model that brings together Christian faith, education, innovation, leadership, humanitarian service and community transformation. Our ambition is active, collaborative and rooted in dignity.", bullets: ["United States and Haiti as primary areas of service", "A long-term focus on children, families and community leadership", "Partnerships that make sustainable transformation possible"] },
      ],
    },
    mission: {
      kicker: "Our mission",
      title: "Serve God. Empower people. Transform generations.",
      description: "We create educational, spiritual, humanitarian and community-development opportunities that help children, families and communities thrive.",
      image: "/images/children-school.jpg",
      metaTitle: "Our Mission | Blessed Vally Foundation",
      metaDescription: "Learn how Blessed Vally Foundation serves God and humanity through education, faith, humanitarian service and community development.",
      sections: [
        { eyebrow: "Mission", title: "Opportunity is a form of service.", body: "To serve God and humanity by creating educational, spiritual, humanitarian and community-development opportunities that empower children, families and communities to thrive.", quote: "Our work begins with compassion and continues with a plan." },
        { eyebrow: "Vision", title: "A network of Christ-centered initiatives.", body: "We aim to build a network of educational and community initiatives that develop knowledgeable, compassionate, responsible and purpose-driven leaders who can transform their families, communities, nations and generations." },
      ],
    },
    education: {
      kicker: "Education is our future",
      title: "Education that forms the whole person.",
      description: "True education develops the mind, character, relationships, leadership, creativity, faith and sense of purpose of every learner.",
      image: "/images/children-classroom.jpg",
      metaTitle: "Education | Blessed Vally Foundation",
      metaDescription: "Explore Blessed Vally Foundation’s long-term vision for Christian schools, innovative models, microschools and whole-person education.",
      sections: [
        { eyebrow: "The BVF approach", title: "Academic excellence is only the beginning.", body: "We envision educational environments where academic excellence, character development, faith, creativity, leadership and individualized learning work together to prepare students for their God-given purpose.", bullets: ["Christian schools and innovative school models", "Microschool and small-school approaches", "Individualized learning and character development", "Teacher development and family engagement", "Community-based education and opportunity for underserved children"] },
        { eyebrow: "A developing vision", title: "Building what children and communities will need next.", body: "Our ultimate goal is to establish educational environments where children can discover their potential and develop the knowledge, character, faith and skills necessary to serve their communities.", quote: "Blessed Vally Foundation is exploring innovative school-development models and potential strategic partnerships in support of its long-term educational vision." },
      ],
    },
    faith: {
      kicker: "Faith & evangelism",
      title: "Lasting transformation begins with a relationship with God.",
      description: "Christian faith is not a side note at BVF. It is the foundation from which we serve, teach, lead and care for others.",
      image: "/images/community-gathering.jpg",
      metaTitle: "Faith & Evangelism | Blessed Vally Foundation",
      metaDescription: "Learn how Christian faith, biblical values, discipleship and evangelism shape the mission of Blessed Vally Foundation.",
      sections: [
        { eyebrow: "A living foundation", title: "Faith that becomes a way of serving.", body: "BVF seeks to support Christian faith, biblical values, discipleship, evangelism and service to others. We believe faith is expressed through how we treat people, how we develop leaders and how we build opportunities for children.", quote: "Faith gives the work its center. Service gives it its shape." },
        { eyebrow: "In practice", title: "A posture of welcome, truth and compassion.", body: "Our ministry and educational vision invite children, families, churches and partners into a shared journey of hope, responsibility and purpose. Every initiative should honor the dignity of the people it serves." },
      ],
    },
    community: {
      kicker: "Community transformation",
      title: "From immediate help to sustainable agency.",
      description: "We respond to community needs while developing the education, opportunity and leadership that make long-term transformation possible.",
      image: "/images/community-gathering.jpg",
      metaTitle: "Community Transformation | Blessed Vally Foundation",
      metaDescription: "See how Blessed Vally Foundation connects faith, education, leadership and humanitarian service to empower families and communities.",
      sections: [
        { eyebrow: "Our approach", title: "Invest in people, then build with them.", body: "We seek to address community needs while developing sustainable solutions that empower individuals and families. Our approach moves beyond immediate assistance toward education, opportunity, leadership and long-term transformation.", bullets: ["Listen before designing a response", "Strengthen families and local leadership", "Pair practical service with education and opportunity", "Build partnerships that remain useful over time"] },
        { eyebrow: "A shared responsibility", title: "Community is not a backdrop. It is the work.", body: "Our community is our responsibility. We serve with compassion today while building solutions for tomorrow — alongside the people who know their communities best." },
      ],
    },
    haiti: {
      kicker: "Ongoing construction & Service calling",
      title: "Building to transform lives and communities in Haiti.",
      description: "From Brostage and Dondon to Delmas, Blessed Vally Foundation is raising lasting infrastructure: a two-story Christian educational campus, clean drinking water reservoir, modern sanitary facilities, and a missionary residence.",
      image: "/images/travaux/chantier-facade-colonnes.jpg",
      metaTitle: "Ongoing Works in Haiti | Blessed Vally Foundation",
      metaDescription: "Discover active construction in Haiti: two-story educational campus, clean water reservoir, sanitary block, and machinery on the ground.",
      sections: [
        {
          eyebrow: "Making a difference in Haiti",
          title: "Sustainable communities and the Great Commission.",
          body: "Blessed Vally Group is dedicated to uplifting communities in Haiti by creating sustainable, flourishing living environments through high-quality real estate projects, community support, and affordable housing. Alongside these efforts, our ultimate mission is to share the Gospel of Jesus Christ across Haiti through the Great Commission, backed by prayer, material contributions, and dedicated local builders.",
          quote: "We believe in the power of purposeful action to elevate living standards while anchoring lives in Christ."
        },
        {
          eyebrow: "Transforming lives through action",
          title: "Serving the vulnerable with dignity, education, and shelter.",
          body: "At Blessed Vally Group, our driving purpose is to assist vulnerable families and advance Christian education. We put into action our educational programs, community housing initiatives, and humanitarian relief to provide a secure environment where children and families can thrive and fulfill their God-given potential.",
          bullets: [
            "Affordable, safe housing and missionary support facilities",
            "Urgent clean drinking water reservoir and four-stall sanitary block",
            "Comprehensive Christian school and vocational training classrooms",
            "Disaster resilience and community health infrastructure"
          ]
        },
        {
          eyebrow: "Works overview & Collective mobilization",
          title: "Building multiple facilities for the community.",
          body: "Our building project includes multiple integrated facilities: classrooms, administrative offices, a food distribution warehouse, and a health clinic. Dr. Vally Jean-Louis Legouté has financed substantial progress out of personal funds, and we invite churches, partners, and generous donors to join hands with us to complete this vital mission.",
          quote: "Every bag of cement, load of gravel, and prayer invested brings us closer to a lasting sanctuary of hope for Haiti's children."
        }
      ],
    },
    leadership: {
      kicker: "Our leadership",
      title: "People carrying the vision forward.",
      description: "The Foundation’s leadership brings together faith, education, stewardship and a commitment to communities in the United States and Haiti.",
      image: "/images/community-children.jpg",
      metaTitle: "Our Leadership | Blessed Vally Foundation",
      metaDescription: "Meet the leadership team of Blessed Vally Foundation: Dr. Vally Jean-Louis Legouté, Jean-Ronald Legouté and Mr. Pierre.",
      sections: [
        { eyebrow: "Founder & President", title: "Dr. Vally Jean-Louis Legouté", body: "Dr. Vally Jean-Louis Legouté is the Founder and President of Blessed Vally Foundation. Her vision combines Christian faith, education, leadership, humanitarian service and community transformation." },
        { eyebrow: "Vice President", title: "Mr. Jean-Ronald Legouté", body: "Mr. Jean-Ronald Legouté serves as Vice President and works alongside the President in advancing the Foundation’s mission, educational vision, community initiatives and long-term development." },
        { eyebrow: "Counselor", title: "Mr. Pierre", body: "Mr. Pierre serves as a Counselor to the Foundation, providing guidance and support as the organization continues to develop its mission and initiatives." },
      ],
    },
    partnerships: {
      kicker: "Partner with us",
      title: "Meaningful transformation happens through collaboration.",
      description: "Bring your experience, network, generosity or prayer to a mission that connects education, faith, leadership and community development.",
      image: "/images/community-gathering.jpg",
      metaTitle: "Partnerships | Blessed Vally Foundation",
      metaDescription: "Partner with Blessed Vally Foundation to expand educational opportunity, strengthen families and create sustainable community impact.",
      sections: [
        { eyebrow: "We welcome", title: "Partners who want to build, not simply observe.", body: "We welcome relationships with Christian organizations, churches and ministries, schools and educators, educational innovators, nonprofit and community organizations, philanthropic partners, businesses and individuals committed to serving children and communities.", bullets: ["Expand educational opportunity", "Strengthen families and local communities", "Develop leaders with character and purpose", "Create sustainable community impact"] },
        { eyebrow: "Start a conversation", title: "Tell us what you are building.", body: "If your organization shares our concern for children, education and community transformation, we would be glad to explore a thoughtful partnership." },
      ],
    },
    news: {
      kicker: "Official Blog & Field Dispatches",
      title: "Articles, insights and dispatches from the mission field.",
      description: "Read official publications from Founder Dr. Vally Jean-Louis Legouté and leadership: Brostage clean water well project, educational campus milestones, and our global missionary vision.",
      image: "/images/children-school.jpg",
      metaTitle: "Blog & Official Dispatches | Blessed Vally Foundation",
      metaDescription: "Read the official blog posts and published articles from Blessed Vally Foundation on clean water, education, and community transformation in Haiti.",
      sections: [
        { eyebrow: "Editorial Mission", title: "Direct accounts from our leadership and field partners.", body: "Blessed Vally Foundation documents every initiative with honesty and faith. Here you will find official publications on our hydraulic projects, school development in Dondon, and pastoral messages directly from the Founder." },
        { eyebrow: "Archive & History", title: "Preserving every milestone with context.", body: "Every step taken since our founding tells a story of faith, perseverance, and genuine community partnership across Haiti and the United States." },
      ],
    },
    getInvolved: {
      kicker: "Join the mission",
      title: "There is a place for you in this work.",
      description: "Volunteer. Give. Pray. Partner. Serve. Educate. A mission grows when people bring their gifts with intention.",
      image: "/images/children-uniforms.jpg",
      metaTitle: "Get Involved | Blessed Vally Foundation",
      metaDescription: "Find ways to volunteer, give, pray, partner, serve and educate with Blessed Vally Foundation.",
      sections: [
        { eyebrow: "Ways to participate", title: "Move from interest to contribution.", body: "Whether you are an educator, ministry leader, professional, organization, donor, volunteer or community member, there is a place for you in this mission.", bullets: ["Volunteer your time or expertise", "Give toward education and community initiatives", "Pray for children, families and partners", "Partner with the Foundation on a shared project", "Serve through ministry, education or community work"] },
        { eyebrow: "A simple next step", title: "Start with a conversation.", body: "Tell us what draws you to the mission and we will help identify a meaningful next step." },
      ],
    },
    donate: {
      kicker: "Your gift can change a life",
      title: "Give strength to a vision that lasts.",
      description: "Your generosity helps Blessed Vally Foundation serve children, families and communities through education, Christian ministry, humanitarian assistance and community development.",
      image: "/images/children-classroom.jpg",
      metaTitle: "Donate | Blessed Vally Foundation",
      metaDescription: "Support Blessed Vally Foundation’s work in education, Christian ministry, humanitarian service and community transformation.",
      sections: [
        { eyebrow: "The impact of generosity", title: "A gift can open a door to learning, leadership and hope.", body: "Every contribution helps create opportunities for children, families and communities. Stripe provides the secure checkout path so supporters can give with clarity and confidence.", bullets: ["Support educational opportunities", "Strengthen community initiatives", "Help sustain humanitarian service", "Invest in children and future leaders"] },
        { eyebrow: "Ways to give", title: "Give online or by direct transfer.", body: "Donations can be processed online with credit card via Stripe, or made directly by Zelle, direct wire transfer (Wire), or check deposit at Bank of America." },
      ],
    },
    contact: {
      kicker: "Connect with Blessed Vally Foundation",
      title: "Let’s talk about what is possible.",
      description: "We welcome individuals and organizations interested in our mission, educational vision, partnerships, volunteering or support.",
      image: "/images/community-gathering.jpg",
      metaTitle: "Contact | Blessed Vally Foundation",
      metaDescription: "Contact Blessed Vally Foundation to learn more about its mission, educational vision, partnerships and ways to serve.",
      sections: [
        {
          eyebrow: "Directory & Offices",
          title: "Blessed Vally Foundation Inc.",
          body: "Official Directory:\n• U.S. Mailing Address: 12933 SW 129 Street, Miami, FL 33177, USA\n• Administrative Office: 609 NE 123rd Street, North-Miami, FL 33161, USA\n• Port-au-Prince Address: Rue Buteau L. Pierre #20, Fragneauville, Delmas, Haiti\n• Haiti Mission Center: Brostage, Dondon, Northern Department, Haiti\n• Email: blessedvallyfoundation@gmail.com\n• Website: blessedvallyfoundation.org\n• U.S. Phone: +1 (786) 443-0472\n• Haiti Phones: +509 3618-4340 / +509 4310-8621",
        },
        { eyebrow: "Commitment", title: "Thoughtful attention for every inquiry.", body: "Whether you represent an educational institution, a humanitarian organization, a Christian community, or wish to get involved personally, every inquiry is given dedicated attention by our team." },
      ],
    },
    taxStatus: {
      kicker: "Corporate Status & Legal Records",
      title: "Tax status, official receipts and corporate records.",
      description: "Official legal registration, tax status, charitable receipt policies, registered postal address, and verified telephone contacts for Blessed Vally Foundation Inc.",
      image: "/images/community-children.jpg",
      metaTitle: "Tax Status, Receipts & Official Directory | Blessed Vally Foundation",
      metaDescription: "Review Blessed Vally Foundation Inc.'s corporate non-profit status, tax receipt guidelines, registered postal address, and official telephone numbers.",
      sections: [
        {
          eyebrow: "Corporate & Tax Status",
          title: "Non-profit corporation registered in the State of Florida.",
          body: "Blessed Vally Foundation Inc. is a registered Florida Non-Profit Corporation (incorporated under the Florida Department of State Division of Corporations - Sunbiz) under the official legal title:\n\n« BLESSED VALLY FOUNDATION, INC. »\n\n• Corporate Purpose: Christian faith, educational advancement, humanitarian service, leadership development, clean water infrastructure, and long-term community transformation serving children and families in Haiti and the United States.\n• Executive Governance: Headed by Dr. Vally Jean-Louis Legouté (Founder & President), Mr. Jean-Ronald Legouté (Vice President), and Mr. Pierre (Counselor).\n• Stewardship: Operating with strict accountability, where donor contributions directly fund educational initiatives, emergency relief, and verified on-the-ground infrastructure in Haiti.",
          bullets: ["Legal Title: Blessed Vally Foundation Inc.", "Incorporated as a Florida Non-Profit Corporation", "Dedicated to educational, humanitarian and Christian mission", "Financial stewardship and direct-to-field impact"],
        },
        {
          eyebrow: "Tax Receipts & Deductibility",
          title: "Official statement on donor receipts.",
          body: "An official charitable receipt is issued for every contribution received by Blessed Vally Foundation Inc. (whether made by online credit card via Stripe, mailed check to Bank of America, Zelle transfer, or direct wire transfer).\n\n• Receipt Contents: Each receipt specifies the donor's full name, contribution date, amount received, payment method, and confirms that no goods or services were provided in exchange for the gift.\n• Tax Deductibility: Charitable deductions depend on individual tax circumstances and the governing tax codes of the donor's jurisdiction (including applicable IRS provisions for U.S. taxpayers). Donors are advised to retain their official receipts and consult their tax advisor or certified CPA to determine specific tax deduction eligibility.\n• How to Request a Receipt: After completing any direct bank transfer or check deposit, please send confirmation details to blessedvallyfoundation@gmail.com.",
          quote: "Every donor receives a transparent, verified acknowledgment for their accounting and tax records.",
        },
        {
          eyebrow: "Official Addresses",
          title: "Registered postal mailing address and office locations.",
          body: "In accordance with the Foundation's official directory (as published on blessedvallyfoundation.org):\n\n• OFFICIAL POSTAL MAILING ADDRESS:\nBlessed Vally Foundation Inc.\n12933 SW 129 Street\nMiami, FL 33177, United States\n(Official address for check contributions, legal correspondence and administrative mail)\n\n• ADMINISTRATIVE OFFICE:\n609 NE 123rd Street\nNorth-Miami, FL 33161, United States\n\n• PORT-AU-PRINCE ADDRESS (HAITI):\nRue Buteau L. Pierre #20\nFragneauville, Delmas, Haiti\n\n• HAITI MISSION CENTER & PROGRAM GROUNDS:\nBrostage, Dondon, Northern Department, Haiti\n(Site of the primary school, community agora, and ongoing construction complex)",
        },
        {
          eyebrow: "Official Phone & Hours",
          title: "Direct telephone numbers and operating hours.",
          body: "The Foundation may be contacted through its verified telephone lines and email:\n\n• OFFICIAL U.S. TELEPHONE:\n+1 (786) 443-0472\n\n• OFFICIAL HAITI TELEPHONES:\n+509 3618-4340\n+509 4310-8621\n\n• OFFICIAL EMAIL:\nblessedvallyfoundation@gmail.com\n\n• OPERATING HOURS:\nMonday – Friday: 9:00 AM – 11:00 PM (EST)\nSunday: 9:00 AM – 4:00 PM (EST)",
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
          body: "When you interact with our website (contact form, online donation via Stripe, wire/Zelle transfer, or tax receipt request), we collect only necessary details:\n• Contact details: Full name, email address, phone number, and postal mailing address (required for official donor tax receipts).\n• Gift history: Donation amount, date, designated project, and transaction reference.\n• Technical logs: Anonymized analytics to ensure website uptime and security.\nIMPORTANT: Credit and debit card transactions are processed directly by our PCI-compliant payment processor Stripe via secure TLS encryption. Blessed Vally Foundation does not store and never has access to your full card numbers.",
        },
        {
          eyebrow: "Data Usage & Retention",
          title: "How your information is used.",
          body: "Information provided to us is solely used to:\n1. Issue official donor receipts, confirmations and tax statements.\n2. Respond promptly to inquiries, partnership proposals, and questions regarding our construction in Haiti.\n3. Share programmatic updates and news regarding the Foundation's impact, strictly when requested.\nRecords are retained only for the duration required by Florida non-profit statutes, Federal IRS tax reporting guidelines, and administrative best practices.",
        },
        {
          eyebrow: "Your Rights & Contact",
          title: "Exercising your privacy rights.",
          body: "You may at any time request access to, correction of, or deletion of your personal records, or opt out of any future communications.\nFor all privacy inquiries, please contact our administrative team:\n• Official Email: blessedvallyfoundation@gmail.com\n• Official Phone: +1 (786) 443-0472\n• Mailing Address: Blessed Vally Foundation Inc., 12933 SW 129 Street, Miami, FL 33177, USA.",
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
          body: "These terms are governed by and construed in accordance with the laws of the State of Florida and the United States of America.\nFor any legal questions regarding these terms, contact our executive office:\n• Blessed Vally Foundation Inc.\n• Executive Office: 609 NE 123rd Street, North Miami, FL 33161\n• Official Mailing Address: 12933 SW 129 Street, Miami, FL 33177\n• Official Telephone: +1 (786) 443-0472 / +509 3618-4340\n• Official Email: blessedvallyfoundation@gmail.com",
        },
      ],
    },
  },
  fr: {
    about: {
      kicker: "Qui nous sommes",
      title: "Une fondation qui construit pour l’avenir.",
      description: "La Fondation Blessed Vally sert les enfants, les familles et les communautés à travers l’éducation, le ministère chrétien, les services humanitaires et le développement communautaire.",
      image: "/images/community-children.jpg",
      metaTitle: "À propos de la Fondation Blessed Vally",
      metaDescription: "Découvrez la Fondation Blessed Vally, une organisation fondée sur la foi au service des enfants, familles et communautés aux États-Unis et en Haïti.",
      sections: [
        { eyebrow: "Nos origines", title: "Répondre aux besoins réels — avec une vision de changement durable.", body: "La Fondation est née du désir de répondre aux besoins réels tout en créant des opportunités de changement durable. Notre travail a notamment inclus des initiatives en faveur des enfants et des communautés en Haïti, particulièrement là où les ressources éducatives et communautaires de base sont limitées.", quote: "Nous ne nous contentons pas de répondre aux besoins. Nous construisons pour l’avenir." },
        { eyebrow: "Notre nouvelle étape", title: "Foi, éducation, innovation et service dans une même direction.", body: "Aujourd’hui, la BVF développe un modèle plus vaste qui réunit la foi chrétienne, l’éducation, l’innovation, le leadership, le service humanitaire et la transformation communautaire. Notre ambition est active, collaborative et enracinée dans la dignité.", bullets: ["Les États-Unis et Haïti comme principales zones de service", "Un engagement à long terme envers les enfants, les familles et le leadership communautaire", "Des partenariats qui rendent la transformation durable possible"] },
      ],
    },
    mission: {
      kicker: "Notre mission",
      title: "Servir Dieu. Donner des moyens d’agir. Transformer les générations.",
      description: "Nous créons des opportunités éducatives, spirituelles, humanitaires et communautaires qui permettent aux enfants, aux familles et aux communautés de s’épanouir.",
      image: "/images/children-school.jpg",
      metaTitle: "Notre mission | Fondation Blessed Vally",
      metaDescription: "Découvrez comment la Fondation Blessed Vally sert Dieu et l’humanité par l’éducation, la foi, le service humanitaire et le développement communautaire.",
      sections: [
        { eyebrow: "Mission", title: "Créer des opportunités est une forme de service.", body: "Servir Dieu et l’humanité en créant des opportunités éducatives, spirituelles, humanitaires et communautaires qui permettent aux enfants, aux familles et aux communautés de s’épanouir.", quote: "Notre travail commence par la compassion et se poursuit avec un projet." },
        { eyebrow: "Vision", title: "Un réseau d’initiatives centrées sur Christ.", body: "Nous voulons créer un réseau d’initiatives éducatives et communautaires capables de former des leaders compétents, compatissants, responsables et conscients de leur vocation, afin qu’ils transforment leurs familles, leurs communautés, leurs nations et les générations futures." },
      ],
    },
    education: {
      kicker: "L’éducation est notre avenir",
      title: "Une éducation qui forme la personne dans sa globalité.",
      description: "Une véritable éducation développe l’intelligence, le caractère, les relations, le leadership, la créativité, la foi et le sens de la vocation de chaque élève.",
      image: "/images/children-classroom.jpg",
      metaTitle: "Éducation | Fondation Blessed Vally",
      metaDescription: "Découvrez la vision à long terme de la Fondation Blessed Vally pour les écoles chrétiennes, les modèles innovants, les microschools et l’éducation intégrale.",
      sections: [
        { eyebrow: "L’approche BVF", title: "L’excellence académique n’est qu’un commencement.", body: "Nous envisageons des environnements où l’excellence académique, le développement du caractère, la foi, la créativité, le leadership et l’apprentissage individualisé travaillent ensemble afin de préparer les élèves à accomplir le dessein que Dieu a pour leur vie.", bullets: ["Des écoles chrétiennes et des modèles scolaires innovants", "Des approches de petites écoles et de microschools", "L’apprentissage individualisé et le développement du caractère", "La formation des enseignants et l’implication des familles", "L’éducation communautaire et les opportunités pour les enfants défavorisés"] },
        { eyebrow: "Une vision en construction", title: "Bâtir ce dont les enfants et les communautés auront besoin demain.", body: "Notre objectif ultime est d’établir des environnements éducatifs où les enfants peuvent découvrir leur potentiel et développer les connaissances, le caractère, la foi et les compétences nécessaires pour servir leur communauté.", quote: "La Fondation Blessed Vally explore des modèles innovants de développement scolaire et des partenariats stratégiques potentiels à l’appui de sa vision éducative à long terme." },
      ],
    },
    faith: {
      kicker: "Foi & évangélisation",
      title: "Une transformation durable commence par une relation avec Dieu.",
      description: "La foi chrétienne n’est pas un élément secondaire de la BVF. Elle est le fondement à partir duquel nous servons, enseignons, dirigeons et prenons soin des autres.",
      image: "/images/community-gathering.jpg",
      metaTitle: "Foi & évangélisation | Fondation Blessed Vally",
      metaDescription: "Découvrez comment la foi chrétienne, les valeurs bibliques, le discipulat et l’évangélisation orientent la mission de la Fondation Blessed Vally.",
      sections: [
        { eyebrow: "Un fondement vivant", title: "Une foi qui devient une manière de servir.", body: "La BVF cherche à promouvoir la foi chrétienne, les valeurs bibliques, le discipulat, l’évangélisation et le service envers les autres. Nous croyons que la foi s’exprime dans la manière dont nous traitons les personnes, formons les leaders et créons des opportunités pour les enfants.", quote: "La foi donne au travail son centre. Le service lui donne sa forme." },
        { eyebrow: "Dans la pratique", title: "Une posture d’accueil, de vérité et de compassion.", body: "Notre vision ministérielle et éducative invite les enfants, les familles, les Églises et les partenaires à un chemin partagé d’espérance, de responsabilité et de vocation. Chaque initiative doit honorer la dignité des personnes qu’elle sert." },
      ],
    },
    community: {
      kicker: "Transformation communautaire",
      title: "De l’aide immédiate à l’autonomie durable.",
      description: "Nous répondons aux besoins des communautés tout en développant l’éducation, les opportunités et le leadership qui rendent la transformation durable possible.",
      image: "/images/community-gathering.jpg",
      metaTitle: "Transformation communautaire | Fondation Blessed Vally",
      metaDescription: "Découvrez comment la Fondation Blessed Vally relie foi, éducation, leadership et service humanitaire pour autonomiser les familles et les communautés.",
      sections: [
        { eyebrow: "Notre approche", title: "Investir dans les personnes, puis construire avec elles.", body: "Nous cherchons à répondre aux besoins des communautés tout en développant des solutions durables qui permettent aux individus et aux familles de devenir autonomes. Notre approche va au-delà de l’aide immédiate pour favoriser l’éducation, les opportunités, le leadership et une transformation durable.", bullets: ["Écouter avant de concevoir une réponse", "Renforcer les familles et le leadership local", "Associer le service concret à l’éducation et aux opportunités", "Créer des partenariats utiles dans le temps"] },
        { eyebrow: "Une responsabilité partagée", title: "La communauté n’est pas un décor. C’est le travail.", body: "Notre communauté est notre responsabilité. Nous servons avec compassion aujourd’hui tout en construisant des solutions pour demain — avec les personnes qui connaissent le mieux leurs communautés." },
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
          eyebrow: "Faisons une différence en Haïti",
          title: "Des communautés durables ancrées dans la Grande Commission.",
          body: "Blessed Vally Group a pour objectif d'améliorer les conditions de vie des communautés en Haïti. La fondation s'engage à créer des communautés durables et prospères en investissant dans des projets immobiliers de qualité, en soutenant les initiatives communautaires et en offrant des logements décents. En plus de ces actions, la fondation a pour mission de propager l'Évangile de Jésus-Christ en Haïti à travers la Grande Commission.",
          quote: "Nous croyons en la puissance de l'action concrète pour améliorer la qualité de vie et apporter l'espérance."
        },
        {
          eyebrow: "Transformons des vies par l'action",
          title: "Aider les personnes vulnérables avec dignité et espérance.",
          body: "Chez Blessed Vally Group, nous sommes animés par notre engagement à aider les personnes vulnérables et à promouvoir l'Évangile. Nous mettons en œuvre nos programmes éducatifs, nos initiatives de construction et notre accompagnement sur le terrain pour aider chacun à surmonter les défis et à réaliser son plein potentiel.",
          bullets: [
            "Logements abordables, confortables et accueil missionnaire sécurisé",
            "Construction prioritaire d'un réservoir d'eau potable et d'un bloc sanitaire à 4 WC",
            "Érection d'une école chrétienne R+1 avec salles de cours lumineuses",
            "Centre de distribution alimentaire et dispensaire de soins primaires"
          ]
        },
        {
          eyebrow: "Aperçu des travaux & Appel à la solidarité",
          title: "Nous construisons plusieurs bâtiments pour le projet.",
          body: "La fondation construit actuellement plusieurs bâtiments destinés à accueillir l'école chrétienne, les bureaux administratifs, le dépôt de provisions alimentaires et le centre de santé. Dr. Vally Jean-Louis Legouté a déjà réalisé d'importants travaux sur ses propres fonds personnels, et la fondation sollicite le soutien fraternel de tous pour achever ces infrastructures vitales.",
          quote: "Chaque don et chaque contribution en matériel permettent d'accélérer les travaux au bénéfice direct des enfants."
        }
      ],
    },
    leadership: {
      kicker: "Notre équipe dirigeante",
      title: "Des personnes qui portent la vision vers l’avenir.",
      description: "La direction de la Fondation réunit foi, éducation, responsabilité et engagement envers les communautés aux États-Unis et en Haïti.",
      image: "/images/community-children.jpg",
      metaTitle: "Notre équipe dirigeante | Fondation Blessed Vally",
      metaDescription: "Découvrez l’équipe dirigeante de la Fondation Blessed Vally : Dr. Vally Jean-Louis Legouté, Jean-Ronald Legouté et M. Pierre.",
      sections: [
        { eyebrow: "Fondatrice et Présidente", title: "Dr. Vally Jean-Louis Legouté", body: "Dr. Vally Jean-Louis Legouté est la Fondatrice et Présidente de la Fondation Blessed Vally. Sa vision réunit la foi chrétienne, l’éducation, le leadership, le service humanitaire et la transformation communautaire." },
        { eyebrow: "Vice-Président", title: "M. Jean-Ronald Legouté", body: "M. Jean-Ronald Legouté exerce les fonctions de Vice-Président et travaille aux côtés de la Présidente pour faire progresser la mission de la Fondation, sa vision éducative, ses initiatives communautaires et son développement à long terme." },
        { eyebrow: "Conseiller", title: "M. Pierre", body: "M. Pierre agit en qualité de Conseiller auprès de la Fondation et apporte ses conseils et son soutien au développement de la mission et des initiatives de l’organisation." },
      ],
    },
    partnerships: {
      kicker: "Partenaires avec nous",
      title: "Une transformation véritable passe par la collaboration.",
      description: "Apportez votre expérience, votre réseau, votre générosité ou votre prière à une mission qui relie éducation, foi, leadership et développement communautaire.",
      image: "/images/community-gathering.jpg",
      metaTitle: "Partenariats | Fondation Blessed Vally",
      metaDescription: "Collaborez avec la Fondation Blessed Vally pour élargir les opportunités éducatives, renforcer les familles et créer un impact durable.",
      sections: [
        { eyebrow: "Nous accueillons", title: "Des partenaires qui veulent construire, pas simplement observer.", body: "Nous accueillons les organisations chrétiennes, les Églises et ministères, les écoles et éducateurs, les innovateurs dans le domaine de l’éducation, les organisations à but non lucratif et communautaires, les partenaires philanthropiques, les entreprises et les personnes engagées envers les enfants et les communautés.", bullets: ["Élargir les opportunités éducatives", "Renforcer les familles et les communautés locales", "Développer des leaders de caractère et de vocation", "Créer un impact communautaire durable"] },
        { eyebrow: "Ouvrir le dialogue", title: "Dites-nous ce que vous construisez.", body: "Si votre organisation partage notre souci des enfants, de l’éducation et de la transformation communautaire, nous serons heureux d’explorer un partenariat réfléchi." },
      ],
    },
    news: {
      kicker: "Blog officiel & Chroniques du terrain",
      title: "Articles, réflexions et avancées de la Fondation.",
      description: "Découvrez les publications officielles de la Fondatrice Dr Vally Jean-Louis Legouté et de la direction : projet de puits artésien à Brostage, avancées du complexe éducatif et vision missionnaire globale.",
      image: "/images/children-school.jpg",
      metaTitle: "Blog officiel & Chroniques | Fondation Blessed Vally",
      metaDescription: "Lisez les articles officiels et publications de la Fondation Blessed Vally sur l'eau potable, l'éducation chrétienne et les chantiers en Haïti.",
      sections: [
        { eyebrow: "Mission éditoriale", title: "Des écrits authentiques au plus près du terrain.", body: "La Fondation Blessed Vally documente chaque initiative avec clarté et conviction chrétienne. Retrouvez ici les articles publiés sur le puits artésien de Brostage, la construction du complexe de Dondon et les messages pastoraux de la Fondatrice." },
        { eyebrow: "Mémoire & Archives", title: "Chaque étape franchie au service des enfants.", body: "Chaque chantier et chaque avancée témoignent de la fidélité de nos donateurs et de l’engagement inlassable de nos équipes entre Haïti et la Floride." },
      ],
    },
    getInvolved: {
      kicker: "Rejoignez la mission",
      title: "Vous avez une place dans cette œuvre.",
      description: "Bénévolat. Don. Prière. Partenariat. Service. Éducation. Une mission grandit lorsque chacun apporte ses talents avec intention.",
      image: "/images/children-uniforms.jpg",
      metaTitle: "Participer | Fondation Blessed Vally",
      metaDescription: "Découvrez comment faire du bénévolat, donner, prier, servir, éduquer et devenir partenaire de la Fondation Blessed Vally.",
      sections: [
        { eyebrow: "Façons de participer", title: "Passer de l’intérêt à la contribution.", body: "Que vous soyez éducateur, responsable de ministère, professionnel, organisation, donateur, bénévole ou membre de la communauté, vous avez une place dans cette mission.", bullets: ["Donner du temps ou une expertise", "Soutenir des initiatives éducatives et communautaires", "Prier pour les enfants, les familles et les partenaires", "Collaborer avec la Fondation sur un projet commun", "Servir par le ministère, l’éducation ou l’action communautaire"] },
        { eyebrow: "Un premier pas simple", title: "Commencez par une conversation.", body: "Dites-nous ce qui vous attire dans cette mission et nous vous aiderons à identifier une prochaine étape qui a du sens." },
      ],
    },
    donate: {
      kicker: "Votre don peut changer une vie",
      title: "Donner de la force à une vision qui dure.",
      description: "Votre générosité permet à la Fondation Blessed Vally de servir les enfants, les familles et les communautés à travers l’éducation, le ministère chrétien, l’aide humanitaire et le développement communautaire.",
      image: "/images/children-classroom.jpg",
      metaTitle: "Faire un don | Fondation Blessed Vally",
      metaDescription: "Soutenez le travail de la Fondation Blessed Vally dans l’éducation, le ministère chrétien, le service humanitaire et la transformation communautaire.",
      sections: [
        { eyebrow: "L’impact de la générosité", title: "Un don peut ouvrir une porte vers l’apprentissage, le leadership et l’espérance.", body: "Chaque contribution aide à créer des opportunités pour les enfants, les familles et les communautés. Stripe fournit le parcours de paiement sécurisé pour donner avec clarté et confiance.", bullets: ["Soutenir les opportunités éducatives", "Renforcer les initiatives communautaires", "Contribuer au service humanitaire", "Investir dans les enfants et les futurs leaders"] },
        { eyebrow: "Modalités de don", title: "Donnez en ligne ou par virement direct.", body: "Vous pouvez effectuer votre don par carte bancaire sécurisée via Stripe, ou utiliser nos coordonnées officielles pour un don par Zelle, virement bancaire (Wire) ou dépôt de chèque auprès de Bank of America." },
      ],
    },
    contact: {
      kicker: "Contactez la Fondation Blessed Vally",
      title: "Parlons de ce qui est possible.",
      description: "Nous accueillons les personnes et les organisations qui souhaitent en apprendre davantage sur notre mission, notre vision éducative, nos partenariats, le bénévolat ou le soutien.",
      image: "/images/community-gathering.jpg",
      metaTitle: "Contact | Fondation Blessed Vally",
      metaDescription: "Contactez la Fondation Blessed Vally pour en savoir plus sur sa mission, sa vision éducative, ses partenariats et les façons de servir.",
      sections: [
        {
          eyebrow: "Coordonnées & Bureaux",
          title: "Fondation Blessed Vally Inc.",
          body: "Coordonnées officielles :\n• Adresse postale (Mailing) : 12933 SW 129 Street, Miami, FL 33177, États-Unis\n• Bureau administratif : 609 NE 123rd Street, North-Miami, FL 33161, États-Unis\n• Adresse Port-au-Prince : Rue Buteau L. Pierre #20, Fragneauville, Delmas, Haïti\n• Centre de mission Haïti : Brostage, Dondon, Département du Nord, Haïti\n• Courriel : blessedvallyfoundation@gmail.com\n• Site web : blessedvallyfoundation.org\n• Téléphone (USA) : +1 (786) 443-0472\n• Téléphones (Haïti) : +509 3618-4340 / +509 4310-8621",
        },
        { eyebrow: "Engagement", title: "Une écoute attentive pour chaque message.", body: "Que vous représentiez une institution éducative, un organisme humanitaire, une communauté chrétienne ou que vous souhaitiez vous investir individuellement, chaque demande est traitée avec le plus grand soin par notre équipe." },
      ],
    },
    taxStatus: {
      kicker: "Transparence juridique & Déclarations officielles",
      title: "Statut fiscal, reçus et coordonnées officielles.",
      description: "Toutes les mentions légales, le statut fiscal exact de la Fondation Blessed Vally Inc., les directives relatives aux reçus de dons et les coordonnées officielles vérifiées.",
      image: "/images/community-children.jpg",
      metaTitle: "Statut fiscal, Reçus & Coordonnées officielles | Fondation Blessed Vally",
      metaDescription: "Consultez le statut fiscal exact de la Fondation Blessed Vally Inc., les mentions sur les reçus fiscaux, l’adresse postale officielle et les numéros de téléphone officiels.",
      sections: [
        {
          eyebrow: "Statut fiscal exact",
          title: "Organisation sans but lucratif constituée en Floride.",
          body: "La Fondation Blessed Vally Inc. est une organisation à but non lucratif (Florida Non-Profit Corporation) régulièrement immatriculée auprès de la Division of Corporations du Département d'État de Floride (Sunbiz) sous la raison sociale officielle :\n\n« BLESSED VALLY FOUNDATION, INC. »\n\n• Vocation statutaire : Organisation chrétienne, éducative, humanitaire et de bienfaisance engagée dans l'autonomie et la transformation durable des communautés en Haïti et aux États-Unis.\n• Gouvernance exécutive : Dirigée par Dr. Vally Jean-Louis Legouté (Fondatrice et Présidente), M. Jean-Ronald Legouté (Vice-Président) et M. Pierre (Conseiller).\n• Transparence financière : La Fondation opère avec intégrité et veille à ce que l'intégralité des contributions serve directement à la réalisation de sa mission éducative, au soutien humanitaire et à la construction des infrastructures en cours.",
          bullets: ["Raison sociale : Blessed Vally Foundation Inc.", "Statut d'entité sans but lucratif en Floride (Florida Non-Profit Corporation)", "Vocation caritative, éducative et humanitaire internationale", "Comptabilité et gouvernance financière dédiées à la mission"],
        },
        {
          eyebrow: "Reçus fiscaux & Déductibilité",
          title: "Mention officielle sur les reçus de dons.",
          body: "Un reçu officiel de don est émis pour chaque contribution financière reçue par la Fondation Blessed Vally Inc. (paiement par carte bancaire via Stripe, dépôt par chèque Bank of America, transfert Zelle ou virement bancaire Wire / SPIH).\n\n• Conformité et contenu du reçu : Chaque reçu précise le nom du donateur, la date de versement, le montant perçu, la méthode de transaction et atteste qu'aucun bien ni service tangible n'a été fourni en contrepartie du don.\n• Déductibilité fiscale : Les dons versés aux organisations sans but lucratif sont régis par les dispositions fiscales applicables dans chaque pays de résidence du donateur (notamment selon les règles de l'Internal Revenue Code pour les contribuables américains). La Fondation recommande à chaque donateur de conserver son reçu officiel et de consulter son conseiller fiscal, expert-comptable ou spécialiste fiscal pour déterminer l'admissibilité et le montant de la déduction fiscale applicable à sa déclaration.\n• Comment demander votre reçu : Pour tout virement ou dépôt direct, transmettez simplement votre preuve de paiement et vos coordonnées complètes à blessedvallyfoundation@gmail.com.",
          quote: "Chaque donateur reçoit une reconnaissance officielle et une attestation claire pour ses archives administratives et fiscales.",
        },
        {
          eyebrow: "Adresses officielles",
          title: "Adresse postale officielle et bureaux de la Fondation.",
          body: "Conformément aux registres officiels de la Fondation (consultables sur blessedvallyfoundation.org) :\n\n• ADRESSE POSTALE OFFICIELLE (Mailing Address) :\nBlessed Vally Foundation Inc.\n12933 SW 129 Street\nMiami, FL 33177, États-Unis\n(Adresse recommandée pour l'envoi des chèques de dons, courriers administratifs et documents officiels)\n\n• BUREAU ADMINISTRATIF (Office Address) :\n609 NE 123rd Street\nNorth-Miami, FL 33161, États-Unis\n\n• ADRESSE PORT-AU-PRINCE (HAÏTI) :\nRue Buteau L. Pierre #20\nFragneauville, Delmas, Haïti\n\n• SIÈGE ET CENTRE DE MISSION EN HAÏTI :\nBrostage, Dondon, Département du Nord, Haïti\n(Lieu d'implantation du complexe éducatif, de l'école et des travaux en cours)",
        },
        {
          eyebrow: "Téléphones & Permanence",
          title: "Numéros de téléphone officiels et disponibilité.",
          body: "La Fondation est joignable directement par téléphone et par messagerie électronique aux coordonnées officielles suivantes :\n\n• TÉLÉPHONE OFFICIEL ÉTATS-UNIS :\n+1 (786) 443-0472\n\n• TÉLÉPHONES OFFICIELS HAÏTI :\n+509 3618-4340\n+509 4310-8621\n\n• COURRIEL OFFICIEL :\nblessedvallyfoundation@gmail.com\n\n• HORAIRES D'OUVERTURE ET DE PERMANENCE (Working Hours) :\nLundi – Vendredi : 09h00 – 23h00 (Heure de l'Est / EST)\nDimanche : 09h00 – 16h00 (Heure de l'Est / EST)",
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
          bullets: ["Aucune revente ni échange de listes de donateurs", "Collecte strictement limitée aux besoins de la mission et des reçus", "Sécurisation bancaire de niveau bancaire sans stockage des cartes", "Droit d’accès, de rectification et d’effacement garanti sur simple demande"],
        },
        {
          eyebrow: "Données collectées",
          title: "Des informations recueillies avec clarté et mesure.",
          body: "Lorsque vous interagissez avec notre site (formulaire de contact, don en ligne Stripe, virement bancaire, demande de reçu officiel), nous ne recueillons que les informations indispensables :\n• Vos coordonnées de contact : nom, prénom, adresse courriel, numéro de téléphone et adresse postale (nécessaire à l'envoi des reçus officiels pour chèques ou déclarations administratives).\n• Vos données de contribution : montant du don, date, affectation choisie et référence bancaire.\n• Données de navigation : données anonymisées d'audience pour assurer la fiabilité technique du site.\nIMPORTANT : Les données relatives aux cartes de crédit ou de débit sont traitées exclusivement par notre processeur certifié Stripe sous le protocole de chiffrement TLS/SSL. La Fondation ne conserve et n'a jamais accès à vos numéros complets de carte bancaire.",
        },
        {
          eyebrow: "Utilisation & Conservation",
          title: "Comment vos renseignements sont utilisés.",
          body: "Les renseignements recueillis ont pour finalité exclusive :\n1. L’émission et la transmission de vos reçus de dons et confirmations administratives.\n2. La réponse à vos sollicitations, demandes de partenariats ou questions concernant nos chantiers en Haïti.\n3. L’envoi de nouvelles régulières sur les avancées de la mission, uniquement si vous en avez manifesté le souhait.\nVos données sont conservées pour la durée strictement requise par les obligations comptables, fiscales et juridiques applicables aux organisations à but non lucratif dans l'État de Floride et aux États-Unis.",
        },
        {
          eyebrow: "Vos droits & Contact",
          title: "Exercer vos droits auprès de la Fondation.",
          body: "Vous disposez à tout moment du droit de consulter, rectifier ou demander la suppression de vos données personnelles conservées par la Fondation, ou de vous désinscrire de toute communication future.\nPour toute demande relative à la protection de vos données, vous pouvez nous écrire à notre adresse officielle :\n• Courriel officiel : blessedvallyfoundation@gmail.com\n• Téléphone officiel : +1 (786) 443-0472\n• Adresse postale : Blessed Vally Foundation Inc., 12933 SW 129 Street, Miami, FL 33177, États-Unis.",
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
          body: "Toutes les contributions financières versées à la Fondation — par paiement en ligne Stripe, chèque postal Bank of America, virement bancaire Wire/SPIH ou transfert Zelle — constituent des dons volontaires et irrévocables en faveur de l'objet statutaire de la Fondation.\n• Affectation des fonds : Les dons sont alloués aux programmes éducatifs, à la construction des infrastructures scolaires en Haïti, à l’assistance humanitaire et à l'autonomie en eau potable.\n• Reçus officiels : Un reçu officiel de confirmation est émis pour chaque don selon les directives fiscales applicables.\n• Sécurité : Les transactions par carte en ligne sont opérées sous environnement sécurisé SSL par Stripe.",
        },
        {
          eyebrow: "Droit applicable & Siège officiel",
          title: "Juridiction compétente et coordonnées officielles.",
          body: "Les présentes conditions d’utilisation sont régies et interprétées conformément aux lois de l’État de Floride et aux lois fédérales des États-Unis d’Amérique.\nPour toute question relative aux présentes conditions d’utilisation, vous pouvez joindre la direction de la Fondation :\n• Blessed Vally Foundation Inc.\n• Bureau officiel : 609 NE 123rd Street, North Miami, FL 33161\n• Adresse postale : 12933 SW 129 Street, Miami, FL 33177\n• Téléphone officiel : +1 (786) 443-0472 / +509 3618-4340\n• Courriel officiel : blessedvallyfoundation@gmail.com",
        },
      ],
    },
  },
};

export const homeContent = {
  en: {
    eyebrow: "United States + Haiti",
    title: "Our community is our responsibility.",
    description: "We bring together faith, education, service, leadership and community development to create opportunities for children, families and underserved communities.",
    visionLabel: "Our vision",
    visionTitle: "A catalyst for Christian education, community transformation and leadership development.",
    visionBody: "We serve with compassion today while building sustainable solutions for tomorrow — in the United States, Haiti and wherever God opens doors for service.",
    pillarLabel: "The five pillars",
    pillarTitle: "A whole-person approach to transformation.",
    pillarBody: "Lasting change needs more than one answer. These five areas move together, with children and communities at the center.",
    impactEyebrow: "The new BVF message",
    impactTitle: "We are not only responding to need. We are building for the future.",
    impactBody: "When faith, education, leadership, service and opportunity come together, individual lives can become stronger families and more resilient communities.",
    impactCta: "Read our mission",
    haitiLabel: "Our work in Haiti",
    haitiTitle: "A place of purpose and service.",
    haitiBody: "Haiti remains an important part of BVF’s mission. We believe its children deserve quality education, opportunity, hope and an environment in which they can thrive.",
    haitiCta: "Explore our Haiti focus",
    storiesLabel: "Official Blog & News",
    storiesTitle: "Recent stories and updates from the field.",
    storiesBody: "Read the latest published articles, messages from leadership, and direct reports from our community work in Haiti.",
    finalTitle: "Help build what comes next.",
    finalBody: "Whether you want to give, partner, pray, serve or learn more, there is a place for you in this mission.",
  },
  fr: {
    eyebrow: "États-Unis + Haïti",
    title: "Notre communauté est notre responsabilité.",
    description: "Nous réunissons la foi, l’éducation, le service, le leadership et le développement communautaire afin de créer des opportunités pour les enfants, les familles et les communautés défavorisées.",
    visionLabel: "Notre vision",
    visionTitle: "Être un catalyseur de l’éducation chrétienne, de la transformation communautaire et du développement du leadership.",
    visionBody: "Nous servons avec compassion aujourd’hui tout en construisant des solutions durables pour demain — aux États-Unis, en Haïti et partout où Dieu ouvrira des portes pour le service.",
    pillarLabel: "Les cinq piliers",
    pillarTitle: "Une approche globale de la transformation.",
    pillarBody: "Le changement durable demande plus d’une réponse. Ces cinq domaines avancent ensemble, avec les enfants et les communautés au centre.",
    impactEyebrow: "Le nouveau message de la BVF",
    impactTitle: "Nous ne nous contentons pas de répondre aux besoins. Nous construisons pour l’avenir.",
    impactBody: "Lorsque la foi, l’éducation, le leadership, le service et les opportunités se réunissent, les vies individuelles peuvent fortifier des familles et des communautés plus résilientes.",
    impactCta: "Découvrir notre mission",
    haitiLabel: "Notre travail en Haïti",
    haitiTitle: "Un lieu de vocation et de service.",
    haitiBody: "Haïti demeure une partie importante de la mission de la BVF. Nous croyons que ses enfants méritent une éducation de qualité, des opportunités, l’espérance et un environnement où ils peuvent s’épanouir.",
    haitiCta: "Découvrir notre engagement en Haïti",
    storiesLabel: "Blog & Actualités officielles",
    storiesTitle: "Les nouvelles de la Fondation sur le terrain.",
    storiesBody: "Découvrez les derniers articles publiés, le mot de la fondatrice et les avancées concrètes de nos chantiers en Haïti.",
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
      title: "Blessed Vally Foundation: Global Vision and Sustainable Impact",
      body: "An overview of our three core entities: the Foundation, Missionary Residence, and Dondon community guesthouse.",
      page: "news",
    },
    {
      date: "Mar 07, 2022",
      label: "Faith & Calling",
      title: "Word from the Founder: Our Community is Our Responsibility",
      body: "Dr. Vally Jean-Louis shares the spiritual conviction that drives our mission to build a brighter future for children in Haiti.",
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
      title: "Blessed Vally Foundation : Vision globale et projets durables",
      body: "Présentation des trois entités clés : la Fondation, la Résidence missionnaire et la structure d’accueil à Dondon.",
      page: "news",
    },
    {
      date: "07 Mars 2022",
      label: "Foi & Vocation",
      title: "Mot de la Fondatrice : Notre communauté est notre responsabilité",
      body: "Le message fondateur de Dre Vally Jean-Louis unissant la foi vivante aux actes concrets pour bâtir une école digne en Haïti.",
      page: "news",
    },
  ],
};
