'use client';

import {Fragment, useEffect, useState} from 'react';
import {Download} from 'lucide-react';
import {downloadCsv} from '../lib/download';
import {changeText, type Dataset, type Place} from '../lib/model';
import {coverageNote, factSheetRows, loadStateDataset, manipurNotice, observationStatus, rowSources, sampleLabels, stateSample, surveyNotes} from '../lib/state-fact-sheet';
import IndiaMap from './india-map';
import ObservationCell from './observation-cell';

export default function StateFactSheet({place}: {place: Place}) {
  const [data, setData] = useState<Dataset>();
  const [loadError, setLoadError] = useState(false);
  const [pdfError, setPdfError] = useState(false);
  const [exporting, setExporting] = useState(false);
  const [retry, setRetry] = useState(0);

  useEffect(() => {
    let active = true;
    setLoadError(false);
    loadStateDataset(place.slug).then(dataset => {
      if (active) setData(dataset);
    }).catch(() => {if (active) setLoadError(true);});
    return () => {active = false;};
  }, [place.slug, retry]);

  const currentData = data?.slug === place.slug ? data : undefined;
  const sample = stateSample(place.slug);
  const rows = currentData ? factSheetRows(currentData) : [];
  function csv() {
    downloadCsv([
      ['Indicator Number', 'Category', 'Indicator', 'NFHS-6', 'NFHS-5', 'NFHS-6 Status', 'NFHS-5 Status', 'Source Page'],
      ...rows.map(row => [
        row.indicator.six ?? row.indicator.five,
        row.indicator.category,
        row.indicator.name,
        row.six?.value,
        row.five?.value,
        observationStatus(row.six),
        observationStatus(row.five, row.historical),
        rowSources(row).map(source => source.label + ' row ' + source.number + ' ' + source.url).join(' | '),
      ]),
    ], 'nfhs-' + place.slug + '-fact-sheet.csv');
  }

  async function pdf() {
    if (!currentData) return;
    setExporting(true);
    setPdfError(false);
    try {
      const {downloadStatePdf} = await import('../lib/state-pdf');
      await downloadStatePdf(currentData);
    } catch {
      setPdfError(true);
    } finally {
      setExporting(false);
    }
  }

  return <>
    <div className="state-actions fact-downloads">
      <button className="button download-button" disabled={!currentData} onClick={csv}><Download size={16}/> Download CSV</button>
      <button className="button download-button" disabled={!currentData || exporting} onClick={pdf}><Download size={16}/> {exporting ? 'Preparing PDF…' : 'Download PDF'}</button>
    </div>
    {pdfError && <p role="alert">Could not generate the PDF. Try Download PDF again.</p>}
    <section className="panel fact-overview" aria-label="State overview">
      <IndiaMap selectedState={place.name}/>
      <div>
        <h2>NFHS-6 sample sizes</h2>
        <dl className="metrics">
          {sampleLabels.map((label, index) => <div key={label}><dt>{label}</dt><dd>{sample?.counts[index].toLocaleString('en-IN') ?? 'Unavailable'}</dd></div>)}
        </dl>
        {sample ? <a className="text-link" href={sample.source} target="_blank" rel="noreferrer">NFHS-6 sample sizes · Appendix 2</a> :
          <p className="muted">{place.slug === 'manipur' ? manipurNotice : 'Sample sizes unavailable.'}</p>}
      </div>
    </section>
    <section className="panel fact-results">
      <h2>Indicators</h2>
      <p className="muted">{coverageNote}</p>
      {loadError ? <p role="alert">Could not load State data. <button className="button secondary" onClick={() => setRetry(value => value + 1)}>Retry</button></p> : !currentData ? <p role="status">Loading indicators…</p> :
        <div className="table-wrap fact-table" tabIndex={0} role="region" aria-label={place.name + ' indicators'}>
          <table className="state-table">
            <thead><tr><th scope="col">Indicator</th><th scope="col">NFHS-6</th><th scope="col">NFHS-5</th><th scope="col">Change</th></tr></thead>
            <tbody>{rows.map((row, index) => {
              const {indicator, six, five, change, historical} = row;
              const previous = rows[index - 1]?.indicator;
              const boundary = previous?.category !== indicator.category || Boolean(previous?.six) !== Boolean(indicator.six);
              return <Fragment key={indicator.id}>
                {boundary && <tr className="fact-category"><th colSpan={4}>{indicator.six ? '' : 'NFHS-5 reference · '}{indicator.category}</th></tr>}
                <tr><th scope="row">{indicator.six ?? indicator.five}. {indicator.name}</th>
                  <td><ObservationCell value={six} unit={indicator.unit}/></td>
                  <td><ObservationCell value={five} unit={indicator.unit} historical={historical}/></td>
                  <td>{changeText(change, indicator.unit)}</td></tr>
              </Fragment>;
            })}</tbody>
          </table>
        </div>}
      <details className="all-values">
        <summary>NFHS-6 indicator notes</summary>
        <ol className="fact-notes">{surveyNotes.filter(([number]) => number !== '+').map(([number, note]) => <li key={number} value={Number(number)}>{note}</li>)}</ol>
        <p>{surveyNotes.find(([number]) => number === '+')?.[1]}</p>
      </details>
    </section>
  </>;
}
