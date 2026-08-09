import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { services, getServiceBySlug } from "@/lib/data";

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    return {};
  }

  return {
    title: service.name,
    description: service.description,
  };
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  const Icon = service.icon;

  return (
    <section className="mx-auto max-w-3xl px-6 py-16">
      <nav aria-label="Fil d'ariane" className="mb-6 text-xs text-slate-400">
        <Link href="/" className="hover:text-technical">
          Accueil
        </Link>
        <span className="mx-2">/</span>
        <span className="text-textGray">{service.name}</span>
      </nav>

      <span className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-light text-industrial">
        <Icon className="h-7 w-7" aria-hidden="true" />
      </span>
      <h1 className="text-3xl font-bold text-industrial">{service.name}</h1>
      <p className="mt-4 text-base text-textGray">{service.description}</p>

      <p className="mt-8 rounded-lg border border-safety/40 bg-safety/10 px-5 py-4 text-sm text-deep">
        Les prestations, moyens techniques et documents disponibles sont confirmés après analyse
        du besoin.
      </p>

      <Link
        href="/#quote-form"
        className="mt-8 inline-block rounded-md bg-technical px-6 py-3 text-sm font-semibold text-white hover:bg-industrial"
      >
        Demander un devis
      </Link>
    </section>
  );
}
