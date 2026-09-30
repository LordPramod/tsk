# Digital Chautari

Marketing website for **Digital Chautari**, a creative technology company in Kathmandu, Nepal, offering digital marketing, content creation and health-tech software.

Built with Next.js 16 (App Router), React 19, TypeScript and Tailwind CSS v4.

## Getting started

```bash
yarn install
yarn dev
```

Open [http://localhost:3000](http://localhost:3000).

| Script       | What it does                        |
| ------------ | ----------------------------------- |
| `yarn dev`   | Start the development server        |
| `yarn build` | Create a production build           |
| `yarn start` | Serve the production build          |
| `yarn lint`  | Run ESLint                          |

## Pages

| Route       | Sections                                                                                           |
| ----------- | -------------------------------------------------------------------------------------------------- |
| `/`         | Hero with stat bar, feature strip, who we are, impact stats, ventures, sectors, process, testimonials, blog, CTA |
| `/services` | Service categories, pricing, industries, why work with us, CTA                                     |
| `/products` | Tabbed product switcher with UI previews, Physio@Home spotlight                                    |
| `/about`    | Story, mission and vision, values, quality and trust, team, roadmap, CTA                           |
| `/contact`  | Contact details, department emails, contact form, map, FAQ callout, response times                 |

## Project structure

```
src/app
├── <route>/page.tsx        Route files, composition only
├── layout.tsx              Fonts, metadata, header and footer
├── template.tsx            Page transition wrapper
├── globals.css             Design tokens and shared utilities
└── shared
    ├── components          Reusable UI (Button, Hero, Section, StatBar, FeatureCard, form fields, ...)
    ├── sections/<page>     Page-specific sections
    ├── constant            Typed content for every page
    ├── actions             Server actions
    ├── types               Shared TypeScript types
    └── utils               Helpers and contact form validation
```


