import Link from "next/link";
import { Reveal } from "./Reveal";

type Service = {
  title: string;
  description: string;
  icon: string;
  chip: "chip-mint" | "chip-teal" | "chip-gold" | "chip-lilac" | "chip-pink";
};

const checklist = [
  "Creative Strategy",
  "Brand Storytelling",
  "Full-Stack Engineering",
  "Health-Tech Expertise",
];

const services: Service[] = [
  {
    title: "Digital Marketing",
    description:
      "SEO, paid ads, and analytics that turn attention into growth.",
    icon: "📈",
    chip: "chip-mint",
  },
  {
    title: "Content Creation",
    description: "Photo, video, and social content built for engagement.",
    icon: "🎬",
    chip: "chip-teal",
  },
  {
    title: "Software Development",
    description: "Full-stack web and health-tech products, built to scale.",
    icon: "💻",
    chip: "chip-gold",
  },
  {
    title: "Branding & Design",
    description: "Identity systems that make a company instantly recognizable.",
    icon: "🎨",
    chip: "chip-lilac",
  },
];

function CheckItem({ label }: { label: string }) {
  return (
    <li className="flex items-center gap-3">
      <span
        aria-hidden
        className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-teal text-[11px] font-bold text-white"
      >
        ✓
      </span>
      <span className="text-[15px] font-medium text-ink">{label}</span>
    </li>
  );
}

function ServiceCard({ service, index }: { service: Service; index: number }) {
  return (
    <Reveal index={index}>
      <div className="card h-full">
        <div className={`icon-chip ${service.chip}`}>{service.icon}</div>
        <h3>{service.title}</h3>
        <p className="mt-1">{service.description}</p>
      </div>
    </Reveal>
  );
}

export const WhoWeAre = () => {
  return (
    <section className="section">
      <div className="container-dc grid grid-cols-1 gap-10 dc:grid-cols-2 dc:items-center">
        <div>
          <h2>A Chautari where ideas meet execution</h2>

          <p className="lede mt-4">
            Digital Chautari started as a gathering place for people who wanted
            to build things that matter — where marketers, designers, and
            engineers sit at the same table instead of working in silos.
          </p>
          <p className="lede mt-3">
            Today that same spirit drives everything we ship, from campaigns to
            full-stack health-tech products, for clients across Nepal and
            beyond.
          </p>

          <ul className="mt-6 grid grid-cols-2 gap-4">
            {checklist.map((item) => (
              <CheckItem key={item} label={item} />
            ))}
          </ul>

          <Link href="/about" className="btn-primary mt-8 inline-flex">
            Meet the Team →
          </Link>
        </div>

        {/* Right: 2x2 grid */}
        <div className="grid-cards grid-cols-1 dc:grid-cols-2">
          {services.map((service, i) => (
            <ServiceCard key={service.title} service={service} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};
