import { Breadcrumb } from "@/components/layout/Breadcrumb";
import { CityHero } from "@/components/seo-city/CityHero";
import { CityComparisonChart } from "@/components/seo-city/CityComparisonChart";
import { ComingSoonMapCard } from "@/components/seo-city/ComingSoonMapCard";
import { DataUpdateCard } from "@/components/seo-city/DataUpdateCard";
import { FaqSection } from "@/components/seo-city/FaqSection";
import { KeyMetrics } from "@/components/seo-city/KeyMetrics";
import { OpenRestaurantAnalysis } from "@/components/seo-city/OpenRestaurantAnalysis";
import { ProjectQuestions } from "@/components/seo-city/ProjectQuestions";
import { RestaurantTypeDonut } from "@/components/seo-city/RestaurantTypeDonut";
import { lyonData } from "@/data/cities/lyon";
import type { Metadata } from "next";
import { generateSeo } from "@/lib/seo";

export const metadata: Metadata = generateSeo({
  title: "Analyse de la concurrence des restaurants à Lyon",
  description:
    "Découvrez le nombre de restaurants à Lyon, la densité par habitant, les types d’établissements présents et le niveau de concurrence du marché.",
  path: "/villes/lyon",
});
 
export default function LyonPage() {
  return (
    <main className="mx-auto max-w-7xl px-6 py-6">
      <Breadcrumb
  parent={{ label: "Villes", href: "/villes" }}
  currentPage={lyonData.name}
/>

      <section className="mt-10">
  <div className="grid gap-8 lg:grid-cols-[1fr_400px] lg:items-start">
    <div>
      <CityHero city={lyonData} showDescription={false} />
    </div>

    <aside>
      <DataUpdateCard updatedAt={lyonData.updatedAt} />
    </aside>
  </div>

  <div className="mt-8 max-w-5xl text-justify text-lg leading-8 text-slate-900">
  <p>
    Lyon compte 4 259 restaurants pour 519 127 habitants, soit une densité de
    restauration élevée par rapport à la moyenne nationale.
  </p>

  <p className="mt-6">
    Portée par une forte population, une image gastronomique reconnue, une
    activité touristique soutenue et plusieurs pôles de bureaux et d’études,
    la métropole lyonnaise attire de nombreux projets de restauration. Cette
    attractivité implique toutefois une concurrence importante selon les
    quartiers, les flux et les concepts.
  </p>

  <p className="mt-6">
    Cette page analyse la densité de restaurants, la typologie des
    établissements et le niveau de concurrence pour aider les porteurs de
    projet à évaluer le marché local.
  </p>
</div>
</section>

      <KeyMetrics
        title="Données clés du marché de la restauration à Lyon"
        metrics={lyonData.metrics}
      />

      <section className="mt-14 grid gap-6 lg:grid-cols-2">
      <CityComparisonChart
        title="Lyon face aux villes comparables"
        data={lyonData.comparisonCities}
        highlightedCity={lyonData.name}
        nationalAverage={lyonData.nationalAveragePer1000}
      />

      <RestaurantTypeDonut
          title="Répartition des restaurants à Lyon par type"
          data={lyonData.restaurantTypes}
          description="À Lyon, la restauration traditionnelle représente 54,66 % des établissements recensés, contre 45,2 % pour la restauration rapide. Cette répartition distingue Lyon de plusieurs grandes villes où les formats rapides dominent davantage, et souligne le poids encore important des restaurants traditionnels dans le marché local."
        />
    </section>


      <ProjectQuestions questions={lyonData.projectQuestions} />

      <OpenRestaurantAnalysis
          title={lyonData.analysisTitle}
          text={lyonData.analysisText}
          insights={lyonData.analysisInsights}
          conclusion={lyonData.analysisConclusion}
        />

      <ComingSoonMapCard />

      <FaqSection items={lyonData.faq} />
    </main>
  );
}
