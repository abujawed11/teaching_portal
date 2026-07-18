import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { RefreshCw } from 'lucide-react'

const NAMES = {
  3: 'Triangle',
  4: 'Quadrilateral (Square)',
  5: 'Pentagon',
  6: 'Hexagon',
  7: 'Heptagon',
  8: 'Octagon',
  9: 'Nonagon',
  10: 'Decagon',
}

const SIZE = 260
const CENTER = SIZE / 2
const RADIUS = 100

function polygonPoints(n) {
  return Array.from({ length: n }, (_, i) => {
    const angle = (2 * Math.PI * i) / n - Math.PI / 2
    return {
      x: CENTER + RADIUS * Math.cos(angle),
      y: CENTER + RADIUS * Math.sin(angle),
    }
  })
}

function RegularPolygonBuilder() {
  const [sides, setSides] = useState(3)
  const points = polygonPoints(sides)
  const pointsAttr = points.map((p) => `${p.x},${p.y}`).join(' ')
  const isDone = sides === 10

  const addSide = () => setSides((s) => Math.min(10, s + 1))
  const reset = () => setSides(3)

  return (
    <div className="flex flex-col items-center gap-6 w-full">
      <div className="flex items-center justify-center" style={{ width: SIZE, height: SIZE }}>
        <AnimatePresence mode="wait">
          <motion.svg
            key={sides}
            width={SIZE}
            height={SIZE}
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
          >
            <polygon points={pointsAttr} fill="#2563eb1a" stroke="#2563eb" strokeWidth={3} />
            {points.map((p, i) => (
              <circle key={i} cx={p.x} cy={p.y} r={6} fill="#2563eb" />
            ))}
          </motion.svg>
        </AnimatePresence>
      </div>

      <p className="text-projector-sm text-ink text-center">
        <span className="font-extrabold text-primary">{NAMES[sides]}</span>
      </p>

      <p className="text-base sm:text-lg text-slate-500 text-center">
        Sides: <span className="font-bold text-primary">{sides}</span> &nbsp;|&nbsp; Corners:{' '}
        <span className="font-bold text-primary">{sides}</span>
      </p>

      <div className="flex items-center gap-3">
        {!isDone && (
          <button
            onClick={addSide}
            className="px-5 py-3 rounded-lg bg-primary text-white font-semibold hover:bg-primary-dark"
          >
            Add a Side
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

export default RegularPolygonBuilder
