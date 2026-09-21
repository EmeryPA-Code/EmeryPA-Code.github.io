'use client';

import { useEffect, useRef, type ReactNode } from 'react';
import { motion, useAnimation } from 'motion/react';

// El contenido es visible por defecto (el HTML inicial nunca lo oculta).
// Solo si JS confirma que el bloque está fuera de pantalla lo oculta
// para animarlo al entrar en viewport, con un timeout de seguridad
// que lo muestra igualmente si el observer nunca dispara.
export default function Reveal({
  children,
  delay = 0,
  className = '',
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const controls = useAnimation();

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return;
    }

    const rect = node.getBoundingClientRect();
    if (rect.top < window.innerHeight * 0.92) {
      return;
    }

    controls.set({ opacity: 0, y: 28 });

    const reveal = () => {
      controls.start({
        opacity: 1,
        y: 0,
        transition: { duration: 0.7, delay: delay / 1000, ease: [0.16, 1, 0.3, 1] },
      });
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            reveal();
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: '0px 0px -60px 0px' }
    );
    observer.observe(node);

    const fallback = setTimeout(reveal, 2500);

    return () => {
      observer.disconnect();
      clearTimeout(fallback);
    };
  }, [controls, delay]);

  return (
    <motion.div ref={ref} initial={{ opacity: 1, y: 0 }} animate={controls} className={className}>
      {children}
    </motion.div>
  );
}
