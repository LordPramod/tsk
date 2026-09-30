import { FeatureCard, Reveal, Section } from "../../components";
import { featureHighlights } from "../../constant";
import { chipToneAt } from "../../utils";

export const FeatureStrip = () => (
  <Section spacing="tight">
    <h2 className="sr-only">Why Digital Chautari</h2>
    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
      {featureHighlights.map((feature, index) => (
        <Reveal key={feature.title} index={index} className="h-full">
          <FeatureCard {...feature} tone={chipToneAt(index)} />
        </Reveal>
      ))}
    </div>
  </Section>
);
