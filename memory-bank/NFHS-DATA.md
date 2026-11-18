# NFHS Data

**Updated 14 November 2026.** This file contains the official State publication register, extracted fact-sheet totals and a reviewed comparison and ranking subset. NFHS-5 tables cover all 28 States plus India. NFHS-6 has no Manipur fact sheet. Extraction coverage and remaining checks are documented below.





- [Comparisons and best-performing States](#comparison-and-best-performing-states)
- [Fact-sheet tables by geography](#fact-sheet-tables-by-geography)

## Official source register

| ID | Publication | Use |
| --- | --- | --- |
| NFHS5-I | [MoHFW NFHS-5 Phase I compendium](https://www.mohfw.gov.in/sites/default/files/NFHS-5_Phase-I.pdf) and [12 December 2020 release](https://www.pib.gov.in/Pressreleaseshare.aspx?PRID=1680702&lang=2&reg=48) | First release batch, 17 in-scope States including Manipur |
| NFHS5-II | [MoHFW NFHS-5 Phase II compendium](https://www.mohfw.gov.in/sites/default/files/NFHS-5_Phase-II_0.pdf) and [24 November 2021 release](https://www.pib.gov.in/newsite/PrintRelease.aspx?relid=226976) | Official India reference and remaining 11 in-scope States |
| NFHS5-OGD | [MoHFW provisional data on data.gov.in](https://www.data.gov.in/resource/all-india-and-stateut-wise-factsheets-national-family-health-survey-nfhs-5-2019-2021) | Structured extraction candidate. Reconcile to the published fact sheets and retain footnotes. |
| NFHS6-IS | [IIPS NFHS-6 India and State/UT compendium](https://www.nfhsiips.in/nfhsuser/assets/National%20Family%20Health%20Survey%20%28NFHS-6%29%202023-2024%20Fact%20Sheets.pdf) and [29 May 2026 release](https://www.pib.gov.in/PressReleasePage.aspx?PRID=2266600&lang=1&reg=6) | Official India and State references, based on provisional results. Fieldwork ran May 2023–December 2024. |
| NFHS6-D | [IIPS NFHS-6 release details](https://www.nfhsiips.in/nfhsuser/release-details.php) | District compendiums released in batches on 20–21 August 2026. District-level coverage and boundary matching require separate review. |
| NFHS6-M | [MoHFW indicator publication update, 4 August 2026](https://www.pib.gov.in/PressReleaseIframePage.aspx?PRID=2294277&lang=2&reg=48) | Explains selected fact-sheet coverage and the separate ICMR source for anaemia estimates |
| NFHS5-S | [IIPS NFHS-5 survey notes](https://www.nfhsiips.in/nfhsuser/nfhs5.php) | Confirms the 2019–2021 round and the provisional status of fact-sheet results |

## Geographic coverage

Compared the NFHS-5 release lists and NFHS-6 compendium table of contents with the 28 States in PRD §4.1. Numbers below are printed NFHS-6 fact-sheet start pages. NFHS-5 publication batches are separate from the portal's product phases.

| Geography | NFHS-5 publication | NFHS-6 publication |
| --- | --- | --- |
| India | NFHS5-II | NFHS6-IS p. 3 |
| Andhra Pradesh | NFHS5-I | NFHS6-IS p. 9 |
| Arunachal Pradesh | NFHS5-II | NFHS6-IS p. 13 |
| Assam | NFHS5-I | NFHS6-IS p. 17 |
| Bihar | NFHS5-I | NFHS6-IS p. 21 |
| Chhattisgarh | NFHS5-II | NFHS6-IS p. 25 |
| Goa | NFHS5-I | NFHS6-IS p. 29 |
| Gujarat | NFHS5-I | NFHS6-IS p. 33 |
| Haryana | NFHS5-II | NFHS6-IS p. 37 |
| Himachal Pradesh | NFHS5-I | NFHS6-IS p. 41 |
| Jharkhand | NFHS5-II | NFHS6-IS p. 45 |
| Karnataka | NFHS5-I | NFHS6-IS p. 49 |
| Kerala | NFHS5-I | NFHS6-IS p. 53 |
| Madhya Pradesh | NFHS5-II | NFHS6-IS p. 57 |
| Maharashtra | NFHS5-I | NFHS6-IS p. 61 |
| Manipur | NFHS5-I | Unavailable. Survey coverage excluded Manipur. |
| Meghalaya | NFHS5-I | NFHS6-IS p. 65 |
| Mizoram | NFHS5-I | NFHS6-IS p. 69 |
| Nagaland | NFHS5-I | NFHS6-IS p. 73 |
| Odisha | NFHS5-II | NFHS6-IS p. 77 |
| Punjab | NFHS5-II | NFHS6-IS p. 81 |
| Rajasthan | NFHS5-II | NFHS6-IS p. 85 |
| Sikkim | NFHS5-I | NFHS6-IS p. 89 |
| Tamil Nadu | NFHS5-II | NFHS6-IS p. 93 |
| Telangana | NFHS5-I | NFHS6-IS p. 97 |
| Tripura | NFHS5-I | NFHS6-IS p. 101 |
| Uttar Pradesh | NFHS5-II | NFHS6-IS p. 105 |
| Uttarakhand | NFHS5-II | NFHS6-IS p. 109 |
| West Bengal | NFHS5-I | NFHS6-IS p. 113 |

Keep Manipur in the directory and show its published NFHS-5 observations when available. Store its NFHS-6 values as null with the geography-level reason. Use the published India estimates with a coverage note and keep Union Territories out of portal geography filters.

State fact sheets use Appendix 2 of the Ministry NFHS-6 PDF (viewer pages 179–180) for household, women and men sample counts. The State dataset has 101 numbered NFHS-6 rows for each covered State and 131 NFHS-5 rows for every State. The complete fact-sheet view presents the 101 NFHS-6 rows in source order, followed by 111 original NFHS-5 reference rows outside the reviewed mappings. Historical totals from the NFHS-6 publication are labeled as such. Their original suppression and small-sample statuses are retained. Population under 5 and under 15 have historical totals where published and await approved cross-round mappings before displaying changes. Anaemia observations are available from NFHS-5.

## India-level checks

The following examples use the official Total columns. The comparison checks cover the cited fact-sheet definitions and apply to these reviewed India observations.

| Indicator | NFHS5-II India row and value | NFHS6-IS India row and value | Result |
| --- | --- | --- | --- |
| Total fertility rate | 22 · 2.0 | 18 · 2.0 | Comparable as published. Change 0.0 children per woman. |
| Institutional births | 50 · 88.6% | 35 · 90.6% | Comparable as published. Both use births in the preceding five years. Change +2.0 percentage points. |
| Stunting in children under five | 81 · 35.5% | 69 · 29.3% | Comparable as published. Both use the WHO height-for-age threshold below −2 standard deviations. Change −6.2 percentage points. |
| Children aged 6–23 months receiving an adequate diet | 80 · 11.3% | 68 · 15.3% | Pending verification. NFHS6-IS row 68 prints 11.0% for the NFHS-5 baseline. Preserve both references and withhold the change until the baseline is reconciled. |
| Anaemia in children aged 6–59 months | 92 · 67.1% | Unavailable in selected release | Keep the NFHS-5 value and leave the NFHS-6 value and change empty. The separate ICMR survey does not supply an NFHS-6 observation. |

## Implications for implementation

- For Phase 1 cross-round comparisons, use Total. The NFHS-6 compendium provides NFHS-6 Urban, Rural, and Total but only NFHS-5 Total. Match strata explicitly if the project adds urban/rural comparisons later.
- Keep card-only full vaccination separate from vaccination based on a card or maternal recall. NFHS6-IS India rows 44 and 45 distinguish the methods. The release highlights 83.8% to 87.1% for the card-only row.
- Check publication of every proposed indicator. Survey questionnaire topics such as digital literacy and self-help groups do not by themselves establish that estimates appear in the selected fact sheets.
- Retain source-specific suppression, small-sample and provisional flags. Keep published zero distinct from unavailable or suppressed values.

## Extraction and remaining validation

- Extract and reconcile the complete indicator inventory and all in-scope observations. Capture publication version, geography, printed page, row, stratum, unit, definition, source flags, and any conflicts.
- Review all candidate cross-round mappings against footnotes and measurement definitions, including unresolved NFHS-5 baseline discrepancies. Verify all displayed and exported values before release.
- Inventory district sheets by parent State and survey round, then reconcile boundary vintages and check which indicators are published and comparable at district level.

- Download editions used for extraction are the [NFHS-5 Phase I NHM PDF](https://nhm.gov.in/uhc-day/Session%202/NFHS-5%20State%20Factsheet%20Compendium_Phase-I%20%281%29.pdf), [NFHS-5 Phase II survey PDF](https://dhsprogram.com/pubs/pdf/OF43/NFHS-5_India_and_State_Factsheet_Compendium_Phase-II.pdf), and [NFHS-6 Ministry PDF](https://www.mohfw-dohfw.gov.in/static/uploads/2026/05/111ff4a13ca36b5cabb7f94aec5bb0ce.pdf). IIPS source-table rows supplement the Ministry PDF where its text layer is incomplete.
- Review rows against original footnotes before production use. Comparisons and ranks outside the reviewed subset remain pending.

## Comparison and best-performing States

Best performance means the most favorable published Total in each round, with all ties shown. Higher or lower is chosen from the indicator definition. Context-dependent measures have no best-performance label. India and Union Territories are outside State rankings. Parenthesized small-sample estimates and suppressed cells are excluded from ranks and changes. Coverage counts reflect eligible estimates. The per-State change column uses matched, agreeing baselines, with percentages expressed in percentage points.

Only the indicators below have a reviewed comparison rule in this file. The source tables retain other indicators for definition review. The NFHS-6 edition’s own historical Total is retained alongside the original NFHS-5 Total wherever extracted. A disagreement blocks the change.

| Indicator | Favorable direction | NFHS-5 best | NFHS-6 best | Largest favorable change among eligible pairs | Eligible pairs |
| --- | --- | --- | --- | --- | --- |
| Household electricity access | Higher | Goa (100.0, n=28) | Himachal Pradesh, Sikkim (99.8, n=27) | Uttar Pradesh (4.8, n=20) | 27 |
| Female population age 6+ ever attended school | Higher | Kerala (95.5, n=28) | Kerala (96.6, n=27) | Karnataka (4.8, n=21) | 27 |
| Women with 10 or more years of schooling | Higher | Kerala (77.0, n=28) | Kerala (86.6, n=27) | Arunachal Pradesh (11.0, n=26) | 27 |
| Men with 10 or more years of schooling | Higher | Goa (76.6, n=28) | Kerala (82.1, n=27) | Arunachal Pradesh (13.2, n=23) | 27 |
| Women age 20–24 married before age 18 | Lower | Himachal Pradesh (5.4, n=28) | Kerala (2.9, n=27) | Assam (-6.5, n=23) | 27 |
| Total fertility rate, children per woman | Context | Context-dependent | Context-dependent | — | 27 |
| Total unmet need for family planning | Lower | Andhra Pradesh (4.7, n=28) | Andhra Pradesh (4.4, n=27) | Mizoram (-10.9, n=16) | 24 |
| First-trimester antenatal check-up | Higher | Kerala (93.6, n=28) | Goa (92.1, n=27) | Goa (21.8, n=23) | 27 |
| At least four antenatal care visits | Higher | Goa (93.0, n=28) | Kerala (88.6, n=27) | Andhra Pradesh (18.0, n=11) | 13 |
| Institutional births | Higher | Kerala (99.8, n=28) | Kerala, Tamil Nadu (99.7, n=27) | Nagaland (16.5, n=22) | 27 |
| Births attended by skilled health personnel | Higher | Kerala (100.0, n=28) | Kerala (99.8, n=27) | Nagaland (19.1, n=20) | 26 |
| Caesarean births | Context | Context-dependent | Context-dependent | — | 26 |
| Full vaccination, card or maternal recall | Higher | Odisha (90.5, n=28) | Goa (93.8, n=27) | Goa (11.9, n=8) | 9 |
| Full vaccination, card only | Higher | Himachal Pradesh (96.4, n=28) | Sikkim (95.1, n=27) | Assam (15.9, n=20) | 27 |
| BCG vaccination | Higher | West Bengal (98.6, n=28) | Goa (98.6, n=27) | Mizoram (9.2, n=14) | 25 |
| Child stunting | Lower | Sikkim (22.3, n=28) | Goa (19.4, n=27) | West Bengal (-11.4, n=27) | 27 |
| Child wasting | Lower | Mizoram (9.8, n=28) | Mizoram (8.1, n=27) | Nagaland (-10.2, n=14) | 25 |
| Severe child wasting | Lower | Manipur (3.4, n=28) | Uttarakhand (2.0, n=27) | Gujarat (-5.2, n=22) | 25 |
| Child underweight | Lower | Mizoram (12.7, n=28) | Sikkim (11.2, n=27) | Nagaland (-14.7, n=15) | 27 |
| Child overweight | Lower | Madhya Pradesh (2.0, n=28) | Uttar Pradesh (0.5, n=27) | Tripura (-5.4, n=24) | 25 |

## Fact-sheet tables by geography

Totals are shown as printed. Parentheses indicate a small-sample estimate. Asterisk means suppressed, and na means unavailable as printed. Row numbers are local to each fact sheet. PDF pages use one-based viewer numbering. The historical NFHS-5 column in the NFHS-6 tables comes from the later publication. The separate NFHS-5 tables show the original publication totals.

- [India](#india)
- [Andhra Pradesh](#andhra-pradesh)
- [Arunachal Pradesh](#arunachal-pradesh)
- [Assam](#assam)
- [Bihar](#bihar)
- [Chhattisgarh](#chhattisgarh)
- [Goa](#goa)
- [Gujarat](#gujarat)
- [Haryana](#haryana)
- [Himachal Pradesh](#himachal-pradesh)
- [Jharkhand](#jharkhand)
- [Karnataka](#karnataka)
- [Kerala](#kerala)
- [Madhya Pradesh](#madhya-pradesh)
- [Maharashtra](#maharashtra)
- [Manipur](#manipur)
- [Meghalaya](#meghalaya)
- [Mizoram](#mizoram)
- [Nagaland](#nagaland)
- [Odisha](#odisha)
- [Punjab](#punjab)
- [Rajasthan](#rajasthan)
- [Sikkim](#sikkim)
- [Tamil Nadu](#tamil-nadu)
- [Telangana](#telangana)
- [Tripura](#tripura)
- [Uttar Pradesh](#uttar-pradesh)
- [Uttarakhand](#uttarakhand)
- [West Bengal](#west-bengal)


### India

**NFHS-5** · NFHS5-II · 131 indicator rows.

| Row | Indicator | Total | PDF page |
| --- | --- | --- | --- |
| 1 | Female population age 6 years and above who ever attended school (%) | 71.8 | 7 |
| 2 | Population below age 15 years (%) | 26.5 | 7 |
| 3 | Sex ratio of the total population (females per 1,000 males) | 1,020 | 7 |
| 4 | Sex ratio at birth for children born in the last five years (females per 1,000 males) | 929 | 7 |
| 5 | Children under age 5 years whose birth was registered with the civil authority (%) | 89.1 | 7 |
| 6 | Deaths in the last 3 years registered with the civil authority (%) | 70.8 | 7 |
| 7 | Population living in households with electricity (%) | 96.8 | 7 |
| 8 | Population living in households with an improved drinking-water source1 (%) | 95.9 | 7 |
| 9 | Population living in households that use an improved sanitation facility 2 (%) | 70.2 | 7 |
| 10 | Households using clean fuel for cooking3 (%) | 58.6 | 7 |
| 11 | Households using iodized salt (%) | 94.3 | 7 |
| 12 | Households with any usual member covered under a health insurance/financing scheme (%) | 41.0 | 7 |
| 13 | Children age 5 years who attended pre-primary school during the school year 2019-20 (%) | 13.6 | 7 |
| 14 | Women who are literate 4 (%) | 71.5 | 7 |
| 15 | Men who are literate4 (%) | 84.4 | 7 |
| 16 | Women with 10 or more years of schooling (%) | 41.0 | 7 |
| 17 | Men with 10 or more years of schooling (%) | 50.2 | 7 |
| 18 | Women who have ever used the internet (%) | 33.3 | 7 |
| 19 | Men who have ever used the internet (%) | 57.1 | 7 |
| 20 | Women age 20-24 years married before age 18 years (%) | 23.3 | 7 |
| 21 | Men age 25-29 years married before age 21 years (%) | 17.7 | 7 |
| 22 | Total fertility rate (children per woman) | 2.0 | 7 |
| 23 | Women age 15-19 years who were already mothers or pregnant at the time of the survey (%) | 6.8 | 7 |
| 24 | Adolescent fertility rate for women age 15 -19 years5 | 43 | 7 |
| 25 | Neonatal mortality rate (NNMR) | 24.9 | 7 |
| 26 | Infant mortality rate (IMR) | 35.2 | 7 |
| 27 | Under-five mortality rate (U5MR) | 41.9 | 7 |
| 28 | Any method6 (%) | 66.7 | 7 |
| 29 | Any modern method 6 (%) | 56.5 | 7 |
| 30 | Female sterilization (%) | 37.9 | 7 |
| 31 | Male sterilization (%) | 0.3 | 7 |
| 32 | IUD/PPIUD (%) | 2.1 | 7 |
| 33 | Pill (%) | 5.1 | 7 |
| 34 | Condom (%) | 9.5 | 7 |
| 35 | Injectables (%) | 0.6 | 7 |
| 36 | Total unmet need7 (%) | 9.4 | 7 |
| 37 | Unmet need for spacing7 (%) | 4.0 | 7 |
| 38 | Health worker ever talked to female non-users about family planning (%) | 23.9 | 7 |
| 39 | Current users ever told about side effects of current method8 (%) | 62.4 | 7 |
| 40 | Mothers who had an antenatal check-up in the first trimester (%) | 70.0 | 8 |
| 41 | Mothers who had at least 4 antenatal care visits (%) | 58.1 | 8 |
| 42 | Mothers whose last birth was protected against neonatal tetanus9 (%) | 92.0 | 8 |
| 43 | Mothers who consumed iron folic acid for 100 days or more when they were pregnant (%) | 44.1 | 8 |
| 44 | Mothers who consumed iron folic acid for 180 days or more when they were pregnant (%) | 26.0 | 8 |
| 45 | Registered pregnancies for which the mother received a Mother and Child Protection (MCP) | 95.9 | 8 |
| 46 | Mothers who received postnatal care from a doctor/nurse/LHV/ANM/midwife/other health | 78.0 | 8 |
| 47 | Average out-of-pocket expenditure per delivery in a public health facility (Rs.) | 2,916 | 8 |
| 48 | Children born at home who were taken to a health facility for a check -up within 24 hours of | 4.2 | 8 |
| 49 | Children who received postnatal care from a doctor/nurse/LHV/ANM/midwife/other health | 79.1 | 8 |
| 50 | Institutional births (%) | 88.6 | 8 |
| 51 | Institutional births in public facility (%) | 61.9 | 8 |
| 52 | Home births that were conducted by skilled health personnel 10 (%) | 3.2 | 8 |
| 53 | Births attended by skilled health personnel10 (%) | 89.4 | 8 |
| 54 | Births delivered by caesarean section (%) | 21.5 | 8 |
| 55 | Births in a private health facility that were delivered by caesarean section (%) | 47.4 | 8 |
| 56 | Births in a public health facility that were delivered by caesarean section (%) | 14.3 | 8 |
| 57 | Children age 12-23 months fully vaccinated based on information from either vaccination card | 76.4 | 8 |
| 58 | Children age 12-23 months fully vaccinated based on information from vaccination card | 83.8 | 8 |
| 59 | Children age 12-23 months who have received BCG (%) | 95.2 | 8 |
| 60 | Children age 12-23 months who have received 3 doses of polio vaccine13 (%) | 80.5 | 8 |
| 61 | Children age 12-23 months who have received 3 doses of penta or DPT vaccine (%) | 86.7 | 8 |
| 62 | Children age 12-23 months who have received the first dose of measles-containing | 87.9 | 8 |
| 63 | Children age 24-35 months who have received a second dose of measles-containing | 31.9 | 8 |
| 64 | Children age 12-23 months who have received 3 doses of rotavirus vaccine 14 (%) | 36.4 | 8 |
| 65 | Children age 12-23 months who have received 3 doses of penta or hepatitis B vaccine (%) | 83.9 | 8 |
| 66 | Children age 9-35 months who received a vitamin A dose in the last 6 months (%) | 71.2 | 8 |
| 67 | Children age 12-23 months who received most of their vaccinations in a public health | 94.5 | 8 |
| 68 | Children age 12-23 months who received most of their vaccinations in a private health | 4.2 | 8 |
| 69 | Prevalence of diarrhoea in the 2 weeks preceding the survey (%) | 7.3 | 8 |
| 70 | Children with diarrhoea in the 2 weeks preceding the survey who received oral rehydration | 60.6 | 8 |
| 71 | Children with diarrhoea in the 2 weeks preceding the survey who received zinc (%) | 30.5 | 8 |
| 72 | Children with diarrhoea in the 2 weeks preceding the survey taken to a health facility or health | 68.9 | 8 |
| 73 | Prevalence of symptoms of acute respiratory infection (ARI) in the 2 weeks preceding the | 2.8 | 8 |
| 74 | Children with fever or symptoms of ARI in the 2 weeks preceding the survey taken to a health | 69.0 | 8 |
| 75 | Children under age 3 years breastfed within one hour of birth15 (%) | 41.8 | 9 |
| 76 | Children under age 6 months exclusively breastfed16 (%) | 63.7 | 9 |
| 77 | Children age 6-8 months receiving solid or semi-solid food and breastmilk16 (%) | 45.9 | 9 |
| 78 | Breastfeeding children age 6 -23 months receiving an adequate diet 16, 17 (%) | 11.1 | 9 |
| 79 | Non-breastfeeding children age 6 -23 months receiving an adequate diet 16, 17 (%) | 12.7 | 9 |
| 80 | Total children age 6 -23 months receiving an adequate diet 16, 17 (%) | 11.3 | 9 |
| 81 | Children under 5 years who are stunted (height-for-age)18 (%) | 35.5 | 9 |
| 82 | Children under 5 years who are wasted (weight-for-height)18 (%) | 19.3 | 9 |
| 83 | Children under 5 years who are severely wasted (weight-for-height)19 (%) | 7.7 | 9 |
| 84 | Children under 5 years who are underweight (weight-for-age)18 (%) | 32.1 | 9 |
| 85 | Children under 5 years who are overweight (weight-for-height)20 (%) | 3.4 | 9 |
| 86 | Women whose Body Mass Index (BMI) is below normal (BMI <18.5 kg/m 2)21 (%) | 18.7 | 9 |
| 87 | Men whose Body Mass Index (BMI) is below normal (BMI <18.5 kg/m2) (%) | 16.2 | 9 |
| 88 | Women who are overweight or obese (BMI ≥25.0 kg/m2)21 (%) | 24.0 | 9 |
| 89 | Men who are overweight or obese (BMI ≥25.0 kg/m2) (%) | 22.9 | 9 |
| 90 | Women who have high risk waist-to-hip ratio (≥0.85) (%) | 56.7 | 9 |
| 91 | Men who have high risk waist -to-hip ratio (≥0.90) (%) | 47.7 | 9 |
| 92 | Children age 6-59 months who are anaemic (<11.0 g/dl) 22 (%) | 67.1 | 9 |
| 93 | Non-pregnant women age 15-49 years who are anaemic (<12.0 g/dl)22 (%) | 57.2 | 9 |
| 94 | Pregnant women age 15-49 years who are anaemic (<11.0 g/dl)22 (%) | 52.2 | 9 |
| 95 | All women age 15 -49 years who are anaemic 22 (%) | 57.0 | 9 |
| 96 | All women age 15-19 years who are anaemic22 (%) | 59.1 | 9 |
| 97 | Men age 15-49 years who are anaemic (<13.0 g/dl)22 (%) | 25.0 | 9 |
| 98 | Men age 15 -19 years who are anaemic (<13.0 g/dl) 22 (%) | 31.1 | 9 |
| 99 | Blood sugar level - high (141-160 mg/dl)23 (%) | 6.1 | 9 |
| 100 | Blood sugar level - very high (>160 mg/dl) 23 (%) | 6.3 | 9 |
| 101 | Blood sugar level - high or very high (>140 mg/dl) or taking medicine to control blood | 13.5 | 9 |
| 102 | Blood sugar level - high (141-160 mg/dl)23 (%) | 7.3 | 9 |
| 103 | Blood sugar level - very high (>160 mg/dl) 23 (%) | 7.2 | 9 |
| 104 | Blood sugar level - high or very high (>140 mg/dl) or taking medicine to control blood | 15.6 | 9 |
| 105 | Mildly elevated blood pressure (Systolic 140 -159 mm of Hg and/or | 12.4 | 9 |
| 106 | Moderately or severely elevated blood pressure (Systolic ≥160 mm of Hg and/or | 5.2 | 9 |
| 107 | Elevated blood pressure (Systolic ≥140 mm of Hg and/or Diastolic ≥90 mm of Hg) or taking | 21.3 | 9 |
| 108 | Mildly elevated blood pressure (Systolic 140 -159 mm of Hg and/or | 15.7 | 9 |
| 109 | Moderately or severely elevated blood pressure (Systolic ≥160 mm of Hg and/or | 5.7 | 9 |
| 110 | Elevated blood pressure (Systolic ≥140 mm of Hg and/or Diastolic ≥90 mm of Hg) or taking | 24.0 | 9 |
| 111 | Ever undergone a screening test for cervical cancer (%) | 1.9 | 10 |
| 112 | Ever undergone a breast examination for breast cancer (%) | 0.9 | 10 |
| 113 | Ever undergone an oral cavity examination for oral cancer (%) | 0.9 | 10 |
| 114 | Ever undergone an oral cavity examination for oral cancer (%) | 1.2 | 10 |
| 115 | Women who have comprehensive knowledge 24 of HIV/AIDS (%) | 21.6 | 10 |
| 116 | Men who have comprehensive knowledge24 of HIV/AIDS (%) | 30.7 | 10 |
| 117 | Women who know that consistent condom use can reduce the chance of getting | 68.4 | 10 |
| 118 | Men who know that consistent condom use can reduce the chance of getting HIV/AIDS (%) | 82.0 | 10 |
| 119 | Currently married women who usually participate in three household decisions25 (%) | 88.7 | 10 |
| 120 | Women who worked in the last 12 months and were paid in cash (%) | 25.4 | 10 |
| 121 | Women owning a house and/or land (alone or jointly with others) (%) | 43.3 | 10 |
| 122 | Women having a bank or savings account that they themselves use (%) | 78.6 | 10 |
| 123 | Women having a mobile phone that they themselves use (%) | 54.0 | 10 |
| 124 | Women age 15-24 years who use hygienic methods of protection during their | 77.3 | 10 |
| 125 | Ever-married women age 18-49 years who have ever experienced spousal violence27 (%) | 29.3 | 10 |
| 126 | Ever-married women age 18-49 years who have experienced physical violence during any | 3.1 | 10 |
| 127 | Young women age 18-29 years who experienced sexual violence by age 18 (%) | 1.5 | 10 |
| 128 | Women age 15 years and above who use any kind of tobacco (%) | 8.9 | 10 |
| 129 | Men age 15 years and above who use any kind of tobacco (%) | 38.0 | 10 |
| 130 | Women age 15 years and above who consume alcohol (%) | 1.3 | 10 |
| 131 | Men age 15 years and above who consume alcohol (%) | 18.8 | 10 |

**NFHS-6** · 101 extracted indicator rows.

| Row | Indicator | NFHS-5 Total as printed in NFHS-6 | NFHS-6 Total | Reviewed change | PDF page |
| --- | --- | --- | --- | --- | --- |
| 1 | Population below age 5 years (%) | 8.2 | 8.0 | — | 26 |
| 2 | Population below age 15 years (%) | 26.5 | 25.5 | — | 26 |
| 3 | Population age 60 years and above (%) | 11.8 | 12.9 | — | 26 |
| 4 | Household electricity access | 96.8 | 98.3 | — | 26 |
| 5 | Population living in households with an improved drinking-water source 1 (%) | 95.9 | 96.5 | — | 26 |
| 6 | Households using iodized salt (%) | 94.3 | 94.2 | — | 26 |
| 7 | Households with any usual member covered under a health insurance/financing scheme (%) | 41.0 | 60.2 | — | 26 |
| 8 | Households with any usual member having a bank account/post office account (%) | 95.7 | 98.2 | — | 26 |
| 9 | Female population age 6+ ever attended school | 71.8 | 73.7 | — | 26 |
| 10 | Households with any usual female members owning a house and/or land (alone or jointly with | 14.0 | 18.8 | — | 26 |
| 11 | Children age 2-4 years who attended pre-school (%) | 40.1 | 47.0 | — | 26 |
| 12 | Women with 10 or more years of schooling | 41.0 | 46.4 | — | 26 |
| 13 | Men with 10 or more years of schooling | 50.2 | 54.6 | — | 26 |
| 14 | Women who have ever used the internet (%) | 33.3 | 64.3 | — | 26 |
| 15 | Men who have ever used the internet (%) | 51.2 | 80.5 | — | 26 |
| 16 | Women age 20–24 married before age 18 | 23.3 | 20.1 | — | 26 |
| 17 | Men age 25-29 years married before age 21 years (%) | 17.7 | 15.9 | — | 26 |
| 18 | Total fertility rate, children per woman | 2.0 | 2.0 | — | 26 |
| 19 | Women age 15-19 years who were already mothers or pregnant at the time of the survey (%) | 6.8 | 6.7 | — | 26 |
| 20 | Any method2 (%) | 66.7 | 69.1 | — | 26 |
| 21 | Any modern method2 (%) | 56.4 | 52.7 | — | 26 |
| 22 | Any traditional method (%) | 10.3 | 16.4 | — | 26 |
| 23 | Female sterilization (%) | 37.9 | 36.5 | — | 26 |
| 24 | Male sterilization (%) | 0.3 | 0.5 | — | 26 |
| 25 | Total unmet need for family planning | 9.4 | 8.5 | — | 26 |
| 26 | Unmet need for spacing 3 (%) | 4.0 | 4.5 | — | 26 |
| 27 | Unmet need for limiting3 (%) | 5.4 | 4.0 | — | 26 |
| 28 | First-trimester antenatal check-up | 70.0 | 76.2 | — | 26 |
| 29 | Mothers who had any antenatal care visits (%) | 92.6 | 95.9 | — | 26 |
| 30 | At least four antenatal care visits | 58.5 | 65.2 | — | 26 |
| 31 | Mothers whose last birth was protected against neonatal tetanus4 (%) | 92.0 | 93.8 | — | 26 |
| 32 | Mothers who consumed iron folic acid for 100 days or more when they were pregnant (%) | 44.1 | 54.9 | — | 26 |
| 33 | Mothers who consumed iron folic acid for 180 days or more when they were pregnant (%) | 26.0 | 37.8 | — | 26 |
| 34 | Registered pregnancies for which the mother received a Mother and Child Protection (MCP) | 95.9 | 95.6 | — | 26 |
| 35 | Institutional births | 88.6 | 90.6 | — | 26 |
| 36 | Institutional births in public facility (%) | 61.9 | 58.6 | — | 26 |
| 37 | Births attended by skilled health personnel | 89.4 | 91.3 | — | 26 |
| 38 | Caesarean births | 21.5 | 27.2 | — | 26 |
| 39 | Births in a private health facility that were delivered by caesarean section (%) | 47.4 | 54.1 | — | 26 |
| 40 | Births in a public health facility that were delivered by caesarean section (%) | 14.3 | 16.9 | — | 26 |
| 41 | Mothers who received postnatal care from a doctor/nurse/LHV/ANM/midwife/other health | 78.0 | 82.8 | — | 27 |
| 42 | Children born at home who were taken to a health facility for a check-up within 24 hours of | 4.2 | 6.4 | — | 27 |
| 43 | Children who received postnatal care from a doctor/nurse/LHV/ANM/midwife/ other health | 79.1 | 85.3 | — | 27 |
| 44 | Full vaccination, card or maternal recall | 76.6 | 82.6 | — | 27 |
| 45 | Full vaccination, card only | 83.8 | 87.1 | — | 27 |
| 46 | Children age 12-23 months who have received any vaccine (%) | 96.4 | 96.4 | — | 27 |
| 47 | BCG vaccination | 95.2 | 95.0 | — | 27 |
| 48 | Children age 12-23 months who have received 3 doses of polio vaccine 8 (%) | 80.5 | 85.0 | — | 27 |
| 49 | Children age 12-23 months who have received 3 doses of pentavalent vaccine (%) | 87.0 | 89.2 | — | 27 |
| 50 | Children age 12-23 months who have received the first dose of measles-containing | 87.9 | 91.7 | — | 27 |
| 51 | Children age 24-35 months who have received a second dose of measles-containing | 58.6 | 71.8 | — | 27 |
| 52 | Children age 12-23 months who have received birth dose of hepatitis B vaccine (%) | 67.4 | 77.6 | — | 27 |
| 53 | Children age 12-23 months who have received 3 doses of rotavirus vaccine (%) | 36.4 | 85.4 | — | 27 |
| 54 | Children age 9-35 months who received a vitamin A dose in the last 6 months (%) | 71.2 | 74.6 | — | 27 |
| 55 | Children age 12-23 months who received most of their vaccinations in a public health | 94.5 | 95.6 | — | 27 |
| 56 | Children age 12-23 months who received most of their vaccinations in a private health | 4.2 | 3.1 | — | 27 |
| 57 | Prevalence of diarrhoea in the 2 weeks preceding the survey (%) | 7.3 | 7.9 | — | 27 |
| 58 | Prevalence of severe diarrhoea in the 2 weeks preceding the survey (%) | 0.7 | 0.5 | — | 27 |
| 59 | Prevalence of symptoms of acute respiratory infection (ARI) in the 2 weeks preceding the | 2.8 | 1.9 | — | 27 |
| 60 | Children with fever or symptoms of ARI in the 2 weeks preceding the survey taken to a health | 69.0 | 68.8 | — | 27 |
| 61 | Children under age 3 years breastfed within one hour of birth9 (%) | 41.8 | 50.1 | — | 27 |
| 62 | Children under age 6 months exclusively breastfed 10 (%) | 63.7 | 55.8 | — | 27 |
| 63 | Children under age 6 months currently breastfeeding 10 (%) | 95.1 | 95.6 | — | 27 |
| 64 | Children under age 6 months exclusively breastfed or breastfeeding and consuming plain | 82.8 | 85.3 | — | 27 |
| 65 | Children age 6-8 months receiving solid or semi-solid food and breastmilk 10 (%) | 45.9 | 59.5 | — | 27 |
| 66 | Breastfeeding children age 6-23 months receiving an adequate diet 10, 11 (%) | 10.8 | 15.1 | — | 27 |
| 67 | Non-breastfeeding children age 6-23 months receiving an adequate diet 10, 11 (%) | 12.3 | 16.3 | — | 27 |
| 68 | Total children age 6-23 months receiving an adequate diet 10, 11 (%) | 11.0 | 15.3 | — | 27 |
| 69 | Child stunting | 35.5 | 29.3 | — | 27 |
| 70 | Child wasting | 19.3 | 19.0 | — | 27 |
| 71 | Severe child wasting | 7.7 | 5.2 | — | 27 |
| 72 | Child underweight | 32.1 | 31.8 | — | 27 |
| 73 | Child overweight | 3.4 | 1.3 | — | 27 |
| 74 | Women whose Body Mass Index (BMI) is below normal (BMI <18.5 kg/m 2)15 (%) | 18.7 | 19.7 | — | 28 |
| 75 | Men whose Body Mass Index (BMI) is below normal (BMI <18.5 kg/m 2) (%) | 16.2 | 19.7 | — | 28 |
| 76 | Women aged 15–49 overweight or obese (BMI ≥25), % | 24.0 | 30.7 | — | 28 |
| 77 | Men aged 15–49 overweight or obese (BMI ≥25), % | 22.9 | 27.3 | — | 28 |
| 78 | Blood sugar level - high (141-160 mg/dl)16 (%) | 6.1 | 7.5 | — | 28 |
| 79 | Blood sugar level - very high (>160 mg/dl)16 (%) | 6.3 | 9.1 | — | 28 |
| 80 | Blood sugar level - high or very high (>140 mg/dl) or taking medicine to control blood | 13.5 | 17.8 | — | 28 |
| 81 | Blood sugar level - high (141-160 mg/dl)16 (%) | 7.3 | 8.8 | — | 28 |
| 82 | Blood sugar level - very high (>160 mg/dl)16 (%) | 7.1 | 10.9 | — | 28 |
| 83 | Blood sugar level - high or very high (>140 mg/dl) or taking medicine to control blood | 15.6 | 20.9 | — | 28 |
| 84 | Mildly elevated blood pressure (Systolic 140-159 mm of Hg and/or | 12.4 | 9.4 | — | 28 |
| 85 | Women aged 15+ with moderately or severely elevated blood pressure, % | 5.2 | 4.8 | — | 28 |
| 86 | Women aged 15+ with elevated blood pressure or taking medicine for it, % | 21.3 | 19.4 | — | 28 |
| 87 | Mildly elevated blood pressure (Systolic 140-159 mm of Hg and/or | 15.7 | 12.4 | — | 28 |
| 88 | Men aged 15+ with moderately or severely elevated blood pressure, % | 5.7 | 3.3 | — | 28 |
| 89 | Men aged 15+ with elevated blood pressure or taking medicine for it, % | 24.0 | 22.1 | — | 28 |
| 90 | Currently married women who usually participate in three household decisions 17 (%) | 88.7 | 89.0 | — | 28 |
| 91 | Women who worked in the last 12 months and were paid in cash (%) | 25.4 | 30.8 | — | 28 |
| 92 | Women having a bank or savings account that they themselves use (%) | 78.6 | 89.0 | — | 28 |
| 93 | Women having a mobile phone that they themselves use (%) | 53.9 | 63.6 | — | 28 |
| 94 | Women age 15-24 years who use hygienic methods of protection during their menstrual | 77.6 | 79.2 | — | 28 |
| 95 | Ever-married women age 18-49 years who have ever experienced spousal violence 19 (%) | 29.2 | 22.3 | — | 28 |
| 96 | Ever-married women age 18-49 years who have experienced physical violence during any | 3.1 | 2.7 | — | 28 |
| 97 | Young women age 18-29 years who experienced sexual violence by age 18 (%) | 1.2 | 0.7 | — | 28 |
| 98 | Women age 15 years and above who use any kind of tobacco (%) | 8.9 | 8.4 | — | 28 |
| 99 | Men age 15 years and above who use any kind of tobacco (%) | 38.0 | 36.3 | — | 28 |
| 100 | Women age 15 years and above who consume alcohol (%) | 1.3 | 1.1 | — | 28 |
| 101 | Men age 15 years and above who consume alcohol (%) | 18.7 | 18.9 | — | 28 |

### Andhra Pradesh

**NFHS-5** · NFHS5-I · 131 indicator rows.

| Row | Indicator | Total | PDF page |
| --- | --- | --- | --- |
| 1 | Female population age 6 years and above who ever attended school (%) | 65.6 | 16 |
| 2 | Population below age 15 years (%) | 22.2 | 16 |
| 3 | Sex ratio of the total population (females per 1,000 males) | 1,045 | 16 |
| 4 | Sex ratio at birth for children born in the last five years (females per 1,000 males) | 934 | 16 |
| 5 | Children under age 5 years whose birth was registered with the civil authority (%) | 92.2 | 16 |
| 6 | Deaths in the last 3 years registered with the civil authority (%) | 80.2 | 16 |
| 7 | Population living in households with electricity (%) | 99.5 | 16 |
| 8 | Population living in households with an improved drinking-water source1 (%) | 96.7 | 16 |
| 9 | Population living in households that use an improved sanitation facility2 (%) | 77.3 | 16 |
| 10 | Households using clean fuel for cooking3 (%) | 83.6 | 16 |
| 11 | Households using iodized salt (%) | 83.1 | 16 |
| 12 | Households with any usual member covered under a health insurance/financing scheme (%) | 70.2 | 16 |
| 13 | Children age 5 years who attended pre-primary school during the school year 2019-20 (%) | 9.9 | 16 |
| 14 | Women who are literate4 (%) | 68.6 | 16 |
| 15 | Men who are literate4 (%) | 79.5 | 16 |
| 16 | Women with 10 or more years of schooling (%) | 39.6 | 16 |
| 17 | Men with 10 or more years of schooling (%) | 47.9 | 16 |
| 18 | Women who have ever used the internet (%) | 21.0 | 16 |
| 19 | Men who have ever used the internet (%) | 48.8 | 16 |
| 20 | Women age 20-24 years married before age 18 years (%) | 29.3 | 16 |
| 21 | Men age 25-29 years married before age 21 years (%) | 14.5 | 16 |
| 22 | Total fertility rate (children per woman) | 1.7 | 16 |
| 23 | Women age 15-19 years who were already mothers or pregnant at the time of the survey (%) | 12.6 | 16 |
| 24 | Adolescent fertility rate for women age 15-19 years5 | 67 | 16 |
| 25 | Neonatal mortality rate (NNMR) | 19.9 | 16 |
| 26 | Infant mortality rate (IMR) | 30.3 | 16 |
| 27 | Under-five mortality rate (U5MR) | 35.2 | 16 |
| 28 | Any method6 (%) | 71.1 | 16 |
| 29 | Any modern method6 (%) | 70.8 | 16 |
| 30 | Female sterilization (%) | 69.6 | 16 |
| 31 | Male sterilization (%) | 0.4 | 16 |
| 32 | IUD/PPIUD (%) | 0.2 | 16 |
| 33 | Pill (%) | 0.1 | 16 |
| 34 | Condom (%) | 0.5 | 16 |
| 35 | Injectables (%) | 0.0 | 16 |
| 36 | Total unmet need7 (%) | 4.7 | 16 |
| 37 | Unmet need for spacing7 (%) | 2.6 | 16 |
| 38 | Health worker ever talked to female non-users about family planning (%) | 18.6 | 16 |
| 39 | Current users ever told about side effects of current method8 (%) | 28.9 | 16 |
| 40 | Mothers who had an antenatal check-up in the first trimester (%) | 81.7 | 17 |
| 41 | Mothers who had at least 4 antenatal care visits (%) | 67.5 | 17 |
| 42 | Mothers whose last birth was protected against neonatal tetanus9 (%) | 92.8 | 17 |
| 43 | Mothers who consumed iron folic acid for 100 days or more when they were pregnant (%) | 70.3 | 17 |
| 44 | Mothers who consumed iron folic acid for 180 days or more when they were pregnant (%) | 41.1 | 17 |
| 45 | Registered pregnancies for which the mother received a Mother and Child Protection (MCP) card (%) | 96.5 | 17 |
| 46 | Mothers who received postnatal care from a doctor/nurse/LHV/ANM/midwife/other health personnel within 2 days of delivery (%) | 90.7 | 17 |
| 47 | Average out-of-pocket expenditure per delivery in a public health facility (Rs.) | 3,105 | 17 |
| 48 | Children born at home who were taken to a health facility for a check-up within 24 hours of birth (%) | 17.2 | 17 |
| 49 | Children who received postnatal care from a doctor/nurse/LHV/ANM/midwife/other health personnel within 2 days of delivery (%) | 92.3 | 17 |
| 50 | Institutional births (%) | 96.5 | 17 |
| 51 | Institutional births in public facility (%) | 50.4 | 17 |
| 52 | Home births that were conducted by skilled health personnel10 (%) | 1.3 | 17 |
| 53 | Births attended by skilled health personnel10 (%) | 96.1 | 17 |
| 54 | Births delivered by caesarean section (%) | 42.4 | 17 |
| 55 | Births in a private health facility that were delivered by caesarean section (%) | 63.0 | 17 |
| 56 | Births in a public health facility that were delivered by caesarean section (%) | 26.6 | 17 |
| 57 | Children age 12-23 months fully vaccinated based on information from either vaccination card or mother's recall11 (%) | 73.0 | 17 |
| 58 | Children age 12-23 months fully vaccinated based on information from vaccination card only12 (%) | 88.0 | 17 |
| 59 | Children age 12-23 months who have received BCG (%) | 94.6 | 17 |
| 60 | Children age 12-23 months who have received 3 doses of polio vaccine13 (%) | 75.0 | 17 |
| 61 | Children age 12-23 months who have received 3 doses of penta or DPT vaccine (%) | 88.4 | 17 |
| 62 | Children age 12-23 months who have received the first dose of measles-containing vaccine (MCV) (%) | 87.1 | 17 |
| 63 | Children age 24-35 months who have received a second dose of measles-containing vaccine (MCV) (%) | 30.0 | 17 |
| 64 | Children age 12-23 months who have received 3 doses of rotavirus vaccine14 (%) | 75.5 | 17 |
| 65 | Children age 12-23 months who have received 3 doses of penta or hepatitis B vaccine (%) | 85.3 | 17 |
| 66 | Children age 9-59 months who received a vitamin A dose in the last 6 months (%) | 80.0 | 17 |
| 67 | Children age 12-23 months who received most of their vaccinations in a public health facility (%) | 94.2 | 17 |
| 68 | Children age 12-23 months who received most of their vaccinations in a private health facility (%) | 4.3 | 17 |
| 69 | Prevalence of diarrhoea in the 2 weeks preceding the survey (%) | 7.2 | 17 |
| 70 | Children with diarrhoea in the 2 weeks preceding the survey who received oral rehydration salts (ORS) (%) | 62.5 | 17 |
| 71 | Children with diarrhoea in the 2 weeks preceding the survey who received zinc (%) | 41.8 | 17 |
| 72 | Children with diarrhoea in the 2 weeks preceding the survey taken to a health facility or health provider (%) | 74.3 | 17 |
| 73 | Prevalence of symptoms of acute respiratory infection (ARI) in the 2 weeks preceding the survey (%) | 2.4 | 17 |
| 74 | Children with fever or symptoms of ARI in the 2 weeks preceding the survey taken to a health facility or health provider (%) | 70.2 | 17 |
| 75 | Children under age 3 years breastfed within one hour of birth15 (%) | 52.0 | 18 |
| 76 | Children under age 6 months exclusively breastfed16 (%) | 68.0 | 18 |
| 77 | Children age 6-8 months receiving solid or semi-solid food and breastmilk16 (%) | 50.8 | 18 |
| 78 | Breastfeeding children age 6-23 months receiving an adequate diet16, 17 (%) | 8.2 | 18 |
| 79 | Non-breastfeeding children age 6-23 months receiving an adequate diet16, 17 (%) | 12.1 | 18 |
| 80 | Total children age 6-23 months receiving an adequate diet16, 17 (%) | 9.3 | 18 |
| 81 | Children under 5 years who are stunted (height-for-age)18 (%) | 31.2 | 18 |
| 82 | Children under 5 years who are wasted (weight-for-height)18 (%) | 16.1 | 18 |
| 83 | Children under 5 years who are severely wasted (weight-for-height)19 (%) | 6.0 | 18 |
| 84 | Children under 5 years who are underweight (weight-for-age)18 (%) | 29.6 | 18 |
| 85 | Children under 5 years who are overweight (weight-for-height)20 (%) | 2.7 | 18 |
| 86 | Women whose Body Mass Index (BMI) is below normal (BMI <18.5 kg/m2)21 (%) | 14.8 | 18 |
| 87 | Men whose Body Mass Index (BMI) is below normal (BMI <18.5 kg/m2) (%) | 16.5 | 18 |
| 88 | Women who are overweight or obese (BMI ≥25.0 kg/m2)21 (%) | 36.3 | 18 |
| 89 | Men who are overweight or obese (BMI ≥25.0 kg/m2) (%) | 31.1 | 18 |
| 90 | Women who have high risk waist-to-hip ratio (≥0.85) (%) | 48.9 | 18 |
| 91 | Men who have high risk waist-to-hip ratio (≥0.90) (%) | 53.0 | 18 |
| 92 | Children age 6-59 months who are anaemic (<11.0 g/dl)22 (%) | 63.2 | 18 |
| 93 | Non-pregnant women age 15-49 years who are anaemic (<12.0 g/dl)22 (%) | 59.0 | 18 |
| 94 | Pregnant women age 15-49 years who are anaemic (<11.0 g/dl)22 (%) | 53.7 | 18 |
| 95 | All women age 15-49 years who are anaemic22 (%) | 58.8 | 18 |
| 96 | All women age 15-19 years who are anaemic22 (%) | 60.1 | 18 |
| 97 | Men age 15-49 years who are anaemic (<13.0 g/dl)22 (%) | 16.2 | 18 |
| 98 | Men age 15-19 years who are anaemic (<13.0 g/dl)22 (%) | 18.7 | 18 |
| 99 | Blood sugar level - high (141-160 mg/dl)23 (%) | 7.3 | 18 |
| 100 | Blood sugar level - very high (>160 mg/dl)23 (%) | 10.4 | 18 |
| 101 | Blood sugar level - high or very high (>140 mg/dl) or taking medicine to control blood sugar level23 (%) | 19.5 | 18 |
| 102 | Blood sugar level - high (141-160 mg/dl)23 (%) | 8.4 | 18 |
| 103 | Blood sugar level - very high (>160 mg/dl)23 (%) | 11.4 | 18 |
| 104 | Blood sugar level - high or very high (>140 mg/dl) or taking medicine to control blood sugar level23 (%) | 21.8 | 18 |
| 105 | Mildly elevated blood pressure (Systolic 140-159 mm of Hg and/or Diastolic 90-99 mm of Hg) (%) | 13.6 | 18 |
| 106 | Moderately or severely elevated blood pressure (Systolic ≥160 mm of Hg and/or Diastolic ≥100 mm of Hg) (%) | 5.9 | 18 |
| 107 | Elevated blood pressure (Systolic ≥140 mm of Hg and/or Diastolic ≥90 mm of Hg) or taking medicine to control blood pressure (%) | 25.3 | 18 |
| 108 | Mildly elevated blood pressure (Systolic 140-159 mm of Hg and/or Diastolic 90-99 mm of Hg) (%) | 17.6 | 18 |
| 109 | Moderately or severely elevated blood pressure (Systolic ≥160 mm of Hg and/or Diastolic ≥100 mm of Hg) (%) | 7.1 | 18 |
| 110 | Elevated blood pressure (Systolic ≥140 mm of Hg and/or Diastolic ≥90 mm of Hg) or taking medicine to control blood pressure (%) | 29.0 | 18 |
| 111 | Ever undergone a screening test for cervical cancer (%) | 4.7 | 19 |
| 112 | Ever undergone a breast examination for breast cancer (%) | 0.8 | 19 |
| 113 | Ever undergone an oral cavity examination for oral cancer (%) | 7.3 | 19 |
| 114 | Ever undergone an oral cavity examination for oral cancer (%) | 6.3 | 19 |
| 115 | Women who have comprehensive knowledge24 of HIV/AIDS (%) | 24.6 | 19 |
| 116 | Men who have comprehensive knowledge24 of HIV/AIDS (%) | 38.6 | 19 |
| 117 | Women who know that consistent condom use can reduce the chance of getting HIV/AIDS (%) | 63.0 | 19 |
| 118 | Men who know that consistent condom use can reduce the chance of getting HIV/AIDS (%) | 82.6 | 19 |
| 119 | Currently married women who usually participate in three household decisions25 (%) | 84.1 | 19 |
| 120 | Women who worked in the last 12 months and were paid in cash (%) | 42.1 | 19 |
| 121 | Women owning a house and/or land (alone or jointly with others) (%) | 47.8 | 19 |
| 122 | Women having a bank or savings account that they themselves use (%) | 81.8 | 19 |
| 123 | Women having a mobile phone that they themselves use (%) | 48.9 | 19 |
| 124 | Women age 15-24 years who use hygienic methods of protection during their menstrual period26 (%) | 85.1 | 19 |
| 125 | Ever-married women age 18-49 years who have ever experienced spousal violence27 (%) | 30.0 | 19 |
| 126 | Ever-married women age 18-49 years who have experienced physical violence during any | 3.8 | 19 |
| 127 | Young women age 18-29 years who experienced sexual violence by age 18 (%) | 3.7 | 19 |
| 128 | Women age 15 years and above who use any kind of tobacco (%) | 3.8 | 19 |
| 129 | Men age 15 years and above who use any kind of tobacco (%) | 22.6 | 19 |
| 130 | Women age 15 years and above who consume alcohol (%) | 0.5 | 19 |
| 131 | Men age 15 years and above who consume alcohol (%) | 23.3 | 19 |

**NFHS-6** · 101 extracted indicator rows.

| Row | Indicator | NFHS-5 Total as printed in NFHS-6 | NFHS-6 Total | Reviewed change | PDF page |
| --- | --- | --- | --- | --- | --- |
| 1 | Population below age 5 years (%) | 6.9 | 6.9 | — | IIPS fact sheet |
| 2 | Population below age 15 years (%) | 22.2 | 21.1 | — | IIPS fact sheet |
| 3 | Population age 60 years and above (%) | 13.2 | 13.9 | — | IIPS fact sheet |
| 4 | Household electricity access | 99.5 | 99.7 | +0.2 | IIPS fact sheet |
| 5 | Population living in households with an improved drinking-water source 1 (%) | 96.7 | 97.6 | — | IIPS fact sheet |
| 6 | Households using iodized salt (%) | 83.1 | 97.3 | — | IIPS fact sheet |
| 7 | Households with any usual member covered under a health insurance/financing scheme (%) | 80.2 | 91.9 | — | IIPS fact sheet |
| 8 | Households with any usual member having a bank account/post office account (%) | 95.8 | 98.5 | — | IIPS fact sheet |
| 9 | Female population age 6+ ever attended school | 65.6 | 69.1 | +3.5 | IIPS fact sheet |
| 10 | Households with any usual female members owning a house and/or land (alone or jointly with | 27.7 | 31.9 | — | IIPS fact sheet |
| 11 | Children age 2-4 years who attended pre-school (%) | 75.4 | 69.8 | — | IIPS fact sheet |
| 12 | Women with 10 or more years of schooling | 39.6 | 48.4 | +8.8 | IIPS fact sheet |
| 13 | Men with 10 or more years of schooling | 47.9 | 59.5 | +11.6 | IIPS fact sheet |
| 14 | Women who have ever used the internet (%) | 21.0 | 63.6 | — | IIPS fact sheet |
| 15 | Men who have ever used the internet (%) | 41.9 | 83.7 | — | IIPS fact sheet |
| 16 | Women age 20–24 married before age 18 | 29.3 | 25.1 | -4.2 | IIPS fact sheet |
| 17 | Men age 25-29 years married before age 21 years (%) | 14.5 | 9.7 | — | IIPS fact sheet |
| 18 | Total fertility rate, children per woman | 1.7 | 1.8 | +0.1 | IIPS fact sheet |
| 19 | Women age 15-19 years who were already mothers or pregnant at the time of the survey (%) | 12.6 | 9.2 | — | IIPS fact sheet |
| 20 | Any method2 (%) | 71.1 | 74.7 | — | IIPS fact sheet |
| 21 | Any modern method2 (%) | 70.8 | 73.1 | — | IIPS fact sheet |
| 22 | Any traditional method (%) | 0.3 | 1.6 | — | IIPS fact sheet |
| 23 | Female sterilization (%) | 69.6 | 69.5 | — | IIPS fact sheet |
| 24 | Male sterilization (%) | 0.4 | 0.8 | — | IIPS fact sheet |
| 25 | Total unmet need for family planning | 4.7 | 4.4 | -0.3 | IIPS fact sheet |
| 26 | Unmet need for spacing 3 (%) | 2.7 | 2.8 | — | IIPS fact sheet |
| 27 | Unmet need for limiting3 (%) | 2.0 | 1.6 | — | IIPS fact sheet |
| 28 | First-trimester antenatal check-up | 81.7 | 88.6 | +6.9 | IIPS fact sheet |
| 29 | Mothers who had any antenatal care visits (%) | 99.2 | 99.7 | — | IIPS fact sheet |
| 30 | At least four antenatal care visits | 67.5 | 85.5 | +18.0 | IIPS fact sheet |
| 31 | Mothers whose last birth was protected against neonatal tetanus4 (%) | 92.8 | 96.8 | — | IIPS fact sheet |
| 32 | Mothers who consumed iron folic acid for 100 days or more when they were pregnant (%) | 70.3 | 86.2 | — | IIPS fact sheet |
| 33 | Mothers who consumed iron folic acid for 180 days or more when they were pregnant (%) | 41.1 | 56.3 | — | IIPS fact sheet |
| 34 | Registered pregnancies for which the mother received a Mother and Child Protection (MCP) | 96.5 | 98.7 | — | IIPS fact sheet |
| 35 | Institutional births | 96.5 | 98.4 | +1.9 | IIPS fact sheet |
| 36 | Institutional births in public facility (%) | 50.4 | 45.8 | — | IIPS fact sheet |
| 37 | Births attended by skilled health personnel | 96.1 | 98.7 | +2.6 | IIPS fact sheet |
| 38 | Caesarean births | 42.4 | 52.2 | +9.8 | IIPS fact sheet |
| 39 | Births in a private health facility that were delivered by caesarean section (%) | 63.0 | 66.2 | — | IIPS fact sheet |
| 40 | Births in a public health facility that were delivered by caesarean section (%) | 26.6 | 38.0 | — | IIPS fact sheet |
| 41 | Mothers who received postnatal care from a doctor/nurse/LHV/ANM/midwife/other health | 90.7 | 97.4 | — | IIPS fact sheet |
| 42 | Children born at home who were taken to a health facility for a check-up within 24 hours of | 17.2 | \* | — | IIPS fact sheet |
| 43 | Children who received postnatal care from a doctor/nurse/LHV/ANM/midwife/ other health | 92.3 | 97.1 | — | IIPS fact sheet |
| 44 | Full vaccination, card or maternal recall | 73.2 | 87.7 | — | IIPS fact sheet |
| 45 | Full vaccination, card only | 88.0 | 92.3 | +4.3 | IIPS fact sheet |
| 46 | Children age 12-23 months who have received any vaccine (%) | 95.0 | 97.7 | — | IIPS fact sheet |
| 47 | BCG vaccination | 94.6 | 96.6 | +2.0 | IIPS fact sheet |
| 48 | Children age 12-23 months who have received 3 doses of polio vaccine 8 (%) | 75.0 | 88.9 | — | IIPS fact sheet |
| 49 | Children age 12-23 months who have received 3 doses of pentavalent vaccine (%) | 88.5 | 94.5 | — | IIPS fact sheet |
| 50 | Children age 12-23 months who have received the first dose of measles-containing | 87.1 | 96.0 | — | IIPS fact sheet |
| 51 | Children age 24-35 months who have received a second dose of measles-containing | 57.5 | 84.1 | — | IIPS fact sheet |
| 52 | Children age 12-23 months who have received birth dose of hepatitis B vaccine (%) | 79.5 | 91.8 | — | IIPS fact sheet |
| 53 | Children age 12-23 months who have received 3 doses of rotavirus vaccine (%) | 75.5 | 92.7 | — | IIPS fact sheet |
| 54 | Children age 9-35 months who received a vitamin A dose in the last 6 months (%) | 80.3 | 91.3 | — | IIPS fact sheet |
| 55 | Children age 12-23 months who received most of their vaccinations in a public health | 94.2 | 94.2 | — | IIPS fact sheet |
| 56 | Children age 12-23 months who received most of their vaccinations in a private health | 4.3 | 3.7 | — | IIPS fact sheet |
| 57 | Prevalence of diarrhoea in the 2 weeks preceding the survey (%) | 7.2 | 4.8 | — | IIPS fact sheet |
| 58 | Prevalence of severe diarrhoea in the 2 weeks preceding the survey (%) | 0.7 | 0.1 | — | IIPS fact sheet |
| 59 | Prevalence of symptoms of acute respiratory infection (ARI) in the 2 weeks preceding the | 2.4 | 1.0 | — | IIPS fact sheet |
| 60 | Children with fever or symptoms of ARI in the 2 weeks preceding the survey taken to a health | 70.2 | 66.5 | — | IIPS fact sheet |
| 61 | Children under age 3 years breastfed within one hour of birth9 (%) | 52.0 | 67.2 | — | IIPS fact sheet |
| 62 | Children under age 6 months exclusively breastfed 10 (%) | 68.0 | 69.5 | — | IIPS fact sheet |
| 63 | Children under age 6 months currently breastfeeding 10 (%) | 93.3 | 96.5 | — | IIPS fact sheet |
| 64 | Children under age 6 months exclusively breastfed or breastfeeding and consuming plain | 79.6 | 87.0 | — | IIPS fact sheet |
| 65 | Children age 6-8 months receiving solid or semi-solid food and breastmilk 10 (%) | 50.8 | 72.0 | — | IIPS fact sheet |
| 66 | Breastfeeding children age 6-23 months receiving an adequate diet 10, 11 (%) | 8.1 | 17.0 | — | IIPS fact sheet |
| 67 | Non-breastfeeding children age 6-23 months receiving an adequate diet 10, 11 (%) | 11.4 | 28.2 | — | IIPS fact sheet |
| 68 | Total children age 6-23 months receiving an adequate diet 10, 11 (%) | 9.0 | 19.2 | — | IIPS fact sheet |
| 69 | Child stunting | 31.2 | 24.6 | -6.6 | IIPS fact sheet |
| 70 | Child wasting | 16.1 | 12.3 | -3.8 | IIPS fact sheet |
| 71 | Severe child wasting | 6.0 | 2.7 | -3.3 | IIPS fact sheet |
| 72 | Child underweight | 29.6 | 23.2 | -6.4 | IIPS fact sheet |
| 73 | Child overweight | 2.7 | 1.5 | -1.2 | IIPS fact sheet |
| 74 | Women whose Body Mass Index (BMI) is below normal (BMI <18.5 kg/m 2)15 (%) | 14.8 | 10.8 | — | IIPS fact sheet |
| 75 | Men whose Body Mass Index (BMI) is below normal (BMI <18.5 kg/m 2) (%) | 16.5 | 12.9 | — | IIPS fact sheet |
| 76 | Women aged 15–49 overweight or obese (BMI ≥25), % | 36.3 | 47.9 | — | IIPS fact sheet |
| 77 | Men aged 15–49 overweight or obese (BMI ≥25), % | 31.1 | 41.5 | — | IIPS fact sheet |
| 78 | Blood sugar level - high (141-160 mg/dl)16 (%) | 7.3 | 7.0 | — | IIPS fact sheet |
| 79 | Blood sugar level - very high (>160 mg/dl)16 (%) | 10.4 | 12.2 | — | IIPS fact sheet |
| 80 | Blood sugar level - high or very high (>140 mg/dl) or taking medicine to control blood | 19.5 | 21.8 | — | IIPS fact sheet |
| 81 | Blood sugar level - high (141-160 mg/dl)16 (%) | 8.4 | 7.5 | — | IIPS fact sheet |
| 82 | Blood sugar level - very high (>160 mg/dl)16 (%) | 11.4 | 13.9 | — | IIPS fact sheet |
| 83 | Blood sugar level - high or very high (>140 mg/dl) or taking medicine to control blood | 21.8 | 24.1 | — | IIPS fact sheet |
| 84 | Mildly elevated blood pressure (Systolic 140-159 mm of Hg and/or | 13.6 | 10.0 | — | IIPS fact sheet |
| 85 | Women aged 15+ with moderately or severely elevated blood pressure, % | 5.9 | 5.7 | — | IIPS fact sheet |
| 86 | Women aged 15+ with elevated blood pressure or taking medicine for it, % | 25.3 | 24.1 | — | IIPS fact sheet |
| 87 | Mildly elevated blood pressure (Systolic 140-159 mm of Hg and/or | 17.6 | 12.7 | — | IIPS fact sheet |
| 88 | Men aged 15+ with moderately or severely elevated blood pressure, % | 7.1 | 3.4 | — | IIPS fact sheet |
| 89 | Men aged 15+ with elevated blood pressure or taking medicine for it, % | 29.0 | 26.0 | — | IIPS fact sheet |
| 90 | Currently married women who usually participate in three household decisions 17 (%) | 84.1 | 84.0 | — | IIPS fact sheet |
| 91 | Women who worked in the last 12 months and were paid in cash (%) | 42.1 | 48.0 | — | IIPS fact sheet |
| 92 | Women having a bank or savings account that they themselves use (%) | 81.8 | 92.3 | — | IIPS fact sheet |
| 93 | Women having a mobile phone that they themselves use (%) | 48.9 | 64.1 | — | IIPS fact sheet |
| 94 | Women age 15-24 years who use hygienic methods of protection during their menstrual | 85.2 | 94.3 | — | IIPS fact sheet |
| 95 | Ever-married women age 18-49 years who have ever experienced spousal violence 19 (%) | 29.9 | 22.7 | — | IIPS fact sheet |
| 96 | Ever-married women age 18-49 years who have experienced physical violence during any | 3.8 | 1.9 | — | IIPS fact sheet |
| 97 | Young women age 18-29 years who experienced sexual violence by age 18 (%) | 0.8 | 0.0 | — | IIPS fact sheet |
| 98 | Women age 15 years and above who use any kind of tobacco (%) | 3.9 | 3.8 | — | IIPS fact sheet |
| 99 | Men age 15 years and above who use any kind of tobacco (%) | 22.6 | 18.8 | — | IIPS fact sheet |
| 100 | Women age 15 years and above who consume alcohol (%) | 0.5 | 0.6 | — | IIPS fact sheet |
| 101 | Men age 15 years and above who consume alcohol (%) | 23.1 | 23.3 | — | IIPS fact sheet |

### Arunachal Pradesh

**NFHS-5** · NFHS5-II · 131 indicator rows.

| Row | Indicator | Total | PDF page |
| --- | --- | --- | --- |
| 1 | Female population age 6 years and above who ever attended school (%) | 71.2 | 13 |
| 2 | Population below age 15 years (%) | 27.1 | 13 |
| 3 | Sex ratio of the total population (females per 1,000 males) | 997 | 13 |
| 4 | Sex ratio at birth for children born in the last five years (females per 1,000 males) | 979 | 13 |
| 5 | Children under age 5 years whose birth was registered with the civil authority (%) | 87.7 | 13 |
| 6 | Deaths in the last 3 years registered with the civil authority (%) | 34.5 | 13 |
| 7 | Population living in households with electricity (%) | 94.8 | 13 |
| 8 | Population living in households with an improved drinking -water source1 (%) | 93.7 | 13 |
| 9 | Population living in households that use an improved sanitation facility 2 (%) | 82.9 | 13 |
| 10 | Households using clean fuel for cooking3 (%) | 53.2 | 13 |
| 11 | Households using iodized salt (%) | 99.2 | 13 |
| 12 | Households with any usual member covered under a health insurance/financing scheme (%) | 29.3 | 13 |
| 13 | Children age 5 years who attended pre-primary school during the school year 2019-20 (%) | 5.9 | 13 |
| 14 | Women who are literate4 (%) | 71.3 | 13 |
| 15 | Men who are literate4 (%) | 85.7 | 13 |
| 16 | Women with 10 or more years of schooling (%) | 39.4 | 13 |
| 17 | Men with 10 or more years of schooling (%) | 48.2 | 13 |
| 18 | Women who have ever used the internet (%) | 52.9 | 13 |
| 19 | Men who have ever used the internet (%) | 71.6 | 13 |
| 20 | Women age 20-24 years married before age 18 years (%) | 18.9 | 13 |
| 21 | Men age 25-29 years married before age 21 years (%) | 20.8 | 13 |
| 22 | Total fertility rate (children per woman) | 1.8 | 13 |
| 23 | Women age 15-19 years who were already mothers or pregnant at the time of the survey (%) | 6.0 | 13 |
| 24 | Adolescent fertility rate for women age 15 -19 years5 | 38 | 13 |
| 25 | Neonatal mortality rate (NNMR) | 7.7 | 13 |
| 26 | Infant mortality rate (IMR) | 12.9 | 13 |
| 27 | Under-five mortality rate (U5MR) | 18.8 | 13 |
| 28 | Any method6 (%) | 59.1 | 13 |
| 29 | Any modern method6 (%) | 47.2 | 13 |
| 30 | Female sterilization (%) | 18.2 | 13 |
| 31 | Male sterilization (%) | 0.0 | 13 |
| 32 | IUD/PPIUD (%) | 6.2 | 13 |
| 33 | Pill (%) | 15.5 | 13 |
| 34 | Condom (%) | 4.7 | 13 |
| 35 | Injectables (%) | 1.0 | 13 |
| 36 | Total unmet need7 (%) | 12.5 | 13 |
| 37 | Unmet need for spacing7 (%) | 7.0 | 13 |
| 38 | Health worker ever talked to female non-users about family planning (%) | 19.4 | 13 |
| 39 | Current users ever told about side effects of current method 8 (%) | 73.7 | 13 |
| 40 | Mothers who had an antenatal check-up in the first trimester (%) | 53.1 | 14 |
| 41 | Mothers who had at least 4 antenatal care visits (%) | 36.5 | 14 |
| 42 | Mothers whose last birth was protected against neonatal tetanus9 (%) | 76.9 | 14 |
| 43 | Mothers who consumed iron folic acid for 100 days or more when they were pregnant (%) | 23.8 | 14 |
| 44 | Mothers who consumed iron folic acid for 180 days or more when they were pregnant (%) | 8.6 | 14 |
| 45 | Registered pregnancies for which the mother received a Mother and Child Protection (MCP) card (%) | 95.6 | 14 |
| 46 | Mothers who received postnatal care from a doctor/nurse/LHV/ANM/midwife/other health personnel within 2 days of delivery (%) | 56.4 | 14 |
| 47 | Average out-of-pocket expenditure per delivery in a public health facility (Rs.) | 9,731 | 14 |
| 48 | Children born at home who were taken to a health facility for a check -up within 24 hours of birth (%) | 2.3 | 14 |
| 49 | Children who received postnatal care from a doctor/nurse/LHV/ANM/midwife/other health personnel within 2 days of delivery (%) | 56.5 | 14 |
| 50 | Institutional births (%) | 79.2 | 14 |
| 51 | Institutional births in public facility (%) | 74.8 | 14 |
| 52 | Home births that were conducted by skilled health personnel 10 (%) | 4.0 | 14 |
| 53 | Births attended by skilled health personnel10 (%) | 82.1 | 14 |
| 54 | Births delivered by caesarean section (%) | 14.8 | 14 |
| 55 | Births in a private health facility that were delivered by caesarean section (%) | 47.3 | 14 |
| 56 | Births in a public health facility that were delivered by caesarean section (%) | 17.0 | 14 |
| 57 | Children age 12-23 months fully vaccinated based on information from either vaccination card or mother's recall11 (%) | 64.9 | 14 |
| 58 | Children age 12-23 months fully vaccinated based on information from vaccination card only12 (%) | 76.4 | 14 |
| 59 | Children age 12-23 months who have received BCG (%) | 87.9 | 14 |
| 60 | Children age 12-23 months who have received 3 doses of polio vaccine13 (%) | 69.0 | 14 |
| 61 | Children age 12-23 months who have received 3 doses of penta or DPT vaccine (%) | 77.7 | 14 |
| 62 | Children age 12-23 months who have received the first dose of measles-containing vaccine (MCV) (%) | 80.7 | 14 |
| 63 | Children age 24-35 months who have received a second dose of measles-containing vaccine (MCV) (%) | 27.4 | 14 |
| 64 | Children age 12-23 months who have received 3 doses of rotavirus vaccine14 (%) | 32.0 | 14 |
| 65 | Children age 12-23 months who have received 3 doses of penta or hepatitis B vaccine (%) | 73.0 | 14 |
| 66 | Children age 9-35 months who received a vitamin A dose in the last 6 months (%) | 69.7 | 14 |
| 67 | Children age 12-23 months who received most of their vaccinations in a public health facility (%) | 97.6 | 14 |
| 68 | Children age 12-23 months who received most of their vaccinations in a private health facility (%) | 0.7 | 14 |
| 69 | Prevalence of diarrhoea in the 2 weeks preceding the survey (%) | 5.1 | 14 |
| 70 | Children with diarrhoea in the 2 weeks preceding the survey who received oral rehydration salts (ORS) (%) | 62.7 | 14 |
| 71 | Children with diarrhoea in the 2 weeks preceding the survey who received zinc (%) | 27.9 | 14 |
| 72 | Children with diarrhoea in the 2 weeks preceding the survey taken to a health facility or health provider (%) | 53.4 | 14 |
| 73 | Prevalence of symptoms of acute respiratory infection (ARI) in the 2 weeks preceding the survey (%) | 2.1 | 14 |
| 74 | Children with fever or symptoms of ARI in the 2 weeks preceding the survey taken to a health facility or health provider (%) | 47.1 | 14 |
| 75 | Children under age 3 years breastfed within one hour of birth15 (%) | 52.0 | 15 |
| 76 | Children under age 6 months exclusively breastfed16 (%) | 63.4 | 15 |
| 77 | Children age 6-8 months receiving solid or semi-solid food and breastmilk16 (%) | 48.4 | 15 |
| 78 | Breastfeeding children age 6 -23 months receiving an adequate diet 16, 17 (%) | 23.8 | 15 |
| 79 | Non-breastfeeding children age 6 -23 months receiving an adequate diet 16, 17 (%) | 13.1 | 15 |
| 80 | Total children age 6 -23 months receiving an adequate diet 16, 17 (%) | 22.0 | 15 |
| 81 | Children under 5 years who are stunted (height -for-age)18 (%) | 28.0 | 15 |
| 82 | Children under 5 years who are wasted (weight-for-height)18 (%) | 13.1 | 15 |
| 83 | Children under 5 years who are severely wasted (weight-for-height)19 (%) | 6.5 | 15 |
| 84 | Children under 5 years who are underweight (weight-for-age)18 (%) | 15.4 | 15 |
| 85 | Children under 5 years who are overweight (weight-for-height)20 (%) | 9.7 | 15 |
| 86 | Women whose Body Mass Index (BMI) is below normal (BMI <18.5 kg/m 2)21 (%) | 5.7 | 15 |
| 87 | Men whose Body Mass Index (BMI) is below normal (BMI <18.5 kg/m2) (%) | 4.9 | 15 |
| 88 | Women who are overweight or obese (BMI ≥25.0 kg/m2)21 (%) | 23.9 | 15 |
| 89 | Men who are overweight or obese (BMI ≥25.0 kg/m 2) (%) | 27.6 | 15 |
| 90 | Women who have high risk waist -to-hip ratio (≥0.85) (%) | 68.9 | 15 |
| 91 | Men who have high risk waist -to-hip ratio (≥0.90) (%) | 46.1 | 15 |
| 92 | Children age 6-59 months who are anaemic (<11.0 g/dl) 22 (%) | 56.6 | 15 |
| 93 | Non-pregnant women age 15-49 years who are anaemic (<12.0 g/dl)22 (%) | 40.8 | 15 |
| 94 | Pregnant women age 15-49 years who are anaemic (<11.0 g/dl)22 (%) | 27.9 | 15 |
| 95 | All women age 15 -49 years who are anaemic 22 (%) | 40.3 | 15 |
| 96 | All women age 15-19 years who are anaemic22 (%) | 48.5 | 15 |
| 97 | Men age 15-49 years who are anaemic (<13.0 g/dl)22 (%) | 21.4 | 15 |
| 98 | Men age 15 -19 years who are anaemic (<13.0 g/dl) 22 (%) | 24.9 | 15 |
| 99 | Blood sugar level - high (141-160 mg/dl)23 (%) | 4.6 | 15 |
| 100 | Blood sugar level - very high (>160 mg/dl) 23 (%) | 3.1 | 15 |
| 101 | Blood sugar level - high or very high (>140 mg/dl) or taking medicine to control blood sugar level23 (%) | 8.4 | 15 |
| 102 | Blood sugar level - high (141-160 mg/dl)23 (%) | 6.7 | 15 |
| 103 | Blood sugar level - very high (>160 mg/dl) 23 (%) | 4.3 | 15 |
| 104 | Blood sugar level - high or very high (>140 mg/dl) or taking medicine to control blood sugar level23 (%) | 11.9 | 15 |
| 105 | Mildly elevated blood pressure (Systolic 140 -159 mm of Hg and/or Diastolic 90-99 mm of Hg) (%) | 16.4 | 15 |
| 106 | Moderately or severely elevated blood pressure (Systolic ≥160 mm of Hg and/or Diastolic ≥100 mm of Hg) (%) | 6.7 | 15 |
| 107 | Elevated blood pressure (Systolic ≥140 mm of Hg and/or Diastolic ≥90 mm of Hg) or taking medicine to control blood pressure (%) | 24.9 | 15 |
| 108 | Mildly elevated blood pressure (Systolic 140 -159 mm of Hg and/or Diastolic 90-99 mm of Hg) (%) | 22.8 | 15 |
| 109 | Moderately or severely ele vated blood pressure (Systolic ≥160 mm of Hg and/or Diastolic ≥100 mm of Hg) (%) | 9.0 | 15 |
| 110 | Elevated blood pressure (Systolic ≥140 mm of Hg and/or Diastolic ≥90 mm of Hg) or taking medicine to control blood pressure (%) | 33.1 | 15 |
| 111 | Ever undergone a screening test for cervical cancer (%) | 0.8 | 16 |
| 112 | Ever undergone a breast examination for breast cancer (%) | 0.3 | 16 |
| 113 | Ever undergone an oral cavity examination for oral cancer (%) | 0.6 | 16 |
| 114 | Ever undergone an oral cavity examination for oral cancer (%) | 0.8 | 16 |
| 115 | Women who have comprehensive knowledge 24 of HIV/AIDS (%) | 12.3 | 16 |
| 116 | Men who have comprehensive knowledge 24 of HIV/AIDS (%) | 33.4 | 16 |
| 117 | Women who know that consistent condom use can reduce the chance of getting HIV/AIDS (%) | 62.2 | 16 |
| 118 | Men who know that consistent condom use can reduce the chance of getting HIV/AIDS (%) | 77.7 | 16 |
| 119 | Currently married women who usually participate in three household decisions 25 (%) | 87.0 | 16 |
| 120 | Women who worked in the last 12 months and were paid in cash (%) | 23.5 | 16 |
| 121 | Women owning a house and/or land (alone or jointly with others) (%) | 70.2 | 16 |
| 122 | Women having a bank or savings account that they themselves use (%) | 78.2 | 16 |
| 123 | Women having a mobile phone that they themselves use (%) | 76.4 | 16 |
| 124 | Women age 15-24 years who use hygienic methods of protection during their menstrual period26 (%) | 91.8 | 16 |
| 125 | Ever-married women age 18-49 years who have ever experienced spousal violence 27 (%) | 24.8 | 16 |
| 126 | Ever-married women age 18-49 years who have experienced physical violence during any pregnancy (%) | 3.0 | 16 |
| 127 | Young women age 18 -29 years who experienced sexual violence by age 18 (%) | 0.7 | 16 |
| 128 | Women age 15 years and above who use any kind of tobacco (%) | 18.8 | 16 |
| 129 | Men age 15 years and above who use any kind of tobacco (%) | 50.3 | 16 |
| 130 | Women age 15 years and above who consume alcohol (%) | 24.2 | 16 |
| 131 | Men age 15 years and above who consume alcohol (%) | 52.7 | 16 |

**NFHS-6** · 101 extracted indicator rows.

| Row | Indicator | NFHS-5 Total as printed in NFHS-6 | NFHS-6 Total | Reviewed change | PDF page |
| --- | --- | --- | --- | --- | --- |
| 1 | Population below age 5 years (%) | 8.2 | 6.3 | — | 35 |
| 2 | Population below age 15 years (%) | 27.1 | 21.8 | — | 35 |
| 3 | Population age 60 years and above (%) | 8.1 | 10.2 | — | 35 |
| 4 | Household electricity access | 94.8 | 98.2 | +3.4 | 35 |
| 5 | Population living in households with an improved drinking-water source 1 (%) | 93.7 | 97.1 | — | 35 |
| 6 | Households using iodized salt (%) | 99.2 | 98.7 | — | 35 |
| 7 | Households with any usual member covered under a health insurance/financing scheme (%) | 29.3 | 51.8 | — | 35 |
| 8 | Households with any usual member having a bank account/post office account (%) | 91.6 | 96.1 | — | 35 |
| 9 | Female population age 6+ ever attended school | 71.2 | 68.6 | -2.6 | 35 |
| 10 | Households with any usual female members owning a house and/or land (alone or jointly with | 15.9 | 14.8 | — | 35 |
| 11 | Children age 2-4 years who attended pre-school (%) | 24.6 | 34.7 | — | 35 |
| 12 | Women with 10 or more years of schooling | 39.4 | 50.4 | +11.0 | 35 |
| 13 | Men with 10 or more years of schooling | 48.2 | 61.4 | +13.2 | 35 |
| 14 | Women who have ever used the internet (%) | 52.9 | 73.4 | — | 35 |
| 15 | Men who have ever used the internet (%) | 71.6 | 80.0 | — | 35 |
| 16 | Women age 20–24 married before age 18 | 18.9 | 17.3 | -1.6 | 35 |
| 17 | Men age 25-29 years married before age 21 years (%) | 20.8 | 11.4 | — | 35 |
| 18 | Total fertility rate, children per woman | 1.8 | 1.5 | -0.3 | 35 |
| 19 | Women age 15-19 years who were already mothers or pregnant at the time of the survey (%) | 6.0 | 5.6 | — | 35 |
| 20 | Any method2 (%) | 59.1 | 65.3 | — | 35 |
| 21 | Any modern method2 (%) | 47.1 | 47.9 | — | 35 |
| 22 | Any traditional method (%) | 12.0 | 17.4 | — | 35 |
| 23 | Female sterilization (%) | 18.2 | 21.1 | — | 35 |
| 24 | Male sterilization (%) | 0.0 | 0.1 | — | 35 |
| 25 | Total unmet need for family planning | 12.4 | 8.9 | — | 35 |
| 26 | Unmet need for spacing 3 (%) | 7.0 | 6.5 | — | 35 |
| 27 | Unmet need for limiting3 (%) | 5.4 | 2.4 | — | 35 |
| 28 | First-trimester antenatal check-up | 53.1 | 57.6 | +4.5 | 35 |
| 29 | Mothers who had any antenatal care visits (%) | 75.3 | 84.4 | — | 35 |
| 30 | At least four antenatal care visits | 36.6 | 46.0 | — | 35 |
| 31 | Mothers whose last birth was protected against neonatal tetanus 4 (%) | 76.9 | 87.3 | — | 35 |
| 32 | Mothers who consumed iron folic acid for 100 days or more when they were pregnant (%) | 23.8 | 31.3 | — | 35 |
| 33 | Mothers who consumed iron folic acid for 180 days or more when they were pregnant (%) | 8.6 | 19.8 | — | 35 |
| 34 | Registered pregnancies for which the mother received a Mother and Child Protection (MCP) | 95.6 | 97.2 | — | 35 |
| 35 | Institutional births | 79.2 | 88.7 | +9.5 | 35 |
| 36 | Institutional births in public facility (%) | 74.8 | 83.0 | — | 35 |
| 37 | Births attended by skilled health personnel | 82.1 | 88.1 | +6.0 | 35 |
| 38 | Caesarean births | 14.8 | 17.4 | +2.6 | 35 |
| 39 | Births in a private health facility that were delivered by caesarean section (%) | 47.3 | 62.1 | — | 35 |
| 40 | Births in a public health facility that were delivered by caesarean section (%) | 17.0 | 16.7 | — | 35 |
| 41 | Mothers who received postnatal care from a doctor/nurse/LHV/ANM/midwife/other health | 56.4 | 61.5 | — | 36 |
| 42 | Children born at home who were taken to a health facility for a check-up within 24 hours of | 2.3 | 2.5 | — | 36 |
| 43 | Children who received postnatal care from a doctor/nurse/LHV/ANM/midwife/ other health | 56.5 | 64.3 | — | 36 |
| 44 | Full vaccination, card or maternal recall | 64.9 | 75.9 | +11.0 | 36 |
| 45 | Full vaccination, card only | 76.4 | 89.1 | +12.7 | 36 |
| 46 | Children age 12-23 months who have received any vaccine (%) | 90.6 | 90.8 | — | 36 |
| 47 | BCG vaccination | 87.9 | 89.3 | +1.4 | 36 |
| 48 | Children age 12-23 months who have received 3 doses of polio vaccine 8 (%) | 69.0 | 78.6 | — | 36 |
| 49 | Children age 12-23 months who have received 3 doses of pentavalent vaccine (%) | 77.6 | 82.0 | — | 36 |
| 50 | Children age 12-23 months who have received the first dose of measles-containing | 80.7 | 83.8 | — | 36 |
| 51 | Children age 24-35 months who have received a second dose of measles-containing | 51.9 | 65.7 | — | 36 |
| 52 | Children age 12-23 months who have received birth dose of hepatitis B vaccine (%) | 65.1 | 74.7 | — | 36 |
| 53 | Children age 12-23 months who have received 3 doses of rotavirus vaccine (%) | 32.0 | 79.3 | — | 36 |
| 54 | Children age 9-35 months who received a vitamin A dose in the last 6 months (%) | 69.7 | 74.9 | — | 36 |
| 55 | Children age 12-23 months who received most of their vaccinations in a public health | 97.6 | 97.2 | — | 36 |
| 56 | Children age 12-23 months who received most of their vaccinations in a private health | 0.7 | 1.4 | — | 36 |
| 57 | Prevalence of diarrhoea in the 2 weeks preceding the survey (%) | 5.1 | 3.8 | — | 36 |
| 58 | Prevalence of severe diarrhoea in the 2 weeks preceding the survey (%) | 1.0 | 0.4 | — | 36 |
| 59 | Prevalence of symptoms of acute respiratory infection (ARI) in the 2 weeks preceding the | 2.1 | 0.5 | — | 36 |
| 60 | Children with fever or symptoms of ARI in the 2 weeks preceding the survey taken to a health | 47.1 | 51.7 | — | 36 |
| 61 | Children under age 3 years breastfed within one hour of birth 9 (%) | 52.0 | 47.8 | — | 36 |
| 62 | Children under age 6 months exclusively breastfed 10 (%) | 63.4 | 50.5 | — | 36 |
| 63 | Children under age 6 months currently breastfeeding 10 (%) | 86.5 | 95.1 | — | 36 |
| 64 | Children under age 6 months exclusively breastfed or breastfeeding and consuming plain | 73.2 | 63.9 | — | 36 |
| 65 | Children age 6-8 months receiving solid or semi-solid food and breastmilk 10 (%) | 48.4 | 68.4 | — | 36 |
| 66 | Breastfeeding children age 6-23 months receiving an adequate diet 10, 11 (%) | 22.6 | 25.0 | — | 36 |
| 67 | Non-breastfeeding children age 6-23 months receiving an adequate diet 10, 11 (%) | 12.7 | 15.1 | — | 36 |
| 68 | Total children age 6-23 months receiving an adequate diet 10, 11 (%) | 20.9 | 24.0 | — | 36 |
| 69 | Child stunting | 28.0 | 24.1 | -3.9 | 36 |
| 70 | Child wasting | 13.1 | 16.1 | +3.0 | 36 |
| 71 | Severe child wasting | 6.5 | 8.0 | +1.5 | 36 |
| 72 | Child underweight | 15.4 | 18.2 | +2.8 | 36 |
| 73 | Child overweight | 9.6 | 8.8 | — | 36 |
| 74 | Women whose Body Mass Index (BMI) is below normal (BMI <18.5 kg/m 2)15 (%) | 5.7 | 6.8 | — | 37 |
| 75 | Men whose Body Mass Index (BMI) is below normal (BMI <18.5 kg/m 2) (%) | 4.9 | 5.8 | — | 37 |
| 76 | Women aged 15–49 overweight or obese (BMI ≥25), % | 23.9 | 29.3 | — | 37 |
| 77 | Men aged 15–49 overweight or obese (BMI ≥25), % | 27.6 | 31.8 | — | 37 |
| 78 | Blood sugar level - high (141-160 mg/dl)16 (%) | 4.6 | 5.9 | — | 37 |
| 79 | Blood sugar level - very high (>160 mg/dl)16 (%) | 3.1 | 4.7 | — | 37 |
| 80 | Blood sugar level - high or very high (>140 mg/dl) or taking medicine to control blood | 8.4 | 11.2 | — | 37 |
| 81 | Blood sugar level - high (141-160 mg/dl)16 (%) | 6.7 | 6.6 | — | 37 |
| 82 | Blood sugar level - very high (>160 mg/dl)16 (%) | 4.3 | 5.5 | — | 37 |
| 83 | Blood sugar level - high or very high (>140 mg/dl) or taking medicine to control blood | 11.9 | 12.7 | — | 37 |
| 84 | Mildly elevated blood pressure (Systolic 140-159 mm of Hg and/or | 16.4 | 16.0 | — | 37 |
| 85 | Women aged 15+ with moderately or severely elevated blood pressure, % | 6.7 | 6.8 | — | 37 |
| 86 | Women aged 15+ with elevated blood pressure or taking medicine for it, % | 24.9 | 24.2 | — | 37 |
| 87 | Mildly elevated blood pressure (Systolic 140-159 mm of Hg and/or | 22.8 | 22.2 | — | 37 |
| 88 | Men aged 15+ with moderately or severely elevated blood pressure, % | 9.0 | 4.1 | — | 37 |
| 89 | Men aged 15+ with elevated blood pressure or taking medicine for it, % | 33.1 | 31.3 | — | 37 |
| 90 | Currently married women who usually participate in three household decisions 17 (%) | 87.0 | 87.0 | — | 37 |
| 91 | Women who worked in the last 12 months and were paid in cash (%) | 23.5 | 41.8 | — | 37 |
| 92 | Women having a bank or savings account that they themselves use (%) | 78.2 | 91.2 | — | 37 |
| 93 | Women having a mobile phone that they themselves use (%) | 76.4 | 90.3 | — | 37 |
| 94 | Women age 15-24 years who use hygienic methods of protection during their menstrual | 92.0 | 96.7 | — | 37 |
| 95 | Ever-married women age 18-49 years who have ever experienced spousal violence 19 (%) | 24.9 | 17.8 | — | 37 |
| 96 | Ever-married women age 18-49 years who have experienced physical violence during any | 3.0 | 1.9 | — | 37 |
| 97 | Young women age 18-29 years who experienced sexual violence by age 18 (%) | 0.7 | 0.2 | — | 37 |
| 98 | Women age 15 years and above who use any kind of tobacco (%) | 18.8 | 19.1 | — | 37 |
| 99 | Men age 15 years and above who use any kind of tobacco (%) | 50.3 | 51.4 | — | 37 |
| 100 | Women age 15 years and above who consume alcohol (%) | 24.2 | 23.2 | — | 37 |
| 101 | Men age 15 years and above who consume alcohol (%) | 52.6 | 50.5 | — | 37 |

### Assam

**NFHS-5** · NFHS5-I · 131 indicator rows.

| Row | Indicator | Total | PDF page |
| --- | --- | --- | --- |
| 1 | Female population age 6 years and above who ever attended school (%) | 78.2 | 24 |
| 2 | Population below age 15 years (%) | 28.3 | 24 |
| 3 | Sex ratio of the total population (females per 1,000 males) | 1,012 | 24 |
| 4 | Sex ratio at birth for children born in the last five years (females per 1,000 males) | 964 | 24 |
| 5 | Children under age 5 years whose birth was registered with the civil authority (%) | 96.3 | 24 |
| 6 | Deaths in the last 3 years registered with the civil authority (%) | 65.5 | 24 |
| 7 | Population living in households with electricity (%) | 92.6 | 24 |
| 8 | Population living in households with an improved drinking-water source1 (%) | 86.0 | 24 |
| 9 | Population living in households that use an improved sanitation facility2 (%) | 68.6 | 24 |
| 10 | Households using clean fuel for cooking3 (%) | 42.1 | 24 |
| 11 | Households using iodized salt (%) | 98.8 | 24 |
| 12 | Households with any usual member covered under a health insurance/financing scheme (%) | 60.0 | 24 |
| 13 | Children age 5 years who attended pre-primary school during the school year 2019-20 (%) | 4.4 | 24 |
| 14 | Women who are literate4 (%) | 77.2 | 24 |
| 15 | Men who are literate4 (%) | 84.3 | 24 |
| 16 | Women with 10 or more years of schooling (%) | 29.6 | 24 |
| 17 | Men with 10 or more years of schooling (%) | 35.5 | 24 |
| 18 | Women who have ever used the internet (%) | 28.2 | 24 |
| 19 | Men who have ever used the internet (%) | 42.3 | 24 |
| 20 | Women age 20-24 years married before age 18 years (%) | 31.8 | 24 |
| 21 | Men age 25-29 years married before age 21 years (%) | 21.8 | 24 |
| 22 | Total fertility rate (children per woman) | 1.9 | 24 |
| 23 | Women age 15-19 years who were already mothers or pregnant at the time of the survey (%) | 11.7 | 24 |
| 24 | Adolescent fertility rate for women age 15-19 years5 | 61 | 24 |
| 25 | Neonatal mortality rate (NNMR) | 22.5 | 24 |
| 26 | Infant mortality rate (IMR) | 31.9 | 24 |
| 27 | Under-five mortality rate (U5MR) | 39.1 | 24 |
| 28 | Any method6 (%) | 60.8 | 24 |
| 29 | Any modern method6 (%) | 45.3 | 24 |
| 30 | Female sterilization (%) | 9.0 | 24 |
| 31 | Male sterilization (%) | 0.1 | 24 |
| 32 | IUD/PPIUD (%) | 2.9 | 24 |
| 33 | Pill (%) | 27.5 | 24 |
| 34 | Condom (%) | 4.9 | 24 |
| 35 | Injectables (%) | 0.5 | 24 |
| 36 | Total unmet need7 (%) | 11.0 | 24 |
| 37 | Unmet need for spacing7 (%) | 4.1 | 24 |
| 38 | Health worker ever talked to female non-users about family planning (%) | 21.4 | 24 |
| 39 | Current users ever told about side effects of current method8 (%) | 70.0 | 24 |
| 40 | Mothers who had an antenatal check-up in the first trimester (%) | 63.8 | 25 |
| 41 | Mothers who had at least 4 antenatal care visits (%) | 50.7 | 25 |
| 42 | Mothers whose last birth was protected against neonatal tetanus9 (%) | 94.5 | 25 |
| 43 | Mothers who consumed iron folic acid for 100 days or more when they were pregnant (%) | 47.5 | 25 |
| 44 | Mothers who consumed iron folic acid for 180 days or more when they were pregnant (%) | 18.5 | 25 |
| 45 | Registered pregnancies for which the mother received a Mother and Child Protection (MCP) card (%) | 98.7 | 25 |
| 46 | Mothers who received postnatal care from a doctor/nurse/LHV/ANM/midwife/other health personnel within 2 days of delivery (%) | 65.3 | 25 |
| 47 | Average out-of-pocket expenditure per delivery in a public health facility (Rs.) | 5,415 | 25 |
| 48 | Children born at home who were taken to a health facility for a check-up within 24 hours of birth (%) | 2.0 | 25 |
| 49 | Children who received postnatal care from a doctor/nurse/LHV/ANM/midwife/other health personnel within 2 days of delivery (%) | 69.9 | 25 |
| 50 | Institutional births (%) | 84.1 | 25 |
| 51 | Institutional births in public facility (%) | 74.4 | 25 |
| 52 | Home births that were conducted by skilled health personnel10 (%) | 2.6 | 25 |
| 53 | Births attended by skilled health personnel10 (%) | 86.1 | 25 |
| 54 | Births delivered by caesarean section (%) | 18.1 | 25 |
| 55 | Births in a private health facility that were delivered by caesarean section (%) | 70.6 | 25 |
| 56 | Births in a public health facility that were delivered by caesarean section (%) | 15.2 | 25 |
| 57 | Children age 12-23 months fully vaccinated based on information from either vaccination card or mother's recall11 (%) | 66.4 | 25 |
| 58 | Children age 12-23 months fully vaccinated based on information from vaccination card only12 (%) | 71.8 | 25 |
| 59 | Children age 12-23 months who have received BCG (%) | 92.5 | 25 |
| 60 | Children age 12-23 months who have received 3 doses of polio vaccine13 (%) | 73.4 | 25 |
| 61 | Children age 12-23 months who have received 3 doses of penta or DPT vaccine (%) | 81.7 | 25 |
| 62 | Children age 12-23 months who have received the first dose of measles-containing vaccine (MCV) (%) | 82.8 | 25 |
| 63 | Children age 24-35 months who have received a second dose of measles-containing vaccine (MCV) (%) | 19.4 | 25 |
| 64 | Children age 12-23 months who have received 3 doses of rotavirus vaccine14 (%) | 45.4 | 25 |
| 65 | Children age 12-23 months who have received 3 doses of penta or hepatitis B vaccine (%) | 75.1 | 25 |
| 66 | Children age 9-59 months who received a vitamin A dose in the last 6 months (%) | 57.7 | 25 |
| 67 | Children age 12-23 months who received most of their vaccinations in a public health facility (%) | 95.6 | 25 |
| 68 | Children age 12-23 months who received most of their vaccinations in a private health facility (%) | 2.3 | 25 |
| 69 | Prevalence of diarrhoea in the 2 weeks preceding the survey (%) | 5.5 | 25 |
| 70 | Children with diarrhoea in the 2 weeks preceding the survey who received oral rehydration salts (ORS) (%) | 69.1 | 25 |
| 71 | Children with diarrhoea in the 2 weeks preceding the survey who received zinc (%) | 28.0 | 25 |
| 72 | Children with diarrhoea in the 2 weeks preceding the survey taken to a health facility or health provider (%) | 53.5 | 25 |
| 73 | Prevalence of symptoms of acute respiratory infection (ARI) in the 2 weeks preceding the survey (%) | 2.5 | 25 |
| 74 | Children with fever or symptoms of ARI in the 2 weeks preceding the survey taken to a health facility or health provider (%) | 51.2 | 25 |
| 75 | Children under age 3 years breastfed within one hour of birth15 (%) | 49.1 | 26 |
| 76 | Children under age 6 months exclusively breastfed16 (%) | 63.6 | 26 |
| 77 | Children age 6-8 months receiving solid or semi-solid food and breastmilk16 (%) | 51.7 | 26 |
| 78 | Breastfeeding children age 6-23 months receiving an adequate diet16, 17 (%) | 8.1 | 26 |
| 79 | Non-breastfeeding children age 6-23 months receiving an adequate diet16, 17 (%) | 5.4 | 26 |
| 80 | Total children age 6-23 months receiving an adequate diet16, 17 (%) | 8.0 | 26 |
| 81 | Children under 5 years who are stunted (height-for-age)18 (%) | 35.3 | 26 |
| 82 | Children under 5 years who are wasted (weight-for-height)18 (%) | 21.7 | 26 |
| 83 | Children under 5 years who are severely wasted (weight-for-height)19 (%) | 9.1 | 26 |
| 84 | Children under 5 years who are underweight (weight-for-age)18 (%) | 32.8 | 26 |
| 85 | Children under 5 years who are overweight (weight-for-height)20 (%) | 4.9 | 26 |
| 86 | Women whose Body Mass Index (BMI) is below normal (BMI <18.5 kg/m2)21 (%) | 17.6 | 26 |
| 87 | Men whose Body Mass Index (BMI) is below normal (BMI <18.5 kg/m2) (%) | 13.4 | 26 |
| 88 | Women who are overweight or obese (BMI ≥25.0 kg/m2)21 (%) | 15.2 | 26 |
| 89 | Men who are overweight or obese (BMI ≥25.0 kg/m2) (%) | 16.2 | 26 |
| 90 | Women who have high risk waist-to-hip ratio (≥0.85) (%) | 67.2 | 26 |
| 91 | Men who have high risk waist-to-hip ratio (≥0.90) (%) | 44.9 | 26 |
| 92 | Children age 6-59 months who are anaemic (<11.0 g/dl)22 (%) | 68.4 | 26 |
| 93 | Non-pregnant women age 15-49 years who are anaemic (<12.0 g/dl)22 (%) | 66.4 | 26 |
| 94 | Pregnant women age 15-49 years who are anaemic (<11.0 g/dl)22 (%) | 54.2 | 26 |
| 95 | All women age 15-49 years who are anaemic22 (%) | 65.9 | 26 |
| 96 | All women age 15-19 years who are anaemic22 (%) | 67.0 | 26 |
| 97 | Men age 15-49 years who are anaemic (<13.0 g/dl)22 (%) | 36.0 | 26 |
| 98 | Men age 15-19 years who are anaemic (<13.0 g/dl)22 (%) | 39.6 | 26 |
| 99 | Blood sugar level - high (141-160 mg/dl)23 (%) | 6.9 | 26 |
| 100 | Blood sugar level - very high (>160 mg/dl)23 (%) | 4.9 | 26 |
| 101 | Blood sugar level - high or very high (>140 mg/dl) or taking medicine to control blood sugar level23 (%) | 12.8 | 26 |
| 102 | Blood sugar level - high (141-160 mg/dl)23 (%) | 8.4 | 26 |
| 103 | Blood sugar level - very high (>160 mg/dl)23 (%) | 6.2 | 26 |
| 104 | Blood sugar level - high or very high (>140 mg/dl) or taking medicine to control blood sugar level23 (%) | 16.0 | 26 |
| 105 | Mildly elevated blood pressure (Systolic 140-159 mm of Hg and/or Diastolic 90-99 mm of Hg) (%) | 11.0 | 26 |
| 106 | Moderately or severely elevated blood pressure (Systolic ≥160 mm of Hg and/or Diastolic ≥100 mm of Hg) (%) | 4.8 | 26 |
| 107 | Elevated blood pressure (Systolic ≥140 mm of Hg and/or Diastolic ≥90 mm of Hg) or taking medicine to control blood pressure (%) | 19.1 | 26 |
| 108 | Mildly elevated blood pressure (Systolic 140-159 mm of Hg and/or Diastolic 90-99 mm of Hg) (%) | 12.9 | 26 |
| 109 | Moderately or severely elevated blood pressure (Systolic ≥160 mm of Hg and/or Diastolic ≥100 mm of Hg) (%) | 4.4 | 26 |
| 110 | Elevated blood pressure (Systolic ≥140 mm of Hg and/or Diastolic ≥90 mm of Hg) or taking medicine to control blood pressure (%) | 20.3 | 26 |
| 111 | Ever undergone a screening test for cervical cancer (%) | 0.2 | 27 |
| 112 | Ever undergone a breast examination for breast cancer (%) | 0.2 | 27 |
| 113 | Ever undergone an oral cavity examination for oral cancer (%) | 0.2 | 27 |
| 114 | Ever undergone an oral cavity examination for oral cancer (%) | 1.4 | 27 |
| 115 | Women who have comprehensive knowledge24 of HIV/AIDS (%) | 19.2 | 27 |
| 116 | Men who have comprehensive knowledge24 of HIV/AIDS (%) | 25.3 | 27 |
| 117 | Women who know that consistent condom use can reduce the chance of getting HIV/AIDS (%) | 71.5 | 27 |
| 118 | Men who know that consistent condom use can reduce the chance of getting HIV/AIDS (%) | 85.2 | 27 |
| 119 | Currently married women who usually participate in three household decisions25 (%) | 92.1 | 27 |
| 120 | Women who worked in the last 12 months and were paid in cash (%) | 19.0 | 27 |
| 121 | Women owning a house and/or land (alone or jointly with others) (%) | 42.7 | 27 |
| 122 | Women having a bank or savings account that they themselves use (%) | 78.5 | 27 |
| 123 | Women having a mobile phone that they themselves use (%) | 57.2 | 27 |
| 124 | Women age 15-24 years who use hygienic methods of protection during their menstrual period26 (%) | 66.3 | 27 |
| 125 | Ever-married women age 18-49 years who have ever experienced spousal violence27 (%) | 32.0 | 27 |
| 126 | Ever-married women age 18-49 years who have experienced physical violence during any pregnancy (%) | 2.3 | 27 |
| 127 | Young women age 18-29 years who experienced sexual violence by age 18 (%) | 8.0 | 27 |
| 128 | Women age 15 years and above who use any kind of tobacco (%) | 22.1 | 27 |
| 129 | Men age 15 years and above who use any kind of tobacco (%) | 51.8 | 27 |
| 130 | Women age 15 years and above who consume alcohol (%) | 7.3 | 27 |
| 131 | Men age 15 years and above who consume alcohol (%) | 25.1 | 27 |

**NFHS-6** · 101 extracted indicator rows.

| Row | Indicator | NFHS-5 Total as printed in NFHS-6 | NFHS-6 Total | Reviewed change | PDF page |
| --- | --- | --- | --- | --- | --- |
| 1 | Population below age 5 years (%) | 8.2 | 6.9 | — | 39 |
| 2 | Population below age 15 years (%) | 28.3 | 25.7 | — | 39 |
| 3 | Population age 60 years and above (%) | 8.6 | 10.3 | — | 39 |
| 4 | Household electricity access | 92.6 | 96.4 | +3.8 | 39 |
| 5 | Population living in households with an improved drinking-water source 1 (%) | 86.0 | 92.8 | — | 39 |
| 6 | Households using iodized salt (%) | 98.8 | 97.5 | — | 39 |
| 7 | Households with any usual member covered under a health insurance/financing scheme (%) | 66.7 | 70.3 | — | 39 |
| 8 | Households with any usual member having a bank account/post office account (%) | 95.7 | 97.6 | — | 39 |
| 9 | Female population age 6+ ever attended school | 78.2 | 79.7 | +1.5 | 39 |
| 10 | Households with any usual female members owning a house and/or land (alone or jointly with | 8.3 | 9.9 | — | 39 |
| 11 | Children age 2-4 years who attended pre-school (%) | 38.1 | 52.9 | — | 39 |
| 12 | Women with 10 or more years of schooling | 29.6 | 37.1 | +7.5 | 39 |
| 13 | Men with 10 or more years of schooling | 35.5 | 41.7 | +6.2 | 39 |
| 14 | Women who have ever used the internet (%) | 28.2 | 53.5 | — | 39 |
| 15 | Men who have ever used the internet (%) | 36.9 | 70.4 | — | 39 |
| 16 | Women age 20–24 married before age 18 | 31.8 | 25.3 | -6.5 | 39 |
| 17 | Men age 25-29 years married before age 21 years (%) | 21.8 | 17.5 | — | 39 |
| 18 | Total fertility rate, children per woman | 1.9 | 1.6 | -0.3 | 39 |
| 19 | Women age 15-19 years who were already mothers or pregnant at the time of the survey (%) | 11.7 | 7.3 | — | 39 |
| 20 | Any method2 (%) | 60.8 | 71 | — | 39 |
| 21 | Any modern method2 (%) | 45.3 | 53.4 | — | 39 |
| 22 | Any traditional method (%) | 15.5 | 17.6 | — | 39 |
| 23 | Female sterilization (%) | 9.0 | 7.7 | — | 39 |
| 24 | Male sterilization (%) | 0.1 | 0.3 | — | 39 |
| 25 | Total unmet need for family planning | 11.0 | 7.4 | -3.6 | 39 |
| 26 | Unmet need for spacing 3 (%) | 4.2 | 4.1 | — | 39 |
| 27 | Unmet need for limiting3 (%) | 6.8 | 3.3 | — | 39 |
| 28 | First-trimester antenatal check-up | 63.8 | 72.5 | +8.7 | 39 |
| 29 | Mothers who had any antenatal care visits (%) | 94.3 | 90.2 | — | 39 |
| 30 | At least four antenatal care visits | 50.7 | 51.4 | +0.7 | 39 |
| 31 | Mothers whose last birth was protected against neonatal tetanus 4 (%) | 94.5 | 93.8 | — | 39 |
| 32 | Mothers who consumed iron folic acid for 100 days or more when they were pregnant (%) | 47.5 | 65.4 | — | 39 |
| 33 | Mothers who consumed iron folic acid for 180 days or more when they were pregnant (%) | 18.5 | 44.0 | — | 39 |
| 34 | Registered pregnancies for which the mother received a Mother and Child Protection (MCP) | 98.7 | 98.1 | — | 39 |
| 35 | Institutional births | 84.1 | 87.6 | +3.5 | 39 |
| 36 | Institutional births in public facility (%) | 74.4 | 75.6 | — | 39 |
| 37 | Births attended by skilled health personnel | 86.1 | 90.7 | +4.6 | 39 |
| 38 | Caesarean births | 18.1 | 22.9 | +4.8 | 39 |
| 39 | Births in a private health facility that were delivered by caesarean section (%) | 70.6 | 81.4 | — | 39 |
| 40 | Births in a public health facility that were delivered by caesarean section (%) | 15.2 | 17.4 | — | 39 |
| 41 | Mothers who received postnatal care from a doctor/nurse/LHV/ANM/midwife/other health | 65.3 | 67.4 | — | 40 |
| 42 | Children born at home who were taken to a health facility for a check-up within 24 hours of | 2.0 | 7.1 | — | 40 |
| 43 | Children who received postnatal care from a doctor/nurse/LHV/ANM/midwife/ other health | 69.9 | 69.5 | — | 40 |
| 44 | Full vaccination, card or maternal recall | 66.7 | 81.7 | — | 40 |
| 45 | Full vaccination, card only | 71.8 | 87.7 | +15.9 | IIPS fact sheet |
| 46 | Children age 12-23 months who have received any vaccine (%) | 94.7 | 95.5 | — | 40 |
| 47 | BCG vaccination | 92.5 | 94.0 | +1.5 | 40 |
| 48 | Children age 12-23 months who have received 3 doses of polio vaccine 8 (%) | 73.4 | 84.1 | — | 40 |
| 49 | Children age 12-23 months who have received 3 doses of pentavalent vaccine (%) | 82.5 | 88.6 | — | 40 |
| 50 | Children age 12-23 months who have received the first dose of measles-containing | 82.8 | 90.5 | — | 40 |
| 51 | Children age 24-35 months who have received a second dose of measles-containing | 35.5 | 68.1 | — | 40 |
| 52 | Children age 12-23 months who have received birth dose of hepatitis B vaccine (%) | 53.9 | 71.7 | — | 40 |
| 53 | Children age 12-23 months who have received 3 doses of rotavirus vaccine (%) | 45.4 | 87.4 | — | 40 |
| 54 | Children age 9-35 months who received a vitamin A dose in the last 6 months (%) | 58.2 | 78.5 | — | 40 |
| 55 | Children age 12-23 months who received most of their vaccinations in a public health | 95.6 | 95.9 | — | 40 |
| 56 | Children age 12-23 months who received most of their vaccinations in a private health | 2.3 | 1.9 | — | 40 |
| 57 | Prevalence of diarrhoea in the 2 weeks preceding the survey (%) | 5.5 | 1.9 | — | 40 |
| 58 | Prevalence of severe diarrhoea in the 2 weeks preceding the survey (%) | 0.8 | 0.4 | — | 40 |
| 59 | Prevalence of symptoms of acute respiratory infection (ARI) in the 2 weeks preceding the | 2.5 | 0.6 | — | 40 |
| 60 | Children with fever or symptoms of ARI in the 2 weeks preceding the survey taken to a health | 51.2 | 44.4 | — | 40 |
| 61 | Children under age 3 years breastfed within one hour of birth 9 (%) | 49.1 | 54.8 | — | 40 |
| 62 | Children under age 6 months exclusively breastfed 10 (%) | 63.6 | 54.3 | — | 40 |
| 63 | Children under age 6 months currently breastfeeding 10 (%) | 95.4 | 98.4 | — | 40 |
| 64 | Children under age 6 months exclusively breastfed or breastfeeding and consuming plain | 77.8 | 74.4 | — | 40 |
| 65 | Children age 6-8 months receiving solid or semi-solid food and breastmilk 10 (%) | 51.7 | 66.6 | — | 40 |
| 66 | Breastfeeding children age 6-23 months receiving an adequate diet 10, 11 (%) | 7.5 | 16.0 | — | 40 |
| 67 | Non-breastfeeding children age 6-23 months receiving an adequate diet 10, 11 (%) | 3.1 | 23.6 | — | 40 |
| 68 | Total children age 6-23 months receiving an adequate diet 10, 11 (%) | 7.2 | 16.4 | — | 40 |
| 69 | Child stunting | 35.3 | 30.3 | -5.0 | 40 |
| 70 | Child wasting | 21.7 | 21.4 | -0.3 | 40 |
| 71 | Severe child wasting | 9.0 | 8.5 | — | 40 |
| 72 | Child underweight | 32.8 | 30.7 | -2.1 | 40 |
| 73 | Child overweight | 4.8 | 4.2 | — | 40 |
| 74 | Women whose Body Mass Index (BMI) is below normal (BMI <18.5 kg/m 2)15 (%) | 17.7 | 15.6 | — | 41 |
| 75 | Men whose Body Mass Index (BMI) is below normal (BMI <18.5 kg/m 2) (%) | 13.4 | 15.7 | — | 41 |
| 76 | Women aged 15–49 overweight or obese (BMI ≥25), % | 15.2 | 19.6 | — | 41 |
| 77 | Men aged 15–49 overweight or obese (BMI ≥25), % | 16.2 | 21.1 | — | 41 |
| 78 | Blood sugar level - high (141-160 mg/dl)16 (%) | 6.9 | 5.8 | — | 41 |
| 79 | Blood sugar level - very high (>160 mg/dl)16 (%) | 4.9 | 6.1 | — | 41 |
| 80 | Blood sugar level - high or very high (>140 mg/dl) or taking medicine to control blood | 12.8 | 12.5 | — | 41 |
| 81 | Blood sugar level - high (141-160 mg/dl)16 (%) | 8.4 | 7.4 | — | 41 |
| 82 | Blood sugar level - very high (>160 mg/dl)16 (%) | 6.2 | 7.6 | — | 41 |
| 83 | Blood sugar level - high or very high (>140 mg/dl) or taking medicine to control blood | 16.0 | 15.6 | — | 41 |
| 84 | Mildly elevated blood pressure (Systolic 140-159 mm of Hg and/or | 10.9 | 11.3 | — | 41 |
| 85 | Women aged 15+ with moderately or severely elevated blood pressure, % | 4.8 | 5.3 | — | 41 |
| 86 | Women aged 15+ with elevated blood pressure or taking medicine for it, % | 19.1 | 19.6 | — | 41 |
| 87 | Mildly elevated blood pressure (Systolic 140-159 mm of Hg and/or | 12.8 | 13.6 | — | 41 |
| 88 | Men aged 15+ with moderately or severely elevated blood pressure, % | 4.4 | 3.4 | — | 41 |
| 89 | Men aged 15+ with elevated blood pressure or taking medicine for it, % | 20.3 | 21.4 | — | 41 |
| 90 | Currently married women who usually participate in three household decisions 17 (%) | 92.1 | 86.7 | — | 41 |
| 91 | Women who worked in the last 12 months and were paid in cash (%) | 19.0 | 25.6 | — | 41 |
| 92 | Women having a bank or savings account that they themselves use (%) | 78.5 | 91.7 | — | 41 |
| 93 | Women having a mobile phone that they themselves use (%) | 57.2 | 66.8 | — | 41 |
| 94 | Women age 15-24 years who use hygienic methods of protection during their menstrual | 67.0 | 75.1 | — | 41 |
| 95 | Ever-married women age 18-49 years who have ever experienced spousal violence 19 (%) | 32.2 | 16.2 | — | 41 |
| 96 | Ever-married women age 18-49 years who have experienced physical violence during any | 2.3 | 2.0 | — | 41 |
| 97 | Young women age 18-29 years who experienced sexual violence by age 18 (%) | 1.4 | 0.9 | — | 41 |
| 98 | Women age 15 years and above who use any kind of tobacco (%) | 22.2 | 16.5 | — | 41 |
| 99 | Men age 15 years and above who use any kind of tobacco (%) | 51.9 | 45.2 | — | 41 |
| 100 | Women age 15 years and above who consume alcohol (%) | 7.3 | 5.8 | — | 41 |
| 101 | Men age 15 years and above who consume alcohol (%) | 25.2 | 23.8 | — | 41 |

### Bihar

**NFHS-5** · NFHS5-I · 131 indicator rows.

| Row | Indicator | Total | PDF page |
| --- | --- | --- | --- |
| 1 | Female population age 6 years and above who ever attended school (%) | 61.1 | 32 |
| 2 | Population below age 15 years (%) | 36.4 | 32 |
| 3 | Sex ratio of the total population (females per 1,000 males) | 1,090 | 32 |
| 4 | Sex ratio at birth for children born in the last five years (females per 1,000 males) | 908 | 32 |
| 5 | Children under age 5 years whose birth was registered with the civil authority (%) | 75.6 | 32 |
| 6 | Deaths in the last 3 years registered with the civil authority (%) | 37.1 | 32 |
| 7 | Population living in households with electricity (%) | 96.3 | 32 |
| 8 | Population living in households with an improved drinking-water source1 (%) | 99.2 | 32 |
| 9 | Population living in households that use an improved sanitation facility2 (%) | 49.4 | 32 |
| 10 | Households using clean fuel for cooking3 (%) | 37.8 | 32 |
| 11 | Households using iodized salt (%) | 93.3 | 32 |
| 12 | Households with any usual member covered under a health insurance/financing scheme (%) | 14.6 | 32 |
| 13 | Children age 5 years who attended pre-primary school during the school year 2019-20 (%) | 11.5 | 32 |
| 14 | Women who are literate4 (%) | 57.8 | 32 |
| 15 | Men who are literate4 (%) | 78.5 | 32 |
| 16 | Women with 10 or more years of schooling (%) | 28.8 | 32 |
| 17 | Men with 10 or more years of schooling (%) | 42.8 | 32 |
| 18 | Women who have ever used the internet (%) | 20.6 | 32 |
| 19 | Men who have ever used the internet (%) | 43.6 | 32 |
| 20 | Women age 20-24 years married before age 18 years (%) | 40.8 | 32 |
| 21 | Men age 25-29 years married before age 21 years (%) | 30.5 | 32 |
| 22 | Total fertility rate (children per woman) | 3.0 | 32 |
| 23 | Women age 15-19 years who were already mothers or pregnant at the time of the survey (%) | 11.0 | 32 |
| 24 | Adolescent fertility rate for women age 15-19 years5 | 77 | 32 |
| 25 | Neonatal mortality rate (NNMR) | 34.5 | 32 |
| 26 | Infant mortality rate (IMR) | 46.8 | 32 |
| 27 | Under-five mortality rate (U5MR) | 56.4 | 32 |
| 28 | Any method6 (%) | 55.8 | 32 |
| 29 | Any modern method6 (%) | 44.4 | 32 |
| 30 | Female sterilization (%) | 34.8 | 32 |
| 31 | Male sterilization (%) | 0.1 | 32 |
| 32 | IUD/PPIUD (%) | 0.8 | 32 |
| 33 | Pill (%) | 2.0 | 32 |
| 34 | Condom (%) | 4.0 | 32 |
| 35 | Injectables (%) | 1.1 | 32 |
| 36 | Total unmet need7 (%) | 13.6 | 32 |
| 37 | Unmet need for spacing7 (%) | 6.1 | 32 |
| 38 | Health worker ever talked to female non-users about family planning (%) | 20.2 | 32 |
| 39 | Current users ever told about side effects of current method8 (%) | 49.9 | 32 |
| 40 | Mothers who had an antenatal check-up in the first trimester (%) | 52.9 | 33 |
| 41 | Mothers who had at least 4 antenatal care visits (%) | 25.2 | 33 |
| 42 | Mothers whose last birth was protected against neonatal tetanus9 (%) | 89.5 | 33 |
| 43 | Mothers who consumed iron folic acid for 100 days or more when they were pregnant (%) | 18.0 | 33 |
| 44 | Mothers who consumed iron folic acid for 180 days or more when they were pregnant (%) | 9.3 | 33 |
| 45 | Registered pregnancies for which the mother received a Mother and Child Protection (MCP) card (%) | 89.5 | 33 |
| 46 | Mothers who received postnatal care from a doctor/nurse/LHV/ANM/midwife/other health personnel within 2 days of delivery (%) | 57.3 | 33 |
| 47 | Average out-of-pocket expenditure per delivery in a public health facility (Rs.) | 2,848 | 33 |
| 48 | Children born at home who were taken to a health facility for a check-up within 24 hours of birth (%) | 2.9 | 33 |
| 49 | Children who received postnatal care from a doctor/nurse/LHV/ANM/midwife/other health personnel within 2 days of delivery (%) | 59.3 | 33 |
| 50 | Institutional births (%) | 76.2 | 33 |
| 51 | Institutional births in public facility (%) | 56.9 | 33 |
| 52 | Home births that were conducted by skilled health personnel10 (%) | 6.1 | 33 |
| 53 | Births attended by skilled health personnel10 (%) | 79.0 | 33 |
| 54 | Births delivered by caesarean section (%) | 9.7 | 33 |
| 55 | Births in a private health facility that were delivered by caesarean section (%) | 39.6 | 33 |
| 56 | Births in a public health facility that were delivered by caesarean section (%) | 3.6 | 33 |
| 57 | Children age 12-23 months fully vaccinated based on information from either vaccination card or mother's recall11 (%) | 71.0 | 33 |
| 58 | Children age 12-23 months fully vaccinated based on information from vaccination card only12 (%) | 82.7 | 33 |
| 59 | Children age 12-23 months who have received BCG (%) | 95.5 | 33 |
| 60 | Children age 12-23 months who have received 3 doses of polio vaccine13 (%) | 75.5 | 33 |
| 61 | Children age 12-23 months who have received 3 doses of penta or DPT vaccine (%) | 85.0 | 33 |
| 62 | Children age 12-23 months who have received the first dose of measles-containing vaccine (MCV) (%) | 85.7 | 33 |
| 63 | Children age 24-35 months who have received a second dose of measles-containing vaccine (MCV) (%) | 29.9 | 33 |
| 64 | Children age 12-23 months who have received 3 doses of rotavirus vaccine14 (%) | 3.4 | 33 |
| 65 | Children age 12-23 months who have received 3 doses of penta or hepatitis B vaccine (%) | 82.3 | 33 |
| 66 | Children age 9-59 months who received a vitamin A dose in the last 6 months (%) | 56.0 | 33 |
| 67 | Children age 12-23 months who received most of their vaccinations in a public health facility (%) | 96.6 | 33 |
| 68 | Children age 12-23 months who received most of their vaccinations in a private health facility (%) | 2.2 | 33 |
| 69 | Prevalence of diarrhoea in the 2 weeks preceding the survey (%) | 13.7 | 33 |
| 70 | Children with diarrhoea in the 2 weeks preceding the survey who received oral rehydration salts (ORS) (%) | 58.2 | 33 |
| 71 | Children with diarrhoea in the 2 weeks preceding the survey who received zinc (%) | 25.6 | 33 |
| 72 | Children with diarrhoea in the 2 weeks preceding the survey taken to a health facility or health provider (%) | 64.7 | 33 |
| 73 | Prevalence of symptoms of acute respiratory infection (ARI) in the 2 weeks preceding the survey (%) | 3.5 | 33 |
| 74 | Children with fever or symptoms of ARI in the 2 weeks preceding the survey taken to a health facility or health provider (%) | 69.4 | 33 |
| 75 | Children under age 3 years breastfed within one hour of birth15 (%) | 31.1 | 34 |
| 76 | Children under age 6 months exclusively breastfed16 (%) | 58.9 | 34 |
| 77 | Children age 6-8 months receiving solid or semi-solid food and breastmilk16 (%) | 39.0 | 34 |
| 78 | Breastfeeding children age 6-23 months receiving an adequate diet16, 17 (%) | 10.8 | 34 |
| 79 | Non-breastfeeding children age 6-23 months receiving an adequate diet16, 17 (%) | 11.5 | 34 |
| 80 | Total children age 6-23 months receiving an adequate diet16, 17 (%) | 10.9 | 34 |
| 81 | Children under 5 years who are stunted (height-for-age)18 (%) | 42.9 | 34 |
| 82 | Children under 5 years who are wasted (weight-for-height)18 (%) | 22.9 | 34 |
| 83 | Children under 5 years who are severely wasted (weight-for-height)19 (%) | 8.8 | 34 |
| 84 | Children under 5 years who are underweight (weight-for-age)18 (%) | 41.0 | 34 |
| 85 | Children under 5 years who are overweight (weight-for-height)20 (%) | 2.4 | 34 |
| 86 | Women whose Body Mass Index (BMI) is below normal (BMI <18.5 kg/m2)21 (%) | 25.6 | 34 |
| 87 | Men whose Body Mass Index (BMI) is below normal (BMI <18.5 kg/m2) (%) | 21.5 | 34 |
| 88 | Women who are overweight or obese (BMI ≥25.0 kg/m2)21 (%) | 15.9 | 34 |
| 89 | Men who are overweight or obese (BMI ≥25.0 kg/m2) (%) | 14.7 | 34 |
| 90 | Women who have high risk waist-to-hip ratio (≥0.85) (%) | 60.3 | 34 |
| 91 | Men who have high risk waist-to-hip ratio (≥0.90) (%) | 47.7 | 34 |
| 92 | Children age 6-59 months who are anaemic (<11.0 g/dl)22 (%) | 69.4 | 34 |
| 93 | Non-pregnant women age 15-49 years who are anaemic (<12.0 g/dl)22 (%) | 63.6 | 34 |
| 94 | Pregnant women age 15-49 years who are anaemic (<11.0 g/dl)22 (%) | 63.1 | 34 |
| 95 | All women age 15-49 years who are anaemic22 (%) | 63.5 | 34 |
| 96 | All women age 15-19 years who are anaemic22 (%) | 65.7 | 34 |
| 97 | Men age 15-49 years who are anaemic (<13.0 g/dl)22 (%) | 29.5 | 34 |
| 98 | Men age 15-19 years who are anaemic (<13.0 g/dl)22 (%) | 34.8 | 34 |
| 99 | Blood sugar level - high (141-160 mg/dl)23 (%) | 6.4 | 34 |
| 100 | Blood sugar level - very high (>160 mg/dl)23 (%) | 5.4 | 34 |
| 101 | Blood sugar level - high or very high (>140 mg/dl) or taking medicine to control blood sugar level23 (%) | 12.7 | 34 |
| 102 | Blood sugar level - high (141-160 mg/dl)23 (%) | 8.3 | 34 |
| 103 | Blood sugar level - very high (>160 mg/dl)23 (%) | 7.0 | 34 |
| 104 | Blood sugar level - high or very high (>140 mg/dl) or taking medicine to control blood sugar level23 (%) | 16.2 | 34 |
| 105 | Mildly elevated blood pressure (Systolic 140-159 mm of Hg and/or Diastolic 90-99 mm of Hg) (%) | 8.7 | 34 |
| 106 | Moderately or severely elevated blood pressure (Systolic ≥160 mm of Hg and/or Diastolic ≥100 mm of Hg) (%) | 3.6 | 34 |
| 107 | Elevated blood pressure (Systolic ≥140 mm of Hg and/or Diastolic ≥90 mm of Hg) or taking medicine to control blood pressure (%) | 15.9 | 34 |
| 108 | Mildly elevated blood pressure (Systolic 140-159 mm of Hg and/or Diastolic 90-99 mm of Hg) (%) | 11.2 | 34 |
| 109 | Moderately or severely elevated blood pressure (Systolic ≥160 mm of Hg and/or Diastolic ≥100 mm of Hg) (%) | 4.3 | 34 |
| 110 | Elevated blood pressure (Systolic ≥140 mm of Hg and/or Diastolic ≥90 mm of Hg) or taking medicine to control blood pressure (%) | 18.4 | 34 |
| 111 | Ever undergone a screening test for cervical cancer (%) | 0.8 | 35 |
| 112 | Ever undergone a breast examination for breast cancer (%) | 0.3 | 35 |
| 113 | Ever undergone an oral cavity examination for oral cancer (%) | 0.3 | 35 |
| 114 | Ever undergone an oral cavity examination for oral cancer (%) | 0.9 | 35 |
| 115 | Women who have comprehensive knowledge24 of HIV/AIDS (%) | 10.3 | 35 |
| 116 | Men who have comprehensive knowledge24 of HIV/AIDS (%) | 25.2 | 35 |
| 117 | Women who know that consistent condom use can reduce the chance of getting HIV/AIDS (%) | 57.4 | 35 |
| 118 | Men who know that consistent condom use can reduce the chance of getting HIV/AIDS (%) | 80.4 | 35 |
| 119 | Currently married women who usually participate in three household decisions25 (%) | 86.5 | 35 |
| 120 | Women who worked in the last 12 months and were paid in cash (%) | 12.6 | 35 |
| 121 | Women owning a house and/or land (alone or jointly with others) (%) | 55.3 | 35 |
| 122 | Women having a bank or savings account that they themselves use (%) | 76.7 | 35 |
| 123 | Women having a mobile phone that they themselves use (%) | 51.4 | 35 |
| 124 | Women age 15-24 years who use hygienic methods of protection during their menstrual period26 (%) | 58.8 | 35 |
| 125 | Ever-married women age 18-49 years who have ever experienced spousal violence27 (%) | 40.0 | 35 |
| 126 | Ever-married women age 18-49 years who have experienced physical violence during any pregnancy (%) | 2.8 | 35 |
| 127 | Young women age 18-29 years who experienced sexual violence by age 18 (%) | 8.3 | 35 |
| 128 | Women age 15 years and above who use any kind of tobacco (%) | 5.0 | 35 |
| 129 | Men age 15 years and above who use any kind of tobacco (%) | 48.8 | 35 |
| 130 | Women age 15 years and above who consume alcohol (%) | 0.4 | 35 |
| 131 | Men age 15 years and above who consume alcohol (%) | 15.5 | 35 |

**NFHS-6** · 101 extracted indicator rows.

| Row | Indicator | NFHS-5 Total as printed in NFHS-6 | NFHS-6 Total | Reviewed change | PDF page |
| --- | --- | --- | --- | --- | --- |
| 1 | Population below age 5 years (%) | 11.7 | 11.5 | — | 43 |
| 2 | Population below age 15 years (%) | 36.4 | 35.6 | — | 43 |
| 3 | Population age 60 years and above (%) | 11.1 | 11.5 | — | 43 |
| 4 | Household electricity access | 96.3 | 98.5 | +2.2 | 43 |
| 5 | Population living in households with an improved drinking-water source 1 (%) | 99.2 | 99.8 | — | 43 |
| 6 | Households using iodized salt (%) | 93.3 | 93.0 | — | 43 |
| 7 | Households with any usual member covered under a health insurance/financing scheme (%) | 17.4 | 21.1 | — | 43 |
| 8 | Households with any usual member having a bank account/post office account (%) | 95.5 | 98.5 | — | 43 |
| 9 | Female population age 6+ ever attended school | 61.1 | 64.1 | +3.0 | 43 |
| 10 | Households with any usual female members owning a house and/or land (alone or jointly with | 10.6 | 14.9 | — | 43 |
| 11 | Children age 2-4 years who attended pre-school (%) | 36.0 | 42.9 | — | 43 |
| 12 | Women with 10 or more years of schooling | 28.8 | 33.1 | +4.3 | 43 |
| 13 | Men with 10 or more years of schooling | 42.8 | 45.9 | +3.1 | 43 |
| 14 | Women who have ever used the internet (%) | 20.6 | 58.4 | — | 43 |
| 15 | Men who have ever used the internet (%) | 35.4 | 78.1 | — | 43 |
| 16 | Women age 20–24 married before age 18 | 40.8 | 34.6 | -6.2 | 43 |
| 17 | Men age 25-29 years married before age 21 years (%) | 30.5 | 29.6 | — | 43 |
| 18 | Total fertility rate, children per woman | 3.0 | 2.7 | -0.3 | 43 |
| 19 | Women age 15-19 years who were already mothers or pregnant at the time of the survey (%) | 11.0 | 11.4 | — | 43 |
| 20 | Any method2 (%) | 55.8 | 59.3 | — | 43 |
| 21 | Any modern method2 (%) | 44.4 | 44.7 | — | 43 |
| 22 | Any traditional method (%) | 11.4 | 14.6 | — | 43 |
| 23 | Female sterilization (%) | 34.8 | 37.6 | — | 43 |
| 24 | Male sterilization (%) | 0.1 | 0.2 | — | 43 |
| 25 | Total unmet need for family planning | 13.6 | 14.4 | +0.8 | 43 |
| 26 | Unmet need for spacing 3 (%) | 6.1 | 7.3 | — | 43 |
| 27 | Unmet need for limiting3 (%) | 7.5 | 7.1 | — | 43 |
| 28 | First-trimester antenatal check-up | 52.9 | 63.9 | +11.0 | 43 |
| 29 | Mothers who had any antenatal care visits (%) | 81.6 | 94.0 | — | 43 |
| 30 | At least four antenatal care visits | 25.2 | 37.6 | +12.4 | 43 |
| 31 | Mothers whose last birth was protected against neonatal tetanus 4 (%) | 89.5 | 92.6 | — | 43 |
| 32 | Mothers who consumed iron folic acid for 100 days or more when they were pregnant (%) | 18.0 | 21.9 | — | 43 |
| 33 | Mothers who consumed iron folic acid for 180 days or more when they were pregnant (%) | 9.2 | 11.2 | — | 43 |
| 34 | Registered pregnancies for which the mother received a Mother and Child Protection (MCP) | 89.5 | 89.5 | — | 43 |
| 35 | Institutional births | 76.2 | 81.1 | +4.9 | 43 |
| 36 | Institutional births in public facility (%) | 56.9 | 57.5 | — | 43 |
| 37 | Births attended by skilled health personnel | 78.9 | 84.0 | — | 43 |
| 38 | Caesarean births | 9.7 | 13.2 | +3.5 | 43 |
| 39 | Births in a private health facility that were delivered by caesarean section (%) | 39.6 | 49.3 | — | 43 |
| 40 | Births in a public health facility that were delivered by caesarean section (%) | 3.6 | 2.7 | — | 43 |
| 41 | Mothers who received postnatal care from a doctor/nurse/LHV/ANM/midwife/other health | 57.3 | 69.9 | — | 44 |
| 42 | Children born at home who were taken to a health facility for a check-up within 24 hours of | 2.9 | 3.4 | — | 44 |
| 43 | Children who received postnatal care from a doctor/nurse/LHV/ANM/midwife/ other health | 59.3 | 76.2 | — | 44 |
| 44 | Full vaccination, card or maternal recall | 71.0 | 77.3 | +6.3 | 44 |
| 45 | Full vaccination, card only | 82.7 | 86.0 | +3.3 | IIPS fact sheet |
| 46 | Children age 12-23 months who have received any vaccine (%) | 96.8 | 97.1 | — | 44 |
| 47 | BCG vaccination | 95.5 | 95.3 | -0.2 | 44 |
| 48 | Children age 12-23 months who have received 3 doses of polio vaccine 8 (%) | 75.5 | 79.3 | — | 44 |
| 49 | Children age 12-23 months who have received 3 doses of pentavalent vaccine (%) | 85.2 | 87.6 | — | 44 |
| 50 | Children age 12-23 months who have received the first dose of measles-containing | 85.7 | 89.9 | — | 44 |
| 51 | Children age 24-35 months who have received a second dose of measles-containing | 55.7 | 66.2 | — | 44 |
| 52 | Children age 12-23 months who have received birth dose of hepatitis B vaccine (%) | 68.2 | 74.9 | — | 44 |
| 53 | Children age 12-23 months who have received 3 doses of rotavirus vaccine (%) | 3.4 | 84.3 | — | 44 |
| 54 | Children age 9-35 months who received a vitamin A dose in the last 6 months (%) | 56.0 | 61.5 | — | 44 |
| 55 | Children age 12-23 months who received most of their vaccinations in a public health | 96.6 | 96.8 | — | 44 |
| 56 | Children age 12-23 months who received most of their vaccinations in a private health | 2.2 | 2.1 | — | 44 |
| 57 | Prevalence of diarrhoea in the 2 weeks preceding the survey (%) | 13.7 | 7.7 | — | 44 |
| 58 | Prevalence of severe diarrhoea in the 2 weeks preceding the survey (%) | 1.1 | 0.4 | — | 44 |
| 59 | Prevalence of symptoms of acute respiratory infection (ARI) in the 2 weeks preceding the | 3.5 | 3.2 | — | 44 |
| 60 | Children with fever or symptoms of ARI in the 2 weeks preceding the survey taken to a health | 69.4 | 65.7 | — | 44 |
| 61 | Children under age 3 years breastfed within one hour of birth 9 (%) | 31.1 | 51.9 | — | 44 |
| 62 | Children under age 6 months exclusively breastfed 10 (%) | 58.9 | 62.5 | — | 44 |
| 63 | Children under age 6 months currently breastfeeding 10 (%) | 94.9 | 96.9 | — | 44 |
| 64 | Children under age 6 months exclusively breastfed or breastfeeding and consuming plain | 84.3 | 93.4 | — | 44 |
| 65 | Children age 6-8 months receiving solid or semi-solid food and breastmilk 10 (%) | 39.0 | 53.0 | — | 44 |
| 66 | Breastfeeding children age 6-23 months receiving an adequate diet 10, 11 (%) | 10.7 | 12.0 | — | 44 |
| 67 | Non-breastfeeding children age 6-23 months receiving an adequate diet 10, 11 (%) | 11.5 | 11.2 | — | 44 |
| 68 | Total children age 6-23 months receiving an adequate diet 10, 11 (%) | 10.8 | 11.9 | — | 44 |
| 69 | Child stunting | 42.9 | 35.6 | -7.3 | 44 |
| 70 | Child wasting | 22.9 | 19.0 | -3.9 | 44 |
| 71 | Severe child wasting | 8.8 | 4.7 | -4.1 | 44 |
| 72 | Child underweight | 41.0 | 35.7 | -5.3 | 44 |
| 73 | Child overweight | 2.4 | 0.8 | -1.6 | 44 |
| 74 | Women whose Body Mass Index (BMI) is below normal (BMI <18.5 kg/m 2)15 (%) | 25.6 | 26.3 | — | 45 |
| 75 | Men whose Body Mass Index (BMI) is below normal (BMI <18.5 kg/m 2) (%) | 21.6 | 24.5 | — | 45 |
| 76 | Women aged 15–49 overweight or obese (BMI ≥25), % | 16.0 | 19.8 | — | 45 |
| 77 | Men aged 15–49 overweight or obese (BMI ≥25), % | 14.7 | 19.4 | — | 45 |
| 78 | Blood sugar level - high (141-160 mg/dl)16 (%) | 6.4 | 6.3 | — | 45 |
| 79 | Blood sugar level - very high (>160 mg/dl)16 (%) | 5.4 | 6.3 | — | 45 |
| 80 | Blood sugar level - high or very high (>140 mg/dl) or taking medicine to control blood | 12.7 | 13.1 | — | 45 |
| 81 | Blood sugar level - high (141-160 mg/dl)16 (%) | 8.3 | 7.9 | — | 45 |
| 82 | Blood sugar level - very high (>160 mg/dl)16 (%) | 7.0 | 8.7 | — | 45 |
| 83 | Blood sugar level - high or very high (>140 mg/dl) or taking medicine to control blood | 16.2 | 17.3 | — | 45 |
| 84 | Mildly elevated blood pressure (Systolic 140-159 mm of Hg and/or | 8.7 | 7.3 | — | 45 |
| 85 | Women aged 15+ with moderately or severely elevated blood pressure, % | 3.6 | 3.9 | — | 45 |
| 86 | Women aged 15+ with elevated blood pressure or taking medicine for it, % | 15.9 | 14.1 | — | 45 |
| 87 | Mildly elevated blood pressure (Systolic 140-159 mm of Hg and/or | 11.1 | 10.3 | — | 45 |
| 88 | Men aged 15+ with moderately or severely elevated blood pressure, % | 4.3 | 3.3 | — | 45 |
| 89 | Men aged 15+ with elevated blood pressure or taking medicine for it, % | 18.4 | 17.8 | — | 45 |
| 90 | Currently married women who usually participate in three household decisions 17 (%) | 86.5 | 85.1 | — | 45 |
| 91 | Women who worked in the last 12 months and were paid in cash (%) | 12.6 | 16.5 | — | 45 |
| 92 | Women having a bank or savings account that they themselves use (%) | 76.7 | 90.9 | — | 45 |
| 93 | Women having a mobile phone that they themselves use (%) | 51.4 | 62.8 | — | 45 |
| 94 | Women age 15-24 years who use hygienic methods of protection during their menstrual | 59.2 | 63.0 | — | 45 |
| 95 | Ever-married women age 18-49 years who have ever experienced spousal violence 19 (%) | 40.1 | 36.1 | — | 45 |
| 96 | Ever-married women age 18-49 years who have experienced physical violence during any | 2.8 | 5.4 | — | 45 |
| 97 | Young women age 18-29 years who experienced sexual violence by age 18 (%) | 1.8 | 2.1 | — | 45 |
| 98 | Women age 15 years and above who use any kind of tobacco (%) | 5.0 | 4.0 | — | 45 |
| 99 | Men age 15 years and above who use any kind of tobacco (%) | 48.9 | 45.8 | — | 45 |
| 100 | Women age 15 years and above who consume alcohol (%) | 0.4 | 0.4 | — | 45 |
| 101 | Men age 15 years and above who consume alcohol (%) | 15.4 | 16.5 | — | 45 |

### Chhattisgarh

**NFHS-5** · NFHS5-II · 131 indicator rows.

| Row | Indicator | Total | PDF page |
| --- | --- | --- | --- |
| 1 | Female population age 6 years and above who ever attended school (%) | 69.3 | 19 |
| 2 | Population below age 15 years (%) | 25.4 | 19 |
| 3 | Sex ratio of the total population (females per 1,000 males) | 1,015 | 19 |
| 4 | Sex ratio at birth for children born in the last five years (females per 1,000 males) | 960 | 19 |
| 5 | Children under age 5 years whose birth was registered with the civil authority (%) | 96.6 | 19 |
| 6 | Deaths in the last 3 years registered with the civil authority (%) | 77.0 | 19 |
| 7 | Population living in households with electricity (%) | 98.8 | 19 |
| 8 | Population living in households with an improved drinking -water source1 (%) | 95.5 | 19 |
| 9 | Population living in households that use an improved sanitation facility 2 (%) | 76.8 | 19 |
| 10 | Households using clean fuel for cooking3 (%) | 33.0 | 19 |
| 11 | Households using iodized salt (%) | 98.5 | 19 |
| 12 | Households with any usual member covered under a health insurance/financing scheme (%) | 71.4 | 19 |
| 13 | Children age 5 years who attended pre-primary school during the school year 2019-20 (%) | 4.6 | 19 |
| 14 | Women who are literate4 (%) | 72.5 | 19 |
| 15 | Men who are literate4 (%) | 82.7 | 19 |
| 16 | Women with 10 or more years of schooling (%) | 36.9 | 19 |
| 17 | Men with 10 or more years of schooling (%) | 41.5 | 19 |
| 18 | Women who have ever used the internet (%) | 26.7 | 19 |
| 19 | Men who have ever used the internet (%) | 56.3 | 19 |
| 20 | Women age 20-24 years married before age 18 years (%) | 12.1 | 19 |
| 21 | Men age 25-29 years married before age 21 years (%) | 16.2 | 19 |
| 22 | Total fertility rate (children per woman) | 1.8 | 19 |
| 23 | Women age 15-19 years who were already mothers or pregnant at the time of the survey (%) | 3.1 | 19 |
| 24 | Adolescent fertility rate for women age 15 -19 years5 | 24 | 19 |
| 25 | Neonatal mortality rate (NNMR) | 32.4 | 19 |
| 26 | Infant mortality rate (IMR) | 44.3 | 19 |
| 27 | Under-five mortality rate (U5MR) | 50.4 | 19 |
| 28 | Any method6 (%) | 67.8 | 19 |
| 29 | Any modern method6 (%) | 61.7 | 19 |
| 30 | Female sterilization (%) | 47.5 | 19 |
| 31 | Male sterilization (%) | 0.8 | 19 |
| 32 | IUD/PPIUD (%) | 2.8 | 19 |
| 33 | Pill (%) | 2.4 | 19 |
| 34 | Condom (%) | 4.1 | 19 |
| 35 | Injectables (%) | 0.4 | 19 |
| 36 | Total unmet need7 (%) | 8.3 | 19 |
| 37 | Unmet need for spacing7 (%) | 3.4 | 19 |
| 38 | Health worker ever talked to female non-users about family planning (%) | 30.1 | 19 |
| 39 | Current users ever told about side effects of current method 8 (%) | 83.4 | 19 |
| 40 | Mothers who had an antenatal check-up in the first trimester (%) | 65.7 | 20 |
| 41 | Mothers who had at least 4 antenatal care visits (%) | 60.1 | 20 |
| 42 | Mothers whose last birth was protected against neonatal tetanus9 (%) | 91.9 | 20 |
| 43 | Mothers who consumed iron folic acid for 100 days or more when they were pregnant (%) | 45.0 | 20 |
| 44 | Mothers who consumed iron folic acid for 180 days or more when they were pregnant (%) | 26.3 | 20 |
| 45 | Registered pregnancies for which the mother received a Mother and Child Protection (MCP) card (%) | 97.5 | 20 |
| 46 | Mothers who received postnatal care from a doctor/nurse/LHV/ANM/midwife/other health personnel within 2 days of delivery (%) | 84.0 | 20 |
| 47 | Average out-of-pocket expenditure per delivery in a public health facility (Rs.) | 1,833 | 20 |
| 48 | Children born at home who were taken to a health facility for a check -up within 24 hours of birth (%) | 9.8 | 20 |
| 49 | Children who received postnatal care from a doctor/nurse/LHV/ANM/midwife/other health personnel within 2 days of delivery (%) | 81.7 | 20 |
| 50 | Institutional births (%) | 85.7 | 20 |
| 51 | Institutional births in public facility (%) | 70.0 | 20 |
| 52 | Home births that were conducted by skilled health personnel10 (%) | 5.8 | 20 |
| 53 | Births attended by skilled health personnel10 (%) | 88.8 | 20 |
| 54 | Births delivered by caesarean section (%) | 15.2 | 20 |
| 55 | Births in a private health facility that were delivered by caesarean section (%) | 57.0 | 20 |
| 56 | Births in a public health facility that were delivered by caesarean section (%) | 8.9 | 20 |
| 57 | Children age 12-23 months fully vaccinated based on information from either vaccination card or mother's recall11 (%) | 79.7 | 20 |
| 58 | Children age 12-23 months fully vaccinated based on information from vaccination card only12 (%) | 84.8 | 20 |
| 59 | Children age 12-23 months who have received BCG (%) | 96.4 | 20 |
| 60 | Children age 12-23 months who have received 3 doses of polio vaccine 13 (%) | 84.2 | 20 |
| 61 | Children age 12-23 months who have received 3 doses of penta or DPT vaccine (%) | 87.5 | 20 |
| 62 | Children age 12-23 months who have received the first dose of measles-containing vaccine (MCV) (%) | 90.2 | 20 |
| 63 | Children age 24-35 months who have received a second dose of measles-containing vaccine (MCV) (%) | 30.4 | 20 |
| 64 | Children age 12-23 months who have received 3 doses of rotavirus vaccine14 (%) | 50.4 | 20 |
| 65 | Children age 12-23 months who have received 3 doses of penta or hepatitis B vaccine (%) | 85.9 | 20 |
| 66 | Children age 9-35 months who received a vitamin A dose in the last 6 months (%) | 84.5 | 20 |
| 67 | Children age 12-23 months who received most of their vaccinations in a public health facility (%) | 96.6 | 20 |
| 68 | Children age 12-23 months who received most of their vaccinations in a private health facility (%) | 3.1 | 20 |
| 69 | Prevalence of diarrhoea in the 2 weeks preceding the survey (%) | 3.6 | 20 |
| 70 | Children with diarrhoea in the 2 weeks preceding the survey who received oral rehydration salts (ORS) (%) | 67.3 | 20 |
| 71 | Children with diarrhoea in the 2 weeks preceding the survey who received zinc (%) | 40.0 | 20 |
| 72 | Children with diarrhoea in the 2 weeks preceding the survey taken to a health facility or health provider (%) | 73.8 | 20 |
| 73 | Prevalence of symptoms of acute respiratory infection (ARI) in the 2 weeks preceding the survey (%) | 1.5 | 20 |
| 74 | Children with fever or symptoms of ARI in the 2 weeks preceding the survey taken to a health facility or health provider (%) | 63.6 | 20 |
| 75 | Children under age 3 years breastfed within one hour of birth15 (%) | 32.2 | 21 |
| 76 | Children under age 6 months exclusively breastfed16 (%) | 80.3 | 21 |
| 77 | Children age 6-8 months receiving solid or semi-solid food and breastmilk16 (%) | 41.3 | 21 |
| 78 | Breastfeeding children age 6 -23 months receiving an adequate diet 16, 17 (%) | 9.7 | 21 |
| 79 | Non-breastfeeding children age 6 -23 months receiving an adequate diet 16, 17 (%) | 2.5 | 21 |
| 80 | Total children age 6 -23 months receiving an adequate diet 16, 17 (%) | 9.3 | 21 |
| 81 | Children under 5 years who are stunted (height-for-age)18 (%) | 34.6 | 21 |
| 82 | Children under 5 years who are wasted (weight-for-height)18 (%) | 18.9 | 21 |
| 83 | Children under 5 years who are severely wasted (weight-for-height)19 (%) | 7.5 | 21 |
| 84 | Children under 5 years who are underweight (weight-for-age)18 (%) | 31.3 | 21 |
| 85 | Children under 5 years who are overweight (weight-for-height)20 (%) | 4.0 | 21 |
| 86 | Women whose Body Mass Index (BMI) is below normal (BMI <18.5 kg/m 2)21 (%) | 23.1 | 21 |
| 87 | Men whose Body Mass Index (BMI) is below normal (BMI <18.5 kg/m2) (%) | 17.4 | 21 |
| 88 | Women who are overweight or obese (BMI ≥25.0 kg/m2)21 (%) | 14.1 | 21 |
| 89 | Men who are overweight or obese (BMI ≥25.0 kg/m 2) (%) | 14.9 | 21 |
| 90 | Women who have high risk waist -to-hip ratio (≥0.85) (%) | 55.4 | 21 |
| 91 | Men who have high risk waist -to-hip ratio (≥0.90) (%) | 44.3 | 21 |
| 92 | Children age 6-59 months who are anaemic (<11.0 g/dl) 22 (%) | 67.2 | 21 |
| 93 | Non-pregnant women age 15-49 years who are anaemic (<12.0 g/dl)22 (%) | 61.2 | 21 |
| 94 | Pregnant women age 15-49 years who are anaemic (<11.0 g/dl)22 (%) | 51.8 | 21 |
| 95 | All women age 15 -49 years who are anaemic 22 (%) | 60.8 | 21 |
| 96 | All women age 15-19 years who are anaemic22 (%) | 61.4 | 21 |
| 97 | Men age 15-49 years who are anaemic (<13.0 g/dl)22 (%) | 27.0 | 21 |
| 98 | Men age 15 -19 years who are anaemic (<13.0 g/dl) 22 (%) | 31.5 | 21 |
| 99 | Blood sugar level - high (141-160 mg/dl)23 (%) | 4.5 | 21 |
| 100 | Blood sugar level - very high (>160 mg/dl) 23 (%) | 3.8 | 21 |
| 101 | Blood sugar level - high or very high (>140 mg/dl) or taking medicine to control blood | 9.0 | 21 |
| 102 | Blood sugar level - high (141-160 mg/dl)23 (%) | 5.4 | 21 |
| 103 | Blood sugar level - very high (>160 mg/dl) 23 (%) | 4.4 | 21 |
| 104 | Blood sugar level - high or very high (>140 mg/dl) or taking medicine to control blood | 10.8 | 21 |
| 105 | Mildly elevated blood pressure (Systolic 140 -159 mm of Hg and/or | 14.8 | 21 |
| 106 | Moderately or severely elevated blood pressure (Systolic ≥160 mm of Hg and/or | 6.8 | 21 |
| 107 | Elevated blood pressure (Systolic ≥140 mm of Hg and/or Diastolic ≥90 mm of Hg) or taking | 23.6 | 21 |
| 108 | Mildly elevated blood pressure (Systolic 140 -159 mm of Hg and/or | 19.0 | 21 |
| 109 | Moderately or severely ele vated blood pressure (Systolic ≥160 mm of Hg and/or | 7.5 | 21 |
| 110 | Elevated blood pressure (Systolic ≥140 mm of Hg and/or Diastolic ≥90 mm of Hg) or taking | 27.7 | 21 |
| 111 | Ever undergone a screening test for cervical cancer (%) | 0.3 | 22 |
| 112 | Ever undergone a breast examination for breast cancer (%) | 0.2 | 22 |
| 113 | Ever undergone an oral cavity examination for oral cancer (%) | 0.2 | 22 |
| 114 | Ever undergone an oral cavity examination for oral cancer (%) | 1.2 | 22 |
| 115 | Women who have comprehensive knowledge 24 of HIV/AIDS (%) | 23.1 | 22 |
| 116 | Men who have comprehensive knowledge 24 of HIV/AIDS (%) | 30.7 | 22 |
| 117 | Women who know that consistent condom use can reduce the chance of getting | 75.6 | 22 |
| 118 | Men who know that consistent condom use can reduce the chance of getting HIV/AIDS (%) | 84.9 | 22 |
| 119 | Currently married women who usually participate in three household decisions 25 (%) | 92.7 | 22 |
| 120 | Women who worked in the last 12 months and were paid in cash (%) | 39.1 | 22 |
| 121 | Women owning a house and/or land (alone or jointly with others) (%) | 45.6 | 22 |
| 122 | Women having a bank or savings account that they themselves use (%) | 80.3 | 22 |
| 123 | Women having a mobile phone that they themselves use (%) | 40.7 | 22 |
| 124 | Women age 15-24 years who use hygienic methods of protection during their | 68.8 | 22 |
| 125 | Ever-married women age 18-49 years who have ever experienced spousal violence 27 (%) | 20.2 | 22 |
| 126 | Ever-married women age 18-49 years who have experienced physical violence during any | 0.9 | 22 |
| 127 | Young women age 18 -29 years who experienced sexual violence by age 18 (%) | 0.8 | 22 |
| 128 | Women age 15 years and above who use any kind of tobacco (%) | 17.3 | 22 |
| 129 | Men age 15 years and above who use any kind of tobacco (%) | 43.1 | 22 |
| 130 | Women age 15 years and above who consume alcohol (%) | 5.0 | 22 |
| 131 | Men age 15 years and above who consume alcohol (%) | 34.8 | 22 |

**NFHS-6** · 101 extracted indicator rows.

| Row | Indicator | NFHS-5 Total as printed in NFHS-6 | NFHS-6 Total | Reviewed change | PDF page |
| --- | --- | --- | --- | --- | --- |
| 1 | Population below age 5 years (%) | 7.7 | 7.6 | — | 47 |
| 2 | Population below age 15 years (%) | 25.4 | 24.7 | — | 47 |
| 3 | Population age 60 years and above (%) | 10.5 | 11.4 | — | 47 |
| 4 | Household electricity access | 98.8 | 98.9 | +0.1 | 47 |
| 5 | Population living in households with an improved drinking-water source 1 (%) | 95.5 | 94.5 | — | 47 |
| 6 | Households using iodized salt (%) | 98.5 | 98.1 | — | 47 |
| 7 | Households with any usual member covered under a health insurance/financing scheme (%) | 71.4 | 90.5 | — | 47 |
| 8 | Households with any usual member having a bank account/post office account (%) | 94.7 | 99.0 | — | 47 |
| 9 | Female population age 6+ ever attended school | 69.3 | 71.6 | +2.3 | 47 |
| 10 | Households with any usual female members owning a house and/or land (alone or jointly with | 13.6 | 17.5 | — | 47 |
| 11 | Children age 2-4 years who attended pre-school (%) | 32.9 | 52.9 | — | 47 |
| 12 | Women with 10 or more years of schooling | 36.9 | 41.9 | +5.0 | 47 |
| 13 | Men with 10 or more years of schooling | 41.5 | 46.3 | +4.8 | 47 |
| 14 | Women who have ever used the internet (%) | 26.7 | 54.4 | — | 47 |
| 15 | Men who have ever used the internet (%) | 56.3 | 76.4 | — | 47 |
| 16 | Women age 20–24 married before age 18 | 12.1 | 10.1 | -2.0 | 47 |
| 17 | Men age 25-29 years married before age 21 years (%) | 16.2 | 14.1 | — | 47 |
| 18 | Total fertility rate, children per woman | 1.8 | 1.9 | +0.1 | 47 |
| 19 | Women age 15-19 years who were already mothers or pregnant at the time of the survey (%) | 3.1 | 4.2 | — | 47 |
| 20 | Any method2 (%) | 67.8 | 64.1 | — | 47 |
| 21 | Any modern method2 (%) | 61.7 | 53.9 | — | 47 |
| 22 | Any traditional method (%) | 6.1 | 10.2 | — | 47 |
| 23 | Female sterilization (%) | 47.5 | 42.4 | — | 47 |
| 24 | Male sterilization (%) | 0.8 | 1.4 | — | 47 |
| 25 | Total unmet need for family planning | 8.3 | 10.8 | +2.5 | 47 |
| 26 | Unmet need for spacing 3 (%) | 3.5 | 5.6 | — | 47 |
| 27 | Unmet need for limiting3 (%) | 4.8 | 5.2 | — | 47 |
| 28 | First-trimester antenatal check-up | 65.7 | 72.7 | +7.0 | 47 |
| 29 | Mothers who had any antenatal care visits (%) | 93.4 | 93.0 | — | 47 |
| 30 | At least four antenatal care visits | 60.4 | 68.8 | — | 47 |
| 31 | Mothers whose last birth was protected against neonatal tetanus 4 (%) | 91.9 | 92.7 | — | 47 |
| 32 | Mothers who consumed iron folic acid for 100 days or more when they were pregnant (%) | 44.9 | 65.6 | — | 47 |
| 33 | Mothers who consumed iron folic acid for 180 days or more when they were pregnant (%) | 26.3 | 48.5 | — | 47 |
| 34 | Registered pregnancies for which the mother received a Mother and Child Protection (MCP) | 97.5 | 94.5 | — | 47 |
| 35 | Institutional births | 85.7 | 86.9 | +1.2 | 47 |
| 36 | Institutional births in public facility (%) | 70.0 | 69.1 | — | 47 |
| 37 | Births attended by skilled health personnel | 88.8 | 88.6 | -0.2 | 47 |
| 38 | Caesarean births | 15.2 | 20.0 | +4.8 | 47 |
| 39 | Births in a private health facility that were delivered by caesarean section (%) | 57.0 | 64.9 | — | 47 |
| 40 | Births in a public health facility that were delivered by caesarean section (%) | 8.9 | 12.2 | — | 47 |
| 41 | Mothers who received postnatal care from a doctor/nurse/LHV/ANM/midwife/other health | 84.0 | 81.6 | — | 48 |
| 42 | Children born at home who were taken to a health facility for a check-up within 24 hours of | 9.8 | 17.6 | — | 48 |
| 43 | Children who received postnatal care from a doctor/nurse/LHV/ANM/midwife/ other health | 81.7 | 83.8 | — | 48 |
| 44 | Full vaccination, card or maternal recall | 79.7 | 77.9 | -1.8 | 48 |
| 45 | Full vaccination, card only | 84.8 | 84.6 | -0.2 | 48 |
| 46 | Children age 12-23 months who have received any vaccine (%) | 97.5 | 95.4 | — | 48 |
| 47 | BCG vaccination | 96.4 | 93.2 | -3.2 | 48 |
| 48 | Children age 12-23 months who have received 3 doses of polio vaccine 8 (%) | 84.2 | 81.3 | — | 48 |
| 49 | Children age 12-23 months who have received 3 doses of pentavalent vaccine (%) | 87.5 | 85.4 | — | 48 |
| 50 | Children age 12-23 months who have received the first dose of measles-containing | 90.2 | 89.9 | — | 48 |
| 51 | Children age 24-35 months who have received a second dose of measles-containing | 56.3 | 64.1 | — | 48 |
| 52 | Children age 12-23 months who have received birth dose of hepatitis B vaccine (%) | 70.6 | 77.7 | — | 48 |
| 53 | Children age 12-23 months who have received 3 doses of rotavirus vaccine (%) | 50.4 | 83.8 | — | 48 |
| 54 | Children age 9-35 months who received a vitamin A dose in the last 6 months (%) | 84.5 | 79.9 | — | 48 |
| 55 | Children age 12-23 months who received most of their vaccinations in a public health | 96.6 | 98.0 | — | 48 |
| 56 | Children age 12-23 months who received most of their vaccinations in a private health | 3.1 | 1.0 | — | 48 |
| 57 | Prevalence of diarrhoea in the 2 weeks preceding the survey (%) | 3.6 | 7.4 | — | 48 |
| 58 | Prevalence of severe diarrhoea in the 2 weeks preceding the survey (%) | 0.3 | 0.5 | — | 48 |
| 59 | Prevalence of symptoms of acute respiratory infection (ARI) in the 2 weeks preceding the | 1.5 | 0.7 | — | 48 |
| 60 | Children with fever or symptoms of ARI in the 2 weeks preceding the survey taken to a health | 63.6 | 77.0 | — | 48 |
| 61 | Children under age 3 years breastfed within one hour of birth 9 (%) | 32.2 | 51.7 | — | 48 |
| 62 | Children under age 6 months exclusively breastfed 10 (%) | 80.3 | 75.8 | — | 48 |
| 63 | Children under age 6 months currently breastfeeding 10 (%) | 98.0 | 95.8 | — | 48 |
| 64 | Children under age 6 months exclusively breastfed or breastfeeding and consuming plain | 87.0 | 88.2 | — | 48 |
| 65 | Children age 6-8 months receiving solid or semi-solid food and breastmilk 10 (%) | 41.3 | 60.3 | — | 48 |
| 66 | Breastfeeding children age 6-23 months receiving an adequate diet 10, 11 (%) | 9.5 | 12.6 | — | 48 |
| 67 | Non-breastfeeding children age 6-23 months receiving an adequate diet 10, 11 (%) | 2.5 | 9.3 | — | 48 |
| 68 | Total children age 6-23 months receiving an adequate diet 10, 11 (%) | 9.1 | 12.4 | — | 48 |
| 69 | Child stunting | 34.6 | 27.5 | -7.1 | 48 |
| 70 | Child wasting | 18.9 | 21.1 | +2.2 | 48 |
| 71 | Severe child wasting | 7.5 | 6.7 | -0.8 | 48 |
| 72 | Child underweight | 31.3 | 34.7 | +3.4 | 48 |
| 73 | Child overweight | 4.0 | 0.7 | -3.3 | 48 |
| 74 | Women whose Body Mass Index (BMI) is below normal (BMI <18.5 kg/m 2)15 (%) | 23.1 | 25.2 | — | 49 |
| 75 | Men whose Body Mass Index (BMI) is below normal (BMI <18.5 kg/m 2) (%) | 17.4 | 26.4 | — | 49 |
| 76 | Women aged 15–49 overweight or obese (BMI ≥25), % | 14.1 | 20.3 | — | 49 |
| 77 | Men aged 15–49 overweight or obese (BMI ≥25), % | 15.0 | 16.1 | — | 49 |
| 78 | Blood sugar level - high (141-160 mg/dl)16 (%) | 4.5 | 7.6 | — | 49 |
| 79 | Blood sugar level - very high (>160 mg/dl)16 (%) | 3.8 | 7.8 | — | 49 |
| 80 | Blood sugar level - high or very high (>140 mg/dl) or taking medicine to control blood | 9.0 | 16.2 | — | 49 |
| 81 | Blood sugar level - high (141-160 mg/dl)16 (%) | 5.4 | 9.7 | — | 49 |
| 82 | Blood sugar level - very high (>160 mg/dl)16 (%) | 4.4 | 10.3 | — | 49 |
| 83 | Blood sugar level - high or very high (>140 mg/dl) or taking medicine to control blood | 10.8 | 20.9 | — | 49 |
| 84 | Mildly elevated blood pressure (Systolic 140-159 mm of Hg and/or | 14.8 | 8.8 | — | 49 |
| 85 | Women aged 15+ with moderately or severely elevated blood pressure, % | 6.8 | 5.2 | — | 49 |
| 86 | Women aged 15+ with elevated blood pressure or taking medicine for it, % | 23.6 | 18.4 | — | IIPS fact sheet |
| 87 | Mildly elevated blood pressure (Systolic 140-159 mm of Hg and/or | 19.0 | 11.6 | — | 49 |
| 88 | Men aged 15+ with moderately or severely elevated blood pressure, % | 7.5 | 3.2 | — | 49 |
| 89 | Men aged 15+ with elevated blood pressure or taking medicine for it, % | 27.7 | 20.8 | — | 49 |
| 90 | Currently married women who usually participate in three household decisions 17 (%) | 92.7 | 94.4 | — | 49 |
| 91 | Women who worked in the last 12 months and were paid in cash (%) | 39.1 | 42.8 | — | 49 |
| 92 | Women having a bank or savings account that they themselves use (%) | 80.3 | 93.4 | — | 49 |
| 93 | Women having a mobile phone that they themselves use (%) | 40.7 | 47.8 | — | 49 |
| 94 | Women age 15-24 years who use hygienic methods of protection during their menstrual | 69.0 | 72.7 | — | 49 |
| 95 | Ever-married women age 18-49 years who have ever experienced spousal violence 19 (%) | 20.1 | 16.1 | — | 49 |
| 96 | Ever-married women age 18-49 years who have experienced physical violence during any | 0.9 | 1.9 | — | 49 |
| 97 | Young women age 18-29 years who experienced sexual violence by age 18 (%) | 0.8 | 0.5 | — | 49 |
| 98 | Women age 15 years and above who use any kind of tobacco (%) | 17.3 | 18.7 | — | 49 |
| 99 | Men age 15 years and above who use any kind of tobacco (%) | 43.1 | 45.3 | — | 49 |
| 100 | Women age 15 years and above who consume alcohol (%) | 4.9 | 5.7 | — | 49 |
| 101 | Men age 15 years and above who consume alcohol (%) | 34.7 | 38.3 | — | 49 |

### Goa

**NFHS-5** · NFHS5-I · 131 indicator rows.

| Row | Indicator | Total | PDF page |
| --- | --- | --- | --- |
| 1 | Female population age 6 years and above who ever attended school (%) | 89.0 | 40 |
| 2 | Population below age 15 years (%) | 19.1 | 40 |
| 3 | Sex ratio of the total population (females per 1,000 males) | 1,027 | 40 |
| 4 | Sex ratio at birth for children born in the last five years (females per 1,000 males) | 838 | 40 |
| 5 | Children under age 5 years whose birth was registered with the civil authority (%) | 100.0 | 40 |
| 6 | Deaths in the last 3 years registered with the civil authority (%) | 100.0 | 40 |
| 7 | Population living in households with electricity (%) | 100.0 | 40 |
| 8 | Population living in households with an improved drinking-water source1 (%) | 98.5 | 40 |
| 9 | Population living in households that use an improved sanitation facility2 (%) | 87.9 | 40 |
| 10 | Households using clean fuel for cooking3 (%) | 96.5 | 40 |
| 11 | Households using iodized salt (%) | 97.6 | 40 |
| 12 | Households with any usual member covered under a health insurance/financing scheme (%) | 66.0 | 40 |
| 13 | Children age 5 years who attended pre-primary school during the school year 2019-20 (%) | 19.0 | 40 |
| 14 | Women who are literate4 (%) | 93.0 | 40 |
| 15 | Men who are literate4 (%) | 96.3 | 40 |
| 16 | Women with 10 or more years of schooling (%) | 71.5 | 40 |
| 17 | Men with 10 or more years of schooling (%) | 76.6 | 40 |
| 18 | Women who have ever used the internet (%) | 73.7 | 40 |
| 19 | Men who have ever used the internet (%) | 82.9 | 40 |
| 20 | Women age 20-24 years married before age 18 years (%) | 5.8 | 40 |
| 21 | Men age 25-29 years married before age 21 years (%) | (8.9) | 40 |
| 22 | Total fertility rate (children per woman) | 1.3 | 40 |
| 23 | Women age 15-19 years who were already mothers or pregnant at the time of the survey (%) | 2.8 | 40 |
| 24 | Adolescent fertility rate for women age 15-19 years5 | 14 | 40 |
| 25 | Neonatal mortality rate (NNMR) | (5.6) | 40 |
| 26 | Infant mortality rate (IMR) | (5.6) | 40 |
| 27 | Under-five mortality rate (U5MR) | (10.6) | 40 |
| 28 | Any method6 (%) | 67.9 | 40 |
| 29 | Any modern method6 (%) | 60.1 | 40 |
| 30 | Female sterilization (%) | 29.9 | 40 |
| 31 | Male sterilization (%) | 0.0 | 40 |
| 32 | IUD/PPIUD (%) | 2.4 | 40 |
| 33 | Pill (%) | 2.7 | 40 |
| 34 | Condom (%) | 23.2 | 40 |
| 35 | Injectables (%) | 0.0 | 40 |
| 36 | Total unmet need7 (%) | 8.4 | 40 |
| 37 | Unmet need for spacing7 (%) | 4.0 | 40 |
| 38 | Health worker ever talked to female non-users about family planning (%) | 27.7 | 40 |
| 39 | Current users ever told about side effects of current method8 (%) | 85.5 | 40 |
| 40 | Mothers who had an antenatal check-up in the first trimester (%) | 70.3 | 41 |
| 41 | Mothers who had at least 4 antenatal care visits (%) | 93.0 | 41 |
| 42 | Mothers whose last birth was protected against neonatal tetanus9 (%) | 96.5 | 41 |
| 43 | Mothers who consumed iron folic acid for 100 days or more when they were pregnant (%) | 87.5 | 41 |
| 44 | Mothers who consumed iron folic acid for 180 days or more when they were pregnant (%) | 65.0 | 41 |
| 45 | Registered pregnancies for which the mother received a Mother and Child Protection (MCP) card (%) | 99.8 | 41 |
| 46 | Mothers who received postnatal care from a doctor/nurse/LHV/ANM/midwife/other health personnel within 2 days of delivery (%) | 95.4 | 41 |
| 47 | Average out-of-pocket expenditure per delivery in a public health facility (Rs.) | 3,804 | 41 |
| 48 | Children born at home who were taken to a health facility for a check-up within 24 hours of birth (%) | \* | 41 |
| 49 | Children who received postnatal care from a doctor/nurse/LHV/ANM/midwife/other health personnel within 2 days of delivery (%) | 96.7 | 41 |
| 50 | Institutional births (%) | 99.7 | 41 |
| 51 | Institutional births in public facility (%) | 56.2 | 41 |
| 52 | Home births that were conducted by skilled health personnel10 (%) | 0.0 | 41 |
| 53 | Births attended by skilled health personnel10 (%) | 99.1 | 41 |
| 54 | Births delivered by caesarean section (%) | 39.5 | 41 |
| 55 | Births in a private health facility that were delivered by caesarean section (%) | 50.0 | 41 |
| 56 | Births in a public health facility that were delivered by caesarean section (%) | 31.5 | 41 |
| 57 | Children age 12-23 months fully vaccinated based on information from either vaccination card or mother's recall11 (%) | 81.9 | 41 |
| 58 | Children age 12-23 months fully vaccinated based on information from vaccination card only12 (%) | 91.0 | 41 |
| 59 | Children age 12-23 months who have received BCG (%) | 97.9 | 41 |
| 60 | Children age 12-23 months who have received 3 doses of polio vaccine13 (%) | 88.4 | 41 |
| 61 | Children age 12-23 months who have received 3 doses of penta or DPT vaccine (%) | 90.8 | 41 |
| 62 | Children age 12-23 months who have received the first dose of measles-containing vaccine (MCV) (%) | 92.9 | 41 |
| 63 | Children age 24-35 months who have received a second dose of measles-containing vaccine (MCV) (%) | 21.7 | 41 |
| 64 | Children age 12-23 months who have received 3 doses of rotavirus vaccine14 (%) | 6.3 | 41 |
| 65 | Children age 12-23 months who have received 3 doses of penta or hepatitis B vaccine (%) | 92.8 | 41 |
| 66 | Children age 9-59 months who received a vitamin A dose in the last 6 months (%) | 91.9 | 41 |
| 67 | Children age 12-23 months who received most of their vaccinations in a public health facility (%) | 92.7 | 41 |
| 68 | Children age 12-23 months who received most of their vaccinations in a private health facility (%) | 7.3 | 41 |
| 69 | Prevalence of diarrhoea in the 2 weeks preceding the survey (%) | 3.2 | 41 |
| 70 | Children with diarrhoea in the 2 weeks preceding the survey who received oral rehydration salts (ORS) (%) | \* | 41 |
| 71 | Children with diarrhoea in the 2 weeks preceding the survey who received zinc (%) | \* | 41 |
| 72 | Children with diarrhoea in the 2 weeks preceding the survey taken to a health facility or health provider (%) | \* | 41 |
| 73 | Prevalence of symptoms of acute respiratory infection (ARI) in the 2 weeks preceding the survey (%) | 0.9 | 41 |
| 74 | Children with fever or symptoms of ARI in the 2 weeks preceding the survey taken to a health facility or health provider (%) | 86.6 | 41 |
| 75 | Children under age 3 years breastfed within one hour of birth15 (%) | 61.6 | 42 |
| 76 | Children under age 6 months exclusively breastfed16 (%) | (61.4) | 42 |
| 77 | Children age 6-8 months receiving solid or semi-solid food and breastmilk16 (%) | \* | 42 |
| 78 | Breastfeeding children age 6-23 months receiving an adequate diet16, 17 (%) | 20.2 | 42 |
| 79 | Non-breastfeeding children age 6-23 months receiving an adequate diet16, 17 (%) | \* | 42 |
| 80 | Total children age 6-23 months receiving an adequate diet16, 17 (%) | 21.5 | 42 |
| 81 | Children under 5 years who are stunted (height-for-age)18 (%) | 25.8 | 42 |
| 82 | Children under 5 years who are wasted (weight-for-height)18 (%) | 19.1 | 42 |
| 83 | Children under 5 years who are severely wasted (weight-for-height)19 (%) | 7.5 | 42 |
| 84 | Children under 5 years who are underweight (weight-for-age)18 (%) | 24.0 | 42 |
| 85 | Children under 5 years who are overweight (weight-for-height)20 (%) | 2.8 | 42 |
| 86 | Women whose Body Mass Index (BMI) is below normal (BMI <18.5 kg/m2)21 (%) | 13.8 | 42 |
| 87 | Men whose Body Mass Index (BMI) is below normal (BMI <18.5 kg/m2) (%) | 12.5 | 42 |
| 88 | Women who are overweight or obese (BMI ≥25.0 kg/m2)21 (%) | 36.1 | 42 |
| 89 | Men who are overweight or obese (BMI ≥25.0 kg/m2) (%) | 32.6 | 42 |
| 90 | Women who have high risk waist-to-hip ratio (≥0.85) (%) | 51.1 | 42 |
| 91 | Men who have high risk waist-to-hip ratio (≥0.90) (%) | 35.4 | 42 |
| 92 | Children age 6-59 months who are anaemic (<11.0 g/dl)22 (%) | 53.2 | 42 |
| 93 | Non-pregnant women age 15-49 years who are anaemic (<12.0 g/dl)22 (%) | 38.9 | 42 |
| 94 | Pregnant women age 15-49 years who are anaemic (<11.0 g/dl)22 (%) | (41.0) | 42 |
| 95 | All women age 15-49 years who are anaemic22 (%) | 39.0 | 42 |
| 96 | All women age 15-19 years who are anaemic22 (%) | 44.5 | 42 |
| 97 | Men age 15-49 years who are anaemic (<13.0 g/dl)22 (%) | 12.0 | 42 |
| 98 | Men age 15-19 years who are anaemic (<13.0 g/dl)22 (%) | (15.8) | 42 |
| 99 | Blood sugar level - high (141-160 mg/dl)23 (%) | 8.6 | 42 |
| 100 | Blood sugar level - very high (>160 mg/dl)23 (%) | 9.6 | 42 |
| 101 | Blood sugar level - high or very high (>140 mg/dl) or taking medicine to control blood sugar level23 (%) | 20.8 | 42 |
| 102 | Blood sugar level - high (141-160 mg/dl)23 (%) | 10.3 | 42 |
| 103 | Blood sugar level - very high (>160 mg/dl)23 (%) | 11.6 | 42 |
| 104 | Blood sugar level - high or very high (>140 mg/dl) or taking medicine to control blood sugar level23 (%) | 24.1 | 42 |
| 105 | Mildly elevated blood pressure (Systolic 140-159 mm of Hg and/or Diastolic 90-99 mm of Hg) (%) | 12.1 | 42 |
| 106 | Moderately or severely elevated blood pressure (Systolic ≥160 mm of Hg and/or Diastolic ≥100 mm of Hg) (%) | 3.6 | 42 |
| 107 | Elevated blood pressure (Systolic ≥140 mm of Hg and/or Diastolic ≥90 mm of Hg) or taking medicine to control blood pressure (%) | 27.5 | 42 |
| 108 | Mildly elevated blood pressure (Systolic 140-159 mm of Hg and/or Diastolic 90-99 mm of Hg) (%) | 14.8 | 42 |
| 109 | Moderately or severely elevated blood pressure (Systolic ≥160 mm of Hg and/or Diastolic ≥100 mm of Hg) (%) | 4.7 | 42 |
| 110 | Elevated blood pressure (Systolic ≥140 mm of Hg and/or Diastolic ≥90 mm of Hg) or taking medicine to control blood pressure (%) | 26.8 | 42 |
| 111 | Ever undergone a screening test for cervical cancer (%) | 1.2 | 43 |
| 112 | Ever undergone a breast examination for breast cancer (%) | 1.3 | 43 |
| 113 | Ever undergone an oral cavity examination for oral cancer (%) | 0.6 | 43 |
| 114 | Ever undergone an oral cavity examination for oral cancer (%) | 1.1 | 43 |
| 115 | Women who have comprehensive knowledge24 of HIV/AIDS (%) | 49.0 | 43 |
| 116 | Men who have comprehensive knowledge24 of HIV/AIDS (%) | 67.2 | 43 |
| 117 | Women who know that consistent condom use can reduce the chance of getting HIV/AIDS (%) | 90.1 | 43 |
| 118 | Men who know that consistent condom use can reduce the chance of getting HIV/AIDS (%) | 97.8 | 43 |
| 119 | Currently married women who usually participate in three household decisions25 (%) | 93.1 | 43 |
| 120 | Women who worked in the last 12 months and were paid in cash (%) | 31.9 | 43 |
| 121 | Women owning a house and/or land (alone or jointly with others) (%) | 23.2 | 43 |
| 122 | Women having a bank or savings account that they themselves use (%) | 88.3 | 43 |
| 123 | Women having a mobile phone that they themselves use (%) | 91.2 | 43 |
| 124 | Women age 15-24 years who use hygienic methods of protection during their menstrual period26 (%) | 96.8 | 43 |
| 125 | Ever-married women age 18-49 years who have ever experienced spousal violence27 (%) | 8.3 | 43 |
| 126 | Ever-married women age 18-49 years who have experienced physical violence during any pregnancy (%) | 1.6 | 43 |
| 127 | Young women age 18-29 years who experienced sexual violence by age 18 (%) | 4.6 | 43 |
| 128 | Women age 15 years and above who use any kind of tobacco (%) | 2.6 | 43 |
| 129 | Men age 15 years and above who use any kind of tobacco (%) | 18.2 | 43 |
| 130 | Women age 15 years and above who consume alcohol (%) | 5.5 | 43 |
| 131 | Men age 15 years and above who consume alcohol (%) | 36.9 | 43 |

**NFHS-6** · 101 extracted indicator rows.

| Row | Indicator | NFHS-5 Total as printed in NFHS-6 | NFHS-6 Total | Reviewed change | PDF page |
| --- | --- | --- | --- | --- | --- |
| 1 | Population below age 5 years (%) | 5.3 | 5.5 | — | 51 |
| 2 | Population below age 15 years (%) | 19.1 | 18.1 | — | 51 |
| 3 | Population age 60 years and above (%) | 14.2 | 17.2 | — | 51 |
| 4 | Household electricity access | 100.0 | 99.6 | -0.4 | 51 |
| 5 | Population living in households with an improved drinking-water source 1 (%) | 98.5 | 95.5 | — | 51 |
| 6 | Households using iodized salt (%) | 97.6 | 96.9 | — | 51 |
| 7 | Households with any usual member covered under a health insurance/financing scheme (%) | 73.1 | 71.7 | — | 51 |
| 8 | Households with any usual member having a bank account/post office account (%) | 97.2 | 99.1 | — | 51 |
| 9 | Female population age 6+ ever attended school | 89.0 | 87.2 | -1.8 | 51 |
| 10 | Households with any usual female members owning a house and/or land (alone or jointly with | 16.0 | 21.4 | — | 51 |
| 11 | Children age 2-4 years who attended pre-school (%) | 58.1 | 57.2 | — | 51 |
| 12 | Women with 10 or more years of schooling | 71.5 | 66.5 | -5.0 | 51 |
| 13 | Men with 10 or more years of schooling | 76.6 | 69.9 | -6.7 | 51 |
| 14 | Women who have ever used the internet (%) | 73.7 | 94.0 | — | 51 |
| 15 | Men who have ever used the internet (%) | 69.7 | 90.9 | — | 51 |
| 16 | Women age 20–24 married before age 18 | 5.8 | 6.8 | +1.0 | 51 |
| 17 | Men age 25-29 years married before age 21 years (%) | (8.9) | \* | — | 51 |
| 18 | Total fertility rate, children per woman | 1.3 | 1.6 | +0.3 | 51 |
| 19 | Women age 15-19 years who were already mothers or pregnant at the time of the survey (%) | 2.7 | 1.1 | — | 51 |
| 20 | Any method2 (%) | 67.9 | 72.8 | — | 51 |
| 21 | Any modern method2 (%) | 60.1 | 39 | — | 51 |
| 22 | Any traditional method (%) | 7.8 | 33.8 | — | 51 |
| 23 | Female sterilization (%) | 29.9 | 23.4 | — | 51 |
| 24 | Male sterilization (%) | 0.0 | 0.1 | — | 51 |
| 25 | Total unmet need for family planning | 8.4 | 5.1 | -3.3 | 51 |
| 26 | Unmet need for spacing 3 (%) | 4.0 | 3.4 | — | 51 |
| 27 | Unmet need for limiting3 (%) | 4.4 | 1.7 | — | 51 |
| 28 | First-trimester antenatal check-up | 70.3 | 92.1 | +21.8 | 51 |
| 29 | Mothers who had any antenatal care visits (%) | 98.8 | 99.2 | — | 51 |
| 30 | At least four antenatal care visits | 93.0 | 88.0 | -5.0 | 51 |
| 31 | Mothers whose last birth was protected against neonatal tetanus 4 (%) | 96.5 | 96.2 | — | 51 |
| 32 | Mothers who consumed iron folic acid for 100 days or more when they were pregnant (%) | 87.5 | 80.1 | — | 51 |
| 33 | Mothers who consumed iron folic acid for 180 days or more when they were pregnant (%) | 65.0 | 63.9 | — | 51 |
| 34 | Registered pregnancies for which the mother received a Mother and Child Protection (MCP) | 99.8 | 93.4 | — | 51 |
| 35 | Institutional births | 99.7 | 99.6 | -0.1 | 51 |
| 36 | Institutional births in public facility (%) | 56.2 | 60.7 | — | 51 |
| 37 | Births attended by skilled health personnel | 99.1 | 99.6 | +0.5 | 51 |
| 38 | Caesarean births | 39.5 | 46.2 | +6.7 | 51 |
| 39 | Births in a private health facility that were delivered by caesarean section (%) | 50.0 | 69.7 | — | 51 |
| 40 | Births in a public health facility that were delivered by caesarean section (%) | 31.5 | 31.4 | — | 51 |
| 41 | Mothers who received postnatal care from a doctor/nurse/LHV/ANM/midwife/other health | 95.4 | 96.9 | — | 52 |
| 42 | Children born at home who were taken to a health facility for a check-up within 24 hours of birth (%) | \* | \* | — | 52 |
| 43 | Children who received postnatal care from a doctor/nurse/LHV/ANM/midwife/ other health | 96.7 | 97.3 | — | 52 |
| 44 | Full vaccination, card or maternal recall | 81.9 | 93.8 | +11.9 | 52 |
| 45 | Full vaccination, card only | 91.0 | 94.4 | +3.4 | 52 |
| 46 | Children age 12-23 months who have received any vaccine (%) | 97.9 | 98.6 | — | 52 |
| 47 | BCG vaccination | 97.9 | 98.6 | +0.7 | 52 |
| 48 | Children age 12-23 months who have received 3 doses of polio vaccine 8 (%) | 88.3 | 93.8 | — | 52 |
| 49 | Children age 12-23 months who have received 3 doses of pentavalent vaccine (%) | 90.8 | 98.6 | — | 52 |
| 50 | Children age 12-23 months who have received the first dose of measles-containing | 92.9 | 98.6 | — | 52 |
| 51 | Children age 24-35 months who have received a second dose of measles-containing | 33.0 | 88.3 | — | 52 |
| 52 | Children age 12-23 months who have received birth dose of hepatitis B vaccine (%) | 80.2 | 91.9 | — | 52 |
| 53 | Children age 12-23 months who have received 3 doses of rotavirus vaccine (%) | 6.3 | 97.1 | — | 52 |
| 54 | Children age 9-35 months who received a vitamin A dose in the last 6 months (%) | 91.9 | 91.2 | — | 52 |
| 55 | Children age 12-23 months who received most of their vaccinations in a public health | 92.7 | 94.3 | — | 52 |
| 56 | Children age 12-23 months who received most of their vaccinations in a private health | 7.3 | 3.9 | — | 52 |
| 57 | Prevalence of diarrhoea in the 2 weeks preceding the survey (%) | 3.2 | 0.7 | — | 52 |
| 58 | Prevalence of severe diarrhoea in the 2 weeks preceding the survey (%) | 0.0 | 0.0 | — | 52 |
| 59 | Prevalence of symptoms of acute respiratory infection (ARI) in the 2 weeks preceding the | 0.9 | 0.6 | — | 52 |
| 60 | Children with fever or symptoms of ARI in the 2 weeks preceding the survey taken to a health | 86.6 | \* | — | 52 |
| 61 | Children under age 3 years breastfed within one hour of birth 9 (%) | 61.6 | 47.9 | — | 52 |
| 62 | Children under age 6 months exclusively breastfed 10 (%) | (61.4) | \* | — | 52 |
| 63 | Children under age 6 months currently breastfeeding 10 (%) | (100.0) | 100.0 | — | 52 |
| 64 | Children under age 6 months exclusively breastfed or breastfeeding and consuming plain | (83.0) | 95.7 | — | 52 |
| 65 | Children age 6-8 months receiving solid or semi-solid food and breastmilk 10 (%) | \* | \* | — | 52 |
| 66 | Breastfeeding children age 6-23 months receiving an adequate diet 10, 11 (%) | 20.2 | 34.6 | — | 52 |
| 67 | Non-breastfeeding children age 6-23 months receiving an adequate diet 10, 11 (%) | \* | \* | — | 52 |
| 68 | Total children age 6-23 months receiving an adequate diet 10, 11 (%) | 21.5 | 33.0 | — | 52 |
| 69 | Child stunting | 25.8 | 19.4 | -6.4 | 52 |
| 70 | Child wasting | 19.1 | 16.3 | -2.8 | 52 |
| 71 | Severe child wasting | 7.5 | 2.4 | -5.1 | 52 |
| 72 | Child underweight | 24.0 | 19.9 | -4.1 | 52 |
| 73 | Child overweight | 2.8 | 0.9 | -1.9 | 52 |
| 74 | Women whose Body Mass Index (BMI) is below normal (BMI <18.5 kg/m 2)15 (%) | 13.8 | 15.0 | — | 53 |
| 75 | Men whose Body Mass Index (BMI) is below normal (BMI <18.5 kg/m 2) (%) | 12.5 | 6.9 | — | 53 |
| 76 | Women aged 15–49 overweight or obese (BMI ≥25), % | 36.1 | 45.1 | — | 53 |
| 77 | Men aged 15–49 overweight or obese (BMI ≥25), % | 32.6 | 43.6 | — | 53 |
| 78 | Blood sugar level - high (141-160 mg/dl)16 (%) | 8.6 | 8.8 | — | 53 |
| 79 | Blood sugar level - very high (>160 mg/dl)16 (%) | 9.6 | 15.0 | — | 53 |
| 80 | Blood sugar level - high or very high (>140 mg/dl) or taking medicine to control blood | 20.8 | 27.5 | — | 53 |
| 81 | Blood sugar level - high (141-160 mg/dl)16 (%) | 10.3 | 10.1 | — | 53 |
| 82 | Blood sugar level - very high (>160 mg/dl)16 (%) | 11.6 | 17.3 | — | 53 |
| 83 | Blood sugar level - high or very high (>140 mg/dl) or taking medicine to control blood | 24.1 | 32.1 | — | 53 |
| 84 | Mildly elevated blood pressure (Systolic 140-159 mm of Hg and/or | 12.1 | 8.3 | — | 53 |
| 85 | Women aged 15+ with moderately or severely elevated blood pressure, % | 3.6 | 5.1 | — | 53 |
| 86 | Women aged 15+ with elevated blood pressure or taking medicine for it, % | 27.5 | 26.2 | — | 53 |
| 87 | Mildly elevated blood pressure (Systolic 140-159 mm of Hg and/or | 14.8 | 9.7 | — | 53 |
| 88 | Men aged 15+ with moderately or severely elevated blood pressure, % | 4.7 | 4.4 | — | 53 |
| 89 | Men aged 15+ with elevated blood pressure or taking medicine for it, % | 26.8 | 27.5 | — | 53 |
| 90 | Currently married women who usually participate in three household decisions 17 (%) | 93.1 | 92.5 | — | 53 |
| 91 | Women who worked in the last 12 months and were paid in cash (%) | 31.9 | 34.1 | — | 53 |
| 92 | Women having a bank or savings account that they themselves use (%) | 88.3 | 91.1 | — | 53 |
| 93 | Women having a mobile phone that they themselves use (%) | 91.2 | 89.9 | — | 53 |
| 94 | Women age 15-24 years who use hygienic methods of protection during their menstrual | 96.8 | 97.5 | — | 53 |
| 95 | Ever-married women age 18-49 years who have ever experienced spousal violence 19 (%) | 8.3 | 11.3 | — | 53 |
| 96 | Ever-married women age 18-49 years who have experienced physical violence during any | 1.6 | 1.9 | — | 53 |
| 97 | Young women age 18-29 years who experienced sexual violence by age 18 (%) | 0.0 | (0.0) | — | 53 |
| 98 | Women age 15 years and above who use any kind of tobacco (%) | 2.6 | 3.1 | — | 53 |
| 99 | Men age 15 years and above who use any kind of tobacco (%) | 18.1 | 17.1 | — | 53 |
| 100 | Women age 15 years and above who consume alcohol (%) | 5.5 | 2.1 | — | 53 |
| 101 | Men age 15 years and above who consume alcohol (%) | 36.8 | 22.4 | — | 53 |

### Gujarat

**NFHS-5** · NFHS5-I · 131 indicator rows.

| Row | Indicator | Total | PDF page |
| --- | --- | --- | --- |
| 1 | Female population age 6 years and above who ever attended school (%) | 72.9 | 48 |
| 2 | Population below age 15 years (%) | 24.0 | 48 |
| 3 | Sex ratio of the total population (females per 1,000 males) | 965 | 48 |
| 4 | Sex ratio at birth for children born in the last five years (females per 1,000 males) | 955 | 48 |
| 5 | Children under age 5 years whose birth was registered with the civil authority (%) | 97.5 | 48 |
| 6 | Deaths in the last 3 years registered with the civil authority (%) | 93.0 | 48 |
| 7 | Population living in households with electricity (%) | 97.6 | 48 |
| 8 | Population living in households with an improved drinking-water source1 (%) | 97.2 | 48 |
| 9 | Population living in households that use an improved sanitation facility2 (%) | 74.0 | 48 |
| 10 | Households using clean fuel for cooking3 (%) | 66.9 | 48 |
| 11 | Households using iodized salt (%) | 95.6 | 48 |
| 12 | Households with any usual member covered under a health insurance/financing scheme (%) | 39.0 | 48 |
| 13 | Children age 5 years who attended pre-primary school during the school year 2019-20 (%) | 6.9 | 48 |
| 14 | Women who are literate4 (%) | 76.5 | 48 |
| 15 | Men who are literate4 (%) | 90.9 | 48 |
| 16 | Women with 10 or more years of schooling (%) | 33.8 | 48 |
| 17 | Men with 10 or more years of schooling (%) | 45.6 | 48 |
| 18 | Women who have ever used the internet (%) | 30.8 | 48 |
| 19 | Men who have ever used the internet (%) | 58.9 | 48 |
| 20 | Women age 20-24 years married before age 18 years (%) | 21.8 | 48 |
| 21 | Men age 25-29 years married before age 21 years (%) | 27.7 | 48 |
| 22 | Total fertility rate (children per woman) | 1.9 | 48 |
| 23 | Women age 15-19 years who were already mothers or pregnant at the time of the survey (%) | 5.2 | 48 |
| 24 | Adolescent fertility rate for women age 15-19 years5 | 34 | 48 |
| 25 | Neonatal mortality rate (NNMR) | 21.8 | 48 |
| 26 | Infant mortality rate (IMR) | 31.2 | 48 |
| 27 | Under-five mortality rate (U5MR) | 37.6 | 48 |
| 28 | Any method6 (%) | 65.3 | 48 |
| 29 | Any modern method6 (%) | 53.6 | 48 |
| 30 | Female sterilization (%) | 35.9 | 48 |
| 31 | Male sterilization (%) | 0.2 | 48 |
| 32 | IUD/PPIUD (%) | 3.1 | 48 |
| 33 | Pill (%) | 2.3 | 48 |
| 34 | Condom (%) | 11.4 | 48 |
| 35 | Injectables (%) | 0.1 | 48 |
| 36 | Total unmet need7 (%) | 10.3 | 48 |
| 37 | Unmet need for spacing7 (%) | 4.5 | 48 |
| 38 | Health worker ever talked to female non-users about family planning (%) | 29.8 | 48 |
| 39 | Current users ever told about side effects of current method8 (%) | 74.1 | 48 |
| 40 | Mothers who had an antenatal check-up in the first trimester (%) | 79.3 | 49 |
| 41 | Mothers who had at least 4 antenatal care visits (%) | 76.9 | 49 |
| 42 | Mothers whose last birth was protected against neonatal tetanus9 (%) | 89.1 | 49 |
| 43 | Mothers who consumed iron folic acid for 100 days or more when they were pregnant (%) | 60.0 | 49 |
| 44 | Mothers who consumed iron folic acid for 180 days or more when they were pregnant (%) | 43.2 | 49 |
| 45 | Registered pregnancies for which the mother received a Mother and Child Protection (MCP) card (%) | 97.7 | 49 |
| 46 | Mothers who received postnatal care from a doctor/nurse/LHV/ANM/midwife/other health personnel within 2 days of delivery (%) | 89.7 | 49 |
| 47 | Average out-of-pocket expenditure per delivery in a public health facility (Rs.) | 1,697 | 49 |
| 48 | Children born at home who were taken to a health facility for a check-up within 24 hours of birth (%) | 6.9 | 49 |
| 49 | Children who received postnatal care from a doctor/nurse/LHV/ANM/midwife/other health personnel within 2 days of delivery (%) | 88.7 | 49 |
| 50 | Institutional births (%) | 94.3 | 49 |
| 51 | Institutional births in public facility (%) | 43.3 | 49 |
| 52 | Home births that were conducted by skilled health personnel10 (%) | 1.6 | 49 |
| 53 | Births attended by skilled health personnel10 (%) | 93.2 | 49 |
| 54 | Births delivered by caesarean section (%) | 21.0 | 49 |
| 55 | Births in a private health facility that were delivered by caesarean section (%) | 30.8 | 49 |
| 56 | Births in a public health facility that were delivered by caesarean section (%) | 12.4 | 49 |
| 57 | Children age 12-23 months fully vaccinated based on information from either vaccination card or mother's recall11 (%) | 76.3 | 49 |
| 58 | Children age 12-23 months fully vaccinated based on information from vaccination card only12 (%) | 85.0 | 49 |
| 59 | Children age 12-23 months who have received BCG (%) | 94.7 | 49 |
| 60 | Children age 12-23 months who have received 3 doses of polio vaccine13 (%) | 79.6 | 49 |
| 61 | Children age 12-23 months who have received 3 doses of penta or DPT vaccine (%) | 86.1 | 49 |
| 62 | Children age 12-23 months who have received the first dose of measles-containing vaccine (MCV) (%) | 86.8 | 49 |
| 63 | Children age 24-35 months who have received a second dose of measles-containing vaccine (MCV) (%) | 27.3 | 49 |
| 64 | Children age 12-23 months who have received 3 doses of rotavirus vaccine14 (%) | 2.2 | 49 |
| 65 | Children age 12-23 months who have received 3 doses of penta or hepatitis B vaccine (%) | 84.9 | 49 |
| 66 | Children age 9-59 months who received a vitamin A dose in the last 6 months (%) | 85.3 | 49 |
| 67 | Children age 12-23 months who received most of their vaccinations in a public health facility (%) | 92.1 | 49 |
| 68 | Children age 12-23 months who received most of their vaccinations in a private health facility (%) | 7.6 | 49 |
| 69 | Prevalence of diarrhoea in the 2 weeks preceding the survey (%) | 8.2 | 49 |
| 70 | Children with diarrhoea in the 2 weeks preceding the survey who received oral rehydration salts (ORS) (%) | 66.5 | 49 |
| 71 | Children with diarrhoea in the 2 weeks preceding the survey who received zinc (%) | 35.4 | 49 |
| 72 | Children with diarrhoea in the 2 weeks preceding the survey taken to a health facility or health provider (%) | 69.6 | 49 |
| 73 | Prevalence of symptoms of acute respiratory infection (ARI) in the 2 weeks preceding the survey (%) | 1.0 | 49 |
| 74 | Children with fever or symptoms of ARI in the 2 weeks preceding the survey taken to a health facility or health provider (%) | 75.2 | 49 |
| 75 | Children under age 3 years breastfed within one hour of birth15 (%) | 37.8 | 50 |
| 76 | Children under age 6 months exclusively breastfed16 (%) | 65.0 | 50 |
| 77 | Children age 6-8 months receiving solid or semi-solid food and breastmilk16 (%) | 42.0 | 50 |
| 78 | Breastfeeding children age 6-23 months receiving an adequate diet16, 17 (%) | 5.9 | 50 |
| 79 | Non-breastfeeding children age 6-23 months receiving an adequate diet16, 17 (%) | 6.0 | 50 |
| 80 | Total children age 6-23 months receiving an adequate diet16, 17 (%) | 5.9 | 50 |
| 81 | Children under 5 years who are stunted (height-for-age)18 (%) | 39.0 | 50 |
| 82 | Children under 5 years who are wasted (weight-for-height)18 (%) | 25.1 | 50 |
| 83 | Children under 5 years who are severely wasted (weight-for-height)19 (%) | 10.6 | 50 |
| 84 | Children under 5 years who are underweight (weight-for-age)18 (%) | 39.7 | 50 |
| 85 | Children under 5 years who are overweight (weight-for-height)20 (%) | 3.9 | 50 |
| 86 | Women whose Body Mass Index (BMI) is below normal (BMI <18.5 kg/m2)21 (%) | 25.2 | 50 |
| 87 | Men whose Body Mass Index (BMI) is below normal (BMI <18.5 kg/m2) (%) | 20.9 | 50 |
| 88 | Women who are overweight or obese (BMI ≥25.0 kg/m2)21 (%) | 22.6 | 50 |
| 89 | Men who are overweight or obese (BMI ≥25.0 kg/m2) (%) | 19.9 | 50 |
| 90 | Women who have high risk waist-to-hip ratio (≥0.85) (%) | 43.7 | 50 |
| 91 | Men who have high risk waist-to-hip ratio (≥0.90) (%) | 40.9 | 50 |
| 92 | Children age 6-59 months who are anaemic (<11.0 g/dl)22 (%) | 79.7 | 50 |
| 93 | Non-pregnant women age 15-49 years who are anaemic (<12.0 g/dl)22 (%) | 65.1 | 50 |
| 94 | Pregnant women age 15-49 years who are anaemic (<11.0 g/dl)22 (%) | 62.6 | 50 |
| 95 | All women age 15-49 years who are anaemic22 (%) | 65.0 | 50 |
| 96 | All women age 15-19 years who are anaemic22 (%) | 69.0 | 50 |
| 97 | Men age 15-49 years who are anaemic (<13.0 g/dl)22 (%) | 26.6 | 50 |
| 98 | Men age 15-19 years who are anaemic (<13.0 g/dl)22 (%) | 36.0 | 50 |
| 99 | Blood sugar level - high (141-160 mg/dl)23 (%) | 8.1 | 50 |
| 100 | Blood sugar level - very high (>160 mg/dl)23 (%) | 6.7 | 50 |
| 101 | Blood sugar level - high or very high (>140 mg/dl) or taking medicine to control blood sugar level23 (%) | 15.8 | 50 |
| 102 | Blood sugar level - high (141-160 mg/dl)23 (%) | 9.0 | 50 |
| 103 | Blood sugar level - very high (>160 mg/dl)23 (%) | 7.1 | 50 |
| 104 | Blood sugar level - high or very high (>140 mg/dl) or taking medicine to control blood sugar level23 (%) | 16.9 | 50 |
| 105 | Mildly elevated blood pressure (Systolic 140-159 mm of Hg and/or Diastolic 90-99 mm of Hg) (%) | 11.7 | 50 |
| 106 | Moderately or severely elevated blood pressure (Systolic ≥160 mm of Hg and/or Diastolic ≥100 mm of Hg) (%) | 4.6 | 50 |
| 107 | Elevated blood pressure (Systolic ≥140 mm of Hg and/or Diastolic ≥90 mm of Hg) or taking medicine to control blood pressure (%) | 20.6 | 50 |
| 108 | Mildly elevated blood pressure (Systolic 140-159 mm of Hg and/or Diastolic 90-99 mm of Hg) (%) | 13.1 | 50 |
| 109 | Moderately or severely elevated blood pressure (Systolic ≥160 mm of Hg and/or Diastolic ≥100 mm of Hg) (%) | 4.4 | 50 |
| 110 | Elevated blood pressure (Systolic ≥140 mm of Hg and/or Diastolic ≥90 mm of Hg) or taking medicine to control blood pressure (%) | 20.3 | 50 |
| 111 | Ever undergone a screening test for cervical cancer (%) | 0.2 | 51 |
| 112 | Ever undergone a breast examination for breast cancer (%) | 0.1 | 51 |
| 113 | Ever undergone an oral cavity examination for oral cancer (%) | 0.2 | 51 |
| 114 | Ever undergone an oral cavity examination for oral cancer (%) | 0.7 | 51 |
| 115 | Women who have comprehensive knowledge24 of HIV/AIDS (%) | 28.5 | 51 |
| 116 | Men who have comprehensive knowledge24 of HIV/AIDS (%) | 35.7 | 51 |
| 117 | Women who know that consistent condom use can reduce the chance of getting HIV/AIDS (%) | 66.7 | 51 |
| 118 | Men who know that consistent condom use can reduce the chance of getting HIV/AIDS (%) | 82.5 | 51 |
| 119 | Currently married women who usually participate in three household decisions25 (%) | 92.2 | 51 |
| 120 | Women who worked in the last 12 months and were paid in cash (%) | 30.8 | 51 |
| 121 | Women owning a house and/or land (alone or jointly with others) (%) | 42.6 | 51 |
| 122 | Women having a bank or savings account that they themselves use (%) | 70.0 | 51 |
| 123 | Women having a mobile phone that they themselves use (%) | 48.8 | 51 |
| 124 | Women age 15-24 years who use hygienic methods of protection during their menstrual period26 (%) | 65.8 | 51 |
| 125 | Ever-married women age 18-49 years who have ever experienced spousal violence27 (%) | 14.0 | 51 |
| 126 | Ever-married women age 18-49 years who have experienced physical violence during any pregnancy (%) | 1.6 | 51 |
| 127 | Young women age 18-29 years who experienced sexual violence by age 18 (%) | 3.6 | 51 |
| 128 | Women age 15 years and above who use any kind of tobacco (%) | 8.7 | 51 |
| 129 | Men age 15 years and above who use any kind of tobacco (%) | 41.1 | 51 |
| 130 | Women age 15 years and above who consume alcohol (%) | 0.6 | 51 |
| 131 | Men age 15 years and above who consume alcohol (%) | 5.8 | 51 |

**NFHS-6** · 101 extracted indicator rows.

| Row | Indicator | NFHS-5 Total as printed in NFHS-6 | NFHS-6 Total | Reviewed change | PDF page |
| --- | --- | --- | --- | --- | --- |
| 1 | Population below age 5 years (%) | 7.3 | 7.3 | — | 55 |
| 2 | Population below age 15 years (%) | 24.0 | 23.0 | — | 55 |
| 3 | Population age 60 years and above (%) | 12.0 | 13.1 | — | 55 |
| 4 | Household electricity access | 97.6 | 98.2 | +0.6 | 55 |
| 5 | Population living in households with an improved drinking-water source 1 (%) | 97.2 | 97.2 | — | 55 |
| 6 | Households using iodized salt (%) | 95.6 | 96.4 | — | 55 |
| 7 | Households with any usual member covered under a health insurance/financing scheme (%) | 44.4 | 57.9 | — | 55 |
| 8 | Households with any usual member having a bank account/post office account (%) | 94.6 | 97.6 | — | 55 |
| 9 | Female population age 6+ ever attended school | 72.9 | 76.3 | +3.4 | 55 |
| 10 | Households with any usual female members owning a house and/or land (alone or jointly with | 11.8 | 16.0 | — | 55 |
| 11 | Children age 2-4 years who attended pre-school (%) | 55.1 | 49.1 | — | 55 |
| 12 | Women with 10 or more years of schooling | 33.8 | 38.6 | +4.8 | 55 |
| 13 | Men with 10 or more years of schooling | 45.6 | 47.0 | +1.4 | 55 |
| 14 | Women who have ever used the internet (%) | 30.8 | 65.7 | — | 55 |
| 15 | Men who have ever used the internet (%) | 52.6 | 83.9 | — | 55 |
| 16 | Women age 20–24 married before age 18 | 21.8 | 18.0 | -3.8 | 55 |
| 17 | Men age 25-29 years married before age 21 years (%) | 27.7 | 24.3 | — | 55 |
| 18 | Total fertility rate, children per woman | 1.9 | 1.9 | +0.0 | 55 |
| 19 | Women age 15-19 years who were already mothers or pregnant at the time of the survey (%) | 5.2 | 5.6 | — | 55 |
| 20 | Any method2 (%) | 65.3 | 74.0 | — | 55 |
| 21 | Any modern method2 (%) | 53.6 | 51.6 | — | 55 |
| 22 | Any traditional method (%) | 11.7 | 22.4 | — | 55 |
| 23 | Female sterilization (%) | 35.9 | 33.9 | — | 55 |
| 24 | Male sterilization (%) | 0.2 | 0.2 | — | 55 |
| 25 | Total unmet need for family planning | 10.3 | 6.0 | -4.3 | 55 |
| 26 | Unmet need for spacing 3 (%) | 4.4 | 3.2 | — | 55 |
| 27 | Unmet need for limiting3 (%) | 5.9 | 2.8 | — | 55 |
| 28 | First-trimester antenatal check-up | 79.3 | 87.0 | +7.7 | 55 |
| 29 | Mothers who had any antenatal care visits (%) | 94.1 | 97.6 | — | 55 |
| 30 | At least four antenatal care visits | 77.2 | 82.3 | — | 55 |
| 31 | Mothers whose last birth was protected against neonatal tetanus 4 (%) | 89.1 | 94.9 | — | 55 |
| 32 | Mothers who consumed iron folic acid for 100 days or more when they were pregnant (%) | 60.0 | 71.0 | — | 55 |
| 33 | Mothers who consumed iron folic acid for 180 days or more when they were pregnant (%) | 43.2 | 53.9 | — | 55 |
| 34 | Registered pregnancies for which the mother received a Mother and Child Protection (MCP) | 97.7 | 97.2 | — | 55 |
| 35 | Institutional births | 94.3 | 97.1 | +2.8 | 55 |
| 36 | Institutional births in public facility (%) | 43.3 | 39.7 | — | 55 |
| 37 | Births attended by skilled health personnel | 93.2 | 93.2 | +0.0 | 55 |
| 38 | Caesarean births | 21.0 | 29.0 | +8.0 | 55 |
| 39 | Births in a private health facility that were delivered by caesarean section (%) | 30.8 | 39.8 | — | 55 |
| 40 | Births in a public health facility that were delivered by caesarean section (%) | 12.4 | 15.6 | — | 55 |
| 41 | Mothers who received postnatal care from a doctor/nurse/LHV/ANM/midwife/other health | 89.7 | 92.2 | — | 56 |
| 42 | Children born at home who were taken to a health facility for a check-up within 24 hours of | 6.9 | 9.2 | — | 56 |
| 43 | Children who received postnatal care from a doctor/nurse/LHV/ANM/midwife/ other health | 88.7 | 93.2 | — | 56 |
| 44 | Full vaccination, card or maternal recall | 76.4 | 81.7 | — | 56 |
| 45 | Full vaccination, card only | 85.0 | 84.5 | -0.5 | 56 |
| 46 | Children age 12-23 months who have received any vaccine (%) | 95.6 | 96.3 | — | 56 |
| 47 | BCG vaccination | 94.7 | 95.7 | +1.0 | 56 |
| 48 | Children age 12-23 months who have received 3 doses of polio vaccine 8 (%) | 79.6 | 83.6 | — | 56 |
| 49 | Children age 12-23 months who have received 3 doses of pentavalent vaccine (%) | 86.2 | 86.6 | — | 56 |
| 50 | Children age 12-23 months who have received the first dose of measles-containing | 86.8 | 89.2 | — | 56 |
| 51 | Children age 24-35 months who have received a second dose of measles-containing | 50.8 | 70.2 | — | 56 |
| 52 | Children age 12-23 months who have received birth dose of hepatitis B vaccine (%) | 62.8 | 86.0 | — | 56 |
| 53 | Children age 12-23 months who have received 3 doses of rotavirus vaccine (%) | 2.2 | 80.0 | — | 56 |
| 54 | Children age 9-35 months who received a vitamin A dose in the last 6 months (%) | 85.6 | 84.0 | — | 56 |
| 55 | Children age 12-23 months who received most of their vaccinations in a public health | 92.1 | 92.8 | — | 56 |
| 56 | Children age 12-23 months who received most of their vaccinations in a private health | 7.6 | 6.4 | — | 56 |
| 57 | Prevalence of diarrhoea in the 2 weeks preceding the survey (%) | 8.2 | 5.7 | — | 56 |
| 58 | Prevalence of severe diarrhoea in the 2 weeks preceding the survey (%) | 0.6 | 0.3 | — | 56 |
| 59 | Prevalence of symptoms of acute respiratory infection (ARI) in the 2 weeks preceding the | 1.0 | 0.8 | — | 56 |
| 60 | Children with fever or symptoms of ARI in the 2 weeks preceding the survey taken to a health | 75.2 | 79.0 | — | 56 |
| 61 | Children under age 3 years breastfed within one hour of birth 9 (%) | 37.8 | 46.9 | — | 56 |
| 62 | Children under age 6 months exclusively breastfed 10 (%) | 65.0 | 71.4 | — | 56 |
| 63 | Children under age 6 months currently breastfeeding 10 (%) | 97.0 | 97.1 | — | 56 |
| 64 | Children under age 6 months exclusively breastfed or breastfeeding and consuming plain | 83.3 | 88.1 | — | 56 |
| 65 | Children age 6-8 months receiving solid or semi-solid food and breastmilk 10 (%) | 42.0 | 53.2 | — | 56 |
| 66 | Breastfeeding children age 6-23 months receiving an adequate diet 10, 11 (%) | 5.9 | 7.8 | — | 56 |
| 67 | Non-breastfeeding children age 6-23 months receiving an adequate diet 10, 11 (%) | 6.0 | 8.0 | — | 56 |
| 68 | Total children age 6-23 months receiving an adequate diet 10, 11 (%) | 5.9 | 7.8 | — | 56 |
| 69 | Child stunting | 39.0 | 35.3 | -3.7 | 56 |
| 70 | Child wasting | 25.1 | 20.2 | -4.9 | 56 |
| 71 | Severe child wasting | 10.6 | 5.4 | -5.2 | 56 |
| 72 | Child underweight | 39.7 | 35.5 | -4.2 | 56 |
| 73 | Child overweight | 3.9 | 1.2 | -2.7 | 56 |
| 74 | Women whose Body Mass Index (BMI) is below normal (BMI <18.5 kg/m 2)15 (%) | 25.2 | 23.6 | — | 57 |
| 75 | Men whose Body Mass Index (BMI) is below normal (BMI <18.5 kg/m 2) (%) | 20.9 | 21.8 | — | 57 |
| 76 | Women aged 15–49 overweight or obese (BMI ≥25), % | 22.7 | 32.1 | — | 57 |
| 77 | Men aged 15–49 overweight or obese (BMI ≥25), % | 20.0 | 29.9 | — | 57 |
| 78 | Blood sugar level - high (141-160 mg/dl)16 (%) | 8.1 | 7.4 | — | 57 |
| 79 | Blood sugar level - very high (>160 mg/dl)16 (%) | 6.7 | 8.0 | — | 57 |
| 80 | Blood sugar level - high or very high (>140 mg/dl) or taking medicine to control blood | 15.8 | 16.4 | — | 57 |
| 81 | Blood sugar level - high (141-160 mg/dl)16 (%) | 9.0 | 8.1 | — | 57 |
| 82 | Blood sugar level - very high (>160 mg/dl)16 (%) | 7.1 | 9.3 | — | 57 |
| 83 | Blood sugar level - high or very high (>140 mg/dl) or taking medicine to control blood | 16.9 | 18.6 | — | 57 |
| 84 | Mildly elevated blood pressure (Systolic 140-159 mm of Hg and/or | 11.7 | 10.3 | — | 57 |
| 85 | Women aged 15+ with moderately or severely elevated blood pressure, % | 4.6 | 4.8 | — | 57 |
| 86 | Women aged 15+ with elevated blood pressure or taking medicine for it, % | 20.5 | 20.9 | — | 57 |
| 87 | Mildly elevated blood pressure (Systolic 140-159 mm of Hg and/or | 13.0 | 12.6 | — | 57 |
| 88 | Men aged 15+ with moderately or severely elevated blood pressure, % | 4.4 | 3.0 | — | 57 |
| 89 | Men aged 15+ with elevated blood pressure or taking medicine for it, % | 20.3 | 22.3 | — | 57 |
| 90 | Currently married women who usually participate in three household decisions 17 (%) | 92.2 | 93.5 | — | 57 |
| 91 | Women who worked in the last 12 months and were paid in cash (%) | 30.8 | 36.6 | — | 57 |
| 92 | Women having a bank or savings account that they themselves use (%) | 70.0 | 82.2 | — | 57 |
| 93 | Women having a mobile phone that they themselves use (%) | 48.8 | 58.8 | — | 57 |
| 94 | Women age 15-24 years who use hygienic methods of protection during their menstrual | 66.9 | 66.9 | — | 57 |
| 95 | Ever-married women age 18-49 years who have ever experienced spousal violence 19 (%) | 13.9 | 13.6 | — | 57 |
| 96 | Ever-married women age 18-49 years who have experienced physical violence during any | 1.6 | 1.7 | — | 57 |
| 97 | Young women age 18-29 years who experienced sexual violence by age 18 (%) | 0.8 | 0.1 | — | 57 |
| 98 | Women age 15 years and above who use any kind of tobacco (%) | 8.7 | 7.0 | — | 57 |
| 99 | Men age 15 years and above who use any kind of tobacco (%) | 41.2 | 38.4 | — | 57 |
| 100 | Women age 15 years and above who consume alcohol (%) | 0.6 | 0.3 | — | 57 |
| 101 | Men age 15 years and above who consume alcohol (%) | 5.8 | 5.2 | — | 57 |

### Haryana

**NFHS-5** · NFHS5-II · 131 indicator rows.

| Row | Indicator | Total | PDF page |
| --- | --- | --- | --- |
| 1 | Female population age 6 years and above who ever attended school (%) | 73.8 | 25 |
| 2 | Population below age 15 years (%) | 25.3 | 25 |
| 3 | Sex ratio of the total population (females per 1,000 males) | 926 | 25 |
| 4 | Sex ratio at birth for children born in the last five years (females per 1,000 males) | 893 | 25 |
| 5 | Children under age 5 years whose birth was registered with the civil authority (%) | 95.1 | 25 |
| 6 | Deaths in the last 3 years registered with the civil authority (%) | 86.4 | 25 |
| 7 | Population living in households with electricity (%) | 99.6 | 25 |
| 8 | Population living in households with an improved drinking -water source1 (%) | 98.6 | 25 |
| 9 | Population living in households that use an improved sanitation facility 2 (%) | 85.0 | 25 |
| 10 | Households using clean fuel for cooking3 (%) | 59.5 | 25 |
| 11 | Households using iodized salt (%) | 96.1 | 25 |
| 12 | Households with any usual member covered under a health insurance/financing scheme (%) | 25.7 | 25 |
| 13 | Children age 5 years who attended pre-primary school during the school year 2019-20 (%) | 7.6 | 25 |
| 14 | Women who are literate 4 (%) | 79.7 | 25 |
| 15 | Men who are literate4 (%) | 91.5 | 25 |
| 16 | Women with 10 or more years of schooling (%) | 49.5 | 25 |
| 17 | Men with 10 or more years of schooling (%) | 62.2 | 25 |
| 18 | Women who have ever used the internet (%) | 48.4 | 25 |
| 19 | Men who have ever used the internet (%) | 72.4 | 25 |
| 20 | Women age 20-24 years married before age 18 years (%) | 12.5 | 25 |
| 21 | Men age 25-29 years married before age 21 years (%) | 16.0 | 25 |
| 22 | Total fertility rate (children per woman) | 1.9 | 25 |
| 23 | Women age 15-19 years who were already mothers or pregnant at the time of the survey (%) | 3.9 | 25 |
| 24 | Adolescent fertility rate for women age 15 -19 years5 | 27 | 25 |
| 25 | Neonatal mortality rate (NNMR) | 21.6 | 25 |
| 26 | Infant mortality rate (IMR) | 33.3 | 25 |
| 27 | Under-five mortality rate (U5MR) | 38.7 | 25 |
| 28 | Any method6 (%) | 73.1 | 25 |
| 29 | Any modern method6 (%) | 60.5 | 25 |
| 30 | Female sterilization (%) | 32.3 | 25 |
| 31 | Male sterilization (%) | 0.9 | 25 |
| 32 | IUD/PPIUD (%) | 5.0 | 25 |
| 33 | Pill (%) | 2.8 | 25 |
| 34 | Condom (%) | 18.1 | 25 |
| 35 | Injectables (%) | 0.4 | 25 |
| 36 | Total unmet need7 (%) | 7.6 | 25 |
| 37 | Unmet need for spacing7 (%) | 3.3 | 25 |
| 38 | Health worker ever talked to female non-users about family planning (%) | 24.9 | 25 |
| 39 | Current users ever told about side effects of current method8 (%) | 69.1 | 25 |
| 40 | Mothers who had an antenatal check-up in the first trimester (%) | 85.2 | 26 |
| 41 | Mothers who had at least 4 antenatal care visits (%) | 60.4 | 26 |
| 42 | Mothers whose last birth was protected against neonatal tetanus9 (%) | 90.7 | 26 |
| 43 | Mothers who consumed iron folic acid for 100 days or more when they were pregnant (%) | 51.2 | 26 |
| 44 | Mothers who consumed iron folic acid for 180 days or more when they were pregnant (%) | 32.0 | 26 |
| 45 | Registered pregnancies for which the mother received a Mother and Child Protection (MCP) | 96.8 | 26 |
| 46 | Mothers who received postnatal care from a doctor/nurse/LHV/ANM/midwife/other health | 91.3 | 26 |
| 47 | Average out-of-pocket expenditure per delivery in a public health facility (Rs.) | 1,666 | 26 |
| 48 | Children born at home who were taken to a health facility for a check -up within 24 hours of | 3.8 | 26 |
| 49 | Children who received postnatal care from a doctor/nurse/LHV/ANM/midwife/other health | 91.0 | 26 |
| 50 | Institutional births (%) | 94.9 | 26 |
| 51 | Institutional births in public facility (%) | 57.5 | 26 |
| 52 | Home births that were conducted by skilled health personnel 10 (%) | 1.1 | 26 |
| 53 | Births attended by skilled health personnel10 (%) | 94.4 | 26 |
| 54 | Births delivered by caesarean section (%) | 19.5 | 26 |
| 55 | Births in a private health facility that were delivered by caesarean section (%) | 33.9 | 26 |
| 56 | Births in a public health facility that were delivered by caesarean section (%) | 11.7 | 26 |
| 57 | Children age 12-23 months fully vaccinated based on information from either vaccination card | 76.9 | 26 |
| 58 | Children age 12-23 months fully vaccinated based on information from vaccination card | 81.1 | 26 |
| 59 | Children age 12-23 months who have received BCG (%) | 95.0 | 26 |
| 60 | Children age 12-23 months who have received 3 doses of polio vaccine13 (%) | 80.6 | 26 |
| 61 | Children age 12-23 months who have received 3 doses of penta or DPT vaccine (%) | 88.5 | 26 |
| 62 | Children age 12-23 months who have received the first dose of measles-containing | 89.4 | 26 |
| 63 | Children age 24-35 months who have received a second dose of measles-containing | 32.0 | 26 |
| 64 | Children age 12-23 months who have received 3 doses of rotavirus vaccine 14 (%) | 79.8 | 26 |
| 65 | Children age 12-23 months who have received 3 doses of penta or hepatitis B vaccine (%) | 87.4 | 26 |
| 66 | Children age 9-35 months who received a vitamin A dose in the last 6 months (%) | 64.9 | 26 |
| 67 | Children age 12-23 months who received most of their vaccinations in a public health | 96.9 | 26 |
| 68 | Children age 12-23 months who received most of their vaccinations in a private health | 2.4 | 26 |
| 69 | Prevalence of diarrhoea in the 2 weeks preceding the survey (%) | 4.9 | 26 |
| 70 | Children with diarrhoea in the 2 weeks preceding the survey who received oral rehydration | 46.6 | 26 |
| 71 | Children with diarrhoea in the 2 weeks preceding the survey who received zinc (%) | 26.2 | 26 |
| 72 | Children with diarrhoea in the 2 weeks preceding the survey taken to a health facility or health | 76.1 | 26 |
| 73 | Prevalence of symptoms of acute respiratory infection (ARI) in the 2 weeks preceding the | 2.3 | 26 |
| 74 | Children with fever or symptoms of ARI in the 2 weeks preceding the survey taken to a health | 73.5 | 26 |
| 75 | Children under age 3 years breastfed within one hour of birth15 (%) | 41.6 | 27 |
| 76 | Children under age 6 months exclusively breastfed16 (%) | 69.5 | 27 |
| 77 | Children age 6-8 months receiving solid or semi-solid food and breastmilk16 (%) | 43.0 | 27 |
| 78 | Breastfeeding children age 6 -23 months receiving an adequate diet 16, 17 (%) | 11.9 | 27 |
| 79 | Non-breastfeeding children age 6 -23 months receiving an adequate diet 16, 17 (%) | 11.1 | 27 |
| 80 | Total children age 6 -23 months receiving an adequate diet 16, 17 (%) | 11.8 | 27 |
| 81 | Children under 5 years who are stunted (height-for-age)18 (%) | 27.5 | 27 |
| 82 | Children under 5 years who are wasted (weight-for-height)18 (%) | 11.5 | 27 |
| 83 | Children under 5 years who are severely wasted (weight-for-height)19 (%) | 4.4 | 27 |
| 84 | Children under 5 years who are underweight (weight-for-age)18 (%) | 21.5 | 27 |
| 85 | Children under 5 years who are overweight (weight-for-height)20 (%) | 3.3 | 27 |
| 86 | Women whose Body Mass Index (BMI) is below normal (BMI <18.5 kg/m 2)21 (%) | 15.1 | 27 |
| 87 | Men whose Body Mass Index (BMI) is below normal (BMI <18.5 kg/m2) (%) | 14.5 | 27 |
| 88 | Women who are overweight or obese (BMI ≥25.0 kg/m2)21 (%) | 33.1 | 27 |
| 89 | Men who are overweight or obese (BMI ≥25.0 kg/m2) (%) | 28.3 | 27 |
| 90 | Women who have high risk waist-to-hip ratio (≥0.85) (%) | 62.6 | 27 |
| 91 | Men who have high risk waist -to-hip ratio (≥0.90) (%) | 58.3 | 27 |
| 92 | Children age 6-59 months who are anaemic (<11.0 g/dl) 22 (%) | 70.4 | 27 |
| 93 | Non-pregnant women age 15-49 years who are anaemic (<12.0 g/dl)22 (%) | 60.6 | 27 |
| 94 | Pregnant women age 15-49 years who are anaemic (<11.0 g/dl)22 (%) | 56.5 | 27 |
| 95 | All women age 15 -49 years who are anaemic 22 (%) | 60.4 | 27 |
| 96 | All women age 15-19 years who are anaemic22 (%) | 62.3 | 27 |
| 97 | Men age 15-49 years who are anaemic (<13.0 g/dl)22 (%) | 18.9 | 27 |
| 98 | Men age 15 -19 years who are anaemic (<13.0 g/dl) 22 (%) | 29.9 | 27 |
| 99 | Blood sugar level - high (141-160 mg/dl)23 (%) | 5.4 | 27 |
| 100 | Blood sugar level - very high (>160 mg/dl) 23 (%) | 5.7 | 27 |
| 101 | Blood sugar level - high or very high (>140 mg/dl) or taking medicine to control blood sugar level23 (%) | 11.9 | 27 |
| 102 | Blood sugar level - high (141-160 mg/dl)23 (%) | 6.4 | 27 |
| 103 | Blood sugar level - very high (>160 mg/dl) 23 (%) | 6.2 | 27 |
| 104 | Blood sugar level - high or very high (>140 mg/dl) or taking medicine to control blood sugar level23 (%) | 13.5 | 27 |
| 105 | Mildly elevated blood pressure (Systolic 140 -159 mm of Hg and/or Diastolic 90-99 mm of Hg) (%) | 12.3 | 27 |
| 106 | Moderately or severely elevated blood pressure (Systolic ≥160 mm of Hg and/or Diastolic ≥100 mm of Hg) (%) | 5.4 | 27 |
| 107 | Elevated blood pressure (Systolic ≥140 mm of Hg and/or Diastolic ≥90 mm of Hg) or taking medicine to control blood pressure (%) | 21.0 | 27 |
| 108 | Mildly elevated blood pressure (Systolic 140 -159 mm of Hg and/or Diastolic 90-99 mm of Hg) (%) | 16.6 | 27 |
| 109 | Moderately or severely elevated blood pressure (Systolic ≥160 mm of Hg and/or Diastolic ≥100 mm of Hg) (%) | 6.9 | 27 |
| 110 | Elevated blood pressure (Systolic ≥140 mm of Hg and/or Diastolic ≥90 mm of Hg) or taking medicine to control blood pressure (%) | 25.1 | 27 |
| 111 | Ever undergone a screening test for cervical cancer (%) | 0.8 | 28 |
| 112 | Ever undergone a breast examination for breast cancer (%) | 0.3 | 28 |
| 113 | Ever undergone an oral cavity examination for oral cancer (%) | 0.3 | 28 |
| 114 | Ever undergone an oral cavity examination for oral cancer (%) | 1.4 | 28 |
| 115 | Women who have comprehensive knowledge 24 of HIV/AIDS (%) | 19.7 | 28 |
| 116 | Men who have comprehensive knowledge24 of HIV/AIDS (%) | 36.4 | 28 |
| 117 | Women who know that consistent condom use can reduce the chance of getting HIV/AIDS (%) | 70.9 | 28 |
| 118 | Men who know that consistent condom use can reduce the chance of getting HIV/AIDS (%) | 88.5 | 28 |
| 119 | Currently married women who usually participate in three household decisions25 (%) | 87.5 | 28 |
| 120 | Women who worked in the last 12 months and were paid in cash (%) | 18.8 | 28 |
| 121 | Women owning a house and/or land (alone or jointly with others) (%) | 39.3 | 28 |
| 122 | Women having a bank or savings account that they themselves use (%) | 73.6 | 28 |
| 123 | Women having a mobile phone that they themselves use (%) | 50.4 | 28 |
| 124 | Women age 15-24 years who use hygienic methods of protection during their menstrual period26 (%) | 93.2 | 28 |
| 125 | Ever-married women age 18-49 years who have ever experienced spousal violence27 (%) | 18.2 | 28 |
| 126 | Ever-married women age 18-49 years who have experienced physical violence during any pregnancy (%) | 1.6 | 28 |
| 127 | Young women age 18-29 years who experienced sexual violence by age 18 (%) | 0.4 | 28 |
| 128 | Women age 15 years and above who use any kind of tobacco (%) | 2.5 | 28 |
| 129 | Men age 15 years and above who use any kind of tobacco (%) | 29.1 | 28 |
| 130 | Women age 15 years and above who consume alcohol (%) | 0.3 | 28 |
| 131 | Men age 15 years and above who consume alcohol (%) | 16.1 | 28 |

**NFHS-6** · 101 extracted indicator rows.

| Row | Indicator | NFHS-5 Total as printed in NFHS-6 | NFHS-6 Total | Reviewed change | PDF page |
| --- | --- | --- | --- | --- | --- |
| 1 | Population below age 5 years (%) | 7.9 | 7.9 | — | 59 |
| 2 | Population below age 15 years (%) | 25.3 | 24.7 | — | 59 |
| 3 | Population age 60 years and above (%) | 11.8 | 12.3 | — | 59 |
| 4 | Household electricity access | 99.6 | 99.6 | +0.0 | 59 |
| 5 | Population living in households with an improved drinking-water source 1 (%) | 98.6 | 99.1 | — | 59 |
| 6 | Households using iodized salt (%) | 96.1 | 95.8 | — | 59 |
| 7 | Households with any usual member covered under a health insurance/financing scheme (%) | 25.7 | 68.3 | — | 59 |
| 8 | Households with any usual member having a bank account/post office account (%) | 96.1 | 98.0 | — | 59 |
| 9 | Female population age 6+ ever attended school | 73.8 | 76.1 | +2.3 | 59 |
| 10 | Households with any usual female members owning a house and/or land (alone or jointly with | 11.8 | 14.7 | — | 59 |
| 11 | Children age 2-4 years who attended pre-school (%) | 30.5 | 48.7 | — | 59 |
| 12 | Women with 10 or more years of schooling | 49.5 | 55.2 | +5.7 | 59 |
| 13 | Men with 10 or more years of schooling | 62.2 | 64.4 | +2.2 | 59 |
| 14 | Women who have ever used the internet (%) | 48.4 | 74.0 | — | 59 |
| 15 | Men who have ever used the internet (%) | 72.4 | 87.0 | — | 59 |
| 16 | Women age 20–24 married before age 18 | 12.5 | 11.9 | -0.6 | 59 |
| 17 | Men age 25-29 years married before age 21 years (%) | 16.0 | 13.3 | — | 59 |
| 18 | Total fertility rate, children per woman | 1.9 | 2.0 | +0.1 | 59 |
| 19 | Women age 15-19 years who were already mothers or pregnant at the time of the survey (%) | 3.9 | 4.7 | — | 59 |
| 20 | Any method2 (%) | 73.1 | 74.5 | — | 59 |
| 21 | Any modern method2 (%) | 60.5 | 53.1 | — | 59 |
| 22 | Any traditional method (%) | 12.6 | 21.4 | — | 59 |
| 23 | Female sterilization (%) | 32.3 | 28.5 | — | 59 |
| 24 | Male sterilization (%) | 0.9 | 0.9 | — | 59 |
| 25 | Total unmet need for family planning | 7.6 | 6.0 | -1.6 | 59 |
| 26 | Unmet need for spacing 3 (%) | 3.4 | 2.7 | — | 59 |
| 27 | Unmet need for limiting3 (%) | 4.2 | 3.3 | — | 59 |
| 28 | First-trimester antenatal check-up | 85.2 | 83.8 | -1.4 | 59 |
| 29 | Mothers who had any antenatal care visits (%) | 96.8 | 98.2 | — | 59 |
| 30 | At least four antenatal care visits | 60.9 | 79.0 | — | 59 |
| 31 | Mothers whose last birth was protected against neonatal tetanus 4 (%) | 90.7 | 92.2 | — | 59 |
| 32 | Mothers who consumed iron folic acid for 100 days or more when they were pregnant (%) | 51.2 | 65.2 | — | 59 |
| 33 | Mothers who consumed iron folic acid for 180 days or more when they were pregnant (%) | 31.9 | 48.7 | — | 59 |
| 34 | Registered pregnancies for which the mother received a Mother and Child Protection (MCP) | 96.8 | 96.3 | — | 59 |
| 35 | Institutional births | 94.9 | 96.3 | +1.4 | 59 |
| 36 | Institutional births in public facility (%) | 57.5 | 52.5 | — | 59 |
| 37 | Births attended by skilled health personnel | 94.4 | 96.0 | +1.6 | 59 |
| 38 | Caesarean births | 19.4 | 25.6 | — | 59 |
| 39 | Births in a private health facility that were delivered by caesarean section (%) | 33.9 | 40.2 | — | 59 |
| 40 | Births in a public health facility that were delivered by caesarean section (%) | 11.7 | 15.2 | — | 59 |
| 41 | Mothers who received postnatal care from a doctor/nurse/LHV/ANM/midwife/other health | 91.3 | 95.2 | — | 60 |
| 42 | Children born at home who were taken to a health facility for a check-up within 24 hours of | 3.8 | 4.2 | — | 60 |
| 43 | Children who received postnatal care from a doctor/nurse/LHV/ANM/midwife/ other health | 91.0 | 94.6 | — | 60 |
| 44 | Full vaccination, card or maternal recall | 76.9 | 79.7 | +2.8 | 60 |
| 45 | Full vaccination, card only | 81.1 | 86.2 | +5.1 | 60 |
| 46 | Children age 12-23 months who have received any vaccine (%) | 96.0 | 95.6 | — | 60 |
| 47 | BCG vaccination | 94.9 | 94.2 | — | 60 |
| 48 | Children age 12-23 months who have received 3 doses of polio vaccine 8 (%) | 80.6 | 82.2 | — | 60 |
| 49 | Children age 12-23 months who have received 3 doses of pentavalent vaccine (%) | 88.7 | 86.8 | — | 60 |
| 50 | Children age 12-23 months who have received the first dose of measles-containing | 89.4 | 90.1 | — | 60 |
| 51 | Children age 24-35 months who have received a second dose of measles-containing | 56.7 | 73.9 | — | 60 |
| 52 | Children age 12-23 months who have received birth dose of hepatitis B vaccine (%) | 66.6 | 84.7 | — | 60 |
| 53 | Children age 12-23 months who have received 3 doses of rotavirus vaccine (%) | 79.8 | 86.6 | — | 60 |
| 54 | Children age 9-35 months who received a vitamin A dose in the last 6 months (%) | 64.9 | 73.4 | — | 60 |
| 55 | Children age 12-23 months who received most of their vaccinations in a public health | 96.9 | 94.4 | — | 60 |
| 56 | Children age 12-23 months who received most of their vaccinations in a private health | 2.4 | 4.2 | — | 60 |
| 57 | Prevalence of diarrhoea in the 2 weeks preceding the survey (%) | 4.9 | 10.7 | — | 60 |
| 58 | Prevalence of severe diarrhoea in the 2 weeks preceding the survey (%) | 0.4 | 0.6 | — | 60 |
| 59 | Prevalence of symptoms of acute respiratory infection (ARI) in the 2 weeks preceding the | 2.3 | 1.2 | — | 60 |
| 60 | Children with fever or symptoms of ARI in the 2 weeks preceding the survey taken to a health | 73.5 | 74.6 | — | 60 |
| 61 | Children under age 3 years breastfed within one hour of birth 9 (%) | 41.6 | 37.9 | — | 60 |
| 62 | Children under age 6 months exclusively breastfed 10 (%) | 69.5 | 41.2 | — | 60 |
| 63 | Children under age 6 months currently breastfeeding 10 (%) | 95.0 | 94.0 | — | 60 |
| 64 | Children under age 6 months exclusively breastfed or breastfeeding and consuming plain | 86.1 | 83.3 | — | 60 |
| 65 | Children age 6-8 months receiving solid or semi-solid food and breastmilk 10 (%) | 43.0 | 67.2 | — | 60 |
| 66 | Breastfeeding children age 6-23 months receiving an adequate diet 10, 11 (%) | 11.9 | 18.1 | — | 60 |
| 67 | Non-breastfeeding children age 6-23 months receiving an adequate diet 10, 11 (%) | 10.7 | 13.1 | — | 60 |
| 68 | Total children age 6-23 months receiving an adequate diet 10, 11 (%) | 11.6 | 17.0 | — | 60 |
| 69 | Child stunting | 27.5 | 25.9 | -1.6 | 60 |
| 70 | Child wasting | 11.5 | 16.6 | +5.1 | 60 |
| 71 | Severe child wasting | 4.4 | 3.6 | -0.8 | 60 |
| 72 | Child underweight | 21.5 | 28.9 | +7.4 | 60 |
| 73 | Child overweight | 3.3 | 1.5 | -1.8 | 60 |
| 74 | Women whose Body Mass Index (BMI) is below normal (BMI <18.5 kg/m 2)15 (%) | 15.1 | 17.2 | — | 61 |
| 75 | Men whose Body Mass Index (BMI) is below normal (BMI <18.5 kg/m 2) (%) | 14.5 | 16.7 | — | 61 |
| 76 | Women aged 15–49 overweight or obese (BMI ≥25), % | 33.1 | 37.3 | — | 61 |
| 77 | Men aged 15–49 overweight or obese (BMI ≥25), % | 28.3 | 33.9 | — | 61 |
| 78 | Blood sugar level - high (141-160 mg/dl)16 (%) | 5.4 | 7.7 | — | 61 |
| 79 | Blood sugar level - very high (>160 mg/dl)16 (%) | 5.7 | 8.3 | — | 61 |
| 80 | Blood sugar level - high or very high (>140 mg/dl) or taking medicine to control blood | 11.9 | 16.7 | — | 61 |
| 81 | Blood sugar level - high (141-160 mg/dl)16 (%) | 6.4 | 8.4 | — | 61 |
| 82 | Blood sugar level - very high (>160 mg/dl)16 (%) | 6.2 | 9.3 | — | 61 |
| 83 | Blood sugar level - high or very high (>140 mg/dl) or taking medicine to control blood | 13.5 | 18.5 | — | 61 |
| 84 | Mildly elevated blood pressure (Systolic 140-159 mm of Hg and/or | 12.3 | 7.6 | — | 61 |
| 85 | Women aged 15+ with moderately or severely elevated blood pressure, % | 5.4 | 4.5 | — | 61 |
| 86 | Women aged 15+ with elevated blood pressure or taking medicine for it, % | 21.0 | 16.7 | — | 61 |
| 87 | Mildly elevated blood pressure (Systolic 140-159 mm of Hg and/or | 16.6 | 10.9 | — | 61 |
| 88 | Men aged 15+ with moderately or severely elevated blood pressure, % | 6.9 | 3.4 | — | 61 |
| 89 | Men aged 15+ with elevated blood pressure or taking medicine for it, % | 25.1 | 19.6 | — | 61 |
| 90 | Currently married women who usually participate in three household decisions17 (%) | 87.5 | 91.1 | — | 61 |
| 91 | Women who worked in the last 12 months and were paid in cash (%) | 18.8 | 25.1 | — | 61 |
| 92 | Women having a bank or savings account that they themselves use (%) | 73.6 | 85.2 | — | 61 |
| 93 | Women having a mobile phone that they themselves use (%) | 50.4 | 64.9 | — | 61 |
| 94 | Women age 15-24 years who use hygienic methods of protection during their menstrual | 93.5 | 94.3 | — | 61 |
| 95 | Ever-married women age 18-49 years who have ever experienced spousal violence 19 (%) | 17.9 | 13.6 | — | 61 |
| 96 | Ever-married women age 18-49 years who have experienced physical violence during any | 1.6 | 2.6 | — | 61 |
| 97 | Young women age 18-29 years who experienced sexual violence by age 18 (%) | 0.4 | 0.1 | — | 61 |
| 98 | Women age 15 years and above who use any kind of tobacco (%) | 2.6 | 2.2 | — | 61 |
| 99 | Men age 15 years and above who use any kind of tobacco (%) | 29.1 | 27.5 | — | 61 |
| 100 | Women age 15 years and above who consume alcohol (%) | 0.3 | 0.2 | — | 61 |
| 101 | Men age 15 years and above who consume alcohol (%) | 16.0 | 17.5 | — | 61 |

### Himachal Pradesh

**NFHS-5** · NFHS5-I · 131 indicator rows.

| Row | Indicator | Total | PDF page |
| --- | --- | --- | --- |
| 1 | Female population age 6 years and above who ever attended school (%) | 81.0 | 56 |
| 2 | Population below age 15 years (%) | 21.8 | 56 |
| 3 | Sex ratio of the total population (females per 1,000 males) | 1,040 | 56 |
| 4 | Sex ratio at birth for children born in the last five years (females per 1,000 males) | 875 | 56 |
| 5 | Children under age 5 years whose birth was registered with the civil authority (%) | 97.9 | 56 |
| 6 | Deaths in the last 3 years registered with the civil authority (%) | 94.0 | 56 |
| 7 | Population living in households with electricity (%) | 99.5 | 56 |
| 8 | Population living in households with an improved drinking-water source1 (%) | 96.2 | 56 |
| 9 | Population living in households that use an improved sanitation facility2 (%) | 81.8 | 56 |
| 10 | Households using clean fuel for cooking3 (%) | 51.7 | 56 |
| 11 | Households using iodized salt (%) | 99.1 | 56 |
| 12 | Households with any usual member covered under a health insurance/financing scheme (%) | 34.5 | 56 |
| 13 | Children age 5 years who attended pre-primary school during the school year 2019-20 (%) | 4.6 | 56 |
| 14 | Women who are literate4 (%) | 91.7 | 56 |
| 15 | Men who are literate4 (%) | 94.9 | 56 |
| 16 | Women with 10 or more years of schooling (%) | 65.9 | 56 |
| 17 | Men with 10 or more years of schooling (%) | 71.3 | 56 |
| 18 | Women who have ever used the internet (%) | 49.7 | 56 |
| 19 | Men who have ever used the internet (%) | 67.9 | 56 |
| 20 | Women age 20-24 years married before age 18 years (%) | 5.4 | 56 |
| 21 | Men age 25-29 years married before age 21 years (%) | 4.6 | 56 |
| 22 | Total fertility rate (children per woman) | 1.7 | 56 |
| 23 | Women age 15-19 years who were already mothers or pregnant at the time of the survey (%) | 3.4 | 56 |
| 24 | Adolescent fertility rate for women age 15-19 years5 | 22 | 56 |
| 25 | Neonatal mortality rate (NNMR) | 20.5 | 56 |
| 26 | Infant mortality rate (IMR) | 25.6 | 56 |
| 27 | Under-five mortality rate (U5MR) | 28.9 | 56 |
| 28 | Any method6 (%) | 74.2 | 56 |
| 29 | Any modern method6 (%) | 63.4 | 56 |
| 30 | Female sterilization (%) | 37.7 | 56 |
| 31 | Male sterilization (%) | 3.3 | 56 |
| 32 | IUD/PPIUD (%) | 1.1 | 56 |
| 33 | Pill (%) | 1.5 | 56 |
| 34 | Condom (%) | 19.2 | 56 |
| 35 | Injectables (%) | 0.1 | 56 |
| 36 | Total unmet need7 (%) | 7.9 | 56 |
| 37 | Unmet need for spacing7 (%) | 2.8 | 56 |
| 38 | Health worker ever talked to female non-users about family planning (%) | 19.3 | 56 |
| 39 | Current users ever told about side effects of current method8 (%) | 58.1 | 56 |
| 40 | Mothers who had an antenatal check-up in the first trimester (%) | 72.4 | 57 |
| 41 | Mothers who had at least 4 antenatal care visits (%) | 70.3 | 57 |
| 42 | Mothers whose last birth was protected against neonatal tetanus9 (%) | 90.0 | 57 |
| 43 | Mothers who consumed iron folic acid for 100 days or more when they were pregnant (%) | 67.2 | 57 |
| 44 | Mothers who consumed iron folic acid for 180 days or more when they were pregnant (%) | 43.0 | 57 |
| 45 | Registered pregnancies for which the mother received a Mother and Child Protection (MCP) card (%) | 98.7 | 57 |
| 46 | Mothers who received postnatal care from a doctor/nurse/LHV/ANM/midwife/other health personnel within 2 days of delivery (%) | 86.3 | 57 |
| 47 | Average out-of-pocket expenditure per delivery in a public health facility (Rs.) | 3,760 | 57 |
| 48 | Children born at home who were taken to a health facility for a check-up within 24 hours of birth (%) | 7.6 | 57 |
| 49 | Children who received postnatal care from a doctor/nurse/LHV/ANM/midwife/other health personnel within 2 days of delivery (%) | 86.0 | 57 |
| 50 | Institutional births (%) | 88.2 | 57 |
| 51 | Institutional births in public facility (%) | 71.7 | 57 |
| 52 | Home births that were conducted by skilled health personnel10 (%) | 1.7 | 57 |
| 53 | Births attended by skilled health personnel10 (%) | 87.1 | 57 |
| 54 | Births delivered by caesarean section (%) | 21.0 | 57 |
| 55 | Births in a private health facility that were delivered by caesarean section (%) | 51.4 | 57 |
| 56 | Births in a public health facility that were delivered by caesarean section (%) | 17.4 | 57 |
| 57 | Children age 12-23 months fully vaccinated based on information from either vaccination card or mother's recall11 (%) | 89.3 | 57 |
| 58 | Children age 12-23 months fully vaccinated based on information from vaccination card only12 (%) | 96.4 | 57 |
| 59 | Children age 12-23 months who have received BCG (%) | 98.2 | 57 |
| 60 | Children age 12-23 months who have received 3 doses of polio vaccine13 (%) | 90.1 | 57 |
| 61 | Children age 12-23 months who have received 3 doses of penta or DPT vaccine (%) | 96.1 | 57 |
| 62 | Children age 12-23 months who have received the first dose of measles-containing vaccine (MCV) (%) | 95.9 | 57 |
| 63 | Children age 24-35 months who have received a second dose of measles-containing vaccine (MCV) (%) | 42.4 | 57 |
| 64 | Children age 12-23 months who have received 3 doses of rotavirus vaccine14 (%) | 87.9 | 57 |
| 65 | Children age 12-23 months who have received 3 doses of penta or hepatitis B vaccine (%) | 96.3 | 57 |
| 66 | Children age 9-59 months who received a vitamin A dose in the last 6 months (%) | 77.1 | 57 |
| 67 | Children age 12-23 months who received most of their vaccinations in a public health facility (%) | 97.5 | 57 |
| 68 | Children age 12-23 months who received most of their vaccinations in a private health facility (%) | 1.8 | 57 |
| 69 | Prevalence of diarrhoea in the 2 weeks preceding the survey (%) | 4.7 | 57 |
| 70 | Children with diarrhoea in the 2 weeks preceding the survey who received oral rehydration salts (ORS) (%) | 73.7 | 57 |
| 71 | Children with diarrhoea in the 2 weeks preceding the survey who received zinc (%) | 19.5 | 57 |
| 72 | Children with diarrhoea in the 2 weeks preceding the survey taken to a health facility or health provider (%) | 67.9 | 57 |
| 73 | Prevalence of symptoms of acute respiratory infection (ARI) in the 2 weeks preceding the survey (%) | 1.5 | 57 |
| 74 | Children with fever or symptoms of ARI in the 2 weeks preceding the survey taken to a health facility or health provider (%) | 76.2 | 57 |
| 75 | Children under age 3 years breastfed within one hour of birth15 (%) | 45.1 | 58 |
| 76 | Children under age 6 months exclusively breastfed16 (%) | 69.9 | 58 |
| 77 | Children age 6-8 months receiving solid or semi-solid food and breastmilk16 (%) | 68.3 | 58 |
| 78 | Breastfeeding children age 6-23 months receiving an adequate diet16, 17 (%) | 18.0 | 58 |
| 79 | Non-breastfeeding children age 6-23 months receiving an adequate diet16, 17 (%) | 21.6 | 58 |
| 80 | Total children age 6-23 months receiving an adequate diet16, 17 (%) | 19.0 | 58 |
| 81 | Children under 5 years who are stunted (height-for-age)18 (%) | 30.8 | 58 |
| 82 | Children under 5 years who are wasted (weight-for-height)18 (%) | 17.4 | 58 |
| 83 | Children under 5 years who are severely wasted (weight-for-height)19 (%) | 6.9 | 58 |
| 84 | Children under 5 years who are underweight (weight-for-age)18 (%) | 25.5 | 58 |
| 85 | Children under 5 years who are overweight (weight-for-height)20 (%) | 5.7 | 58 |
| 86 | Women whose Body Mass Index (BMI) is below normal (BMI <18.5 kg/m2)21 (%) | 13.9 | 58 |
| 87 | Men whose Body Mass Index (BMI) is below normal (BMI <18.5 kg/m2) (%) | 11.8 | 58 |
| 88 | Women who are overweight or obese (BMI ≥25.0 kg/m2)21 (%) | 30.4 | 58 |
| 89 | Men who are overweight or obese (BMI ≥25.0 kg/m2) (%) | 30.6 | 58 |
| 90 | Women who have high risk waist-to-hip ratio (≥0.85) (%) | 61.9 | 58 |
| 91 | Men who have high risk waist-to-hip ratio (≥0.90) (%) | 52.3 | 58 |
| 92 | Children age 6-59 months who are anaemic (<11.0 g/dl)22 (%) | 55.4 | 58 |
| 93 | Non-pregnant women age 15-49 years who are anaemic (<12.0 g/dl)22 (%) | 53.4 | 58 |
| 94 | Pregnant women age 15-49 years who are anaemic (<11.0 g/dl)22 (%) | 42.2 | 58 |
| 95 | All women age 15-49 years who are anaemic22 (%) | 53.0 | 58 |
| 96 | All women age 15-19 years who are anaemic22 (%) | 53.2 | 58 |
| 97 | Men age 15-49 years who are anaemic (<13.0 g/dl)22 (%) | 18.6 | 58 |
| 98 | Men age 15-19 years who are anaemic (<13.0 g/dl)22 (%) | 22.1 | 58 |
| 99 | Blood sugar level - high (141-160 mg/dl)23 (%) | 6.4 | 58 |
| 100 | Blood sugar level - very high (>160 mg/dl)23 (%) | 6.4 | 58 |
| 101 | Blood sugar level - high or very high (>140 mg/dl) or taking medicine to control blood sugar level23 (%) | 13.9 | 58 |
| 102 | Blood sugar level - high (141-160 mg/dl)23 (%) | 6.8 | 58 |
| 103 | Blood sugar level - very high (>160 mg/dl)23 (%) | 6.7 | 58 |
| 104 | Blood sugar level - high or very high (>140 mg/dl) or taking medicine to control blood sugar level23 (%) | 14.7 | 58 |
| 105 | Mildly elevated blood pressure (Systolic 140-159 mm of Hg and/or Diastolic 90-99 mm of Hg) (%) | 11.9 | 58 |
| 106 | Moderately or severely elevated blood pressure (Systolic ≥160 mm of Hg and/or Diastolic ≥100 mm of Hg) (%) | 5.1 | 58 |
| 107 | Elevated blood pressure (Systolic ≥140 mm of Hg and/or Diastolic ≥90 mm of Hg) or taking medicine to control blood pressure (%) | 22.2 | 58 |
| 108 | Mildly elevated blood pressure (Systolic 140-159 mm of Hg and/or Diastolic 90-99 mm of Hg) (%) | 16.5 | 58 |
| 109 | Moderately or severely elevated blood pressure (Systolic ≥160 mm of Hg and/or Diastolic ≥100 mm of Hg) (%) | 4.9 | 58 |
| 110 | Elevated blood pressure (Systolic ≥140 mm of Hg and/or Diastolic ≥90 mm of Hg) or taking medicine to control blood pressure (%) | 24.4 | 58 |
| 111 | Ever undergone a screening test for cervical cancer (%) | 0.9 | 59 |
| 112 | Ever undergone a breast examination for breast cancer (%) | 0.4 | 59 |
| 113 | Ever undergone an oral cavity examination for oral cancer (%) | 0.3 | 59 |
| 114 | Ever undergone an oral cavity examination for oral cancer (%) | 1.1 | 59 |
| 115 | Women who have comprehensive knowledge24 of HIV/AIDS (%) | 36.2 | 59 |
| 116 | Men who have comprehensive knowledge24 of HIV/AIDS (%) | 40.8 | 59 |
| 117 | Women who know that consistent condom use can reduce the chance of getting HIV/AIDS (%) | 76.6 | 59 |
| 118 | Men who know that consistent condom use can reduce the chance of getting HIV/AIDS (%) | 85.5 | 59 |
| 119 | Currently married women who usually participate in three household decisions25 (%) | 93.9 | 59 |
| 120 | Women who worked in the last 12 months and were paid in cash (%) | 20.2 | 59 |
| 121 | Women owning a house and/or land (alone or jointly with others) (%) | 23.1 | 59 |
| 122 | Women having a bank or savings account that they themselves use (%) | 83.1 | 59 |
| 123 | Women having a mobile phone that they themselves use (%) | 79.5 | 59 |
| 124 | Women age 15-24 years who use hygienic methods of protection during their menstrual period26 (%) | 91.5 | 59 |
| 125 | Ever-married women age 18-49 years who have ever experienced spousal violence27 (%) | 8.3 | 59 |
| 126 | Ever-married women age 18-49 years who have experienced physical violence during any pregnancy (%) | 0.6 | 59 |
| 127 | Young women age 18-29 years who experienced sexual violence by age 18 (%) | 2.5 | 59 |
| 128 | Women age 15 years and above who use any kind of tobacco (%) | 1.7 | 59 |
| 129 | Men age 15 years and above who use any kind of tobacco (%) | 32.3 | 59 |
| 130 | Women age 15 years and above who consume alcohol (%) | 0.6 | 59 |
| 131 | Men age 15 years and above who consume alcohol (%) | 31.9 | 59 |

**NFHS-6** · 101 extracted indicator rows.

| Row | Indicator | NFHS-5 Total as printed in NFHS-6 | NFHS-6 Total | Reviewed change | PDF page |
| --- | --- | --- | --- | --- | --- |
| 1 | Population below age 5 years (%) | 6.4 | 6.4 | — | 63 |
| 2 | Population below age 15 years (%) | 21.8 | 20.9 | — | 63 |
| 3 | Population age 60 years and above (%) | 14.7 | 16.4 | — | 63 |
| 4 | Household electricity access | 99.5 | 99.8 | +0.3 | 63 |
| 5 | Population living in households with an improved drinking-water source 1 (%) | 96.2 | 89.5 | — | 63 |
| 6 | Households using iodized salt (%) | 99.1 | 96.7 | — | 63 |
| 7 | Households with any usual member covered under a health insurance/financing scheme (%) | 38.9 | 61.4 | — | 63 |
| 8 | Households with any usual member having a bank account/post office account (%) | 97.4 | 98.6 | — | 63 |
| 9 | Female population age 6+ ever attended school | 81.0 | 83.3 | +2.3 | 63 |
| 10 | Households with any usual female members owning a house and/or land (alone or jointly with | 16.1 | 18.7 | — | 63 |
| 11 | Children age 2-4 years who attended pre-school (%) | 64.7 | 50.9 | — | 63 |
| 12 | Women with 10 or more years of schooling | 65.9 | 72.1 | +6.2 | 63 |
| 13 | Men with 10 or more years of schooling | 71.3 | 76.0 | +4.7 | 63 |
| 14 | Women who have ever used the internet (%) | 49.7 | 75.4 | — | 63 |
| 15 | Men who have ever used the internet (%) | 52.7 | 83.0 | — | 63 |
| 16 | Women age 20–24 married before age 18 | 5.4 | 7.9 | +2.5 | 63 |
| 17 | Men age 25-29 years married before age 21 years (%) | 4.6 | 11.5 | — | 63 |
| 18 | Total fertility rate, children per woman | 1.7 | 1.8 | +0.1 | 63 |
| 19 | Women age 15-19 years who were already mothers or pregnant at the time of the survey (%) | 3.4 | 2.9 | — | 63 |
| 20 | Any method2 (%) | 74.2 | 76.1 | — | 63 |
| 21 | Any modern method2 (%) | 63.4 | 58.3 | — | 63 |
| 22 | Any traditional method (%) | 10.8 | 17.8 | — | 63 |
| 23 | Female sterilization (%) | 37.7 | 32.2 | — | 63 |
| 24 | Male sterilization (%) | 3.3 | 2.3 | — | 63 |
| 25 | Total unmet need for family planning | 7.9 | 6.3 | -1.6 | 63 |
| 26 | Unmet need for spacing 3 (%) | 2.8 | 2.6 | — | 63 |
| 27 | Unmet need for limiting3 (%) | 5.1 | 3.7 | — | 63 |
| 28 | First-trimester antenatal check-up | 72.4 | 84.0 | +11.6 | 63 |
| 29 | Mothers who had any antenatal care visits (%) | 88.2 | 94.3 | — | 63 |
| 30 | At least four antenatal care visits | 70.6 | 83.2 | — | 63 |
| 31 | Mothers whose last birth was protected against neonatal tetanus 4 (%) | 90.0 | 96.3 | — | 63 |
| 32 | Mothers who consumed iron folic acid for 100 days or more when they were pregnant (%) | 67.2 | 82.1 | — | 63 |
| 33 | Mothers who consumed iron folic acid for 180 days or more when they were pregnant (%) | 43.0 | 62.9 | — | 63 |
| 34 | Registered pregnancies for which the mother received a Mother and Child Protection (MCP) | 98.7 | 98.3 | — | 63 |
| 35 | Institutional births | 88.2 | 91.7 | +3.5 | 63 |
| 36 | Institutional births in public facility (%) | 71.7 | 70.6 | — | 63 |
| 37 | Births attended by skilled health personnel | 87.1 | 92.4 | +5.3 | 63 |
| 38 | Caesarean births | 21.0 | 29.9 | +8.9 | 63 |
| 39 | Births in a private health facility that were delivered by caesarean section (%) | 51.4 | 63.7 | — | 63 |
| 40 | Births in a public health facility that were delivered by caesarean section (%) | 17.4 | 23.3 | — | 63 |
| 41 | Mothers who received postnatal care from a doctor/nurse/LHV/ANM/midwife/other health | 86.3 | 87.4 | — | 64 |
| 42 | Children born at home who were taken to a health facility for a check-up within 24 hours of | 7.6 | 5.0 | — | 64 |
| 43 | Children who received postnatal care from a doctor/nurse/LHV/ANM/midwife/ other health | 86.0 | 88.7 | — | 64 |
| 44 | Full vaccination, card or maternal recall | 89.2 | 90.1 | — | 64 |
| 45 | Full vaccination, card only | 96.4 | 86.3 | -10.1 | 64 |
| 46 | Children age 12-23 months who have received any vaccine (%) | 98.2 | 98.5 | — | 64 |
| 47 | BCG vaccination | 98.2 | 97.9 | -0.3 | 64 |
| 48 | Children age 12-23 months who have received 3 doses of polio vaccine 8 (%) | 90.1 | 92.6 | — | 64 |
| 49 | Children age 12-23 months who have received 3 doses of pentavalent vaccine (%) | 96.1 | 95.2 | — | 64 |
| 50 | Children age 12-23 months who have received the first dose of measles-containing | 95.9 | 95.7 | — | 64 |
| 51 | Children age 24-35 months who have received a second dose of measles-containing | 69.2 | 77.2 | — | 64 |
| 52 | Children age 12-23 months who have received birth dose of hepatitis B vaccine (%) | 92.4 | 91.2 | — | 64 |
| 53 | Children age 12-23 months who have received 3 doses of rotavirus vaccine (%) | 87.9 | 90.5 | — | 64 |
| 54 | Children age 9-35 months who received a vitamin A dose in the last 6 months (%) | 77.3 | 82.4 | — | 64 |
| 55 | Children age 12-23 months who received most of their vaccinations in a public health | 97.5 | 97.2 | — | 64 |
| 56 | Children age 12-23 months who received most of their vaccinations in a private health | 1.8 | 2.0 | — | 64 |
| 57 | Prevalence of diarrhoea in the 2 weeks preceding the survey (%) | 4.7 | 4.6 | — | 64 |
| 58 | Prevalence of severe diarrhoea in the 2 weeks preceding the survey (%) | 0.2 | 0.5 | — | 64 |
| 59 | Prevalence of symptoms of acute respiratory infection (ARI) in the 2 weeks preceding the | 1.5 | 1.0 | — | 64 |
| 60 | Children with fever or symptoms of ARI in the 2 weeks preceding the survey taken to a health | 76.2 | 74.6 | — | 64 |
| 61 | Children under age 3 years breastfed within one hour of birth 9 (%) | 45.1 | 48.5 | — | 64 |
| 62 | Children under age 6 months exclusively breastfed 10 (%) | 69.9 | 60.8 | — | 64 |
| 63 | Children under age 6 months currently breastfeeding 10 (%) | 98.2 | 97.2 | — | IIPS fact sheet |
| 64 | Children under age 6 months exclusively breastfed or breastfeeding and consuming plain | 86.7 | 87.8 | — | 64 |
| 65 | Children age 6-8 months receiving solid or semi-solid food and breastmilk 10 (%) | 68.3 | 67.3 | — | 64 |
| 66 | Breastfeeding children age 6-23 months receiving an adequate diet 10, 11 (%) | 17.7 | 28.3 | — | 64 |
| 67 | Non-breastfeeding children age 6-23 months receiving an adequate diet 10, 11 (%) | 20.7 | 26.2 | — | 64 |
| 68 | Total children age 6-23 months receiving an adequate diet 10, 11 (%) | 18.5 | 27.8 | — | 64 |
| 69 | Child stunting | 30.8 | 20.6 | -10.2 | 64 |
| 70 | Child wasting | 17.4 | 10.4 | -7.0 | 64 |
| 71 | Severe child wasting | 6.9 | 2.4 | -4.5 | 64 |
| 72 | Child underweight | 25.5 | 16.8 | -8.7 | 64 |
| 73 | Child overweight | 5.7 | 2.7 | -3.0 | 64 |
| 74 | Women whose Body Mass Index (BMI) is below normal (BMI <18.5 kg/m 2)15 (%) | 13.9 | 15.1 | — | 65 |
| 75 | Men whose Body Mass Index (BMI) is below normal (BMI <18.5 kg/m 2) (%) | 11.8 | 15.0 | — | 65 |
| 76 | Women aged 15–49 overweight or obese (BMI ≥25), % | 30.4 | 38.2 | — | IIPS fact sheet |
| 77 | Men aged 15–49 overweight or obese (BMI ≥25), % | 30.6 | 31.4 | — | IIPS fact sheet |
| 78 | Blood sugar level - high (141-160 mg/dl)16 (%) | 6.4 | 9.1 | — | 65 |
| 79 | Blood sugar level - very high (>160 mg/dl)16 (%) | 6.4 | 10.4 | — | 65 |
| 80 | Blood sugar level - high or very high (>140 mg/dl) or taking medicine to control blood | 13.9 | 20.6 | — | 65 |
| 81 | Blood sugar level - high (141-160 mg/dl)16 (%) | 6.8 | 8.9 | — | 65 |
| 82 | Blood sugar level - very high (>160 mg/dl)16 (%) | 6.7 | 10.0 | — | 65 |
| 83 | Blood sugar level - high or very high (>140 mg/dl) or taking medicine to control blood | 14.7 | 20.0 | — | 65 |
| 84 | Mildly elevated blood pressure (Systolic 140-159 mm of Hg and/or | 11.9 | 12.4 | — | 65 |
| 85 | Women aged 15+ with moderately or severely elevated blood pressure, % | 5.1 | 6.3 | — | 65 |
| 86 | Women aged 15+ with elevated blood pressure or taking medicine for it, % | 22.2 | 24.1 | — | 65 |
| 87 | Mildly elevated blood pressure (Systolic 140-159 mm of Hg and/or | 16.5 | 18.4 | — | 65 |
| 88 | Men aged 15+ with moderately or severely elevated blood pressure, % | 4.9 | 5.8 | — | 65 |
| 89 | Men aged 15+ with elevated blood pressure or taking medicine for it, % | 24.4 | 31.7 | — | 65 |
| 90 | Currently married women who usually participate in three household decisions 17 (%) | 93.9 | 92.3 | — | 65 |
| 91 | Women who worked in the last 12 months and were paid in cash (%) | 20.2 | 23.6 | — | 65 |
| 92 | Women having a bank or savings account that they themselves use (%) | 83.1 | 93.0 | — | 65 |
| 93 | Women having a mobile phone that they themselves use (%) | 79.5 | 84.3 | — | 65 |
| 94 | Women age 15-24 years who use hygienic methods of protection during their menstrual | 92.0 | 94.9 | — | 65 |
| 95 | Ever-married women age 18-49 years who have ever experienced spousal violence 19 (%) | 8.6 | 4.3 | — | 65 |
| 96 | Ever-married women age 18-49 years who have experienced physical violence during any | 0.6 | 0.8 | — | 65 |
| 97 | Young women age 18-29 years who experienced sexual violence by age 18 (%) | 0.7 | 0.3 | — | 65 |
| 98 | Women age 15 years and above who use any kind of tobacco (%) | 1.7 | 1.9 | — | 65 |
| 99 | Men age 15 years and above who use any kind of tobacco (%) | 32.2 | 28.9 | — | 65 |
| 100 | Women age 15 years and above who consume alcohol (%) | 0.6 | 0.6 | — | 65 |
| 101 | Men age 15 years and above who consume alcohol (%) | 31.9 | 30.2 | — | 65 |

### Jharkhand

**NFHS-5** · NFHS5-II · 131 indicator rows.

| Row | Indicator | Total | PDF page |
| --- | --- | --- | --- |
| 1 | Female population age 6 years and above who ever attended school (%) | 64.5 | 31 |
| 2 | Population below age 15 years (%) | 31.3 | 31 |
| 3 | Sex ratio of the total population (females per 1,000 males) | 1,050 | 31 |
| 4 | Sex ratio at birth for children born in the last five years (females per 1,000 males) | 899 | 31 |
| 5 | Children under age 5 years whose birth was registered with the civil authority (%) | 73.5 | 31 |
| 6 | Deaths in the last 3 years registered with the civil authority (%) | 40.4 | 31 |
| 7 | Population living in households with electricity (%) | 94.3 | 31 |
| 8 | Population living in households with an improved drinking -water source1 (%) | 86.6 | 31 |
| 9 | Population living in households that use an improved sanitation facility 2 (%) | 56.7 | 31 |
| 10 | Households using clean fuel for cooking3 (%) | 31.9 | 31 |
| 11 | Households using iodized salt (%) | 97.7 | 31 |
| 12 | Households with any usual member covered under a health insurance/financing scheme (%) | 50.3 | 31 |
| 13 | Children age 5 years who attended pre-primary school during the school year 2019-20 (%) | 9.0 | 31 |
| 14 | Women who are literate 4 (%) | 61.7 | 31 |
| 15 | Men who are literate4 (%) | 81.3 | 31 |
| 16 | Women with 10 or more years of schooling (%) | 33.2 | 31 |
| 17 | Men with 10 or more years of schooling (%) | 46.6 | 31 |
| 18 | Women who have ever used the internet (%) | 31.4 | 31 |
| 19 | Men who have ever used the internet (%) | 58.0 | 31 |
| 20 | Women age 20-24 years married before age 18 years (%) | 32.2 | 31 |
| 21 | Men age 25-29 years married before age 21 years (%) | 22.7 | 31 |
| 22 | Total fertility rate (children per woman) | 2.3 | 31 |
| 23 | Women age 15-19 years who were already mothers or pregnant at the time of the survey (%) | 9.8 | 31 |
| 24 | Adolescent fertility rate for women age 15-19 years5 | 64 | 31 |
| 25 | Neonatal mortality rate (NNMR) | 28.2 | 31 |
| 26 | Infant mortality rate (IMR) | 37.9 | 31 |
| 27 | Under-five mortality rate (U5MR) | 45.4 | 31 |
| 28 | Any method6 (%) | 61.7 | 31 |
| 29 | Any modern method 6 (%) | 49.5 | 31 |
| 30 | Female sterilization (%) | 37.4 | 31 |
| 31 | Male sterilization (%) | 0.3 | 31 |
| 32 | IUD/PPIUD (%) | 1.7 | 31 |
| 33 | Pill (%) | 3.1 | 31 |
| 34 | Condom (%) | 4.1 | 31 |
| 35 | Injectables (%) | 0.5 | 31 |
| 36 | Total unmet need7 (%) | 11.5 | 31 |
| 37 | Unmet need for spacing7 (%) | 4.8 | 31 |
| 38 | Health worker ever talked to female non-users about family planning (%) | 29.1 | 31 |
| 39 | Current users ever told about side effects of current method8 (%) | 51.1 | 31 |
| 40 | Mothers who had an antenatal check-up in the first trimester (%) | 68.0 | 32 |
| 41 | Mothers who had at least 4 antenatal care visits (%) | 38.6 | 32 |
| 42 | Mothers whose last birth was protected against neonatal tetanus9 (%) | 90.8 | 32 |
| 43 | Mothers who consumed iron folic acid for 100 days or more when they were pregnant (%) | 28.2 | 32 |
| 44 | Mothers who consumed iron folic acid for 180 days or more when they were pregnant (%) | 14.9 | 32 |
| 45 | Registered pregnancies for which the mother received a Mother and Child Protection (MCP) card (%) | 91.5 | 32 |
| 46 | Mothers who received postnatal care from a doctor/nurse/LHV/ANM/midwife/other health personnel within 2 days of delivery (%) | 69.1 | 32 |
| 47 | Average out-of-pocket expenditure per delivery in a public health facility (Rs.) | 2,069 | 32 |
| 48 | Children born at home who were taken to a health facility for a check -up within 24 hours of birth (%) | 3.4 | 32 |
| 49 | Children who received postnatal care from a doctor/nurse/LHV/ANM/midwife/other health personnel within 2 days of delivery (%) | 68.7 | 32 |
| 50 | Institutional births (%) | 75.8 | 32 |
| 51 | Institutional births in public facility (%) | 56.8 | 32 |
| 52 | Home births that were conducted by skilled health personnel 10 (%) | 8.4 | 32 |
| 53 | Births attended by skilled health personnel10 (%) | 82.5 | 32 |
| 54 | Births delivered by caesarean section (%) | 12.8 | 32 |
| 55 | Births in a private health facility that were delivered by caesarean section (%) | 46.7 | 32 |
| 56 | Births in a public health facility that were delivered by caesarean section (%) | 7.0 | 32 |
| 57 | Children age 12-23 months fully vaccinated based on information from either vaccination card or mother's recall11 (%) | 73.9 | 32 |
| 58 | Children age 12-23 months fully vaccinated based on information from vaccination card only12 (%) | 79.2 | 32 |
| 59 | Children age 12-23 months who have received BCG (%) | 95.0 | 32 |
| 60 | Children age 12-23 months who have received 3 doses of polio vaccine13 (%) | 76.8 | 32 |
| 61 | Children age 12-23 months who have received 3 doses of penta or DPT vaccine (%) | 85.6 | 32 |
| 62 | Children age 12-23 months who have received the first dose of measles-containing vaccine (MCV) (%) | 86.7 | 32 |
| 63 | Children age 24-35 months who have received a second dose of measles-containing vaccine (MCV) (%) | 32.3 | 32 |
| 64 | Children age 12-23 months who have received 3 doses of rotavirus vaccine 14 (%) | 74.6 | 32 |
| 65 | Children age 12-23 months who have received 3 doses of penta or hepatitis B vaccine (%) | 84.4 | 32 |
| 66 | Children age 9-35 months who received a vitamin A dose in the last 6 months (%) | 70.9 | 32 |
| 67 | Children age 12-23 months who received most of their vaccinations in a public health facility (%) | 96.5 | 32 |
| 68 | Children age 12-23 months who received most of their vaccinations in a private health facility (%) | 2.9 | 32 |
| 69 | Prevalence of diarrhoea in the 2 weeks preceding the survey (%) | 7.2 | 32 |
| 70 | Children with diarrhoea in the 2 weeks preceding the survey who received oral rehydration salts (ORS) (%) | 55.6 | 32 |
| 71 | Children with diarrhoea in the 2 weeks preceding the survey who received zinc (%) | 28.9 | 32 |
| 72 | Children with diarrhoea in the 2 weeks preceding the survey taken to a health facility or health provider (%) | 59.7 | 32 |
| 73 | Prevalence of symptoms of acute respiratory infection (ARI) in the 2 weeks preceding the survey (%) | 2.1 | 32 |
| 74 | Children with fever or symptoms of ARI in the 2 weeks preceding the survey taken to a health facility or health provider (%) | 59.8 | 32 |
| 75 | Children under age 3 years breastfed within one hour of birth15 (%) | 21.5 | 33 |
| 76 | Children under age 6 months exclusively breastfed16 (%) | 76.1 | 33 |
| 77 | Children age 6-8 months receiving solid or semi-solid food and breastmilk16 (%) | 38.8 | 33 |
| 78 | Breastfeeding children age 6 -23 months receiving an adequate diet 16, 17 (%) | 10.0 | 33 |
| 79 | Non-breastfeeding children age 6 -23 months receiving an adequate diet 16, 17 (%) | 16.3 | 33 |
| 80 | Total children age 6 -23 months receiving an adequate diet 16, 17 (%) | 10.5 | 33 |
| 81 | Children under 5 years who are stunted (height -for-age)18 (%) | 39.6 | 33 |
| 82 | Children under 5 years who are wasted (weight-for-height)18 (%) | 22.4 | 33 |
| 83 | Children under 5 years who are severely wasted (weight-for-height)19 (%) | 9.1 | 33 |
| 84 | Children under 5 years who are underweight (weight-for-age)18 (%) | 39.4 | 33 |
| 85 | Children under 5 years who are overweight (weight-for-height)20 (%) | 2.8 | 33 |
| 86 | Women whose Body Mass Index (BMI) is below normal (BMI <18.5 kg/m 2)21 (%) | 26.2 | 33 |
| 87 | Men whose Body Mass Index (BMI) is below normal (BMI <18.5 kg/m2) (%) | 17.1 | 33 |
| 88 | Women who are overweight or obese (BMI ≥25.0 kg/m2)21 (%) | 11.9 | 33 |
| 89 | Men who are overweight or obese (BMI ≥25.0 kg/m2) (%) | 15.1 | 33 |
| 90 | Women who have high risk waist-to-hip ratio (≥0.85) (%) | 58.7 | 33 |
| 91 | Men who have high risk waist -to-hip ratio (≥0.90) (%) | 46.5 | 33 |
| 92 | Children age 6-59 months who are anaemic (<11.0 g/dl) 22 (%) | 67.5 | 33 |
| 93 | Non-pregnant women age 15-49 years who are anaemic (<12.0 g/dl)22 (%) | 65.7 | 33 |
| 94 | Pregnant women age 15-49 years who are anaemic (<11.0 g/dl) 22 (%) | 56.8 | 33 |
| 95 | All women age 15 -49 years who are anaemic 22 (%) | 65.3 | 33 |
| 96 | All women age 15-19 years who are anaemic22 (%) | 65.8 | 33 |
| 97 | Men age 15-49 years who are anaemic (<13.0 g/dl)22 (%) | 29.6 | 33 |
| 98 | Men age 15 -19 years who are anaemic (<13.0 g/dl) 22 (%) | 39.7 | 33 |
| 99 | Blood sugar level - high (141-160 mg/dl)23 (%) | 5.4 | 33 |
| 100 | Blood sugar level - very high (>160 mg/dl) 23 (%) | 4.2 | 33 |
| 101 | Blood sugar level - high or very high (>140 mg/dl) or taking medicine to control blood | 10.2 | 33 |
| 102 | Blood sugar level - high (141-160 mg/dl)23 (%) | 6.9 | 33 |
| 103 | Blood sugar level - very high (>160 mg/dl) 23 (%) | 6.4 | 33 |
| 104 | Blood sugar level - high or very high (>140 mg/dl) or taking medicine to control blood | 14.1 | 33 |
| 105 | Mildly elevated blood pressure (Systolic 140 -159 mm of Hg and/or | 11.1 | 33 |
| 106 | Moderately or severely elevated blood pressure (Systolic ≥160 mm of Hg and/or | 5.0 | 33 |
| 107 | Elevated blood pressure (Systolic ≥140 mm of Hg and/or Diastolic ≥90 mm of Hg) or taking | 17.8 | 33 |
| 108 | Mildly elevated blood pressure (Systolic 140 -159 mm of Hg and/or | 15.1 | 33 |
| 109 | Moderately or severely elevated blood pressure (Systolic ≥160 mm of Hg and/or | 6.1 | 33 |
| 110 | Elevated blood pressure (Systolic ≥140 mm of Hg and/or Diastolic ≥90 mm of Hg) or taking | 22.6 | 33 |
| 111 | Ever undergone a screening test for cervical cancer (%) | 0.5 | 34 |
| 112 | Ever undergone a breast examination for breast cancer (%) | 0.1 | 34 |
| 113 | Ever undergone an oral cavity examination for oral cancer (%) | 0.2 | 34 |
| 114 | Ever undergone an oral cavity examination for oral cancer (%) | 0.4 | 34 |
| 115 | Women who have comprehensive knowledge 24 of HIV/AIDS (%) | 13.8 | 34 |
| 116 | Men who have comprehensive knowledge24 of HIV/AIDS (%) | 31.2 | 34 |
| 117 | Women who know that consistent condom use can reduce the chance of getting HIV/AIDS (%) | 65.9 | 34 |
| 118 | Men who know that consistent condom use can reduce the chance of getting HIV/AIDS (%) | 80.6 | 34 |
| 119 | Currently married women who usually participate in three household decisions25 (%) | 91.0 | 34 |
| 120 | Women who worked in the last 12 months and were paid in cash (%) | 18.0 | 34 |
| 121 | Women owning a house and/or land (alone or jointly with others) (%) | 64.2 | 34 |
| 122 | Women having a bank or savings account that they themselves use (%) | 79.6 | 34 |
| 123 | Women having a mobile phone that they themselves use (%) | 49.0 | 34 |
| 124 | Women age 15-24 years who use hygienic methods of protection during their menstrual period26 (%) | 74.9 | 34 |
| 125 | Ever-married women age 18-49 years who have ever experienced spousal violence27 (%) | 31.5 | 34 |
| 126 | Ever-married women age 18-49 years who have experienced physical violence during any pregnancy (%) | 3.1 | 34 |
| 127 | Young women age 18-29 years who experienced sexual violence by age 18 (%) | 1.3 | 34 |
| 128 | Women age 15 years and above who use any kind of tobacco (%) | 8.4 | 34 |
| 129 | Men age 15 years and above who use any kind of tobacco (%) | 47.4 | 34 |
| 130 | Women age 15 years and above who consume alcohol (%) | 6.1 | 34 |
| 131 | Men age 15 years and above who consume alcohol (%) | 35.0 | 34 |

**NFHS-6** · 101 extracted indicator rows.

| Row | Indicator | NFHS-5 Total as printed in NFHS-6 | NFHS-6 Total | Reviewed change | PDF page |
| --- | --- | --- | --- | --- | --- |
| 1 | Population below age 5 years (%) | 9.5 | 9.8 | — | 67 |
| 2 | Population below age 15 years (%) | 31.3 | 30.4 | — | 67 |
| 3 | Population age 60 years and above (%) | 10.0 | 11.5 | — | 67 |
| 4 | Household electricity access | 94.3 | 96.4 | +2.1 | 67 |
| 5 | Population living in households with an improved drinking-water source 1 (%) | 86.6 | 84.3 | — | 67 |
| 6 | Households using iodized salt (%) | 97.7 | 96.4 | — | 67 |
| 7 | Households with any usual member covered under a health insurance/financing scheme (%) | 50.3 | 58.4 | — | 67 |
| 8 | Households with any usual member having a bank account/post office account (%) | 95.5 | 98.7 | — | 67 |
| 9 | Female population age 6+ ever attended school | 64.5 | 68.0 | +3.5 | 67 |
| 10 | Households with any usual female members owning a house and/or land (alone or jointly with | 10.3 | 14.5 | — | 67 |
| 11 | Children age 2-4 years who attended pre-school (%) | 24.9 | 46.4 | — | 67 |
| 12 | Women with 10 or more years of schooling | 33.2 | 39.5 | +6.3 | 67 |
| 13 | Men with 10 or more years of schooling | 46.6 | 51.2 | +4.6 | 67 |
| 14 | Women who have ever used the internet (%) | 31.4 | 68.6 | — | 67 |
| 15 | Men who have ever used the internet (%) | 57.9 | 78.8 | — | 67 |
| 16 | Women age 20–24 married before age 18 | 32.2 | 28.1 | -4.1 | 67 |
| 17 | Men age 25-29 years married before age 21 years (%) | 22.7 | 18.7 | — | 67 |
| 18 | Total fertility rate, children per woman | 2.3 | 2.2 | -0.1 | 67 |
| 19 | Women age 15-19 years who were already mothers or pregnant at the time of the survey (%) | 9.8 | 11.7 | — | 67 |
| 20 | Any method2 (%) | 61.7 | 63.7 | — | 67 |
| 21 | Any modern method2 (%) | 49.5 | 44.7 | — | 67 |
| 22 | Any traditional method (%) | 12.2 | 19.0 | — | 67 |
| 23 | Female sterilization (%) | 37.4 | 32.9 | — | 67 |
| 24 | Male sterilization (%) | 0.3 | 0.4 | — | 67 |
| 25 | Total unmet need for family planning | 11.5 | 12.6 | +1.1 | 67 |
| 26 | Unmet need for spacing 3 (%) | 4.8 | 6.4 | — | 67 |
| 27 | Unmet need for limiting3 (%) | 6.7 | 6.2 | — | 67 |
| 28 | First-trimester antenatal check-up | 68.0 | 75.4 | +7.4 | 67 |
| 29 | Mothers who had any antenatal care visits (%) | 91.9 | 97.7 | — | 67 |
| 30 | At least four antenatal care visits | 38.7 | 59.0 | — | 67 |
| 31 | Mothers whose last birth was protected against neonatal tetanus 4 (%) | 90.8 | 94.7 | — | 67 |
| 32 | Mothers who consumed iron folic acid for 100 days or more when they were pregnant (%) | 28.2 | 30.6 | — | 67 |
| 33 | Mothers who consumed iron folic acid for 180 days or more when they were pregnant (%) | 14.9 | 15.9 | — | 67 |
| 34 | Registered pregnancies for which the mother received a Mother and Child Protection (MCP) | 91.5 | 90.6 | — | 67 |
| 35 | Institutional births | 75.8 | 77.4 | +1.6 | 67 |
| 36 | Institutional births in public facility (%) | 56.8 | 54.6 | — | 67 |
| 37 | Births attended by skilled health personnel | 82.5 | 80.3 | -2.2 | 67 |
| 38 | Caesarean births | 12.8 | 15.7 | +2.9 | 67 |
| 39 | Births in a private health facility that were delivered by caesarean section (%) | 46.7 | 54.1 | — | 67 |
| 40 | Births in a public health facility that were delivered by caesarean section (%) | 7.0 | 6.1 | — | 67 |
| 41 | Mothers who received postnatal care from a doctor/nurse/LHV/ANM/midwife/other health | 69.1 | 73.8 | — | 68 |
| 42 | Children born at home who were taken to a health facility for a check-up within 24 hours of | 3.4 | 4.3 | — | 68 |
| 43 | Children who received postnatal care from a doctor/nurse/LHV/ANM/midwife/ other health | 68.7 | 77.3 | — | 68 |
| 44 | Full vaccination, card or maternal recall | 74.1 | 78.1 | — | 68 |
| 45 | Full vaccination, card only | 79.2 | 87.6 | +8.4 | 68 |
| 46 | Children age 12-23 months who have received any vaccine (%) | 96.2 | 95.9 | — | 68 |
| 47 | BCG vaccination | 95.0 | 94.9 | -0.1 | 68 |
| 48 | Children age 12-23 months who have received 3 doses of polio vaccine 8 (%) | 76.7 | 79.6 | — | 68 |
| 49 | Children age 12-23 months who have received 3 doses of pentavalent vaccine (%) | 86.0 | 87.3 | — | 68 |
| 50 | Children age 12-23 months who have received the first dose of measles-containing | 86.9 | 89.5 | — | 68 |
| 51 | Children age 24-35 months who have received a second dose of measles-containing | 59.8 | 70.7 | — | 68 |
| 52 | Children age 12-23 months who have received birth dose of hepatitis B vaccine (%) | 61.3 | 65.7 | — | 68 |
| 53 | Children age 12-23 months who have received 3 doses of rotavirus vaccine (%) | 74.6 | 84.9 | — | 68 |
| 54 | Children age 9-35 months who received a vitamin A dose in the last 6 months (%) | 70.9 | 65.5 | — | 68 |
| 55 | Children age 12-23 months who received most of their vaccinations in a public health | 96.5 | 97.0 | — | 68 |
| 56 | Children age 12-23 months who received most of their vaccinations in a private health | 2.9 | 2.5 | — | 68 |
| 57 | Prevalence of diarrhoea in the 2 weeks preceding the survey (%) | 7.2 | 10.3 | — | 68 |
| 58 | Prevalence of severe diarrhoea in the 2 weeks preceding the survey (%) | 0.4 | 0.6 | — | 68 |
| 59 | Prevalence of symptoms of acute respiratory infection (ARI) in the 2 weeks preceding the | 2.1 | 2.3 | — | 68 |
| 60 | Children with fever or symptoms of ARI in the 2 weeks preceding the survey taken to a health | 59.8 | 55.5 | — | 68 |
| 61 | Children under age 3 years breastfed within one hour of birth 9 (%) | 21.5 | 46.8 | — | 68 |
| 62 | Children under age 6 months exclusively breastfed 10 (%) | 76.1 | 63.8 | — | 68 |
| 63 | Children under age 6 months currently breastfeeding 10 (%) | 95.8 | 96.4 | — | 68 |
| 64 | Children under age 6 months exclusively breastfed or breastfeeding and consuming plain | 86.6 | 91.3 | — | 68 |
| 65 | Children age 6-8 months receiving solid or semi-solid food and breastmilk 10 (%) | 38.8 | 62.8 | — | 68 |
| 66 | Breastfeeding children age 6-23 months receiving an adequate diet 10, 11 (%) | 9.5 | 13.7 | — | 68 |
| 67 | Non-breastfeeding children age 6-23 months receiving an adequate diet 10, 11 (%) | 15.9 | 8.7 | — | 68 |
| 68 | Total children age 6-23 months receiving an adequate diet 10, 11 (%) | 10.0 | 13.3 | — | 68 |
| 69 | Child stunting | 39.6 | 35.0 | -4.6 | 68 |
| 70 | Child wasting | 22.4 | 22.3 | -0.1 | 68 |
| 71 | Severe child wasting | 9.1 | 5.9 | -3.2 | 68 |
| 72 | Child underweight | 39.4 | 41.1 | +1.7 | 68 |
| 73 | Child overweight | 2.8 | 0.7 | -2.1 | 68 |
| 74 | Women whose Body Mass Index (BMI) is below normal (BMI <18.5 kg/m 2)15 (%) | 26.2 | 29.2 | — | 69 |
| 75 | Men whose Body Mass Index (BMI) is below normal (BMI <18.5 kg/m 2) (%) | 17.1 | 25.3 | — | 69 |
| 76 | Women aged 15–49 overweight or obese (BMI ≥25), % | 11.9 | 16.9 | — | IIPS fact sheet |
| 77 | Men aged 15–49 overweight or obese (BMI ≥25), % | 15.1 | 16.8 | — | IIPS fact sheet |
| 78 | Blood sugar level - high (141-160 mg/dl)16 (%) | 5.4 | 7.2 | — | 69 |
| 79 | Blood sugar level - very high (>160 mg/dl)16 (%) | 4.2 | 7.4 | — | 69 |
| 80 | Blood sugar level - high or very high (>140 mg/dl) or taking medicine to control blood | 10.2 | 15.0 | — | 69 |
| 81 | Blood sugar level - high (141-160 mg/dl)16 (%) | 6.9 | 9.7 | — | 69 |
| 82 | Blood sugar level - very high (>160 mg/dl)16 (%) | 6.4 | 11.4 | — | 69 |
| 83 | Blood sugar level - high or very high (>140 mg/dl) or taking medicine to control blood | 14.1 | 21.8 | — | 69 |
| 84 | Mildly elevated blood pressure (Systolic 140-159 mm of Hg and/or | 11.1 | 6.1 | — | 69 |
| 85 | Women aged 15+ with moderately or severely elevated blood pressure, % | 5.0 | 4.5 | — | 69 |
| 86 | Women aged 15+ with elevated blood pressure or taking medicine for it, % | 17.8 | 13.0 | — | 69 |
| 87 | Mildly elevated blood pressure (Systolic 140-159 mm of Hg and/or | 15.1 | 9.0 | — | 69 |
| 88 | Men aged 15+ with moderately or severely elevated blood pressure, % | 6.1 | 3.5 | — | 69 |
| 89 | Men aged 15+ with elevated blood pressure or taking medicine for it, % | 22.6 | 17.0 | — | 69 |
| 90 | Currently married women who usually participate in three household decisions 17 (%) | 91.0 | 92.9 | — | 69 |
| 91 | Women who worked in the last 12 months and were paid in cash (%) | 18.0 | 27.7 | — | 69 |
| 92 | Women having a bank or savings account that they themselves use (%) | 79.6 | 90.8 | — | 69 |
| 93 | Women having a mobile phone that they themselves use (%) | 49.0 | 58.4 | — | 69 |
| 94 | Women age 15-24 years who use hygienic methods of protection during their menstrual | 75.1 | 81.1 | — | 69 |
| 95 | Ever-married women age 18-49 years who have ever experienced spousal violence 19 (%) | 31.4 | 27.0 | — | 69 |
| 96 | Ever-married women age 18-49 years who have experienced physical violence during any | 3.1 | 2.4 | — | 69 |
| 97 | Young women age 18-29 years who experienced sexual violence by age 18 (%) | 1.3 | 0.4 | — | 69 |
| 98 | Women age 15 years and above who use any kind of tobacco (%) | 8.4 | 7.5 | — | 69 |
| 99 | Men age 15 years and above who use any kind of tobacco (%) | 47.4 | 45.2 | — | 69 |
| 100 | Women age 15 years and above who consume alcohol (%) | 6.1 | 5.5 | — | 69 |
| 101 | Men age 15 years and above who consume alcohol (%) | 34.9 | 33.6 | — | 69 |

### Karnataka

**NFHS-5** · NFHS5-I · 131 indicator rows.

| Row | Indicator | Total | PDF page |
| --- | --- | --- | --- |
| 1 | Female population age 6 years and above who ever attended school (%) | 73.0 | 64 |
| 2 | Population below age 15 years (%) | 22.9 | 64 |
| 3 | Sex ratio of the total population (females per 1,000 males) | 1,034 | 64 |
| 4 | Sex ratio at birth for children born in the last five years (females per 1,000 males) | 978 | 64 |
| 5 | Children under age 5 years whose birth was registered with the civil authority (%) | 97.5 | 64 |
| 6 | Deaths in the last 3 years registered with the civil authority (%) | 86.6 | 64 |
| 7 | Population living in households with electricity (%) | 99.1 | 64 |
| 8 | Population living in households with an improved drinking-water source1 (%) | 95.3 | 64 |
| 9 | Population living in households that use an improved sanitation facility2 (%) | 74.8 | 64 |
| 10 | Households using clean fuel for cooking3 (%) | 79.7 | 64 |
| 11 | Households using iodized salt (%) | 92.8 | 64 |
| 12 | Households with any usual member covered under a health insurance/financing scheme (%) | 28.1 | 64 |
| 13 | Children age 5 years who attended pre-primary school during the school year 2019-20 (%) | 17.3 | 64 |
| 14 | Women who are literate4 (%) | 76.7 | 64 |
| 15 | Men who are literate4 (%) | 88.5 | 64 |
| 16 | Women with 10 or more years of schooling (%) | 50.2 | 64 |
| 17 | Men with 10 or more years of schooling (%) | 56.5 | 64 |
| 18 | Women who have ever used the internet (%) | 35.0 | 64 |
| 19 | Men who have ever used the internet (%) | 62.4 | 64 |
| 20 | Women age 20-24 years married before age 18 years (%) | 21.3 | 64 |
| 21 | Men age 25-29 years married before age 21 years (%) | 6.1 | 64 |
| 22 | Total fertility rate (children per woman) | 1.7 | 64 |
| 23 | Women age 15-19 years who were already mothers or pregnant at the time of the survey (%) | 5.4 | 64 |
| 24 | Adolescent fertility rate for women age 15-19 years5 | 40 | 64 |
| 25 | Neonatal mortality rate (NNMR) | 15.8 | 64 |
| 26 | Infant mortality rate (IMR) | 25.4 | 64 |
| 27 | Under-five mortality rate (U5MR) | 29.5 | 64 |
| 28 | Any method6 (%) | 68.7 | 64 |
| 29 | Any modern method6 (%) | 68.2 | 64 |
| 30 | Female sterilization (%) | 57.4 | 64 |
| 31 | Male sterilization (%) | 0.0 | 64 |
| 32 | IUD/PPIUD (%) | 2.9 | 64 |
| 33 | Pill (%) | 2.1 | 64 |
| 34 | Condom (%) | 4.1 | 64 |
| 35 | Injectables (%) | 0.5 | 64 |
| 36 | Total unmet need7 (%) | 6.5 | 64 |
| 37 | Unmet need for spacing7 (%) | 3.8 | 64 |
| 38 | Health worker ever talked to female non-users about family planning (%) | 35.8 | 64 |
| 39 | Current users ever told about side effects of current method8 (%) | 72.9 | 64 |
| 40 | Mothers who had an antenatal check-up in the first trimester (%) | 71.0 | 65 |
| 41 | Mothers who had at least 4 antenatal care visits (%) | 70.9 | 65 |
| 42 | Mothers whose last birth was protected against neonatal tetanus9 (%) | 93.6 | 65 |
| 43 | Mothers who consumed iron folic acid for 100 days or more when they were pregnant (%) | 44.7 | 65 |
| 44 | Mothers who consumed iron folic acid for 180 days or more when they were pregnant (%) | 26.7 | 65 |
| 45 | Registered pregnancies for which the mother received a Mother and Child Protection (MCP) card (%) | 97.6 | 65 |
| 46 | Mothers who received postnatal care from a doctor/nurse/LHV/ANM/midwife/other health personnel within 2 days of delivery (%) | 87.4 | 65 |
| 47 | Average out-of-pocket expenditure per delivery in a public health facility (Rs.) | 4,954 | 65 |
| 48 | Children born at home who were taken to a health facility for a check-up within 24 hours of birth (%) | 12.3 | 65 |
| 49 | Children who received postnatal care from a doctor/nurse/LHV/ANM/midwife/other health personnel within 2 days of delivery (%) | 85.5 | 65 |
| 50 | Institutional births (%) | 97.0 | 65 |
| 51 | Institutional births in public facility (%) | 64.8 | 65 |
| 52 | Home births that were conducted by skilled health personnel10 (%) | 1.6 | 65 |
| 53 | Births attended by skilled health personnel10 (%) | 93.8 | 65 |
| 54 | Births delivered by caesarean section (%) | 31.5 | 65 |
| 55 | Births in a private health facility that were delivered by caesarean section (%) | 52.5 | 65 |
| 56 | Births in a public health facility that were delivered by caesarean section (%) | 22.6 | 65 |
| 57 | Children age 12-23 months fully vaccinated based on information from either vaccination card or mother's recall11 (%) | 84.1 | 65 |
| 58 | Children age 12-23 months fully vaccinated based on information from vaccination card only12 (%) | 88.3 | 65 |
| 59 | Children age 12-23 months who have received BCG (%) | 97.2 | 65 |
| 60 | Children age 12-23 months who have received 3 doses of polio vaccine13 (%) | 87.6 | 65 |
| 61 | Children age 12-23 months who have received 3 doses of penta or DPT vaccine (%) | 92.1 | 65 |
| 62 | Children age 12-23 months who have received the first dose of measles-containing vaccine (MCV) (%) | 91.2 | 65 |
| 63 | Children age 24-35 months who have received a second dose of measles-containing vaccine (MCV) (%) | 33.4 | 65 |
| 64 | Children age 12-23 months who have received 3 doses of rotavirus vaccine14 (%) | 5.9 | 65 |
| 65 | Children age 12-23 months who have received 3 doses of penta or hepatitis B vaccine (%) | 88.8 | 65 |
| 66 | Children age 9-59 months who received a vitamin A dose in the last 6 months (%) | 86.2 | 65 |
| 67 | Children age 12-23 months who received most of their vaccinations in a public health facility (%) | 91.7 | 65 |
| 68 | Children age 12-23 months who received most of their vaccinations in a private health facility (%) | 7.9 | 65 |
| 69 | Prevalence of diarrhoea in the 2 weeks preceding the survey (%) | 5.3 | 65 |
| 70 | Children with diarrhoea in the 2 weeks preceding the survey who received oral rehydration salts (ORS) (%) | 71.3 | 65 |
| 71 | Children with diarrhoea in the 2 weeks preceding the survey who received zinc (%) | 45.5 | 65 |
| 72 | Children with diarrhoea in the 2 weeks preceding the survey taken to a health facility or health provider (%) | 73.4 | 65 |
| 73 | Prevalence of symptoms of acute respiratory infection (ARI) in the 2 weeks preceding the survey (%) | 1.5 | 65 |
| 74 | Children with fever or symptoms of ARI in the 2 weeks preceding the survey taken to a health facility or health provider (%) | 65.7 | 65 |
| 75 | Children under age 3 years breastfed within one hour of birth15 (%) | 49.1 | 66 |
| 76 | Children under age 6 months exclusively breastfed16 (%) | 61.0 | 66 |
| 77 | Children age 6-8 months receiving solid or semi-solid food and breastmilk16 (%) | 45.8 | 66 |
| 78 | Breastfeeding children age 6-23 months receiving an adequate diet16, 17 (%) | 11.0 | 66 |
| 79 | Non-breastfeeding children age 6-23 months receiving an adequate diet16, 17 (%) | 19.5 | 66 |
| 80 | Total children age 6-23 months receiving an adequate diet16, 17 (%) | 12.8 | 66 |
| 81 | Children under 5 years who are stunted (height-for-age)18 (%) | 35.4 | 66 |
| 82 | Children under 5 years who are wasted (weight-for-height)18 (%) | 19.5 | 66 |
| 83 | Children under 5 years who are severely wasted (weight-for-height)19 (%) | 8.4 | 66 |
| 84 | Children under 5 years who are underweight (weight-for-age)18 (%) | 32.9 | 66 |
| 85 | Children under 5 years who are overweight (weight-for-height)20 (%) | 3.2 | 66 |
| 86 | Women whose Body Mass Index (BMI) is below normal (BMI <18.5 kg/m2)21 (%) | 17.2 | 66 |
| 87 | Men whose Body Mass Index (BMI) is below normal (BMI <18.5 kg/m2) (%) | 14.3 | 66 |
| 88 | Women who are overweight or obese (BMI ≥25.0 kg/m2)21 (%) | 30.1 | 66 |
| 89 | Men who are overweight or obese (BMI ≥25.0 kg/m2) (%) | 30.9 | 66 |
| 90 | Women who have high risk waist-to-hip ratio (≥0.85) (%) | 45.1 | 66 |
| 91 | Men who have high risk waist-to-hip ratio (≥0.90) (%) | 38.9 | 66 |
| 92 | Children age 6-59 months who are anaemic (<11.0 g/dl)22 (%) | 65.5 | 66 |
| 93 | Non-pregnant women age 15-49 years who are anaemic (<12.0 g/dl)22 (%) | 47.8 | 66 |
| 94 | Pregnant women age 15-49 years who are anaemic (<11.0 g/dl)22 (%) | 45.7 | 66 |
| 95 | All women age 15-49 years who are anaemic22 (%) | 47.8 | 66 |
| 96 | All women age 15-19 years who are anaemic22 (%) | 49.4 | 66 |
| 97 | Men age 15-49 years who are anaemic (<13.0 g/dl)22 (%) | 19.6 | 66 |
| 98 | Men age 15-19 years who are anaemic (<13.0 g/dl)22 (%) | 26.5 | 66 |
| 99 | Blood sugar level - high (141-160 mg/dl)23 (%) | 5.7 | 66 |
| 100 | Blood sugar level - very high (>160 mg/dl)23 (%) | 6.8 | 66 |
| 101 | Blood sugar level - high or very high (>140 mg/dl) or taking medicine to control blood sugar level23 (%) | 14.0 | 66 |
| 102 | Blood sugar level - high (141-160 mg/dl)23 (%) | 6.6 | 66 |
| 103 | Blood sugar level - very high (>160 mg/dl)23 (%) | 7.6 | 66 |
| 104 | Blood sugar level - high or very high (>140 mg/dl) or taking medicine to control blood sugar level23 (%) | 15.6 | 66 |
| 105 | Mildly elevated blood pressure (Systolic 140-159 mm of Hg and/or Diastolic 90-99 mm of Hg) (%) | 14.8 | 66 |
| 106 | Moderately or severely elevated blood pressure (Systolic ≥160 mm of Hg and/or Diastolic ≥100 mm of Hg) (%) | 6.2 | 66 |
| 107 | Elevated blood pressure (Systolic ≥140 mm of Hg and/or Diastolic ≥90 mm of Hg) or taking medicine to control blood pressure (%) | 25.0 | 66 |
| 108 | Mildly elevated blood pressure (Systolic 140-159 mm of Hg and/or Diastolic 90-99 mm of Hg) (%) | 17.2 | 66 |
| 109 | Moderately or severely elevated blood pressure (Systolic ≥160 mm of Hg and/or Diastolic ≥100 mm of Hg) (%) | 6.7 | 66 |
| 110 | Elevated blood pressure (Systolic ≥140 mm of Hg and/or Diastolic ≥90 mm of Hg) or taking medicine to control blood pressure (%) | 26.9 | 66 |
| 111 | Ever undergone a screening test for cervical cancer (%) | 0.5 | 67 |
| 112 | Ever undergone a breast examination for breast cancer (%) | 0.4 | 67 |
| 113 | Ever undergone an oral cavity examination for oral cancer (%) | 0.5 | 67 |
| 114 | Ever undergone an oral cavity examination for oral cancer (%) | 0.3 | 67 |
| 115 | Women who have comprehensive knowledge24 of HIV/AIDS (%) | 24.5 | 67 |
| 116 | Men who have comprehensive knowledge24 of HIV/AIDS (%) | 26.6 | 67 |
| 117 | Women who know that consistent condom use can reduce the chance of getting HIV/AIDS (%) | 79.4 | 67 |
| 118 | Men who know that consistent condom use can reduce the chance of getting HIV/AIDS (%) | 87.8 | 67 |
| 119 | Currently married women who usually participate in three household decisions25 (%) | 82.7 | 67 |
| 120 | Women who worked in the last 12 months and were paid in cash (%) | 37.0 | 67 |
| 121 | Women owning a house and/or land (alone or jointly with others) (%) | 67.6 | 67 |
| 122 | Women having a bank or savings account that they themselves use (%) | 88.7 | 67 |
| 123 | Women having a mobile phone that they themselves use (%) | 61.8 | 67 |
| 124 | Women age 15-24 years who use hygienic methods of protection during their menstrual period26 (%) | 84.2 | 67 |
| 125 | Ever-married women age 18-49 years who have ever experienced spousal violence27 (%) | 44.4 | 67 |
| 126 | Ever-married women age 18-49 years who have experienced physical violence during any pregnancy (%) | 5.8 | 67 |
| 127 | Young women age 18-29 years who experienced sexual violence by age 18 (%) | 11.0 | 67 |
| 128 | Women age 15 years and above who use any kind of tobacco (%) | 8.5 | 67 |
| 129 | Men age 15 years and above who use any kind of tobacco (%) | 27.1 | 67 |
| 130 | Women age 15 years and above who consume alcohol (%) | 0.9 | 67 |
| 131 | Men age 15 years and above who consume alcohol (%) | 16.5 | 67 |

**NFHS-6** · 101 extracted indicator rows.

| Row | Indicator | NFHS-5 Total as printed in NFHS-6 | NFHS-6 Total | Reviewed change | PDF page |
| --- | --- | --- | --- | --- | --- |
| 1 | Population below age 5 years (%) | 7.0 | 6.5 | — | 71 |
| 2 | Population below age 15 years (%) | 22.9 | 22.0 | — | 71 |
| 3 | Population age 60 years and above (%) | 13.3 | 14.6 | — | 71 |
| 4 | Household electricity access | 99.1 | 99.7 | +0.6 | 71 |
| 5 | Population living in households with an improved drinking-water source 1 (%) | 95.3 | 97.3 | — | 71 |
| 6 | Households using iodized salt (%) | 92.8 | 96.3 | — | 71 |
| 7 | Households with any usual member covered under a health insurance/financing scheme (%) | 31.8 | 63.3 | — | 71 |
| 8 | Households with any usual member having a bank account/post office account (%) | 94.5 | 98.6 | — | 71 |
| 9 | Female population age 6+ ever attended school | 73.0 | 77.8 | +4.8 | 71 |
| 10 | Households with any usual female members owning a house and/or land (alone or jointly with | 16.2 | 29.5 | — | 71 |
| 11 | Children age 2-4 years who attended pre-school (%) | 44.5 | 50.7 | — | 71 |
| 12 | Women with 10 or more years of schooling | 50.2 | 57.6 | +7.4 | 71 |
| 13 | Men with 10 or more years of schooling | 56.5 | 63.0 | +6.5 | 71 |
| 14 | Women who have ever used the internet (%) | 35.0 | 57.9 | — | 71 |
| 15 | Men who have ever used the internet (%) | 56.3 | 84.3 | — | 71 |
| 16 | Women age 20–24 married before age 18 | 21.3 | 15.3 | -6.0 | 71 |
| 17 | Men age 25-29 years married before age 21 years (%) | 6.1 | 4.4 | — | 71 |
| 18 | Total fertility rate, children per woman | 1.7 | 1.8 | +0.1 | 71 |
| 19 | Women age 15-19 years who were already mothers or pregnant at the time of the survey (%) | 5.4 | 4.9 | — | 71 |
| 20 | Any method2 (%) | 68.7 | 64.8 | — | 71 |
| 21 | Any modern method2 (%) | 68.2 | 63.2 | — | 71 |
| 22 | Any traditional method (%) | 0.5 | 1.6 | — | 71 |
| 23 | Female sterilization (%) | 57.4 | 56.9 | — | 71 |
| 24 | Male sterilization (%) | 0.0 | 0.0 | — | 71 |
| 25 | Total unmet need for family planning | 6.4 | 8.8 | — | 71 |
| 26 | Unmet need for spacing 3 (%) | 3.7 | 5.3 | — | 71 |
| 27 | Unmet need for limiting3 (%) | 2.7 | 3.5 | — | 71 |
| 28 | First-trimester antenatal check-up | 71.0 | 82.4 | +11.4 | 71 |
| 29 | Mothers who had any antenatal care visits (%) | 98.3 | 96.3 | — | 71 |
| 30 | At least four antenatal care visits | 70.9 | 84.5 | +13.6 | 71 |
| 31 | Mothers whose last birth was protected against neonatal tetanus 4 (%) | 93.6 | 95.9 | — | 71 |
| 32 | Mothers who consumed iron folic acid for 100 days or more when they were pregnant (%) | 44.7 | 78.9 | — | 71 |
| 33 | Mothers who consumed iron folic acid for 180 days or more when they were pregnant (%) | 26.7 | 66.4 | — | 71 |
| 34 | Registered pregnancies for which the mother received a Mother and Child Protection (MCP) | 97.6 | 97.6 | — | 71 |
| 35 | Institutional births | 97.0 | 98.7 | +1.7 | 71 |
| 36 | Institutional births in public facility (%) | 64.8 | 58.1 | — | 71 |
| 37 | Births attended by skilled health personnel | 93.8 | 96.6 | +2.8 | 71 |
| 38 | Caesarean births | 31.5 | 45.7 | +14.2 | 71 |
| 39 | Births in a private health facility that were delivered by caesarean section (%) | 52.5 | 63.8 | — | 71 |
| 40 | Births in a public health facility that were delivered by caesarean section (%) | 22.6 | 34.0 | — | 71 |
| 41 | Mothers who received postnatal care from a doctor/nurse/LHV/ANM/midwife/other health | 87.4 | 93.6 | — | 72 |
| 42 | Children born at home who were taken to a health facility for a check-up within 24 hours of | 12.3 | 23.4 | — | 72 |
| 43 | Children who received postnatal care from a doctor/nurse/LHV/ANM/midwife/ other health | 85.5 | 93.2 | — | 72 |
| 44 | Full vaccination, card or maternal recall | 84.3 | 90.2 | — | 72 |
| 45 | Full vaccination, card only | 88.3 | 91.8 | +3.5 | 72 |
| 46 | Children age 12-23 months who have received any vaccine (%) | 97.5 | 96.8 | — | 72 |
| 47 | BCG vaccination | 97.1 | 96.4 | — | 72 |
| 48 | Children age 12-23 months who have received 3 doses of polio vaccine 8 (%) | 87.5 | 91.3 | — | 72 |
| 49 | Children age 12-23 months who have received 3 doses of pentavalent vaccine (%) | 92.3 | 93.3 | — | 72 |
| 50 | Children age 12-23 months who have received the first dose of measles-containing | 91.4 | 95.6 | — | 72 |
| 51 | Children age 24-35 months who have received a second dose of measles-containing | 62.4 | 79.4 | — | 72 |
| 52 | Children age 12-23 months who have received birth dose of hepatitis B vaccine (%) | 84.5 | 92.5 | — | 72 |
| 53 | Children age 12-23 months who have received 3 doses of rotavirus vaccine (%) | 5.9 | 84.4 | — | 72 |
| 54 | Children age 9-35 months who received a vitamin A dose in the last 6 months (%) | 86.2 | 89.7 | — | 72 |
| 55 | Children age 12-23 months who received most of their vaccinations in a public health | 91.7 | 90.9 | — | 72 |
| 56 | Children age 12-23 months who received most of their vaccinations in a private health | 7.9 | 8.6 | — | 72 |
| 57 | Prevalence of diarrhoea in the 2 weeks preceding the survey (%) | 5.3 | 6.2 | — | 72 |
| 58 | Prevalence of severe diarrhoea in the 2 weeks preceding the survey (%) | 0.7 | 1.2 | — | 72 |
| 59 | Prevalence of symptoms of acute respiratory infection (ARI) in the 2 weeks preceding the | 1.5 | 0.8 | — | 72 |
| 60 | Children with fever or symptoms of ARI in the 2 weeks preceding the survey taken to a health | 65.7 | 80.3 | — | 72 |
| 61 | Children under age 3 years breastfed within one hour of birth 9 (%) | 49.1 | 48.3 | — | 72 |
| 62 | Children under age 6 months exclusively breastfed 10 (%) | 61.0 | 61.6 | — | 72 |
| 63 | Children under age 6 months currently breastfeeding 10 (%) | 92.4 | 93.8 | — | 72 |
| 64 | Children under age 6 months exclusively breastfed or breastfeeding and consuming plain | 75.2 | 82.3 | — | 72 |
| 65 | Children age 6-8 months receiving solid or semi-solid food and breastmilk 10 (%) | 45.8 | 57.9 | — | 72 |
| 66 | Breastfeeding children age 6-23 months receiving an adequate diet 10, 11 (%) | 10.6 | 14.2 | — | 72 |
| 67 | Non-breastfeeding children age 6-23 months receiving an adequate diet 10, 11 (%) | 18.9 | 31.2 | — | 72 |
| 68 | Total children age 6-23 months receiving an adequate diet 10, 11 (%) | 12.4 | 18.3 | — | 72 |
| 69 | Child stunting | 35.4 | 26.5 | -8.9 | 72 |
| 70 | Child wasting | 19.5 | 18.7 | -0.8 | 72 |
| 71 | Severe child wasting | 8.4 | 4.6 | -3.8 | 72 |
| 72 | Child underweight | 32.9 | 27.8 | -5.1 | 72 |
| 73 | Child overweight | 3.2 | 1.0 | -2.2 | 72 |
| 74 | Women whose Body Mass Index (BMI) is below normal (BMI <18.5 kg/m 2)15 (%) | 17.2 | 15.1 | — | 73 |
| 75 | Men whose Body Mass Index (BMI) is below normal (BMI <18.5 kg/m 2) (%) | 14.3 | 14.0 | — | 73 |
| 76 | Women aged 15–49 overweight or obese (BMI ≥25), % | 30.2 | 41.2 | — | IIPS fact sheet |
| 77 | Men aged 15–49 overweight or obese (BMI ≥25), % | 30.9 | 36.4 | — | IIPS fact sheet |
| 78 | Blood sugar level - high (141-160 mg/dl)16 (%) | 5.7 | 8.3 | — | 73 |
| 79 | Blood sugar level - very high (>160 mg/dl)16 (%) | 6.8 | 12.4 | — | 73 |
| 80 | Blood sugar level - high or very high (>140 mg/dl) or taking medicine to control blood | 14.0 | 22.3 | — | 73 |
| 81 | Blood sugar level - high (141-160 mg/dl)16 (%) | 6.6 | 9.4 | — | 73 |
| 82 | Blood sugar level - very high (>160 mg/dl)16 (%) | 7.6 | 14.8 | — | 73 |
| 83 | Blood sugar level - high or very high (>140 mg/dl) or taking medicine to control blood | 15.6 | 26.1 | — | 73 |
| 84 | Mildly elevated blood pressure (Systolic 140-159 mm of Hg and/or | 14.8 | 11.6 | — | 73 |
| 85 | Women aged 15+ with moderately or severely elevated blood pressure, % | 6.2 | 6.4 | — | IIPS fact sheet |
| 86 | Women aged 15+ with elevated blood pressure or taking medicine for it, % | 25.0 | 25.1 | — | IIPS fact sheet |
| 87 | Mildly elevated blood pressure (Systolic 140-159 mm of Hg and/or | 17.2 | 15.4 | — | 73 |
| 88 | Men aged 15+ with moderately or severely elevated blood pressure, % | 6.7 | 4.0 | — | IIPS fact sheet |
| 89 | Men aged 15+ with elevated blood pressure or taking medicine for it, % | 26.9 | 28.2 | — | IIPS fact sheet |
| 90 | Currently married women who usually participate in three household decisions 17 (%) | 82.7 | 89.2 | — | 73 |
| 91 | Women who worked in the last 12 months and were paid in cash (%) | 37.0 | 40.6 | — | 73 |
| 92 | Women having a bank or savings account that they themselves use (%) | 88.7 | 94.7 | — | 73 |
| 93 | Women having a mobile phone that they themselves use (%) | 61.8 | 72.4 | — | 73 |
| 94 | Women age 15-24 years who use hygienic methods of protection during their menstrual | 84.6 | 84.1 | — | 73 |
| 95 | Ever-married women age 18-49 years who have ever experienced spousal violence 19 (%) | 44.4 | 14.1 | — | 73 |
| 96 | Ever-married women age 18-49 years who have experienced physical violence during any | 5.8 | 2.9 | — | 73 |
| 97 | Young women age 18-29 years who experienced sexual violence by age 18 (%) | 2.1 | 0.1 | — | 73 |
| 98 | Women age 15 years and above who use any kind of tobacco (%) | 8.6 | 6.4 | — | 73 |
| 99 | Men age 15 years and above who use any kind of tobacco (%) | 27.3 | 24.2 | — | 73 |
| 100 | Women age 15 years and above who consume alcohol (%) | 0.9 | 0.5 | — | 73 |
| 101 | Men age 15 years and above who consume alcohol (%) | 16.6 | 15.6 | — | 73 |

### Kerala

**NFHS-5** · NFHS5-I · 131 indicator rows.

| Row | Indicator | Total | PDF page |
| --- | --- | --- | --- |
| 1 | Female population age 6 years and above who ever attended school (%) | 95.5 | 72 |
| 2 | Population below age 15 years (%) | 20.6 | 72 |
| 3 | Sex ratio of the total population (females per 1,000 males) | 1,121 | 72 |
| 4 | Sex ratio at birth for children born in the last five years (females per 1,000 males) | 951 | 72 |
| 5 | Children under age 5 years whose birth was registered with the civil authority (%) | 99.0 | 72 |
| 6 | Deaths in the last 3 years registered with the civil authority (%) | 97.4 | 72 |
| 7 | Population living in households with electricity (%) | 99.6 | 72 |
| 8 | Population living in households with an improved drinking-water source1 (%) | 94.9 | 72 |
| 9 | Population living in households that use an improved sanitation facility2 (%) | 98.7 | 72 |
| 10 | Households using clean fuel for cooking3 (%) | 72.1 | 72 |
| 11 | Households using iodized salt (%) | 99.3 | 72 |
| 12 | Households with any usual member covered under a health insurance/financing scheme (%) | 51.5 | 72 |
| 13 | Children age 5 years who attended pre-primary school during the school year 2019-20 (%) | 29.0 | 72 |
| 14 | Women who are literate4 (%) | 98.3 | 72 |
| 15 | Men who are literate4 (%) | 98.2 | 72 |
| 16 | Women with 10 or more years of schooling (%) | 77.0 | 72 |
| 17 | Men with 10 or more years of schooling (%) | 73.3 | 72 |
| 18 | Women who have ever used the internet (%) | 61.1 | 72 |
| 19 | Men who have ever used the internet (%) | 76.1 | 72 |
| 20 | Women age 20-24 years married before age 18 years (%) | 6.3 | 72 |
| 21 | Men age 25-29 years married before age 21 years (%) | 1.4 | 72 |
| 22 | Total fertility rate (children per woman) | 1.8 | 72 |
| 23 | Women age 15-19 years who were already mothers or pregnant at the time of the survey (%) | 2.4 | 72 |
| 24 | Adolescent fertility rate for women age 15-19 years5 | 18 | 72 |
| 25 | Neonatal mortality rate (NNMR) | 3.4 | 72 |
| 26 | Infant mortality rate (IMR) | 4.4 | 72 |
| 27 | Under-five mortality rate (U5MR) | 5.2 | 72 |
| 28 | Any method6 (%) | 60.7 | 72 |
| 29 | Any modern method6 (%) | 52.8 | 72 |
| 30 | Female sterilization (%) | 46.6 | 72 |
| 31 | Male sterilization (%) | 0.1 | 72 |
| 32 | IUD/PPIUD (%) | 1.5 | 72 |
| 33 | Pill (%) | 0.4 | 72 |
| 34 | Condom (%) | 3.4 | 72 |
| 35 | Injectables (%) | 0.0 | 72 |
| 36 | Total unmet need7 (%) | 12.5 | 72 |
| 37 | Unmet need for spacing7 (%) | 7.0 | 72 |
| 38 | Health worker ever talked to female non-users about family planning (%) | 15.0 | 72 |
| 39 | Current users ever told about side effects of current method8 (%) | 62.2 | 72 |
| 40 | Mothers who had an antenatal check-up in the first trimester (%) | 93.6 | 73 |
| 41 | Mothers who had at least 4 antenatal care visits (%) | 78.6 | 73 |
| 42 | Mothers whose last birth was protected against neonatal tetanus9 (%) | 95.2 | 73 |
| 43 | Mothers who consumed iron folic acid for 100 days or more when they were pregnant (%) | 80.0 | 73 |
| 44 | Mothers who consumed iron folic acid for 180 days or more when they were pregnant (%) | 67.0 | 73 |
| 45 | Registered pregnancies for which the mother received a Mother and Child Protection (MCP) card (%) | 91.3 | 73 |
| 46 | Mothers who received postnatal care from a doctor/nurse/LHV/ANM/midwife/other health personnel within 2 days of delivery (%) | 93.3 | 73 |
| 47 | Average out-of-pocket expenditure per delivery in a public health facility (Rs.) | 6,710 | 73 |
| 48 | Children born at home who were taken to a health facility for a check-up within 24 hours of birth (%) | \* | 73 |
| 49 | Children who received postnatal care from a doctor/nurse/LHV/ANM/midwife/other health personnel within 2 days of delivery (%) | 91.2 | 73 |
| 50 | Institutional births (%) | 99.8 | 73 |
| 51 | Institutional births in public facility (%) | 34.1 | 73 |
| 52 | Home births that were conducted by skilled health personnel10 (%) | 0.2 | 73 |
| 53 | Births attended by skilled health personnel10 (%) | 100.0 | 73 |
| 54 | Births delivered by caesarean section (%) | 38.9 | 73 |
| 55 | Births in a private health facility that were delivered by caesarean section (%) | 39.9 | 73 |
| 56 | Births in a public health facility that were delivered by caesarean section (%) | 37.2 | 73 |
| 57 | Children age 12-23 months fully vaccinated based on information from either vaccination card or mother's recall11 (%) | 77.8 | 73 |
| 58 | Children age 12-23 months fully vaccinated based on information from vaccination card only12 (%) | 85.2 | 73 |
| 59 | Children age 12-23 months who have received BCG (%) | 97.6 | 73 |
| 60 | Children age 12-23 months who have received 3 doses of polio vaccine13 (%) | 84.1 | 73 |
| 61 | Children age 12-23 months who have received 3 doses of penta or DPT vaccine (%) | 85.2 | 73 |
| 62 | Children age 12-23 months who have received the first dose of measles-containing vaccine (MCV) (%) | 88.3 | 73 |
| 63 | Children age 24-35 months who have received a second dose of measles-containing vaccine (MCV) (%) | 15.5 | 73 |
| 64 | Children age 12-23 months who have received 3 doses of rotavirus vaccine14 (%) | 9.5 | 73 |
| 65 | Children age 12-23 months who have received 3 doses of penta or hepatitis B vaccine (%) | 83.0 | 73 |
| 66 | Children age 9-59 months who received a vitamin A dose in the last 6 months (%) | 83.9 | 73 |
| 67 | Children age 12-23 months who received most of their vaccinations in a public health facility (%) | 87.3 | 73 |
| 68 | Children age 12-23 months who received most of their vaccinations in a private health facility (%) | 12.3 | 73 |
| 69 | Prevalence of diarrhoea in the 2 weeks preceding the survey (%) | 4.3 | 73 |
| 70 | Children with diarrhoea in the 2 weeks preceding the survey who received oral rehydration salts (ORS) (%) | 61.1 | 73 |
| 71 | Children with diarrhoea in the 2 weeks preceding the survey who received zinc (%) | 22.4 | 73 |
| 72 | Children with diarrhoea in the 2 weeks preceding the survey taken to a health facility or health provider (%) | 86.9 | 73 |
| 73 | Prevalence of symptoms of acute respiratory infection (ARI) in the 2 weeks preceding the survey (%) | 2.4 | 73 |
| 74 | Children with fever or symptoms of ARI in the 2 weeks preceding the survey taken to a health facility or health provider (%) | 86.2 | 73 |
| 75 | Children under age 3 years breastfed within one hour of birth15 (%) | 66.7 | 74 |
| 76 | Children under age 6 months exclusively breastfed16 (%) | 55.5 | 74 |
| 77 | Children age 6-8 months receiving solid or semi-solid food and breastmilk16 (%) | 71.3 | 74 |
| 78 | Breastfeeding children age 6-23 months receiving an adequate diet16, 17 (%) | 23.6 | 74 |
| 79 | Non-breastfeeding children age 6-23 months receiving an adequate diet16, 17 (%) | 22.2 | 74 |
| 80 | Total children age 6-23 months receiving an adequate diet16, 17 (%) | 23.5 | 74 |
| 81 | Children under 5 years who are stunted (height-for-age)18 (%) | 23.4 | 74 |
| 82 | Children under 5 years who are wasted (weight-for-height)18 (%) | 15.8 | 74 |
| 83 | Children under 5 years who are severely wasted (weight-for-height)19 (%) | 5.8 | 74 |
| 84 | Children under 5 years who are underweight (weight-for-age)18 (%) | 19.7 | 74 |
| 85 | Children under 5 years who are overweight (weight-for-height)20 (%) | 4.0 | 74 |
| 86 | Women whose Body Mass Index (BMI) is below normal (BMI <18.5 kg/m2)21 (%) | 10.1 | 74 |
| 87 | Men whose Body Mass Index (BMI) is below normal (BMI <18.5 kg/m2) (%) | 10.0 | 74 |
| 88 | Women who are overweight or obese (BMI ≥25.0 kg/m2)21 (%) | 38.1 | 74 |
| 89 | Men who are overweight or obese (BMI ≥25.0 kg/m2) (%) | 36.4 | 74 |
| 90 | Women who have high risk waist-to-hip ratio (≥0.85) (%) | 70.7 | 74 |
| 91 | Men who have high risk waist-to-hip ratio (≥0.90) (%) | 56.8 | 74 |
| 92 | Children age 6-59 months who are anaemic (<11.0 g/dl)22 (%) | 39.4 | 74 |
| 93 | Non-pregnant women age 15-49 years who are anaemic (<12.0 g/dl)22 (%) | 36.5 | 74 |
| 94 | Pregnant women age 15-49 years who are anaemic (<11.0 g/dl)22 (%) | 31.4 | 74 |
| 95 | All women age 15-49 years who are anaemic22 (%) | 36.3 | 74 |
| 96 | All women age 15-19 years who are anaemic22 (%) | 32.5 | 74 |
| 97 | Men age 15-49 years who are anaemic (<13.0 g/dl)22 (%) | 17.8 | 74 |
| 98 | Men age 15-19 years who are anaemic (<13.0 g/dl)22 (%) | 27.4 | 74 |
| 99 | Blood sugar level - high (141-160 mg/dl)23 (%) | 8.3 | 74 |
| 100 | Blood sugar level - very high (>160 mg/dl)23 (%) | 13.1 | 74 |
| 101 | Blood sugar level - high or very high (>140 mg/dl) or taking medicine to control blood sugar level23 (%) | 24.8 | 74 |
| 102 | Blood sugar level - high (141-160 mg/dl)23 (%) | 9.8 | 74 |
| 103 | Blood sugar level - very high (>160 mg/dl)23 (%) | 13.8 | 74 |
| 104 | Blood sugar level - high or very high (>140 mg/dl) or taking medicine to control blood sugar level23 (%) | 27.0 | 74 |
| 105 | Mildly elevated blood pressure (Systolic 140-159 mm of Hg and/or Diastolic 90-99 mm of Hg) (%) | 15.5 | 74 |
| 106 | Moderately or severely elevated blood pressure (Systolic ≥160 mm of Hg and/or Diastolic ≥100 mm of Hg) (%) | 6.6 | 74 |
| 107 | Elevated blood pressure (Systolic ≥140 mm of Hg and/or Diastolic ≥90 mm of Hg) or taking medicine to control blood pressure (%) | 30.9 | 74 |
| 108 | Mildly elevated blood pressure (Systolic 140-159 mm of Hg and/or Diastolic 90-99 mm of Hg) (%) | 19.2 | 74 |
| 109 | Moderately or severely elevated blood pressure (Systolic ≥160 mm of Hg and/or Diastolic ≥100 mm of Hg) (%) | 6.7 | 74 |
| 110 | Elevated blood pressure (Systolic ≥140 mm of Hg and/or Diastolic ≥90 mm of Hg) or taking medicine to control blood pressure (%) | 32.8 | 74 |
| 111 | Ever undergone a screening test for cervical cancer (%) | 3.5 | 75 |
| 112 | Ever undergone a breast examination for breast cancer (%) | 2.4 | 75 |
| 113 | Ever undergone an oral cavity examination for oral cancer (%) | 0.7 | 75 |
| 114 | Ever undergone an oral cavity examination for oral cancer (%) | 0.5 | 75 |
| 115 | Women who have comprehensive knowledge24 of HIV/AIDS (%) | 34.8 | 75 |
| 116 | Men who have comprehensive knowledge24 of HIV/AIDS (%) | 45.4 | 75 |
| 117 | Women who know that consistent condom use can reduce the chance of getting HIV/AIDS (%) | 74.1 | 75 |
| 118 | Men who know that consistent condom use can reduce the chance of getting HIV/AIDS (%) | 84.5 | 75 |
| 119 | Currently married women who usually participate in three household decisions25 (%) | 94.1 | 75 |
| 120 | Women who worked in the last 12 months and were paid in cash (%) | 25.8 | 75 |
| 121 | Women owning a house and/or land (alone or jointly with others) (%) | 27.3 | 75 |
| 122 | Women having a bank or savings account that they themselves use (%) | 78.5 | 75 |
| 123 | Women having a mobile phone that they themselves use (%) | 86.6 | 75 |
| 124 | Women age 15-24 years who use hygienic methods of protection during their menstrual period26 (%) | 93.0 | 75 |
| 125 | Ever-married women age 18-49 years who have ever experienced spousal violence27 (%) | 9.9 | 75 |
| 126 | Ever-married women age 18-49 years who have experienced physical violence during any pregnancy (%) | 0.5 | 75 |
| 127 | Young women age 18-29 years who experienced sexual violence by age 18 (%) | 1.6 | 75 |
| 128 | Women age 15 years and above who use any kind of tobacco (%) | 2.2 | 75 |
| 129 | Men age 15 years and above who use any kind of tobacco (%) | 16.9 | 75 |
| 130 | Women age 15 years and above who consume alcohol (%) | 0.2 | 75 |
| 131 | Men age 15 years and above who consume alcohol (%) | 19.9 | 75 |

**NFHS-6** · 101 extracted indicator rows.

| Row | Indicator | NFHS-5 Total as printed in NFHS-6 | NFHS-6 Total | Reviewed change | PDF page |
| --- | --- | --- | --- | --- | --- |
| 1 | Population below age 5 years (%) | 6.1 | 6.1 | — | 75 |
| 2 | Population below age 15 years (%) | 20.6 | 20.3 | — | 75 |
| 3 | Population age 60 years and above (%) | 18.6 | 20.7 | — | 75 |
| 4 | Household electricity access | 99.6 | 99.7 | +0.1 | 75 |
| 5 | Population living in households with an improved drinking-water source 1 (%) | 94.9 | 96.5 | — | 75 |
| 6 | Households using iodized salt (%) | 99.3 | 99.1 | — | 75 |
| 7 | Households with any usual member covered under a health insurance/financing scheme (%) | 57.8 | 57.1 | — | 75 |
| 8 | Households with any usual member having a bank account/post office account (%) | 96.1 | 98.9 | — | 75 |
| 9 | Female population age 6+ ever attended school | 95.5 | 96.6 | +1.1 | 75 |
| 10 | Households with any usual female members owning a house and/or land (alone or jointly with | 30.1 | 34.3 | — | 75 |
| 11 | Children age 2-4 years who attended pre-school (%) | 54.4 | 56.7 | — | 75 |
| 12 | Women with 10 or more years of schooling | 77.0 | 86.6 | +9.6 | 75 |
| 13 | Men with 10 or more years of schooling | 73.3 | 82.1 | +8.8 | 75 |
| 14 | Women who have ever used the internet (%) | 61.1 | 87.3 | — | 75 |
| 15 | Men who have ever used the internet (%) | 62.5 | 94.9 | — | 75 |
| 16 | Women age 20–24 married before age 18 | 6.3 | 2.9 | -3.4 | 75 |
| 17 | Men age 25-29 years married before age 21 years (%) | 1.4 | 1.7 | — | 75 |
| 18 | Total fertility rate, children per woman | 1.8 | 1.8 | +0.0 | 75 |
| 19 | Women age 15-19 years who were already mothers or pregnant at the time of the survey (%) | 2.4 | 1.5 | — | 75 |
| 20 | Any method2 (%) | 60.7 | 66.9 | — | 75 |
| 21 | Any modern method2 (%) | 52.8 | 54.6 | — | 75 |
| 22 | Any traditional method (%) | 7.9 | 12.3 | — | 75 |
| 23 | Female sterilization (%) | 46.6 | 42.3 | — | 75 |
| 24 | Male sterilization (%) | 0.1 | 0.2 | — | 75 |
| 25 | Total unmet need for family planning | 12.5 | 10.2 | -2.3 | 75 |
| 26 | Unmet need for spacing 3 (%) | 7.0 | 7.0 | — | 75 |
| 27 | Unmet need for limiting3 (%) | 5.5 | 3.2 | — | 75 |
| 28 | First-trimester antenatal check-up | 93.6 | 85.5 | -8.1 | 75 |
| 29 | Mothers who had any antenatal care visits (%) | 88.9 | 94.9 | — | 75 |
| 30 | At least four antenatal care visits | 81.3 | 88.6 | — | 75 |
| 31 | Mothers whose last birth was protected against neonatal tetanus 4 (%) | 95.2 | 95.2 | — | 75 |
| 32 | Mothers who consumed iron folic acid for 100 days or more when they were pregnant (%) | 80.0 | 92.0 | — | 75 |
| 33 | Mothers who consumed iron folic acid for 180 days or more when they were pregnant (%) | 67.0 | 83.7 | — | 75 |
| 34 | Registered pregnancies for which the mother received a Mother and Child Protection (MCP) | 91.3 | 94.1 | — | 75 |
| 35 | Institutional births | 99.8 | 99.7 | -0.1 | 75 |
| 36 | Institutional births in public facility (%) | 34.1 | 34.3 | — | 75 |
| 37 | Births attended by skilled health personnel | 100.0 | 99.8 | -0.2 | 75 |
| 38 | Caesarean births | 38.9 | 41.3 | +2.4 | 75 |
| 39 | Births in a private health facility that were delivered by caesarean section (%) | 39.9 | 42.5 | — | 75 |
| 40 | Births in a public health facility that were delivered by caesarean section (%) | 37.2 | 39.3 | — | 75 |
| 41 | Mothers who received postnatal care from a doctor/nurse/LHV/ANM/midwife/other health + | 93.3 | 94.0 | — | 76 |
| 42 | Children born at home who were taken to a health facility for a check-up within 24 hours of | \* | \* | — | IIPS fact sheet |
| 43 | Children who received postnatal care from a doctor/nurse/LHV/ANM/midwife/ other health + | 91.2 | 93.5 | — | 76 |
| 44 | Full vaccination, card or maternal recall | 78.4 | 84.9 | — | 76 |
| 45 | Full vaccination, card only | 85.2 | 86.8 | +1.6 | 76 |
| 46 | Children age 12-23 months who have received any vaccine (%) | 98.2 | 97.6 | — | 76 |
| 47 | BCG vaccination | 97.6 | 96.8 | -0.8 | 76 |
| 48 | Children age 12-23 months who have received 3 doses of polio vaccine 8 (%) | 84.1 | 88.6 | — | 76 |
| 49 | Children age 12-23 months who have received 3 doses of pentavalent vaccine (%) | 85.9 | 88.8 | — | 76 |
| 50 | Children age 12-23 months who have received the first dose of measles-containing | 88.9 | 92.8 | — | 76 |
| 51 | Children age 24-35 months who have received a second dose of measles-containing | 31.9 | 83.3 | — | 76 |
| 52 | Children age 12-23 months who have received birth dose of hepatitis B vaccine (%) | 81.4 | 86.9 | — | 76 |
| 53 | Children age 12-23 months who have received 3 doses of rotavirus vaccine (%) | 9.5 | 87.2 | — | 76 |
| 54 | Children age 9-35 months who received a vitamin A dose in the last 6 months (%) | 84.1 | 84.3 | — | 76 |
| 55 | Children age 12-23 months who received most of their vaccinations in a public health | 87.3 | 95.2 | — | 76 |
| 56 | Children age 12-23 months who received most of their vaccinations in a private health | 12.3 | 4.6 | — | 76 |
| 57 | Prevalence of diarrhoea in the 2 weeks preceding the survey (%) | 4.3 | 5.6 | — | 76 |
| 58 | Prevalence of severe diarrhoea in the 2 weeks preceding the survey (%) | 0.1 | 0.2 | — | 76 |
| 59 | Prevalence of symptoms of acute respiratory infection (ARI) in the 2 weeks preceding the | 2.4 | 2.8 | — | 76 |
| 60 | Children with fever or symptoms of ARI in the 2 weeks preceding the survey taken to a health | 86.2 | 79.0 | — | 76 |
| 61 | Children under age 3 years breastfed within one hour of birth 9 (%) | 66.7 | 82.3 | — | 76 |
| 62 | Children under age 6 months exclusively breastfed 10 (%) | 55.5 | 72.7 | — | 76 |
| 63 | Children under age 6 months currently breastfeeding 10 (%) | 99.8 | 97.5 | — | 76 |
| 64 | Children under age 6 months exclusively breastfed or breastfeeding and consuming plain | 77.8 | 86.3 | — | 76 |
| 65 | Children age 6-8 months receiving solid or semi-solid food and breastmilk 10 (%) | 71.3 | 79.3 | — | 76 |
| 66 | Breastfeeding children age 6-23 months receiving an adequate diet 10, 11 (%) | 23.4 | 24.3 | — | 76 |
| 67 | Non-breastfeeding children age 6-23 months receiving an adequate diet 10, 11 (%) | 22.2 | 43.0 | — | 76 |
| 68 | Total children age 6-23 months receiving an adequate diet 10, 11 (%) | 23.3 | 26.0 | — | 76 |
| 69 | Child stunting | 23.4 | 20.1 | -3.3 | 76 |
| 70 | Child wasting | 15.8 | 10.9 | -4.9 | 76 |
| 71 | Severe child wasting | 5.8 | 2.6 | -3.2 | 76 |
| 72 | Child underweight | 19.7 | 17.8 | -1.9 | 76 |
| 73 | Child overweight | 4.0 | 2.1 | -1.9 | 76 |
| 74 | Women whose Body Mass Index (BMI) is below normal (BMI <18.5 kg/m 2)15 (%) | 10.1 | 12.0 | — | 77 |
| 75 | Men whose Body Mass Index (BMI) is below normal (BMI <18.5 kg/m 2) (%) | 10.0 | 15.5 | — | 77 |
| 76 | Women aged 15–49 overweight or obese (BMI ≥25), % | 38.2 | 46.7 | — | 77 |
| 77 | Men aged 15–49 overweight or obese (BMI ≥25), % | 36.4 | 37.0 | — | 77 |
| 78 | Blood sugar level - high (141-160 mg/dl)16 (%) | 8.3 | 8.3 | — | 77 |
| 79 | Blood sugar level - very high (>160 mg/dl)16 (%) | 13.1 | 16.7 | — | 77 |
| 80 | Blood sugar level - high or very high (>140 mg/dl) or taking medicine to control blood | 24.8 | 28.9 | — | 77 |
| 81 | Blood sugar level - high (141-160 mg/dl)16 (%) | 9.8 | 9.2 | — | 77 |
| 82 | Blood sugar level - very high (>160 mg/dl)16 (%) | 13.8 | 18.9 | — | 77 |
| 83 | Blood sugar level - high or very high (>140 mg/dl) or taking medicine to control blood | 27.0 | 31.9 | — | 77 |
| 84 | Mildly elevated blood pressure (Systolic 140-159 mm of Hg and/or | 15.5 | 13.8 | — | 77 |
| 85 | Women aged 15+ with moderately or severely elevated blood pressure, % | 6.6 | 6.4 | — | 77 |
| 86 | Women aged 15+ with elevated blood pressure or taking medicine for it, % | 30.9 | 31.9 | — | 77 |
| 87 | Mildly elevated blood pressure (Systolic 140-159 mm of Hg and/or | 19.2 | 18.1 | — | 77 |
| 88 | Men aged 15+ with moderately or severely elevated blood pressure, % | 6.7 | 5.1 | — | 77 |
| 89 | Men aged 15+ with elevated blood pressure or taking medicine for it, % | 32.8 | 36.6 | — | 77 |
| 90 | Currently married women who usually participate in three household decisions 17 (%) | 94.1 | 96.5 | — | 77 |
| 91 | Women who worked in the last 12 months and were paid in cash (%) | 25.8 | 36.2 | — | 77 |
| 92 | Women having a bank or savings account that they themselves use (%) | 78.5 | 91.7 | — | 77 |
| 93 | Women having a mobile phone that they themselves use (%) | 86.6 | 89.1 | — | 77 |
| 94 | Women age 15-24 years who use hygienic methods of protection during their menstrual | 93.3 | 92.5 | — | 77 |
| 95 | Ever-married women age 18-49 years who have ever experienced spousal violence 19 (%) | 9.8 | 17.7 | — | 77 |
| 96 | Ever-married women age 18-49 years who have experienced physical violence during any | 0.5 | 1.7 | — | 77 |
| 97 | Young women age 18-29 years who experienced sexual violence by age 18 (%) | 0.0 | 0.3 | — | 77 |
| 98 | Women age 15 years and above who use any kind of tobacco (%) | 2.2 | 2.2 | — | 77 |
| 99 | Men age 15 years and above who use any kind of tobacco (%) | 16.9 | 15.9 | — | 77 |
| 100 | Women age 15 years and above who consume alcohol (%) | 0.2 | 0.3 | — | 77 |
| 101 | Men age 15 years and above who consume alcohol (%) | 19.9 | 22.7 | — | 77 |

### Madhya Pradesh

**NFHS-5** · NFHS5-II · 131 indicator rows.

| Row | Indicator | Total | PDF page |
| --- | --- | --- | --- |
| 1 | Female population age 6 years and above who ever attended school (%) | 67.5 | 37 |
| 2 | Population below age 15 years (%) | 26.5 | 37 |
| 3 | Sex ratio of the total population (females per 1,000 males) | 970 | 37 |
| 4 | Sex ratio at birth for children born in the last five years (females per 1,000 males) | 956 | 37 |
| 5 | Children under age 5 years whose birth was registered with the civil authority (%) | 94.1 | 37 |
| 6 | Deaths in the last 3 years registered with the civil authority (%) | 74.3 | 37 |
| 7 | Population living in households with electricity (%) | 98.4 | 37 |
| 8 | Population living in households with an improved drinking -water source1 (%) | 89.0 | 37 |
| 9 | Population living in households that use an improved sanitation facility 2 (%) | 65.1 | 37 |
| 10 | Households using clean fuel for cooking3 (%) | 40.1 | 37 |
| 11 | Households using iodized salt (%) | 95.3 | 37 |
| 12 | Households with any usual member covered under a health insurance/financing scheme (%) | 38.1 | 37 |
| 13 | Children age 5 years who attended pre-primary school during the school year 2019-20 (%) | 10.5 | 37 |
| 14 | Women who are literate4 (%) | 65.4 | 37 |
| 15 | Men who are literate4 (%) | 81.3 | 37 |
| 16 | Women with 10 or more years of schooling (%) | 29.3 | 37 |
| 17 | Men with 10 or more years of schooling (%) | 39.9 | 37 |
| 18 | Women who have ever used the internet (%) | 26.9 | 37 |
| 19 | Men who have ever used the internet (%) | 55.7 | 37 |
| 20 | Women age 20-24 years married before age 18 years (%) | 23.1 | 37 |
| 21 | Men age 25-29 years married before age 21 years (%) | 30.1 | 37 |
| 22 | Total fertility rate (children per woman) | 2.0 | 37 |
| 23 | Women age 15-19 years who were already mothers or pregnant at the time of the survey (%) | 5.1 | 37 |
| 24 | Adolescent fertility rate for women age 15-19 years5 | 37 | 37 |
| 25 | Neonatal mortality rate (NNMR) | 29.0 | 37 |
| 26 | Infant mortality rate (IMR) | 41.3 | 37 |
| 27 | Under-five mortality rate (U5MR) | 49.2 | 37 |
| 28 | Any method6 (%) | 71.7 | 37 |
| 29 | Any modern method6 (%) | 65.5 | 37 |
| 30 | Female sterilization (%) | 51.9 | 37 |
| 31 | Male sterilization (%) | 0.7 | 37 |
| 32 | IUD/PPIUD (%) | 1.1 | 37 |
| 33 | Pill (%) | 1.9 | 37 |
| 34 | Condom (%) | 8.1 | 37 |
| 35 | Injectables (%) | 0.4 | 37 |
| 36 | Total unmet need7 (%) | 7.7 | 37 |
| 37 | Unmet need for spacing7 (%) | 3.9 | 37 |
| 38 | Health worker ever talked to female non-users about family planning (%) | 28.2 | 37 |
| 39 | Current users ever told about side effects of current method 8 (%) | 69.9 | 37 |
| 40 | Mothers who had an antenatal check-up in the first trimester (%) | 75.4 | 38 |
| 41 | Mothers who had at least 4 antenatal care visits (%) | 57.5 | 38 |
| 42 | Mothers whose last birth was protected against neonatal tetanus9 (%) | 95.0 | 38 |
| 43 | Mothers who consumed iron folic acid for 100 days or more when they were pregnant (%) | 51.4 | 38 |
| 44 | Mothers who consumed iron folic acid for 180 days or more when they were pregnant (%) | 31.8 | 38 |
| 45 | Registered pregnancies for which the mother received a Mother and Child Protection (MCP) card (%) | 96.7 | 38 |
| 46 | Mothers who received postnatal care from a doctor/nurse/LHV/ANM/midwife/other health personnel within 2 days of delivery (%) | 83.5 | 38 |
| 47 | Average out-of-pocket expenditure per delivery in a public health facility (Rs.) | 1,619 | 38 |
| 48 | Children born at home who were taken to a health facility for a check -up within 24 hours of birth (%) | 9.4 | 38 |
| 49 | Children who received postnatal care from a doctor/nurse/LHV/ANM/midwife/other health personnel within 2 days of delivery (%) | 83.9 | 38 |
| 50 | Institutional births (%) | 90.7 | 38 |
| 51 | Institutional births in public facility (%) | 80.2 | 38 |
| 52 | Home births that were conducted by skilled health personnel 10 (%) | 2.5 | 38 |
| 53 | Births attended by skilled health personnel10 (%) | 89.3 | 38 |
| 54 | Births delivered by caesarean section (%) | 12.1 | 38 |
| 55 | Births in a private health facility that were delivered by caesarean section (%) | 52.3 | 38 |
| 56 | Births in a public health facility that were delivered by caesarean section (%) | 8.2 | 38 |
| 57 | Children age 12-23 months fully vaccinated based on information from either vaccination card or mother's recall11 (%) | 77.1 | 38 |
| 58 | Children age 12-23 months fully vaccinated based on information from vaccination card only12 (%) | 83.3 | 38 |
| 59 | Children age 12-23 months who have received BCG (%) | 95.4 | 38 |
| 60 | Children age 12-23 months who have received 3 doses of polio vaccine 13 (%) | 81.4 | 38 |
| 61 | Children age 12-23 months who have received 3 doses of penta or DPT vaccine (%) | 87.4 | 38 |
| 62 | Children age 12-23 months who have received the first dose of measles-containing vaccine (MCV) (%) | 88.0 | 38 |
| 63 | Children age 24-35 months who have received a second dose of measles-containing vaccine (MCV) (%) | 35.2 | 38 |
| 64 | Children age 12-23 months who have received 3 doses of rotavirus vaccine14 (%) | 70.9 | 38 |
| 65 | Children age 12-23 months who have received 3 doses of penta or hepatitis B vaccine (%) | 85.0 | 38 |
| 66 | Children age 9-35 months who received a vitamin A dose in the last 6 months (%) | 78.1 | 38 |
| 67 | Children age 12-23 months who received most of their vaccinations in a public health facility (%) | 98.4 | 38 |
| 68 | Children age 12-23 months who received most of their vaccinations in a private health facility (%) | 1.2 | 38 |
| 69 | Prevalence of diarrhoea in the 2 weeks preceding the survey (%) | 6.4 | 38 |
| 70 | Children with diarrhoea in the 2 weeks preceding the survey who received oral rehydration salts (ORS) (%) | 65.2 | 38 |
| 71 | Children with diarrhoea in the 2 weeks preceding the survey who received zinc (%) | 35.6 | 38 |
| 72 | Children with diarrhoea in the 2 weeks preceding the survey taken to a health facility or health provider (%) | 65.6 | 38 |
| 73 | Prevalence of symptoms of acute respiratory infection (ARI) in the 2 weeks preceding the survey (%) | 2.6 | 38 |
| 74 | Children with fever or symptoms of ARI in the 2 weeks preceding the survey taken to a health facility or health provider (%) | 64.3 | 38 |
| 75 | Children under age 3 years breastfed within one hour of birth15 (%) | 41.3 | 39 |
| 76 | Children under age 6 months exclusively breastfed16 (%) | 74.0 | 39 |
| 77 | Children age 6-8 months receiving solid or semi-solid food and breastmilk16 (%) | 39.5 | 39 |
| 78 | Breastfeeding children age 6 -23 months receiving an adequate diet 16, 17 (%) | 9.4 | 39 |
| 79 | Non-breastfeeding children age 6 -23 months receiving an adequate diet 16, 17 (%) | 7.7 | 39 |
| 80 | Total children age 6 -23 months receiving an adequate diet 16, 17 (%) | 9.2 | 39 |
| 81 | Children under 5 years who are stunted (height-for-age)18 (%) | 35.7 | 39 |
| 82 | Children under 5 years who are wasted (weight-for-height)18 (%) | 19.0 | 39 |
| 83 | Children under 5 years who are severely wasted (weight-for-height)19 (%) | 6.5 | 39 |
| 84 | Children under 5 years who are underweight (weight-for-age)18 (%) | 33.0 | 39 |
| 85 | Children under 5 years who are overweight (weight-for-height)20 (%) | 2.0 | 39 |
| 86 | Women whose Body Mass Index (BMI) is below normal (BMI <18.5 kg/m 2)21 (%) | 23.0 | 39 |
| 87 | Men whose Body Mass Index (BMI) is below normal (BMI <18.5 kg/m2) (%) | 20.8 | 39 |
| 88 | Women who are overweight or obese (BMI ≥25.0 kg/m2)21 (%) | 16.6 | 39 |
| 89 | Men who are overweight or obese (BMI ≥25.0 kg/m 2) (%) | 15.6 | 39 |
| 90 | Women who have high risk waist -to-hip ratio (≥0.85) (%) | 40.5 | 39 |
| 91 | Men who have high risk waist -to-hip ratio (≥0.90) (%) | 39.1 | 39 |
| 92 | Children age 6-59 months who are anaemic (<11.0 g/dl) 22 (%) | 72.7 | 39 |
| 93 | Non-pregnant women age 15-49 years who are anaemic (<12.0 g/dl)22 (%) | 54.7 | 39 |
| 94 | Pregnant women age 15-49 years who are anaemic (<11.0 g/dl)22 (%) | 52.9 | 39 |
| 95 | All women age 15 -49 years who are anaemic 22 (%) | 54.7 | 39 |
| 96 | All women age 15-19 years who are anaemic22 (%) | 58.1 | 39 |
| 97 | Men age 15-49 years who are anaemic (<13.0 g/dl)22 (%) | 22.4 | 39 |
| 98 | Men age 15 -19 years who are anaemic (<13.0 g/dl) 22 (%) | 30.5 | 39 |
| 99 | Blood sugar level - high (141-160 mg/dl)23 (%) | 5.3 | 39 |
| 100 | Blood sugar level - very high (>160 mg/dl) 23 (%) | 3.9 | 39 |
| 101 | Blood sugar level - high or very high (>140 mg/dl) or taking medicine to control blood sugar level23 (%) | 9.8 | 39 |
| 102 | Blood sugar level - high (141-160 mg/dl)23 (%) | 6.6 | 39 |
| 103 | Blood sugar level - very high (>160 mg/dl) 23 (%) | 4.9 | 39 |
| 104 | Blood sugar level - high or very high (>140 mg/dl) or taking medicine to control blood sugar level23 (%) | 12.2 | 39 |
| 105 | Mildly elevated blood pressure (Systolic 140 -159 mm of Hg and/or Diastolic 90-99 mm of Hg) (%) | 13.2 | 39 |
| 106 | Moderately or severely elevated blood pressure (Systolic ≥160 mm of Hg and/or Diastolic ≥100 mm of Hg) (%) | 5.2 | 39 |
| 107 | Elevated blood pressure (Systolic ≥140 mm of Hg and/or Diastolic ≥90 mm of Hg) or taking medicine to control blood pressure (%) | 20.6 | 39 |
| 108 | Mildly elevated blood pressure (Systolic 140 -159 mm of Hg and/or Diastolic 90-99 mm of Hg) (%) | 16.0 | 39 |
| 109 | Moderately or severely ele vated blood pressure (Systolic ≥160 mm of Hg and/or Diastolic ≥100 mm of Hg) (%) | 5.3 | 39 |
| 110 | Elevated blood pressure (Systolic ≥140 mm of Hg and/or Diastolic ≥90 mm of Hg) or taking medicine to control blood pressure (%) | 22.7 | 39 |
| 111 | Ever undergone a screening test for cervical cancer (%) | 0.8 | 40 |
| 112 | Ever undergone a breast examination for breast cancer (%) | 0.5 | 40 |
| 113 | Ever undergone an oral cavity examination for oral cancer (%) | 0.7 | 40 |
| 114 | Ever undergone an oral cavity examination for oral cancer (%) | 0.9 | 40 |
| 115 | Women who have comprehensive knowledge 24 of HIV/AIDS (%) | 18.7 | 40 |
| 116 | Men who have comprehensive knowledge 24 of HIV/AIDS (%) | 26.3 | 40 |
| 117 | Women who know that consistent condom use can reduce the chance of getting HIV/AIDS (%) | 65.1 | 40 |
| 118 | Men who know that consistent condom use can reduce the chance of getting HIV/AIDS (%) | 78.5 | 40 |
| 119 | Currently married women who usually participate in three household decisions 25 (%) | 86.0 | 40 |
| 120 | Women who worked in the last 12 months and were paid in cash (%) | 26.8 | 40 |
| 121 | Women owning a house and/or land (alone or jointly with others) (%) | 39.9 | 40 |
| 122 | Women having a bank or savings account that they themselves use (%) | 74.7 | 40 |
| 123 | Women having a mobile phone that they themselves use (%) | 38.5 | 40 |
| 124 | Women age 15-24 years who use hygienic methods of protection during their menstrual period26 (%) | 60.5 | 40 |
| 125 | Ever-married women age 18-49 years who have ever experienced spousal violence 27 (%) | 28.1 | 40 |
| 126 | Ever-married women age 18-49 years who have experienced physical violence during any pregnancy (%) | 2.3 | 40 |
| 127 | Young women age 18 -29 years who experienced sexual violence by age 18 (%) | 1.0 | 40 |
| 128 | Women age 15 years and above who use any kind of tobacco (%) | 10.2 | 40 |
| 129 | Men age 15 years and above who use any kind of tobacco (%) | 46.5 | 40 |
| 130 | Women age 15 years and above who consume alcohol (%) | 1.0 | 40 |
| 131 | Men age 15 years and above who consume alcohol (%) | 17.1 | 40 |

**NFHS-6** · 101 extracted indicator rows.

| Row | Indicator | NFHS-5 Total as printed in NFHS-6 | NFHS-6 Total | Reviewed change | PDF page |
| --- | --- | --- | --- | --- | --- |
| 1 | Population below age 5 years (%) | 8.2 | 8.4 | — | 79 |
| 2 | Population below age 15 years (%) | 26.5 | 25.8 | — | 79 |
| 3 | Population age 60 years and above (%) | 10.9 | 11.6 | — | 79 |
| 4 | Household electricity access | 98.4 | 99.3 | +0.9 | 79 |
| 5 | Population living in households with an improved drinking-water source 1 (%) | 89.0 | 89.0 | — | 79 |
| 6 | Households using iodized salt (%) | 95.3 | 95.9 | — | 79 |
| 7 | Households with any usual member covered under a health insurance/financing scheme (%) | 38.1 | 73.6 | — | 79 |
| 8 | Households with any usual member having a bank account/post office account (%) | 95.6 | 99.1 | — | 79 |
| 9 | Female population age 6+ ever attended school | 67.5 | 70.0 | +2.5 | 79 |
| 10 | Households with any usual female members owning a house and/or land (alone or jointly with | 11.1 | 17.3 | — | 79 |
| 11 | Children age 2-4 years who attended pre-school (%) | 39.0 | 48.0 | — | 79 |
| 12 | Women with 10 or more years of schooling | 29.3 | 33.7 | +4.4 | 79 |
| 13 | Men with 10 or more years of schooling | 39.9 | 42.0 | +2.1 | 79 |
| 14 | Women who have ever used the internet (%) | 26.9 | 62.0 | — | 79 |
| 15 | Men who have ever used the internet (%) | 55.7 | 77.3 | — | 79 |
| 16 | Women age 20–24 married before age 18 | 23.1 | 20.0 | -3.1 | 79 |
| 17 | Men age 25-29 years married before age 21 years (%) | 30.1 | 25.0 | — | 79 |
| 18 | Total fertility rate, children per woman | 2.0 | 2.1 | +0.1 | 79 |
| 19 | Women age 15-19 years who were already mothers or pregnant at the time of the survey (%) | 5.1 | 5.6 | — | 79 |
| 20 | Any method2 (%) | 71.7 | 76.4 | — | 79 |
| 21 | Any modern method2 (%) | 65.5 | 62.1 | — | 79 |
| 22 | Any traditional method (%) | 6.2 | 14.3 | — | 79 |
| 23 | Female sterilization (%) | 51.9 | 47.8 | — | 79 |
| 24 | Male sterilization (%) | 0.7 | 0.9 | — | 79 |
| 25 | Total unmet need for family planning | 7.7 | 6.2 | -1.5 | 79 |
| 26 | Unmet need for spacing 3 (%) | 3.9 | 3.6 | — | 79 |
| 27 | Unmet need for limiting3 (%) | 3.8 | 2.6 | — | 79 |
| 28 | First-trimester antenatal check-up | 75.4 | 78.0 | +2.6 | 79 |
| 29 | Mothers who had any antenatal care visits (%) | 94.7 | 96.2 | — | 79 |
| 30 | At least four antenatal care visits | 57.5 | 69.5 | +12.0 | 79 |
| 31 | Mothers whose last birth was protected against neonatal tetanus 4 (%) | 95.0 | 95.3 | — | 79 |
| 32 | Mothers who consumed iron folic acid for 100 days or more when they were pregnant (%) | 51.4 | 58.8 | — | 79 |
| 33 | Mothers who consumed iron folic acid for 180 days or more when they were pregnant (%) | 31.8 | 39.6 | — | 79 |
| 34 | Registered pregnancies for which the mother received a Mother and Child Protection (MCP) | 96.7 | 97.5 | — | 79 |
| 35 | Institutional births | 90.7 | 89.8 | -0.9 | 79 |
| 36 | Institutional births in public facility (%) | 80.2 | 76.8 | — | 79 |
| 37 | Births attended by skilled health personnel | 89.3 | 89.4 | +0.1 | 79 |
| 38 | Caesarean births | 12.1 | 16.0 | +3.9 | 79 |
| 39 | Births in a private health facility that were delivered by caesarean section (%) | 52.3 | 61.7 | — | 79 |
| 40 | Births in a public health facility that were delivered by caesarean section (%) | 8.2 | 10.4 | — | 79 |
| 41 | Mothers who received postnatal care from a doctor/nurse/LHV/ANM/midwife/other health | 83.5 | 83.0 | — | 80 |
| 42 | Children born at home who were taken to a health facility for a check-up within 24 hours of | 9.4 | 12.1 | — | 80 |
| 43 | Children who received postnatal care from a doctor/nurse/LHV/ANM/midwife/ other health | 83.9 | 86.5 | — | 80 |
| 44 | Full vaccination, card or maternal recall | 77.4 | 81.5 | — | 80 |
| 45 | Full vaccination, card only | 83.3 | 85.8 | +2.5 | 80 |
| 46 | Children age 12-23 months who have received any vaccine (%) | 96.4 | 97.0 | — | 80 |
| 47 | BCG vaccination | 95.4 | 95.7 | +0.3 | 80 |
| 48 | Children age 12-23 months who have received 3 doses of polio vaccine 8 (%) | 81.4 | 85.4 | — | 80 |
| 49 | Children age 12-23 months who have received 3 doses of pentavalent vaccine (%) | 87.9 | 88.6 | — | 80 |
| 50 | Children age 12-23 months who have received the first dose of measles-containing | 88.1 | 92.0 | — | 80 |
| 51 | Children age 24-35 months who have received a second dose of measles-containing | 63.9 | 67.0 | — | 80 |
| 52 | Children age 12-23 months who have received birth dose of hepatitis B vaccine (%) | 81.9 | 86.5 | — | 80 |
| 53 | Children age 12-23 months who have received 3 doses of rotavirus vaccine (%) | 70.9 | 86.3 | — | 80 |
| 54 | Children age 9-35 months who received a vitamin A dose in the last 6 months (%) | 78.1 | 79.3 | — | 80 |
| 55 | Children age 12-23 months who received most of their vaccinations in a public health | 98.4 | 97.4 | — | 80 |
| 56 | Children age 12-23 months who received most of their vaccinations in a private health | 1.2 | 1.8 | — | 80 |
| 57 | Prevalence of diarrhoea in the 2 weeks preceding the survey (%) | 6.4 | 10.5 | — | 80 |
| 58 | Prevalence of severe diarrhoea in the 2 weeks preceding the survey (%) | 0.5 | 0.7 | — | 80 |
| 59 | Prevalence of symptoms of acute respiratory infection (ARI) in the 2 weeks preceding the | 2.6 | 1.4 | — | 80 |
| 60 | Children with fever or symptoms of ARI in the 2 weeks preceding the survey taken to a health | 64.3 | 74.7 | — | 80 |
| 61 | Children under age 3 years breastfed within one hour of birth 9 (%) | 41.3 | 49.9 | — | 80 |
| 62 | Children under age 6 months exclusively breastfed 10 (%) | 74.0 | 56.4 | — | 80 |
| 63 | Children under age 6 months currently breastfeeding 10 (%) | 96.5 | 97.4 | — | 80 |
| 64 | Children under age 6 months exclusively breastfed or breastfeeding and consuming plain | 86.3 | 88.7 | — | 80 |
| 65 | Children age 6-8 months receiving solid or semi-solid food and breastmilk 10 (%) | 39.5 | 58.3 | — | 80 |
| 66 | Breastfeeding children age 6-23 months receiving an adequate diet 10, 11 (%) | 9.2 | 12.4 | — | 80 |
| 67 | Non-breastfeeding children age 6-23 months receiving an adequate diet 10, 11 (%) | 7.1 | 8.9 | — | 80 |
| 68 | Total children age 6-23 months receiving an adequate diet 10, 11 (%) | 9.0 | 12.0 | — | 80 |
| 69 | Child stunting | 35.7 | 31.4 | -4.3 | 80 |
| 70 | Child wasting | 18.9 | 23.8 | — | 80 |
| 71 | Severe child wasting | 6.5 | 6.8 | +0.3 | 80 |
| 72 | Child underweight | 33.0 | 39.7 | +6.7 | 80 |
| 73 | Child overweight | 2.0 | 0.6 | -1.4 | 80 |
| 74 | Women whose Body Mass Index (BMI) is below normal (BMI <18.5 kg/m 2)15 (%) | 23.0 | 26.5 | — | 81 |
| 75 | Men whose Body Mass Index (BMI) is below normal (BMI <18.5 kg/m 2) (%) | 20.8 | 28.3 | — | 81 |
| 76 | Women aged 15–49 overweight or obese (BMI ≥25), % | 16.6 | 22.2 | — | 81 |
| 77 | Men aged 15–49 overweight or obese (BMI ≥25), % | 15.6 | 17.6 | — | 81 |
| 78 | Blood sugar level - high (141-160 mg/dl)16 (%) | 5.3 | 7.1 | — | 81 |
| 79 | Blood sugar level - very high (>160 mg/dl)16 (%) | 3.9 | 6.7 | — | 81 |
| 80 | Blood sugar level - high or very high (>140 mg/dl) or taking medicine to control blood | 9.8 | 14.5 | — | 81 |
| 81 | Blood sugar level - high (141-160 mg/dl)16 (%) | 6.6 | 8.8 | — | 81 |
| 82 | Blood sugar level - very high (>160 mg/dl)16 (%) | 4.9 | 8.8 | — | 81 |
| 83 | Blood sugar level - high or very high (>140 mg/dl) or taking medicine to control blood | 12.2 | 18.3 | — | 81 |
| 84 | Mildly elevated blood pressure (Systolic 140 -159 mm of Hg and/or | 13.2 | 6.1 | — | 81 |
| 85 | Women aged 15+ with moderately or severely elevated blood pressure, % | 5.2 | 4.2 | — | 81 |
| 86 | Women aged 15+ with elevated blood pressure or taking medicine for it, % | 20.6 | 14.2 | — | 81 |
| 87 | Mildly elevated blood pressure (Systolic 140 -159 mm of Hg and/or | 16.0 | 7.9 | — | 81 |
| 88 | Men aged 15+ with moderately or severely elevated blood pressure, % | 5.3 | 2.6 | — | 81 |
| 89 | Men aged 15+ with elevated blood pressure or taking medicine for it, % | 22.7 | 15.4 | — | 81 |
| 90 | Currently married women who usually participate in three household decisions17 (%) | 86.0 | 90.4 | — | 81 |
| 91 | Women who worked in the last 12 months and were paid in cash (%) | 26.8 | 32.6 | — | 81 |
| 92 | Women having a bank or savings account that they themselves use (%) | 74.7 | 92.1 | — | 81 |
| 93 | Women having a mobile phone that they themselves use (%) | 38.5 | 48.5 | — | 81 |
| 94 | Women age 15-24 years who use hygienic methods of protection during their menstrual | 60.9 | 65.4 | — | 81 |
| 95 | Ever-married women age 18-49 years who have ever experienced spousal violence19 (%) | 28.0 | 21.4 | — | 81 |
| 96 | Ever-married women age 18-49 years who have experienced physical violence during any | 2.3 | 2.3 | — | 81 |
| 97 | Young women age 18-29 years who experienced sexual violence by age 18 (%) | 1.1 | 0.6 | — | 81 |
| 98 | Women age 15 years and above who use any kind of tobacco (%) | 10.3 | 11.6 | — | 81 |
| 99 | Men age 15 years and above who use any kind of tobacco (%) | 46.4 | 47.7 | — | 81 |
| 100 | Women age 15 years and above who consume alcohol (%) | 1.0 | 1.2 | — | 81 |
| 101 | Men age 15 years and above who consume alcohol (%) | 17.0 | 18.5 | — | 81 |

### Maharashtra

**NFHS-5** · NFHS5-I · 131 indicator rows.

| Row | Indicator | Total | PDF page |
| --- | --- | --- | --- |
| 1 | Female population age 6 years and above who ever attended school (%) | 79.6 | 80 |
| 2 | Population below age 15 years (%) | 22.8 | 80 |
| 3 | Sex ratio of the total population (females per 1,000 males) | 966 | 80 |
| 4 | Sex ratio at birth for children born in the last five years (females per 1,000 males) | 913 | 80 |
| 5 | Children under age 5 years whose birth was registered with the civil authority (%) | 96.3 | 80 |
| 6 | Deaths in the last 3 years registered with the civil authority (%) | 89.7 | 80 |
| 7 | Population living in households with electricity (%) | 97.8 | 80 |
| 8 | Population living in households with an improved drinking-water source1 (%) | 93.5 | 80 |
| 9 | Population living in households that use an improved sanitation facility2 (%) | 72.0 | 80 |
| 10 | Households using clean fuel for cooking3 (%) | 79.7 | 80 |
| 11 | Households using iodized salt (%) | 96.2 | 80 |
| 12 | Households with any usual member covered under a health insurance/financing scheme (%) | 20.0 | 80 |
| 13 | Children age 5 years who attended pre-primary school during the school year 2019-20 (%) | 28.4 | 80 |
| 14 | Women who are literate4 (%) | 84.6 | 80 |
| 15 | Men who are literate4 (%) | 93.0 | 80 |
| 16 | Women with 10 or more years of schooling (%) | 50.4 | 80 |
| 17 | Men with 10 or more years of schooling (%) | 61.0 | 80 |
| 18 | Women who have ever used the internet (%) | 38.0 | 80 |
| 19 | Men who have ever used the internet (%) | 61.5 | 80 |
| 20 | Women age 20-24 years married before age 18 years (%) | 21.9 | 80 |
| 21 | Men age 25-29 years married before age 21 years (%) | 10.5 | 80 |
| 22 | Total fertility rate (children per woman) | 1.7 | 80 |
| 23 | Women age 15-19 years who were already mothers or pregnant at the time of the survey (%) | 7.6 | 80 |
| 24 | Adolescent fertility rate for women age 15-19 years5 | 47 | 80 |
| 25 | Neonatal mortality rate (NNMR) | 16.5 | 80 |
| 26 | Infant mortality rate (IMR) | 23.2 | 80 |
| 27 | Under-five mortality rate (U5MR) | 28.0 | 80 |
| 28 | Any method6 (%) | 66.2 | 80 |
| 29 | Any modern method6 (%) | 63.8 | 80 |
| 30 | Female sterilization (%) | 49.1 | 80 |
| 31 | Male sterilization (%) | 0.4 | 80 |
| 32 | IUD/PPIUD (%) | 1.9 | 80 |
| 33 | Pill (%) | 1.8 | 80 |
| 34 | Condom (%) | 10.2 | 80 |
| 35 | Injectables (%) | 0.2 | 80 |
| 36 | Total unmet need7 (%) | 9.6 | 80 |
| 37 | Unmet need for spacing7 (%) | 3.9 | 80 |
| 38 | Health worker ever talked to female non-users about family planning (%) | 21.9 | 80 |
| 39 | Current users ever told about side effects of current method8 (%) | 52.1 | 80 |
| 40 | Mothers who had an antenatal check-up in the first trimester (%) | 70.9 | 81 |
| 41 | Mothers who had at least 4 antenatal care visits (%) | 70.3 | 81 |
| 42 | Mothers whose last birth was protected against neonatal tetanus9 (%) | 90.1 | 81 |
| 43 | Mothers who consumed iron folic acid for 100 days or more when they were pregnant (%) | 48.2 | 81 |
| 44 | Mothers who consumed iron folic acid for 180 days or more when they were pregnant (%) | 30.9 | 81 |
| 45 | Registered pregnancies for which the mother received a Mother and Child Protection (MCP) card (%) | 95.5 | 81 |
| 46 | Mothers who received postnatal care from a doctor/nurse/LHV/ANM/midwife/other health personnel within 2 days of delivery (%) | 85.4 | 81 |
| 47 | Average out-of-pocket expenditure per delivery in a public health facility (Rs.) | 2,966 | 81 |
| 48 | Children born at home who were taken to a health facility for a check-up within 24 hours of birth (%) | 6.8 | 81 |
| 49 | Children who received postnatal care from a doctor/nurse/LHV/ANM/midwife/other health personnel within 2 days of delivery (%) | 89.1 | 81 |
| 50 | Institutional births (%) | 94.7 | 81 |
| 51 | Institutional births in public facility (%) | 55.8 | 81 |
| 52 | Home births that were conducted by skilled health personnel10 (%) | 2.0 | 81 |
| 53 | Births attended by skilled health personnel10 (%) | 93.8 | 81 |
| 54 | Births delivered by caesarean section (%) | 25.4 | 81 |
| 55 | Births in a private health facility that were delivered by caesarean section (%) | 39.1 | 81 |
| 56 | Births in a public health facility that were delivered by caesarean section (%) | 18.3 | 81 |
| 57 | Children age 12-23 months fully vaccinated based on information from either vaccination card or mother's recall11 (%) | 73.5 | 81 |
| 58 | Children age 12-23 months fully vaccinated based on information from vaccination card only12 (%) | 81.7 | 81 |
| 59 | Children age 12-23 months who have received BCG (%) | 93.8 | 81 |
| 60 | Children age 12-23 months who have received 3 doses of polio vaccine13 (%) | 79.0 | 81 |
| 61 | Children age 12-23 months who have received 3 doses of penta or DPT vaccine (%) | 83.4 | 81 |
| 62 | Children age 12-23 months who have received the first dose of measles-containing vaccine (MCV) (%) | 84.7 | 81 |
| 63 | Children age 24-35 months who have received a second dose of measles-containing vaccine (MCV) (%) | 26.3 | 81 |
| 64 | Children age 12-23 months who have received 3 doses of rotavirus vaccine14 (%) | 8.2 | 81 |
| 65 | Children age 12-23 months who have received 3 doses of penta or hepatitis B vaccine (%) | 75.6 | 81 |
| 66 | Children age 9-59 months who received a vitamin A dose in the last 6 months (%) | 71.9 | 81 |
| 67 | Children age 12-23 months who received most of their vaccinations in a public health facility (%) | 89.5 | 81 |
| 68 | Children age 12-23 months who received most of their vaccinations in a private health facility (%) | 10.0 | 81 |
| 69 | Prevalence of diarrhoea in the 2 weeks preceding the survey (%) | 8.9 | 81 |
| 70 | Children with diarrhoea in the 2 weeks preceding the survey who received oral rehydration salts (ORS) (%) | 59.5 | 81 |
| 71 | Children with diarrhoea in the 2 weeks preceding the survey who received zinc (%) | 27.3 | 81 |
| 72 | Children with diarrhoea in the 2 weeks preceding the survey taken to a health facility or health provider (%) | 72.3 | 81 |
| 73 | Prevalence of symptoms of acute respiratory infection (ARI) in the 2 weeks preceding the survey (%) | 3.2 | 81 |
| 74 | Children with fever or symptoms of ARI in the 2 weeks preceding the survey taken to a health facility or health provider (%) | 77.5 | 81 |
| 75 | Children under age 3 years breastfed within one hour of birth15 (%) | 53.2 | 82 |
| 76 | Children under age 6 months exclusively breastfed16 (%) | 71.0 | 82 |
| 77 | Children age 6-8 months receiving solid or semi-solid food and breastmilk16 (%) | 52.7 | 82 |
| 78 | Breastfeeding children age 6-23 months receiving an adequate diet16, 17 (%) | 8.4 | 82 |
| 79 | Non-breastfeeding children age 6-23 months receiving an adequate diet16, 17 (%) | 12.0 | 82 |
| 80 | Total children age 6-23 months receiving an adequate diet16, 17 (%) | 9.0 | 82 |
| 81 | Children under 5 years who are stunted (height-for-age)18 (%) | 35.2 | 82 |
| 82 | Children under 5 years who are wasted (weight-for-height)18 (%) | 25.6 | 82 |
| 83 | Children under 5 years who are severely wasted (weight-for-height)19 (%) | 10.9 | 82 |
| 84 | Children under 5 years who are underweight (weight-for-age)18 (%) | 36.1 | 82 |
| 85 | Children under 5 years who are overweight (weight-for-height)20 (%) | 4.1 | 82 |
| 86 | Women whose Body Mass Index (BMI) is below normal (BMI <18.5 kg/m2)21 (%) | 20.8 | 82 |
| 87 | Men whose Body Mass Index (BMI) is below normal (BMI <18.5 kg/m2) (%) | 16.2 | 82 |
| 88 | Women who are overweight or obese (BMI ≥25.0 kg/m2)21 (%) | 23.4 | 82 |
| 89 | Men who are overweight or obese (BMI ≥25.0 kg/m2) (%) | 24.7 | 82 |
| 90 | Women who have high risk waist-to-hip ratio (≥0.85) (%) | 44.5 | 82 |
| 91 | Men who have high risk waist-to-hip ratio (≥0.90) (%) | 40.7 | 82 |
| 92 | Children age 6-59 months who are anaemic (<11.0 g/dl)22 (%) | 68.9 | 82 |
| 93 | Non-pregnant women age 15-49 years who are anaemic (<12.0 g/dl)22 (%) | 54.5 | 82 |
| 94 | Pregnant women age 15-49 years who are anaemic (<11.0 g/dl)22 (%) | 45.7 | 82 |
| 95 | All women age 15-49 years who are anaemic22 (%) | 54.2 | 82 |
| 96 | All women age 15-19 years who are anaemic22 (%) | 57.2 | 82 |
| 97 | Men age 15-49 years who are anaemic (<13.0 g/dl)22 (%) | 21.9 | 82 |
| 98 | Men age 15-19 years who are anaemic (<13.0 g/dl)22 (%) | 27.9 | 82 |
| 99 | Blood sugar level - high (141-160 mg/dl)23 (%) | 5.7 | 82 |
| 100 | Blood sugar level - very high (>160 mg/dl)23 (%) | 5.4 | 82 |
| 101 | Blood sugar level - high or very high (>140 mg/dl) or taking medicine to control blood sugar level23 (%) | 12.4 | 82 |
| 102 | Blood sugar level - high (141-160 mg/dl)23 (%) | 6.5 | 82 |
| 103 | Blood sugar level - very high (>160 mg/dl)23 (%) | 5.9 | 82 |
| 104 | Blood sugar level - high or very high (>140 mg/dl) or taking medicine to control blood sugar level23 (%) | 13.6 | 82 |
| 105 | Mildly elevated blood pressure (Systolic 140-159 mm of Hg and/or Diastolic 90-99 mm of Hg) (%) | 13.7 | 82 |
| 106 | Moderately or severely elevated blood pressure (Systolic ≥160 mm of Hg and/or Diastolic ≥100 mm of Hg) (%) | 5.0 | 82 |
| 107 | Elevated blood pressure (Systolic ≥140 mm of Hg and/or Diastolic ≥90 mm of Hg) or taking medicine to control blood pressure (%) | 23.1 | 82 |
| 108 | Mildly elevated blood pressure (Systolic 140-159 mm of Hg and/or Diastolic 90-99 mm of Hg) (%) | 16.0 | 82 |
| 109 | Moderately or severely elevated blood pressure (Systolic ≥160 mm of Hg and/or Diastolic ≥100 mm of Hg) (%) | 5.3 | 82 |
| 110 | Elevated blood pressure (Systolic ≥140 mm of Hg and/or Diastolic ≥90 mm of Hg) or taking medicine to control blood pressure (%) | 24.4 | 82 |
| 111 | Ever undergone a screening test for cervical cancer (%) | 2.3 | 83 |
| 112 | Ever undergone a breast examination for breast cancer (%) | 1.3 | 83 |
| 113 | Ever undergone an oral cavity examination for oral cancer (%) | 1.3 | 83 |
| 114 | Ever undergone an oral cavity examination for oral cancer (%) | 0.6 | 83 |
| 115 | Women who have comprehensive knowledge24 of HIV/AIDS (%) | 34.4 | 83 |
| 116 | Men who have comprehensive knowledge24 of HIV/AIDS (%) | 42.6 | 83 |
| 117 | Women who know that consistent condom use can reduce the chance of getting HIV/AIDS (%) | 72.1 | 83 |
| 118 | Men who know that consistent condom use can reduce the chance of getting HIV/AIDS (%) | 84.5 | 83 |
| 119 | Currently married women who usually participate in three household decisions25 (%) | 89.8 | 83 |
| 120 | Women who worked in the last 12 months and were paid in cash (%) | 34.7 | 83 |
| 121 | Women owning a house and/or land (alone or jointly with others) (%) | 22.9 | 83 |
| 122 | Women having a bank or savings account that they themselves use (%) | 72.8 | 83 |
| 123 | Women having a mobile phone that they themselves use (%) | 54.8 | 83 |
| 124 | Women age 15-24 years who use hygienic methods of protection during their menstrual period26 (%) | 84.8 | 83 |
| 125 | Ever-married women age 18-49 years who have ever experienced spousal violence27 (%) | 25.2 | 83 |
| 126 | Ever-married women age 18-49 years who have experienced physical violence during any pregnancy (%) | 3.3 | 83 |
| 127 | Young women age 18-29 years who experienced sexual violence by age 18 (%) | 6.2 | 83 |
| 128 | Women age 15 years and above who use any kind of tobacco (%) | 10.9 | 83 |
| 129 | Men age 15 years and above who use any kind of tobacco (%) | 33.8 | 83 |
| 130 | Women age 15 years and above who consume alcohol (%) | 0.4 | 83 |
| 131 | Men age 15 years and above who consume alcohol (%) | 13.9 | 83 |

**NFHS-6** · 101 extracted indicator rows.

| Row | Indicator | NFHS-5 Total as printed in NFHS-6 | NFHS-6 Total | Reviewed change | PDF page |
| --- | --- | --- | --- | --- | --- |
| 1 | Population below age 5 years (%) | 7.0 | 6.4 | — | 83 |
| 2 | Population below age 15 years (%) | 22.8 | 21.8 | — | 83 |
| 3 | Population age 60 years and above (%) | 13.7 | 14.4 | — | 83 |
| 4 | Household electricity access | 97.8 | 98.9 | +1.1 | 83 |
| 5 | Population living in households with an improved drinking-water source 1 (%) | 93.5 | 95.6 | — | 83 |
| 6 | Households using iodized salt (%) | 96.2 | 98.6 | — | 83 |
| 7 | Households with any usual member covered under a health insurance/financing scheme (%) | 22.4 | 38.3 | — | 83 |
| 8 | Households with any usual member having a bank account/post office account (%) | 94.4 | 97.2 | — | 83 |
| 9 | Female population age 6+ ever attended school | 79.6 | 81.4 | +1.8 | 83 |
| 10 | Households with any usual female members owning a house and/or land (alone or jointly with | 16.5 | 18.6 | — | 83 |
| 11 | Children age 2-4 years who attended pre-school (%) | 66.2 | 62.6 | — | 83 |
| 12 | Women with 10 or more years of schooling | 50.4 | 55.4 | +5.0 | 83 |
| 13 | Men with 10 or more years of schooling | 61.0 | 66.3 | +5.3 | 83 |
| 14 | Women who have ever used the internet (%) | 38.0 | 62.6 | — | 83 |
| 15 | Men who have ever used the internet (%) | 52.9 | 82.6 | — | 83 |
| 16 | Women age 20–24 married before age 18 | 21.9 | 19.7 | -2.2 | 83 |
| 17 | Men age 25-29 years married before age 21 years (%) | 10.5 | 9.2 | — | 83 |
| 18 | Total fertility rate, children per woman | 1.7 | 1.8 | +0.1 | 83 |
| 19 | Women age 15-19 years who were already mothers or pregnant at the time of the survey (%) | 7.6 | 7.1 | — | 83 |
| 20 | Any method2 (%) | 66.2 | 73.7 | — | 83 |
| 21 | Any modern method2 (%) | 63.8 | 66.7 | — | 83 |
| 22 | Any traditional method (%) | 2.4 | 7.0 | — | 83 |
| 23 | Female sterilization (%) | 49.1 | 49.0 | — | 83 |
| 24 | Male sterilization (%) | 0.4 | 1.1 | — | 83 |
| 25 | Total unmet need for family planning | 9.6 | 6.9 | -2.7 | 83 |
| 26 | Unmet need for spacing 3 (%) | 3.9 | 4.1 | — | 83 |
| 27 | Unmet need for limiting3 (%) | 5.7 | 2.8 | — | 83 |
| 28 | First-trimester antenatal check-up | 70.9 | 85.4 | +14.5 | 83 |
| 29 | Mothers who had any antenatal care visits (%) | 91.6 | 95.5 | — | 83 |
| 30 | At least four antenatal care visits | 71.4 | 77.5 | — | 83 |
| 31 | Mothers whose last birth was protected against neonatal tetanus 4 (%) | 90.1 | 93.2 | — | 83 |
| 32 | Mothers who consumed iron folic acid for 100 days or more when they were pregnant (%) | 48.2 | 71.2 | — | 83 |
| 33 | Mothers who consumed iron folic acid for 180 days or more when they were pregnant (%) | 30.9 | 52.3 | — | 83 |
| 34 | Registered pregnancies for which the mother received a Mother and Child Protection (MCP) | 95.5 | 97.5 | — | 83 |
| 35 | Institutional births | 94.7 | 96.4 | +1.7 | 83 |
| 36 | Institutional births in public facility (%) | 55.8 | 53.3 | — | 83 |
| 37 | Births attended by skilled health personnel | 93.8 | 94.5 | +0.7 | 83 |
| 38 | Caesarean births | 25.4 | 33.6 | +8.2 | 83 |
| 39 | Births in a private health facility that were delivered by caesarean section (%) | 39.1 | 48.5 | — | 83 |
| 40 | Births in a public health facility that were delivered by caesarean section (%) | 18.3 | 23.8 | — | 83 |
| 41 | Mothers who received postnatal care from a doctor/nurse/LHV/ANM/midwife/other health | 85.4 | 91.1 | — | 84 |
| 42 | Children born at home who were taken to a health facility for a check-up within 24 hours of | 6.8 | 15.0 | — | 84 |
| 43 | Children who received postnatal care from a doctor/nurse/LHV/ANM/midwife/ other health | 89.1 | 92.3 | — | 84 |
| 44 | Full vaccination, card or maternal recall | 73.6 | 83.4 | — | 84 |
| 45 | Full vaccination, card only | 81.7 | 88.6 | +6.9 | 84 |
| 46 | Children age 12-23 months who have received any vaccine (%) | 94.8 | 96.3 | — | 84 |
| 47 | BCG vaccination | 93.8 | 94.7 | +0.9 | 84 |
| 48 | Children age 12-23 months who have received 3 doses of polio vaccine 8 (%) | 79.0 | 85.5 | — | 84 |
| 49 | Children age 12-23 months who have received 3 doses of pentavalent vaccine (%) | 83.6 | 90.4 | — | 84 |
| 50 | Children age 12-23 months who have received the first dose of measles-containing | 85.0 | 93.5 | — | 84 |
| 51 | Children age 24-35 months who have received a second dose of measles-containing | 50.3 | 66.7 | — | 84 |
| 52 | Children age 12-23 months who have received birth dose of hepatitis B vaccine (%) | 50.5 | 76.2 | — | 84 |
| 53 | Children age 12-23 months who have received 3 doses of rotavirus vaccine (%) | 8.2 | 87.0 | — | 84 |
| 54 | Children age 9-35 months who received a vitamin A dose in the last 6 months (%) | 72.2 | 84.0 | — | 84 |
| 55 | Children age 12-23 months who received most of their vaccinations in a public health | 89.5 | 95.2 | — | 84 |
| 56 | Children age 12-23 months who received most of their vaccinations in a private health | 10.0 | 3.9 | — | 84 |
| 57 | Prevalence of diarrhoea in the 2 weeks preceding the survey (%) | 8.9 | 5.9 | — | 84 |
| 58 | Prevalence of severe diarrhoea in the 2 weeks preceding the survey (%) | 0.8 | 0.4 | — | 84 |
| 59 | Prevalence of symptoms of acute respiratory infection (ARI) in the 2 weeks preceding the | 3.2 | 1.8 | — | 84 |
| 60 | Children with fever or symptoms of ARI in the 2 weeks preceding the survey taken to a health | 77.5 | 75.6 | — | 84 |
| 61 | Children under age 3 years breastfed within one hour of birth 9 (%) | 53.2 | 53.2 | — | 84 |
| 62 | Children under age 6 months exclusively breastfed 10 (%) | 71.0 | 64.7 | — | 84 |
| 63 | Children under age 6 months currently breastfeeding 10 (%) | 96.7 | 89.2 | — | 84 |
| 64 | Children under age 6 months exclusively breastfed or breastfeeding and consuming plain | 85.6 | 80.5 | — | 84 |
| 65 | Children age 6-8 months receiving solid or semi-solid food and breastmilk 10 (%) | 52.7 | 53.6 | — | 84 |
| 66 | Breastfeeding children age 6-23 months receiving an adequate diet 10, 11 (%) | 8.2 | 9.4 | — | 84 |
| 67 | Non-breastfeeding children age 6-23 months receiving an adequate diet 10, 11 (%) | 11.7 | 8.5 | — | 84 |
| 68 | Total children age 6-23 months receiving an adequate diet 10, 11 (%) | 8.9 | 9.3 | — | 84 |
| 69 | Child stunting | 35.2 | 29.5 | -5.7 | 84 |
| 70 | Child wasting | 25.6 | 19.9 | -5.7 | 84 |
| 71 | Severe child wasting | 10.9 | 7.6 | -3.3 | 84 |
| 72 | Child underweight | 36.1 | 31.4 | -4.7 | 84 |
| 73 | Child overweight | 4.1 | 1.5 | -2.6 | 84 |
| 74 | Women whose Body Mass Index (BMI) is below normal (BMI <18.5 kg/m 2)15 (%) | 20.8 | 18.4 | — | 85 |
| 75 | Men whose Body Mass Index (BMI) is below normal (BMI <18.5 kg/m 2) (%) | 16.2 | 17.1 | — | 85 |
| 76 | Women aged 15–49 overweight or obese (BMI ≥25), % | 23.5 | 31.1 | — | 85 |
| 77 | Men aged 15–49 overweight or obese (BMI ≥25), % | 24.7 | 32.8 | — | 85 |
| 78 | Blood sugar level - high (141-160 mg/dl)16 (%) | 5.7 | 7.0 | — | 85 |
| 79 | Blood sugar level - very high (>160 mg/dl)16 (%) | 5.4 | 7.8 | — | 85 |
| 80 | Blood sugar level - high or very high (>140 mg/dl) or taking medicine to control blood | 12.4 | 16.0 | — | 85 |
| 81 | Blood sugar level - high (141-160 mg/dl)16 (%) | 6.5 | 7.8 | — | 85 |
| 82 | Blood sugar level - very high (>160 mg/dl)16 (%) | 5.9 | 8.8 | — | 85 |
| 83 | Blood sugar level - high or very high (>140 mg/dl) or taking medicine to control blood | 13.6 | 17.7 | — | 85 |
| 84 | Mildly elevated blood pressure (Systolic 140 -159 mm of Hg and/or | 13.7 | 13.2 | — | 85 |
| 85 | Women aged 15+ with moderately or severely elevated blood pressure, % | 5.0 | 5.8 | — | 85 |
| 86 | Women aged 15+ with elevated blood pressure or taking medicine for it, % | 23.1 | 24.9 | — | 85 |
| 87 | Mildly elevated blood pressure (Systolic 140 -159 mm of Hg and/or | 16.0 | 17.0 | — | 85 |
| 88 | Men aged 15+ with moderately or severely elevated blood pressure, % | 5.3 | 3.9 | — | 85 |
| 89 | Men aged 15+ with elevated blood pressure or taking medicine for it, % | 24.4 | 27.7 | — | 85 |
| 90 | Currently married women who usually participate in three household decisions17 (%) | 89.8 | 93.1 | — | 85 |
| 91 | Women who worked in the last 12 months and were paid in cash (%) | 34.7 | 39.5 | — | 85 |
| 92 | Women having a bank or savings account that they themselves use (%) | 72.8 | 84.0 | — | 85 |
| 93 | Women having a mobile phone that they themselves use (%) | 54.8 | 63.5 | — | 85 |
| 94 | Women age 15-24 years who use hygienic methods of protection during their menstrual | 85.3 | 90.4 | — | 85 |
| 95 | Ever-married women age 18-49 years who have ever experienced spousal violence 19 (%) | 25.2 | 19.2 | — | 85 |
| 96 | Ever-married women age 18-49 years who have experienced physical violence during any | 3.3 | 1.8 | — | 85 |
| 97 | Young women age 18-29 years who experienced sexual violence by age 18 (%) | 1.2 | 0.4 | — | 85 |
| 98 | Women age 15 years and above who use any kind of tobacco (%) | 11.0 | 8.8 | — | 85 |
| 99 | Men age 15 years and above who use any kind of tobacco (%) | 33.8 | 31.3 | — | 85 |
| 100 | Women age 15 years and above who consume alcohol (%) | 0.4 | 0.3 | — | 85 |
| 101 | Men age 15 years and above who consume alcohol (%) | 13.9 | 12.2 | — | 85 |

### Manipur

**NFHS-5** · NFHS5-I · 131 indicator rows.

| Row | Indicator | Total | PDF page |
| --- | --- | --- | --- |
| 1 | Female population age 6 years and above who ever attended school (%) | 84.0 | 88 |
| 2 | Population below age 15 years (%) | 28.0 | 88 |
| 3 | Sex ratio of the total population (females per 1,000 males) | 1,066 | 88 |
| 4 | Sex ratio at birth for children born in the last five years (females per 1,000 males) | 967 | 88 |
| 5 | Children under age 5 years whose birth was registered with the civil authority (%) | 87.4 | 88 |
| 6 | Deaths in the last 3 years registered with the civil authority (%) | 42.1 | 88 |
| 7 | Population living in households with electricity (%) | 98.1 | 88 |
| 8 | Population living in households with an improved drinking-water source1 (%) | 77.1 | 88 |
| 9 | Population living in households that use an improved sanitation facility2 (%) | 64.9 | 88 |
| 10 | Households using clean fuel for cooking3 (%) | 70.4 | 88 |
| 11 | Households using iodized salt (%) | 99.3 | 88 |
| 12 | Households with any usual member covered under a health insurance/financing scheme (%) | 14.2 | 88 |
| 13 | Children age 5 years who attended pre-primary school during the school year 2019-20 (%) | 25.0 | 88 |
| 14 | Women who are literate4 (%) | 87.6 | 88 |
| 15 | Men who are literate4 (%) | 95.2 | 88 |
| 16 | Women with 10 or more years of schooling (%) | 48.1 | 88 |
| 17 | Men with 10 or more years of schooling (%) | 58.7 | 88 |
| 18 | Women who have ever used the internet (%) | 44.8 | 88 |
| 19 | Men who have ever used the internet (%) | 73.9 | 88 |
| 20 | Women age 20-24 years married before age 18 years (%) | 16.3 | 88 |
| 21 | Men age 25-29 years married before age 21 years (%) | 15.3 | 88 |
| 22 | Total fertility rate (children per woman) | 2.2 | 88 |
| 23 | Women age 15-19 years who were already mothers or pregnant at the time of the survey (%) | 8.6 | 88 |
| 24 | Adolescent fertility rate for women age 15-19 years5 | 43 | 88 |
| 25 | Neonatal mortality rate (NNMR) | 17.2 | 88 |
| 26 | Infant mortality rate (IMR) | 25.0 | 88 |
| 27 | Under-five mortality rate (U5MR) | 30.0 | 88 |
| 28 | Any method6 (%) | 61.3 | 88 |
| 29 | Any modern method6 (%) | 18.2 | 88 |
| 30 | Female sterilization (%) | 3.7 | 88 |
| 31 | Male sterilization (%) | 0.0 | 88 |
| 32 | IUD/PPIUD (%) | 4.9 | 88 |
| 33 | Pill (%) | 4.4 | 88 |
| 34 | Condom (%) | 4.8 | 88 |
| 35 | Injectables (%) | 0.1 | 88 |
| 36 | Total unmet need7 (%) | 12.2 | 88 |
| 37 | Unmet need for spacing7 (%) | 4.7 | 88 |
| 38 | Health worker ever talked to female non-users about family planning (%) | 6.0 | 88 |
| 39 | Current users ever told about side effects of current method8 (%) | 45.4 | 88 |
| 40 | Mothers who had an antenatal check-up in the first trimester (%) | 79.9 | 89 |
| 41 | Mothers who had at least 4 antenatal care visits (%) | 79.4 | 89 |
| 42 | Mothers whose last birth was protected against neonatal tetanus9 (%) | 88.9 | 89 |
| 43 | Mothers who consumed iron folic acid for 100 days or more when they were pregnant (%) | 52.3 | 89 |
| 44 | Mothers who consumed iron folic acid for 180 days or more when they were pregnant (%) | 30.3 | 89 |
| 45 | Registered pregnancies for which the mother received a Mother and Child Protection (MCP) card (%) | 72.9 | 89 |
| 46 | Mothers who received postnatal care from a doctor/nurse/LHV/ANM/midwife/other health personnel within 2 days of delivery (%) | 73.4 | 89 |
| 47 | Average out-of-pocket expenditure per delivery in a public health facility (Rs.) | 14,518 | 89 |
| 48 | Children born at home who were taken to a health facility for a check-up within 24 hours of birth (%) | 0.5 | 89 |
| 49 | Children who received postnatal care from a doctor/nurse/LHV/ANM/midwife/other health personnel within 2 days of delivery (%) | 70.3 | 89 |
| 50 | Institutional births (%) | 79.9 | 89 |
| 51 | Institutional births in public facility (%) | 59.4 | 89 |
| 52 | Home births that were conducted by skilled health personnel10 (%) | 5.8 | 89 |
| 53 | Births attended by skilled health personnel10 (%) | 85.6 | 89 |
| 54 | Births delivered by caesarean section (%) | 25.6 | 89 |
| 55 | Births in a private health facility that were delivered by caesarean section (%) | 53.2 | 89 |
| 56 | Births in a public health facility that were delivered by caesarean section (%) | 24.7 | 89 |
| 57 | Children age 12-23 months fully vaccinated based on information from either vaccination card or mother's recall11 (%) | 68.8 | 89 |
| 58 | Children age 12-23 months fully vaccinated based on information from vaccination card only12 (%) | 75.7 | 89 |
| 59 | Children age 12-23 months who have received BCG (%) | 95.4 | 89 |
| 60 | Children age 12-23 months who have received 3 doses of polio vaccine13 (%) | 75.6 | 89 |
| 61 | Children age 12-23 months who have received 3 doses of penta or DPT vaccine (%) | 81.4 | 89 |
| 62 | Children age 12-23 months who have received the first dose of measles-containing vaccine (MCV) (%) | 76.6 | 89 |
| 63 | Children age 24-35 months who have received a second dose of measles-containing vaccine (MCV) (%) | 15.3 | 89 |
| 64 | Children age 12-23 months who have received 3 doses of rotavirus vaccine14 (%) | 6.8 | 89 |
| 65 | Children age 12-23 months who have received 3 doses of penta or hepatitis B vaccine (%) | 80.0 | 89 |
| 66 | Children age 9-59 months who received a vitamin A dose in the last 6 months (%) | 44.4 | 89 |
| 67 | Children age 12-23 months who received most of their vaccinations in a public health facility (%) | 92.3 | 89 |
| 68 | Children age 12-23 months who received most of their vaccinations in a private health facility (%) | 5.6 | 89 |
| 69 | Prevalence of diarrhoea in the 2 weeks preceding the survey (%) | 5.6 | 89 |
| 70 | Children with diarrhoea in the 2 weeks preceding the survey who received oral rehydration salts (ORS) (%) | 69.8 | 89 |
| 71 | Children with diarrhoea in the 2 weeks preceding the survey who received zinc (%) | 26.1 | 89 |
| 72 | Children with diarrhoea in the 2 weeks preceding the survey taken to a health facility or health provider (%) | 48.2 | 89 |
| 73 | Prevalence of symptoms of acute respiratory infection (ARI) in the 2 weeks preceding the survey (%) | 1.8 | 89 |
| 74 | Children with fever or symptoms of ARI in the 2 weeks preceding the survey taken to a health facility or health provider (%) | 41.2 | 89 |
| 75 | Children under age 3 years breastfed within one hour of birth15 (%) | 53.7 | 90 |
| 76 | Children under age 6 months exclusively breastfed16 (%) | 70.7 | 90 |
| 77 | Children age 6-8 months receiving solid or semi-solid food and breastmilk16 (%) | 78.9 | 90 |
| 78 | Breastfeeding children age 6-23 months receiving an adequate diet16, 17 (%) | 19.3 | 90 |
| 79 | Non-breastfeeding children age 6-23 months receiving an adequate diet16, 17 (%) | 22.4 | 90 |
| 80 | Total children age 6-23 months receiving an adequate diet16, 17 (%) | 19.6 | 90 |
| 81 | Children under 5 years who are stunted (height-for-age)18 (%) | 23.4 | 90 |
| 82 | Children under 5 years who are wasted (weight-for-height)18 (%) | 9.9 | 90 |
| 83 | Children under 5 years who are severely wasted (weight-for-height)19 (%) | 3.4 | 90 |
| 84 | Children under 5 years who are underweight (weight-for-age)18 (%) | 13.3 | 90 |
| 85 | Children under 5 years who are overweight (weight-for-height)20 (%) | 3.4 | 90 |
| 86 | Women whose Body Mass Index (BMI) is below normal (BMI <18.5 kg/m2)21 (%) | 7.2 | 90 |
| 87 | Men whose Body Mass Index (BMI) is below normal (BMI <18.5 kg/m2) (%) | 8.0 | 90 |
| 88 | Women who are overweight or obese (BMI ≥25.0 kg/m2)21 (%) | 34.1 | 90 |
| 89 | Men who are overweight or obese (BMI ≥25.0 kg/m2) (%) | 30.3 | 90 |
| 90 | Women who have high risk waist-to-hip ratio (≥0.85) (%) | 65.7 | 90 |
| 91 | Men who have high risk waist-to-hip ratio (≥0.90) (%) | 48.7 | 90 |
| 92 | Children age 6-59 months who are anaemic (<11.0 g/dl)22 (%) | 42.8 | 90 |
| 93 | Non-pregnant women age 15-49 years who are anaemic (<12.0 g/dl)22 (%) | 29.3 | 90 |
| 94 | Pregnant women age 15-49 years who are anaemic (<11.0 g/dl)22 (%) | 32.4 | 90 |
| 95 | All women age 15-49 years who are anaemic22 (%) | 29.4 | 90 |
| 96 | All women age 15-19 years who are anaemic22 (%) | 27.9 | 90 |
| 97 | Men age 15-49 years who are anaemic (<13.0 g/dl)22 (%) | 6.0 | 90 |
| 98 | Men age 15-19 years who are anaemic (<13.0 g/dl)22 (%) | 7.8 | 90 |
| 99 | Blood sugar level - high (141-160 mg/dl)23 (%) | 6.2 | 90 |
| 100 | Blood sugar level - very high (>160 mg/dl)23 (%) | 6.3 | 90 |
| 101 | Blood sugar level - high or very high (>140 mg/dl) or taking medicine to control blood sugar level23 (%) | 13.6 | 90 |
| 102 | Blood sugar level - high (141-160 mg/dl)23 (%) | 7.0 | 90 |
| 103 | Blood sugar level - very high (>160 mg/dl)23 (%) | 8.3 | 90 |
| 104 | Blood sugar level - high or very high (>140 mg/dl) or taking medicine to control blood sugar level23 (%) | 16.5 | 90 |
| 105 | Mildly elevated blood pressure (Systolic 140-159 mm of Hg and/or Diastolic 90-99 mm of Hg) (%) | 13.6 | 90 |
| 106 | Moderately or severely elevated blood pressure (Systolic ≥160 mm of Hg and/or Diastolic ≥100 mm of Hg) (%) | 5.9 | 90 |
| 107 | Elevated blood pressure (Systolic ≥140 mm of Hg and/or Diastolic ≥90 mm of Hg) or taking medicine to control blood pressure (%) | 23.0 | 90 |
| 108 | Mildly elevated blood pressure (Systolic 140-159 mm of Hg and/or Diastolic 90-99 mm of Hg) (%) | 20.8 | 90 |
| 109 | Moderately or severely elevated blood pressure (Systolic ≥160 mm of Hg and/or Diastolic ≥100 mm of Hg) (%) | 9.3 | 90 |
| 110 | Elevated blood pressure (Systolic ≥140 mm of Hg and/or Diastolic ≥90 mm of Hg) or taking medicine to control blood pressure (%) | 33.2 | 90 |
| 111 | Ever undergone a screening test for cervical cancer (%) | 2.1 | 91 |
| 112 | Ever undergone a breast examination for breast cancer (%) | 1.6 | 91 |
| 113 | Ever undergone an oral cavity examination for oral cancer (%) | 1.0 | 91 |
| 114 | Ever undergone an oral cavity examination for oral cancer (%) | 0.8 | 91 |
| 115 | Women who have comprehensive knowledge24 of HIV/AIDS (%) | 50.6 | 91 |
| 116 | Men who have comprehensive knowledge24 of HIV/AIDS (%) | 55.9 | 91 |
| 117 | Women who know that consistent condom use can reduce the chance of getting HIV/AIDS (%) | 87.8 | 91 |
| 118 | Men who know that consistent condom use can reduce the chance of getting HIV/AIDS (%) | 94.3 | 91 |
| 119 | Currently married women who usually participate in three household decisions25 (%) | 94.8 | 91 |
| 120 | Women who worked in the last 12 months and were paid in cash (%) | 42.1 | 91 |
| 121 | Women owning a house and/or land (alone or jointly with others) (%) | 58.4 | 91 |
| 122 | Women having a bank or savings account that they themselves use (%) | 74.0 | 91 |
| 123 | Women having a mobile phone that they themselves use (%) | 72.2 | 91 |
| 124 | Women age 15-24 years who use hygienic methods of protection during their menstrual period26 (%) | 82.9 | 91 |
| 125 | Ever-married women age 18-49 years who have ever experienced spousal violence27 (%) | 39.6 | 91 |
| 126 | Ever-married women age 18-49 years who have experienced physical violence during any pregnancy (%) | 2.9 | 91 |
| 127 | Young women age 18-29 years who experienced sexual violence by age 18 (%) | 5.4 | 91 |
| 128 | Women age 15 years and above who use any kind of tobacco (%) | 43.1 | 91 |
| 129 | Men age 15 years and above who use any kind of tobacco (%) | 58.1 | 91 |
| 130 | Women age 15 years and above who consume alcohol (%) | 0.9 | 91 |
| 131 | Men age 15 years and above who consume alcohol (%) | 37.5 | 91 |

**NFHS-6** · No published fact sheet.


### Meghalaya

**NFHS-5** · NFHS5-I · 131 indicator rows.

| Row | Indicator | Total | PDF page |
| --- | --- | --- | --- |
| 1 | Female population age 6 years and above who ever attended school (%) | 85.9 | 96 |
| 2 | Population below age 15 years (%) | 37.3 | 96 |
| 3 | Sex ratio of the total population (females per 1,000 males) | 1,039 | 96 |
| 4 | Sex ratio at birth for children born in the last five years (females per 1,000 males) | 989 | 96 |
| 5 | Children under age 5 years whose birth was registered with the civil authority (%) | 82.1 | 96 |
| 6 | Deaths in the last 3 years registered with the civil authority (%) | 54.4 | 96 |
| 7 | Population living in households with electricity (%) | 91.9 | 96 |
| 8 | Population living in households with an improved drinking-water source1 (%) | 79.2 | 96 |
| 9 | Population living in households that use an improved sanitation facility2 (%) | 82.9 | 96 |
| 10 | Households using clean fuel for cooking3 (%) | 33.7 | 96 |
| 11 | Households using iodized salt (%) | 90.6 | 96 |
| 12 | Households with any usual member covered under a health insurance/financing scheme (%) | 63.5 | 96 |
| 13 | Children age 5 years who attended pre-primary school during the school year 2019-20 (%) | 31.2 | 96 |
| 14 | Women who are literate4 (%) | 88.2 | 96 |
| 15 | Men who are literate4 (%) | 83.7 | 96 |
| 16 | Women with 10 or more years of schooling (%) | 35.1 | 96 |
| 17 | Men with 10 or more years of schooling (%) | 34.7 | 96 |
| 18 | Women who have ever used the internet (%) | 34.7 | 96 |
| 19 | Men who have ever used the internet (%) | 42.1 | 96 |
| 20 | Women age 20-24 years married before age 18 years (%) | 16.9 | 96 |
| 21 | Men age 25-29 years married before age 21 years (%) | 17.9 | 96 |
| 22 | Total fertility rate (children per woman) | 2.9 | 96 |
| 23 | Women age 15-19 years who were already mothers or pregnant at the time of the survey (%) | 7.2 | 96 |
| 24 | Adolescent fertility rate for women age 15-19 years5 | 49 | 96 |
| 25 | Neonatal mortality rate (NNMR) | 19.8 | 96 |
| 26 | Infant mortality rate (IMR) | 32.3 | 96 |
| 27 | Under-five mortality rate (U5MR) | 40.0 | 96 |
| 28 | Any method6 (%) | 27.4 | 96 |
| 29 | Any modern method6 (%) | 22.5 | 96 |
| 30 | Female sterilization (%) | 5.6 | 96 |
| 31 | Male sterilization (%) | 0.0 | 96 |
| 32 | IUD/PPIUD (%) | 4.4 | 96 |
| 33 | Pill (%) | 8.3 | 96 |
| 34 | Condom (%) | 2.7 | 96 |
| 35 | Injectables (%) | 1.1 | 96 |
| 36 | Total unmet need7 (%) | 26.9 | 96 |
| 37 | Unmet need for spacing7 (%) | 18.3 | 96 |
| 38 | Health worker ever talked to female non-users about family planning (%) | 27.4 | 96 |
| 39 | Current users ever told about side effects of current method8 (%) | 67.2 | 96 |
| 40 | Mothers who had an antenatal check-up in the first trimester (%) | 53.9 | 97 |
| 41 | Mothers who had at least 4 antenatal care visits (%) | 52.2 | 97 |
| 42 | Mothers whose last birth was protected against neonatal tetanus9 (%) | 82.1 | 97 |
| 43 | Mothers who consumed iron folic acid for 100 days or more when they were pregnant (%) | 43.1 | 97 |
| 44 | Mothers who consumed iron folic acid for 180 days or more when they were pregnant (%) | 20.6 | 97 |
| 45 | Registered pregnancies for which the mother received a Mother and Child Protection (MCP) card (%) | 93.3 | 97 |
| 46 | Mothers who received postnatal care from a doctor/nurse/LHV/ANM/midwife/other health personnel within 2 days of delivery (%) | 43.9 | 97 |
| 47 | Average out-of-pocket expenditure per delivery in a public health facility (Rs.) | 3,219 | 97 |
| 48 | Children born at home who were taken to a health facility for a check-up within 24 hours of birth (%) | 1.6 | 97 |
| 49 | Children who received postnatal care from a doctor/nurse/LHV/ANM/midwife/other health personnel within 2 days of delivery (%) | 44.9 | 97 |
| 50 | Institutional births (%) | 58.1 | 97 |
| 51 | Institutional births in public facility (%) | 49.1 | 97 |
| 52 | Home births that were conducted by skilled health personnel10 (%) | 6.6 | 97 |
| 53 | Births attended by skilled health personnel10 (%) | 64.0 | 97 |
| 54 | Births delivered by caesarean section (%) | 8.2 | 97 |
| 55 | Births in a private health facility that were delivered by caesarean section (%) | 40.8 | 97 |
| 56 | Births in a public health facility that were delivered by caesarean section (%) | 9.2 | 97 |
| 57 | Children age 12-23 months fully vaccinated based on information from either vaccination card or mother's recall11 (%) | 63.8 | 97 |
| 58 | Children age 12-23 months fully vaccinated based on information from vaccination card only12 (%) | 80.0 | 97 |
| 59 | Children age 12-23 months who have received BCG (%) | 89.3 | 97 |
| 60 | Children age 12-23 months who have received 3 doses of polio vaccine13 (%) | 68.5 | 97 |
| 61 | Children age 12-23 months who have received 3 doses of penta or DPT vaccine (%) | 73.1 | 97 |
| 62 | Children age 12-23 months who have received the first dose of measles-containing vaccine (MCV) (%) | 72.5 | 97 |
| 63 | Children age 24-35 months who have received a second dose of measles-containing vaccine (MCV) (%) | 14.2 | 97 |
| 64 | Children age 12-23 months who have received 3 doses of rotavirus vaccine14 (%) | 4.1 | 97 |
| 65 | Children age 12-23 months who have received 3 doses of penta or hepatitis B vaccine (%) | 65.7 | 97 |
| 66 | Children age 9-59 months who received a vitamin A dose in the last 6 months (%) | 60.9 | 97 |
| 67 | Children age 12-23 months who received most of their vaccinations in a public health facility (%) | 93.6 | 97 |
| 68 | Children age 12-23 months who received most of their vaccinations in a private health facility (%) | 3.5 | 97 |
| 69 | Prevalence of diarrhoea in the 2 weeks preceding the survey (%) | 10.4 | 97 |
| 70 | Children with diarrhoea in the 2 weeks preceding the survey who received oral rehydration salts (ORS) (%) | 73.2 | 97 |
| 71 | Children with diarrhoea in the 2 weeks preceding the survey who received zinc (%) | 40.5 | 97 |
| 72 | Children with diarrhoea in the 2 weeks preceding the survey taken to a health facility or health provider (%) | 69.2 | 97 |
| 73 | Prevalence of symptoms of acute respiratory infection (ARI) in the 2 weeks preceding the survey (%) | 4.8 | 97 |
| 74 | Children with fever or symptoms of ARI in the 2 weeks preceding the survey taken to a health facility or health provider (%) | 72.9 | 97 |
| 75 | Children under age 3 years breastfed within one hour of birth15 (%) | 78.8 | 98 |
| 76 | Children under age 6 months exclusively breastfed16 (%) | 42.7 | 98 |
| 77 | Children age 6-8 months receiving solid or semi-solid food and breastmilk16 (%) | 66.8 | 98 |
| 78 | Breastfeeding children age 6-23 months receiving an adequate diet16, 17 (%) | 29.0 | 98 |
| 79 | Non-breastfeeding children age 6-23 months receiving an adequate diet16, 17 (%) | 32.5 | 98 |
| 80 | Total children age 6-23 months receiving an adequate diet16, 17 (%) | 29.8 | 98 |
| 81 | Children under 5 years who are stunted (height-for-age)18 (%) | 46.5 | 98 |
| 82 | Children under 5 years who are wasted (weight-for-height)18 (%) | 12.1 | 98 |
| 83 | Children under 5 years who are severely wasted (weight-for-height)19 (%) | 4.7 | 98 |
| 84 | Children under 5 years who are underweight (weight-for-age)18 (%) | 26.6 | 98 |
| 85 | Children under 5 years who are overweight (weight-for-height)20 (%) | 4.0 | 98 |
| 86 | Women whose Body Mass Index (BMI) is below normal (BMI <18.5 kg/m2)21 (%) | 10.8 | 98 |
| 87 | Men whose Body Mass Index (BMI) is below normal (BMI <18.5 kg/m2) (%) | 9.0 | 98 |
| 88 | Women who are overweight or obese (BMI ≥25.0 kg/m2)21 (%) | 11.5 | 98 |
| 89 | Men who are overweight or obese (BMI ≥25.0 kg/m2) (%) | 13.9 | 98 |
| 90 | Women who have high risk waist-to-hip ratio (≥0.85) (%) | 60.6 | 98 |
| 91 | Men who have high risk waist-to-hip ratio (≥0.90) (%) | 24.7 | 98 |
| 92 | Children age 6-59 months who are anaemic (<11.0 g/dl)22 (%) | 45.1 | 98 |
| 93 | Non-pregnant women age 15-49 years who are anaemic (<12.0 g/dl)22 (%) | 54.4 | 98 |
| 94 | Pregnant women age 15-49 years who are anaemic (<11.0 g/dl)22 (%) | 45.0 | 98 |
| 95 | All women age 15-49 years who are anaemic22 (%) | 53.8 | 98 |
| 96 | All women age 15-19 years who are anaemic22 (%) | 52.5 | 98 |
| 97 | Men age 15-49 years who are anaemic (<13.0 g/dl)22 (%) | 25.5 | 98 |
| 98 | Men age 15-19 years who are anaemic (<13.0 g/dl)22 (%) | 30.1 | 98 |
| 99 | Blood sugar level - high (141-160 mg/dl)23 (%) | 5.0 | 98 |
| 100 | Blood sugar level - very high (>160 mg/dl)23 (%) | 3.0 | 98 |
| 101 | Blood sugar level - high or very high (>140 mg/dl) or taking medicine to control blood sugar level23 (%) | 9.5 | 98 |
| 102 | Blood sugar level - high (141-160 mg/dl)23 (%) | 8.6 | 98 |
| 103 | Blood sugar level - very high (>160 mg/dl)23 (%) | 4.2 | 98 |
| 104 | Blood sugar level - high or very high (>140 mg/dl) or taking medicine to control blood sugar level23 (%) | 13.9 | 98 |
| 105 | Mildly elevated blood pressure (Systolic 140-159 mm of Hg and/or Diastolic 90-99 mm of Hg) (%) | 10.0 | 98 |
| 106 | Moderately or severely elevated blood pressure (Systolic ≥160 mm of Hg and/or Diastolic ≥100 mm of Hg) (%) | 3.9 | 98 |
| 107 | Elevated blood pressure (Systolic ≥140 mm of Hg and/or Diastolic ≥90 mm of Hg) or taking medicine to control blood pressure (%) | 18.7 | 98 |
| 108 | Mildly elevated blood pressure (Systolic 140-159 mm of Hg and/or Diastolic 90-99 mm of Hg) (%) | 14.2 | 98 |
| 109 | Moderately or severely elevated blood pressure (Systolic ≥160 mm of Hg and/or Diastolic ≥100 mm of Hg) (%) | 3.8 | 98 |
| 110 | Elevated blood pressure (Systolic ≥140 mm of Hg and/or Diastolic ≥90 mm of Hg) or taking medicine to control blood pressure (%) | 21.4 | 98 |
| 111 | Ever undergone a screening test for cervical cancer (%) | 0.6 | 99 |
| 112 | Ever undergone a breast examination for breast cancer (%) | 0.5 | 99 |
| 113 | Ever undergone an oral cavity examination for oral cancer (%) | 0.4 | 99 |
| 114 | Ever undergone an oral cavity examination for oral cancer (%) | 1.2 | 99 |
| 115 | Women who have comprehensive knowledge24 of HIV/AIDS (%) | 14.5 | 99 |
| 116 | Men who have comprehensive knowledge24 of HIV/AIDS (%) | 15.9 | 99 |
| 117 | Women who know that consistent condom use can reduce the chance of getting HIV/AIDS (%) | 54.1 | 99 |
| 118 | Men who know that consistent condom use can reduce the chance of getting HIV/AIDS (%) | 62.7 | 99 |
| 119 | Currently married women who usually participate in three household decisions25 (%) | 92.3 | 99 |
| 120 | Women who worked in the last 12 months and were paid in cash (%) | 40.0 | 99 |
| 121 | Women owning a house and/or land (alone or jointly with others) (%) | 65.0 | 99 |
| 122 | Women having a bank or savings account that they themselves use (%) | 70.4 | 99 |
| 123 | Women having a mobile phone that they themselves use (%) | 67.5 | 99 |
| 124 | Women age 15-24 years who use hygienic methods of protection during their menstrual period26 (%) | 64.9 | 99 |
| 125 | Ever-married women age 18-49 years who have ever experienced spousal violence27 (%) | 16.0 | 99 |
| 126 | Ever-married women age 18-49 years who have experienced physical violence during any pregnancy (%) | 1.6 | 99 |
| 127 | Young women age 18-29 years who experienced sexual violence by age 18 (%) | 6.7 | 99 |
| 128 | Women age 15 years and above who use any kind of tobacco (%) | 28.2 | 99 |
| 129 | Men age 15 years and above who use any kind of tobacco (%) | 57.7 | 99 |
| 130 | Women age 15 years and above who consume alcohol (%) | 1.5 | 99 |
| 131 | Men age 15 years and above who consume alcohol (%) | 32.4 | 99 |

**NFHS-6** · 101 extracted indicator rows.

| Row | Indicator | NFHS-5 Total as printed in NFHS-6 | NFHS-6 Total | Reviewed change | PDF page |
| --- | --- | --- | --- | --- | --- |
| 1 | Population below age 5 years (%) | 12.1 | 8.9 | — | 87 |
| 2 | Population below age 15 years (%) | 37.3 | 34.1 | — | 87 |
| 3 | Population age 60 years and above (%) | 4.9 | 6.8 | — | 87 |
| 4 | Household electricity access | 91.9 | 95.9 | +4.0 | 87 |
| 5 | Population living in households with an improved drinking-water source 1 (%) | 79.2 | 84.3 | — | 87 |
| 6 | Households using iodized salt (%) | 90.6 | 94.6 | — | 87 |
| 7 | Households with any usual member covered under a health insurance/financing scheme (%) | 69.0 | 74.9 | — | 87 |
| 8 | Households with any usual member having a bank account/post office account (%) | 90.0 | 93.5 | — | 87 |
| 9 | Female population age 6+ ever attended school | 85.9 | 82.6 | -3.3 | 87 |
| 10 | Households with any usual female members owning a house and/or land (alone or jointly with | 63.8 | 65.3 | — | 87 |
| 11 | Children age 2-4 years who attended pre-school (%) | 27.7 | 23.6 | — | 87 |
| 12 | Women with 10 or more years of schooling | 35.1 | 37.5 | +2.4 | 87 |
| 13 | Men with 10 or more years of schooling | 34.7 | 35.9 | +1.2 | 87 |
| 14 | Women who have ever used the internet (%) | 34.7 | 59.0 | — | 87 |
| 15 | Men who have ever used the internet (%) | 36.5 | 68.7 | — | 87 |
| 16 | Women age 20–24 married before age 18 | 16.9 | 13.8 | -3.1 | 87 |
| 17 | Men age 25-29 years married before age 21 years (%) | 17.9 | 18.4 | — | 87 |
| 18 | Total fertility rate, children per woman | 2.9 | 2.2 | -0.7 | 87 |
| 19 | Women age 15-19 years who were already mothers or pregnant at the time of the survey (%) | 7.2 | 4.6 | — | 87 |
| 20 | Any method2 (%) | 27.4 | 42.1 | — | 87 |
| 21 | Any modern method2 (%) | 22.5 | 30.2 | — | 87 |
| 22 | Any traditional method (%) | 4.9 | 11.9 | — | 87 |
| 23 | Female sterilization (%) | 5.6 | 7.1 | — | 87 |
| 24 | Male sterilization (%) | 0.0 | 0.1 | — | 87 |
| 25 | Total unmet need for family planning | 26.9 | 21.0 | -5.9 | 87 |
| 26 | Unmet need for spacing 3 (%) | 18.3 | 18.4 | — | 87 |
| 27 | Unmet need for limiting3 (%) | 8.6 | 2.6 | — | 87 |
| 28 | First-trimester antenatal check-up | 53.9 | 57.9 | +4.0 | 87 |
| 29 | Mothers who had any antenatal care visits (%) | 82.4 | 90.6 | — | 87 |
| 30 | At least four antenatal care visits | 52.2 | 53.2 | +1.0 | 87 |
| 31 | Mothers whose last birth was protected against neonatal tetanus 4 (%) | 82.1 | 88.1 | — | 87 |
| 32 | Mothers who consumed iron folic acid for 100 days or more when they were pregnant (%) | 43.1 | 62.7 | — | 87 |
| 33 | Mothers who consumed iron folic acid for 180 days or more when they were pregnant (%) | 20.6 | 40.8 | — | 87 |
| 34 | Registered pregnancies for which the mother received a Mother and Child Protection (MCP) | 93.3 | 98.1 | — | 87 |
| 35 | Institutional births | 58.1 | 65.6 | +7.5 | 87 |
| 36 | Institutional births in public facility (%) | 49.1 | 55.7 | — | 87 |
| 37 | Births attended by skilled health personnel | 64.0 | 70.9 | +6.9 | 87 |
| 38 | Caesarean births | 8.2 | 6.4 | -1.8 | 87 |
| 39 | Births in a private health facility that were delivered by caesarean section (%) | 40.8 | 36.2 | — | 87 |
| 40 | Births in a public health facility that were delivered by caesarean section (%) | 9.2 | 5.0 | — | 87 |
| 41 | Mothers who received postnatal care from a doctor/nurse/LHV/ANM/midwife/other health | 43.9 | 51.9 | — | 88 |
| 42 | Children born at home who were taken to a health facility for a check-up within 24 hours of | 1.6 | 2.4 | — | 88 |
| 43 | Children who received postnatal care from a doctor/nurse/LHV/ANM/midwife/ other health | 44.9 | 53.8 | — | 88 |
| 44 | Full vaccination, card or maternal recall | 64.0 | 75.3 | — | 88 |
| 45 | Full vaccination, card only | 80.0 | 84.9 | +4.9 | 88 |
| 46 | Children age 12-23 months who have received any vaccine (%) | 90.6 | 91.3 | — | 88 |
| 47 | BCG vaccination | 89.3 | 90.4 | +1.1 | 88 |
| 48 | Children age 12-23 months who have received 3 doses of polio vaccine 8 (%) | 68.5 | 78.2 | — | 88 |
| 49 | Children age 12-23 months who have received 3 doses of pentavalent vaccine (%) | 73.5 | 79.3 | — | 88 |
| 50 | Children age 12-23 months who have received the first dose of measles-containing | 72.5 | 83.2 | — | 88 |
| 51 | Children age 24-35 months who have received a second dose of measles-containing | 25.9 | 60.0 | — | 88 |
| 52 | Children age 12-23 months who have received birth dose of hepatitis B vaccine (%) | 46.5 | 67.5 | — | 88 |
| 53 | Children age 12-23 months who have received 3 doses of rotavirus vaccine (%) | 4.1 | 77.2 | — | 88 |
| 54 | Children age 9-35 months who received a vitamin A dose in the last 6 months (%) | 61.0 | 77.0 | — | 88 |
| 55 | Children age 12-23 months who received most of their vaccinations in a public health | 93.6 | 94.2 | — | 88 |
| 56 | Children age 12-23 months who received most of their vaccinations in a private health | 3.5 | 3.3 | — | 88 |
| 57 | Prevalence of diarrhoea in the 2 weeks preceding the survey (%) | 10.4 | 3.6 | — | 88 |
| 58 | Prevalence of severe diarrhoea in the 2 weeks preceding the survey (%) | 1.4 | 0.7 | — | 88 |
| 59 | Prevalence of symptoms of acute respiratory infection (ARI) in the 2 weeks preceding the | 4.8 | 1.0 | — | 88 |
| 60 | Children with fever or symptoms of ARI in the 2 weeks preceding the survey taken to a health | 72.9 | 65.3 | — | 88 |
| 61 | Children under age 3 years breastfed within one hour of birth 9 (%) | 78.8 | 76.4 | — | 88 |
| 62 | Children under age 6 months exclusively breastfed 10 (%) | 42.7 | 46.8 | — | 88 |
| 63 | Children under age 6 months currently breastfeeding 10 (%) | 97.0 | 97.1 | — | 88 |
| 64 | Children under age 6 months exclusively breastfed or breastfeeding and consuming plain | 74.9 | 76.4 | — | 88 |
| 65 | Children age 6-8 months receiving solid or semi-solid food and breastmilk 10 (%) | 66.8 | 64.3 | — | 88 |
| 66 | Breastfeeding children age 6-23 months receiving an adequate diet 10, 11 (%) | 28.7 | 16.3 | — | 88 |
| 67 | Non-breastfeeding children age 6-23 months receiving an adequate diet 10, 11 (%) | 27.7 | 35.0 | — | 88 |
| 68 | Total children age 6-23 months receiving an adequate diet 10, 11 (%) | 28.5 | 18.9 | — | 88 |
| 69 | Child stunting | 46.5 | 36.8 | -9.7 | 88 |
| 70 | Child wasting | 12.1 | 13.2 | +1.1 | 88 |
| 71 | Severe child wasting | 4.7 | 6.2 | +1.5 | 88 |
| 72 | Child underweight | 26.6 | 25.3 | -1.3 | 88 |
| 73 | Child overweight | 4.0 | 2.6 | -1.4 | 88 |
| 74 | Women whose Body Mass Index (BMI) is below normal (BMI <18.5 kg/m 2)15 (%) | 10.8 | 9.1 | — | 89 |
| 75 | Men whose Body Mass Index (BMI) is below normal (BMI <18.5 kg/m 2) (%) | 9.0 | 7.1 | — | 89 |
| 76 | Women aged 15–49 overweight or obese (BMI ≥25), % | 11.5 | 13.8 | — | IIPS fact sheet |
| 77 | Men aged 15–49 overweight or obese (BMI ≥25), % | 13.9 | 15.6 | — | IIPS fact sheet |
| 78 | Blood sugar level - high (141-160 mg/dl)16 (%) | 5.0 | 4.0 | — | 89 |
| 79 | Blood sugar level - very high (>160 mg/dl)16 (%) | 3.0 | 2.7 | — | 89 |
| 80 | Blood sugar level - high or very high (>140 mg/dl) or taking medicine to control blood | 9.5 | 7.1 | — | 89 |
| 81 | Blood sugar level - high (141-160 mg/dl)16 (%) | 8.6 | 3.8 | — | 89 |
| 82 | Blood sugar level - very high (>160 mg/dl)16 (%) | 4.2 | 2.8 | — | 89 |
| 83 | Blood sugar level - high or very high (>140 mg/dl) or taking medicine to control blood sugar | 13.9 | 6.8 | — | 89 |
| 84 | Mildly elevated blood pressure (Systolic 140-159 mm of Hg and/or | 10.0 | 10.8 | — | 89 |
| 85 | Women aged 15+ with moderately or severely elevated blood pressure, % | 3.9 | 4.3 | — | IIPS fact sheet |
| 86 | Women aged 15+ with elevated blood pressure or taking medicine for it, % | 18.7 | 16.9 | — | IIPS fact sheet |
| 87 | Mildly elevated blood pressure (Systolic 140-159 mm of Hg and/or | 14.2 | 13.8 | — | 89 |
| 88 | Men aged 15+ with moderately or severely elevated blood pressure, % | 3.8 | 2.1 | — | IIPS fact sheet |
| 89 | Men aged 15+ with elevated blood pressure or taking medicine for it, % | 21.4 | 19.1 | — | IIPS fact sheet |
| 90 | Currently married women who usually participate in three household decisions 17 (%) | 92.3 | 89.5 | — | 89 |
| 91 | Women who worked in the last 12 months and were paid in cash (%) | 40.0 | 43.9 | — | 89 |
| 92 | Women having a bank or savings account that they themselves use (%) | 70.4 | 81.5 | — | 89 |
| 93 | Women having a mobile phone that they themselves use (%) | 67.5 | 80.6 | — | 89 |
| 94 | Women age 15-24 years who use hygienic methods of protection during their menstrual | 65.3 | 68.7 | — | 89 |
| 95 | Ever-married women age 18-49 years who have ever experienced spousal violence 19 (%) | 15.0 | 5.9 | — | 89 |
| 96 | Ever-married women age 18-49 years who have experienced physical violence during any | 1.6 | 0.9 | — | 89 |
| 97 | Young women age 18-29 years who experienced sexual violence by age 18 (%) | 0.5 | 0.0 | — | 89 |
| 98 | Women age 15 years and above who use any kind of tobacco (%) | 28.3 | 34.6 | — | 89 |
| 99 | Men age 15 years and above who use any kind of tobacco (%) | 57.8 | 57.8 | — | 89 |
| 100 | Women age 15 years and above who consume alcohol (%) | 1.5 | 1.2 | — | 89 |
| 101 | Men age 15 years and above who consume alcohol (%) | 32.4 | 28.3 | — | 89 |

### Mizoram

**NFHS-5** · NFHS5-I · 131 indicator rows.

| Row | Indicator | Total | PDF page |
| --- | --- | --- | --- |
| 1 | Female population age 6 years and above who ever attended school (%) | 93.2 | 104 |
| 2 | Population below age 15 years (%) | 27.3 | 104 |
| 3 | Sex ratio of the total population (females per 1,000 males) | 1,018 | 104 |
| 4 | Sex ratio at birth for children born in the last five years (females per 1,000 males) | 969 | 104 |
| 5 | Children under age 5 years whose birth was registered with the civil authority (%) | 99.4 | 104 |
| 6 | Deaths in the last 3 years registered with the civil authority (%) | 88.4 | 104 |
| 7 | Population living in households with electricity (%) | 98.2 | 104 |
| 8 | Population living in households with an improved drinking-water source1 (%) | 95.8 | 104 |
| 9 | Population living in households that use an improved sanitation facility2 (%) | 95.3 | 104 |
| 10 | Households using clean fuel for cooking3 (%) | 83.8 | 104 |
| 11 | Households using iodized salt (%) | 99.0 | 104 |
| 12 | Households with any usual member covered under a health insurance/financing scheme (%) | 46.4 | 104 |
| 13 | Children age 5 years who attended pre-primary school during the school year 2019-20 (%) | 5.0 | 104 |
| 14 | Women who are literate4 (%) | 94.4 | 104 |
| 15 | Men who are literate4 (%) | 97.1 | 104 |
| 16 | Women with 10 or more years of schooling (%) | 50.0 | 104 |
| 17 | Men with 10 or more years of schooling (%) | 49.1 | 104 |
| 18 | Women who have ever used the internet (%) | 67.6 | 104 |
| 19 | Men who have ever used the internet (%) | 79.7 | 104 |
| 20 | Women age 20-24 years married before age 18 years (%) | 8.0 | 104 |
| 21 | Men age 25-29 years married before age 21 years (%) | 11.0 | 104 |
| 22 | Total fertility rate (children per woman) | 1.9 | 104 |
| 23 | Women age 15-19 years who were already mothers or pregnant at the time of the survey (%) | 4.1 | 104 |
| 24 | Adolescent fertility rate for women age 15-19 years5 | 22 | 104 |
| 25 | Neonatal mortality rate (NNMR) | 11.4 | 104 |
| 26 | Infant mortality rate (IMR) | 21.3 | 104 |
| 27 | Under-five mortality rate (U5MR) | 24.0 | 104 |
| 28 | Any method6 (%) | 31.2 | 104 |
| 29 | Any modern method6 (%) | 30.8 | 104 |
| 30 | Female sterilization (%) | 13.0 | 104 |
| 31 | Male sterilization (%) | 0.0 | 104 |
| 32 | IUD/PPIUD (%) | 2.8 | 104 |
| 33 | Pill (%) | 12.9 | 104 |
| 34 | Condom (%) | 1.9 | 104 |
| 35 | Injectables (%) | 0.1 | 104 |
| 36 | Total unmet need7 (%) | 18.9 | 104 |
| 37 | Unmet need for spacing7 (%) | 12.8 | 104 |
| 38 | Health worker ever talked to female non-users about family planning (%) | 14.5 | 104 |
| 39 | Current users ever told about side effects of current method8 (%) | 58.4 | 104 |
| 40 | Mothers who had an antenatal check-up in the first trimester (%) | 72.7 | 105 |
| 41 | Mothers who had at least 4 antenatal care visits (%) | 58.0 | 105 |
| 42 | Mothers whose last birth was protected against neonatal tetanus9 (%) | 80.0 | 105 |
| 43 | Mothers who consumed iron folic acid for 100 days or more when they were pregnant (%) | 61.9 | 105 |
| 44 | Mothers who consumed iron folic acid for 180 days or more when they were pregnant (%) | 10.5 | 105 |
| 45 | Registered pregnancies for which the mother received a Mother and Child Protection (MCP) card (%) | 96.1 | 105 |
| 46 | Mothers who received postnatal care from a doctor/nurse/LHV/ANM/midwife/other health personnel within 2 days of delivery (%) | 68.0 | 105 |
| 47 | Average out-of-pocket expenditure per delivery in a public health facility (Rs.) | 7,008 | 105 |
| 48 | Children born at home who were taken to a health facility for a check-up within 24 hours of birth (%) | 2.0 | 105 |
| 49 | Children who received postnatal care from a doctor/nurse/LHV/ANM/midwife/other health personnel within 2 days of delivery (%) | 36.9 | 105 |
| 50 | Institutional births (%) | 85.8 | 105 |
| 51 | Institutional births in public facility (%) | 73.8 | 105 |
| 52 | Home births that were conducted by skilled health personnel10 (%) | 3.5 | 105 |
| 53 | Births attended by skilled health personnel10 (%) | 87.7 | 105 |
| 54 | Births delivered by caesarean section (%) | 10.8 | 105 |
| 55 | Births in a private health facility that were delivered by caesarean section (%) | 30.4 | 105 |
| 56 | Births in a public health facility that were delivered by caesarean section (%) | 9.8 | 105 |
| 57 | Children age 12-23 months fully vaccinated based on information from either vaccination card or mother's recall11 (%) | 72.5 | 105 |
| 58 | Children age 12-23 months fully vaccinated based on information from vaccination card only12 (%) | 83.7 | 105 |
| 59 | Children age 12-23 months who have received BCG (%) | 83.4 | 105 |
| 60 | Children age 12-23 months who have received 3 doses of polio vaccine13 (%) | 76.2 | 105 |
| 61 | Children age 12-23 months who have received 3 doses of penta or DPT vaccine (%) | 80.7 | 105 |
| 62 | Children age 12-23 months who have received the first dose of measles-containing vaccine (MCV) (%) | 80.9 | 105 |
| 63 | Children age 24-35 months who have received a second dose of measles-containing vaccine (MCV) (%) | 25.8 | 105 |
| 64 | Children age 12-23 months who have received 3 doses of rotavirus vaccine14 (%) | 7.2 | 105 |
| 65 | Children age 12-23 months who have received 3 doses of penta or hepatitis B vaccine (%) | 76.4 | 105 |
| 66 | Children age 9-59 months who received a vitamin A dose in the last 6 months (%) | 65.3 | 105 |
| 67 | Children age 12-23 months who received most of their vaccinations in a public health facility (%) | 96.9 | 105 |
| 68 | Children age 12-23 months who received most of their vaccinations in a private health facility (%) | 2.4 | 105 |
| 69 | Prevalence of diarrhoea in the 2 weeks preceding the survey (%) | 4.3 | 105 |
| 70 | Children with diarrhoea in the 2 weeks preceding the survey who received oral rehydration salts (ORS) (%) | 71.4 | 105 |
| 71 | Children with diarrhoea in the 2 weeks preceding the survey who received zinc (%) | 29.8 | 105 |
| 72 | Children with diarrhoea in the 2 weeks preceding the survey taken to a health facility or health provider (%) | 44.6 | 105 |
| 73 | Prevalence of symptoms of acute respiratory infection (ARI) in the 2 weeks preceding the survey (%) | 0.6 | 105 |
| 74 | Children with fever or symptoms of ARI in the 2 weeks preceding the survey taken to a health facility or health provider (%) | 53.0 | 105 |
| 75 | Children under age 3 years breastfed within one hour of birth15 (%) | 60.1 | 106 |
| 76 | Children under age 6 months exclusively breastfed16 (%) | 67.9 | 106 |
| 77 | Children age 6-8 months receiving solid or semi-solid food and breastmilk16 (%) | 56.9 | 106 |
| 78 | Breastfeeding children age 6-23 months receiving an adequate diet16, 17 (%) | 12.5 | 106 |
| 79 | Non-breastfeeding children age 6-23 months receiving an adequate diet16, 17 (%) | 18.5 | 106 |
| 80 | Total children age 6-23 months receiving an adequate diet16, 17 (%) | 13.4 | 106 |
| 81 | Children under 5 years who are stunted (height-for-age)18 (%) | 28.9 | 106 |
| 82 | Children under 5 years who are wasted (weight-for-height)18 (%) | 9.8 | 106 |
| 83 | Children under 5 years who are severely wasted (weight-for-height)19 (%) | 4.9 | 106 |
| 84 | Children under 5 years who are underweight (weight-for-age)18 (%) | 12.7 | 106 |
| 85 | Children under 5 years who are overweight (weight-for-height)20 (%) | 10.0 | 106 |
| 86 | Women whose Body Mass Index (BMI) is below normal (BMI <18.5 kg/m2)21 (%) | 5.3 | 106 |
| 87 | Men whose Body Mass Index (BMI) is below normal (BMI <18.5 kg/m2) (%) | 5.1 | 106 |
| 88 | Women who are overweight or obese (BMI ≥25.0 kg/m2)21 (%) | 24.2 | 106 |
| 89 | Men who are overweight or obese (BMI ≥25.0 kg/m2) (%) | 31.9 | 106 |
| 90 | Women who have high risk waist-to-hip ratio (≥0.85) (%) | 47.6 | 106 |
| 91 | Men who have high risk waist-to-hip ratio (≥0.90) (%) | 28.1 | 106 |
| 92 | Children age 6-59 months who are anaemic (<11.0 g/dl)22 (%) | 46.4 | 106 |
| 93 | Non-pregnant women age 15-49 years who are anaemic (<12.0 g/dl)22 (%) | 34.8 | 106 |
| 94 | Pregnant women age 15-49 years who are anaemic (<11.0 g/dl)22 (%) | 34.0 | 106 |
| 95 | All women age 15-49 years who are anaemic22 (%) | 34.8 | 106 |
| 96 | All women age 15-19 years who are anaemic22 (%) | 34.9 | 106 |
| 97 | Men age 15-49 years who are anaemic (<13.0 g/dl)22 (%) | 15.6 | 106 |
| 98 | Men age 15-19 years who are anaemic (<13.0 g/dl)22 (%) | 21.5 | 106 |
| 99 | Blood sugar level - high (141-160 mg/dl)23 (%) | 6.9 | 106 |
| 100 | Blood sugar level - very high (>160 mg/dl)23 (%) | 5.7 | 106 |
| 101 | Blood sugar level - high or very high (>140 mg/dl) or taking medicine to control blood sugar level23 (%) | 13.8 | 106 |
| 102 | Blood sugar level - high (141-160 mg/dl)23 (%) | 7.8 | 106 |
| 103 | Blood sugar level - very high (>160 mg/dl)23 (%) | 6.0 | 106 |
| 104 | Blood sugar level - high or very high (>140 mg/dl) or taking medicine to control blood sugar level23 (%) | 15.4 | 106 |
| 105 | Mildly elevated blood pressure (Systolic 140-159 mm of Hg and/or Diastolic 90-99 mm of Hg) (%) | 10.7 | 106 |
| 106 | Moderately or severely elevated blood pressure (Systolic ≥160 mm of Hg and/or Diastolic ≥100 mm of Hg) (%) | 3.2 | 106 |
| 107 | Elevated blood pressure (Systolic ≥140 mm of Hg and/or Diastolic ≥90 mm of Hg) or taking medicine to control blood pressure (%) | 17.7 | 106 |
| 108 | Mildly elevated blood pressure (Systolic 140-159 mm of Hg and/or Diastolic 90-99 mm of Hg) (%) | 16.2 | 106 |
| 109 | Moderately or severely elevated blood pressure (Systolic ≥160 mm of Hg and/or Diastolic ≥100 mm of Hg) (%) | 5.4 | 106 |
| 110 | Elevated blood pressure (Systolic ≥140 mm of Hg and/or Diastolic ≥90 mm of Hg) or taking medicine to control blood pressure (%) | 25.2 | 106 |
| 111 | Ever undergone a screening test for cervical cancer (%) | 6.9 | 107 |
| 112 | Ever undergone a breast examination for breast cancer (%) | 2.7 | 107 |
| 113 | Ever undergone an oral cavity examination for oral cancer (%) | 0.9 | 107 |
| 114 | Ever undergone an oral cavity examination for oral cancer (%) | 1.2 | 107 |
| 115 | Women who have comprehensive knowledge24 of HIV/AIDS (%) | 64.1 | 107 |
| 116 | Men who have comprehensive knowledge24 of HIV/AIDS (%) | 65.6 | 107 |
| 117 | Women who know that consistent condom use can reduce the chance of getting HIV/AIDS (%) | 91.3 | 107 |
| 118 | Men who know that consistent condom use can reduce the chance of getting HIV/AIDS (%) | 95.1 | 107 |
| 119 | Currently married women who usually participate in three household decisions25 (%) | 98.8 | 107 |
| 120 | Women who worked in the last 12 months and were paid in cash (%) | 29.2 | 107 |
| 121 | Women owning a house and/or land (alone or jointly with others) (%) | 20.8 | 107 |
| 122 | Women having a bank or savings account that they themselves use (%) | 80.7 | 107 |
| 123 | Women having a mobile phone that they themselves use (%) | 82.3 | 107 |
| 124 | Women age 15-24 years who use hygienic methods of protection during their menstrual period26 (%) | 89.8 | 107 |
| 125 | Ever-married women age 18-49 years who have ever experienced spousal violence27 (%) | 10.9 | 107 |
| 126 | Ever-married women age 18-49 years who have experienced physical violence during any pregnancy (%) | 0.7 | 107 |
| 127 | Young women age 18-29 years who experienced sexual violence by age 18 (%) | 2.0 | 107 |
| 128 | Women age 15 years and above who use any kind of tobacco (%) | 61.6 | 107 |
| 129 | Men age 15 years and above who use any kind of tobacco (%) | 72.9 | 107 |
| 130 | Women age 15 years and above who consume alcohol (%) | 0.9 | 107 |
| 131 | Men age 15 years and above who consume alcohol (%) | 23.8 | 107 |

**NFHS-6** · 101 extracted indicator rows.

| Row | Indicator | NFHS-5 Total as printed in NFHS-6 | NFHS-6 Total | Reviewed change | PDF page |
| --- | --- | --- | --- | --- | --- |
| 1 | Population below age 5 years (%) | 7.8 | 6.6 | — | 91 |
| 2 | Population below age 15 years (%) | 27.3 | 24.5 | — | 91 |
| 3 | Population age 60 years and above (%) | 10.1 | 11.4 | — | 91 |
| 4 | Household electricity access | 98.2 | 97.9 | -0.3 | 91 |
| 5 | Population living in households with an improved drinking-water source 1 (%) | 95.8 | 98.3 | — | 91 |
| 6 | Households using iodized salt (%) | 99.0 | 99.7 | — | 91 |
| 7 | Households with any usual member covered under a health insurance/financing scheme (%) | 50.3 | 60.1 | — | 91 |
| 8 | Households with any usual member having a bank account/post office account (%) | 95.7 | 97.9 | — | 91 |
| 9 | Female population age 6+ ever attended school | 93.2 | 95.3 | +2.1 | 91 |
| 10 | Households with any usual female members owning a house and/or land (alone or jointly with | 14.2 | 16.8 | — | 91 |
| 11 | Children age 2-4 years who attended pre-school (%) | 36.4 | 40.2 | — | 91 |
| 12 | Women with 10 or more years of schooling | 50.0 | 54.7 | +4.7 | 91 |
| 13 | Men with 10 or more years of schooling | 49.1 | 53.1 | +4.0 | 91 |
| 14 | Women who have ever used the internet (%) | 67.6 | 82.5 | — | 91 |
| 15 | Men who have ever used the internet (%) | 67.6 | 88.1 | — | 91 |
| 16 | Women age 20–24 married before age 18 | 8.0 | 6.0 | -2.0 | 91 |
| 17 | Men age 25-29 years married before age 21 years (%) | 11.0 | 7.1 | — | 91 |
| 18 | Total fertility rate, children per woman | 1.9 | 1.6 | -0.3 | 91 |
| 19 | Women age 15-19 years who were already mothers or pregnant at the time of the survey (%) | 4.1 | 4.8 | — | 91 |
| 20 | Any method2 (%) | 31.2 | 64.2 | — | 91 |
| 21 | Any modern method2 (%) | 30.8 | 61.0 | — | 91 |
| 22 | Any traditional method (%) | 0.4 | 3.2 | — | 91 |
| 23 | Female sterilization (%) | 13.0 | 29.1 | — | 91 |
| 24 | Male sterilization (%) | 0.0 | 0.0 | — | 91 |
| 25 | Total unmet need for family planning | 18.9 | 8.0 | -10.9 | 91 |
| 26 | Unmet need for spacing 3 (%) | 12.9 | 7.1 | — | 91 |
| 27 | Unmet need for limiting3 (%) | 6.0 | 0.9 | — | 91 |
| 28 | First-trimester antenatal check-up | 72.7 | 77.6 | +4.9 | 91 |
| 29 | Mothers who had any antenatal care visits (%) | 79.4 | 97.0 | — | 91 |
| 30 | At least four antenatal care visits | 58.1 | 72.1 | — | 91 |
| 31 | Mothers whose last birth was protected against neonatal tetanus 4 (%) | 80.0 | 93.0 | — | 91 |
| 32 | Mothers who consumed iron folic acid for 100 days or more when they were pregnant (%) | 61.9 | 78.7 | — | 91 |
| 33 | Mothers who consumed iron folic acid for 180 days or more when they were pregnant (%) | 10.5 | 42.1 | — | 91 |
| 34 | Registered pregnancies for which the mother received a Mother and Child Protection (MCP) | 96.1 | 99.0 | — | 91 |
| 35 | Institutional births | 85.8 | 91.2 | +5.4 | 91 |
| 36 | Institutional births in public facility (%) | 73.8 | 74.7 | — | 91 |
| 37 | Births attended by skilled health personnel | 87.7 | 93.1 | +5.4 | 91 |
| 38 | Caesarean births | 10.8 | 13.5 | +2.7 | 91 |
| 39 | Births in a private health facility that were delivered by caesarean section (%) | 30.4 | 35.2 | — | 91 |
| 40 | Births in a public health facility that were delivered by caesarean section (%) | 9.8 | 10.3 | — | 91 |
| 41 | Mothers who received postnatal care from a doctor/nurse/LHV/ANM/midwife/other health | 68.0 | 82.3 | — | 92 |
| 42 | Children born at home who were taken to a health facility for a check-up within 24 hours of | 2.0 | 2.4 | — | 92 |
| 43 | Children who received postnatal care from a doctor/nurse/LHV/ANM/midwife/ other health | 36.9 | 86.0 | — | 92 |
| 44 | Full vaccination, card or maternal recall | 72.7 | 72.1 | — | 92 |
| 45 | Full vaccination, card only | 83.7 | 74.0 | -9.7 | 92 |
| 46 | Children age 12-23 months who have received any vaccine (%) | 86.4 | 96.0 | — | 92 |
| 47 | BCG vaccination | 83.4 | 92.6 | +9.2 | 92 |
| 48 | Children age 12-23 months who have received 3 doses of polio vaccine 8 (%) | 76.2 | 86.7 | — | 92 |
| 49 | Children age 12-23 months who have received 3 doses of pentavalent vaccine (%) | 80.9 | 77.6 | — | 92 |
| 50 | Children age 12-23 months who have received the first dose of measles-containing | 81.0 | 89.5 | — | 92 |
| 51 | Children age 24-35 months who have received a second dose of measles-containing | 48.7 | 59.6 | — | 92 |
| 52 | Children age 12-23 months who have received birth dose of hepatitis B vaccine (%) | 59.8 | 88.4 | — | 92 |
| 53 | Children age 12-23 months who have received 3 doses of rotavirus vaccine (%) | 7.2 | 85.8 | — | 92 |
| 54 | Children age 9-35 months who received a vitamin A dose in the last 6 months (%) | 65.7 | 80.5 | — | 92 |
| 55 | Children age 12-23 months who received most of their vaccinations in a public health | 96.9 | 96.9 | — | 92 |
| 56 | Children age 12-23 months who received most of their vaccinations in a private health | 2.4 | 2.8 | — | 92 |
| 57 | Prevalence of diarrhoea in the 2 weeks preceding the survey (%) | 4.3 | 2.2 | — | 92 |
| 58 | Prevalence of severe diarrhoea in the 2 weeks preceding the survey (%) | 0.2 | 0.0 | — | 92 |
| 59 | Prevalence of symptoms of acute respiratory infection (ARI) in the 2 weeks preceding the | 0.6 | 0.4 | — | 92 |
| 60 | Children with fever or symptoms of ARI in the 2 weeks preceding the survey taken to a health | 53.0 | 42.2 | — | 92 |
| 61 | Children under age 3 years breastfed within one hour of birth 9 (%) | 60.1 | 63.6 | — | 92 |
| 62 | Children under age 6 months exclusively breastfed 10 (%) | 67.9 | 64.9 | — | 92 |
| 63 | Children under age 6 months currently breastfeeding 10 (%) | 96.6 | 96.4 | — | 92 |
| 64 | Children under age 6 months exclusively breastfed or breastfeeding and consuming plain | 84.2 | 85.8 | — | 92 |
| 65 | Children age 6-8 months receiving solid or semi-solid food and breastmilk 10 (%) | 56.9 | 76.4 | — | 92 |
| 66 | Breastfeeding children age 6-23 months receiving an adequate diet 10, 11 (%) | 12.2 | 7.9 | — | 92 |
| 67 | Non-breastfeeding children age 6-23 months receiving an adequate diet 10, 11 (%) | 18.5 | 8.6 | — | 92 |
| 68 | Total children age 6-23 months receiving an adequate diet 10, 11 (%) | 13.2 | 8.0 | — | 92 |
| 69 | Child stunting | 28.9 | 26.1 | -2.8 | 92 |
| 70 | Child wasting | 9.8 | 8.1 | -1.7 | 92 |
| 71 | Severe child wasting | 4.9 | 3.6 | -1.3 | 92 |
| 72 | Child underweight | 12.7 | 14.5 | +1.8 | 92 |
| 73 | Child overweight | 10.0 | 8.9 | -1.1 | 92 |
| 74 | Women whose Body Mass Index (BMI) is below normal (BMI <18.5 kg/m 2)15 (%) | 5.3 | 5.9 | — | 93 |
| 75 | Men whose Body Mass Index (BMI) is below normal (BMI <18.5 kg/m 2) (%) | 5.1 | 3.7 | — | 93 |
| 76 | Women aged 15–49 overweight or obese (BMI ≥25), % | 24.2 | 24.8 | — | IIPS fact sheet |
| 77 | Men aged 15–49 overweight or obese (BMI ≥25), % | 32.1 | 35.6 | — | IIPS fact sheet |
| 78 | Blood sugar level - high (141-160 mg/dl)16 (%) | 6.9 | 6.6 | — | 93 |
| 79 | Blood sugar level - very high (>160 mg/dl)16 (%) | 5.7 | 6.7 | — | 93 |
| 80 | Blood sugar level - high or very high (>140 mg/dl) or taking medicine to control blood | 13.8 | 14.5 | — | 93 |
| 81 | Blood sugar level - high (141-160 mg/dl)16 (%) | 7.8 | 6.5 | — | 93 |
| 82 | Blood sugar level - very high (>160 mg/dl)16 (%) | 6.0 | 6.3 | — | 93 |
| 83 | Blood sugar level - high or very high (>140 mg/dl) or taking medicine to control blood | 15.4 | 13.7 | — | 93 |
| 84 | Mildly elevated blood pressure (Systolic 140-159 mm of Hg and/or | 10.7 | 10.0 | — | 93 |
| 85 | Women aged 15+ with moderately or severely elevated blood pressure, % | 3.2 | 3.0 | — | IIPS fact sheet |
| 86 | Women aged 15+ with elevated blood pressure or taking medicine for it, % | 17.7 | 16.4 | — | IIPS fact sheet |
| 87 | Mildly elevated blood pressure (Systolic 140-159 mm of Hg and/or | 16.2 | 13.4 | — | 93 |
| 88 | Men aged 15+ with moderately or severely elevated blood pressure, % | 5.4 | 2.0 | — | IIPS fact sheet |
| 89 | Men aged 15+ with elevated blood pressure or taking medicine for it, % | 25.2 | 20.2 | — | IIPS fact sheet |
| 90 | Currently married women who usually participate in three household decisions 17 (%) | 98.8 | 98.5 | — | 93 |
| 91 | Women who worked in the last 12 months and were paid in cash (%) | 29.2 | 38.8 | — | 93 |
| 92 | Women having a bank or savings account that they themselves use (%) | 80.7 | 93.6 | — | 93 |
| 93 | Women having a mobile phone that they themselves use (%) | 82.3 | 90.9 | — | 93 |
| 94 | Women age 15-24 years who use hygienic methods of protection during their menstrual | 91.0 | 98.8 | — | 93 |
| 95 | Ever-married women age 18-49 years who have ever experienced spousal violence 19 (%) | 10.3 | 11.4 | — | 93 |
| 96 | Ever-married women age 18-49 years who have experienced physical violence during any | 0.7 | 0.6 | — | 93 |
| 97 | Young women age 18-29 years who experienced sexual violence by age 18 (%) | 1.8 | 0.1 | — | 93 |
| 98 | Women age 15 years and above who use any kind of tobacco (%) | 61.7 | 61.0 | — | 93 |
| 99 | Men age 15 years and above who use any kind of tobacco (%) | 73.1 | 73.6 | — | 93 |
| 100 | Women age 15 years and above who consume alcohol (%) | 0.9 | 0.9 | — | 93 |
| 101 | Men age 15 years and above who consume alcohol (%) | 23.7 | 23.0 | — | 93 |

### Nagaland

**NFHS-5** · NFHS5-I · 131 indicator rows.

| Row | Indicator | Total | PDF page |
| --- | --- | --- | --- |
| 1 | Female population age 6 years and above who ever attended school (%) | 85.2 | 112 |
| 2 | Population below age 15 years (%) | 24.7 | 112 |
| 3 | Sex ratio of the total population (females per 1,000 males) | 1,007 | 112 |
| 4 | Sex ratio at birth for children born in the last five years (females per 1,000 males) | 945 | 112 |
| 5 | Children under age 5 years whose birth was registered with the civil authority (%) | 73.2 | 112 |
| 6 | Deaths in the last 3 years registered with the civil authority (%) | 40.3 | 112 |
| 7 | Population living in households with electricity (%) | 98.6 | 112 |
| 8 | Population living in households with an improved drinking-water source1 (%) | 91.0 | 112 |
| 9 | Population living in households that use an improved sanitation facility2 (%) | 87.7 | 112 |
| 10 | Households using clean fuel for cooking3 (%) | 43.0 | 112 |
| 11 | Households using iodized salt (%) | 99.0 | 112 |
| 12 | Households with any usual member covered under a health insurance/financing scheme (%) | 20.5 | 112 |
| 13 | Children age 5 years who attended pre-primary school during the school year 2019-20 (%) | 6.1 | 112 |
| 14 | Women who are literate4 (%) | 85.8 | 112 |
| 15 | Men who are literate4 (%) | 93.3 | 112 |
| 16 | Women with 10 or more years of schooling (%) | 44.4 | 112 |
| 17 | Men with 10 or more years of schooling (%) | 53.1 | 112 |
| 18 | Women who have ever used the internet (%) | 49.9 | 112 |
| 19 | Men who have ever used the internet (%) | 64.6 | 112 |
| 20 | Women age 20-24 years married before age 18 years (%) | 5.6 | 112 |
| 21 | Men age 25-29 years married before age 21 years (%) | 5.0 | 112 |
| 22 | Total fertility rate (children per woman) | 1.7 | 112 |
| 23 | Women age 15-19 years who were already mothers or pregnant at the time of the survey (%) | 3.8 | 112 |
| 24 | Adolescent fertility rate for women age 15-19 years5 | 19 | 112 |
| 25 | Neonatal mortality rate (NNMR) | 10.2 | 112 |
| 26 | Infant mortality rate (IMR) | 23.4 | 112 |
| 27 | Under-five mortality rate (U5MR) | 33.0 | 112 |
| 28 | Any method6 (%) | 57.4 | 112 |
| 29 | Any modern method6 (%) | 45.3 | 112 |
| 30 | Female sterilization (%) | 14.4 | 112 |
| 31 | Male sterilization (%) | 0.0 | 112 |
| 32 | IUD/PPIUD (%) | 19.8 | 112 |
| 33 | Pill (%) | 6.4 | 112 |
| 34 | Condom (%) | 3.3 | 112 |
| 35 | Injectables (%) | 0.3 | 112 |
| 36 | Total unmet need7 (%) | 9.1 | 112 |
| 37 | Unmet need for spacing7 (%) | 4.5 | 112 |
| 38 | Health worker ever talked to female non-users about family planning (%) | 9.7 | 112 |
| 39 | Current users ever told about side effects of current method8 (%) | 60.2 | 112 |
| 40 | Mothers who had an antenatal check-up in the first trimester (%) | 49.5 | 113 |
| 41 | Mothers who had at least 4 antenatal care visits (%) | 20.7 | 113 |
| 42 | Mothers whose last birth was protected against neonatal tetanus9 (%) | 81.3 | 113 |
| 43 | Mothers who consumed iron folic acid for 100 days or more when they were pregnant (%) | 10.2 | 113 |
| 44 | Mothers who consumed iron folic acid for 180 days or more when they were pregnant (%) | 4.1 | 113 |
| 45 | Registered pregnancies for which the mother received a Mother and Child Protection (MCP) card (%) | 92.4 | 113 |
| 46 | Mothers who received postnatal care from a doctor/nurse/LHV/ANM/midwife/other health personnel within 2 days of delivery (%) | 43.9 | 113 |
| 47 | Average out-of-pocket expenditure per delivery in a public health facility (Rs.) | 5,778 | 113 |
| 48 | Children born at home who were taken to a health facility for a check-up within 24 hours of birth (%) | 0.6 | 113 |
| 49 | Children who received postnatal care from a doctor/nurse/LHV/ANM/midwife/other health personnel within 2 days of delivery (%) | 41.8 | 113 |
| 50 | Institutional births (%) | 45.7 | 113 |
| 51 | Institutional births in public facility (%) | 35.8 | 113 |
| 52 | Home births that were conducted by skilled health personnel10 (%) | 10.4 | 113 |
| 53 | Births attended by skilled health personnel10 (%) | 55.3 | 113 |
| 54 | Births delivered by caesarean section (%) | 5.2 | 113 |
| 55 | Births in a private health facility that were delivered by caesarean section (%) | 23.6 | 113 |
| 56 | Births in a public health facility that were delivered by caesarean section (%) | 8.0 | 113 |
| 57 | Children age 12-23 months fully vaccinated based on information from either vaccination card or mother's recall11 (%) | 57.9 | 113 |
| 58 | Children age 12-23 months fully vaccinated based on information from vaccination card only12 (%) | 71.3 | 113 |
| 59 | Children age 12-23 months who have received BCG (%) | 85.5 | 113 |
| 60 | Children age 12-23 months who have received 3 doses of polio vaccine13 (%) | 65.4 | 113 |
| 61 | Children age 12-23 months who have received 3 doses of penta or DPT vaccine (%) | 71.5 | 113 |
| 62 | Children age 12-23 months who have received the first dose of measles-containing vaccine (MCV) (%) | 73.8 | 113 |
| 63 | Children age 24-35 months who have received a second dose of measles-containing vaccine (MCV) (%) | 20.5 | 113 |
| 64 | Children age 12-23 months who have received 3 doses of rotavirus vaccine14 (%) | 6.5 | 113 |
| 65 | Children age 12-23 months who have received 3 doses of penta or hepatitis B vaccine (%) | 66.4 | 113 |
| 66 | Children age 9-59 months who received a vitamin A dose in the last 6 months (%) | 44.4 | 113 |
| 67 | Children age 12-23 months who received most of their vaccinations in a public health facility (%) | 93.2 | 113 |
| 68 | Children age 12-23 months who received most of their vaccinations in a private health facility (%) | 4.1 | 113 |
| 69 | Prevalence of diarrhoea in the 2 weeks preceding the survey (%) | 3.4 | 113 |
| 70 | Children with diarrhoea in the 2 weeks preceding the survey who received oral rehydration salts (ORS) (%) | 54.5 | 113 |
| 71 | Children with diarrhoea in the 2 weeks preceding the survey who received zinc (%) | 9.1 | 113 |
| 72 | Children with diarrhoea in the 2 weeks preceding the survey taken to a health facility or health provider (%) | 31.5 | 113 |
| 73 | Prevalence of symptoms of acute respiratory infection (ARI) in the 2 weeks preceding the survey (%) | 1.1 | 113 |
| 74 | Children with fever or symptoms of ARI in the 2 weeks preceding the survey taken to a health facility or health provider (%) | 30.9 | 113 |
| 75 | Children under age 3 years breastfed within one hour of birth15 (%) | 57.9 | 114 |
| 76 | Children under age 6 months exclusively breastfed16 (%) | 43.2 | 114 |
| 77 | Children age 6-8 months receiving solid or semi-solid food and breastmilk16 (%) | 69.4 | 114 |
| 78 | Breastfeeding children age 6-23 months receiving an adequate diet16, 17 (%) | 12.6 | 114 |
| 79 | Non-breastfeeding children age 6-23 months receiving an adequate diet16, 17 (%) | 18.0 | 114 |
| 80 | Total children age 6-23 months receiving an adequate diet16, 17 (%) | 14.5 | 114 |
| 81 | Children under 5 years who are stunted (height-for-age)18 (%) | 32.7 | 114 |
| 82 | Children under 5 years who are wasted (weight-for-height)18 (%) | 19.1 | 114 |
| 83 | Children under 5 years who are severely wasted (weight-for-height)19 (%) | 7.9 | 114 |
| 84 | Children under 5 years who are underweight (weight-for-age)18 (%) | 26.9 | 114 |
| 85 | Children under 5 years who are overweight (weight-for-height)20 (%) | 4.9 | 114 |
| 86 | Women whose Body Mass Index (BMI) is below normal (BMI <18.5 kg/m2)21 (%) | 11.1 | 114 |
| 87 | Men whose Body Mass Index (BMI) is below normal (BMI <18.5 kg/m2) (%) | 7.5 | 114 |
| 88 | Women who are overweight or obese (BMI ≥25.0 kg/m2)21 (%) | 14.4 | 114 |
| 89 | Men who are overweight or obese (BMI ≥25.0 kg/m2) (%) | 23.9 | 114 |
| 90 | Women who have high risk waist-to-hip ratio (≥0.85) (%) | 62.0 | 114 |
| 91 | Men who have high risk waist-to-hip ratio (≥0.90) (%) | 29.4 | 114 |
| 92 | Children age 6-59 months who are anaemic (<11.0 g/dl)22 (%) | 42.7 | 114 |
| 93 | Non-pregnant women age 15-49 years who are anaemic (<12.0 g/dl)22 (%) | 29.3 | 114 |
| 94 | Pregnant women age 15-49 years who are anaemic (<11.0 g/dl)22 (%) | 22.2 | 114 |
| 95 | All women age 15-49 years who are anaemic22 (%) | 28.9 | 114 |
| 96 | All women age 15-19 years who are anaemic22 (%) | 33.9 | 114 |
| 97 | Men age 15-49 years who are anaemic (<13.0 g/dl)22 (%) | 10.0 | 114 |
| 98 | Men age 15-19 years who are anaemic (<13.0 g/dl)22 (%) | 19.6 | 114 |
| 99 | Blood sugar level - high (141-160 mg/dl)23 (%) | 5.2 | 114 |
| 100 | Blood sugar level - very high (>160 mg/dl)23 (%) | 3.8 | 114 |
| 101 | Blood sugar level - high or very high (>140 mg/dl) or taking medicine to control blood sugar level23 (%) | 9.3 | 114 |
| 102 | Blood sugar level - high (141-160 mg/dl)23 (%) | 6.6 | 114 |
| 103 | Blood sugar level - very high (>160 mg/dl)23 (%) | 5.5 | 114 |
| 104 | Blood sugar level - high or very high (>140 mg/dl) or taking medicine to control blood sugar level23 (%) | 12.4 | 114 |
| 105 | Mildly elevated blood pressure (Systolic 140-159 mm of Hg and/or Diastolic 90-99 mm of Hg) (%) | 13.8 | 114 |
| 106 | Moderately or severely elevated blood pressure (Systolic ≥160 mm of Hg and/or Diastolic ≥100 mm of Hg) (%) | 7.6 | 114 |
| 107 | Elevated blood pressure (Systolic ≥140 mm of Hg and/or Diastolic ≥90 mm of Hg) or taking medicine to control blood pressure (%) | 22.4 | 114 |
| 108 | Mildly elevated blood pressure (Systolic 140-159 mm of Hg and/or Diastolic 90-99 mm of Hg) (%) | 19.1 | 114 |
| 109 | Moderately or severely elevated blood pressure (Systolic ≥160 mm of Hg and/or Diastolic ≥100 mm of Hg) (%) | 8.9 | 114 |
| 110 | Elevated blood pressure (Systolic ≥140 mm of Hg and/or Diastolic ≥90 mm of Hg) or taking medicine to control blood pressure (%) | 28.7 | 114 |
| 111 | Ever undergone a screening test for cervical cancer (%) | 0.3 | 115 |
| 112 | Ever undergone a breast examination for breast cancer (%) | 0.3 | 115 |
| 113 | Ever undergone an oral cavity examination for oral cancer (%) | 0.4 | 115 |
| 114 | Ever undergone an oral cavity examination for oral cancer (%) | 0.2 | 115 |
| 115 | Women who have comprehensive knowledge24 of HIV/AIDS (%) | 25.6 | 115 |
| 116 | Men who have comprehensive knowledge24 of HIV/AIDS (%) | 40.1 | 115 |
| 117 | Women who know that consistent condom use can reduce the chance of getting HIV/AIDS (%) | 61.4 | 115 |
| 118 | Men who know that consistent condom use can reduce the chance of getting HIV/AIDS (%) | 68.5 | 115 |
| 119 | Currently married women who usually participate in three household decisions25 (%) | 99.2 | 115 |
| 120 | Women who worked in the last 12 months and were paid in cash (%) | 23.6 | 115 |
| 121 | Women owning a house and/or land (alone or jointly with others) (%) | 26.9 | 115 |
| 122 | Women having a bank or savings account that they themselves use (%) | 63.7 | 115 |
| 123 | Women having a mobile phone that they themselves use (%) | 82.5 | 115 |
| 124 | Women age 15-24 years who use hygienic methods of protection during their menstrual period26 (%) | 80.2 | 115 |
| 125 | Ever-married women age 18-49 years who have ever experienced spousal violence27 (%) | 6.4 | 115 |
| 126 | Ever-married women age 18-49 years who have experienced physical violence during any pregnancy (%) | 0.4 | 115 |
| 127 | Young women age 18-29 years who experienced sexual violence by age 18 (%) | 1.6 | 115 |
| 128 | Women age 15 years and above who use any kind of tobacco (%) | 13.7 | 115 |
| 129 | Men age 15 years and above who use any kind of tobacco (%) | 48.4 | 115 |
| 130 | Women age 15 years and above who consume alcohol (%) | 0.9 | 115 |
| 131 | Men age 15 years and above who consume alcohol (%) | 24.0 | 115 |

**NFHS-6** · 101 extracted indicator rows.

| Row | Indicator | NFHS-5 Total as printed in NFHS-6 | NFHS-6 Total | Reviewed change | PDF page |
| --- | --- | --- | --- | --- | --- |
| 1 | Population below age 5 years (%) | 7.5 | 7.8 | — | 95 |
| 2 | Population below age 15 years (%) | 24.7 | 25.3 | — | 95 |
| 3 | Population age 60 years and above (%) | 10.7 | 12.4 | — | 95 |
| 4 | Household electricity access | 98.6 | 99.3 | +0.7 | 95 |
| 5 | Population living in households with an improved drinking-water source 1 (%) | 91.0 | 82.7 | — | 95 |
| 6 | Households using iodized salt (%) | 98.9 | 98.5 | — | 95 |
| 7 | Households with any usual member covered under a health insurance/financing scheme (%) | 22.0 | 66.1 | — | 95 |
| 8 | Households with any usual member having a bank account/post office account (%) | 91.7 | 96.8 | — | 95 |
| 9 | Female population age 6+ ever attended school | 85.2 | 85.6 | +0.4 | 95 |
| 10 | Households with any usual female members owning a house and/or land (alone or jointly with | 13.7 | 11.6 | — | 95 |
| 11 | Children age 2-4 years who attended pre-school (%) | 16.4 | 15.1 | — | 95 |
| 12 | Women with 10 or more years of schooling | 44.4 | 46.3 | +1.9 | 95 |
| 13 | Men with 10 or more years of schooling | 53.1 | 49.9 | -3.2 | 95 |
| 14 | Women who have ever used the internet (%) | 49.9 | 76.6 | — | 95 |
| 15 | Men who have ever used the internet (%) | 52.8 | 90.5 | — | 95 |
| 16 | Women age 20–24 married before age 18 | 5.6 | 10.2 | +4.6 | 95 |
| 17 | Men age 25-29 years married before age 21 years (%) | 5.0 | 10.2 | — | 95 |
| 18 | Total fertility rate, children per woman | 1.7 | 2.0 | +0.3 | 95 |
| 19 | Women age 15-19 years who were already mothers or pregnant at the time of the survey (%) | 3.8 | 3.2 | — | 95 |
| 20 | Any method2 (%) | 57.4 | 73.6 | — | 95 |
| 21 | Any modern method2 (%) | 45.3 | 47.8 | — | 95 |
| 22 | Any traditional method (%) | 12.1 | 25.8 | — | 95 |
| 23 | Female sterilization (%) | 14.4 | 11.0 | — | 95 |
| 24 | Male sterilization (%) | 0.0 | 0.1 | — | 95 |
| 25 | Total unmet need for family planning | 9.1 | 5.7 | -3.4 | 95 |
| 26 | Unmet need for spacing 3 (%) | 4.4 | 3.9 | — | 95 |
| 27 | Unmet need for limiting3 (%) | 4.7 | 1.8 | — | 95 |
| 28 | First-trimester antenatal check-up | 49.5 | 61.8 | +12.3 | 95 |
| 29 | Mothers who had any antenatal care visits (%) | 71.2 | 83.2 | — | 95 |
| 30 | At least four antenatal care visits | 20.7 | 32.5 | +11.8 | 95 |
| 31 | Mothers whose last birth was protected against neonatal tetanus 4 (%) | 81.3 | 78.0 | — | 95 |
| 32 | Mothers who consumed iron folic acid for 100 days or more when they were pregnant (%) | 10.2 | 24.8 | — | 95 |
| 33 | Mothers who consumed iron folic acid for 180 days or more when they were pregnant (%) | 4.1 | 15.2 | — | 95 |
| 34 | Registered pregnancies for which the mother received a Mother and Child Protection (MCP) | 92.4 | 92.7 | — | 95 |
| 35 | Institutional births | 45.7 | 62.2 | +16.5 | 95 |
| 36 | Institutional births in public facility (%) | 35.8 | 44.7 | — | 95 |
| 37 | Births attended by skilled health personnel | 55.3 | 74.4 | +19.1 | 95 |
| 38 | Caesarean births | 5.2 | 9.9 | +4.7 | 95 |
| 39 | Births in a private health facility that were delivered by caesarean section (%) | 23.6 | 32.5 | — | 95 |
| 40 | Births in a public health facility that were delivered by caesarean section (%) | 8.0 | 9.4 | — | 95 |
| 41 | Mothers who received postnatal care from a doctor/nurse/LHV/ANM/midwife/other health | 43.9 | 59.1 | — | 96 |
| 42 | Children born at home who were taken to a health facility for a check-up within 24 hours of | 0.6 | 1.4 | — | 96 |
| 43 | Children who received postnatal care from a doctor/nurse/LHV/ANM/midwife/ other health | 41.8 | 60.2 | — | 96 |
| 44 | Full vaccination, card or maternal recall | 57.9 | 64.3 | +6.4 | 96 |
| 45 | Full vaccination, card only | 71.3 | 74.2 | +2.9 | 96 |
| 46 | Children age 12-23 months who have received any vaccine (%) | 92.7 | 91.1 | — | 96 |
| 47 | BCG vaccination | 85.5 | 86.0 | +0.5 | 96 |
| 48 | Children age 12-23 months who have received 3 doses of polio vaccine 8 (%) | 65.4 | 68.5 | — | 96 |
| 49 | Children age 12-23 months who have received 3 doses of pentavalent vaccine (%) | 71.7 | 73.4 | — | 96 |
| 50 | Children age 12-23 months who have received the first dose of measles-containing | 74.0 | 79.4 | — | 96 |
| 51 | Children age 24-35 months who have received a second dose of measles-containing | 41.1 | 62.7 | — | 96 |
| 52 | Children age 12-23 months who have received birth dose of hepatitis B vaccine (%) | 40.8 | 46.4 | — | 96 |
| 53 | Children age 12-23 months who have received 3 doses of rotavirus vaccine (%) | 6.5 | 68.5 | — | 96 |
| 54 | Children age 9-35 months who received a vitamin A dose in the last 6 months (%) | 45.6 | 56.5 | — | 96 |
| 55 | Children age 12-23 months who received most of their vaccinations in a public health | 93.2 | 83.7 | — | 96 |
| 56 | Children age 12-23 months who received most of their vaccinations in a private health | 4.1 | 12.9 | — | 96 |
| 57 | Prevalence of diarrhoea in the 2 weeks preceding the survey (%) | 3.4 | 3.0 | — | 96 |
| 58 | Prevalence of severe diarrhoea in the 2 weeks preceding the survey (%) | 0.1 | 0.1 | — | 96 |
| 59 | Prevalence of symptoms of acute respiratory infection (ARI) in the 2 weeks preceding the | 1.1 | 0.3 | — | 96 |
| 60 | Children with fever or symptoms of ARI in the 2 weeks preceding the survey taken to a health | 30.9 | 34.0 | — | 96 |
| 61 | Children under age 3 years breastfed within one hour of birth 9 (%) | 57.9 | 52.4 | — | 96 |
| 62 | Children under age 6 months exclusively breastfed 10 (%) | 43.2 | 37.4 | — | 96 |
| 63 | Children under age 6 months currently breastfeeding 10 (%) | 97.3 | 98.6 | — | 96 |
| 64 | Children under age 6 months exclusively breastfed or breastfeeding and consuming plain | 70.1 | 68.8 | — | 96 |
| 65 | Children age 6-8 months receiving solid or semi-solid food and breastmilk 10 (%) | 69.4 | 78.0 | — | 96 |
| 66 | Breastfeeding children age 6-23 months receiving an adequate diet 10, 11 (%) | 11.3 | 18.4 | — | 96 |
| 67 | Non-breastfeeding children age 6-23 months receiving an adequate diet 10, 11 (%) | 14.9 | 17.3 | — | 96 |
| 68 | Total children age 6-23 months receiving an adequate diet 10, 11 (%) | 12.6 | 18.0 | — | 96 |
| 69 | Child stunting | 32.7 | 25.1 | -7.6 | 96 |
| 70 | Child wasting | 19.1 | 8.9 | -10.2 | 96 |
| 71 | Severe child wasting | 7.9 | 4.1 | -3.8 | 96 |
| 72 | Child underweight | 26.9 | 12.2 | -14.7 | 96 |
| 73 | Child overweight | 4.9 | 6.2 | +1.3 | 96 |
| 74 | Women whose Body Mass Index (BMI) is below normal (BMI <18.5 kg/m 2)15 (%) | 11.1 | 8.8 | — | 97 |
| 75 | Men whose Body Mass Index (BMI) is below normal (BMI <18.5 kg/m 2) (%) | 7.5 | 8.2 | — | 97 |
| 76 | Women aged 15–49 overweight or obese (BMI ≥25), % | 14.4 | 17.2 | — | IIPS fact sheet |
| 77 | Men aged 15–49 overweight or obese (BMI ≥25), % | 23.9 | 23.7 | — | IIPS fact sheet |
| 78 | Blood sugar level - high (141-160 mg/dl)16 (%) | 5.2 | 5.1 | — | 97 |
| 79 | Blood sugar level - very high (>160 mg/dl)16 (%) | 3.8 | 4.8 | — | 97 |
| 80 | Blood sugar level - high or very high (>140 mg/dl) or taking medicine to control blood | 9.3 | 10.2 | — | 97 |
| 81 | Blood sugar level - high (141-160 mg/dl)16 (%) | 6.6 | 6.0 | — | 97 |
| 82 | Blood sugar level - very high (>160 mg/dl)16 (%) | 5.5 | 4.6 | — | 97 |
| 83 | Blood sugar level - high or very high (>140 mg/dl) or taking medicine to control blood | 12.4 | 10.9 | — | 97 |
| 84 | Mildly elevated blood pressure (Systolic 140-159 mm of Hg and/or | 13.8 | 14.5 | — | 97 |
| 85 | Women aged 15+ with moderately or severely elevated blood pressure, % | 7.6 | 8.0 | — | IIPS fact sheet |
| 86 | Women aged 15+ with elevated blood pressure or taking medicine for it, % | 22.3 | 23.7 | — | IIPS fact sheet |
| 87 | Mildly elevated blood pressure (Systolic 140-159 mm of Hg and/or | 19.1 | 19.7 | — | 97 |
| 88 | Men aged 15+ with moderately or severely elevated blood pressure, % | 8.9 | 4.8 | — | IIPS fact sheet |
| 89 | Men aged 15+ with elevated blood pressure or taking medicine for it, % | 28.7 | 28.7 | — | IIPS fact sheet |
| 90 | Currently married women who usually participate in three household decisions 17 (%) | 99.2 | 98.9 | — | 97 |
| 91 | Women who worked in the last 12 months and were paid in cash (%) | 23.6 | 25.0 | — | 97 |
| 92 | Women having a bank or savings account that they themselves use (%) | 63.7 | 85.7 | — | 97 |
| 93 | Women having a mobile phone that they themselves use (%) | 82.5 | 88.5 | — | 97 |
| 94 | Women age 15-24 years who use hygienic methods of protection during their menstrual | 80.6 | 89.6 | — | 97 |
| 95 | Ever-married women age 18-49 years who have ever experienced spousal violence 19 (%) | 6.5 | 4.0 | — | 97 |
| 96 | Ever-married women age 18-49 years who have experienced physical violence during any | 0.4 | 0.3 | — | 97 |
| 97 | Young women age 18-29 years who experienced sexual violence by age 18 (%) | 0.0 | 0.0 | — | 97 |
| 98 | Women age 15 years and above who use any kind of tobacco (%) | 13.7 | 17.4 | — | 97 |
| 99 | Men age 15 years and above who use any kind of tobacco (%) | 48.4 | 51.2 | — | 97 |
| 100 | Women age 15 years and above who consume alcohol (%) | 0.9 | 1.6 | — | 97 |
| 101 | Men age 15 years and above who consume alcohol (%) | 23.9 | 26.9 | — | 97 |

### Odisha

**NFHS-5** · NFHS5-II · 131 indicator rows.

| Row | Indicator | Total | PDF page |
| --- | --- | --- | --- |
| 1 | Female population age 6 years and above who ever attended school (%) | 71.5 | 43 |
| 2 | Population below age 15 years (%) | 24.9 | 43 |
| 3 | Sex ratio of the total population (females per 1,000 males) | 1,063 | 43 |
| 4 | Sex ratio at birth for children born in the last five years (females per 1,000 males) | 894 | 43 |
| 5 | Children under age 5 years whose birth was registered with the civil authority (%) | 90.8 | 43 |
| 6 | Deaths in the last 3 years registered with the civil authority (%) | 69.8 | 43 |
| 7 | Population living in households with electricity (%) | 97.0 | 43 |
| 8 | Population living in households with an improved drinking -water source1 (%) | 91.1 | 43 |
| 9 | Population living in households that use an improved sanitation facility 2 (%) | 60.5 | 43 |
| 10 | Households using clean fuel for cooking3 (%) | 34.7 | 43 |
| 11 | Households using iodized salt (%) | 98.0 | 43 |
| 12 | Households with any usual member covered under a health insurance/financing scheme (%) | 47.9 | 43 |
| 13 | Children age 5 years who attended pre-primary school during the school year 2019-20 (%) | 10.8 | 43 |
| 14 | Women who are literate 4 (%) | 69.5 | 43 |
| 15 | Men who are literate4 (%) | 84.6 | 43 |
| 16 | Women with 10 or more years of schooling (%) | 33.0 | 43 |
| 17 | Men with 10 or more years of schooling (%) | 38.6 | 43 |
| 18 | Women who have ever used the internet (%) | 24.9 | 43 |
| 19 | Men who have ever used the internet (%) | 50.7 | 43 |
| 20 | Women age 20-24 years married before age 18 years (%) | 20.5 | 43 |
| 21 | Men age 25-29 years married before age 21 years (%) | 13.3 | 43 |
| 22 | Total fertility rate (children per woman) | 1.8 | 43 |
| 23 | Women age 15-19 years who were already mothers or pregnant at the time of the survey (%) | 7.6 | 43 |
| 24 | Adolescent fertility rate for women age 15 -19 years5 | 40 | 43 |
| 25 | Neonatal mortality rate (NNMR) | 27.0 | 43 |
| 26 | Infant mortality rate (IMR) | 36.3 | 43 |
| 27 | Under-five mortality rate (U5MR) | 41.1 | 43 |
| 28 | Any method6 (%) | 74.1 | 43 |
| 29 | Any modern method 6 (%) | 48.8 | 43 |
| 30 | Female sterilization (%) | 28.0 | 43 |
| 31 | Male sterilization (%) | 0.3 | 43 |
| 32 | IUD/PPIUD (%) | 2.6 | 43 |
| 33 | Pill (%) | 10.8 | 43 |
| 34 | Condom (%) | 5.5 | 43 |
| 35 | Injectables (%) | 0.2 | 43 |
| 36 | Total unmet need7 (%) | 7.2 | 43 |
| 37 | Unmet need for spacing7 (%) | 2.5 | 43 |
| 38 | Health worker ever talked to female non-users about family planning (%) | 25.5 | 43 |
| 39 | Current users ever told about side effects of current method8 (%) | 73.1 | 43 |
| 40 | Mothers who had an antenatal check-up in the first trimester (%) | 76.9 | 44 |
| 41 | Mothers who had at least 4 antenatal care visits (%) | 78.1 | 44 |
| 42 | Mothers whose last birth was protected against neonatal tetanus9 (%) | 95.2 | 44 |
| 43 | Mothers who consumed iron folic acid for 100 days or more when they were pregnant (%) | 60.8 | 44 |
| 44 | Mothers who consumed iron folic acid for 180 days or more when they were pregnant (%) | 34.4 | 44 |
| 45 | Registered pregnancies for which the mother received a Mother and Child Protection (MCP) | 99.4 | 44 |
| 46 | Mothers who received postnatal care from a doctor/nurse/LHV/ANM/midwife/other health | 88.4 | 44 |
| 47 | Average out-of-pocket expenditure per delivery in a public health facility (Rs.) | 4,139 | 44 |
| 48 | Children born at home who were taken to a health facility for a check -up within 24 hours of | 10.5 | 44 |
| 49 | Children who received postnatal care from a doctor/nurse/LHV/ANM/midwife/other health | 88.1 | 44 |
| 50 | Institutional births (%) | 92.2 | 44 |
| 51 | Institutional births in public facility (%) | 78.7 | 44 |
| 52 | Home births that were conducted by skilled health personnel 10 (%) | 1.9 | 44 |
| 53 | Births attended by skilled health personnel10 (%) | 91.8 | 44 |
| 54 | Births delivered by caesarean section (%) | 21.6 | 44 |
| 55 | Births in a private health facility that were delivered by caesarean section (%) | 70.7 | 44 |
| 56 | Births in a public health facility that were delivered by caesarean section (%) | 15.3 | 44 |
| 57 | Children age 12-23 months fully vaccinated based on information from either vaccination card | 90.5 | 44 |
| 58 | Children age 12-23 months fully vaccinated based on information from vaccination card | 90.7 | 44 |
| 59 | Children age 12-23 months who have received BCG (%) | 97.3 | 44 |
| 60 | Children age 12-23 months who have received 3 doses of polio vaccine 13 (%) | 91.7 | 44 |
| 61 | Children age 12-23 months who have received 3 doses of penta or DPT vaccine (%) | 94.7 | 44 |
| 62 | Children age 12-23 months who have received the first dose of measles-containing | 95.9 | 44 |
| 63 | Children age 24-35 months who have received a second dose of measles-containing | 45.3 | 44 |
| 64 | Children age 12-23 months who have received 3 doses of rotavirus vaccine 14 (%) | 88.1 | 44 |
| 65 | Children age 12-23 months who have received 3 doses of penta or hepatitis B vaccine (%) | 94.4 | 44 |
| 66 | Children age 9-35 months who received a vitamin A dose in the last 6 months (%) | 87.1 | 44 |
| 67 | Children age 12-23 months who received most of their vaccinations in a public health | 98.1 | 44 |
| 68 | Children age 12-23 months who received most of their vaccinations in a private health | 1.4 | 44 |
| 69 | Prevalence of diarrhoea in the 2 weeks preceding the survey (%) | 9.7 | 44 |
| 70 | Children with diarrhoea in the 2 weeks preceding the survey who received oral rehydration | 65.7 | 44 |
| 71 | Children with diarrhoea in the 2 weeks preceding the survey who received zinc (%) | 36.9 | 44 |
| 72 | Children with diarrhoea in the 2 weeks preceding the survey taken to a health facility or health | 56.2 | 44 |
| 73 | Prevalence of symptoms of acute respiratory infection (ARI) in the 2 weeks preceding the | 3.2 | 44 |
| 74 | Children with fever or symptoms of ARI in the 2 weeks preceding the survey taken to a health | 65.4 | 44 |
| 75 | Children under age 3 years breastfed within one hour of birth15 (%) | 68.5 | 45 |
| 76 | Children under age 6 months exclusively breastfed16 (%) | 72.9 | 45 |
| 77 | Children age 6-8 months receiving solid or semi-solid food and breastmilk16 (%) | 67.5 | 45 |
| 78 | Breastfeeding children age 6 -23 months receiving an adequate diet 16, 17 (%) | 20.3 | 45 |
| 79 | Non-breastfeeding children age 6 -23 months receiving an adequate diet 16, 17 (%) | 22.5 | 45 |
| 80 | Total children age 6 -23 months receiving an adequate diet 16, 17 (%) | 20.4 | 45 |
| 81 | Children under 5 years who are stunted (height-for-age)18 (%) | 31.0 | 45 |
| 82 | Children under 5 years who are wasted (weight-for-height)18 (%) | 18.1 | 45 |
| 83 | Children under 5 years who are severely wasted (weight-for-height)19 (%) | 6.1 | 45 |
| 84 | Children under 5 years who are underweight (weight-for-age)18 (%) | 29.7 | 45 |
| 85 | Children under 5 years who are overweight (weight-for-height)20 (%) | 3.5 | 45 |
| 86 | Women whose Body Mass Index (BMI) is below normal (BMI <18.5 kg/m 2)21 (%) | 20.8 | 45 |
| 87 | Men whose Body Mass Index (BMI) is below normal (BMI <18.5 kg/m2) (%) | 15.3 | 45 |
| 88 | Women who are overweight or obese (BMI ≥25.0 kg/m2)21 (%) | 23.0 | 45 |
| 89 | Men who are overweight or obese (BMI ≥25.0 kg/m2) (%) | 22.2 | 45 |
| 90 | Women who have high risk waist-to-hip ratio (≥0.85) (%) | 63.0 | 45 |
| 91 | Men who have high risk waist -to-hip ratio (≥0.90) (%) | 55.6 | 45 |
| 92 | Children age 6-59 months who are anaemic (<11.0 g/dl) 22 (%) | 64.2 | 45 |
| 93 | Non-pregnant women age 15-49 years who are anaemic (<12.0 g/dl)22 (%) | 64.4 | 45 |
| 94 | Pregnant women age 15-49 years who are anaemic (<11.0 g/dl)22 (%) | 61.8 | 45 |
| 95 | All women age 15 -49 years who are anaemic 22 (%) | 64.3 | 45 |
| 96 | All women age 15-19 years who are anaemic22 (%) | 65.5 | 45 |
| 97 | Men age 15-49 years who are anaemic (<13.0 g/dl)22 (%) | 28.5 | 45 |
| 98 | Men age 15 -19 years who are anaemic (<13.0 g/dl) 22 (%) | 30.0 | 45 |
| 99 | Blood sugar level - high (141-160 mg/dl)23 (%) | 6.5 | 45 |
| 100 | Blood sugar level - very high (>160 mg/dl) 23 (%) | 6.6 | 45 |
| 101 | Blood sugar level - high or very high (>140 mg/dl) or taking medicine to control blood | 14.0 | 45 |
| 102 | Blood sugar level - high (141-160 mg/dl)23 (%) | 7.3 | 45 |
| 103 | Blood sugar level - very high (>160 mg/dl) 23 (%) | 8.7 | 45 |
| 104 | Blood sugar level - high or very high (>140 mg/dl) or taking medicine to control blood | 17.0 | 45 |
| 105 | Mildly elevated blood pressure (Systolic 140 -159 mm of Hg and/or | 12.9 | 45 |
| 106 | Moderately or severely elevated blood pressure (Systolic ≥160 mm of Hg and/or | 5.6 | 45 |
| 107 | Elevated blood pressure (Systolic ≥140 mm of Hg and/or Diastolic ≥90 mm of Hg) or taking | 22.4 | 45 |
| 108 | Mildly elevated blood pressure (Systolic 140 -159 mm of Hg and/or | 16.8 | 45 |
| 109 | Moderately or severely elevated blood pressure (Systolic ≥160 mm of Hg and/or | 6.1 | 45 |
| 110 | Elevated blood pressure (Systolic ≥140 mm of Hg and/or Diastolic ≥90 mm of Hg) or taking | 25.6 | 45 |
| 111 | Ever undergone a screening test for cervical cancer (%) | 0.9 | 46 |
| 112 | Ever undergone a breast examination for breast cancer (%) | 0.2 | 46 |
| 113 | Ever undergone an oral cavity examination for oral cancer (%) | 0.3 | 46 |
| 114 | Ever undergone an oral cavity examination for oral cancer (%) | 1.2 | 46 |
| 115 | Women who have comprehensive knowledge 24 of HIV/AIDS (%) | 21.4 | 46 |
| 116 | Men who have comprehensive knowledge24 of HIV/AIDS (%) | 24.6 | 46 |
| 117 | Women who know that consistent condom use can reduce the chance of getting | 71.9 | 46 |
| 118 | Men who know that consistent condom use can reduce the chance of getting HIV/AIDS (%) | 86.6 | 46 |
| 119 | Currently married women who usually participate in three household decisions25 (%) | 90.2 | 46 |
| 120 | Women who worked in the last 12 months and were paid in cash (%) | 25.7 | 46 |
| 121 | Women owning a house and/or land (alone or jointly with others) (%) | 43.5 | 46 |
| 122 | Women having a bank or savings account that they themselves use (%) | 86.5 | 46 |
| 123 | Women having a mobile phone that they themselves use (%) | 50.1 | 46 |
| 124 | Women age 15-24 years who use hygienic methods of protection during their | 81.5 | 46 |
| 125 | Ever-married women age 18-49 years who have ever experienced spousal violence27 (%) | 30.6 | 46 |
| 126 | Ever-married women age 18-49 years who have experienced physical violence during any | 3.5 | 46 |
| 127 | Young women age 18-29 years who experienced sexual violence by age 18 (%) | 0.8 | 46 |
| 128 | Women age 15 years and above who use any kind of tobacco (%) | 26.0 | 46 |
| 129 | Men age 15 years and above who use any kind of tobacco (%) | 51.6 | 46 |
| 130 | Women age 15 years and above who consume alcohol (%) | 4.3 | 46 |
| 131 | Men age 15 years and above who consume alcohol (%) | 28.8 | 46 |

**NFHS-6** · 101 extracted indicator rows.

| Row | Indicator | NFHS-5 Total as printed in NFHS-6 | NFHS-6 Total | Reviewed change | PDF page |
| --- | --- | --- | --- | --- | --- |
| 1 | Population below age 5 years (%) | 7.8 | 7.1 | — | 99 |
| 2 | Population below age 15 years (%) | 24.9 | 22.3 | — | 99 |
| 3 | Population age 60 years and above (%) | 13.4 | 15.6 | — | 99 |
| 4 | Household electricity access | 97.0 | 97.7 | +0.7 | 99 |
| 5 | Population living in households with an improved drinking-water source 1 (%) | 91.1 | 92.5 | — | 99 |
| 6 | Households using iodized salt (%) | 98.0 | 93.6 | — | 99 |
| 7 | Households with any usual member covered under a health insurance/financing scheme (%) | 47.9 | 82.7 | — | 99 |
| 8 | Households with any usual member having a bank account/post office account (%) | 96.9 | 98.5 | — | 99 |
| 9 | Female population age 6+ ever attended school | 71.5 | 73.1 | +1.6 | 99 |
| 10 | Households with any usual female members owning a house and/or land (alone or jointly with | 12.2 | 13.5 | — | 99 |
| 11 | Children age 2-4 years who attended pre-school (%) | 56.8 | 55.0 | — | 99 |
| 12 | Women with 10 or more years of schooling | 33.0 | 43.9 | +10.9 | 99 |
| 13 | Men with 10 or more years of schooling | 38.6 | 49.1 | +10.5 | 99 |
| 14 | Women who have ever used the internet (%) | 24.9 | 51.8 | — | 99 |
| 15 | Men who have ever used the internet (%) | 50.7 | 73.2 | — | 99 |
| 16 | Women age 20–24 married before age 18 | 20.5 | 18.6 | -1.9 | 99 |
| 17 | Men age 25-29 years married before age 21 years (%) | 13.3 | 12.5 | — | 99 |
| 18 | Total fertility rate, children per woman | 1.8 | 1.7 | -0.1 | 99 |
| 19 | Women age 15-19 years who were already mothers or pregnant at the time of the survey (%) | 7.5 | 6.5 | — | 99 |
| 20 | Any method2 (%) | 74.1 | 66.2 | — | 99 |
| 21 | Any modern method2 (%) | 48.8 | 40.8 | — | 99 |
| 22 | Any traditional method (%) | 25.3 | 25.4 | — | 99 |
| 23 | Female sterilization (%) | 28.0 | 26.1 | — | 99 |
| 24 | Male sterilization (%) | 0.3 | 0.3 | — | 99 |
| 25 | Total unmet need for family planning | 7.2 | 10 | +2.8 | 99 |
| 26 | Unmet need for spacing 3 (%) | 2.6 | 4.7 | — | 99 |
| 27 | Unmet need for limiting3 (%) | 4.6 | 5.3 | — | 99 |
| 28 | First-trimester antenatal check-up | 76.9 | 70.6 | -6.3 | 99 |
| 29 | Mothers who had any antenatal care visits (%) | 98.3 | 94.6 | — | 99 |
| 30 | At least four antenatal care visits | 78.1 | 73.6 | -4.5 | 99 |
| 31 | Mothers whose last birth was protected against neonatal tetanus 4 (%) | 95.2 | 95.8 | — | 99 |
| 32 | Mothers who consumed iron folic acid for 100 days or more when they were pregnant (%) | 60.8 | 74.5 | — | 99 |
| 33 | Mothers who consumed iron folic acid for 180 days or more when they were pregnant (%) | 34.4 | 51.3 | — | 99 |
| 34 | Registered pregnancies for which the mother received a Mother and Child Protection (MCP) | 99.4 | 99.3 | — | 99 |
| 35 | Institutional births | 92.2 | 93.9 | +1.7 | 99 |
| 36 | Institutional births in public facility (%) | 78.7 | 75.0 | — | 99 |
| 37 | Births attended by skilled health personnel | 91.8 | 93.0 | +1.2 | 99 |
| 38 | Caesarean births | 21.6 | 29.4 | +7.8 | 99 |
| 39 | Births in a private health facility that were delivered by caesarean section (%) | 70.7 | 76.8 | — | 99 |
| 40 | Births in a public health facility that were delivered by caesarean section (%) | 15.3 | 19.9 | — | 99 |
| 41 | Mothers who received postnatal care from a doctor/nurse/LHV/ANM/midwife/other health | 88.4 | 86.3 | — | 100 |
| 42 | Children born at home who were taken to a health facility for a check-up within 24 hours of | 10.5 | 18.4 | — | 100 |
| 43 | Children who received postnatal care from a doctor/nurse/LHV/ANM/midwife/ other health | 88.1 | 86.9 | — | 100 |
| 44 | Full vaccination, card or maternal recall | 90.7 | 90.8 | — | 100 |
| 45 | Full vaccination, card only | 90.7 | 92.7 | +2.0 | 100 |
| 46 | Children age 12-23 months who have received any vaccine (%) | 97.9 | 96.1 | — | 100 |
| 47 | BCG vaccination | 97.3 | 95.3 | -2.0 | 100 |
| 48 | Children age 12-23 months who have received 3 doses of polio vaccine 8 (%) | 91.7 | 92.3 | — | 100 |
| 49 | Children age 12-23 months who have received 3 doses of pentavalent vaccine (%) | 95.0 | 93.8 | — | 100 |
| 50 | Children age 12-23 months who have received the first dose of measles-containing | 95.9 | 94.0 | — | 100 |
| 51 | Children age 24-35 months who have received a second dose of measles-containing | 78.9 | 86.3 | — | 100 |
| 52 | Children age 12-23 months who have received birth dose of hepatitis B vaccine (%) | 88.6 | 89.6 | — | 100 |
| 53 | Children age 12-23 months who have received 3 doses of rotavirus vaccine (%) | 88.1 | 89.5 | — | 100 |
| 54 | Children age 9-35 months who received a vitamin A dose in the last 6 months (%) | 87.1 | 82.7 | — | 100 |
| 55 | Children age 12-23 months who received most of their vaccinations in a public health | 98.1 | 98.8 | — | 100 |
| 56 | Children age 12-23 months who received most of their vaccinations in a private health | 1.4 | 0.7 | — | 100 |
| 57 | Prevalence of diarrhoea in the 2 weeks preceding the survey (%) | 9.7 | 11.2 | — | 100 |
| 58 | Prevalence of severe diarrhoea in the 2 weeks preceding the survey (%) | 1.0 | 0.9 | — | 100 |
| 59 | Prevalence of symptoms of acute respiratory infection (ARI) in the 2 weeks preceding the | 3.2 | 1.2 | — | 100 |
| 60 | Children with fever or symptoms of ARI in the 2 weeks preceding the survey taken to a health | 65.4 | 69.5 | — | 100 |
| 61 | Children under age 3 years breastfed within one hour of birth 9 (%) | 68.5 | 60.9 | — | 100 |
| 62 | Children under age 6 months exclusively breastfed 10 (%) | 72.9 | 66.7 | — | 100 |
| 63 | Children under age 6 months currently breastfeeding 10 (%) | 97.1 | 95.4 | — | 100 |
| 64 | Children under age 6 months exclusively breastfed or breastfeeding and consuming plain | 83.0 | 80.5 | — | 100 |
| 65 | Children age 6-8 months receiving solid or semi-solid food and breastmilk 10 (%) | 67.5 | 66.7 | — | 100 |
| 66 | Breastfeeding children age 6-23 months receiving an adequate diet 10, 11 (%) | 20.1 | 15.3 | — | 100 |
| 67 | Non-breastfeeding children age 6-23 months receiving an adequate diet 10, 11 (%) | 21.3 | 6.6 | — | 100 |
| 68 | Total children age 6-23 months receiving an adequate diet 10, 11 (%) | 20.1 | 14.9 | — | 100 |
| 69 | Child stunting | 31.0 | 26.8 | -4.2 | 100 |
| 70 | Child wasting | 18.1 | 22.1 | +4.0 | 100 |
| 71 | Severe child wasting | 6.1 | 5.8 | -0.3 | 100 |
| 72 | Child underweight | 29.7 | 31.6 | +1.9 | 100 |
| 73 | Child overweight | 3.5 | 2.1 | -1.4 | 100 |
| 74 | Women whose Body Mass Index (BMI) is below normal (BMI <18.5 kg/m 2)15 (%) | 20.8 | 18.9 | — | 101 |
| 75 | Men whose Body Mass Index (BMI) is below normal (BMI <18.5 kg/m 2) (%) | 15.3 | 17.5 | — | 101 |
| 76 | Women aged 15–49 overweight or obese (BMI ≥25), % | 23.0 | 29.7 | — | 101 |
| 77 | Men aged 15–49 overweight or obese (BMI ≥25), % | 22.2 | 27.8 | — | 101 |
| 78 | Blood sugar level - high (141-160 mg/dl)16 (%) | 6.5 | 9.5 | — | 101 |
| 79 | Blood sugar level - very high (>160 mg/dl)16 (%) | 6.6 | 11.1 | — | 101 |
| 80 | Blood sugar level - high or very high (>140 mg/dl) or taking medicine to control blood | 14.0 | 21.7 | — | 101 |
| 81 | Blood sugar level - high (141-160 mg/dl)16 (%) | 7.3 | 10.7 | — | 101 |
| 82 | Blood sugar level - very high (>160 mg/dl)16 (%) | 8.7 | 14.6 | — | 101 |
| 83 | Blood sugar level - high or very high (>140 mg/dl) or taking medicine to control blood | 17.0 | 26.6 | — | 101 |
| 84 | Mildly elevated blood pressure (Systolic 140-159 mm of Hg and/or | 12.9 | 11.2 | — | 101 |
| 85 | Women aged 15+ with moderately or severely elevated blood pressure, % | 5.6 | 5.5 | — | 101 |
| 86 | Women aged 15+ with elevated blood pressure or taking medicine for it, % | 22.4 | 22.3 | — | 101 |
| 87 | Mildly elevated blood pressure (Systolic 140-159 mm of Hg and/or | 16.8 | 13.6 | — | 101 |
| 88 | Men aged 15+ with moderately or severely elevated blood pressure, % | 6.1 | 3.5 | — | 101 |
| 89 | Men aged 15+ with elevated blood pressure or taking medicine for it, % | 25.6 | 24.9 | — | 101 |
| 90 | Currently married women who usually participate in three household decisions 17 (%) | 90.2 | 87.2 | — | 101 |
| 91 | Women who worked in the last 12 months and were paid in cash (%) | 25.7 | 26.7 | — | 101 |
| 92 | Women having a bank or savings account that they themselves use (%) | 86.5 | 90.6 | — | 101 |
| 93 | Women having a mobile phone that they themselves use (%) | 50.1 | 63.6 | — | 101 |
| 94 | Women age 15-24 years who use hygienic methods of protection during their menstrual | 81.7 | 88.7 | — | 101 |
| 95 | Ever-married women age 18-49 years who have ever experienced spousal violence 19 (%) | 30.3 | 18.9 | — | 101 |
| 96 | Ever-married women age 18-49 years who have experienced physical violence during any | 3.5 | 2.6 | — | 101 |
| 97 | Young women age 18-29 years who experienced sexual violence by age 18 (%) | 0.7 | 0.5 | — | 101 |
| 98 | Women age 15 years and above who use any kind of tobacco (%) | 26.1 | 22.8 | — | 101 |
| 99 | Men age 15 years and above who use any kind of tobacco (%) | 51.7 | 48.3 | — | 101 |
| 100 | Women age 15 years and above who consume alcohol (%) | 4.3 | 3.1 | — | 101 |
| 101 | Men age 15 years and above who consume alcohol (%) | 28.7 | 26.8 | — | 101 |

### Punjab

**NFHS-5** · NFHS5-II · 131 indicator rows.

| Row | Indicator | Total | PDF page |
| --- | --- | --- | --- |
| 1 | Female population age 6 years and above who ever attended school (%) | 77.2 | 49 |
| 2 | Population below age 15 years (%) | 22.0 | 49 |
| 3 | Sex ratio of the total population (females per 1,000 males) | 938 | 49 |
| 4 | Sex ratio at birth for children born in the last five years (females per 1,000 males) | 904 | 49 |
| 5 | Children under age 5 years whose birth was registered with the civil authority (%) | 97.7 | 49 |
| 6 | Deaths in the last 3 years registered with the civil authority (%) | 91.2 | 49 |
| 7 | Population living in households with electricity (%) | 99.7 | 49 |
| 8 | Population living in households with an improved drinking -water source1 (%) | 98.8 | 49 |
| 9 | Population living in households that use an improved sanitation facility 2 (%) | 86.6 | 49 |
| 10 | Households using clean fuel for cooking3 (%) | 76.7 | 49 |
| 11 | Households using iodized salt (%) | 94.8 | 49 |
| 12 | Households with any usual member covered under a health insurance/financing scheme (%) | 25.2 | 49 |
| 13 | Children age 5 years who attended pre-primary school during the school year 2019-20 (%) | 7.8 | 49 |
| 14 | Women who are literate 4 (%) | 79.4 | 49 |
| 15 | Men who are literate4 (%) | 86.8 | 49 |
| 16 | Women with 10 or more years of schooling (%) | 56.0 | 49 |
| 17 | Men with 10 or more years of schooling (%) | 58.7 | 49 |
| 18 | Women who have ever used the internet (%) | 54.8 | 49 |
| 19 | Men who have ever used the internet (%) | 78.2 | 49 |
| 20 | Women age 20-24 years married before age 18 years (%) | 8.7 | 49 |
| 21 | Men age 25-29 years married before age 21 years (%) | 11.4 | 49 |
| 22 | Total fertility rate (children per woman) | 1.6 | 49 |
| 23 | Women age 15-19 years who were already mothers or pregnant at the time of the survey (%) | 3.1 | 49 |
| 24 | Adolescent fertility rate for women age 15 -19 years5 | 21 | 49 |
| 25 | Neonatal mortality rate (NNMR) | 21.8 | 49 |
| 26 | Infant mortality rate (IMR) | 28.0 | 49 |
| 27 | Under-five mortality rate (U5MR) | 32.7 | 49 |
| 28 | Any method6 (%) | 66.6 | 49 |
| 29 | Any modern method 6 (%) | 50.5 | 49 |
| 30 | Female sterilization (%) | 22.8 | 49 |
| 31 | Male sterilization (%) | 0.5 | 49 |
| 32 | IUD/PPIUD (%) | 3.1 | 49 |
| 33 | Pill (%) | 1.5 | 49 |
| 34 | Condom (%) | 22.2 | 49 |
| 35 | Injectables (%) | 0.1 | 49 |
| 36 | Total unmet need7 (%) | 9.9 | 49 |
| 37 | Unmet need for spacing7 (%) | 3.7 | 49 |
| 38 | Health worker ever talked to female non-users about family planning (%) | 21.7 | 49 |
| 39 | Current users ever told about side effects of current method8 (%) | 78.2 | 49 |
| 40 | Mothers who had an antenatal check-up in the first trimester (%) | 68.5 | 50 |
| 41 | Mothers who had at least 4 antenatal care visits (%) | 59.3 | 50 |
| 42 | Mothers whose last birth was protected against neonatal tetanus9 (%) | 89.7 | 50 |
| 43 | Mothers who consumed iron folic acid for 100 days or more when they were pregnant (%) | 55.4 | 50 |
| 44 | Mothers who consumed iron folic acid for 180 days or more when they were pregnant (%) | 40.5 | 50 |
| 45 | Registered pregnancies for which the mother received a Mother and Child Protection (MCP) card (%) | 96.9 | 50 |
| 46 | Mothers who received postnatal care from a doctor/nurse/LHV/ANM/midwife/other health personnel within 2 days of delivery (%) | 86.2 | 50 |
| 47 | Average out-of-pocket expenditure per delivery in a public health facility (Rs.) | 3,745 | 50 |
| 48 | Children born at home who were taken to a health facility for a check -up within 24 hours of birth (%) | 1.3 | 50 |
| 49 | Children who received postnatal care from a doctor/nurse/LHV/ANM/midwife/other health personnel within 2 days of delivery (%) | 84.7 | 50 |
| 50 | Institutional births (%) | 94.3 | 50 |
| 51 | Institutional births in public facility (%) | 53.9 | 50 |
| 52 | Home births that were conducted by skilled health personnel 10 (%) | 2.6 | 50 |
| 53 | Births attended by skilled health personnel10 (%) | 95.6 | 50 |
| 54 | Births delivered by caesarean section (%) | 38.5 | 50 |
| 55 | Births in a private health facility that were delivered by caesarean section (%) | 55.5 | 50 |
| 56 | Births in a public health facility that were delivered by caesarean section (%) | 29.9 | 50 |
| 57 | Children age 12-23 months fully vaccinated based on information from either vaccination card or mother's recall11 (%) | 76.2 | 50 |
| 58 | Children age 12-23 months fully vaccinated based on information from vaccination card only12 (%) | 85.2 | 50 |
| 59 | Children age 12-23 months who have received BCG (%) | 95.3 | 50 |
| 60 | Children age 12-23 months who have received 3 doses of polio vaccine13 (%) | 79.7 | 50 |
| 61 | Children age 12-23 months who have received 3 doses of penta or DPT vaccine (%) | 88.5 | 50 |
| 62 | Children age 12-23 months who have received the first dose of measles-containing vaccine (MCV) (%) | 88.1 | 50 |
| 63 | Children age 24-35 months who have received a second dose of measles-containing vaccine (MCV) (%) | 27.1 | 50 |
| 64 | Children age 12-23 months who have received 3 doses of rotavirus vaccine 14 (%) | 65.9 | 50 |
| 65 | Children age 12-23 months who have received 3 doses of penta or hepatitis B vaccine (%) | 85.4 | 50 |
| 66 | Children age 9-35 months who received a vitamin A dose in the last 6 months (%) | 69.9 | 50 |
| 67 | Children age 12-23 months who received most of their vaccinations in a public health facility (%) | 90.6 | 50 |
| 68 | Children age 12-23 months who received most of their vaccinations in a private health facility (%) | 8.0 | 50 |
| 69 | Prevalence of diarrhoea in the 2 weeks preceding the survey (%) | 4.9 | 50 |
| 70 | Children with diarrhoea in the 2 weeks preceding the survey who received oral rehydration salts (ORS) (%) | 60.7 | 50 |
| 71 | Children with diarrhoea in the 2 weeks preceding the survey who received zinc (%) | 27.0 | 50 |
| 72 | Children with diarrhoea in the 2 weeks preceding the survey taken to a health facility or health provider (%) | 78.0 | 50 |
| 73 | Prevalence of symptoms of acute respiratory infection (ARI) in the 2 weeks preceding the survey (%) | 2.5 | 50 |
| 74 | Children with fever or symptoms of ARI in the 2 weeks preceding the survey taken to a health facility or health provider (%) | 57.3 | 50 |
| 75 | Children under age 3 years breastfed within one hour of birth15 (%) | 53.1 | 51 |
| 76 | Children under age 6 months exclusively breastfed16 (%) | 55.5 | 51 |
| 77 | Children age 6-8 months receiving solid or semi-solid food and breastmilk16 (%) | 46.2 | 51 |
| 78 | Breastfeeding children age 6 -23 months receiving an adequate diet 16, 17 (%) | 10.5 | 51 |
| 79 | Non-breastfeeding children age 6 -23 months receiving an adequate diet 16, 17 (%) | 16.3 | 51 |
| 80 | Total children age 6 -23 months receiving an adequate diet 16, 17 (%) | 11.9 | 51 |
| 81 | Children under 5 years who are stunted (height-for-age)18 (%) | 24.5 | 51 |
| 82 | Children under 5 years who are wasted (weight-for-height)18 (%) | 10.6 | 51 |
| 83 | Children under 5 years who are severely wasted (weight-for-height)19 (%) | 3.7 | 51 |
| 84 | Children under 5 years who are underweight (weight-for-age)18 (%) | 16.9 | 51 |
| 85 | Children under 5 years who are overweight (weight-for-height)20 (%) | 4.1 | 51 |
| 86 | Women whose Body Mass Index (BMI) is below normal (BMI <18.5 kg/m 2)21 (%) | 12.7 | 51 |
| 87 | Men whose Body Mass Index (BMI) is below normal (BMI <18.5 kg/m2) (%) | 12.5 | 51 |
| 88 | Women who are overweight or obese (BMI ≥25.0 kg/m2)21 (%) | 40.8 | 51 |
| 89 | Men who are overweight or obese (BMI ≥25.0 kg/m2) (%) | 32.2 | 51 |
| 90 | Women who have high risk waist-to-hip ratio (≥0.85) (%) | 72.8 | 51 |
| 91 | Men who have high risk waist -to-hip ratio (≥0.90) (%) | 63.1 | 51 |
| 92 | Children age 6-59 months who are anaemic (<11.0 g/dl) 22 (%) | 71.1 | 51 |
| 93 | Non-pregnant women age 15-49 years who are anaemic (<12.0 g/dl)22 (%) | 58.8 | 51 |
| 94 | Pregnant women age 15-49 years who are anaemic (<11.0 g/dl)22 (%) | 51.7 | 51 |
| 95 | All women age 15 -49 years who are anaemic 22 (%) | 58.7 | 51 |
| 96 | All women age 15-19 years who are anaemic22 (%) | 60.3 | 51 |
| 97 | Men age 15-49 years who are anaemic (<13.0 g/dl)22 (%) | 22.6 | 51 |
| 98 | Men age 15 -19 years who are anaemic (<13.0 g/dl) 22 (%) | 32.7 | 51 |
| 99 | Blood sugar level - high (141-160 mg/dl)23 (%) | 5.8 | 51 |
| 100 | Blood sugar level - very high (>160 mg/dl) 23 (%) | 8.0 | 51 |
| 101 | Blood sugar level - high or very high (>140 mg/dl) or taking medicine to control blood sugar level23 (%) | 14.7 | 51 |
| 102 | Blood sugar level - high (141-160 mg/dl)23 (%) | 6.3 | 51 |
| 103 | Blood sugar level - very high (>160 mg/dl) 23 (%) | 7.0 | 51 |
| 104 | Blood sugar level - high or very high (>140 mg/dl) or taking medicine to control blood sugar level23 (%) | 14.1 | 51 |
| 105 | Mildly elevated blood pressure (Systolic 140 -159 mm of Hg and/or Diastolic 90-99 mm of Hg) (%) | 18.5 | 51 |
| 106 | Moderately or severely elevated blood pressure (Systolic ≥160 mm of Hg and/or Diastolic ≥100 mm of Hg) (%) | 8.6 | 51 |
| 107 | Elevated blood pressure (Systolic ≥140 mm of Hg and/or Diastolic ≥90 mm of Hg) or taking medicine to control blood pressure (%) | 31.2 | 51 |
| 108 | Mildly elevated blood pressure (Systolic 140 -159 mm of Hg and/or Diastolic 90-99 mm of Hg) (%) | 24.5 | 51 |
| 109 | Moderately or severely elevated blood pressure (Systolic ≥160 mm of Hg and/or Diastolic ≥100 mm of Hg) (%) | 11.0 | 51 |
| 110 | Elevated blood pressure (Systolic ≥140 mm of Hg and/or Diastolic ≥90 mm of Hg) or taking medicine to control blood pressure (%) | 37.7 | 51 |
| 111 | Ever undergone a screening test for cervical cancer (%) | 2.4 | 52 |
| 112 | Ever undergone a breast examination for breast cancer (%) | 0.3 | 52 |
| 113 | Ever undergone an oral cavity examination for oral cancer (%) | 0.4 | 52 |
| 114 | Ever undergone an oral cavity examination for oral cancer (%) | 0.4 | 52 |
| 115 | Women who have comprehensive knowledge 24 of HIV/AIDS (%) | 20.6 | 52 |
| 116 | Men who have comprehensive knowledge24 of HIV/AIDS (%) | 37.6 | 52 |
| 117 | Women who know that consistent condom use can reduce the chance of getting HIV/AIDS (%) | 68.1 | 52 |
| 118 | Men who know that consistent condom use can reduce the chance of getting HIV/AIDS (%) | 86.4 | 52 |
| 119 | Currently married women who usually participate in three household decisions25 (%) | 91.4 | 52 |
| 120 | Women who worked in the last 12 months and were paid in cash (%) | 22.3 | 52 |
| 121 | Women owning a house and/or land (alone or jointly with others) (%) | 63.5 | 52 |
| 122 | Women having a bank or savings account that they themselves use (%) | 81.6 | 52 |
| 123 | Women having a mobile phone that they themselves use (%) | 61.2 | 52 |
| 124 | Women age 15-24 years who use hygienic methods of protection during their menstrual period26 (%) | 93.2 | 52 |
| 125 | Ever-married women age 18-49 years who have ever experienced spousal violence27 (%) | 11.6 | 52 |
| 126 | Ever-married women age 18-49 years who have experienced physical violence during any pregnancy (%) | 1.6 | 52 |
| 127 | Young women age 18-29 years who experienced sexual violence by age 18 (%) | 0.1 | 52 |
| 128 | Women age 15 years and above who use any kind of tobacco (%) | 0.4 | 52 |
| 129 | Men age 15 years and above who use any kind of tobacco (%) | 12.9 | 52 |
| 130 | Women age 15 years and above who consume alcohol (%) | 0.3 | 52 |
| 131 | Men age 15 years and above who consume alcohol (%) | 22.8 | 52 |

**NFHS-6** · 101 extracted indicator rows.

| Row | Indicator | NFHS-5 Total as printed in NFHS-6 | NFHS-6 Total | Reviewed change | PDF page |
| --- | --- | --- | --- | --- | --- |
| 1 | Population below age 5 years (%) | 6.5 | 6.1 | — | 103 |
| 2 | Population below age 15 years (%) | 22.0 | 21.4 | — | 103 |
| 3 | Population age 60 years and above (%) | 13.7 | 14.4 | — | 103 |
| 4 | Household electricity access | 99.7 | 99.7 | +0.0 | 103 |
| 5 | Population living in households with an improved drinking-water source 1 (%) | 98.8 | 99.4 | — | 103 |
| 6 | Households using iodized salt (%) | 94.8 | 92.7 | — | 103 |
| 7 | Households with any usual member covered under a health insurance/financing scheme (%) | 25.2 | 49.2 | — | 103 |
| 8 | Households with any usual member having a bank account/post office account (%) | 95.5 | 96.8 | — | 103 |
| 9 | Female population age 6+ ever attended school | 77.2 | 79.9 | +2.7 | 103 |
| 10 | Households with any usual female members owning a house and/or land (alone or jointly with | 9.3 | 13.4 | — | 103 |
| 11 | Children age 2-4 years who attended pre-school (%) | 40.3 | 57.6 | — | 103 |
| 12 | Women with 10 or more years of schooling | 56.0 | 60.6 | +4.6 | 103 |
| 13 | Men with 10 or more years of schooling | 58.7 | 64.3 | +5.6 | 103 |
| 14 | Women who have ever used the internet (%) | 54.8 | 74.5 | — | 103 |
| 15 | Men who have ever used the internet (%) | 78.2 | 87.3 | — | 103 |
| 16 | Women age 20–24 married before age 18 | 8.7 | 10.2 | +1.5 | 103 |
| 17 | Men age 25-29 years married before age 21 years (%) | 11.4 | 7.7 | — | 103 |
| 18 | Total fertility rate, children per woman | 1.6 | 1.6 | +0.0 | 103 |
| 19 | Women age 15-19 years who were already mothers or pregnant at the time of the survey (%) | 3.1 | 2.8 | — | 103 |
| 20 | Any method2 (%) | 66.6 | 69.5 | — | 103 |
| 21 | Any modern method2 (%) | 50.5 | 48.1 | — | 103 |
| 22 | Any traditional method (%) | 16.1 | 21.4 | — | 103 |
| 23 | Female sterilization (%) | 22.8 | 21.7 | — | 103 |
| 24 | Male sterilization (%) | 0.5 | 0.6 | — | 103 |
| 25 | Total unmet need for family planning | 9.9 | 6.7 | -3.2 | 103 |
| 26 | Unmet need for spacing 3 (%) | 3.7 | 2.8 | — | 103 |
| 27 | Unmet need for limiting3 (%) | 6.2 | 3.9 | — | 103 |
| 28 | First-trimester antenatal check-up | 68.5 | 79.1 | +10.6 | 103 |
| 29 | Mothers who had any antenatal care visits (%) | 91.3 | 93.2 | — | 103 |
| 30 | At least four antenatal care visits | 59.7 | 72.0 | — | 103 |
| 31 | Mothers whose last birth was protected against neonatal tetanus 4 (%) | 89.7 | 94.9 | — | 103 |
| 32 | Mothers who consumed iron folic acid for 100 days or more when they were pregnant (%) | 55.4 | 70.9 | — | 103 |
| 33 | Mothers who consumed iron folic acid for 180 days or more when they were pregnant (%) | 40.5 | 49.6 | — | 103 |
| 34 | Registered pregnancies for which the mother received a Mother and Child Protection (MCP) | 96.9 | 96.2 | — | 103 |
| 35 | Institutional births | 94.3 | 96.1 | +1.8 | 103 |
| 36 | Institutional births in public facility (%) | 53.9 | 48.9 | — | 103 |
| 37 | Births attended by skilled health personnel | 95.6 | 97.0 | +1.4 | 103 |
| 38 | Caesarean births | 38.5 | 46.6 | +8.1 | 103 |
| 39 | Births in a private health facility that were delivered by caesarean section (%) | 55.5 | 63.3 | — | 103 |
| 40 | Births in a public health facility that were delivered by caesarean section (%) | 29.9 | 34.2 | — | 103 |
| 41 | Mothers who received postnatal care from a doctor/nurse/LHV/ANM/midwife/other health + | 86.2 | 87.8 | — | 104 |
| 42 | Children born at home who were taken to a health facility for a check-up within 24 hours of | 1.3 | 3.6 | — | 104 |
| 43 | Children who received postnatal care from a doctor/nurse/LHV/ANM/midwife/ other health + | 84.7 | 88.9 | — | 104 |
| 44 | Full vaccination, card or maternal recall | 76.2 | 77.7 | +1.5 | 104 |
| 45 | Full vaccination, card only | 85.2 | 79.9 | -5.3 | 104 |
| 46 | Children age 12-23 months who have received any vaccine (%) | 96.3 | 97.9 | — | 104 |
| 47 | BCG vaccination | 95.3 | 97.8 | +2.5 | 104 |
| 48 | Children age 12-23 months who have received 3 doses of polio vaccine 8 (%) | 79.7 | 80.4 | — | 104 |
| 49 | Children age 12-23 months who have received 3 doses of pentavalent vaccine (%) | 88.5 | 86.7 | — | 104 |
| 50 | Children age 12-23 months who have received the first dose of measles-containing | 88.1 | 92.3 | — | 104 |
| 51 | Children age 24-35 months who have received a second dose of measles-containing | 56.7 | 60.7 | — | 104 |
| 52 | Children age 12-23 months who have received birth dose of hepatitis B vaccine (%) | 85.8 | 80.8 | — | 104 |
| 53 | Children age 12-23 months who have received 3 doses of rotavirus vaccine (%) | 65.9 | 80.4 | — | 104 |
| 54 | Children age 9-35 months who received a vitamin A dose in the last 6 months (%) | 69.9 | 78.1 | — | 104 |
| 55 | Children age 12-23 months who received most of their vaccinations in a public health | 90.6 | 94.6 | — | 104 |
| 56 | Children age 12-23 months who received most of their vaccinations in a private health | 8.0 | 4.6 | — | 104 |
| 57 | Prevalence of diarrhoea in the 2 weeks preceding the survey (%) | 4.9 | 5.5 | — | 104 |
| 58 | Prevalence of severe diarrhoea in the 2 weeks preceding the survey (%) | 0.2 | 0.2 | — | 104 |
| 59 | Prevalence of symptoms of acute respiratory infection (ARI) in the 2 weeks preceding the | 2.5 | 0.5 | — | 104 |
| 60 | Children with fever or symptoms of ARI in the 2 weeks preceding the survey taken to a health | 57.3 | 86.9 | — | 104 |
| 61 | Children under age 3 years breastfed within one hour of birth 9 (%) | 53.1 | 38.2 | — | 104 |
| 62 | Children under age 6 months exclusively breastfed 10 (%) | 55.5 | 51.0 | — | 104 |
| 63 | Children under age 6 months currently breastfeeding 10 (%) | 89.7 | 92.8 | — | 104 |
| 64 | Children under age 6 months exclusively breastfed or breastfeeding and consuming plain | 78.4 | 81.9 | — | 104 |
| 65 | Children age 6-8 months receiving solid or semi-solid food and breastmilk 10 (%) | 46.2 | 58.2 | — | 104 |
| 66 | Breastfeeding children age 6-23 months receiving an adequate diet 10, 11 (%) | 10.2 | 10.3 | — | 104 |
| 67 | Non-breastfeeding children age 6-23 months receiving an adequate diet 10, 11 (%) | 15.4 | 13.8 | — | 104 |
| 68 | Total children age 6-23 months receiving an adequate diet 10, 11 (%) | 11.5 | 11.1 | — | 104 |
| 69 | Child stunting | 24.5 | 20.4 | -4.1 | 104 |
| 70 | Child wasting | 10.6 | 18.0 | +7.4 | 104 |
| 71 | Severe child wasting | 3.6 | 4.4 | — | 104 |
| 72 | Child underweight | 16.9 | 23.7 | +6.8 | 104 |
| 73 | Child overweight | 4.1 | 1.8 | -2.3 | 104 |
| 74 | Women whose Body Mass Index (BMI) is below normal (BMI <18.5 kg/m 2)15 (%) | 12.7 | 14.2 | — | 105 |
| 75 | Men whose Body Mass Index (BMI) is below normal (BMI <18.5 kg/m 2) (%) | 12.5 | 13.3 | — | 105 |
| 76 | Women aged 15–49 overweight or obese (BMI ≥25), % | 40.8 | 44.7 | — | 105 |
| 77 | Men aged 15–49 overweight or obese (BMI ≥25), % | 32.3 | 37.5 | — | 105 |
| 78 | Blood sugar level - high (141-160 mg/dl)16 (%) | 5.8 | 7.9 | — | 105 |
| 79 | Blood sugar level - very high (>160 mg/dl)16 (%) | 8.0 | 12.3 | — | 105 |
| 80 | Blood sugar level - high or very high (>140 mg/dl) or taking medicine to control blood | 14.7 | 21.3 | — | 105 |
| 81 | Blood sugar level - high (141-160 mg/dl)16 (%) | 6.2 | 9.1 | — | 105 |
| 82 | Blood sugar level - very high (>160 mg/dl)16 (%) | 7.0 | 11.9 | — | 105 |
| 83 | Blood sugar level - high or very high (>140 mg/dl) or taking medicine to control blood | 14.1 | 22.3 | — | 105 |
| 84 | Mildly elevated blood pressure (Systolic 140-159 mm of Hg and/or | 18.5 | 10.8 | — | 105 |
| 85 | Women aged 15+ with moderately or severely elevated blood pressure, % | 8.6 | 6.5 | — | 105 |
| 86 | Women aged 15+ with elevated blood pressure or taking medicine for it, % | 31.2 | 24.5 | — | 105 |
| 87 | Mildly elevated blood pressure (Systolic 140-159 mm of Hg and/or | 24.5 | 13.6 | — | 105 |
| 88 | Men aged 15+ with moderately or severely elevated blood pressure, % | 11.0 | 4.6 | — | 105 |
| 89 | Men aged 15+ with elevated blood pressure or taking medicine for it, % | 37.7 | 26.3 | — | 105 |
| 90 | Currently married women who usually participate in three household decisions 17 (%) | 91.4 | 93.2 | — | 105 |
| 91 | Women who worked in the last 12 months and were paid in cash (%) | 22.3 | 28.8 | — | 105 |
| 92 | Women having a bank or savings account that they themselves use (%) | 81.6 | 87.9 | — | 105 |
| 93 | Women having a mobile phone that they themselves use (%) | 61.2 | 72.6 | — | 105 |
| 94 | Women age 15-24 years who use hygienic methods of protection during their menstrual | 93.3 | 94.6 | — | 105 |
| 95 | Ever-married women age 18-49 years who have ever experienced spousal violence 19 (%) | 11.6 | 8.7 | — | 105 |
| 96 | Ever-married women age 18-49 years who have experienced physical violence during any | 1.6 | 1.8 | — | 105 |
| 97 | Young women age 18-29 years who experienced sexual violence by age 18 (%) | 0.2 | 0.1 | — | 105 |
| 98 | Women age 15 years and above who use any kind of tobacco (%) | 0.4 | 0.5 | — | 105 |
| 99 | Men age 15 years and above who use any kind of tobacco (%) | 12.8 | 13.9 | — | 105 |
| 100 | Women age 15 years and above who consume alcohol (%) | 0.3 | 0.3 | — | 105 |
| 101 | Men age 15 years and above who consume alcohol (%) | 22.8 | 22.9 | — | 105 |

### Rajasthan

**NFHS-5** · NFHS5-II · 131 indicator rows.

| Row | Indicator | Total | PDF page |
| --- | --- | --- | --- |
| 1 | Female population age 6 years and above who ever attended school (%) | 63.5 | 55 |
| 2 | Population below age 15 years (%) | 28.3 | 55 |
| 3 | Sex ratio of the total population (females per 1,000 males) | 1,009 | 55 |
| 4 | Sex ratio at birth for children born in the last five years (females per 1,000 males) | 891 | 55 |
| 5 | Children under age 5 years whose birth was registered with the civil authority (%) | 91.4 | 55 |
| 6 | Deaths in the last 3 years registered with the civil authority (%) | 77.1 | 55 |
| 7 | Population living in households with electricity (%) | 98.1 | 55 |
| 8 | Population living in households with an improved drinking-water source1 (%) | 96.5 | 55 |
| 9 | Population living in households that use an improved sanitation facility 2 (%) | 71.1 | 55 |
| 10 | Households using clean fuel for cooking3 (%) | 41.4 | 55 |
| 11 | Households using iodized salt (%) | 94.2 | 55 |
| 12 | Households with any usual member covered under a health insurance/financing scheme (%) | 87.8 | 55 |
| 13 | Children age 5 years who attended pre-primary school during the school year 2019-20 (%) | 8.9 | 55 |
| 14 | Women who are literate 4 (%) | 64.7 | 55 |
| 15 | Men who are literate4 (%) | 88.9 | 55 |
| 16 | Women with 10 or more years of schooling (%) | 33.4 | 55 |
| 17 | Men with 10 or more years of schooling (%) | 51.9 | 55 |
| 18 | Women who have ever used the internet (%) | 36.9 | 55 |
| 19 | Men who have ever used the internet (%) | 65.2 | 55 |
| 20 | Women age 20-24 years married before age 18 years (%) | 25.4 | 55 |
| 21 | Men age 25-29 years married before age 21 years (%) | 28.2 | 55 |
| 22 | Total fertility rate (children per woman) | 2.0 | 55 |
| 23 | Women age 15-19 years who were already mothers or pregnant at the time of the survey (%) | 3.7 | 55 |
| 24 | Adolescent fertility rate for women age 15 -19 years5 | 31 | 55 |
| 25 | Neonatal mortality rate (NNMR) | 20.2 | 55 |
| 26 | Infant mortality rate (IMR) | 30.3 | 55 |
| 27 | Under-five mortality rate (U5MR) | 37.6 | 55 |
| 28 | Any method6 (%) | 72.3 | 55 |
| 29 | Any modern method 6 (%) | 62.1 | 55 |
| 30 | Female sterilization (%) | 42.4 | 55 |
| 31 | Male sterilization (%) | 0.3 | 55 |
| 32 | IUD/PPIUD (%) | 1.4 | 55 |
| 33 | Pill (%) | 3.1 | 55 |
| 34 | Condom (%) | 13.7 | 55 |
| 35 | Injectables (%) | 0.6 | 55 |
| 36 | Total unmet need7 (%) | 7.6 | 55 |
| 37 | Unmet need for spacing7 (%) | 3.7 | 55 |
| 38 | Health worker ever talked to female non-users about family planning (%) | 24.1 | 55 |
| 39 | Current users ever told about side effects of current method8 (%) | 61.0 | 55 |
| 40 | Mothers who had an antenatal check-up in the first trimester (%) | 76.3 | 56 |
| 41 | Mothers who had at least 4 antenatal care visits (%) | 55.3 | 56 |
| 42 | Mothers whose last birth was protected against neonatal tetanus9 (%) | 93.4 | 56 |
| 43 | Mothers who consumed iron folic acid for 100 days or more when they were pregnant (%) | 33.9 | 56 |
| 44 | Mothers who consumed iron folic acid for 180 days or more when they were pregnant (%) | 14.4 | 56 |
| 45 | Registered pregnancies for which the mother received a Mother and Child Protection (MCP) | 98.1 | 56 |
| 46 | Mothers who received postnatal care from a doctor/nurse/LHV/ANM/midwife/other health | 85.3 | 56 |
| 47 | Average out-of-pocket expenditure per delivery in a public health facility (Rs.) | 2,102 | 56 |
| 48 | Children born at home who were taken to a health facility for a check -up within 24 hours of | 1.3 | 56 |
| 49 | Children who received postnatal care from a doctor/nurse/LHV/ANM/midwife/other health | 86.9 | 56 |
| 50 | Institutional births (%) | 94.9 | 56 |
| 51 | Institutional births in public facility (%) | 77.0 | 56 |
| 52 | Home births that were conducted by skilled health personnel 10 (%) | 1.4 | 56 |
| 53 | Births attended by skilled health personnel10 (%) | 95.6 | 56 |
| 54 | Births delivered by caesarean section (%) | 10.4 | 56 |
| 55 | Births in a private health facility that were delivered by caesarean section (%) | 26.9 | 56 |
| 56 | Births in a public health facility that were delivered by caesarean section (%) | 7.2 | 56 |
| 57 | Children age 12-23 months fully vaccinated based on information from either vaccination card | 80.4 | 56 |
| 58 | Children age 12-23 months fully vaccinated based on information from vaccination card | 85.3 | 56 |
| 59 | Children age 12-23 months who have received BCG (%) | 95.6 | 56 |
| 60 | Children age 12-23 months who have received 3 doses of polio vaccine13 (%) | 84.6 | 56 |
| 61 | Children age 12-23 months who have received 3 doses of penta or DPT vaccine (%) | 89.3 | 56 |
| 62 | Children age 12-23 months who have received the first dose of measles-containing | 91.2 | 56 |
| 63 | Children age 24-35 months who have received a second dose of measles-containing | 26.8 | 56 |
| 64 | Children age 12-23 months who have received 3 doses of rotavirus vaccine 14 (%) | 61.6 | 56 |
| 65 | Children age 12-23 months who have received 3 doses of penta or hepatitis B vaccine (%) | 88.2 | 56 |
| 66 | Children age 9-35 months who received a vitamin A dose in the last 6 months (%) | 64.5 | 56 |
| 67 | Children age 12-23 months who received most of their vaccinations in a public health | 98.0 | 56 |
| 68 | Children age 12-23 months who received most of their vaccinations in a private health | 1.6 | 56 |
| 69 | Prevalence of diarrhoea in the 2 weeks preceding the survey (%) | 6.1 | 56 |
| 70 | Children with diarrhoea in the 2 weeks preceding the survey who received oral rehydration | 64.3 | 56 |
| 71 | Children with diarrhoea in the 2 weeks preceding the survey who received zinc (%) | 27.2 | 56 |
| 72 | Children with diarrhoea in the 2 weeks preceding the survey taken to a health facility or health | 79.7 | 56 |
| 73 | Prevalence of symptoms of acute respiratory infection (ARI) in the 2 weeks preceding the | 2.9 | 56 |
| 74 | Children with fever or symptoms of ARI in the 2 weeks preceding the survey taken to a health | 71.1 | 56 |
| 75 | Children under age 3 years breastfed within one hour of birth15 (%) | 40.7 | 57 |
| 76 | Children under age 6 months exclusively breastfed16 (%) | 70.4 | 57 |
| 77 | Children age 6-8 months receiving solid or semi-solid food and breastmilk16 (%) | 38.0 | 57 |
| 78 | Breastfeeding children age 6 -23 months receiving an adequate diet 16, 17 (%) | 8.4 | 57 |
| 79 | Non-breastfeeding children age 6 -23 months receiving an adequate diet 16, 17 (%) | 7.5 | 57 |
| 80 | Total children age 6 -23 months receiving an adequate diet 16, 17 (%) | 8.3 | 57 |
| 81 | Children under 5 years who are stunted (height-for-age)18 (%) | 31.8 | 57 |
| 82 | Children under 5 years who are wasted (weight-for-height)18 (%) | 16.8 | 57 |
| 83 | Children under 5 years who are severely wasted (weight-for-height)19 (%) | 7.6 | 57 |
| 84 | Children under 5 years who are underweight (weight-for-age)18 (%) | 27.6 | 57 |
| 85 | Children under 5 years who are overweight (weight-for-height)20 (%) | 3.3 | 57 |
| 86 | Women whose Body Mass Index (BMI) is below normal (BMI <18.5 kg/m 2)21 (%) | 19.6 | 57 |
| 87 | Men whose Body Mass Index (BMI) is below normal (BMI <18.5 kg/m2) (%) | 14.0 | 57 |
| 88 | Women who are overweight or obese (BMI ≥25.0 kg/m2)21 (%) | 12.9 | 57 |
| 89 | Men who are overweight or obese (BMI ≥25.0 kg/m2) (%) | 15.0 | 57 |
| 90 | Women who have high risk waist-to-hip ratio (≥0.85) (%) | 59.0 | 57 |
| 91 | Men who have high risk waist -to-hip ratio (≥0.90) (%) | 42.4 | 57 |
| 92 | Children age 6-59 months who are anaemic (<11.0 g/dl) 22 (%) | 71.5 | 57 |
| 93 | Non-pregnant women age 15-49 years who are anaemic (<12.0 g/dl)22 (%) | 54.7 | 57 |
| 94 | Pregnant women age 15-49 years who are anaemic (<11.0 g/dl)22 (%) | 46.3 | 57 |
| 95 | All women age 15 -49 years who are anaemic 22 (%) | 54.4 | 57 |
| 96 | All women age 15-19 years who are anaemic22 (%) | 59.4 | 57 |
| 97 | Men age 15-49 years who are anaemic (<13.0 g/dl)22 (%) | 23.2 | 57 |
| 98 | Men age 15 -19 years who are anaemic (<13.0 g/dl) 22 (%) | 34.0 | 57 |
| 99 | Blood sugar level - high (141-160 mg/dl)23 (%) | 3.9 | 57 |
| 100 | Blood sugar level - very high (>160 mg/dl) 23 (%) | 2.8 | 57 |
| 101 | Blood sugar level - high or very high (>140 mg/dl) or taking medicine to control blood | 7.2 | 57 |
| 102 | Blood sugar level - high (141-160 mg/dl)23 (%) | 5.0 | 57 |
| 103 | Blood sugar level - very high (>160 mg/dl) 23 (%) | 3.3 | 57 |
| 104 | Blood sugar level - high or very high (>140 mg/dl) or taking medicine to control blood | 8.9 | 57 |
| 105 | Mildly elevated blood pressure (Systolic 140 -159 mm of Hg and/or | 9.8 | 57 |
| 106 | Moderately or severely elevated blood pressure (Systolic ≥160 mm of Hg and/or | 3.3 | 57 |
| 107 | Elevated blood pressure (Systolic ≥140 mm of Hg and/or Diastolic ≥90 mm of Hg) or taking | 15.4 | 57 |
| 108 | Mildly elevated blood pressure (Systolic 140 -159 mm of Hg and/or | 12.7 | 57 |
| 109 | Moderately or severely elevated blood pressure (Systolic ≥160 mm of Hg and/or | 3.6 | 57 |
| 110 | Elevated blood pressure (Systolic ≥140 mm of Hg and/or Diastolic ≥90 mm of Hg) or taking | 17.9 | 57 |
| 111 | Ever undergone a screening test for cervical cancer (%) | 0.4 | 58 |
| 112 | Ever undergone a breast examination for breast cancer (%) | 0.2 | 58 |
| 113 | Ever undergone an oral cavity examination for oral cancer (%) | 0.2 | 58 |
| 114 | Ever undergone an oral cavity examination for oral cancer (%) | 0.8 | 58 |
| 115 | Women who have comprehensive knowledge 24 of HIV/AIDS (%) | 26.8 | 58 |
| 116 | Men who have comprehensive knowledge24 of HIV/AIDS (%) | 36.0 | 58 |
| 117 | Women who know that consistent condom use can reduce the chance of getting HIV/AIDS (%) | 74.9 | 58 |
| 118 | Men who know that consistent condom use can reduce the chance of getting HIV/AIDS (%) | 90.6 | 58 |
| 119 | Currently married women who usually participate in three household decisions25 (%) | 87.7 | 58 |
| 120 | Women who worked in the last 12 months and were paid in cash (%) | 17.4 | 58 |
| 121 | Women owning a house and/or land (alone or jointly with others) (%) | 26.6 | 58 |
| 122 | Women having a bank or savings account that they themselves use (%) | 79.6 | 58 |
| 123 | Women having a mobile phone that they themselves use (%) | 50.2 | 58 |
| 124 | Women age 15-24 years who use hygienic methods of protection during their menstrual period26 (%) | 84.1 | 58 |
| 125 | Ever-married women age 18-49 years who have ever experienced spousal violence27 (%) | 24.3 | 58 |
| 126 | Ever-married women age 18-49 years who have experienced physical violence during any pregnancy (%) | 2.1 | 58 |
| 127 | Young women age 18-29 years who experienced sexual violence by age 18 (%) | 0.9 | 58 |
| 128 | Women age 15 years and above who use any kind of tobacco (%) | 6.9 | 58 |
| 129 | Men age 15 years and above who use any kind of tobacco (%) | 42.0 | 58 |
| 130 | Women age 15 years and above who consume alcohol (%) | 0.3 | 58 |
| 131 | Men age 15 years and above who consume alcohol (%) | 11.0 | 58 |

**NFHS-6** · 101 extracted indicator rows.

| Row | Indicator | NFHS-5 Total as printed in NFHS-6 | NFHS-6 Total | Reviewed change | PDF page |
| --- | --- | --- | --- | --- | --- |
| 1 | Population below age 5 years (%) | 9.0 | 8.9 | — | IIPS fact sheet |
| 2 | Population below age 15 years (%) | 28.3 | 27.7 | — | IIPS fact sheet |
| 3 | Population age 60 years and above (%) | 10.5 | 12.1 | — | IIPS fact sheet |
| 4 | Household electricity access | 98.1 | 98.4 | +0.3 | IIPS fact sheet |
| 5 | Population living in households with an improved drinking-water source 1 (%) | 96.5 | 95.2 | — | IIPS fact sheet |
| 6 | Households using iodized salt (%) | 94.2 | 95.2 | — | IIPS fact sheet |
| 7 | Households with any usual member covered under a health insurance/financing scheme (%) | 87.8 | 88.7 | — | IIPS fact sheet |
| 8 | Households with any usual member having a bank account/post office account (%) | 97.6 | 98.7 | — | IIPS fact sheet |
| 9 | Female population age 6+ ever attended school | 63.5 | 64.3 | +0.8 | IIPS fact sheet |
| 10 | Households with any usual female members owning a house and/or land (alone or jointly with | 9.4 | 13.9 | — | IIPS fact sheet |
| 11 | Children age 2-4 years who attended pre-school (%) | 30.1 | 38.2 | — | IIPS fact sheet |
| 12 | Women with 10 or more years of schooling | 33.4 | 38.7 | +5.3 | IIPS fact sheet |
| 13 | Men with 10 or more years of schooling | 51.9 | 55.7 | +3.8 | IIPS fact sheet |
| 14 | Women who have ever used the internet (%) | 36.9 | 66.3 | — | IIPS fact sheet |
| 15 | Men who have ever used the internet (%) | 65.2 | 80.5 | — | IIPS fact sheet |
| 16 | Women age 20–24 married before age 18 | 25.4 | 24.6 | -0.8 | IIPS fact sheet |
| 17 | Men age 25-29 years married before age 21 years (%) | 28.2 | 28.5 | — | IIPS fact sheet |
| 18 | Total fertility rate, children per woman | 2.0 | 2.1 | +0.1 | IIPS fact sheet |
| 19 | Women age 15-19 years who were already mothers or pregnant at the time of the survey (%) | 3.7 | 4.7 | — | IIPS fact sheet |
| 20 | Any method2 (%) | 72.3 | 74.4 | — | IIPS fact sheet |
| 21 | Any modern method2 (%) | 62.1 | 57.1 | — | IIPS fact sheet |
| 22 | Any traditional method (%) | 10.2 | 17.3 | — | IIPS fact sheet |
| 23 | Female sterilization (%) | 42.4 | 37.2 | — | IIPS fact sheet |
| 24 | Male sterilization (%) | 0.2 | 0.4 | — | IIPS fact sheet |
| 25 | Total unmet need for family planning | 7.6 | 7.9 | +0.3 | IIPS fact sheet |
| 26 | Unmet need for spacing 3 (%) | 3.7 | 4.4 | — | IIPS fact sheet |
| 27 | Unmet need for limiting3 (%) | 3.9 | 3.5 | — | IIPS fact sheet |
| 28 | First-trimester antenatal check-up | 76.3 | 78.2 | +1.9 | IIPS fact sheet |
| 29 | Mothers who had any antenatal care visits (%) | 94.2 | 97.3 | — | IIPS fact sheet |
| 30 | At least four antenatal care visits | 55.4 | 61.0 | — | IIPS fact sheet |
| 31 | Mothers whose last birth was protected against neonatal tetanus4 (%) | 93.4 | 94.1 | — | IIPS fact sheet |
| 32 | Mothers who consumed iron folic acid for 100 days or more when they were pregnant (%) | 33.9 | 41.0 | — | IIPS fact sheet |
| 33 | Mothers who consumed iron folic acid for 180 days or more when they were pregnant (%) | 14.4 | 23.5 | — | IIPS fact sheet |
| 34 | Registered pregnancies for which the mother received a Mother and Child Protection (MCP) | 98.1 | 97.5 | — | IIPS fact sheet |
| 35 | Institutional births | 94.9 | 94.1 | -0.8 | IIPS fact sheet |
| 36 | Institutional births in public facility (%) | 77.0 | 70.5 | — | IIPS fact sheet |
| 37 | Births attended by skilled health personnel | 95.6 | 94.9 | -0.7 | IIPS fact sheet |
| 38 | Caesarean births | 10.4 | 15.6 | +5.2 | IIPS fact sheet |
| 39 | Births in a private health facility that were delivered by caesarean section (%) | 26.9 | 35.0 | — | IIPS fact sheet |
| 40 | Births in a public health facility that were delivered by caesarean section (%) | 7.2 | 10.5 | — | IIPS fact sheet |
| 41 | Mothers who received postnatal care from a doctor/nurse/LHV/ANM/midwife/other health | 85.3 | 86.7 | — | IIPS fact sheet |
| 42 | Children born at home who were taken to a health facility for a check-up within 24 hours of | 1.3 | 4.0 | — | IIPS fact sheet |
| 43 | Children who received postnatal care from a doctor/nurse/LHV/ANM/midwife/ other health | 86.9 | 89.6 | — | IIPS fact sheet |
| 44 | Full vaccination, card or maternal recall | 80.5 | 80.6 | — | IIPS fact sheet |
| 45 | Full vaccination, card only | 85.3 | 75.0 | -10.3 | IIPS fact sheet |
| 46 | Children age 12-23 months who have received any vaccine (%) | 97.4 | 95.2 | — | IIPS fact sheet |
| 47 | BCG vaccination | 95.6 | 92.9 | -2.7 | IIPS fact sheet |
| 48 | Children age 12-23 months who have received 3 doses of polio vaccine 8 (%) | 84.6 | 84.3 | — | IIPS fact sheet |
| 49 | Children age 12-23 months who have received 3 doses of pentavalent vaccine (%) | 89.4 | 87.2 | — | IIPS fact sheet |
| 50 | Children age 12-23 months who have received the first dose of measles-containing | 91.1 | 90.3 | — | IIPS fact sheet |
| 51 | Children age 24-35 months who have received a second dose of measles-containing | 52.3 | 57.6 | — | IIPS fact sheet |
| 52 | Children age 12-23 months who have received birth dose of hepatitis B vaccine (%) | 75.0 | 82.6 | — | IIPS fact sheet |
| 53 | Children age 12-23 months who have received 3 doses of rotavirus vaccine (%) | 61.6 | 83.4 | — | IIPS fact sheet |
| 54 | Children age 9-35 months who received a vitamin A dose in the last 6 months (%) | 64.5 | 65.6 | — | IIPS fact sheet |
| 55 | Children age 12-23 months who received most of their vaccinations in a public health | 98.0 | 97.5 | — | IIPS fact sheet |
| 56 | Children age 12-23 months who received most of their vaccinations in a private health | 1.6 | 1.8 | — | IIPS fact sheet |
| 57 | Prevalence of diarrhoea in the 2 weeks preceding the survey (%) | 6.1 | 5.8 | — | IIPS fact sheet |
| 58 | Prevalence of severe diarrhoea in the 2 weeks preceding the survey (%) | 0.3 | 0.5 | — | IIPS fact sheet |
| 59 | Prevalence of symptoms of acute respiratory infection (ARI) in the 2 weeks preceding the | 2.9 | 1.7 | — | IIPS fact sheet |
| 60 | Children with fever or symptoms of ARI in the 2 weeks preceding the survey taken to a health | 71.1 | 74.7 | — | IIPS fact sheet |
| 61 | Children under age 3 years breastfed within one hour of birth9 (%) | 40.7 | 45.8 | — | IIPS fact sheet |
| 62 | Children under age 6 months exclusively breastfed 10 (%) | 70.4 | 54.3 | — | IIPS fact sheet |
| 63 | Children under age 6 months currently breastfeeding 10 (%) | 97.4 | 98.1 | — | IIPS fact sheet |
| 64 | Children under age 6 months exclusively breastfed or breastfeeding and consuming plain | 87.0 | 89.5 | — | IIPS fact sheet |
| 65 | Children age 6-8 months receiving solid or semi-solid food and breastmilk 10 (%) | 38.0 | 51.6 | — | IIPS fact sheet |
| 66 | Breastfeeding children age 6-23 months receiving an adequate diet 10, 11 (%) | 8.4 | 8.9 | — | IIPS fact sheet |
| 67 | Non-breastfeeding children age 6-23 months receiving an adequate diet 10, 11 (%) | 7.5 | 8.0 | — | IIPS fact sheet |
| 68 | Total children age 6-23 months receiving an adequate diet 10, 11 (%) | 8.3 | 8.7 | — | IIPS fact sheet |
| 69 | Child stunting | 31.8 | 29.6 | -2.2 | IIPS fact sheet |
| 70 | Child wasting | 16.8 | 19.8 | +3.0 | IIPS fact sheet |
| 71 | Severe child wasting | 7.6 | 6.4 | -1.2 | IIPS fact sheet |
| 72 | Child underweight | 27.6 | 33.3 | +5.7 | IIPS fact sheet |
| 73 | Child overweight | 3.3 | 1.2 | -2.1 | IIPS fact sheet |
| 74 | Women whose Body Mass Index (BMI) is below normal (BMI <18.5 kg/m 2)15 (%) | 19.6 | 27.3 | — | IIPS fact sheet |
| 75 | Men whose Body Mass Index (BMI) is below normal (BMI <18.5 kg/m 2) (%) | 14.0 | 24.7 | — | IIPS fact sheet |
| 76 | Women aged 15–49 overweight or obese (BMI ≥25), % | 12.9 | 20.3 | — | IIPS fact sheet |
| 77 | Men aged 15–49 overweight or obese (BMI ≥25), % | 15.0 | 19.3 | — | IIPS fact sheet |
| 78 | Blood sugar level - high (141-160 mg/dl)16 (%) | 3.9 | 5.3 | — | IIPS fact sheet |
| 79 | Blood sugar level - very high (>160 mg/dl)16 (%) | 2.8 | 4.6 | — | IIPS fact sheet |
| 80 | Blood sugar level - high or very high (>140 mg/dl) or taking medicine to control blood | 7.2 | 10.4 | — | IIPS fact sheet |
| 81 | Blood sugar level - high (141-160 mg/dl)16 (%) | 5.0 | 6.5 | — | IIPS fact sheet |
| 82 | Blood sugar level - very high (>160 mg/dl)16 (%) | 3.3 | 5.5 | — | IIPS fact sheet |
| 83 | Blood sugar level - high or very high (>140 mg/dl) or taking medicine to control blood | 8.9 | 12.7 | — | IIPS fact sheet |
| 84 | Mildly elevated blood pressure (Systolic 140-159 mm of Hg and/or | 9.8 | 7.7 | — | IIPS fact sheet |
| 85 | Women aged 15+ with moderately or severely elevated blood pressure, % | 3.3 | 3.5 | — | IIPS fact sheet |
| 86 | Women aged 15+ with elevated blood pressure or taking medicine for it, % | 15.3 | 14.4 | — | IIPS fact sheet |
| 87 | Mildly elevated blood pressure (Systolic 140-159 mm of Hg and/or | 12.7 | 10.4 | — | IIPS fact sheet |
| 88 | Men aged 15+ with moderately or severely elevated blood pressure, % | 3.6 | 2.2 | — | IIPS fact sheet |
| 89 | Men aged 15+ with elevated blood pressure or taking medicine for it, % | 17.9 | 16.5 | — | IIPS fact sheet |
| 90 | Currently married women who usually participate in three household decisions 17 (%) | 87.7 | 84.5 | — | IIPS fact sheet |
| 91 | Women who worked in the last 12 months and were paid in cash (%) | 17.4 | 26.9 | — | IIPS fact sheet |
| 92 | Women having a bank or savings account that they themselves use (%) | 79.6 | 89.1 | — | IIPS fact sheet |
| 93 | Women having a mobile phone that they themselves use (%) | 50.2 | 61.1 | — | IIPS fact sheet |
| 94 | Women age 15-24 years who use hygienic methods of protection during their menstrual | 84.3 | 88.5 | — | IIPS fact sheet |
| 95 | Ever-married women age 18-49 years who have ever experienced spousal violence 19 (%) | 24.1 | 20.8 | — | IIPS fact sheet |
| 96 | Ever-married women age 18-49 years who have experienced physical violence during any | 2.1 | 1.9 | — | IIPS fact sheet |
| 97 | Young women age 18-29 years who experienced sexual violence by age 18 (%) | 1.0 | 0.4 | — | IIPS fact sheet |
| 98 | Women age 15 years and above who use any kind of tobacco (%) | 6.9 | 6.9 | — | IIPS fact sheet |
| 99 | Men age 15 years and above who use any kind of tobacco (%) | 41.9 | 37.6 | — | IIPS fact sheet |
| 100 | Women age 15 years and above who consume alcohol (%) | 0.3 | 0.3 | — | IIPS fact sheet |
| 101 | Men age 15 years and above who consume alcohol (%) | 11.0 | 10.7 | — | IIPS fact sheet |

### Sikkim

**NFHS-5** · NFHS5-I · 131 indicator rows.

| Row | Indicator | Total | PDF page |
| --- | --- | --- | --- |
| 1 | Female population age 6 years and above who ever attended school (%) | 83.7 | 120 |
| 2 | Population below age 15 years (%) | 19.5 | 120 |
| 3 | Sex ratio of the total population (females per 1,000 males) | 990 | 120 |
| 4 | Sex ratio at birth for children born in the last five years (females per 1,000 males) | 969 | 120 |
| 5 | Children under age 5 years whose birth was registered with the civil authority (%) | 96.5 | 120 |
| 6 | Deaths in the last 3 years registered with the civil authority (%) | 75.5 | 120 |
| 7 | Population living in households with electricity (%) | 99.3 | 120 |
| 8 | Population living in households with an improved drinking-water source1 (%) | 92.8 | 120 |
| 9 | Population living in households that use an improved sanitation facility2 (%) | 87.3 | 120 |
| 10 | Households using clean fuel for cooking3 (%) | 78.4 | 120 |
| 11 | Households using iodized salt (%) | 98.3 | 120 |
| 12 | Households with any usual member covered under a health insurance/financing scheme (%) | 25.7 | 120 |
| 13 | Children age 5 years who attended pre-primary school during the school year 2019-20 (%) | 41.2 | 120 |
| 14 | Women who are literate4 (%) | 88.9 | 120 |
| 15 | Men who are literate4 (%) | 93.0 | 120 |
| 16 | Women with 10 or more years of schooling (%) | 49.0 | 120 |
| 17 | Men with 10 or more years of schooling (%) | 55.0 | 120 |
| 18 | Women who have ever used the internet (%) | 76.7 | 120 |
| 19 | Men who have ever used the internet (%) | 78.2 | 120 |
| 20 | Women age 20-24 years married before age 18 years (%) | 10.8 | 120 |
| 21 | Men age 25-29 years married before age 21 years (%) | 5.1 | 120 |
| 22 | Total fertility rate (children per woman) | 1.1 | 120 |
| 23 | Women age 15-19 years who were already mothers or pregnant at the time of the survey (%) | 3.1 | 120 |
| 24 | Adolescent fertility rate for women age 15-19 years5 | 22 | 120 |
| 25 | Neonatal mortality rate (NNMR) | 5.0 | 120 |
| 26 | Infant mortality rate (IMR) | 11.2 | 120 |
| 27 | Under-five mortality rate (U5MR) | 11.2 | 120 |
| 28 | Any method6 (%) | 69.1 | 120 |
| 29 | Any modern method6 (%) | 54.9 | 120 |
| 30 | Female sterilization (%) | 14.5 | 120 |
| 31 | Male sterilization (%) | 1.7 | 120 |
| 32 | IUD/PPIUD (%) | 6.2 | 120 |
| 33 | Pill (%) | 18.2 | 120 |
| 34 | Condom (%) | 9.3 | 120 |
| 35 | Injectables (%) | 3.5 | 120 |
| 36 | Total unmet need7 (%) | 11.9 | 120 |
| 37 | Unmet need for spacing7 (%) | 4.9 | 120 |
| 38 | Health worker ever talked to female non-users about family planning (%) | 18.9 | 120 |
| 39 | Current users ever told about side effects of current method8 (%) | 60.8 | 120 |
| 40 | Mothers who had an antenatal check-up in the first trimester (%) | 63.7 | 121 |
| 41 | Mothers who had at least 4 antenatal care visits (%) | 58.4 | 121 |
| 42 | Mothers whose last birth was protected against neonatal tetanus9 (%) | 92.0 | 121 |
| 43 | Mothers who consumed iron folic acid for 100 days or more when they were pregnant (%) | 54.7 | 121 |
| 44 | Mothers who consumed iron folic acid for 180 days or more when they were pregnant (%) | 31.5 | 121 |
| 45 | Registered pregnancies for which the mother received a Mother and Child Protection (MCP) card (%) | 94.6 | 121 |
| 46 | Mothers who received postnatal care from a doctor/nurse/LHV/ANM/midwife/other health personnel within 2 days of delivery (%) | 69.3 | 121 |
| 47 | Average out-of-pocket expenditure per delivery in a public health facility (Rs.) | 8,334 | 121 |
| 48 | Children born at home who were taken to a health facility for a check-up within 24 hours of birth (%) | \* | 121 |
| 49 | Children who received postnatal care from a doctor/nurse/LHV/ANM/midwife/other health personnel within 2 days of delivery (%) | 66.2 | 121 |
| 50 | Institutional births (%) | 94.7 | 121 |
| 51 | Institutional births in public facility (%) | 78.6 | 121 |
| 52 | Home births that were conducted by skilled health personnel10 (%) | 2.6 | 121 |
| 53 | Births attended by skilled health personnel10 (%) | 96.5 | 121 |
| 54 | Births delivered by caesarean section (%) | 32.8 | 121 |
| 55 | Births in a private health facility that were delivered by caesarean section (%) | 55.4 | 121 |
| 56 | Births in a public health facility that were delivered by caesarean section (%) | 30.4 | 121 |
| 57 | Children age 12-23 months fully vaccinated based on information from either vaccination card or mother's recall11 (%) | 80.6 | 121 |
| 58 | Children age 12-23 months fully vaccinated based on information from vaccination card only12 (%) | 87.6 | 121 |
| 59 | Children age 12-23 months who have received BCG (%) | 96.6 | 121 |
| 60 | Children age 12-23 months who have received 3 doses of polio vaccine13 (%) | 89.0 | 121 |
| 61 | Children age 12-23 months who have received 3 doses of penta or DPT vaccine (%) | 91.4 | 121 |
| 62 | Children age 12-23 months who have received the first dose of measles-containing vaccine (MCV) (%) | 90.5 | 121 |
| 63 | Children age 24-35 months who have received a second dose of measles-containing vaccine (MCV) (%) | 29.0 | 121 |
| 64 | Children age 12-23 months who have received 3 doses of rotavirus vaccine14 (%) | 0.0 | 121 |
| 65 | Children age 12-23 months who have received 3 doses of penta or hepatitis B vaccine (%) | 89.1 | 121 |
| 66 | Children age 9-59 months who received a vitamin A dose in the last 6 months (%) | 85.6 | 121 |
| 67 | Children age 12-23 months who received most of their vaccinations in a public health facility (%) | 100.0 | 121 |
| 68 | Children age 12-23 months who received most of their vaccinations in a private health facility (%) | 0.0 | 121 |
| 69 | Prevalence of diarrhoea in the 2 weeks preceding the survey (%) | 5.5 | 121 |
| 70 | Children with diarrhoea in the 2 weeks preceding the survey who received oral rehydration salts (ORS) (%) | (64.2) | 121 |
| 71 | Children with diarrhoea in the 2 weeks preceding the survey who received zinc (%) | (50.0) | 121 |
| 72 | Children with diarrhoea in the 2 weeks preceding the survey taken to a health facility or health provider (%) | (56.6) | 121 |
| 73 | Prevalence of symptoms of acute respiratory infection (ARI) in the 2 weeks preceding the survey (%) | 0.7 | 121 |
| 74 | Children with fever or symptoms of ARI in the 2 weeks preceding the survey taken to a health facility or health provider (%) | 59.5 | 121 |
| 75 | Children under age 3 years breastfed within one hour of birth15 (%) | 33.0 | 122 |
| 76 | Children under age 6 months exclusively breastfed16 (%) | 28.3 | 122 |
| 77 | Children age 6-8 months receiving solid or semi-solid food and breastmilk16 (%) | (57.4) | 122 |
| 78 | Breastfeeding children age 6-23 months receiving an adequate diet16, 17 (%) | 23.0 | 122 |
| 79 | Non-breastfeeding children age 6-23 months receiving an adequate diet16, 17 (%) | (35.0) | 122 |
| 80 | Total children age 6-23 months receiving an adequate diet16, 17 (%) | 24.7 | 122 |
| 81 | Children under 5 years who are stunted (height-for-age)18 (%) | 22.3 | 122 |
| 82 | Children under 5 years who are wasted (weight-for-height)18 (%) | 13.7 | 122 |
| 83 | Children under 5 years who are severely wasted (weight-for-height)19 (%) | 6.6 | 122 |
| 84 | Children under 5 years who are underweight (weight-for-age)18 (%) | 13.1 | 122 |
| 85 | Children under 5 years who are overweight (weight-for-height)20 (%) | 9.6 | 122 |
| 86 | Women whose Body Mass Index (BMI) is below normal (BMI <18.5 kg/m2)21 (%) | 5.8 | 122 |
| 87 | Men whose Body Mass Index (BMI) is below normal (BMI <18.5 kg/m2) (%) | 4.9 | 122 |
| 88 | Women who are overweight or obese (BMI ≥25.0 kg/m2)21 (%) | 34.7 | 122 |
| 89 | Men who are overweight or obese (BMI ≥25.0 kg/m2) (%) | 36.3 | 122 |
| 90 | Women who have high risk waist-to-hip ratio (≥0.85) (%) | 75.6 | 122 |
| 91 | Men who have high risk waist-to-hip ratio (≥0.90) (%) | 56.7 | 122 |
| 92 | Children age 6-59 months who are anaemic (<11.0 g/dl)22 (%) | 56.4 | 122 |
| 93 | Non-pregnant women age 15-49 years who are anaemic (<12.0 g/dl)22 (%) | 42.1 | 122 |
| 94 | Pregnant women age 15-49 years who are anaemic (<11.0 g/dl)22 (%) | 40.7 | 122 |
| 95 | All women age 15-49 years who are anaemic22 (%) | 42.1 | 122 |
| 96 | All women age 15-19 years who are anaemic22 (%) | 46.7 | 122 |
| 97 | Men age 15-49 years who are anaemic (<13.0 g/dl)22 (%) | 18.7 | 122 |
| 98 | Men age 15-19 years who are anaemic (<13.0 g/dl)22 (%) | 17.6 | 122 |
| 99 | Blood sugar level - high (141-160 mg/dl)23 (%) | 6.2 | 122 |
| 100 | Blood sugar level - very high (>160 mg/dl)23 (%) | 4.7 | 122 |
| 101 | Blood sugar level - high or very high (>140 mg/dl) or taking medicine to control blood sugar level23 (%) | 12.2 | 122 |
| 102 | Blood sugar level - high (141-160 mg/dl)23 (%) | 7.5 | 122 |
| 103 | Blood sugar level - very high (>160 mg/dl)23 (%) | 7.0 | 122 |
| 104 | Blood sugar level - high or very high (>140 mg/dl) or taking medicine to control blood sugar level23 (%) | 15.7 | 122 |
| 105 | Mildly elevated blood pressure (Systolic 140-159 mm of Hg and/or Diastolic 90-99 mm of Hg) (%) | 18.5 | 122 |
| 106 | Moderately or severely elevated blood pressure (Systolic ≥160 mm of Hg and/or Diastolic ≥100 mm of Hg) (%) | 11.8 | 122 |
| 107 | Elevated blood pressure (Systolic ≥140 mm of Hg and/or Diastolic ≥90 mm of Hg) or taking medicine to control blood pressure (%) | 34.5 | 122 |
| 108 | Mildly elevated blood pressure (Systolic 140-159 mm of Hg and/or Diastolic 90-99 mm of Hg) (%) | 25.0 | 122 |
| 109 | Moderately or severely elevated blood pressure (Systolic ≥160 mm of Hg and/or Diastolic ≥100 mm of Hg) (%) | 13.9 | 122 |
| 110 | Elevated blood pressure (Systolic ≥140 mm of Hg and/or Diastolic ≥90 mm of Hg) or taking medicine to control blood pressure (%) | 41.6 | 122 |
| 111 | Ever undergone a screening test for cervical cancer (%) | 0.6 | 123 |
| 112 | Ever undergone a breast examination for breast cancer (%) | 0.1 | 123 |
| 113 | Ever undergone an oral cavity examination for oral cancer (%) | 0.8 | 123 |
| 114 | Ever undergone an oral cavity examination for oral cancer (%) | 4.0 | 123 |
| 115 | Women who have comprehensive knowledge24 of HIV/AIDS (%) | 23.9 | 123 |
| 116 | Men who have comprehensive knowledge24 of HIV/AIDS (%) | 18.5 | 123 |
| 117 | Women who know that consistent condom use can reduce the chance of getting HIV/AIDS (%) | 72.2 | 123 |
| 118 | Men who know that consistent condom use can reduce the chance of getting HIV/AIDS (%) | 83.7 | 123 |
| 119 | Currently married women who usually participate in three household decisions25 (%) | 89.7 | 123 |
| 120 | Women who worked in the last 12 months and were paid in cash (%) | 32.7 | 123 |
| 121 | Women owning a house and/or land (alone or jointly with others) (%) | 53.1 | 123 |
| 122 | Women having a bank or savings account that they themselves use (%) | 76.4 | 123 |
| 123 | Women having a mobile phone that they themselves use (%) | 88.6 | 123 |
| 124 | Women age 15-24 years who use hygienic methods of protection during their menstrual period26 (%) | 86.3 | 123 |
| 125 | Ever-married women age 18-49 years who have ever experienced spousal violence27 (%) | 12.1 | 123 |
| 126 | Ever-married women age 18-49 years who have experienced physical violence during any pregnancy (%) | 1.9 | 123 |
| 127 | Young women age 18-29 years who experienced sexual violence by age 18 (%) | 3.2 | 123 |
| 128 | Women age 15 years and above who use any kind of tobacco (%) | 11.7 | 123 |
| 129 | Men age 15 years and above who use any kind of tobacco (%) | 41.3 | 123 |
| 130 | Women age 15 years and above who consume alcohol (%) | 16.2 | 123 |
| 131 | Men age 15 years and above who consume alcohol (%) | 39.8 | 123 |

**NFHS-6** · 101 extracted indicator rows.

| Row | Indicator | NFHS-5 Total as printed in NFHS-6 | NFHS-6 Total | Reviewed change | PDF page |
| --- | --- | --- | --- | --- | --- |
| 1 | Population below age 5 years (%) | 5.0 | 4.1 | — | IIPS fact sheet |
| 2 | Population below age 15 years (%) | 19.5 | 15.8 | — | IIPS fact sheet |
| 3 | Population age 60 years and above (%) | 10.0 | 13.2 | — | IIPS fact sheet |
| 4 | Household electricity access | 99.3 | 99.8 | +0.5 | IIPS fact sheet |
| 5 | Population living in households with an improved drinking-water source 1 (%) | 92.8 | 92.1 | — | IIPS fact sheet |
| 6 | Households using iodized salt (%) | 98.2 | 99.9 | — | IIPS fact sheet |
| 7 | Households with any usual member covered under a health insurance/financing scheme (%) | 28.0 | 36.2 | — | IIPS fact sheet |
| 8 | Households with any usual member having a bank account/post office account (%) | 91.8 | 97.3 | — | IIPS fact sheet |
| 9 | Female population age 6+ ever attended school | 83.7 | 81.4 | -2.3 | IIPS fact sheet |
| 10 | Households with any usual female members owning a house and/or land (alone or jointly with | 9.8 | 9.4 | — | IIPS fact sheet |
| 11 | Children age 2-4 years who attended pre-school (%) | 74.2 | 79.4 | — | IIPS fact sheet |
| 12 | Women with 10 or more years of schooling | 49.0 | 58.4 | +9.4 | IIPS fact sheet |
| 13 | Men with 10 or more years of schooling | 55.0 | 52.4 | -2.6 | IIPS fact sheet |
| 14 | Women who have ever used the internet (%) | 76.7 | 90.3 | — | IIPS fact sheet |
| 15 | Men who have ever used the internet (%) | 64.6 | 89.4 | — | IIPS fact sheet |
| 16 | Women age 20–24 married before age 18 | 10.8 | 9.1 | -1.7 | IIPS fact sheet |
| 17 | Men age 25-29 years married before age 21 years (%) | 5.1 | 6.2 | — | IIPS fact sheet |
| 18 | Total fertility rate, children per woman | 1.1 | 1.0 | -0.1 | IIPS fact sheet |
| 19 | Women age 15-19 years who were already mothers or pregnant at the time of the survey (%) | 3.1 | 4.2 | — | IIPS fact sheet |
| 20 | Any method2 (%) | 69.1 | 76.0 | — | IIPS fact sheet |
| 21 | Any modern method2 (%) | 54.9 | 42.2 | — | IIPS fact sheet |
| 22 | Any traditional method (%) | 14.2 | 33.8 | — | IIPS fact sheet |
| 23 | Female sterilization (%) | 14.5 | 11.7 | — | IIPS fact sheet |
| 24 | Male sterilization (%) | 1.7 | 1.8 | — | IIPS fact sheet |
| 25 | Total unmet need for family planning | 11.9 | 4.5 | -7.4 | IIPS fact sheet |
| 26 | Unmet need for spacing 3 (%) | 4.9 | 2.2 | — | IIPS fact sheet |
| 27 | Unmet need for limiting3 (%) | 7.0 | 2.3 | — | IIPS fact sheet |
| 28 | First-trimester antenatal check-up | 63.7 | 73.2 | +9.5 | IIPS fact sheet |
| 29 | Mothers who had any antenatal care visits (%) | 80.1 | 99.0 | — | IIPS fact sheet |
| 30 | At least four antenatal care visits | 58.4 | 73.6 | +15.2 | IIPS fact sheet |
| 31 | Mothers whose last birth was protected against neonatal tetanus4 (%) | 92.0 | 98.9 | — | IIPS fact sheet |
| 32 | Mothers who consumed iron folic acid for 100 days or more when they were pregnant (%) | 54.7 | 89.3 | — | IIPS fact sheet |
| 33 | Mothers who consumed iron folic acid for 180 days or more when they were pregnant (%) | 31.5 | 73.4 | — | IIPS fact sheet |
| 34 | Registered pregnancies for which the mother received a Mother and Child Protection (MCP) | 94.6 | 99.9 | — | IIPS fact sheet |
| 35 | Institutional births | 94.7 | 97.7 | +3.0 | IIPS fact sheet |
| 36 | Institutional births in public facility (%) | 78.6 | 71.7 | — | IIPS fact sheet |
| 37 | Births attended by skilled health personnel | 96.5 | 97.9 | +1.4 | IIPS fact sheet |
| 38 | Caesarean births | 32.8 | 51.1 | +18.3 | IIPS fact sheet |
| 39 | Births in a private health facility that were delivered by caesarean section (%) | 55.4 | 67.8 | — | IIPS fact sheet |
| 40 | Births in a public health facility that were delivered by caesarean section (%) | 30.4 | 46.7 | — | IIPS fact sheet |
| 41 | Mothers who received postnatal care from a doctor/nurse/LHV/ANM/midwife/other health | 69.3 | 85.1 | — | IIPS fact sheet |
| 42 | Children born at home who were taken to a health facility for a check-up within 24 hours of | \* | \* | — | IIPS fact sheet |
| 43 | Children who received postnatal care from a doctor/nurse/LHV/ANM/midwife/ other health | 66.2 | 87.1 | — | IIPS fact sheet |
| 44 | Full vaccination, card or maternal recall | 82.5 | 92.9 | — | IIPS fact sheet |
| 45 | Full vaccination, card only | 87.6 | 95.1 | +7.5 | IIPS fact sheet |
| 46 | Children age 12-23 months who have received any vaccine (%) | 96.9 | 96.2 | — | IIPS fact sheet |
| 47 | BCG vaccination | 96.6 | 96.2 | -0.4 | IIPS fact sheet |
| 48 | Children age 12-23 months who have received 3 doses of polio vaccine 8 (%) | 89.0 | 92.9 | — | IIPS fact sheet |
| 49 | Children age 12-23 months who have received 3 doses of pentavalent vaccine (%) | 93.3 | 94.5 | — | IIPS fact sheet |
| 50 | Children age 12-23 months who have received the first dose of measles-containing | 90.5 | 94.5 | — | IIPS fact sheet |
| 51 | Children age 24-35 months who have received a second dose of measles-containing | 35.7 | 85.6 | — | IIPS fact sheet |
| 52 | Children age 12-23 months who have received birth dose of hepatitis B vaccine (%) | 87.6 | 94.4 | — | IIPS fact sheet |
| 53 | Children age 12-23 months who have received 3 doses of rotavirus vaccine (%) | 0.0 | 94.1 | — | IIPS fact sheet |
| 54 | Children age 9-35 months who received a vitamin A dose in the last 6 months (%) | 87.5 | 86.3 | — | IIPS fact sheet |
| 55 | Children age 12-23 months who received most of their vaccinations in a public health | 100.0 | 100.0 | — | IIPS fact sheet |
| 56 | Children age 12-23 months who received most of their vaccinations in a private health | 0.0 | 0.0 | — | IIPS fact sheet |
| 57 | Prevalence of diarrhoea in the 2 weeks preceding the survey (%) | 5.5 | 2.5 | — | IIPS fact sheet |
| 58 | Prevalence of severe diarrhoea in the 2 weeks preceding the survey (%) | 2.1 | 0.4 | — | IIPS fact sheet |
| 59 | Prevalence of symptoms of acute respiratory infection (ARI) in the 2 weeks preceding the | 0.7 | 0.2 | — | IIPS fact sheet |
| 60 | Children with fever or symptoms of ARI in the 2 weeks preceding the survey taken to a health | 59.5 | 54.0 | — | IIPS fact sheet |
| 61 | Children under age 3 years breastfed within one hour of birth9 (%) | 33.0 | 68.0 | — | IIPS fact sheet |
| 62 | Children under age 6 months exclusively breastfed 10 (%) | 28.3 | 49.6 | — | IIPS fact sheet |
| 63 | Children under age 6 months currently breastfeeding 10 (%) | 91.3 | 94.5 | — | IIPS fact sheet |
| 64 | Children under age 6 months exclusively breastfed or breastfeeding and consuming plain | 63.3 | 79.7 | — | IIPS fact sheet |
| 65 | Children age 6-8 months receiving solid or semi-solid food and breastmilk 10 (%) | (57.4) | \* | — | IIPS fact sheet |
| 66 | Breastfeeding children age 6-23 months receiving an adequate diet 10, 11 (%) | 21.9 | 22.1 | — | IIPS fact sheet |
| 67 | Non-breastfeeding children age 6-23 months receiving an adequate diet 10, 11 (%) | (35.0) | \* | — | IIPS fact sheet |
| 68 | Total children age 6-23 months receiving an adequate diet 10, 11 (%) | 23.8 | 22.2 | — | IIPS fact sheet |
| 69 | Child stunting | 22.3 | 20.1 | -2.2 | IIPS fact sheet |
| 70 | Child wasting | 13.6 | 9.4 | — | IIPS fact sheet |
| 71 | Severe child wasting | 6.6 | 3.5 | -3.1 | IIPS fact sheet |
| 72 | Child underweight | 13.1 | 11.2 | -1.9 | IIPS fact sheet |
| 73 | Child overweight | 9.6 | 6.6 | -3.0 | IIPS fact sheet |
| 74 | Women whose Body Mass Index (BMI) is below normal (BMI <18.5 kg/m 2)15 (%) | 5.8 | 5.1 | — | IIPS fact sheet |
| 75 | Men whose Body Mass Index (BMI) is below normal (BMI <18.5 kg/m 2) (%) | 4.9 | 7.3 | — | IIPS fact sheet |
| 76 | Women aged 15–49 overweight or obese (BMI ≥25), % | 34.8 | 47.5 | — | IIPS fact sheet |
| 77 | Men aged 15–49 overweight or obese (BMI ≥25), % | 36.3 | 42.6 | — | IIPS fact sheet |
| 78 | Blood sugar level - high (141-160 mg/dl)16 (%) | 6.2 | 7.0 | — | IIPS fact sheet |
| 79 | Blood sugar level - very high (>160 mg/dl)16 (%) | 4.7 | 6.7 | — | IIPS fact sheet |
| 80 | Blood sugar level - high or very high (>140 mg/dl) or taking medicine to control blood | 12.2 | 15.1 | — | IIPS fact sheet |
| 81 | Blood sugar level - high (141-160 mg/dl)16 (%) | 7.5 | 7.9 | — | IIPS fact sheet |
| 82 | Blood sugar level - very high (>160 mg/dl)16 (%) | 7.0 | 6.1 | — | IIPS fact sheet |
| 83 | Blood sugar level - high or very high (>140 mg/dl) or taking medicine to control blood | 15.7 | 15.6 | — | IIPS fact sheet |
| 84 | Mildly elevated blood pressure (Systolic 140-159 mm of Hg and/or | 18.5 | 18.7 | — | IIPS fact sheet |
| 85 | Women aged 15+ with moderately or severely elevated blood pressure, % | 11.8 | 8.5 | — | IIPS fact sheet |
| 86 | Women aged 15+ with elevated blood pressure or taking medicine for it, % | 34.5 | 32.0 | — | IIPS fact sheet |
| 87 | Mildly elevated blood pressure (Systolic 140-159 mm of Hg and/or | 25.0 | 22.5 | — | IIPS fact sheet |
| 88 | Men aged 15+ with moderately or severely elevated blood pressure, % | 13.9 | 4.9 | — | IIPS fact sheet |
| 89 | Men aged 15+ with elevated blood pressure or taking medicine for it, % | 41.6 | 36.6 | — | IIPS fact sheet |
| 90 | Currently married women who usually participate in three household decisions 17 (%) | 89.7 | 98.6 | — | IIPS fact sheet |
| 91 | Women who worked in the last 12 months and were paid in cash (%) | 32.7 | 30.7 | — | IIPS fact sheet |
| 92 | Women having a bank or savings account that they themselves use (%) | 76.4 | 91.4 | — | IIPS fact sheet |
| 93 | Women having a mobile phone that they themselves use (%) | 88.6 | 91.6 | — | IIPS fact sheet |
| 94 | Women age 15-24 years who use hygienic methods of protection during their menstrual | 86.3 | 99.1 | — | IIPS fact sheet |
| 95 | Ever-married women age 18-49 years who have ever experienced spousal violence 19 (%) | 12.4 | 4.6 | — | IIPS fact sheet |
| 96 | Ever-married women age 18-49 years who have experienced physical violence during any | 1.9 | 0.5 | — | IIPS fact sheet |
| 97 | Young women age 18-29 years who experienced sexual violence by age 18 (%) | 0.1 | 0.0 | — | IIPS fact sheet |
| 98 | Women age 15 years and above who use any kind of tobacco (%) | 11.6 | 13.1 | — | IIPS fact sheet |
| 99 | Men age 15 years and above who use any kind of tobacco (%) | 41.5 | 39.3 | — | IIPS fact sheet |
| 100 | Women age 15 years and above who consume alcohol (%) | 16.2 | 19.9 | — | IIPS fact sheet |
| 101 | Men age 15 years and above who consume alcohol (%) | 39.9 | 42.2 | — | IIPS fact sheet |

### Tamil Nadu

**NFHS-5** · NFHS5-II · 131 indicator rows.

| Row | Indicator | Total | PDF page |
| --- | --- | --- | --- |
| 1 | Female population age 6 years and above who ever attended school (%) | 80.4 | 61 |
| 2 | Population below age 15 years (%) | 21.0 | 61 |
| 3 | Sex ratio of the total population (females per 1,000 males) | 1,088 | 61 |
| 4 | Sex ratio at birth for children born in the last five years (females per 1,000 males) | 878 | 61 |
| 5 | Children under age 5 years whose birth was registered with the civil authority (%) | 98.3 | 61 |
| 6 | Deaths in the last 3 years registered with the civil authority (%) | 93.0 | 61 |
| 7 | Population living in households with electricity (%) | 99.3 | 61 |
| 8 | Population living in households with an improved drinking-water source1 (%) | 98.6 | 61 |
| 9 | Population living in households that use an improved sanitation facility 2 (%) | 72.6 | 61 |
| 10 | Households using clean fuel for cooking3 (%) | 82.9 | 61 |
| 11 | Households using iodized salt (%) | 92.0 | 61 |
| 12 | Households with any usual member covered under a health insurance/financing scheme (%) | 66.5 | 61 |
| 13 | Children age 5 years who attended pre-primary school during the school year 2019-20 (%) | 25.2 | 61 |
| 14 | Women who are literate 4 (%) | 84.0 | 61 |
| 15 | Men who are literate4 (%) | 90.7 | 61 |
| 16 | Women with 10 or more years of schooling (%) | 56.6 | 61 |
| 17 | Men with 10 or more years of schooling (%) | 59.1 | 61 |
| 18 | Women who have ever used the internet (%) | 46.9 | 61 |
| 19 | Men who have ever used the internet (%) | 70.2 | 61 |
| 20 | Women age 20-24 years married before age 18 years (%) | 12.8 | 61 |
| 21 | Men age 25-29 years married before age 21 years (%) | 4.5 | 61 |
| 22 | Total fertility rate (children per woman) | 1.8 | 61 |
| 23 | Women age 15-19 years who were already mothers or pregnant at the time of the survey (%) | 6.3 | 61 |
| 24 | Adolescent fertility rate for women age 15 -19 years5 | 34 | 61 |
| 25 | Neonatal mortality rate (NNMR) | 12.7 | 61 |
| 26 | Infant mortality rate (IMR) | 18.6 | 61 |
| 27 | Under-five mortality rate (U5MR) | 22.3 | 61 |
| 28 | Any method6 (%) | 68.6 | 61 |
| 29 | Any modern method 6 (%) | 65.5 | 61 |
| 30 | Female sterilization (%) | 57.8 | 61 |
| 31 | Male sterilization (%) | 0.1 | 61 |
| 32 | IUD/PPIUD (%) | 4.8 | 61 |
| 33 | Pill (%) | 0.3 | 61 |
| 34 | Condom (%) | 1.8 | 61 |
| 35 | Injectables (%) | 0.2 | 61 |
| 36 | Total unmet need7 (%) | 7.5 | 61 |
| 37 | Unmet need for spacing7 (%) | 3.0 | 61 |
| 38 | Health worker ever talked to female non-users about family planning (%) | 28.5 | 61 |
| 39 | Current users ever told about side effects of current method8 (%) | 82.6 | 61 |
| 40 | Mothers who had an antenatal check-up in the first trimester (%) | 77.4 | 62 |
| 41 | Mothers who had at least 4 antenatal care visits (%) | 89.9 | 62 |
| 42 | Mothers whose last birth was protected against neonatal tetanus9 (%) | 89.7 | 62 |
| 43 | Mothers who consumed iron folic acid for 100 days or more when they were pregnant (%) | 82.5 | 62 |
| 44 | Mothers who consumed iron folic acid for 180 days or more when they were pregnant (%) | 63.1 | 62 |
| 45 | Registered pregnancies for which the mother received a Mother and Child Protection (MCP) | 98.8 | 62 |
| 46 | Mothers who received postnatal care from a doctor/nurse/LHV/ANM/midwife/other health | 93.2 | 62 |
| 47 | Average out-of-pocket expenditure per delivery in a public health facility (Rs.) | 3,316 | 62 |
| 48 | Children born at home who were taken to a health facility for a check -up within 24 hours of | \* | 62 |
| 49 | Children who received postnatal care from a doctor/nurse/LHV/ANM/midwife/other health | 94.9 | 62 |
| 50 | Institutional births (%) | 99.6 | 62 |
| 51 | Institutional births in public facility (%) | 66.9 | 62 |
| 52 | Home births that were conducted by skilled health personnel 10 (%) | 0.2 | 62 |
| 53 | Births attended by skilled health personnel10 (%) | 99.8 | 62 |
| 54 | Births delivered by caesarean section (%) | 44.9 | 62 |
| 55 | Births in a private health facility that were delivered by caesarean section (%) | 63.8 | 62 |
| 56 | Births in a public health facility that were delivered by caesarean section (%) | 36.0 | 62 |
| 57 | Children age 12-23 months fully vaccinated based on information from either vaccination card | 89.2 | 62 |
| 58 | Children age 12-23 months fully vaccinated based on information from vaccination card | 90.4 | 62 |
| 59 | Children age 12-23 months who have received BCG (%) | 97.6 | 62 |
| 60 | Children age 12-23 months who have received 3 doses of polio vaccine13 (%) | 91.5 | 62 |
| 61 | Children age 12-23 months who have received 3 doses of penta or DPT vaccine (%) | 94.8 | 62 |
| 62 | Children age 12-23 months who have received the first dose of measles-containing | 95.8 | 62 |
| 63 | Children age 24-35 months who have received a second dose of measles-containing | 44.7 | 62 |
| 64 | Children age 12-23 months who have received 3 doses of rotavirus vaccine 14 (%) | 66.4 | 62 |
| 65 | Children age 12-23 months who have received 3 doses of penta or hepatitis B vaccine (%) | 92.3 | 62 |
| 66 | Children age 9-35 months who received a vitamin A dose in the last 6 months (%) | 68.2 | 62 |
| 67 | Children age 12-23 months who received most of their vaccinations in a public health | 89.8 | 62 |
| 68 | Children age 12-23 months who received most of their vaccinations in a private health | 10.1 | 62 |
| 69 | Prevalence of diarrhoea in the 2 weeks preceding the survey (%) | 3.7 | 62 |
| 70 | Children with diarrhoea in the 2 weeks preceding the survey who received oral rehydration | 53.8 | 62 |
| 71 | Children with diarrhoea in the 2 weeks preceding the survey who received zinc (%) | 28.9 | 62 |
| 72 | Children with diarrhoea in the 2 weeks preceding the survey taken to a health facility or health | 60.2 | 62 |
| 73 | Prevalence of symptoms of acute respiratory infection (ARI) in the 2 weeks preceding the | 1.1 | 62 |
| 74 | Children with fever or symptoms of ARI in the 2 weeks preceding the survey taken to a health | 67.4 | 62 |
| 75 | Children under age 3 years breastfed within one hour of birth15 (%) | 60.2 | 63 |
| 76 | Children under age 6 months exclusively breastfed16 (%) | 55.1 | 63 |
| 77 | Children age 6-8 months receiving solid or semi-solid food and breastmilk16 (%) | 66.5 | 63 |
| 78 | Breastfeeding children age 6 -23 months receiving an adequate diet 16, 17 (%) | 12.8 | 63 |
| 79 | Non-breastfeeding children age 6 -23 months receiving an adequate diet 16, 17 (%) | 24.1 | 63 |
| 80 | Total children age 6 -23 months receiving an adequate diet 16, 17 (%) | 16.3 | 63 |
| 81 | Children under 5 years who are stunted (height-for-age)18 (%) | 25.0 | 63 |
| 82 | Children under 5 years who are wasted (weight-for-height)18 (%) | 14.6 | 63 |
| 83 | Children under 5 years who are severely wasted (weight-for-height)19 (%) | 5.5 | 63 |
| 84 | Children under 5 years who are underweight (weight-for-age)18 (%) | 22.0 | 63 |
| 85 | Children under 5 years who are overweight (weight-for-height)20 (%) | 4.3 | 63 |
| 86 | Women whose Body Mass Index (BMI) is below normal (BMI <18.5 kg/m 2)21 (%) | 12.6 | 63 |
| 87 | Men whose Body Mass Index (BMI) is below normal (BMI <18.5 kg/m2) (%) | 12.1 | 63 |
| 88 | Women who are overweight or obese (BMI ≥25.0 kg/m2)21 (%) | 40.4 | 63 |
| 89 | Men who are overweight or obese (BMI ≥25.0 kg/m2) (%) | 37.0 | 63 |
| 90 | Women who have high risk waist-to-hip ratio (≥0.85) (%) | 55.9 | 63 |
| 91 | Men who have high risk waist -to-hip ratio (≥0.90) (%) | 56.2 | 63 |
| 92 | Children age 6-59 months who are anaemic (<11.0 g/dl) 22 (%) | 57.4 | 63 |
| 93 | Non-pregnant women age 15-49 years who are anaemic (<12.0 g/dl)22 (%) | 53.6 | 63 |
| 94 | Pregnant women age 15-49 years who are anaemic (<11.0 g/dl) 22 (%) | 48.3 | 63 |
| 95 | All women age 15 -49 years who are anaemic 22 (%) | 53.4 | 63 |
| 96 | All women age 15-19 years who are anaemic22 (%) | 52.9 | 63 |
| 97 | Men age 15-49 years who are anaemic (<13.0 g/dl)22 (%) | 15.2 | 63 |
| 98 | Men age 15 -19 years who are anaemic (<13.0 g/dl) 22 (%) | 24.6 | 63 |
| 99 | Blood sugar level - high (141-160 mg/dl)23 (%) | 7.5 | 63 |
| 100 | Blood sugar level - very high (>160 mg/dl) 23 (%) | 11.1 | 63 |
| 101 | Blood sugar level - high or very high (>140 mg/dl) or taking medicine to control blood | 20.7 | 63 |
| 102 | Blood sugar level - high (141-160 mg/dl)23 (%) | 8.1 | 63 |
| 103 | Blood sugar level - very high (>160 mg/dl) 23 (%) | 11.9 | 63 |
| 104 | Blood sugar level - high or very high (>140 mg/dl) or taking medicine to control blood | 22.1 | 63 |
| 105 | Mildly elevated blood pressure (Systolic 140 -159 mm of Hg and/or | 14.3 | 63 |
| 106 | Moderately or severely elevated blood pressure (Systolic ≥160 mm of Hg and/or | 6.2 | 63 |
| 107 | Elevated blood pressure (Systolic ≥140 mm of Hg and/or Diastolic ≥90 mm of Hg) or taking | 24.8 | 63 |
| 108 | Mildly elevated blood pressure (Systolic 140 -159 mm of Hg and/or | 19.5 | 63 |
| 109 | Moderately or severely elevated blood pressure (Systolic ≥160 mm of Hg and/or | 7.4 | 63 |
| 110 | Elevated blood pressure (Systolic ≥140 mm of Hg and/or Diastolic ≥90 mm of Hg) or taking | 30.2 | 63 |
| 111 | Ever undergone a screening test for cervical cancer (%) | 9.8 | 64 |
| 112 | Ever undergone a breast examination for breast cancer (%) | 5.6 | 64 |
| 113 | Ever undergone an oral cavity examination for oral cancer (%) | 1.2 | 64 |
| 114 | Ever undergone an oral cavity examination for oral cancer (%) | 0.7 | 64 |
| 115 | Women who have comprehensive knowledge 24 of HIV/AIDS (%) | 23.6 | 64 |
| 116 | Men who have comprehensive knowledge24 of HIV/AIDS (%) | 26.6 | 64 |
| 117 | Women who know that consistent condom use can reduce the chance of getting | 77.9 | 64 |
| 118 | Men who know that consistent condom use can reduce the chance of getting HIV/AIDS (%) | 90.1 | 64 |
| 119 | Currently married women who usually participate in three household decisions25 (%) | 92.8 | 64 |
| 120 | Women who worked in the last 12 months and were paid in cash (%) | 40.8 | 64 |
| 121 | Women owning a house and/or land (alone or jointly with others) (%) | 47.9 | 64 |
| 122 | Women having a bank or savings account that they themselves use (%) | 92.2 | 64 |
| 123 | Women having a mobile phone that they themselves use (%) | 74.6 | 64 |
| 124 | Women age 15-24 years who use hygienic methods of protection during their | 98.3 | 64 |
| 125 | Ever-married women age 18-49 years who have ever experienced spousal violence27 (%) | 38.1 | 64 |
| 126 | Ever-married women age 18-49 years who have experienced physical violence during any | 3.3 | 64 |
| 127 | Young women age 18 -29 years who experienced sexual violence by age 18 (%) | 0.0 | 64 |
| 128 | Women age 15 years and above who use any kind of tobacco (%) | 4.9 | 64 |
| 129 | Men age 15 years and above who use any kind of tobacco (%) | 20.1 | 64 |
| 130 | Women age 15 years and above who consume alcohol (%) | 0.3 | 64 |
| 131 | Men age 15 years and above who consume alcohol (%) | 25.4 | 64 |

**NFHS-6** · 101 extracted indicator rows.

| Row | Indicator | NFHS-5 Total as printed in NFHS-6 | NFHS-6 Total | Reviewed change | PDF page |
| --- | --- | --- | --- | --- | --- |
| 1 | Population below age 5 years (%) | 6.7 | 6.2 | — | IIPS fact sheet |
| 2 | Population below age 15 years (%) | 21.0 | 20.2 | — | IIPS fact sheet |
| 3 | Population age 60 years and above (%) | 14.9 | 16.3 | — | IIPS fact sheet |
| 4 | Household electricity access | 99.3 | 99.3 | +0.0 | IIPS fact sheet |
| 5 | Population living in households with an improved drinking-water source 1 (%) | 98.6 | 98.5 | — | IIPS fact sheet |
| 6 | Households using iodized salt (%) | 92.0 | 92.8 | — | IIPS fact sheet |
| 7 | Households with any usual member covered under a health insurance/financing scheme (%) | 66.5 | 61.1 | — | IIPS fact sheet |
| 8 | Households with any usual member having a bank account/post office account (%) | 96.6 | 97.3 | — | IIPS fact sheet |
| 9 | Female population age 6+ ever attended school | 80.4 | 80.4 | +0.0 | IIPS fact sheet |
| 10 | Households with any usual female members owning a house and/or land (alone or jointly with | 17.2 | 17.2 | — | IIPS fact sheet |
| 11 | Children age 2-4 years who attended pre-school (%) | 46.1 | 65.3 | — | IIPS fact sheet |
| 12 | Women with 10 or more years of schooling | 56.6 | 64.2 | +7.6 | IIPS fact sheet |
| 13 | Men with 10 or more years of schooling | 59.1 | 69.2 | +10.1 | IIPS fact sheet |
| 14 | Women who have ever used the internet (%) | 46.9 | 59.5 | — | IIPS fact sheet |
| 15 | Men who have ever used the internet (%) | 70.2 | 81.8 | — | IIPS fact sheet |
| 16 | Women age 20–24 married before age 18 | 12.8 | 10.5 | -2.3 | IIPS fact sheet |
| 17 | Men age 25-29 years married before age 21 years (%) | 4.5 | 3.7 | — | IIPS fact sheet |
| 18 | Total fertility rate, children per woman | 1.8 | 1.7 | -0.1 | IIPS fact sheet |
| 19 | Women age 15-19 years who were already mothers or pregnant at the time of the survey (%) | 6.3 | 4.1 | — | IIPS fact sheet |
| 20 | Any method2 (%) | 68.6 | 68.5 | — | IIPS fact sheet |
| 21 | Any modern method2 (%) | 65.5 | 65.1 | — | IIPS fact sheet |
| 22 | Any traditional method (%) | 3.1 | 3.4 | — | IIPS fact sheet |
| 23 | Female sterilization (%) | 57.8 | 56.6 | — | IIPS fact sheet |
| 24 | Male sterilization (%) | 0.1 | 0.1 | — | IIPS fact sheet |
| 25 | Total unmet need for family planning | 7.5 | 6.4 | -1.1 | IIPS fact sheet |
| 26 | Unmet need for spacing 3 (%) | 3.0 | 3.4 | — | IIPS fact sheet |
| 27 | Unmet need for limiting3 (%) | 4.5 | 3.0 | — | IIPS fact sheet |
| 28 | First-trimester antenatal check-up | 77.4 | 71.2 | -6.2 | IIPS fact sheet |
| 29 | Mothers who had any antenatal care visits (%) | 95.8 | 92.2 | — | IIPS fact sheet |
| 30 | At least four antenatal care visits | 90.6 | 87.6 | — | IIPS fact sheet |
| 31 | Mothers whose last birth was protected against neonatal tetanus4 (%) | 89.7 | 88.2 | — | IIPS fact sheet |
| 32 | Mothers who consumed iron folic acid for 100 days or more when they were pregnant (%) | 82.5 | 82.1 | — | IIPS fact sheet |
| 33 | Mothers who consumed iron folic acid for 180 days or more when they were pregnant (%) | 63.1 | 64.5 | — | IIPS fact sheet |
| 34 | Registered pregnancies for which the mother received a Mother and Child Protection (MCP) | 98.8 | 99.1 | — | IIPS fact sheet |
| 35 | Institutional births | 99.6 | 99.7 | +0.1 | IIPS fact sheet |
| 36 | Institutional births in public facility (%) | 66.9 | 63.6 | — | IIPS fact sheet |
| 37 | Births attended by skilled health personnel | 99.8 | 99.7 | -0.1 | IIPS fact sheet |
| 38 | Caesarean births | 44.9 | 46.9 | +2.0 | IIPS fact sheet |
| 39 | Births in a private health facility that were delivered by caesarean section (%) | 63.8 | 60.3 | — | IIPS fact sheet |
| 40 | Births in a public health facility that were delivered by caesarean section (%) | 36.0 | 39.6 | — | IIPS fact sheet |
| 41 | Mothers who received postnatal care from a doctor/nurse/LHV/ANM/midwife/other health | 93.2 | 90.5 | — | IIPS fact sheet |
| 42 | Children born at home who were taken to a health facility for a check-up within 24 hours of | \* | \* | — | IIPS fact sheet |
| 43 | Children who received postnatal care from a doctor/nurse/LHV/ANM/midwife/ other health | 94.9 | 92.7 | — | IIPS fact sheet |
| 44 | Full vaccination, card or maternal recall | 89.4 | 90.0 | — | IIPS fact sheet |
| 45 | Full vaccination, card only | 90.4 | 89.7 | -0.7 | IIPS fact sheet |
| 46 | Children age 12-23 months who have received any vaccine (%) | 98.5 | 96.2 | — | IIPS fact sheet |
| 47 | BCG vaccination | 97.6 | 95.0 | -2.6 | IIPS fact sheet |
| 48 | Children age 12-23 months who have received 3 doses of polio vaccine 8 (%) | 91.5 | 92.1 | — | IIPS fact sheet |
| 49 | Children age 12-23 months who have received 3 doses of pentavalent vaccine (%) | 94.9 | 92.8 | — | IIPS fact sheet |
| 50 | Children age 12-23 months who have received the first dose of measles-containing | 95.8 | 94.5 | — | IIPS fact sheet |
| 51 | Children age 24-35 months who have received a second dose of measles-containing | 75.0 | 75.6 | — | IIPS fact sheet |
| 52 | Children age 12-23 months who have received birth dose of hepatitis B vaccine (%) | 84.9 | 90.6 | — | IIPS fact sheet |
| 53 | Children age 12-23 months who have received 3 doses of rotavirus vaccine (%) | 66.4 | 87.4 | — | IIPS fact sheet |
| 54 | Children age 9-35 months who received a vitamin A dose in the last 6 months (%) | 68.2 | 71.4 | — | IIPS fact sheet |
| 55 | Children age 12-23 months who received most of their vaccinations in a public health | 89.8 | 91.5 | — | IIPS fact sheet |
| 56 | Children age 12-23 months who received most of their vaccinations in a private health | 10.1 | 8.2 | — | IIPS fact sheet |
| 57 | Prevalence of diarrhoea in the 2 weeks preceding the survey (%) | 3.7 | 5.1 | — | IIPS fact sheet |
| 58 | Prevalence of severe diarrhoea in the 2 weeks preceding the survey (%) | 0.1 | 0.3 | — | IIPS fact sheet |
| 59 | Prevalence of symptoms of acute respiratory infection (ARI) in the 2 weeks preceding the | 1.1 | 0.6 | — | IIPS fact sheet |
| 60 | Children with fever or symptoms of ARI in the 2 weeks preceding the survey taken to a health | 67.4 | 72.7 | — | IIPS fact sheet |
| 61 | Children under age 3 years breastfed within one hour of birth9 (%) | 60.2 | 54.8 | — | IIPS fact sheet |
| 62 | Children under age 6 months exclusively breastfed 10 (%) | 55.1 | 55.6 | — | IIPS fact sheet |
| 63 | Children under age 6 months currently breastfeeding 10 (%) | 96.9 | 95.7 | — | IIPS fact sheet |
| 64 | Children under age 6 months exclusively breastfed or breastfeeding and consuming plain | 80.0 | 80.7 | — | IIPS fact sheet |
| 65 | Children age 6-8 months receiving solid or semi-solid food and breastmilk 10 (%) | 66.5 | 65.2 | — | IIPS fact sheet |
| 66 | Breastfeeding children age 6-23 months receiving an adequate diet 10, 11 (%) | 12.6 | 17.3 | — | IIPS fact sheet |
| 67 | Non-breastfeeding children age 6-23 months receiving an adequate diet 10, 11 (%) | 22.8 | 26.9 | — | IIPS fact sheet |
| 68 | Total children age 6-23 months receiving an adequate diet 10, 11 (%) | 15.8 | 20.6 | — | IIPS fact sheet |
| 69 | Child stunting | 25.0 | 20.7 | -4.3 | IIPS fact sheet |
| 70 | Child wasting | 14.6 | 17.4 | +2.8 | IIPS fact sheet |
| 71 | Severe child wasting | 5.5 | 4.9 | -0.6 | IIPS fact sheet |
| 72 | Child underweight | 22.0 | 23.2 | +1.2 | IIPS fact sheet |
| 73 | Child overweight | 4.3 | 2.2 | -2.1 | IIPS fact sheet |
| 74 | Women whose Body Mass Index (BMI) is below normal (BMI <18.5 kg/m 2)15 (%) | 12.6 | 12.1 | — | IIPS fact sheet |
| 75 | Men whose Body Mass Index (BMI) is below normal (BMI <18.5 kg/m 2) (%) | 12.1 | 13.4 | — | IIPS fact sheet |
| 76 | Women aged 15–49 overweight or obese (BMI ≥25), % | 40.5 | 44.2 | — | IIPS fact sheet |
| 77 | Men aged 15–49 overweight or obese (BMI ≥25), % | 37.1 | 38.8 | — | IIPS fact sheet |
| 78 | Blood sugar level - high (141-160 mg/dl)16 (%) | 7.5 | 8.5 | — | IIPS fact sheet |
| 79 | Blood sugar level - very high (>160 mg/dl)16 (%) | 11.1 | 14.0 | — | IIPS fact sheet |
| 80 | Blood sugar level - high or very high (>140 mg/dl) or taking medicine to control blood | 20.7 | 25.2 | — | IIPS fact sheet |
| 81 | Blood sugar level - high (141-160 mg/dl)16 (%) | 8.1 | 9.1 | — | IIPS fact sheet |
| 82 | Blood sugar level - very high (>160 mg/dl)16 (%) | 11.9 | 15.3 | — | IIPS fact sheet |
| 83 | Blood sugar level - high or very high (>140 mg/dl) or taking medicine to control blood | 22.1 | 26.7 | — | IIPS fact sheet |
| 84 | Mildly elevated blood pressure (Systolic 140-159 mm of Hg and/or | 14.3 | 12.2 | — | IIPS fact sheet |
| 85 | Women aged 15+ with moderately or severely elevated blood pressure, % | 6.2 | 4.7 | — | IIPS fact sheet |
| 86 | Women aged 15+ with elevated blood pressure or taking medicine for it, % | 24.8 | 24.2 | — | IIPS fact sheet |
| 87 | Mildly elevated blood pressure (Systolic 140-159 mm of Hg and/or | 19.5 | 16.5 | — | IIPS fact sheet |
| 88 | Men aged 15+ with moderately or severely elevated blood pressure, % | 7.4 | 3.4 | — | IIPS fact sheet |
| 89 | Men aged 15+ with elevated blood pressure or taking medicine for it, % | 30.2 | 28.2 | — | IIPS fact sheet |
| 90 | Currently married women who usually participate in three household decisions 17 (%) | 92.8 | 91.4 | — | IIPS fact sheet |
| 91 | Women who worked in the last 12 months and were paid in cash (%) | 40.8 | 48.0 | — | IIPS fact sheet |
| 92 | Women having a bank or savings account that they themselves use (%) | 92.2 | 90.0 | — | IIPS fact sheet |
| 93 | Women having a mobile phone that they themselves use (%) | 74.6 | 76.8 | — | IIPS fact sheet |
| 94 | Women age 15-24 years who use hygienic methods of protection during their menstrual | 98.4 | 97.7 | — | IIPS fact sheet |
| 95 | Ever-married women age 18-49 years who have ever experienced spousal violence 19 (%) | 38.1 | 28.5 | — | IIPS fact sheet |
| 96 | Ever-married women age 18-49 years who have experienced physical violence during any | 3.3 | 3.0 | — | IIPS fact sheet |
| 97 | Young women age 18-29 years who experienced sexual violence by age 18 (%) | 0.0 | 0.1 | — | IIPS fact sheet |
| 98 | Women age 15 years and above who use any kind of tobacco (%) | 4.9 | 4.8 | — | IIPS fact sheet |
| 99 | Men age 15 years and above who use any kind of tobacco (%) | 20.0 | 17.7 | — | IIPS fact sheet |
| 100 | Women age 15 years and above who consume alcohol (%) | 0.3 | 0.3 | — | IIPS fact sheet |
| 101 | Men age 15 years and above who consume alcohol (%) | 25.3 | 23.5 | — | IIPS fact sheet |

### Telangana

**NFHS-5** · NFHS5-I · 131 indicator rows.

| Row | Indicator | Total | PDF page |
| --- | --- | --- | --- |
| 1 | Female population age 6 years and above who ever attended school (%) | 60.9 | 128 |
| 2 | Population below age 15 years (%) | 22.5 | 128 |
| 3 | Sex ratio of the total population (females per 1,000 males) | 1,049 | 128 |
| 4 | Sex ratio at birth for children born in the last five years (females per 1,000 males) | 894 | 128 |
| 5 | Children under age 5 years whose birth was registered with the civil authority (%) | 90.0 | 128 |
| 6 | Deaths in the last 3 years registered with the civil authority (%) | 73.5 | 128 |
| 7 | Population living in households with electricity (%) | 99.6 | 128 |
| 8 | Population living in households with an improved drinking-water source1 (%) | 98.7 | 128 |
| 9 | Population living in households that use an improved sanitation facility2 (%) | 76.2 | 128 |
| 10 | Households using clean fuel for cooking3 (%) | 91.8 | 128 |
| 11 | Households using iodized salt (%) | 95.8 | 128 |
| 12 | Households with any usual member covered under a health insurance/financing scheme (%) | 60.8 | 128 |
| 13 | Children age 5 years who attended pre-primary school during the school year 2019-20 (%) | 15.3 | 128 |
| 14 | Women who are literate4 (%) | 66.6 | 128 |
| 15 | Men who are literate4 (%) | 84.8 | 128 |
| 16 | Women with 10 or more years of schooling (%) | 45.5 | 128 |
| 17 | Men with 10 or more years of schooling (%) | 61.2 | 128 |
| 18 | Women who have ever used the internet (%) | 26.5 | 128 |
| 19 | Men who have ever used the internet (%) | 57.4 | 128 |
| 20 | Women age 20-24 years married before age 18 years (%) | 23.5 | 128 |
| 21 | Men age 25-29 years married before age 21 years (%) | 16.3 | 128 |
| 22 | Total fertility rate (children per woman) | 1.8 | 128 |
| 23 | Women age 15-19 years who were already mothers or pregnant at the time of the survey (%) | 5.8 | 128 |
| 24 | Adolescent fertility rate for women age 15-19 years5 | 48 | 128 |
| 25 | Neonatal mortality rate (NNMR) | 16.8 | 128 |
| 26 | Infant mortality rate (IMR) | 26.4 | 128 |
| 27 | Under-five mortality rate (U5MR) | 29.4 | 128 |
| 28 | Any method6 (%) | 68.1 | 128 |
| 29 | Any modern method6 (%) | 66.7 | 128 |
| 30 | Female sterilization (%) | 61.9 | 128 |
| 31 | Male sterilization (%) | 2.0 | 128 |
| 32 | IUD/PPIUD (%) | 0.5 | 128 |
| 33 | Pill (%) | 0.8 | 128 |
| 34 | Condom (%) | 0.8 | 128 |
| 35 | Injectables (%) | 0.1 | 128 |
| 36 | Total unmet need7 (%) | 6.4 | 128 |
| 37 | Unmet need for spacing7 (%) | 2.8 | 128 |
| 38 | Health worker ever talked to female non-users about family planning (%) | 17.0 | 128 |
| 39 | Current users ever told about side effects of current method8 (%) | 49.2 | 128 |
| 40 | Mothers who had an antenatal check-up in the first trimester (%) | 88.5 | 129 |
| 41 | Mothers who had at least 4 antenatal care visits (%) | 70.4 | 129 |
| 42 | Mothers whose last birth was protected against neonatal tetanus9 (%) | 89.6 | 129 |
| 43 | Mothers who consumed iron folic acid for 100 days or more when they were pregnant (%) | 57.9 | 129 |
| 44 | Mothers who consumed iron folic acid for 180 days or more when they were pregnant (%) | 34.4 | 129 |
| 45 | Registered pregnancies for which the mother received a Mother and Child Protection (MCP) card (%) | 96.7 | 129 |
| 46 | Mothers who received postnatal care from a doctor/nurse/LHV/ANM/midwife/other health personnel within 2 days of delivery (%) | 87.6 | 129 |
| 47 | Average out-of-pocket expenditure per delivery in a public health facility (Rs.) | 3,846 | 129 |
| 48 | Children born at home who were taken to a health facility for a check-up within 24 hours of birth (%) | 15.6 | 129 |
| 49 | Children who received postnatal care from a doctor/nurse/LHV/ANM/midwife/other health personnel within 2 days of delivery (%) | 90.0 | 129 |
| 50 | Institutional births (%) | 97.0 | 129 |
| 51 | Institutional births in public facility (%) | 49.7 | 129 |
| 52 | Home births that were conducted by skilled health personnel10 (%) | 1.3 | 129 |
| 53 | Births attended by skilled health personnel10 (%) | 93.6 | 129 |
| 54 | Births delivered by caesarean section (%) | 60.7 | 129 |
| 55 | Births in a private health facility that were delivered by caesarean section (%) | 81.5 | 129 |
| 56 | Births in a public health facility that were delivered by caesarean section (%) | 44.5 | 129 |
| 57 | Children age 12-23 months fully vaccinated based on information from either vaccination card or mother's recall11 (%) | 79.1 | 129 |
| 58 | Children age 12-23 months fully vaccinated based on information from vaccination card only12 (%) | 87.4 | 129 |
| 59 | Children age 12-23 months who have received BCG (%) | 93.5 | 129 |
| 60 | Children age 12-23 months who have received 3 doses of polio vaccine13 (%) | 81.6 | 129 |
| 61 | Children age 12-23 months who have received 3 doses of penta or DPT vaccine (%) | 89.2 | 129 |
| 62 | Children age 12-23 months who have received the first dose of measles-containing vaccine (MCV) (%) | 90.6 | 129 |
| 63 | Children age 24-35 months who have received a second dose of measles-containing vaccine (MCV) (%) | 36.4 | 129 |
| 64 | Children age 12-23 months who have received 3 doses of rotavirus vaccine14 (%) | 5.3 | 129 |
| 65 | Children age 12-23 months who have received 3 doses of penta or hepatitis B vaccine (%) | 86.4 | 129 |
| 66 | Children age 9-59 months who received a vitamin A dose in the last 6 months (%) | 72.4 | 129 |
| 67 | Children age 12-23 months who received most of their vaccinations in a public health facility (%) | 94.1 | 129 |
| 68 | Children age 12-23 months who received most of their vaccinations in a private health facility (%) | 4.5 | 129 |
| 69 | Prevalence of diarrhoea in the 2 weeks preceding the survey (%) | 7.4 | 129 |
| 70 | Children with diarrhoea in the 2 weeks preceding the survey who received oral rehydration salts (ORS) (%) | 56.3 | 129 |
| 71 | Children with diarrhoea in the 2 weeks preceding the survey who received zinc (%) | 38.5 | 129 |
| 72 | Children with diarrhoea in the 2 weeks preceding the survey taken to a health facility or health provider (%) | 71.9 | 129 |
| 73 | Prevalence of symptoms of acute respiratory infection (ARI) in the 2 weeks preceding the survey (%) | 2.2 | 129 |
| 74 | Children with fever or symptoms of ARI in the 2 weeks preceding the survey taken to a health facility or health provider (%) | 74.8 | 129 |
| 75 | Children under age 3 years breastfed within one hour of birth15 (%) | 37.1 | 130 |
| 76 | Children under age 6 months exclusively breastfed16 (%) | 68.2 | 130 |
| 77 | Children age 6-8 months receiving solid or semi-solid food and breastmilk16 (%) | 51.3 | 130 |
| 78 | Breastfeeding children age 6-23 months receiving an adequate diet16, 17 (%) | 8.3 | 130 |
| 79 | Non-breastfeeding children age 6-23 months receiving an adequate diet16, 17 (%) | 15.3 | 130 |
| 80 | Total children age 6-23 months receiving an adequate diet16, 17 (%) | 9.2 | 130 |
| 81 | Children under 5 years who are stunted (height-for-age)18 (%) | 33.1 | 130 |
| 82 | Children under 5 years who are wasted (weight-for-height)18 (%) | 21.7 | 130 |
| 83 | Children under 5 years who are severely wasted (weight-for-height)19 (%) | 8.5 | 130 |
| 84 | Children under 5 years who are underweight (weight-for-age)18 (%) | 31.8 | 130 |
| 85 | Children under 5 years who are overweight (weight-for-height)20 (%) | 3.4 | 130 |
| 86 | Women whose Body Mass Index (BMI) is below normal (BMI <18.5 kg/m2)21 (%) | 18.8 | 130 |
| 87 | Men whose Body Mass Index (BMI) is below normal (BMI <18.5 kg/m2) (%) | 16.2 | 130 |
| 88 | Women who are overweight or obese (BMI ≥25.0 kg/m2)21 (%) | 30.1 | 130 |
| 89 | Men who are overweight or obese (BMI ≥25.0 kg/m2) (%) | 32.3 | 130 |
| 90 | Women who have high risk waist-to-hip ratio (≥0.85) (%) | 44.1 | 130 |
| 91 | Men who have high risk waist-to-hip ratio (≥0.90) (%) | 46.1 | 130 |
| 92 | Children age 6-59 months who are anaemic (<11.0 g/dl)22 (%) | 70.0 | 130 |
| 93 | Non-pregnant women age 15-49 years who are anaemic (<12.0 g/dl)22 (%) | 57.8 | 130 |
| 94 | Pregnant women age 15-49 years who are anaemic (<11.0 g/dl)22 (%) | 53.2 | 130 |
| 95 | All women age 15-49 years who are anaemic22 (%) | 57.6 | 130 |
| 96 | All women age 15-19 years who are anaemic22 (%) | 64.7 | 130 |
| 97 | Men age 15-49 years who are anaemic (<13.0 g/dl)22 (%) | 15.3 | 130 |
| 98 | Men age 15-19 years who are anaemic (<13.0 g/dl)22 (%) | 25.1 | 130 |
| 99 | Blood sugar level - high (141-160 mg/dl)23 (%) | 5.8 | 130 |
| 100 | Blood sugar level - very high (>160 mg/dl)23 (%) | 7.0 | 130 |
| 101 | Blood sugar level - high or very high (>140 mg/dl) or taking medicine to control blood sugar level23 (%) | 14.7 | 130 |
| 102 | Blood sugar level - high (141-160 mg/dl)23 (%) | 6.9 | 130 |
| 103 | Blood sugar level - very high (>160 mg/dl)23 (%) | 9.3 | 130 |
| 104 | Blood sugar level - high or very high (>140 mg/dl) or taking medicine to control blood sugar level23 (%) | 18.1 | 130 |
| 105 | Mildly elevated blood pressure (Systolic 140-159 mm of Hg and/or Diastolic 90-99 mm of Hg) (%) | 13.6 | 130 |
| 106 | Moderately or severely elevated blood pressure (Systolic ≥160 mm of Hg and/or Diastolic ≥100 mm of Hg) (%) | 6.3 | 130 |
| 107 | Elevated blood pressure (Systolic ≥140 mm of Hg and/or Diastolic ≥90 mm of Hg) or taking medicine to control blood pressure (%) | 26.1 | 130 |
| 108 | Mildly elevated blood pressure (Systolic 140-159 mm of Hg and/or Diastolic 90-99 mm of Hg) (%) | 18.5 | 130 |
| 109 | Moderately or severely elevated blood pressure (Systolic ≥160 mm of Hg and/or Diastolic ≥100 mm of Hg) (%) | 8.1 | 130 |
| 110 | Elevated blood pressure (Systolic ≥140 mm of Hg and/or Diastolic ≥90 mm of Hg) or taking medicine to control blood pressure (%) | 31.4 | 130 |
| 111 | Ever undergone a screening test for cervical cancer (%) | 3.3 | 131 |
| 112 | Ever undergone a breast examination for breast cancer (%) | 0.3 | 131 |
| 113 | Ever undergone an oral cavity examination for oral cancer (%) | 2.5 | 131 |
| 114 | Ever undergone an oral cavity examination for oral cancer (%) | 2.6 | 131 |
| 115 | Women who have comprehensive knowledge24 of HIV/AIDS (%) | 30.7 | 131 |
| 116 | Men who have comprehensive knowledge24 of HIV/AIDS (%) | 30.5 | 131 |
| 117 | Women who know that consistent condom use can reduce the chance of getting HIV/AIDS (%) | 68.9 | 131 |
| 118 | Men who know that consistent condom use can reduce the chance of getting HIV/AIDS (%) | 75.3 | 131 |
| 119 | Currently married women who usually participate in three household decisions25 (%) | 87.2 | 131 |
| 120 | Women who worked in the last 12 months and were paid in cash (%) | 45.1 | 131 |
| 121 | Women owning a house and/or land (alone or jointly with others) (%) | 66.6 | 131 |
| 122 | Women having a bank or savings account that they themselves use (%) | 84.4 | 131 |
| 123 | Women having a mobile phone that they themselves use (%) | 60.0 | 131 |
| 124 | Women age 15-24 years who use hygienic methods of protection during their menstrual period26 (%) | 92.1 | 131 |
| 125 | Ever-married women age 18-49 years who have ever experienced spousal violence27 (%) | 36.9 | 131 |
| 126 | Ever-married women age 18-49 years who have experienced physical violence during any pregnancy (%) | 4.0 | 131 |
| 127 | Young women age 18-29 years who experienced sexual violence by age 18 (%) | 5.0 | 131 |
| 128 | Women age 15 years and above who use any kind of tobacco (%) | 5.6 | 131 |
| 129 | Men age 15 years and above who use any kind of tobacco (%) | 22.3 | 131 |
| 130 | Women age 15 years and above who consume alcohol (%) | 6.7 | 131 |
| 131 | Men age 15 years and above who consume alcohol (%) | 43.3 | 131 |

**NFHS-6** · 101 extracted indicator rows.

| Row | Indicator | NFHS-5 Total as printed in NFHS-6 | NFHS-6 Total | Reviewed change | PDF page |
| --- | --- | --- | --- | --- | --- |
| 1 | Population below age 5 years (%) | 7.5 | 7.1 | — | IIPS fact sheet |
| 2 | Population below age 15 years (%) | 22.5 | 21.3 | — | IIPS fact sheet |
| 3 | Population age 60 years and above (%) | 12.7 | 14.1 | — | IIPS fact sheet |
| 4 | Household electricity access | 99.6 | 98.6 | -1.0 | IIPS fact sheet |
| 5 | Population living in households with an improved drinking-water source 1 (%) | 98.7 | 98.2 | — | IIPS fact sheet |
| 6 | Households using iodized salt (%) | 95.8 | 98.7 | — | IIPS fact sheet |
| 7 | Households with any usual member covered under a health insurance/financing scheme (%) | 69.2 | 82.2 | — | IIPS fact sheet |
| 8 | Households with any usual member having a bank account/post office account (%) | 96.9 | 98.5 | — | IIPS fact sheet |
| 9 | Female population age 6+ ever attended school | 60.9 | 60.2 | -0.7 | IIPS fact sheet |
| 10 | Households with any usual female members owning a house and/or land (alone or jointly with | 22.3 | 31.1 | — | IIPS fact sheet |
| 11 | Children age 2-4 years who attended pre-school (%) | 69.0 | 66.4 | — | IIPS fact sheet |
| 12 | Women with 10 or more years of schooling | 45.5 | 51.1 | +5.6 | IIPS fact sheet |
| 13 | Men with 10 or more years of schooling | 61.2 | 65.0 | +3.8 | IIPS fact sheet |
| 14 | Women who have ever used the internet (%) | 26.5 | 64.8 | — | IIPS fact sheet |
| 15 | Men who have ever used the internet (%) | 50.0 | 87.3 | — | IIPS fact sheet |
| 16 | Women age 20–24 married before age 18 | 23.5 | 17.9 | -5.6 | IIPS fact sheet |
| 17 | Men age 25-29 years married before age 21 years (%) | 16.3 | 5.7 | — | IIPS fact sheet |
| 18 | Total fertility rate, children per woman | 1.8 | 1.9 | +0.1 | IIPS fact sheet |
| 19 | Women age 15-19 years who were already mothers or pregnant at the time of the survey (%) | 5.8 | 6.0 | — | IIPS fact sheet |
| 20 | Any method2 (%) | 68.1 | 68.8 | — | IIPS fact sheet |
| 21 | Any modern method2 (%) | 66.7 | 67.6 | — | IIPS fact sheet |
| 22 | Any traditional method (%) | 1.4 | 1.2 | — | IIPS fact sheet |
| 23 | Female sterilization (%) | 61.9 | 62.5 | — | IIPS fact sheet |
| 24 | Male sterilization (%) | 2.0 | 3.6 | — | IIPS fact sheet |
| 25 | Total unmet need for family planning | 6.4 | 7.0 | +0.6 | IIPS fact sheet |
| 26 | Unmet need for spacing 3 (%) | 2.8 | 3.8 | — | IIPS fact sheet |
| 27 | Unmet need for limiting3 (%) | 3.6 | 3.2 | — | IIPS fact sheet |
| 28 | First-trimester antenatal check-up | 88.5 | 89.6 | +1.1 | IIPS fact sheet |
| 29 | Mothers who had any antenatal care visits (%) | 99.1 | 99.2 | — | IIPS fact sheet |
| 30 | At least four antenatal care visits | 70.4 | 80.3 | +9.9 | IIPS fact sheet |
| 31 | Mothers whose last birth was protected against neonatal tetanus4 (%) | 89.6 | 94.3 | — | IIPS fact sheet |
| 32 | Mothers who consumed iron folic acid for 100 days or more when they were pregnant (%) | 57.9 | 81.0 | — | IIPS fact sheet |
| 33 | Mothers who consumed iron folic acid for 180 days or more when they were pregnant (%) | 34.4 | 55.7 | — | IIPS fact sheet |
| 34 | Registered pregnancies for which the mother received a Mother and Child Protection (MCP) | 96.7 | 98.6 | — | IIPS fact sheet |
| 35 | Institutional births | 97.0 | 98.8 | +1.8 | IIPS fact sheet |
| 36 | Institutional births in public facility (%) | 49.7 | 57.5 | — | IIPS fact sheet |
| 37 | Births attended by skilled health personnel | 93.6 | 97.7 | +4.1 | IIPS fact sheet |
| 38 | Caesarean births | 60.7 | 62.2 | +1.5 | IIPS fact sheet |
| 39 | Births in a private health facility that were delivered by caesarean section (%) | 81.5 | 83.9 | — | IIPS fact sheet |
| 40 | Births in a public health facility that were delivered by caesarean section (%) | 44.5 | 48.1 | — | IIPS fact sheet |
| 41 | Mothers who received postnatal care from a doctor/nurse/LHV/ANM/midwife/other health | 87.6 | 92.3 | — | IIPS fact sheet |
| 42 | Children born at home who were taken to a health facility for a check-up within 24 hours of | 15.6 | 29.8 | — | IIPS fact sheet |
| 43 | Children who received postnatal care from a doctor/nurse/LHV/ANM/midwife/ other health | 90.0 | 93.0 | — | IIPS fact sheet |
| 44 | Full vaccination, card or maternal recall | 79.1 | 80.9 | +1.8 | IIPS fact sheet |
| 45 | Full vaccination, card only | 87.4 | 87.9 | +0.5 | IIPS fact sheet |
| 46 | Children age 12-23 months who have received any vaccine (%) | 94.6 | 96.0 | — | IIPS fact sheet |
| 47 | BCG vaccination | 93.5 | 95.1 | +1.6 | IIPS fact sheet |
| 48 | Children age 12-23 months who have received 3 doses of polio vaccine 8 (%) | 81.6 | 83.3 | — | IIPS fact sheet |
| 49 | Children age 12-23 months who have received 3 doses of pentavalent vaccine (%) | 89.3 | 88.7 | — | IIPS fact sheet |
| 50 | Children age 12-23 months who have received the first dose of measles-containing | 90.6 | 92.9 | — | IIPS fact sheet |
| 51 | Children age 24-35 months who have received a second dose of measles-containing | 63.1 | 78.6 | — | IIPS fact sheet |
| 52 | Children age 12-23 months who have received birth dose of hepatitis B vaccine (%) | 73.9 | 88.9 | — | IIPS fact sheet |
| 53 | Children age 12-23 months who have received 3 doses of rotavirus vaccine (%) | 5.3 | 63.8 | — | IIPS fact sheet |
| 54 | Children age 9-35 months who received a vitamin A dose in the last 6 months (%) | 72.4 | 90.5 | — | IIPS fact sheet |
| 55 | Children age 12-23 months who received most of their vaccinations in a public health | 94.1 | 95.7 | — | IIPS fact sheet |
| 56 | Children age 12-23 months who received most of their vaccinations in a private health | 4.5 | 2.6 | — | IIPS fact sheet |
| 57 | Prevalence of diarrhoea in the 2 weeks preceding the survey (%) | 7.4 | 4.5 | — | IIPS fact sheet |
| 58 | Prevalence of severe diarrhoea in the 2 weeks preceding the survey (%) | 0.6 | 0.3 | — | IIPS fact sheet |
| 59 | Prevalence of symptoms of acute respiratory infection (ARI) in the 2 weeks preceding the | 2.2 | 0.4 | — | IIPS fact sheet |
| 60 | Children with fever or symptoms of ARI in the 2 weeks preceding the survey taken to a health | 74.8 | 65.5 | — | IIPS fact sheet |
| 61 | Children under age 3 years breastfed within one hour of birth9 (%) | 37.1 | 57.1 | — | IIPS fact sheet |
| 62 | Children under age 6 months exclusively breastfed 10 (%) | 68.2 | 64.8 | — | IIPS fact sheet |
| 63 | Children under age 6 months currently breastfeeding 10 (%) | 95.8 | 94.6 | — | IIPS fact sheet |
| 64 | Children under age 6 months exclusively breastfed or breastfeeding and consuming plain | 81.4 | 80.2 | — | IIPS fact sheet |
| 65 | Children age 6-8 months receiving solid or semi-solid food and breastmilk 10 (%) | 51.3 | 66.7 | — | IIPS fact sheet |
| 66 | Breastfeeding children age 6-23 months receiving an adequate diet 10, 11 (%) | 8.2 | 15.8 | — | IIPS fact sheet |
| 67 | Non-breastfeeding children age 6-23 months receiving an adequate diet 10, 11 (%) | 14.8 | 12.4 | — | IIPS fact sheet |
| 68 | Total children age 6-23 months receiving an adequate diet 10, 11 (%) | 9.0 | 15.3 | — | IIPS fact sheet |
| 69 | Child stunting | 33.1 | 27.0 | -6.1 | IIPS fact sheet |
| 70 | Child wasting | 21.7 | 16.9 | -4.8 | IIPS fact sheet |
| 71 | Severe child wasting | 8.5 | 3.9 | -4.6 | IIPS fact sheet |
| 72 | Child underweight | 31.8 | 27.8 | -4.0 | IIPS fact sheet |
| 73 | Child overweight | 3.4 | 1.2 | -2.2 | IIPS fact sheet |
| 74 | Women whose Body Mass Index (BMI) is below normal (BMI <18.5 kg/m 2)15 (%) | 18.8 | 17.7 | — | IIPS fact sheet |
| 75 | Men whose Body Mass Index (BMI) is below normal (BMI <18.5 kg/m 2) (%) | 16.3 | 14.9 | — | IIPS fact sheet |
| 76 | Women aged 15–49 overweight or obese (BMI ≥25), % | 30.1 | 36.3 | — | IIPS fact sheet |
| 77 | Men aged 15–49 overweight or obese (BMI ≥25), % | 32.4 | 35.5 | — | IIPS fact sheet |
| 78 | Blood sugar level - high (141-160 mg/dl)16 (%) | 5.8 | 7.9 | — | IIPS fact sheet |
| 79 | Blood sugar level - very high (>160 mg/dl)16 (%) | 7.0 | 10.0 | — | IIPS fact sheet |
| 80 | Blood sugar level - high or very high (>140 mg/dl) or taking medicine to control blood | 14.7 | 19.6 | — | IIPS fact sheet |
| 81 | Blood sugar level - high (141-160 mg/dl)16 (%) | 6.9 | 9.0 | — | IIPS fact sheet |
| 82 | Blood sugar level - very high (>160 mg/dl)16 (%) | 9.3 | 13.3 | — | IIPS fact sheet |
| 83 | Blood sugar level - high or very high (>140 mg/dl) or taking medicine to control blood | 18.1 | 24.5 | — | IIPS fact sheet |
| 84 | Mildly elevated blood pressure (Systolic 140-159 mm of Hg and/or | 13.6 | 9.6 | — | IIPS fact sheet |
| 85 | Women aged 15+ with moderately or severely elevated blood pressure, % | 6.3 | 5.4 | — | IIPS fact sheet |
| 86 | Women aged 15+ with elevated blood pressure or taking medicine for it, % | 26.1 | 24.2 | — | IIPS fact sheet |
| 87 | Mildly elevated blood pressure (Systolic 140-159 mm of Hg and/or | 18.5 | 12.9 | — | IIPS fact sheet |
| 88 | Men aged 15+ with moderately or severely elevated blood pressure, % | 8.1 | 3.5 | — | IIPS fact sheet |
| 89 | Men aged 15+ with elevated blood pressure or taking medicine for it, % | 31.4 | 28.2 | — | IIPS fact sheet |
| 90 | Currently married women who usually participate in three household decisions 17 (%) | 87.2 | 89.9 | — | IIPS fact sheet |
| 91 | Women who worked in the last 12 months and were paid in cash (%) | 45.1 | 53.2 | — | IIPS fact sheet |
| 92 | Women having a bank or savings account that they themselves use (%) | 84.4 | 92.3 | — | IIPS fact sheet |
| 93 | Women having a mobile phone that they themselves use (%) | 60.0 | 65.8 | — | IIPS fact sheet |
| 94 | Women age 15-24 years who use hygienic methods of protection during their menstrual | 93.4 | 95.3 | — | IIPS fact sheet |
| 95 | Ever-married women age 18-49 years who have ever experienced spousal violence 19 (%) | 37.2 | 30.8 | — | IIPS fact sheet |
| 96 | Ever-married women age 18-49 years who have experienced physical violence during any | 4.0 | 2.7 | — | IIPS fact sheet |
| 97 | Young women age 18-29 years who experienced sexual violence by age 18 (%) | 0.8 | 0.6 | — | IIPS fact sheet |
| 98 | Women age 15 years and above who use any kind of tobacco (%) | 5.6 | 5.9 | — | IIPS fact sheet |
| 99 | Men age 15 years and above who use any kind of tobacco (%) | 22.3 | 21.1 | — | IIPS fact sheet |
| 100 | Women age 15 years and above who consume alcohol (%) | 6.7 | 7.1 | — | IIPS fact sheet |
| 101 | Men age 15 years and above who consume alcohol (%) | 43.4 | 43.9 | — | IIPS fact sheet |

### Tripura

**NFHS-5** · NFHS5-I · 131 indicator rows.

| Row | Indicator | Total | PDF page |
| --- | --- | --- | --- |
| 1 | Female population age 6 years and above who ever attended school (%) | 81.8 | 136 |
| 2 | Population below age 15 years (%) | 23.7 | 136 |
| 3 | Sex ratio of the total population (females per 1,000 males) | 1,011 | 136 |
| 4 | Sex ratio at birth for children born in the last five years (females per 1,000 males) | 1,028 | 136 |
| 5 | Children under age 5 years whose birth was registered with the civil authority (%) | 93.8 | 136 |
| 6 | Deaths in the last 3 years registered with the civil authority (%) | 79.5 | 136 |
| 7 | Population living in households with electricity (%) | 98.2 | 136 |
| 8 | Population living in households with an improved drinking-water source1 (%) | 88.0 | 136 |
| 9 | Population living in households that use an improved sanitation facility2 (%) | 73.6 | 136 |
| 10 | Households using clean fuel for cooking3 (%) | 45.3 | 136 |
| 11 | Households using iodized salt (%) | 99.5 | 136 |
| 12 | Households with any usual member covered under a health insurance/financing scheme (%) | 33.0 | 136 |
| 13 | Children age 5 years who attended pre-primary school during the school year 2019-20 (%) | 24.2 | 136 |
| 14 | Women who are literate4 (%) | 80.6 | 136 |
| 15 | Men who are literate4 (%) | 88.2 | 136 |
| 16 | Women with 10 or more years of schooling (%) | 23.2 | 136 |
| 17 | Men with 10 or more years of schooling (%) | 29.4 | 136 |
| 18 | Women who have ever used the internet (%) | 22.9 | 136 |
| 19 | Men who have ever used the internet (%) | 45.7 | 136 |
| 20 | Women age 20-24 years married before age 18 years (%) | 40.1 | 136 |
| 21 | Men age 25-29 years married before age 21 years (%) | 20.4 | 136 |
| 22 | Total fertility rate (children per woman) | 1.7 | 136 |
| 23 | Women age 15-19 years who were already mothers or pregnant at the time of the survey (%) | 21.9 | 136 |
| 24 | Adolescent fertility rate for women age 15-19 years5 | 91 | 136 |
| 25 | Neonatal mortality rate (NNMR) | 22.9 | 136 |
| 26 | Infant mortality rate (IMR) | 37.6 | 136 |
| 27 | Under-five mortality rate (U5MR) | 43.3 | 136 |
| 28 | Any method6 (%) | 71.2 | 136 |
| 29 | Any modern method6 (%) | 49.1 | 136 |
| 30 | Female sterilization (%) | 10.5 | 136 |
| 31 | Male sterilization (%) | 0.0 | 136 |
| 32 | IUD/PPIUD (%) | 0.4 | 136 |
| 33 | Pill (%) | 32.8 | 136 |
| 34 | Condom (%) | 3.3 | 136 |
| 35 | Injectables (%) | 0.3 | 136 |
| 36 | Total unmet need7 (%) | 8.2 | 136 |
| 37 | Unmet need for spacing7 (%) | 2.5 | 136 |
| 38 | Health worker ever talked to female non-users about family planning (%) | 10.2 | 136 |
| 39 | Current users ever told about side effects of current method8 (%) | 41.9 | 136 |
| 40 | Mothers who had an antenatal check-up in the first trimester (%) | 63.2 | 137 |
| 41 | Mothers who had at least 4 antenatal care visits (%) | 52.7 | 137 |
| 42 | Mothers whose last birth was protected against neonatal tetanus9 (%) | 94.9 | 137 |
| 43 | Mothers who consumed iron folic acid for 100 days or more when they were pregnant (%) | 26.7 | 137 |
| 44 | Mothers who consumed iron folic acid for 180 days or more when they were pregnant (%) | 8.9 | 137 |
| 45 | Registered pregnancies for which the mother received a Mother and Child Protection (MCP) card (%) | 93.0 | 137 |
| 46 | Mothers who received postnatal care from a doctor/nurse/LHV/ANM/midwife/other health personnel within 2 days of delivery (%) | 71.9 | 137 |
| 47 | Average out-of-pocket expenditure per delivery in a public health facility (Rs.) | 6,640 | 137 |
| 48 | Children born at home who were taken to a health facility for a check-up within 24 hours of birth (%) | 3.6 | 137 |
| 49 | Children who received postnatal care from a doctor/nurse/LHV/ANM/midwife/other health personnel within 2 days of delivery (%) | 72.8 | 137 |
| 50 | Institutional births (%) | 89.2 | 137 |
| 51 | Institutional births in public facility (%) | 78.7 | 137 |
| 52 | Home births that were conducted by skilled health personnel10 (%) | 1.2 | 137 |
| 53 | Births attended by skilled health personnel10 (%) | 89.2 | 137 |
| 54 | Births delivered by caesarean section (%) | 25.1 | 137 |
| 55 | Births in a private health facility that were delivered by caesarean section (%) | 69.3 | 137 |
| 56 | Births in a public health facility that were delivered by caesarean section (%) | 22.7 | 137 |
| 57 | Children age 12-23 months fully vaccinated based on information from either vaccination card or mother's recall11 (%) | 69.5 | 137 |
| 58 | Children age 12-23 months fully vaccinated based on information from vaccination card only12 (%) | 77.1 | 137 |
| 59 | Children age 12-23 months who have received BCG (%) | 94.7 | 137 |
| 60 | Children age 12-23 months who have received 3 doses of polio vaccine13 (%) | 73.4 | 137 |
| 61 | Children age 12-23 months who have received 3 doses of penta or DPT vaccine (%) | 85.9 | 137 |
| 62 | Children age 12-23 months who have received the first dose of measles-containing vaccine (MCV) (%) | 86.3 | 137 |
| 63 | Children age 24-35 months who have received a second dose of measles-containing vaccine (MCV) (%) | 21.9 | 137 |
| 64 | Children age 12-23 months who have received 3 doses of rotavirus vaccine14 (%) | 59.6 | 137 |
| 65 | Children age 12-23 months who have received 3 doses of penta or hepatitis B vaccine (%) | 82.5 | 137 |
| 66 | Children age 9-59 months who received a vitamin A dose in the last 6 months (%) | 69.7 | 137 |
| 67 | Children age 12-23 months who received most of their vaccinations in a public health facility (%) | 97.3 | 137 |
| 68 | Children age 12-23 months who received most of their vaccinations in a private health facility (%) | 1.4 | 137 |
| 69 | Prevalence of diarrhoea in the 2 weeks preceding the survey (%) | 6.2 | 137 |
| 70 | Children with diarrhoea in the 2 weeks preceding the survey who received oral rehydration salts (ORS) (%) | 67.2 | 137 |
| 71 | Children with diarrhoea in the 2 weeks preceding the survey who received zinc (%) | 16.7 | 137 |
| 72 | Children with diarrhoea in the 2 weeks preceding the survey taken to a health facility or health provider (%) | 63.1 | 137 |
| 73 | Prevalence of symptoms of acute respiratory infection (ARI) in the 2 weeks preceding the survey (%) | 1.3 | 137 |
| 74 | Children with fever or symptoms of ARI in the 2 weeks preceding the survey taken to a health facility or health provider (%) | 64.2 | 137 |
| 75 | Children under age 3 years breastfed within one hour of birth15 (%) | 36.4 | 138 |
| 76 | Children under age 6 months exclusively breastfed16 (%) | 62.1 | 138 |
| 77 | Children age 6-8 months receiving solid or semi-solid food and breastmilk16 (%) | 53.1 | 138 |
| 78 | Breastfeeding children age 6-23 months receiving an adequate diet16, 17 (%) | 13.3 | 138 |
| 79 | Non-breastfeeding children age 6-23 months receiving an adequate diet16, 17 (%) | (16.3) | 138 |
| 80 | Total children age 6-23 months receiving an adequate diet16, 17 (%) | 13.5 | 138 |
| 81 | Children under 5 years who are stunted (height-for-age)18 (%) | 32.3 | 138 |
| 82 | Children under 5 years who are wasted (weight-for-height)18 (%) | 18.2 | 138 |
| 83 | Children under 5 years who are severely wasted (weight-for-height)19 (%) | 7.3 | 138 |
| 84 | Children under 5 years who are underweight (weight-for-age)18 (%) | 25.6 | 138 |
| 85 | Children under 5 years who are overweight (weight-for-height)20 (%) | 8.2 | 138 |
| 86 | Women whose Body Mass Index (BMI) is below normal (BMI <18.5 kg/m2)21 (%) | 16.2 | 138 |
| 87 | Men whose Body Mass Index (BMI) is below normal (BMI <18.5 kg/m2) (%) | 12.4 | 138 |
| 88 | Women who are overweight or obese (BMI ≥25.0 kg/m2)21 (%) | 21.5 | 138 |
| 89 | Men who are overweight or obese (BMI ≥25.0 kg/m2) (%) | 23.4 | 138 |
| 90 | Women who have high risk waist-to-hip ratio (≥0.85) (%) | 62.5 | 138 |
| 91 | Men who have high risk waist-to-hip ratio (≥0.90) (%) | 42.0 | 138 |
| 92 | Children age 6-59 months who are anaemic (<11.0 g/dl)22 (%) | 64.3 | 138 |
| 93 | Non-pregnant women age 15-49 years who are anaemic (<12.0 g/dl)22 (%) | 67.4 | 138 |
| 94 | Pregnant women age 15-49 years who are anaemic (<11.0 g/dl)22 (%) | 61.5 | 138 |
| 95 | All women age 15-49 years who are anaemic22 (%) | 67.2 | 138 |
| 96 | All women age 15-19 years who are anaemic22 (%) | 67.9 | 138 |
| 97 | Men age 15-49 years who are anaemic (<13.0 g/dl)22 (%) | 36.9 | 138 |
| 98 | Men age 15-19 years who are anaemic (<13.0 g/dl)22 (%) | 27.2 | 138 |
| 99 | Blood sugar level - high (141-160 mg/dl)23 (%) | 8.8 | 138 |
| 100 | Blood sugar level - very high (>160 mg/dl)23 (%) | 8.0 | 138 |
| 101 | Blood sugar level - high or very high (>140 mg/dl) or taking medicine to control blood sugar level23 (%) | 17.7 | 138 |
| 102 | Blood sugar level - high (141-160 mg/dl)23 (%) | 9.3 | 138 |
| 103 | Blood sugar level - very high (>160 mg/dl)23 (%) | 8.9 | 138 |
| 104 | Blood sugar level - high or very high (>140 mg/dl) or taking medicine to control blood sugar level23 (%) | 19.3 | 138 |
| 105 | Mildly elevated blood pressure (Systolic 140-159 mm of Hg and/or Diastolic 90-99 mm of Hg) (%) | 11.0 | 138 |
| 106 | Moderately or severely elevated blood pressure (Systolic ≥160 mm of Hg and/or Diastolic ≥100 mm of Hg) (%) | 5.0 | 138 |
| 107 | Elevated blood pressure (Systolic ≥140 mm of Hg and/or Diastolic ≥90 mm of Hg) or taking medicine to control blood pressure (%) | 20.9 | 138 |
| 108 | Mildly elevated blood pressure (Systolic 140-159 mm of Hg and/or Diastolic 90-99 mm of Hg) (%) | 13.4 | 138 |
| 109 | Moderately or severely elevated blood pressure (Systolic ≥160 mm of Hg and/or Diastolic ≥100 mm of Hg) (%) | 5.2 | 138 |
| 110 | Elevated blood pressure (Systolic ≥140 mm of Hg and/or Diastolic ≥90 mm of Hg) or taking medicine to control blood pressure (%) | 22.7 | 138 |
| 111 | Ever undergone a screening test for cervical cancer (%) | 0.7 | 139 |
| 112 | Ever undergone a breast examination for breast cancer (%) | 0.4 | 139 |
| 113 | Ever undergone an oral cavity examination for oral cancer (%) | 0.6 | 139 |
| 114 | Ever undergone an oral cavity examination for oral cancer (%) | 0.2 | 139 |
| 115 | Women who have comprehensive knowledge24 of HIV/AIDS (%) | 15.4 | 139 |
| 116 | Men who have comprehensive knowledge24 of HIV/AIDS (%) | 30.0 | 139 |
| 117 | Women who know that consistent condom use can reduce the chance of getting HIV/AIDS (%) | 59.5 | 139 |
| 118 | Men who know that consistent condom use can reduce the chance of getting HIV/AIDS (%) | 85.3 | 139 |
| 119 | Currently married women who usually participate in three household decisions25 (%) | 90.9 | 139 |
| 120 | Women who worked in the last 12 months and were paid in cash (%) | 23.1 | 139 |
| 121 | Women owning a house and/or land (alone or jointly with others) (%) | 17.2 | 139 |
| 122 | Women having a bank or savings account that they themselves use (%) | 76.9 | 139 |
| 123 | Women having a mobile phone that they themselves use (%) | 53.1 | 139 |
| 124 | Women age 15-24 years who use hygienic methods of protection during their menstrual period26 (%) | 68.8 | 139 |
| 125 | Ever-married women age 18-49 years who have ever experienced spousal violence27 (%) | 20.7 | 139 |
| 126 | Ever-married women age 18-49 years who have experienced physical violence during any pregnancy (%) | 2.1 | 139 |
| 127 | Young women age 18-29 years who experienced sexual violence by age 18 (%) | 7.0 | 139 |
| 128 | Women age 15 years and above who use any kind of tobacco (%) | 50.4 | 139 |
| 129 | Men age 15 years and above who use any kind of tobacco (%) | 56.9 | 139 |
| 130 | Women age 15 years and above who consume alcohol (%) | 6.2 | 139 |
| 131 | Men age 15 years and above who consume alcohol (%) | 33.1 | 139 |

**NFHS-6** · 101 extracted indicator rows.

| Row | Indicator | NFHS-5 Total as printed in NFHS-6 | NFHS-6 Total | Reviewed change | PDF page |
| --- | --- | --- | --- | --- | --- |
| 1 | Population below age 5 years (%) | 7.3 | 6.8 | — | IIPS fact sheet |
| 2 | Population below age 15 years (%) | 23.7 | 21.6 | — | IIPS fact sheet |
| 3 | Population age 60 years and above (%) | 11.2 | 14.1 | — | IIPS fact sheet |
| 4 | Household electricity access | 98.2 | 98.5 | +0.3 | IIPS fact sheet |
| 5 | Population living in households with an improved drinking-water source 1 (%) | 88.0 | 92.3 | — | IIPS fact sheet |
| 6 | Households using iodized salt (%) | 99.5 | 98.6 | — | IIPS fact sheet |
| 7 | Households with any usual member covered under a health insurance/financing scheme (%) | 36.4 | 56.5 | — | IIPS fact sheet |
| 8 | Households with any usual member having a bank account/post office account (%) | 96.6 | 99.0 | — | IIPS fact sheet |
| 9 | Female population age 6+ ever attended school | 81.8 | 83.6 | +1.8 | IIPS fact sheet |
| 10 | Households with any usual female members owning a house and/or land (alone or jointly with | 9.8 | 17.7 | — | IIPS fact sheet |
| 11 | Children age 2-4 years who attended pre-school (%) | 55.4 | 66.2 | — | IIPS fact sheet |
| 12 | Women with 10 or more years of schooling | 23.2 | 32.9 | +9.7 | IIPS fact sheet |
| 13 | Men with 10 or more years of schooling | 29.4 | 37.9 | +8.5 | IIPS fact sheet |
| 14 | Women who have ever used the internet (%) | 22.9 | 48.8 | — | IIPS fact sheet |
| 15 | Men who have ever used the internet (%) | 41.7 | 71.9 | — | IIPS fact sheet |
| 16 | Women age 20–24 married before age 18 | 40.1 | 34.0 | -6.1 | IIPS fact sheet |
| 17 | Men age 25-29 years married before age 21 years (%) | 20.4 | 16.5 | — | IIPS fact sheet |
| 18 | Total fertility rate, children per woman | 1.7 | 1.7 | +0.0 | IIPS fact sheet |
| 19 | Women age 15-19 years who were already mothers or pregnant at the time of the survey (%) | 21.9 | 18.0 | — | IIPS fact sheet |
| 20 | Any method2 (%) | 71.2 | 71.0 | — | IIPS fact sheet |
| 21 | Any modern method2 (%) | 49.1 | 40.0 | — | IIPS fact sheet |
| 22 | Any traditional method (%) | 22.1 | 31.0 | — | IIPS fact sheet |
| 23 | Female sterilization (%) | 10.5 | 11.6 | — | IIPS fact sheet |
| 24 | Male sterilization (%) | 0.0 | 0.1 | — | IIPS fact sheet |
| 25 | Total unmet need for family planning | 8.2 | 8.5 | +0.3 | IIPS fact sheet |
| 26 | Unmet need for spacing 3 (%) | 2.5 | 3.5 | — | IIPS fact sheet |
| 27 | Unmet need for limiting3 (%) | 5.7 | 5.0 | — | IIPS fact sheet |
| 28 | First-trimester antenatal check-up | 63.2 | 67.6 | +4.4 | IIPS fact sheet |
| 29 | Mothers who had any antenatal care visits (%) | 82.7 | 90.1 | — | IIPS fact sheet |
| 30 | At least four antenatal care visits | 55.2 | 49.6 | — | IIPS fact sheet |
| 31 | Mothers whose last birth was protected against neonatal tetanus4 (%) | 94.9 | 95.0 | — | IIPS fact sheet |
| 32 | Mothers who consumed iron folic acid for 100 days or more when they were pregnant (%) | 26.6 | 43.4 | — | IIPS fact sheet |
| 33 | Mothers who consumed iron folic acid for 180 days or more when they were pregnant (%) | 8.9 | 24.3 | — | IIPS fact sheet |
| 34 | Registered pregnancies for which the mother received a Mother and Child Protection (MCP) | 93.0 | 96.1 | — | IIPS fact sheet |
| 35 | Institutional births | 89.2 | 89.1 | -0.1 | IIPS fact sheet |
| 36 | Institutional births in public facility (%) | 78.7 | 74.6 | — | IIPS fact sheet |
| 37 | Births attended by skilled health personnel | 89.2 | 91.2 | +2.0 | IIPS fact sheet |
| 38 | Caesarean births | 25.1 | 30.1 | +5.0 | IIPS fact sheet |
| 39 | Births in a private health facility that were delivered by caesarean section (%) | 69.3 | 78.3 | — | IIPS fact sheet |
| 40 | Births in a public health facility that were delivered by caesarean section (%) | 22.7 | 25.1 | — | IIPS fact sheet |
| 41 | Mothers who received postnatal care from a doctor/nurse/LHV/ANM/midwife/other health | 71.9 | 68.1 | — | IIPS fact sheet |
| 42 | Children born at home who were taken to a health facility for a check-up within 24 hours of | 3.6 | 4.6 | — | IIPS fact sheet |
| 43 | Children who received postnatal care from a doctor/nurse/LHV/ANM/midwife/ other health | 72.8 | 72.5 | — | IIPS fact sheet |
| 44 | Full vaccination, card or maternal recall | 69.5 | 74.4 | +4.9 | IIPS fact sheet |
| 45 | Full vaccination, card only | 77.1 | 87.8 | +10.7 | IIPS fact sheet |
| 46 | Children age 12-23 months who have received any vaccine (%) | 98.1 | 89.3 | — | IIPS fact sheet |
| 47 | BCG vaccination | 94.7 | 87.0 | -7.7 | IIPS fact sheet |
| 48 | Children age 12-23 months who have received 3 doses of polio vaccine 8 (%) | 73.4 | 78.2 | — | IIPS fact sheet |
| 49 | Children age 12-23 months who have received 3 doses of pentavalent vaccine (%) | 85.9 | 80.0 | — | IIPS fact sheet |
| 50 | Children age 12-23 months who have received the first dose of measles-containing | 86.3 | 82.7 | — | IIPS fact sheet |
| 51 | Children age 24-35 months who have received a second dose of measles-containing | 49.5 | 62.0 | — | IIPS fact sheet |
| 52 | Children age 12-23 months who have received birth dose of hepatitis B vaccine (%) | 61.2 | 75.0 | — | IIPS fact sheet |
| 53 | Children age 12-23 months who have received 3 doses of rotavirus vaccine (%) | 59.6 | 79.9 | — | IIPS fact sheet |
| 54 | Children age 9-35 months who received a vitamin A dose in the last 6 months (%) | 70.4 | 78.0 | — | IIPS fact sheet |
| 55 | Children age 12-23 months who received most of their vaccinations in a public health | 97.3 | 98.6 | — | IIPS fact sheet |
| 56 | Children age 12-23 months who received most of their vaccinations in a private health | 1.4 | 1.2 | — | IIPS fact sheet |
| 57 | Prevalence of diarrhoea in the 2 weeks preceding the survey (%) | 6.2 | 4.0 | — | IIPS fact sheet |
| 58 | Prevalence of severe diarrhoea in the 2 weeks preceding the survey (%) | 0.4 | 0.4 | — | IIPS fact sheet |
| 59 | Prevalence of symptoms of acute respiratory infection (ARI) in the 2 weeks preceding the | 1.3 | 1.3 | — | IIPS fact sheet |
| 60 | Children with fever or symptoms of ARI in the 2 weeks preceding the survey taken to a health | 64.2 | 62.9 | — | IIPS fact sheet |
| 61 | Children under age 3 years breastfed within one hour of birth9 (%) | 36.4 | 59.9 | — | IIPS fact sheet |
| 62 | Children under age 6 months exclusively breastfed 10 (%) | 62.1 | 53.4 | — | IIPS fact sheet |
| 63 | Children under age 6 months currently breastfeeding 10 (%) | 96.9 | 93.3 | — | IIPS fact sheet |
| 64 | Children under age 6 months exclusively breastfed or breastfeeding and consuming plain | 84.6 | 82.3 | — | IIPS fact sheet |
| 65 | Children age 6-8 months receiving solid or semi-solid food and breastmilk 10 (%) | 53.1 | 50.8 | — | IIPS fact sheet |
| 66 | Breastfeeding children age 6-23 months receiving an adequate diet 10, 11 (%) | 12.8 | 15.7 | — | IIPS fact sheet |
| 67 | Non-breastfeeding children age 6-23 months receiving an adequate diet 10, 11 (%) | (16.3) | (20.0) | — | IIPS fact sheet |
| 68 | Total children age 6-23 months receiving an adequate diet 10, 11 (%) | 13.0 | 15.9 | — | IIPS fact sheet |
| 69 | Child stunting | 32.3 | 21.9 | -10.4 | IIPS fact sheet |
| 70 | Child wasting | 18.2 | 18.4 | +0.2 | IIPS fact sheet |
| 71 | Severe child wasting | 7.3 | 5.0 | -2.3 | IIPS fact sheet |
| 72 | Child underweight | 25.6 | 25.7 | +0.1 | IIPS fact sheet |
| 73 | Child overweight | 8.2 | 2.8 | -5.4 | IIPS fact sheet |
| 74 | Women whose Body Mass Index (BMI) is below normal (BMI <18.5 kg/m 2)15 (%) | 16.2 | 17.9 | — | IIPS fact sheet |
| 75 | Men whose Body Mass Index (BMI) is below normal (BMI <18.5 kg/m 2) (%) | 12.4 | 18.5 | — | IIPS fact sheet |
| 76 | Women aged 15–49 overweight or obese (BMI ≥25), % | 21.6 | 26.2 | — | IIPS fact sheet |
| 77 | Men aged 15–49 overweight or obese (BMI ≥25), % | 23.5 | 23.0 | — | IIPS fact sheet |
| 78 | Blood sugar level - high (141-160 mg/dl)16 (%) | 8.8 | 8.6 | — | IIPS fact sheet |
| 79 | Blood sugar level - very high (>160 mg/dl)16 (%) | 8.0 | 10.2 | — | IIPS fact sheet |
| 80 | Blood sugar level - high or very high (>140 mg/dl) or taking medicine to control blood | 17.7 | 19.6 | — | IIPS fact sheet |
| 81 | Blood sugar level - high (141-160 mg/dl)16 (%) | 9.3 | 10.7 | — | IIPS fact sheet |
| 82 | Blood sugar level - very high (>160 mg/dl)16 (%) | 8.9 | 13.4 | — | IIPS fact sheet |
| 83 | Blood sugar level - high or very high (>140 mg/dl) or taking medicine to control blood | 19.3 | 25.1 | — | IIPS fact sheet |
| 84 | Mildly elevated blood pressure (Systolic 140-159 mm of Hg and/or | 11.0 | 9.1 | — | IIPS fact sheet |
| 85 | Women aged 15+ with moderately or severely elevated blood pressure, % | 5.0 | 4.4 | — | IIPS fact sheet |
| 86 | Women aged 15+ with elevated blood pressure or taking medicine for it, % | 20.8 | 20.0 | — | IIPS fact sheet |
| 87 | Mildly elevated blood pressure (Systolic 140-159 mm of Hg and/or | 13.4 | 13.0 | — | IIPS fact sheet |
| 88 | Men aged 15+ with moderately or severely elevated blood pressure, % | 5.2 | 3.3 | — | IIPS fact sheet |
| 89 | Men aged 15+ with elevated blood pressure or taking medicine for it, % | 22.7 | 24.5 | — | IIPS fact sheet |
| 90 | Currently married women who usually participate in three household decisions 17 (%) | 90.9 | 96.3 | — | IIPS fact sheet |
| 91 | Women who worked in the last 12 months and were paid in cash (%) | 23.1 | 24.5 | — | IIPS fact sheet |
| 92 | Women having a bank or savings account that they themselves use (%) | 76.9 | 91.6 | — | IIPS fact sheet |
| 93 | Women having a mobile phone that they themselves use (%) | 53.1 | 65.5 | — | IIPS fact sheet |
| 94 | Women age 15-24 years who use hygienic methods of protection during their menstrual | 69.1 | 83.0 | — | IIPS fact sheet |
| 95 | Ever-married women age 18-49 years who have ever experienced spousal violence 19 (%) | 20.7 | 19.1 | — | IIPS fact sheet |
| 96 | Ever-married women age 18-49 years who have experienced physical violence during any | 2.1 | 2.4 | — | IIPS fact sheet |
| 97 | Young women age 18-29 years who experienced sexual violence by age 18 (%) | 1.1 | 0.0 | — | IIPS fact sheet |
| 98 | Women age 15 years and above who use any kind of tobacco (%) | 50.5 | 47.7 | — | IIPS fact sheet |
| 99 | Men age 15 years and above who use any kind of tobacco (%) | 57.2 | 52.1 | — | IIPS fact sheet |
| 100 | Women age 15 years and above who consume alcohol (%) | 6.3 | 6.0 | — | IIPS fact sheet |
| 101 | Men age 15 years and above who consume alcohol (%) | 33.2 | 29.5 | — | IIPS fact sheet |

### Uttar Pradesh

**NFHS-5** · NFHS5-II · 131 indicator rows.

| Row | Indicator | Total | PDF page |
| --- | --- | --- | --- |
| 1 | Female population age 6 years and above who ever attended school (%) | 67.4 | 67 |
| 2 | Population below age 15 years (%) | 31.0 | 67 |
| 3 | Sex ratio of the total population (females per 1,000 males) | 1,017 | 67 |
| 4 | Sex ratio at birth for children born in the last five years (females per 1,000 males) | 941 | 67 |
| 5 | Children under age 5 years whose birth was registered with the civil authority (%) | 79.5 | 67 |
| 6 | Deaths in the last 3 years registered with the civil authority (%) | 47.3 | 67 |
| 7 | Population living in households with electricity (%) | 91.0 | 67 |
| 8 | Population living in households with an improved drinking -water source1 (%) | 99.2 | 67 |
| 9 | Population living in households that use an improved sanitation facility2 (%) | 68.8 | 67 |
| 10 | Households using clean fuel for cooking3 (%) | 49.5 | 67 |
| 11 | Households using iodized salt (%) | 92.3 | 67 |
| 12 | Households with any usual member covered under a health insurance/financing scheme (%) | 15.9 | 67 |
| 13 | Children age 5 years who attended pre-primary school during the school year 2019-20 (%) | 9.3 | 67 |
| 14 | Women who are literate4 (%) | 66.1 | 67 |
| 15 | Men who are literate4 (%) | 82.0 | 67 |
| 16 | Women with 10 or more years of schooling (%) | 39.3 | 67 |
| 17 | Men with 10 or more years of schooling (%) | 48.6 | 67 |
| 18 | Women who have ever used the internet (%) | 30.6 | 67 |
| 19 | Men who have ever used the internet (%) | 59.1 | 67 |
| 20 | Women age 20-24 years married before age 18 years (%) | 15.8 | 67 |
| 21 | Men age 25-29 years married before age 21 years (%) | 23.0 | 67 |
| 22 | Total fertility rate (children per woman) | 2.4 | 67 |
| 23 | Women age 15-19 years who were already mothers or pregnant at the time of the survey (%) | 2.9 | 67 |
| 24 | Adolescent fertility rate for women age 15 -19 years5 | 22 | 67 |
| 25 | Neonatal mortality rate (NNMR) | 35.7 | 67 |
| 26 | Infant mortality rate (IMR) | 50.4 | 67 |
| 27 | Under-five mortality rate (U5MR) | 59.8 | 67 |
| 28 | Any method6 (%) | 62.4 | 67 |
| 29 | Any modern method6 (%) | 44.5 | 67 |
| 30 | Female sterilization (%) | 16.9 | 67 |
| 31 | Male sterilization (%) | 0.1 | 67 |
| 32 | IUD/PPIUD (%) | 1.5 | 67 |
| 33 | Pill (%) | 4.4 | 67 |
| 34 | Condom (%) | 19.1 | 67 |
| 35 | Injectables (%) | 1.2 | 67 |
| 36 | Total unmet need7 (%) | 12.9 | 67 |
| 37 | Unmet need for spacing7 (%) | 4.8 | 67 |
| 38 | Health worker ever talked to female non-users about family planning (%) | 25.1 | 67 |
| 39 | Current users ever told about side effects of current method 8 (%) | 70.6 | 67 |
| 40 | Mothers who had an antenatal check-up in the first trimester (%) | 62.5 | 68 |
| 41 | Mothers who had at least 4 antenatal care visits (%) | 42.4 | 68 |
| 42 | Mothers whose last birth was protected against neonatal tetanus9 (%) | 92.1 | 68 |
| 43 | Mothers who consumed iron folic acid for 100 days or more when they were pregnant (%) | 22.3 | 68 |
| 44 | Mothers who consumed iron folic acid for 180 days or more when they were pregnant (%) | 9.7 | 68 |
| 45 | Registered pregnancies for which the mother received a Mother and Child Protection (MCP) | 95.7 | 68 |
| 46 | Mothers who received postnatal care from a doctor/nurse/LHV/ANM/midwife/other health | 72.0 | 68 |
| 47 | Average out-of-pocket expenditure per delivery in a public health facility (Rs.) | 2,300 | 68 |
| 48 | Children born at home who were taken to a health facility for a check-up within 24 hours of | 2.4 | 68 |
| 49 | Children who received postnatal care from a doctor/nurse/LHV/ANM/midwife/other health | 70.2 | 68 |
| 50 | Institutional births (%) | 83.4 | 68 |
| 51 | Institutional births in public facility (%) | 57.7 | 68 |
| 52 | Home births that were conducted by skilled health personnel 10 (%) | 4.7 | 68 |
| 53 | Births attended by skilled health personnel10 (%) | 84.8 | 68 |
| 54 | Births delivered by caesarean section (%) | 13.7 | 68 |
| 55 | Births in a private health facility that were delivered by caesarean section (%) | 39.4 | 68 |
| 56 | Births in a public health facility that were delivered by caesarean section (%) | 6.2 | 68 |
| 57 | Children age 12-23 months fully vaccinated based on information from either vaccination card | 69.6 | 68 |
| 58 | Children age 12-23 months fully vaccinated based on information from vaccination card | 78.4 | 68 |
| 59 | Children age 12-23 months who have received BCG (%) | 93.2 | 68 |
| 60 | Children age 12-23 months who have received 3 doses of polio vaccine 13 (%) | 74.3 | 68 |
| 61 | Children age 12-23 months who have received 3 doses of penta or DPT vaccine (%) | 80.8 | 68 |
| 62 | Children age 12-23 months who have received the first dose of measles-containing | 83.3 | 68 |
| 63 | Children age 24-35 months who have received a second dose of measles-containing | 30.2 | 68 |
| 64 | Children age 12-23 months who have received 3 doses of rotavirus vaccine 14 (%) | 49.1 | 68 |
| 65 | Children age 12-23 months who have received 3 doses of penta or hepatitis B vaccine (%) | 78.3 | 68 |
| 66 | Children age 9-35 months who received a vitamin A dose in the last 6 months (%) | 73.9 | 68 |
| 67 | Children age 12-23 months who received most of their vaccinations in a public health | 94.4 | 68 |
| 68 | Children age 12-23 months who received most of their vaccinations in a private health | 2.2 | 68 |
| 69 | Prevalence of diarrhoea in the 2 weeks preceding the survey (%) | 5.6 | 68 |
| 70 | Children with diarrhoea in the 2 weeks preceding the survey who received oral rehydration | 50.7 | 68 |
| 71 | Children with diarrhoea in the 2 weeks preceding the survey who received zinc (%) | 28.5 | 68 |
| 72 | Children with diarrhoea in the 2 weeks preceding the survey taken to a health facility or health | 69.9 | 68 |
| 73 | Prevalence of symptoms of acute respiratory infection (ARI) in the 2 weeks preceding the | 3.5 | 68 |
| 74 | Children with fever or symptoms of ARI in the 2 weeks preceding the survey taken to a health | 63.0 | 68 |
| 75 | Children under age 3 years breastfed within one hour of birth15 (%) | 23.9 | 69 |
| 76 | Children under age 6 months exclusively breastfed16 (%) | 59.7 | 69 |
| 77 | Children age 6-8 months receiving solid or semi-solid food and breastmilk16 (%) | 31.0 | 69 |
| 78 | Breastfeeding children age 6 -23 months receiving an adequate diet 16, 17 (%) | 5.9 | 69 |
| 79 | Non-breastfeeding children age 6 -23 months receiving an adequate diet 16, 17 (%) | 7.0 | 69 |
| 80 | Total children age 6 -23 months receiving an adequate diet 16, 17 (%) | 6.1 | 69 |
| 81 | Children under 5 years who are stunted (height-for-age)18 (%) | 39.7 | 69 |
| 82 | Children under 5 years who are wasted (weight-for-height)18 (%) | 17.3 | 69 |
| 83 | Children under 5 years who are severely wasted (weight-for-height)19 (%) | 7.3 | 69 |
| 84 | Children under 5 years who are underweight (weight-for-age)18 (%) | 32.1 | 69 |
| 85 | Children under 5 years who are overweight (weight-for-height)20 (%) | 3.1 | 69 |
| 86 | Women whose Body Mass Index (BMI) is below normal (BMI <18.5 kg/m 2)21 (%) | 19.0 | 69 |
| 87 | Men whose Body Mass Index (BMI) is below normal (BMI <18.5 kg/m2) (%) | 17.9 | 69 |
| 88 | Women who are overweight or obese (BMI ≥25.0 kg/m2)21 (%) | 21.3 | 69 |
| 89 | Men who are overweight or obese (BMI ≥25.0 kg/m 2) (%) | 18.5 | 69 |
| 90 | Women who have high risk waist -to-hip ratio (≥0.85) (%) | 56.8 | 69 |
| 91 | Men who have high risk waist -to-hip ratio (≥0.90) (%) | 52.1 | 69 |
| 92 | Children age 6-59 months who are anaemic (<11.0 g/dl) 22 (%) | 66.4 | 69 |
| 93 | Non-pregnant women age 15-49 years who are anaemic (<12.0 g/dl)22 (%) | 50.6 | 69 |
| 94 | Pregnant women age 15-49 years who are anaemic (<11.0 g/dl)22 (%) | 45.9 | 69 |
| 95 | All women age 15 -49 years who are anaemic 22 (%) | 50.4 | 69 |
| 96 | All women age 15-19 years who are anaemic22 (%) | 52.9 | 69 |
| 97 | Men age 15-49 years who are anaemic (<13.0 g/dl)22 (%) | 21.5 | 69 |
| 98 | Men age 15 -19 years who are anaemic (<13.0 g/dl) 22 (%) | 28.2 | 69 |
| 99 | Blood sugar level - high (141-160 mg/dl)23 (%) | 4.7 | 69 |
| 100 | Blood sugar level - very high (>160 mg/dl) 23 (%) | 4.5 | 69 |
| 101 | Blood sugar level - high or very high (>140 mg/dl) or taking medicine to control blood sugar level23 (%) | 10.0 | 69 |
| 102 | Blood sugar level - high (141-160 mg/dl)23 (%) | 5.8 | 69 |
| 103 | Blood sugar level - very high (>160 mg/dl) 23 (%) | 5.0 | 69 |
| 104 | Blood sugar level - high or very high (>140 mg/dl) or taking medicine to control blood sugar level23 (%) | 11.6 | 69 |
| 105 | Mildly elevated blood pressure (Systolic 140 -159 mm of Hg and/or Diastolic 90-99 mm of Hg) (%) | 11.5 | 69 |
| 106 | Moderately or severely elevated blood pressure (Systolic ≥160 mm of Hg and/or Diastolic ≥100 mm of Hg) (%) | 4.9 | 69 |
| 107 | Elevated blood pressure (Systolic ≥140 mm of Hg and/or Diastolic ≥90 mm of Hg) or taking medicine to control blood pressure (%) | 18.4 | 69 |
| 108 | Mildly elevated blood pressure (Systolic 140 -159 mm of Hg and/or Diastolic 90-99 mm of Hg) (%) | 15.2 | 69 |
| 109 | Moderately or severely ele vated blood pressure (Systolic ≥160 mm of Hg and/or Diastolic ≥100 mm of Hg) (%) | 5.2 | 69 |
| 110 | Elevated blood pressure (Systolic ≥140 mm of Hg and/or Diastolic ≥90 mm of Hg) or taking medicine to control blood pressure (%) | 21.7 | 69 |
| 111 | Ever undergone a screening test for cervical cancer (%) | 1.5 | 70 |
| 112 | Ever undergone a breast examination for breast cancer (%) | 0.4 | 70 |
| 113 | Ever undergone an oral cavity examination for oral cancer (%) | 0.6 | 70 |
| 114 | Ever undergone an oral cavity examination for oral cancer (%) | 1.1 | 70 |
| 115 | Women who have comprehensive knowledge 24 of HIV/AIDS (%) | 13.1 | 70 |
| 116 | Men who have comprehensive knowledge 24 of HIV/AIDS (%) | 22.1 | 70 |
| 117 | Women who know that consistent condom use can reduce the chance of getting HIV/AIDS (%) | 64.6 | 70 |
| 118 | Men who know that consistent condom use can reduce the chance of getting HIV/AIDS (%) | 78.2 | 70 |
| 119 | Currently married women who usually participate in three household decisions 25 (%) | 87.6 | 70 |
| 120 | Women who worked in the last 12 months and were paid in cash (%) | 15.5 | 70 |
| 121 | Women owning a house and/or land (alone or jointly with others) (%) | 51.9 | 70 |
| 122 | Women having a bank or savings account that they themselves use (%) | 75.4 | 70 |
| 123 | Women having a mobile phone that they themselves use (%) | 46.5 | 70 |
| 124 | Women age 15-24 years who use hygienic methods of protection during their menstrual period26 (%) | 72.6 | 70 |
| 125 | Ever-married women age 18-49 years who have ever experienced spousal violence 27 (%) | 34.8 | 70 |
| 126 | Ever-married women age 18-49 years who have experienced physical violence during any pregnancy (%) | 3.7 | 70 |
| 127 | Young women age 18 -29 years who experienced sexual violence by age 18 (%) | 0.7 | 70 |
| 128 | Women age 15 years and above who use any kind of tobacco (%) | 8.4 | 70 |
| 129 | Men age 15 years and above who use any kind of tobacco (%) | 44.1 | 70 |
| 130 | Women age 15 years and above who consume alcohol (%) | 0.3 | 70 |
| 131 | Men age 15 years and above who consume alcohol (%) | 14.6 | 70 |

**NFHS-6** · 101 extracted indicator rows.

| Row | Indicator | NFHS-5 Total as printed in NFHS-6 | NFHS-6 Total | Reviewed change | PDF page |
| --- | --- | --- | --- | --- | --- |
| 1 | Population below age 5 years (%) | 9.5 | 9.4 | — | IIPS fact sheet |
| 2 | Population below age 15 years (%) | 31.0 | 29.9 | — | IIPS fact sheet |
| 3 | Population age 60 years and above (%) | 10.0 | 10.3 | — | IIPS fact sheet |
| 4 | Household electricity access | 91.0 | 95.8 | +4.8 | IIPS fact sheet |
| 5 | Population living in households with an improved drinking-water source 1 (%) | 99.2 | 99.3 | — | IIPS fact sheet |
| 6 | Households using iodized salt (%) | 92.2 | 86.5 | — | IIPS fact sheet |
| 7 | Households with any usual member covered under a health insurance/financing scheme (%) | 15.9 | 37.2 | — | IIPS fact sheet |
| 8 | Households with any usual member having a bank account/post office account (%) | 96.6 | 98.4 | — | IIPS fact sheet |
| 9 | Female population age 6+ ever attended school | 67.4 | 70.1 | +2.7 | IIPS fact sheet |
| 10 | Households with any usual female members owning a house and/or land (alone or jointly with | 12.2 | 20.1 | — | IIPS fact sheet |
| 11 | Children age 2-4 years who attended pre-school (%) | 15.1 | 30.4 | — | IIPS fact sheet |
| 12 | Women with 10 or more years of schooling | 39.3 | 42.5 | +3.2 | IIPS fact sheet |
| 13 | Men with 10 or more years of schooling | 48.6 | 49.1 | +0.5 | IIPS fact sheet |
| 14 | Women who have ever used the internet (%) | 30.6 | 70.0 | — | IIPS fact sheet |
| 15 | Men who have ever used the internet (%) | 59.1 | 81.0 | — | IIPS fact sheet |
| 16 | Women age 20–24 married before age 18 | 15.8 | 13.7 | -2.1 | IIPS fact sheet |
| 17 | Men age 25-29 years married before age 21 years (%) | 23.0 | 19.5 | — | IIPS fact sheet |
| 18 | Total fertility rate, children per woman | 2.4 | 2.2 | -0.2 | IIPS fact sheet |
| 19 | Women age 15-19 years who were already mothers or pregnant at the time of the survey (%) | 2.9 | 3.5 | — | IIPS fact sheet |
| 20 | Any method2 (%) | 62.4 | 62.4 | — | IIPS fact sheet |
| 21 | Any modern method2 (%) | 44.5 | 33.2 | — | IIPS fact sheet |
| 22 | Any traditional method (%) | 17.9 | 29.1 | — | IIPS fact sheet |
| 23 | Female sterilization (%) | 16.9 | 17.0 | — | IIPS fact sheet |
| 24 | Male sterilization (%) | 0.1 | 0.1 | — | IIPS fact sheet |
| 25 | Total unmet need for family planning | 12.8 | 10.8 | — | IIPS fact sheet |
| 26 | Unmet need for spacing 3 (%) | 4.7 | 4.8 | — | IIPS fact sheet |
| 27 | Unmet need for limiting3 (%) | 8.1 | 6.0 | — | IIPS fact sheet |
| 28 | First-trimester antenatal check-up | 62.5 | 70.6 | +8.1 | IIPS fact sheet |
| 29 | Mothers who had any antenatal care visits (%) | 94.4 | 96.9 | — | IIPS fact sheet |
| 30 | At least four antenatal care visits | 42.4 | 51.8 | +9.4 | IIPS fact sheet |
| 31 | Mothers whose last birth was protected against neonatal tetanus4 (%) | 92.1 | 93.0 | — | IIPS fact sheet |
| 32 | Mothers who consumed iron folic acid for 100 days or more when they were pregnant (%) | 22.3 | 29.6 | — | IIPS fact sheet |
| 33 | Mothers who consumed iron folic acid for 180 days or more when they were pregnant (%) | 9.7 | 17.7 | — | IIPS fact sheet |
| 34 | Registered pregnancies for which the mother received a Mother and Child Protection (MCP) | 95.7 | 93.1 | — | IIPS fact sheet |
| 35 | Institutional births | 83.4 | 85.9 | +2.5 | IIPS fact sheet |
| 36 | Institutional births in public facility (%) | 57.7 | 51.8 | — | IIPS fact sheet |
| 37 | Births attended by skilled health personnel | 84.8 | 87.6 | +2.8 | IIPS fact sheet |
| 38 | Caesarean births | 13.7 | 19.5 | +5.8 | IIPS fact sheet |
| 39 | Births in a private health facility that were delivered by caesarean section (%) | 39.4 | 47.3 | — | IIPS fact sheet |
| 40 | Births in a public health facility that were delivered by caesarean section (%) | 6.2 | 6.5 | — | IIPS fact sheet |
| 41 | Mothers who received postnatal care from a doctor/nurse/LHV/ANM/midwife/other health | 72.0 | 76.7 | — | IIPS fact sheet |
| 42 | Children born at home who were taken to a health facility for a check-up within 24 hours of | 2.4 | 3.3 | — | IIPS fact sheet |
| 43 | Children who received postnatal care from a doctor/nurse/LHV/ANM/midwife/ other health | 70.2 | 78.7 | — | IIPS fact sheet |
| 44 | Full vaccination, card or maternal recall | 69.9 | 81.4 | — | IIPS fact sheet |
| 45 | Full vaccination, card only | 78.4 | 88.6 | +10.2 | IIPS fact sheet |
| 46 | Children age 12-23 months who have received any vaccine (%) | 95.1 | 95.9 | — | IIPS fact sheet |
| 47 | BCG vaccination | 93.2 | 94.3 | +1.1 | IIPS fact sheet |
| 48 | Children age 12-23 months who have received 3 doses of polio vaccine 8 (%) | 74.3 | 84.5 | — | IIPS fact sheet |
| 49 | Children age 12-23 months who have received 3 doses of pentavalent vaccine (%) | 81.3 | 88.1 | — | IIPS fact sheet |
| 50 | Children age 12-23 months who have received the first dose of measles-containing | 83.4 | 90.4 | — | IIPS fact sheet |
| 51 | Children age 24-35 months who have received a second dose of measles-containing | 58.8 | 72.6 | — | IIPS fact sheet |
| 52 | Children age 12-23 months who have received birth dose of hepatitis B vaccine (%) | 50.4 | 57.3 | — | IIPS fact sheet |
| 53 | Children age 12-23 months who have received 3 doses of rotavirus vaccine (%) | 49.1 | 85.9 | — | IIPS fact sheet |
| 54 | Children age 9-35 months who received a vitamin A dose in the last 6 months (%) | 73.9 | 65.4 | — | IIPS fact sheet |
| 55 | Children age 12-23 months who received most of their vaccinations in a public health | 94.4 | 94.8 | — | IIPS fact sheet |
| 56 | Children age 12-23 months who received most of their vaccinations in a private health | 2.2 | 2.2 | — | IIPS fact sheet |
| 57 | Prevalence of diarrhoea in the 2 weeks preceding the survey (%) | 5.6 | 13.0 | — | IIPS fact sheet |
| 58 | Prevalence of severe diarrhoea in the 2 weeks preceding the survey (%) | 0.5 | 1.1 | — | IIPS fact sheet |
| 59 | Prevalence of symptoms of acute respiratory infection (ARI) in the 2 weeks preceding the | 3.5 | 2.6 | — | IIPS fact sheet |
| 60 | Children with fever or symptoms of ARI in the 2 weeks preceding the survey taken to a health | 63.0 | 64.6 | — | IIPS fact sheet |
| 61 | Children under age 3 years breastfed within one hour of birth9 (%) | 23.9 | 43.1 | — | IIPS fact sheet |
| 62 | Children under age 6 months exclusively breastfed 10 (%) | 59.7 | 34.6 | — | IIPS fact sheet |
| 63 | Children under age 6 months currently breastfeeding 10 (%) | 93.9 | 92.5 | — | IIPS fact sheet |
| 64 | Children under age 6 months exclusively breastfed or breastfeeding and consuming plain | 82.0 | 82.9 | — | IIPS fact sheet |
| 65 | Children age 6-8 months receiving solid or semi-solid food and breastmilk 10 (%) | 31.0 | 59.6 | — | IIPS fact sheet |
| 66 | Breastfeeding children age 6-23 months receiving an adequate diet 10, 11 (%) | 5.8 | 18.1 | — | IIPS fact sheet |
| 67 | Non-breastfeeding children age 6-23 months receiving an adequate diet 10, 11 (%) | 6.7 | 13.2 | — | IIPS fact sheet |
| 68 | Total children age 6-23 months receiving an adequate diet 10, 11 (%) | 5.9 | 17.1 | — | IIPS fact sheet |
| 69 | Child stunting | 39.7 | 31.5 | -8.2 | IIPS fact sheet |
| 70 | Child wasting | 17.3 | 19.2 | +1.9 | IIPS fact sheet |
| 71 | Severe child wasting | 7.3 | 4.8 | -2.5 | IIPS fact sheet |
| 72 | Child underweight | 32.1 | 34.5 | +2.4 | IIPS fact sheet |
| 73 | Child overweight | 3.1 | 0.5 | -2.6 | IIPS fact sheet |
| 74 | Women whose Body Mass Index (BMI) is below normal (BMI <18.5 kg/m 2)15 (%) | 19.0 | 22.2 | — | IIPS fact sheet |
| 75 | Men whose Body Mass Index (BMI) is below normal (BMI <18.5 kg/m 2) (%) | 18.0 | 23.5 | — | IIPS fact sheet |
| 76 | Women aged 15–49 overweight or obese (BMI ≥25), % | 21.4 | 26.7 | — | IIPS fact sheet |
| 77 | Men aged 15–49 overweight or obese (BMI ≥25), % | 18.5 | 21.8 | — | IIPS fact sheet |
| 78 | Blood sugar level - high (141-160 mg/dl)16 (%) | 4.7 | 7.5 | — | IIPS fact sheet |
| 79 | Blood sugar level - very high (>160 mg/dl)16 (%) | 4.5 | 7.6 | — | IIPS fact sheet |
| 80 | Blood sugar level - high or very high (>140 mg/dl) or taking medicine to control blood | 10.0 | 15.5 | — | IIPS fact sheet |
| 81 | Blood sugar level - high (141-160 mg/dl)16 (%) | 5.8 | 9.4 | — | IIPS fact sheet |
| 82 | Blood sugar level - very high (>160 mg/dl)16 (%) | 5.0 | 9.5 | — | IIPS fact sheet |
| 83 | Blood sugar level - high or very high (>140 mg/dl) or taking medicine to control blood | 11.6 | 19.5 | — | IIPS fact sheet |
| 84 | Mildly elevated blood pressure (Systolic 140-159 mm of Hg and/or | 11.5 | 5.7 | — | IIPS fact sheet |
| 85 | Women aged 15+ with moderately or severely elevated blood pressure, % | 4.9 | 3.6 | — | IIPS fact sheet |
| 86 | Women aged 15+ with elevated blood pressure or taking medicine for it, % | 18.3 | 12.1 | — | IIPS fact sheet |
| 87 | Mildly elevated blood pressure (Systolic 140-159 mm of Hg and/or | 15.2 | 8.1 | — | IIPS fact sheet |
| 88 | Men aged 15+ with moderately or severely elevated blood pressure, % | 5.2 | 2.4 | — | IIPS fact sheet |
| 89 | Men aged 15+ with elevated blood pressure or taking medicine for it, % | 21.7 | 14.1 | — | IIPS fact sheet |
| 90 | Currently married women who usually participate in three household decisions 17 (%) | 87.6 | 85.9 | — | IIPS fact sheet |
| 91 | Women who worked in the last 12 months and were paid in cash (%) | 15.5 | 21.1 | — | IIPS fact sheet |
| 92 | Women having a bank or savings account that they themselves use (%) | 75.4 | 83.5 | — | IIPS fact sheet |
| 93 | Women having a mobile phone that they themselves use (%) | 46.5 | 56.4 | — | IIPS fact sheet |
| 94 | Women age 15-24 years who use hygienic methods of protection during their menstrual | 72.9 | 69.2 | — | IIPS fact sheet |
| 95 | Ever-married women age 18-49 years who have ever experienced spousal violence 19 (%) | 34.9 | 28.5 | — | IIPS fact sheet |
| 96 | Ever-married women age 18-49 years who have experienced physical violence during any | 3.7 | 3.7 | — | IIPS fact sheet |
| 97 | Young women age 18-29 years who experienced sexual violence by age 18 (%) | 0.7 | 0.5 | — | IIPS fact sheet |
| 98 | Women age 15 years and above who use any kind of tobacco (%) | 8.5 | 9.6 | — | IIPS fact sheet |
| 99 | Men age 15 years and above who use any kind of tobacco (%) | 44.0 | 45.2 | — | IIPS fact sheet |
| 100 | Women age 15 years and above who consume alcohol (%) | 0.3 | 0.3 | — | IIPS fact sheet |
| 101 | Men age 15 years and above who consume alcohol (%) | 14.5 | 18.7 | — | IIPS fact sheet |

### Uttarakhand

**NFHS-5** · NFHS5-II · 131 indicator rows.

| Row | Indicator | Total | PDF page |
| --- | --- | --- | --- |
| 1 | Female population age 6 years and above who ever attended school (%) | 75.2 | 73 |
| 2 | Population below age 15 years (%) | 26.3 | 73 |
| 3 | Sex ratio of the total population (females per 1,000 males) | 1,016 | 73 |
| 4 | Sex ratio at birth for children born in the last five years (females per 1,000 males) | 984 | 73 |
| 5 | Children under age 5 years whose birth was registered with the civil authority (%) | 91.9 | 73 |
| 6 | Deaths in the last 3 years registered with the civil authority (%) | 72.3 | 73 |
| 7 | Population living in households with electricity (%) | 99.6 | 73 |
| 8 | Population living in households with an improved drinking -water source1 (%) | 95.9 | 73 |
| 9 | Population living in households that use an improved sanitation facility 2 (%) | 78.8 | 73 |
| 10 | Households using clean fuel for cooking3 (%) | 59.2 | 73 |
| 11 | Households using iodized salt (%) | 93.2 | 73 |
| 12 | Households with any usual member covered under a health insurance/financing scheme (%) | 62.5 | 73 |
| 13 | Children age 5 years who attended pre-primary school during the school year 2019-20 (%) | 33.2 | 73 |
| 14 | Women who are literate 4 (%) | 79.8 | 73 |
| 15 | Men who are literate4 (%) | 89.3 | 73 |
| 16 | Women with 10 or more years of schooling (%) | 50.4 | 73 |
| 17 | Men with 10 or more years of schooling (%) | 59.8 | 73 |
| 18 | Women who have ever used the internet (%) | 45.1 | 73 |
| 19 | Men who have ever used the internet (%) | 74.6 | 73 |
| 20 | Women age 20-24 years married before age 18 years (%) | 9.8 | 73 |
| 21 | Men age 25-29 years married before age 21 years (%) | 16.7 | 73 |
| 22 | Total fertility rate (children per woman) | 1.9 | 73 |
| 23 | Women age 15-19 years who were already mothers or pregnant at the time of the survey (%) | 2.5 | 73 |
| 24 | Adolescent fertility rate for women age 15 -19 years5 | 19 | 73 |
| 25 | Neonatal mortality rate (NNMR) | 32.4 | 73 |
| 26 | Infant mortality rate (IMR) | 39.1 | 73 |
| 27 | Under-five mortality rate (U5MR) | 45.6 | 73 |
| 28 | Any method6 (%) | 70.8 | 73 |
| 29 | Any modern method 6 (%) | 57.8 | 73 |
| 30 | Female sterilization (%) | 26.0 | 73 |
| 31 | Male sterilization (%) | 0.7 | 73 |
| 32 | IUD/PPIUD (%) | 1.5 | 73 |
| 33 | Pill (%) | 2.7 | 73 |
| 34 | Condom (%) | 25.6 | 73 |
| 35 | Injectables (%) | 0.4 | 73 |
| 36 | Total unmet need7 (%) | 8.8 | 73 |
| 37 | Unmet need for spacing7 (%) | 3.2 | 73 |
| 38 | Health worker ever talked to female non-users about family planning (%) | 20.2 | 73 |
| 39 | Current users ever told about side effects of current method8 (%) | 60.7 | 73 |
| 40 | Mothers who had an antenatal check-up in the first trimester (%) | 68.8 | 74 |
| 41 | Mothers who had at least 4 antenatal care visits (%) | 61.8 | 74 |
| 42 | Mothers whose last birth was protected against neonatal tetanus9 (%) | 93.6 | 74 |
| 43 | Mothers who consumed iron folic acid for 100 days or more when they were pregnant (%) | 46.6 | 74 |
| 44 | Mothers who consumed iron folic acid for 180 days or more when they were pregnant (%) | 25.0 | 74 |
| 45 | Registered pregnancies for which the mother received a Mother and Child Protection (MCP) card (%) | 97.1 | 74 |
| 46 | Mothers who received postnatal care from a doctor/nurse/LHV/ANM/midwife/other health personnel within 2 days of delivery (%) | 78.0 | 74 |
| 47 | Average out-of-pocket expenditure per delivery in a public health facility (Rs.) | 3,343 | 74 |
| 48 | Children born at home who were taken to a health facility for a check -up within 24 hours of birth (%) | 3.1 | 74 |
| 49 | Children who received postnatal care from a doctor/nurse/LHV/ANM/midwife/other health personnel within 2 days of delivery (%) | 78.9 | 74 |
| 50 | Institutional births (%) | 83.2 | 74 |
| 51 | Institutional births in public facility (%) | 53.3 | 74 |
| 52 | Home births that were conducted by skilled health personnel 10 (%) | 3.4 | 74 |
| 53 | Births attended by skilled health personnel10 (%) | 83.7 | 74 |
| 54 | Births delivered by caesarean section (%) | 20.4 | 74 |
| 55 | Births in a private health facility that were delivered by caesarean section (%) | 43.3 | 74 |
| 56 | Births in a public health facility that were delivered by caesarean section (%) | 14.0 | 74 |
| 57 | Children age 12-23 months fully vaccinated based on information from either vaccination card or mother's recall11 (%) | 80.8 | 74 |
| 58 | Children age 12-23 months fully vaccinated based on information from vaccination card only12 (%) | 88.6 | 74 |
| 59 | Children age 12-23 months who have received BCG (%) | 95.2 | 74 |
| 60 | Children age 12-23 months who have received 3 doses of polio vaccine13 (%) | 84.0 | 74 |
| 61 | Children age 12-23 months who have received 3 doses of penta or DPT vaccine (%) | 89.7 | 74 |
| 62 | Children age 12-23 months who have received the first dose of measles-containing vaccine (MCV) (%) | 90.6 | 74 |
| 63 | Children age 24-35 months who have received a second dose of measles-containing vaccine (MCV) (%) | 35.8 | 74 |
| 64 | Children age 12-23 months who have received 3 doses of rotavirus vaccine 14 (%) | 32.3 | 74 |
| 65 | Children age 12-23 months who have received 3 doses of penta or hepatitis B vaccine (%) | 86.6 | 74 |
| 66 | Children age 9-35 months who received a vitamin A dose in the last 6 months (%) | 53.7 | 74 |
| 67 | Children age 12-23 months who received most of their vaccinations in a public health facility (%) | 95.3 | 74 |
| 68 | Children age 12-23 months who received most of their vaccinations in a private health facility (%) | 3.0 | 74 |
| 69 | Prevalence of diarrhoea in the 2 weeks preceding the survey (%) | 4.4 | 74 |
| 70 | Children with diarrhoea in the 2 weeks preceding the survey who received oral rehydration salts (ORS) (%) | 55.9 | 74 |
| 71 | Children with diarrhoea in the 2 weeks preceding the survey who received zinc (%) | 30.1 | 74 |
| 72 | Children with diarrhoea in the 2 weeks preceding the survey taken to a health facility or health provider (%) | 79.6 | 74 |
| 73 | Prevalence of symptoms of acute respiratory infection (ARI) in the 2 weeks preceding the survey (%) | 2.3 | 74 |
| 74 | Children with fever or symptoms of ARI in the 2 weeks preceding the survey taken to a health facility or health provider (%) | 71.0 | 74 |
| 75 | Children under age 3 years breastfed within one hour of birth15 (%) | 41.3 | 75 |
| 76 | Children under age 6 months exclusively breastfed16 (%) | 52.5 | 75 |
| 77 | Children age 6-8 months receiving solid or semi-solid food and breastmilk16 (%) | 50.6 | 75 |
| 78 | Breastfeeding children age 6 -23 months receiving an adequate diet 16, 17 (%) | 13.2 | 75 |
| 79 | Non-breastfeeding children age 6 -23 months receiving an adequate diet 16, 17 (%) | 10.3 | 75 |
| 80 | Total children age 6 -23 months receiving an adequate diet 16, 17 (%) | 12.5 | 75 |
| 81 | Children under 5 years who are stunted (height-for-age)18 (%) | 27.0 | 75 |
| 82 | Children under 5 years who are wasted (weight-for-height)18 (%) | 13.2 | 75 |
| 83 | Children under 5 years who are severely wasted (weight-for-height)19 (%) | 4.7 | 75 |
| 84 | Children under 5 years who are underweight (weight-for-age)18 (%) | 21.0 | 75 |
| 85 | Children under 5 years who are overweight (weight-for-height)20 (%) | 4.1 | 75 |
| 86 | Women whose Body Mass Index (BMI) is below normal (BMI <18.5 kg/m 2)21 (%) | 13.9 | 75 |
| 87 | Men whose Body Mass Index (BMI) is below normal (BMI <18.5 kg/m2) (%) | 16.2 | 75 |
| 88 | Women who are overweight or obese (BMI ≥25.0 kg/m2)21 (%) | 29.7 | 75 |
| 89 | Men who are overweight or obese (BMI ≥25.0 kg/m2) (%) | 27.1 | 75 |
| 90 | Women who have high risk waist-to-hip ratio (≥0.85) (%) | 62.9 | 75 |
| 91 | Men who have high risk waist -to-hip ratio (≥0.90) (%) | 56.0 | 75 |
| 92 | Children age 6-59 months who are anaemic (<11.0 g/dl) 22 (%) | 58.8 | 75 |
| 93 | Non-pregnant women age 15-49 years who are anaemic (<12.0 g/dl)22 (%) | 42.4 | 75 |
| 94 | Pregnant women age 15-49 years who are anaemic (<11.0 g/dl)22 (%) | 46.4 | 75 |
| 95 | All women age 15 -49 years who are anaemic 22 (%) | 42.6 | 75 |
| 96 | All women age 15-19 years who are anaemic22 (%) | 40.9 | 75 |
| 97 | Men age 15-49 years who are anaemic (<13.0 g/dl)22 (%) | 15.1 | 75 |
| 98 | Men age 15 -19 years who are anaemic (<13.0 g/dl) 22 (%) | 27.6 | 75 |
| 99 | Blood sugar level - high (141-160 mg/dl)23 (%) | 4.2 | 75 |
| 100 | Blood sugar level - very high (>160 mg/dl) 23 (%) | 5.6 | 75 |
| 101 | Blood sugar level - high or very high (>140 mg/dl) or taking medicine to control blood sugar level23 (%) | 10.8 | 75 |
| 102 | Blood sugar level - high (141-160 mg/dl)23 (%) | 5.6 | 75 |
| 103 | Blood sugar level - very high (>160 mg/dl) 23 (%) | 7.6 | 75 |
| 104 | Blood sugar level - high or very high (>140 mg/dl) or taking medicine to control blood sugar level23 (%) | 14.3 | 75 |
| 105 | Mildly elevated blood pressure (Systolic 140 -159 mm of Hg and/or Diastolic 90-99 mm of Hg) (%) | 13.7 | 75 |
| 106 | Moderately or severely elevated blood pressure (Systolic ≥160 mm of Hg and/or Diastolic ≥100 mm of Hg) (%) | 6.3 | 75 |
| 107 | Elevated blood pressure (Systolic ≥140 mm of Hg and/or Diastolic ≥90 mm of Hg) or taking medicine to control blood pressure (%) | 22.9 | 75 |
| 108 | Mildly elevated blood pressure (Systolic 140 -159 mm of Hg and/or Diastolic 90-99 mm of Hg) (%) | 20.1 | 75 |
| 109 | Moderately or severely elevated blood pressure (Systolic ≥160 mm of Hg and/or Diastolic ≥100 mm of Hg) (%) | 9.5 | 75 |
| 110 | Elevated blood pressure (Systolic ≥140 mm of Hg and/or Diastolic ≥90 mm of Hg) or taking medicine to control blood pressure (%) | 31.8 | 75 |
| 111 | Ever undergone a screening test for cervical cancer (%) | 0.4 | 76 |
| 112 | Ever undergone a breast examination for breast cancer (%) | 0.2 | 76 |
| 113 | Ever undergone an oral cavity examination for oral cancer (%) | 0.3 | 76 |
| 114 | Ever undergone an oral cavity examination for oral cancer (%) | 0.4 | 76 |
| 115 | Women who have comprehensive knowledge 24 of HIV/AIDS (%) | 24.5 | 76 |
| 116 | Men who have comprehensive knowledge24 of HIV/AIDS (%) | 36.1 | 76 |
| 117 | Women who know that consistent condom use can reduce the chance of getting HIV/AIDS (%) | 73.8 | 76 |
| 118 | Men who know that consistent condom use can reduce the chance of getting HIV/AIDS (%) | 91.5 | 76 |
| 119 | Currently married women who usually participate in three household decisions25 (%) | 91.0 | 76 |
| 120 | Women who worked in the last 12 months and were paid in cash (%) | 21.6 | 76 |
| 121 | Women owning a house and/or land (alone or jointly with others) (%) | 24.6 | 76 |
| 122 | Women having a bank or savings account that they themselves use (%) | 80.2 | 76 |
| 123 | Women having a mobile phone that they themselves use (%) | 60.9 | 76 |
| 124 | Women age 15-24 years who use hygienic methods of protection during their menstrual period26 (%) | 91.2 | 76 |
| 125 | Ever-married women age 18-49 years who have ever experienced spousal violence27 (%) | 15.1 | 76 |
| 126 | Ever-married women age 18-49 years who have experienced physical violence during any pregnancy (%) | 2.1 | 76 |
| 127 | Young women age 18 -29 years who experienced sexual violence by age 18 (%) | 0.3 | 76 |
| 128 | Women age 15 years and above who use any kind of tobacco (%) | 4.6 | 76 |
| 129 | Men age 15 years and above who use any kind of tobacco (%) | 33.7 | 76 |
| 130 | Women age 15 years and above who consume alcohol (%) | 0.3 | 76 |
| 131 | Men age 15 years and above who consume alcohol (%) | 25.5 | 76 |

**NFHS-6** · 101 extracted indicator rows.

| Row | Indicator | NFHS-5 Total as printed in NFHS-6 | NFHS-6 Total | Reviewed change | PDF page |
| --- | --- | --- | --- | --- | --- |
| 1 | Population below age 5 years (%) | 7.8 | 7.6 | — | IIPS fact sheet |
| 2 | Population below age 15 years (%) | 26.3 | 24.9 | — | IIPS fact sheet |
| 3 | Population age 60 years and above (%) | 12.0 | 12.8 | — | IIPS fact sheet |
| 4 | Household electricity access | 99.6 | 99.3 | -0.3 | IIPS fact sheet |
| 5 | Population living in households with an improved drinking-water source 1 (%) | 95.9 | 97.3 | — | IIPS fact sheet |
| 6 | Households using iodized salt (%) | 93.2 | 92.4 | — | IIPS fact sheet |
| 7 | Households with any usual member covered under a health insurance/financing scheme (%) | 62.5 | 79.5 | — | IIPS fact sheet |
| 8 | Households with any usual member having a bank account/post office account (%) | 96.9 | 98.9 | — | IIPS fact sheet |
| 9 | Female population age 6+ ever attended school | 75.2 | 77.7 | +2.5 | IIPS fact sheet |
| 10 | Households with any usual female members owning a house and/or land (alone or jointly with | 16.5 | 23.7 | — | IIPS fact sheet |
| 11 | Children age 2-4 years who attended pre-school (%) | 40.7 | 58.1 | — | IIPS fact sheet |
| 12 | Women with 10 or more years of schooling | 50.4 | 56.1 | +5.7 | IIPS fact sheet |
| 13 | Men with 10 or more years of schooling | 59.8 | 57.7 | -2.1 | IIPS fact sheet |
| 14 | Women who have ever used the internet (%) | 45.1 | 76.9 | — | IIPS fact sheet |
| 15 | Men who have ever used the internet (%) | 74.6 | 86.7 | — | IIPS fact sheet |
| 16 | Women age 20–24 married before age 18 | 9.8 | 8.2 | -1.6 | IIPS fact sheet |
| 17 | Men age 25-29 years married before age 21 years (%) | 16.6 | 10.1 | — | IIPS fact sheet |
| 18 | Total fertility rate, children per woman | 1.9 | 1.9 | +0.0 | IIPS fact sheet |
| 19 | Women age 15-19 years who were already mothers or pregnant at the time of the survey (%) | 2.4 | 1.6 | — | IIPS fact sheet |
| 20 | Any method2 (%) | 70.8 | 71.1 | — | IIPS fact sheet |
| 21 | Any modern method2 (%) | 57.8 | 50.4 | — | IIPS fact sheet |
| 22 | Any traditional method (%) | 13.0 | 20.7 | — | IIPS fact sheet |
| 23 | Female sterilization (%) | 26.0 | 23.6 | — | IIPS fact sheet |
| 24 | Male sterilization (%) | 0.7 | 0.8 | — | IIPS fact sheet |
| 25 | Total unmet need for family planning | 8.8 | 8.9 | +0.1 | IIPS fact sheet |
| 26 | Unmet need for spacing 3 (%) | 3.1 | 3.6 | — | IIPS fact sheet |
| 27 | Unmet need for limiting3 (%) | 5.7 | 5.3 | — | IIPS fact sheet |
| 28 | First-trimester antenatal check-up | 68.8 | 80.6 | +11.8 | IIPS fact sheet |
| 29 | Mothers who had any antenatal care visits (%) | 91.8 | 98.3 | — | IIPS fact sheet |
| 30 | At least four antenatal care visits | 61.8 | 68.3 | +6.5 | IIPS fact sheet |
| 31 | Mothers whose last birth was protected against neonatal tetanus4 (%) | 93.6 | 96.7 | — | IIPS fact sheet |
| 32 | Mothers who consumed iron folic acid for 100 days or more when they were pregnant (%) | 46.5 | 43.3 | — | IIPS fact sheet |
| 33 | Mothers who consumed iron folic acid for 180 days or more when they were pregnant (%) | 25.0 | 25.4 | — | IIPS fact sheet |
| 34 | Registered pregnancies for which the mother received a Mother and Child Protection (MCP) | 97.1 | 98.6 | — | IIPS fact sheet |
| 35 | Institutional births | 83.2 | 88.9 | +5.7 | IIPS fact sheet |
| 36 | Institutional births in public facility (%) | 53.3 | 49.9 | — | IIPS fact sheet |
| 37 | Births attended by skilled health personnel | 83.7 | 90.3 | +6.6 | IIPS fact sheet |
| 38 | Caesarean births | 20.4 | 25.9 | +5.5 | IIPS fact sheet |
| 39 | Births in a private health facility that were delivered by caesarean section (%) | 43.3 | 47.7 | — | IIPS fact sheet |
| 40 | Births in a public health facility that were delivered by caesarean section (%) | 14.0 | 14.7 | — | IIPS fact sheet |
| 41 | Mothers who received postnatal care from a doctor/nurse/LHV/ANM/midwife/other health | 78.0 | 86.5 | — | IIPS fact sheet |
| 42 | Children born at home who were taken to a health facility for a check-up within 24 hours of | 3.1 | 1.3 | — | IIPS fact sheet |
| 43 | Children who received postnatal care from a doctor/nurse/LHV/ANM/midwife/ other health | 78.9 | 86.7 | — | IIPS fact sheet |
| 44 | Full vaccination, card or maternal recall | 81.1 | 86.0 | — | IIPS fact sheet |
| 45 | Full vaccination, card only | 88.6 | 90.8 | +2.2 | IIPS fact sheet |
| 46 | Children age 12-23 months who have received any vaccine (%) | 96.4 | 98.3 | — | IIPS fact sheet |
| 47 | BCG vaccination | 95.2 | 97.9 | +2.7 | IIPS fact sheet |
| 48 | Children age 12-23 months who have received 3 doses of polio vaccine 8 (%) | 84.0 | 87.1 | — | IIPS fact sheet |
| 49 | Children age 12-23 months who have received 3 doses of pentavalent vaccine (%) | 89.7 | 93.7 | — | IIPS fact sheet |
| 50 | Children age 12-23 months who have received the first dose of measles-containing | 90.9 | 95.4 | — | IIPS fact sheet |
| 51 | Children age 24-35 months who have received a second dose of measles-containing | 71.3 | 83.2 | — | IIPS fact sheet |
| 52 | Children age 12-23 months who have received birth dose of hepatitis B vaccine (%) | 68.5 | 79.7 | — | IIPS fact sheet |
| 53 | Children age 12-23 months who have received 3 doses of rotavirus vaccine (%) | 32.3 | 92.8 | — | IIPS fact sheet |
| 54 | Children age 9-35 months who received a vitamin A dose in the last 6 months (%) | 53.7 | 59.9 | — | IIPS fact sheet |
| 55 | Children age 12-23 months who received most of their vaccinations in a public health | 95.3 | 95.2 | — | IIPS fact sheet |
| 56 | Children age 12-23 months who received most of their vaccinations in a private health | 3.0 | 2.6 | — | IIPS fact sheet |
| 57 | Prevalence of diarrhoea in the 2 weeks preceding the survey (%) | 4.4 | 10.0 | — | IIPS fact sheet |
| 58 | Prevalence of severe diarrhoea in the 2 weeks preceding the survey (%) | 0.2 | 1.1 | — | IIPS fact sheet |
| 59 | Prevalence of symptoms of acute respiratory infection (ARI) in the 2 weeks preceding the | 2.3 | 2.9 | — | IIPS fact sheet |
| 60 | Children with fever or symptoms of ARI in the 2 weeks preceding the survey taken to a health | 71.0 | 74.8 | — | IIPS fact sheet |
| 61 | Children under age 3 years breastfed within one hour of birth9 (%) | 41.3 | 37.1 | — | IIPS fact sheet |
| 62 | Children under age 6 months exclusively breastfed 10 (%) | 52.5 | 40.8 | — | IIPS fact sheet |
| 63 | Children under age 6 months currently breastfeeding 10 (%) | 90.2 | 87.4 | — | IIPS fact sheet |
| 64 | Children under age 6 months exclusively breastfed or breastfeeding and consuming plain | 83.3 | 84.6 | — | IIPS fact sheet |
| 65 | Children age 6-8 months receiving solid or semi-solid food and breastmilk 10 (%) | 50.6 | 66.6 | — | IIPS fact sheet |
| 66 | Breastfeeding children age 6-23 months receiving an adequate diet 10, 11 (%) | 12.7 | 19.3 | — | IIPS fact sheet |
| 67 | Non-breastfeeding children age 6-23 months receiving an adequate diet 10, 11 (%) | 10.3 | 19.0 | — | IIPS fact sheet |
| 68 | Total children age 6-23 months receiving an adequate diet 10, 11 (%) | 12.2 | 19.2 | — | IIPS fact sheet |
| 69 | Child stunting | 27.0 | 20.0 | -7.0 | IIPS fact sheet |
| 70 | Child wasting | 13.2 | 11.0 | -2.2 | IIPS fact sheet |
| 71 | Severe child wasting | 4.7 | 2.0 | -2.7 | IIPS fact sheet |
| 72 | Child underweight | 21.0 | 19.6 | -1.4 | IIPS fact sheet |
| 73 | Child overweight | 4.1 | 0.7 | -3.4 | IIPS fact sheet |
| 74 | Women whose Body Mass Index (BMI) is below normal (BMI <18.5 kg/m 2)15 (%) | 13.9 | 15.5 | — | IIPS fact sheet |
| 75 | Men whose Body Mass Index (BMI) is below normal (BMI <18.5 kg/m 2) (%) | 16.2 | 17.8 | — | IIPS fact sheet |
| 76 | Women aged 15–49 overweight or obese (BMI ≥25), % | 29.8 | 34.3 | — | IIPS fact sheet |
| 77 | Men aged 15–49 overweight or obese (BMI ≥25), % | 27.1 | 26.5 | — | IIPS fact sheet |
| 78 | Blood sugar level - high (141-160 mg/dl)16 (%) | 4.2 | 8.9 | — | IIPS fact sheet |
| 79 | Blood sugar level - very high (>160 mg/dl)16 (%) | 5.6 | 8.3 | — | IIPS fact sheet |
| 80 | Blood sugar level - high or very high (>140 mg/dl) or taking medicine to control blood | 10.8 | 18.1 | — | IIPS fact sheet |
| 81 | Blood sugar level - high (141-160 mg/dl)16 (%) | 5.6 | 9.4 | — | IIPS fact sheet |
| 82 | Blood sugar level - very high (>160 mg/dl)16 (%) | 7.6 | 11.2 | — | IIPS fact sheet |
| 83 | Blood sugar level - high or very high (>140 mg/dl) or taking medicine to control blood | 14.2 | 21.4 | — | IIPS fact sheet |
| 84 | Mildly elevated blood pressure (Systolic 140-159 mm of Hg and/or | 13.7 | 6.1 | — | IIPS fact sheet |
| 85 | Women aged 15+ with moderately or severely elevated blood pressure, % | 6.3 | 4.2 | — | IIPS fact sheet |
| 86 | Women aged 15+ with elevated blood pressure or taking medicine for it, % | 22.9 | 14.5 | — | IIPS fact sheet |
| 87 | Mildly elevated blood pressure (Systolic 140-159 mm of Hg and/or | 20.1 | 8.9 | — | IIPS fact sheet |
| 88 | Men aged 15+ with moderately or severely elevated blood pressure, % | 9.5 | 3.4 | — | IIPS fact sheet |
| 89 | Men aged 15+ with elevated blood pressure or taking medicine for it, % | 31.8 | 18.3 | — | IIPS fact sheet |
| 90 | Currently married women who usually participate in three household decisions 17 (%) | 91.0 | 93.8 | — | IIPS fact sheet |
| 91 | Women who worked in the last 12 months and were paid in cash (%) | 21.6 | 27.7 | — | IIPS fact sheet |
| 92 | Women having a bank or savings account that they themselves use (%) | 80.2 | 91.0 | — | IIPS fact sheet |
| 93 | Women having a mobile phone that they themselves use (%) | 60.9 | 72.5 | — | IIPS fact sheet |
| 94 | Women age 15-24 years who use hygienic methods of protection during their menstrual | 91.5 | 89.8 | — | IIPS fact sheet |
| 95 | Ever-married women age 18-49 years who have ever experienced spousal violence 19 (%) | 15.3 | 13.7 | — | IIPS fact sheet |
| 96 | Ever-married women age 18-49 years who have experienced physical violence during any | 2.1 | 3.5 | — | IIPS fact sheet |
| 97 | Young women age 18-29 years who experienced sexual violence by age 18 (%) | 0.3 | 1.1 | — | IIPS fact sheet |
| 98 | Women age 15 years and above who use any kind of tobacco (%) | 4.6 | 4.3 | — | IIPS fact sheet |
| 99 | Men age 15 years and above who use any kind of tobacco (%) | 33.7 | 33.8 | — | IIPS fact sheet |
| 100 | Women age 15 years and above who consume alcohol (%) | 0.3 | 0.3 | — | IIPS fact sheet |
| 101 | Men age 15 years and above who consume alcohol (%) | 25.5 | 27.2 | — | IIPS fact sheet |

### West Bengal

**NFHS-5** · NFHS5-I · 131 indicator rows.

| Row | Indicator | Total | PDF page |
| --- | --- | --- | --- |
| 1 | Female population age 6 years and above who ever attended school (%) | 76.8 | 144 |
| 2 | Population below age 15 years (%) | 23.5 | 144 |
| 3 | Sex ratio of the total population (females per 1,000 males) | 1,049 | 144 |
| 4 | Sex ratio at birth for children born in the last five years (females per 1,000 males) | 973 | 144 |
| 5 | Children under age 5 years whose birth was registered with the civil authority (%) | 98.2 | 144 |
| 6 | Deaths in the last 3 years registered with the civil authority (%) | 78.6 | 144 |
| 7 | Population living in households with electricity (%) | 97.5 | 144 |
| 8 | Population living in households with an improved drinking-water source1 (%) | 97.5 | 144 |
| 9 | Population living in households that use an improved sanitation facility2 (%) | 68.0 | 144 |
| 10 | Households using clean fuel for cooking3 (%) | 40.2 | 144 |
| 11 | Households using iodized salt (%) | 94.5 | 144 |
| 12 | Households with any usual member covered under a health insurance/financing scheme (%) | 29.3 | 144 |
| 13 | Children age 5 years who attended pre-primary school during the school year 2019-20 (%) | 20.1 | 144 |
| 14 | Women who are literate4 (%) | 76.1 | 144 |
| 15 | Men who are literate4 (%) | 81.6 | 144 |
| 16 | Women with 10 or more years of schooling (%) | 32.9 | 144 |
| 17 | Men with 10 or more years of schooling (%) | 34.7 | 144 |
| 18 | Women who have ever used the internet (%) | 25.5 | 144 |
| 19 | Men who have ever used the internet (%) | 46.7 | 144 |
| 20 | Women age 20-24 years married before age 18 years (%) | 41.6 | 144 |
| 21 | Men age 25-29 years married before age 21 years (%) | 20.0 | 144 |
| 22 | Total fertility rate (children per woman) | 1.6 | 144 |
| 23 | Women age 15-19 years who were already mothers or pregnant at the time of the survey (%) | 16.4 | 144 |
| 24 | Adolescent fertility rate for women age 15-19 years5 | 81 | 144 |
| 25 | Neonatal mortality rate (NNMR) | 15.5 | 144 |
| 26 | Infant mortality rate (IMR) | 22.0 | 144 |
| 27 | Under-five mortality rate (U5MR) | 25.4 | 144 |
| 28 | Any method6 (%) | 74.4 | 144 |
| 29 | Any modern method6 (%) | 60.7 | 144 |
| 30 | Female sterilization (%) | 29.4 | 144 |
| 31 | Male sterilization (%) | 0.1 | 144 |
| 32 | IUD/PPIUD (%) | 2.2 | 144 |
| 33 | Pill (%) | 20.3 | 144 |
| 34 | Condom (%) | 7.0 | 144 |
| 35 | Injectables (%) | 0.7 | 144 |
| 36 | Total unmet need7 (%) | 7.0 | 144 |
| 37 | Unmet need for spacing7 (%) | 3.0 | 144 |
| 38 | Health worker ever talked to female non-users about family planning (%) | 17.5 | 144 |
| 39 | Current users ever told about side effects of current method8 (%) | 53.6 | 144 |
| 40 | Mothers who had an antenatal check-up in the first trimester (%) | 72.6 | 145 |
| 41 | Mothers who had at least 4 antenatal care visits (%) | 75.8 | 145 |
| 42 | Mothers whose last birth was protected against neonatal tetanus9 (%) | 94.6 | 145 |
| 43 | Mothers who consumed iron folic acid for 100 days or more when they were pregnant (%) | 62.5 | 145 |
| 44 | Mothers who consumed iron folic acid for 180 days or more when they were pregnant (%) | 30.8 | 145 |
| 45 | Registered pregnancies for which the mother received a Mother and Child Protection (MCP) card (%) | 98.4 | 145 |
| 46 | Mothers who received postnatal care from a doctor/nurse/LHV/ANM/midwife/other health personnel within 2 days of delivery (%) | 68.0 | 145 |
| 47 | Average out-of-pocket expenditure per delivery in a public health facility (Rs.) | 2,683 | 145 |
| 48 | Children born at home who were taken to a health facility for a check-up within 24 hours of birth (%) | 8.8 | 145 |
| 49 | Children who received postnatal care from a doctor/nurse/LHV/ANM/midwife/other health personnel within 2 days of delivery (%) | 76.8 | 145 |
| 50 | Institutional births (%) | 91.7 | 145 |
| 51 | Institutional births in public facility (%) | 72.4 | 145 |
| 52 | Home births that were conducted by skilled health personnel10 (%) | 2.6 | 145 |
| 53 | Births attended by skilled health personnel10 (%) | 94.1 | 145 |
| 54 | Births delivered by caesarean section (%) | 32.6 | 145 |
| 55 | Births in a private health facility that were delivered by caesarean section (%) | 82.7 | 145 |
| 56 | Births in a public health facility that were delivered by caesarean section (%) | 22.9 | 145 |
| 57 | Children age 12-23 months fully vaccinated based on information from either vaccination card or mother's recall11 (%) | 87.8 | 145 |
| 58 | Children age 12-23 months fully vaccinated based on information from vaccination card only12 (%) | 90.8 | 145 |
| 59 | Children age 12-23 months who have received BCG (%) | 98.6 | 145 |
| 60 | Children age 12-23 months who have received 3 doses of polio vaccine13 (%) | 90.8 | 145 |
| 61 | Children age 12-23 months who have received 3 doses of penta or DPT vaccine (%) | 95.0 | 145 |
| 62 | Children age 12-23 months who have received the first dose of measles-containing vaccine (MCV) (%) | 94.4 | 145 |
| 63 | Children age 24-35 months who have received a second dose of measles-containing vaccine (MCV) (%) | 44.4 | 145 |
| 64 | Children age 12-23 months who have received 3 doses of rotavirus vaccine14 (%) | 1.8 | 145 |
| 65 | Children age 12-23 months who have received 3 doses of penta or hepatitis B vaccine (%) | 92.0 | 145 |
| 66 | Children age 9-59 months who received a vitamin A dose in the last 6 months (%) | 67.4 | 145 |
| 67 | Children age 12-23 months who received most of their vaccinations in a public health facility (%) | 96.3 | 145 |
| 68 | Children age 12-23 months who received most of their vaccinations in a private health facility (%) | 2.5 | 145 |
| 69 | Prevalence of diarrhoea in the 2 weeks preceding the survey (%) | 6.5 | 145 |
| 70 | Children with diarrhoea in the 2 weeks preceding the survey who received oral rehydration salts (ORS) (%) | 75.3 | 145 |
| 71 | Children with diarrhoea in the 2 weeks preceding the survey who received zinc (%) | 36.0 | 145 |
| 72 | Children with diarrhoea in the 2 weeks preceding the survey taken to a health facility or health provider (%) | 75.2 | 145 |
| 73 | Prevalence of symptoms of acute respiratory infection (ARI) in the 2 weeks preceding the survey (%) | 2.8 | 145 |
| 74 | Children with fever or symptoms of ARI in the 2 weeks preceding the survey taken to a health facility or health provider (%) | 71.3 | 145 |
| 75 | Children under age 3 years breastfed within one hour of birth15 (%) | 59.4 | 146 |
| 76 | Children under age 6 months exclusively breastfed16 (%) | 53.3 | 146 |
| 77 | Children age 6-8 months receiving solid or semi-solid food and breastmilk16 (%) | 67.8 | 146 |
| 78 | Breastfeeding children age 6-23 months receiving an adequate diet16, 17 (%) | 24.0 | 146 |
| 79 | Non-breastfeeding children age 6-23 months receiving an adequate diet16, 17 (%) | 17.0 | 146 |
| 80 | Total children age 6-23 months receiving an adequate diet16, 17 (%) | 23.4 | 146 |
| 81 | Children under 5 years who are stunted (height-for-age)18 (%) | 33.8 | 146 |
| 82 | Children under 5 years who are wasted (weight-for-height)18 (%) | 20.3 | 146 |
| 83 | Children under 5 years who are severely wasted (weight-for-height)19 (%) | 7.1 | 146 |
| 84 | Children under 5 years who are underweight (weight-for-age)18 (%) | 32.2 | 146 |
| 85 | Children under 5 years who are overweight (weight-for-height)20 (%) | 4.3 | 146 |
| 86 | Women whose Body Mass Index (BMI) is below normal (BMI <18.5 kg/m2)21 (%) | 14.8 | 146 |
| 87 | Men whose Body Mass Index (BMI) is below normal (BMI <18.5 kg/m2) (%) | 15.1 | 146 |
| 88 | Women who are overweight or obese (BMI ≥25.0 kg/m2)21 (%) | 22.7 | 146 |
| 89 | Men who are overweight or obese (BMI ≥25.0 kg/m2) (%) | 16.2 | 146 |
| 90 | Women who have high risk waist-to-hip ratio (≥0.85) (%) | 74.7 | 146 |
| 91 | Men who have high risk waist-to-hip ratio (≥0.90) (%) | 57.2 | 146 |
| 92 | Children age 6-59 months who are anaemic (<11.0 g/dl)22 (%) | 69.0 | 146 |
| 93 | Non-pregnant women age 15-49 years who are anaemic (<12.0 g/dl)22 (%) | 71.7 | 146 |
| 94 | Pregnant women age 15-49 years who are anaemic (<11.0 g/dl)22 (%) | 62.3 | 146 |
| 95 | All women age 15-49 years who are anaemic22 (%) | 71.4 | 146 |
| 96 | All women age 15-19 years who are anaemic22 (%) | 70.8 | 146 |
| 97 | Men age 15-49 years who are anaemic (<13.0 g/dl)22 (%) | 38.9 | 146 |
| 98 | Men age 15-19 years who are anaemic (<13.0 g/dl)22 (%) | 38.7 | 146 |
| 99 | Blood sugar level - high (141-160 mg/dl)23 (%) | 8.9 | 146 |
| 100 | Blood sugar level - very high (>160 mg/dl)23 (%) | 7.7 | 146 |
| 101 | Blood sugar level - high or very high (>140 mg/dl) or taking medicine to control blood sugar level23 (%) | 17.5 | 146 |
| 102 | Blood sugar level - high (141-160 mg/dl)23 (%) | 10.8 | 146 |
| 103 | Blood sugar level - very high (>160 mg/dl)23 (%) | 9.5 | 146 |
| 104 | Blood sugar level - high or very high (>140 mg/dl) or taking medicine to control blood sugar level23 (%) | 21.3 | 146 |
| 105 | Mildly elevated blood pressure (Systolic 140-159 mm of Hg and/or Diastolic 90-99 mm of Hg) (%) | 11.5 | 146 |
| 106 | Moderately or severely elevated blood pressure (Systolic ≥160 mm of Hg and/or Diastolic ≥100 mm of Hg) (%) | 5.3 | 146 |
| 107 | Elevated blood pressure (Systolic ≥140 mm of Hg and/or Diastolic ≥90 mm of Hg) or taking medicine to control blood pressure (%) | 20.5 | 146 |
| 108 | Mildly elevated blood pressure (Systolic 140-159 mm of Hg and/or Diastolic 90-99 mm of Hg) (%) | 13.1 | 146 |
| 109 | Moderately or severely elevated blood pressure (Systolic ≥160 mm of Hg and/or Diastolic ≥100 mm of Hg) (%) | 4.2 | 146 |
| 110 | Elevated blood pressure (Systolic ≥140 mm of Hg and/or Diastolic ≥90 mm of Hg) or taking medicine to control blood pressure (%) | 20.1 | 146 |
| 111 | Ever undergone a screening test for cervical cancer (%) | 0.2 | 147 |
| 112 | Ever undergone a breast examination for breast cancer (%) | 0.2 | 147 |
| 113 | Ever undergone an oral cavity examination for oral cancer (%) | 0.2 | 147 |
| 114 | Ever undergone an oral cavity examination for oral cancer (%) | 0.7 | 147 |
| 115 | Women who have comprehensive knowledge24 of HIV/AIDS (%) | 18.5 | 147 |
| 116 | Men who have comprehensive knowledge24 of HIV/AIDS (%) | 15.5 | 147 |
| 117 | Women who know that consistent condom use can reduce the chance of getting HIV/AIDS (%) | 60.4 | 147 |
| 118 | Men who know that consistent condom use can reduce the chance of getting HIV/AIDS (%) | 72.7 | 147 |
| 119 | Currently married women who usually participate in three household decisions25 (%) | 88.9 | 147 |
| 120 | Women who worked in the last 12 months and were paid in cash (%) | 20.2 | 147 |
| 121 | Women owning a house and/or land (alone or jointly with others) (%) | 23.2 | 147 |
| 122 | Women having a bank or savings account that they themselves use (%) | 76.5 | 147 |
| 123 | Women having a mobile phone that they themselves use (%) | 50.1 | 147 |
| 124 | Women age 15-24 years who use hygienic methods of protection during their menstrual period26 (%) | 83.0 | 147 |
| 125 | Ever-married women age 18-49 years who have ever experienced spousal violence27 (%) | 27.0 | 147 |
| 126 | Ever-married women age 18-49 years who have experienced physical violence during any pregnancy (%) | 3.5 | 147 |
| 127 | Young women age 18-29 years who experienced sexual violence by age 18 (%) | 9.7 | 147 |
| 128 | Women age 15 years and above who use any kind of tobacco (%) | 10.8 | 147 |
| 129 | Men age 15 years and above who use any kind of tobacco (%) | 48.1 | 147 |
| 130 | Women age 15 years and above who consume alcohol (%) | 1.1 | 147 |
| 131 | Men age 15 years and above who consume alcohol (%) | 18.1 | 147 |

**NFHS-6** · 101 extracted indicator rows.

| Row | Indicator | NFHS-5 Total as printed in NFHS-6 | NFHS-6 Total | Reviewed change | PDF page |
| --- | --- | --- | --- | --- | --- |
| 1 | Population below age 5 years (%) | 7.6 | 6.8 | — | IIPS fact sheet |
| 2 | Population below age 15 years (%) | 23.5 | 21.6 | — | IIPS fact sheet |
| 3 | Population age 60 years and above (%) | 10.9 | 14.1 | — | IIPS fact sheet |
| 4 | Household electricity access | 97.5 | 99.1 | +1.6 | IIPS fact sheet |
| 5 | Population living in households with an improved drinking-water source 1 (%) | 97.5 | 98.4 | — | IIPS fact sheet |
| 6 | Households using iodized salt (%) | 94.5 | 93.0 | — | IIPS fact sheet |
| 7 | Households with any usual member covered under a health insurance/financing scheme (%) | 33.7 | 88.2 | — | IIPS fact sheet |
| 8 | Households with any usual member having a bank account/post office account (%) | 95.0 | 98.7 | — | IIPS fact sheet |
| 9 | Female population age 6+ ever attended school | 76.8 | 78.2 | +1.4 | IIPS fact sheet |
| 10 | Households with any usual female members owning a house and/or land (alone or jointly with | 6.6 | 13.0 | — | IIPS fact sheet |
| 11 | Children age 2-4 years who attended pre-school (%) | 55.6 | 50.1 | — | IIPS fact sheet |
| 12 | Women with 10 or more years of schooling | 32.9 | 40.0 | +7.1 | IIPS fact sheet |
| 13 | Men with 10 or more years of schooling | 34.7 | 42.1 | +7.4 | IIPS fact sheet |
| 14 | Women who have ever used the internet (%) | 25.5 | 59.3 | — | IIPS fact sheet |
| 15 | Men who have ever used the internet (%) | 41.9 | 66.8 | — | IIPS fact sheet |
| 16 | Women age 20–24 married before age 18 | 41.6 | 36.4 | -5.2 | IIPS fact sheet |
| 17 | Men age 25-29 years married before age 21 years (%) | 20.0 | 12.4 | — | IIPS fact sheet |
| 18 | Total fertility rate, children per woman | 1.6 | 1.6 | +0.0 | IIPS fact sheet |
| 19 | Women age 15-19 years who were already mothers or pregnant at the time of the survey (%) | 16.4 | 16.6 | — | IIPS fact sheet |
| 20 | Any method2 (%) | 74.4 | 79.8 | — | IIPS fact sheet |
| 21 | Any modern method2 (%) | 60.7 | 54.9 | — | IIPS fact sheet |
| 22 | Any traditional method (%) | 13.7 | 24.9 | — | IIPS fact sheet |
| 23 | Female sterilization (%) | 29.4 | 27.5 | — | IIPS fact sheet |
| 24 | Male sterilization (%) | 0.1 | 0.2 | — | IIPS fact sheet |
| 25 | Total unmet need for family planning | 7.0 | 5.0 | -2.0 | IIPS fact sheet |
| 26 | Unmet need for spacing 3 (%) | 2.9 | 3.2 | — | IIPS fact sheet |
| 27 | Unmet need for limiting3 (%) | 4.1 | 1.8 | — | IIPS fact sheet |
| 28 | First-trimester antenatal check-up | 72.6 | 80.9 | +8.3 | IIPS fact sheet |
| 29 | Mothers who had any antenatal care visits (%) | 91.1 | 97.7 | — | IIPS fact sheet |
| 30 | At least four antenatal care visits | 76.7 | 64.5 | — | IIPS fact sheet |
| 31 | Mothers whose last birth was protected against neonatal tetanus4 (%) | 94.6 | 96.2 | — | IIPS fact sheet |
| 32 | Mothers who consumed iron folic acid for 100 days or more when they were pregnant (%) | 62.5 | 77.8 | — | IIPS fact sheet |
| 33 | Mothers who consumed iron folic acid for 180 days or more when they were pregnant (%) | 30.8 | 50.3 | — | IIPS fact sheet |
| 34 | Registered pregnancies for which the mother received a Mother and Child Protection (MCP) | 98.4 | 98.8 | — | IIPS fact sheet |
| 35 | Institutional births | 91.7 | 94.9 | +3.2 | IIPS fact sheet |
| 36 | Institutional births in public facility (%) | 72.4 | 65.8 | — | IIPS fact sheet |
| 37 | Births attended by skilled health personnel | 94.1 | 96.1 | +2.0 | IIPS fact sheet |
| 38 | Caesarean births | 32.6 | 44.5 | +11.9 | IIPS fact sheet |
| 39 | Births in a private health facility that were delivered by caesarean section (%) | 82.7 | 87.7 | — | IIPS fact sheet |
| 40 | Births in a public health facility that were delivered by caesarean section (%) | 22.9 | 28.8 | — | IIPS fact sheet |
| 41 | Mothers who received postnatal care from a doctor/nurse/LHV/ANM/midwife/other health | 68.0 | 81.2 | — | IIPS fact sheet |
| 42 | Children born at home who were taken to a health facility for a check-up within 24 hours of | 8.8 | 21.3 | — | IIPS fact sheet |
| 43 | Children who received postnatal care from a doctor/nurse/LHV/ANM/midwife/ other health | 76.8 | 87.5 | — | IIPS fact sheet |
| 44 | Full vaccination, card or maternal recall | 88.2 | 88.1 | — | IIPS fact sheet |
| 45 | Full vaccination, card only | 90.8 | 93.9 | +3.1 | IIPS fact sheet |
| 46 | Children age 12-23 months who have received any vaccine (%) | 99.2 | 98.0 | — | IIPS fact sheet |
| 47 | BCG vaccination | 98.6 | 97.3 | -1.3 | IIPS fact sheet |
| 48 | Children age 12-23 months who have received 3 doses of polio vaccine 8 (%) | 90.8 | 88.7 | — | IIPS fact sheet |
| 49 | Children age 12-23 months who have received 3 doses of pentavalent vaccine (%) | 95.3 | 93.7 | — | IIPS fact sheet |
| 50 | Children age 12-23 months who have received the first dose of measles-containing | 94.4 | 95.3 | — | IIPS fact sheet |
| 51 | Children age 24-35 months who have received a second dose of measles-containing | 72.6 | 86.2 | — | IIPS fact sheet |
| 52 | Children age 12-23 months who have received birth dose of hepatitis B vaccine (%) | 70.2 | 89.0 | — | IIPS fact sheet |
| 53 | Children age 12-23 months who have received 3 doses of rotavirus vaccine (%) | 1.8 | 92.3 | — | IIPS fact sheet |
| 54 | Children age 9-35 months who received a vitamin A dose in the last 6 months (%) | 68.4 | 88.0 | — | IIPS fact sheet |
| 55 | Children age 12-23 months who received most of their vaccinations in a public health | 96.3 | 98.7 | — | IIPS fact sheet |
| 56 | Children age 12-23 months who received most of their vaccinations in a private health | 2.5 | 1.0 | — | IIPS fact sheet |
| 57 | Prevalence of diarrhoea in the 2 weeks preceding the survey (%) | 6.5 | 2.9 | — | IIPS fact sheet |
| 58 | Prevalence of severe diarrhoea in the 2 weeks preceding the survey (%) | 0.9 | 0.4 | — | IIPS fact sheet |
| 59 | Prevalence of symptoms of acute respiratory infection (ARI) in the 2 weeks preceding the | 2.8 | 2.4 | — | IIPS fact sheet |
| 60 | Children with fever or symptoms of ARI in the 2 weeks preceding the survey taken to a health | 71.3 | 68.4 | — | IIPS fact sheet |
| 61 | Children under age 3 years breastfed within one hour of birth9 (%) | 59.4 | 50.0 | — | IIPS fact sheet |
| 62 | Children under age 6 months exclusively breastfed 10 (%) | 53.3 | 58.4 | — | IIPS fact sheet |
| 63 | Children under age 6 months currently breastfeeding 10 (%) | 92.6 | 94.8 | — | IIPS fact sheet |
| 64 | Children under age 6 months exclusively breastfed or breastfeeding and consuming plain | 80.1 | 84.2 | — | IIPS fact sheet |
| 65 | Children age 6-8 months receiving solid or semi-solid food and breastmilk 10 (%) | 67.8 | 62.7 | — | IIPS fact sheet |
| 66 | Breastfeeding children age 6-23 months receiving an adequate diet 10, 11 (%) | 23.3 | 28.0 | — | IIPS fact sheet |
| 67 | Non-breastfeeding children age 6-23 months receiving an adequate diet 10, 11 (%) | 17.0 | 34.2 | — | IIPS fact sheet |
| 68 | Total children age 6-23 months receiving an adequate diet 10, 11 (%) | 22.8 | 28.3 | — | IIPS fact sheet |
| 69 | Child stunting | 33.8 | 22.4 | -11.4 | IIPS fact sheet |
| 70 | Child wasting | 20.3 | 20.3 | +0.0 | IIPS fact sheet |
| 71 | Severe child wasting | 7.1 | 4.8 | -2.3 | IIPS fact sheet |
| 72 | Child underweight | 32.2 | 28.5 | -3.7 | IIPS fact sheet |
| 73 | Child overweight | 4.3 | 2.1 | -2.2 | IIPS fact sheet |
| 74 | Women whose Body Mass Index (BMI) is below normal (BMI <18.5 kg/m 2)15 (%) | 14.8 | 15.1 | — | IIPS fact sheet |
| 75 | Men whose Body Mass Index (BMI) is below normal (BMI <18.5 kg/m 2) (%) | 15.1 | 18.3 | — | IIPS fact sheet |
| 76 | Women aged 15–49 overweight or obese (BMI ≥25), % | 22.7 | 34.6 | — | IIPS fact sheet |
| 77 | Men aged 15–49 overweight or obese (BMI ≥25), % | 16.2 | 24.5 | — | IIPS fact sheet |
| 78 | Blood sugar level - high (141-160 mg/dl)16 (%) | 8.9 | 9.4 | — | IIPS fact sheet |
| 79 | Blood sugar level - very high (>160 mg/dl)16 (%) | 7.7 | 12.1 | — | IIPS fact sheet |
| 80 | Blood sugar level - high or very high (>140 mg/dl) or taking medicine to control blood | 17.5 | 22.7 | — | IIPS fact sheet |
| 81 | Blood sugar level - high (141-160 mg/dl)16 (%) | 10.8 | 11.3 | — | IIPS fact sheet |
| 82 | Blood sugar level - very high (>160 mg/dl)16 (%) | 9.5 | 14.3 | — | IIPS fact sheet |
| 83 | Blood sugar level - high or very high (>140 mg/dl) or taking medicine to control blood | 21.3 | 26.8 | — | IIPS fact sheet |
| 84 | Mildly elevated blood pressure (Systolic 140-159 mm of Hg and/or | 11.5 | 11.4 | — | IIPS fact sheet |
| 85 | Women aged 15+ with moderately or severely elevated blood pressure, % | 5.3 | 5.2 | — | IIPS fact sheet |
| 86 | Women aged 15+ with elevated blood pressure or taking medicine for it, % | 20.5 | 24.3 | — | IIPS fact sheet |
| 87 | Mildly elevated blood pressure (Systolic 140-159 mm of Hg and/or | 13.0 | 13.2 | — | IIPS fact sheet |
| 88 | Men aged 15+ with moderately or severely elevated blood pressure, % | 4.2 | 3.5 | — | IIPS fact sheet |
| 89 | Men aged 15+ with elevated blood pressure or taking medicine for it, % | 20.1 | 24.9 | — | IIPS fact sheet |
| 90 | Currently married women who usually participate in three household decisions 17 (%) | 88.9 | 89.0 | — | IIPS fact sheet |
| 91 | Women who worked in the last 12 months and were paid in cash (%) | 20.2 | 27.5 | — | IIPS fact sheet |
| 92 | Women having a bank or savings account that they themselves use (%) | 76.5 | 95.3 | — | IIPS fact sheet |
| 93 | Women having a mobile phone that they themselves use (%) | 50.1 | 65.1 | — | IIPS fact sheet |
| 94 | Women age 15-24 years who use hygienic methods of protection during their menstrual | 83.4 | 88.8 | — | IIPS fact sheet |
| 95 | Ever-married women age 18-49 years who have ever experienced spousal violence 19 (%) | 26.9 | 19.0 | — | IIPS fact sheet |
| 96 | Ever-married women age 18-49 years who have experienced physical violence during any | 3.5 | 2.3 | — | IIPS fact sheet |
| 97 | Young women age 18-29 years who experienced sexual violence by age 18 (%) | 2.2 | 1.3 | — | IIPS fact sheet |
| 98 | Women age 15 years and above who use any kind of tobacco (%) | 10.8 | 11.2 | — | IIPS fact sheet |
| 99 | Men age 15 years and above who use any kind of tobacco (%) | 48.1 | 46.2 | — | IIPS fact sheet |
| 100 | Women age 15 years and above who consume alcohol (%) | 1.1 | 0.8 | — | IIPS fact sheet |
| 101 | Men age 15 years and above who consume alcohol (%) | 18.0 | 16.0 | — | IIPS fact sheet |
