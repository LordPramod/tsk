import type { FooterLinkGroup } from "../types";

export const footerLinkGroups: FooterLinkGroup[] = [
  {
    title: "Company",
    links: [
      { label: "About Us", href: "/about" },
      { label: "Our Team", href: "/about#team" },
      { label: "Products", href: "/products" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Services",
    links: [
      { label: "Digital Marketing", href: "/services#digital-marketing" },
      { label: "Content Creation", href: "/services#content-creation" },
      { label: "Software Development", href: "/services#software-development" },
      { label: "Pricing", href: "/services#pricing" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy Policy", href: "#" },
      { label: "Terms of Service", href: "#" },
      { label: "Cookie Policy", href: "#" },
    ],
  },
];
