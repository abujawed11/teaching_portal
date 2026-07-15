function polarToCartesian(cx, cy, r, angleDeg) {
  const rad = ((angleDeg - 90) * Math.PI) / 180
  return { x: cx + r * Math.cos(rad), y: cy + r * Math.sin(rad) }
}

function describeSlice(cx, cy, r, startAngle, endAngle) {
  const start = polarToCartesian(cx, cy, r, endAngle)
  const end = polarToCartesian(cx, cy, r, startAngle)
  const largeArcFlag = endAngle - startAngle <= 180 ? 0 : 1
  return `M ${cx},${cy} L ${start.x},${start.y} A ${r},${r} 0 ${largeArcFlag} 0 ${end.x},${end.y} Z`
}

function PizzaFractionIllustration({ numerator = 3, denominator = 4 }) {
  const size = 200
  const cx = size / 2
  const cy = size / 2
  const r = 82
  const anglePer = 360 / denominator
  const slices = Array.from({ length: denominator }, (_, i) => i)

  return (
    <svg width={160} height={160} viewBox={`0 0 ${size} ${size}`} role="img" aria-label={`Pizza cut into ${denominator} equal slices, ${numerator} with pepperoni`}>
      <circle cx={cx} cy={cy} r={r + 9} fill="#d97706" />
      <circle cx={cx} cy={cy} r={r + 4} fill="#fbbf24" />
      {slices.map((i) => {
        const startAngle = i * anglePer
        const endAngle = startAngle + anglePer
        const isShaded = i < numerator
        return (
          <path
            key={i}
            d={describeSlice(cx, cy, r, startAngle, endAngle)}
            fill={isShaded ? '#f59e0b' : '#fef3c7'}
            stroke="#fffbeb"
            strokeWidth={2}
          />
        )
      })}
      {slices
        .filter((i) => i < numerator)
        .map((i) => {
          const mid = i * anglePer + anglePer / 2
          const p1 = polarToCartesian(cx, cy, r * 0.55, mid - anglePer * 0.15)
          const p2 = polarToCartesian(cx, cy, r * 0.55, mid + anglePer * 0.2)
          return (
            <g key={`pep-${i}`}>
              <circle cx={p1.x} cy={p1.y} r={7} fill="#b91c1c" />
              {denominator <= 8 && <circle cx={p2.x} cy={p2.y} r={6} fill="#b91c1c" />}
            </g>
          )
        })}
    </svg>
  )
}

export default PizzaFractionIllustration
