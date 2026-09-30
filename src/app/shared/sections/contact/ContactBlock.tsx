import { Section } from "../../components";
import { ContactAside } from "./ContactAside";
import { ContactForm } from "./ContactForm";

export const ContactBlock = () => (
  <Section>
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-[minmax(0,7fr)_minmax(0,5fr)] lg:gap-10">
      <div className="rounded-card border border-line bg-white p-6 dc:p-8">
        <h2>Send us a message</h2>
        <p className="mt-2 text-body-sm text-muted">
          Fill in the form and the right person will reply within 24 hours.
        </p>
        <div className="mt-8">
          <ContactForm />
        </div>
      </div>
      <ContactAside />
    </div>
  </Section>
);
