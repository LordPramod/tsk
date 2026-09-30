import { Star } from "lucide-react";
import type { Testimonial } from "../../types";

const RATING = 5;

const initialsOf = (name: string) =>
  name
    .replace(/^Dr\.\s*/, "")
    .split(" ")
    .map((part) => part[0])
    .slice(0, 2)
    .join("");

export const TestimonialCard = ({ testimonial }: { testimonial: Testimonial }) => (
  <figure className="card flex h-full flex-col">
    <div role="img" aria-label={`Rated ${RATING} out of 5`} className="flex gap-1 text-gold">
      {Array.from({ length: RATING }, (_, index) => (
        <Star key={index} size={16} fill="currentColor" strokeWidth={0} aria-hidden="true" />
      ))}
    </div>
    <blockquote className="mt-4 flex-1 text-body-sm text-ink">
      <p>“{testimonial.quote}”</p>
    </blockquote>
    <figcaption className="mt-6 flex items-center gap-3 border-t border-line pt-5">
      <span
        aria-hidden="true"
        className="grid size-10 shrink-0 place-items-center rounded-full bg-chip-teal font-heading text-sm font-semibold text-teal-dark"
      >
        {initialsOf(testimonial.name)}
      </span>
      <span className="flex min-w-0 flex-col">
        <span className="text-sm font-semibold text-ink">{testimonial.name}</span>
        <span className="text-caption font-medium text-muted">{testimonial.role}</span>
        <span className="text-caption font-medium text-muted">{testimonial.company}</span>
      </span>
    </figcaption>
  </figure>
);
