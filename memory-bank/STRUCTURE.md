# File structure

The documentation below lives at the root of the Desktop NFHS folder.

```text
NFHS/
├── AGENTS.md
├── README.md
└── memory-bank/
    ├── INDEX.md
    ├── PRD.md
    ├── TRD.md
    ├── DESIGN.md
    ├── NFHS-DATA.md
    ├── ROADMAP.md
    ├── STRUCTURE.md
    ├── CHANGELOG.md
    ├── phases/
    │   ├── INDEX.md
    │   ├── PHASE-01.md
    │   ├── PHASE-02.md
    │   ├── STAGE-01-DATA-FOUNDATION.md
    │   ├── STAGE-02-UI-UX-DESIGN.md
    │   ├── STAGE-03-CORE-DEVELOPMENT.md
    │   ├── STAGE-04-DATA-INTEGRATION.md
    │   ├── STAGE-05-TESTING-AND-DEPLOYMENT.md
    │   └── STAGE-06-DISTRICT-DEVELOPMENT.md
    └── modules/
        ├── INDEX.md
        ├── HOME.md
        ├── NATIONAL-DASHBOARD.md
        ├── STATES.md
        ├── COMPARE.md
        ├── RANKINGS.md
        ├── INDICATORS.md
        ├── METHODOLOGY.md
        ├── SOURCES.md
        └── DISTRICTS.md
```

## Phase 1 application structure

Application sources are in app, components, lib, and scripts. The data build reads NFHS-DATA.md and generates data/catalog.json and public/data/*.json. The simplified State boundaries and source metadata are in public/maps. The local static build is in out. The tree below retains the longer-term organization for additional pipeline modules and tests.

```text
app/
├── layout.tsx
├── page.tsx
├── dashboard/page.tsx   # Old National URL forwards to All States
├── states/
│   ├── page.tsx        # All States
│   └── [slug]/page.tsx
├── compare/page.tsx     # Old Compare URL forwards to All States
├── rankings/page.tsx
├── indicators/
│   ├── page.tsx
│   └── [slug]/page.tsx
├── methodology/page.tsx
├── reports/page.tsx
└── sources/page.tsx
components/
├── layout/
├── dashboard/
├── charts/
├── maps/
├── filters/
└── ui/
data/
├── indicators/
├── states/
├── nfhs5/
├── nfhs6/
└── sources/
lib/
├── comparison/
├── validation/
└── formatting/
scripts/
├── extract/
├── transform/
└── validate/
public/
└── maps/
tests/
```

## Planned Phase 2 additions

```text
app/states/[slug]/districts/
├── page.tsx
└── [districtSlug]/page.tsx
data/districts/
public/maps/districts/
```

Phase 2 also extends shared comparison, ranking, export, and validation modules. The PRD proposes district directory and detail URLs. Additional district analysis URLs remain open.
