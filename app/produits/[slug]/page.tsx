import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { PackageSearch } from "lucide-react";
import { categories, getCategoryBySlug, getProductsByCategory } from "@/lib/data";

export function generateStaticParams() {
  return categories.map((category) => ({ slug: category.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const category = getCategoryBySlug(slug);

  if (!category) {
    return {};
  }

  return {
    title: category.name,
    description: category.description,
  };
}

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const category = getCategoryBySlug(slug);

  if (!category) {
    notFound();
  }

  const categoryProducts = getProductsByCategory(category.slug);
  const Icon = category.icon;

  return (
    <section className="mx-auto max-w-7xl px-6 py-16">
      <nav aria-label="Fil d'ariane" className="mb-6 text-xs text-slate-400">
        <Link href="/produits" className="hover:text-technical">
          Produits
        </Link>
        <span className="mx-2">/</span>
        <span className="text-textGray">{category.name}</span>
      </nav>

      <div className="flex items-center gap-4">
        <span className="flex h-14 w-14 items-center justify-center rounded-full bg-light text-industrial">
          <Icon className="h-7 w-7" aria-hidden="true" />
        </span>
        <div>
          <h1 className="text-3xl font-bold text-industrial">{category.name}</h1>
          <p className="mt-1 max-w-2xl text-sm text-textGray">{category.description}</p>
        </div>
      </div>

      <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {categoryProducts.map((product) => (
          <div
            key={product.slug}
            id={product.slug}
            className="flex flex-col rounded-xl border border-slate-200 bg-white shadow-sm"
          >
            <div className="flex h-40 items-center justify-center rounded-t-xl bg-light">
              <PackageSearch className="h-12 w-12 text-industrial/40" aria-hidden="true" />
              <span className="sr-only">Photo à venir : {product.name}</span>
            </div>
            <div className="flex flex-1 flex-col p-5">
              <div className="mb-2 flex items-start justify-between gap-2">
                <h2 className="text-sm font-semibold text-industrial">{product.name}</h2>
                <span className="shrink-0 rounded-full bg-safety/20 px-2 py-0.5 text-[11px] font-semibold text-deep">
                  Sur devis
                </span>
              </div>
              <p className="text-xs font-mono text-slate-400">Réf. {product.ref}</p>
              <p className="mt-2 flex-1 text-sm text-textGray">{product.description}</p>
              <Link
                href={`/#quote-form?product=${encodeURIComponent(product.name)}`}
                className="mt-4 rounded-md bg-technical px-3 py-2 text-center text-xs font-semibold text-white hover:bg-industrial"
              >
                Demander un devis
              </Link>
            </div>
          </div>
        ))}
        {categoryProducts.length === 0 && (
          <p className="text-sm text-textGray">
            Les références de cette catégorie seront ajoutées prochainement.
          </p>
        )}
      </div>
    </section>
  );
}
