import type {ReactNode} from 'react';
import HeadingIcon, {type HeadingIconName} from './heading-icon';
export default function PageIntro({label,title,children,icon='activity'}:{label:string;title:string;children?:ReactNode;icon?:HeadingIconName}){
  return <div className="intro"><p className="eyebrow">{label}</p><h1><HeadingIcon name={icon}/>{title}</h1>{children && <p>{children}</p>}</div>;
}
