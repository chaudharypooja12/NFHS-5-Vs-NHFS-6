'use client';
import {categoryStyle} from '../lib/category-style';

import {Fragment, useEffect, useState} from 'react';
import Link from 'next/link';
import {ArrowDownWideNarrow,ArrowUpWideNarrow,Download,Eye} from 'lucide-react';
import {changeText, states, type Dataset} from '../lib/model';
import {rankingValue,stateRanks} from '../lib/ranking';
import {factSheetIndicators, loadStateDataset, stateValues} from '../lib/state-fact-sheet';
import ObservationCell from './observation-cell';
import HeadingIcon from './heading-icon';

const categories = [...new Set(factSheetIndicators.map(item => item.category))];
const defaultIndicator = 'institutional-births';
const stateKeys = new Set(states.map(state => state.slug));
const unionTerritories = [
  {name:'Andaman and Nicobar Islands',slug:'andaman-and-nicobar-islands'},
  {name:'Chandigarh',slug:'chandigarh'},
  {name:'Dadra and Nagar Haveli and Daman and Diu',slug:'dadra-and-nagar-haveli-and-daman-and-diu'},
  {name:'Delhi',slug:'delhi'},
  {name:'Jammu and Kashmir',slug:'jammu-and-kashmir'},
  {name:'Ladakh',slug:'ladakh'},
  {name:'Lakshadweep',slug:'lakshadweep'},
  {name:'Puducherry',slug:'puducherry'},
];
const selectionPlaces = [...states, ...unionTerritories].sort((a,b) => a.name.localeCompare(b.name));
const selectionKeys = states.map(place => place.slug);
const indicatorLabel = (item: typeof factSheetIndicators[number]) =>
  (item.six ? 'NFHS-6 #' + item.six : 'NFHS-5 #' + item.five) + ' · ' + item.name;

export default function StateComparison() {
  const [selected, setSelected] = useState(selectionKeys);
  const [indicatorIds, setIndicatorIds] = useState([defaultIndicator]);
  const [datasets, setDatasets] = useState<Record<string, Dataset>>({});
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState('');
  const [sort, setSort] = useState<'name' | 'asc' | 'desc'>('name');
  const [sortId, setSortId] = useState(defaultIndicator);

  const [loadError, setLoadError] = useState(false);
  const [exportError, setExportError] = useState(false);
  const [exporting, setExporting] = useState(false);
  const [retry, setRetry] = useState(0);

  useEffect(() => {
    let active = true;
    setLoadError(false);
    const missing = selected.filter(slug => stateKeys.has(slug) && !datasets[slug]);
    Promise.all(missing.map(async slug => [slug, await loadStateDataset(slug)] as const))
      .then(entries => {
        if (active && entries.length) setDatasets(previous => ({...previous, ...Object.fromEntries(entries)}));
      })
      .catch(() => { if (active) setLoadError(true); });
    return () => { active = false; };
  }, [selected, datasets, retry]);

  const chosen = indicatorIds.map(id => factSheetIndicators.find(item => item.id === id)!);
  const sortIndicator = chosen.find(item => item.id === sortId) ?? chosen[0];

  const ready = selected.every(slug => !stateKeys.has(slug) || datasets[slug]);
  const ordered = selectionPlaces.filter(state => selected.includes(state.slug)).sort((a, b) => {
    if (sort === 'name' || !sortIndicator) return a.name.localeCompare(b.name);
    const score = (slug: string) => rankingValue({key: slug, ...stateValues(datasets[slug], sortIndicator)}, '6');
    const left = score(a.slug);
    const right = score(b.slug);
    if (left == null || right == null) return Number(left == null) - Number(right == null) || a.name.localeCompare(b.name);
    return (sort === 'asc' ? left - right : right - left) || a.name.localeCompare(b.name);
  });
  const ranks = new Map(chosen.map(item => [
    item.id,
    stateRanks(ordered.map(state => ({key: state.slug, ...stateValues(datasets[state.slug], item)})), '6', item),
  ]));

  async function download() {
    setExporting(true);
    setExportError(false);
    try {
      const {downloadStateWorkbook} = await import('../lib/state-workbook');
      await downloadStateWorkbook(ordered.map(state => ({name: state.name, data: datasets[state.slug]})), chosen);
    } catch {
      setExportError(true);
    } finally {
      setExporting(false);
    }
  }

  return <div className="state-performance-grid">
    <aside className="panel state-selection-panel">
      <h2><HeadingIcon name="selection"/>Select States</h2>
      <div className="state-actions selection-actions">
        <button className="button secondary" onClick={() => setSelected(selectionKeys)}>Select All</button>
        <button className="button secondary" onClick={() => setSelected([])}>Clear</button>
      </div>
      <p role="status" className="muted selection-count">{selected.filter(slug => stateKeys.has(slug)).length} of {states.length} States selected</p>

      <div className="state-options state-checkbox-list" role="group" aria-label="States">
        {states.map(state => <label key={state.slug} className="state-checkbox" data-selected={selected.includes(state.slug)}><input type="checkbox" checked={selected.includes(state.slug)}
          onChange={event => setSelected(previous => event.target.checked ? [...previous, state.slug] : previous.filter(slug => slug !== state.slug))}/>
          {state.name}</label>)}
      </div>
      <details className="territory-selection">
        <summary>Union Territories</summary>
        <p className="muted">Survey data and fact sheets are unavailable in this dataset.</p>
        <div className="state-options" role="group" aria-label="Union Territories">
          {unionTerritories.map(place => <label key={place.slug} className="state-checkbox">
            <input type="checkbox" checked={selected.includes(place.slug)} onChange={event => setSelected(previous =>
              event.target.checked ? [...previous, place.slug] : previous.filter(slug => slug !== place.slug))}/>{place.name}
          </label>)}
        </div>
      </details>
    </aside>
    <section className="panel state-data state-comparison-panel">
      <h2><HeadingIcon name="performance"/>State Performance</h2>
      <div className="state-toolbar">
        <details className="indicator-picker">
          <summary className="button secondary">Select Indicators ({chosen.length})</summary>
          <div className="indicator-menu">
            <label className="control">Search indicators <input type="search" value={query} onChange={event => setQuery(event.target.value)}/></label>
            <label className="control">Category <select value={category} onChange={event => setCategory(event.target.value)}>
              <option value="">All categories</option>
              {categories.map(name => <option key={name}>{name}</option>)}
            </select></label>
            <div className="indicator-options" role="group" aria-label="Indicators">
              {factSheetIndicators.filter(item => (!category || item.category === category) && (item.name + ' ' + item.category).toLowerCase().includes(query.trim().toLowerCase())).map(item =>
                <label key={item.id}><input type="checkbox" checked={indicatorIds.includes(item.id)} onChange={event => setIndicatorIds(previous =>
                  event.target.checked ? [...previous, item.id] : previous.filter(id => id !== item.id))}/>
                  <span>{indicatorLabel(item)}<small className="flag">{item.category}</small></span></label>)}
            </div>
          </div>
        </details>
        <button className="button download-button" disabled={!ready || !ordered.length || !chosen.length || exporting} onClick={download}><Download size={16}/> {exporting ? 'Preparing XLSX…' : 'Download XLSX'}</button>
      </div>
      {sortIndicator && <div className="state-sort">
        {chosen.length > 1 && <label className="control">Sort indicator<select value={sortIndicator.id} onChange={event => setSortId(event.target.value)}>
          {chosen.map(item => <option key={item.id} value={item.id}>{indicatorLabel(item)}</option>)}
        </select></label>}
        <div className="state-actions sort-buttons" role="group" aria-label="Sort by NFHS-6 value">
          <button className="button secondary" aria-pressed={sort === 'desc'} onClick={() => setSort('desc')}><ArrowDownWideNarrow size={16}/>High to Low</button>
          <button className="button secondary" aria-pressed={sort === 'asc'} onClick={() => setSort('asc')}><ArrowUpWideNarrow size={16}/>Low to High</button>
          {sort !== 'name' && <button className="button secondary" onClick={() => setSort('name')}>Clear filters</button>}
        </div>
      </div>}
      {exportError && <p role="alert">Could not generate the workbook. Try Download XLSX again.</p>}
      {loadError ? <p role="alert">Could not load State data. <button className="button secondary" onClick={() => setRetry(value => value + 1)}>Retry</button></p> :
        !ready ? <p role="status">Loading State data…</p> : !ordered.length || !chosen.length ? <p role="status">Select at least one State and one indicator.</p> :
        <div className="table-wrap performance-table" tabIndex={0} role="region" aria-label="State comparison results">
          <table className="state-table">
            <thead>
              <tr>
                <th scope="col" rowSpan={2}>Rank</th><th scope="col" rowSpan={2}>State</th>
                {chosen.map(item => <th key={item.id} scope="colgroup" colSpan={3} className="indicator-group-heading category-heading" style={categoryStyle(item.category)}>{item.name}</th>)}
                <th scope="col" rowSpan={2}>Actions</th>
              </tr>
              <tr>{chosen.map(item => <Fragment key={item.id}><th className="category-heading" style={categoryStyle(item.category)} scope="col">NFHS-6</th><th className="category-heading" style={categoryStyle(item.category)} scope="col">NFHS-5</th><th className="category-heading" style={categoryStyle(item.category)} scope="col">Change{item.unit === '%' ? ' (pp)' : ''}</th></Fragment>)}</tr>
            </thead>
            <tbody>{ordered.map(state => <tr key={state.slug}>
              <td>{ranks.get(sortIndicator.id)?.get(state.slug) ?? 'N/A'}</td>
              <th scope="row">{state.name}</th>
              {chosen.map(item => {
                const row = stateValues(datasets[state.slug], item);
                return <Fragment key={item.id}>
                  <td className="category-content" style={categoryStyle(item.category)}><ObservationCell value={row.six} unit={item.unit}/></td>
                  <td className="category-content" style={categoryStyle(item.category)}><ObservationCell value={row.five} unit={item.unit} historical={row.historical}/></td>
                  <td className="category-content" style={categoryStyle(item.category)}>{changeText(row.change, item.unit)}</td>
                </Fragment>;
              })}
              <td>{stateKeys.has(state.slug) ? <Link className="button secondary" aria-label={'View Fact Sheet for ' + state.name} href={'/states/' + state.slug + '/'}><Eye size={14} aria-hidden="true"/>View Fact Sheet</Link> : <span className="muted">Unavailable</span>}</td>
            </tr>)}</tbody>
          </table>
        </div>}
    </section>
  </div>;
}
