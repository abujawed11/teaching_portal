import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { RefreshCw } from 'lucide-react'

const SIZE = 260
const CENTER = SIZE / 2
const RADIUS = 100

function graphPoints(n) {
  return Array.from({ length: n }, (_, i) => {
    const angle = (2 * Math.PI * i) / n - Math.PI / 2
    return {
      x: CENTER + RADIUS * Math.cos(angle),
      y: CENTER + RADIUS * Math.sin(angle),
    }
  })
}

function lineCount(n) {
  return (n * (n - 1)) / 2
}

function CompleteGraphBuilder() {
  const [n, setN] = useState(2)
  const points = graphPoints(n)
  const isDone = n === 6

  const addPoint = () => setN((v) => Math.min(6, v + 1))
  const reset = () => setN(2)

  const lines = []
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      lines.push([points[i], points[j]])
    }
  }

  return (
    <div className="flex flex-col items-center gap-6 w-full">
      <div className="flex items-center justify-center" style={{ width: SIZE, height: SIZE }}>
        <AnimatePresence mode="wait">
          <motion.svg
            key={n}
            width={SIZE}
            height={SIZE}
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
          >
            {lines.map(([a, b], i) => (
              <line key={i} x1={a.x} y1={a.y} x2={b.x} y2={b.y} stroke="#f59e0b" strokeWidth={2} />
            ))}
            {points.map((p, i) => (
              <circle key={i} cx={p.x} cy={p.y} r={7} fill="#2563eb" />
            ))}
          </motion.svg>
        </AnimatePresence>
      </div>

      <p className="text-projector-sm text-ink text-center">
        <span className="font-extrabold text-primary">K{n}</span> — {n} points, all connected
      </p>

      <p className="text-base sm:text-lg text-slate-500 text-center">
        Number of lines: <span className="font-bold text-primary">{lineCount(n)}</span>
      </p>

      <div className="flex items-center gap-3">
        {!isDone && (
          <button
            onClick={addPoint}
            className="px-5 py-3 rounded-lg bg-primary text-white font-semibold hover:bg-primary-dark"
          >
            Add a Point
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

export default CompleteGraphBuilder
