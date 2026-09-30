import type { ReactNode } from "react";

type PreviewWindowProps = {
  title: string;
  label: string;
  children: ReactNode;
};

export const PreviewWindow = ({ title, label, children }: PreviewWindowProps) => (
  <div
    role="img"
    aria-label={label}
    className="overflow-hidden rounded-card border border-line bg-white shadow-lift"
  >
    <div aria-hidden="true" className="flex items-center gap-3 border-b border-line bg-paper px-4 py-3">
      <span className="flex gap-1.5">
        <span className="size-2.5 rounded-full bg-line" />
        <span className="size-2.5 rounded-full bg-line" />
        <span className="size-2.5 rounded-full bg-line" />
      </span>
      <span className="truncate text-caption font-medium text-muted">{title}</span>
    </div>
    <div aria-hidden="true" className="p-4 sm:p-5">
      {children}
    </div>
  </div>
);

type PreviewProgressProps = {
  label: string;
  value: number;
};

export const PreviewProgress = ({ label, value }: PreviewProgressProps) => (
  <div>
    <div className="flex items-center justify-between text-[12px]">
      <span className="text-muted">{label}</span>
      <span className="font-semibold text-ink">{value}%</span>
    </div>
    <div className="mt-1.5 h-2 overflow-hidden rounded-full bg-chip-teal">
      <div className="h-full rounded-full bg-teal" style={{ width: `${value}%` }} />
    </div>
  </div>
);
