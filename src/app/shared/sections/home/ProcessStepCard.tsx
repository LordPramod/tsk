import { IconChip } from "../../components";
import type { Feature } from "../../types";

type ProcessStepCardProps = {
  step: Feature;
  number: number;
};

export const ProcessStepCard = ({ step, number }: ProcessStepCardProps) => (
  <article className="card-dark h-full">
    <div className="flex items-start justify-between">
      <IconChip icon={step.icon} tone="dark" />
      <span
        aria-hidden="true"
        className="font-heading text-[28px] leading-none font-bold tracking-tight text-white/40"
      >
        {String(number).padStart(2, "0")}
      </span>
    </div>
    <h3 className="mt-5 text-white">{step.title}</h3>
    <p className="mt-2 text-body-sm text-white/65">{step.description}</p>
  </article>
);
