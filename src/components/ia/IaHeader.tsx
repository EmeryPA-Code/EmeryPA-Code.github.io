'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ia } from '@/content/ia';

const IA_ROOT = '/ia/';

export default function IaHeader() {
  const pathname = usePathname();
  const isRoot = pathname === '/ia' || pathname === IA_ROOT;
  const resolveHref = (hash: string) => (isRoot ? hash : `${IA_ROOT}${hash}`);

  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-colors duration-300 ${
        scrolled || open ? 'bg-[#0B0B0C]/90 backdrop-blur border-b border-[#2A2A2E]' : 'bg-transparent'
      }`}
    >
      <div className="max-w-content mx-auto px-6 md:px-10 h-16 md:h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 shrink-0">
          <span className="w-7 h-7 rounded-lg bg-[#A6FF4D] text-[#0B0B0C] flex items-center justify-center text-xs font-bold font-display">
            IA
          </span>
          <span className="text-sm tracking-wide text-[#F5F5F3] font-medium hidden sm:inline">Emery Piqueras</span>
        </Link>

        <nav className="hidden lg:flex items-center gap-8">
          {ia.nav.map((item) => (
            <a
              key={item.href}
              href={resolveHref(item.href)}
              className="text-sm text-[#9A9A9E] hover:text-[#A6FF4D] transition-colors"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <a
            href={resolveHref(ia.ctaHref)}
            className="hidden sm:inline-flex items-center bg-[#A6FF4D] text-[#0B0B0C] text-sm font-medium px-5 py-2.5 rounded-full hover:opacity-90 transition-opacity"
          >
            {ia.ctaLabel}
          </a>
          <button
            type="button"
            aria-expanded={open}
            aria-controls="mobile-nav-ia"
            aria-label="Abrir menú de navegación"
            className="lg:hidden flex flex-col gap-1.5 p-2"
            onClick={() => setOpen((v) => !v)}
          >
            <span className={`block h-px w-6 bg-[#F5F5F3] transition-transform ${open ? 'translate-y-1.5 rotate-45' : ''}`} />
            <span className={`block h-px w-6 bg-[#F5F5F3] transition-opacity ${open ? 'opacity-0' : ''}`} />
            <span className={`block h-px w-6 bg-[#F5F5F3] transition-transform ${open ? '-translate-y-1.5 -rotate-45' : ''}`} />
          </button>
        </div>
      </div>

      {open ? (
        <nav id="mobile-nav-ia" className="lg:hidden bg-[#0B0B0C] border-t border-[#2A2A2E] px-6 py-6 flex flex-col gap-4">
          {ia.nav.map((item) => (
            <a key={item.href} href={resolveHref(item.href)} className="text-base text-[#F5F5F3]" onClick={() => setOpen(false)}>
              {item.label}
            </a>
          ))}
          <a href={resolveHref(ia.ctaHref)} className="text-base text-[#A6FF4D]" onClick={() => setOpen(false)}>
            {ia.ctaLabel}
          </a>
        </nav>
      ) : null}
    </header>
  );
}
