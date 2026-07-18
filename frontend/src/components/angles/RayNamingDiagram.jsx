import { useState } from 'react'
import { motion } from 'framer-motion'

const T = { x: 60, y: 90 }
const N = { x: 190, y: 90 }
const B = { x: 290, y: 90 }
const TIP = { x: 380, y: 90 }

const options = [
  { id: 'TN', label: 'Ray TN', start: T, sameAsOriginal: true },
  { id: 'TB', label: 'Ray TB', start: T, sameAsOriginal: true },
  { id: 'NB', label: 'Ray NB', start: N, sameAsOriginal: false },
]

function RayNamingDiagram() {
  const [selected, setSelected] = useState('TN')
  const option = options.find((o) => o.id === selected)

  return (
    <div className="flex flex-col items-center gap-6 w-full">
      <div className="flex flex-wrap justify-center gap-2">
        {options.map((o) => (
          <button
            key={o.id}
            onClick={() => setSelected(o.id)}
            className={`px-4 py-2 rounded-full text-sm sm:text-base font-semibold border-2 transition-colors
              ${o.id === selected ? 'border-primary bg-primary/10 text-primary' : 'border-slate-200 text-slate-500 hover:border-slate-300'}`}
          >
            {o.label}
          </button>
        ))}
      </div>

      <svg viewBox="0 0 400 160" className="w-full max-w-lg">
        <defs>
          <marker id="rayTip" markerWidth="10" markerHeight="10" refX="8" refY="5" orient="auto">
            <path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8" />
          </marker>
          <marker id="rayTipActive" markerWidth="10" markerHeight="10" refX="8" refY="5" orient="auto">
            <path d="M0,0 L10,5 L0,10 Z" fill="#2563eb" />
          </marker>
        </defs>

        <line x1={T.x} y1={T.y} x2={TIP.x} y2={TIP.y} stroke="#cbd5e1" strokeWidth={4} markerEnd="url(#rayTip)" />

        <motion.line
          key={selected}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.25 }}
          x1={option.start.x} y1={option.start.y} x2={TIP.x} y2={TIP.y}
          stroke="#2563eb" strokeWidth={6} markerEnd="url(#rayTipActive)"
        />

        {[{ p: T, label: 'T' }, { p: N, label: 'N' }, { p: B, label: 'B' }].map(({ p, label }) => (
          <g key={label}>
            <circle cx={p.x} cy={p.y} r={6} fill="#1e293b" />
            <text x={p.x - 4} y={p.y - 16} fontSize={16} fontWeight="bold" fill="#1e293b">
              {label}
            </text>
          </g>
        ))}
      </svg>

      <p className="text-base sm:text-lg text-center max-w-md">
        {option.sameAsOriginal ? (
          <span className="text-primary font-semibold">
            Starts at T — same starting point, so this is the same ray as the original.
          </span>
        ) : (
          <span className="text-accent font-semibold">
            Starts at N instead of T — a different starting point, so this is a shorter, different ray.
          </span>
        )}
      </p>
    </div>
  )
}

export default RayNamingDiagram
