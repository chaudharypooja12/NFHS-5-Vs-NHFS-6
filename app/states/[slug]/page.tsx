import {notFound} from 'next/navigation';
import Link from 'next/link';
import PageIntro from '../../../components/page-intro';
import Explorer from '../../../components/explorer';
import {states} from '../../../lib/model';
export const generateStaticParams=()=>states.map(({slug})=>({slug}));
export async function generateMetadata({params}:{params:Promise<{slug:string}>}){const {slug}=await params;return {title:states.find(s=>s.slug===slug)?.name||'State'};}
export default async function Page({params}:{params:Promise<{slug:string}>}){
  const {slug}=await params;const place=states.find(s=>s.slug===slug);if(!place)notFound();
  return <div className="shell page"><Link className="text-link" href="/states/">← State directory</Link><PageIntro label="State dashboard" title={place.name}>Explore official survey estimates and observed changes for {place.name}.</PageIntro><Explorer mode="state" place={place}/></div>;
}
