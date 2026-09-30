import {
  Clapperboard,
  Clock,
  CodeXml,
  FileText,
  Handshake,
  Mail,
  MapPin,
  Megaphone,
  Phone,
  Zap,
} from "lucide-react";
import type { ContactDetail, Department, ResponseTime } from "../types";

export const contactDetails: ContactDetail[] = [
  { icon: MapPin, label: "Address", value: "Kathmandu, Nepal" },
  {
    icon: Mail,
    label: "Email",
    value: "hello@digitalchautari.example",
    href: "mailto:hello@digitalchautari.example",
  },
  { icon: Phone, label: "Phone", value: "+977 1-5550100", href: "tel:+97715550100" },
  { icon: Clock, label: "Business Hours", value: "Sun–Fri, 10:00 AM – 6:00 PM" },
];

export const departments: Department[] = [
  {
    icon: Megaphone,
    name: "Marketing",
    description: "Campaigns, SEO, social media and paid advertising.",
    email: "marketing@digitalchautari.example",
  },
  {
    icon: Clapperboard,
    name: "Content Studio",
    description: "Photo and video shoots, Reels and content production.",
    email: "studio@digitalchautari.example",
  },
  {
    icon: CodeXml,
    name: "Software Dev",
    description: "Websites, apps and health-tech product development.",
    email: "dev@digitalchautari.example",
  },
  {
    icon: Handshake,
    name: "Business Dev",
    description: "Partnerships, proposals and new business enquiries.",
    email: "business@digitalchautari.example",
  },
];

export const projectTypes = [
  "Digital Marketing",
  "Content Creation",
  "Software Development",
  "Health-Tech",
  "Branding & Design",
  "Other",
];

export const responseTimes: ResponseTime[] = [
  { icon: Mail, channel: "Email", time: "24h" },
  { icon: FileText, channel: "Proposals", time: "2–3 days" },
  { icon: Zap, channel: "Urgent", time: "Same day" },
];
