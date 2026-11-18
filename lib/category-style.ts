import type {CSSProperties} from 'react';

const colors = ['#4338a3','#0f766e','#9d3b20','#1d639a','#86509b','#376b30','#a13c62','#716016','#36579b','#8a4630','#216d64','#744998'];
export function categoryStyle(category: string): CSSProperties {
  let hash = 0;
  for (const character of category.toLowerCase()) hash = (hash * 31 + character.charCodeAt(0)) >>> 0;
  return {'--category-color': colors[hash % colors.length]} as CSSProperties;
}
