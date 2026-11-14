'use client';
import {useEffect,useState} from 'react';
import {Moon,Sun} from 'lucide-react';
export default function ThemeToggle(){
 const [dark,setDark]=useState(false);
 useEffect(()=>{
   const saved=localStorage.getItem('nfhs-theme');
   const selected=saved?saved==='dark':matchMedia('(prefers-color-scheme: dark)').matches;
   setDark(selected);
   document.documentElement.dataset.theme=selected?'dark':'light';
 },[]);
 function toggle(){
   const next=!dark;
   setDark(next);
   document.documentElement.dataset.theme=next?'dark':'light';
   localStorage.setItem('nfhs-theme',next?'dark':'light');
 }
 return <button className="theme-toggle" aria-label="Dark mode" aria-pressed={dark} onClick={toggle}>{dark?<Sun size={19}/>:<Moon size={19}/>}</button>;
}
