import { useState } from 'react'
import { motion } from 'framer-motion'

const CELL = 30
const TOTAL = 36

function squarePosition(i) {
  const size = 6
  const row = Math.floor(i / size)
  const col = i % size
  return { x: col * CELL, y: row * CELL }
}

function trianglePosition(i) {
  const rows = 8 // 1+2+...+8 = 36
  let remaining = i
  let row = 0
  while (remaining >= row + 1) {
    remaining -= row + 1
    row++
  }
  const col = remaining
  const rowLength = row + 1
  const maxWidth = rows * CELL
  const rowWidth = rowLength * CELL
  const offsetX = (maxWidth - rowWidth) / 2
  return { x: offsetX + col * CELL, y: row * CELL }
}

function TriangleSquareMorph() {
  const [view, setView] = useState('triangle')
  const boardSize = 8 * CELL

  return (
    <div className="flex flex-col items-center gap-8 w-full">
      <p className="text-projector-sm text-ink text-center">
        <span className="font-extrabold text-primary">36 dots</span> — same dots, two perfect shapes!
      </p>

      <div className="relative" style={{ width: boardSize, height: boardSize }}>
        {Array.from({ length: TOTAL }).map((_, i) => {
          const pos = view === 'triangle' ? trianglePosition(i) : squarePosition(i)
          return (
            <motion.div
              key={i}
              animate={{ left: pos.x, top: pos.y }}
              transition={{ duration: 0.6, type: 'spring', bounce: 0.2 }}
              className="absolute rounded-full bg-primary"
              style={{ width: CELL - 6, height: CELL - 6 }}
            />
          )
        })}
      </div>

      <p className="text-base sm:text-lg text-slate-500 text-center">
        {view === 'triangle'
          ? 'As a triangle: 1 + 2 + 3 + ... + 8 = 36'
          : 'As a square: 6 × 6 = 36'}
      </p>

      <div className="flex items-center gap-3">
        <button
          onClick={() => setView('triangle')}
          className={`px-5 py-3 rounded-lg font-semibold ${view === 'triangle' ? 'bg-primary text-white' : 'bg-slate-100 text-ink hover:bg-slate-200'}`}
        >
          Show as Triangle
        </button>
        <button
          onClick={() => setView('square')}
          className={`px-5 py-3 rounded-lg font-semibold ${view === 'square' ? 'bg-primary text-white' : 'bg-slate-100 text-ink hover:bg-slate-200'}`}
        >
          Show as Square
        </button>
      </div>
    </div>
  )
}

export default TriangleSquareMorph
