type MetricCardProps = {
  value: string;
  label: string;
  detail?: string;
};

export function MetricCard({ value, label, detail }: MetricCardProps) {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-6 text-center shadow-sm">
      <div className="text-4xl font-extrabold text-slate-950">{value}</div>

      <div className="mt-3 text-sm font-bold leading-5 text-slate-950">
        {label}
      </div>

      {detail ? (
        <div className="mt-2 text-xs font-bold text-emerald-600">{detail}</div>
      ) : null}
    </div>
  );
}