import { useState } from 'react'
import { motion } from 'framer-motion'
import { RefreshCw } from 'lucide-react'
import { getInternationalWordPartsTagged } from '../../utils/numberToInternationalWords.js'
import { GROUP_COLORS } from '../../utils/internationalGroupColors.js'
import InternationalGroupLegend from './InternationalGroupLegend.jsx'

function InternationalNumberNameReveal({ number = 74532618 }) {
  const parts = getInternationalWordPartsTagged(number)
  const [revealedCount, setRevealedCount] = useState(0)

  const revealNext = () => setRevealedCount((c) => Math.min(parts.length, c + 1))
  const reset = () => setRevealedCount(0)

  return (
    <div className="flex flex-col items-center gap-8 w-full">
      <p className="text-projector-md font-extrabold text-primary tabular-nums">
        {number.toLocaleString('en-US')}
      </p>

      <div className="flex flex-wrap items-center justify-center gap-2 min-h-[3rem]">
        {parts.map((part, i) =>
          i < revealedCount ? (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className={`text-projector-sm font-bold ${GROUP_COLORS[part.group].text}`}
            >
              {part.text}
            </motion.span>
          ) : null,
        )}
      </div>

      <InternationalGroupLegend />

      <div className="flex items-center gap-3">
        <button
          onClick={revealNext}
          disabled={revealedCount >= parts.length}
          className="px-5 py-3 rounded-lg bg-primary text-white font-semibold hover:bg-primary-dark
            disabled:opacity-40 disabled:cursor-not-allowed"
        >
          Reveal Next Word
        </button>
        <button
          onClick={reset}
          aria-label="Reset number name"
          className="flex items-center gap-2 px-5 py-3 rounded-lg bg-slate-100 hover:bg-slate-200 font-semibold text-ink"
        >
          <RefreshCw size={20} /> Reset
        </button>
      </div>
    </div>
  )
}

export default InternationalNumberNameReveal
