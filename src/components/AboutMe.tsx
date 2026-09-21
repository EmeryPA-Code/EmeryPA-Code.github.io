import { site } from '@/content/site';
import Reveal from './Reveal';
import Headline from './Headline';
import SectionLabel from './SectionLabel';

export default function AboutMe() {
  const { about } = site;

  return (
    <section id="sobre-mi" className="py-20 md:py-32 border-b border-line">
      <div className="max-w-content mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          <div className="lg:col-span-5">
            <Reveal>
              <SectionLabel>{about.tag}</SectionLabel>
              <Headline
                lines={about.headline}
                italicIndex={about.headlineItalicIndex}
                className="text-4xl md:text-5xl xl:text-6xl"
              />
            </Reveal>
          </div>

          <div className="lg:col-span-7">
            <Reveal delay={100}>
              <div className="space-y-5 text-base md:text-lg text-ink-soft leading-relaxed">
                {about.paragraphs.map((p) => (
                  <p key={p.slice(0, 24)}>{p}</p>
                ))}
              </div>
            </Reveal>

            <Reveal delay={200}>
              <p className="mt-10 pl-6 border-l-2 border-accent text-xl md:text-2xl font-serif italic text-ink leading-snug">
                {about.highlight}
              </p>
            </Reveal>

            <Reveal delay={260}>
              <div className="mt-10">
                <a
                  href={about.cta.href}
                  className="inline-flex items-center bg-ink text-bg text-sm px-6 py-3 hover:bg-accent transition-colors"
                >
                  {about.cta.label}
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
