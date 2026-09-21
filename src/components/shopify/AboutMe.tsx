import Image from 'next/image';
import { shopify } from '@/content/shopify';
import Reveal from './Reveal';
import Headline from './Headline';
import SectionLabel from './SectionLabel';

export default function AboutMe() {
  const { about } = shopify;

  return (
    <section className="py-20 md:py-32 border-b border-[#2A2A2E]">
      <div className="max-w-content mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          <div className="lg:col-span-4">
            <Reveal>
              <div className="relative aspect-[4/5] w-full max-w-sm overflow-hidden rounded-2xl border border-[#2A2A2E] bg-[#141416]">
                <Image
                  src="/images/emery-portrait.jpg"
                  alt={about.portraitAlt}
                  fill
                  sizes="(min-width: 1024px) 320px, 80vw"
                  className="object-cover"
                />
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-8">
            <Reveal>
              <SectionLabel>{about.tag}</SectionLabel>
              <Headline
                lines={about.headline}
                italicIndex={about.headlineItalicIndex}
                className="text-3xl sm:text-4xl md:text-5xl mb-8"
              />
            </Reveal>

            <Reveal delay={80}>
              <div className="space-y-4 text-sm md:text-base text-[#9A9A9E] leading-relaxed max-w-2xl">
                {about.paragraphs.map((p) => (
                  <p key={p.slice(0, 24)}>{p}</p>
                ))}
              </div>
            </Reveal>

            <Reveal delay={160}>
              <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-px bg-[#2A2A2E] border border-[#2A2A2E] max-w-2xl">
                {about.facts.map((fact) => (
                  <div key={fact.label} className="bg-[#0B0B0C] p-5">
                    <p className="font-display font-bold text-2xl text-[#A6FF4D] mb-1">{fact.value}</p>
                    <p className="text-xs text-[#9A9A9E]">{fact.label}</p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
