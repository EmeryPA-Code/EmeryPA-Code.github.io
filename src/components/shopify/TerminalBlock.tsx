'use client';

import { useEffect, useRef, useState } from 'react';

export default function TerminalBlock({ lines }: { lines: string[] }) {
  const full = lines.join('\n');
  const [text, setText] = useState(full);
  const [done, setDone] = useState(true);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const node = ref.current;
    if (!node) return;

    let started = false;
    const start = () => {
      if (started) return;
      started = true;
      setText('');
      setDone(false);
      let i = 0;
      const id = setInterval(() => {
        i += 1;
        setText(full.slice(0, i));
        if (i >= full.length) {
          clearInterval(id);
          setDone(true);
        }
      }, 16);
    };

    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && start()),
      { threshold: 0.4 }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [full]);

  return (
    <div
      ref={ref}
      className="rounded-xl border border-[#2A2A2E] bg-[#0B0B0C] p-4 md:p-5 font-mono text-xs md:text-sm text-[#9FE870] overflow-x-auto"
    >
      <div className="flex items-center gap-1.5 mb-3">
        <span className="w-2.5 h-2.5 rounded-full bg-[#2A2A2E]" />
        <span className="w-2.5 h-2.5 rounded-full bg-[#2A2A2E]" />
        <span className="w-2.5 h-2.5 rounded-full bg-[#2A2A2E]" />
        <span className="ml-2 text-[#5B5B5F] text-[11px]">product-card.liquid</span>
      </div>
      <pre className="whitespace-pre-wrap leading-relaxed">
        {text}
        <span className={done ? 'terminal-cursor' : ''}>▌</span>
      </pre>
    </div>
  );
}
