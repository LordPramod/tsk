import type { SurfaceTone } from "../types";
import { cn } from "../utils";
import { Eyebrow } from "./Eyebrow";

export type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  tone?: SurfaceTone;
};

export const SectionHeading = ({
  eyebrow,
  title,
  description,
  align = "left",
  tone = "light",
}: SectionHeadingProps) => (
  <div
    className={cn("mb-10 max-w-[640px] last:mb-0", align === "center" && "mx-auto text-center")}
  >
    {eyebrow && <Eyebrow tone={tone}>{eyebrow}</Eyebrow>}
    <h2 className={cn(eyebrow && "mt-4", tone === "dark" && "text-white")}>{title}</h2>
    {description && (
      <p className={cn("mt-3 text-lede", tone === "dark" ? "text-white/70" : "text-muted")}>
        {description}
      </p>
    )}
  </div>
);
