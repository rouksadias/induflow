import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { categories } from "@/lib/data";

export function CategoryGrid() {
  return (
    <section className="bg-bgGray py-16">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-10 max-w-2xl">
          <h2 className="text-2xl font-bold text-industrial sm:text-3xl">
            Nos catégories principales
          </h2>
          <p className="mt-3 text-sm text-textGray">
            Une offre structurée pour couvrir vos besoins en détection, mesure et sécurité
            industrielle.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((category) => {
            const Icon = category.icon;
            return (
              <div
                key={category.slug}
                className="flex flex-col rounded-xl border border-slate-200 bg-white p-6 shadow-sm"
              >
                <span className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-light text-industrial">
                  <Icon className="h-6 w-6" aria-hidden="true" />
                </span>
                <h3 className="text-lg font-semibold text-industrial">{category.name}</h3>
                <p className="mt-2 flex-1 text-sm text-textGray">{category.description}</p>
                <Link
                  href={category.href}
                  className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-technical hover:text-industrial"
                >
                  Découvrir
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
