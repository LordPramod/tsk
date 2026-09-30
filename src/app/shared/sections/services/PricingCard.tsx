import { ButtonLink, CheckItem } from "../../components";
import type { PricingTier } from "../../types";
import { cn } from "../../utils";

export const PricingCard = ({ tier }: { tier: PricingTier }) => {
  const isFeatured = Boolean(tier.featured);

  return (
    <article className={cn("flex h-full flex-col", isFeatured ? "card-dark" : "card")}>
      <div className="flex items-center justify-between gap-3">
        <h3 className={cn(isFeatured && "text-white")}>{tier.name}</h3>
        {isFeatured && (
          <span className="rounded-pill bg-gold px-3 py-1 text-eyebrow font-semibold tracking-[0.02em] text-navy uppercase">
            Most Popular
          </span>
        )}
      </div>
      <p className={cn("mt-2 text-body-sm", isFeatured ? "text-white/65" : "text-muted")}>
        {tier.description}
      </p>
      <p className="mt-6 flex items-baseline gap-1">
        <span
          className={cn(
            "font-heading text-[34px] leading-none font-bold tracking-tight",
            isFeatured ? "text-white" : "text-ink",
          )}
        >
          {tier.price}
        </span>
        {tier.period && (
          <>
            <span aria-hidden="true" className={cn("text-sm", isFeatured ? "text-white/60" : "text-muted")}>
              {tier.period}
            </span>
            <span className="sr-only">per month</span>
          </>
        )}
      </p>
      <ul
        className={cn(
          "mt-6 flex-1 space-y-3 border-t pt-6",
          isFeatured ? "border-navy-border" : "border-line",
        )}
      >
        {tier.features.map((feature) => (
          <CheckItem key={feature} tone={isFeatured ? "dark" : "light"}>
            {feature}
          </CheckItem>
        ))}
      </ul>
      <ButtonLink
        href={tier.cta.href}
        variant={isFeatured ? "primary" : "ghost"}
        className="mt-8 w-full"
      >
        {tier.cta.label}
        <span className="sr-only"> with the {tier.name} plan</span>
      </ButtonLink>
    </article>
  );
};
