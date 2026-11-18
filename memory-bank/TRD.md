# Technical requirements

## Architecture

Use Next.js App Router, TypeScript, Tailwind CSS, shadcn/ui, Recharts, Lucide React, and SVG/GeoJSON maps. Store versioned static JSON in GitHub and deploy on Vercel over HTTPS. Pre-generate State routes and prepare data at build time. Use client-side interaction for charts, filters, search, and CSV export. The architecture uses static data and excludes a runtime backend, production database, and authentication.

## Data contracts

| Entity | Required information |
| --- | --- |
| Survey | ID, name, fieldwork period, publication status, source metadata |
| Geography | Stable ID, name, type, parent ID, route slug, availability. India and State in Phase 1, District in Phase 2. |
| Indicator mapping | ID, category, display name, both official labels where available, unit, population group, denominator, comparison status, better direction, source reference per round, notes and review decisions |
| Observation | Survey, geography and indicator IDs, numeric value or null, availability and publication flags, source reference and page, validation status |
| Source | ID, title, publisher, URL, publication date, version, retrieval date |

Collect official documents, extract tables, normalize geography identifiers, inventory all indicators in selected publications, map compatible definitions, validate data, and generate optimized JSON. Preserve official labels and provisional or suppression flags. Document boundary source and version. Use official India-level values directly.

## Calculations and exports

Comparison statuses are Comparable, Definition Changed, New in NFHS-6, Unavailable in NFHS-6, and Pending Verification. Validate definitions, units, denominators, populations and age ranges. Calculate absolute change as NFHS-6 minus NFHS-5 only when both values are valid and comparable. Display differences between percentages in percentage points. Relative change divides that difference by the NFHS-5 value and multiplies by 100, with a nonzero baseline. Interpret direction from indicator metadata and require appropriate evidence for significance claims.

Rank valid observations only and show the round, sort direction, and included count. CSV fields are State, indicator ID, indicator name, category, NFHS-5 value, NFHS-6 value, unit, absolute change, comparison status, and source reference. Preserve missing values and units.

The All States workbook uses State, NFHS-6 and NFHS-5 columns for each selected indicator. State fact-sheet CSV includes the indicator number, category, name, both totals, both publication statuses and source page references. The A4 PDF is rendered from the same complete indicator rows and the projected map geometry. Export libraries are loaded when requested.

## Verification

- Validate geography and indicator IDs, observation uniqueness, numeric formats, units, missing values, source references, mapping statuses, and calculations at build time.
- Verify direct State routes, map navigation, search, filters, comparisons, ranking sorts, and CSV exports.
- Check keyboard use, responsive layout, chart readability, long labels, and missing, empty, error, and loading states across current stable major browsers.
- Target mobile LCP ≤ 2.5 s at the 75th percentile, CLS ≤ 0.1, and INP ≤ 200 ms. Lazy-load noncritical charts and map assets and limit JSON payloads.
- Verify static build, generated routes, assets, and Vercel preview and production. Keep secrets out of public assets and avoid unnecessary personal data collection.
- For Phase 2, validate district identifiers, boundary versions and comparability across rounds before calculating differences.

Setup commands and tool versions will be recorded when the application is initialized. See the [proposed file structure](STRUCTURE.md).

See [NFHS Data](NFHS-DATA.md) for official sources, comparison status, and ranking eligibility. Preserve ties at the published precision.

The local build uses Next.js static export, React, TypeScript, Tailwind CSS, Recharts, Lucide, and d3-geo. The generated catalog contains 212 entries and uses 20 reviewed cross-round mappings. The State map uses geoBoundaries IND ADM1, boundary ID IND-ADM1-1811400, commit 9469f09, attributed to DataMeet India community and the Election Commission of India under CC BY 2.5 IN. Map names are normalized for matching. The local build has custom shared UI controls. Production review of boundary provenance and source definitions remains open.
