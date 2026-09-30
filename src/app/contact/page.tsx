import type { Metadata } from "next";
import { ContactBlock, ContactHero, ContactInfo, DirectLines } from "../shared/sections/contact";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Digital Chautari in Kathmandu, Nepal — talk to our marketing, content, software or business development teams.",
};

export default function ContactPage() {
  return (
    <>
      <ContactHero />
      <ContactInfo />
      <DirectLines />
      <ContactBlock />
    </>
  );
}
