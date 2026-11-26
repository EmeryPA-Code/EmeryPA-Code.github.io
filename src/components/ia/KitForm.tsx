'use client';

import { useState, type FormEvent } from 'react';
import { site } from '@/content/site';
import { ia } from '@/content/ia';
import { kit } from '@/content/kit';

type Status = 'idle' | 'submitting' | 'error';

const inputClasses =
  'bg-[#0B0B0C] border border-[#2A2A2E] rounded-lg text-[#F5F5F3] placeholder:text-[#9A9A9E] px-3.5 py-3 text-sm focus:outline-none focus:border-[#A6FF4D] transition-colors';

// Formulario de correo que desbloquea «Mi kit de IA».
// Sin onUnlock, al enviar lleva a /ia/kit/; con onUnlock, desbloquea en la misma página.
export default function KitForm({ id, onUnlock }: { id: string; onUnlock?: () => void }) {
  const { kitCard } = ia;
  const [status, setStatus] = useState<Status>('idle');

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus('submitting');

    const formData = new FormData(event.currentTarget);
    formData.set('origen', kit.gate.origin);

    try {
      const response = await fetch(`https://formspree.io/f/${site.contactForm.formspreeId}`, {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: formData,
      });

      if (!response.ok) {
        setStatus('error');
        return;
      }

      try {
        window.localStorage.setItem(kit.gate.unlockStorageKey, 'true');
      } catch {
        // sin localStorage: desbloqueamos igualmente en esta visita
      }

      if (onUnlock) {
        window.scrollTo({ top: 0 });
        onUnlock();
      } else {
        window.location.href = `${kit.path}?ok=1`;
      }
    } catch {
      setStatus('error');
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-3">
      <label htmlFor={`${id}-email`} className="sr-only">
        {kitCard.fields.email.label}
      </label>
      <div className="flex flex-col sm:flex-row gap-2">
        <input
          id={`${id}-email`}
          name="email"
          type="email"
          required
          autoComplete="email"
          placeholder={kitCard.fields.email.placeholder}
          className={`${inputClasses} flex-1 min-w-0`}
        />
        <button
          type="submit"
          disabled={status === 'submitting'}
          className="inline-flex items-center justify-center bg-[#A6FF4D] text-[#0B0B0C] text-sm font-medium px-6 py-3 rounded-lg hover:opacity-90 transition-opacity disabled:opacity-60 shrink-0"
        >
          {status === 'submitting' ? kitCard.submittingLabel : kitCard.submitLabel}
        </button>
      </div>
      {status === 'error' ? (
        <p className="text-sm text-[#A6FF4D]" role="alert">
          {kitCard.errorMessage}
        </p>
      ) : null}
      <p className="text-xs text-[#9A9A9E]">{kitCard.privacyNote}</p>
    </form>
  );
}
