export interface TeamMember {
  id: string;
  name: string;
  haitiName?: string;
  role: { fr: string; en: string };
  badge: { fr: string; en: string };
  image: string;
  note: { fr: string; en: string };
  bioHighlight?: { fr: string; en: string };
  email: string;
  isFounder?: boolean;
}

export const teamMembers: TeamMember[] = [
  {
    id: "vally",
    name: "Dr. Vally D. Jn.-Ls. Legouté",
    haitiName: "Dr. Vally Docteur Jean-Louis",
    role: {
      fr: "Présidente",
      en: "President",
    },
    badge: {
      fr: "Présidence du Conseil",
      en: "Board President",
    },
    image: "/images/contact/contact-1.jpg",
    note: {
      fr: "Fondatrice et Présidente du Conseil d’Administration. Porte la vision de l'évangélisation à travers des actions concrètes, l'éducation chrétienne d'excellence et l'implantation d'écoles aux États-Unis et en Haïti.",
      en: "Founder and Board President. Leads the vision of evangelism through concrete actions, Christian educational excellence, and the establishment of Christian schools in the United States and Haiti.",
    },
    bioHighlight: {
      fr: "Doctorat en Éducation · Maîtrise en Théologie · 36+ années d'enseignement",
      en: "Doctorate in Education · Master’s in Theology · 36+ years teaching",
    },
    email: "Blessedvallyfoundation@gmail.com",
    isFounder: true,
  },
  {
    id: "jean-ronald",
    name: "Mr. Jean-Ronald Legouté",
    role: {
      fr: "Vice-président",
      en: "Vice President",
    },
    badge: {
      fr: "Vice-Présidence",
      en: "Vice Presidency",
    },
    image: "/images/contact/contact-3.jpg",
    note: {
      fr: "Coordonne les initiatives stratégiques, le développement institutionnel et les partenariats humanitaires et communautaires au sein du Conseil d'administration.",
      en: "Coordinates strategic initiatives, institutional development, and humanitarian community partnerships on the Board of Directors.",
    },
    bioHighlight: {
      fr: "Gouvernance stratégique & Développement des partenariats",
      en: "Strategic governance & Partnership development",
    },
    email: "Blessedvallyfoundation@gmail.com",
  },
  {
    id: "vanessa",
    name: "Mrs. Vanessa R. Bastien-Joseph",
    role: {
      fr: "Trésorière",
      en: "Treasurer",
    },
    badge: {
      fr: "Trésorerie & Finance",
      en: "Treasury & Finance",
    },
    image: "/images/contact/vanessa-bastien.jpg",
    note: {
      fr: "Assure la gestion financière, la supervision budgétaire, la transparence comptable, la conservation des registres de dons et l'allocation rigoureuse des ressources.",
      en: "Oversees financial management, budget supervision, accounting transparency, donation recordkeeping, and rigorous stewardship of Foundation resources.",
    },
    bioHighlight: {
      fr: "Gestion financière · Conformité & Trésorerie",
      en: "Financial management · Compliance & Treasury",
    },
    email: "Blessedvallyfoundation@gmail.com",
  },
  {
    id: "corie-henrie",
    name: "Ms. Corie-Henrie Bastien",
    role: {
      fr: "Secrétaire",
      en: "Secretary",
    },
    badge: {
      fr: "Secrétariat du Conseil",
      en: "Board Secretariat",
    },
    image: "/images/contact/contact-4.jpg",
    note: {
      fr: "Assure la tenue des registres statutaires, la rédaction des procès-verbaux des assemblées, la correspondance officielle et le suivi des formalités administratives.",
      en: "Maintains statutory corporate records, drafts official board meeting minutes, coordinates formal correspondence, and oversees administrative compliance.",
    },
    bioHighlight: {
      fr: "Secrétariat statutaire · Procès-verbaux & Conformité",
      en: "Statutory secretariat · Board minutes & Compliance",
    },
    email: "Blessedvallyfoundation@gmail.com",
  },
  {
    id: "sasha-vally",
    name: "Ms. Sasha-Vally Bastien",
    role: {
      fr: "Administratrice",
      en: "Board Member / Trustee",
    },
    badge: {
      fr: "Conseil d’Administration",
      en: "Board Trustee",
    },
    image: "/images/contact/contact-5.jpg",
    note: {
      fr: "Participe aux délibérations du Conseil, veille à l'adéquation des projets avec la mission statutaire de la Fondation et appuie la gouvernance générale.",
      en: "Participates in board deliberations, ensures programmatic alignment with the Foundation’s statutory mission, and supports organizational governance.",
    },
    bioHighlight: {
      fr: "Gouvernance organisationnelle & Suivi des programmes",
      en: "Organizational governance & Program oversight",
    },
    email: "Blessedvallyfoundation@gmail.com",
  },
  {
    id: "pierre",
    name: "Mr. Geraldyr Lourdy Pierre",
    role: {
      fr: "Conseiller",
      en: "Counselor",
    },
    badge: {
      fr: "Conseil & Orientation",
      en: "Advisory & Counsel",
    },
    image: "/images/contact/contact-2.jpg",
    note: {
      fr: "Apporte son expertise technique et d'ingénierie, ses conseils stratégiques et son orientation continue au déploiement des chantiers et infrastructures de la Fondation.",
      en: "Provides technical engineering expertise, strategic counsel, and ongoing guidance for the deployment of Foundation infrastructure and field projects.",
    },
    bioHighlight: {
      fr: "Ingénierie · Conseil technique & Orientation stratégique",
      en: "Engineering · Technical advisory & Strategic counsel",
    },
    email: "Blessedvallyfoundation@gmail.com",
  },
];
