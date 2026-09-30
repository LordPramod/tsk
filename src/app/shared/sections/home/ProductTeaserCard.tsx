import { ArrowLink, IconChip } from "../../components";
import type { ChipTone, Product } from "../../types";

type ProductTeaserCardProps = {
  product: Product;
  tone: ChipTone;
};

export const ProductTeaserCard = ({ product, tone }: ProductTeaserCardProps) => (
  <article className="card flex h-full flex-col">
    <IconChip icon={product.icon} tone={tone} />
    <p className="mt-5 text-eyebrow font-semibold tracking-[0.02em] text-teal-dark uppercase">
      {product.category}
    </p>
    <h3 className="mt-1.5">{product.name}</h3>
    <p className="mt-2 flex-1 text-body-sm text-muted">{product.summary}</p>
    <ArrowLink href={`/products#${product.id}`} className="mt-5 self-start">
      Learn more<span className="sr-only"> about {product.name}</span>
    </ArrowLink>
  </article>
);
