import {geoMercator, geoPath} from 'd3-geo';
import type {FeatureCollection, Geometry} from 'geojson';

export type MapData = FeatureCollection<Geometry, {NAME_1?: string; name?: string; st_nm?: string; shapeName?: string}>;
export const mapName = (feature: MapData['features'][number]) => {
  const original = feature.properties.NAME_1 || feature.properties.name || feature.properties.st_nm || feature.properties.shapeName || '';
  return ({Orissa: 'Odisha', Uttaranchal: 'Uttarakhand', 'NCT of Delhi': 'Delhi'} as Record<string, string>)[original]
    || original.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
};

export async function loadStateMap(): Promise<MapData> {
  const response = await fetch('/maps/states.geojson');
  if (!response.ok) throw new Error('State map unavailable');
  return response.json();
}

export const mapPath = (map: MapData) => geoPath(geoMercator().fitExtent([[12, 8], [488, 370]], map));
export const highlightColor = '#393991';
export const contextColor = '#dce1ef';
