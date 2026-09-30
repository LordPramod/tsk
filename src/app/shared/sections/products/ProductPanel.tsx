import { ButtonLink, IconChip } from "../../components";
import type { ChipTone, Product } from "../../types";
import { chipBackground, cn } from "../../utils";
import { productPreviews } from "./previews";

type ProductPanelProps = {
  product: Product;
  tone: ChipTone;
};

export const ProductPanel = ({ product, tone }: ProductPanelProps) => {
  const Preview = productPreviews[product.id];

  return (
    <div className="page-enter grid grid-cols-1 items-center gap-10 rounded-card border border-line bg-white p-4 sm:p-6 dc:p-10 lg:grid-cols-2 lg:gap-14">
      <div>
        <div className="flex items-center gap-3">
          <IconChip icon={product.icon} tone={tone} />
          <p className="text-eyebrow font-semibold tracking-[0.02em] text-teal-dark uppercase">
            {product.category}
          </p>
        </div>
        <h2 className="mt-5">{product.name}</h2>
        <p className="mt-4 text-lede text-muted">{product.description}</p>

        <ul aria-label="Highlights" className="mt-6 flex flex-wrap gap-2">
          {product.tags.map((tag) => (
            <li
              key={tag}
              className="rounded-pill bg-chip-teal px-3 py-1 text-eyebrow font-semibold tracking-[0.02em] text-teal-dark uppercase"
            >
              {tag}
            </li>
          ))}
        </ul>

        <dl className="mt-8 grid grid-cols-3 gap-2 border-y border-line py-5 sm:gap-0 sm:divide-x sm:divide-line">
          {product.stats.map((stat) => (
            <div key={stat.label} className="flex min-w-0 flex-col-reverse sm:px-5 sm:first:pl-0 sm:last:pr-0">
              <dt className="text-caption font-medium text-muted">{stat.label}</dt>
              <dd className="font-heading text-lg leading-tight font-bold tracking-tight text-ink sm:text-2xl">
                {stat.value}
              </dd>
            </div>
          ))}
        </dl>

        <ButtonLink href={product.cta.href} arrow className="mt-8 w-full sm:w-auto">
          {product.cta.label}
        </ButtonLink>
      </div>

      <div className={cn("rounded-card p-3 sm:p-8", chipBackground[tone])}>
        <Preview />
      </div>
    </div>
  );
};
