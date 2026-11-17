import PageIntro from '../../components/page-intro';
import Explorer from '../../components/explorer';
export const metadata={title:"State rankings"};
export default function Page(){return <div className="shell page"><PageIntro icon="rankings" label="State comparisons" title="State rankings">Rank States by a published survey value or an eligible change.</PageIntro><Explorer mode="rankings"/></div>}
