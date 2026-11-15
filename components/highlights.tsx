'use client';
import {useEffect,useRef,useState} from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {ChevronLeft,ChevronRight,Pause,Play} from 'lucide-react';
export type Highlight={id:string;name:string;five:number;six:number;unit:string;change:string};

function moveTrack(element:HTMLDivElement,direction:number,loop=false){
 const card=element.firstElementChild;
 if(!card)return;
 const style=getComputedStyle(element);
 const vertical=style.gridAutoFlow==='row';
 const position=vertical?element.scrollTop:element.scrollLeft;
 const end=vertical?element.scrollHeight-element.clientHeight:element.scrollWidth-element.clientWidth;
 if(end<=0)return;
 if(loop&&position>=end-2){
   element.scrollTo({top:0,left:0,behavior:'instant'});
   return;
 }
 const size=card.getBoundingClientRect();
 const gap=parseFloat(vertical?style.rowGap:style.columnGap);
 const step=direction*((vertical?size.height:size.width)+gap);
 element.scrollBy(vertical?{top:step}:{left:step});
}

export default function Highlights({items}:{items:Highlight[]}){
 const track=useRef<HTMLDivElement>(null);
 const [playing,setPlaying]=useState(true);
 useEffect(()=>{
   const preference=window.matchMedia('(prefers-reduced-motion: reduce)');
   const respectMotionPreference=()=>setPlaying(!preference.matches);
   respectMotionPreference();
   preference.addEventListener('change',respectMotionPreference);
   return ()=>preference.removeEventListener('change',respectMotionPreference);
 },[]);
 useEffect(()=>{
   if(!playing)return;
   const timer=window.setInterval(()=>{
     const element=track.current;
     if(element&&!document.hidden)moveTrack(element,1,true);
   },5000);
   return ()=>window.clearInterval(timer);
 },[playing]);
 function move(direction:number){
   const element=track.current;
   if(element)moveTrack(element,direction);
 }
 return <section aria-labelledby="highlights"><div className="section-title"><h2 id="highlights">Key highlights</h2><div className="carousel-controls">
 <button aria-label={playing?'Pause highlight rotation':'Play highlight rotation'} onClick={()=>setPlaying(!playing)}>{playing?<Pause size={18}/>:<Play size={18}/>}</button>
 <button aria-label="Previous highlight" onClick={()=>move(-1)}><ChevronLeft size={18}/></button>
 <button aria-label="Next highlight" onClick={()=>move(1)}><ChevronRight size={18}/></button>
 </div></div><div className="highlight-track" ref={track}>{items.map(item=>{
 const unit=item.unit==='%'?'%':' '+item.unit;
 const alt=`${item.name} in India. NFHS-6 (2023–24) ${item.six.toFixed(1)}${unit}. NFHS-5 (2019–21) ${item.five.toFixed(1)}${unit}. ${item.change}.`;
 return <Link className="highlight" href={'/indicators/'+item.id+'/'} key={item.id}>
 <Image src={'/images/highlights/'+item.id+'.jpg'} alt={alt} width={1080} height={1080} unoptimized />
 </Link>
 })}</div></section>;
}
