import Link from 'next/link';

export const metadata = {title: 'All States', robots: {index: false}};

export default function Page() {
  return <div className="shell page">
    <meta httpEquiv="refresh" content="0;url=/states/"/>
    <h1>All States</h1>
    <p>The dashboard has moved to <Link className="text-link" href="/states/">All States</Link>.</p>
  </div>;
}
