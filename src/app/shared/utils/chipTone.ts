import type { ChipTone } from "../types";

const chipTones: readonly ChipTone[] = ["mint", "teal", "gold", "lilac", "pink"];

export const chipBackground: Record<ChipTone, string> = {
  mint: "bg-chip-mint",
  teal: "bg-chip-teal",
  gold: "bg-chip-gold",
  lilac: "bg-chip-lilac",
  pink: "bg-chip-pink",
};

export const chipToneAt = (index: number): ChipTone =>
  chipTones[index % chipTones.length];
