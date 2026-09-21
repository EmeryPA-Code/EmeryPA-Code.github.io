export default function StoreMark({ className = 'w-10 h-10 md:w-14 md:h-14' }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" fill="none" aria-hidden="true" className={className}>
      <path
        d="M10 16L13 7H35L38 16"
        stroke="#A6FF4D"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8 16H40V38C40 39.6569 38.6569 41 37 41H11C9.34315 41 8 39.6569 8 38V16Z"
        fill="#A6FF4D"
        fillOpacity="0.12"
        stroke="#A6FF4D"
        strokeWidth="2.5"
      />
      <path
        d="M17 21C17 24.3137 20.134 27 24 27C27.866 27 31 24.3137 31 21"
        stroke="#A6FF4D"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
    </svg>
  );
}
