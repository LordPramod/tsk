import { Check } from "lucide-react";
import { cn } from "../../../utils";
import { PreviewProgress, PreviewWindow } from "./PreviewWindow";

const exercises = [
  { name: "Quad sets", reps: "3 × 10", isDone: true },
  { name: "Heel slides", reps: "3 × 12", isDone: true },
  { name: "Straight leg raises", reps: "2 × 10", isDone: false },
];

export const PhysioPreview = () => (
  <PreviewWindow
    title="Physio@Home · Patient app"
    label="Preview of the Physio@Home patient app showing the next home visit, recovery progress and today's exercises"
  >
    <p className="text-[12px] text-muted">Good morning, Sita</p>
    <p className="font-heading text-base font-semibold text-ink">Your recovery is on track</p>
    <div className="mt-4 rounded-chip bg-navy p-4 text-white">
      <p className="text-[11px] font-semibold tracking-[0.02em] text-gold uppercase">
        Next home visit
      </p>
      <p className="mt-1 font-heading text-[15px] font-semibold">Tomorrow, 10:00 AM</p>
      <p className="text-[12px] text-white/65">Anil Thapa · Physiotherapist</p>
    </div>
    <div className="mt-4">
      <PreviewProgress label="Knee rehab plan" value={68} />
    </div>
    <p className="mt-5 text-[12px] font-semibold text-ink">Today&apos;s exercises</p>
    <ul className="mt-2 space-y-2">
      {exercises.map((exercise) => (
        <li
          key={exercise.name}
          className="flex items-center gap-3 rounded-chip border border-line px-3 py-2 text-[13px]"
        >
          <span
            className={cn(
              "grid size-5 shrink-0 place-items-center rounded-full",
              exercise.isDone ? "bg-teal text-white" : "border border-line",
            )}
          >
            {exercise.isDone && <Check size={12} strokeWidth={3} />}
          </span>
          <span className="min-w-0 flex-1 font-medium text-ink">{exercise.name}</span>
          <span className="text-muted">{exercise.reps}</span>
        </li>
      ))}
    </ul>
  </PreviewWindow>
);
