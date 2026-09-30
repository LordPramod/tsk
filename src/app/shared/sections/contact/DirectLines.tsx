import { Mail } from "lucide-react";
import { IconChip, Reveal, Section, SectionHeading } from "../../components";
import { departments } from "../../constant";
import { chipToneAt } from "../../utils";

export const DirectLines = () => (
  <Section>
    <SectionHeading
      eyebrow="Direct lines"
      title="Reach the right team"
      description="Skip the queue and write straight to the team you need."
      align="center"
    />
    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
      {departments.map((department, index) => {
        const [mailbox, domain] = department.email.split("@");
        return (
          <Reveal key={department.name} index={index} className="h-full">
            <article className="card flex h-full flex-col items-start gap-4 sm:flex-row">
              <IconChip icon={department.icon} tone={chipToneAt(index)} />
              <div className="min-w-0">
                <h3>{department.name}</h3>
                <p className="mt-1 text-body-sm text-muted">{department.description}</p>
                <a
                  href={`mailto:${department.email}`}
                  className="mt-3 inline-flex items-center gap-2 text-sm font-semibold [overflow-wrap:anywhere] text-teal-dark transition-colors hover:text-teal-deep"
                >
                  <Mail size={16} aria-hidden="true" className="shrink-0" />
                  <span>
                    {mailbox}
                    <wbr />@{domain}
                  </span>
                </a>
              </div>
            </article>
          </Reveal>
        );
      })}
    </div>
  </Section>
);
