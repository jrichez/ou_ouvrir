import type { CityData } from "@/types/city";

export const marseilleData: CityData = {
  slug: "marseille",
  name: "Marseille",
  department: "Bouches-du-Rhône",
  region: "Provence-Alpes-Côte d’Azur",
 
  population: 886040,
  restaurants: 6072,
  restaurantsPer1000: 6.85,
  nationalAveragePer1000: 4.63,
  updatedAt: "Mai 2026",

  metrics: [
    {
      label: "Restaurants à Marseille",
      value: "6 072",
    },
    {
      label: "Habitants",
      value: "886 040",
      detail: "INSEE 2023",
    },
    {
      label: "Restaurants pour 1 000 habitants",
      value: "6,85",
      detail: "Moyenne nationale : 4,63",
    },
    {
      label: "Restauration rapide",
      value: "61,17 %",
    },
    {
      label: "Restauration traditionnelle",
      value: "38,59 %",
    },
  ],

  comparisonCities: [
    { name: "Montpellier", ratio: 7.96, population: 310240 },
    { name: "Strasbourg", ratio: 7.1, population: 293771 },
    { name: "Marseille", ratio: 6.85, population: 886040 },
    { name: "Toulouse", ratio: 6.69, population: 514819 },
    { name: "Rennes", ratio: 4.71, population: 230890 },
  ],

  restaurantTypes: [
    {
      label: "Restauration rapide",
      value: 61.17,
    },
    {
      label: "Restauration traditionnelle",
      value: 38.59,
    },
  ],

  projectQuestions: [
    "Marseille est-elle une ville saturée en restaurants ?",
    "Quel type de restauration est le plus présent à Marseille ?",
    "Quelle densité de restaurants à Marseille par rapport aux autres grandes villes ?",
    "Est-il plus difficile d’ouvrir un restaurant à Marseille qu’ailleurs en France ?",
    "Comment se démarquer sur un marché marseillais très étendu et contrasté ?",
    "Quelles données analyser avant d’ouvrir un restaurant à Marseille ?",
  ],

  analysisTitle: "Peut-on encore ouvrir un restaurant à Marseille ?",
  analysisText:
    "Avec 6,85 restaurants pour 1 000 habitants, Marseille présente une densité supérieure à la moyenne nationale (4,63), mais inférieure à la moyenne des grandes villes de plus de 200 000 habitants. Le potentiel existe, à condition d’analyser finement les quartiers, les flux et le positionnement du concept.",
  analysisInsights: [
    {
      text: "Marseille compte 6 072 restaurants recensés, ce qui la place au 2e rang national en volume parmi les villes analysées.",
    },
    {
      text: "La restauration rapide représente 61,17 % du marché marseillais, soit 3 714 établissements recensés.",
    },
    {
      text: "La restauration traditionnelle pèse 38,59 % des établissements, avec 2 343 restaurants recensés.",
    },
    {
      text: "Marseille se situe au 8e rang de son segment de population pour la densité de restaurants, derrière Strasbourg et devant Toulouse.",
    },
    {
      text: "La densité marseillaise est supérieure d’environ 48 % à la moyenne nationale, mais reste environ 30 % sous la moyenne des grandes villes comparables.",
    },
  ],

  analysisConclusion:
    "Ouvrir un restaurant à Marseille reste envisageable, mais le projet doit tenir compte d’un marché très vaste, d’une forte présence de restauration rapide et de différences importantes selon les quartiers, les zones touristiques et les bassins de vie.",

  faq: [
    {
      question: "Combien y a-t-il de restaurants à Marseille ?",
      answer: "Marseille compte actuellement 6 072 restaurants recensés.",
    },
    {
      question: "Quelle est la densité de restaurants à Marseille ?",
      answer:
        "Avec 6,85 restaurants pour 1 000 habitants, Marseille affiche une densité supérieure à la moyenne nationale (4,63).",
    },
    {
      question: "Quel type de restauration domine à Marseille ?",
      answer:
        "La restauration rapide représente 61,17 % des établissements, contre 38,59 % pour la restauration traditionnelle.",
    },
  ],
};
