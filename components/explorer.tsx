'use client';
import HeadingIcon, {type HeadingIconName} from './heading-icon';

import {useEffect,useMemo,useState} from 'react';
import Link from 'next/link';
import {ChevronDown,Download,Search} from 'lucide-react';
import SurveyChart from './charts';
import {indicators,states,values,format,changeText,sourceLink,type Dataset,type Indicator,type Place,type Observation} from '../lib/model';
import Cell from './observation-cell';
import {downloadCsv} from '../lib/download';

const categories=[...new Set(indicators.map(item=>item.category))];
const categoryIcons:Record<string,HeadingIconName>={
  Households:'households',
  Education:'education',
  'Marriage and fertility':'marriage',
  'Family planning':'family',
  'Maternal and delivery care':'maternal',
  'Child health':'childHealth',
  'Child nutrition':'childNutrition',
  'Adult nutrition':'adultNutrition',
  Biomarkers:'biomarkers',
  Healthcare:'healthcare',
  'Women and gender':'women',
  'Tobacco and alcohol':'tobacco',
};
const allPlaces=[{name:'India',slug:'india'},...states];
const stateKeys=states.map(state=>state.slug);
type Mode='state'|'indicators'|'indicator';
const defaultId='institutional-births';
function status(a:Observation|undefined,b:Observation|undefined,change:number|undefined,item:Indicator) {
  if(!item.reviewed)return 'Mapping pending';
  if(a?.value==null||b?.value==null)return 'Data Not Available';
  if(change==null)return 'Baseline or sample review';
  return 'Comparable';
}

export default function Explorer({mode,place,initialId}:{mode:Mode;place?:Place;initialId?:string}){
  const [id,setId]=useState(initialId||defaultId),[category,setCategory]=useState(''),[query,setQuery]=useState('');
  const [sort,setSort]=useState('name');
  const [availability,setAvailability]=useState(''),[direction,setDirection]=useState(''),[mapping,setMapping]=useState('');
  const [datasets,setDatasets]=useState<Record<string,Dataset>>({}),[error,setError]=useState(false);
  const [collapsedCategories,setCollapsedCategories]=useState<string[]>([]);
  const visible=useMemo(()=>indicators.filter(i=>(!category||i.category===category)&&i.name.toLowerCase().includes(query.toLowerCase())&&(!mapping||i.reviewed===(mapping==='reviewed'))),[category,query,mapping]);
  const indicator=visible.find(i=>i.id===id)||visible[0];
  const keys=useMemo(()=>{
    if(place)return [place.slug];
    return mode==='indicator'?stateKeys:[];
  },[mode,place]);
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
    {mode!=='state'&&<label className="control">Search indicators<div className="search"><Search size={16}/><input type="search" value={query} onChange={e=>setQuery(e.target.value)} placeholder="Search by name"/></div></label>}
    <label className="control">Comparison status<select value={mapping} onChange={e=>setMapping(e.target.value)}><option value="">All statuses</option><option value="reviewed">Reviewed mapping</option><option value="pending">Mapping pending</option></select></label>
  </div>;
  if(mode==='indicators')return <section className="panel">
    {filters}
    <p role="status" className="muted">{visible.length} indicators</p>
    <div className="indicator-categories">
      {categories.map(categoryName=>{
        const items=visible.filter(item=>item.category===categoryName);
        if(!items.length)return null;
        const total=indicators.filter(item=>item.category===categoryName).length;
        const expanded=!collapsedCategories.includes(categoryName);
        const groupId='indicator-category-'+categoryName.toLowerCase().replaceAll(' ','-');
        return <section className="indicator-category" key={categoryName} aria-labelledby={groupId+'-heading'}>
          <h2 id={groupId+'-heading'}>
            <button className="category-toggle" type="button" aria-expanded={expanded} aria-controls={groupId} onClick={()=>setCollapsedCategories(previous=>expanded?[...previous,categoryName]:previous.filter(name=>name!==categoryName))}>
              <HeadingIcon name={categoryIcons[categoryName]||'indicators'}/>
              <span className="category-name">{categoryName}</span>
              <span className="category-count">{items.length===total?total:items.length+' of '+total} indicators</span>
              <ChevronDown className="category-chevron" size={20} aria-hidden="true"/>
            </button>
          </h2>
          <div id={groupId} hidden={!expanded}>
            <div className="table-wrap">
              <table aria-label={categoryName+' indicators'}>
                <thead><tr><th scope="col">Indicator</th><th scope="col">Category</th><th scope="col">Unit</th><th scope="col">Survey rounds</th><th scope="col">Comparison status</th></tr></thead>
                <tbody>{items.map(item=><tr key={item.id}>
                  <th scope="row"><Link href={'/indicators/'+item.id+'/'}>{item.name}</Link></th>
                  <td>{item.category}</td>
                  <td>{item.unit}</td>
                  <td>{[item.five&&'NFHS-5',item.six&&'NFHS-6'].filter(Boolean).join(' · ')}</td>
                  <td>{item.reviewed?'Reviewed':'Mapping pending'}</td>
                </tr>)}</tbody>
              </table>
            </div>
          </div>
        </section>;
      })}
    </div>
    {!visible.length&&<div className="notice"><p role="status">No matching indicators found.</p><button className="button secondary" onClick={()=>{setCategory('');setQuery('');setMapping('');}}>Reset filters</button></div>}
  </section>;
  const rows=indicator?keys
    .map(key=>({key,name:allPlaces.find(p=>p.slug===key)!.name,...values(datasets[key],indicator)}))
    .filter(row=>!availability||(availability==='both'?row.five?.value!=null&&row.six?.value!=null:row.five?.value==null||row.six?.value==null))
    .filter(row=>!direction||(row.change!=null&&(direction==='equal'?row.change===0:direction==='increase'?row.change>0:row.change<0))) : [];
  const sorted=rows.sort((a,b)=>{
    if(sort==='change')return (b.change??-Infinity)-(a.change??-Infinity)||a.name.localeCompare(b.name);
    if(sort==='5'||sort==='6'||sort==='6-asc'){const field=sort==='5'?'five':'six';const left=a[field]?.value;const right=b[field]?.value;if(left==null||right==null)return Number(left==null)-Number(right==null)||a.name.localeCompare(b.name);return (sort==='6-asc'?left-right:right-left)||a.name.localeCompare(b.name);}
    return a.name.localeCompare(b.name);
  });
  const ready=keys.every(key=>datasets[key]);
  function download(){
    if(!indicator)return;
    const fields=['State','Indicator ID','Indicator name','Category','NFHS-5 value','NFHS-6 value','Unit','Absolute change','Comparison status','Source reference'];
    const data=sorted.map(row=>[row.name,indicator.id,indicator.name,indicator.category,row.five?.value,row.six?.value,indicator.unit,row.change,status(row.five,row.six,row.change,indicator),[row.five,row.six].filter(Boolean).map(v=>sourceLink(v!)).join(' | ')]);
    downloadCsv([fields,...data],'nfhs-'+indicator.id+'.csv');
  }
  return <>
    <section className="panel explorer">
    {mode!=='indicator'&&filters}
    {mode!=='indicator'&&<label className="control select-main">Indicator<select value={indicator?.id||''} onChange={e=>setId(e.target.value)} disabled={!visible.length}>{!visible.length&&<option value="">No matching indicators found.</option>}{visible.map(i=><option key={i.id} value={i.id}>{i.name}</option>)}</select></label>}
    {!indicator&&<div className="notice"><p role="status">No matching indicators found.</p><button className="button secondary" onClick={()=>{setCategory('');setQuery('');setMapping('');}}>Reset filters</button></div>}
    {indicator&&<>
      <div className="controls-row">
      {keys.length>1&&<label className="control">Sort<select value={sort} onChange={e=>setSort(e.target.value)}><option value="name">State name</option><option value="5">NFHS-5 value</option><option value="6">NFHS-6 value · high to low</option><option value="6-asc">NFHS-6 value · low to high</option><option value="change">Absolute change</option></select></label>}
      <label className="control">Data availability<select value={availability} onChange={e=>setAvailability(e.target.value)}><option value="">All values</option><option value="both">Both rounds</option><option value="missing">Missing a round</option></select></label>
      <label className="control">Observed change<select value={direction} onChange={e=>setDirection(e.target.value)}><option value="">All changes</option><option value="increase">Increased</option><option value="decrease">Decreased</option><option value="equal">Unchanged</option></select></label>
      </div>
      <div className="section-title"><div><h2><HeadingIcon name="chart"/>{indicator.name}</h2><p className="muted">{indicator.category} · {indicator.unit} · {indicator.reviewed?'Reviewed mapping':'Mapping pending'}</p></div><button className="button secondary" onClick={download} disabled={!ready||!sorted.length}><Download size={16}/> CSV</button></div>
      {!indicator.reviewed&&<p className="notice">This measure is listed under its source survey round while the cross-round mapping is reviewed.</p>}
      {place?.slug==='manipur'&&<p className="notice">NFHS-6 data is unavailable for Manipur. Published NFHS-5 results are available below.</p>}
      {error?<p role="alert">Could not load survey data.</p>:!ready?<p role="status">Loading survey data…</p>:!sorted.length?<div className="notice"><p role="status">No eligible observations for this selection.</p><button className="button secondary" onClick={()=>{setAvailability('');setDirection('');setCategory('');setQuery('');setMapping('');}}>Reset filters</button></div>:<>
        {place&&sorted[0]&&<div className="metrics">{[['NFHS-5',format(sorted[0].five?.value,indicator.unit)],['NFHS-6',format(sorted[0].six?.value,indicator.unit)],['Observed change',changeText(sorted[0].change,indicator.unit)]].map(([label,value])=><div key={label}><span>{label}</span><strong>{value}</strong></div>)}</div>}
        {mode!=='indicator'&&<SurveyChart rows={sorted.slice(0,8).map(row=>({name:row.name,five:row.five?.value,six:row.six?.value}))}/>}
        {sorted.length>8&&mode!=='indicator'&&<p className="muted">The chart shows the first 8 States. The table includes all results.</p>}
        <div className="table-wrap"><table>
          <thead><tr><th>Geography</th><th>NFHS-5</th><th>NFHS-6</th><th>Change</th><th>Status</th></tr></thead>
          <tbody>{sorted.map(row=><tr key={row.key}>
            <th scope="row">{row.key==='india'?row.name:<Link href={'/states/'+row.key+'/'}>{row.name}</Link>}</th>
            <td><Cell value={row.five} unit={indicator.unit}/></td>
            <td><Cell value={row.six} unit={indicator.unit}/></td>
            <td>{changeText(row.change,indicator.unit)}</td>
            <td>{status(row.five,row.six,row.change,indicator)}</td>
          </tr>)}</tbody>
        </table></div>
      </>}
    </>}
    </section>
  </>;
}
