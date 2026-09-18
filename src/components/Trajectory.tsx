import { site } from '@/content/site';
import Reveal from './Reveal';
import Headline from './Headline';
import SectionLabel from './SectionLabel';

export default function Trajectory() {
  const { trajectory } = site;

  return (
    <section id="trayectoria" className="py-20 md:py-32 border-b border-line">
      <div className="max-w-content mx-auto px-6 md:px-10">
        <Reveal>
          <SectionLabel>{trajectory.tag}</SectionLabel>
          <Headline
            lines={trajectory.headline}
            italicIndex={trajectory.headlineItalicIndex}
            className="text-4xl md:text-5xl xl:text-6xl mb-16 md:mb-20"
          />
        </Reveal>

        <Reveal>
          <div className="bg-card p-8 md:p-12 mb-16 md:mb-20">
            <p className="text-xs tracking-[0.2em] text-accent mb-4">
              {trajectory.current.label.toUpperCase()}
            </p>
            <div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-2 mb-4">
              <h3 className="text-xl md:text-2xl font-medium text-ink">
                {trajectory.current.role}
              </h3>
              <span className="text-sm text-ink-soft shrink-0">{trajectory.current.period}</span>
            </div>
            <p className="text-sm md:text-base text-ink-soft leading-relaxed max-w-3xl">
              {trajectory.current.description}
            </p>
          </div>
        </Reveal>

        <ol className="divide-y divide-line border-t border-line">
          {trajectory.timeline.map((item, i) => (
            <Reveal key={`${item.company}-${item.year}`} delay={i * 70}>
              <li className="py-6 md:py-7 grid grid-cols-1 md:grid-cols-12 gap-2 md:gap-6 md:items-baseline">
                <span className="md:col-span-2 text-sm text-ink-soft">{item.year}</span>
                <span className="md:col-span-3 text-base font-medium text-ink">
                  {item.company}
                </span>
                <span className="md:col-span-3 text-sm text-ink-soft">
                  {item.role} · {item.location}
                </span>
                <p className="md:col-span-4 text-sm text-ink-soft leading-relaxed">
                  {item.description}
                </p>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
