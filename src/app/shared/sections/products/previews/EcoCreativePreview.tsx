import { PreviewProgress, PreviewWindow } from "./PreviewWindow";

const kpis = [
  { label: "Reach", value: "128K", change: "18%" },
  { label: "Clicks", value: "5.4K", change: "9%" },
  { label: "Leads", value: "312", change: "24%" },
];

const channels = [
  { name: "Instagram", share: 62 },
  { name: "Google Search", share: 48 },
  { name: "Facebook", share: 35 },
];

export const EcoCreativePreview = () => (
  <PreviewWindow
    title="Campaign overview · September"
    label="Preview of the Eco Creative campaign dashboard showing reach, clicks, leads and performance by channel"
  >
    <div className="grid grid-cols-3 gap-1.5 sm:gap-3">
      {kpis.map((kpi) => (
        <div key={kpi.label} className="min-w-0 rounded-chip border border-line px-1.5 py-2 sm:p-3">
          <p className="text-[10px] font-medium tracking-[0.02em] text-muted uppercase sm:text-[11px]">
            {kpi.label}
          </p>
          <p className="mt-1 font-heading text-[15px] leading-tight font-bold text-ink sm:text-lg">{kpi.value}</p>
          <p className="text-[11px] font-semibold text-teal-dark">▲ {kpi.change}</p>
        </div>
      ))}
    </div>
    <p className="mt-5 text-[12px] font-semibold text-ink">Performance by channel</p>
    <div className="mt-3 space-y-3">
      {channels.map((channel) => (
        <PreviewProgress key={channel.name} label={channel.name} value={channel.share} />
      ))}
    </div>
  </PreviewWindow>
);
