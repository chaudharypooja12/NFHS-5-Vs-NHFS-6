'use client';
import {useState} from 'react';
import Link from 'next/link';
import {ArrowUpRight,Search} from 'lucide-react';
import {states} from '../lib/model';

export default function StateDirectory(){
  const [query,setQuery]=useState('');
  const term=query.trim().toLowerCase();
  const results=states.filter(state=>state.name.toLowerCase().includes(term));
  return <div className="map-state-search" onKeyDown={event=>{
    if(event.key==='Escape'){
      event.currentTarget.querySelector('input')?.focus();
      setQuery('');
    }
  }}>
    <label className="control" htmlFor="map-state-query">Search States</label>
    <div className="search"><Search size={17} aria-hidden="true"/><input id="map-state-query" type="search" value={query} onChange={e=>setQuery(e.target.value)} placeholder="Search for a State"/></div>
    {term&&<div className="map-search-results">{results.length?<div className="state-list">{results.map(state=><Link key={state.slug} href={'/states/'+state.slug+'/'}>{state.name}<ArrowUpRight size={15} aria-hidden="true"/></Link>)}</div>:<p role="status">No States match your search.</p>}</div>}
  </div>;
}
