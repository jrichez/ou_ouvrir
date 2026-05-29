"use client";

import type { ComparisonCity } from "@/types/city";
import {
  Bar,
  BarChart,
  Cell,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

type CityComparisonChartProps = {
  title: string;
  data: ComparisonCity[];
  highlightedCity: string;
  nationalAverage: number;
};

export function CityComparisonChart({
  title,
  data,
  highlightedCity,
  nationalAverage,
}: CityComparisonChartProps) {
  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <h2 className="text-2xl font-extrabold text-slate-950">{title}</h2>

      <div className="mt-8 h-[340px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data}>
            <XAxis dataKey="name" />
            <YAxis hide />
            <Tooltip
              formatter={(value) => [`${value}`, "Restaurants / 1 000 hab."]}
            />
            <Bar dataKey="ratio" radius={[8, 8, 0, 0]}>
              {data.map((entry) => (
                <Cell
                  key={entry.name}
                  fill={
                    entry.name === highlightedCity ? "#10b981" : "#cbd5e1"
                  }
                />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>

      <p className="mt-4 text-sm font-medium text-slate-700">
        Moyenne nationale :{" "}
        <span className="font-extrabold text-slate-950">
          {nationalAverage.toLocaleString("fr-FR")}
        </span>{" "}
        restaurants pour 1 000 habitants.
      </p>
    </section>
  );
}