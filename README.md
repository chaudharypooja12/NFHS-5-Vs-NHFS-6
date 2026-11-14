# NFHS-5 vs NFHS-6 India State Health Comparison Portal

A locally runnable website for exploring official NFHS indicators, comparing survey rounds, and downloading data. The portal is English-language and targets desktop, tablet, and mobile.

| Product phase | Scope | Status |
| --- | --- | --- |
| 1 | Official India-level overview, 28 State dashboards, interactive map, indicator explorer, multi-State comparison, rankings, CSV export, methodology, and sources | Requirements documented. Official State totals and reviewed comparisons are in NFHS Data. The local portal is implemented. Remaining indicator validation and production checks are open. |
| 2 | District directories, dashboards, comparisons, rankings, maps, CSV exports, and district methodology within the 28 States | Planned. District source and boundary validation pending. |

Union Territories are excluded from both phases. The planned stack is Next.js App Router, TypeScript, Tailwind CSS, shadcn/ui, Recharts, Lucide React, static JSON, and Vercel.

- [Memory bank](memory-bank/INDEX.md)
- [NFHS Data](memory-bank/NFHS-DATA.md)
- [Dashboard menu index](memory-bank/modules/INDEX.md)
- [Full PRD](memory-bank/PRD.md)
- [Phase and stage checklists](memory-bank/phases/INDEX.md)
- [Roadmap](memory-bank/ROADMAP.md)
- [Current and planned file structure](memory-bank/STRUCTURE.md)
- [Contributor instructions](AGENTS.md)

## Run locally

The existing static build runs with `node scripts/serve.mjs`. Open [localhost](http://127.0.0.1:3000/) or set the PORT environment variable to choose a different port. The current preview uses [port 3041](http://127.0.0.1:3041/).

To rebuild, use Node.js 20.9 or later and pnpm. Run `pnpm install --frozen-lockfile`, then `pnpm build`. Run `node scripts/check.mjs` to verify the exported routes and State map coverage.
