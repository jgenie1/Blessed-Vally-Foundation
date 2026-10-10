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
    name: "M. Jean-Ronald Legouté",
    role: {
      fr: "Vice-Président",
      en: "Vice President",
    },
    badge: {
      fr: "Direction exécutive",
      en: "Executive Leadership",
    },
    image: "/images/contact/contact-2.jpg",
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
    id: "pierre",
    name: "M. Pierre",
    role: {
      fr: "Conseiller",
      en: "Counselor",
    },
    badge: {
      fr: "Conseil & Orientation",
      en: "Advisory & Counsel",
    },
    image: "/images/contact/contact-3.jpg",
    note: {
      fr: "Apporte ses conseils avisés, son discernement et son accompagnement continu au déploiement de la mission et des chantiers.",
      en: "Provides valuable guidance, wisdom, and ongoing advisory support for the Foundation's mission and field operations.",
    },
    bioHighlight: {
      fr: "Accompagnement consultatif & Orientation de mission",
      en: "Advisory counsel & Mission guidance",
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
