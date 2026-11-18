import {Activity,Apple,ArrowLeftRight,Baby,BarChart3,BookOpen,ChartNoAxesCombined,CigaretteOff,ClipboardList,FileDown,Files,Globe,GraduationCap,HeartHandshake,House,Map,MapPin,Medal,Microscope,MousePointerClick,ShieldCheck,SlidersHorizontal,Sparkles,Stethoscope,UsersRound,Utensils,Venus} from 'lucide-react';

const icons = {
  activity: Activity,
  comparison: ArrowLeftRight,
  performance: ChartNoAxesCombined,
  methodology: BookOpen,
  indicators: SlidersHorizontal,
  reports: FileDown,
  sources: Files,
  geography: Globe,
  map: Map,
  state: MapPin,
  selection: ClipboardList,
  rankings: Medal,
  chart: BarChart3,
  highlights: Sparkles,
  mapSelection: MousePointerClick,
  households: House,
  education: GraduationCap,
  marriage: HeartHandshake,
  family: UsersRound,
  maternal: Baby,
  childHealth: ShieldCheck,
  childNutrition: Apple,
  adultNutrition: Utensils,
  biomarkers: Microscope,
  healthcare: Stethoscope,
  women: Venus,
  tobacco: CigaretteOff,
};

export type HeadingIconName = keyof typeof icons;

export default function HeadingIcon({name}:{name:HeadingIconName}) {
  const Icon = icons[name];
  return <Icon className="heading-icon" size={24} strokeWidth={1.8} aria-hidden="true" focusable="false"/>;
}
