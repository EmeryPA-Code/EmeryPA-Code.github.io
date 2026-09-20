import { site } from '@/content/site';
import Reveal from './Reveal';
import Headline from './Headline';
import SectionLabel from './SectionLabel';
import GrowthIcon from './icons/GrowthIcon';
import CodeIcon from './icons/CodeIcon';
import AiIcon from './icons/AiIcon';

const icons = {
  growth: GrowthIcon,
  code: CodeIcon,
  ai: AiIcon,
};

export default function WhatIDo() {
  const { whatIDo } = site;

  return (
    <section id="lo-que-hago" className="py-20 md:py-32 border-b border-line">
      <div className="max-w-content mx-auto px-6 md:px-10">
        <Reveal>
          <SectionLabel>{whatIDo.tag}</SectionLabel>
          <Headline
            lines={whatIDo.headline}
            italicIndex={whatIDo.headlineItalicIndex}
            className="text-4xl md:text-5xl xl:text-6xl mb-16 md:mb-20"
          />
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-line border border-line">
          {whatIDo.cards.map((card, i) => {
            const Icon = icons[card.icon];
            return (
              <Reveal key={card.title} delay={i * 100} className="bg-bg h-full">
                <div className="p-8 md:p-10 h-full flex flex-col">
                  <div className="w-24 mb-8">
                    <Icon />
                  </div>
                  <h3 className="text-xl md:text-2xl font-medium text-ink mb-4">{card.title}</h3>
                  <p className="text-sm md:text-base text-ink-soft leading-relaxed mb-6 flex-1">
                    {card.description}
                  </p>
                  <ul className="flex flex-wrap gap-2">
                    {card.tags.map((tag) => (
                      <li
                        key={tag}
                        className="text-xs text-ink-soft border border-line px-2.5 py-1"
                      >
                        {tag}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={300}>
          <p className="mt-12 md:mt-16 text-lg md:text-xl font-serif italic text-ink text-center max-w-2xl mx-auto">
            {whatIDo.closing}
          </p>
          <div className="mt-8 flex justify-center">
            <a
              href={whatIDo.cta.href}
              className="inline-flex items-center bg-ink text-bg text-sm px-6 py-3 hover:bg-accent transition-colors"
            >
              {whatIDo.cta.label}
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
