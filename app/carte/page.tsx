import Link from "next/link";
import { ArrowLeft, MapPinned } from "lucide-react";

import { Breadcrumb } from "@/components/layout/Breadcrumb";

import type { Metadata } from "next";
import { generateSeo } from "@/lib/seo";

export const metadata: Metadata = generateSeo({
  title: "Carte",
  description:
    "Analyse prochaine des opportunités d’implantation et de la concurrence restaurant par quartier.",
  path: "/carte",
});

export default function AnalyseQuartiersPage() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-10">
      <Breadcrumb currentPage="Analyse par quartier" />

      <section className="mt-12 rounded-3xl border border-slate-200 bg-white p-10 text-center shadow-sm">
        <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-600">
          <MapPinned size={42} />
        </div>

        <h1 className="mt-8 text-5xl font-extrabold tracking-tight text-slate-950">
          Analyse par quartier
        </h1>

        <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-700">
          Cette fonctionnalité permettra prochainement d’analyser la densité de
          restaurants quartier par quartier afin d’identifier les zones les plus
          concurrentielles et les secteurs présentant davantage d’opportunités.
        </p>

        <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-slate-600">
          L’objectif est de fournir une lecture plus fine du marché local en
          croisant densité commerciale, flux urbains et typologie des
          établissements.
        </p>

        <div className="mt-10">
          <Link
            href="/villes/lille"
            className="inline-flex items-center gap-2 rounded-xl border border-slate-300 px-6 py-4 text-sm font-bold text-slate-950 transition hover:bg-slate-50"
          >
            <ArrowLeft size={18} />
            Retour à l’analyse
          </Link>
        </div>
      </section>
    </main>
  );
}