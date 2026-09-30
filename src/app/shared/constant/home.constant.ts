import {
  BriefcaseBusiness,
  Clapperboard,
  CodeXml,
  Cpu,
  Eye,
  Handshake,
  HeartPulse,
  Layers,
  MapPin,
  Megaphone,
  Palette,
  PenTool,
  RefreshCw,
  Rocket,
  Search,
  ShieldCheck,
  Smile,
  Sparkles,
  TrendingUp,
  Users,
} from "lucide-react";
import type { BlogPost, Feature, Stat, Testimonial } from "../types";

export const heroStats: Stat[] = [
  { value: "3", label: "Products", icon: Layers },
  { value: "6+", label: "Team Members", icon: Users },
  { value: "100%", label: "Commitment", icon: ShieldCheck },
];

export const featureHighlights: Feature[] = [
  {
    icon: TrendingUp,
    title: "Growth‑Driven",
    description:
      "Every campaign and product is measured against one question: did it move your numbers?",
  },
  {
    icon: Sparkles,
    title: "Creative‑First",
    description:
      "Strategy and storytelling come first, so the work feels unmistakably like your brand.",
  },
  {
    icon: Cpu,
    title: "Tech‑Powered",
    description:
      "Modern engineering and clear data sit under the hood of everything we ship.",
  },
  {
    icon: Handshake,
    title: "Client‑Centric",
    description:
      "One dedicated team, direct communication and honest timelines from kickoff to launch.",
  },
];

export const whoWeAreChecklist = [
  "Creative Strategy",
  "Brand Storytelling",
  "Full‑Stack Engineering",
  "Health‑Tech Expertise",
];

export const serviceTeasers: Feature[] = [
  {
    icon: Megaphone,
    title: "Digital Marketing",
    description: "SEO, paid ads and analytics that turn attention into growth.",
  },
  {
    icon: Clapperboard,
    title: "Content Creation",
    description: "Photo, video and social content built for engagement.",
  },
  {
    icon: CodeXml,
    title: "Software Development",
    description: "Full-stack web and health-tech products, built to scale.",
  },
  {
    icon: Palette,
    title: "Branding & Design",
    description: "Identity systems that make a company instantly recognizable.",
  },
];

export const impactStats: Stat[] = [
  { value: "250+", label: "Projects Delivered", icon: BriefcaseBusiness },
  { value: "40+", label: "Happy Clients", icon: Smile },
  { value: "1M+", label: "Content Views", icon: Eye },
  { value: "98%", label: "Client Retention", icon: RefreshCw },
];

export const processSteps: Feature[] = [
  {
    icon: Search,
    title: "Discover",
    description:
      "We learn your business, audience and goals, then agree on what success looks like.",
  },
  {
    icon: PenTool,
    title: "Design",
    description:
      "Strategy, creative direction and prototypes, refined with you before anything is built.",
  },
  {
    icon: CodeXml,
    title: "Develop",
    description:
      "Our team builds, tests and produces every asset, with weekly check-ins along the way.",
  },
  {
    icon: Rocket,
    title: "Deliver",
    description:
      "We launch, measure the results and keep improving with post-launch support.",
  },
];

export const testimonials: Testimonial[] = [
  {
    quote:
      "Digital Chautari rebuilt our online store and ran our launch campaign. For the first time we can see exactly which channels bring in orders, and sales have grown every month since.",
    name: "Anisha Shrestha",
    role: "Founder",
    company: "Kathmandu Crafts Co.",
  },
  {
    quote:
      "Their content team captured our lodges better than any agency we have worked with. Instagram is now our fastest-growing source of direct bookings.",
    name: "Tenzing Sherpa",
    role: "Marketing Manager",
    company: "Himalayan Trails Lodge",
  },
  {
    quote:
      "They understood both the clinical side and the technology. Patients find booking easier, and our front desk spends far less time on the phone.",
    name: "Dr. Sarita Karki",
    role: "Clinic Director",
    company: "CareWell Physio Centre",
  },
];

export const blogPosts: BlogPost[] = [
  {
    title: "Local SEO in Nepal: getting found by customers near you",
    excerpt:
      "A practical checklist for your Google Business Profile, local keywords and reviews that bring nearby customers to your door.",
    category: "Digital Marketing",
    publishedAt: "2026-09-18",
    readTime: "5 min read",
    icon: MapPin,
  },
  {
    title: "Short-form video that actually sells",
    excerpt:
      "How to plan Reels and short videos that move viewers from watching to buying, without a big production budget.",
    category: "Content Creation",
    publishedAt: "2026-09-04",
    readTime: "4 min read",
    icon: Clapperboard,
  },
  {
    title: "Why home physiotherapy is going digital",
    excerpt:
      "How online booking and remote progress tracking are making quality physiotherapy easier to access across Nepal.",
    category: "Health-Tech",
    publishedAt: "2026-08-21",
    readTime: "6 min read",
    icon: HeartPulse,
  },
];
