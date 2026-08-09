import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Politique de confidentialité",
};

export default function PolitiqueConfidentialitePage() {
  return (
    <section className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="text-3xl font-bold text-industrial">Politique de confidentialité</h1>
      <p className="mt-4 text-sm text-textGray">
        INDUFLOW collecte les informations transmises via le formulaire de devis (nom, entreprise,
        téléphone, email, besoin) uniquement dans le but de traiter votre demande. Le détail
        complet de la politique de traitement des données sera publié ici après validation par
        l&apos;entreprise.
      </p>
    </section>
  );
}
