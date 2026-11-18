import metadata from '../data/nfhs6-fact-sheet.json';
import sampleCounts from '../data/nfhs6-state-samples.json';
import {indicators, sources, values, sourceLink, type Dataset, type Indicator, type Observation} from './model';

const labels: Record<number, string> = metadata.labels;
const sections = [
  [11, 'Population and Household Profile'],
  [15, 'Characteristics of Adults (age 15–49 years)'],
  [19, 'Marriage and Fertility'],
  [24, 'Current Use of Family Planning Methods'],
  [27, 'Unmet Need for Family Planning'],
  [34, 'Antenatal Care'],
  [40, 'Delivery Care'],
  [43, 'Postnatal Care'],
  [56, 'Child Vaccinations and Vitamin A Supplementation'],
  [60, 'Treatment of Childhood Diseases'],
  [73, 'Child Feeding Practices and Nutritional Status of Children'],
  [77, 'Nutritional Status of Adults'],
  [80, 'Blood Sugar Level among Adults · Women'],
  [83, 'Blood Sugar Level among Adults · Men'],
  [86, 'Hypertension among Adults · Women'],
  [89, 'Hypertension among Adults · Men'],
  [94, 'Women’s Empowerment'],
  [97, 'Gender Based Violence'],
  [101, 'Tobacco Use and Alcohol Consumption among Adults'],
] as const;

export const factSheetIndicators = indicators.map(item => ({
  ...item,
  name: item.six ? labels[item.six] || item.name : item.name,
  category: item.six ? sections.find(([end]) => item.six! <= end)![1] :
    item.five && item.five >= 92 && item.five <= 98 ? 'Anaemia' : item.category,
  unit: item.six && item.six !== 18 ? '%' : item.unit,
})).sort((a, b) => (a.six ?? 1000) - (b.six ?? 1000) || (a.five ?? 0) - (b.five ?? 0));

export const surveyNotes = Object.entries(metadata.notes);
export const coverageNote = 'NFHS-6 results are provisional. Historical NFHS-5 totals printed in NFHS-6 are identified separately. Changes require a reviewed mapping, agreeing historical totals and published estimates in both rounds. A change is descriptive and does not establish statistical significance.';
export const sampleLabels = ['Households', 'Women', 'Men'] as const;
export function stateSample(slug: string) {
  const sample = (sampleCounts as Record<string, number[]>)[slug];
  if (!sample) return undefined;
  const [households, women, men, page] = sample;
  return {counts: [households, women, men], page, source: sources['6'] + '#page=' + page};
}
export const manipurNotice = 'NFHS-6 fieldwork excluded Manipur. Its published NFHS-5 results are available.';

export function stateValues(data: Dataset | undefined, indicator: Indicator) {
  const row = values(data, indicator);
  const historical = !indicator.five && row.six?.baselineFlag
    ? {...row.six, flag: row.six.baselineFlag, value: row.six.baseline ?? null}
    : undefined;
  return {...row, five: row.five ?? historical, historical: Boolean(historical)};
}

export const factSheetRows = (data: Dataset) => factSheetIndicators.map(indicator => ({
  indicator,
  ...stateValues(data, indicator),
}));
export type FactSheetRow = ReturnType<typeof factSheetRows>[number];

export function observationStatus(observation?: Observation, historical = false) {
  return (observation?.flag ?? 'unavailable') + (historical ? ' (NFHS-5 total printed in NFHS-6)' : '');
}

export function rowSources(row: FactSheetRow) {
  return ([['NFHS-6', row.six], [row.historical ? 'NFHS-5 historical total' : 'NFHS-5', row.five]] as const)
    .flatMap(([label, observation]) => observation
      ? [{label, url: sourceLink(observation), page: observation.page, number: label === 'NFHS-5' ? row.indicator.five : row.indicator.six}]
      : []);
}

export async function loadStateDataset(slug: string): Promise<Dataset> {
  const response = await fetch('/data/' + slug + '.json');
  if (!response.ok) throw new Error('State dataset unavailable');
  return response.json();
}
