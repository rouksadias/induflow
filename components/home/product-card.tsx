import Image from "next/image";
import Link from "next/link";
import { PackageSearch } from "lucide-react";
import type { Product } from "@/lib/data";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="flex flex-col rounded-xl border border-slate-200 bg-white shadow-sm transition hover:shadow-md">
      <div className="relative flex h-40 items-center justify-center overflow-hidden rounded-t-xl bg-light">
        {product.image ? (
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 25vw"
            loading="lazy"
          />
        ) : (
          <>
            <PackageSearch className="h-12 w-12 text-industrial/40" aria-hidden="true" />
            <span className="sr-only">Photo à venir : {product.name}</span>
          </>
        )}
      </div>

      <div className="flex flex-1 flex-col p-5">
        <div className="mb-2 flex items-start justify-between gap-2">
          <h3 className="text-sm font-semibold text-industrial">{product.name}</h3>
          <span className="shrink-0 rounded-full bg-safety/20 px-2 py-0.5 text-[11px] font-semibold text-deep">
            Sur devis
          </span>
        </div>
        <p className="text-xs font-mono text-slate-400">Réf. {product.ref}</p>
        <p className="mt-2 flex-1 text-sm text-textGray">{product.description}</p>

        <div className="mt-4 flex flex-col gap-2">
          <Link
            href={`/produits/${product.categorySlug}/${product.slug}`}
            className="rounded-md border border-slate-200 px-3 py-2 text-center text-xs font-semibold text-industrial hover:border-technical hover:text-technical"
          >
            Voir le produit
          </Link>
          <Link
            href={`/devis/${product.categorySlug}/${product.slug}`}
            className="rounded-md bg-technical px-3 py-2 text-center text-xs font-semibold text-white hover:bg-industrial"
          >
            Demander un devis
          </Link>
        </div>
      </div>
    </div>
  );
}
