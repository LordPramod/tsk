import type { ReactNode } from "react";

type Venture = {
  name: string;
  category: string;
  description: string;
  icon: ReactNode;
  href: string;
};

type ProductsTeaserProps = {
  ventures: Venture[];
};

export const ProductsTeaser = ({ ventures }: ProductsTeaserProps) => {
  return (
    <section id="products" className="bg-[#FBFBF9] px-5 py-20 sm:px-8 lg:px-10">
      <div className="container-dc">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <span className="inline-flex rounded-full border border-teal-600/15 bg-teal-50 px-3.5 py-1.5 text-xs font-bold uppercase tracking-[0.14em] text-teal-700">
            Our Ventures
          </span>

          <h2 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
            Three ventures,{" "}
            <span className="bg-gradient-to-r from-teal-600 to-amber-500 bg-clip-text text-transparent">
              one vision.
            </span>
          </h2>

          <p className="mt-4 text-base leading-7 text-gray-600 sm:text-lg">
            Different ventures, connected by the same commitment to creativity,
            technology, and meaningful impact.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {ventures.map((venture) => (
            <article
              key={venture.name}
              className="group rounded-xl border border-gray-200 bg-white p-[22px] transition duration-200 hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-teal-50 text-teal-600 transition-colors group-hover:bg-teal-600 group-hover:text-white">
                {venture.icon}
              </div>

              <div className="mt-6 text-xs font-bold uppercase tracking-[0.14em] text-amber-600">
                {venture.category}
              </div>

              {/* Name */}
              <h3 className="mt-2 text-xl font-bold tracking-tight text-gray-900">
                {venture.name}
              </h3>

              {/* Description */}
              <p className="mt-3 text-sm leading-6 text-gray-600">
                {venture.description}
              </p>

              {/* Link */}
              <a
                href={venture.href}
                className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-teal-600 transition-all group-hover:gap-2 hover:text-teal-700"
              >
                Learn more
                <span aria-hidden="true">→</span>
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
