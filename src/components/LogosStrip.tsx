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
          <div className="flex flex-wrap items-center gap-x-8 gap-y-6">
            {logos.items.map((logo) =>
              logo.dark ? (
                <div key={logo.src} className="bg-ink px-4 py-2.5 flex items-center">
                  <Image
                    src={logo.src}
                    alt={logo.alt}
                    width={120}
                    height={36}
                    className="h-6 w-auto"
                  />
                </div>
              ) : (
                <Image
                  key={logo.src}
                  src={logo.src}
                  alt={logo.alt}
                  width={120}
                  height={36}
                  className="h-8 w-auto opacity-70"
                />
              )
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
