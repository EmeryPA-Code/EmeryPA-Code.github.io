import { site } from '@/content/site';
import Reveal from './Reveal';
import Headline from './Headline';
import SectionLabel from './SectionLabel';

export default function Education() {
  const { education } = site;

  return (
    <section id="formacion" className="py-20 md:py-32 border-b border-line">
      <div className="max-w-content mx-auto px-6 md:px-10">
        <Reveal>
          <SectionLabel>{education.tag}</SectionLabel>
          <Headline
            lines={education.headline}
            italicIndex={education.headlineItalicIndex}
            className="text-4xl md:text-5xl xl:text-6xl mb-16 md:mb-20"
          />
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          <div className="lg:col-span-7">
            <ul className="space-y-px bg-line border border-line">
              {education.items.map((item, i) => (
                <Reveal key={item.title} delay={i * 80} className="bg-bg">
                  <li className="p-6 md:p-8">
                    <p className="text-xs tracking-[0.15em] text-ink-soft mb-2">{item.period}</p>
                    <h3 className="text-lg md:text-xl font-medium text-ink mb-1">{item.title}</h3>
                    <p className="text-sm text-ink-soft">{item.institution}</p>
                  </li>
                </Reveal>
              ))}
            </ul>

            <Reveal delay={200}>
              <p className="mt-8 text-sm text-ink-soft">
                <span className="font-medium text-ink">Idiomas: </span>
                {education.languages.join(' · ')}
              </p>
            </Reveal>
          </div>

          <div className="lg:col-span-5">
            <Reveal delay={120}>
              <details className="group border border-line">
                <summary className="cursor-pointer list-none p-6 md:p-8 flex items-center justify-between gap-4">
                  <span className="text-base font-medium text-ink">Certificaciones</span>
                  <span
                    aria-hidden="true"
                    className="text-accent text-xl leading-none transition-transform group-open:rotate-45"
                  >
                    +
                  </span>
                  <span className="sr-only">Ver todas</span>
                </summary>
                <ul className="px-6 md:px-8 pb-6 md:pb-8 space-y-3 border-t border-line pt-6">
                  {education.certifications.map((cert) => (
                    <li key={cert} className="text-sm text-ink-soft leading-relaxed pl-4 relative">
                      <span className="absolute left-0 top-2 w-1.5 h-1.5 bg-accent" />
                      {cert}
                    </li>
                  ))}
                </ul>
              </details>
            </Reveal>

            <Reveal delay={260}>
              <div className="mt-8">
                <a
                  href={education.cta.href}
                  className="inline-flex items-center bg-ink text-bg text-sm px-6 py-3 hover:bg-accent transition-colors"
                >
                  {education.cta.label}
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
