const companyLinks = [
  { label: "About", href: "#about" },
  { label: "Products", href: "#products" },
  { label: "Contact", href: "#contact" },
];

const serviceLinks = [
  { label: "Services", href: "#services" },
  { label: "Solutions", href: "#services" },
  { label: "Support", href: "#contact" },
];

const legalLinks = [
  { label: "Privacy Policy", href: "#" },
  { label: "Terms of Service", href: "#" },
  { label: "Cookies", href: "#" },
];

export const FooterLinks = ({
  title,
  links,
}: {
  title: string;
  links: { label: string; href: string }[];
}) => {
  return (
    <div>
      <h3 className="mb-5 text-sm font-semibold text-white">{title}</h3>

      <ul className="space-y-3">
        {links.map((link) => (
          <li key={link.label}>
            <a
              href={link.href}
              className="text-sm text-slate-400 transition-colors hover:text-white"
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default function Footer() {
  return (
    <footer className="bg-[#0B172A] text-white">
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-10">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-teal-400 to-teal-700 text-sm font-bold text-white">
                DC
              </div>

              <span className="text-lg font-bold">DC</span>
            </div>

            <p className="mt-5 max-w-xs text-sm leading-6 text-slate-400">
              Building thoughtful digital solutions that help businesses grow,
              connect, and move forward.
            </p>
          </div>

          {/* Company */}
          <FooterLinks title="Company" links={companyLinks} />

          {/* Services */}
          <FooterLinks title="Services" links={serviceLinks} />

          {/* Legal */}
          <FooterLinks title="Legal" links={legalLinks} />
        </div>

        <div className="mt-14 border-t border-white/10 pt-7 text-center">
          <p className="text-sm text-slate-500">
            © {new Date().getFullYear()} DC. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
