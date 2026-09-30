import type { LucideIcon } from "lucide-react";
import type { ChipTone } from "../types";
import { chipBackground, cn } from "../utils";

export type IconChipTone = ChipTone | "dark";

type IconChipProps = {
  icon: LucideIcon;
  tone?: IconChipTone;
  className?: string;
};

export const IconChip = ({ icon: Icon, tone = "mint", className }: IconChipProps) => (
  <span
    aria-hidden="true"
    className={cn(
      "icon-chip",
      tone === "dark" ? "bg-gold/10 text-gold" : cn(chipBackground[tone], "text-teal"),
      className,
    )}
  >
    <Icon size={20} strokeWidth={1.75} />
  </span>
);
