import type { Metric } from "@/types/city";
import { MetricCard } from "./MetricCard";

type KeyMetricsProps = {
  title: string;
  metrics: Metric[];
};

export function KeyMetrics({ title, metrics }: KeyMetricsProps) {
  return (
    <section className="mt-14">
      <h2 className="text-2xl font-extrabold text-slate-950">{title}</h2>

      <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
        {metrics.map((metric) => (
          <MetricCard
            key={metric.label}
            value={metric.value}
            label={metric.label}
            detail={metric.detail}
          />
        ))}
      </div>
    </section>
  );
}