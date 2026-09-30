import { Reveal, Section, SectionHeading } from "../../components";
import { testimonials } from "../../constant";
import { TestimonialCard } from "./TestimonialCard";

export const Testimonials = () => (
  <Section>
    <SectionHeading
      eyebrow="Testimonials"
      title="What our clients say"
      description="Brands, creators and clinics across Nepal trust us to turn their ideas into impact."
      align="center"
    />
    <div className="grid grid-cols-1 gap-5 lg:grid-cols-3">
      {testimonials.map((testimonial, index) => (
        <Reveal key={testimonial.name} index={index} className="h-full">
          <TestimonialCard testimonial={testimonial} />
        </Reveal>
      ))}
    </div>
  </Section>
);
