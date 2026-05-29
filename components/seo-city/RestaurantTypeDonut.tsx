"use client";

import type { RestaurantType } from "@/types/city";
import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";

type RestaurantTypeDonutProps = {
  title: string;
  data: RestaurantType[];
  description?: string;
};



const COLORS = ["#10b981", "#0f172a", "#cbd5e1"];

export function RestaurantTypeDonut({ title, data, description }: RestaurantTypeDonutProps) {
  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <h2 className="text-2xl font-extrabold text-slate-950">{title}</h2>

      <div className="mt-6 grid items-center gap-8 md:grid-cols-[280px_1fr]">
        <div className="h-[260px]">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={data}
                dataKey="value"
                nameKey="label"
                innerRadius={70}
                outerRadius={110}
                paddingAngle={2}
              >
                {data.map((entry, index) => (
                  <Cell key={entry.label} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip formatter={(value) => [`${value} %`, "Part"]} />
            </PieChart>
          </ResponsiveContainer>
        </div>

        <div className="space-y-4">
          {data.map((item, index) => (
            <div
              key={item.label}
              className="flex items-center justify-between rounded-xl bg-slate-50 px-4 py-3"
            >
              <div className="flex items-center gap-3">
                <span
                  className="h-3 w-3 rounded-full"
                  style={{ backgroundColor: COLORS[index % COLORS.length] }}
                />
                <span className="text-sm font-bold text-slate-950">
                  {item.label}
                </span>
              </div>
              <span className="text-sm font-extrabold text-slate-950">
                {item.value.toLocaleString("fr-FR")} %
              </span>
            </div>
          ))}
        </div>
      </div>
      
      {description ? (
      <p className="mt-6 text-justify text-sm leading-6 text-slate-700">
        {description}
      </p>
    ) : null}
    </section>
  );
}