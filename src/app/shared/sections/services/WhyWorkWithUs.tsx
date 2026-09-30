import { Check } from "lucide-react";
import { DarkSection, IconChip, Reveal } from "../../components";
import { whyWorkWithUs } from "../../constant";

export const WhyWorkWithUs = () => (
  <DarkSection
    eyebrow="Why us"
    title="Why work with us"
    description="A partner as invested in your results as you are, from the first sprint to long after launch."
    align="center"
  >
    <ul className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {whyWorkWithUs.map((item, index) => (
        <li key={item} className="h-full">
          <Reveal index={index} className="h-full">
            <div className="card-dark flex h-full items-center gap-4">
              <IconChip icon={Check} tone="dark" />
              <span className="font-heading text-[17px] font-semibold text-white">{item}</span>
            </div>
          </Reveal>
        </li>
      ))}
    </ul>
  </DarkSection>
);
