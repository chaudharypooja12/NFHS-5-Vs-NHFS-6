'use client';

import {useEffect, useState} from 'react';
import Link from 'next/link';
import {Download} from 'lucide-react';
import {changeText, states, type Dataset} from '../lib/model';
import {factSheetIndicators, loadStateDataset, stateValues} from '../lib/state-fact-sheet';
import ObservationCell from './observation-cell';

const categories = [...new Set(factSheetIndicators.map(item => item.category))];
const defaultIndicator = 'institutional-births';
const indicatorLabel = (item: typeof factSheetIndicators[number]) =>
  (item.six ? 'NFHS-6 #' + item.six : 'NFHS-5 #' + item.five) + ' · ' + item.name;

export default function StateComparison() {
  const [selected, setSelected] = useState(states.map(state => state.slug));
  const [indicatorIds, setIndicatorIds] = useState([defaultIndicator]);
  const [datasets, setDatasets] = useState<Record<string, Dataset>>({});
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState('');
  const [ascending, setAscending] = useState(false);
  const [sortId, setSortId] = useState(defaultIndicator);
  const [loadError, setLoadError] = useState(false);
  const [exportError, setExportError] = useState(false);
  const [exporting, setExporting] = useState(false);
  const [retry, setRetry] = useState(0);

  useEffect(() => {
    let active = true;
    setLoadError(false);
    const missing = selected.filter(slug => !datasets[slug]);
    Promise.all(missing.map(async slug => [slug, await loadStateDataset(slug)] as const))
      .then(entries => {
        if (active && entries.length) setDatasets(previous => ({...previous, ...Object.fromEntries(entries)}));
      })
      .catch(() => { if (active) setLoadError(true); });
    return () => { active = false; };
  }, [selected, datasets, retry]);

  const chosen = indicatorIds.map(id => factSheetIndicators.find(item => item.id === id)!);
  const sortIndicator = chosen.find(item => item.id === sortId) ?? chosen[0];
  const sortRound = sortIndicator?.six ? 'six' : 'five';
  const ready = selected.every(slug => datasets[slug]);
  const ordered = states.filter(state => selected.includes(state.slug)).sort((a, b) => {
    if (!sortIndicator) return a.name.localeCompare(b.name);
    const score = (slug: string) => stateValues(datasets[slug], sortIndicator)[sortRound]?.value;
    const left = score(a.slug);
    const right = score(b.slug);
    if (left == null || right == null) return Number(left == null) - Number(right == null) || a.name.localeCompare(b.name);
    return (ascending ? left - right : right - left) || a.name.localeCompare(b.name);
  });

  async function download() {
    setExporting(true);
    setExportError(false);
    try {
      const {downloadStateWorkbook} = await import('../lib/state-workbook');
      await downloadStateWorkbook(ordered.map(state => datasets[state.slug]), chosen);
    } catch {
      setExportError(true);
    } finally {
      setExporting(false);
    }
  }

  return <div className="state-comparison">
    <aside className="panel">
      <h2>Select States</h2>
      <div className="state-actions">
        <button className="button secondary" onClick={() => setSelected(states.map(state => state.slug))}>Select All</button>
        <button className="button secondary" onClick={() => setSelected([])}>Clear</button>
      </div>
      <p role="status" className="muted">{selected.length} of {states.length} States selected</p>
      <div className="state-options" role="group" aria-label="States">
        {states.map(state => <label key={state.slug}><input type="checkbox" checked={selected.includes(state.slug)}
          onChange={event => setSelected(previous => event.target.checked ? [...previous, state.slug] : previous.filter(slug => slug !== state.slug))}/>
          {state.name}</label>)}
      </div>
    </aside>
    <section className="panel state-data">
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
        <button className="button secondary" disabled={!ready || !ordered.length || !chosen.length || exporting} onClick={download}><Download size={16}/> {exporting ? 'Preparing XLSX…' : 'Download XLSX'}</button>
      </div>
      {sortIndicator && <div className="state-sort">
        {chosen.length > 1 && <label className="control">Sort indicator<select value={sortIndicator.id} onChange={event => setSortId(event.target.value)}>
          {chosen.map(item => <option key={item.id} value={item.id}>{indicatorLabel(item)}</option>)}
        </select></label>}
        <div className="state-actions" role="group" aria-label={'Sort by NFHS-' + (sortRound === 'six' ? '6' : '5')}>
          <button className="button secondary" aria-pressed={!ascending} onClick={() => setAscending(false)}>High to Low</button>
          <button className="button secondary" aria-pressed={ascending} onClick={() => setAscending(true)}>Low to High</button>
          <span className="muted">NFHS-{sortRound === 'six' ? '6' : '5'}</span>
        </div>
      </div>}
      {exportError && <p role="alert">Could not generate the workbook. Try Download XLSX again.</p>}
      {loadError ? <p role="alert">Could not load State data. <button className="button secondary" onClick={() => setRetry(value => value + 1)}>Retry</button></p> :
        !ready ? <p role="status">Loading State data…</p> : !ordered.length || !chosen.length ? <p role="status">Select at least one State and one indicator.</p> :
        <div className="table-wrap" tabIndex={0} role="region" aria-label="State comparison results">
          <table className="state-table">
            <thead><tr><th scope="col">State</th><th scope="col">Selected Indicator</th><th scope="col">NFHS-6</th><th scope="col">NFHS-5</th><th scope="col">Change (pp for %)</th><th scope="col">Actions</th></tr></thead>
            <tbody>{ordered.flatMap(state => chosen.map(item => {
              const row = stateValues(datasets[state.slug], item);
              return <tr key={state.slug + ':' + item.id}>
                <th scope="row">{state.name}</th><td>{item.name}<small className="flag">{item.category}</small></td>
                <td><ObservationCell value={row.six} unit={item.unit}/></td>
                <td><ObservationCell value={row.five} unit={item.unit} historical={row.historical}/></td>
                <td>{changeText(row.change, item.unit)}</td>
                <td><Link className="button secondary" aria-label={'View Fact Sheet for ' + state.name} href={'/states/' + state.slug + '/'}>View Fact Sheet</Link></td>
              </tr>;
            }))}</tbody>
          </table>
        </div>}
    </section>
  </div>;
}
