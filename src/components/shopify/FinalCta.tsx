import { shopify } from '@/content/shopify';
import Reveal from './Reveal';
import Headline from './Headline';
import ContactForm from './ContactForm';

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
          <p className="text-base md:text-lg text-[#9A9A9E] max-w-xl mx-auto mb-16 leading-relaxed">
            {finalCta.subtitle}
          </p>
        </Reveal>

        <Reveal delay={100}>
          <div className="max-w-2xl mx-auto rounded-2xl border border-[#2A2A2E] bg-[#141416] p-6 md:p-10">
            <ContactForm />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
