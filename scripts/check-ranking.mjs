import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import ts from 'typescript';

const compiled = ts.transpileModule(readFileSync('lib/ranking.ts', 'utf8'), {
  compilerOptions: {module: ts.ModuleKind.ESNext},
}).outputText;
const {stateRanks, rankingValue} = await import('data:text/javascript;base64,' + Buffer.from(compiled).toString('base64'));
const published = value => ({value, flag: 'published'});
const rows = [
  {key: 'zero', five: published(1), six: published(0), change: -1},
  {key: 'tie-a', five: published(2), six: published(3), change: 1},
  {key: 'tie-b', five: published(2), six: published(3), change: 1},
  {key: 'missing', five: published(0), six: published(null)},
  {key: 'small-sample', six: {value: 100, flag: 'small sample'}},
];
const ranks = direction => stateRanks(rows, '6', {direction});
assert.deepEqual([...ranks('higher')], [['tie-a', 1], ['tie-b', 1], ['zero', 3]]);
assert.deepEqual([...ranks('lower')], [['zero', 1], ['tie-a', 2], ['tie-b', 2]]);
assert.equal(rankingValue(rows[0], '6'), 0);
assert.equal(rankingValue(rows[3], '6'), undefined);
assert.equal(rankingValue(rows[4], '6'), undefined);
assert.equal(stateRanks(rows, '5', {direction: 'higher'}).get('missing'), 4);
assert.equal(stateRanks(rows, 'change', {direction: 'lower'}).get('zero'), 1);
assert.equal(stateRanks(rows, 'change', {direction: 'higher'}).get('tie-b'), 1);
assert.deepEqual([...ranks('context')], [...ranks('higher')]);
assert.equal(stateRanks([], '6', {direction: 'higher'}).size, 0);

const catalog = JSON.parse(readFileSync('data/catalog.json', 'utf8'));
const indicator = catalog.indicators.find(item => item.id === 'child-stunting');
const observations = catalog.places.filter(place => place.slug !== 'india').map(place => {
  const dataset = JSON.parse(readFileSync('public/data/' + place.slug + '.json', 'utf8'));
  return {key: place.slug, five: dataset.rows[5][indicator.five], six: dataset.rows[6][indicator.six], change: dataset.changes[indicator.six]};
});
const actualRanks = stateRanks(observations, '6', indicator);
const minimum = Math.min(...observations.map(row => rankingValue(row, '6')).filter(value => value != null));
for (const row of observations.filter(row => rankingValue(row, '6') === minimum)) assert.equal(actualRanks.get(row.key), 1);
assert.equal(actualRanks.has('manipur'), false);
console.log('Verified direction, ties, zero, missing and small-sample values, both rounds, changes, and real State data.');
