import {ExternalLink} from 'lucide-react';
import PageIntro from '../../components/page-intro';
import {sources} from '../../lib/model';
export const metadata={title:'Reports'};
const reports=[
 ['NFHS-6 India and State fact sheets','2023–24','PDF',sources['6']],
 ['NFHS-6 India and State fact sheets · IIPS edition','2023–24','PDF',sources['6-IIPS']],
 ['NFHS-5 India and State fact sheets · Phase II','2019–21','PDF',sources['5-II']],
 ['NFHS-5 State fact sheets · Phase I','2019–20','PDF',sources['5-I']],
 ['NFHS-6 releases and district compendiums','2023–24','Publication index','https://www.nfhsiips.in/nfhsuser/release-details.php'],
];
export default function Reports(){
 return <div className="shell page"><PageIntro label="Source library" title="Download reports">Open official survey fact sheets and publication indexes.</PageIntro><section className="panel table-wrap"><table><thead><tr><th scope="col">Report</th><th scope="col">Survey period</th><th scope="col">Format</th><th scope="col">Source</th></tr></thead><tbody>
 {reports.map(([title,period,format,url])=><tr key={title}><th scope="row">{title}</th><td>{period}</td><td>{format}</td><td><a className="text-link" href={url} target="_blank" rel="noreferrer" aria-label={'Open '+title}>Open <ExternalLink size={14}/></a></td></tr>)}
 </tbody></table></section></div>;
}
