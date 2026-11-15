'use client';

import Link from 'next/link';
import {usePathname} from 'next/navigation';
import {useEffect, useRef, useState} from 'react';
import {Menu, X} from 'lucide-react';
import ThemeToggle from './theme-toggle';

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
  const [open, setOpen] = useState(false);
  const trigger = useRef<HTMLButtonElement>(null);
  const navigation = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!open) return;

    const desktop = window.matchMedia('(min-width: 1024px)');
    const closeOnDesktop = () => {
      if (desktop.matches) setOpen(false);
    };
    const closeOutside = (event: PointerEvent) => {
      if (event.target instanceof Node &&
          !navigation.current?.contains(event.target) &&
          !trigger.current?.contains(event.target)) setOpen(false);
    };
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key !== 'Escape') return;
      setOpen(false);
      trigger.current?.focus();
    };

    desktop.addEventListener('change', closeOnDesktop);
    document.addEventListener('pointerdown', closeOutside);
    document.addEventListener('keydown', closeOnEscape);
    return () => {
      desktop.removeEventListener('change', closeOnDesktop);
      document.removeEventListener('pointerdown', closeOutside);
      document.removeEventListener('keydown', closeOnEscape);
    };
  }, [open]);

  return <>
    <ThemeToggle/>
    <button
      ref={trigger}
      type="button"
      className="menu-toggle lg:hidden"
      aria-label={open ? 'Close navigation menu' : 'Open navigation menu'}
      aria-expanded={open}
      aria-controls="main-navigation"
      onClick={() => setOpen(previous => !previous)}
    >
      {open ? <X size={22} aria-hidden="true"/> : <Menu size={22} aria-hidden="true"/>}
    </button>
    <nav id="main-navigation" ref={navigation} aria-label="Main navigation" data-open={open}>
    {links.map(([name, href]) => {
      const exact = currentPath === href.slice(0, -1);
      const inSection = href !== '/' && pathname.startsWith(href);
      return <Link key={href} href={href} aria-current={exact ? 'page' : inSection ? 'location' : undefined} onClick={() => setOpen(false)}>
        {name}
      </Link>;
    })}
    </nav>
  </>;
}
