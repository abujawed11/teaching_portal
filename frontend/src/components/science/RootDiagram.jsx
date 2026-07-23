function RootDiagram({ type = 'taproot', size = 120 }) {
  return (
    <svg viewBox="0 0 100 100" width={size} height={size}>
      <line x1="10" y1="20" x2="90" y2="20" stroke="#a16207" strokeWidth="2" />
      <line x1="50" y1="20" x2="50" y2="8" stroke="#16a34a" strokeWidth="3" />
      <path d="M40 8 L50 0 L60 8" fill="#16a34a" />

      {type === 'taproot' ? (
        <g stroke="#a16207" strokeWidth="2" fill="none" strokeLinecap="round">
          <path d="M50 20 L48 85" strokeWidth="3" />
          <path d="M50 35 L30 45" />
          <path d="M50 45 L70 55" />
          <path d="M49 55 L28 65" />
          <path d="M49 65 L68 73" />
          <path d="M48 75 L34 82" />
        </g>
      ) : (
        <g stroke="#a16207" strokeWidth="2" fill="none" strokeLinecap="round">
          <path d="M50 20 C45 45 30 60 22 82" />
          <path d="M50 20 C48 45 40 65 36 88" />
          <path d="M50 20 C50 45 50 65 50 90" />
          <path d="M50 20 C52 45 60 65 64 88" />
          <path d="M50 20 C55 45 70 60 78 82" />
        </g>
      )}
    </svg>
  )
}

export default RootDiagram
