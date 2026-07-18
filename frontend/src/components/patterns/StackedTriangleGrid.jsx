import { useState } from 'react'
import { motion } from 'framer-motion'
import { RefreshCw } from 'lucide-react'

const A = { x: 150, y: 20 }
const B = { x: 270, y: 240 }
const C = { x: 30, y: 240 }
const SIZE = 300

function lattice(i, j, n) {
  const w = (n - i - j) / n
  return {
    x: A.x * w + B.x * (i / n) + C.x * (j / n),
    y: A.y * w + B.y * (i / n) + C.y * (j / n),
  }
}

function buildTriangles(n) {
  const tris = []
  for (let i = 0; i < n; i++) {
    for (let j = 0; j <= n - 1 - i; j++) {
      tris.push({
        key: `up-${i}-${j}`,
        points: [lattice(i, j, n), lattice(i + 1, j, n), lattice(i, j + 1, n)],
        isNewest: i + j === n - 1,
        orientation: 'up',
      })
    }
  }
  for (let i = 0; i <= n - 2; i++) {
    for (let j = 0; j <= n - 2 - i; j++) {
      tris.push({
        key: `down-${i}-${j}`,
        points: [lattice(i + 1, j, n), lattice(i, j + 1, n), lattice(i + 1, j + 1, n)],
        isNewest: i + j === n - 2,
        orientation: 'down',
      })
    }
  }
  return tris
}

function StackedTriangleGrid() {
  const [n, setN] = useState(1)
  const maxN = 5
  const triangles = buildTriangles(n)
  const oddNumbers = Array.from({ length: n }, (_, i) => 2 * i + 1)
  const isDone = n === maxN

  const addRow = () => setN((v) => Math.min(maxN, v + 1))
  const reset = () => setN(1)

  return (
    <div className="flex flex-col items-center gap-6 w-full">
      <p className="text-projector-sm text-ink text-center">
        {oddNumbers.join(' + ')} = <span className="font-extrabold text-primary">{n * n}</span>
      </p>

      <div className="flex items-center justify-center" style={{ width: SIZE, height: SIZE }}>
        <svg width={SIZE} height={SIZE}>
          {triangles.map((t) => (
            <motion.polygon
              key={t.key}
              points={t.points.map((p) => `${p.x},${p.y}`).join(' ')}
              stroke="white"
              strokeWidth={1.5}
              initial={t.isNewest ? { opacity: 0, scale: 0.5 } : false}
              animate={{
                opacity: 1,
                scale: 1,
                fill: t.isNewest ? '#f59e0b' : t.orientation === 'up' ? '#2563eb' : '#93c5fd',
              }}
              transition={{ duration: 0.35 }}
            />
          ))}
        </svg>
      </div>

      <p className="text-base sm:text-lg text-slate-500 text-center max-w-md">
        {n === 1
          ? 'Row 1: 1 triangle pointing up.'
          : `Row ${n}: ${n} pointing up + ${n - 1} pointing down = ${2 * n - 1} — the next odd number!`}
      </p>

      <div className="flex items-center gap-3">
        {!isDone && (
          <button
            onClick={addRow}
            className="px-5 py-3 rounded-lg bg-primary text-white font-semibold hover:bg-primary-dark"
          >
            Add Next Row
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

export default StackedTriangleGrid
