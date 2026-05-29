import type { CityData } from "@/types/city";

export const parisData: CityData = {
  slug: "paris",
  name: "Paris",
  department: "Paris",
  region: "Île-de-France",
 
  population: 2103778,
  restaurants: 30337,
  restaurantsPer1000: 14.42,
  nationalAveragePer1000: 4.63,
  updatedAt: "Mai 2026",

  metrics: [
    {
      label: "Restaurants à Paris",
      value: "30 337",
    },
    {
      label: "Habitants",
      value: "2 103 778",
      detail: "INSEE 2023",
    },
    {
      label: "Restaurants pour 1 000 habitants",
      value: "14,42",
      detail: "Moyenne nationale : 4,63",
    },
    {
      label: "Restauration rapide",
      value: "41,08 %",
    },
    {
      label: "Restauration traditionnelle",
      value: "58,74 %",
    },
  ],

  comparisonCities: [
    { name: "Paris", ratio: 14.42, population: 2103778 },
    { name: "Bordeaux", ratio: 9.73, population: 267991 },
    { name: "Lille", ratio: 9.67, population: 238246 },
    { name: "Nice", ratio: 9.12, population: 357737 },
    { name: "Lyon", ratio: 8.2, population: 519127 },
  ],

  restaurantTypes: [
    {
      label: "Restauration rapide",
      value: 41.08,
    },
    {
      label: "Restauration traditionnelle",
      value: 58.74,
    },
  ],

  projectQuestions: [
    "Paris est-elle une ville saturée en restaurants ?",
    "Quel type de restauration est le plus présent à Paris ?",
    "Quelle densité de restaurants à Paris par rapport aux autres grandes villes ?",
    "Est-il plus difficile d’ouvrir un restaurant à Paris qu’ailleurs en France ?",
    "Comment se démarquer sur un marché parisien très dense et concurrentiel ?",
    "Quelles données analyser avant d’ouvrir un restaurant à Paris ?",
  ],

  analysisTitle: "Peut-on encore ouvrir un restaurant à Paris ?",
  analysisText:
    "Avec 14,42 restaurants pour 1 000 habitants, Paris présente une densité très supérieure à la moyenne nationale (4,63) et à la moyenne des grandes villes de plus de 200 000 habitants. Le potentiel existe, mais il dépend fortement du quartier, du positionnement, du niveau de différenciation et de la capacité du concept à capter des flux locaux, touristiques ou professionnels.",
  analysisInsights: [
    {
      text: "Paris compte 30 337 restaurants recensés, ce qui la place au 1er rang national en volume parmi les villes analysées.",
    },
    {
      text: "La restauration traditionnelle représente 58,74 % du marché parisien, soit 17 820 établissements recensés.",
    },
    {
      text: "La restauration rapide pèse 41,08 % des établissements, avec 12 463 restaurants recensés.",
    },
    {
      text: "Paris se situe au 1er rang de son segment de population pour la densité de restaurants, devant Bordeaux, Lille, Nice et Lyon.",
    },
    {
      text: "La densité parisienne est supérieure d’environ 211 % à la moyenne nationale et d’environ 47 % à la moyenne des grandes villes comparables.",
    },
  ],

  analysisConclusion:
    "Ouvrir un restaurant à Paris reste possible, mais le marché est extrêmement dense. La réussite repose moins sur l’existence d’une demande globale que sur le choix précis de l’emplacement, la cohérence du concept, la différenciation et la maîtrise des coûts dans un environnement très concurrentiel.",

  faq: [
    {
      question: "Combien y a-t-il de restaurants à Paris ?",
      answer: "Paris compte actuellement 30 337 restaurants recensés.",
    },
    {
      question: "Quelle est la densité de restaurants à Paris ?",
      answer:
        "Avec 14,42 restaurants pour 1 000 habitants, Paris affiche une densité très supérieure à la moyenne nationale (4,63).",
    },
    {
      question: "Quel type de restauration domine à Paris ?",
      answer:
        "La restauration traditionnelle représente 58,74 % des établissements, contre 41,08 % pour la restauration rapide.",
    },
  ],
};
