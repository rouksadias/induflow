import { QuoteForm } from "@/components/home/quote-form";

export function CategoryHelpSection() {
  return (
    <section className="bg-bgGray py-16">
      <div className="mx-auto max-w-3xl px-6">
        <div className="mb-8 text-center">
          <h2 className="text-2xl font-bold text-industrial sm:text-3xl">
            Nous sommes là pour vous aider
          </h2>
          <p className="mt-3 text-sm text-textGray">
            Posez-nous vos questions ou demandez un devis sur les références de cette catégorie,
            notre équipe vous répond sous 24h.
          </p>
        </div>

        <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
          <QuoteForm />
        </div>
      </div>
    </section>
  );
}
