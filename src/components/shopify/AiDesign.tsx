import Image from 'next/image';
import { shopify } from '@/content/shopify';
import Reveal from './Reveal';
import Headline from './Headline';
import SectionLabel from './SectionLabel';

function CheckIcon() {
  return (
    <svg viewBox="0 0 16 16" className="w-4 h-4 mt-1 shrink-0" fill="none" aria-hidden="true">
      <path d="M3 8.5 6.2 12 13 4" stroke="#A6FF4D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ArrowIcon({ className = '', color = 'currentColor' }: { className?: string; color?: string }) {
  return (
    <svg viewBox="0 0 16 16" className={className} fill="none" aria-hidden="true">
      <path d="M5 11 11 5M6 5h5v5" stroke={color} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function AiDesign() {
  const { aiDesign } = shopify;
  const { example, leadMagnet } = aiDesign;

  return (
    <section id="ia" className="py-20 md:py-32 border-b border-[#2A2A2E] scroll-mt-20">
      <div className="max-w-content mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-6">
            <Reveal>
              <SectionLabel>{aiDesign.tag}</SectionLabel>
              <Headline
                lines={aiDesign.headline}
                italicIndex={aiDesign.headlineItalicIndex}
                className="text-3xl sm:text-4xl md:text-5xl mb-6"
              />
              <p className="text-base md:text-lg text-[#9A9A9E] leading-relaxed mb-8 max-w-xl">{aiDesign.intro}</p>
            </Reveal>

            <Reveal delay={80}>
              <ul className="space-y-3 mb-10">
                {aiDesign.points.map((point) => (
                  <li key={point} className="flex items-start gap-3 text-sm md:text-base text-[#F5F5F3]">
                    <CheckIcon />
                    {point}
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={140}>
              <div className="rounded-2xl border border-[#2A2A2E] bg-[#141416] p-6">
                <p className="text-xs tracking-[0.15em] text-[#A6FF4D] mb-2">{example.label}</p>
                <p className="font-display font-bold text-xl text-[#F5F5F3] mb-2">{example.title}</p>
                <p className="text-sm text-[#9A9A9E] leading-relaxed mb-5">{example.description}</p>
                <a
                  href={example.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-medium text-[#F5F5F3] border border-[#2A2A2E] rounded-full px-5 py-2.5 hover:border-[#A6FF4D] hover:text-[#A6FF4D] transition-colors"
                >
                  {example.ctaLabel}
                  <ArrowIcon className="w-3.5 h-3.5" />
                </a>
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-6">
            <Reveal delay={120}>
              <a
                href={example.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${example.ctaLabel}: ${example.title}`}
                className="group block rounded-2xl border border-[#2A2A2E] bg-[#141416] overflow-hidden shadow-2xl shadow-black/40 transition-transform duration-500 lg:rotate-[1.5deg] hover:rotate-0 hover:-translate-y-1"
              >
                <div className="flex items-center gap-3 px-4 py-3 border-b border-[#2A2A2E]">
                  <span className="flex gap-1.5" aria-hidden="true">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#2A2A2E]" />
                    <span className="w-2.5 h-2.5 rounded-full bg-[#2A2A2E]" />
                    <span className="w-2.5 h-2.5 rounded-full bg-[#2A2A2E]" />
                  </span>
                  <span className="flex-1 min-w-0 truncate text-xs text-[#9A9A9E] bg-[#0B0B0C] rounded-md px-3 py-1.5">
                    {example.urlLabel}
                  </span>
                  <ArrowIcon className="w-3.5 h-3.5 text-[#9A9A9E] group-hover:text-[#A6FF4D] transition-colors" />
                </div>
                <div className="relative aspect-[4/5] bg-[#1E3FD8]">
                  <Image
                    src={example.image}
                    alt={example.imageAlt}
                    fill
                    sizes="(min-width: 1024px) 560px, 100vw"
                    className="object-cover object-top"
                  />
                </div>
              </a>
            </Reveal>
          </div>
        </div>

        <Reveal delay={60}>
          <div className="mt-16 md:mt-20 rounded-2xl border border-[#A6FF4D]/30 bg-[#A6FF4D]/[0.06] p-6 md:p-8 flex flex-col md:flex-row md:items-center gap-6 md:gap-10">
            <div className="flex-1">
              <p className="text-xs tracking-[0.2em] text-[#A6FF4D] mb-2">{leadMagnet.tag}</p>
              <p className="font-display font-bold text-2xl md:text-3xl text-[#F5F5F3] mb-2">{leadMagnet.title}</p>
              <p className="text-sm md:text-base text-[#9A9A9E] max-w-xl">{leadMagnet.text}</p>
            </div>
            <a
              href={leadMagnet.href}
              className="self-start md:self-auto inline-flex items-center gap-2 bg-[#A6FF4D] text-[#0B0B0C] text-sm font-medium px-7 py-3.5 rounded-full hover:opacity-90 transition-opacity shrink-0"
            >
              {leadMagnet.ctaLabel}
              <svg viewBox="0 0 16 16" className="w-3.5 h-3.5" fill="none" aria-hidden="true">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="#0B0B0C" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
