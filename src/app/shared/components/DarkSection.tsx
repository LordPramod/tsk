import type { ReactNode } from "react";
import { Section, type SectionSpacing } from "./Section";
import { SectionHeading, type SectionHeadingProps } from "./SectionHeading";

type DarkSectionProps = Omit<SectionHeadingProps, "tone"> & {
  id?: string;
  spacing?: SectionSpacing;
  children?: ReactNode;
};

export const DarkSection = ({ id, spacing, children, ...heading }: DarkSectionProps) => (
  <Section id={id} tone="dark" spacing={spacing}>
    <SectionHeading tone="dark" {...heading} />
    {children}
  </Section>
);
