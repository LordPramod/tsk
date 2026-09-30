import { ButtonLink, CtaPanel } from "../../components";

export const HomeCta = () => (
  <CtaPanel
    title="Ready to build something extraordinary together?"
    description="Tell us about your idea and we will help you shape it into a campaign, product or platform that makes an impact."
  >
    <ButtonLink href="/contact" variant="ghost" arrow>
      Start a Project
    </ButtonLink>
    <ButtonLink href="/services" variant="inverse">
      View Services
    </ButtonLink>
  </CtaPanel>
);
