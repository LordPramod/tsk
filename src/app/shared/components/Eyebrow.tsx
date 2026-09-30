import type { ReactNode } from "react";
import type { SurfaceTone } from "../types";
import { cn } from "../utils";

type EyebrowProps = {
  tone?: SurfaceTone;
  className?: string;
  children: ReactNode;
};

export const Eyebrow = ({ tone = "light", className, children }: EyebrowProps) => (
  <span
    className={cn("eyebrow", tone === "dark" ? "eyebrow-dark" : "eyebrow-light", className)}
  >
    {children}
  </span>
);
