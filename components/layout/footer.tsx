import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { Logo } from "@/components/ui/logo";
import { categories, services } from "@/lib/data";
import { siteConfig } from "@/lib/config";

export function Footer() {
  return (
    <footer id="contact" className="bg-deep text-slate-300">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-6 py-14 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <Logo className="text-white [&_span]:text-white" />
          <p className="mt-4 text-sm leading-relaxed text-slate-400">{siteConfig.tagline}</p>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wide text-white">Produits</h3>
          <ul className="mt-4 space-y-2 text-sm">
            {categories.map((category) => (
              <li key={category.slug}>
                <Link href={category.href} className="hover:text-safety">
                  {category.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wide text-white">Services techniques</h3>
          <ul className="mt-4 space-y-2 text-sm">
            {services.map((service) => (
              <li key={service.slug}>
                <Link href={`/services/${service.slug}`} className="hover:text-safety">
                  {service.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wide text-white">Contact</h3>
          <ul className="mt-4 space-y-3 text-sm">
            <li className="flex items-start gap-2">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
              {siteConfig.address}
            </li>
            <li className="flex items-start gap-2">
              <Phone className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
              <a href={siteConfig.phoneHref} className="hover:text-safety">
                {siteConfig.phone}
              </a>
            </li>
            <li className="flex items-start gap-2">
              <Mail className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
              <a href={`mailto:${siteConfig.email}`} className="hover:text-safety">
                {siteConfig.email}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-6 py-6 text-xs text-slate-400 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} {siteConfig.name}. Tous droits réservés.</p>
          <div className="flex gap-4">
            <Link href="/mentions-legales" className="hover:text-safety">
              Mentions légales
            </Link>
            <Link href="/politique-de-confidentialite" className="hover:text-safety">
              Politique de confidentialité
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
