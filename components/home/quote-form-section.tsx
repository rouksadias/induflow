import { QuoteForm } from "@/components/home/quote-form";

export function QuoteFormSection() {
  return (
    <section id="quote-form" className="bg-bgGray py-16">
      <div className="mx-auto max-w-3xl px-6">
        <div className="mb-8 text-center">
          <h2 className="text-2xl font-bold text-industrial sm:text-3xl">
            Demander un devis
          </h2>
          <p className="mt-3 text-sm text-textGray">
            Décrivez votre besoin, notre équipe revient vers vous avec une proposition adaptée.
          </p>
        </div>

        <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
          <QuoteForm />
        </div>
      </div>
    </section>
  );
}
