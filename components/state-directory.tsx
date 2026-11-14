'use client';
import {useState} from 'react';
import Link from 'next/link';
import {ArrowUpRight,Search} from 'lucide-react';
import {states} from '../lib/model';

export default function StateDirectory({compact=false}:{compact?:boolean}){
  const [query,setQuery]=useState('');
  const results=states.filter(state=>state.name.toLowerCase().includes(query.trim().toLowerCase()));
  return <><label className="search"><Search size={17}/><input type="search" value={query} onChange={e=>setQuery(e.target.value)} placeholder="Search for a State" aria-label="Search for a State"/></label>
  {results.length?<div className={compact?'state-list':'state-grid'}>{results.map(state=><Link key={state.slug} href={'/states/'+state.slug+'/'}>{state.name}<ArrowUpRight size={15}/></Link>)}</div>:<p role="status">No States match your search.</p>}</>;
}
