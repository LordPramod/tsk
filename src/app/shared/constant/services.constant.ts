import {
  Camera,
  ChartColumn,
  Clapperboard,
  CodeXml,
  Globe,
  HeartPulse,
  Megaphone,
  Palette,
  PenLine,
  PenTool,
  Search,
  Share2,
  Smartphone,
  Target,
  Video,
} from "lucide-react";
import type { PricingTier, ServiceCategory } from "../types";

export const serviceCategories: ServiceCategory[] = [
  {
    id: "digital-marketing",
    title: "Digital Marketing",
    description:
      "Data-driven campaigns that put your brand in front of the right people and turn attention into measurable growth.",
    icon: Megaphone,
    subServices: [
      {
        icon: Search,
        title: "SEO & SEM",
        description: "Rank higher and capture intent with technical SEO, content and search ads.",
      },
      {
        icon: Share2,
        title: "Social Media Marketing",
        description: "Always-on social strategy, community management and content calendars.",
      },
      {
        icon: Target,
        title: "Paid Advertising",
        description: "Meta, Google and TikTok campaigns optimised for leads and sales.",
      },
      {
        icon: ChartColumn,
        title: "Analytics & Reporting",
        description: "Clear dashboards and monthly reports that show exactly what is working.",
      },
    ],
  },
  {
    id: "content-creation",
    title: "Content Creation",
    description:
      "Scroll-stopping photo, video and written content, planned and produced by our in-house studio.",
    icon: Clapperboard,
    subServices: [
      {
        icon: Video,
        title: "Video Production",
        description: "Brand films, Reels and product videos, from script to final cut.",
      },
      {
        icon: Camera,
        title: "Photography",
        description: "Product, lifestyle and event photography with consistent art direction.",
      },
      {
        icon: PenLine,
        title: "Copywriting",
        description: "Website copy, blogs and captions written in your brand's voice.",
      },
      {
        icon: Palette,
        title: "Graphic Design",
        description: "Social creatives, brand assets and print collateral that look the part.",
      },
    ],
  },
  {
    id: "software-development",
    title: "Software Development",
    description:
      "Web and mobile products engineered to scale, including health-tech built around real clinical workflows.",
    icon: CodeXml,
    subServices: [
      {
        icon: Globe,
        title: "Web Development",
        description: "Fast, accessible websites and web apps built with modern frameworks.",
      },
      {
        icon: Smartphone,
        title: "Mobile Apps",
        description: "Cross-platform iOS and Android apps with a native feel.",
      },
      {
        icon: HeartPulse,
        title: "Health-Tech Solutions",
        description: "Booking, patient management and telehealth tools for clinics.",
      },
      {
        icon: PenTool,
        title: "UI/UX Design",
        description: "Research-led interfaces and prototypes that users understand instantly.",
      },
    ],
  },
];

export const pricingTiers: PricingTier[] = [
  {
    name: "Starter",
    price: "Rs 15,000",
    period: "/mo",
    description: "For small businesses taking their first confident steps online.",
    features: [
      "Social media management on 2 platforms",
      "12 designed posts per month",
      "Basic SEO setup",
      "Monthly performance report",
      "Email support",
    ],
    cta: { label: "Get Started", href: "/contact" },
  },
  {
    name: "Professional",
    price: "Rs 45,000",
    period: "/mo",
    description: "For growing brands ready to scale with content and paid media.",
    features: [
      "Everything in Starter",
      "Social media management on 4 platforms",
      "4 short-form videos per month",
      "Paid ads management",
      "SEO and content marketing",
      "Bi-weekly strategy calls",
    ],
    cta: { label: "Get Started", href: "/contact" },
    featured: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "For organisations that need a complete digital team on call.",
    features: [
      "Everything in Professional",
      "Custom web or app development",
      "Dedicated project manager",
      "Health-tech integrations",
      "Priority support",
    ],
    cta: { label: "Contact Sales", href: "/contact" },
  },
];

export const whyWorkWithUs = [
  "Dedicated project manager",
  "Agile development cycle",
  "Transparent pricing",
  "Post‑launch support",
  "Scalable architecture",
  "Cross‑platform expertise",
];
