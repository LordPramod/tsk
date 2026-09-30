import type { ReactNode } from "react";
import { cn } from "../utils";

type ButtonGroupProps = {
  align?: "left" | "center";
  className?: string;
  children: ReactNode;
};

export const ButtonGroup = ({ align = "left", className, children }: ButtonGroupProps) => (
  <div
    className={cn(
      "flex flex-col gap-3 sm:flex-row sm:flex-wrap",
      align === "center" && "sm:justify-center",
      className,
    )}
  >
    {children}
  </div>
);
