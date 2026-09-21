import Image from 'next/image';
import { shopify } from '@/content/shopify';
import Reveal from './Reveal';
import Marquee from './Marquee';

export default function LogosMarquee() {
  const { logos } = shopify;

  return (
    <section aria-label={logos.label} className="border-y border-[#2A2A2E] py-10 md:py-12">
      <Reveal>
        <p className="text-center text-xs tracking-[0.2em] text-[#9A9A9E] mb-8">
          {logos.label.toUpperCase()}
        </p>
      </Reveal>
      <Reveal delay={80}>
        <Marquee durationSeconds={24}>
          {logos.items.map((logo) => (
            <div
              key={logo.src}
              className="relative w-28 h-12 flex items-center justify-center bg-[#F5F5F3] rounded-lg px-3 py-2 shrink-0"
            >
              <Image src={logo.src} alt={logo.alt} fill sizes="120px" className="object-contain p-2" />
            </div>
          ))}
        </Marquee>
      </Reveal>
    </section>
  );
}
