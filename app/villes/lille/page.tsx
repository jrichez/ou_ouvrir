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
import { lilleData } from "@/data/cities/lille";
import type { Metadata } from "next";
import { generateSeo } from "@/lib/seo";

export const metadata: Metadata = generateSeo({
  title: "Analyse de la concurrence des restaurants à Lille",
  description:
    "Découvrez le nombre de restaurants à Lille, la densité par habitant, les types d’établissements présents et le niveau de concurrence du marché.",
  path: "/villes/lille",
});
 
export default function LillePage() {
  return (
    <main className="mx-auto max-w-7xl px-6 py-6">
      <Breadcrumb
  parent={{ label: "Villes", href: "/villes" }}
  currentPage={lilleData.name}
/>

      <section className="mt-10">
  <div className="grid gap-8 lg:grid-cols-[1fr_400px] lg:items-start">
    <div>
      <CityHero city={lilleData} showDescription={false} />
    </div>

    <aside>
      <DataUpdateCard updatedAt={lilleData.updatedAt} />
    </aside>
  </div>

  <div className="mt-8 max-w-5xl text-justify text-lg leading-8 text-slate-900">
  <p>
    Lille compte 2 303 restaurants pour 238 000 habitants, soit une densité de
    restauration particulièrement élevée par rapport à la moyenne nationale.
  </p>

  <p className="mt-6">
    Portée par une forte population étudiante, une activité touristique
    soutenue et un centre-ville très dynamique, la métropole lilloise attire
    de nombreux projets de restauration. Mais cette attractivité implique
    également une concurrence importante selon les quartiers et les concepts.
  </p>

  <p className="mt-6">
    Cette page analyse la densité de restaurants, la typologie des
    établissements et le niveau de concurrence pour aider les porteurs de
    projet à évaluer le marché local.
  </p>
</div>
</section>

      <KeyMetrics
        title="Données clés du marché de la restauration à Lille"
        metrics={lilleData.metrics}
      />

      <section className="mt-14 grid gap-6 lg:grid-cols-2">
      <CityComparisonChart
        title="Lille face aux villes comparables"
        data={lilleData.comparisonCities}
        highlightedCity={lilleData.name}
        nationalAverage={lilleData.nationalAveragePer1000}
      />

      <RestaurantTypeDonut
          title="Répartition des restaurants à Lille par type"
          data={lilleData.restaurantTypes}
          description="À Lille, la restauration rapide représente 59,6 % des établissements recensés, contre 40,1 % pour la restauration traditionnelle. Cette répartition montre le poids important des formats rapides, adaptés aux flux étudiants, aux actifs du centre-ville et aux usages de consommation plus courts."
        />
    </section>


      <ProjectQuestions questions={lilleData.projectQuestions} />

      <OpenRestaurantAnalysis
          title={lilleData.analysisTitle}
          text={lilleData.analysisText}
          insights={lilleData.analysisInsights}
          conclusion={lilleData.analysisConclusion}
        />

      <ComingSoonMapCard />

      <FaqSection items={lilleData.faq} />
    </main>
  );
}