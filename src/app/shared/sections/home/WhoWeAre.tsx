import { ButtonLink, CheckItem, Eyebrow, FeatureCard, Reveal, Section } from "../../components";
import { serviceTeasers, whoWeAreChecklist } from "../../constant";
import { chipToneAt } from "../../utils";

export const WhoWeAre = () => (
  <Section>
    <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
      <div>
        <Eyebrow>Who we are</Eyebrow>
        <h2 className="mt-4">A Chautari where ideas meet execution</h2>
        <p className="mt-4 text-lede text-muted">
          A chautari is the stone resting place found along Nepal&apos;s trails, where travellers
          stop to share stories and ideas. Digital Chautari was started in that spirit — a place
          where marketers, designers and engineers sit at the same table instead of working in
          silos.
        </p>
        <p className="mt-3 text-lede text-muted">
          Today that same spirit drives everything we ship, from campaigns to full-stack
          health-tech products, for clients across Nepal and beyond.
        </p>
        <ul className="mt-6 grid grid-cols-2 gap-x-4 gap-y-3">
          {whoWeAreChecklist.map((item) => (
            <CheckItem key={item}>{item}</CheckItem>
          ))}
        </ul>
        <ButtonLink href="/about#team" arrow className="mt-8">
          Meet the Team
        </ButtonLink>
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        {serviceTeasers.map((service, index) => (
          <Reveal key={service.title} index={index} className="h-full">
            <FeatureCard {...service} tone={chipToneAt(index)} />
          </Reveal>
        ))}
      </div>
    </div>
  </Section>
);
