'use client';

import { useState, type FormEvent } from 'react';
import { site } from '@/content/site';
import { ia } from '@/content/ia';
import Reveal from '@/components/shopify/Reveal';
import Headline from '@/components/shopify/Headline';
import SectionLabel from '@/components/shopify/SectionLabel';

type Status = 'idle' | 'submitting' | 'success' | 'error';

const inputClasses =
  'bg-[#0B0B0C] border border-[#2A2A2E] rounded-lg text-[#F5F5F3] placeholder:text-[#9A9A9E] px-3.5 py-3 text-sm focus:outline-none focus:border-[#A6FF4D] transition-colors w-full';

export default function IaContact() {
  const { contact } = ia;
  const [status, setStatus] = useState<Status>('idle');

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus('submitting');
    const form = event.currentTarget;
    const formData = new FormData(form);
    formData.set('origen', contact.origin);

    try {
      const response = await fetch(`https://formspree.io/f/${site.contactForm.formspreeId}`, {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: formData,
      });
      if (response.ok) {
        setStatus('success');
        form.reset();
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  }

  return (
    <section id="contacto" className="py-20 md:py-32 scroll-mt-20">
      <div className="max-w-content mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5">
            <Reveal>
              <SectionLabel>{contact.tag}</SectionLabel>
              <Headline lines={contact.headline} italicIndex={contact.headlineItalicIndex} className="text-3xl sm:text-4xl md:text-5xl mb-6" />
              <p className="text-base md:text-lg text-[#9A9A9E] leading-relaxed">{contact.text}</p>
            </Reveal>
          </div>
          <div className="lg:col-span-7">
            <Reveal delay={80}>
              <div className="rounded-2xl border border-[#2A2A2E] bg-[#141416] p-6 md:p-8">
                {status === 'success' ? (
                  <p className="text-base md:text-lg text-[#F5F5F3] text-center py-10" role="status">
                    {contact.successMessage}
                  </p>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label htmlFor="ia-name" className="block text-sm text-[#9A9A9E] mb-2">
                          {contact.fields.name.label}
                        </label>
                        <input id="ia-name" name="name" type="text" required autoComplete="name" placeholder={contact.fields.name.placeholder} className={inputClasses} />
                      </div>
                      <div>
                        <label htmlFor="ia-email" className="block text-sm text-[#9A9A9E] mb-2">
                          {contact.fields.email.label}
                        </label>
                        <input id="ia-email" name="email" type="email" required autoComplete="email" placeholder={contact.fields.email.placeholder} className={inputClasses} />
                      </div>
                    </div>
                    <fieldset>
                      <legend className="block text-sm text-[#9A9A9E] mb-2">{contact.fields.type.label}</legend>
                      <div className="flex flex-wrap gap-2">
                        {contact.fields.type.options.map((opt, i) => (
                          <label key={opt} className="cursor-pointer">
                            <input type="radio" name="tipo" value={opt} defaultChecked={i === 0} className="peer sr-only" />
                            <span className="inline-block text-sm text-[#9A9A9E] border border-[#2A2A2E] rounded-full px-4 py-2 transition-colors peer-checked:border-[#A6FF4D] peer-checked:text-[#A6FF4D] peer-focus-visible:ring-2 peer-focus-visible:ring-[#A6FF4D]/50">
                              {opt}
                            </span>
                          </label>
                        ))}
                      </div>
                    </fieldset>
                    <div>
                      <label htmlFor="ia-message" className="block text-sm text-[#9A9A9E] mb-2">
                        {contact.fields.message.label}
                      </label>
                      <textarea id="ia-message" name="message" required rows={5} placeholder={contact.fields.message.placeholder} className={`${inputClasses} resize-y`} />
                    </div>
                    <button
                      type="submit"
                      disabled={status === 'submitting'}
                      className="w-full sm:w-auto inline-flex items-center justify-center bg-[#A6FF4D] text-[#0B0B0C] text-sm font-medium px-8 py-3.5 rounded-full hover:opacity-90 transition-opacity disabled:opacity-60"
                    >
                      {status === 'submitting' ? contact.submittingLabel : contact.submitLabel}
                    </button>
                    {status === 'error' ? (
                      <p className="text-sm text-[#A6FF4D]" role="alert">
                        {contact.errorMessage}
                      </p>
                    ) : null}
                  </form>
                )}
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
