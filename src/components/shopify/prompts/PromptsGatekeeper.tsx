'use client';

import { useEffect, useState } from 'react';
import { prompts } from '@/content/prompts';
import PromptsGate from './PromptsGate';
import PromptsApp from './PromptsApp';

export default function PromptsGatekeeper() {
  const [unlocked, setUnlocked] = useState(false);

  useEffect(() => {
    try {
      if (window.localStorage.getItem(prompts.gate.unlockStorageKey) === 'true') {
        setUnlocked(true);
      }
    } catch {
      // sin localStorage, se queda en la pantalla de acceso
    }
  }, []);

  if (!unlocked) {
    return <PromptsGate onUnlock={() => setUnlocked(true)} />;
  }

  return <PromptsApp />;
}
