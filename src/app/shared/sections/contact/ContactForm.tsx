"use client";

import { CircleCheck } from "lucide-react";
import { useEffect, useRef, useState, useTransition, type FormEvent } from "react";
import { sendContactMessage } from "../../actions/contact.action";
import { Button, PillRadioGroup, TextAreaField, TextField } from "../../components";
import { projectTypes } from "../../constant";
import type { ContactFormErrors } from "../../types";
import { hasErrors, toContactFormValues, validateContactForm } from "../../utils";

const focusFirstInvalidField = (form: HTMLFormElement, errors: ContactFormErrors) => {
  const [firstField] = Object.keys(errors);
  if (!firstField) return;
  form.querySelector<HTMLElement>(`[name="${firstField}"]`)?.focus();
};

export const ContactForm = () => {
  const [errors, setErrors] = useState<ContactFormErrors>({});
  const [senderName, setSenderName] = useState<string | null>(null);
  const [isPending, startTransition] = useTransition();
  const successHeadingRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (senderName !== null) successHeadingRef.current?.focus();
  }, [senderName]);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const values = toContactFormValues(Object.fromEntries(new FormData(form)));
    const clientErrors = validateContactForm(values);

    setErrors(clientErrors);
    if (hasErrors(clientErrors)) {
      focusFirstInvalidField(form, clientErrors);
      return;
    }

    startTransition(async () => {
      const result = await sendContactMessage(values);
      if (!result.ok) {
        setErrors(result.errors);
        focusFirstInvalidField(form, result.errors);
        return;
      }
      form.reset();
      setSenderName(values.name.split(" ")[0]);
    });
  };

  const handleChange = (event: FormEvent<HTMLFormElement>) => {
    const field = (event.target as HTMLInputElement).name as keyof ContactFormErrors;
    if (!errors[field]) return;
    setErrors((current) => {
      const next = { ...current };
      delete next[field];
      return next;
    });
  };

  if (senderName !== null) {
    return (
      <div className="flex flex-col items-center py-10 text-center">
        <span className="grid size-14 place-items-center rounded-full bg-chip-mint text-teal">
          <CircleCheck size={28} aria-hidden="true" />
        </span>
        <h3 ref={successHeadingRef} tabIndex={-1} className="mt-5 outline-hidden">
          Thanks, {senderName}! Your message is on its way.
        </h3>
        <p className="mt-2 max-w-sm text-body-sm text-muted">
          Our team usually replies within 24 hours. For anything urgent, call us during business
          hours.
        </p>
        <Button variant="ghost" className="mt-6" onClick={() => setSenderName(null)}>
          Send another message
        </Button>
      </div>
    );
  }

  return (
    <form noValidate onSubmit={handleSubmit} onChange={handleChange} className="space-y-5">
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <TextField
          name="name"
          label="Name"
          autoComplete="name"
          placeholder="Your full name"
          required
          error={errors.name}
        />
        <TextField
          name="email"
          type="email"
          label="Email"
          autoComplete="email"
          placeholder="you@company.com"
          required
          error={errors.email}
        />
      </div>
      <TextField
        name="subject"
        label="Subject"
        placeholder="What is this about?"
        required
        error={errors.subject}
      />
      <PillRadioGroup
        name="projectType"
        legend="Project type"
        options={projectTypes}
        error={errors.projectType}
      />
      <TextAreaField
        name="message"
        label="Message"
        rows={5}
        placeholder="Tell us about your project, goals and timeline."
        required
        error={errors.message}
      />
      <Button type="submit" arrow={!isPending} disabled={isPending} className="w-full sm:w-auto">
        {isPending ? "Sending…" : "Send"}
      </Button>
    </form>
  );
};
