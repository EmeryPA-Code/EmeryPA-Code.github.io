import Image from 'next/image';
import { site } from '@/content/site';
import Reveal from './Reveal';

export default function LogosStrip() {
  const { logos } = site;

  return (
    <section aria-label={logos.label} className="border-y border-line">
      <div className="max-w-content mx-auto px-6 md:px-10 py-10 md:py-12">
        <Reveal>
          <p className="text-xs tracking-[0.2em] text-ink-soft mb-8">{logos.label.toUpperCase()}</p>
        </Reveal>
        <Reveal delay={80}>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-6">
            {logos.items.map((logo) => (
              <div
                key={logo.src}
                className={`relative w-28 h-12 md:w-32 md:h-14 flex items-center justify-center ${
                  logo.dark ? 'bg-ink' : ''
                }`}
              >
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  fill
                  sizes="130px"
                  className={`object-contain p-1.5 ${logo.dark ? '' : 'opacity-70'}`}
                />
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
