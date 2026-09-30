import { Clapperboard, HeartPulse, Leaf } from "lucide-react";
import type { Product } from "../types";

export const products: Product[] = [
  {
    id: "eco-creative",
    name: "Eco Creative Marketing Agency",
    category: "Digital Marketing",
    icon: Leaf,
    summary:
      "Full-funnel marketing for brands that want sustainable growth — strategy, SEO, social and performance ads under one roof.",
    description:
      "Eco Creative is our full-service marketing agency for brands that want growth that lasts. We plan every campaign around a real business goal, then run SEO, social media and paid advertising from one team with one clear report.",
    tags: ["SEO & SEM", "Social Media", "Paid Advertising", "Analytics"],
    stats: [
      { value: "120+", label: "Campaigns launched" },
      { value: "25+", label: "Brands served" },
      { value: "3.2×", label: "Average ad return" },
    ],
    cta: { label: "Work with Eco Creative", href: "/contact" },
  },
  {
    id: "one-content-studio",
    name: "One Content Creation Studio",
    category: "Content Studio",
    icon: Clapperboard,
    summary:
      "A production studio for photo, video and social content that stops the scroll and builds lasting brand recall.",
    description:
      "Our in-house studio plans, shoots and edits content for brands that want to stand out in the feed. From product photography to short-form video, every asset is made for the platform it will live on.",
    tags: ["Video Production", "Photography", "Reels & Shorts", "Copywriting"],
    stats: [
      { value: "500+", label: "Assets produced" },
      { value: "1M+", label: "Content views" },
      { value: "48h", label: "Average turnaround" },
    ],
    cta: { label: "Book a Shoot", href: "/contact" },
  },
  {
    id: "physio-at-home",
    name: "Physio@Home",
    category: "Health-Tech",
    icon: HeartPulse,
    summary:
      "A health-tech platform that brings licensed physiotherapy to patients' homes, with booking and recovery tracking in one place.",
    description:
      "Physio@Home connects patients with licensed physiotherapists for sessions at home. Patients book visits, follow personalised exercise plans and track their recovery, while therapists manage schedules and progress notes in one place.",
    tags: ["Home Visits", "Recovery Plans", "Progress Tracking", "Therapist Dashboard"],
    stats: [
      { value: "15+", label: "Licensed therapists" },
      { value: "1,200+", label: "Sessions booked" },
      { value: "4.9", label: "Patient rating" },
    ],
    cta: { label: "Request a Demo", href: "/contact" },
  },
];
