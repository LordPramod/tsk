import { DarkSection, FeatureCard, Reveal } from "../../components";
import { qualityCommitments } from "../../constant";

export const QualityTrust = () => (
  <DarkSection
    eyebrow="Quality & trust"
    title="Committed to quality & trust"
    description="The standards behind every campaign, product and line of code we deliver."
    align="center"
  >
    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
      {qualityCommitments.map((commitment, index) => (
        <Reveal key={commitment.title} index={index} className="h-full">
          <FeatureCard {...commitment} surface="dark" />
        </Reveal>
      ))}
    </div>
  </DarkSection>
);
