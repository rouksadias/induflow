import type { MetadataRoute } from "next";
import { categories, services } from "@/lib/data";
import { siteConfig } from "@/lib/config";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ["", "/produits", "/mentions-legales", "/politique-de-confidentialite"].map(
    (path) => ({
      url: `${siteConfig.url}${path}`,
      lastModified: new Date(),
    })
  );

  const categoryRoutes = categories.map((category) => ({
    url: `${siteConfig.url}${category.href}`,
    lastModified: new Date(),
  }));

  const serviceRoutes = services.map((service) => ({
    url: `${siteConfig.url}/services/${service.slug}`,
    lastModified: new Date(),
  }));

  return [...staticRoutes, ...categoryRoutes, ...serviceRoutes];
}
