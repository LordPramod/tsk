import Link from "next/link";
import { footerLinkGroups, siteConfig } from "../constant";
import type { FooterLinkGroup } from "../types";
import { Logo } from "./Logo";

const FooterLinks = ({ title, links }: FooterLinkGroup) => (
  <nav aria-label={title}>
    <h2 className="font-heading text-sm font-semibold tracking-normal text-white">{title}</h2>
    <ul className="mt-4 space-y-3">
      {links.map((link) => (
        <li key={link.label}>
          <Link
            href={link.href}
            className="text-sm text-white/60 transition-colors hover:text-white"
          >
            {link.label}
          </Link>
        </li>
      ))}
    </ul>
  </nav>
);

export const Footer = () => (
  <footer className="border-t border-navy-border bg-navy text-white">
    <div className="container-dc pt-16 pb-8">
      <div className="grid grid-cols-2 gap-x-6 gap-y-10 dc:grid-cols-[1.6fr_1fr_1fr_1fr]">
        <div className="col-span-2 dc:col-span-1">
          <Link href="/" className="inline-flex rounded-chip">
            <Logo tone="dark" />
          </Link>
          <p className="mt-5 max-w-[300px] text-sm leading-6 text-white/60">
            {siteConfig.footerBlurb}
          </p>
        </div>
        {footerLinkGroups.map((group) => (
          <FooterLinks key={group.title} {...group} />
        ))}
      </div>

      <div className="mt-12 border-t border-navy-border pt-6 text-center">
        <p className="text-caption font-medium text-white/50">
          © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
);
