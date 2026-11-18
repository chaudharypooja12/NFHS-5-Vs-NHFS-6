# Stage 4 · Data Integration

**Status** In progress  
**Product phase** [Phase 1](PHASE-01.md)

- [ ] Generate validated static datasets.
  - [ ] Implement extraction, transformation, and validation scripts.
  - [x] Generate cleaned NFHS-5 and NFHS-6 datasets, the geography registry, indicator mapping, and sources.
  - [x] Check schemas, duplicate keys, units, observation flags, and source references.
- [x] Connect datasets to the application.
  - [x] Use official India totals and published State observations in dashboards and the indicator explorer.
  - [x] Populate map, comparison, and ranking views with eligible observations.
  - [x] Display unavailable and suppressed values clearly and preserve Manipur’s NFHS-5 coverage.
  - [x] Attach survey, document, and page or row references to displayed values.
- [x] Implement and verify CSV export.
  - [x] Include the PRD fields, units, source references, and comparison statuses.
  - [ ] Verify that exported rows match the selected view and preserve missing data.
- [ ] Verify integration with official sources.
  - [x] Verify State fact-sheet inventory and Appendix 2 sample-count coverage at build time. Check a multi-indicator workbook, complete State CSV, and multi-page PDF against the generated dataset (FR-04, FR-09).
  - [ ] Check displayed and exported values and record unresolved discrepancies in [NFHS Data](../NFHS-DATA.md).

[Phase and stage index](INDEX.md)
