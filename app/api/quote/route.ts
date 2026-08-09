import { NextResponse } from "next/server";
import { insertQuoteRequest } from "@/lib/db";
import { validateQuoteForm, type QuoteFormValues } from "@/lib/validations";

export async function POST(request: Request) {
  const formData = await request.formData();

  const values: QuoteFormValues = {
    name: String(formData.get("name") ?? ""),
    company: String(formData.get("company") ?? ""),
    phone: String(formData.get("phone") ?? ""),
    email: String(formData.get("email") ?? ""),
    category: String(formData.get("category") ?? ""),
    product: String(formData.get("product") ?? ""),
    quantity: String(formData.get("quantity") ?? ""),
    message: String(formData.get("message") ?? ""),
  };

  const errors = validateQuoteForm(values);
  if (Object.keys(errors).length > 0) {
    return NextResponse.json(
      { message: "Merci de corriger les champs indiqués.", errors },
      { status: 400 }
    );
  }

  const attachment = formData.get("attachment");
  const attachmentName =
    attachment instanceof File && attachment.size > 0 ? attachment.name : undefined;

  try {
    await insertQuoteRequest({
      name: values.name.trim(),
      company: values.company.trim() || undefined,
      phone: values.phone.trim(),
      email: values.email.trim(),
      category: values.category.trim() || undefined,
      product: values.product.trim() || undefined,
      quantity: values.quantity.trim() || undefined,
      message: values.message.trim() || undefined,
      attachmentName,
    });
  } catch (error) {
    console.error("Failed to save quote request", error);
    return NextResponse.json(
      { message: "Impossible d'enregistrer la demande pour le moment." },
      { status: 500 }
    );
  }

  return NextResponse.json({ message: "Demande enregistrée." }, { status: 201 });
}
