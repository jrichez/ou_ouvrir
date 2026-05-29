import type { CityData } from "@/types/city";

export const toulouseData: CityData = {
  slug: "toulouse",
  name: "Toulouse",
  department: "Haute-Garonne",
  region: "Occitanie",

  population: 515000,
  restaurants: 3446,
  restaurantsPer1000: 6.69,
  nationalAveragePer1000: 4.63,
  updatedAt: "Mai 2026",

  metrics: [
    {
      label: "Restaurants à Toulouse",
      value: "3 446",
    },
    {
      label: "Habitants",
      value: "515 000",
      detail: "INSEE 2023",
    },
    {
      label: "Restaurants pour 1 000 habitants",
      value: "6,69",
      detail: "Moyenne nationale : 4,63",
    },
    {
      label: "Restauration rapide",
      value: "61 %",
    },
    {
      label: "Restauration traditionnelle",
      value: "38,8 %",
    },
  ],

  comparisonCities: [
    { name: "Strasbourg", ratio: 7.1, population: 293771 },
    { name: "Marseille", ratio: 6.85, population: 886040 },
    { name: "Toulouse", ratio: 6.69, population: 515000 },
    { name: "Rennes", ratio: 4.71, population: 230890 },
    { name: "Nantes", ratio: 4.54, population: 327734 },
  ],

  restaurantTypes: [
    {
      label: "Restauration rapide",
      value: 61,
    },
    {
      label: "Restauration traditionnelle",
      value: 38.8,
    },
  ],

  projectQuestions: [
    "Toulouse est-elle une ville saturée en restaurants ?",
    "Quel type de restauration est le plus présent à Toulouse ?",
    "Quelle densité de restaurants à Toulouse par rapport aux autres grandes villes ?",
    "Est-il plus difficile d’ouvrir un restaurant à Toulouse qu’ailleurs en France ?",
    "Comment se démarquer sur un marché porté par une forte croissance urbaine ?",
    "Quelles données analyser avant d’ouvrir un restaurant à Toulouse ?",
  ],

  analysisTitle: "Peut-on encore ouvrir un restaurant à Toulouse ?",
  analysisText:
    "Avec 6,69 restaurants pour 1 000 habitants, Toulouse présente une densité supérieure à la moyenne nationale (4,63), mais inférieure à celle de plusieurs grandes métropoles françaises. Le marché reste attractif, avec un niveau de concurrence à analyser quartier par quartier.",
  analysisInsights: [
    {
      text: "La restauration rapide représente 61 % des établissements recensés à Toulouse, soit 2 102 restaurants : c’est le segment dominant du marché local.",
    },
    {
      text: "La restauration traditionnelle représente 38,8 % du marché, avec 1 336 établissements : ce segment reste important, mais moins présent que les formats rapides.",
    },
    {
      text: "La densité toulousaine est environ 44,5 % supérieure à la moyenne nationale, ce qui confirme un marché dynamique mais déjà bien occupé.",
    },
    {
      text: "Parmi les grandes villes comparables, Toulouse se situe derrière Marseille et Strasbourg en densité de restaurants, mais devant Rennes et Nantes.",
    },
  ],

  analysisConclusion:
    "Ouvrir un restaurant à Toulouse reste possible, notamment avec un concept clair, un bon choix d’emplacement et une analyse précise de la concurrence locale.",

  faq: [
    {
      question: "Combien y a-t-il de restaurants à Toulouse ?",
      answer: "Toulouse compte actuellement 3 446 restaurants recensés.",
    },
    {
      question: "Quelle est la densité de restaurants à Toulouse ?",
      answer:
        "Avec 6,69 restaurants pour 1 000 habitants, Toulouse affiche une densité supérieure à la moyenne nationale (4,63).",
    },
    {
      question: "Quel type de restauration domine à Toulouse ?",
      answer:
        "La restauration rapide représente 61 % des établissements, contre 38,8 % pour la restauration traditionnelle.",
    },
  ],
};
