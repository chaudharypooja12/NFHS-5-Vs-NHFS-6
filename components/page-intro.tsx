import type {ReactNode} from 'react';
export default function PageIntro({label,title,children}:{label:string;title:string;children?:ReactNode}){
  return <div className="intro"><p className="eyebrow">{label}</p><h1>{title}</h1>{children && <p>{children}</p>}</div>;
}
