import { ButtonLink, CtaPanel } from "../../components";

export const ServicesCta = () => (
  <CtaPanel
    tone="navy"
    eyebrow="Get started"
    title="Let's find the right service for you"
    description="Tell us about your goals and we will recommend the right mix of marketing, content and technology."
  >
    <ButtonLink href="/contact" arrow>
      Book a Consultation
    </ButtonLink>
  </CtaPanel>
);
