import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const P1 = { x: 40, y: 130 }
const P5 = { x: 360, y: 130 }

function bumpPoints(p1, p2) {
  const dx = (p2.x - p1.x) / 3
  const dy = (p2.y - p1.y) / 3
  const pB = { x: p1.x + dx, y: p1.y + dy }
  const pD = { x: p1.x + 2 * dx, y: p1.y + 2 * dy }
  const angle = -Math.PI / 3
  const pC = {
    x: pB.x + dx * Math.cos(angle) - dy * Math.sin(angle),
    y: pB.y + dx * Math.sin(angle) + dy * Math.cos(angle),
  }
  return [p1, pB, pC, pD, p2]
}

const bumped = bumpPoints(P1, P5)

function SpeedBumpDemo() {
  const [isBumped, setIsBumped] = useState(false)
  const points = isBumped ? bumped : [P1, P5]

  return (
    <div className="flex flex-col items-center gap-6 w-full">
      <svg width={400} height={160}>
        <AnimatePresence mode="wait">
          <motion.polyline
            key={isBumped ? 'bumped' : 'straight'}
            points={points.map((p) => `${p.x},${p.y}`).join(' ')}
            fill="none"
            stroke="#2563eb"
            strokeWidth={4}
            strokeLinecap="round"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          />
        </AnimatePresence>
        {isBumped &&
          points.map((p, i) => (
            <circle key={i} cx={p.x} cy={p.y} r={5} fill="#f59e0b" />
          ))}
      </svg>

      <p className="text-projector-sm text-ink text-center">
        {isBumped ? '1 line became 4 shorter lines' : '1 straight line'}
      </p>

      <button
        onClick={() => setIsBumped((v) => !v)}
        className="px-5 py-3 rounded-lg bg-primary text-white font-semibold hover:bg-primary-dark"
      >
        {isBumped ? 'Show the Straight Line' : 'Add the Speed Bump'}
      </button>
    </div>
  )
}

export default SpeedBumpDemo
