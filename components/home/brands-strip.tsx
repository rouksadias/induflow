import { brands } from "@/lib/data";

export function BrandsStrip() {
  return (
    <section id="marques" className="mx-auto max-w-7xl px-6 py-16">
      <div className="mb-8 max-w-2xl">
        <h2 className="text-2xl font-bold text-industrial sm:text-3xl">Marques partenaires</h2>
        <p className="mt-3 text-sm text-textGray">
          Emplacements réservés en attendant la confirmation de nos partenariats officiels.
        </p>
      </div>

      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
        {brands.map((brand) => (
          <div
            key={brand}
            className="flex h-20 items-center justify-center rounded-lg border border-dashed border-slate-300 bg-bgGray text-xs font-semibold uppercase tracking-wide text-slate-400"
          >
            {brand}
          </div>
        ))}
      </div>
    </section>
  );
}
