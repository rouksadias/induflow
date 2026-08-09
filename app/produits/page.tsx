import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { categories } from "@/lib/data";
import { siteConfig } from "@/lib/config";

export const metadata: Metadata = {
  title: "Produits industriels au Maroc",
  description:
    "Découvrez le catalogue INDUFLOW : détection des gaz, étalonnage, pompes, vannes, conteneurs et EPI pour les professionnels au Maroc.",
  keywords: siteConfig.keywords,
  alternates: {
    canonical: `${siteConfig.url}/produits`,
  },
};

export default function ProduitsPage() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-16">
      <h1 className="text-3xl font-bold text-industrial">Nos produits</h1>
      <p className="mt-3 max-w-2xl text-sm text-textGray">
        Une gamme de fournitures industrielles structurée par catégorie, disponible sur devis.
      </p>

      <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {categories.map((category) => {
          const Icon = category.icon;
          return (
            <Link
              key={category.slug}
              href={category.href}
              className="group flex flex-col rounded-xl border border-slate-200 bg-white p-6 shadow-sm hover:border-technical hover:shadow-md"
            >
              <span className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-light text-industrial group-hover:bg-technical group-hover:text-white">
                <Icon className="h-6 w-6" aria-hidden="true" />
              </span>
              <h2 className="text-lg font-semibold text-industrial">{category.name}</h2>
              <p className="mt-2 flex-1 text-sm text-textGray">{category.description}</p>
              <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-technical">
                Découvrir
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </span>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
