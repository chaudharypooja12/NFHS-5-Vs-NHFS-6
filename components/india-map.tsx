'use client';
import HeadingIcon from './heading-icon';

import {useEffect,useState} from 'react';
import {geoMercator,geoPath} from 'd3-geo';
import type {FeatureCollection,Geometry} from 'geojson';

import {states,indicators,values,format,type Dataset} from '../lib/model';

type MapData=FeatureCollection<Geometry,{NAME_1?:string;name?:string;st_nm?:string;shapeName?:string}>;
const mapWidth=370;
const mapHeight=378;
const mapPadding=8;
export default function IndiaMap(){
  const [map,setMap]=useState<MapData>(),[data,setData]=useState<Dataset[]>([]),[hover,setHover]=useState(''),[id,setId]=useState('institutional-births'),[error,setError]=useState(false);
  const indicator=indicators.find(item=>item.id===id)!;
  useEffect(()=>{
    Promise.all([fetch('/maps/states.geojson').then(r=>{if(!r.ok)throw Error();return r.json()}),Promise.all(states.map(s=>fetch('/data/'+s.slug+'.json').then(r=>r.json())))])
    .then(([mapData,rows])=>{setMap(mapData);setData(rows)}).catch(()=>setError(true));
  },[]);
  const lookup=new Map(data.map(place=>[place.name,values(place,indicator).six?.value]));
  const available=Array.from(lookup.values()).filter((v):v is number=>v!=null);
  const min=Math.min(...available),max=Math.max(...available);
  const endpoint=(value:number)=>format(value,indicator.unit)+(indicator.unit==='%'?'':' '+indicator.unit);
  const colors=['#ded9ff','#bfb4fb','#9583ef','#765ee4','#5034bc'];
  const name=(feature:MapData['features'][number])=>{
    const original=feature.properties.NAME_1 || feature.properties.name || feature.properties.st_nm || feature.properties.shapeName || '';
    return ({Orissa:'Odisha',Uttaranchal:'Uttarakhand','NCT of Delhi':'Delhi'} as Record<string,string>)[original] || original.normalize('NFD').replace(/[\u0300-\u036f]/g,'');
  };
  const path=map?geoPath(geoMercator().fitExtent([[mapPadding,mapPadding],[mapWidth-mapPadding,mapHeight-mapPadding]],map)):null;
  return <div className="map-wrap">
    <label className="control">Map indicator<select value={id} onChange={e=>setId(e.target.value)}>{indicators.filter(item=>item.reviewed&&item.six).map(item=><option key={item.id} value={item.id}>{item.name}</option>)}</select></label>
    <div className="map-instruction">
      <h3><HeadingIcon name="mapSelection"/> Select a State on the Map</h3>
      <p>Click any state to view its detailed indicators.</p>
    </div>
    {error?<p role="status">Map unavailable. Use the State search.</p>:!map?<p role="status">Loading State map…</p>:<svg className="india-map" viewBox={`0 0 ${mapWidth} ${mapHeight}`} aria-label="Interactive India State map">
    {map.features.map((feature,index)=>{
      const title=name(feature),state=states.find(s=>s.name.toLowerCase()===title.toLowerCase()),value=state?lookup.get(state.name):undefined;
      const color=!state?'#e2e6ef':value==null?'#cdd0dc':colors[Math.min(4,Math.floor((max===min ? 0.5 :(value-min)/(max-min))*5))];
      const shape=<path d={path?.(feature)||''} fill={color} stroke="#fcfcff" strokeWidth=".8"/>;
      return state?<a key={state.slug} href={'/states/'+state.slug+'/'} aria-label={state.name} onFocus={()=>setHover(state.name)} onBlur={()=>setHover('')} onMouseEnter={()=>setHover(state.name)} onMouseLeave={()=>setHover('')}><title>{state.name}{value==null?' · unavailable':' · '+value}</title>{shape}</a>:<g key={index}>{shape}</g>;
    })}</svg>}
    <div className="map-legend" aria-label="Map legend">
      <span>Lower{available.length>0&&' · '+endpoint(min)}</span>
      {colors.map(c=><i key={c} style={{background:c}}/>)}
      <span>Higher{available.length>0&&' · '+endpoint(max)}</span>
      <i style={{background:'#cdd0dc'}}/><span>Unavailable</span>
    </div>
    <p className="map-caption">{hover?hover+' · '+(lookup.get(hover)??'Data Not Available'):'NFHS-6 published State totals'}</p>
  </div>;
}
