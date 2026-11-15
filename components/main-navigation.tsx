'use client';

import Link from 'next/link';
import {usePathname} from 'next/navigation';

const links = [
  ['Overview', '/'],
  ['National', '/dashboard/'],
  ['States', '/states/'],
  ['Compare', '/compare/'],
  ['Rankings', '/rankings/'],
  ['Indicators', '/indicators/'],
  ['Reports', '/reports/'],
];

export default function MainNavigation() {
  const pathname = usePathname();
  const currentPath = pathname.replace(/\/$/, '');

  return <nav aria-label="Main navigation">
    {links.map(([name, href]) => {
      const exact = currentPath === href.slice(0, -1);
      const inSection = href !== '/' && pathname.startsWith(href);
      return <Link key={href} href={href} aria-current={exact ? 'page' : inSection ? 'location' : undefined}>
        {name}
      </Link>;
    })}
  </nav>;
}
