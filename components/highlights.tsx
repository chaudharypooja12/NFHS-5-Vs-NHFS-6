'use client';
import {useRef} from 'react';
import Link from 'next/link';
import {ChevronLeft,ChevronRight,Activity,HeartPulse,Baby,House,ShieldCheck} from 'lucide-react';
const icons=[HeartPulse,Baby,Activity,House,ShieldCheck];
export type Highlight={id:string;name:string;five:number;six:number;unit:string;change:string};
export default function Highlights({items}:{items:Highlight[]}){
 const track=useRef<HTMLDivElement>(null);
 function move(direction:number){
   const element=track.current;
   const card=element?.firstElementChild;
   if(element&&card)element.scrollBy({left:direction*(card.getBoundingClientRect().width+14)});
 }
 return <section aria-labelledby="highlights"><div className="section-title"><h2 id="highlights">Key highlights</h2><div className="carousel-controls">
 <button aria-label="Previous highlight" onClick={()=>move(-1)}><ChevronLeft size={18}/></button>
 <button aria-label="Next highlight" onClick={()=>move(1)}><ChevronRight size={18}/></button>
 </div></div><div className="highlight-track" ref={track}>{items.map((item,index)=>{
 const Icon=icons[index%icons.length];
 const max=item.unit==='%'?100:Math.max(item.five,item.six)*1.2;
 return <Link className={'highlight highlight-'+(index%4)} href={'/indicators/'+item.id+'/'} key={item.id}>
 <div className="highlight-heading"><span className="icon"><Icon size={20}/></span><h3>{item.name}</h3></div>
 <div className="mini-chart">{[['NFHS-5',item.five],['NFHS-6',item.six]].map(([round,value])=><div key={round}><strong>{Number(value).toFixed(1)}{item.unit==='%'?'%':''}</strong><i aria-hidden="true" style={{height:Math.max(3,Number(value)/max*58)}}/><span>{round}</span></div>)}</div>
 <p>{item.change}{item.unit==='%'?'':' · '+item.unit}</p></Link>
 })}</div></section>;
}
