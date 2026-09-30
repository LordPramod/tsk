import type { Stat, SurfaceTone } from "../types";
import { cn } from "../utils";
import { IconChip, type IconChipTone } from "./IconChip";

type StatBarProps = {
  stats: Stat[];
  tone?: SurfaceTone;
  className?: string;
};

const toneStyles: Record<
  SurfaceTone,
  { surface: string; value: string; label: string; chip: IconChipTone }
> = {
  light: {
    surface: "border-line bg-white divide-line",
    value: "text-ink",
    label: "text-muted",
    chip: "mint",
  },
  dark: {
    surface: "border-navy-border bg-navy-card divide-navy-border",
    value: "text-white",
    label: "text-white/65",
    chip: "dark",
  },
};

export const StatBar = ({ stats, tone = "light", className }: StatBarProps) => {
  const styles = toneStyles[tone];

  return (
    <ul
      className={cn(
        "grid divide-y overflow-hidden rounded-card border dc:auto-cols-fr dc:grid-flow-col dc:divide-x dc:divide-y-0",
        styles.surface,
        className,
      )}
    >
      {stats.map((stat) => (
        <li
          key={stat.label}
          className="flex items-center gap-4 px-6 py-5 dc:flex-col dc:items-start dc:gap-3 lg:flex-row lg:items-center lg:gap-4"
        >
          <IconChip icon={stat.icon} tone={styles.chip} />
          <p className="flex flex-col">
            <span
              className={cn(
                "font-heading text-2xl leading-tight font-bold tracking-tight",
                styles.value,
              )}
            >
              {stat.value}
            </span>
            <span className={cn("text-sm", styles.label)}>{stat.label}</span>
          </p>
        </li>
      ))}
    </ul>
  );
};
