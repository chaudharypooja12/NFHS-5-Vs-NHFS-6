'use client';
import {useEffect,useState} from 'react';
import HeadingIcon from './heading-icon';
import {states,indicators,values,format,type Dataset} from '../lib/model';
import {contextColor,highlightColor,loadStateMap,mapName,mapPath,type MapData} from '../lib/state-map';

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
  const width=selectedState?500:370;
  const path=map?mapPath(map,width):null;
  return <div className="map-wrap">
    {!selectedState&&<label className="control">Map indicator<select value={id} onChange={e=>setId(e.target.value)}>{indicators.filter(item=>item.reviewed&&item.six).map(item=><option key={item.id} value={item.id}>{item.name}</option>)}</select></label>}
    {!selectedState&&<div className="map-instruction"><h3><HeadingIcon name="mapSelection"/> Select a State on the Map</h3><p>Click any state to view its detailed indicators.</p></div>}
    {error?<p role="status">Map unavailable. Use All States.</p>:!map?<p role="status">Loading State map…</p>:<svg className="india-map" viewBox={`0 0 ${width} 378`} aria-label={selectedState?selectedState+' highlighted on the India State map':'Interactive India State map'}>
    {map.features.map((feature,index)=>{
      const title=mapName(feature),state=states.find(s=>s.name.toLowerCase()===title.toLowerCase()),value=state?lookup.get(state.name):undefined;
      const color=selectedState?(state?.name===selectedState?highlightColor:contextColor):!state?'#e2e6ef':value==null?'#cdd0dc':colors[Math.min(4,Math.floor((max===min ? 0.5 :(value-min)/(max-min))*5))];
      const shape=<path d={path?.(feature)||''} fill={color} stroke="#fcfcff" strokeWidth=".8"/>;
      return state?<a key={state.slug} href={'/states/'+state.slug+'/'} aria-current={state.name===selectedState?'page':undefined} aria-label={state.name} onFocus={()=>setHover(state.name)} onBlur={()=>setHover('')} onMouseEnter={()=>setHover(state.name)} onMouseLeave={()=>setHover('')}><title>{state.name}{selectedState?'':value==null?' · unavailable':' · '+value}</title>{shape}</a>:<g key={index}>{shape}</g>;
    })}</svg>}
    {!selectedState&&<div className="map-legend" aria-label="Map legend"><span>Lower{available.length>0&&' · '+endpoint(min)}</span>{colors.map(c=><i key={c} style={{background:c}}/>)}<span>Higher{available.length>0&&' · '+endpoint(max)}</span><i style={{background:'#cdd0dc'}}/><span>Unavailable</span></div>}
    <p className="map-caption">{selectedState?hover||selectedState:hover?hover+' · '+(lookup.get(hover)??'Data Not Available'):'NFHS-6 published State totals'}</p>
  </div>;
}
