import Image from 'next/image';
import { site } from '@/content/site';
import Reveal from './Reveal';

export default function Hero() {
  const { hero } = site;

  return (
    <section id="inicio" className="pt-32 md:pt-44 pb-20 md:pb-28">
      <div className="max-w-content mx-auto px-6 md:px-10">
        <Reveal>
          <p className="text-xs md:text-sm tracking-[0.2em] text-ink-soft mb-8">
            {hero.kicker}
          </p>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-end">
          <div className="lg:col-span-8">
            <Reveal delay={80}>
              <h1 className="font-sans font-medium leading-[0.98] tracking-tight text-ink text-[15vw] sm:text-6xl md:text-7xl xl:text-8xl">
                {hero.headline.map((word, i) => (
                  <span
                    key={word}
                    className={`block ${
                      i === hero.headlineItalicIndex ? 'font-serif italic font-normal' : ''
                    }`}
                  >
                    {word}
                  </span>
                ))}
              </h1>
            </Reveal>
          </div>

          <div className="lg:col-span-4">
            <Reveal delay={160}>
              <div className="relative aspect-[4/5] w-full max-w-sm ml-auto overflow-hidden bg-card">
                <Image
                  src="/images/emery-portrait.jpg"
                  alt={hero.portraitAlt}
                  fill
                  priority
                  sizes="(min-width: 1024px) 320px, 60vw"
                  className="object-cover grayscale-0"
                />
              </div>
              <p className="text-xs text-ink-soft mt-3 max-w-sm ml-auto text-right">
                {hero.portraitCaption}
              </p>
            </Reveal>
          </div>
        </div>

        <Reveal delay={220}>
          <div className="mt-12 md:mt-16 max-w-2xl">
            <p className="text-lg md:text-xl text-ink-soft leading-relaxed">{hero.subtitle}</p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href={hero.ctaPrimary.href}
                className="inline-flex items-center bg-ink text-bg text-sm px-6 py-3 hover:bg-accent transition-colors"
              >
                {hero.ctaPrimary.label}
              </a>
              <a
                href={hero.ctaSecondary.href}
                className="inline-flex items-center border border-ink text-ink text-sm px-6 py-3 hover:border-accent hover:text-accent transition-colors"
              >
                {hero.ctaSecondary.label}
              </a>
            </div>
          </div>
        </Reveal>

        <div className="mt-16 md:mt-24 grid grid-cols-1 sm:grid-cols-3 gap-px bg-line border-t border-b border-line">
          {hero.facts.map((fact, i) => (
            <Reveal key={fact.label} delay={280 + i * 80} className="bg-bg">
              <div className="p-6 md:p-8 h-full">
                {fact.logo ? (
                  <div className="inline-flex bg-ink px-3 py-2 mb-3">
                    <Image
                      src={fact.logo}
                      alt={fact.logoAlt}
                      width={100}
                      height={32}
                      className="h-6 w-auto"
                    />
                  </div>
                ) : (
                  <p className="font-serif italic text-3xl md:text-4xl text-accent mb-3">
                    {fact.value}
                  </p>
                )}
                <p className="text-sm font-medium text-ink mb-2">{fact.label}</p>
                <p className="text-sm text-ink-soft leading-relaxed">{fact.detail}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
