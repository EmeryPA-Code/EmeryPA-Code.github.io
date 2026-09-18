'use client';

import { useEffect, useState } from 'react';
import { site } from '@/content/site';

export default function Header() {
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
        scrolled ? 'bg-bg/90 backdrop-blur border-b border-line' : 'bg-transparent'
      }`}
    >
      <div className="max-w-content mx-auto px-6 md:px-10 h-16 md:h-20 flex items-center justify-between">
        <a href="#inicio" className="flex items-center gap-2 shrink-0">
          <span className="font-serif italic text-lg text-accent">EP</span>
          <span className="text-sm tracking-wide text-ink font-medium hidden sm:inline">
            {site.meta.name}
          </span>
        </a>

        <nav className="hidden lg:flex items-center gap-8">
          {site.nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm text-ink-soft hover:text-accent transition-colors"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <a
            href={site.contact.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center border border-ink text-ink text-sm px-4 py-2 hover:bg-ink hover:text-bg transition-colors"
          >
            LinkedIn
          </a>
          <button
            type="button"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label="Abrir menú de navegación"
            className="lg:hidden flex flex-col gap-1.5 p-2"
            onClick={() => setOpen((v) => !v)}
          >
            <span className={`block h-px w-6 bg-ink transition-transform ${open ? 'translate-y-1.5 rotate-45' : ''}`} />
            <span className={`block h-px w-6 bg-ink transition-opacity ${open ? 'opacity-0' : ''}`} />
            <span className={`block h-px w-6 bg-ink transition-transform ${open ? '-translate-y-1.5 -rotate-45' : ''}`} />
          </button>
        </div>
      </div>

      {open ? (
        <nav id="mobile-nav" className="lg:hidden bg-bg border-t border-line px-6 py-6 flex flex-col gap-4">
          {site.nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-base text-ink"
              onClick={() => setOpen(false)}
            >
              {item.label}
            </a>
          ))}
          <a
            href={site.contact.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-base text-accent"
          >
            LinkedIn
          </a>
        </nav>
      ) : null}
    </header>
  );
}
