import type { Metadata } from "next";
import { siteConfig } from "@/lib/config";

export const metadata: Metadata = {
  title: "Mentions légales",
};

export default function MentionsLegalesPage() {
  return (
    <section className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="text-3xl font-bold text-industrial">Mentions légales</h1>
      <p className="mt-4 text-sm text-textGray">
        {siteConfig.name}, dont le siège social est situé au {siteConfig.address}.
      </p>
      <ul className="mt-4 space-y-1 text-sm text-textGray">
        <li>Identifiant Fiscal (IF) : {siteConfig.identifiantFiscal}</li>
        <li>Identifiant Commun de l&apos;Entreprise (ICE) : {siteConfig.ice}</li>
        <li>Email : {siteConfig.email}</li>
      </ul>
      <p className="mt-4 text-sm text-textGray">
        Les informations complémentaires (forme juridique, capital, registre de commerce) seront
        publiées ici après confirmation des données de l&apos;entreprise.
      </p>
    </section>
  );
}
