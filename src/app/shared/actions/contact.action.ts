"use server";

import type { ContactFormResult } from "../types";
import { hasErrors, toContactFormValues, validateContactForm } from "../utils/contactForm";

export async function sendContactMessage(input: Record<string, unknown>): Promise<ContactFormResult> {
  const values = toContactFormValues(input);
  const errors = validateContactForm(values);

  if (hasErrors(errors)) return { ok: false, errors };

  return { ok: true };
}
