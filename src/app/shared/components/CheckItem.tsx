import { Check } from "lucide-react";
import type { ReactNode } from "react";
import type { SurfaceTone } from "../types";
import { cn } from "../utils";

type CheckItemProps = {
  tone?: SurfaceTone;
  children: ReactNode;
};

export const CheckItem = ({ tone = "light", children }: CheckItemProps) => (
  <li className="flex items-start gap-3">
    <span
      aria-hidden="true"
      className={cn(
        "mt-0.5 grid size-5 shrink-0 place-items-center rounded-full",
        tone === "dark" ? "bg-gold/15 text-gold" : "bg-teal text-white",
      )}
    >
      <Check size={12} strokeWidth={3} />
    </span>
    <span
      className={cn("text-body-sm font-medium", tone === "dark" ? "text-white/85" : "text-ink")}
    >
      {children}
    </span>
  </li>
);
