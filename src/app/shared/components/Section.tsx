import type { ReactNode } from "react";
import type { SurfaceTone } from "../types";
import { cn } from "../utils";

export type SectionSpacing = "default" | "tight";

const spacingClass: Record<SectionSpacing, string> = {
  default: "section",
  tight: "section-tight",
};

type SectionProps = {
  id?: string;
  tone?: SurfaceTone;
  spacing?: SectionSpacing;
  className?: string;
  children: ReactNode;
};

export const Section = ({
  id,
  tone = "light",
  spacing = "default",
  className,
  children,
}: SectionProps) => (
  <section
    id={id}
    className={cn(spacingClass[spacing], tone === "dark" && "bg-navy text-white", className)}
  >
    <div className="container-dc">{children}</div>
  </section>
);
