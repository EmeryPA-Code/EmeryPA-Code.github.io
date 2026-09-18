import { site } from '@/content/site';
import Reveal from './Reveal';
import Headline from './Headline';
import ContactForm from './ContactForm';

export default function FinalCta() {
  const { finalCta, contact } = site;

  return (
    <section id="contacto" className="py-24 md:py-36 bg-ink text-bg">
      <div className="max-w-content mx-auto px-6 md:px-10 text-center">
        <Reveal>
          <p className="text-xs md:text-sm tracking-[0.2em] text-accent mb-8">{finalCta.tag}</p>
          <Headline
            lines={finalCta.headline}
            italicIndex={finalCta.headlineItalicIndex}
            className="text-4xl md:text-6xl xl:text-7xl mb-8 !text-bg"
          />
          <p className="text-base md:text-lg text-bg/70 max-w-xl mx-auto mb-12 leading-relaxed">
            {finalCta.subtitle}
          </p>
        </Reveal>

        <Reveal delay={120}>
          <div className="max-w-2xl mx-auto">
            <ContactForm />
          </div>
        </Reveal>

        <Reveal delay={200}>
          <div className="mt-16 pt-10 border-t border-bg/15 max-w-2xl mx-auto">
            <p className="text-sm text-bg/60 mb-6">
              O escríbeme directamente a{' '}
              <a href={`mailto:${finalCta.email}`} className="text-bg hover:text-accent transition-colors">
                {finalCta.email}
              </a>
            </p>
            <div className="flex items-center justify-center gap-6">
              <a
                href={contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-bg/70 hover:text-bg transition-colors"
              >
                LinkedIn
              </a>
              <a
                href={contact.x}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-bg/70 hover:text-bg transition-colors"
              >
                X
              </a>
              <a
                href={contact.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-bg/70 hover:text-bg transition-colors"
              >
                Instagram
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
