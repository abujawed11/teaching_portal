import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { RefreshCw } from 'lucide-react'

const STEPS = [
  { largest: '999', largestLabel: 'largest 3-digit number', smallest: '1,000', smallestLabel: 'smallest 4-digit number' },
  { largest: '9,999', largestLabel: 'largest 4-digit number', smallest: '10,000', smallestLabel: 'smallest 5-digit number' },
  { largest: '99,999', largestLabel: 'largest 5-digit number', smallest: '1,00,000', smallestLabel: 'smallest 6-digit number', isLakh: true },
]

const SKIP_CHAIN = ['99,995', '99,996', '99,997', '99,998', '99,999', '1,00,000']

function LakhSteppingStones() {
  const [revealed, setRevealed] = useState(0)
  const maxReveal = STEPS.length

  const revealNext = () => setRevealed((r) => Math.min(maxReveal, r + 1))
  const reset = () => setRevealed(0)

  return (
    <div className="flex flex-col items-center gap-6 w-full">
      <div className="flex flex-col gap-3 w-full max-w-xl">
        {STEPS.map((step, i) => (
          <AnimatePresence key={i}>
            {revealed > i && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35 }}
                className={`flex items-center justify-between gap-3 rounded-xl px-4 py-3 ${
                  step.isLakh ? 'bg-primary text-white' : 'bg-slate-50'
                }`}
              >
                <div className="text-left">
                  <p className={`text-lg sm:text-xl font-extrabold ${step.isLakh ? 'text-white' : 'text-ink'}`}>
                    {step.largest}
                  </p>
                  <p className={`text-xs sm:text-sm ${step.isLakh ? 'text-white/80' : 'text-slate-500'}`}>
                    {step.largestLabel}
                  </p>
                </div>
                <span className={`text-base font-bold ${step.isLakh ? 'text-white/80' : 'text-slate-400'}`}>+1 →</span>
                <div className="text-right">
                  <p className={`text-lg sm:text-xl font-extrabold ${step.isLakh ? 'text-white' : 'text-ink'}`}>
                    {step.smallest}
                  </p>
                  <p className={`text-xs sm:text-sm ${step.isLakh ? 'text-white/80' : 'text-slate-500'}`}>
                    {step.smallestLabel}
                  </p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        ))}
      </div>

      <AnimatePresence>
        {revealed >= maxReveal && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
            className="flex flex-col items-center gap-3"
          >
            <p className="text-projector-sm font-bold text-ink">1,00,000 is read as "One Lakh"</p>
            <div className="flex flex-wrap justify-center items-center gap-2">
              {SKIP_CHAIN.map((n, i) => (
                <span key={n} className="flex items-center gap-2">
                  <span
                    className={`px-3 py-1.5 rounded-lg text-sm sm:text-base font-bold ${
                      i === SKIP_CHAIN.length - 1 ? 'bg-primary text-white' : 'bg-slate-100 text-ink'
                    }`}
                  >
                    {n}
                  </span>
                  {i < SKIP_CHAIN.length - 1 && <span className="text-slate-400">→</span>}
                </span>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="flex items-center gap-3">
        <button
          onClick={revealNext}
          disabled={revealed >= maxReveal}
          className="px-5 py-3 rounded-lg bg-primary text-white font-semibold hover:bg-primary-dark
            disabled:opacity-40 disabled:cursor-not-allowed"
        >
          Reveal Next Step
        </button>
        <button
          onClick={reset}
          aria-label="Reset stepping stones"
          className="flex items-center gap-2 px-5 py-3 rounded-lg bg-slate-100 hover:bg-slate-200 font-semibold text-ink"
        >
          <RefreshCw size={20} /> Reset
        </button>
      </div>
    </div>
  )
}

export default LakhSteppingStones
