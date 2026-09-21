'use client';

import { useState, type FormEvent } from 'react';
import { site } from '@/content/site';

type Status = 'idle' | 'submitting' | 'success' | 'error';

const inputClasses =
  'w-full bg-transparent border-0 border-b border-[#2A2A2E] text-[#F5F5F3] placeholder:text-[#9A9A9E] py-2.5 text-sm focus:outline-none focus:border-[#A6FF4D] transition-colors';

export default function ContactForm() {
  const { contactForm } = site;
  const [status, setStatus] = useState<Status>('idle');

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus('submitting');

    const form = event.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch(`https://formspree.io/f/${contactForm.formspreeId}`, {
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

  if (status === 'success') {
    return (
      <p className="text-base md:text-lg text-[#F5F5F3] text-center py-8" role="status">
        {contactForm.successMessage}
      </p>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="text-left">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6">
        <div>
          <label htmlFor="name" className="block text-xs tracking-[0.15em] text-[#9A9A9E] mb-1">
            {contactForm.fields.name.label.toUpperCase()}
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            placeholder={contactForm.fields.name.placeholder}
            className={inputClasses}
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-xs tracking-[0.15em] text-[#9A9A9E] mb-1">
            {contactForm.fields.email.label.toUpperCase()}
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            placeholder={contactForm.fields.email.placeholder}
            className={inputClasses}
          />
        </div>

        <div>
          <label htmlFor="phone" className="block text-xs tracking-[0.15em] text-[#9A9A9E] mb-1">
            {contactForm.fields.phone.label.toUpperCase()}
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            required
            placeholder={contactForm.fields.phone.placeholder}
            className={inputClasses}
          />
        </div>

        <div>
          <label htmlFor="billing" className="block text-xs tracking-[0.15em] text-[#9A9A9E] mb-1">
            {contactForm.fields.billing.label.toUpperCase()}
          </label>
          <select
            id="billing"
            name="billing"
            required
            defaultValue=""
            className={`${inputClasses} dark-select`}
          >
            <option value="" disabled>
              {contactForm.fields.billing.placeholder}
            </option>
            {contactForm.fields.billing.options.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>

        <div className="sm:col-span-2">
          <label htmlFor="service" className="block text-xs tracking-[0.15em] text-[#9A9A9E] mb-1">
            {contactForm.fields.service.label.toUpperCase()}
          </label>
          <select
            id="service"
            name="service"
            required
            defaultValue=""
            className={`${inputClasses} dark-select`}
          >
            <option value="" disabled>
              {contactForm.fields.service.placeholder}
            </option>
            {contactForm.fields.service.options.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="mt-8 flex flex-col items-center gap-3">
        <button
          type="submit"
          disabled={status === 'submitting'}
          className="inline-flex items-center bg-[#A6FF4D] text-[#0B0B0C] text-sm font-medium px-8 py-3.5 rounded-full hover:opacity-90 transition-opacity disabled:opacity-60"
        >
          {status === 'submitting' ? contactForm.submittingLabel : contactForm.submitLabel}
        </button>
        {status === 'error' ? (
          <p className="text-sm text-[#A6FF4D]" role="alert">
            {contactForm.errorMessage}
          </p>
        ) : null}
      </div>
    </form>
  );
}
