type DataUpdateCardProps = {
  updatedAt: string;
};

export function DataUpdateCard({ updatedAt }: DataUpdateCardProps) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <p className="text-base font-extrabold text-emerald-600">
        Données mises à jour
      </p>
      <p className="mt-4 text-sm font-medium text-slate-950">{updatedAt}</p>
      <p className="mt-2 text-sm font-medium text-slate-950">
        Sources : INSEE, SIRENE
      </p>
      <p className="mt-2 text-sm font-bold text-slate-950">
        (voir méthodologie)
      </p>
    </div>
  );
}