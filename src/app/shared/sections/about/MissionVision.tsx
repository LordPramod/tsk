import { IconChip, Reveal, Section } from "../../components";
import { missionAndVision } from "../../constant";
import { chipToneAt } from "../../utils";

export const MissionVision = () => (
  <Section spacing="tight">
    <h2 className="sr-only">Mission and vision</h2>
    <div className="grid grid-cols-1 gap-5 dc:grid-cols-2">
      {missionAndVision.map((item, index) => (
        <Reveal key={item.title} index={index} className="h-full">
          <article className="card h-full dc:p-8">
            <IconChip icon={item.icon} tone={chipToneAt(index)} />
            <h3 className="mt-5">{item.title}</h3>
            <p className="mt-3 text-lede text-muted">{item.description}</p>
          </article>
        </Reveal>
      ))}
    </div>
  </Section>
);
