import { shopify } from '@/content/shopify';
import Reveal from './Reveal';
import Headline from './Headline';
import SectionLabel from './SectionLabel';

export default function FaqAccordion() {
  const { faq } = shopify;

  return (
    <section id="faq" className="py-20 md:py-32 border-b border-[#2A2A2E]">
      <div className="max-w-content mx-auto px-6 md:px-10">
      <div className="max-w-3xl">
        <Reveal>
          <SectionLabel>{faq.tag}</SectionLabel>
          <Headline
            lines={faq.headline}
            italicIndex={faq.headlineItalicIndex}
            className="text-3xl sm:text-4xl md:text-5xl mb-14 md:mb-16"
          />
        </Reveal>

        <div className="divide-y divide-[#2A2A2E] border-t border-b border-[#2A2A2E]">
          {faq.items.map((item, i) => (
            <Reveal key={item.question} delay={i * 50}>
              <details className="group py-5">
                <summary className="cursor-pointer list-none flex items-center justify-between gap-4">
                  <span className="text-base text-[#F5F5F3] font-medium">{item.question}</span>
                  <span
                    aria-hidden="true"
                    className="text-[#A6FF4D] text-xl leading-none shrink-0 transition-transform group-open:rotate-45"
                  >
                    +
                  </span>
                </summary>
                <p className="mt-3 text-sm text-[#9A9A9E] leading-relaxed pr-8">{item.answer}</p>
              </details>
            </Reveal>
          ))}
        </div>
      </div>
      </div>
    </section>
  );
}
