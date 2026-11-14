import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import assert from 'node:assert/strict';

const source = readFileSync('memory-bank/NFHS-DATA.md', 'utf8');
const catalogs = {5: new Map(), 6: new Map()};
const places = [];
const slug = (name) => name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/-$/,'');
const sources = {
  '5-I':'https://nhm.gov.in/uhc-day/Session%202/NFHS-5%20State%20Factsheet%20Compendium_Phase-I%20%281%29.pdf',
  '5-II':'https://dhsprogram.com/pubs/pdf/OF43/NFHS-5_India_and_State_Factsheet_Compendium_Phase-II.pdf',
  '6':'https://www.mohfw-dohfw.gov.in/static/uploads/2026/05/111ff4a13ca36b5cabb7f94aec5bb0ce.pdf',
  '6-IIPS':'https://www.nfhsiips.in/nfhsuser/assets/National%20Family%20Health%20Survey%20%28NFHS-6%29%202023-2024%20Fact%20Sheets.pdf'
};
const mapping = [
 [4,7,'Electricity access','higher'],[9,1,'Female population age 6+ ever attended school','higher'],
 [12,16,'Women with 10 or more years of schooling','higher'],[13,17,'Men with 10 or more years of schooling','higher'],
 [16,20,'Women age 20–24 married before age 18','lower'],[18,22,'Total fertility rate','context'],
 [25,36,'Total unmet need for family planning','lower'],[28,40,'First-trimester antenatal check-up','higher'],
 [30,41,'At least four antenatal care visits','higher'],[35,50,'Institutional births','higher'],
 [37,53,'Births attended by skilled health personnel','higher'],[38,54,'Caesarean births','context'],
 [44,57,'Full vaccination, card or maternal recall','higher'],[45,58,'Full vaccination, card only','higher'],
 [47,59,'BCG vaccination','higher'],[69,81,'Child stunting','lower'],[70,82,'Child wasting','lower'],
 [71,83,'Severe child wasting','lower'],[72,84,'Child underweight','lower'],[73,85,'Child overweight','lower']
];
function group(round, row) {
  const boundaries = round === 5
    ? [13,19,27,39,56,74,85,91,110,118,127,131]
    : [11,15,19,27,43,60,73,77,89,89,97,101];
  return ['Households','Education','Marriage and fertility','Family planning','Maternal and delivery care','Child health','Child nutrition','Adult nutrition','Biomarkers','Healthcare','Women and gender','Tobacco and alcohol'][boundaries.findIndex(end => row <= end)];
}
function observation(raw, page, sourceId) {
  const normalized = raw.replaceAll('\\','').replaceAll(',','');
  const match = normalized.match(/^\(?([0-9]+(?:\.[0-9]+)?)\)?$/);
  return { value: match ? Number(match[1]) : null, flag: match ? (normalized.startsWith('(') ? 'small sample' : 'published') : (normalized.includes('*') ? 'suppressed' : 'unavailable'), page: Number(page) || null, sourceId };
}
let place, round, sourceId;
for (const line of source.split(/\r?\n/)) {
  if (line.startsWith('### ')) {
    const name = line.slice(4);
    place = {name, slug:slug(name), rows:{5:{},6:{}}};
    places.push(place);
  }
  if (!place) continue;
  if (line.startsWith('**NFHS-5**')) {
    round = 5;
    sourceId = line.includes('NFHS5-II') ? '5-II' : '5-I';
  }
  if (line.startsWith('**NFHS-6**')) round = 6;
  if (!/^\| \d+ \|/.test(line)) continue;
  const [id,label,...cells] = line.slice(1,-1).split('|').map(item => item.trim());
  const row = Number(id);
  assert(!place.rows[round][row], 'Duplicate observation');
  const page = round === 5 ? cells[1] : cells[3];
  const obs = observation(cells[round === 5 ? 0 : 1], page, round === 5 ? sourceId : (Number(page) ? '6' : '6-IIPS'));
  place.rows[round][row] = {...obs, label, ...(round === 6 ? {baseline:observation(cells[0],page,obs.sourceId).value} : {})};
  if (!catalogs[round].has(row)) catalogs[round].set(row,label);
}
assert.equal(places.length,29);
assert.equal(new Set(places.map(place => place.slug)).size,29);
for (const item of places) {
  assert.equal(Object.keys(item.rows[5]).length,131,item.name);
  assert.equal(Object.keys(item.rows[6]).length,item.slug === 'manipur' ? 0 : 101,item.name);
}
const indicators = mapping.map(([six,five,name,direction]) => ({id:slug(name),name,direction,five,six,category:group(6,six),unit:six===18?'children per woman':'%',reviewed:true}));
for (const round of [5,6]) {
  for (const [row,label] of catalogs[round]) {
    if (indicators.some(item => item[round===5?'five':'six'] === row)) continue;
    const name = label.replace(/\s+/g,' ');
    indicators.push({id:`nfhs-${round}-${row}`,name,direction:'context',five:round===5?row:null,six:round===6?row:null,category:group(round,row),unit:name.includes('%')?'%':(name.includes('(Rs.)')?'INR':'as published'),reviewed:false});
  }
}
const deltas = Object.fromEntries(places.map(place => [place.slug,Object.fromEntries(mapping.flatMap(([six,five])=>{
  const a=place.rows[5][five],b=place.rows[6][six];
  return a?.flag==='published'&&b?.flag==='published'&&a.value===b.baseline
    ? [[six,Number((b.value-a.value).toFixed(3))]] : [];
}))]));
assert.equal(deltas.india[35],2);
assert.equal(deltas.india[69],-6.2);
assert.equal(deltas.india[30],undefined);
assert.equal(Object.keys(deltas.manipur).length,0);
mkdirSync('data',{recursive:true});
mkdirSync('public/data',{recursive:true});
writeFileSync('data/catalog.json',JSON.stringify({indicators,places:places.map(({name,slug})=>({name,slug})),sources}));
for (const place of places) {
  writeFileSync(`public/data/${place.slug}.json`,JSON.stringify({...place,changes:deltas[place.slug]}));
}
console.log(`Verified ${places.length} geographies and ${indicators.length} catalog entries.`);
