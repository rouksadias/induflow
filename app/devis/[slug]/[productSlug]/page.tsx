import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { PackageSearch } from "lucide-react";
import { categories, getCategoryBySlug, getProductBySlug, getProductsByCategory } from "@/lib/data";
import { siteConfig } from "@/lib/config";
import { QuoteForm } from "@/components/home/quote-form";

export function generateStaticParams() {
  return categories.flatMap((category) =>
    getProductsByCategory(category.slug).map((product) => ({
      slug: category.slug,
      productSlug: product.slug,
    }))
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string; productSlug: string }>;
}): Promise<Metadata> {
  const { slug, productSlug } = await params;
  const product = getProductBySlug(slug, productSlug);

  if (!product) {
    return {};
  }

  const title = `Demander un devis — ${product.name}`;
  const url = `${siteConfig.url}/devis/${slug}/${productSlug}`;

  return {
    title,
    alternates: { canonical: url },
  };
}

export default async function DevisProductPage({
  params,
}: {
  params: Promise<{ slug: string; productSlug: string }>;
}) {
  const { slug, productSlug } = await params;
  const category = getCategoryBySlug(slug);
  const product = category ? getProductBySlug(slug, productSlug) : undefined;

  if (!category || !product) {
    notFound();
  }

  return (
    <section className="mx-auto max-w-5xl px-6 py-16">
      <nav aria-label="Fil d'ariane" className="mb-6 text-xs text-slate-400">
        <Link href="/produits" className="hover:text-technical">
          Produits
        </Link>
        <span className="mx-2">/</span>
        <Link href={`/produits/${category.slug}/${product.slug}`} className="hover:text-technical">
          {product.name}
        </Link>
        <span className="mx-2">/</span>
        <span className="text-textGray">Demande de devis</span>
      </nav>

      <div className="grid grid-cols-1 gap-10 lg:grid-cols-[minmax(0,320px)_1fr]">
        <div>
          <div className="relative aspect-square overflow-hidden rounded-xl bg-light">
            {product.image ? (
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 320px"
                loading="lazy"
              />
            ) : (
              <div className="flex h-full items-center justify-center">
                <PackageSearch className="h-14 w-14 text-industrial/30" aria-hidden="true" />
                <span className="sr-only">Photo à venir : {product.name}</span>
              </div>
            )}
          </div>
          <h1 className="mt-4 text-lg font-semibold text-industrial">{product.name}</h1>
          <p className="mt-1 text-xs font-mono text-slate-400">Réf. {product.ref}</p>
          <p className="mt-2 text-sm text-textGray">{product.description}</p>
        </div>

        <div>
          <h2 className="text-xl font-bold text-industrial sm:text-2xl">
            Demander un devis pour ce produit
          </h2>
          <p className="mt-2 text-sm text-textGray">
            Remplissez ce formulaire, notre équipe vous répond sous 24h avec une proposition
            adaptée.
          </p>

          <div className="mt-6 rounded-xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
            <QuoteForm defaultValues={{ product: product.name, category: category.name }} />
          </div>
        </div>
      </div>
    </section>
  );
}
