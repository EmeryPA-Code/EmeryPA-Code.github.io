const stroke = '#9A9A9E';
const accent = '#A6FF4D';

export function TemplateIcon() {
  return (
    <svg viewBox="0 0 64 64" fill="none" aria-hidden="true" className="w-10 h-10">
      <rect x="8" y="8" width="48" height="48" rx="4" stroke={stroke} strokeWidth="1.5" />
      <rect x="8" y="8" width="48" height="14" rx="4" stroke={stroke} strokeWidth="1.5" />
      <rect x="14" y="30" width="16" height="16" rx="2" stroke={accent} strokeWidth="1.5" className="motion-safe:animate-pulse" />
      <line x1="34" y1="32" x2="50" y2="32" stroke={stroke} strokeWidth="1.5" />
      <line x1="34" y1="38" x2="50" y2="38" stroke={stroke} strokeWidth="1.5" />
      <line x1="34" y1="44" x2="44" y2="44" stroke={stroke} strokeWidth="1.5" />
    </svg>
  );
}

export function SpeedIcon() {
  return (
    <svg viewBox="0 0 64 64" fill="none" aria-hidden="true" className="w-10 h-10">
      <circle cx="32" cy="34" r="20" stroke={stroke} strokeWidth="1.5" />
      <line x1="32" y1="34" x2="32" y2="20" stroke={stroke} strokeWidth="1.5" strokeLinecap="round" />
      <line
        x1="32"
        y1="34"
        x2="44"
        y2="34"
        stroke={accent}
        strokeWidth="2"
        strokeLinecap="round"
        className="origin-[32px_34px] motion-safe:animate-spin"
        style={{ animationDuration: '3s' }}
      />
      <circle cx="32" cy="34" r="2.5" fill={stroke} />
    </svg>
  );
}

export function TicketIcon() {
  return (
    <svg viewBox="0 0 64 64" fill="none" aria-hidden="true" className="w-10 h-10">
      <line x1="10" y1="50" x2="54" y2="50" stroke={stroke} strokeWidth="1.5" />
      <polyline
        points="10,44 22,44 30,28 40,36 54,14"
        stroke={stroke}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <line x1="54" y1="50" x2="54" y2="14" stroke={accent} strokeWidth="2" strokeDasharray="3 4" className="motion-safe:animate-pulse" />
      <circle cx="54" cy="14" r="3" fill={accent} />
    </svg>
  );
}

export function CacIcon() {
  return (
    <svg viewBox="0 0 64 64" fill="none" aria-hidden="true" className="w-10 h-10">
      <line x1="10" y1="50" x2="54" y2="50" stroke={stroke} strokeWidth="1.5" />
      <polyline
        points="10,40 22,42 30,44 40,26 54,10"
        stroke={accent}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="motion-safe:animate-pulse"
      />
      <circle cx="54" cy="10" r="3" fill={accent} />
    </svg>
  );
}

export function AppsIcon() {
  const positions = [
    [12, 12],
    [26, 12],
    [40, 12],
    [12, 26],
    [26, 26],
    [40, 26],
    [12, 40],
    [26, 40],
    [40, 40],
  ];
  return (
    <svg viewBox="0 0 64 64" fill="none" aria-hidden="true" className="w-10 h-10">
      {positions.map(([x, y], i) => (
        <rect
          key={`${x}-${y}`}
          x={x}
          y={y}
          width="12"
          height="12"
          rx="2.5"
          stroke={i === 4 ? accent : stroke}
          strokeWidth="1.5"
          className={i === 4 ? 'motion-safe:animate-pulse' : ''}
        />
      ))}
    </svg>
  );
}

export function BlindIcon() {
  return (
    <svg viewBox="0 0 64 64" fill="none" aria-hidden="true" className="w-10 h-10">
      <line x1="10" y1="50" x2="54" y2="50" stroke={stroke} strokeWidth="1.5" />
      <line x1="10" y1="10" x2="10" y2="50" stroke={stroke} strokeWidth="1.5" />
      <path
        d="M10 46 Q22 20 32 38 T54 14"
        stroke={accent}
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
        strokeDasharray="90"
        strokeDashoffset="90"
        className="motion-safe:animate-[dash_2.4s_ease-in-out_infinite]"
      />
    </svg>
  );
}

export function CartIcon() {
  return (
    <svg viewBox="0 0 64 64" fill="none" aria-hidden="true" className="w-10 h-10">
      <path
        d="M10 14h6l6 28h26l6-18H20"
        stroke={stroke}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="26" cy="50" r="3" stroke={stroke} strokeWidth="1.5" />
      <circle cx="44" cy="50" r="3" stroke={stroke} strokeWidth="1.5" />
      <line
        x1="34"
        y1="24"
        x2="34"
        y2="40"
        stroke={accent}
        strokeWidth="2"
        strokeLinecap="round"
        className="motion-safe:animate-bounce"
      />
    </svg>
  );
}
