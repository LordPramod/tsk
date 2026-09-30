type HeroProps = {
  eyebrow: string;
  title: string;
  highlightedTitle: string;
  description: string;
  hasButton?: boolean;
};

export const Hero = ({
  eyebrow,
  title,
  highlightedTitle,
  description,
  hasButton,
}: HeroProps) => {
  return (
    <section className="relative overflow-hidden bg-[radial-gradient(circle_at_85%_10%,rgba(15,148,136,0.16),transparent_28%),radial-gradient(circle_at_92%_18%,rgba(224,169,48,0.12),transparent_22%),linear-gradient(135deg,#effbf7_0%,#fbfbf9_55%,#f8f8f4_100%)]">
      {/* Decorative glow — no layout classes here, it's purely visual */}
      <div className="pointer-events-none absolute -right-32 -top-32 h-80 w-80 rounded-full bg-teal-400/10 blur-3xl" />
      <div className="pointer-events-none absolute right-20 top-20 h-40 w-40 rounded-full bg-amber-300/10 blur-3xl" />

      {/* container-dc keeps this aligned with the Header/Footer (max-w-dc = 1120px) */}
      <div className="container-dc relative flex min-h-[560px] items-center py-24">
        <div className="max-w-[720px]">
          {/* Eyebrow */}
          <div className="mb-6 inline-flex items-center rounded-full border border-teal-600/15 bg-white/60 px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-teal-700 shadow-sm backdrop-blur-sm">
            {eyebrow}
          </div>

          {/* Heading */}
          <h1 className="text-4xl font-bold leading-[1.08] tracking-[-0.035em] text-gray-900 dc:text-6xl">
            {title}{" "}
            <span className="bg-gradient-to-r from-teal-600 via-teal-500 to-amber-500 bg-clip-text text-transparent">
              {highlightedTitle}
            </span>
          </h1>

          {/* Description */}
          <p className="mt-7 max-w-[680px] text-base leading-7 text-gray-600 dc:text-lg dc:leading-8">
            {description}
          </p>

          {hasButton && (
            <div className="mt-4 flex gap-4">
              <button className="btn-primary cursor-pointer">
                Explore Services
              </button>
              <button className="btn-ghost cursor-pointer">
                View Products
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
