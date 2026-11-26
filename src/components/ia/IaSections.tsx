import Image from 'next/image';
import { ia } from '@/content/ia';
import Reveal from '@/components/shopify/Reveal';
import Headline from '@/components/shopify/Headline';
import SectionLabel from '@/components/shopify/SectionLabel';
import KitForm from './KitForm';

function Check() {
  return (
    <svg viewBox="0 0 16 16" className="w-4 h-4 mt-0.5 shrink-0" fill="none" aria-hidden="true">
      <path d="M3 8.5 6.2 12 13 4" stroke="#A6FF4D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ArrowUpRight({ className = 'w-3.5 h-3.5' }: { className?: string }) {
  return (
    <svg viewBox="0 0 16 16" className={className} fill="none" aria-hidden="true">
      <path d="M5 11 11 5M6 5h5v5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

/* ---------- Hero con el kit ---------- */

export function IaHero() {
  const { hero, kitCard } = ia;

  return (
    <section id="inicio" className="relative pt-32 md:pt-44 pb-20 md:pb-28 border-b border-[#2A2A2E] overflow-hidden">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 right-[-10%] w-[600px] h-[600px] rounded-full bg-[#A6FF4D]/[0.07] blur-3xl"
      />
      <div className="relative max-w-content mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-7">
            <Reveal>
              <SectionLabel>{hero.tag}</SectionLabel>
              <Headline
                as="h1"
                lines={hero.headline}
                italicIndex={hero.headlineItalicIndex}
                className="text-4xl sm:text-5xl md:text-6xl mb-6"
              />
              <p className="text-base md:text-lg text-[#9A9A9E] max-w-xl leading-relaxed mb-8">{hero.subtitle}</p>
              <div className="flex flex-wrap items-center gap-3 mb-12">
                <a
                  href={hero.primaryCta.href}
                  className="inline-flex items-center bg-[#A6FF4D] text-[#0B0B0C] text-sm font-medium px-7 py-3.5 rounded-full hover:opacity-90 transition-opacity"
                >
                  {hero.primaryCta.label}
                </a>
                <a
                  href={hero.secondaryCta.href}
                  className="inline-flex items-center text-sm text-[#F5F5F3] border border-[#2A2A2E] px-6 py-3.5 rounded-full hover:border-[#A6FF4D] hover:text-[#A6FF4D] transition-colors"
                >
                  {hero.secondaryCta.label}
                </a>
              </div>
            </Reveal>
            <Reveal delay={100}>
              <dl className="grid grid-cols-3 gap-4 max-w-xl">
                {hero.proof.map((item) => (
                  <div key={item.label} className="border-l border-[#2A2A2E] pl-4">
                    <dt className="sr-only">{item.label}</dt>
                    <dd className="font-display font-bold text-xl sm:text-2xl text-[#F5F5F3]">{item.value}</dd>
                    <dd className="text-xs text-[#9A9A9E] mt-1 leading-snug">{item.label}</dd>
                  </div>
                ))}
              </dl>
            </Reveal>
          </div>

          <div id="kit" className="lg:col-span-5 scroll-mt-24">
            <Reveal delay={120}>
              <div className="rounded-2xl border border-[#A6FF4D]/30 bg-[#141416] p-6 md:p-8 shadow-2xl shadow-black/40">
                <p className="text-xs tracking-[0.2em] text-[#A6FF4D] mb-3">{kitCard.tag}</p>
                <p className="font-display font-bold text-3xl text-[#F5F5F3] mb-3">{kitCard.title}</p>
                <p className="text-sm text-[#9A9A9E] leading-relaxed mb-5">{kitCard.text}</p>
                <ul className="space-y-2.5 mb-6">
                  {kitCard.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-2.5 text-sm text-[#F5F5F3]">
                      <Check />
                      {b}
                    </li>
                  ))}
                </ul>
                <KitForm id="hero-kit" />
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- Servicios ---------- */

function ServiceIcon({ name }: { name: 'web' | 'app' | 'ai' }) {
  const common = { stroke: '#A6FF4D', strokeWidth: 1.6, strokeLinecap: 'round' as const, strokeLinejoin: 'round' as const };
  return (
    <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" aria-hidden="true">
      {name === 'web' ? (
        <>
          <rect x="3" y="4.5" width="18" height="15" rx="2" {...common} />
          <path d="M3 9h18M6 7h.01M8.5 7h.01" {...common} />
        </>
      ) : null}
      {name === 'app' ? (
        <>
          <rect x="7" y="2.5" width="10" height="19" rx="2.5" {...common} />
          <path d="M11 18.5h2" {...common} />
        </>
      ) : null}
      {name === 'ai' ? (
        <>
          <path d="M10 3.5 11.6 8a3 3 0 0 0 1.9 1.9L18 11.5l-4.5 1.6a3 3 0 0 0-1.9 1.9L10 19.5 8.4 15a3 3 0 0 0-1.9-1.9L2 11.5l4.5-1.6A3 3 0 0 0 8.4 8L10 3.5Z" {...common} />
          <path d="M18 3v4M16 5h4" {...common} />
        </>
      ) : null}
    </svg>
  );
}

export function IaServices() {
  const { services } = ia;
  return (
    <section id="servicios" className="py-20 md:py-32 border-b border-[#2A2A2E] scroll-mt-20">
      <div className="max-w-content mx-auto px-6 md:px-10">
        <Reveal>
          <SectionLabel>{services.tag}</SectionLabel>
          <Headline lines={services.headline} italicIndex={services.headlineItalicIndex} className="text-3xl sm:text-4xl md:text-5xl mb-6" />
          <p className="text-base md:text-lg text-[#9A9A9E] max-w-2xl leading-relaxed mb-14">{services.intro}</p>
        </Reveal>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {services.items.map((s, i) => (
            <Reveal key={s.title} delay={i * 80}>
              <article className="h-full rounded-2xl border border-[#2A2A2E] bg-[#141416] p-6 md:p-7 flex flex-col hover:border-[#A6FF4D]/40 transition-colors">
                <div className="w-11 h-11 rounded-xl border border-[#2A2A2E] flex items-center justify-center mb-6">
                  <ServiceIcon name={s.icon} />
                </div>
                <h3 className="font-display font-bold text-xl text-[#F5F5F3] mb-3">{s.title}</h3>
                <p className="text-sm text-[#9A9A9E] leading-relaxed mb-4">{s.text}</p>
                <p className="text-sm text-[#F5F5F3] mb-6">{s.idealFor}</p>
                <ul className="mt-auto flex flex-wrap gap-2">
                  {s.tags.map((t) => (
                    <li key={t} className="text-xs text-[#9A9A9E] border border-[#2A2A2E] rounded-full px-3 py-1">
                      {t}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Proyectos ---------- */

type Project = (typeof ia.projects.items)[number];

function ProjectCover({ project }: { project: Project }) {
  if (project.image) {
    return (
      <Image
        src={project.image}
        alt={`Captura de ${project.name}`}
        fill
        sizes="(min-width: 1024px) 600px, 100vw"
        className="object-cover object-top transition-transform duration-700 group-hover:scale-[1.03]"
      />
    );
  }
  // Portada tipográfica mientras no haya captura.
  return (
    <div
      className="absolute inset-0 flex flex-col justify-between p-6"
      style={{ background: `radial-gradient(120% 120% at 100% 0%, ${project.accent}55 0%, #141416 55%)` }}
    >
      <span className="text-[11px] tracking-[0.2em] text-[#F5F5F3]/70">{project.category.toUpperCase()}</span>
      <span className="font-display font-bold text-4xl md:text-5xl text-[#F5F5F3] leading-none">{project.name}</span>
      <span className="text-xs text-[#F5F5F3]/70">{project.urlLabel}</span>
    </div>
  );
}

export function IaProjects() {
  const { projects } = ia;
  return (
    <section id="proyectos" className="py-20 md:py-32 border-b border-[#2A2A2E] scroll-mt-20">
      <div className="max-w-content mx-auto px-6 md:px-10">
        <Reveal>
          <SectionLabel>{projects.tag}</SectionLabel>
          <Headline lines={projects.headline} italicIndex={projects.headlineItalicIndex} className="text-3xl sm:text-4xl md:text-5xl mb-6" />
          <p className="text-base md:text-lg text-[#9A9A9E] max-w-2xl leading-relaxed mb-14">{projects.intro}</p>
        </Reveal>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {projects.items.map((p, i) => (
            <Reveal key={p.name} delay={(i % 2) * 80} className={i === 0 ? 'md:col-span-2' : ''}>
              <a
                href={p.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`group h-full rounded-2xl border border-[#2A2A2E] bg-[#141416] overflow-hidden flex hover:border-[#A6FF4D]/40 transition-colors ${
                  i === 0 ? 'flex-col lg:flex-row' : 'flex-col'
                }`}
              >
                <div className={`relative aspect-[16/10] overflow-hidden border-[#2A2A2E] ${i === 0 ? 'lg:w-3/5 lg:aspect-auto lg:min-h-[340px] border-b lg:border-b-0 lg:border-r' : 'border-b'}`}>
                  <ProjectCover project={p} />
                </div>
                <div className={`p-6 md:p-7 flex flex-col flex-1 ${i === 0 ? 'lg:justify-center' : ''}`}>
                  <p className="text-[11px] tracking-[0.2em] text-[#9A9A9E] mb-2">{p.category.toUpperCase()}</p>
                  <h3 className="font-display font-bold text-2xl text-[#F5F5F3] mb-3">{p.name}</h3>
                  <p className="text-sm text-[#9A9A9E] leading-relaxed mb-5">{p.description}</p>
                  <div className="mt-auto flex flex-wrap items-center justify-between gap-3">
                    <span className="text-xs font-medium text-[#0B0B0C] bg-[#A6FF4D] rounded-full px-3 py-1">{p.highlight}</span>
                    <span className="inline-flex items-center gap-1.5 text-sm text-[#F5F5F3] group-hover:text-[#A6FF4D] transition-colors">
                      {p.urlLabel}
                      <ArrowUpRight />
                    </span>
                  </div>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Cómo trabajo ---------- */

export function IaMethod() {
  const { method } = ia;
  return (
    <section id="metodo" className="py-20 md:py-32 border-b border-[#2A2A2E] scroll-mt-20">
      <div className="max-w-content mx-auto px-6 md:px-10">
        <Reveal>
          <SectionLabel>{method.tag}</SectionLabel>
          <Headline lines={method.headline} italicIndex={method.headlineItalicIndex} className="text-3xl sm:text-4xl md:text-5xl mb-14" />
        </Reveal>
        <ol className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-10">
          {method.steps.map((step, i) => (
            <Reveal key={step.title} delay={i * 70}>
              <li className="h-full rounded-2xl border border-[#2A2A2E] bg-[#141416] p-6">
                <span className="block font-display text-sm text-[#A6FF4D] tabular-nums mb-4">0{i + 1}</span>
                <p className="font-display font-bold text-lg text-[#F5F5F3] mb-2">{step.title}</p>
                <p className="text-sm text-[#9A9A9E] leading-relaxed">{step.text}</p>
              </li>
            </Reveal>
          ))}
        </ol>
        <Reveal>
          <div className="rounded-2xl border border-[#2A2A2E] p-6 md:p-8 md:flex md:items-center md:gap-10">
            <p className="font-display font-bold text-xl md:text-2xl text-[#F5F5F3] mb-3 md:mb-0 md:w-1/3">{method.why.title}</p>
            <p className="text-sm md:text-base text-[#9A9A9E] leading-relaxed md:flex-1">{method.why.text}</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------- YouTube ---------- */

export function IaYouTube() {
  const { youtube } = ia;
  return (
    <section id="youtube" className="py-20 md:py-32 border-b border-[#2A2A2E] scroll-mt-20">
      <div className="max-w-content mx-auto px-6 md:px-10">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          <Reveal>
            <SectionLabel>{youtube.tag}</SectionLabel>
            <Headline lines={youtube.headline} italicIndex={youtube.headlineItalicIndex} className="text-3xl sm:text-4xl md:text-5xl mb-4" />
            <p className="text-base md:text-lg text-[#9A9A9E] max-w-xl leading-relaxed">{youtube.intro}</p>
          </Reveal>
          <a
            href={youtube.channelUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="self-start md:self-auto inline-flex items-center gap-2 text-sm text-[#F5F5F3] border border-[#2A2A2E] px-6 py-3 rounded-full hover:border-[#A6FF4D] hover:text-[#A6FF4D] transition-colors shrink-0"
          >
            {youtube.channelLabel}
            <ArrowUpRight />
          </a>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {youtube.videos.map((v, i) => (
            <Reveal key={v.id} delay={i * 80}>
              <a
                href={`https://www.youtube.com/watch?v=${v.id}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group block rounded-2xl border border-[#2A2A2E] bg-[#141416] overflow-hidden hover:border-[#A6FF4D]/40 transition-colors"
              >
                <div className="relative aspect-video overflow-hidden bg-[#0B0B0C]">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={`https://i.ytimg.com/vi/${v.id}/hqdefault.jpg`}
                    alt=""
                    loading="lazy"
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                  />
                  <span className="absolute inset-0 flex items-center justify-center">
                    <span className="w-14 h-14 rounded-full bg-[#0B0B0C]/80 border border-[#F5F5F3]/20 flex items-center justify-center group-hover:bg-[#A6FF4D] transition-colors">
                      <svg viewBox="0 0 16 16" className="w-5 h-5 ml-0.5 text-[#F5F5F3] group-hover:text-[#0B0B0C]" aria-hidden="true">
                        <path d="M4 2.5v11l9-5.5-9-5.5Z" fill="currentColor" />
                      </svg>
                    </span>
                  </span>
                </div>
                <p className="p-5 text-sm text-[#F5F5F3] leading-snug">{v.title}</p>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Banner del kit ---------- */

export function IaKitBanner() {
  const { kitBanner } = ia;
  return (
    <section className="py-16 md:py-24 border-b border-[#2A2A2E]">
      <div className="max-w-content mx-auto px-6 md:px-10">
        <Reveal>
          <div className="rounded-2xl border border-[#A6FF4D]/30 bg-[#A6FF4D]/[0.06] p-6 md:p-10 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <p className="text-xs tracking-[0.2em] text-[#A6FF4D] mb-3">{kitBanner.tag}</p>
              <p className="font-display font-bold text-3xl md:text-4xl text-[#F5F5F3] mb-3">{kitBanner.title}</p>
              <p className="text-sm md:text-base text-[#9A9A9E] leading-relaxed max-w-lg">{kitBanner.text}</p>
            </div>
            <KitForm id="banner-kit" />
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------- FAQ ---------- */

export function IaFaq() {
  const { faq } = ia;
  return (
    <section id="faq" className="py-20 md:py-32 border-b border-[#2A2A2E] scroll-mt-20">
      <div className="max-w-content mx-auto px-6 md:px-10">
        <div className="max-w-3xl">
          <Reveal>
            <SectionLabel>{faq.tag}</SectionLabel>
            <Headline lines={faq.headline} italicIndex={faq.headlineItalicIndex} className="text-3xl sm:text-4xl md:text-5xl mb-14" />
          </Reveal>
          <div className="divide-y divide-[#2A2A2E] border-t border-b border-[#2A2A2E]">
            {faq.items.map((item) => (
              <details key={item.question} className="group py-5">
                <summary className="cursor-pointer list-none flex items-center justify-between gap-4">
                  <span className="text-base text-[#F5F5F3] font-medium">{item.question}</span>
                  <span aria-hidden="true" className="text-[#A6FF4D] text-xl leading-none shrink-0 transition-transform group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="mt-4 text-sm md:text-base text-[#9A9A9E] leading-relaxed">{item.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
