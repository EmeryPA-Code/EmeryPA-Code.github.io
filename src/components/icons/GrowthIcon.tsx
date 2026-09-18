export default function GrowthIcon() {
  return (
    <svg viewBox="0 0 120 80" fill="none" aria-hidden="true" className="w-full h-auto">
      <line x1="8" y1="72" x2="112" y2="72" stroke="#DAD4C6" strokeWidth="1" />
      <polyline
        points="8,60 34,46 58,54 84,24 112,10"
        stroke="#B0502F"
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="112" cy="10" r="4" fill="#B0502F" />
      <circle cx="8" cy="60" r="3" fill="#1B1815" />
      <circle cx="58" cy="54" r="3" fill="#1B1815" />
    </svg>
  );
}
