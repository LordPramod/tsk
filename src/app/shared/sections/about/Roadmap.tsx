import { DarkSection, Reveal } from "../../components";
import { roadmapMilestones } from "../../constant";
import { cn } from "../../utils";

export const Roadmap = () => (
  <DarkSection
    eyebrow="Our journey"
    title="The road so far"
    description="From a shared idea to a registered company, one milestone at a time."
    align="center"
  >
    <ol className="relative mx-auto max-w-[920px]">
      <span
        aria-hidden="true"
        className="absolute inset-y-0 left-[11px] w-0.5 rounded-full bg-navy-border dc:left-1/2 dc:-translate-x-1/2"
      />
      {roadmapMilestones.map((milestone, index) => {
        const isLeft = index % 2 === 0;
        return (
          <li
            key={milestone.title}
            className="relative grid pb-8 pl-10 last:pb-0 dc:grid-cols-2 dc:gap-16 dc:pl-0"
          >
            <span
              aria-hidden="true"
              className="absolute top-7 left-[5px] size-3.5 rounded-full bg-leaf ring-4 ring-navy dc:left-1/2 dc:-translate-x-1/2"
            />
            <div className={cn(isLeft ? "dc:col-start-1 dc:text-right" : "dc:col-start-2")}>
              <Reveal>
                <article className="card-dark">
                  <span className="inline-block rounded-pill bg-gold px-3 py-1 text-eyebrow font-semibold tracking-[0.02em] text-navy">
                    {milestone.year}
                  </span>
                  <h3 className="mt-3 text-white">{milestone.title}</h3>
                  <p className="mt-2 text-body-sm text-white/65">{milestone.description}</p>
                </article>
              </Reveal>
            </div>
          </li>
        );
      })}
    </ol>
  </DarkSection>
);
