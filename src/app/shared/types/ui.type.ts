import type { LucideIcon } from "lucide-react";

export type SurfaceTone = "light" | "dark";

export type ChipTone = "mint" | "teal" | "gold" | "lilac" | "pink";

export type NavItem = {
  label: string;
  href: string;
};

export type FooterLinkGroup = {
  title: string;
  links: NavItem[];
};

export type Stat = {
  value: string;
  label: string;
  icon: LucideIcon;
};
