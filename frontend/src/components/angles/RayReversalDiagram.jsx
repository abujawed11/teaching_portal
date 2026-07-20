import { useState } from 'react'
import { motion } from 'framer-motion'

const O = { x: 140, y: 90 }
const A = { x: 240, y: 90 }
const B = { x: 320, y: 90 }
const TIP = { x: 420, y: 90 }
const WRONG_TIP = { x: 20, y: 90 }

const options = [
  { id: 'OA', label: 'Ray OA', start: O, end: TIP, valid: true },
  { id: 'OB', label: 'Ray OB', start: O, end: TIP, valid: true },
  { id: 'AO', label: '"AO" ?', start: A, end: WRONG_TIP, valid: false },
]

function RayReversalDiagram() {
  const [selected, setSelected] = useState('OA')
  const option = options.find((o) => o.id === selected)

  return (
    <div className="flex flex-col items-center gap-6 w-full">
      <div className="flex flex-wrap justify-center gap-2">
        {options.map((o) => (
          <button
            key={o.id}
            onClick={() => setSelected(o.id)}
            className={`px-4 py-2 rounded-full text-sm sm:text-base font-semibold border-2 transition-colors
              ${o.id === selected ? (o.valid ? 'border-primary bg-primary/10 text-primary' : 'border-danger bg-danger/10 text-danger') : 'border-slate-200 text-slate-500 hover:border-slate-300'}`}
          >
            {o.label}
          </button>
        ))}
      </div>

      <svg viewBox="0 0 440 160" className="w-full max-w-lg">
        <defs>
          <marker id="revTipGrey" markerWidth="10" markerHeight="10" refX="8" refY="5" orient="auto">
            <path d="M0,0 L10,5 L0,10 Z" fill="#cbd5e1" />
          </marker>
          <marker id="revTipBlue" markerWidth="10" markerHeight="10" refX="8" refY="5" orient="auto">
            <path d="M0,0 L10,5 L0,10 Z" fill="#2563eb" />
          </marker>
          <marker id="revTipRed" markerWidth="10" markerHeight="10" refX="8" refY="5" orient="auto">
            <path d="M0,0 L10,5 L0,10 Z" fill="#dc2626" />
          </marker>
        </defs>

        <line x1={O.x} y1={O.y} x2={TIP.x} y2={TIP.y} stroke="#e2e8f0" strokeWidth={4} markerEnd="url(#revTipGrey)" />

        <motion.line
          key={selected}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.25 }}
          x1={option.start.x} y1={option.start.y} x2={option.end.x} y2={option.end.y}
          stroke={option.valid ? '#2563eb' : '#dc2626'}
          strokeWidth={6}
          strokeDasharray={option.valid ? undefined : '8 6'}
          markerEnd={option.valid ? 'url(#revTipBlue)' : 'url(#revTipRed)'}
        />

        {[{ p: O, label: 'O' }, { p: A, label: 'A' }, { p: B, label: 'B' }].map(({ p, label }) => (
          <g key={label}>
            <circle cx={p.x} cy={p.y} r={6} fill="#1e293b" />
            <text x={p.x - 4} y={p.y - 16} fontSize={16} fontWeight="bold" fill="#1e293b">
              {label}
            </text>
          </g>
        ))}
      </svg>

      <p className="text-base sm:text-lg text-center max-w-md">
        {option.id === 'OA' && (
          <span className="text-primary font-semibold">Ray OA — starts at O, heads through A and beyond. This is the ray shown.</span>
        )}
        {option.id === 'OB' && (
          <span className="text-primary font-semibold">Ray OB — same starting point O, just named using the farther point B. Still the exact same ray!</span>
        )}
        {option.id === 'AO' && (
          <span className="text-danger font-semibold">
            ✗ "AO" would mean starting at A and heading back through O, the OTHER way — a completely different ray, not the one shown.
          </span>
        )}
      </p>
    </div>
  )
}

export default RayReversalDiagram
