# Indicators

**Route** `/indicators and /indicators/[slug]`  
**Requirements** FR-06, FR-08  
**Status** Implemented in the local build

Provide searchable categories, definitions, units, availability, comparison status and official references. Verify that differently defined measures remain distinct.

When filters have no matches, show “No matching indicators found.” and a Reset filters action that clears category and search.

The explorer groups all 212 indicators into 12 category accordions using the catalog's existing category mappings. Each section has a themed icon, category title, and count. Sections start expanded and can be toggled independently using a button with keyboard access. Category and name filters apply before grouping. Empty groups are hidden, and filtered counts show the matching count alongside the category total. Each table shows Indicator, Category, Unit, and Survey rounds, with links to the indicator details.

- [Dashboard menu index](INDEX.md)
- [NFHS Data](../NFHS-DATA.md)
Each row has an Actions column with a View link styled as a button. Indicator names are plain text.
Indicator detail pages default to alphabetical State order, with NFHS-6 High to Low, Low to High and Clear filters buttons beside CSV. They show four data columns and a theme-colored Back to Indicators page pill.
Category colors use shared metadata styling, with darker table headers and light content backgrounds.
The category table columns are Indicator, Unit, Survey rounds and Actions.
