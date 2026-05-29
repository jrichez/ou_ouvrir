import { Breadcrumb } from "@/components/layout/Breadcrumb";

const populationSegments = [
  { label: "Moins de 10 000 habitants", description: "Petites communes, où quelques établissements peuvent fortement influencer le ratio." },
  { label: "10 000 à 50 000 habitants", description: "Villes intermédiaires avec un tissu commercial local plus structuré." },
  { label: "50 000 à 100 000 habitants", description: "Villes moyennes disposant généralement de plusieurs centralités commerciales." },
  { label: "100 000 à 200 000 habitants", description: "Grandes villes régionales, avec une offre de restauration plus diversifiée." },
  { label: "Plus de 200 000 habitants", description: "Grandes villes françaises comparées entre elles pour limiter les écarts liés à la taille." },
];

const methodologySteps = [
  {
    title: "1. Recenser les restaurants",
    text: "Les établissements sont regroupés à partir des catégories disponibles dans les données ouvertes, notamment la restauration traditionnelle et la restauration rapide. Les données sont agrégées à l’échelle de la commune.",
  },
  {
    title: "2. Rapporter le nombre de restaurants à la population",
    text: "Pour comparer des villes de tailles différentes, le nombre brut de restaurants est transformé en ratio : restaurants pour 1 000 habitants. Ce ratio permet d’observer la densité relative de l’offre de restauration.",
  },
  {
    title: "3. Comparer les villes entre elles",
    text: "Chaque ville est comparée à des villes de taille ou de profil proche, ainsi qu’à une moyenne nationale. L’objectif n’est pas de produire un classement absolu, mais de situer le niveau de concurrence local.",
  },
  {
    title: "4. Interpréter les résultats avec prudence",
    text: "Une densité élevée peut traduire une forte concurrence, mais aussi une demande importante liée au tourisme, aux bureaux, aux étudiants ou à la vie nocturne. Les données doivent donc être croisées avec une analyse de terrain.",
  },
];

const limits = [
  "Les données décrivent une situation à une date donnée et peuvent évoluer avec les ouvertures, fermetures ou changements d’activité.",
  "Le ratio par habitant ne mesure pas directement le chiffre d’affaires, le passage piéton, la qualité des emplacements ou le pouvoir d’achat local.",
  "Certaines communes touristiques ou très fréquentées peuvent afficher une densité élevée sans être comparables à une ville résidentielle classique.",
  "L’analyse communale ne remplace pas une étude par quartier, rue, zone de chalandise ou emplacement précis.",
];

export default function MethodologiePage() {
  return (
    <main className="mx-auto max-w-7xl px-6 py-6">
      <Breadcrumb currentPage="Méthodologie" />

      <section className="mt-10 grid gap-8 lg:grid-cols-[1fr_360px] lg:items-start">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
            Méthodologie
          </p>

          <h1 className="mt-4 max-w-4xl text-4xl font-bold tracking-tight text-slate-950 md:text-5xl">
            Comment nous analysons le potentiel d’implantation d’un restaurant
          </h1>

          <div className="mt-8 max-w-5xl text-justify text-lg leading-8 text-slate-900">
            <p>
              Cette page explique la méthode utilisée pour construire les pages ville du test SEO. L’objectif est de donner aux porteurs de projet une première lecture du marché local de la restauration à partir de données simples, lisibles et comparables.
            </p>

            <p className="mt-6">
              L’analyse repose principalement sur trois indicateurs : le nombre de restaurants recensés dans une commune, la population municipale et le ratio de restaurants pour 1 000 habitants. Ces indicateurs permettent d’évaluer le niveau de densité concurrentielle d’une ville, sans prétendre remplacer une étude d’implantation complète.
            </p>
          </div>
        </div>

        <aside className="rounded-3xl border border-slate-200 bg-slate-50 p-6 shadow-sm">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
            Données
          </p>
          <h2 className="mt-3 text-2xl font-bold text-slate-950">Mise à jour</h2>
          <p className="mt-4 text-slate-700">
            Les pages ville utilisent les données consolidées disponibles au moment de la création du test SEO.
          </p>
          <p className="mt-5 rounded-2xl bg-white px-4 py-3 text-sm font-medium text-slate-800 ring-1 ring-slate-200">
            Dernière mise à jour : mai 2026
          </p>
        </aside>
      </section>

      <section className="mt-16">
        <h2 className="text-3xl font-bold tracking-tight text-slate-950">
          Les indicateurs utilisés
        </h2>

        <div className="mt-8 grid gap-6 md:grid-cols-3">
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <h3 className="text-xl font-bold text-slate-950">Nombre de restaurants</h3>
            <p className="mt-4 text-slate-700">
              Il correspond au volume d’établissements recensés dans la commune pour les activités de restauration retenues.
            </p>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <h3 className="text-xl font-bold text-slate-950">Population</h3>
            <p className="mt-4 text-slate-700">
              La population sert de base de comparaison pour éviter de comparer uniquement les villes sur leur nombre brut de restaurants.
            </p>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <h3 className="text-xl font-bold text-slate-950">Restaurants pour 1 000 habitants</h3>
            <p className="mt-4 text-slate-700">
              Ce ratio permet de situer la densité de l’offre locale et d’identifier les marchés potentiellement plus ou moins concurrentiels.
            </p>
          </div>
        </div>
      </section>

      <section className="mt-16 rounded-3xl bg-slate-950 p-8 text-white md:p-10">
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">
              Calcul principal
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight">
              Le ratio de restaurants pour 1 000 habitants
            </h2>
          </div>

          <div className="rounded-2xl bg-white/10 p-6 ring-1 ring-white/15">
            <p className="text-lg leading-8 text-slate-100">
              Ratio = nombre de restaurants ÷ population × 1 000
            </p>
            <p className="mt-5 text-slate-300">
              Exemple : une ville de 100 000 habitants comptant 600 restaurants obtient un ratio de 6 restaurants pour 1 000 habitants.
            </p>
          </div>
        </div>
      </section>

      <section className="mt-16">
        <h2 className="text-3xl font-bold tracking-tight text-slate-950">
          Les étapes de traitement
        </h2>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {methodologySteps.map((step) => (
            <article key={step.title} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-xl font-bold text-slate-950">{step.title}</h3>
              <p className="mt-4 leading-7 text-slate-700">{step.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mt-16">
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-slate-950">
              Segmentation des villes
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-700">
              Les villes ne sont pas toutes comparables entre elles. Une commune de 8 000 habitants, une ville universitaire de 100 000 habitants et une métropole de plus de 500 000 habitants ne répondent pas aux mêmes logiques commerciales.
            </p>
            <p className="mt-5 text-lg leading-8 text-slate-700">
              Pour limiter les comparaisons trop bruitées, les résultats sont interprétés avec des segments de population. Les grandes villes de plus de 200 000 habitants sont notamment comparées entre elles afin de mieux situer des villes comme Paris, Marseille, Lyon, Toulouse, Nice, Nantes, Montpellier, Strasbourg, Bordeaux, Lille ou Rennes.
            </p>
          </div>

          <div className="space-y-4">
            {populationSegments.map((segment) => (
              <div key={segment.label} className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
                <h3 className="font-bold text-slate-950">{segment.label}</h3>
                <p className="mt-2 text-slate-700">{segment.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mt-16 rounded-3xl border border-slate-200 bg-slate-50 p-8 md:p-10">
        <h2 className="text-3xl font-bold tracking-tight text-slate-950">
          Ce que l’analyse permet de comprendre
        </h2>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl bg-white p-6 ring-1 ring-slate-200">
            <h3 className="text-xl font-bold text-slate-950">Situer la concurrence</h3>
            <p className="mt-4 leading-7 text-slate-700">
              Une ville avec un ratio élevé peut indiquer un marché déjà très équipé en restaurants. Cela ne signifie pas automatiquement qu’il est impossible d’y ouvrir un établissement, mais que le positionnement devra être plus précis.
            </p>
          </div>

          <div className="rounded-2xl bg-white p-6 ring-1 ring-slate-200">
            <h3 className="text-xl font-bold text-slate-950">Identifier les formats dominants</h3>
            <p className="mt-4 leading-7 text-slate-700">
              La répartition entre restauration rapide et restauration traditionnelle donne une première indication sur la structure du marché local et sur les formats déjà fortement représentés.
            </p>
          </div>
        </div>
      </section>

      <section className="mt-16">
        <h2 className="text-3xl font-bold tracking-tight text-slate-950">
          Limites de la méthode
        </h2>

        <ul className="mt-8 space-y-4">
          {limits.map((limit) => (
            <li key={limit} className="rounded-2xl border border-slate-200 bg-white p-5 leading-7 text-slate-700 shadow-sm">
              {limit}
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-16 rounded-3xl bg-emerald-50 p-8 ring-1 ring-emerald-100 md:p-10">
        <h2 className="text-3xl font-bold tracking-tight text-slate-950">
          Comment utiliser ces pages ville ?
        </h2>

        <div className="mt-6 max-w-5xl text-lg leading-8 text-slate-800">
          <p>
            Les pages ville doivent être utilisées comme un premier filtre d’analyse. Elles aident à repérer les marchés très concurrentiels, les villes dont la densité est proche de la moyenne nationale et les territoires où certains formats de restauration semblent déjà très présents.
          </p>

          <p className="mt-6">
            Pour décider d’une implantation, cette lecture doit ensuite être complétée par une analyse beaucoup plus locale : quartier, flux piétons, visibilité du local, concurrence directe, niveau de loyers, clientèle cible, horaires de consommation et adéquation entre le concept et la zone de chalandise.
          </p>
        </div>
      </section>
    </main>
  );
}
