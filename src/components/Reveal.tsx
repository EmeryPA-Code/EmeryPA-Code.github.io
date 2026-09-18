'use client';

import { useEffect, useRef, type ReactNode } from 'react';

// El contenido es visible por defecto (sin JS o si JS falla, se ve igualmente).
// Si JS carga bien, los bloques que empiezan fuera de la pantalla se animan
// suavemente al hacer scroll. Nunca dependas de JS para mostrar contenido.
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

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const prefersReduced = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;
    if (prefersReduced) return;

    const rect = node.getBoundingClientRect();
    const alreadyInView = rect.top < window.innerHeight * 0.92;
    if (alreadyInView) return;

    node.style.opacity = '0';
    node.style.transform = 'translateY(24px)';

    const reveal = () => {
      node.style.transition =
        'opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1), transform 0.8s cubic-bezier(0.16, 1, 0.3, 1)';
      node.style.transitionDelay = `${delay}ms`;
      node.style.opacity = '1';
      node.style.transform = 'translateY(0)';
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

    // Red de seguridad: si por lo que sea el observer nunca dispara
    // (extensiones, pestaña en background, etc.), el contenido se muestra igualmente.
    const fallback = setTimeout(reveal, 2500);

    return () => {
      observer.disconnect();
      clearTimeout(fallback);
    };
  }, [delay]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
