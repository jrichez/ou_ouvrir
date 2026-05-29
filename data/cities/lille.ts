import type { CityData } from "@/types/city";

export const lilleData: CityData = {
  slug: "lille",
  name: "Lille",
  department: "Nord",
  region: "Hauts-de-France",
 
  population: 238000,
  restaurants: 2303,
  restaurantsPer1000: 9.67,
  nationalAveragePer1000: 4.63,
  updatedAt: "Mai 2026",

  metrics: [
    {
      label: "Restaurants à Lille",
      value: "2 303",
    },
    {
      label: "Habitants",
      value: "238 000",
      detail: "INSEE 2023",
    },
    {
      label: "Restaurants pour 1 000 habitants",
      value: "9,67",
      detail: "Moyenne nationale : 4,63",
    },
    {
      label: "Restauration rapide",
      value: "59,6 %",
    },
    {
      label: "Restauration traditionnelle",
      value: "40,1 %",
    },
  ],

  comparisonCities: [
    { name: "Paris", ratio: 14.42, population: 0 },
    { name: "Bordeaux", ratio: 9.73, population: 0 },
    { name: "Lille", ratio: 9.67, population: 238000 },
    { name: "Nice", ratio: 9.12, population: 0 },
    { name: "Lyon", ratio: 8.2, population: 0 },
  ],

  restaurantTypes: [
    {
      label: "Restauration rapide",
      value: 59.6,
    },
    {
      label: "Restauration traditionnelle",
      value: 40.1,
    },
  ],

  projectQuestions: [
    "Lille est-elle une ville saturée en restaurants ?",
    "Quel type de restauration est le plus présent à Lille ?",
    "Quelle densité de restaurants à Lille par rapport aux autres villes ?",
    "Est-il plus difficile d’ouvrir un restaurant à Lille qu’ailleurs en France ?",
    "Comment se démarquer sur un marché très concurrentiel ?",
    "Quelles données analyser avant d’ouvrir un restaurant à Lille ?",
  ],

  analysisTitle: "Peut-on encore ouvrir un restaurant à Lille ?",
  analysisText:
    "Avec 9,67 restaurants pour 1 000 habitants, Lille présente un niveau de concurrence très supérieur à la moyenne nationale (4,63). Le marché est dynamique mais exigeant.",
    analysisInsights: [
  {
    text: "Près de 60 % des établissements sont des restaurants rapides : segment très présent et fortement concurrentiel (1 372 établissements).",
  },
  {
    text: "La restauration traditionnelle représente 40,1 % du marché (924 établissements) : des opportunités existent pour des concepts différenciants.",
  },
  {
    text: "La densité de restaurants est environ deux fois supérieure à la moyenne nationale, ce qui impose une analyse fine de la zone d’implantation.",
  },
  {
    text: "Le choix du positionnement, du quartier et du concept est déterminant pour réussir sur ce marché concurrentiel.",
  },
],

analysisConclusion:
  "Ouvrir un restaurant à Lille est possible, mais nécessite une analyse approfondie de la concurrence locale et une offre clairement différenciante.",

  faq: [
    {
      question: "Combien y a-t-il de restaurants à Lille ?",
      answer: "Lille compte actuellement 2 303 restaurants recensés.",
    },
    {
      question: "Quelle est la densité de restaurants à Lille ?",
      answer:
        "Avec 9,67 restaurants pour 1 000 habitants, Lille affiche une densité largement supérieure à la moyenne nationale (4,63).",
    },
    {
      question: "Quel type de restauration domine à Lille ?",
      answer:
        "La restauration rapide représente 59,6 % des établissements, contre 40,1 % pour la restauration traditionnelle.",
    },
  ],
};