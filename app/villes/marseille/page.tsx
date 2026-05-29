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
import { marseilleData } from "@/data/cities/marseille";
import type { Metadata } from "next";
import { generateSeo } from "@/lib/seo";

export const metadata: Metadata = generateSeo({
  title: "Analyse de la concurrence des restaurants à Marseille",
  description:
    "Découvrez le nombre de restaurants à Marseille, la densité par habitant, les types d’établissements présents et le niveau de concurrence du marché.",
  path: "/villes/marseille",
});
 
export default function MarseillePage() {
  return (
    <main className="mx-auto max-w-7xl px-6 py-6">
      <Breadcrumb
  parent={{ label: "Villes", href: "/villes" }}
  currentPage={marseilleData.name}
/>

      <section className="mt-10">
  <div className="grid gap-8 lg:grid-cols-[1fr_400px] lg:items-start">
    <div>
      <CityHero city={marseilleData} showDescription={false} />
    </div>

    <aside>
      <DataUpdateCard updatedAt={marseilleData.updatedAt} />
    </aside>
  </div>

  <div className="mt-8 max-w-5xl text-justify text-lg leading-8 text-slate-900">
  <p>
    Marseille compte 6 072 restaurants pour 886 040 habitants, soit une densité de
    restauration supérieure à la moyenne nationale.
  </p>

  <p className="mt-6">
    Portée par une population importante, une activité touristique forte, un
    littoral attractif et des quartiers aux profils très différents, la métropole
    marseillaise attire de nombreux projets de restauration. Cette attractivité
    s’accompagne toutefois d’une concurrence variable selon les zones, les flux
    piétons, la saisonnalité et les concepts.
  </p>

  <p className="mt-6">
    Cette page analyse la densité de restaurants, la typologie des
    établissements et le niveau de concurrence pour aider les porteurs de
    projet à évaluer le marché local.
  </p>
</div>
</section>

      <KeyMetrics
        title="Données clés du marché de la restauration à Marseille"
        metrics={marseilleData.metrics}
      />

      <section className="mt-14 grid gap-6 lg:grid-cols-2">
      <CityComparisonChart
        title="Marseille face aux villes comparables"
        data={marseilleData.comparisonCities}
        highlightedCity={marseilleData.name}
        nationalAverage={marseilleData.nationalAveragePer1000}
      />

      <RestaurantTypeDonut
          title="Répartition des restaurants à Marseille par type"
          data={marseilleData.restaurantTypes}
          description="À Marseille, la restauration rapide représente 61,17 % des établissements recensés, contre 38,59 % pour la restauration traditionnelle. Cette répartition traduit le poids important des formats rapides dans le marché local, tout en laissant une place significative aux restaurants traditionnels dans une ville portée par le tourisme, les quartiers résidentiels et les zones de flux."
        />
    </section>


      <ProjectQuestions questions={marseilleData.projectQuestions} />

      <OpenRestaurantAnalysis
          title={marseilleData.analysisTitle}
          text={marseilleData.analysisText}
          insights={marseilleData.analysisInsights}
          conclusion={marseilleData.analysisConclusion}
        />

      <ComingSoonMapCard />

      <FaqSection items={marseilleData.faq} />
    </main>
  );
}
