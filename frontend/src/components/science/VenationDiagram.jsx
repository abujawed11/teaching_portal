function VenationDiagram({ type = 'reticulate', size = 120 }) {
  return (
    <svg viewBox="0 0 100 120" width={size} height={size * 1.2}>
      <path
        d="M50 5 C80 25 90 60 60 100 C55 110 45 110 40 100 C10 60 20 25 50 5 Z"
        fill="#bbf7d0"
        stroke="#16a34a"
        strokeWidth="2"
      />
      {type === 'reticulate' ? (
        <g stroke="#15803d" strokeWidth="1.2" fill="none">
          <path d="M50 8 L50 105" strokeWidth="2" />
          <path d="M50 25 C40 30 33 38 30 45" />
          <path d="M50 25 C60 30 67 38 70 45" />
          <path d="M50 45 C40 50 34 58 32 65" />
          <path d="M50 45 C60 50 66 58 68 65" />
          <path d="M50 65 C43 70 38 76 36 82" />
          <path d="M50 65 C57 70 62 76 64 82" />
          <path d="M32 45 C28 48 26 52 25 56" />
          <path d="M68 45 C72 48 74 52 75 56" />
        </g>
      ) : (
        <g stroke="#15803d" strokeWidth="1.2" fill="none">
          <path d="M35 15 C25 45 28 80 38 103" />
          <path d="M50 8 L50 105" strokeWidth="2" />
          <path d="M65 15 C75 45 72 80 62 103" />
        </g>
      )}
    </svg>
  )
}

export default VenationDiagram
