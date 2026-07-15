import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { RefreshCw } from 'lucide-react'

function EquivalentFractionsReveal({ numerator = 1, denominator = 2, maxK = 6 }) {
  const [k, setK] = useState(1)

  const currentNumerator = numerator * k
  const currentDenominator = denominator * k
  const segments = Array.from({ length: currentDenominator }, (_, i) => i)
  const chain = Array.from({ length: k }, (_, i) => `${numerator * (i + 1)}/${denominator * (i + 1)}`)

  const next = () => setK((prev) => Math.min(maxK, prev + 1))
  const reset = () => setK(1)
  const isDone = k >= maxK

  return (
    <div className="flex flex-col items-center gap-8 w-full">
      <div className="flex gap-0.5 w-full max-w-xl h-16 sm:h-20">
        {segments.map((i) => (
          <motion.div
            key={i}
            layout
            className={`flex-1 border-r border-white last:border-r-0 first:rounded-l-md last:rounded-r-md
              ${i < currentNumerator ? 'bg-primary' : 'bg-slate-100'}`}
          />
        ))}
      </div>

      <div className="flex items-center gap-2 flex-wrap justify-center">
        <AnimatePresence>
          {chain.map((frac, i) => (
            <motion.span
              key={frac}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center gap-2"
            >
              {i > 0 && <span className="text-projector-sm font-extrabold text-slate-400">=</span>}
              <span className="px-3 py-2 rounded-lg bg-slate-100 text-ink font-extrabold text-projector-sm">
                {frac}
              </span>
            </motion.span>
          ))}
        </AnimatePresence>
      </div>

      <motion.p
        key={k}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-projector-sm text-ink text-center max-w-xl"
      >
        {k === 1
          ? `This bar shows ${numerator}/${denominator} shaded. Split each part into smaller equal pieces to see an equivalent fraction.`
          : `Splitting each part into ${k} equal smaller pieces multiplies both the numerator and denominator by ${k}: ${numerator}/${denominator} = ${currentNumerator}/${currentDenominator}. The shaded amount looks exactly the same size — only the number of pieces changed.`}
      </motion.p>

      <div className="flex items-center gap-3">
        {!isDone && (
          <button
            onClick={next}
            className="px-5 py-3 rounded-lg bg-primary text-white font-semibold hover:bg-primary-dark"
          >
            Split Into Smaller Parts
          </button>
        )}
        <button
          onClick={reset}
          aria-label="Reset equivalent fractions"
          className="flex items-center gap-2 px-5 py-3 rounded-lg bg-slate-100 hover:bg-slate-200 font-semibold text-ink"
        >
          <RefreshCw size={20} /> Reset
        </button>
      </div>
    </div>
  )
}

export default EquivalentFractionsReveal
