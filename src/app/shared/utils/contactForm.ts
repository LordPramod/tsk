import { projectTypes } from "../constant/contact.constant";
import type { ContactFormErrors, ContactFormValues } from "../types";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const MESSAGE_MIN_LENGTH = 20;

const fieldNames: (keyof ContactFormValues)[] = [
  "name",
  "email",
  "subject",
  "projectType",
  "message",
];

export const toContactFormValues = (source: Record<string, unknown>): ContactFormValues =>
  Object.fromEntries(
    fieldNames.map((field) => {
      const value = source[field];
      return [field, typeof value === "string" ? value.trim() : ""];
    }),
  ) as ContactFormValues;

export const validateContactForm = (values: ContactFormValues): ContactFormErrors => {
  const errors: ContactFormErrors = {};

  if (values.name.length < 2) errors.name = "Please enter your name.";
  if (!EMAIL_PATTERN.test(values.email)) errors.email = "Please enter a valid email address.";
  if (!values.subject) errors.subject = "Please add a subject.";
  if (!projectTypes.includes(values.projectType)) {
    errors.projectType = "Please choose a project type.";
  }
  if (values.message.length < MESSAGE_MIN_LENGTH) {
    errors.message = `Please tell us a little more (at least ${MESSAGE_MIN_LENGTH} characters).`;
  }

  return errors;
};

export const hasErrors = (errors: ContactFormErrors) => Object.keys(errors).length > 0;
