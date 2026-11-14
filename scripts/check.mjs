import assert from 'node:assert/strict';
import {readFileSync,existsSync} from 'node:fs';
import {geoArea} from 'd3-geo';
const json=file=>JSON.parse(readFileSync(file,'utf8'));
const {places,indicators}=json('data/catalog.json');
const states=places.filter(p=>p.slug!=='india');
const features=json('public/maps/states.geojson').features;
const normal=s=>s.normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase();
const names=features.map(f=>normal(f.properties.shapeName));
assert.equal(states.length,28);
assert.equal(new Set(indicators.map(i=>i.id)).size,indicators.length);
for(const state of states) {
  assert(names.includes(normal(state.name)),state.name+' absent from map');
  assert(existsSync('out/states/'+state.slug+'/index.html'),state.slug);
}
for(const indicator of indicators) assert(existsSync('out/indicators/'+indicator.id+'/index.html'),indicator.id);
for(const route of ['dashboard','states','compare','rankings','indicators','methodology','sources'])assert(existsSync('out/'+route+'/index.html'),route);
assert.equal(Object.keys(json('out/data/manipur.json').rows[6]).length,0);
assert(geoArea({type:'FeatureCollection',features})<1, 'Map winding or geometry is invalid');
console.log('Verified 28 State routes and map shapes, '+indicators.length+' indicator routes, and all dashboard menus.');
