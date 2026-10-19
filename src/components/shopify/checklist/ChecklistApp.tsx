'use client';

import { useEffect, useMemo, useState } from 'react';
import { checklist } from '@/content/checklist';
import Reveal from '../Reveal';
import Headline from '../Headline';
import SectionLabel from '../SectionLabel';

const totalItems = checklist.zones.reduce((sum, zone) => sum + zone.items.length, 0);

export default function ChecklistApp() {
  const [checked, setChecked] = useState<Record<number, boolean>>({});
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    try {
      const raw = window.localStorage.getItem(checklist.storageKey);
      if (raw) setChecked(JSON.parse(raw));
    } catch {
      // localStorage no disponible: seguimos con el estado en memoria.
    }
    setLoaded(true);
  }, []);

  useEffect(() => {
    if (!loaded) return;
    try {
      window.localStorage.setItem(checklist.storageKey, JSON.stringify(checked));
    } catch {
      // nada que hacer si no se puede persistir
    }
  }, [checked, loaded]);

  const count = useMemo(() => Object.values(checked).filter(Boolean).length, [checked]);
  const percent = Math.round((count / totalItems) * 100);
  const isHigh = count > checklist.results.threshold;

  function toggle(id: number) {
    setChecked((prev) => ({ ...prev, [id]: !prev[id] }));
  }

  function reset() {
    setChecked({});
    try {
      window.localStorage.removeItem(checklist.storageKey);
    } catch {
      // nada que hacer
    }
  }

  return (
    <>
      <section className="pt-32 md:pt-44 pb-12 md:pb-16">
        <div className="max-w-content mx-auto px-6 md:px-10">
          <Reveal>
            <SectionLabel>{checklist.tag}</SectionLabel>
            <Headline
              as="h1"
              lines={checklist.headline}
              italicIndex={checklist.headlineItalicIndex}
              className="text-4xl sm:text-5xl md:text-6xl mb-6 max-w-3xl"
            />
            <p className="text-base md:text-lg text-[#9A9A9E] max-w-xl leading-relaxed">
              {checklist.subtitle}
            </p>
          </Reveal>
        </div>
      </section>

      <div className="sticky top-16 md:top-20 z-30 bg-[#0B0B0C]/95 backdrop-blur border-y border-[#2A2A2E]">
        <div className="max-w-content mx-auto px-6 md:px-10 py-3 flex items-center gap-4">
          <span className="text-sm text-[#F5F5F3] font-medium shrink-0">
            {checklist.counterLabel}: {count}/{totalItems}
          </span>
          <div className="flex-1 h-1.5 rounded-full bg-[#2A2A2E] overflow-hidden">
            <div
              className={`h-full transition-all duration-300 ${isHigh ? 'bg-[#A6FF4D]' : 'bg-[#9A9A9E]'}`}
              style={{ width: `${percent}%` }}
            />
          </div>
          {count > 0 ? (
            <button
              type="button"
              onClick={reset}
              className="text-xs text-[#9A9A9E] hover:text-[#F5F5F3] transition-colors shrink-0"
            >
              {checklist.results.resetLabel}
            </button>
          ) : null}
        </div>
      </div>

      <section className="py-14 md:py-20">
        <div className="max-w-content mx-auto px-6 md:px-10 space-y-14 md:space-y-20">
          {checklist.zones.map((zone, zoneIndex) => (
            <Reveal key={zone.id} delay={zoneIndex * 40}>
              <h2 className="text-xs tracking-[0.2em] text-[#A6FF4D] mb-6">{zone.title.toUpperCase()}</h2>
              <ul className="divide-y divide-[#2A2A2E] border-t border-b border-[#2A2A2E]">
                {zone.items.map((item) => {
                  const isChecked = Boolean(checked[item.id]);
                  return (
                    <li key={item.id}>
                      <label className="flex items-start gap-4 py-5 cursor-pointer group">
                        <span className="relative mt-0.5 shrink-0">
                          <input
                            type="checkbox"
                            checked={isChecked}
                            onChange={() => toggle(item.id)}
                            className="peer sr-only"
                          />
                          <span
                            className={`flex items-center justify-center w-5 h-5 rounded-md border transition-colors ${
                              isChecked
                                ? 'bg-[#A6FF4D] border-[#A6FF4D]'
                                : 'border-[#2A2A2E] group-hover:border-[#9A9A9E]'
                            }`}
                          >
                            {isChecked ? (
                              <svg viewBox="0 0 16 16" className="w-3 h-3" fill="none" aria-hidden="true">
                                <path
                                  d="M3 8.5 6.2 12 13 4"
                                  stroke="#0B0B0C"
                                  strokeWidth="2"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                              </svg>
                            ) : null}
                          </span>
                        </span>
                        <span>
                          <span
                            className={`block text-sm md:text-base font-medium mb-1 transition-colors ${
                              isChecked ? 'text-[#F5F5F3]' : 'text-[#F5F5F3]/90'
                            }`}
                          >
                            {item.title}
                          </span>
                          <span className="block text-sm text-[#9A9A9E] leading-relaxed">
                            {item.description}
                          </span>
                        </span>
                      </label>
                    </li>
                  );
                })}
              </ul>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="py-16 md:py-24 border-t border-[#2A2A2E]">
        <div className="max-w-content mx-auto px-6 md:px-10">
          <Reveal>
            <div className="max-w-2xl mx-auto text-center rounded-2xl border border-[#2A2A2E] bg-[#141416] p-8 md:p-12">
              <p className="font-display font-bold text-2xl md:text-3xl text-[#F5F5F3] mb-4">
                {isHigh ? checklist.results.highTitle : checklist.results.lowTitle}
              </p>
              <p className="text-sm md:text-base text-[#9A9A9E] leading-relaxed mb-8">
                {isHigh
                  ? checklist.results.highMessage.replace(
                      '{threshold}',
                      String(checklist.results.threshold)
                    )
                  : checklist.results.lowMessage}
              </p>
              <a
                href={checklist.results.ctaHref}
                className="inline-flex items-center bg-[#A6FF4D] text-[#0B0B0C] text-sm font-medium px-8 py-3.5 rounded-full hover:opacity-90 transition-opacity"
              >
                {checklist.results.ctaLabel}
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
