export interface TeamMember {
  id: string;
  name: string;
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
    name: "Dr. Vally Jean-Louis Legouté",
    role: {
      fr: "Fondatrice et Présidente",
      en: "Founder & President",
    },
    badge: {
      fr: "Direction générale",
      en: "Executive Leadership",
    },
    image: "/images/contact/contact-1.jpg",
    note: {
      fr: "Porte la vision de la Fondation Blessed Vally pour la foi, l’éducation d'excellence et la transformation durable des communautés.",
      en: "Leading the Blessed Vally Foundation vision in faith, educational excellence, and sustainable community transformation.",
    },
    bioHighlight: {
      fr: "Doctorat en Éducation · Maîtrise en Théologie · 36+ années d'enseignement",
      en: "Doctorate in Education · Master’s in Theology · 36+ years in education",
    },
    email: "Blessedvallyfoundation@gmail.com",
    isFounder: true,
  },
  {
    id: "jean-ronald",
    name: "Mr. Jean Ronald Legouté",
    role: {
      fr: "Vice-Président",
      en: "Vice President",
    },
    badge: {
      fr: "Direction exécutive",
      en: "Executive Leadership",
    },
    image: "/images/contact/contact-3.jpg",
    note: {
      fr: "Coordonne les initiatives stratégiques, le développement institutionnel et les partenariats humanitaires et communautaires.",
      en: "Coordinates strategic initiatives, institutional development, and humanitarian community partnerships.",
    },
    bioHighlight: {
      fr: "Gouvernance stratégique & Développement des partenariats",
      en: "Strategic governance & Partnership development",
    },
    email: "Blessedvallyfoundation@gmail.com",
  },
  {
    id: "vanessa",
    name: "Vanessa Ramona Bastien-Joseph",
    role: {
      fr: "Trésorière et Directrice Financière (CFO)",
      en: "Treasurer and CFO",
    },
    badge: {
      fr: "Finance & Trésorerie",
      en: "Finance & Treasury",
    },
    image: "/images/contact/vanessa-bastien.jpg",
    note: {
      fr: "Assure la gouvernance financière, la supervision budgétaire, la transparence comptable et l'allocation rigoureuse des ressources de la Fondation.",
      en: "Leads financial governance, budget oversight, accounting transparency, and rigorous stewardship of Foundation resources.",
    },
    bioHighlight: {
      fr: "Direction financière · Conformité & Trésorerie",
      en: "Financial leadership · Compliance & Treasury",
    },
    email: "Blessedvallyfoundation@gmail.com",
  },
  {
    id: "pierre",
    name: "Ing. Geraldy Loudy Pierre",
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
      fr: "Apporte son expertise d'ingénierie, ses conseils stratégiques et son accompagnement continu au déploiement de la mission et des chantiers.",
      en: "Provides engineering expertise, strategic counsel, and ongoing guidance for the deployment of the Foundation's mission and projects.",
    },
    bioHighlight: {
      fr: "Ingénierie · Conseil technique & Orientation stratégique",
      en: "Engineering · Technical advisory & Strategic counsel",
    },
    email: "Blessedvallyfoundation@gmail.com",
  },
  {
    id: "relations",
    name: "Direction & Relations Partenaires",
    role: {
      fr: "Coordination & Partenariats",
      en: "Partnerships & Outreach",
    },
    badge: {
      fr: "Équipe Partenariats",
      en: "Outreach Team",
    },
    image: "/images/contact/contact-4.jpg",
    note: {
      fr: "À votre écoute pour faciliter les échanges avec nos donateurs, mécènes, églises partenaires et institutions académiques.",
      en: "At your service to facilitate dialogue with donors, sponsors, partner churches, and academic institutions.",
    },
    bioHighlight: {
      fr: "Relations donateurs, fondations partenaires & Églises",
      en: "Donor relations, partner foundations & Churches",
    },
    email: "Blessedvallyfoundation@gmail.com",
  },
  {
    id: "programmes",
    name: "Direction des Programmes Éducatifs",
    role: {
      fr: "Programmes & Communautés",
      en: "Programs & Communities",
    },
    badge: {
      fr: "Équipe Projets",
      en: "Programs Team",
    },
    image: "/images/contact/contact-5.jpg",
    note: {
      fr: "Assure le suivi des projets éducatifs, la scolarisation des enfants, les distributions et la logistique de terrain.",
      en: "Oversees educational initiatives, children's schooling, humanitarian relief, and on-site project logistics.",
    },
    bioHighlight: {
      fr: "Suivi des écoles, cantines & Projets communautaires",
      en: "School tracking, nutrition & Community projects",
    },
    email: "Blessedvallyfoundation@gmail.com",
  },
];
