import { Badge } from "@/components/ui/Badge";
import type { CityData } from "@/types/city";

type CityHeroProps = {
  city: CityData;
  showDescription?: boolean;
};

export function CityHero({ city, showDescription = true }: CityHeroProps) {
  return (
    <div>
      <Badge>{city.name}</Badge>

      <h1 className="mt-6 max-w-3xl text-5xl font-extrabold leading-tight tracking-tight text-slate-950">
        Analyse de la concurrence des restaurants à {city.name}
      </h1>

      {showDescription ? (
        <>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-900">
            {city.name} compte {city.restaurants.toLocaleString("fr-FR")}{" "}
            restaurants pour {city.population.toLocaleString("fr-FR")} habitants,
            soit une densité de restauration particulièrement élevée par rapport
            à la moyenne nationale.
          </p>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-900">
            Cette page analyse la densité de restaurants, la typologie des
            établissements et le niveau de concurrence pour aider les porteurs de
            projet à évaluer le marché local.
          </p>
        </>
      ) : null}
    </div>
  );
}