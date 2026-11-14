import PageIntro from '../../components/page-intro';
import Explorer from '../../components/explorer';
export const metadata={title:"Compare States"};
export default function Page(){return <div className="shell page"><PageIntro label="State comparisons" title="Compare States">Select States and an indicator to compare published values and download the results.</PageIntro><Explorer mode="compare"/></div>}
