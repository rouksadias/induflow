import type { QuoteFormValues } from "@/lib/validations";

export interface SubmitQuoteResult {
  success: boolean;
  message: string;
}

export async function submitQuoteRequest(
  values: QuoteFormValues,
  attachment?: File | null
): Promise<SubmitQuoteResult> {
  const formData = new FormData();
  Object.entries(values).forEach(([key, value]) => formData.append(key, value));
  if (attachment) {
    formData.append("attachment", attachment);
  }

  try {
    const response = await fetch("/api/quote", {
      method: "POST",
      body: formData,
    });

    const data = await response.json().catch(() => null);

    if (!response.ok) {
      return {
        success: false,
        message: data?.message ?? "Une erreur est survenue. Veuillez réessayer.",
      };
    }

    return { success: true, message: "Votre demande de devis a bien été envoyée." };
  } catch {
    return {
      success: false,
      message: "Impossible de contacter le serveur. Vérifiez votre connexion.",
    };
  }
}
