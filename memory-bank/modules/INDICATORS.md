# Indicators

**Route** `/indicators and /indicators/[slug]`  
**Requirements** FR-06, FR-08  
**Status** Implemented in the local build

Provide searchable categories, definitions, units, availability, comparison status and official references. Verify that differently defined measures remain distinct.

When filters have no matches, show “No matching indicators found.” and a Reset filters action that clears category, search, and comparison status.

The explorer groups all 212 indicators into 12 category accordions using the catalog's existing category mappings. Each section has a themed icon, category title, and count. Sections start expanded and can be toggled independently using a button with keyboard access. Category, name search, and mapping-status filters apply before grouping. Empty groups are hidden, and filtered counts show the matching count alongside the category total. Each table retains Indicator, Category, Unit, Survey rounds, and Comparison status columns and the existing indicator detail links.

- [Dashboard menu index](INDEX.md)
- [NFHS Data](../NFHS-DATA.md)
