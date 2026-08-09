"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ChevronDown,
  Menu,
  MessageCircle,
  Search,
  X,
} from "lucide-react";
import { Logo } from "@/components/ui/logo";
import { categories } from "@/lib/data";
import { siteConfig } from "@/lib/config";

const mainLinks = [
  { name: "Accueil", href: "/" },
  { name: "Marques", href: "/#marques" },
  { name: "Contact", href: "/#contact" },
];

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [produitsOpen, setProduitsOpen] = useState(false);
  const [mobileProduitsOpen, setMobileProduitsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 py-3">
        <Logo />

        <nav aria-label="Navigation principale" className="hidden items-center gap-6 lg:flex">
          <Link href="/" className="text-sm font-medium text-textGray hover:text-technical">
            Accueil
          </Link>

          <div
            className="relative"
            onMouseEnter={() => setProduitsOpen(true)}
            onMouseLeave={() => setProduitsOpen(false)}
          >
            <button
              type="button"
              className="flex items-center gap-1 text-sm font-medium text-textGray hover:text-technical"
              aria-expanded={produitsOpen}
              aria-haspopup="true"
              onClick={() => setProduitsOpen((open) => !open)}
            >
              Produits
              <ChevronDown className="h-4 w-4" aria-hidden="true" />
            </button>
            {produitsOpen && (
              <div className="absolute left-0 top-full w-72 rounded-lg border border-slate-200 bg-white p-2 shadow-lg">
                <Link
                  href="/produits"
                  className="block rounded-md px-3 py-2 text-sm font-semibold text-industrial hover:bg-light"
                >
                  Tous les produits
                </Link>
                {categories.map((category) => (
                  <Link
                    key={category.slug}
                    href={category.href}
                    className="block rounded-md px-3 py-2 text-sm text-textGray hover:bg-light hover:text-technical"
                  >
                    {category.name}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link href="/#marques" className="text-sm font-medium text-textGray hover:text-technical">
            Marques
          </Link>
          <Link href="/#contact" className="text-sm font-medium text-textGray hover:text-technical">
            Contact
          </Link>
        </nav>

        <div className="hidden flex-1 items-center max-w-xs md:flex">
          <label htmlFor="site-search" className="sr-only">
            Rechercher un produit
          </label>
          <div className="relative w-full">
            <Search
              className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400"
              aria-hidden="true"
            />
            <input
              id="site-search"
              type="search"
              placeholder="Rechercher un produit..."
              className="w-full rounded-full border border-slate-200 bg-bgGray py-2 pl-9 pr-3 text-sm text-textGray focus:border-technical focus:outline-none focus:ring-2 focus:ring-technical/30"
            />
          </div>
        </div>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={siteConfig.whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Contacter INDUFLOW sur WhatsApp"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 text-industrial hover:border-technical hover:text-technical"
          >
            <MessageCircle className="h-5 w-5" aria-hidden="true" />
          </a>
          <Link
            href="/#quote-form"
            className="rounded-md bg-technical px-4 py-2 text-sm font-semibold text-white hover:bg-industrial"
          >
            Demander un devis
          </Link>
        </div>

        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center rounded-md text-industrial lg:hidden"
          aria-expanded={mobileOpen}
          aria-controls="mobile-menu"
          aria-label={mobileOpen ? "Fermer le menu" : "Ouvrir le menu"}
          onClick={() => setMobileOpen((open) => !open)}
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {mobileOpen && (
        <nav id="mobile-menu" aria-label="Navigation mobile" className="border-t border-slate-200 bg-white px-6 py-4 lg:hidden">
          <ul className="flex flex-col gap-1">
            <li>
              <Link
                href="/"
                className="block rounded-md px-2 py-2 text-sm font-medium text-textGray hover:bg-light"
                onClick={() => setMobileOpen(false)}
              >
                Accueil
              </Link>
            </li>
            <li>
              <button
                type="button"
                aria-expanded={mobileProduitsOpen}
                className="flex w-full items-center justify-between rounded-md px-2 py-2 text-sm font-medium text-textGray hover:bg-light"
                onClick={() => setMobileProduitsOpen((open) => !open)}
              >
                Produits
                <ChevronDown
                  className={`h-4 w-4 transition-transform ${mobileProduitsOpen ? "rotate-180" : ""}`}
                  aria-hidden="true"
                />
              </button>
              {mobileProduitsOpen && (
                <ul className="ml-3 flex flex-col gap-1 border-l border-slate-200 pl-3">
                  {categories.map((category) => (
                    <li key={category.slug}>
                      <Link
                        href={category.href}
                        className="block rounded-md px-2 py-2 text-sm text-textGray hover:bg-light hover:text-technical"
                        onClick={() => setMobileOpen(false)}
                      >
                        {category.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
            {mainLinks.slice(1).map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="block rounded-md px-2 py-2 text-sm font-medium text-textGray hover:bg-light"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-4 flex flex-col gap-2">
            <Link
              href="/#quote-form"
              className="rounded-md bg-technical px-4 py-2 text-center text-sm font-semibold text-white"
              onClick={() => setMobileOpen(false)}
            >
              Demander un devis
            </Link>
            <a
              href={siteConfig.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 rounded-md border border-slate-200 px-4 py-2 text-sm font-semibold text-industrial"
            >
              <MessageCircle className="h-4 w-4" aria-hidden="true" />
              WhatsApp
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}
