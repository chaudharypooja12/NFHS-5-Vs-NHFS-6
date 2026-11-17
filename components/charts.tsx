'use client';
import {BarChart,Bar,XAxis,YAxis,Tooltip,ResponsiveContainer,CartesianGrid,Legend} from 'recharts';
export type ChartRow = {name:string; five?:number|null;six?:number|null; score?:number};
export default function SurveyChart({rows,rank=false,byState=false}:{rows:ChartRow[];rank?:boolean;byState?:boolean}){
  const horizontal = rank || byState;
  const height = byState ? Math.max(235, rows.length * 40 + 48) : rank ? Math.max(235, rows.length * 31) : 235;
  const chart = <div aria-hidden="true" style={{height}}>
    <ResponsiveContainer width="100%" height="100%"><BarChart data={rows} accessibilityLayer={!byState} layout={horizontal?'vertical':'horizontal'} margin={{left:horizontal?8:0,right:16,top:10}}>
      <CartesianGrid stroke="#e8e8f0" strokeDasharray="3 4"/>
      {horizontal?<><XAxis type="number"/><YAxis type="category" dataKey="name" width={byState?124:114} interval={byState?0:undefined} tick={{fontSize:11}}/></>:<><XAxis dataKey="name" tick={{fontSize:11}}/><YAxis tick={{fontSize:11}}/></>}
      {byState&&<Legend verticalAlign="top"/>}
      <Tooltip/>
      {rank?<Bar dataKey="score" name="Value" fill="#6851dd" radius={[0,4,4,0]}/>:<><Bar dataKey="five" name="NFHS-5" fill="#a9a0ec" radius={byState?[0,4,4,0]:[4,4,0,0]}/><Bar dataKey="six" name="NFHS-6" fill="#6249df" radius={byState?[0,4,4,0]:[4,4,0,0]}/></>}
    </BarChart></ResponsiveContainer>
  </div>;
  return byState?<div className="state-chart" role="region" aria-label="Survey comparison chart. Values are listed in the table below." tabIndex={0}>{chart}</div>:chart;
}
