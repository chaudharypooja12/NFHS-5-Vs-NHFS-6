# Changelog

## 2026-11-14

- Renamed the shared header, footer, and page titles to NFHS India. Verified the static build and route checks.

- Removed the search field from all 28 State factsheets. Verified that the indicator explorer still has search.

- Renamed State dashboard pages to State factsheets and removed their introductory sentence. Verified the static build and copy on all 28 State routes.

- Added the [reference alignment checkpoints](phases/REFERENCE-ALIGNMENT.md), a reference-inspired homepage, saved dark mode, an official reports library, and bulk State selection and sorting. Verified the static export and route checks.

- Prepared the initial GitHub baseline of the verified local Phase 1 build. The commit includes application source, build inputs, and the memory bank. Build output and generated data are reproducible from the tracked inputs.

- Built the local Phase 1 portal and exported 28 State routes, 212 indicator routes, and all dashboard menus. Verified route output and map shape coverage, then smoke-tested State search, rankings, Manipur availability, and CSV download in the browser. Full mapping review, production accessibility and performance checks, and Vercel deployment remain open.

- Added checklists for both phases and all six development stages. Marked documented data-foundation subtasks complete and kept implementation, validation, and release tasks open. Updated contributor instructions and documentation links, and restored the missing Districts module note.

- Reorganized the memory bank around two index files and dashboard menu notes. Renamed the validation reference to [NFHS Data](NFHS-DATA.md) and updated documentation links. Extracted official State totals for both rounds and calculated eligible changes and State leaders for 20 reviewed indicators. Verified 131 NFHS-5 rows and 101 NFHS-6 rows per published geography. Remaining comparison and ranking mappings need review.

- Checked official NFHS releases against all 28 States and spot-checked published India values. Recorded the Manipur coverage gap, anaemia publication decision, and an unresolved NFHS-5 baseline discrepancy in [NFHS-DATA.md](NFHS-DATA.md). Full observation validation remains open.

- Recorded the supplied PRD v3.0 and updated the project README, contributor instructions, technical requirements, and design specification.
- Documented both product phases, all six development stages, the planned application structure, and module responsibilities.
- Checked documentation links and destination file contents. Source validation, application implementation, and deployment remain pending.
- Initialized the project README, agent instructions, and memory bank. Documented the required memory-bank review before changes and updates after changes.

## 15 November 2026 · Homepage highlights and colors

- Added six illustrated indicator cards, five-second carousel rotation with pause, and distinct colors for the coverage, map, and State finder panels.
- The static build completed and route checks passed. The side browser verified that the six images loaded and that the carousel advanced automatically.

## 15 November 2026 · Active navigation

- Added a route-aware light-blue pill to the main navigation. Verified the production build and checked Overview, States, and State and indicator detail routes in the side browser.

## 15 November 2026 · Responsive homepage layout

- Expanded homepage content to the viewport, normalized section spacing, and gave the subtitle room to wrap naturally.
- Verified the production build and checked 1920, 1440, 1366, 1024, 768, and 375 px widths in the browser. No page-level horizontal overflow was observed.

## 15 November 2026 · Shared page alignment

- Aligned the header, page content, and footer with a shared responsive gutter. Adjusted narrow navigation and form sizing to prevent page overflow.
- Verified the production build and checked matching content edges and no page-level horizontal overflow on the seven main routes at 1440, 768, and 375 px.

## 15 November 2026 · Mobile navigation and map range

- Added a compact mobile navigation dropdown and published-value endpoints to the map legend.
- TypeScript, production build, and route checks passed. Verified mobile navigation at seven widths and checked the legend with percentage and fertility indicators.

## 17 November 2026 · Themed page scrollbar

- Added a slim vertical page scrollbar using the active theme palette. Verified the light and dark colors in the browser, and passed the static build and route checks.

- Corrected browser scrollbar styling so the preview renders a 10 px themed gutter instead of the browser's 15 px default.

## 17 November 2026 · Map instructions and State list scrollbar

- Moved State selection guidance into the map panel and applied the themed scrollbar to the State list.
- Verified the production build, banner placement and fit at mobile width, and both light and dark styles in the local preview.

## 17 November 2026 · Choropleth sizing

- Enlarged the homepage map by about 35 percent while preserving its proportions and controls.
- The production build and route checks passed. Verified centering, all 28 State links, and no horizontal overflow at six viewport widths from 320 to 1440 px.
