import { FeatureCard, IconChip, Reveal } from "../../components";
import type { ChipTone, ServiceCategory } from "../../types";
import { chipToneAt } from "../../utils";

type ServiceCategoryRowProps = {
  category: ServiceCategory;
  tone: ChipTone;
};

export const ServiceCategoryRow = ({ category, tone }: ServiceCategoryRowProps) => (
  <article
    id={category.id}
    className="grid gap-8 py-12 first:pt-0 last:pb-0 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:items-center lg:gap-16"
  >
    <div>
      <IconChip icon={category.icon} tone={tone} />
      <h2 className="mt-5">{category.title}</h2>
      <p className="mt-3 text-lede text-muted">{category.description}</p>
    </div>
    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
      {category.subServices.map((service, index) => (
        <Reveal key={service.title} index={index} className="h-full">
          <FeatureCard {...service} tone={chipToneAt(index)} />
        </Reveal>
      ))}
    </div>
  </article>
);
