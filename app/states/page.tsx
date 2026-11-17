import PageIntro from '../../components/page-intro';
import Explorer from '../../components/explorer';

export const metadata = {title: 'All States'};

export default function Page() {
  return <div className="shell page">
    <PageIntro label="NFHS-5 and NFHS-6" title="All States">
      Explore published India estimates, compare States, and open individual State factsheets.
    </PageIntro>
    <Explorer mode="all-states"/>
  </div>;
}
