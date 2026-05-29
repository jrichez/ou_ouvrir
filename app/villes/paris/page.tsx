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
import { parisData } from "@/data/cities/paris";
import type { Metadata } from "next";
import { generateSeo } from "@/lib/seo";

export const metadata: Metadata = generateSeo({
  title: "Analyse de la concurrence des restaurants à Paris",
  description:
    "Découvrez le nombre de restaurants à Paris, la densité par habitant, les types d’établissements présents et le niveau de concurrence du marché.",
  path: "/villes/paris",
});
 
export default function ParisPage() {
  return (
    <main className="mx-auto max-w-7xl px-6 py-6">
      <Breadcrumb
  parent={{ label: "Villes", href: "/villes" }}
  currentPage={parisData.name}
/>

      <section className="mt-10">
  <div className="grid gap-8 lg:grid-cols-[1fr_400px] lg:items-start">
    <div>
      <CityHero city={parisData} showDescription={false} />
    </div>

    <aside>
      <DataUpdateCard updatedAt={parisData.updatedAt} />
    </aside>
  </div>

  <div className="mt-8 max-w-5xl text-justify text-lg leading-8 text-slate-900">
  <p>
    Paris compte 30 337 restaurants pour 2 103 778 habitants, soit une densité de
    restauration très supérieure à la moyenne nationale.
  </p>

  <p className="mt-6">
    Portée par une population très importante, une fréquentation touristique
    exceptionnelle, des flux professionnels continus et des quartiers aux profils
    très contrastés, la capitale concentre un marché de la restauration majeur.
    Cette attractivité s’accompagne toutefois d’un niveau de concurrence très
    élevé selon les arrondissements, les zones de bureaux, les secteurs
    touristiques et les concepts.
  </p>

  <p className="mt-6">
    Cette page analyse la densité de restaurants, la typologie des
    établissements et le niveau de concurrence pour aider les porteurs de
    projet à évaluer le marché local.
  </p>
</div>
</section>

      <KeyMetrics
        title="Données clés du marché de la restauration à Paris"
        metrics={parisData.metrics}
      />

      <section className="mt-14 grid gap-6 lg:grid-cols-2">
      <CityComparisonChart
        title="Paris face aux villes comparables"
        data={parisData.comparisonCities}
        highlightedCity={parisData.name}
        nationalAverage={parisData.nationalAveragePer1000}
      />

      <RestaurantTypeDonut
          title="Répartition des restaurants à Paris par type"
          data={parisData.restaurantTypes}
          description="À Paris, la restauration traditionnelle représente 58,74 % des établissements recensés, contre 41,08 % pour la restauration rapide. Cette répartition traduit le poids important des restaurants traditionnels dans la capitale, tout en conservant une forte présence des formats rapides dans les zones de flux, les quartiers de bureaux et les secteurs touristiques."
        />
    </section>


      <ProjectQuestions questions={parisData.projectQuestions} />

      <OpenRestaurantAnalysis
          title={parisData.analysisTitle}
          text={parisData.analysisText}
          insights={parisData.analysisInsights}
          conclusion={parisData.analysisConclusion}
        />

      <ComingSoonMapCard />

      <FaqSection items={parisData.faq} />
    </main>
  );
}
