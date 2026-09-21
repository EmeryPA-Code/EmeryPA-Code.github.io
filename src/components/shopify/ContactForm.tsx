'use client';

import { useState, type FormEvent } from 'react';
import { site } from '@/content/site';
import { shopify } from '@/content/shopify';

type Status = 'idle' | 'submitting' | 'success' | 'error';

const inputClasses =
  'bg-[#0B0B0C] border border-[#2A2A2E] rounded-lg text-[#F5F5F3] placeholder:text-[#9A9A9E] px-3.5 py-3 text-sm focus:outline-none focus:border-[#A6FF4D] transition-colors';

export default function ContactForm() {
  const { intakeForm } = shopify;
  const [status, setStatus] = useState<Status>('idle');

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus('submitting');

    const form = event.currentTarget;
    const formData = new FormData(form);
    const dial = formData.get('phoneDial');
    const number = formData.get('phoneNumber');
    formData.set('phone', `${dial} ${number}`.trim());
    formData.delete('phoneDial');
    formData.delete('phoneNumber');

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

  if (status === 'success') {
    return (
      <p className="text-base md:text-lg text-[#F5F5F3] text-center py-8" role="status">
        {intakeForm.successMessage}
      </p>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="text-left space-y-6">
      <div>
        <label htmlFor="name" className="block text-sm text-[#9A9A9E] mb-2">
          {intakeForm.fields.name.label}:
        </label>
        <input id="name" name="name" type="text" required className={`${inputClasses} w-full`} />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm text-[#9A9A9E] mb-2">
          {intakeForm.fields.email.label}:
        </label>
        <input id="email" name="email" type="email" required className={`${inputClasses} w-full`} />
      </div>

      <div>
        <label htmlFor="phoneNumber" className="block text-sm text-[#9A9A9E] mb-2">
          {intakeForm.fields.phone.label}:
        </label>
        <div className="flex gap-2">
          <select
            id="phoneDial"
            name="phoneDial"
            defaultValue={intakeForm.countryCodes[0].dial}
            aria-label="Prefijo del país"
            className={`${inputClasses} dark-select w-24 md:w-28 shrink-0`}
          >
            {intakeForm.countryCodes.map((c) => (
              <option key={c.code} value={c.dial}>
                {c.code} {c.dial}
              </option>
            ))}
          </select>
          <input
            id="phoneNumber"
            name="phoneNumber"
            type="tel"
            required
            placeholder={intakeForm.fields.phone.placeholder}
            className={`${inputClasses} flex-1 min-w-0`}
          />
        </div>
      </div>

      <div>
        <label htmlFor="storeUrl" className="block text-sm text-[#9A9A9E] mb-2">
          {intakeForm.fields.storeUrl.label}:
        </label>
        <input
          id="storeUrl"
          name="storeUrl"
          type="text"
          required
          placeholder={intakeForm.fields.storeUrl.placeholder}
          className={`${inputClasses} w-full`}
        />
      </div>

      <div>
        <label htmlFor="billing" className="block text-sm text-[#9A9A9E] mb-2">
          {intakeForm.fields.billing.label}:
        </label>
        <select
          id="billing"
          name="billing"
          required
          defaultValue=""
          className={`${inputClasses} dark-select w-full`}
        >
          <option value="" disabled>
            {intakeForm.fields.billing.placeholder}
          </option>
          {intakeForm.fields.billing.options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="founder" className="block text-sm text-[#9A9A9E] mb-2">
          {intakeForm.fields.founder.label}
        </label>
        <select
          id="founder"
          name="founder"
          required
          defaultValue=""
          className={`${inputClasses} dark-select w-full`}
        >
          <option value="" disabled>
            {intakeForm.fields.founder.placeholder}
          </option>
          {intakeForm.fields.founder.options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="problems" className="block text-sm text-[#9A9A9E] mb-2">
          {intakeForm.fields.problems.label}
        </label>
        <textarea
          id="problems"
          name="problems"
          required
          rows={4}
          className={`${inputClasses} resize-y w-full`}
        />
      </div>

      <div>
        <label htmlFor="budget" className="block text-sm text-[#9A9A9E] mb-2">
          {intakeForm.fields.budget.label}
        </label>
        <select
          id="budget"
          name="budget"
          required
          defaultValue=""
          className={`${inputClasses} dark-select w-full`}
        >
          <option value="" disabled>
            {intakeForm.fields.budget.placeholder}
          </option>
          {intakeForm.fields.budget.options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>

      <div className="flex flex-col items-center gap-3 pt-2">
        <button
          type="submit"
          disabled={status === 'submitting'}
          className="w-full inline-flex items-center justify-center bg-[#A6FF4D] text-[#0B0B0C] text-sm font-medium px-8 py-3.5 rounded-full hover:opacity-90 transition-opacity disabled:opacity-60"
        >
          {status === 'submitting' ? intakeForm.submittingLabel : intakeForm.submitLabel}
        </button>
        {status === 'error' ? (
          <p className="text-sm text-[#A6FF4D]" role="alert">
            {intakeForm.errorMessage}
          </p>
        ) : null}
      </div>
    </form>
  );
}
