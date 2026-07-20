import { useState } from 'react'

const O = { x: 200, y: 140 }
const B = { x: 50, y: 140 }
const C = { x: 350, y: 140 }
const D = { x: 260, y: 40 }
const E = { x: 300, y: 230 }
const B_TIP = { x: 20, y: 140 }
const C_TIP = { x: 380, y: 140 }

const MODES = [
  { id: 'points', label: '5 Points' },
  { id: 'line', label: '1 Line' },
  { id: 'rays', label: '4 Rays' },
  { id: 'segments', label: '5 Segments' },
]

function FivePointFigureDiagram() {
  const [mode, setMode] = useState('points')

  return (
    <div className="flex flex-col items-center gap-6 w-full">
      <div className="flex flex-wrap justify-center gap-2">
        {MODES.map((m) => (
          <button
            key={m.id}
            onClick={() => setMode(m.id)}
            className={`px-4 py-2 rounded-full text-sm sm:text-base font-semibold border-2 transition-colors
              ${m.id === mode ? 'border-primary bg-primary/10 text-primary' : 'border-slate-200 text-slate-500 hover:border-slate-300'}`}
          >
            {m.label}
          </button>
        ))}
      </div>

      <svg viewBox="0 0 400 260" className="w-full max-w-lg">
        <defs>
          <marker id="fpTip" markerWidth="10" markerHeight="10" refX="8" refY="5" orient="auto">
            <path d="M0,0 L10,5 L0,10 Z" fill="#2563eb" />
          </marker>
        </defs>

        {/* Faint base figure always visible */}
        <line x1={B.x} y1={B.y} x2={C.x} y2={C.y} stroke="#e2e8f0" strokeWidth={3} />
        <line x1={O.x} y1={O.y} x2={D.x} y2={D.y} stroke="#e2e8f0" strokeWidth={3} />
        <line x1={O.x} y1={O.y} x2={E.x} y2={E.y} stroke="#e2e8f0" strokeWidth={3} />
        <line x1={D.x} y1={D.y} x2={E.x} y2={E.y} stroke="#e2e8f0" strokeWidth={3} />

        {mode === 'line' && (
          <>
            <line x1={B_TIP.x} y1={B_TIP.y} x2={C_TIP.x} y2={C_TIP.y} stroke="#2563eb" strokeWidth={5} markerEnd="url(#fpTip)" />
            <line x1={C_TIP.x} y1={C_TIP.y} x2={B_TIP.x} y2={B_TIP.y} stroke="#2563eb" strokeWidth={5} markerEnd="url(#fpTip)" />
          </>
        )}

        {mode === 'rays' && (
          <>
            <line x1={O.x} y1={O.y} x2={B.x} y2={B.y} stroke="#2563eb" strokeWidth={5} markerEnd="url(#fpTip)" />
            <line x1={O.x} y1={O.y} x2={C.x} y2={C.y} stroke="#2563eb" strokeWidth={5} markerEnd="url(#fpTip)" />
            <line x1={O.x} y1={O.y} x2={D.x} y2={D.y} stroke="#2563eb" strokeWidth={5} markerEnd="url(#fpTip)" />
            <line x1={O.x} y1={O.y} x2={E.x} y2={E.y} stroke="#2563eb" strokeWidth={5} markerEnd="url(#fpTip)" />
          </>
        )}

        {mode === 'segments' && (
          <>
            {[[O, B], [O, C], [O, D], [O, E], [D, E]].map(([p1, p2], i) => (
              <line key={i} x1={p1.x} y1={p1.y} x2={p2.x} y2={p2.y} stroke="#2563eb" strokeWidth={5} />
            ))}
          </>
        )}

        {[{ p: O, label: 'O' }, { p: B, label: 'B' }, { p: C, label: 'C' }, { p: D, label: 'D' }, { p: E, label: 'E' }].map(({ p, label }) => (
          <g key={label}>
            <circle cx={p.x} cy={p.y} r={7} fill="#1e293b" />
            <text
              x={p.x + (label === 'B' ? -20 : label === 'C' ? 14 : 0)}
              y={p.y + (label === 'D' ? -12 : label === 'E' || label === 'O' ? 24 : -14)}
              fontSize={18}
              fontWeight="bold"
              textAnchor="middle"
              fill="#1e293b"
            >
              {label}
            </text>
          </g>
        ))}
      </svg>

      <p className="text-projector-sm text-ink text-center">
        {mode === 'points' && 'Five points: O, B, C, D, E.'}
        {mode === 'line' && 'One line: BC — it passes through O and extends forever both ways.'}
        {mode === 'rays' && 'Four rays, all starting at O: OB, OC, OD, OE.'}
        {mode === 'segments' && 'Five line segments: OB, OC, OD, OE, and DE.'}
      </p>
    </div>
  )
}

export default FivePointFigureDiagram
