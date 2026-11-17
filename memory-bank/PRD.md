# Product Requirements Document (PRD)

## NFHS-5 vs NFHS-6 — India State Health Comparison Portal

**Version:** 3.0  
**Status:** Complete Requirements Baseline — Pending Data Validation  
**Date:** 14 November 2026  
**Platform:** Responsive Web Application  
**Technology:** Next.js, TypeScript, Tailwind CSS  
**Deployment:** Vercel  
**Primary Language:** English  
**Geographic Coverage:** 28 Indian States Only

---

> Validation update, 14 November 2026. Official publication coverage is verified. See the [NFHS Data](NFHS-DATA.md) for State tables, reviewed comparisons, State leaders, and remaining validation.

# 1. Executive Summary

The NFHS-5 vs NFHS-6 India State Health Comparison Portal is a public-facing, static web application designed to compare health, demographic, nutritional and socioeconomic indicators across India's 28 States.

The application will present data from the National Family Health Survey (NFHS-5 and NFHS-6) through interactive charts, geographic visualizations, comparison tables and indicator dashboards.

Users will be able to explore individual State performance, compare multiple States, analyze changes between survey rounds and access official data references.

The application will be developed in two phases.

### Phase 1: State-Level Comparison

A complete State-level comparison platform covering India's 28 States, with a national overview, interactive India map, indicator explorer, grouped bar charts, rankings and downloadable data.

### Phase 2: District-Level Comparison

An extension supporting district-level comparisons within the 28 States, with geographic drill-down, district rankings and district-specific dashboards.

**Union Territories are excluded from both phases.**

---

# 2. Product Vision

To create a centralized, accurate, accessible and visually intuitive platform that helps users understand changes in health and demographic indicators between NFHS-5 and NFHS-6 across Indian States.

### Product Goals

1. Make official NFHS comparison data easier to explore.
2. Enable accurate comparison of survey indicators.
3. Support State-level geographic analysis.
4. Identify observed improvements and deteriorations.
5. Provide transparent data sources and definitions.
6. Enable researchers to download structured data.
7. Support future district-level expansion without rebuilding the platform.

### Product Principles

- Accuracy before visual presentation.
- Official sources only.
- Transparent indicator definitions.
- Clear treatment of missing data.
- No fabricated or estimated survey values.
- Accessible and responsive design.
- Maintainable, reusable frontend architecture.
- No runtime backend dependency.

---

# 3. Survey Background

## 3.1 NFHS-5

**National Family Health Survey — Fifth Round**

Survey period: 2019–2021.

NFHS-5 provides baseline information covering population, fertility, family planning, maternal and child health, nutrition, household conditions and other health-related indicators.

## 3.2 NFHS-6

**National Family Health Survey — Sixth Round**

Survey period: 2023–2024.

NFHS-6 provides updated survey measurements and includes additional indicators.

Published NFHS-6 State fact sheets and supporting documentation must be used to determine the available indicators, geographic coverage, definitions and publication status.

## 3.3 Comparison Principles

The application must not assume that every indicator is directly comparable.

Comparison is permitted only when relevant measurement definitions, population groups, denominators and units are compatible.

The platform must preserve official source labels and data-status information.

---

# 4. Geographic Scope

## 4.1 Phase 1 Coverage

The application will cover the following 28 States:

1. Andhra Pradesh
2. Arunachal Pradesh
3. Assam
4. Bihar
5. Chhattisgarh
6. Goa
7. Gujarat
8. Haryana
9. Himachal Pradesh
10. Jharkhand
11. Karnataka
12. Kerala
13. Madhya Pradesh
14. Maharashtra
15. Manipur
16. Meghalaya
17. Mizoram
18. Nagaland
19. Odisha
20. Punjab
21. Rajasthan
22. Sikkim
23. Tamil Nadu
24. Telangana
25. Tripura
26. Uttar Pradesh
27. Uttarakhand
28. West Bengal

### Important Data Availability Rule

All 28 States must be listed in the application.

If a State has no published NFHS-6 value, its dashboard must remain accessible and display an appropriate unavailable-data message.

For example, Manipur must remain in the State directory even though it was excluded from NFHS-6 fieldwork.

## 4.2 National Overview

The application may display official India-level estimates as a national reference.

National values must come from published official national data.

They must not be recalculated as simple averages of the 28 State values.

## 4.3 Exclusions

Union Territories are excluded from:

- State selection
- Geographic rankings
- Multi-State comparisons
- State dashboard pages
- Phase 2 district navigation
- User-facing geographic filters

---

# 5. Target Users

## 5.1 Researchers and Academics

Need detailed indicators, definitions, comparable data and downloadable datasets.

## 5.2 Policymakers and Public Health Professionals

Need geographic comparisons, changes between survey rounds and clear presentation of health indicators.

## 5.3 Students

Need simple visualizations and understandable explanations of survey data.

## 5.4 General Public

Need a user-friendly platform to explore health and demographic conditions in Indian States.

---

# 6. Functional Requirements — Phase 1

## FR-01: Homepage

The homepage will provide an introduction to the platform and quick access to the primary analysis features.

### Components

- Application header
- Main navigation
- Hero section
- NFHS-5 and NFHS-6 survey information
- Interactive India State map
- State search
- Featured indicators
- National comparison highlights
- Indicator category navigation
- Data source information
- Footer

### User Actions

Users can:

- Select a State.
- Search for a State.
- Open the national dashboard.
- Explore indicators.
- Open the comparison dashboard.

---

## FR-02: National Overview Dashboard

Display official India-level survey results.

### Components

- Selected indicator
- NFHS-5 value
- NFHS-6 value
- Absolute change
- Interpretation
- Grouped bar chart
- Source reference
- State-level comparison navigation

### Requirements

National data must be clearly distinguished from State data.

The dashboard must not imply that India-level estimates represent an unweighted average of the States.

---

## FR-03: Interactive India Map

The application will provide an interactive India map for State-level exploration.

### Features

- Display the 28 States.
- Highlight a State on hover or keyboard focus.
- Show State names in tooltips.
- Navigate to State dashboards on selection.
- Support indicator-based map coloring.
- Display map legends.
- Distinguish unavailable data.
- Provide a searchable State selector as an accessible alternative.

### Geographic Boundary Requirements

Use reliable geographic boundary data and document its source and version.

Union Territories must not be selectable as analysis regions.

The map must not misrepresent the geographic coverage of published survey data.

---

## FR-04: State Dashboard

Every State will have a dedicated page.

### Example URLs

`/states/haryana`

`/states/uttar-pradesh`

`/states/kerala`

### State Dashboard Components

1. State name and overview
2. Survey availability information
3. Indicator category selector
4. Indicator search
5. NFHS-5 value
6. NFHS-6 value
7. Absolute change
8. Grouped bar chart
9. Indicator comparison table
10. Source and methodology references

### Missing Data

If the selected indicator is unavailable, display:

"Data Not Available"

Provide a short explanation when the reason is known.

---

## FR-05: Multi-State Comparison

Users can select multiple States and compare a common indicator.

The 17 November 2026 All States UI update uses a scrollable checkbox panel and a performance table with State, NFHS-6, NFHS-5, and Actions columns. One indicator dropdown and two NFHS-6 sorting buttons replace the previous filter controls. The table exports XLS. The page ends after the comparison cards. The UI lists eight UTs with unavailable results while preserving the existing 28-State survey catalog and routes.

### Features

- Multi-State selection
- Indicator selection
- Grouped bar chart
- Sortable comparison table
- Numerical change column
- CSV export
- Missing-data labels

### Requirements

All selected States must use the same indicator definition and unit.

Non-comparable observations must not be included in calculated comparisons.

---

## FR-06: Indicator Explorer

Provide a searchable catalog of officially published NFHS indicators.

### Features

- Search by indicator name
- Browse by category
- View indicator definitions
- View survey availability
- View comparison status
- View measurement units
- Open detailed indicator pages
- Access source references

---

## FR-07: State Rankings

Allow users to rank States by a selected indicator.

### Ranking Options

- NFHS-5 value
- NFHS-6 value
- Absolute change
- Improvement or deterioration, where meaningful

### Requirements

- Exclude unavailable values from numerical ranking.
- Show the number of States included.
- Clearly identify the survey round.
- Support ascending and descending sorting.
- Do not equate a high numerical value with better performance for every indicator.

---

## FR-08: Search and Filtering

Provide filters for:

- State
- Indicator category
- Indicator name
- Survey round
- Data availability
- Comparison status
- Improvement/deterioration status

Filters should update the relevant visualizations without requiring a full page reload.

---

## FR-09: Data Export

Allow users to download selected data as CSV.

### Export Fields

- State
- Indicator ID
- Indicator name
- Category
- NFHS-5 value
- NFHS-6 value
- Unit
- Absolute change
- Comparison status
- Source reference

Exported data must preserve unavailable values and units.

---

## FR-10: Methodology and Sources

Provide dedicated pages explaining:

- NFHS survey rounds
- Indicator definitions
- Survey differences
- Comparison methodology
- Calculation formulas
- Data limitations
- Missing values
- Provisional estimates
- Official sources

---

# 7. Complete Indicator Mapping Requirements

Indicator mapping is a critical requirement of the application.

The platform must maintain a master indicator registry containing all indicators included in the official source documents selected for the project.

The final inventory must be generated and validated from those documents.

## 7.1 Indicator Categories

### Category 1: Household Characteristics

Examples:

- Electricity access
- Improved drinking water
- Sanitation facilities
- Clean cooking fuel
- Household assets
- Health insurance coverage

### Category 2: Population Characteristics

Examples:

- Sex ratio
- Age composition
- Household characteristics

### Category 3: Education and Literacy

Examples:

- Women's literacy
- Men's literacy
- School attendance
- Educational attainment

### Category 4: Marriage and Fertility

Examples:

- Marriage before age 18
- Total fertility rate
- Adolescent fertility
- Birth-related indicators

### Category 5: Family Planning

Examples:

- Contraceptive prevalence
- Modern contraceptive use
- Unmet need for family planning
- Method-specific contraceptive use

### Category 6: Maternal Health

Examples:

- Antenatal care
- Four or more antenatal visits
- Maternal health services
- Pregnancy-related care

### Category 7: Delivery Care

Examples:

- Institutional births
- Skilled birth attendance
- Caesarean section deliveries
- Postnatal care

### Category 8: Child Health

Examples:

- Full immunization
- Vaccination coverage
- Childhood illness
- Treatment-seeking behavior

### Category 9: Child Nutrition

Examples:

- Stunting
- Wasting
- Underweight
- Overweight
- Infant feeding practices

### Category 10: Adult Nutrition

Examples:

- Body mass index
- Underweight adults
- Overweight adults
- Obesity

### Category 11: Anaemia and Biochemical Indicators

Examples:

- Anaemia prevalence
- Blood sugar measurements
- Blood pressure measurements

### Category 12: Women's Empowerment

Examples:

- Household decision-making
- Financial inclusion
- Mobile phone ownership
- Bank account access
- Employment-related indicators

### Category 13: Healthcare Access

Examples:

- Health insurance
- Healthcare utilization
- Barriers to accessing care

### Category 14: Digital and Financial Inclusion

Examples, subject to survey availability:

- Digital literacy
- Digital financial transactions
- Direct Benefit Transfer
- Self-Help Group coverage

### Category 15: Other Published Indicators

Any remaining officially published indicators must be included in the indicator catalog.

---

# 8. Indicator Mapping Registry

## 8.1 Required Fields

| Field | Type | Purpose |
|---|---|---|
| `indicator_id` | String | Unique identifier |
| `category_id` | String | Category reference |
| `display_name` | String | UI label |
| `nfhs5_label` | String/null | Original NFHS-5 name |
| `nfhs6_label` | String/null | Original NFHS-6 name |
| `unit` | String | Measurement unit |
| `population_group` | String | Applicable population |
| `denominator` | String | Measurement base |
| `comparison_status` | Enum | Comparability |
| `better_direction` | Enum | Higher/lower/neutral |
| `nfhs5_source` | Reference | Official source |
| `nfhs6_source` | Reference | Official source |
| `notes` | String | Methodology notes |

## 8.2 Comparison Statuses

**Comparable**

Both survey rounds use compatible definitions, units and denominators.

**Definition Changed**

Related indicators exist in both surveys, but differences prevent automatic comparison.

**New in NFHS-6**

An indicator appears in NFHS-6 without a comparable NFHS-5 entry.

**Unavailable in NFHS-6**

An NFHS-5 indicator has no corresponding published NFHS-6 observation.

**Pending Verification**

The mapping has not been reviewed or validated.

## 8.3 Mapping Validation Rules

1. Match indicators using definitions, not names alone.
2. Compare units and denominators.
3. Verify age ranges and population groups.
4. Preserve official survey labels.
5. Maintain source references.
6. Never replace missing values with zero.
7. Never calculate differences for non-comparable indicators.
8. Flag definition changes.
9. Preserve provisional and suppression flags.
10. Record reviewer decisions and validation status.

---

# 9. Comparison Calculation Logic

## 9.1 Percentage-Point Change

For percentage-based indicators:

`Change (pp) = NFHS-6 − NFHS-5`

Illustrative example:

- NFHS-5: 60%
- NFHS-6: 70%
- Change: +10 percentage points

## 9.2 Relative Percentage Change

`Relative Change (%) = ((NFHS-6 − NFHS-5) / NFHS-5) × 100`

Calculate only when both values are valid and the baseline is nonzero.

## 9.3 Interpretation Logic

Each indicator must define whether higher or lower values are generally favorable.

Examples:

- Institutional births: Higher is generally favorable.
- Child stunting: Lower is generally favorable.
- Elevated blood sugar: Lower is generally favorable.
- Fertility indicators: Interpretation may be context-dependent.

### Important Rule

A numerical increase does not always indicate improvement.

The application must distinguish numerical direction from health interpretation.

## 9.4 Statistical Interpretation

The application must not automatically describe observed differences as statistically significant.

Statistical significance may only be reported when supported by appropriate survey methodology and data.

---

# 10. UI/UX Design Specification

## 10.1 Selected Design

**Option B — Modern Analytics Dashboard**

### Design Characteristics

- Light background
- Blue and indigo accents
- White dashboard cards
- Minimal borders and shadows
- Modern typography
- Clear spacing
- Responsive navigation
- Data-focused layout

## 10.2 Homepage Layout

1. Header and navigation
2. Hero section
3. Featured national indicators
4. Interactive India map
5. State selector
6. Featured comparison charts
7. Indicator categories
8. Sources and methodology
9. Footer

## 10.3 State Dashboard Layout

1. Breadcrumb navigation
2. State title
3. Survey availability information
4. Indicator category filter
5. Indicator search
6. Comparison metric cards
7. Grouped bar chart
8. Indicator comparison table
9. Source references

## 10.4 Chart Types

### Grouped Bar Charts

Primary visualization for comparing two survey rounds.

### Horizontal Bar Charts

Used for State rankings.

### Change Indicators

Show the numerical difference with its appropriate unit.

### Interactive Map

Used for geographic exploration and indicator-based visualization.

Line charts are not required for Phase 1.

## 10.5 Accessibility

- WCAG 2.2 AA target
- Keyboard navigation
- Accessible form controls
- Screen-reader-compatible data tables
- Sufficient color contrast
- Text alternatives to chart information
- Reduced-motion support

---

# 11. Navigation and URL Structure

Use readable, search-friendly URLs.

| Route | Page |
|---|---|
| `/` | Homepage |
| `/states` | All States, including the India reference and multi-State comparison |
| `/states/[slug]` | State Dashboard |
| `/dashboard`, `/compare` | Forward to All States |
| `/rankings` | Legacy URL forwards to All States, which includes State rankings |
| `/indicators` | Indicator Explorer |
| `/indicators/[slug]` | Indicator Detail |
| `/methodology` | Methodology |
| `/sources` | Sources |

### Example URLs

`/states/haryana`

`/states/maharashtra`

`/states/uttar-pradesh`

`/indicators/institutional-births`

All State pages must be statically generated.

---

# 12. Technical Architecture

## 12.1 Technology Stack

| Layer | Technology |
|---|---|
| Framework | Next.js App Router |
| Language | TypeScript |
| Styling | Tailwind CSS |
| UI Components | shadcn/ui |
| Charts | Recharts |
| Icons | Lucide React |
| Geographic Visualization | SVG/GeoJSON-based map |
| Data Storage | Static JSON |
| Hosting | Vercel |
| Version Control | GitHub |

## 12.2 Architecture Principles

- Static-first rendering
- No runtime backend
- No production database
- No authentication
- Build-time data preparation
- Client-side chart interaction
- Reusable components
- Version-controlled datasets
- District-ready geographic hierarchy

## 12.3 Data Processing Pipeline

1. Collect official NFHS source documents.
2. Extract indicator tables.
3. Normalize geographic names and identifiers.
4. Build the canonical indicator registry.
5. Map indicators between survey rounds.
6. Validate values and definitions.
7. Generate optimized JSON datasets.
8. Run automated tests.
9. Build the static Next.js application.
10. Deploy to Vercel.

## 12.4 Suggested Project Structure

```text
nfhs-comparison/
├── app/
│   ├── page.tsx
│   ├── dashboard/
│   ├── states/
│   │   └── [slug]/
│   ├── compare/
│   ├── rankings/
│   ├── indicators/
│   ├── methodology/
│   └── sources/
├── components/
│   ├── layout/
│   ├── dashboard/
│   ├── charts/
│   ├── maps/
│   ├── filters/
│   └── ui/
├── data/
│   ├── indicators/
│   ├── states/
│   ├── nfhs5/
│   ├── nfhs6/
│   └── sources/
├── lib/
│   ├── comparison/
│   ├── validation/
│   └── formatting/
├── scripts/
│   ├── extract/
│   ├── transform/
│   └── validate/
├── public/
│   └── maps/
└── tests/
```

---

# 13. Data Model

## 13.1 Survey

Fields:

- Survey ID
- Survey name
- Fieldwork period
- Publication status
- Source metadata

## 13.2 Geography

Fields:

- Geography ID
- Geography name
- Geography type
- Parent geography ID
- URL slug
- Availability status

Phase 1 geography types: India and State.

Phase 2 adds District.

## 13.3 Indicator

Fields:

- Indicator ID
- Name
- Category
- Definition
- Unit
- Population group
- Denominator
- Improvement direction

## 13.4 Observation

Fields:

- Survey ID
- Geography ID
- Indicator ID
- Numeric value or null
- Data availability status
- Source reference
- Source page
- Validation status

## 13.5 Source

Fields:

- Source ID
- Document title
- Publisher
- URL
- Publication date
- Document version
- Retrieval date

---

# 14. Phase 2 — District-Level Expansion

## 14.1 Objectives

Extend the State-level platform to district-level analysis.

## 14.2 Features

- District directory
- State-to-district navigation
- District dashboards
- District indicator comparison
- District rankings
- District maps
- Multi-district comparison
- District CSV export
- District source references

## 14.3 Proposed URLs

`/states/haryana/districts`

`/states/haryana/districts/gurugram`

## 14.4 Technical Requirements

- Reuse existing indicator definitions.
- Reuse chart components.
- Reuse comparison calculations.
- Extend geographic hierarchy.
- Handle district boundary changes.
- Validate district comparability across survey rounds.
- Preserve official district source references.

District-level comparisons must not assume unchanged administrative boundaries.

---

# 15. Non-Functional Requirements

## 15.1 Performance

Targets:

- Largest Contentful Paint: 2.5 seconds or less at the 75th percentile on mobile.
- Cumulative Layout Shift: 0.1 or less.
- Interaction to Next Paint: 200 milliseconds or less.
- Lazy-load noncritical charts and map assets.
- Avoid unnecessary large JSON downloads.

## 15.2 Responsiveness

Support:

- Desktop
- Tablet
- Mobile

Tables and charts must remain usable on narrow screens.

## 15.3 Reliability

- Deterministic calculations
- Build-time schema validation
- Graceful handling of missing data
- No broken geographic routes
- Clear error and empty states

## 15.4 Security

- HTTPS deployment
- No exposed secrets
- No unnecessary personal data collection
- Secure dependency management
- No user accounts in Phase 1

## 15.5 Browser Compatibility

Support current stable versions of major desktop and mobile browsers.

---

# 16. Testing Requirements

## 16.1 Data Tests

- Validate geographic IDs.
- Validate indicator IDs.
- Detect duplicate observations.
- Validate units and numeric formats.
- Verify missing-value handling.
- Verify source references.
- Verify comparison calculations.
- Verify mapping statuses.

## 16.2 Functional Tests

- State selection works.
- Map navigation works.
- Indicator search works.
- Category filters work.
- Multi-State comparison works.
- Rankings sort correctly.
- CSV exports work.
- Direct State URLs work.

## 16.3 UI Tests

- Desktop responsiveness
- Mobile responsiveness
- Keyboard accessibility
- Chart readability
- Long indicator labels
- Missing-data states
- Loading states

## 16.4 Deployment Tests

- Static build succeeds.
- Generated routes resolve.
- Assets load correctly.
- Vercel preview works.
- Production deployment works.

---

# 17. User Stories

### US-01: State Exploration

As a user, I want to select a State from the India map so that I can view its NFHS results.

### US-02: Survey Comparison

As a researcher, I want to compare NFHS-5 and NFHS-6 values so that I can understand changes between survey rounds.

### US-03: Indicator Search

As a student, I want to search for a specific health indicator so that I can quickly find relevant information.

### US-04: State Rankings

As an analyst, I want to rank States by a selected indicator so that I can identify geographic differences.

### US-05: Source Verification

As a researcher, I want to view the source of each value so that I can verify the information.

### US-06: Data Export

As an analyst, I want to download comparison data so that I can perform further analysis.

### US-07: Missing Data

As a user, I want unavailable data to be clearly labeled so that I do not misinterpret missing observations.

---

# 18. Development Roadmap

## Stage 1: Data Foundation

- Collect official NFHS-5 and NFHS-6 fact sheets.
- Build the complete indicator inventory.
- Create the indicator mapping registry.
- Validate State coverage.
- Define data schemas.

## Stage 2: UI/UX Design

- Homepage wireframe
- National dashboard wireframe
- State dashboard wireframe
- Comparison dashboard wireframe
- Indicator explorer wireframe
- Responsive design system

## Stage 3: Core Development

- Initialize Next.js project.
- Implement shared layout.
- Implement navigation.
- Build interactive India map.
- Build chart components.
- Build filters and search.
- Implement comparison calculations.

## Stage 4: Data Integration

- Generate validated JSON datasets.
- Integrate State observations.
- Implement missing-data states.
- Add source references.
- Implement CSV exports.

## Stage 5: Testing and Deployment

- Data validation
- Functional testing
- Responsive testing
- Accessibility testing
- Performance optimization
- Vercel deployment

## Stage 6: Phase 2 Development

- Prepare district datasets.
- Validate district boundaries.
- Build district pages.
- Implement district rankings and maps.
- Test district comparisons.

---

# 19. Risks and Mitigation

| Risk | Mitigation |
|---|---|
| Missing NFHS-6 State data | Display explicit unavailable status |
| Indicator definition changes | Manual comparability review |
| Provisional survey estimates | Preserve publication status |
| Incorrect PDF extraction | Automated and manual verification |
| Misleading numerical changes | Indicator-specific interpretation |
| Large datasets | Optimized static JSON |
| Geographic boundary differences | Versioned geographic references |
| District boundary changes | Geographic harmonization |
| Accessibility problems | WCAG-focused testing |
| Performance problems | Lazy loading and asset optimization |

---

# 20. Phase 1 Acceptance Criteria

Phase 1 will be considered ready for production when:

1. All 28 States appear in the State directory.
2. Union Territories are excluded from the application.
3. The national overview uses official India-level data.
4. Every State has a dedicated page.
5. The interactive India map works.
6. The complete published indicator inventory is documented.
7. Comparable indicators are correctly mapped.
8. All displayed values are validated against official sources.
9. Missing values are handled correctly.
10. Grouped bar charts work.
11. State rankings work.
12. Multi-State comparison works.
13. Search and filters work.
14. CSV export works.
15. Methodology and sources are available.
16. Responsive and accessibility tests pass.
17. The static Next.js build succeeds.
18. The application deploys successfully on Vercel.

---

# 21. Out of Scope

The following features are excluded from Phase 1:

- Union Territory dashboards
- District-level comparisons
- User accounts
- Authentication
- Production database
- Runtime backend APIs
- User-generated data editing
- Predictive analytics
- Automated causal analysis
- Hindi localization
- Native mobile applications

---

# 22. Deliverables

## Phase 1 Deliverables

1. Validated indicator mapping registry
2. Cleaned NFHS-5 dataset
3. Cleaned NFHS-6 dataset
4. State geography registry
5. Responsive Next.js application
6. Homepage
7. National dashboard
8. Interactive India map
9. 28 State dashboard routes
10. Multi-State comparison
11. Indicator explorer
12. State rankings
13. CSV export
14. Methodology documentation
15. Source documentation
16. Automated tests
17. GitHub repository
18. Live Vercel deployment

## Phase 2 Deliverables

1. District data registry
2. District mapping validation
3. District dashboards
4. District-level comparisons
5. District rankings
6. District maps
7. District CSV exports
8. District methodology documentation

---

# 23. Definition of Done

Phase 1 is complete when users can explore all 28 Indian States, access the published indicator inventory, compare validated NFHS-5 and NFHS-6 values, understand changes through interactive visualizations, verify source references and export data from a responsive static website deployed on Vercel.

The platform must remain architecturally ready for district-level expansion in Phase 2.

---

# 24. Final Project Scope

**Phase 1:** National overview + 28-State comparison dashboard.

**Phase 2:** District-level expansion within those 28 States.

**Excluded:** Union Territories.

**Design:** Modern Analytics Dashboard.

**Primary Visualization:** Grouped Bar Charts.

**Geographic Navigation:** Interactive India Map.

**Language:** English.

**Framework:** Next.js + TypeScript.

**Hosting:** Vercel.

**Data Source:** Official NFHS-5 and NFHS-6 publications.

**Status:** Requirements consolidated. Complete source-level indicator mapping, verified datasets, implementation and testing remain delivery tasks.
