import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { RefreshCw } from 'lucide-react'
import Button from '../common/Button.jsx'

const leftWaypoints = { cx: [200, 150, 100, 60], cy: [42, 70, 100, 170] }
const rightWaypoints = { cx: [200, 250, 300, 340], cy: [42, 70, 100, 170] }

const dropletDelays = [0, 0.15, 0.3, 0.45]

function TerrainFlowDemo() {
  const [poured, setPoured] = useState(false)

  return (
    <div className="flex flex-col items-center gap-6 w-full">
      <p className="text-projector-sm text-ink text-center max-w-xl">
        Pour water (or seeds!) from the top of a hill. Does it move in a straight line, or does
        it spread out?
      </p>

      <svg viewBox="0 0 400 220" className="w-full max-w-md rounded-2xl bg-emerald-50 border-2 border-slate-200">
        {/* Hill shape */}
        <path
          d="M 0 180 C 60 170 140 60 200 40 C 260 60 340 170 400 180 L 400 220 L 0 220 Z"
          fill="#a7f3d0"
          stroke="#34d399"
          strokeWidth="2"
        />

        {/* Pools at the base of each slope */}
        <ellipse cx="55" cy="180" rx="35" ry="14" fill="#7dd3fc" opacity="0.8" />
        <ellipse cx="345" cy="180" rx="35" ry="14" fill="#7dd3fc" opacity="0.8" />
        <text x="55" y="185" textAnchor="middle" fontSize="11" fill="#0369a1" fontWeight="bold">
          Pool A
        </text>
        <text x="345" y="185" textAnchor="middle" fontSize="11" fill="#0369a1" fontWeight="bold">
          Pool B
        </text>

        {/* Peak marker */}
        <circle cx="200" cy="42" r="5" fill="#78350f" />

        {/* Falling droplets, splitting both ways */}
        <AnimatePresence>
          {poured &&
            dropletDelays.map((delay, i) => (
              <motion.circle
                key={`left-${i}`}
                r={4}
                fill="#0284c7"
                initial={{ cx: leftWaypoints.cx[0], cy: leftWaypoints.cy[0], opacity: 0 }}
                animate={{ cx: leftWaypoints.cx, cy: leftWaypoints.cy, opacity: [0, 1, 1, 0] }}
                transition={{ duration: 1.6, delay, repeat: Infinity, repeatDelay: 0.6 }}
              />
            ))}
          {poured &&
            dropletDelays.map((delay, i) => (
              <motion.circle
                key={`right-${i}`}
                r={4}
                fill="#0284c7"
                initial={{ cx: rightWaypoints.cx[0], cy: rightWaypoints.cy[0], opacity: 0 }}
                animate={{ cx: rightWaypoints.cx, cy: rightWaypoints.cy, opacity: [0, 1, 1, 0] }}
                transition={{ duration: 1.6, delay, repeat: Infinity, repeatDelay: 0.6 }}
              />
            ))}
        </AnimatePresence>
      </svg>

      {!poured ? (
        <Button onClick={() => setPoured(true)}>Pour From the Top</Button>
      ) : (
        <button
          onClick={() => setPoured(false)}
          className="flex items-center gap-2 px-5 py-3 rounded-lg bg-slate-100 hover:bg-slate-200 font-semibold text-ink"
        >
          <RefreshCw size={20} /> Reset
        </button>
      )}

      {poured && (
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-projector-sm text-ink text-center max-w-xl"
        >
          The water doesn't move in a straight line — it splits and flows down whichever slope is
          lowest, collecting in different pools. Real rivers follow hills and mountains the exact
          same way.
        </motion.p>
      )}
    </div>
  )
}

export default TerrainFlowDemo
