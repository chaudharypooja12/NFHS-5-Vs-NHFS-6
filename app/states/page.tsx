import PageIntro from '../../components/page-intro';
import StateComparison from '../../components/state-comparison';

export const metadata = {title: 'All States'};

export default function Page() {
  return <div className="shell page">
    <PageIntro icon="map" label="NFHS-5 and NFHS-6" title="All States">
      Compare published survey results and open individual State fact sheets.
    </PageIntro>
    <StateComparison/>
  </div>;
}
