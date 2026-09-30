import type { ReactNode } from "react";
import { cn } from "../utils";
import { ButtonGroup } from "./ButtonGroup";
import { Eyebrow } from "./Eyebrow";

type HeroProps = {
  eyebrow: string;
  title: string;
  highlight: string;
  lede: string;
  align?: "left" | "center";
  actions?: ReactNode;
  children?: ReactNode;
};

const HighlightedTitle = ({ title, highlight }: Pick<HeroProps, "title" | "highlight">) => {
  const start = title.indexOf(highlight);
  if (start === -1) return title;

  const end = start + highlight.length;
  return (
    <>
      {title.slice(0, start)}
      <span className="gradient-text">{highlight}</span>
      {title.slice(end)}
    </>
  );
};

export const Hero = ({
  eyebrow,
  title,
  highlight,
  lede,
  align = "left",
  actions,
  children,
}: HeroProps) => {
  const isCentered = align === "center";

  return (
    <section className="section-hero">
      <div className="container-dc">
        <div className={cn("max-w-[700px]", isCentered && "mx-auto text-center")}>
          <Eyebrow>{eyebrow}</Eyebrow>
          <h1 className="mt-5">
            <HighlightedTitle title={title} highlight={highlight} />
          </h1>
          <p className="mt-5 text-lede text-muted">{lede}</p>
          {actions && (
            <ButtonGroup align={align} className="mt-8">
              {actions}
            </ButtonGroup>
          )}
        </div>
        {children && <div className="mt-12">{children}</div>}
      </div>
    </section>
  );
};
