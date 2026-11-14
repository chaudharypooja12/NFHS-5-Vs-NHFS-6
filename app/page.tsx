import Link from 'next/link';
import {ArrowRight,ChartNoAxesColumnIncreasing,Globe2,Landmark,MapPin} from 'lucide-react';
import IndiaMap from '../components/india-map';
import StateDirectory from '../components/state-directory';

const featured=[
  {name:'Institutional births',value:'90.6%',change:'+2.0 pp',base:'88.6%',slug:'institutional-births',icon:Landmark},
  {name:'Child stunting',value:'29.3%',change:'−6.2 pp',base:'35.5%',slug:'child-stunting',icon:ChartNoAxesColumnIncreasing},
  {name:'Total fertility rate',value:'2.0',change:'Unchanged',base:'2.0 children per woman',slug:'total-fertility-rate',icon:Globe2},
];
export default function Home(){
  return <>
    <section className="hero"><div className="shell hero-content">
      <div><p className="eyebrow"><span/> NATIONAL FAMILY HEALTH SURVEY</p><h1>India’s health,<br/><em>State by State.</em></h1><p className="hero-copy">Explore how health, nutrition and family welfare changed across India’s 28 States between NFHS-5 and NFHS-6.</p>
      <div className="hero-actions"><Link className="button primary" href="#explore">Explore States <ArrowRight size={17}/></Link><Link className="button hero-secondary" href="/compare/">Compare States</Link></div></div>
      <aside className="hero-card" aria-label="Survey rounds"><h2>Survey rounds</h2><div><span className="round old">NFHS-5</span><strong>2019–2021</strong></div><div><span className="round new">NFHS-6</span><strong>2023–2024</strong></div><p>Official India and State fact sheets</p></aside>
    </div></section>
    <div className="shell home-content">
      <section aria-labelledby="national-highlights"><div className="section-title"><div><p className="eyebrow">INDIA OVERVIEW</p><h2 id="national-highlights">National highlights</h2></div><Link className="text-link" href="/dashboard/">National dashboard <ArrowRight size={16}/></Link></div>
      <div className="featured">{featured.map(({name,value,change,base,slug,icon:Icon})=><Link className="card" key={slug} href={'/indicators/'+slug+'/'}><div className="card-head"><span className="icon"><Icon size={20}/></span><span className="tag">{change}</span></div><h3>{name}</h3><strong>{value}</strong><p>NFHS-5 · {base}</p></Link>)}</div></section>
      <section id="explore" className="map-section"><div className="section-title"><div><p className="eyebrow">STATE EXPLORER</p><h2>Explore India’s States</h2><p className="muted">Select a State to see its survey results.</p></div><Link className="text-link" href="/states/">State directory <ArrowRight size={16}/></Link></div>
      <div className="map-grid"><section className="panel"><IndiaMap/></section><section className="panel"><h3 className="find-title"><MapPin size={19}/> Find a State</h3><StateDirectory compact/></section></div></section>
    </div>
  </>;
}
