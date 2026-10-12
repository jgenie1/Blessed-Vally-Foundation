import { useState, useCallback, useEffect } from "react";
import {
  Droplets,
  Building2,
  Home,
  HeartHandshake,
  MapPin,
  Phone,
  Mail,
  Maximize2,
  Eye,
  ArrowRight,
  ShieldCheck,
  ChevronLeft,
  ChevronRight,
  X,
  Truck,
  Layers,
  Compass,
  Quote,
} from "lucide-react";
import { routePaths, type Language } from "@/lib/site-content";

export interface WorkPhoto {
  id: string;
  num: string;
  image: string;
  category: "building" | "structure" | "team";
  tagFr: string;
  tagEn: string;
  titleFr: string;
  titleEn: string;
  descFr: string;
  descEn: string;
}

export const worksGallery: WorkPhoto[] = [
  {
    id: "facade-colonnes",
    num: "01",
    image: "/images/travaux/chantier-facade-colonnes.jpg",
    category: "building",
    tagFr: "Façade & Colonnades",
    tagEn: "Facade & Colonnades",
    titleFr: "Élévation du bâtiment principal et arcades",
    titleEn: "Main Building Elevation & Arcades",
    descFr: "Vue de la structure à deux niveaux avec colonnes moulées et arcades favorisant la circulation d'air naturel.",
    descEn: "Perspective of the two-story structure featuring classic molded columns and open arcades for natural ventilation.",
  },
  {
    id: "galerie",
    num: "02",
    image: "/images/travaux/travaux-1.jpg",
    category: "building",
    tagFr: "Gros œuvre & Citerne",
    tagEn: "Structural Works & Tank",
    titleFr: "Galerie supérieure et réserve d'eau",
    titleEn: "Upper Gallery & Water Reservoir",
    descFr: "Balustrades traditionnelles, piliers porteurs armés et installation de la citerne aérienne garantissant l'autonomie en eau potable.",
    descEn: "Traditional balustrades, reinforced load-bearing pillars, and overhead water tank ensuring clean drinking water autonomy.",
  },
  {
    id: "classes",
    num: "03",
    image: "/images/travaux/travaux-2.jpg",
    category: "building",
    tagFr: "Salles de classe",
    tagEn: "Classrooms Wing",
    titleFr: "Salles de classe et façades colorées",
    titleEn: "Classrooms & Vibrant Facades",
    descFr: "Bâtiment scolaire à deux niveaux avec salles lumineuses, portes personnalisées et coursives extérieures protégées.",
    descEn: "Two-story school wing with illuminated classrooms, custom painted doors, and protected outdoor walkways.",
  },
  {
    id: "portique",
    num: "04",
    image: "/images/travaux/travaux-3.jpg",
    category: "building",
    tagFr: "Circulation & Abri",
    tagEn: "Covered Portico",
    titleFr: "Portique couvert et colonnades ombragées",
    titleEn: "Covered Portico & Shaded Colonnades",
    descFr: "Préau abrité au rez-de-chaussée sous colonnes moulées, protégeant élèves et enseignants de la chaleur et des pluies tropicales.",
    descEn: "Ground-level sheltered arcade with columns, shielding children and teachers from heat and tropical rains.",
  },
  {
    id: "cour",
    num: "05",
    image: "/images/travaux/travaux-4.jpg",
    category: "building",
    tagFr: "Cour intérieure",
    tagEn: "Interior Courtyard",
    titleFr: "Cour intérieure et circulations d'étage",
    titleEn: "Interior Courtyard & Level Access",
    descFr: "Agencement de la cour intérieure articulée autour du grand pignon avec cage d'escalier et passerelles sécurisées.",
    descEn: "Interior courtyard layout centered around the main gable wall with integrated staircases and safe corridors.",
  },
  {
    id: "agora",
    num: "06",
    image: "/images/travaux/travaux-5.jpg",
    category: "building",
    tagFr: "Espace communautaire",
    tagEn: "Community Space",
    titleFr: "Agora et estrade centrale de rassemblement",
    titleEn: "Central Agora & Gathering Platform",
    descFr: "Plateforme polygonale au cœur du complexe pour les rassemblements scolaires, cultes, distributions et activités communautaires.",
    descEn: "Polygonal platform in the campus heart for school assemblies, worship services, food distributions, and community events.",
  },
  {
    id: "fondation-ferraillage",
    num: "07",
    image: "/images/travaux/chantier-fondation-1.jpg",
    category: "structure",
    tagFr: "Fondations armées",
    tagEn: "Reinforced Foundations",
    titleFr: "Semelles parasismiques et armature d'acier",
    titleEn: "Earthquake-Resistant Footings & Steel Rebar",
    descFr: "Coulage des semelles de fondation profondes et treillis d'acier parasismique pour une pérennité maximale du complexe.",
    descEn: "Deep concrete footing pour and earthquake-resistant steel rebar cages engineered for long-term safety.",
  },
  {
    id: "fondation-elevation",
    num: "08",
    image: "/images/travaux/chantier-fondation-2.jpg",
    category: "structure",
    tagFr: "Élévation des murs",
    tagEn: "Wall Elevation",
    titleFr: "Érection des piliers et maçonnerie porteuse",
    titleEn: "Pillar Raising & Load-Bearing Masonry",
    descFr: "Montage des blocs de béton vibré et coulage des poteaux raidisseurs verticaux pour soutenir la dalle du premier étage.",
    descEn: "Laying hollow core concrete blocks and pouring reinforced vertical tie-columns to support the first floor slab.",
  },
  {
    id: "dalle-superieure",
    num: "09",
    image: "/images/travaux/chantier-dalle.jpg",
    category: "structure",
    tagFr: "Dalle supérieure",
    tagEn: "Upper Slab",
    titleFr: "Dalle béton armé et panorama sur la vallée",
    titleEn: "Reinforced Slab & Valley Panorama",
    descFr: "Plateforme supérieure offrant une vue dominante sur la région de Brostage et servant d'assise aux salles du R+1.",
    descEn: "Upper concrete deck offering a panoramic view of Brostage valley, forming the floor of the second-level classrooms.",
  },
  {
    id: "balustrades-finitions",
    num: "10",
    image: "/images/travaux/chantier-balustrades.jpg",
    category: "structure",
    tagFr: "Finitions traditionnelles",
    tagEn: "Traditional Balustrades",
    titleFr: "Balustrades moulées et coursives sécurisées",
    titleEn: "Molded Balustrades & Safe Corridors",
    descFr: "Pose manuelle des balustres en ciment pour protéger les allées de circulation des enfants et embellir le complexe.",
    descEn: "Hand-crafted cement balusters installed to safeguard children's pedestrian pathways while enhancing aesthetic beauty.",
  },
  {
    id: "preau-distribution",
    num: "11",
    image: "/images/travaux/chantier-preau.jpg",
    category: "building",
    tagFr: "Préau & Protection",
    tagEn: "Covered Shelter",
    titleFr: "Préau couvert et galeries ombragées",
    titleEn: "Sheltered Arcade & Shaded Walkways",
    descFr: "Espace de récréation couvert et liaisons protégées reliant les ailes scolaires aux futurs blocs sanitaires.",
    descEn: "Sheltered recreation area and protected corridors connecting the educational wings to future sanitation blocks.",
  },
  {
    id: "artisans-terrain",
    num: "12",
    image: "/images/travaux/chantier-artisans.jpg",
    category: "team",
    tagFr: "Équipe & Artisans",
    tagEn: "Builders & Team",
    titleFr: "Artisans et ouvriers locaux en action",
    titleEn: "Local Haitian Builders & Artisans in Motion",
    descFr: "Les artisans et maçons haïtiens qui bâtissent quotidiennement chaque mur avec rigueur, fierté et dévouement.",
    descEn: "Local Haitian craftsmen and masons working daily on site with dedication, building opportunities for their own community.",
  },
];

export interface DelmasPhoto {
  id: string;
  num: string;
  image: string;
  tagFr: string;
  tagEn: string;
  titleFr: string;
  titleEn: string;
  descFr: string;
  descEn: string;
}

export const delmasGallery: DelmasPhoto[] = [
  {
    id: "delmas-chantier",
    num: "D1",
    image: "/images/delmas/delmas-chantier-elevation.jpg",
    tagFr: "Chantier en cours • Delmas",
    tagEn: "Active Construction • Delmas",
    titleFr: "Construction que nous venons de commencer à Delmas",
    titleEn: "Newly Started Construction in Delmas",
    descFr: "Élévation de la dalle supérieure et des piliers armés parasismiques avec maçonnerie de blocs de béton, dominant le panorama urbain de Delmas.",
    descEn: "Upper slab elevation with seismic steel rebar columns and concrete block masonry, overlooking the metropolitan valley of Delmas.",
  },
  {
    id: "delmas-facade",
    num: "D2",
    image: "/images/delmas/delmas-residence-facade.jpg",
    tagFr: "Résidence Missionnaire • Façade",
    tagEn: "Missionary Residence • Facade",
    titleFr: "Façade principale de la Résidence Missionnaire",
    titleEn: "Main Facade of the Missionary Residence",
    descFr: "Bâtiment à deux niveaux avec colonnades de porche classiques, balcon supérieur sécurisé et jardin d'accueil pour les missionnaires.",
    descEn: "Two-story facility featuring classical entrance portico columns, secured upper balcony, and landscaped gardens welcoming visiting teams.",
  },
  {
    id: "delmas-interieur",
    num: "D3",
    image: "/images/delmas/delmas-residence-interieur.jpg",
    tagFr: "Espaces Intérieurs • Accueil",
    tagEn: "Interior Spaces • Reception",
    titleFr: "Salon de réception et espaces de réunion",
    titleEn: "Reception Hall & Meeting Spaces",
    descFr: "Intérieur carrelé avec arches en pierres de taille, menuiseries sculptées et fer forgé pour accueillir dignement les ouvriers du Seigneur.",
    descEn: "Tiled interior featuring natural stone arches, handcrafted woodwork, and wrought iron doors to welcome missionary workers with dignity.",
  },
  {
    id: "delmas-nuit",
    num: "D4",
    image: "/images/delmas/delmas-residence-nuit.jpg",
    tagFr: "Sécurité & Logistique • Cour",
    tagEn: "Security & Logistics • Courtyard",
    titleFr: "Cour intérieure pavée et arcades de nuit",
    titleEn: "Paved Inner Courtyard & Night Arcades",
    descFr: "Cour intérieure sécurisée avec arcades en briques apparentes, éclairage nocturne et véhicule logistique pour les déplacements de terrain.",
    descEn: "Secured inner courtyard with brick arcades, nighttime safety illumination, and logistics vehicles for field outreach.",
  },
  {
    id: "delmas-portail",
    num: "D5",
    image: "/images/delmas/delmas-residence-portail.jpg",
    tagFr: "Enceinte & Accès • Sécurité",
    tagEn: "Perimeter & Access • Security",
    titleFr: "Portail d'entrée sécurisé et bougainvilliers",
    titleEn: "Secured Entrance Gate & Bougainvillea",
    descFr: "Grille ouvragée en fer forgé et mur d'enceinte fleuri garantissant la tranquillité et la sécurité de l'accueil missionnaire.",
    descEn: "Heavy wrought-iron arched gates and blooming bougainvillea perimeter wall ensuring safe, peaceful missionary hospitality.",
  },
];

export interface MachineryItem {
  id: string;
  nameFr: string;
  nameEn: string;
  roleFr: string;
  roleEn: string;
  descFr: string;
  descEn: string;
  image: string;
  badgeFr: string;
  badgeEn: string;
}

export const machineryList: MachineryItem[] = [
  {
    id: "pelleteuse",
    nameFr: "Pelleteuse hydraulique sur chenilles",
    nameEn: "Hydraulic Crawler Excavator",
    roleFr: "Terrassement & Excavation profonde",
    roleEn: "Earthmoving & Deep Excavation",
    descFr: "Engin lourd indispensable pour déblayer le relief accidenté, creuser les fouilles du réservoir d'eau et stabiliser les assises rocheuses.",
    descEn: "Heavy-duty machinery essential for clearing uneven terrain, digging clean water reservoir footings, and stabilizing rock bed foundations.",
    image: "/images/travaux/materiel-pelleteuse.jpg",
    badgeFr: "Engin lourd de terrassement",
    badgeEn: "Heavy Earthmover",
  },
  {
    id: "chariot",
    nameFr: "Chariot élévateur de manutention",
    nameEn: "Rough-Terrain Forklift",
    roleFr: "Levage lourd & Approvisionnement d'étage",
    roleEn: "Heavy Lifting & Floor Staging",
    descFr: "Assure le déchargement des palettes de ciment, le transport des armatures d'acier et leur élévation sécurisée vers le niveau R+1.",
    descEn: "Handles palletized cement unloading, structural steel rebar transport, and safe lifting to the second-story building deck.",
    image: "/images/travaux/materiel-chariot.jpg",
    badgeFr: "Levage & Manutention",
    badgeEn: "Lifting & Logistics",
  },
  {
    id: "gros-oeuvre",
    nameFr: "Équipes de gros œuvre & ferraillage",
    nameEn: "Structural Masonry & Rebar Crew",
    roleFr: "Ferraillage de dalle & Érection R+1",
    roleEn: "Deck Rebar & Second-Story Framing",
    descFr: "Artisans et ouvriers spécialisés mobilisés pour le coulage des planchers en béton armé antisismique et l'élévation des salles de classe.",
    descEn: "Specialized masons and craftsmen advancing anti-seismic reinforced concrete slabs and second-floor classroom construction.",
    image: "/images/travaux/materiel-chargeuse.jpg",
    badgeFr: "Ouvrage structurel",
    badgeEn: "Structural Crew",
  },
  {
    id: "camion",
    nameFr: "Camion benne de transport",
    nameEn: "Supply Dump Truck",
    roleFr: "Fret & Acheminement régional",
    roleEn: "Freight & Regional Transport",
    descFr: "Achemine les matériaux pondéreux (parpaings, ciment, acier, graviers) depuis les carrières et fournisseurs vers le site de construction.",
    descEn: "Hauls heavy bulk materials (blocks, cement bags, steel bars, gravel) from regional suppliers directly to the mountain work site.",
    image: "/images/travaux/materiel-camion.jpg",
    badgeFr: "Logistique & Fret",
    badgeEn: "Logistics & Freight",
  },
];

export interface EcosystemEntity {
  id: string;
  name: string;
  locationFr: string;
  locationEn: string;
  badgeFr: string;
  badgeEn: string;
  descFr: string;
  descEn: string;
  icon: "home" | "building" | "heart" | "compass" | "layers";
}

export const ecosystemEntities: EcosystemEntity[] = [
  {
    id: "guesthouse",
    name: "Blessed Vally Guesthouse",
    locationFr: "Dondon Brostage, Nord – Haïti",
    locationEn: "Dondon Brostage, North – Haiti",
    badgeFr: "Hébergement caritatif",
    badgeEn: "Charitable Lodging",
    descFr: "Entité qui offre des logements abordables et confortables aux voyageurs et personnes en déplacement. Créée pour soutenir les activités caritatives du groupe et fournir un hébergement de qualité à ceux qui en ont besoin.",
    descEn: "Provides affordable, welcoming accommodations for travelers and visiting workers. Created to generate sustainable support for group charities and offer dignified shelter.",
    icon: "home",
  },
  {
    id: "residence-miami",
    name: "Blessed Vally Residence",
    locationFr: "Miami, Floride – États-Unis",
    locationEn: "Miami, Florida – United States",
    badgeFr: "Accueil & Bienveillance",
    badgeEn: "Shelter & Welcome",
    descFr: "Structure de logement conçue pour fournir un environnement confortable, sécurisé et accueillant aux personnes dans le besoin, avec des installations adaptées pour favoriser le réconfort et l'autonomie.",
    descEn: "Designed to provide a safe, warm, and supportive environment for individuals and families in need, with facilities adapted to comfort and restoration.",
    icon: "building",
  },
  {
    id: "foundation",
    name: "Blessed Vally Foundation",
    locationFr: "Miami (USA) & Haïti",
    locationEn: "Miami (USA) & Haiti",
    badgeFr: "Fondation à but non lucratif",
    badgeEn: "Nonprofit Foundation",
    descFr: "Organisation à but non lucratif dédiée à l'aide financière, l'éducation chrétienne, les soins de santé, l'accès à l'eau potable et l'autonomie des communautés vulnérables à Miami et en Haïti.",
    descEn: "Nonprofit entity dedicated to financial aid, Christian education, community healthcare, clean drinking water, and sustainable family empowerment in Miami and Haiti.",
    icon: "heart",
  },
  {
    id: "missionary",
    name: "Blessed Vally Missionary Résidence",
    locationFr: "Delmas, Ouest – Haïti",
    locationEn: "Delmas, West – Haiti",
    badgeFr: "Résidence missionnaire",
    badgeEn: "Missionary Residence",
    descFr: "Structure établie pour fournir un logement sûr, paisible et confortable aux missionnaires œuvrant sur le terrain en Haïti, leur permettant de vivre et de se ressourcer en toute sérénité.",
    descEn: "Established to provide safe, comfortable, and peaceful lodging for missionaries serving on the front lines in Haiti, supporting their daily ministry work.",
    icon: "compass",
  },
  {
    id: "llc",
    name: "Blessed Vally LLC",
    locationFr: "Miami, Floride – États-Unis",
    locationEn: "Miami, Florida – United States",
    badgeFr: "Appui & Services",
    badgeEn: "Operational Support",
    descFr: "Entreprise établie pour fournir les services supports, la logistique internationale, la coordination opérationnelle et le soutien matériel à l'ensemble des initiatives du groupe.",
    descEn: "Company established to manage operational logistics, international supply chains, and technical services in support of the group's charitable initiatives.",
    icon: "layers",
  },
];

export default function HaitiWorksSection({ language }: { language: Language }) {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [lightboxState, setLightboxState] = useState<{
    source: "dondon" | "delmas";
    index: number;
  } | null>(null);

  const filteredPhotos =
    selectedCategory === "all"
      ? worksGallery
      : worksGallery.filter((p) => p.category === selectedCategory);

  const currentLightboxList =
    lightboxState?.source === "delmas" ? delmasGallery : filteredPhotos;

  const currentLightboxPhoto =
    lightboxState !== null ? currentLightboxList[lightboxState.index] : null;

  const openLightbox = (source: "dondon" | "delmas", index: number) => {
    setLightboxState({ source, index });
  };

  const closeLightbox = () => {
    setLightboxState(null);
  };

  const prevPhoto = useCallback(() => {
    if (!lightboxState) return;
    const list = lightboxState.source === "delmas" ? delmasGallery : filteredPhotos;
    setLightboxState((prev) =>
      prev
        ? {
            ...prev,
            index: (prev.index - 1 + list.length) % list.length,
          }
        : null
    );
  }, [lightboxState, filteredPhotos]);

  const nextPhoto = useCallback(() => {
    if (!lightboxState) return;
    const list = lightboxState.source === "delmas" ? delmasGallery : filteredPhotos;
    setLightboxState((prev) =>
      prev
        ? {
            ...prev,
            index: (prev.index + 1) % list.length,
          }
        : null
    );
  }, [lightboxState, filteredPhotos]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!lightboxState) return;
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowLeft") prevPhoto();
      if (e.key === "ArrowRight") nextPhoto();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightboxState, prevPhoto, nextPhoto]);

  return (
    <section className="haiti-works-section" id="travaux">
      {/* 0. DEVISE SPIRITUELLE OFFICIELLE DE LA FONDATION */}
      <div className="haiti-spiritual-banner">
        <div className="container">
          <div className="haiti-spiritual-banner__inner">
            <Quote size={24} className="haiti-spiritual-banner__icon" />
            <p className="haiti-spiritual-banner__text">
              {language === "fr"
                ? "« Notre communauté est notre responsabilité, mais notre mission ultime est de gagner des âmes pour Christ à travers des actions concrètes d’amour et de service. »"
                : "“Our community is our responsibility, but our ultimate mission is to win souls for Christ through concrete actions of love and service.”"}
            </p>
            <span className="haiti-spiritual-banner__author">
              — {language === "fr" ? "Dr. Vally DOCTEUR JEAN-LOUIS, Fondatrice & Présidente" : "Dr. Vally D. Jn.-Ls. Legouté, Founder & President"}
            </span>
          </div>
        </div>
      </div>

      {/* 1. URGENT FOUNDER APPEAL (Authentic Message from Dr. Vally DOCTEUR JEAN-LOUIS) */}
      <div className="section-space">
        <div className="container">
          <div className="haiti-founder-appeal">
            <div className="haiti-founder-appeal__header">
              <div className="haiti-founder-appeal__badge">
                <HeartHandshake size={16} />
                <span>
                  {language === "fr"
                    ? "Message officiel & Appel de la Fondatrice"
                    : "Official Field Appeal from the Founder"}
                </span>
              </div>
              <span className="haiti-founder-appeal__status">
                {language === "fr" ? "Urgence prioritaire sur le terrain" : "High-Priority Field Action"}
              </span>
            </div>

            <div className="haiti-founder-appeal__grid">
              <div className="haiti-founder-appeal__portrait-col">
                <div className="haiti-founder-appeal__portrait-card">
                  <div className="haiti-founder-appeal__img-frame">
                    <img
                      src="/images/travaux/chantier-facade-colonnes.jpg"
                      alt={
                        language === "fr"
                          ? "Bâtiment en construction financé par Dr. Jean-Louis"
                          : "Building under construction funded by Dr. Jean-Louis"
                      }
                      className="haiti-founder-appeal__img"
                    />
                    <div className="haiti-founder-appeal__img-overlay">
                      <span className="haiti-founder-appeal__img-tag">
                        {language === "fr" ? "Brostage, Dondon • Haïti" : "Brostage, Dondon • Haiti"}
                      </span>
                    </div>
                  </div>
                  <div className="haiti-founder-appeal__founder-info">
                    <h4>Dr. Vally DOCTEUR JEAN-LOUIS</h4>
                    <p>
                      {language === "fr"
                        ? "Fondatrice & Présidente de la Fondation Blessed Vally"
                        : "Founder & President of Blessed Vally Foundation"}
                    </p>
                    <span className="haiti-founder-appeal__own-funds">
                      {language === "fr"
                        ? "★ Travaux déjà réalisés à 100% de ses propres fonds"
                        : "★ Work accomplished so far funded 100% from personal savings"}
                    </span>
                  </div>
                </div>
              </div>

              <div className="haiti-founder-appeal__content-col">
                <h3 className="haiti-founder-appeal__title">
                  {language === "fr"
                    ? "« Voir la communauté privée d’eau potable nous touche au plus profond. »"
                    : "“Seeing the community deprived of clean water touches our very core.”"}
                </h3>

                <div className="haiti-founder-appeal__quote-box">
                  <p>
                    {language === "fr"
                      ? "« La fondatrice, Dr. Vally DOCTEUR JEAN-LOUIS, se sent touchée de voir la communauté privée d’eau potable et utilise des moyens archaïques pour leurs besoins en eau potable et sanitaire, sollicite l’aide de tous pour la construction d’un réservoir d’eau et d’un bloc sanitaire de quatre WC pour desservir la communauté en attendant de construire les immeubles de la fondation qui logeront ses bureaux, l’école, le dépôt de provisions alimentaires, et le centre de santé."
                      : "“The founder, Dr. Vally DOCTEUR JEAN-LOUIS, is deeply moved seeing the community deprived of clean drinking water and forced to rely on rudimentary means for their essential water and sanitation needs. She earnestly appeals for everyone's support to build a clean drinking water reservoir and a modern sanitary block of four toilets to serve the community, while completing the foundation buildings that will house offices, the school, food storage, and a health clinic."}
                  </p>
                  <p>
                    {language === "fr"
                      ? "Les photos vous diront ce que Dr. Jean-Louis a déjà réalisé de ses propres fonds et espère, dans le futur, recevoir de l’aide pour pouvoir continuer avec la construction de l’immeuble pour tous les projets."
                      : "The photos bear witness to what Dr. Jean-Louis has already built from her own personal resources, with the fervent hope of receiving partner support to complete the facility for all ongoing programs."}
                  </p>
                  <p className="haiti-founder-appeal__bank-note">
                    {language === "fr"
                      ? "Vu les problèmes qu’encourent les bureaux de la fonction publique, le compte en banque de la fondation n’a pu être ouvert pour recevoir des donations, cependant, vu l’urgence, la fondatrice met à la disposition de tous ceux qui voudraient contribuer à cette œuvre noble, des voies transparentes et son compte pour recevoir les contributions directes. Merci de tout cœur. »"
                      : "Due to delays in local public administrative offices, the foundation's on-site bank account has experienced processing hold-ups; however, given the humanitarian urgency, the founder has established direct and accountable channels for all those wishing to contribute to this noble work. Thank you wholeheartedly.”"}
                  </p>
                </div>

                {/* 4 Priority Pillars Badge Strip */}
                <div className="haiti-founder-appeal__pillars">
                  <div className="haiti-appeal-pill">
                    <Droplets size={16} className="haiti-appeal-pill__icon" />
                    <div>
                      <strong>{language === "fr" ? "Réservoir d'eau" : "Water Reservoir"}</strong>
                      <span>{language === "fr" ? "Eau potable autonome" : "Clean drinking water"}</span>
                    </div>
                  </div>

                  <div className="haiti-appeal-pill">
                    <Building2 size={16} className="haiti-appeal-pill__icon" />
                    <div>
                      <strong>{language === "fr" ? "Bloc 4 WC modernes" : "4-Stall Modern Toilets"}</strong>
                      <span>{language === "fr" ? "Hygiène & dignité" : "Dignity & sanitation"}</span>
                    </div>
                  </div>

                  <div className="haiti-appeal-pill">
                    <Home size={16} className="haiti-appeal-pill__icon" />
                    <div>
                      <strong>{language === "fr" ? "Complexe R+1" : "Two-Story School"}</strong>
                      <span>{language === "fr" ? "Salles de cours & bureaux" : "Classrooms & offices"}</span>
                    </div>
                  </div>

                  <div className="haiti-appeal-pill">
                    <HeartHandshake size={16} className="haiti-appeal-pill__icon" />
                    <div>
                      <strong>{language === "fr" ? "Clinique & Dépôt" : "Clinic & Food Bank"}</strong>
                      <span>{language === "fr" ? "Soins & vivres d'urgence" : "Healthcare & storage"}</span>
                    </div>
                  </div>
                </div>

                {/* Direct Action Buttons */}
                <div className="haiti-founder-appeal__actions">
                  <a href={routePaths.donate} className="button button--coral">
                    {language === "fr" ? "Soutenir ce projet urgent" : "Support this urgent work"}
                    <ArrowRight size={16} />
                  </a>
                  <a href={routePaths.contact} className="button button--paper">
                    {language === "fr" ? "Contacter Dr. Jean-Louis" : "Contact Dr. Jean-Louis"}
                  </a>
                  <div className="haiti-founder-appeal__direct-call">
                    <Phone size={14} />
                    <span>+1 (786) 443-0472</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 2. NOS MATÉRIELS – LES PREMIERS PAS */}
      <div className="section-space haiti-section--alt">
        <div className="container">
          <div className="haiti-works__header">
            <p className="eyebrow">
              <span className="eyebrow-dot" />
              {language === "fr" ? "Moyens de chantier" : "Heavy Machinery & Logistics"}
            </p>
            <h2>
              {language === "fr"
                ? "Nos matériels : les premiers pas sur le terrain"
                : "Our Equipment: First Steps on the Ground"}
            </h2>
            <p className="haiti-works__intro">
              {language === "fr"
                ? "« Nous commençons avec ces matériels, il nous en faut davantage. » Pour bâtir dans une région enclavée et montagneuse, la Fondation Blessed Vally mobilise des engins lourds capables de déblayer, hisser les charges et stabiliser les fondations."
                : "“We are starting with this equipment, and we need more.” To build on rugged mountain terrain, Blessed Vally Foundation deploys heavy machinery capable of excavation, heavy lifting, and concrete reinforcement."}
            </p>
          </div>

          <div className="machinery-grid">
            {machineryList.map((item) => (
              <div key={item.id} className="machinery-card">
                <div className="machinery-card__media">
                  <img
                    src={item.image}
                    alt={language === "fr" ? item.nameFr : item.nameEn}
                    className="machinery-card__img"
                    loading="lazy"
                  />
                  <span className="machinery-card__badge">
                    {language === "fr" ? item.badgeFr : item.badgeEn}
                  </span>
                </div>
                <div className="machinery-card__body">
                  <span className="machinery-card__role">
                    {language === "fr" ? item.roleFr : item.roleEn}
                  </span>
                  <h3 className="machinery-card__title">
                    {language === "fr" ? item.nameFr : item.nameEn}
                  </h3>
                  <p className="machinery-card__desc">
                    {language === "fr" ? item.descFr : item.descEn}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Machinery Appeal Callout */}
          <div className="machinery-callout">
            <div className="machinery-callout__icon">
              <Truck size={24} />
            </div>
            <div className="machinery-callout__content">
              <h4>
                {language === "fr"
                  ? "Besoins matériels & Équipements prioritaires"
                  : "Priority Equipment & Material Needs"}
              </h4>
              <p>
                {language === "fr"
                  ? "Pour achever les dalles et les finitions du bâtiment, nos équipes ont un besoin pressant de bétonnières industrielles supplémentaires, de groupes électrogènes diesel autonomes, de perforateurs thermiques et de fer à béton de haute résistance."
                  : "To complete upper slabs and finishing masonry, our team urgently requires additional industrial concrete mixers, autonomous diesel power generators, thermal breakers, and high-tensile structural steel."}
              </p>
            </div>
            <a href={routePaths.donate} className="button button--coral button--compact">
              {language === "fr" ? "Contribuer en matériel" : "Contribute equipment"}
              <ArrowRight size={14} />
            </a>
          </div>
        </div>
      </div>

      {/* 3. BLESSED VALLY GROUP – L'ÉCOSYSTÈME DU PROJET */}
      <div className="section-space">
        <div className="container">
          <div className="haiti-works__header">
            <p className="eyebrow">
              <span className="eyebrow-dot" />
              {language === "fr" ? "Organisation & Vocation" : "Organization & Mission Network"}
            </p>
            <h2>
              {language === "fr"
                ? "Blessed Vally Group : un écosystème au service de la mission"
                : "Blessed Vally Group: A Dedicated Ecosystem"}
            </h2>
            <p className="haiti-works__intro">
              {language === "fr"
                ? "Nous sommes une organisation dédiée à apporter une aide et un soutien aux personnes dans le besoin. Notre engagement se concrétise à travers plusieurs structures coordonnées en Haïti et aux États-Unis pour assurer l'accueil, la formation, l'assistance humanitaire et la durabilité des actions."
                : "We are an organization committed to assisting vulnerable individuals and families. Our mission takes shape through five coordinated entities across Haiti and the United States, providing hospitality, education, humanitarian relief, and operational sustainability."}
            </p>
          </div>

          <div className="ecosystem-grid">
            {ecosystemEntities.map((ent, idx) => {
              const renderIcon = () => {
                switch (ent.icon) {
                  case "home":
                    return <Home size={22} />;
                  case "building":
                    return <Building2 size={22} />;
                  case "heart":
                    return <HeartHandshake size={22} />;
                  case "compass":
                    return <Compass size={22} />;
                  case "layers":
                    return <Layers size={22} />;
                }
              };

              return (
                <div key={ent.id} className="ecosystem-card">
                  <div className="ecosystem-card__top">
                    <span className="ecosystem-card__num">0{idx + 1}</span>
                    <div className="ecosystem-card__icon">{renderIcon()}</div>
                  </div>
                  <div className="ecosystem-card__location">
                    <MapPin size={13} />
                    <span>{language === "fr" ? ent.locationFr : ent.locationEn}</span>
                  </div>
                  <h3 className="ecosystem-card__title">{ent.name}</h3>
                  <span className="ecosystem-card__badge">
                    {language === "fr" ? ent.badgeFr : ent.badgeEn}
                  </span>
                  <p className="ecosystem-card__desc">
                    {language === "fr" ? ent.descFr : ent.descEn}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* 4. APERÇU DES TRAVAUX – CAMPUS DE BROSTAGE (DONDON) */}
      <div className="section-space haiti-section--alt" id="galerie-travaux">
        <div className="container">
          <div className="haiti-works__header">
            <p className="eyebrow">
              <span className="eyebrow-dot" />
              {language === "fr" ? "Brostage, Dondon • Département du Nord" : "Brostage, Dondon • Northern Department"}
            </p>
            <h2>
              {language === "fr"
                ? "Campus de Brostage (Dondon) : Galerie du complexe éducatif"
                : "Brostage Campus (Dondon): Educational Facility Gallery"}
            </h2>
            <p className="haiti-works__intro">
              {language === "fr"
                ? "Découvrez en détail l'élévation des structures, le ferraillage des fondations, les arcades du bâtiment éducatif et le travail quotidien des artisans haïtiens sur le campus scolaire de Brostage à Dondon (Département du Nord)."
                : "Examine detailed perspectives of structural elevation, seismic foundation steelwork, educational campus colonnades, and the daily dedication of local builders at the Brostage campus in Dondon (Northern Department)."}
            </p>
          </div>

          {/* Metric Strip */}
          <div className="haiti-works__metrics">
            <div className="haiti-works__metric">
              <strong>12</strong>
              <span>{language === "fr" ? "Vues documentées du site" : "Documented viewpoints"}</span>
            </div>
            <div className="haiti-works__metric">
              <strong>R+1</strong>
              <span>{language === "fr" ? "Deux étages scolaires" : "Two school floors"}</span>
            </div>
            <div className="haiti-works__metric">
              <strong>100%</strong>
              <span>{language === "fr" ? "Dédié aux enfants & familles" : "Dedicated to community"}</span>
            </div>
            <div className="haiti-works__metric">
              <strong>Autonomie</strong>
              <span>{language === "fr" ? "Eau potable & 4 WC" : "Clean water & 4 toilets"}</span>
            </div>
          </div>

          {/* Category Filter Pills */}
          <div className="works-filters">
            <button
              type="button"
              className={`works-filter-btn ${selectedCategory === "all" ? "works-filter-btn--active" : ""}`}
              onClick={() => setSelectedCategory("all")}
            >
              {language === "fr" ? "Toutes les vues (12)" : "All Views (12)"}
            </button>
            <button
              type="button"
              className={`works-filter-btn ${selectedCategory === "building" ? "works-filter-btn--active" : ""}`}
              onClick={() => setSelectedCategory("building")}
            >
              {language === "fr" ? "Bâtiment R+1 & Salles (7)" : "School & Classrooms (7)"}
            </button>
            <button
              type="button"
              className={`works-filter-btn ${selectedCategory === "structure" ? "works-filter-btn--active" : ""}`}
              onClick={() => setSelectedCategory("structure")}
            >
              {language === "fr" ? "Gros œuvre & Fondations (4)" : "Structure & Foundations (4)"}
            </button>
            <button
              type="button"
              className={`works-filter-btn ${selectedCategory === "team" ? "works-filter-btn--active" : ""}`}
              onClick={() => setSelectedCategory("team")}
            >
              {language === "fr" ? "Artisans & Équipe (1)" : "Builders & Team (1)"}
            </button>
          </div>

          {/* Gallery Grid */}
          <div className="haiti-works__grid">
            {filteredPhotos.map((item, idx) => (
              <div
                key={item.id}
                className="works-card"
                onClick={() => openLightbox("dondon", idx)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    openLightbox("dondon", idx);
                  }
                }}
              >
                <div className="works-card__media">
                  <img
                    src={item.image}
                    alt={language === "fr" ? item.titleFr : item.titleEn}
                    className="works-card__img"
                    loading="lazy"
                  />
                  <div className="works-card__overlay">
                    <span className="works-card__num">{item.num}</span>
                    <button
                      type="button"
                      className="works-card__zoom-btn"
                      title={language === "fr" ? "Agrandir la photo" : "Enlarge photo"}
                      aria-label={language === "fr" ? "Agrandir" : "Enlarge"}
                    >
                      <Maximize2 size={15} />
                    </button>
                  </div>
                </div>
                <div className="works-card__body">
                  <div className="works-card__meta">
                    <span className="works-card__tag">
                      {language === "fr" ? item.tagFr : item.tagEn}
                    </span>
                    <span className="works-card__index">
                      {idx + 1} / {filteredPhotos.length}
                    </span>
                  </div>
                  <h3 className="works-card__title">
                    {language === "fr" ? item.titleFr : item.titleEn}
                  </h3>
                  <p className="works-card__desc">
                    {language === "fr" ? item.descFr : item.descEn}
                  </p>
                  <div className="works-card__action">
                    <span>
                      <Eye size={14} />
                      {language === "fr" ? "Agrandir la vue" : "Enlarge perspective"}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 5. IMPLANTATION DE DELMAS : CHANTIER EN COURS & RÉSIDENCE MISSIONNAIRE */}
      <div className="section-space" id="delmas">
        <div className="container">
          <div className="haiti-works__header">
            <p className="eyebrow">
              <span className="eyebrow-dot" />
              {language === "fr" ? "Département de l'Ouest • Delmas" : "Western Department • Delmas"}
            </p>
            <h2>
              {language === "fr"
                ? "Delmas : Notre nouvelle construction et la Résidence Missionnaire"
                : "Delmas: Our Newly Started Construction & Missionary Residence"}
            </h2>
            <div className="delmas-quote-callout" style={{ background: "rgba(224,86,36,0.06)", borderLeft: "4px solid var(--coral)", padding: "14px 18px", borderRadius: "2px", margin: "16px 0 20px" }}>
              <p style={{ margin: 0, font: "italic 15px/1.5 'Fraunces', serif", color: "var(--ink)" }}>
                {language === "fr"
                  ? "« Pour les travaux en cours à Delmas, nous venons de commencer la construction. » — La Fondation Blessed Vally documente chaque étape avec authenticité."
                  : "“For our ongoing work in Delmas, we have just started construction.” — Blessed Vally Foundation documents every milestone with complete transparency."}
              </p>
            </div>
            <p className="haiti-works__intro">
              {language === "fr"
                ? "À Delmas, la Fondation Blessed Vally déploie deux pôles essentiels : les travaux de gros œuvre récemment démarrés pour étendre nos capacités de service, et la Résidence Missionnaire garantissant un accueil sécurisé, fraternel et logistique pour les ouvriers du Seigneur et les délégations en visite."
                : "In Delmas, Blessed Vally Foundation operates two vital hubs: newly started structural works expanding our ministry reach, and the Missionary Residence offering secure, fraternal, and logistical hospitality for mission teams."}
            </p>
          </div>

          {/* Delmas Photos Grid */}
          <div className="delmas-gallery__grid">
            {delmasGallery.map((item, idx) => {
              const isFeatured = idx < 2;
              return (
                <div
                  key={item.id}
                  className={`delmas-card ${isFeatured ? "delmas-card--featured" : "delmas-card--standard"}`}
                  onClick={() => openLightbox("delmas", idx)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      openLightbox("delmas", idx);
                    }
                  }}
                >
                  <div className="delmas-card__media">
                    <img
                      src={item.image}
                      alt={language === "fr" ? item.titleFr : item.titleEn}
                      className="delmas-card__img"
                      loading="lazy"
                    />
                    <span className="delmas-card__badge-overlay">
                      {language === "fr" ? item.tagFr : item.tagEn}
                    </span>
                    <button
                      type="button"
                      className="delmas-card__zoom-btn"
                      title={language === "fr" ? "Agrandir" : "Enlarge"}
                      aria-label={language === "fr" ? "Agrandir" : "Enlarge"}
                    >
                      <Maximize2 size={15} />
                    </button>
                  </div>
                  <div className="delmas-card__body">
                    <div className="delmas-card__meta">
                      <span className="delmas-card__tag">
                        {item.num} • {language === "fr" ? "Delmas, Haïti" : "Delmas, Haiti"}
                      </span>
                    </div>
                    <h3 className="delmas-card__title">
                      {language === "fr" ? item.titleFr : item.titleEn}
                    </h3>
                    <p className="delmas-card__desc">
                      {language === "fr" ? item.descFr : item.descEn}
                    </p>
                    <div className="delmas-card__action">
                      <Eye size={14} />
                      <span>{language === "fr" ? "Agrandir la vue authentique" : "View authentic photo"}</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Videos Grid with Accurate Posters */}
          <div className="works-videos">
            <div className="works-videos__header">
              <p className="eyebrow">
                <span className="eyebrow-dot" />
                {language === "fr" ? "Vidéos de terrain" : "Field Video Footage"}
              </p>
              <h3>
                {language === "fr"
                  ? "Les chantiers en mouvement sur le terrain"
                  : "Field Construction in Motion"}
              </h3>
              <p className="works-videos__intro">
                {language === "fr"
                  ? "Visualisez directement le déploiement de nos équipes : coulage des piliers armés, ferraillage antisismique et dispositions architecturales des bâtiments."
                  : "Watch on-site footage of team deployment: reinforced pillar pours, seismic steel cages, and architectural framing."}
              </p>
            </div>
            <div className="works-videos__grid">
              <div className="works-video-card">
                <video
                  controls
                  preload="metadata"
                  poster="/images/delmas/delmas-chantier-elevation.jpg"
                  src="https://blessedvallyfoundation.org/wp-content/uploads/2023/01/16.mp4"
                >
                  <p>
                    {language === "fr"
                      ? "Votre navigateur ne prend pas en charge la lecture vidéo."
                      : "Your browser does not support the video tag."}
                  </p>
                </video>
                <div className="works-video-card__info">
                  <h4>
                    {language === "fr"
                      ? "Chantier de Delmas : Érection des structures"
                      : "Delmas Works: Structural Elevation"}
                  </h4>
                  <p>
                    {language === "fr"
                      ? "Captation vidéo directe du travail des ouvriers sur les fondations et piliers armés à Delmas."
                      : "Direct on-site footage showing workers advancing structural columns and masonry in Delmas."}
                  </p>
                </div>
              </div>

              <div className="works-video-card">
                <video
                  controls
                  preload="metadata"
                  poster="/images/travaux/chantier-facade-colonnes.jpg"
                  src="https://blessedvallyfoundation.org/wp-content/uploads/2023/01/22.mp4"
                >
                  <p>
                    {language === "fr"
                      ? "Votre navigateur ne prend pas en charge la lecture vidéo."
                      : "Your browser does not support the video tag."}
                  </p>
                </video>
                <div className="works-video-card__info">
                  <h4>
                    {language === "fr"
                      ? "Complexe de Brostage (Dondon) : Perspective du campus"
                      : "Brostage Campus (Dondon): Architectural Perspective"}
                  </h4>
                  <p>
                    {language === "fr"
                      ? "Visite des volumes intérieurs, des arcades et de l'implantation dans la vallée du Nord à Brostage."
                      : "Walkthrough of interior classrooms, colonnades, and surrounding mountain valley setting in Brostage."}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 6. COORDONNÉES DE TERRAIN & ADRESSES DE CONTACT (From travaux-en-cours) */}
      <div className="section-space haiti-section--alt">
        <div className="container">
          <div className="haiti-works__header">
            <p className="eyebrow">
              <span className="eyebrow-dot" />
              {language === "fr" ? "Implantations directes" : "Field Offices & Coordinates"}
            </p>
            <h2>
              {language === "fr"
                ? "Nos implantations en Haïti et aux États-Unis"
                : "Our Locations in Haiti and the United States"}
            </h2>
            <p className="haiti-works__intro">
              {language === "fr"
                ? "Présents au plus près des communautés haïtiennes et coordonnés depuis la Floride, nous restons joignables pour toute question relative au chantier, aux dons ou aux partenariats."
                : "Operating close to Haitian communities and coordinated from Florida, we welcome inquiries regarding construction milestones, donations, and partnerships."}
            </p>
          </div>

          <div className="field-locations-grid">
            <div className="location-card">
              <div className="location-card__header">
                <MapPin size={20} className="location-card__pin" />
                <span className="location-card__tag">
                  {language === "fr" ? "Haïti • Chantier Nord" : "Haiti • North Building Site"}
                </span>
              </div>
              <h3 className="location-card__title">
                {language === "fr" ? "Complexe de Dondon & Brostage" : "Dondon & Brostage Complex"}
              </h3>
              <p className="location-card__address">
                Dondon, Brostage<br />
                Département du Nord – Haïti
              </p>
              <div className="location-card__phone">
                <Phone size={14} />
                <span>+509 3618-4340 / +509 4310-8621 / +509 48 34 2601</span>
              </div>
            </div>

            <div className="location-card">
              <div className="location-card__header">
                <Compass size={20} className="location-card__pin" />
                <span className="location-card__tag">
                  {language === "fr" ? "Haïti • Mission Delmas" : "Haiti • Delmas Missionary Hub"}
                </span>
              </div>
              <h3 className="location-card__title">
                {language === "fr" ? "Résidence Missionnaire" : "Missionary Residence"}
              </h3>
              <p className="location-card__address">
                Delmas, Région Métropolitaine<br />
                Département de l'Ouest – Haïti
              </p>
              <div className="location-card__phone">
                <Phone size={14} />
                <span>+509 3618-4340</span>
              </div>
            </div>

            <div className="location-card">
              <div className="location-card__header">
                <Building2 size={20} className="location-card__pin" />
                <span className="location-card__tag">
                  {language === "fr" ? "États-Unis • Bureau" : "United States • Main Office"}
                </span>
              </div>
              <h3 className="location-card__title">
                {language === "fr" ? "Siège Administratif Floride" : "Florida Administrative Office"}
              </h3>
              <p className="location-card__address">
                609 NE 123rd Street<br />
                North Miami, FL 33161 – USA
              </p>
              <div className="location-card__phone">
                <Phone size={14} />
                <span>+1 (786) 443-0472 / +1 (845) 655-7399</span>
              </div>
            </div>

            <div className="location-card">
              <div className="location-card__header">
                <Mail size={20} className="location-card__pin" />
                <span className="location-card__tag">
                  {language === "fr" ? "États-Unis • Courrier" : "United States • Mailing"}
                </span>
              </div>
              <h3 className="location-card__title">
                {language === "fr" ? "Adresse Postale Officielle" : "Official Mailing Address"}
              </h3>
              <p className="location-card__address">
                12933 SW 129 Street<br />
                Miami, FL 33177 – USA
              </p>
              <div className="location-card__phone">
                <Mail size={14} />
                <span>blessedvallyfoundation@gmail.com</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 7. COMMITMENT & DIRECT DONATION BANNER */}
      <div className="section-space">
        <div className="container">
          <div className="haiti-works__banner">
            <div className="haiti-works__banner-text">
              <div className="haiti-works__banner-heading">
                <ShieldCheck size={24} className="haiti-works__shield" />
                <h3>
                  {language === "fr"
                    ? "Transparence absolue & Impact direct sur le chantier"
                    : "Absolute Transparency & Direct Field Impact"}
                </h3>
              </div>
              <p>
                {language === "fr"
                  ? "Chaque dollar et chaque contribution reçus sont directement déployés sur le terrain pour l'achat de ciment, le ferraillage, les engins et la rémunération équitable des ouvriers locaux. Joignez-vous à nous pour achever le réservoir d'eau, le bloc sanitaire et l'école chrétienne."
                  : "Every dollar and material gift is deployed straight to on-site operations for cement, reinforced rebar, machinery fuel, and fair wages for local builders. Partner with us to complete the clean water reservoir, sanitary block, and Christian school."}
              </p>
            </div>
            <div className="haiti-works__banner-actions">
              <a href={routePaths.donate} className="button button--coral">
                {language === "fr" ? "Faire un don pour le chantier" : "Donate for the construction"}
                <ArrowRight size={16} />
              </a>
              <a href={routePaths.contact} className="button button--paper">
                {language === "fr" ? "Contacter le bureau" : "Contact the office"}
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* 8. INTERACTIVE LIGHTBOX */}
      {currentLightboxPhoto && lightboxState !== null && (
        <div
          className="works-lightbox"
          onClick={closeLightbox}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="works-lightbox__dialog"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="works-lightbox__header">
              <div className="works-lightbox__counter">
                <span className="works-lightbox__num">
                  {currentLightboxPhoto.num}
                </span>
                <span className="works-lightbox__tag">
                  {language === "fr"
                    ? currentLightboxPhoto.tagFr
                    : currentLightboxPhoto.tagEn}
                </span>
                <span className="works-lightbox__pagination">
                  {lightboxState.index + 1} / {currentLightboxList.length}
                </span>
              </div>
              <button
                type="button"
                className="works-lightbox__close"
                onClick={closeLightbox}
                aria-label={language === "fr" ? "Fermer" : "Close"}
              >
                <X size={20} />
              </button>
            </div>

            <div className="works-lightbox__stage">
              <button
                type="button"
                className="works-lightbox__nav works-lightbox__nav--prev"
                onClick={prevPhoto}
                aria-label={language === "fr" ? "Photo précédente" : "Previous photo"}
              >
                <ChevronLeft size={24} />
              </button>

              <div className="works-lightbox__media">
                <img
                  src={currentLightboxPhoto.image}
                  alt={
                    language === "fr"
                      ? currentLightboxPhoto.titleFr
                      : currentLightboxPhoto.titleEn
                  }
                  className="works-lightbox__img"
                />
              </div>

              <button
                type="button"
                className="works-lightbox__nav works-lightbox__nav--next"
                onClick={nextPhoto}
                aria-label={language === "fr" ? "Photo suivante" : "Next photo"}
              >
                <ChevronRight size={24} />
              </button>
            </div>

            <div className="works-lightbox__caption">
              <h4>
                {language === "fr"
                  ? currentLightboxPhoto.titleFr
                  : currentLightboxPhoto.titleEn}
              </h4>
              <p>
                {language === "fr"
                  ? currentLightboxPhoto.descFr
                  : currentLightboxPhoto.descEn}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
