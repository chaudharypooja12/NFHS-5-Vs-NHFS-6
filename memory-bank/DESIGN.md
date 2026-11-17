# Design

## Modern Analytics Dashboard

The PRD selects Option B. Use a light background, white cards, blue and indigo accents, subtle borders and shadows, modern typography, clear spacing, and responsive navigation.

| Surface | Layout and interactions |
| --- | --- |
| Homepage | Header, hero and survey context, featured national indicators, interactive India map, searchable State selector, featured comparisons, categories, methodology and sources, footer |
| National dashboard | Indicator selector, two survey values, absolute change, interpretation, grouped bar chart, source reference, links to State comparison |
| State directory and factsheets | Searchable directory of all 28 States. Each factsheet shows the State name under the State factsheet label, with a directory link, survey availability, filters, an indicator dropdown, metrics, grouped bars, a comparison table, and sources. |
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

NFHS India uses an indigo header, saved dark-mode preference, comparison highlights carousel, survey coverage cards, reports library, searchable State directory, indicator-colored map, comparison charts, and responsive tables. Published values link to the fact sheets. The method and source pages explain unavailable data and pending mappings.

The main navigation uses a light-blue pill to mark the current page or parent section, with the current item exposed to assistive technology.

The header, page content, and footer use the same full-width shell with responsive side gutters. The narrow-screen navigation wraps its links and retains the active route indicator.

Below 1024 px, the header uses a disclosure button to show the same navigation links in a dropdown. The route-aware highlight is shared across viewport sizes.

The page scrollbar follows the active theme and uses the browser's default styling in forced-color mode.
