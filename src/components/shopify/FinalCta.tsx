import { shopify } from '@/content/shopify';
import Reveal from './Reveal';
import Headline from './Headline';

export default function FinalCta() {
  const { finalCta } = shopify;

  return (
    <section id="contacto" className="py-24 md:py-36">
      <div className="max-w-content mx-auto px-6 md:px-10 text-center">
        <Reveal>
          <p className="text-xs md:text-sm tracking-[0.2em] text-[#A6FF4D] mb-8">{finalCta.tag}</p>
          <Headline
            lines={finalCta.headline}
            italicIndex={finalCta.headlineItalicIndex}
            className="text-4xl md:text-6xl xl:text-7xl mb-8 justify-center"
          />
          <p className="text-base md:text-lg text-[#9A9A9E] max-w-xl mx-auto mb-12 leading-relaxed">
            {finalCta.subtitle}
          </p>
          <a
            href={shopify.ctaHref}
            className="inline-flex items-center bg-[#A6FF4D] text-[#0B0B0C] text-sm font-medium px-8 py-4 rounded-full hover:opacity-90 transition-opacity"
          >
            {shopify.ctaLabel}
          </a>
        </Reveal>
      </div>
    </section>
  );
}
