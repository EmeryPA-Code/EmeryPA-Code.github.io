const stroke = '#9A9A9E';
const accent = '#A6FF4D';

export function PaletteIcon() {
  return (
    <svg viewBox="0 0 32 32" fill="none" aria-hidden="true" className="w-6 h-6 md:w-7 md:h-7">
      <path
        d="M16 5a11 11 0 1 0 0 22c1.2 0 2-1 2-2.1 0-.6-.2-1-.5-1.4-.3-.4-.5-.8-.5-1.3 0-1 .9-1.8 1.9-1.8H21a5 5 0 0 0 5-5C26 9.5 21.5 5 16 5Z"
        stroke={stroke}
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <circle cx="11" cy="14" r="1.6" fill={accent} className="motion-safe:animate-pulse" />
      <circle cx="16" cy="10.5" r="1.6" fill={stroke} />
      <circle cx="21" cy="14" r="1.6" fill={stroke} />
      <circle cx="12" cy="19.5" r="1.6" fill={stroke} />
    </svg>
  );
}

export function TypographyIcon() {
  return (
    <svg viewBox="0 0 32 32" fill="none" aria-hidden="true" className="w-6 h-6 md:w-7 md:h-7">
      <path
        d="M8 23 13 9h1.6L20 23M9.6 18h9"
        stroke={stroke}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <line
        x1="23"
        y1="9"
        x2="23"
        y2="23"
        stroke={accent}
        strokeWidth="1.5"
        strokeLinecap="round"
        className="motion-safe:animate-[blink-cursor_1.1s_step-end_infinite]"
      />
    </svg>
  );
}

export function LayoutIcon() {
  return (
    <svg viewBox="0 0 32 32" fill="none" aria-hidden="true" className="w-6 h-6 md:w-7 md:h-7">
      <rect x="5" y="6" width="22" height="20" rx="2" stroke={stroke} strokeWidth="1.5" />
      <line x1="5" y1="12" x2="27" y2="12" stroke={stroke} strokeWidth="1.5" />
      <line x1="13" y1="12" x2="13" y2="26" stroke={stroke} strokeWidth="1.5" />
      <rect
        x="16"
        y="15"
        width="8"
        height="5"
        rx="1"
        fill="none"
        stroke={accent}
        strokeWidth="1.5"
        className="motion-safe:animate-pulse"
      />
    </svg>
  );
}

export function ImageIcon() {
  return (
    <svg viewBox="0 0 32 32" fill="none" aria-hidden="true" className="w-6 h-6 md:w-7 md:h-7">
      <rect x="5" y="7" width="22" height="18" rx="2" stroke={stroke} strokeWidth="1.5" />
      <circle cx="12" cy="13.5" r="2" stroke={stroke} strokeWidth="1.5" />
      <path
        d="M6 22l6.5-6.5a1.5 1.5 0 0 1 2.1 0L19 20l1.8-1.8a1.5 1.5 0 0 1 2.1 0L26 21.5"
        stroke={accent}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="motion-safe:animate-pulse"
      />
    </svg>
  );
}

export function ComponentsIcon() {
  return (
    <svg viewBox="0 0 32 32" fill="none" aria-hidden="true" className="w-6 h-6 md:w-7 md:h-7">
      <rect x="5" y="5" width="9" height="9" rx="1.5" stroke={stroke} strokeWidth="1.5" />
      <rect x="18" y="5" width="9" height="9" rx="1.5" stroke={stroke} strokeWidth="1.5" />
      <rect
        x="5"
        y="18"
        width="9"
        height="9"
        rx="1.5"
        stroke={accent}
        strokeWidth="1.5"
        className="motion-safe:animate-pulse"
      />
      <rect x="18" y="18" width="9" height="9" rx="1.5" stroke={stroke} strokeWidth="1.5" />
    </svg>
  );
}

export function ResponsiveIcon() {
  return (
    <svg viewBox="0 0 32 32" fill="none" aria-hidden="true" className="w-6 h-6 md:w-7 md:h-7">
      <rect x="4" y="7" width="16" height="12" rx="1.5" stroke={stroke} strokeWidth="1.5" />
      <line x1="4" y1="17" x2="20" y2="17" stroke={stroke} strokeWidth="1.5" />
      <rect
        x="22"
        y="11"
        width="7"
        height="13"
        rx="1.5"
        stroke={accent}
        strokeWidth="1.5"
        className="motion-safe:animate-pulse"
      />
      <line x1="24.5" y1="21.5" x2="26.5" y2="21.5" stroke={accent} strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}
