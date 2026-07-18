import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { RefreshCw } from 'lucide-react'

const DOT = 20

function UpDownDiamondBuilder() {
  const [k, setK] = useState(1)
  const maxK = 6
  const isDone = k === maxK

  const ascending = Array.from({ length: k }, (_, i) => i + 1)
  const descending = Array.from({ length: k - 1 }, (_, i) => k - 1 - i)
  const rows = [...ascending, ...descending]
  const equation = rows.join(' + ')

  const next = () => setK((v) => Math.min(maxK, v + 1))
  const reset = () => setK(1)

  return (
    <div className="flex flex-col items-center gap-6 w-full">
      <p className="text-projector-sm text-ink text-center">
        {equation} = <span className="font-extrabold text-primary">{k * k}</span>
      </p>

      <div className="min-h-64 flex items-center justify-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={k}
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
            className="flex flex-col items-center gap-1.5"
          >
            {rows.map((len, r) => (
              <div key={r} className="flex gap-1.5">
                {Array.from({ length: len }).map((_, c) => (
                  <div
                    key={c}
                    className="rounded-full bg-primary"
                    style={{ width: DOT, height: DOT }}
                  />
                ))}
              </div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

      <p className="text-base sm:text-lg text-slate-500 text-center">
        Walk up the rows (1, 2, 3, ...), reach the peak ({k}), then walk back down.
      </p>

      <div className="flex items-center gap-3">
        {!isDone && (
          <button
            onClick={next}
            className="px-5 py-3 rounded-lg bg-primary text-white font-semibold hover:bg-primary-dark"
          >
            Add Next Layer
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

export default UpDownDiamondBuilder
