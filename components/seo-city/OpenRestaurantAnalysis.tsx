import { Check, Lightbulb } from "lucide-react";

type OpenRestaurantAnalysisProps = {
  title: string;
  text: string;
  insights: {
    text: string;
  }[];
  conclusion: string;
};

export function OpenRestaurantAnalysis({
  title,
  text,
  insights,
  conclusion,
}: OpenRestaurantAnalysisProps) {
  return (
    <section className="mt-14 rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
      <h2 className="text-3xl font-extrabold text-slate-950">{title}</h2>

      <p className="mt-5 text-justify text-lg leading-8 text-slate-700">
        {text}
      </p>

      <h3 className="mt-8 text-xl font-extrabold text-slate-950">
        Quelques enseignements clés :
      </h3>

      <div className="mt-6 space-y-5">
        {insights.map((insight) => (
          <div key={insight.text} className="flex gap-4">
            <div className="mt-1 flex-shrink-0 text-emerald-500">
              <Check size={24} />
            </div>

            <p className="text-base leading-7 text-slate-700">
              {insight.text}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-8 rounded-2xl border border-emerald-200 bg-emerald-50 p-5">
        <div className="flex gap-4">
          <div className="text-emerald-600">
            <Lightbulb size={28} />
          </div>

          <p className="text-base font-bold leading-7 text-emerald-700">
            Conclusion : {conclusion}
          </p>
        </div>
      </div>
    </section>
  );
}