import { ButtonLink, Hero, StatBar } from "../../components";
import { heroStats } from "../../constant";

export const HomeHero = () => (
  <Hero
    eyebrow="🚀 Welcome to Digital Chautari"
    title="We build digital bridges between ideas and impact"
    highlight="digital bridges"
    lede="Digital Chautari is a creative technology company in Kathmandu, Nepal — bringing digital marketing, content creation and health-tech software together to help ambitious brands grow."
    actions={
      <>
        <ButtonLink href="/services" arrow>
          Explore Services
        </ButtonLink>
        <ButtonLink href="/products" variant="ghost">
          View Products
        </ButtonLink>
      </>
    }
  >
    <StatBar stats={heroStats} />
  </Hero>
);
