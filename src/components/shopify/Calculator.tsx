'use client';

import { useMemo, useState } from 'react';
import { shopify } from '@/content/shopify';
import Reveal from './Reveal';
import Headline from './Headline';
import SectionLabel from './SectionLabel';
import AnimatedCounter from './AnimatedCounter';

function Slider({
  label,
  value,
  min,
  max,
  step,
  unit,
  onChange,
}: {
  label: string;
  value: number;
  min: number;
  max: number;
  step: number;
  unit?: string;
  onChange: (v: number) => void;
}) {
  return (
    <div>
      <div className="flex items-baseline justify-between mb-2">
        <label className="text-sm text-[#9A9A9E]">{label}</label>
        <span className="text-sm font-medium text-[#F5F5F3]">
          {value.toLocaleString('es-ES')}
          {unit ?? ''}
        </span>
      </div>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="w-full accent-[#A6FF4D]"
      />
    </div>
  );
}

export default function Calculator() {
  const { calculator } = shopify;
  const [sessions, setSessions] = useState(calculator.sessions.default);
  const [conversion, setConversion] = useState(calculator.conversionRate.default);
  const [aov, setAov] = useState(calculator.aov.default);

  const current = useMemo(() => {
    const orders = sessions * (conversion / 100);
    return { orders, revenue: orders * aov };
  }, [sessions, conversion, aov]);

  const improved = useMemo(() => {
    const orders = sessions * ((conversion + calculator.improvementPoints) / 100);
    return { orders, revenue: orders * aov };
  }, [sessions, conversion, aov, calculator.improvementPoints]);

  const difference = improved.revenue - current.revenue;

  return (
    <section id="calculadora" className="py-20 md:py-32 border-b border-[#2A2A2E]">
      <div className="max-w-content mx-auto px-6 md:px-10">
        <Reveal>
          <SectionLabel>{calculator.tag}</SectionLabel>
          <Headline
            lines={calculator.headline}
            italicIndex={calculator.headlineItalicIndex}
            className="text-3xl sm:text-4xl md:text-5xl xl:text-6xl mb-4"
          />
          <p className="text-[#9A9A9E] max-w-xl mb-14 md:mb-16">{calculator.subtitle}</p>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Reveal>
            <div className="rounded-2xl border border-[#2A2A2E] bg-[#141416] p-6 md:p-8 space-y-8">
              <Slider
                label={calculator.sessions.label}
                value={sessions}
                min={calculator.sessions.min}
                max={calculator.sessions.max}
                step={calculator.sessions.step}
                onChange={setSessions}
              />
              <Slider
                label={calculator.conversionRate.label}
                value={conversion}
                min={calculator.conversionRate.min}
                max={calculator.conversionRate.max}
                step={calculator.conversionRate.step}
                unit={calculator.conversionRate.unit}
                onChange={setConversion}
              />
              <Slider
                label={calculator.aov.label}
                value={aov}
                min={calculator.aov.min}
                max={calculator.aov.max}
                step={calculator.aov.step}
                unit={calculator.aov.unit}
                onChange={setAov}
              />
            </div>
          </Reveal>

          <Reveal delay={100}>
            <div className="rounded-2xl border border-[#2A2A2E] bg-[#101011] p-6 md:p-8 h-full flex flex-col gap-6">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-xs text-[#9A9A9E] mb-1">{calculator.currentLabel}</p>
                  <p className="text-2xl font-display font-bold text-[#F5F5F3]">
                    <AnimatedCounter value={current.revenue} suffix=" €" />
                  </p>
                  <p className="text-xs text-[#9A9A9E] mt-1">
                    <AnimatedCounter value={current.orders} /> {calculator.ordersLabel.toLowerCase()}
                  </p>
                </div>
                <div>
                  <p className="text-xs text-[#A6FF4D] mb-1">{calculator.improvedLabel}</p>
                  <p className="text-2xl font-display font-bold text-[#A6FF4D]">
                    <AnimatedCounter value={improved.revenue} suffix=" €" />
                  </p>
                  <p className="text-xs text-[#9A9A9E] mt-1">
                    <AnimatedCounter value={improved.orders} /> {calculator.ordersLabel.toLowerCase()}
                  </p>
                </div>
              </div>

              <div className="mt-auto pt-6 border-t border-[#2A2A2E]">
                <p className="text-xs text-[#9A9A9E] mb-1">{calculator.differenceLabel}</p>
                <p className="text-3xl md:text-4xl font-display font-bold text-[#A6FF4D]">
                  +<AnimatedCounter value={difference} suffix=" €" />
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
