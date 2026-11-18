import PageIntro from '../../components/page-intro';
import Explorer from '../../components/explorer';
export const metadata={title:"Indicator explorer"};
export default function Page(){return <div className="shell page"><PageIntro icon="indicators" title="Indicator explorer"/><Explorer mode="indicators"/></div>}
