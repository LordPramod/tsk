import { Reveal, Section, SectionHeading } from "../../components";
import { products } from "../../constant";
import { chipToneAt } from "../../utils";
import { ProductTeaserCard } from "./ProductTeaserCard";

export const ProductsTeaser = () => (
  <Section>
    <SectionHeading
      eyebrow="Our ventures"
      title="Three ventures, one vision"
      description="Three focused businesses, connected by one commitment to creativity, technology and meaningful impact."
      align="center"
    />
    <div className="grid grid-cols-1 gap-5 dc:grid-cols-3">
      {products.map((product, index) => (
        <Reveal key={product.id} index={index} className="h-full">
          <ProductTeaserCard product={product} tone={chipToneAt(index)} />
        </Reveal>
      ))}
    </div>
  </Section>
);
