import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mentions légales",
};

export default function MentionsLegalesPage() {
  return (
    <section className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="text-3xl font-bold text-industrial">Mentions légales</h1>
      <p className="mt-4 text-sm text-textGray">
        Les informations légales complètes d&apos;INDUFLOW (raison sociale, forme juridique,
        capital, registre de commerce, siège social) seront publiées ici après confirmation des
        données de l&apos;entreprise.
      </p>
    </section>
  );
}
