'use client';

import {useEffect, useState} from 'react';
import {categoryStyle} from '../lib/category-style';
import {changeText, format, type Dataset, type Place} from '../lib/model';
import {factSheetIndicators, loadStateDataset, stateValues} from '../lib/state-fact-sheet';
import SurveyChart from './charts';

const categories = [...new Set(factSheetIndicators.map(item => item.category))];

export default function StateCharts({place}: {place: Place}) {
  const [category, setCategory] = useState(categories[0]);
  const [selected, setSelected] = useState('');
  const [data, setData] = useState<Dataset>();
  const [error, setError] = useState(false);
  useEffect(() => {
    let active = true;
    loadStateDataset(place.slug).then(value => {if (active) setData(value);})
      .catch(() => {if (active) setError(true);});
    return () => {active = false;};
  }, [place.slug]);
  const items = factSheetIndicators.filter(item => item.category === category);
  const shown = selected ? items.filter(item => item.id === selected) : items;
  return <section className="panel state-charts">
    <h2>Explore by indicator</h2>
    <div className="filters">
      <label className="control">Category<select value={category} onChange={event => {setCategory(event.target.value);setSelected('');}}>
        {categories.map(name => <option key={name}>{name}</option>)}
      </select></label>
      <label className="control">Indicator<select value={selected} onChange={event => setSelected(event.target.value)}>
        <option value="">Complete category</option>
        {items.map(item => <option key={item.id} value={item.id}>{item.name}</option>)}
      </select></label>
    </div>
    {error ? <p role="alert">Could not load charts.</p> : !data ? <p role="status">Loading charts…</p> :
      <div className={'state-chart-grid' + (selected ? ' single-chart' : '')}>
        {shown.map(item => {
          const row = stateValues(data, item);
          return <article className="panel category-colors" style={categoryStyle(item.category)} key={item.id}>
            <h3>{item.name}</h3>
            <SurveyChart rows={[{name: place.name, five: row.five?.value, six: row.six?.value}]}/>
            <table><caption className="sr-only">{item.name}</caption><thead><tr><th>NFHS-5</th><th>NFHS-6</th><th>Change</th></tr></thead>
              <tbody><tr><td>{format(row.five?.value,item.unit)}</td><td>{format(row.six?.value,item.unit)}</td><td>{changeText(row.change,item.unit)}</td></tr></tbody></table>
          </article>;
        })}
      </div>}
  </section>;
}
