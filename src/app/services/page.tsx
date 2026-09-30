import type { Metadata } from "next";
import {
  Industries,
  Pricing,
  ServiceCategories,
  ServicesCta,
  ServicesHero,
  WhyWorkWithUs,
} from "../shared/sections/services";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Digital marketing, content creation and software development services from Digital Chautari in Kathmandu, Nepal.",
};

export default function ServicesPage() {
  return (
    <>
      <ServicesHero />
      <ServiceCategories />
      <Pricing />
      <Industries />
      <WhyWorkWithUs />
      <ServicesCta />
    </>
  );
}
