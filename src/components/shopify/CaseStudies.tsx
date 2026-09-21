import Image from 'next/image';
import { shopify } from '@/content/shopify';
import Reveal from './Reveal';
import Headline from './Headline';
import SectionLabel from './SectionLabel';

export default function CaseStudies() {
  const { cases } = shopify;

  return (
    <section id="casos" className="py-20 md:py-32 border-b border-[#2A2A2E]">
      <div className="max-w-content mx-auto px-6 md:px-10">
        <Reveal>
          <SectionLabel>{cases.tag}</SectionLabel>
          <Headline
            lines={cases.headline}
            italicIndex={cases.headlineItalicIndex}
            className="text-3xl sm:text-4xl md:text-5xl xl:text-6xl mb-14 md:mb-20"
          />
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cases.items.map((item, i) => (
            <Reveal key={item.name} delay={i * 100} className="h-full">
              <div className="h-full rounded-2xl border border-[#2A2A2E] bg-[#141416] p-6 md:p-7 flex flex-col hover:border-[#A6FF4D]/40 transition-colors">
                <div className="relative w-24 h-9 mb-6 bg-[#F5F5F3] rounded-md px-2 py-1.5">
                  <Image src={item.logo} alt={item.name} fill sizes="96px" className="object-contain p-1" />
                </div>

                <p className="text-xs tracking-[0.15em] text-[#9A9A9E] mb-1">RETO</p>
                <p className="text-sm text-[#F5F5F3] mb-4 leading-relaxed">{item.challenge}</p>

                <p className="text-xs tracking-[0.15em] text-[#9A9A9E] mb-1">QUÉ HICE</p>
                <p className="text-sm text-[#F5F5F3] mb-4 leading-relaxed">{item.action}</p>

                <p className="text-xs tracking-[0.15em] text-[#A6FF4D] mb-1">RESULTADO</p>
                <p className="text-sm text-[#9A9A9E] leading-relaxed mt-auto">{item.result}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
