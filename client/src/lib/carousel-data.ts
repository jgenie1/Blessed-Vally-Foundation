export type CarouselSlide = {
  id: string;
  image: string;
  tag: { fr: string; en: string };
  title: { fr: string; en: string };
  caption: { fr: string; en: string };
  location: string;
};

export const carouselSlides: CarouselSlide[] = [
  {
    id: "slide-1",
    image: "/images/community-children.jpg",
    tag: { fr: "Communauté & Enfance", en: "Community & Children" },
    title: {
      fr: "Rassemblement des enfants de Brostage",
      en: "Children Gathering in Brostage",
    },
    caption: {
      fr: "La joie et la communion des enfants de Dondon au cœur même de la vocation et de l’engagement de la Fondation.",
      en: "The joyful fellowship of the children of Dondon at the very heart of the Foundation’s calling and mission.",
    },
    location: "Brostage, Dondon, Haïti",
  },
  {
    id: "slide-2",
    image: "/images/children-school.jpg",
    tag: { fr: "Éducation chrétienne", en: "Christian Education" },
    title: {
      fr: "Éducation, lecture et éveil",
      en: "Education, Reading & Development",
    },
    caption: {
      fr: "Offrir un environnement protecteur et stimulant où chaque enfant découvre ses dons et se prépare pour l'avenir.",
      en: "Providing a nurturing and inspiring environment where each child uncovers their gifts and prepares for the future.",
    },
    location: "Dondon, Haïti",
  },
  {
    id: "slide-3",
    image: "/images/children-classroom.jpg",
    tag: { fr: "Pédagogie & Mentorat", en: "Teaching & Mentorship" },
    title: {
      fr: "Une enseignante dévouée auprès des élèves",
      en: "A Dedicated Educator with Students",
    },
    caption: {
      fr: "Un apprentissage guidé avec patience, bienveillance et rigueur académique pour former des esprits libres et instruits.",
      en: "Guided learning delivered with patience, warmth, and academic rigor to shape thoughtful, educated minds.",
    },
    location: "Haïti",
  },
  {
    id: "slide-4",
    image: "/images/children-uniforms.jpg",
    tag: { fr: "Dignité & Espérance", en: "Dignity & Hope" },
    title: {
      fr: "Fierté, uniformes et égalité",
      en: "Pride, Uniforms & Equality",
    },
    caption: {
      fr: "L'uniforme scolaire porte l'égalité, le respect mutuel et l'espérance partagée d'une génération instruite.",
      en: "School uniforms embody dignity, mutual respect, and the shared promise of an educated generation.",
    },
    location: "Delmas & Dondon",
  },
  {
    id: "slide-5",
    image: "/images/community-gathering.jpg",
    tag: { fr: "Partenariats locaux", en: "Local Partnerships" },
    title: {
      fr: "Concertation fraternelle avec les familles",
      en: "Fellowship & Dialogue with Families",
    },
    caption: {
      fr: "L'ancrage local est indispensable : écouter, prier et avancer main dans la main avec les parents et les leaders locaux.",
      en: "Grassroots presence is vital: listening, praying, and building hand-in-hand with parents and local elders.",
    },
    location: "Brostage, Dondon",
  },
  {
    id: "slide-6",
    image: "/images/travaux/travaux-1.jpg",
    tag: { fr: "Chantier en cours", en: "Works in Progress" },
    title: {
      fr: "Fondations et ferraillage du complexe",
      en: "Deep Foundations & Structural Rebar",
    },
    caption: {
      fr: "Des fondations profondes et du ferraillage coulé pour garantir la sécurité et la solidité des futurs bâtiments scolaires.",
      en: "Deep reinforced footings engineered to safeguard the resilience and durability of future school classrooms.",
    },
    location: "Brostage, Dondon, Haïti",
  },
  {
    id: "slide-7",
    image: "/images/travaux/travaux-2.jpg",
    tag: { fr: "Infrastructures", en: "Infrastructure" },
    title: {
      fr: "Coffrage des colonnes de soutènement",
      en: "Pillar Formwork & Concrete Works",
    },
    caption: {
      fr: "Structure antisismique pensée pour abriter durablement les classes, le réfectoire et les espaces communautaires.",
      en: "Earthquake-resilient structural framing designed to shelter classrooms, dining hall, and community rooms.",
    },
    location: "Brostage, Dondon, Haïti",
  },
  {
    id: "slide-8",
    image: "/images/travaux/travaux-3.jpg",
    tag: { fr: "Gros Œuvre", en: "Structural Masonry" },
    title: {
      fr: "Coulage et consolidation des piliers",
      en: "Pouring & Column Consolidation",
    },
    caption: {
      fr: "Suivi technique rigoureux du gros œuvre mené avec les artisans et ouvriers qualifiés de la communauté locale.",
      en: "Meticulously monitored masonry execution carried out in direct partnership with local skilled builders.",
    },
    location: "Brostage, Dondon, Haïti",
  },
  {
    id: "slide-9",
    image: "/images/travaux/travaux-4.jpg",
    tag: { fr: "Vision & Avenir", en: "Vision & Future" },
    title: {
      fr: "Élévation des murs et perspectives durables",
      en: "Rising Walls & Sustainable Horizon",
    },
    caption: {
      fr: "De la vision à la réalité : un complexe complet qui transformera la vie, la santé et l'instruction des enfants.",
      en: "From vision to reality: a comprehensive campus transforming education, health, and dignity for children.",
    },
    location: "Brostage, Dondon, Haïti",
  },
  {
    id: "slide-10",
    image: "/images/travaux/travaux-5.jpg",
    tag: { fr: "Espace communautaire", en: "Community Space" },
    title: {
      fr: "Agora et estrade centrale de rassemblement",
      en: "Central Agora & Gathering Platform",
    },
    caption: {
      fr: "Plateforme surélevée au cœur du complexe, conçue pour les rassemblements scolaires, les cultes et la vie communautaire.",
      en: "Elevated central platform engineered for school assemblies, worship services, and community gatherings.",
    },
    location: "Brostage, Dondon, Haïti",
  },
];
