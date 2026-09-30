import { FeatureCard, Reveal, Section, SectionHeading } from "../../components";
import { companyValues } from "../../constant";
import { chipToneAt } from "../../utils";

export const CompanyValues = () => (
  <Section>
    <SectionHeading
      eyebrow="Our values"
      title="What we stand for"
      description="Four values guide how we work with clients, with partners and with each other."
      align="center"
    />
    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
      {companyValues.map((value, index) => (
        <Reveal key={value.title} index={index} className="h-full">
          <FeatureCard {...value} tone={chipToneAt(index)} />
        </Reveal>
      ))}
    </div>
  </Section>
);
