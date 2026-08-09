export interface QuoteFormValues {
  name: string;
  company: string;
  phone: string;
  email: string;
  category: string;
  product: string;
  quantity: string;
  message: string;
}

export type QuoteFormErrors = Partial<Record<keyof QuoteFormValues, string>>;

export const emptyQuoteForm: QuoteFormValues = {
  name: "",
  company: "",
  phone: "",
  email: "",
  category: "",
  product: "",
  quantity: "",
  message: "",
};

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function validateQuoteForm(values: QuoteFormValues): QuoteFormErrors {
  const errors: QuoteFormErrors = {};

  if (!values.name.trim()) {
    errors.name = "Le nom est obligatoire.";
  }

  if (!values.phone.trim()) {
    errors.phone = "Le téléphone est obligatoire.";
  }

  if (!values.email.trim()) {
    errors.email = "L'email professionnel est obligatoire.";
  } else if (!EMAIL_REGEX.test(values.email.trim())) {
    errors.email = "Veuillez saisir un email professionnel valide.";
  }

  if (!values.product.trim() && !values.message.trim()) {
    errors.product = "Précisez un produit/service ou un message.";
    errors.message = "Précisez un produit/service ou un message.";
  }

  return errors;
}
