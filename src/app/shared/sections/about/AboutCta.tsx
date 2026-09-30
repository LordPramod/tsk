import { ButtonLink, CtaPanel } from "../../components";

export const AboutCta = () => (
  <CtaPanel
    tone="navy"
    eyebrow="Join us"
    title="Want to join our journey?"
    description="Whether you are a future client, partner or teammate, we would love to hear from you."
  >
    <ButtonLink href="/contact" arrow>
      Get in Touch
    </ButtonLink>
  </CtaPanel>
);
