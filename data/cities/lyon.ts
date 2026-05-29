import type { CityData } from "@/types/city";

export const lyonData: CityData = {
  slug: "lyon",
  name: "Lyon",
  department: "Rhône",
  region: "Auvergne-Rhône-Alpes",
 
  population: 519127,
  restaurants: 4259,
  restaurantsPer1000: 8.2,
  nationalAveragePer1000: 4.63,
  updatedAt: "Mai 2026",

  metrics: [
    {
      label: "Restaurants à Lyon",
      value: "4 259",
    },
    {
      label: "Habitants",
      value: "519 127",
      detail: "INSEE 2023",
    },
    {
      label: "Restaurants pour 1 000 habitants",
      value: "8,20",
      detail: "Moyenne nationale : 4,63",
    },
    {
      label: "Restauration rapide",
      value: "45,2 %",
    },
    {
      label: "Restauration traditionnelle",
      value: "54,66 %",
    },
  ],

  comparisonCities: [
    { name: "Lille", ratio: 9.67, population: 238246 },
    { name: "Nice", ratio: 9.12, population: 357737 },
    { name: "Lyon", ratio: 8.2, population: 519127 },
    { name: "Montpellier", ratio: 7.96, population: 310240 },
    { name: "Strasbourg", ratio: 7.1, population: 293771 },
  ],

  restaurantTypes: [
    {
      label: "Restauration rapide",
      value: 45.2,
    },
    {
      label: "Restauration traditionnelle",
      value: 54.66,
    },
  ],

  projectQuestions: [
    "Lyon est-elle une ville saturée en restaurants ?",
    "Quel type de restauration est le plus présent à Lyon ?",
    "Quelle densité de restaurants à Lyon par rapport aux autres grandes villes ?",
    "Est-il plus difficile d’ouvrir un restaurant à Lyon qu’ailleurs en France ?",
    "Comment se démarquer sur un marché lyonnais déjà très structuré ?",
    "Quelles données analyser avant d’ouvrir un restaurant à Lyon ?",
  ],

  analysisTitle: "Peut-on encore ouvrir un restaurant à Lyon ?",
  analysisText:
    "Avec 8,20 restaurants pour 1 000 habitants, Lyon présente un niveau de concurrence nettement supérieur à la moyenne nationale (4,63). Le marché reste dynamique, mais il demande un positionnement précis.",
  analysisInsights: [
    {
      text: "La restauration traditionnelle représente 54,66 % du marché lyonnais, soit 2 328 établissements recensés.",
    },
    {
      text: "La restauration rapide pèse 45,2 % des établissements, avec 1 925 restaurants recensés : un volume important, mais moins dominant que dans d’autres grandes villes.",
    },
    {
      text: "Lyon se situe au 5e rang de son segment de population pour la densité de restaurants, derrière Nice et devant Montpellier.",
    },
    {
      text: "La densité lyonnaise est supérieure d’environ 77 % à la moyenne nationale, ce qui impose une analyse fine du quartier, du concept et du niveau de concurrence local.",
    },
  ],

  analysisConclusion:
    "Ouvrir un restaurant à Lyon reste possible, mais le projet doit s’appuyer sur une zone d’implantation bien choisie, une offre différenciante et une lecture précise de la concurrence locale.",

  faq: [
    {
      question: "Combien y a-t-il de restaurants à Lyon ?",
      answer: "Lyon compte actuellement 4 259 restaurants recensés.",
    },
    {
      question: "Quelle est la densité de restaurants à Lyon ?",
      answer:
        "Avec 8,20 restaurants pour 1 000 habitants, Lyon affiche une densité nettement supérieure à la moyenne nationale (4,63).",
    },
    {
      question: "Quel type de restauration domine à Lyon ?",
      answer:
        "La restauration traditionnelle représente 54,66 % des établissements, contre 45,2 % pour la restauration rapide.",
    },
  ],
};
