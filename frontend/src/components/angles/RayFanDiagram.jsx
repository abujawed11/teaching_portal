import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

function defaultArc(vertex, rays, i, j, r) {
  const angle = (pt) => Math.atan2(-(pt.y - vertex.y), pt.x - vertex.x)
  const a1 = angle(rays[i])
  const a2 = angle(rays[j])
  const p1 = { x: vertex.x + r * Math.cos(a1), y: vertex.y - r * Math.sin(a1) }
  const p2 = { x: vertex.x + r * Math.cos(a2), y: vertex.y - r * Math.sin(a2) }
  let diff = (((a2 - a1) * 180) / Math.PI + 180) % 360
  if (diff < 0) diff += 360
  diff -= 180
  const sweep = diff >= 0 ? 0 : 1
  return `M ${vertex.x} ${vertex.y} L ${p1.x} ${p1.y} A ${r} ${r} 0 0 ${sweep} ${p2.x} ${p2.y} Z`
}

const defaultVertex = { x: 210, y: 210 }
const defaultRays = [
  { label: 'A', x: 300, y: 70 },
  { label: 'B', x: 340, y: 210 },
  { label: 'C', x: 300, y: 340 },
]
const defaultPairs = [
  { id: 'AB', label: '∠APB', i: 0, j: 1 },
  { id: 'BC', label: '∠BPC', i: 1, j: 2 },
  { id: 'AC', label: '∠APC', i: 0, j: 2 },
]

function RayFanDiagram({
  vertexLabel = 'P',
  vertex = defaultVertex,
  rays = defaultRays,
  pairs = defaultPairs,
  footnote = 'Three rays from a point make three different angles.',
}) {
  const [selected, setSelected] = useState(pairs[0].id)
  const pair = pairs.find((p) => p.id === selected)

  return (
    <div className="flex flex-col items-center gap-6 w-full">
      {pairs.length > 1 && (
        <div className="flex flex-wrap justify-center gap-2">
          {pairs.map((p) => (
            <button
              key={p.id}
              onClick={() => setSelected(p.id)}
              className={`px-4 py-2 rounded-full text-sm sm:text-base font-semibold border-2 transition-colors
                ${p.id === selected ? 'border-primary bg-primary/10 text-primary' : 'border-slate-200 text-slate-500 hover:border-slate-300'}`}
            >
              {p.label}
            </button>
          ))}
        </div>
      )}

      <svg viewBox="0 0 400 380" className="w-full max-w-md">
        {rays.map((r) => (
          <line key={r.label} x1={vertex.x} y1={vertex.y} x2={r.x} y2={r.y} stroke="#1e293b" strokeWidth={3} />
        ))}

        <AnimatePresence mode="wait">
          <motion.path
            key={selected}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            d={defaultArc(vertex, rays, pair.i, pair.j, 45)}
            fill="#2563eb33"
          />
        </AnimatePresence>

        <circle cx={vertex.x} cy={vertex.y} r={6} fill="#1e293b" />
        <text x={vertex.x - 25} y={vertex.y + 5} fontSize={16} fontWeight="bold" fill="#1e293b">{vertexLabel}</text>
        {rays.map((r) => (
          <text
            key={r.label}
            x={r.x + (r.x < vertex.x ? -20 : 8)}
            y={r.y + (r.y < vertex.y ? -8 : 20)}
            fontSize={16}
            fontWeight="bold"
            fill="#1e293b"
          >
            {r.label}
          </text>
        ))}
      </svg>

      {pairs.length > 1 ? (
        <p className="text-projector-sm text-ink text-center">{footnote}</p>
      ) : (
        <p className="text-projector-sm text-ink text-center">
          This is <span className="font-bold text-primary">{pair.label}</span>.
        </p>
      )}
    </div>
  )
}

export default RayFanDiagram
