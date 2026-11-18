# Home

**Route** `/`  
**Requirements** FR-01, FR-03  
**Status** Implemented in the local build

Show survey context, featured India indicators, the interactive map, and a searchable State selector. Map and selector use the same State registry. Verify keyboard focus, tooltips, unavailable-data styling, and State navigation.

- [Dashboard menu index](INDEX.md)
- [NFHS Data](../NFHS-DATA.md)

The Key highlights carousel displays six square indicator illustrations with accessible text alternatives and links to each indicator. It advances every five seconds, with pause and manual navigation controls and a reduced-motion preference. Survey coverage and State exploration use separate palettes in light and dark themes.

The homepage uses the available viewport width with responsive side padding. Key highlights shows four cards at desktop widths, three at tablet widths, and a vertical carousel on mobile. Coverage cards and State exploration panels stack on mobile.

The map legend shows the lowest and highest published State values for the selected indicator in its survey unit.

The full-width map panel shows all 28 State names and places State search beside the indicator selector. Matching results link to State fact sheets. The controls stack on narrow screens.
The shared header stays at the top during scrolling. The Overview ends with the map section.
Highlight cards have theme-colored borders. Coverage cards show map, indicator-list and survey-layer icons.
