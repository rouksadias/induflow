import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Product } from "@/lib/data";
import { ProductCard } from "@/components/home/product-card";

interface ProductSectionProps {
  title: string;
  description?: string;
  products: Product[];
  seeAllHref?: string;
}

export function ProductSection({ title, description, products, seeAllHref }: ProductSectionProps) {
  return (
    <div className="py-8">
      <div className="mb-6 flex flex-wrap items-end justify-between gap-3">
        <div>
          <h3 className="text-xl font-bold text-industrial">{title}</h3>
          {description && <p className="mt-1 text-sm text-textGray">{description}</p>}
        </div>
        {seeAllHref && (
          <Link
            href={seeAllHref}
            className="inline-flex items-center gap-1 text-sm font-semibold text-technical hover:text-industrial"
          >
            Voir toute la catégorie
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        )}
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {products.map((product) => (
          <ProductCard key={product.slug} product={product} />
        ))}
      </div>
    </div>
  );
}
