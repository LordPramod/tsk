import type { ReactNode } from "react";
import { cn } from "../utils";
import { ButtonGroup } from "./ButtonGroup";
import { Eyebrow } from "./Eyebrow";
import { Section } from "./Section";

type CtaPanelProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  tone?: "gradient" | "navy";
  children: ReactNode;
};

export const CtaPanel = ({
  eyebrow,
  title,
  description,
  tone = "gradient",
  children,
}: CtaPanelProps) => (
  <Section>
    <div
      className={cn(
        "rounded-card px-6 py-14 text-center text-white dc:px-12 dc:py-16 [&_:focus-visible]:outline-white",
        tone === "gradient" ? "bg-cta-gradient" : "bg-navy",
      )}
    >
      {eyebrow && <Eyebrow tone="dark">{eyebrow}</Eyebrow>}
      <h2 className={cn("mx-auto max-w-[620px]", eyebrow && "mt-4")}>{title}</h2>
      {description && (
        <p
          className={cn(
            "mx-auto mt-4 max-w-[540px] text-lede",
            tone === "navy" && "text-white/70",
          )}
        >
          {description}
        </p>
      )}
      <ButtonGroup align="center" className="mt-8">
        {children}
      </ButtonGroup>
    </div>
  </Section>
);
