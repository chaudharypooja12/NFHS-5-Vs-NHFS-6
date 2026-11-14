'use client';
import {useEffect,useMemo,useState} from 'react';
import Link from 'next/link';
import {Download,Search} from 'lucide-react';
import SurveyChart from './charts';
import {indicators,states,values,format,changeText,sourceLink,type Dataset,type Indicator,type Place,type Observation} from '../lib/model';

const categories=[...new Set(indicators.map(item=>item.category))];
const allPlaces=[{name:'India',slug:'india'},...states];
type Mode='national'|'state'|'compare'|'rankings'|'indicators'|'indicator';
const defaultId='institutional-births';
function status(a:Observation|undefined,b:Observation|undefined,change:number|undefined,item:Indicator) {
  if(!item.reviewed)return 'Mapping pending';
  if(a?.value==null||b?.value==null)return 'Data Not Available';
  if(change==null)return 'Baseline or sample review';
  return 'Comparable';
}
function Cell({value,unit}:{value?:Observation;unit:string}){
  if(!value)return <span className="muted">Data Not Available</span>;
  return <><a title={value.label} href={sourceLink(value)} target="_blank" rel="noreferrer">{format(value.value,unit)}</a>{value.flag!=='published'&&<small className="flag">{value.flag}</small>}</>;
}

export default function Explorer({mode,place,initialId}:{mode:Mode;place?:Place;initialId?:string}){
  const [id,setId]=useState(initialId||defaultId),[category,setCategory]=useState(''),[query,setQuery]=useState('');
  const [selected,setSelected]=useState(['kerala','tamil-nadu','uttar-pradesh']),[sort,setSort]=useState('name');
  const [round,setRound]=useState('6'),[availability,setAvailability]=useState(''),[direction,setDirection]=useState(''),[mapping,setMapping]=useState('');
  const [datasets,setDatasets]=useState<Record<string,Dataset>>({}),[error,setError]=useState(false);
  const visible=useMemo(()=>indicators.filter(i=>(!category||i.category===category)&&i.name.toLowerCase().includes(query.toLowerCase())&&(!mapping||i.reviewed===(mapping==='reviewed'))),[category,query,mapping]);
  const indicator=visible.find(i=>i.id===id)||visible[0];
  const keys=useMemo(()=>place?[place.slug]:mode==='compare'?selected:mode==='rankings'||mode==='indicator'?states.map(s=>s.slug):[],[mode,place,selected]);
  useEffect(()=>{
    let active=true;
    const needed=keys.filter(key=>!datasets[key]);
    if(needed.length===0)return;
    Promise.all(needed.map(async key=>{const res=await fetch('/data/'+key+'.json');if(!res.ok)throw Error();return [key,await res.json()] as const;}))
      .then(entries=>{if(active){setDatasets(old=>({...old,...Object.fromEntries(entries)}));setError(false);}})
      .catch(()=>{if(active)setError(true);});
    return ()=>{active=false;};
  },[keys,datasets]);
  const filters=<div className="filters">
    <label className="control">Category<select value={category} onChange={e=>setCategory(e.target.value)}><option value="">All categories</option>{categories.map(c=><option key={c}>{c}</option>)}</select></label>
    <label className="control">Search indicators<div className="search"><Search size={16}/><input type="search" value={query} onChange={e=>setQuery(e.target.value)} placeholder="Search by name"/></div></label>
    <label className="control">Comparison status<select value={mapping} onChange={e=>setMapping(e.target.value)}><option value="">All statuses</option><option value="reviewed">Reviewed mapping</option><option value="pending">Mapping pending</option></select></label>
  </div>;
  if(mode==='indicators')return <section className="panel">{filters}<p role="status" className="muted">{visible.length} indicators</p><div className="table-wrap"><table><thead><tr><th>Indicator</th><th>Category</th><th>Unit</th><th>Survey rounds</th><th>Comparison status</th></tr></thead><tbody>{visible.map(item=><tr key={item.id}><th scope="row"><Link href={'/indicators/'+item.id+'/'}>{item.name}</Link></th><td>{item.category}</td><td>{item.unit}</td><td>{[item.five&&'NFHS-5',item.six&&'NFHS-6'].filter(Boolean).join(' · ')}</td><td>{item.reviewed?'Reviewed':'Mapping pending'}</td></tr>)}</tbody></table></div></section>;
  const rows=indicator?keys.map(key=>({key,name:allPlaces.find(p=>p.slug===key)!.name,...values(datasets[key],indicator)}))
    .filter(row=>!availability||(availability==='both'?row.five?.value!=null&&row.six?.value!=null:row.five?.value==null||row.six?.value==null))
    .filter(row=>!direction||(row.change!=null&&(direction==='equal'?row.change===0:direction==='increase'?row.change>0:row.change<0))) : [];
  const score=(row:typeof rows[number])=>round==='change'?row.change:(round==='5'?row.five:row.six)?.flag==='published'?(round==='5'?row.five:row.six)?.value??undefined:undefined;
  const rank=mode==='rankings';
  const ranking=rows.filter(row=>score(row)!=null).sort((a,b)=>{
    const asc=sort==='asc'||(sort==='name'&&indicator?.direction==='lower');
    return (score(a)!-score(b)!)*(asc?1:-1)||a.name.localeCompare(b.name);
  });
  const sorted=rank?ranking:rows.sort((a,b)=>{
    if(sort==='change')return (b.change??-Infinity)-(a.change??-Infinity)||a.name.localeCompare(b.name);
    if(sort==='5'||sort==='6'){const field=sort==='5'?'five':'six';return (b[field]?.value??-Infinity)-(a[field]?.value??-Infinity)||a.name.localeCompare(b.name);}
    return a.name.localeCompare(b.name);
  });
  const ready=keys.every(key=>datasets[key]);
  function download(){
    if(!indicator)return;
    const fields=['State','Indicator ID','Indicator name','Category','NFHS-5 value','NFHS-6 value','Unit','Absolute change','Comparison status','Source reference'];
    const data=sorted.map(row=>[row.name,indicator.id,indicator.name,indicator.category,row.five?.value,row.six?.value,indicator.unit,row.change,status(row.five,row.six,row.change,indicator),[row.five,row.six].filter(Boolean).map(v=>sourceLink(v!)).join(' | ')]);
    const csv=[fields,...data].map(line=>line.map(value=>'"'+String(value??'').replaceAll('"','""')+'"').join(',')).join('\r\n');
    const url=URL.createObjectURL(new Blob([csv],{type:'text/csv;charset=utf-8'}));
    const link=document.createElement('a');link.href=url;link.download='nfhs-'+indicator.id+'.csv';link.click();setTimeout(()=>URL.revokeObjectURL(url),1000);
  }
  return <>
    {mode==='compare'&&<section className="panel"><h2>Choose States</h2><div className="check-grid">{states.map(s=><label key={s.slug}><input type="checkbox" checked={selected.includes(s.slug)} onChange={e=>setSelected(e.target.checked?[...selected,s.slug]:selected.filter(key=>key!==s.slug))}/>{s.name}</label>)}</div></section>}
    <section className="panel explorer">
    {mode!=='indicator'&&filters}
    {mode!=='indicator'&&<label className="control select-main">Indicator<select value={indicator?.id||''} onChange={e=>setId(e.target.value)} disabled={!visible.length}>{!visible.length&&<option value="">No indicators match</option>}{visible.map(i=><option key={i.id} value={i.id}>{i.name}</option>)}</select></label>}
    {indicator&&<>
      <div className="controls-row">
      {rank&&<label className="control">Rank by<select value={round} onChange={e=>setRound(e.target.value)}><option value="6">NFHS-6 value</option><option value="5">NFHS-5 value</option><option value="change">Absolute change</option></select></label>}
      {keys.length>1&&<label className="control">Sort<select value={sort} onChange={e=>setSort(e.target.value)}><option value="name">{rank?'Default order':'State name'}</option>{rank?<><option value="asc">Lowest first</option><option value="desc">Highest first</option></>:<><option value="5">NFHS-5 value</option><option value="6">NFHS-6 value</option><option value="change">Absolute change</option></>}</select></label>}
      <label className="control">Data availability<select value={availability} onChange={e=>setAvailability(e.target.value)}><option value="">All values</option><option value="both">Both rounds</option><option value="missing">Missing a round</option></select></label>
      <label className="control">Observed change<select value={direction} onChange={e=>setDirection(e.target.value)}><option value="">All changes</option><option value="increase">Increased</option><option value="decrease">Decreased</option><option value="equal">Unchanged</option></select></label>
      </div>
      <div className="section-title"><div><h2>{indicator.name}</h2><p className="muted">{indicator.category} · {indicator.unit} · {indicator.reviewed?'Reviewed mapping':'Mapping pending'}</p></div><button className="button secondary" onClick={download} disabled={!ready||!sorted.length}><Download size={16}/> CSV</button></div>
      {!indicator.reviewed&&<p className="notice">This measure is listed under its source survey round while the cross-round mapping is reviewed.</p>}
      {place?.slug==='manipur'&&<p className="notice">NFHS-6 data is unavailable for Manipur. Published NFHS-5 results are available below.</p>}
      {error?<p role="alert">Could not load survey data.</p>:!ready?<p role="status">Loading survey data…</p>:!sorted.length?<p role="status">No eligible observations for this selection.</p>:<>
        {rank&&<p className="muted">{sorted.length} States included. {indicator.direction==='context'?'Numeric ordering.':indicator.direction==='lower'?'Lower values are generally favorable.':'Higher values are generally favorable.'}</p>}
        {place&&sorted[0]&&<div className="metrics">{[['NFHS-5',format(sorted[0].five?.value,indicator.unit)],['NFHS-6',format(sorted[0].six?.value,indicator.unit)],['Observed change',changeText(sorted[0].change,indicator.unit)]].map(([label,value])=><div key={label}><span>{label}</span><strong>{value}</strong></div>)}</div>}
        {mode!=='indicator'&&<SurveyChart rank={rank} rows={sorted.slice(0,rank?12:8).map(row=>({name:row.name,five:row.five?.value,six:row.six?.value,score:score(row)}))}/>}
        {sorted.length>(rank?12:8)&&mode!=='indicator'&&<p className="muted">The chart shows the first {rank?12:8} States. The table includes all results.</p>}
        <div className="table-wrap"><table><thead><tr>{rank&&<th>Rank</th>}<th>Geography</th><th>NFHS-5</th><th>NFHS-6</th><th>Change</th><th>Status</th></tr></thead><tbody>{sorted.map((row,index)=><tr key={row.key}>{rank&&<td>{ranking.findIndex(item=>score(item)===score(row))+1}</td>}<th scope="row">{row.key==='india'?row.name:<Link href={'/states/'+row.key+'/'}>{row.name}</Link>}</th><td><Cell value={row.five} unit={indicator.unit}/></td><td><Cell value={row.six} unit={indicator.unit}/></td><td>{changeText(row.change,indicator.unit)}</td><td>{status(row.five,row.six,row.change,indicator)}</td></tr>)}</tbody></table></div>
      </>}
      {place&&mode==='state'&&ready&&<details className="all-values"><summary>All published indicators for {place.name}</summary><div className="table-wrap"><table><thead><tr><th>Indicator</th><th>NFHS-5</th><th>NFHS-6</th><th>Change</th></tr></thead><tbody>{visible.map(item=>{const row=values(datasets[place.slug],item);return <tr key={item.id}><th scope="row"><Link href={'/indicators/'+item.id+'/'}>{item.name}</Link></th><td><Cell value={row.five} unit={item.unit}/></td><td><Cell value={row.six} unit={item.unit}/></td><td>{changeText(row.change,item.unit)}</td></tr>})}</tbody></table></div></details>}
    </>}
    </section>
  </>;
}
