'use client';

import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';

type Notification = { store: string; amount: string; product: string };

export default function OrderToastStack({ items }: { items: Notification[] }) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    if (paused) return;

    const id = setInterval(() => {
      setIndex((i) => (i + 1) % items.length);
    }, 2600);
    return () => clearInterval(id);
  }, [items.length, paused]);

  const visible = [0, 1, 2].map((offset) => items[(index + offset) % items.length]);

  return (
    <div
      className="flex flex-col gap-3 w-full max-w-xs"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <AnimatePresence initial={false} mode="popLayout">
        {visible.map((n, i) => (
          <motion.div
            key={`${n.store}-${index}-${i}`}
            layout
            initial={{ opacity: 0, y: -16, scale: 0.96 }}
            animate={{ opacity: 1 - i * 0.28, y: 0, scale: 1 - i * 0.03 }}
            exit={{ opacity: 0, y: 16 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="rounded-xl border border-[#2A2A2E] bg-[#141416] px-4 py-3 shadow-lg shadow-black/40"
          >
            <div className="flex items-center gap-2 mb-1">
              <span className="w-1.5 h-1.5 rounded-full bg-[#A6FF4D]" />
              <p className="text-xs text-[#9A9A9E]">Nuevo pedido · {n.store}</p>
            </div>
            <p className="text-sm text-[#F5F5F3] font-medium">{n.product}</p>
            <p className="text-sm text-[#A6FF4D] font-semibold">{n.amount}</p>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}
