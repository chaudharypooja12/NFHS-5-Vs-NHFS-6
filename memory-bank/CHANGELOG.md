# Changelog

## 2026-11-18

- Simplified the Indicator explorer heading and removed its Comparison status filter and column. The 252-page static build and route and ranking checks passed. Edge verified the four-column tables, all 212 indicators, category and search filtering, reset, detail links, mobile width, and the State fact-sheet status filter.

- Expanded the Overview map to a full-width panel, labeled all 28 States, and placed State search next to the map indicator. Removed the separate search panel. Edge verified non-overlapping labels, desktop and mobile controls, indicator changes, search, and State fact-sheet navigation.
- Removed the Comparison status column and ranking note from All States and added a leading eye icon to each fact-sheet action. Edge verified the seven-column table, icon, narrow-screen layout, and Kerala link. The static build, route checks, and ranking checks passed.

- Integrated the newer All States dashboard on main. Kept the ranking modes, eligibility rules, legacy redirects, and eight unavailable Union Territory entries. Verified the merged 252-page static build, route and ranking checks, and Chrome downloads for the XLSX, 212-row CSV and 15-page PDF.

- Added All States selection, indicator search and sorting, comparison XLSX, and full State fact sheets with the shared map, Appendix 2 sample sizes, CSV and paginated PDF. The static build exported 251 pages. Route and data checks verified 28 State routes, 212 indicator routes and 27 sets of Appendix 2 counts. Local Chrome smoke verified selection, sorting, a two-indicator workbook, a 212-row Kerala CSV, the 15-page A4 Kerala PDF, the highlighted map, narrow-screen width, Manipur availability and the existing Compare route. The local baseline has no implemented district routes to regression-test. Cross-browser, accessibility, and production verification remain open.

## 2026-11-17

- Changed only the footer copyright strip to pure white with dark blue text and its existing LinkedIn link. Preserved the upper disclaimer, footer content, alignment, font, and spacing. Verified the production build, colors/text/link on Overview, All States, Indicators, and Reports, plus mobile overflow and light/dark presentation.

- Consolidated Rankings into the All States table with NFHS-6, NFHS-5, and eligible-change rank modes, direction-aware ranks, ties, comparison status, and validated change columns. Reused State selection, indicator selection, sorting, factsheet actions, and XLS export. Removed the standalone rankings mode and unused ranking chart branches. The old Rankings URL forwards to All States and its menu entry is removed.
- Added clear empty-result messages and reset actions. Missing survey values display N/A. Original datasets, Overview and Reports sources, header/footer styles, branding, disclaimer, and external links were unchanged.
- Verified production build and TypeScript, static route checks, ranking regression checks, real-data direction/eligibility, XLS contents, selection persistence, ranking modes, context labels, legacy forwarding, 212 catalog indicators and reset behavior, Overview highlights/search, Reports, desktop/tablet/mobile layouts, and browser error logs. No lint script or lint configuration is present in the project.

- Grouped the Indicator Explorer's 212 indicators into 12 expandable category sections with themed icons and counts. Retained existing columns, detail links, and category/search/comparison-status filters. Filtered counts show matches against each category total.
- Verified the static build and route checks, all 212 unique indicator links, keyboard collapse/expand, combined filters, empty results, and restoration of all indicators. Checked light/dark presentation and mobile page overflow.

- Added themed decorative Lucide icons to all page and section headings, using a shared icon component and consistent sizing. Applied accent-colored table headers with contrasting surface-colored text, uniform padding, typography, and borders in both themes.
- Verified the production build and route checks. Browser checks covered headings on Home, All States, Rankings, Indicators, Reports, Methodology, Sources, a State factsheet, and an indicator detail page. Confirmed table colors adapt to light/dark modes and checked mobile overflow.

- Removed the standalone Institutional births section from All States, including its chart, heading, subtitle, CSV action, expandable table, unused export code, and section spacing. Verified the static build and route checks. The local browser showed one comparison table, no chart or CSV button, working NFHS-6 sorting, and the footer directly after the main content.

- Redesigned All States into selection and performance cards. The scrollable checkbox list has Select All, Clear, and a counter. The performance card has one indicator selector, NFHS-6 sort buttons, and State/NFHS-6/NFHS-5/Actions columns with factsheet buttons. Removed the previous All States filter controls.
- Added eight selectable UT display entries with unavailable results and no factsheet routes, following the updated UI request. Survey datasets and geographic routes retain their existing contents.
- Added a lazy-loaded SheetJS dependency for genuine BIFF8 XLS downloads. Preserved the Institutional births chart component below the comparison cards with its legend, tooltips, published India reference, selected State data, and dedicated CSV export.
- Verified the production static build, TypeScript, route checks, keyboard selection, Select All/Clear, indicator changes, ascending and descending sorting, factsheet navigation, and downloaded XLS/CSV contents against the dataset. Checked responsive layouts at 375, 768, and desktop widths and light/dark mode with no page overflow. Footer source, footer styles, route files, survey datasets, and shared chart source were unchanged.

- Matched the footer to the indigo header, centered the developer credit, and extended the layout to keep the footer at the bottom of short pages. Browser checks confirmed the shared color, alignment, and page edge in light and dark modes.
- Consolidated the National, States, and Compare menus into All States at `/states`. The page starts with all 28 States and the published India reference. State search, selection, indicator filters, and sorting update the chart, table, and CSV. Each State row has one factsheet action. The old National and Compare URLs forward to All States.
- Verified the static export, 28 State routes, 212 indicator routes, and the legacy URLs. Browser checks covered State search and selection, the India toggle, indicator and availability filters, sorting, paired chart series, CSV download, and opening the Manipur factsheet.

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

## 17 November 2026 · Site footer

- Added the project disclaimer, State Performance, official PDF, GitHub, and developer profile links to the shared footer.
- Verified the production build and route checks, desktop and mobile footer alignment, and dark theme. The NFHS Official URL could not be independently verified due to its certificate chain.
