import PageIntro from '../../components/page-intro';
import Explorer from '../../components/explorer';
export const metadata={title:"Indicator explorer"};
export default function Page(){return <div className="shell page"><PageIntro icon="indicators" label="Survey catalog" title="Indicator explorer">Browse published measures, their units, and cross-round comparison status.</PageIntro><Explorer mode="indicators"/></div>}
