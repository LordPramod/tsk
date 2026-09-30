import { FeatureCard, Reveal, Section, SectionHeading } from "../../components";
import { teamRoles } from "../../constant";
import { chipToneAt } from "../../utils";

export const TeamRoles = () => (
  <Section id="team">
    <SectionHeading
      eyebrow="Our team"
      title="Meet the team"
      description="A compact, cross-functional team where every role stays close to the work."
      align="center"
    />
    <ul className="flex flex-wrap justify-center gap-5">
      {teamRoles.map((role, index) => (
        <li
          key={role.title}
          className="w-full sm:w-[calc((100%-20px)/2)] lg:w-[calc((100%-60px)/4)]"
        >
          <Reveal index={index % 4} className="h-full">
            <FeatureCard {...role} tone={chipToneAt(index)} />
          </Reveal>
        </li>
      ))}
    </ul>
  </Section>
);
