'use client';

import { useEffect, useState } from 'react';
import { kit } from '@/content/kit';
import Reveal from '@/components/shopify/Reveal';
import Headline from '@/components/shopify/Headline';
import SectionLabel from '@/components/shopify/SectionLabel';
import KitForm from '../KitForm';

async function copyText(text: string) {
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch {
    const area = document.createElement('textarea');
    area.value = text;
    area.setAttribute('readonly', '');
    area.style.position = 'fixed';
    area.style.opacity = '0';
    document.body.appendChild(area);
    area.select();
    let ok = false;
    try {
      ok = document.execCommand('copy');
    } catch {
      ok = false;
    }
    document.body.removeChild(area);
    return ok;
  }
}

function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);
  return (
    <button
      type="button"
      onClick={async () => {
        if (await copyText(text)) {
          setCopied(true);
          setTimeout(() => setCopied(false), 1800);
        }
      }}
      className={`inline-flex items-center gap-1.5 text-xs font-medium rounded-full px-3.5 py-2 border transition-colors shrink-0 ${
        copied ? 'bg-[#A6FF4D] border-[#A6FF4D] text-[#0B0B0C]' : 'border-[#2A2A2E] text-[#F5F5F3] hover:border-[#A6FF4D] hover:text-[#A6FF4D]'
      }`}
    >
      <span aria-live="polite">{copied ? kit.copiedLabel : kit.copyLabel}</span>
    </button>
  );
}

function Gate({ onUnlock }: { onUnlock: () => void }) {
  const { gate } = kit;
  return (
    <section className="pt-32 md:pt-44 pb-20 md:pb-28">
      <div className="max-w-content mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          <div className="lg:col-span-7">
            <Reveal>
              <SectionLabel>{gate.tag}</SectionLabel>
              <Headline as="h1" lines={gate.headline} italicIndex={gate.headlineItalicIndex} className="text-4xl sm:text-5xl md:text-6xl mb-6" />
              <p className="text-base md:text-lg text-[#9A9A9E] max-w-xl leading-relaxed mb-10">{gate.subtitle}</p>
            </Reveal>
            <Reveal delay={80}>
              <ol className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {gate.preview.map((item, i) => (
                  <li key={item} className="flex items-center gap-3 rounded-xl border border-[#2A2A2E] bg-[#141416] px-4 py-3.5">
                    <span className="text-xs text-[#A6FF4D] tabular-nums">0{i + 1}</span>
                    <span className="text-sm text-[#F5F5F3]">{item}</span>
                  </li>
                ))}
              </ol>
            </Reveal>
          </div>
          <div className="lg:col-span-5 lg:sticky lg:top-28">
            <Reveal delay={100}>
              <div className="rounded-2xl border border-[#A6FF4D]/30 bg-[#141416] p-6 md:p-8">
                <p className="font-display font-bold text-2xl text-[#F5F5F3] mb-2">Déjame tu correo</p>
                <p className="text-sm text-[#9A9A9E] mb-6">y se desbloquea el kit al momento, aquí mismo.</p>
                <KitForm id="gate-kit" onUnlock={onUnlock} />
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

function NameList({ items }: { items: { name: string; what: string }[] }) {
  return (
    <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
      {items.map((item) => (
        <li key={item.name} className="rounded-xl border border-[#2A2A2E] bg-[#141416] p-5">
          <p className="font-display font-bold text-[#F5F5F3] mb-1">{item.name}</p>
          <p className="text-sm text-[#9A9A9E] leading-relaxed">{item.what}</p>
        </li>
      ))}
    </ul>
  );
}

function Content() {
  const { tools, stack, flow, prompts, finalCta } = kit;
  return (
    <>
      <section className="pt-32 md:pt-44 pb-12 md:pb-16">
        <div className="max-w-content mx-auto px-6 md:px-10">
          <Reveal>
            <SectionLabel>{kit.tag}</SectionLabel>
            <Headline as="h1" lines={kit.headline} italicIndex={kit.headlineItalicIndex} className="text-4xl sm:text-5xl md:text-6xl mb-6 max-w-3xl" />
            <p className="text-base md:text-lg text-[#9A9A9E] max-w-2xl leading-relaxed">{kit.subtitle}</p>
          </Reveal>
        </div>
      </section>

      <section className="py-12 md:py-16 border-t border-[#2A2A2E]">
        <div className="max-w-content mx-auto px-6 md:px-10">
          <h2 className="text-xs tracking-[0.2em] text-[#A6FF4D] mb-6">01 · {tools.title.toUpperCase()}</h2>
          <NameList items={tools.items} />
        </div>
      </section>

      <section className="py-12 md:py-16 border-t border-[#2A2A2E]">
        <div className="max-w-content mx-auto px-6 md:px-10">
          <h2 className="text-xs tracking-[0.2em] text-[#A6FF4D] mb-3">02 · {stack.title.toUpperCase()}</h2>
          <p className="text-sm md:text-base text-[#9A9A9E] mb-6 max-w-2xl">{stack.intro}</p>
          <NameList items={stack.items} />
        </div>
      </section>

      <section className="py-12 md:py-16 border-t border-[#2A2A2E]">
        <div className="max-w-content mx-auto px-6 md:px-10">
          <h2 className="text-xs tracking-[0.2em] text-[#A6FF4D] mb-6">03 · {flow.title.toUpperCase()}</h2>
          <ol className="grid grid-cols-1 md:grid-cols-5 gap-3">
            {flow.steps.map((step, i) => (
              <li key={step.title} className="rounded-xl border border-[#2A2A2E] bg-[#141416] p-5">
                <span className="block text-xs text-[#9A9A9E] tabular-nums mb-3">0{i + 1}</span>
                <p className="font-display font-bold text-[#F5F5F3] mb-2">{step.title}</p>
                <p className="text-sm text-[#9A9A9E] leading-relaxed">{step.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="py-12 md:py-16 border-t border-[#2A2A2E]">
        <div className="max-w-content mx-auto px-6 md:px-10">
          <h2 className="text-xs tracking-[0.2em] text-[#A6FF4D] mb-3">04 · {prompts.title.toUpperCase()}</h2>
          <p className="text-sm md:text-base text-[#9A9A9E] mb-6">{prompts.intro}</p>
          <div className="space-y-5">
            {prompts.items.map((p, i) => (
              <article key={p.title} className="rounded-2xl border border-[#2A2A2E] bg-[#141416] overflow-hidden">
                <header className="flex items-start justify-between gap-4 p-5 md:p-6">
                  <div className="flex items-start gap-4 min-w-0">
                    <span className="w-9 h-9 rounded-lg shrink-0 flex items-center justify-center text-xs font-medium tabular-nums border border-[#2A2A2E] text-[#A6FF4D]">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <div className="min-w-0">
                      <h3 className="font-display font-bold text-lg md:text-xl text-[#F5F5F3] mb-1">{p.title}</h3>
                      <p className="text-sm text-[#9A9A9E] leading-relaxed">{p.use}</p>
                    </div>
                  </div>
                  <CopyButton text={p.text} />
                </header>
                <pre className="border-t border-[#2A2A2E] bg-[#0B0B0C] p-5 md:p-6 text-[13px] leading-relaxed text-[#D6D6D3] whitespace-pre-wrap break-words font-mono max-h-[420px] overflow-y-auto">
                  {p.text}
                </pre>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 border-t border-[#2A2A2E]">
        <div className="max-w-content mx-auto px-6 md:px-10">
          <div className="max-w-2xl mx-auto text-center rounded-2xl border border-[#2A2A2E] bg-[#141416] p-8 md:p-12">
            <p className="font-display font-bold text-2xl md:text-3xl text-[#F5F5F3] mb-4">{finalCta.title}</p>
            <p className="text-sm md:text-base text-[#9A9A9E] leading-relaxed mb-8">{finalCta.text}</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <a href={finalCta.ctaHref} className="inline-flex items-center bg-[#A6FF4D] text-[#0B0B0C] text-sm font-medium px-8 py-3.5 rounded-full hover:opacity-90 transition-opacity">
                {finalCta.ctaLabel}
              </a>
              <a
                href={finalCta.secondaryHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-sm text-[#F5F5F3] border border-[#2A2A2E] px-6 py-3.5 rounded-full hover:border-[#A6FF4D] hover:text-[#A6FF4D] transition-colors"
              >
                {finalCta.secondaryLabel} ↗
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default function KitPage() {
  const [unlocked, setUnlocked] = useState(false);

  useEffect(() => {
    try {
      if (window.localStorage.getItem(kit.gate.unlockStorageKey) === 'true') setUnlocked(true);
    } catch {
      // sin localStorage, se queda en la pantalla de acceso
    }
  }, []);

  return unlocked ? <Content /> : <Gate onUnlock={() => setUnlocked(true)} />;
}
