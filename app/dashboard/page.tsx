import PageIntro from '../../components/page-intro';
import Explorer from '../../components/explorer';
export const metadata={title:"National dashboard"};
export default function Page(){return <div className="shell page"><PageIntro label="India overview" title="National dashboard">Explore official India estimates across the two survey rounds.</PageIntro><Explorer mode="national" place={{name:"India",slug:"india"}}/></div>}
