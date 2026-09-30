import type { Metadata } from "next";
import {
  AboutCta,
  AboutHero,
  CompanyValues,
  MissionVision,
  OurStory,
  QualityTrust,
  Roadmap,
  TeamRoles,
} from "../shared/sections/about";

export const metadata: Metadata = {
  title: "About",
  description:
    "Meet the Kathmandu team behind Digital Chautari — our story, mission, values and the road so far.",
};

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <OurStory />
      <MissionVision />
      <CompanyValues />
      <QualityTrust />
      <TeamRoles />
      <Roadmap />
      <AboutCta />
    </>
  );
}
