import type { LucideIcon } from "lucide-react";

export type Feature = {
  icon: LucideIcon;
  title: string;
  description: string;
};

export type LinkAction = {
  label: string;
  href: string;
};

export type ProductId = "eco-creative" | "one-content-studio" | "physio-at-home";

export type ProductStat = {
  value: string;
  label: string;
};

export type Product = {
  id: ProductId;
  name: string;
  category: string;
  icon: LucideIcon;
  summary: string;
  description: string;
  tags: string[];
  stats: ProductStat[];
  cta: LinkAction;
};

export type Industry = {
  name: string;
  shortName: string;
  icon: LucideIcon;
  description: string;
};

export type ServiceCategory = {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  subServices: Feature[];
};

export type PricingTier = {
  name: string;
  price: string;
  period?: string;
  description: string;
  features: string[];
  cta: LinkAction;
  featured?: boolean;
};

export type Testimonial = {
  quote: string;
  name: string;
  role: string;
  company: string;
};

export type BlogPost = {
  title: string;
  excerpt: string;
  category: string;
  publishedAt: string;
  readTime: string;
  icon: LucideIcon;
};
