import { Section } from "../../components";
import { serviceCategories } from "../../constant";
import { chipToneAt } from "../../utils";
import { ServiceCategoryRow } from "./ServiceCategoryRow";

export const ServiceCategories = () => (
  <Section>
    <div className="divide-y divide-line">
      {serviceCategories.map((category, index) => (
        <ServiceCategoryRow key={category.id} category={category} tone={chipToneAt(index)} />
      ))}
    </div>
  </Section>
);
