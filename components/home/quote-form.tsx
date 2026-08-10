"use client";

import { useState, type ChangeEvent, type FormEvent } from "react";
import { Paperclip } from "lucide-react";
import { categories } from "@/lib/data";
import {
  emptyQuoteForm,
  validateQuoteForm,
  type QuoteFormErrors,
  type QuoteFormValues,
} from "@/lib/validations";
import { submitQuoteRequest } from "@/lib/api";

type Status = "idle" | "submitting" | "success" | "error";

interface QuoteFormProps {
  defaultValues?: Partial<QuoteFormValues>;
}

export function QuoteForm({ defaultValues }: QuoteFormProps = {}) {
  const [values, setValues] = useState<QuoteFormValues>({
    ...emptyQuoteForm,
    ...defaultValues,
  });
  const [errors, setErrors] = useState<QuoteFormErrors>({});
  const [attachment, setAttachment] = useState<File | null>(null);
  const [status, setStatus] = useState<Status>("idle");
  const [feedback, setFeedback] = useState<string>("");

  function handleChange(
    event: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) {
    const { name, value } = event.target;
    setValues((prev) => ({ ...prev, [name]: value }));
  }

  function handleFileChange(event: ChangeEvent<HTMLInputElement>) {
    setAttachment(event.target.files?.[0] ?? null);
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const validationErrors = validateQuoteForm(values);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) {
      setStatus("error");
      setFeedback("Merci de corriger les champs indiqués ci-dessous.");
      return;
    }

    setStatus("submitting");
    const result = await submitQuoteRequest(values, attachment);
    setFeedback(result.message);

    if (result.success) {
      setStatus("success");
      setValues(emptyQuoteForm);
      setAttachment(null);
    } else {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div
        role="status"
        className="rounded-xl border border-technical/30 bg-light p-8 text-center"
      >
        <h3 className="text-lg font-semibold text-industrial">Demande envoyée</h3>
        <p className="mt-2 text-sm text-textGray">{feedback}</p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-6 rounded-md bg-technical px-5 py-2 text-sm font-semibold text-white hover:bg-industrial"
        >
          Envoyer une autre demande
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-5 sm:grid-cols-2" noValidate>
      <div className="sm:col-span-1">
        <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-textGray">
          Nom *
        </label>
        <input
          id="name"
          name="name"
          type="text"
          value={values.name}
          onChange={handleChange}
          aria-invalid={Boolean(errors.name)}
          aria-describedby={errors.name ? "name-error" : undefined}
          className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm focus:border-technical focus:outline-none focus:ring-2 focus:ring-technical/30"
        />
        {errors.name && (
          <p id="name-error" className="mt-1 text-xs text-red-600">
            {errors.name}
          </p>
        )}
      </div>

      <div className="sm:col-span-1">
        <label htmlFor="company" className="mb-1.5 block text-sm font-medium text-textGray">
          Entreprise
        </label>
        <input
          id="company"
          name="company"
          type="text"
          value={values.company}
          onChange={handleChange}
          className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm focus:border-technical focus:outline-none focus:ring-2 focus:ring-technical/30"
        />
      </div>

      <div className="sm:col-span-1">
        <label htmlFor="phone" className="mb-1.5 block text-sm font-medium text-textGray">
          Téléphone *
        </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          value={values.phone}
          onChange={handleChange}
          aria-invalid={Boolean(errors.phone)}
          aria-describedby={errors.phone ? "phone-error" : undefined}
          className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm focus:border-technical focus:outline-none focus:ring-2 focus:ring-technical/30"
        />
        {errors.phone && (
          <p id="phone-error" className="mt-1 text-xs text-red-600">
            {errors.phone}
          </p>
        )}
      </div>

      <div className="sm:col-span-1">
        <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-textGray">
          Email professionnel *
        </label>
        <input
          id="email"
          name="email"
          type="email"
          value={values.email}
          onChange={handleChange}
          aria-invalid={Boolean(errors.email)}
          aria-describedby={errors.email ? "email-error" : undefined}
          className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm focus:border-technical focus:outline-none focus:ring-2 focus:ring-technical/30"
        />
        {errors.email && (
          <p id="email-error" className="mt-1 text-xs text-red-600">
            {errors.email}
          </p>
        )}
      </div>

      <div className="sm:col-span-1">
        <label htmlFor="category" className="mb-1.5 block text-sm font-medium text-textGray">
          Catégorie
        </label>
        <select
          id="category"
          name="category"
          value={values.category}
          onChange={handleChange}
          className="w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm focus:border-technical focus:outline-none focus:ring-2 focus:ring-technical/30"
        >
          <option value="">Sélectionner une catégorie</option>
          {categories.map((category) => (
            <option key={category.slug} value={category.name}>
              {category.name}
            </option>
          ))}
        </select>
      </div>

      <div className="sm:col-span-1">
        <label htmlFor="quantity" className="mb-1.5 block text-sm font-medium text-textGray">
          Quantité
        </label>
        <input
          id="quantity"
          name="quantity"
          type="text"
          value={values.quantity}
          onChange={handleChange}
          className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm focus:border-technical focus:outline-none focus:ring-2 focus:ring-technical/30"
        />
      </div>

      <div className="sm:col-span-2">
        <label htmlFor="product" className="mb-1.5 block text-sm font-medium text-textGray">
          Produit ou service
        </label>
        <input
          id="product"
          name="product"
          type="text"
          value={values.product}
          onChange={handleChange}
          aria-invalid={Boolean(errors.product)}
          aria-describedby={errors.product ? "product-error" : undefined}
          className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm focus:border-technical focus:outline-none focus:ring-2 focus:ring-technical/30"
        />
        {errors.product && (
          <p id="product-error" className="mt-1 text-xs text-red-600">
            {errors.product}
          </p>
        )}
      </div>

      <div className="sm:col-span-2">
        <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-textGray">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          value={values.message}
          onChange={handleChange}
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? "message-error" : undefined}
          className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm focus:border-technical focus:outline-none focus:ring-2 focus:ring-technical/30"
        />
        {errors.message && (
          <p id="message-error" className="mt-1 text-xs text-red-600">
            {errors.message}
          </p>
        )}
      </div>

      <div className="sm:col-span-2">
        <label htmlFor="attachment" className="mb-1.5 flex items-center gap-1.5 text-sm font-medium text-textGray">
          <Paperclip className="h-4 w-4" aria-hidden="true" />
          Pièce jointe (facultatif)
        </label>
        <input
          id="attachment"
          name="attachment"
          type="file"
          onChange={handleFileChange}
          className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm file:mr-3 file:rounded-md file:border-0 file:bg-light file:px-3 file:py-1.5 file:text-xs file:font-semibold file:text-industrial"
        />
      </div>

      {status === "error" && feedback && (
        <p role="alert" className="sm:col-span-2 text-sm text-red-600">
          {feedback}
        </p>
      )}

      <div className="sm:col-span-2">
        <button
          type="submit"
          disabled={status === "submitting"}
          className="w-full rounded-md bg-technical px-6 py-3 text-sm font-semibold text-white hover:bg-industrial disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
        >
          {status === "submitting" ? "Envoi en cours..." : "Envoyer ma demande"}
        </button>
      </div>
    </form>
  );
}
