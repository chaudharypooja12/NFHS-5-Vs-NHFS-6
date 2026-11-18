import PageIntro from '../../components/page-intro';
import StateComparison from '../../components/state-comparison';

export default function Page() {
  return <div className="shell page">
    <PageIntro label="State explorer" title="All States">Compare official NFHS results across India’s 28 States.</PageIntro>
    <StateComparison/>
  </div>;
}
