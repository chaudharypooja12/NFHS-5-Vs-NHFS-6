import catalog from '../data/catalog.json';
export const {indicators, sources} = catalog;
export const states = catalog.places.filter(place => place.slug !== 'india');
export type Indicator = typeof indicators[number];
export type Place = typeof states[number];
export type Observation = {value:number|null;flag:string;page:number|null;sourceId:keyof typeof sources;label:string;baseline?:number|null};
export type Dataset = Place & {rows:Record<5|6, Record<number,Observation>>;changes:Record<number,number>};
export function values(data:Dataset|undefined, indicator:Indicator) {
  return {
    five: indicator.five ? data?.rows[5][indicator.five] : undefined,
    six: indicator.six ? data?.rows[6][indicator.six] : undefined,
    change: indicator.six ? data?.changes[indicator.six] : undefined,
  };
}
export function format(value:number|null|undefined,unit:string) {
  return value == null ? '—' : value.toLocaleString('en-IN',{maximumFractionDigits:3}) + (unit==='%'?'%':'');
}
export function changeText(value:number|undefined,unit:string) {
  return value == null ? '—' : (value>0?'+':'') + value + (unit==='%'?' pp':' '+unit);
}
export function sourceLink(value:Observation) {
  return sources[value.sourceId] + (value.page ? '#page='+value.page : '');
}
