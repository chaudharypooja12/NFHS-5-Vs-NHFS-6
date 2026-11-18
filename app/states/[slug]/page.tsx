import {notFound} from 'next/navigation';
import Link from 'next/link';
import PageIntro from '../../../components/page-intro';
import Explorer from '../../../components/explorer';
import StateFactSheet from '../../../components/state-fact-sheet';
import {states} from '../../../lib/model';
export const generateStaticParams=()=>states.map(({slug})=>({slug}));
export async function generateMetadata({params}:{params:Promise<{slug:string}>}){const {slug}=await params;return {title:states.find(s=>s.slug===slug)?.name||'State'};}
export default async function Page({params}:{params:Promise<{slug:string}>}){
  const {slug}=await params;const place=states.find(s=>s.slug===slug);if(!place)notFound();
  return <div className="shell page">
    <Link className="button secondary" href="/states/">← Back to All States</Link>
    <PageIntro label="State fact sheet" title={place.name}/>
    <StateFactSheet place={place}/>
    <section className="panel"><h2>Explore by indicator</h2><Explorer mode="state" place={place}/></section>
  </div>;
}
