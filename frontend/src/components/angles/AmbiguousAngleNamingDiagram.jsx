import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const P = { x: 210, y: 210 }
const A = { x: 300, y: 70 }
const B = { x: 340, y: 210 }
const C = { x: 300, y: 340 }

const pairs = [
  { id: 'APB', label: '∠APB', p1: A, p2: B },
  { id: 'BPC', label: '∠BPC', p1: B, p2: C },
  { id: 'APC', label: '∠APC', p1: A, p2: C },
]

function ArrowLine({ to }) {
  return <line x1={P.x} y1={P.y} x2={to.x} y2={to.y} stroke="#1e293b" strokeWidth={3} />
}

function AmbiguousAngleNamingDiagram() {
  const [selected, setSelected] = useState('APB')
  const pair = pairs.find((p) => p.id === selected)

  const arcPath = () => {
    const r = 45
    const angle = (pt) => Math.atan2(-(pt.y - P.y), pt.x - P.x)
    const a1 = angle(pair.p1)
    const a2 = angle(pair.p2)
    const p1 = { x: P.x + r * Math.cos(a1), y: P.y - r * Math.sin(a1) }
    const p2 = { x: P.x + r * Math.cos(a2), y: P.y - r * Math.sin(a2) }
    // Normalize the shortest signed angular gap to (-180, 180], then pick the
    // sweep direction so the arc always draws the small angle, never the reflex one.
    let diff = (((a2 - a1) * 180) / Math.PI + 180) % 360
    if (diff < 0) diff += 360
    diff -= 180
    const sweep = diff >= 0 ? 0 : 1
    return `M ${P.x} ${P.y} L ${p1.x} ${p1.y} A ${r} ${r} 0 0 ${sweep} ${p2.x} ${p2.y} Z`
  }

  return (
    <div className="flex flex-col items-center gap-6 w-full">
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

      <svg viewBox="0 0 400 380" className="w-full max-w-md">
        <ArrowLine to={A} />
        <ArrowLine to={B} />
        <ArrowLine to={C} />

        <AnimatePresence mode="wait">
          <motion.path
            key={selected}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            d={arcPath()}
            fill="#2563eb33"
          />
        </AnimatePresence>

        <circle cx={P.x} cy={P.y} r={6} fill="#1e293b" />
        <text x={P.x - 25} y={P.y + 5} fontSize={16} fontWeight="bold" fill="#1e293b">P</text>
        <text x={A.x - 5} y={A.y - 12} fontSize={16} fontWeight="bold" fill="#1e293b">A</text>
        <text x={B.x + 10} y={B.y + 5} fontSize={16} fontWeight="bold" fill="#1e293b">B</text>
        <text x={C.x - 5} y={C.y + 24} fontSize={16} fontWeight="bold" fill="#1e293b">C</text>
      </svg>

      <p className="text-projector-sm text-ink text-center">
        Three rays from P make <span className="font-bold text-primary">three different angles</span> — saying just "∠P" wouldn't tell you which one!
      </p>
    </div>
  )
}

export default AmbiguousAngleNamingDiagram
