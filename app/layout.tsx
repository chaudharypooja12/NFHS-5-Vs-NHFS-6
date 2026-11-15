import type {Metadata} from 'next';
import Link from 'next/link';
import {Activity} from 'lucide-react';
import './globals.css';
import MainNavigation from '../components/main-navigation';

export const metadata:Metadata = {title:{default:'NFHS India | India State Health Comparison',template:'%s | NFHS India'},description:'Explore official NFHS-5 and NFHS-6 health indicators across India and its 28 States.'};
export default function Layout({children}:{children:React.ReactNode}) {
  return <html lang="en"><body><a className="skip" href="#main">Skip to content</a>
    <header className="header"><div className="shell nav"><Link className="brand" href="/"><span><Activity size={21}/></span> NFHS India</Link><MainNavigation/></div></header>
    <main id="main">{children}</main>
    <footer className="footer"><div className="shell"><strong>NFHS India</strong><span>National Family Health Survey · India</span><Link href="/methodology/">Methodology</Link><Link href="/sources/">Sources</Link></div></footer>
  </body></html>;
}
