'use client';
import {categoryStyle} from '../lib/category-style';

import {Fragment, useEffect, useState} from 'react';
import {Download} from 'lucide-react';

import {changeText, type Dataset, type Place} from '../lib/model';
import {coverageNote, factSheetRows, loadStateDataset, manipurNotice, sampleLabels, stateSample} from '../lib/state-fact-sheet';
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
  const [xlsxBusy, setXlsxBusy] = useState(false);
  const [xlsxError, setXlsxError] = useState(false);
  async function xlsx() {
    if (!currentData) return;
    setXlsxBusy(true);
    setXlsxError(false);
    try {
      const {downloadFactSheetWorkbook} = await import('../lib/state-workbook');
      await downloadFactSheetWorkbook(currentData);
    } catch {
      setXlsxError(true);
    } finally {
      setXlsxBusy(false);
    }
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
      <button className="button download-button" disabled={!currentData || xlsxBusy} onClick={xlsx}><Download size={16}/> {xlsxBusy ? 'Preparing XLSX…' : 'Download XLSX'}</button>
      <button className="button download-button" disabled={!currentData || exporting} onClick={pdf}><Download size={16}/> {exporting ? 'Preparing PDF…' : 'Download PDF'}</button>
    </div>
    {xlsxError && <p role="alert">Could not generate the workbook. Try Download XLSX again.</p>}
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
                {boundary && <tr className="fact-category category-colors" style={categoryStyle(indicator.category)}><th colSpan={4}>{indicator.six ? '' : 'NFHS-5 reference · '}{indicator.category}</th></tr>}
                <tr className="category-content" style={categoryStyle(indicator.category)}><th scope="row">{indicator.six ?? indicator.five}. {indicator.name}</th>
                  <td><ObservationCell value={six} unit={indicator.unit}/></td>
                  <td><ObservationCell value={five} unit={indicator.unit} historical={historical}/></td>
                  <td>{changeText(change, indicator.unit)}</td></tr>
              </Fragment>;
            })}</tbody>
          </table>
        </div>}

    </section>
  </>;
}
