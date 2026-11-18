import {notFound} from 'next/navigation';
import Link from 'next/link';
import PageIntro from '../../../components/page-intro';
import Explorer from '../../../components/explorer';
import {indicators} from '../../../lib/model';
export const generateStaticParams=()=>indicators.map(({id})=>({slug:id}));
export async function generateMetadata({params}:{params:Promise<{slug:string}>}){const {slug}=await params;return {title:indicators.find(s=>s.id===slug)?.name||'Indicator'};}
export default async function Page({params}:{params:Promise<{slug:string}>}){
  const {slug}=await params;const item=indicators.find(i=>i.id===slug);if(!item)notFound();
  return <div className="shell page"><Link className="button back-pill" href="/indicators/">← Back to Indicators page</Link><PageIntro icon="activity" label={item.category} title={item.name}/><Explorer mode="indicator" initialId={item.id}/></div>;
}
