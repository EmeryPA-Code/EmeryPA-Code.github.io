import { shopify } from '@/content/shopify';
import Reveal from './Reveal';

export default function ComplementaryServices() {
  const { complementary } = shopify;

  return (
    <section className="py-14 md:py-20 border-b border-[#2A2A2E]">
      <div className="max-w-content mx-auto px-6 md:px-10">
        <Reveal>
          <p className="text-xs tracking-[0.2em] text-[#9A9A9E] mb-8">{complementary.tag}</p>
          <p className="text-lg md:text-xl text-[#F5F5F3] mb-8 max-w-2xl">{complementary.headline}</p>
        </Reveal>
        <Reveal delay={80}>
          <div className="flex flex-wrap gap-3">
            {complementary.items.map((item) => (
              <div
                key={item.name}
                className="group relative rounded-full border border-[#2A2A2E] px-5 py-2.5 text-sm text-[#9A9A9E] hover:border-[#A6FF4D] hover:text-[#F5F5F3] transition-colors cursor-default"
                title={item.description}
              >
                {item.name}
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
