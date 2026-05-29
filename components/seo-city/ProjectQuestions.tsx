type ProjectQuestionsProps = {
  questions: string[];
};

export function ProjectQuestions({ questions }: ProjectQuestionsProps) {
  return (
    <section className="mt-14 rounded-2xl bg-emerald-600 p-8 text-white">
      <h2 className="text-2xl font-extrabold">
        Questions que se posent les porteurs de projet
      </h2>

      <div className="mt-6 grid gap-4 md:grid-cols-2">
        {questions.map((question) => (
          <div key={question} className="rounded-xl bg-white/10 p-4 font-bold">
            {question}
          </div>
        ))}
      </div>
    </section>
  );
}