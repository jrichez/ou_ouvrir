import Link from "next/link";

export function ComingSoonMapCard() {
  return (
    <section className="mt-14 rounded-2xl border border-slate-200 bg-slate-50 p-8 shadow-sm">
      <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div>
          <h2 className="text-2xl font-extrabold text-slate-950">
            Analyse par quartier
          </h2>

          <p className="mt-4 max-w-3xl leading-7 text-slate-700">
            Identifier les zones les plus concurrentielles et les secteurs où
            l’offre de restauration est moins dense à Lille.
          </p>
        </div>

        <Link
          href="/carte"
          className="inline-flex shrink-0 items-center justify-center rounded-xl bg-emerald-600 px-8 py-4 text-base font-bold text-white shadow-sm transition hover:bg-emerald-700 md:mr-6"
        >
          Découvrir
        </Link>
      </div>
    </section>
  );
}