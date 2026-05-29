import Link from "next/link";
import { Breadcrumb } from "@/components/layout/Breadcrumb";

import type { Metadata } from "next";
import { generateSeo } from "@/lib/seo";

export const metadata: Metadata = generateSeo({
  title: "Analyse de la concurrence des restaurants en France",
  description:
    "Analysez la densité de restaurants, la concurrence et les opportunités d’implantation dans plusieurs grandes villes françaises.",
  path: "/",
});

const cityPages = [
  {
    name: "Paris",
    href: "/villes/paris",
    restaurants: "30 337",
    population: "2 103 778",
    ratio: "14,42",
    insight: "Le marché le plus dense parmi les grandes villes analysées.",
  },
  {
    name: "Lille",
    href: "/villes/lille",
    restaurants: "2 303",
    population: "238 000",
    ratio: "9,67",
    insight: "Une forte densité de restaurants portée par un centre-ville très actif.",
  },
  {
    name: "Lyon",
    href: "/villes/lyon",
    restaurants: "4 259",
    population: "519 127",
    ratio: "8,20",
    insight: "Un grand marché urbain avec une concurrence déjà bien installée.",
  },
  {
    name: "Marseille",
    href: "/villes/marseille",
    restaurants: "6 072",
    population: "886 040",
    ratio: "6,85",
    insight: "Une métropole attractive où le niveau de concurrence varie fortement selon les zones.",
  },
  {
    name: "Toulouse",
    href: "/villes/toulouse",
    restaurants: "3 446",
    population: "515 000",
    ratio: "6,69",
    insight: "Un marché dynamique, porté par la croissance urbaine et les usages étudiants.",
  },
];

const keyBenefits = [
  {
    title: "Comparer la densité de restaurants",
    text: "Chaque ville est analysée à partir du nombre de restaurants pour 1 000 habitants afin de rendre les marchés comparables entre eux.",
  },
  {
    title: "Identifier les formats dominants",
    text: "Les pages distinguent notamment la restauration rapide et la restauration traditionnelle pour mieux comprendre la structure locale de l’offre.",
  },
  {
    title: "Préparer une implantation",
    text: "Les données donnent un premier niveau de lecture avant d’approfondir l’analyse par quartier, emplacement, flux et concurrence directe.",
  },
];

export default function HomePage() {
  return (
    <main className="mx-auto max-w-7xl px-6 py-6">
      

      <section className="mt-10 grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
            Données restauration
          </p>

          <h1 className="mt-4 max-w-5xl text-4xl font-bold tracking-tight text-slate-950 md:text-6xl">
            Où ouvrir un restaurant en France ?
          </h1>

          <div className="mt-8 max-w-4xl text-lg leading-8 text-slate-800">
            <p>
              Comparez les grandes villes françaises à partir de données simples : nombre de restaurants, population, densité de restaurants pour 1 000 habitants et répartition par type d’établissement.
            </p>

            <p className="mt-6">
              L’objectif est d’aider les porteurs de projet à évaluer rapidement le niveau de concurrence d’un marché local avant de lancer une analyse plus fine par quartier ou par emplacement.
            </p>
          </div>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Link
              href="/villes"
              className="inline-flex items-center justify-center rounded-full bg-slate-950 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
            >
              Voir les villes disponibles
            </Link>

            <Link
              href="/methodologie"
              className="inline-flex items-center justify-center rounded-full border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-50"
            >
              Comprendre la méthode
            </Link>
          </div>
        </div>

        <aside className="rounded-3xl border border-slate-200 bg-slate-50 p-6 shadow-sm md:p-8">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
            Indicateur principal
          </p>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-950">
            Restaurants pour 1 000 habitants
          </h2>
          <p className="mt-5 leading-7 text-slate-700">
            Ce ratio permet de comparer des villes de tailles différentes et de repérer les marchés où l’offre de restauration est déjà très dense.
          </p>

          <div className="mt-6 rounded-2xl bg-white p-5 ring-1 ring-slate-200">
            <p className="text-sm font-medium text-slate-500">Moyenne nationale utilisée</p>
            <p className="mt-2 text-4xl font-bold text-slate-950">4,63</p>
            <p className="mt-1 text-sm text-slate-600">restaurants pour 1 000 habitants</p>
          </div>
        </aside>
      </section>

      <section className="mt-16">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
              Pages ville
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950">
              Analyses disponibles
            </h2>
          </div>
          <p className="max-w-2xl text-slate-700">
            Chaque fiche ville présente les données clés du marché local, une comparaison avec des villes proches et une lecture synthétique du potentiel d’implantation.
          </p>
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {cityPages.map((city) => (
            <Link
              key={city.name}
              href={city.href}
              className="group rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-2xl font-bold text-slate-950">{city.name}</h3>
                  <p className="mt-2 text-sm text-slate-600">{city.insight}</p>
                </div>
                <span className="rounded-full bg-slate-100 px-3 py-1 text-sm font-semibold text-slate-700 transition group-hover:bg-slate-950 group-hover:text-white">
                  Voir
                </span>
              </div>

              <dl className="mt-6 grid grid-cols-3 gap-3 text-sm">
                <div className="rounded-2xl bg-slate-50 p-3">
                  <dt className="text-slate-500">Restaurants</dt>
                  <dd className="mt-1 font-bold text-slate-950">{city.restaurants}</dd>
                </div>
                <div className="rounded-2xl bg-slate-50 p-3">
                  <dt className="text-slate-500">Habitants</dt>
                  <dd className="mt-1 font-bold text-slate-950">{city.population}</dd>
                </div>
                <div className="rounded-2xl bg-slate-50 p-3">
                  <dt className="text-slate-500">Ratio</dt>
                  <dd className="mt-1 font-bold text-slate-950">{city.ratio}</dd>
                </div>
              </dl>
            </Link>
          ))}
        </div>
      </section>

      <section className="mt-16 rounded-3xl border border-slate-200 bg-slate-50 p-8 md:p-10">
        <div className="grid gap-8 lg:grid-cols-[0.75fr_1.25fr] lg:items-start">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
              Pour les porteurs de projet
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950">
              Une première lecture du marché avant l’étude terrain
            </h2>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {keyBenefits.map((benefit) => (
              <article key={benefit.title} className="rounded-2xl bg-white p-5 ring-1 ring-slate-200">
                <h3 className="font-bold text-slate-950">{benefit.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-700">{benefit.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mt-16 rounded-3xl bg-slate-950 p-8 text-white md:p-10">
        <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <h2 className="text-3xl font-bold tracking-tight">
              Les données ne remplacent pas le terrain
            </h2>
            <p className="mt-5 max-w-4xl text-lg leading-8 text-slate-200">
              Une ville peut afficher une densité élevée tout en conservant des opportunités selon le quartier, le concept, le niveau de gamme, les flux piétons et la concurrence directe autour du local visé.
            </p>
          </div>

          <Link
            href="/methodologie"
            className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-slate-100"
          >
            Lire la méthodologie
          </Link>
        </div>
      </section>
    </main>
  );
}
