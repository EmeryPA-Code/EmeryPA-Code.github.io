'use client';

import { useState } from 'react';
import { prompts } from '@/content/prompts';
import Reveal from '../Reveal';
import Headline from '../Headline';
import SectionLabel from '../SectionLabel';

async function copyText(text: string) {
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch {
    // Alternativa para navegadores sin acceso al portapapeles
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

  async function handleClick() {
    if (await copyText(text)) {
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    }
  }

  return (
    <button
      type="button"
      onClick={handleClick}
      className={`inline-flex items-center gap-1.5 text-xs font-medium rounded-full px-3.5 py-2 border transition-colors shrink-0 ${
        copied
          ? 'bg-[#A6FF4D] border-[#A6FF4D] text-[#0B0B0C]'
          : 'border-[#2A2A2E] text-[#F5F5F3] hover:border-[#A6FF4D] hover:text-[#A6FF4D]'
      }`}
    >
      <svg viewBox="0 0 16 16" className="w-3.5 h-3.5" fill="none" aria-hidden="true">
        {copied ? (
          <path d="M3 8.5 6.2 12 13 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        ) : (
          <>
            <rect x="5.5" y="5.5" width="8" height="8" rx="1.5" stroke="currentColor" strokeWidth="1.4" />
            <path d="M3.5 10.5V3.8c0-.7.6-1.3 1.3-1.3h5.7" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
          </>
        )}
      </svg>
      <span aria-live="polite">{copied ? prompts.copiedLabel : prompts.copyLabel}</span>
    </button>
  );
}

function PromptCard({
  number,
  title,
  use,
  text,
  highlight = false,
}: {
  number: string;
  title: string;
  use: string;
  text: string;
  highlight?: boolean;
}) {
  return (
    <article
      className={`rounded-2xl border bg-[#141416] overflow-hidden ${
        highlight ? 'border-[#A6FF4D]/40' : 'border-[#2A2A2E]'
      }`}
    >
      <header className="flex items-start justify-between gap-4 p-5 md:p-6">
        <div className="flex items-start gap-4 min-w-0">
          <span
            className={`w-9 h-9 rounded-lg shrink-0 flex items-center justify-center text-xs font-medium tabular-nums ${
              highlight ? 'bg-[#A6FF4D] text-[#0B0B0C]' : 'border border-[#2A2A2E] text-[#A6FF4D]'
            }`}
          >
            {number}
          </span>
          <div className="min-w-0">
            <h3 className="font-display font-bold text-lg md:text-xl text-[#F5F5F3] mb-1">{title}</h3>
            <p className="text-sm text-[#9A9A9E] leading-relaxed">{use}</p>
          </div>
        </div>
        <CopyButton text={text} />
      </header>
      <pre className="border-t border-[#2A2A2E] bg-[#0B0B0C] p-5 md:p-6 text-[13px] leading-relaxed text-[#D6D6D3] whitespace-pre-wrap break-words font-mono max-h-[420px] overflow-y-auto">
        {text}
      </pre>
    </article>
  );
}

export default function PromptsApp() {
  const { steps, base, items, finalCta } = prompts;

  return (
    <>
      <section className="pt-32 md:pt-44 pb-12 md:pb-16">
        <div className="max-w-content mx-auto px-6 md:px-10">
          <Reveal>
            <SectionLabel>{prompts.tag}</SectionLabel>
            <Headline
              as="h1"
              lines={prompts.headline}
              italicIndex={prompts.headlineItalicIndex}
              className="text-4xl sm:text-5xl md:text-6xl mb-6 max-w-3xl"
            />
            <p className="text-base md:text-lg text-[#9A9A9E] max-w-2xl leading-relaxed">{prompts.subtitle}</p>
          </Reveal>
        </div>
      </section>

      <section className="pb-14 md:pb-20">
        <div className="max-w-content mx-auto px-6 md:px-10">
          <Reveal>
            <h2 className="text-xs tracking-[0.2em] text-[#A6FF4D] mb-6">{steps.title}</h2>
            <ol className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {steps.items.map((step, i) => (
                <li key={step.title} className="rounded-2xl border border-[#2A2A2E] bg-[#141416] p-5">
                  <span className="block text-xs text-[#9A9A9E] tabular-nums mb-3">0{i + 1}</span>
                  <p className="font-display font-bold text-[#F5F5F3] mb-2">{step.title}</p>
                  <p className="text-sm text-[#9A9A9E] leading-relaxed">{step.text}</p>
                </li>
              ))}
            </ol>
            <p className="mt-5 text-sm text-[#9A9A9E]">
              <span className="text-[#F5F5F3]">Truco:</span> {steps.tip}
            </p>
          </Reveal>
        </div>
      </section>

      <section className="py-14 md:py-20 border-t border-[#2A2A2E]">
        <div className="max-w-content mx-auto px-6 md:px-10 space-y-6">
          <Reveal>
            <PromptCard number="00" title={base.title} use={base.use} text={base.text} highlight />
          </Reveal>
          {items.map((item, i) => (
            <Reveal key={item.title} delay={40}>
              <PromptCard number={String(i + 1).padStart(2, '0')} title={item.title} use={item.use} text={item.text} />
            </Reveal>
          ))}
        </div>
      </section>

      <section className="py-16 md:py-24 border-t border-[#2A2A2E]">
        <div className="max-w-content mx-auto px-6 md:px-10">
          <Reveal>
            <div className="max-w-2xl mx-auto text-center rounded-2xl border border-[#2A2A2E] bg-[#141416] p-8 md:p-12">
              <p className="font-display font-bold text-2xl md:text-3xl text-[#F5F5F3] mb-4">{finalCta.title}</p>
              <p className="text-sm md:text-base text-[#9A9A9E] leading-relaxed mb-8">{finalCta.text}</p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                <a
                  href={finalCta.ctaHref}
                  className="inline-flex items-center bg-[#A6FF4D] text-[#0B0B0C] text-sm font-medium px-8 py-3.5 rounded-full hover:opacity-90 transition-opacity"
                >
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
          </Reveal>
        </div>
      </section>
    </>
  );
}
