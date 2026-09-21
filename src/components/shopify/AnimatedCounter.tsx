'use client';

import { useEffect, useRef, useState } from 'react';
import { animate } from 'motion/react';

export default function AnimatedCounter({
  value,
  format = (n: number) => Math.round(n).toLocaleString('es-ES'),
  prefix = '',
  suffix = '',
  duration = 0.6,
  className = '',
}: {
  value: number;
  format?: (n: number) => string;
  prefix?: string;
  suffix?: string;
  duration?: number;
  className?: string;
}) {
  const [display, setDisplay] = useState(value);
  const prevValue = useRef(value);

  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduced) {
      setDisplay(value);
      prevValue.current = value;
      return;
    }

    const controls = animate(prevValue.current, value, {
      duration,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (v) => setDisplay(v),
    });
    prevValue.current = value;

    return () => controls.stop();
  }, [value, duration]);

  return (
    <span className={className}>
      {prefix}
      {format(display)}
      {suffix}
    </span>
  );
}
