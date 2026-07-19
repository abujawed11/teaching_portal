import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const LABELS = ['A', 'B', 'C', 'D']
const SIZE = 320
const CENTER = SIZE / 2
const RADIUS = 120

const points = LABELS.map((label, i) => {
  const angle = (2 * Math.PI * i) / 4 - Math.PI / 2
  return { label, x: CENTER + RADIUS * Math.cos(angle), y: CENTER + RADIUS * Math.sin(angle) }
})

const lines = []
for (let i = 0; i < points.length; i++) {
  for (let j = i + 1; j < points.length; j++) {
    lines.push([points[i], points[j]])
  }
}

function arcPath(vertex, p1, p2, r) {
  const angle = (pt) => Math.atan2(-(pt.y - vertex.y), pt.x - vertex.x)
  const a1 = angle(p1)
  const a2 = angle(p2)
  const q1 = { x: vertex.x + r * Math.cos(a1), y: vertex.y - r * Math.sin(a1) }
  const q2 = { x: vertex.x + r * Math.cos(a2), y: vertex.y - r * Math.sin(a2) }
  let diff = (((a2 - a1) * 180) / Math.PI + 180) % 360
  if (diff < 0) diff += 360
  diff -= 180
  const sweep = diff >= 0 ? 0 : 1
  return `M ${vertex.x} ${vertex.y} L ${q1.x} ${q1.y} A ${r} ${r} 0 0 ${sweep} ${q2.x} ${q2.y} Z`
}

function FourPointLinesAnglesDiagram() {
  const [activeVertex, setActiveVertex] = useState(null)

  return (
    <div className="flex flex-col items-center gap-6 w-full">
      <svg viewBox={`0 0 ${SIZE} ${SIZE}`} className="w-full max-w-md">
        {lines.map(([a, b], i) => (
          <line key={i} x1={a.x} y1={a.y} x2={b.x} y2={b.y} stroke="#f59e0b" strokeWidth={2} />
        ))}

        <AnimatePresence>
          {activeVertex &&
            (() => {
              const vertex = points.find((p) => p.label === activeVertex)
              const others = points.filter((p) => p.label !== activeVertex)
              return others.map((o1, i) =>
                others.slice(i + 1).map((o2, j) => (
                  <motion.path
                    key={`${o1.label}${o2.label}`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    d={arcPath(vertex, o1, o2, 40)}
                    fill="#2563eb33"
                  />
                ))
              )
            })()}
        </AnimatePresence>

        {points.map((p) => (
          <g key={p.label}>
            <circle
              cx={p.x}
              cy={p.y}
              r={9}
              fill={p.label === activeVertex ? '#2563eb' : '#1e293b'}
            />
            <text
              x={p.x + (p.x < CENTER ? -22 : 14)}
              y={p.y + (p.y < CENTER ? -10 : 22)}
              fontSize={18}
              fontWeight="bold"
              fill="#1e293b"
            >
              {p.label}
            </text>
          </g>
        ))}
      </svg>

      <div className="flex flex-wrap justify-center gap-2">
        {points.map((p) => (
          <button
            key={p.label}
            onClick={() => setActiveVertex(p.label)}
            className={`px-4 py-2 rounded-full text-sm sm:text-base font-semibold border-2 transition-colors
              ${p.label === activeVertex ? 'border-primary bg-primary/10 text-primary' : 'border-slate-200 text-slate-500 hover:border-slate-300'}`}
          >
            Angles at {p.label}
          </button>
        ))}
      </div>

      <p className="text-projector-sm text-ink text-center">
        {activeVertex ? (
          <>
            At <span className="font-bold text-primary">{activeVertex}</span>, 3 rays meet — that's{' '}
            <span className="font-bold text-primary">3 angles</span>.
          </>
        ) : (
          'Click a point to see the 3 angles meeting there.'
        )}
      </p>

      <p className="text-base text-slate-500 text-center">
        6 lines connect the 4 points. Each of the 4 points has 3 angles around it, so{' '}
        <span className="font-bold text-primary">4 × 3 = 12 angles</span> in total.
      </p>
    </div>
  )
}

export default FourPointLinesAnglesDiagram
