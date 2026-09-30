import type { ReactNode } from "react";

type Stat = {
  value: string;
  label: string;
  icon: ReactNode;
};

type DarkBannerProps = {
  eyebrow: string;
  title: string;
  description?: string;
  stats?: Stat[];
  children?: ReactNode;
};

export const DarkBanner = ({
  eyebrow,
  title,
  description,
  stats,
  children,
}: DarkBannerProps) => {
  return (
    <section className="bg-[#0B172A]">
      <div className="container-dc px-5 py-20 sm:px-8 lg:px-10">
        <div className="max-w-3xl">
          <div className="mb-5 inline-flex rounded-full bg-[#E0A930] px-3.5 py-1.5 text-xs font-bold uppercase tracking-[0.14em] text-[#0B172A]">
            {eyebrow}
          </div>

          <h2 className="text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
            {title}
          </h2>

          {description && (
            <p className="mt-5 max-w-2xl text-base leading-7 text-slate-300 sm:text-lg">
              {description}
            </p>
          )}
        </div>

        {/* Stats */}
        {stats && (
          <div className="mt-12 grid grid-cols-1 overflow-hidden rounded-xl border border-white/10 bg-white/5 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat, index) => {
              const Icon = stat.icon;

              return (
                <div
                  key={stat.label}
                  className={`flex items-center gap-4 p-6 ${
                    index > 0
                      ? "border-t border-white/10 sm:border-l sm:border-t-0"
                      : ""
                  }`}
                >
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-[#E0A930]/10 text-[#E0A930]">
                    {Icon}
                  </div>

                  <div>
                    <div className="text-2xl font-bold text-white">
                      {stat.value}
                    </div>

                    <div className="text-sm text-slate-400">{stat.label}</div>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {children && <div className="mt-10">{children}</div>}
      </div>
    </section>
  );
};
