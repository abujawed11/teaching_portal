import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { RefreshCw } from 'lucide-react'

const SIZE = 300
const ROTATE_ANGLE = -Math.PI / 3

function midThird(p1, p2) {
  const dx = (p2.x - p1.x) / 3
  const dy = (p2.y - p1.y) / 3
  const pB = { x: p1.x + dx, y: p1.y + dy }
  const pD = { x: p1.x + 2 * dx, y: p1.y + 2 * dy }
  const pC = {
    x: pB.x + dx * Math.cos(ROTATE_ANGLE) - dy * Math.sin(ROTATE_ANGLE),
    y: pB.y + dx * Math.sin(ROTATE_ANGLE) + dy * Math.cos(ROTATE_ANGLE),
  }
  return { pB, pC, pD }
}

function kochCurve(p1, p2, depth) {
  if (depth === 0) return [p1, p2]
  const { pB, pC, pD } = midThird(p1, p2)
  return [
    ...kochCurve(p1, pB, depth - 1).slice(0, -1),
    ...kochCurve(pB, pC, depth - 1).slice(0, -1),
    ...kochCurve(pC, pD, depth - 1).slice(0, -1),
    ...kochCurve(pD, p2, depth - 1),
  ]
}

const TRIANGLE = [
  { x: 150, y: 40 },
  { x: 260, y: 230 },
  { x: 40, y: 230 },
]

function snowflakePoints(depth) {
  const [p1, p2, p3] = TRIANGLE
  return [
    ...kochCurve(p1, p2, depth).slice(0, -1),
    ...kochCurve(p2, p3, depth).slice(0, -1),
    ...kochCurve(p3, p1, depth).slice(0, -1),
  ]
}

function segmentCount(depth) {
  return 3 * 4 ** depth
}

function KochSnowflake() {
  const [depth, setDepth] = useState(0)
  const maxDepth = 4
  const points = snowflakePoints(depth)
  const pointsAttr = points.map((p) => `${p.x},${p.y}`).join(' ')
  const isDone = depth === maxDepth

  const nextIteration = () => setDepth((d) => Math.min(maxDepth, d + 1))
  const reset = () => setDepth(0)

  return (
    <div className="flex flex-col items-center gap-6 w-full">
      <div className="flex items-center justify-center" style={{ width: SIZE, height: SIZE }}>
        <AnimatePresence mode="wait">
          <motion.svg
            key={depth}
            width={SIZE}
            height={SIZE}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.35 }}
          >
            <polygon points={pointsAttr} fill="#2563eb1a" stroke="#2563eb" strokeWidth={1.5} />
          </motion.svg>
        </AnimatePresence>
      </div>

      <p className="text-projector-sm text-ink text-center">
        Iteration <span className="font-extrabold text-primary">{depth}</span>
      </p>

      <p className="text-base sm:text-lg text-slate-500 text-center">
        Total line segments: <span className="font-bold text-primary">{segmentCount(depth)}</span>
      </p>

      <div className="flex items-center gap-3">
        {!isDone && (
          <button
            onClick={nextIteration}
            className="px-5 py-3 rounded-lg bg-primary text-white font-semibold hover:bg-primary-dark"
          >
            Add a Speed Bump
          </button>
        )}
        <button
          onClick={reset}
          aria-label="Reset"
          className="flex items-center gap-2 px-5 py-3 rounded-lg bg-slate-100 hover:bg-slate-200 font-semibold text-ink"
        >
          <RefreshCw size={20} /> Reset
        </button>
      </div>
    </div>
  )
}

export default KochSnowflake
