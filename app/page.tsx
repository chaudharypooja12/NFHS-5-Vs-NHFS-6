import Link from 'next/link';
import {ArrowRight,MapPin} from 'lucide-react';
import {readFileSync} from 'node:fs';
import Highlights from '../components/highlights';
import IndiaMap from '../components/india-map';
import StateDirectory from '../components/state-directory';
import {indicators,states,values,changeText,type Dataset} from '../lib/model';

export default function Home(){
 const india:Dataset=JSON.parse(readFileSync('public/data/india.json','utf8'));
 const featured=['institutional-births','child-stunting','full-vaccination-card-only','electricity-access','births-attended-by-skilled-health-personnel','total-fertility-rate'].flatMap(id=>{
  const item=indicators.find(i=>i.id===id);
  if(!item)return [];
  const {five,six,change}=values(india,item);
  if(five?.value==null||six?.value==null||change==null)return [];
  return [{id,name:item.name,five:five.value,six:six.value,unit:item.unit,change:change===0?'Unchanged':changeText(change,item.unit)}];
 });
 return <div className="shell reference-home">
 <section className="reference-intro"><p className="eyebrow">NFHS-6 · 2023–24</p><h1>India NFHS-6 Performance</h1>
 <p>Explore official health, nutrition and household indicators across India’s {states.length} States, with NFHS-5 comparisons.</p></section>
 <Highlights items={featured}/>
 <section className="coverage" aria-label="Survey coverage">
 <div><span>States in the portal</span><strong>{states.length}</strong></div>
 <div><span>NFHS-6 published indicators</span><strong>{indicators.filter(i=>i.six).length}</strong></div>
 <div><span>Survey rounds</span><strong>2</strong><small>NFHS-5 (2019–21) and NFHS-6 (2023–24)</small></div>
 </section>
 <section id="explore" className="map-section"><div className="section-title"><h2>Performance across States</h2><Link className="text-link" href="/states/">All States <ArrowRight size={16}/></Link></div>
 <div className="map-grid"><section className="panel"><IndiaMap/></section><section className="panel"><h3 className="find-title"><MapPin size={19}/> Find a State</h3><StateDirectory compact/></section></div></section>
 <section className="panel home-actions"><div><h2>NFHS-6 vs NFHS-5</h2><p className="muted">Review official India totals or compare selected States.</p></div><Link className="button secondary" href="/states/">All States <ArrowRight size={16}/></Link></section>
 </div>;
}
