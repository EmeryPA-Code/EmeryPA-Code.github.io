import type { ReactNode } from 'react';

export default function Marquee({
  children,
  durationSeconds = 28,
  reverse = false,
  className = '',
}: {
  children: ReactNode;
  durationSeconds?: number;
  reverse?: boolean;
  className?: string;
}) {
  return (
    <div className={`marquee-mask overflow-hidden ${className}`}>
      <div
        className="flex w-max items-center gap-10 motion-safe:animate-[marquee_var(--marquee-duration)_linear_infinite]"
        style={{
          // @ts-expect-error -- CSS custom property
          '--marquee-duration': `${durationSeconds}s`,
          animationDirection: reverse ? 'reverse' : 'normal',
        }}
      >
        <div className="flex items-center gap-10 shrink-0">{children}</div>
        <div className="flex items-center gap-10 shrink-0" aria-hidden="true">
          {children}
        </div>
      </div>
    </div>
  );
}
