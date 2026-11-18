'use client';

import {useEffect, useState} from 'react';
import {categoryStyle} from '../lib/category-style';
import {format, type Dataset, type Place} from '../lib/model';
import {factSheetIndicators, loadStateDataset, stateValues} from '../lib/state-fact-sheet';
import {BarChart,Bar,Cell,LabelList,XAxis,YAxis,Tooltip,ResponsiveContainer,CartesianGrid} from 'recharts';

const categories = [...new Set(factSheetIndicators.map(item => item.category))];

export default function StateCharts({place}: {place: Place}) {
  const [category, setCategory] = useState(categories[0]);
  const [selected, setSelected] = useState<string[]>(factSheetIndicators.filter(item => item.category === categories[0]).map(item => item.id));
  const [data, setData] = useState<Dataset>();
  const [error, setError] = useState(false);
  useEffect(() => {
    let active = true;
    loadStateDataset(place.slug).then(value => {if (active) setData(value);})
      .catch(() => {if (active) setError(true);});
    return () => {active = false;};
  }, [place.slug]);
  const items = factSheetIndicators.filter(item => item.category === category);
  const shown = items.filter(item => selected.includes(item.id));
  return <section className="panel state-charts">
    <h2>Explore by indicator</h2>
    <div className="filters">
      <label className="control">Category<select value={category} onChange={event => {setCategory(event.target.value);setSelected(factSheetIndicators.filter(item => item.category === event.target.value).map(item => item.id));}}>
        {categories.map(name => <option key={name}>{name}</option>)}
      </select></label>
      <details className="indicator-picker">
        <summary className="button secondary">Select Indicators ({shown.length})</summary>
        <div className="indicator-menu">
          <label><input type="checkbox" checked={items.every(item => selected.includes(item.id))}
            onChange={event => setSelected(event.target.checked ? items.map(item => item.id) : [])}/> Complete category</label>
          <div className="indicator-options">{items.map(item => <label key={item.id}>
            <input type="checkbox" checked={selected.includes(item.id)} onChange={event => setSelected(previous =>
              event.target.checked ? [...previous,item.id] : previous.filter(id => id !== item.id))}/>{item.name}
          </label>)}</div>
        </div>
      </details>    </div>
    {error ? <p role="alert">Could not load charts.</p> : !data ? <p role="status">Loading charts…</p> :
      <div className={'state-chart-grid' + (shown.length === 1 ? ' single-chart' : '')}>
        {shown.map(item => {
          const row = stateValues(data, item);
          return <article className="panel category-colors" style={categoryStyle(item.category)} key={item.id}>
            <figure aria-label={item.name + '. NFHS-5 ' + format(row.five?.value,item.unit) + ', NFHS-6 ' + format(row.six?.value,item.unit)}>
              <div style={{height:270}} aria-hidden="true">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={[{name:'NFHS-5',value:row.five?.value},{name:'NFHS-6',value:row.six?.value}]} margin={{top:28,right:20,bottom:8,left:4}}>
                    <CartesianGrid strokeDasharray="3 4"/>
                    <XAxis dataKey="name" tick={{fontSize:12}}/>
                    <YAxis tick={{fontSize:11}} tickFormatter={value => format(value,item.unit)}/>
                    <Tooltip formatter={value => format(typeof value === 'number' ? value : undefined,item.unit)}/>
                    <Bar dataKey="value" maxBarSize={110} radius={[4,4,0,0]}>
                      <Cell fill="#a9a0ec"/><Cell fill="#6249df"/>
                      <LabelList dataKey="value" position="top" formatter={value => format(typeof value === 'number' ? value : undefined,item.unit)}/>
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
              </div>
              <figcaption>{item.name}</figcaption>
              {(row.five?.value == null || row.six?.value == null) && <p className="muted">{row.five?.value == null ? 'NFHS-5 unavailable. ' : ''}{row.six?.value == null ? 'NFHS-6 unavailable.' : ''}</p>}
            </figure>          </article>;
        })}
      </div>}
  </section>;
}
