# Roadmap

The Phase 1 portal has a verified local static build. Remaining indicator mapping, release checks, and Vercel deployment are open. Phase 2 is planned. Track tasks and verification in the [phase and stage checklists](phases/INDEX.md). Stage 1 has official totals for all covered geographies, with 131 NFHS-5 rows and 101 NFHS-6 rows per published geography. Review the remaining cross-round mappings and ranking rules before release. See the [NFHS Data](NFHS-DATA.md).

## Phase 1 · State-level comparison

| Stage | Work | Exit check |
| --- | --- | --- |
| [1. Data Foundation](phases/STAGE-01-DATA-FOUNDATION.md) | Collect official fact sheets, inventory indicators, review mappings, validate State coverage, define schemas | Document sources and schemas, account for all 28 States, and record mapping and availability decisions. |
| [2. UI/UX Design](phases/STAGE-02-UI-UX-DESIGN.md) | Wireframe the homepage, national and State dashboards, comparison, and indicator explorer. Define a responsive design system. | Review the layouts, mobile behavior, keyboard flows, and unavailable-data states. |
| [3. Core Development](phases/STAGE-03-CORE-DEVELOPMENT.md) | Initialize Next.js, build shared layout and navigation, interactive map, charts, filters, search, and comparison logic | Verify routes and core interactions, including accessible State selection. |
| [4. Data Integration](phases/STAGE-04-DATA-INTEGRATION.md) | Generate validated JSON, connect State and India observations, implement missing-data displays, add source references and CSV export | Verify displayed and exported data, units, availability, and traceability. |
| [5. Testing and Deployment](phases/STAGE-05-TESTING-AND-DEPLOYMENT.md) | Validate data, test features and responsive layouts, test accessibility, optimize performance, deploy to Vercel | Satisfy [Phase 1 acceptance criteria](PRD.md#20-phase-1-acceptance-criteria) and verify the static build, preview, and production. |

Phase 1 delivers the mapping registry, cleaned survey datasets, State registry, static application, automated tests, methodology and sources, GitHub repository, and live Vercel deployment.

## Phase 2 · District-level expansion

[Stage 6 · District Development](phases/STAGE-06-DISTRICT-DEVELOPMENT.md). Prepare district datasets and registry, validate survey-round boundary changes, add State-to-district navigation, and build district dashboards, maps, rankings, comparisons, CSV exports, and methodology.

Verify district source traceability, boundary compatibility, and comparison eligibility. Reuse the existing chart, indicator, and comparison logic and verify State routes still work.

## Open decisions

Confirm official publication versions and coverage, validate the full indicator inventory and mapping, select and document boundary sources, and establish district coverage after reviewing source and boundary compatibility.
