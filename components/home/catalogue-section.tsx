import { ProductSection } from "@/components/home/product-section";
import { getProductsByCategory } from "@/lib/data";

const featuredCategories = [
  { slug: "detection-des-gaz", title: "Détection des gaz" },
  { slug: "pompes-industrielles", title: "Pompes industrielles" },
  { slug: "vannes-industrielles", title: "Vannes industrielles" },
  { slug: "poubelles-conteneurs", title: "Poubelles & conteneurs" },
  { slug: "epi-securite", title: "EPI et sécurité" },
];

export function CatalogueSection() {
  return (
    <section id="produits" className="mx-auto max-w-7xl px-6 py-12">
      <div className="mb-6 max-w-2xl">
        <h2 className="text-2xl font-bold text-industrial sm:text-3xl">Notre catalogue produits</h2>
        <p className="mt-3 text-sm text-textGray">
          Un aperçu de nos références disponibles sur devis. Le catalogue complet s&apos;enrichit
          régulièrement.
        </p>
      </div>

      <div className="divide-y divide-slate-200">
        {featuredCategories.map((category) => (
          <ProductSection
            key={category.slug}
            title={category.title}
            products={getProductsByCategory(category.slug)}
            seeAllHref={`/produits/${category.slug}`}
          />
        ))}
      </div>
    </section>
  );
}
