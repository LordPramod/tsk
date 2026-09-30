import { Eyebrow, Reveal, Section } from "../../components";
import { storyParagraphs, storyTiles } from "../../constant";
import type { StoryTile } from "../../types";
import { cn } from "../../utils";

const tileSurface: Record<StoryTile["surface"], { tile: string; label: string }> = {
  teal: { tile: "bg-teal-dark text-white", label: "text-white/85" },
  navy: { tile: "bg-navy text-white", label: "text-white/65" },
  white: { tile: "border border-line bg-white text-ink", label: "text-muted" },
  gold: { tile: "bg-gold text-navy", label: "text-navy/75" },
};

export const OurStory = () => (
  <Section>
    <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
      <div>
        <Eyebrow>Our story</Eyebrow>
        <h2 className="mt-4">From a chautari to a digital powerhouse</h2>
        {storyParagraphs.map((paragraph) => (
          <p key={paragraph} className="mt-4 text-lede text-muted">
            {paragraph}
          </p>
        ))}
      </div>

      <ul className="grid grid-cols-2 gap-5">
        {storyTiles.map((tile, index) => {
          const surface = tileSurface[tile.surface];
          return (
            <li key={tile.label} className="h-full">
              <Reveal index={index} className="h-full">
                <p
                  className={cn(
                    "@container flex h-full min-h-32 flex-col justify-end rounded-card p-4 sm:min-h-40 sm:p-6",
                    surface.tile,
                  )}
                >
                  <span className="font-heading text-[length:min(22px,18cqi)] leading-tight font-bold tracking-tight sm:text-[length:min(32px,19cqi)]">
                    {tile.value}
                  </span>
                  <span className={cn("mt-1 text-sm font-medium", surface.label)}>
                    {tile.label}
                  </span>
                </p>
              </Reveal>
            </li>
          );
        })}
      </ul>
    </div>
  </Section>
);
