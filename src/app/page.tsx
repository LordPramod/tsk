import {
  BlogTeaser,
  FeatureStrip,
  HomeCta,
  HomeHero,
  ImpactStats,
  ProcessSteps,
  ProductsTeaser,
  Sectors,
  Testimonials,
  WhoWeAre,
} from "./shared/sections/home";

export default function HomePage() {
  return (
    <>
      <HomeHero />
      <FeatureStrip />
      <WhoWeAre />
      <ImpactStats />
      <ProductsTeaser />
      <Sectors />
      <ProcessSteps />
      <Testimonials />
      <BlogTeaser />
      <HomeCta />
    </>
  );
}
