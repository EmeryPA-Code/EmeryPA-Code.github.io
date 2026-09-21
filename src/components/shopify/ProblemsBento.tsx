import { shopify } from '@/content/shopify';
import Reveal from './Reveal';
import Headline from './Headline';
import SectionLabel from './SectionLabel';
import {
  TemplateIcon,
  SpeedIcon,
  TicketIcon,
  CacIcon,
  AppsIcon,
  BlindIcon,
  CartIcon,
} from './icons/ProblemIcons';

const icons = {
  template: TemplateIcon,
  speed: SpeedIcon,
  ticket: TicketIcon,
  cac: CacIcon,
  apps: AppsIcon,
  blind: BlindIcon,
  cart: CartIcon,
};

export default function ProblemsBento() {
  const { problems } = shopify;

  return (
    <section id="problemas" className="py-20 md:py-32 border-b border-[#2A2A2E]">
      <div className="max-w-content mx-auto px-6 md:px-10">
        <Reveal>
          <SectionLabel>{problems.tag}</SectionLabel>
          <Headline
            lines={problems.headline}
            italicIndex={problems.headlineItalicIndex}
            className="text-3xl sm:text-4xl md:text-5xl xl:text-6xl mb-14 md:mb-20 max-w-3xl"
          />
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {problems.items.map((item, i) => {
            const Icon = icons[item.icon];
            return (
              <Reveal key={item.title} delay={i * 70}>
                <div className="h-full rounded-2xl border border-[#2A2A2E] bg-[#141416] p-6 md:p-7 hover:border-[#A6FF4D]/40 transition-colors">
                  <Icon />
                  <h3 className="mt-5 text-base md:text-lg font-medium text-[#F5F5F3] mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-[#9A9A9E] leading-relaxed">{item.description}</p>
                </div>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={problems.items.length * 70 + 60}>
          <div className="mt-12 md:mt-16 flex justify-center">
            <a
              href={problems.cta.href}
              className="inline-flex items-center bg-[#A6FF4D] text-[#0B0B0C] text-sm font-medium px-7 py-3.5 rounded-full hover:opacity-90 transition-opacity"
            >
              {problems.cta.label}
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
