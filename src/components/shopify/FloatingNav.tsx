'use client';

import { useEffect, useState } from 'react';
import { shopify } from '@/content/shopify';
import { HomeIcon, ProblemsIcon, SolutionsIcon, CalculatorIcon, FaqIcon } from './icons/NavIcons';

const icons = {
  inicio: HomeIcon,
  problemas: ProblemsIcon,
  soluciones: SolutionsIcon,
  calculadora: CalculatorIcon,
  faq: FaqIcon,
};

export default function FloatingNav() {
  const [visible, setVisible] = useState(false);
  const [active, setActive] = useState('inicio');

  useEffect(() => {
    const hero = document.getElementById('inicio');
    if (!hero) return;

    const heroObserver = new IntersectionObserver(
      ([entry]) => setVisible(!entry.isIntersecting),
      { rootMargin: '-64px 0px 0px 0px' }
    );
    heroObserver.observe(hero);

    const sectionIds = shopify.floatingNav.map((item) => item.key);
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    const spyObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { rootMargin: '-40% 0px -50% 0px', threshold: 0 }
    );
    sections.forEach((el) => spyObserver.observe(el));

    return () => {
      heroObserver.disconnect();
      spyObserver.disconnect();
    };
  }, []);

  return (
    <div
      className={`fixed bottom-4 md:bottom-6 inset-x-0 z-40 flex justify-center px-4 transition-all duration-300 ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6 pointer-events-none'
      }`}
      aria-hidden={!visible}
    >
      <nav
        className="flex items-center gap-1 bg-[#141416]/95 backdrop-blur border border-[#2A2A2E] rounded-full px-1.5 py-1.5 shadow-xl shadow-black/50 max-w-full overflow-x-auto"
        aria-label="Navegación rápida"
      >
        {shopify.floatingNav.map((item) => {
          const Icon = icons[item.key as keyof typeof icons];
          const isActive = active === item.key;
          return (
            <a
              key={item.key}
              href={item.href}
              className={`flex flex-col items-center gap-0.5 px-3.5 py-2 rounded-full text-[11px] whitespace-nowrap transition-colors shrink-0 ${
                isActive
                  ? 'bg-[#1C1C1F] text-[#F5F5F3]'
                  : 'text-[#9A9A9E] hover:text-[#F5F5F3]'
              }`}
            >
              <Icon />
              {item.label}
            </a>
          );
        })}
        <a
          href={shopify.ctaHref}
          className="ml-1 inline-flex items-center bg-[#A6FF4D] text-[#0B0B0C] text-sm font-medium px-5 py-2.5 rounded-full hover:opacity-90 transition-opacity shrink-0"
        >
          {shopify.ctaLabel}
        </a>
      </nav>
    </div>
  );
}
