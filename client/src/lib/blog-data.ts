export type BlogPost = {
  id: string;
  slug: string;
  date: { fr: string; en: string };
  rawDate: string;
  author: { fr: string; en: string };
  category: { fr: string; en: string };
  readTime: { fr: string; en: string };
  image: string;
  title: { fr: string; en: string };
  excerpt: { fr: string; en: string };
  content: { fr: string[]; en: string[] };
  quote?: { fr: string; en: string };
};

export const blogPosts: BlogPost[] = [
  {
    id: "nouvelles-recentes-eau-potable",
    slug: "nouvelles-recentes",
    date: { fr: "23 Novembre 2023", en: "November 23, 2023" },
    rawDate: "2023-11-23",
    author: {
      fr: "Dr Vally Jean-Louis Legouté (Fondatrice et Présidente)",
      en: "Dr. Vally Jean-Louis Legouté (Founder & President)",
    },
    category: { fr: "Eau potable & Santé", en: "Clean Water & Health" },
    readTime: { fr: "3 min de lecture", en: "3 min read" },
    image: "/images/children-school.jpg",
    title: {
      fr: "Nouvelles récentes : Accès à l’eau potable, puits artésien et développement à Brostage",
      en: "Recent News: Access to Clean Water, Artesian Well and Growth in Brostage",
    },
    excerpt: {
      fr: "La fondatrice, Dr Vally Jean-Louis, ressent profondément l’impact de la privation d’eau potable à Brostage. Découvrez le projet d’établissement d’un réseau hydraulique, d’un puits artésien et de blocs sanitaires.",
      en: "Founder Dr. Vally Jean-Louis deeply feels the weight of clean water scarcity in Brostage. Learn about our hydraulic initiative establishing an artesian well, filtration cisterns and sanitation blocks.",
    },
    quote: {
      fr: "« L'eau est un bien essentiel qui incarne la vie ; une eau salubre est cruciale pour la santé de chaque enfant et de chaque famille. »",
      en: "“Water is an essential gift embodying life itself; clean water is crucial for the health of every child and family.”",
    },
    content: {
      fr: [
        "La fondatrice, Dr Vally Jean-Louis, ressent profondément l’impact de la privation d’eau potable dans la communauté de Brostage. Actuellement, les résidents utilisent des moyens archaïques pour pourvoir à leurs besoins en eau potable. Il est important de nous rappeler que l’eau est un bien essentiel. Elle incarne la vie ; une eau salubre est cruciale pour la préservation de la santé.",
        "Nous croyons fermement que tout être humain devrait avoir accès à l’eau potable, c’est pourquoi nous avons entrepris un projet visant à établir un réseau hydraulique à Brostage. Le cœur de ce projet sera un puits artésien qui alimentera des réservoirs dotés de filtres pour rendre l’eau buvable. Dre Jean-Louis prévoit également construire des blocs sanitaires.",
        "Dre Jean-Louis a des projets ambitieux, mais elle ne peut l’accomplir toute seule. La Blessed Vally Foundation est en cours de construction et évoluera pour inclure une école, un entrepôt destiné à stocker des provisions alimentaires pour les besoins de la communauté, ainsi qu’un centre de santé.",
        "Nous accueillons avec gratitude toutes les personnes qui souhaiteraient contribuer à cette noble cause. Les donateurs se trouvant en Haïti pourront faire des dons à travers les comptes en banque de la fondation ; les donateurs se trouvant à l’étranger pourront envoyer leurs dons par virement ou chèque à la Bank of America.",
        "Les avancées déjà réalisées dans le cadre des projets de la Fondation sont détaillées sur le site afin de voir ce que nous avons déjà fait concrètement jusqu’à présent. Nous comptons sur le soutien de tous pour réaliser nos rêves et contribuer au bien-être durable des résidents de Brostage.",
      ],
      en: [
        "Our founder, Dr. Vally Jean-Louis, deeply understands the critical impact of clean water scarcity in the Brostage community. Currently, local families have had to rely on archaic and vulnerable methods to meet their daily water needs. Water is an essential human right—it embodies life, and pure drinking water is fundamental to safeguarding community health.",
        "We firmly believe that every person deserves reliable access to clean water. For this reason, the Foundation initiated an ambitious hydraulic project in Brostage. The cornerstone is an artesian well feeding secure filtration cisterns to make drinking water safely accessible across the village. Sanitation and hygiene blocks are being built simultaneously.",
        "Dr. Jean-Louis carries a comprehensive long-term vision, but lasting community transformation requires collective commitment. Blessed Vally Foundation is currently developing an educational campus that will encompass a school, food storage facilities to support nutritional needs, and a local community health center.",
        "We welcome all who are moved to stand alongside us in this mission. Supporters in Haiti can contribute through local banking channels, while international supporters in the United States and abroad can give securely via Bank of America deposit, Zelle, or direct wire transfer.",
        "The progress already completed on our grounds in Dondon is documented across this platform. We remain deeply grateful for the partners, families and donors who help turn these milestones into a lasting reality for the children of Brostage.",
      ],
    },
  },
  {
    id: "blessed-vally-foundation-vision-piliers",
    slug: "blessed-vally-foundation",
    date: { fr: "3 Février 2023", en: "February 3, 2023" },
    rawDate: "2023-02-03",
    author: {
      fr: "Vally Bastien (Direction exécutive)",
      en: "Vally Bastien (Executive Leadership)",
    },
    category: { fr: "Mission & Piliers", en: "Mission & Strategic Pillars" },
    readTime: { fr: "4 min de lecture", en: "4 min read" },
    image: "/images/community-children.jpg",
    title: {
      fr: "Blessed Vally Foundation : Vision globale, entités missionnaires et projets durables",
      en: "Blessed Vally Foundation: Global Vision, Missionary Entities and Sustainable Projects",
    },
    excerpt: {
      fr: "Organisation basée à Miami avec l'ultime objectif de propager l'Évangile aux USA et en Haïti. Présentation des entités de la fondation : complexe éducatif, résidence missionnaire et structure d'accueil à Dondon.",
      en: "Miami-based organization dedicated to spreading the Gospel of Jesus Christ in the United States and Haiti through education, sustainable community infrastructure and missionary lodging.",
    },
    quote: {
      fr: "« Créer des activités durables et prospères en Haïti en investissant dans des projets éducatifs et communautaires de qualité. »",
      en: "“Creating sustainable and thriving opportunities in Haiti by investing in high-quality educational and community projects.”",
    },
    content: {
      fr: [
        "Blessed Vally Group est une organisation basée aux États-Unis à Miami dans le sud de la Floride avec l’ultime objectif de propager l'Évangile de Jésus-Christ aux États-Unis et en Haïti.",
        "L’organisation se voit dans la création d'activités durables et prospères en Haïti en investissant dans des projets immobiliers et éducatifs de qualité, en soutenant les initiatives communautaires et en offrant des infrastructures adaptées aux besoins réels.",
        "L’organisation comprend plusieurs entités complémentaires :\n1. Blessed Vally Foundation : œuvrant dans l’amélioration des conditions de vie des membres des communautés à Fragneauville, Delmas et à Brostage, Dondon en Haïti, et prochainement dans d’autres communes du pays.\n2. Blessed Vally Missionary Residence : un complexe résidentiel pour les missionnaires et volontaires travaillant en Haïti et aux États-Unis.\n3. Blessed Vally Guesthouse : une structure d'accueil située à Dondon pour accommoder les personnes aux moyens modestes et les équipes de passage.",
        "L’organisation porte un engagement résolu en matière de responsabilité sociale et s'efforce de minimiser son impact environnemental à travers la Blessed Vally Foundation. Elle soutient les initiatives qui améliorent les conditions de vie humaine à Brostage par des actions concrètes dans l'éducation, la santé, l'alimentation et l'accès à l'eau potable.",
        "La fondation dépend de la générosité des donateurs et des contributions matérielles pour soutenir ses chantiers sur le terrain. Les dons sont directement alloués aux constructions scolaires, aux initiatives d'autonomie et aux programmes chrétiens de formation spirituelle et de leadership.",
      ],
      en: [
        "Blessed Vally Group is an organization based in Miami, South Florida, founded with the overarching purpose of spreading the Gospel of Jesus Christ across both the United States and Haiti through loving action and lasting infrastructure.",
        "Our calling centers on establishing prosperous, sustainable community activities in Haiti by building high-standard educational and real estate facilities, encouraging grassroots community initiatives, and creating stable environments for underserved families.",
        "The broader ministry encompasses three interconnected operational arms:\n1. Blessed Vally Foundation: Dedicated to advancing educational quality, healthcare, clean water and living standards in Fragneauville, Delmas and Brostage, Dondon, with planned expansion to further communities.\n2. Blessed Vally Missionary Residence: A hospitality and housing complex designed for field missionaries and visiting humanitarian leaders.\n3. Blessed Vally Guesthouse: A community guesthouse situated in Dondon to welcome visitors, medical missions, and travelers of modest means.",
        "Environmental care and strict stewardship guide every development. In Brostage, our investments address the root causes of vulnerability by connecting academic schooling with nutrition, hygiene, clean water autonomy, and Christian discipleship.",
        "We invite faithful individuals, church communities and corporate sponsors to partner with us through financial gifts, equipment contributions, and prayers as we complete each building phase on the ground.",
      ],
    },
  },
  {
    id: "mot-de-la-fondatrice-responsabilite",
    slug: "mot-de-la-fondatrice",
    date: { fr: "7 Mars 2022", en: "March 7, 2022" },
    rawDate: "2022-03-07",
    author: {
      fr: "Dr Vally Jean-Louis Legouté (Fondatrice)",
      en: "Dr. Vally Jean-Louis Legouté (Founder)",
    },
    category: { fr: "Foi & Vocation", en: "Faith & Calling" },
    readTime: { fr: "3 min de lecture", en: "3 min read" },
    image: "/images/children-classroom.jpg",
    title: {
      fr: "Mot de la Fondatrice : Notre communauté est notre responsabilité",
      en: "Word from the Founder: Our Community is Our Responsibility",
    },
    excerpt: {
      fr: "« Notre communauté est notre responsabilité. » Le message fondateur de Dre Vally Jean-Louis : unir la foi vivante aux actes concrets pour bâtir une école digne et un avenir d'espérance pour la jeunesse.",
      en: "“Our community is our responsibility.” Founder Dr. Vally Jean-Louis shares the spiritual and humanitarian conviction driving Blessed Vally Foundation’s mission.",
    },
    quote: {
      fr: "« La foi chrétienne sans action concrète n'atteint pas son plein fruit ; servir les enfants, c'est semer dans l'éternité. »",
      en: "“Faith without practical compassion remains incomplete; when we serve the children, we invest in eternity.”",
    },
    content: {
      fr: [
        "« Notre communauté est notre responsabilité. » Cette phrase n'est pas un simple slogan : c'est le cri du cœur et la conviction spirituelle qui ont donné naissance à la Fondation Blessed Vally. Face à la précarité qui touche les enfants et les familles en Haïti, nous ne pouvions pas détourner le regard.",
        "L'Évangile de grâce nous enseigne que l'amour se manifeste par des œuvres réelles et durables. C'est pourquoi nous avons choisi de nous implanter là où le besoin est le plus criant : à Brostage, dans la commune de Dondon, et à Fragneauville, dans la commune de Delmas.",
        "Nous avons vu des enfants au regard plein d'intelligence et de soif d'apprendre qui ne disposaient d'aucune salle de classe décente. Nous avons vu des mères parcourir de longues distances pour rapporter une eau douteuse. Dieu a placé en nous le devoir d'agir : construire une école chrétienne moderne, forer un puits d'eau pure et apporter la lumière de l'Évangile.",
        "Chaque donateur, chaque bénévole qui nous soutient est un ouvrier avec nous dans ce champ. Brique par brique, avec patience et foi, nous voyons les murs s'élever et les visages des enfants s'illuminer d'espérance.",
        "Je vous remercie du fond du cœur pour votre confiance, votre amour et vos prières. Ensemble, nous préparons la génération de demain.",
      ],
      en: [
        "“Our community is our responsibility.” This declaration is not merely a motto; it is the spiritual conviction and heartfelt calling that birthed Blessed Vally Foundation. Seeing the immense hardships facing children and families in Haiti, we could never remain passive observers.",
        "The Gospel of grace calls us to express our faith through tangible, sacrificial deeds. That is why we chose to build where the need is deepest: in Brostage (Dondon) and in Fragneauville (Delmas).",
        "We met brilliant young minds eager to learn but lacking a safe classroom to study in. We met devoted mothers walking exhausting distances simply to carry back untreated water. God placed on our hearts the duty to respond: constructing a modern Christian academy, providing an artesian well, and sharing the transforming hope of Christ.",
        "Every supporter, volunteer, and prayer partner who stands with us is an essential co-worker in this harvest. Stone by stone, block by block, we watch foundations rise and children's eyes light up with joy.",
        "I thank each of you with deep gratitude for your partnership, generosity, and prayers. Together, we are educating today to transform tomorrow.",
      ],
    },
  },
];
