import {
  Radar,
  Gauge,
  Droplets,
  GitCommit,
  Trash2,
  HardHat,
  Lock,
  Activity,
  Compass,
  FileText,
  Factory,
  FlaskConical,
  Wheat,
  Wrench,
  Leaf,
  type LucideIcon,
} from "lucide-react";

export interface Category {
  slug: string;
  name: string;
  shortDescription: string;
  description: string;
  icon: LucideIcon;
  href: string;
}

export const categories: Category[] = [
  {
    slug: "detection-des-gaz",
    name: "Détection des gaz",
    shortDescription: "Détecteurs portables et fixes NH₃, H₂S, O₂, CO, CO₂.",
    description:
      "Une gamme de détecteurs de gaz portables et fixes pour surveiller NH₃, H₂S, O₂, CO et CO₂ sur vos sites industriels.",
    icon: Radar,
    href: "/produits/detection-des-gaz",
  },
  {
    slug: "etalonnage",
    name: "Étalonnage",
    shortDescription: "Étalonnage des détecteurs de gaz et des débitmètres.",
    description:
      "Des prestations d'étalonnage pour vos détecteurs de gaz et vos débitmètres, confirmées après analyse de votre besoin.",
    icon: Gauge,
    href: "/produits/etalonnage",
  },
  {
    slug: "pompes-industrielles",
    name: "Pompes industrielles",
    shortDescription: "Pompes centrifuges, doseuses, à membrane et de transfert.",
    description:
      "Des pompes industrielles adaptées à vos process : centrifuges, doseuses, à membrane et de transfert.",
    icon: Droplets,
    href: "/produits/pompes-industrielles",
  },
  {
    slug: "vannes-industrielles",
    name: "Vannes industrielles",
    shortDescription: "Vannes papillon, à boisseau sphérique, de régulation, clapets.",
    description:
      "Des vannes industrielles robustes pour vos installations : papillon, boisseau sphérique, régulation et clapets anti-retour.",
    icon: GitCommit,
    href: "/produits/vannes-industrielles",
  },
  {
    slug: "poubelles-conteneurs",
    name: "Poubelles & conteneurs",
    shortDescription: "Solutions de collecte pour sites industriels et chantiers.",
    description:
      "Des poubelles et conteneurs adaptés aux besoins de collecte des sites industriels, chantiers et zones de maintenance.",
    icon: Trash2,
    href: "/produits/poubelles-conteneurs",
  },
  {
    slug: "epi-securite",
    name: "EPI & sécurité",
    shortDescription: "Chaussures, gants, casques et harnais de protection.",
    description:
      "Des équipements de protection individuelle pour sécuriser vos équipes sur le terrain : chaussures, gants, casques et harnais.",
    icon: HardHat,
    href: "/produits/epi-securite",
  },
  {
    slug: "consignation-loto",
    name: "Consignation (LOTO)",
    shortDescription: "Kits, cadenas et étiquettes de consignation multi-énergies.",
    description:
      "Des kits de consignation LOTO (Lockout-Tagout) pour sécuriser vos interventions de maintenance : cadenas, étiquettes et boîtiers multi-énergies.",
    icon: Lock,
    href: "/produits/consignation-loto",
  },
];

export interface Product {
  slug: string;
  name: string;
  ref: string;
  categorySlug: string;
  description: string;
  longDescription?: string;
  image?: string;
  images?: string[];
}

export const products: Product[] = [
  // Détection des gaz
  {
    slug: "detecteur-multigaz-portable",
    name: "Détecteur multigaz portable",
    ref: "IF-DET-MG01",
    categorySlug: "detection-des-gaz",
    description: "Détection simultanée de plusieurs gaz pour interventions terrain.",
  },
  {
    slug: "detecteur-nh3",
    name: "Détecteur NH₃",
    ref: "IF-DET-NH301",
    categorySlug: "detection-des-gaz",
    description: "Surveillance dédiée de l'ammoniac en environnement industriel.",
  },
  {
    slug: "detecteur-h2s",
    name: "Détecteur H₂S",
    ref: "IF-DET-H2S01",
    categorySlug: "detection-des-gaz",
    description: "Détection du sulfure d'hydrogène pour la sécurité des équipes.",
  },
  {
    slug: "detecteur-fixe-co2",
    name: "Détecteur fixe CO₂",
    ref: "IF-DET-CO201",
    categorySlug: "detection-des-gaz",
    description: "Installation fixe pour la surveillance continue du CO₂.",
  },
  // Pompes industrielles
  {
    slug: "pompe-centrifuge",
    name: "Pompe centrifuge",
    ref: "IF-PMP-CF01",
    categorySlug: "pompes-industrielles",
    description: "Transfert de fluides à haut débit pour applications industrielles.",
  },
  {
    slug: "pompe-doseuse",
    name: "Pompe doseuse",
    ref: "IF-PMP-DS01",
    categorySlug: "pompes-industrielles",
    description: "Dosage précis de produits chimiques et additifs.",
  },
  {
    slug: "pompe-a-membrane",
    name: "Pompe à membrane",
    ref: "IF-PMP-MB01",
    categorySlug: "pompes-industrielles",
    description: "Pompage de fluides abrasifs ou visqueux sans contact direct.",
  },
  {
    slug: "pompe-de-transfert",
    name: "Pompe de transfert",
    ref: "IF-PMP-TR01",
    categorySlug: "pompes-industrielles",
    description: "Transfert de liquides entre cuves et installations de stockage.",
  },
  // Vannes industrielles
  {
    slug: "vanne-papillon",
    name: "Vanne papillon",
    ref: "IF-VNE-PP01",
    categorySlug: "vannes-industrielles",
    description: "Régulation de débit compacte pour réseaux de tuyauterie.",
  },
  {
    slug: "vanne-boisseau-spherique",
    name: "Vanne à boisseau sphérique",
    ref: "IF-VNE-BS01",
    categorySlug: "vannes-industrielles",
    description: "Isolation rapide et étanche pour circuits sous pression.",
  },
  {
    slug: "vanne-de-regulation",
    name: "Vanne de régulation",
    ref: "IF-VNE-RG01",
    categorySlug: "vannes-industrielles",
    description: "Contrôle précis du débit et de la pression en continu.",
  },
  {
    slug: "clapet-anti-retour",
    name: "Clapet anti-retour",
    ref: "IF-VNE-CAR01",
    categorySlug: "vannes-industrielles",
    description: "Protection des installations contre les retours de fluide.",
  },
  // Poubelles & conteneurs
  {
    slug: "poubelle-tri-selectif",
    name: "Poubelle de tri sélectif",
    ref: "IF-PBL-TS01",
    categorySlug: "poubelles-conteneurs",
    description: "Collecte sélective multi-flux pour sites industriels et espaces communs.",
    image: "/products/poubelle-tri-selectif.jpg",
  },
  {
    slug: "poubelle-industrielle-exterieure",
    name: "Poubelle industrielle extérieure",
    ref: "IF-PBL-EX01",
    categorySlug: "poubelles-conteneurs",
    description: "Résistante aux intempéries, adaptée aux chantiers et zones de stockage.",
    image: "/products/poubelle-industrielle-exterieure.jpg",
  },
  {
    slug: "conteneur-dechets-industriels",
    name: "Conteneur à déchets industriels",
    ref: "IF-PBL-CD01",
    categorySlug: "poubelles-conteneurs",
    description: "Grande capacité pour la collecte de déchets sur sites de production.",
  },
  {
    slug: "bac-recyclage",
    name: "Bac de collecte recyclage",
    ref: "IF-PBL-RC01",
    categorySlug: "poubelles-conteneurs",
    description: "Solution de recyclage pour bureaux, ateliers et zones de maintenance.",
  },
  {
    slug: "poubelle-a-pedale",
    name: "Poubelle à pédale",
    ref: "IF-PBL-PD01",
    categorySlug: "poubelles-conteneurs",
    description: "Usage hygiénique sans contact pour zones de production et sanitaires.",
  },
  // EPI et sécurité
  {
    slug: "chaussures-de-securite",
    name: "Chaussures de sécurité",
    ref: "IF-EPI-CH01",
    categorySlug: "epi-securite",
    description: "Protection des pieds conforme aux normes de sécurité industrielle.",
  },
  {
    slug: "gants-de-protection",
    name: "Gants de protection",
    ref: "IF-EPI-GA01",
    categorySlug: "epi-securite",
    description: "Protection des mains adaptée à vos environnements de travail.",
  },
  {
    slug: "casque-industriel",
    name: "Casque industriel",
    ref: "IF-EPI-CQ01",
    categorySlug: "epi-securite",
    description: "Protection de la tête sur sites industriels et chantiers.",
  },
  {
    slug: "harnais-antichute",
    name: "Harnais antichute",
    ref: "IF-EPI-HA01",
    categorySlug: "epi-securite",
    description: "Sécurisation des interventions en hauteur.",
  },
  // Consignation (LOTO)
  {
    slug: "kit-consignation-electrique",
    name: "Kit de consignation électrique",
    ref: "IF-CSG-EL01",
    categorySlug: "consignation-loto",
    description: "Ensemble complet pour la consignation sécurisée des installations électriques.",
  },
  {
    slug: "cadenas-consignation",
    name: "Cadenas de consignation",
    ref: "IF-CSG-CD01",
    categorySlug: "consignation-loto",
    description: "Cadenas individuels à clés uniques pour verrouiller les points d'énergie.",
  },
  {
    slug: "etiquettes-consignation",
    name: "Étiquettes de consignation",
    ref: "IF-CSG-ET01",
    categorySlug: "consignation-loto",
    description: "Étiquettes d'avertissement pour signaler une intervention en cours.",
  },
  {
    slug: "boitier-consignation-multi-energies",
    name: "Boîtier de consignation multi-énergies",
    ref: "IF-CSG-BM01",
    categorySlug: "consignation-loto",
    description: "Regroupe plusieurs cadenas pour consigner des installations multi-énergies.",
  },
];

export interface ServiceItem {
  slug: string;
  name: string;
  description: string;
  icon: LucideIcon;
}

export const services: ServiceItem[] = [
  {
    slug: "etalonnage-detecteurs-gaz",
    name: "Étalonnage des détecteurs de gaz",
    description: "Vérification et ajustement de vos détecteurs de gaz.",
    icon: Gauge,
  },
  {
    slug: "etalonnage-debitmetres",
    name: "Étalonnage des débitmètres",
    description: "Contrôle de la précision de vos instruments de mesure de débit.",
    icon: Activity,
  },
  {
    slug: "assistance-choix-equipements",
    name: "Assistance au choix des équipements",
    description: "Accompagnement technique pour sélectionner l'équipement adapté.",
    icon: Compass,
  },
  {
    slug: "fourniture-cahier-des-charges",
    name: "Fourniture sur cahier des charges",
    description: "Approvisionnement de matériel selon vos spécifications techniques.",
    icon: FileText,
  },
];

export interface Sector {
  name: string;
  icon: LucideIcon;
}

export const sectors: Sector[] = [
  { name: "Industrie", icon: Factory },
  { name: "BTP", icon: HardHat },
  { name: "Chimie", icon: FlaskConical },
  { name: "Agroalimentaire", icon: Wheat },
  { name: "Maintenance industrielle", icon: Wrench },
  { name: "Environnement", icon: Leaf },
];

export interface ProcessStep {
  number: string;
  title: string;
}

export const processSteps: ProcessStep[] = [
  { number: "01", title: "Envoyez votre besoin" },
  { number: "02", title: "Nous analysons les spécifications" },
  { number: "03", title: "Vous recevez votre proposition" },
  { number: "04", title: "Nous organisons la livraison ou l'intervention" },
];

export const brands: string[] = ["MARQUE 01", "MARQUE 02", "MARQUE 03", "MARQUE 04", "MARQUE 05"];

export interface FaqItem {
  question: string;
  answer: string;
}

export const faqItems: FaqItem[] = [
  {
    question: "Livrez-vous partout au Maroc ?",
    answer:
      "Nous organisons la livraison sur l'ensemble du territoire marocain selon la disponibilité des produits et votre localisation.",
  },
  {
    question: "Quels gaz peuvent être détectés ?",
    answer:
      "Nos détecteurs couvrent notamment NH₃, H₂S, O₂, CO et CO₂. D'autres gaz peuvent être traités sur demande.",
  },
  {
    question: "Comment demander un étalonnage ?",
    answer:
      "Envoyez-nous les références de vos détecteurs ou débitmètres via le formulaire de devis, nous confirmons ensuite les modalités.",
  },
  {
    question: "Quelles informations faut-il fournir pour un débitmètre ?",
    answer:
      "Merci d'indiquer le modèle, la plage de mesure et le fluide concerné afin que nous puissions analyser votre besoin.",
  },
  {
    question: "Pouvez-vous traiter les demandes en quantité ?",
    answer:
      "Oui, nous traitons les demandes unitaires comme les commandes en quantité pour vos projets industriels.",
  },
  {
    question: "Proposez-vous des fiches techniques ?",
    answer:
      "Les fiches techniques disponibles sont communiquées après analyse de votre demande.",
  },
];

export function getCategoryBySlug(slug: string): Category | undefined {
  return categories.find((category) => category.slug === slug);
}

export function getProductsByCategory(categorySlug: string): Product[] {
  return products.filter((product) => product.categorySlug === categorySlug);
}

export function getProductBySlug(categorySlug: string, slug: string): Product | undefined {
  return products.find(
    (product) => product.categorySlug === categorySlug && product.slug === slug
  );
}

export function getServiceBySlug(slug: string): ServiceItem | undefined {
  return services.find((service) => service.slug === slug);
}
