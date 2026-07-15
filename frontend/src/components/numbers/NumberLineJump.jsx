import { useState } from 'react'
import { motion } from 'framer-motion'
import { RefreshCw } from 'lucide-react'

function NumberLineJump({ start = 5, amount = 4, operation = 'add' }) {
  const [jumpsDone, setJumpsDone] = useState(0)

  const end = operation === 'add' ? start + amount : start - amount
  const min = Math.max(0, Math.min(start, end) - 2)
  const max = Math.max(start, end) + 2
  const current = operation === 'add' ? start + jumpsDone : start - jumpsDone
  const isDone = jumpsDone === amount

  const jump = () => setJumpsDone((j) => Math.min(amount, j + 1))
  const reset = () => setJumpsDone(0)

  const ticks = Array.from({ length: max - min + 1 }, (_, i) => min + i)
  const pct = (value) => ((value - min) / (max - min)) * 100

  return (
    <div className="flex flex-col items-center gap-8 w-full">
      <div className="w-[42rem] max-w-full px-4 pt-16 pb-16">
        <div className="relative h-2 bg-slate-200 rounded-full">
          {ticks.map((t) => (
            <div key={t} className="absolute top-1/2 -translate-y-1/2 flex flex-col items-center" style={{ left: `${pct(t)}%` }}>
              <div className="w-0.5 h-3 bg-slate-300 -translate-x-1/2" />
              <span className="text-xs text-slate-400 mt-4 -translate-x-1/2">{t}</span>
            </div>
          ))}

          <div
            className="absolute flex flex-col items-center -translate-x-1/2 top-9"
            style={{ left: `${pct(start)}%` }}
          >
            <div className="w-2 h-2 rounded-full bg-slate-400 mb-1" />
            <span className="text-xs font-semibold text-slate-500">Start</span>
          </div>

          <motion.div
            initial={false}
            animate={{ left: `${pct(current)}%` }}
            transition={{ duration: 0.4 }}
            className="absolute flex flex-col items-center -translate-x-1/2 -top-8"
          >
            <span className="text-sm font-extrabold text-primary">{current}</span>
            <div className="w-3 h-3 rounded-full bg-primary mt-1" />
          </motion.div>
        </div>
      </div>

      <p className="text-projector-sm text-ink text-center">
        {jumpsDone === 0
          ? `Start at ${start}. We will ${operation === 'add' ? 'move forward (add)' : 'move backward (subtract)'} ${amount} steps.`
          : `Jump ${jumpsDone} of ${amount}: now at ${current}.`}
      </p>

      {isDone && (
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-projector-sm font-bold text-primary text-center"
        >
          Starting at {start}, moving {amount} steps {operation === 'add' ? 'forward' : 'backward'}, we reach {end}.
        </motion.p>
      )}

      <div className="flex items-center gap-3">
        {!isDone && (
          <button
            onClick={jump}
            className="px-5 py-3 rounded-lg bg-primary text-white font-semibold hover:bg-primary-dark"
          >
            Jump {operation === 'add' ? 'Forward' : 'Backward'}
          </button>
        )}
        <button
          onClick={reset}
          aria-label="Reset jump"
          className="flex items-center gap-2 px-5 py-3 rounded-lg bg-slate-100 hover:bg-slate-200 font-semibold text-ink"
        >
          <RefreshCw size={20} /> Reset
        </button>
      </div>
    </div>
  )
}

export default NumberLineJump
