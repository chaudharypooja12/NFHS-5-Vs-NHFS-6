import PageIntro from '../../components/page-intro';
import StateDirectory from '../../components/state-directory';
export default function Page(){return <div className="shell page"><PageIntro label="State explorer" title="State directory">Find official NFHS results for each of India’s 28 States.</PageIntro><section className="panel"><StateDirectory/></section></div>}
