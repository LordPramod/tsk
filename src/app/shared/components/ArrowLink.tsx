import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";
import type { SurfaceTone } from "../types";
import { cn } from "../utils";

type ArrowLinkProps = Omit<ComponentProps<typeof Link>, "className" | "children"> & {
  tone?: SurfaceTone;
  className?: string;
  children: ReactNode;
};

export const ArrowLink = ({ tone = "light", className, children, ...linkProps }: ArrowLinkProps) => (
  <Link
    className={cn(
      "group inline-flex items-center gap-1.5 text-sm font-semibold transition-colors",
      tone === "dark" ? "text-gold hover:text-white" : "text-teal-dark hover:text-teal-deep",
      className,
    )}
    {...linkProps}
  >
    {children}
    <span
      aria-hidden="true"
      className="transition-transform duration-150 motion-safe:group-hover:translate-x-0.5"
    >
      →
    </span>
  </Link>
);
