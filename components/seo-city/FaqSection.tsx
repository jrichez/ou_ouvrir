import type { FaqItem } from "@/types/city";

type FaqSectionProps = {
  items: FaqItem[];
};

export function FaqSection({ items }: FaqSectionProps) {
  return (
    <section className="mt-14">
      <h2 className="text-2xl font-extrabold text-slate-950">
        Questions fréquentes
      </h2>

      <div className="mt-6 space-y-4">
        {items.map((item) => (
          <article
            key={item.question}
            className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
          >
            <h3 className="text-lg font-extrabold text-slate-950">
              {item.question}
            </h3>
            <p className="mt-3 leading-7 text-slate-700">{item.answer}</p>
          </article>
        ))}
      </div>
    </section>
  );
}