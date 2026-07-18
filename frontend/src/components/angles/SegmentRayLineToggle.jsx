import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const A = { x: 90, y: 90 }
const B = { x: 290, y: 90 }
const LEFT_EDGE = 20
const RIGHT_EDGE = 360

const modes = [
  { id: 'segment', label: 'Line Segment' },
  { id: 'ray', label: 'Ray' },
  { id: 'line', label: 'Line' },
]

function SegmentRayLineToggle() {
  const [mode, setMode] = useState('segment')

  return (
    <div className="flex flex-col items-center gap-6 w-full">
      <div className="flex flex-wrap justify-center gap-2">
        {modes.map((m) => (
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

      <svg viewBox="0 0 380 180" className="w-full max-w-lg">
        <defs>
          <marker id="arrowEnd" markerWidth="10" markerHeight="10" refX="8" refY="5" orient="auto">
            <path d="M0,0 L10,5 L0,10 Z" fill="#2563eb" />
          </marker>
          <marker id="arrowStart" markerWidth="10" markerHeight="10" refX="2" refY="5" orient="auto">
            <path d="M10,0 L0,5 L10,10 Z" fill="#2563eb" />
          </marker>
        </defs>

        <AnimatePresence mode="wait">
          {mode === 'segment' && (
            <motion.line
              key="segment"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              x1={A.x} y1={A.y} x2={B.x} y2={B.y}
              stroke="#2563eb" strokeWidth={4}
            />
          )}
          {mode === 'ray' && (
            <motion.line
              key="ray"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              x1={A.x} y1={A.y} x2={RIGHT_EDGE} y2={A.y}
              stroke="#2563eb" strokeWidth={4}
              markerEnd="url(#arrowEnd)"
            />
          )}
          {mode === 'line' && (
            <motion.line
              key="line"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              x1={LEFT_EDGE} y1={A.y} x2={RIGHT_EDGE} y2={A.y}
              stroke="#2563eb" strokeWidth={4}
              markerEnd="url(#arrowEnd)"
              markerStart="url(#arrowStart)"
            />
          )}
        </AnimatePresence>

        <circle cx={A.x} cy={A.y} r={6} fill="#1e293b" />
        <text x={A.x - 5} y={A.y - 15} fontSize={16} fontWeight="bold" fill="#1e293b">A</text>

        {mode !== 'line' && (
          <>
            <circle cx={B.x} cy={B.y} r={6} fill={mode === 'segment' ? '#1e293b' : 'transparent'} />
            <text x={B.x - 5} y={B.y - 15} fontSize={16} fontWeight="bold" fill="#1e293b">B</text>
          </>
        )}
        {mode === 'line' && (
          <text x={B.x - 5} y={B.y - 15} fontSize={16} fontWeight="bold" fill="#1e293b">B</text>
        )}
      </svg>

      <p className="text-base sm:text-lg text-slate-500 text-center max-w-md">
        {mode === 'segment' && 'A line segment has two fixed endpoints — A and B. Nothing extends beyond them.'}
        {mode === 'ray' && 'A ray starts at A and shoots off forever in one direction, passing through B.'}
        {mode === 'line' && 'A line has no endpoints at all — it goes on forever in both directions.'}
      </p>
    </div>
  )
}

export default SegmentRayLineToggle
