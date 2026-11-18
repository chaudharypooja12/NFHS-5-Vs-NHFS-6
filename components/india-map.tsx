'use client';
import {useEffect,useState} from 'react';
import HeadingIcon from './heading-icon';
import StateDirectory from './state-directory';
import {states,indicators,values,format,type Dataset} from '../lib/model';
import {contextColor,highlightColor,loadStateMap,mapName,mapPath,type MapData} from '../lib/state-map';

const labelPositions: Record<string, [number, number]> = {
  'Himachal Pradesh':[237,73], Punjab:[140,81], Haryana:[147,105], Uttarakhand:[252,98],
  Sikkim:[310,111], 'West Bengal':[316,218], Jharkhand:[277,181], Odisha:[272,224],
  'Arunachal Pradesh':[410,105], Assam:[361,137], Meghalaya:[333,167],
  Nagaland:[421,145], Manipur:[416,164], Mizoram:[397,191], Tripura:[340,199],
  Goa:[126,271], Kerala:[158,347], 'Andhra Pradesh':[245,278], Chhattisgarh:[241,204],
};

export default function IndiaMap({selectedState}:{selectedState?:string}={}){
  const [map,setMap]=useState<MapData>(),[data,setData]=useState<Dataset[]>([]),[hover,setHover]=useState(''),[id,setId]=useState('institutional-births'),[error,setError]=useState(false);
  const indicator=indicators.find(item=>item.id===id)!;
  useEffect(()=>{
    Promise.all([loadStateMap(),selectedState?Promise.resolve([]):Promise.all(states.map(s=>fetch('/data/'+s.slug+'.json').then(r=>r.json())))])
    .then(([mapData,rows])=>{setMap(mapData);setData(rows)}).catch(()=>setError(true));
  },[selectedState]);
  const lookup=new Map(data.map(place=>[place.name,values(place,indicator).six?.value]));
  const available=Array.from(lookup.values()).filter((v):v is number=>v!=null);
  const min=Math.min(...available),max=Math.max(...available);
  const endpoint=(value:number)=>format(value,indicator.unit)+(indicator.unit==='%'?'':' '+indicator.unit);
  const colors=['#ded9ff','#bfb4fb','#9583ef','#765ee4','#5034bc'];
  const width=500;
  const path=map?mapPath(map,width):null;
  return <div className="map-wrap">
    {!selectedState&&<div className="map-controls"><label className="control">Map indicator<select value={id} onChange={e=>setId(e.target.value)}>{indicators.filter(item=>item.reviewed&&item.six).map(item=><option key={item.id} value={item.id}>{item.name}</option>)}</select></label><StateDirectory/></div>}
    {!selectedState&&<div className="map-instruction"><h3><HeadingIcon name="mapSelection"/> Select a State on the Map</h3><p>Click any state to view its detailed indicators.</p></div>}
    {error?<p role="status">Map unavailable. Use All States.</p>:!map?<p role="status">Loading State map…</p>:<svg className="india-map" viewBox={`0 0 ${width} 378`} aria-label={selectedState?selectedState+' highlighted on the India State map':'Interactive India State map'}>
    {map.features.map((feature,index)=>{
      const title=mapName(feature),state=states.find(s=>s.name.toLowerCase()===title.toLowerCase()),value=state?lookup.get(state.name):undefined;
      const color=selectedState?(state?.name===selectedState?highlightColor:contextColor):!state?'#e2e6ef':value==null?'#cdd0dc':colors[Math.min(4,Math.floor((max===min ? 0.5 :(value-min)/(max-min))*5))];
      const shape=<path d={path?.(feature)||''} fill={color} stroke="#fcfcff" strokeWidth=".8"/>;
      return state?<a key={state.slug} href={'/states/'+state.slug+'/'} aria-current={state.name===selectedState?'page':undefined} aria-label={state.name} onFocus={()=>setHover(state.name)} onBlur={()=>setHover('')} onMouseEnter={()=>setHover(state.name)} onMouseLeave={()=>setHover('')}><title>{state.name}{selectedState?'':value==null?' · unavailable':' · '+value}</title>{shape}</a>:<g key={index}>{shape}</g>;
    })}
    {!selectedState&&<g className="map-state-labels" aria-hidden="true">
      {map.features.map(feature=>{
        const state=states.find(place=>place.name.toLowerCase()===mapName(feature).toLowerCase());
        if(!state||!path)return null;
        const [cx,cy]=path.centroid(feature);
        const position=labelPositions[state.name];
        const [x,y]=position??[cx,cy];
        return <g key={state.slug}>
          {position&&Math.hypot(x-cx,y-cy)>11&&<line x1={cx} y1={cy} x2={x} y2={y}/>}
          <text x={x} y={y} textAnchor="middle" dominantBaseline="central">{state.name}</text>
        </g>;
      })}
    </g>}
    </svg>}
    {!selectedState&&<div className="map-legend" aria-label="Map legend"><span>Lower{available.length>0&&' · '+endpoint(min)}</span>{colors.map(c=><i key={c} style={{background:c}}/>)}<span>Higher{available.length>0&&' · '+endpoint(max)}</span><i style={{background:'#cdd0dc'}}/><span>Unavailable</span></div>}
    <p className="map-caption">{selectedState?hover||selectedState:hover?hover+' · '+(lookup.get(hover)??'Data Not Available'):'NFHS-6 published State totals'}</p>
  </div>;
}
