import Image from 'next/image';
import { shopify } from '@/content/shopify';
import Reveal from './Reveal';
import Marquee from './Marquee';
import OrderToastStack from './OrderToast';
import ShopifyBadge from './icons/ShopifyBadge';

export default function Hero() {
  const { hero } = shopify;

  return (
    <section id="inicio" className="pt-32 md:pt-44 pb-16 md:pb-24">
      <div className="max-w-content mx-auto px-6 md:px-10">
        <Reveal>
          <p className="text-xs md:text-sm tracking-[0.2em] text-[#A6FF4D] mb-6">{hero.eyebrow}</p>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8">
          <div className="lg:col-span-7">
            <Reveal delay={60}>
              <h1 className="font-display font-bold leading-[1.02] tracking-tight text-[#F5F5F3] text-4xl sm:text-5xl md:text-6xl xl:text-7xl">
                <span className="inline-flex items-center flex-wrap gap-x-3 gap-y-2">
                  <span>{hero.headlineBefore}</span>
                  <ShopifyBadge />
                  <span>{hero.headlineAfter}</span>
                </span>
                <span className="block mt-1">{hero.headlineLine2}</span>
              </h1>
            </Reveal>

            <Reveal delay={140}>
              <p className="mt-6 text-lg md:text-xl text-[#9A9A9E] max-w-xl leading-relaxed">
                {hero.subtitle}
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <a
                  href={shopify.ctaHref}
                  className="inline-flex items-center bg-[#A6FF4D] text-[#0B0B0C] text-sm font-medium px-7 py-3.5 rounded-full hover:opacity-90 transition-opacity"
                >
                  {hero.ctaPrimary}
                </a>
                <a
                  href="#soluciones"
                  className="inline-flex items-center border border-[#2A2A2E] text-[#F5F5F3] text-sm px-7 py-3.5 rounded-full hover:border-[#A6FF4D] hover:text-[#A6FF4D] transition-colors"
                >
                  {hero.ctaSecondary}
                </a>
              </div>
              <p className="mt-5 text-sm text-[#9A9A9E]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#A6FF4D] inline-block mr-2 align-middle" />
                {hero.scarcity}
              </p>
            </Reveal>
          </div>

          <div className="lg:col-span-5 flex lg:justify-end">
            <Reveal delay={200}>
              <OrderToastStack items={hero.notifications} />
            </Reveal>
          </div>
        </div>
      </div>

      <Reveal delay={260}>
        <div className="mt-16 md:mt-24">
          <Marquee durationSeconds={32}>
            {hero.screenshots.map((shot) => (
              <div
                key={shot.src}
                className="w-[280px] md:w-[340px] aspect-[10/7] rounded-xl overflow-hidden border border-[#2A2A2E] shrink-0"
              >
                <Image src={shot.src} alt={shot.alt} width={400} height={280} className="w-full h-full object-cover" />
              </div>
            ))}
          </Marquee>
        </div>
      </Reveal>
    </section>
  );
}
