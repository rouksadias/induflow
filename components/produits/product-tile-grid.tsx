import Image from "next/image";
import Link from "next/link";
import { PackageSearch, Plus } from "lucide-react";
import type { Product } from "@/lib/data";

interface ProductTileGridProps {
  products: Product[];
  categorySlug: string;
}

export function ProductTileGrid({ products, categorySlug }: ProductTileGridProps) {
  if (products.length === 0) {
    return (
      <section className="mx-auto max-w-7xl px-6 py-16">
        <p className="text-sm text-textGray">
          Les références de cette catégorie seront ajoutées prochainement.
        </p>
      </section>
    );
  }

  return (
    <section className="mx-auto max-w-7xl px-6 py-16">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {products.map((product) => (
          <Link
            key={product.slug}
            href={`/produits/${categorySlug}/${product.slug}`}
            className="group relative flex h-72 flex-col overflow-hidden rounded-xl bg-industrial shadow-sm"
          >
            {product.image ? (
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-cover transition duration-300 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            ) : (
              <div className="flex h-full items-center justify-center bg-light">
                <PackageSearch className="h-14 w-14 text-industrial/30" aria-hidden="true" />
                <span className="sr-only">Photo à venir : {product.name}</span>
              </div>
            )}

            <div className="absolute inset-0 bg-gradient-to-t from-deep/90 via-deep/10 to-transparent transition group-hover:from-deep/95" />

            <span className="absolute right-4 top-4 rounded-full bg-safety/90 px-2.5 py-1 text-[11px] font-semibold text-deep">
              Sur devis
            </span>

            <div className="relative mt-auto flex items-end justify-between gap-3 p-5">
              <div>
                <h2 className="text-base font-semibold text-white">{product.name}</h2>
                <p className="mt-1 text-xs font-mono text-slate-300">Réf. {product.ref}</p>
              </div>
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white text-industrial transition group-hover:bg-safety group-hover:text-deep">
                <Plus className="h-5 w-5" aria-hidden="true" />
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
