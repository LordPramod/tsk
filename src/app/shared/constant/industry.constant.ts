import {
  Building,
  GraduationCap,
  HeartPulse,
  MountainSnow,
  Newspaper,
  ShoppingBag,
} from "lucide-react";
import type { Industry } from "../types";

export const industries: Industry[] = [
  {
    name: "Healthcare",
    shortName: "Healthcare",
    icon: HeartPulse,
    description:
      "Patient-friendly digital experiences and health-tech tools for clinics and practitioners.",
  },
  {
    name: "E‑Commerce",
    shortName: "E‑Commerce",
    icon: ShoppingBag,
    description:
      "Storefronts, product content and performance marketing that turn browsers into buyers.",
  },
  {
    name: "Real Estate",
    shortName: "Real Estate",
    icon: Building,
    description:
      "Property photography, video walkthroughs and lead-generation campaigns for developers and agencies.",
  },
  {
    name: "Education",
    shortName: "Education",
    icon: GraduationCap,
    description:
      "Enrolment campaigns, learning content and digital platforms for schools and edtech teams.",
  },
  {
    name: "Tourism & Hospitality",
    shortName: "Tourism",
    icon: MountainSnow,
    description:
      "Visual storytelling and booking-focused campaigns for hotels, treks and travel brands.",
  },
  {
    name: "Media & Publishing",
    shortName: "Media",
    icon: Newspaper,
    description:
      "Audience growth, content workflows and digital products for publishers and creators.",
  },
];
