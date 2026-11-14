'use client';
import {BarChart,Bar,XAxis,YAxis,Tooltip,ResponsiveContainer,CartesianGrid} from 'recharts';
export type ChartRow = {name:string; five?:number|null;six?:number|null; score?:number};
export default function SurveyChart({rows,rank=false}:{rows:ChartRow[];rank?:boolean}){
  return <div aria-hidden="true" style={{height:rank?Math.max(235,rows.length*31):235}}>
    <ResponsiveContainer width="100%" height="100%"><BarChart data={rows} layout={rank?'vertical':'horizontal'} margin={{left:rank?8:0,right:16,top:10}}>
      <CartesianGrid stroke="#e8e8f0" strokeDasharray="3 4"/>
      {rank?<><XAxis type="number"/><YAxis type="category" dataKey="name" width={114} tick={{fontSize:11}}/></>:<><XAxis dataKey="name" tick={{fontSize:11}}/><YAxis tick={{fontSize:11}}/></>}
      <Tooltip/>
      {rank?<Bar dataKey="score" name="Value" fill="#6851dd" radius={[0,4,4,0]}/>:<><Bar dataKey="five" name="NFHS-5" fill="#a9a0ec" radius={[4,4,0,0]}/><Bar dataKey="six" name="NFHS-6" fill="#6249df" radius={[4,4,0,0]}/></>}
    </BarChart></ResponsiveContainer>
  </div>;
}
