import Image from "next/image";
import Link from "next/link";
import type { LucideIcon } from "lucide-react";

interface CategoryHeroProps {
  name: string;
  description: string;
  icon: LucideIcon;
  image?: string;
}

export function CategoryHero({ name, description, icon: Icon, image }: CategoryHeroProps) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-industrial via-deep to-deep text-white">
      {image && (
        <>
          <Image
            src={image}
            alt={name}
            fill
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-industrial/90 via-deep/85 to-deep/90" />
        </>
      )}

      <div className="relative mx-auto max-w-7xl px-6 py-16 lg:py-20">
        <nav aria-label="Fil d'ariane" className="mb-6 text-xs text-slate-300">
          <Link href="/produits" className="hover:text-white">
            Produits
          </Link>
          <span className="mx-2">/</span>
          <span className="text-white">{name}</span>
        </nav>

        <div className="flex items-center gap-4">
          <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-white/10 text-safety">
            <Icon className="h-7 w-7" aria-hidden="true" />
          </span>
          <div>
            <h1 className="text-3xl font-bold leading-tight sm:text-4xl">{name}</h1>
            <p className="mt-2 max-w-2xl text-sm text-slate-200 sm:text-base">{description}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
