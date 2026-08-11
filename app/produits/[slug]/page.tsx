import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { categories, getCategoryBySlug, getProductsByCategory } from "@/lib/data";
import { siteConfig } from "@/lib/config";
import { CategoryHero } from "@/components/produits/category-hero";
import { BrandsStrip } from "@/components/home/brands-strip";
import { ProductTileGrid } from "@/components/produits/product-tile-grid";
import { CategoryHelpSection } from "@/components/produits/category-help-section";

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

  const title = `${category.name} au Maroc | Sur devis`;
  const description = `${category.description} Livraison partout au Maroc, devis sous 24h.`;

  return {
    title,
    description,
    alternates: {
      canonical: `${siteConfig.url}${category.href}`,
    },
    openGraph: {
      title,
      description,
      url: `${siteConfig.url}${category.href}`,
    },
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

  return (
    <>
      <CategoryHero
        name={category.name}
        description={category.description}
        icon={category.icon}
        image={category.image}
      />
      <BrandsStrip />
      <ProductTileGrid products={categoryProducts} categorySlug={category.slug} />
      <CategoryHelpSection />
    </>
  );
}
