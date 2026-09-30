import type { LucideIcon } from "lucide-react";
import type { ChipTone, SurfaceTone } from "../types";
import { cn } from "../utils";
import { IconChip } from "./IconChip";

type FeatureCardProps = {
  icon: LucideIcon;
  title: string;
  description: string;
  tone?: ChipTone;
  surface?: SurfaceTone;
  className?: string;
};

export const FeatureCard = ({
  icon,
  title,
  description,
  tone = "mint",
  surface = "light",
  className,
}: FeatureCardProps) => {
  const isDark = surface === "dark";

  return (
    <article className={cn("h-full", isDark ? "card-dark" : "card", className)}>
      <IconChip icon={icon} tone={isDark ? "dark" : tone} />
      <h3 className={cn("mt-4", isDark && "text-white")}>{title}</h3>
      <p className={cn("mt-2 text-body-sm", isDark ? "text-white/65" : "text-muted")}>
        {description}
      </p>
    </article>
  );
};
