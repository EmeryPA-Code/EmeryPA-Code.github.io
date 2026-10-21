'use client';

import { useState, type FormEvent } from 'react';
import { site } from '@/content/site';
import { shopify } from '@/content/shopify';
import { checklist } from '@/content/checklist';
import Reveal from '../Reveal';
import Headline from '../Headline';
import SectionLabel from '../SectionLabel';

type Status = 'idle' | 'submitting' | 'error';

const inputClasses =
  'bg-[#0B0B0C] border border-[#2A2A2E] rounded-lg text-[#F5F5F3] placeholder:text-[#9A9A9E] px-3.5 py-3 text-sm focus:outline-none focus:border-[#A6FF4D] transition-colors';

const previewItems = checklist.zones
  .flatMap((zone) => zone.items)
  .slice(0, 4);

export default function ChecklistGate({ onUnlock }: { onUnlock: () => void }) {
  const { gate } = checklist;
  const [status, setStatus] = useState<Status>('idle');

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus('submitting');

    const form = event.currentTarget;
    const formData = new FormData(form);
    const dial = formData.get('whatsappDial');
    const number = formData.get('whatsappNumber');
    formData.set('whatsapp', `${dial} ${number}`.trim());
    formData.delete('whatsappDial');
    formData.delete('whatsappNumber');
    formData.set('origen', 'Checklist 20 fallos');

    try {
      const response = await fetch(`https://formspree.io/f/${site.contactForm.formspreeId}`, {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: formData,
      });

      if (response.ok) {
        try {
          window.localStorage.setItem(gate.unlockStorageKey, 'true');
        } catch {
          // si no se puede persistir, igualmente desbloqueamos para esta sesión
        }
        onUnlock();
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  }

  return (
    <section className="pt-32 md:pt-44 pb-20 md:pb-28">
      <div className="max-w-content mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          <div className="lg:col-span-7">
            <Reveal>
              <SectionLabel>{gate.tag}</SectionLabel>
              <Headline
                as="h1"
                lines={gate.headline}
                italicIndex={gate.headlineItalicIndex}
                className="text-4xl sm:text-5xl md:text-6xl mb-6"
              />
              <p className="text-base md:text-lg text-[#9A9A9E] max-w-xl leading-relaxed mb-8">
                {gate.subtitle}
              </p>
            </Reveal>

            <Reveal delay={80}>
              <ul className="space-y-3 mb-10">
                {gate.benefits.map((benefit) => (
                  <li key={benefit} className="flex items-start gap-3 text-sm md:text-base text-[#F5F5F3]">
                    <svg viewBox="0 0 16 16" className="w-4 h-4 mt-1 shrink-0" fill="none" aria-hidden="true">
                      <path
                        d="M3 8.5 6.2 12 13 4"
                        stroke="#A6FF4D"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    {benefit}
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={140}>
              <div className="relative rounded-2xl border border-[#2A2A2E] bg-[#141416] p-6 md:p-7 overflow-hidden">
                <p className="text-xs tracking-[0.15em] text-[#9A9A9E] mb-4">
                  {gate.previewLabel.toUpperCase()}
                </p>
                <ul className="space-y-4 blur-[3px] select-none pointer-events-none">
                  {previewItems.map((item) => (
                    <li key={item.id} className="flex items-start gap-3">
                      <span className="w-5 h-5 rounded-md border border-[#2A2A2E] shrink-0 mt-0.5" />
                      <span className="text-sm text-[#F5F5F3]">{item.title}</span>
                    </li>
                  ))}
                </ul>
                <div className="absolute inset-0 bg-gradient-to-t from-[#141416] via-[#141416]/70 to-transparent flex items-end justify-center pb-6">
                  <span className="inline-flex items-center gap-2 text-xs text-[#9A9A9E] bg-[#0B0B0C] border border-[#2A2A2E] rounded-full px-4 py-2">
                    <svg viewBox="0 0 16 16" className="w-3.5 h-3.5" fill="none" aria-hidden="true">
                      <rect x="3" y="7" width="10" height="7" rx="1.5" stroke="#9A9A9E" strokeWidth="1.3" />
                      <path d="M5 7V5a3 3 0 0 1 6 0v2" stroke="#9A9A9E" strokeWidth="1.3" />
                    </svg>
                    Desbloquea los 20 puntos completos
                  </span>
                </div>
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-5">
            <Reveal delay={100}>
              <div className="rounded-2xl border border-[#2A2A2E] bg-[#141416] p-6 md:p-8">
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label htmlFor="gate-email" className="block text-sm text-[#9A9A9E] mb-2">
                      {gate.fields.email.label}
                    </label>
                    <input
                      id="gate-email"
                      name="email"
                      type="email"
                      required
                      placeholder={gate.fields.email.placeholder}
                      className={`${inputClasses} w-full`}
                    />
                  </div>

                  <div>
                    <label htmlFor="gate-whatsapp" className="block text-sm text-[#9A9A9E] mb-2">
                      {gate.fields.whatsapp.label}
                    </label>
                    <div className="flex gap-2">
                      <select
                        id="whatsappDial"
                        name="whatsappDial"
                        defaultValue={shopify.intakeForm.countryCodes[0].dial}
                        aria-label="Prefijo del país"
                        className={`${inputClasses} dark-select w-24 md:w-28 shrink-0`}
                      >
                        {shopify.intakeForm.countryCodes.map((c) => (
                          <option key={c.code} value={c.dial}>
                            {c.code} {c.dial}
                          </option>
                        ))}
                      </select>
                      <input
                        id="gate-whatsapp"
                        name="whatsappNumber"
                        type="tel"
                        required
                        placeholder={gate.fields.whatsapp.placeholder}
                        className={`${inputClasses} flex-1 min-w-0`}
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={status === 'submitting'}
                    className="w-full inline-flex items-center justify-center bg-[#A6FF4D] text-[#0B0B0C] text-sm font-medium px-8 py-3.5 rounded-full hover:opacity-90 transition-opacity disabled:opacity-60"
                  >
                    {status === 'submitting' ? gate.submittingLabel : gate.submitLabel}
                  </button>

                  {status === 'error' ? (
                    <p className="text-sm text-[#A6FF4D]" role="alert">
                      {gate.errorMessage}
                    </p>
                  ) : null}

                  <p className="text-xs text-[#9A9A9E] text-center">{gate.privacyNote}</p>
                </form>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
