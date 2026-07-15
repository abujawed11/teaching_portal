import { useState } from 'react'
import { motion } from 'framer-motion'
import { RefreshCw } from 'lucide-react'

const COLORS = ['bg-primary', 'bg-emerald-500', 'bg-amber-500', 'bg-violet-500', 'bg-rose-500']

function NumberLinePosition({ numbers = [3, 7, 12, 5], max = 15 }) {
  const [revealed, setRevealed] = useState(0)

  const showNext = () => setRevealed((r) => Math.min(numbers.length, r + 1))
  const reset = () => setRevealed(0)

  const shown = numbers.slice(0, revealed)
  const last = shown[shown.length - 1]
  const prev = shown[shown.length - 2]

  const ticks = Array.from({ length: max + 1 }, (_, i) => i)

  return (
    <div className="flex flex-col items-center gap-8 w-full">
      <div className="w-full max-w-2xl px-4">
        <div className="relative h-2 bg-slate-200 rounded-full">
          {ticks.map((t) => (
            <div
              key={t}
              className="absolute top-1/2 -translate-y-1/2 w-0.5 h-3 bg-slate-300"
              style={{ left: `${(t / max) * 100}%` }}
            />
          ))}
          {shown.map((n, i) => (
            <motion.div
              key={n}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="absolute flex flex-col items-center -translate-x-1/2"
              style={{ left: `${(n / max) * 100}%`, top: '-2.5rem' }}
            >
              <span className="text-sm font-extrabold text-ink">{n}</span>
              <div className={`w-3 h-3 rounded-full mt-1 ${COLORS[i % COLORS.length]}`} />
            </motion.div>
          ))}
        </div>
        <div className="flex justify-between text-sm font-semibold text-slate-400 mt-2">
          <span>0</span>
          <span>{max}</span>
        </div>
      </div>

      {shown.length > 0 && (
        <motion.p
          key={last}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-projector-sm text-ink text-center max-w-xl"
        >
          {prev === undefined
            ? `${last} is placed on the number line at its own position.`
            : last > prev
              ? `${last} is to the right of ${prev}, so ${last} is greater than ${prev}.`
              : `${last} is to the left of ${prev}, so ${last} is smaller than ${prev}.`}
        </motion.p>
      )}

      <div className="flex items-center gap-3">
        {revealed < numbers.length && (
          <button
            onClick={showNext}
            className="px-5 py-3 rounded-lg bg-primary text-white font-semibold hover:bg-primary-dark"
          >
            Show Next Number
          </button>
        )}
        <button
          onClick={reset}
          aria-label="Reset number line"
          className="flex items-center gap-2 px-5 py-3 rounded-lg bg-slate-100 hover:bg-slate-200 font-semibold text-ink"
        >
          <RefreshCw size={20} /> Reset
        </button>
      </div>
    </div>
  )
}

export default NumberLinePosition
