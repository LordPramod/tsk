import { DarkSection, StatBar } from "../../components";
import { impactStats } from "../../constant";

export const ImpactStats = () => (
  <DarkSection
    eyebrow="Our impact"
    title="Results that speak for themselves"
    description="Numbers from the brands, creators and clinics we have partnered with so far."
    align="center"
  >
    <StatBar stats={impactStats} tone="dark" />
  </DarkSection>
);
