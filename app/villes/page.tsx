import Link from "next/link";
import { Breadcrumb } from "@/components/layout/Breadcrumb";

import type { Metadata } from "next";
import { generateSeo } from "@/lib/seo";

const cities = [
  {
    name: "Lille",
    slug: "lille",
    description:
      "Analyse de la concurrence des restaurants à Lille et densité du marché local.",
  },
  {
    name: "Paris",
    slug: "paris",
    description:
      "Étude du marché de la restauration parisienne et niveau de concurrence.",
  },
  {
    name: "Lyon",
    slug: "lyon",
    description:
      "Analyse de la densité de restaurants et des opportunités à Lyon.",
  },
  {
    name: "Marseille",
    slug: "marseille",
    description:
      "État du marché de la restauration à Marseille et comparaison nationale.",
  },
  {
    name: "Toulouse",
    slug: "toulouse",
    description:
      "Analyse des restaurants à Toulouse et potentiel d’implantation.",
  },
];


export const metadata: Metadata = generateSeo({
  title: "Villes analysées",
  description:
    "Consultez les analyses de concurrence des restaurants dans plusieurs grandes villes françaises.",
  path: "/villes",
});

export default function CitiesPage() {
  return (
    <main className="mx-auto max-w-7xl px-6 py-12">
    <Breadcrumb currentPage="Villes" />
      <div className="max-w-4xl">
        <h1 className="text-5xl font-extrabold tracking-tight text-slate-950">
          Villes analysées
        </h1>

        <p className="mt-6 text-lg leading-8 text-slate-700">
          Consultez les analyses de concurrence des restaurants disponibles pour
          plusieurs grandes villes françaises.
        </p>
      </div>

      <section className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {cities.map((city) => (
          <Link
            key={city.slug}
            href={`/villes/${city.slug}`}
            className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
          >
            <h2 className="text-2xl font-extrabold text-slate-950">
              {city.name}
            </h2>

            <p className="mt-4 leading-7 text-slate-700">
              {city.description}
            </p>

            <div className="mt-6 text-sm font-bold text-emerald-600">
              Voir l’analyse →
            </div>
          </Link>
        ))}
      </section>
    </main>
  );
}