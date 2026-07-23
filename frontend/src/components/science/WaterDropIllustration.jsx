function WaterDropIllustration() {
  return (
    <svg viewBox="0 0 200 160" className="w-48 sm:w-64 h-auto" role="img" aria-label="A cloud raining onto a window with a glass of water below">
      <ellipse cx="60" cy="35" rx="38" ry="24" fill="#cbd5e1" />
      <ellipse cx="95" cy="30" rx="30" ry="20" fill="#e2e8f0" />

      <g stroke="#38bdf8" strokeWidth="4" strokeLinecap="round">
        <line x1="45" y1="65" x2="38" y2="85" />
        <line x1="65" y1="65" x2="58" y2="85" />
        <line x1="85" y1="65" x2="78" y2="85" />
        <line x1="105" y1="65" x2="98" y2="85" />
      </g>

      <rect x="10" y="90" width="180" height="60" rx="4" fill="#f0f9ff" stroke="#94a3b8" strokeWidth="2" />
      <line x1="10" y1="90" x2="10" y2="150" stroke="#94a3b8" strokeWidth="2" />
      <circle cx="30" cy="100" r="3" fill="#38bdf8" />
      <circle cx="55" cy="115" r="2.5" fill="#38bdf8" />
      <circle cx="80" cy="98" r="3" fill="#38bdf8" />

      <path d="M120 115 L145 115 L142 150 L123 150 Z" fill="#7dd3fc" stroke="#0ea5e9" strokeWidth="2" />
      <rect x="118" y="112" width="29" height="6" rx="2" fill="#0ea5e9" />
    </svg>
  )
}

export default WaterDropIllustration
