import { IconChip, Reveal, Section } from "../../components";
import { contactDetails } from "../../constant";
import { chipToneAt } from "../../utils";

export const ContactInfo = () => (
  <Section spacing="tight">
    <h2 className="sr-only">Contact information</h2>
    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
      {contactDetails.map((detail, index) => (
        <Reveal key={detail.label} index={index} className="h-full">
          <article className="card h-full">
            <IconChip icon={detail.icon} tone={chipToneAt(index)} />
            <h3 className="mt-4">{detail.label}</h3>
            <p className="mt-1 text-body-sm [overflow-wrap:anywhere] text-muted">
              {detail.href ? (
                <a
                  href={detail.href}
                  className="font-medium text-teal-dark transition-colors hover:text-teal-deep"
                >
                  {detail.value}
                </a>
              ) : (
                detail.value
              )}
            </p>
          </article>
        </Reveal>
      ))}
    </div>
  </Section>
);
