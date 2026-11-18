# Design

## Modern Analytics Dashboard

The PRD selects Option B. Use a light background, white cards, blue and indigo accents, subtle borders and shadows, modern typography, clear spacing, and responsive navigation.

| Surface | Layout and interactions |
| --- | --- |
| Homepage | Header, hero and survey context, featured national indicators, interactive India map, searchable State selector, featured comparisons, categories, methodology and sources, footer |
| National dashboard | Indicator selector, two survey values, absolute change, interpretation, grouped bar chart, source reference, links to State comparison |
| All States and State fact sheets | Scrollable State checkbox sidebar, searchable indicator picker, blue table headings, directional sorting and spreadsheet export. Fact sheets show the highlighted map, sample sizes, complete grouped indicators, CSV and PDF downloads, and the existing indicator explorer with grouped bars. |
| Compare | Multi-State and common-indicator selectors, grouped bars, sortable table with change and availability, CSV export |
| Rankings | Indicator and ranking mode, round label, included count, sort controls, horizontal bars |
| Indicators | Search and category browsing, definitions, units, survey availability, comparison status, detail pages and sources |
| Methodology and sources | Round differences, calculation rules, missing and provisional values, limitations, official references |

## Interaction and accessibility

- Support keyboard focus and hover on the map, named tooltips, indicator-based coloring, a legend, an unavailable-data style, and State dashboard navigation. Offer the searchable State selector as an equivalent path.
- Display “Data Not Available” with the reason when known. Keep numerical direction and health interpretation distinct.
- Apply relevant filters in place. Use grouped bars for survey comparisons and horizontal bars for rankings.
- Target WCAG 2.2 AA with visible focus, accessible form controls, screen-reader-friendly tables, text alternatives for charts, sufficient contrast, and reduced-motion support. Keep charts and tables usable on narrow screens.
- Phase 2 adds State-to-district drill-down and extends these patterns to district maps, dashboards, comparison, rankings, and exports.

See the [planned routes](STRUCTURE.md) and the [complete design specification](PRD.md#10-uiux-design-specification).

See the [dashboard menu index](modules/INDEX.md) for the route-level design notes.

NFHS India uses an indigo header, saved dark-mode preference, comparison highlights carousel, survey coverage cards, reports library, indicator-colored map, comparison charts, and responsive tables. Published values link to their sources. The method and source pages explain unavailable data and pending mappings.
