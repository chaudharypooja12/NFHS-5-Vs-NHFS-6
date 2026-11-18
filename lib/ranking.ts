import type {Indicator, Observation} from './model';

export type RankBasis = '5' | '6' | 'change';
export type RankingRow = {
  key: string;
  five?: Observation;
  six?: Observation;
  change?: number;
};

export function rankingValue(row: RankingRow, basis: RankBasis) {
  if (basis === 'change') return row.change;
  const observation = basis === '5' ? row.five : row.six;
  return observation?.flag === 'published' ? observation.value ?? undefined : undefined;
}

export function stateRanks(rows: RankingRow[], basis: RankBasis, indicator: Indicator) {
  const eligible = rows.filter(row => rankingValue(row, basis) != null);
  const direction = indicator.direction === 'lower' ? 1 : -1;
  eligible.sort((a, b) => direction * (rankingValue(a, basis)! - rankingValue(b, basis)!));
  const ranks = new Map<string, number>();
  let rank = 0;
  eligible.forEach((row, index) => {
    if (index === 0 || rankingValue(row, basis) !== rankingValue(eligible[index - 1], basis)) rank = index + 1;
    ranks.set(row.key, rank);
  });
  return ranks;
}
