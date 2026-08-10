import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { categories, getCategoryBySlug, getProductBySlug, getProductsByCategory } from "@/lib/data";
import { siteConfig } from "@/lib/config";
import { ProductCarousel } from "@/components/produits/product-carousel";

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

  const title = `${product.name} au Maroc | Sur devis`;
  const description = product.longDescription ?? product.description;
  const url = `${siteConfig.url}/produits/${slug}/${productSlug}`;

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: { title, description, url },
  };
}

export default async function ProductPage({
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

  const images = product.images ?? (product.image ? [product.image] : []);
  const otherProducts = getProductsByCategory(category.slug).filter(
    (item) => item.slug !== product.slug
  );

  return (
    <>
      <section className="mx-auto max-w-7xl px-6 py-16">
        <nav aria-label="Fil d'ariane" className="mb-6 text-xs text-slate-400">
          <Link href="/produits" className="hover:text-technical">
            Produits
          </Link>
          <span className="mx-2">/</span>
          <Link href={`/produits/${category.slug}`} className="hover:text-technical">
            {category.name}
          </Link>
          <span className="mx-2">/</span>
          <span className="text-textGray">{product.name}</span>
        </nav>

        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
          <ProductCarousel images={images} alt={product.name} />

          <div>
            <div className="flex items-start justify-between gap-3">
              <h1 className="text-2xl font-bold text-industrial sm:text-3xl">{product.name}</h1>
              <span className="shrink-0 rounded-full bg-safety/20 px-3 py-1 text-xs font-semibold text-deep">
                Sur devis
              </span>
            </div>
            <p className="mt-2 text-sm font-mono text-slate-400">Réf. {product.ref}</p>
            <p className="mt-5 text-sm leading-relaxed text-textGray">
              {product.longDescription ?? product.description}
            </p>

            <Link
              href={`/devis/${category.slug}/${product.slug}`}
              className="mt-8 inline-flex rounded-md bg-technical px-6 py-3 text-sm font-semibold text-white hover:bg-industrial"
            >
              Demander un devis
            </Link>
          </div>
        </div>
      </section>

      {otherProducts.length > 0 && (
        <section className="bg-bgGray py-16">
          <div className="mx-auto max-w-7xl px-6">
            <h2 className="text-xl font-bold text-industrial">
              Autres références en {category.name}
            </h2>
            <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {otherProducts.map((item) => (
                <Link
                  key={item.slug}
                  href={`/produits/${category.slug}/${item.slug}`}
                  className="rounded-xl border border-slate-200 bg-white p-4 text-sm font-semibold text-industrial shadow-sm hover:border-technical hover:text-technical"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
