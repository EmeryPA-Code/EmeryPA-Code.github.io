import Image from 'next/image';
import { site } from '@/content/site';
import Reveal from './Reveal';
import Headline from './Headline';
import SectionLabel from './SectionLabel';

export default function Projects() {
  const { projects } = site;

  return (
    <section id="proyectos" className="py-20 md:py-32 border-b border-line">
      <div className="max-w-content mx-auto px-6 md:px-10">
        <Reveal>
          <SectionLabel>{projects.tag}</SectionLabel>
          <Headline
            lines={projects.headline}
            italicIndex={projects.headlineItalicIndex}
            className="text-4xl md:text-5xl xl:text-6xl mb-16 md:mb-20"
          />
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-line border border-line">
          {projects.items.map((project, i) => (
            <Reveal key={project.name} delay={i * 90} className="bg-bg h-full">
              <div className="p-8 md:p-10 h-full flex flex-col">
                <div className="flex items-center justify-between gap-4 mb-4">
                  {project.logo ? (
                    <div className="inline-flex bg-ink px-3 py-2">
                      <Image
                        src={project.logo}
                        alt={project.name}
                        width={110}
                        height={36}
                        className="h-7 w-auto"
                      />
                    </div>
                  ) : (
                    <h3 className="text-2xl md:text-3xl font-serif italic text-ink">
                      {project.name}
                    </h3>
                  )}
                  <span className="text-xs text-ink-soft shrink-0">{project.role}</span>
                </div>
                <p className="text-sm md:text-base text-ink-soft leading-relaxed mb-6 flex-1">
                  {project.description}
                </p>
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <ul className="flex flex-wrap gap-2">
                    {project.stack.map((tag) => (
                      <li
                        key={tag}
                        className="text-xs text-ink-soft border border-line px-2.5 py-1"
                      >
                        {tag}
                      </li>
                    ))}
                  </ul>
                  {project.link ? (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-accent hover:underline shrink-0"
                    >
                      Ver proyecto →
                    </a>
                  ) : null}
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={projects.items.length * 90 + 60}>
          <div className="mt-12 md:mt-16 flex justify-center">
            <a
              href={projects.cta.href}
              className="inline-flex items-center border border-ink text-ink text-sm px-6 py-3 hover:border-accent hover:text-accent transition-colors"
            >
              {projects.cta.label}
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
