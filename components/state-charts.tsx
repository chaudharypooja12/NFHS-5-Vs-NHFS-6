'use client';

import {useEffect, useState} from 'react';
import {categoryStyle} from '../lib/category-style';
import {format, type Dataset, type Place} from '../lib/model';
import {factSheetIndicators, loadStateDataset, stateValues} from '../lib/state-fact-sheet';
import {BarChart,Bar,Cell,LabelList,XAxis,YAxis,Tooltip,ResponsiveContainer,CartesianGrid} from 'recharts';

const categories = [...new Set(factSheetIndicators.map(item => item.category))];

export default function StateCharts({place}: {place: Place}) {
  const [data, setData] = useState<Dataset>();
  const [error, setError] = useState(false);
  useEffect(() => {
    let active = true;
    loadStateDataset(place.slug).then(value => {if (active) setData(value);})
      .catch(() => {if (active) setError(true);});
    return () => {active = false;};
  }, [place.slug]);
  const shown = factSheetIndicators;
  return <div className="state-charts">
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
                      <Cell fill="color-mix(in srgb,var(--category-color) 45%,white)"/><Cell fill="var(--category-color)"/>
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
  </div>;
}
