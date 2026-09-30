import type { LucideIcon } from "lucide-react";

export type StoryTile = {
  value: string;
  label: string;
  surface: "teal" | "navy" | "white" | "gold";
};

export type RoadmapMilestone = {
  year: string;
  title: string;
  description: string;
};

export type ContactDetail = {
  icon: LucideIcon;
  label: string;
  value: string;
  href?: string;
};

export type Department = {
  icon: LucideIcon;
  name: string;
  description: string;
  email: string;
};

export type ResponseTime = {
  icon: LucideIcon;
  channel: string;
  time: string;
};

export type ContactFormValues = {
  name: string;
  email: string;
  subject: string;
  projectType: string;
  message: string;
};

export type ContactFormErrors = Partial<Record<keyof ContactFormValues, string>>;

export type ContactFormResult = { ok: true } | { ok: false; errors: ContactFormErrors };
