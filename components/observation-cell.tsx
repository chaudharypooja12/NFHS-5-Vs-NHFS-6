import {format, sourceLink, type Observation} from '../lib/model';

export default function ObservationCell({value, unit, historical}: {value?: Observation; unit: string; historical?: boolean}) {
  if (!value) return <span className="muted">Data Not Available</span>;
  return <>
    <a title={value.label} href={sourceLink(value)} target="_blank" rel="noreferrer">{value.value == null ? 'Data Not Available' : format(value.value, unit)}</a>
    {value.flag !== 'published' && <small className="flag">{value.flag}</small>}
    {historical && <small className="flag">NFHS-6 historical column</small>}
  </>;
}
