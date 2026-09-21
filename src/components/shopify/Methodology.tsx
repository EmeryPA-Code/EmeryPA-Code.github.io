'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { shopify } from '@/content/shopify';
import Reveal from './Reveal';
import Headline from './Headline';
import SectionLabel from './SectionLabel';
import TerminalBlock from './TerminalBlock';
import {
  PaletteIcon,
  TypographyIcon,
  LayoutIcon,
  ImageIcon,
  ComponentsIcon,
  ResponsiveIcon,
} from './icons/DesignIcons';

const designIcons = [PaletteIcon, TypographyIcon, LayoutIcon, ImageIcon, ComponentsIcon, ResponsiveIcon];

function PhaseVisual({ visual }: { visual: 'checklist' | 'audit' | 'design' | 'code' }) {
  if (visual === 'checklist') {
    return (
      <div className="space-y-3">
        {['Objetivos de negocio', 'Márgenes y AOV actual', 'Fuentes de tráfico', 'Stack técnico actual'].map(
          (label, i) => (
            <div key={label} className="flex items-center gap-3">
              <span className="w-5 h-5 rounded-md border border-[#A6FF4D] flex items-center justify-center text-[#A6FF4D] text-xs">
                ✓
              </span>
              <span className="text-sm text-[#9A9A9E]">{label}</span>
            </div>
          )
        )}
      </div>
    );
  }

  if (visual === 'audit') {
    return (
      <div className="space-y-3">
        {[
          { label: 'Ficha de producto', score: 42 },
          { label: 'Checkout', score: 68 },
          { label: 'Velocidad móvil', score: 35 },
        ].map((row) => (
          <div key={row.label}>
            <div className="flex justify-between text-xs text-[#9A9A9E] mb-1">
              <span>{row.label}</span>
              <span>{row.score}/100</span>
            </div>
            <div className="h-1.5 rounded-full bg-[#2A2A2E] overflow-hidden">
              <div className="h-full bg-[#A6FF4D]" style={{ width: `${row.score}%` }} />
            </div>
          </div>
        ))}
      </div>
    );
  }

  if (visual === 'design') {
    return (
      <div className="grid grid-cols-3 gap-2">
        {designIcons.map((Icon, i) => (
          <div
            key={i}
            className="aspect-square rounded-lg border border-[#2A2A2E] bg-[#0B0B0C] flex items-center justify-center"
          >
            <Icon />
          </div>
        ))}
      </div>
    );
  }

  return null;
}

export default function Methodology() {
  const { methodology } = shopify;
  const [active, setActive] = useState(0);
  const phase = methodology.phases[active];

  return (
    <section id="metodo" className="py-20 md:py-32 border-b border-[#2A2A2E]">
      <div className="max-w-content mx-auto px-6 md:px-10">
        <Reveal>
          <SectionLabel>{methodology.tag}</SectionLabel>
          <Headline
            lines={methodology.headline}
            italicIndex={methodology.headlineItalicIndex}
            className="text-3xl sm:text-4xl md:text-5xl xl:text-6xl mb-14 md:mb-20"
          />
        </Reveal>

        <Reveal>
          <div className="flex flex-wrap gap-2 mb-10">
            {methodology.phases.map((p, i) => (
              <button
                key={p.label}
                type="button"
                onClick={() => setActive(i)}
                className={`text-sm px-4 py-2.5 rounded-full border transition-colors ${
                  active === i
                    ? 'border-[#A6FF4D] text-[#A6FF4D] bg-[#A6FF4D]/10'
                    : 'border-[#2A2A2E] text-[#9A9A9E] hover:text-[#F5F5F3]'
                }`}
              >
                {p.label}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center rounded-2xl border border-[#2A2A2E] bg-[#101011] p-6 md:p-10 min-h-[280px]">
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={phase.label}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.35 }}
              >
                <p className="text-xs tracking-[0.15em] text-[#A6FF4D] mb-3">{phase.weeks}</p>
                <h3 className="text-xl md:text-2xl font-medium text-[#F5F5F3] mb-4">{phase.label}</h3>
                <p className="text-sm md:text-base text-[#9A9A9E] leading-relaxed">{phase.description}</p>
              </motion.div>
            </AnimatePresence>

            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={`${phase.label}-visual`}
                initial={{ opacity: 0, scale: 0.97 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.97 }}
                transition={{ duration: 0.35 }}
              >
                {phase.visual === 'code' && phase.codeSnippet ? (
                  <TerminalBlock lines={phase.codeSnippet} />
                ) : (
                  <PhaseVisual visual={phase.visual} />
                )}
              </motion.div>
            </AnimatePresence>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
