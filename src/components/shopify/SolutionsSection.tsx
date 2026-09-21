import { shopify } from '@/content/shopify';
import Reveal from './Reveal';
import Headline from './Headline';
import SectionLabel from './SectionLabel';
import OrderToastStack from './OrderToast';

function TicketVisual() {
  return (
    <div className="rounded-2xl border border-[#2A2A2E] bg-[#141416] p-6 h-full flex flex-col justify-end">
      <div className="flex items-end gap-2 h-28">
        {[35, 55, 45, 70, 90].map((h, i) => (
          <div
            key={i}
            className="flex-1 rounded-t-md bg-[#A6FF4D]/70 motion-safe:animate-pulse"
            style={{ height: `${h}%`, animationDelay: `${i * 150}ms` }}
          />
        ))}
      </div>
      <p className="mt-4 text-sm text-[#9A9A9E]">Ticket medio, últimos 5 pedidos</p>
    </div>
  );
}

function OrdersPanelVisual() {
  const rows = [
    { id: '#1042', customer: 'M. García', total: '89,00 €', status: 'Recompra' },
    { id: '#1041', customer: 'J. López', total: '54,50 €', status: 'Recompra' },
    { id: '#1039', customer: 'A. Ruiz', total: '112,00 €', status: 'Nuevo' },
  ];
  return (
    <div className="rounded-2xl border border-[#2A2A2E] bg-[#141416] p-6 h-full">
      <p className="text-xs text-[#9A9A9E] mb-4">Pedidos recientes</p>
      <div className="space-y-3">
        {rows.map((row) => (
          <div key={row.id} className="flex items-center justify-between text-sm border-b border-[#2A2A2E] pb-3 last:border-0 last:pb-0">
            <span className="text-[#9A9A9E]">{row.id}</span>
            <span className="text-[#F5F5F3]">{row.customer}</span>
            <span className="text-[#F5F5F3]">{row.total}</span>
            <span
              className={`text-xs px-2 py-1 rounded-full ${
                row.status === 'Recompra' ? 'bg-[#A6FF4D]/15 text-[#A6FF4D]' : 'bg-[#2A2A2E] text-[#9A9A9E]'
              }`}
            >
              {row.status}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function SolutionsSection() {
  const { solutions, hero } = shopify;

  return (
    <section id="soluciones" className="py-20 md:py-32 border-b border-[#2A2A2E]">
      <div className="max-w-content mx-auto px-6 md:px-10">
        <Reveal>
          <SectionLabel>{solutions.tag}</SectionLabel>
          <Headline
            lines={solutions.headline}
            italicIndex={solutions.headlineItalicIndex}
            className="text-3xl sm:text-4xl md:text-5xl xl:text-6xl mb-14 md:mb-20"
          />
        </Reveal>

        <div className="space-y-6">
          {solutions.blocks.map((block, i) => (
            <Reveal key={block.title} delay={i * 90}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 rounded-2xl border border-[#2A2A2E] bg-[#101011] p-6 md:p-10 items-center">
                <div className={i % 2 === 1 ? 'md:order-2' : ''}>
                  <h3 className="text-xl md:text-2xl font-medium text-[#F5F5F3] mb-3">{block.title}</h3>
                  <p className="text-sm md:text-base text-[#9A9A9E] leading-relaxed">{block.description}</p>
                </div>
                <div className={i % 2 === 1 ? 'md:order-1' : ''}>
                  {block.visual === 'notifications' ? (
                    <OrderToastStack items={hero.notifications} />
                  ) : block.visual === 'ticket' ? (
                    <TicketVisual />
                  ) : (
                    <OrdersPanelVisual />
                  )}
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={solutions.blocks.length * 90 + 60}>
          <div className="mt-12 md:mt-16 flex justify-center">
            <a
              href={solutions.cta.href}
              className="inline-flex items-center border border-[#2A2A2E] text-[#F5F5F3] text-sm px-7 py-3.5 rounded-full hover:border-[#A6FF4D] hover:text-[#A6FF4D] transition-colors"
            >
              {solutions.cta.label}
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
