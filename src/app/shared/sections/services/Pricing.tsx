import { Reveal, Section, SectionHeading } from "../../components";
import { pricingTiers } from "../../constant";
import { PricingCard } from "./PricingCard";

export const Pricing = () => (
  <Section id="pricing">
    <SectionHeading
      eyebrow="Pricing"
      title="Simple, transparent pricing"
      description="Clear monthly plans that grow with your business, each with a dedicated point of contact."
      align="center"
    />
    <div className="mx-auto grid max-w-[480px] grid-cols-1 gap-5 lg:max-w-none lg:grid-cols-3">
      {pricingTiers.map((tier, index) => (
        <Reveal key={tier.name} index={index} className="h-full">
          <PricingCard tier={tier} />
        </Reveal>
      ))}
    </div>
  </Section>
);
