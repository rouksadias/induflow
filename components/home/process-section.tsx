import { processSteps } from "@/lib/data";

export function ProcessSection() {
  return (
    <section className="bg-industrial py-16 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-10 max-w-2xl">
          <h2 className="text-2xl font-bold sm:text-3xl">Notre processus</h2>
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {processSteps.map((step) => (
            <div key={step.number}>
              <span className="text-3xl font-bold text-safety">{step.number}</span>
              <p className="mt-3 text-sm font-medium text-slate-100">{step.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
