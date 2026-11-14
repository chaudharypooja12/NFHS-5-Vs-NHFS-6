# NFHS project instructions

## Before every change

1. Read the [memory bank](memory-bank/INDEX.md), including the PRD, TRD, design, roadmap, file structure, and latest changelog. Read [NFHS Data](memory-bank/NFHS-DATA.md) and the [notes for affected dashboard menus](memory-bank/modules/INDEX.md).
2. Open the [phase and stage index](memory-bank/phases/INDEX.md), then read the relevant phase and stage checklists. Identify the task and subtasks affected and the applicable PRD requirements. Check existing files against the proposed structure before creating or moving files.
3. Check source provenance and comparability before changing data, calculations, or geographic coverage.

## Project rules

- Phase 1 covers the official India-level reference and all 28 States. Keep every State route available even when survey results are missing. Phase 2 adds districts within those States. Exclude Union Territories from analysis and navigation in both phases.
- Use official NFHS publications. Preserve source labels, units, denominators, population groups, publication and suppression flags, and source references. Store missing values as null and display the availability status. Use published India-level estimates.
- Calculate changes only for compatible, validated observations. Separate numerical change from health interpretation. Use an approved favorable direction for best-performance labels and preserve ties. Require methodological support for significance claims.
- Follow the static-first Next.js architecture. Keep extraction and validation at build time and keep the interface responsive and keyboard accessible.

## After every change

1. Run the checks in the active stage checklist and TRD. Record the verification evidence and any blocker or gap beside the task or in the changelog.
2. Update affected memory-bank documents and module notes before handoff. Check off only completed and verified work. Keep parent tasks open while subtasks remain. Update stage and phase status in the checklist files and index when status changes, and keep requirements, decisions, and file structure current.
3. Add a dated changelog entry describing what changed and what was verified.
