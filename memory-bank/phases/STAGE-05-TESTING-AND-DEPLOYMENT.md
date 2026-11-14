# Stage 5 · Testing and Deployment

**Status** In progress  
**Product phase** [Phase 1](PHASE-01.md)

- [ ] Run automated data and application checks.
  - [ ] Verify IDs, observation uniqueness, source references, mappings, missing values, and calculations.
  - [ ] Verify all 28 State routes, navigation, map interaction, search, filters, comparison, rankings, and CSV exports.
- [ ] Verify user experience and performance.
  - [ ] Check mobile, tablet, and desktop layouts in supported browsers.
  - [ ] Test keyboard access, screen-reader tables, chart alternatives, contrast, and reduced motion against the WCAG 2.2 AA target.
  - [ ] Check long labels, loading and unavailable states, and the performance targets in the [TRD](../TRD.md).
- [ ] Verify release readiness.
  - [ ] Check each [Phase 1 acceptance criterion](../PRD.md#20-phase-1-acceptance-criteria).
  - [x] Confirm the static production build, generated routes, and assets.
  - [ ] Prepare the GitHub repository and verify the Vercel preview.
  - [ ] Deploy to Vercel and verify the live site, routes, and downloads.
  - [x] Record build, test, and deployment evidence in the [changelog](../CHANGELOG.md).

[Phase and stage index](INDEX.md)
