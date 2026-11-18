import assert from 'node:assert/strict';
import {readFileSync,existsSync} from 'node:fs';
import {geoArea} from 'd3-geo';
const json=file=>JSON.parse(readFileSync(file,'utf8'));
const {places,indicators}=json('data/catalog.json');
const states=places.filter(p=>p.slug!=='india');
const features=json('public/maps/states.geojson').features;
const sampleCounts=json('data/nfhs6-state-samples.json');
const factSheet=json('data/nfhs6-fact-sheet.json');
const normal=s=>s.normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase();
const names=features.map(f=>normal(f.properties.shapeName));
assert.equal(states.length,28);
assert.equal(new Set(indicators.map(i=>i.id)).size,indicators.length);
assert.equal(Object.keys(sampleCounts).length,27);
assert.equal(Object.keys(factSheet.labels).length,101);
for(const state of states) {
  assert(names.includes(normal(state.name)),state.name+' absent from map');
  assert(existsSync('out/states/'+state.slug+'/index.html'),state.slug);
  const {rows}=json('out/data/'+state.slug+'.json');
  assert.equal(Object.keys(rows[5]).length,131);
  if(state.slug==='manipur'){
    assert.equal(sampleCounts[state.slug],undefined);
  }else{
    const [households,women,men,page]=sampleCounts[state.slug];
    assert([households,women,men].every(count=>Number.isInteger(count)&&count>0),state.name);
    assert([179,180].includes(page),state.name);
    assert.equal(Object.keys(rows[6]).length,101);
    assert(Object.values(rows[6]).every(row=>['published','small sample','suppressed','unavailable'].includes(row.baselineFlag)),state.name);
  }
}
for(const indicator of indicators) assert(existsSync('out/indicators/'+indicator.id+'/index.html'),indicator.id);
for(const route of ['dashboard','states','compare','rankings','indicators','methodology','sources','reports'])assert(existsSync('out/'+route+'/index.html'),route);
assert.equal(Object.keys(json('out/data/manipur.json').rows[6]).length,0);
assert(geoArea({type:'FeatureCollection',features})<1, 'Map winding or geometry is invalid');
console.log('Verified 28 State routes and map shapes, '+indicators.length+' indicator routes, and all dashboard menus.');
