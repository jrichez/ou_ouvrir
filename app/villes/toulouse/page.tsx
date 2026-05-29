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
import { toulouseData } from "@/data/cities/toulouse";
import type { Metadata } from "next";
import { generateSeo } from "@/lib/seo";

export const metadata: Metadata = generateSeo({
  title: "Analyse de la concurrence des restaurants à Toulouse",
  description:
    "Découvrez le nombre de restaurants à Toulouse, la densité par habitant, les types d’établissements présents et le niveau de concurrence du marché.",
  path: "/villes/toulouse",
});

export default function ToulousePage() {
  return (
    <main className="mx-auto max-w-7xl px-6 py-6">
      <Breadcrumb
  parent={{ label: "Villes", href: "/villes" }}
  currentPage={toulouseData.name}
/>

      <section className="mt-10">
        <div className="grid gap-8 lg:grid-cols-[1fr_400px] lg:items-start">
          <div>
            <CityHero city={toulouseData} showDescription={false} />
          </div>

          <aside>
            <DataUpdateCard updatedAt={toulouseData.updatedAt} />
          </aside>
        </div>

        <div className="mt-8 max-w-5xl text-justify text-lg leading-8 text-slate-900">
          <p>
            Toulouse compte 3 446 restaurants pour 515 000 habitants, soit une
            densité de restauration supérieure à la moyenne nationale.
          </p>

          <p className="mt-6">
            Portée par sa croissance démographique, son important bassin
            étudiant, son attractivité économique et une vie de quartier
            dynamique, la métropole toulousaine attire de nombreux projets de
            restauration. Cette attractivité s’accompagne toutefois d’une
            concurrence déjà marquée selon les secteurs et les concepts.
          </p>

          <p className="mt-6">
            Cette page analyse la densité de restaurants, la typologie des
            établissements et le niveau de concurrence pour aider les porteurs
            de projet à évaluer le marché local.
          </p>
        </div>
      </section>

      <KeyMetrics
        title="Données clés du marché de la restauration à Toulouse"
        metrics={toulouseData.metrics}
      />

      <section className="mt-14 grid gap-6 lg:grid-cols-2">
        <CityComparisonChart
          title="Toulouse face aux villes comparables"
          data={toulouseData.comparisonCities}
          highlightedCity={toulouseData.name}
          nationalAverage={toulouseData.nationalAveragePer1000}
        />

        <RestaurantTypeDonut
          title="Répartition des restaurants à Toulouse par type"
          data={toulouseData.restaurantTypes}
          description="À Toulouse, la restauration rapide représente 61 % des établissements recensés, contre 38,8 % pour la restauration traditionnelle. Cette répartition montre le poids important des formats rapides, adaptés aux flux étudiants, aux actifs, aux zones de bureaux et aux usages de consommation plus courts."
        />
      </section>

      <ProjectQuestions questions={toulouseData.projectQuestions} />

      <OpenRestaurantAnalysis
        title={toulouseData.analysisTitle}
        text={toulouseData.analysisText}
        insights={toulouseData.analysisInsights}
        conclusion={toulouseData.analysisConclusion}
      />

      <ComingSoonMapCard />

      <FaqSection items={toulouseData.faq} />
    </main>
  );
}
