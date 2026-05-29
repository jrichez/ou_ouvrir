export type Metric = {
  label: string;
  value: string;
  detail?: string;
};

export type ComparisonCity = {
  name: string;
  ratio: number;
  population: number;
};

export type RestaurantType = {
  label: string;
  value: number;
};

export type FaqItem = {
  question: string;
  answer: string;
};

export type AnalysisInsight = {
  text: string;
};

export type CityData = {
  slug: string;
  name: string;
  department: string;
  region: string;
  population: number;
  restaurants: number;
  restaurantsPer1000: number;
  nationalAveragePer1000: number;
  metrics: Metric[];
  comparisonCities: ComparisonCity[];
  restaurantTypes: RestaurantType[];
  projectQuestions: string[];
  analysisTitle: string;
  analysisText: string;
  faq: FaqItem[];
  updatedAt: string;
  analysisInsights: AnalysisInsight[];
  analysisConclusion: string;
};