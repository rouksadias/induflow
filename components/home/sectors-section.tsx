import { sectors } from "@/lib/data";

export function SectorsSection() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-16">
      <div className="mb-10 max-w-2xl">
        <h2 className="text-2xl font-bold text-industrial sm:text-3xl">Solutions par secteur</h2>
        <p className="mt-3 text-sm text-textGray">
          Des équipements adaptés aux exigences de vos secteurs d&apos;activité.
        </p>
      </div>

      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
        {sectors.map((sector) => {
          const Icon = sector.icon;
          return (
            <div
              key={sector.name}
              className="flex flex-col items-center gap-3 rounded-xl border border-slate-200 bg-white p-5 text-center"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-light text-industrial">
                <Icon className="h-6 w-6" aria-hidden="true" />
              </span>
              <span className="text-sm font-semibold text-textGray">{sector.name}</span>
            </div>
          );
        })}
      </div>
    </section>
  );
}
