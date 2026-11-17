'use client';
import {BarChart,Bar,XAxis,YAxis,Tooltip,ResponsiveContainer,CartesianGrid} from 'recharts';
export type ChartRow = {name:string; five?:number|null;six?:number|null};
export default function SurveyChart({rows}:{rows:ChartRow[]}){
  return <div aria-hidden="true" style={{height:235}}>
    <ResponsiveContainer width="100%" height="100%"><BarChart data={rows} margin={{left:0,right:16,top:10}}>
      <CartesianGrid stroke="#e8e8f0" strokeDasharray="3 4"/>
      <XAxis dataKey="name" tick={{fontSize:11}}/><YAxis tick={{fontSize:11}}/>
      <Tooltip/>
      <Bar dataKey="five" name="NFHS-5" fill="#a9a0ec" radius={[4,4,0,0]}/><Bar dataKey="six" name="NFHS-6" fill="#6249df" radius={[4,4,0,0]}/>
    </BarChart></ResponsiveContainer>
  </div>;
}
