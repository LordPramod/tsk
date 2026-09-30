import { IconChip, Reveal, Section, SectionHeading } from "../../components";
import { industries } from "../../constant";
import { chipToneAt } from "../../utils";

export const Industries = () => (
  <Section>
    <SectionHeading
      eyebrow="Industries"
      title="Who we work with"
      description="Sector experience that shortens the learning curve on every project."
      align="center"
    />
    <ul className="grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-6">
      {industries.map((industry, index) => (
        <li key={industry.name} className="h-full">
          <Reveal index={index} className="h-full">
            <div className="card flex h-full flex-col items-center gap-3 text-center">
              <IconChip icon={industry.icon} tone={chipToneAt(index)} />
              <h3>{industry.shortName}</h3>
            </div>
          </Reveal>
        </li>
      ))}
    </ul>
  </Section>
);
