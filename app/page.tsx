const subjects = ["Math", "Science", "Reading", "Writing"];

const steps = ["Send a request", "Caleb replies", "Start tutoring"];

export default function HomePage() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-10">
      <section className="rounded-2xl bg-white p-8 shadow-sm ring-1 ring-slate-200">
        <p className="text-sm font-semibold uppercase tracking-wide text-blue-700">
          Caleb Tutoring
        </p>
        <h1 className="mt-3 text-4xl font-bold text-slate-900">Simple, supportive tutoring</h1>
        <p className="mt-4 max-w-2xl text-lg text-slate-700">
          Caleb helps students build confidence, improve grades, and understand schoolwork step by step.
        </p>

        <div className="mt-6 inline-flex items-center rounded-xl bg-blue-700 px-5 py-3 text-white">
          <span className="text-sm">Price:</span>
          <span className="ml-2 text-2xl font-bold">$40/hour</span>
        </div>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold text-slate-900">Subjects</h2>
        <p className="mt-2 text-slate-700">Caleb currently offers one-on-one support in:</p>

        <div className="mt-5 grid gap-4 sm:grid-cols-2">
          {subjects.map((subject) => (
            <div
              key={subject}
              className="rounded-xl bg-white p-5 text-lg font-medium shadow-sm ring-1 ring-slate-200"
            >
              {subject}
            </div>
          ))}
        </div>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold text-slate-900">How it works</h2>

        <ol className="mt-5 space-y-3">
          {steps.map((step, index) => (
            <li key={step} className="rounded-xl bg-white p-5 shadow-sm ring-1 ring-slate-200">
              <span className="font-semibold text-blue-700">{index + 1}.</span>{" "}
              <span className="text-slate-800">{step}</span>
            </li>
          ))}
        </ol>
      </section>
    </main>
  );
}
