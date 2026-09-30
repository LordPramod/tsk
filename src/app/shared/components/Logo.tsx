import { siteConfig } from "../constant";
import type { SurfaceTone } from "../types";
import { cn } from "../utils";

type LogoProps = {
  tone?: SurfaceTone;
};

export const Logo = ({ tone = "light" }: LogoProps) => (
  <span className="flex items-center gap-3">
    <span
      aria-hidden="true"
      className="grid size-10 shrink-0 place-items-center rounded-chip bg-linear-to-br from-teal to-teal-dark font-heading text-[15px] font-extrabold tracking-tight text-white"
    >
      {siteConfig.mark}
    </span>
    <span className="flex flex-col">
      <span
        className={cn(
          "font-heading text-[17px] leading-tight font-bold tracking-tight",
          tone === "dark" ? "text-white" : "text-ink",
        )}
      >
        {siteConfig.name}
      </span>
      <span
        className={cn(
          "text-[11px] leading-tight font-medium",
          tone === "dark" ? "text-white/55" : "text-muted",
        )}
      >
        {siteConfig.tagline}
      </span>
    </span>
  </span>
);
