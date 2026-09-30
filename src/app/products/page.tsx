import type { Metadata } from "next";
import { PhysioSpotlight, ProductShowcase, ProductsHero } from "../shared/sections/products";

export const metadata: Metadata = {
  title: "Products",
  description:
    "Eco Creative Marketing Agency, One Content Creation Studio and Physio@Home — the three ventures of Digital Chautari.",
};

export default function ProductsPage() {
  return (
    <>
      <ProductsHero />
      <ProductShowcase />
      <PhysioSpotlight />
    </>
  );
}
