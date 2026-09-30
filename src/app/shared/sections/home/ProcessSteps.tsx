import { DarkSection, Reveal } from "../../components";
import { processSteps } from "../../constant";
import { ProcessStepCard } from "./ProcessStepCard";

export const ProcessSteps = () => (
  <DarkSection
    eyebrow="How we work"
    title="Our 4‑step process"
    description="A simple, transparent workflow that keeps you in the loop from the first call to launch day."
    align="center"
  >
    <ol className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
      {processSteps.map((step, index) => (
        <li key={step.title} className="h-full">
          <Reveal index={index} className="h-full">
            <ProcessStepCard step={step} number={index + 1} />
          </Reveal>
        </li>
      ))}
    </ol>
  </DarkSection>
);
