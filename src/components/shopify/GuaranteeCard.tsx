import { shopify } from '@/content/shopify';
import Reveal from './Reveal';
import Headline from './Headline';
import SectionLabel from './SectionLabel';

export default function GuaranteeCard() {
  const { guarantee } = shopify;

  return (
    <section className="py-20 md:py-28 border-b border-[#2A2A2E]">
      <div className="max-w-content mx-auto px-6 md:px-10">
        <Reveal>
          <div className="rounded-2xl border border-[#A6FF4D]/30 bg-gradient-to-br from-[#141416] to-[#101011] p-8 md:p-14 text-center max-w-3xl mx-auto">
            <SectionLabel>{guarantee.tag}</SectionLabel>
            <Headline
              lines={guarantee.headline}
              italicIndex={guarantee.headlineItalicIndex}
              className="text-3xl sm:text-4xl md:text-5xl mb-6 justify-center"
            />
            <p className="text-[#9A9A9E] leading-relaxed">{guarantee.text}</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
