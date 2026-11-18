import Link from 'next/link';
import {ArrowUpRight} from 'lucide-react';
import {sources} from '../lib/model';

export default function SiteFooter() {
  return <footer className="footer">
    <div className="shell footer-content">
      <div className="footer-top">
        <p>This portal is an analytical demonstration environment — not an official Government of India, or NFHS website. Original information is drawn from NFHS official data for representation and visualization. For authoritative records and official transactions, refer to <a href="https://rchiips.org/nfhs/" target="_blank" rel="noopener noreferrer">NFHS Official</a> and your department’s designated channels.</p>
        <nav className="footer-links" aria-label="Footer navigation">
          <Link href="/states/">All States</Link>
          <a href={sources['6']} target="_blank" rel="noopener noreferrer">Source PDF <ArrowUpRight size={14} aria-hidden="true"/></a>
          <a href="https://github.com/chaudharypooja12/NFHS-5-Vs-NHFS-6" target="_blank" rel="noopener noreferrer">GitHub <ArrowUpRight size={14} aria-hidden="true"/></a>
        </nav>
      </div>
      <p className="footer-copyright">© 2026 <a href="https://www.linkedin.com/in/pooja-chaudhary-001527230" target="_blank" rel="noopener noreferrer">Developer Details (Data Consultant)</a>. All Rights Reserved.</p>
    </div>
  </footer>;
}
