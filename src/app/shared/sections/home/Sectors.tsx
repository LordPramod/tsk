import { FeatureCard, Reveal, Section, SectionHeading } from "../../components";
import { industries } from "../../constant";
import { chipToneAt } from "../../utils";

export const Sectors = () => (
  <Section>
    <SectionHeading
      eyebrow="Industries"
      title="Sectors we serve"
      description="From clinics to classrooms, we shape strategy, content and software around the realities of each industry."
      align="center"
    />
    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {industries.map((industry, index) => (
        <Reveal key={industry.name} index={index} className="h-full">
          <FeatureCard
            icon={industry.icon}
            title={industry.name}
            description={industry.description}
            tone={chipToneAt(index)}
          />
        </Reveal>
      ))}
    </div>
  </Section>
);
