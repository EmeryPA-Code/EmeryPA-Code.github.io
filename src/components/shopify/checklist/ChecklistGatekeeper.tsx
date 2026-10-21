'use client';

import { useEffect, useState } from 'react';
import { checklist } from '@/content/checklist';
import ChecklistGate from './ChecklistGate';
import ChecklistApp from './ChecklistApp';

export default function ChecklistGatekeeper() {
  const [unlocked, setUnlocked] = useState(false);

  useEffect(() => {
    try {
      if (window.localStorage.getItem(checklist.gate.unlockStorageKey) === 'true') {
        setUnlocked(true);
      }
    } catch {
      // sin localStorage, se queda en la pantalla de acceso
    }
  }, []);

  if (!unlocked) {
    return <ChecklistGate onUnlock={() => setUnlocked(true)} />;
  }

  return <ChecklistApp />;
}
