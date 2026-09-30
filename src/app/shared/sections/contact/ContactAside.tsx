import { CircleHelp, MapPin } from "lucide-react";
import { ArrowLink, IconChip } from "../../components";
import { responseTimes } from "../../constant";

const MapPlaceholder = () => (
  <div className="overflow-hidden rounded-card border border-line bg-white">
    <div
      role="img"
      aria-label="Map placeholder marking our office in Kathmandu, Nepal"
      className="grid h-52 place-items-center bg-map-grid"
    >
      <span
        aria-hidden="true"
        className="grid size-12 place-items-center rounded-full bg-teal text-white shadow-lift ring-8 ring-teal/15"
      >
        <MapPin size={22} />
      </span>
    </div>
    <div className="border-t border-line p-5">
      <h3>Visit our office</h3>
      <p className="mt-1 text-body-sm text-muted">Kathmandu, Nepal</p>
    </div>
  </div>
);

const FaqCallout = () => (
  <div className="rounded-card bg-navy p-6 text-white">
    <IconChip icon={CircleHelp} tone="dark" />
    <h3 className="mt-4 text-white">Need quick answers?</h3>
    <p className="mt-2 text-body-sm text-white/65">
      Find answers about pricing, timelines and how we work.
    </p>
    <ArrowLink href="#" tone="dark" className="mt-4">
      Visit FAQ page
    </ArrowLink>
  </div>
);

const ResponseTimes = () => (
  <div className="rounded-card border border-line bg-white p-[22px]">
    <h3>Response times</h3>
    <dl className="mt-3 divide-y divide-line">
      {responseTimes.map(({ icon: Icon, channel, time }) => (
        <div key={channel} className="flex items-center justify-between gap-4 py-3">
          <dt className="flex items-center gap-3 text-body-sm text-ink">
            <Icon size={18} strokeWidth={1.75} aria-hidden="true" className="text-teal" />
            {channel}
          </dt>
          <dd className="text-sm font-semibold text-ink">{time}</dd>
        </div>
      ))}
    </dl>
  </div>
);

export const ContactAside = () => (
  <div className="flex flex-col gap-5">
    <MapPlaceholder />
    <FaqCallout />
    <ResponseTimes />
  </div>
);
