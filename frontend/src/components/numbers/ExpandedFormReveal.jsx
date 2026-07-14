import { useState } from 'react'
import { motion } from 'framer-motion'
import { RefreshCw } from 'lucide-react'

const PLACE_VALUES = [10000, 1000, 100, 10, 1]

function getParts(number) {
  const digits = String(number).padStart(5, '0').split('').map(Number)
  return digits.map((digit, i) => digit * PLACE_VALUES[i]).filter((part) => part > 0)
}

function ExpandedFormReveal({ number = 45672 }) {
  const parts = getParts(number)
  const [revealedCount, setRevealedCount] = useState(0)

  const revealNext = () => setRevealedCount((c) => Math.min(parts.length, c + 1))
  const reset = () => setRevealedCount(0)

  return (
    <div className="flex flex-col items-center gap-8 w-full">
      <p className="text-projector-md font-extrabold text-primary">
        {number.toLocaleString('en-IN')} =
      </p>

      <div className="flex flex-wrap items-center justify-center gap-3">
        {parts.map((part, i) =>
          i < revealedCount ? (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="text-projector-sm font-bold text-ink"
            >
              {part.toLocaleString('en-IN')}
              {i < parts.length - 1 ? ' +' : ''}
            </motion.span>
          ) : null,
        )}
      </div>

      <div className="flex items-center gap-3">
        <button
          onClick={revealNext}
          disabled={revealedCount >= parts.length}
          className="px-5 py-3 rounded-lg bg-primary text-white font-semibold hover:bg-primary-dark
            disabled:opacity-40 disabled:cursor-not-allowed"
        >
          Reveal Next Part
        </button>
        <button
          onClick={reset}
          aria-label="Reset expanded form"
          className="flex items-center gap-2 px-5 py-3 rounded-lg bg-slate-100 hover:bg-slate-200 font-semibold text-ink"
        >
          <RefreshCw size={20} /> Reset
        </button>
      </div>
    </div>
  )
}

export default ExpandedFormReveal
