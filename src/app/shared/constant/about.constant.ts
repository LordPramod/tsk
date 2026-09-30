import {
  Award,
  BadgeCheck,
  Compass,
  Flame,
  Globe,
  Handshake,
  Lightbulb,
  LockKeyhole,
  MapPinned,
  Megaphone,
  MonitorSmartphone,
  Server,
  Target,
  TrendingUp,
  Users,
  Workflow,
} from "lucide-react";
import type { Feature, RoadmapMilestone, StoryTile } from "../types";

export const storyParagraphs = [
  "Digital Chautari began in 2025 with a simple idea: the best digital work happens when marketers, storytellers and engineers share the same table — just like travellers resting together at a chautari.",
  "What started as a small creative team in Kathmandu has grown into a company with three ventures: a marketing agency, a content studio and a health-tech platform.",
  "Today we help businesses across Nepal turn ideas into campaigns, content and software that make a measurable difference.",
];

export const storyTiles: StoryTile[] = [
  { value: "2025", label: "Founded", surface: "teal" },
  { value: "3", label: "Products", surface: "navy" },
  { value: "Kathmandu", label: "HQ", surface: "white" },
  { value: "7+", label: "Team Members", surface: "gold" },
];

export const missionAndVision: Feature[] = [
  {
    icon: Target,
    title: "Our mission",
    description:
      "To help businesses across Nepal grow by bringing marketing, content and technology together, delivered with creativity, honesty and care.",
  },
  {
    icon: Compass,
    title: "Our vision",
    description:
      "To be Nepal's most trusted creative technology partner, and proof that world-class digital products can be built in Kathmandu.",
  },
];

export const companyValues: Feature[] = [
  {
    icon: Flame,
    title: "Passion",
    description: "We care about the work and the people it serves, and it shows in the details.",
  },
  {
    icon: Lightbulb,
    title: "Creativity",
    description: "Fresh ideas grounded in strategy, never creativity for its own sake.",
  },
  {
    icon: Award,
    title: "Excellence",
    description: "High standards in craft, code and communication on every project.",
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "One team with our clients, sharing knowledge, feedback and credit.",
  },
];

export const qualityCommitments: Feature[] = [
  {
    icon: BadgeCheck,
    title: "ISO 9001 Ready",
    description:
      "Documented delivery processes aligned with ISO 9001 quality-management principles.",
  },
  {
    icon: LockKeyhole,
    title: "Data Protection",
    description: "Secure development practices and careful handling of client and patient data.",
  },
  {
    icon: Globe,
    title: "Global Delivery",
    description: "Remote-friendly workflows for clients in Nepal and across time zones.",
  },
  {
    icon: MapPinned,
    title: "Pan‑Nepal Network",
    description: "Partners and creators across the country, from Kathmandu to Pokhara and beyond.",
  },
];

export const teamRoles: Feature[] = [
  {
    icon: Compass,
    title: "Founder & CEO",
    description: "Sets the vision and keeps every venture focused on real impact.",
  },
  {
    icon: Workflow,
    title: "Co‑Founder & COO",
    description: "Runs operations so projects ship on time and on budget.",
  },
  {
    icon: MonitorSmartphone,
    title: "Front‑End Developer",
    description: "Builds fast, accessible interfaces for web and mobile.",
  },
  {
    icon: Server,
    title: "Back‑End Developer",
    description: "Designs the APIs, data and infrastructure behind our products.",
  },
  {
    icon: Megaphone,
    title: "Marketing Lead",
    description: "Plans the campaigns and content that grow our clients' brands.",
  },
  {
    icon: TrendingUp,
    title: "Sales Executive",
    description: "Helps new clients find the right service and plan for their goals.",
  },
  {
    icon: Handshake,
    title: "Business Development Officer",
    description: "Builds partnerships that open new markets and opportunities.",
  },
];

export const roadmapMilestones: RoadmapMilestone[] = [
  {
    year: "2025",
    title: "The Idea",
    description:
      "A small team in Kathmandu sets out to bring marketing, content and technology under one roof.",
  },
  {
    year: "2025",
    title: "First Products",
    description:
      "Eco Creative Marketing Agency and One Content Creation Studio launch and start serving local brands.",
  },
  {
    year: "2026",
    title: "Health‑Tech Entry",
    description: "Physio@Home brings licensed physiotherapy to patients' homes.",
  },
  {
    year: "2026",
    title: "Company Registration",
    description:
      "Digital Chautari is formally registered, ready to scale across Nepal and beyond.",
  },
];
