import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const O = { x: 90, y: 260 }
const RAY_LEN = 230

const rayDefs = {
  A: 100,
  X: 80,
  Y: 50,
  baseline: 0,
}

function tip(deg, len = RAY_LEN) {
  const rad = (deg * Math.PI) / 180
  return { x: O.x + len * Math.cos(rad), y: O.y - len * Math.sin(rad) }
}

const comparisons = [
  { id: 'ab-xy', label: '∠AOB vs ∠XOY', pairs: [{ from: 'A', to: 'baseline', color: '#2563eb' }, { from: 'X', to: 'Y', color: '#f59e0b' }] },
  { id: 'ab-xb', label: '∠AOB vs ∠XOB', pairs: [{ from: 'A', to: 'baseline', color: '#2563eb' }, { from: 'X', to: 'baseline', color: '#f59e0b' }] },
  { id: 'xb-xc', label: '∠XOB vs ∠XOC', pairs: [{ from: 'X', to: 'baseline', color: '#2563eb' }, { from: 'X', to: 'baseline', color: '#f59e0b' }] },
]

function arcFor(fromDeg, toDeg, r) {
  const p1 = tip(fromDeg, r)
  const p2 = tip(toDeg, r)
  const sweep = toDeg <= fromDeg ? 1 : 0
  return `M ${O.x} ${O.y} L ${p1.x} ${p1.y} A ${r} ${r} 0 0 ${sweep} ${p2.x} ${p2.y} Z`
}

function SharedRayAngleDiagram() {
  const [selected, setSelected] = useState('ab-xy')
  const comparison = comparisons.find((c) => c.id === selected)

  return (
    <div className="flex flex-col items-center gap-6 w-full">
      <div className="flex flex-wrap justify-center gap-2">
        {comparisons.map((c) => (
          <button
            key={c.id}
            onClick={() => setSelected(c.id)}
            className={`px-4 py-2 rounded-full text-sm sm:text-base font-semibold border-2 transition-colors
              ${c.id === selected ? 'border-primary bg-primary/10 text-primary' : 'border-slate-200 text-slate-500 hover:border-slate-300'}`}
          >
            {c.label}
          </button>
        ))}
      </div>

      <svg viewBox="0 0 340 300" className="w-full max-w-md">
        {Object.entries(rayDefs).map(([label, deg]) => {
          const t = tip(deg)
          return <line key={label} x1={O.x} y1={O.y} x2={t.x} y2={t.y} stroke="#1e293b" strokeWidth={2.5} />
        })}

        <AnimatePresence mode="wait">
          <motion.g key={selected} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            {comparison.pairs.map((p, idx) => (
              <path
                key={idx}
                d={arcFor(rayDefs[p.from], rayDefs[p.to], 40 + idx * 18)}
                fill={p.color}
                opacity={0.3}
              />
            ))}
          </motion.g>
        </AnimatePresence>

        <circle cx={O.x} cy={O.y} r={5} fill="#1e293b" />
        <text x={O.x - 20} y={O.y + 5} fontSize={15} fontWeight="bold" fill="#1e293b">O</text>
        <text x={tip(rayDefs.A).x - 8} y={tip(rayDefs.A).y - 10} fontSize={15} fontWeight="bold" fill="#1e293b">A</text>
        <text x={tip(rayDefs.X).x - 8} y={tip(rayDefs.X).y - 10} fontSize={15} fontWeight="bold" fill="#1e293b">X</text>
        <text x={tip(rayDefs.Y).x - 8} y={tip(rayDefs.Y).y - 10} fontSize={15} fontWeight="bold" fill="#1e293b">Y</text>
        <text x={tip(rayDefs.baseline, 150).x - 10} y={tip(rayDefs.baseline, 150).y - 12} fontSize={15} fontWeight="bold" fill="#1e293b">B</text>
        <text x={tip(rayDefs.baseline, RAY_LEN).x - 10} y={tip(rayDefs.baseline, RAY_LEN).y - 12} fontSize={15} fontWeight="bold" fill="#1e293b">C</text>
      </svg>

      <p className="text-projector-sm text-ink text-center max-w-md">
        {selected === 'ab-xy' && 'The blue wedge (∠AOB) fully contains the amber one (∠XOY) — ∠AOB is bigger.'}
        {selected === 'ab-xb' && '∠AOB still contains ∠XOB entirely — ∠AOB is bigger.'}
        {selected === 'xb-xc' && 'B and C are just two points along the exact same ray from O — so ∠XOB and ∠XOC are the same angle!'}
      </p>
    </div>
  )
}

export default SharedRayAngleDiagram
