import { Camera, Film, Image as ImageIcon, Play, type LucideIcon } from "lucide-react";
import type { ChipTone } from "../../../types";
import { chipBackground, cn } from "../../../utils";
import { PreviewWindow } from "./PreviewWindow";

const shots: { icon: LucideIcon; tone: ChipTone }[] = [
  { icon: Play, tone: "mint" },
  { icon: Camera, tone: "gold" },
  { icon: ImageIcon, tone: "lilac" },
  { icon: Film, tone: "teal" },
  { icon: Play, tone: "pink" },
  { icon: Camera, tone: "mint" },
];

const schedule: { title: string; status: string; tone: ChipTone }[] = [
  { title: "Product launch reel", status: "In edit", tone: "gold" },
  { title: "Café photo shoot", status: "Scheduled", tone: "teal" },
  { title: "Dashain campaign carousel", status: "Published", tone: "mint" },
];

export const ContentStudioPreview = () => (
  <PreviewWindow
    title="Content calendar · This week"
    label="Preview of the One Content Creation Studio calendar showing this week's shoots and their status"
  >
    <div className="grid grid-cols-3 gap-2">
      {shots.map(({ icon: Icon, tone }, index) => (
        <div
          key={index}
          className={cn("grid aspect-[4/3] place-items-center rounded-chip", chipBackground[tone])}
        >
          <Icon size={20} strokeWidth={1.75} className="text-teal/70" />
        </div>
      ))}
    </div>
    <ul className="mt-4 divide-y divide-line">
      {schedule.map((item) => (
        <li key={item.title} className="flex items-center justify-between gap-3 py-2.5 text-[13px]">
          <span className="min-w-0 truncate font-medium text-ink">{item.title}</span>
          <span
            className={cn(
              "shrink-0 rounded-pill px-2.5 py-0.5 text-[11px] font-semibold text-teal-dark",
              chipBackground[item.tone],
            )}
          >
            {item.status}
          </span>
        </li>
      ))}
    </ul>
  </PreviewWindow>
);
