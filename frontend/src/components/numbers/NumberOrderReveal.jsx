import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { RefreshCw } from 'lucide-react'
import { compareNumbers, placeNameAt } from '../../utils/compareNumbers.js'

const DEFAULT_NUMBERS = [45210, 9876, 51000, 6321, 45102]

function explainPick(target, runnerUp, wantSmallest) {
  const cmp = compareNumbers(target, runnerUp)
  const verb = wantSmallest ? 'smallest' : 'largest'
  const strT = String(target)
  const strR = String(runnerUp)

  if (cmp.reason === 'digit-count') {
    const fewer = strT.length < strR.length ? target : runnerUp
    const more = strT.length < strR.length ? runnerUp : target
    return wantSmallest
      ? `${fewer.toLocaleString('en-IN')} has fewer digits than ${more.toLocaleString('en-IN')}, so it is the ${verb} of the remaining numbers.`
      : `${more.toLocaleString('en-IN')} has more digits than ${fewer.toLocaleString('en-IN')}, so it is the ${verb} of the remaining numbers.`
  }

  if (cmp.reason === 'place') {
    const place = placeNameAt(cmp.diffIndex, strT.length)
    return `Both have ${strT.length} digits. Comparing place by place, the ${place} place decides it — ${target.toLocaleString('en-IN')} is the ${verb} of the remaining numbers.`
  }

  return `${target.toLocaleString('en-IN')} matches ${runnerUp.toLocaleString('en-IN')} exactly.`
}

function NumberOrderReveal({ numbers = DEFAULT_NUMBERS }) {
  const [mode, setMode] = useState(null)
  const [placed, setPlaced] = useState([])
  const [remaining, setRemaining] = useState(numbers)
  const [reason, setReason] = useState(null)

  const chooseMode = (nextMode) => {
    setMode(nextMode)
    setPlaced([])
    setRemaining(numbers)
    setReason(null)
  }

  const placeNext = () => {
    if (remaining.length === 0) return

    const wantSmallest = mode === 'asc'
    let target = remaining[0]
    for (const n of remaining) {
      if (wantSmallest ? n < target : n > target) target = n
    }

    if (remaining.length > 1) {
      const others = remaining.filter((n) => n !== target)
      let runnerUp = others[0]
      for (const n of others) {
        if (wantSmallest ? n < runnerUp : n > runnerUp) runnerUp = n
      }
      setReason(explainPick(target, runnerUp, wantSmallest))
    } else {
      setReason(`${target.toLocaleString('en-IN')} is the only number left.`)
    }

    setPlaced((p) => [...p, target])
    setRemaining((r) => r.filter((n) => n !== target))
  }

  const reset = () => {
    setMode(null)
    setPlaced([])
    setRemaining(numbers)
    setReason(null)
  }

  const isDone = mode && remaining.length === 0

  return (
    <div className="flex flex-col items-center gap-8 w-full">
      {!mode && (
        <div className="flex items-center gap-4">
          <button
            onClick={() => chooseMode('asc')}
            className="px-5 py-3 rounded-lg bg-primary text-white font-semibold hover:bg-primary-dark"
          >
            Sort Ascending (Smallest → Largest)
          </button>
          <button
            onClick={() => chooseMode('desc')}
            className="px-5 py-3 rounded-lg bg-primary text-white font-semibold hover:bg-primary-dark"
          >
            Sort Descending (Largest → Smallest)
          </button>
        </div>
      )}

      {mode && (
        <>
          <div className="flex flex-col items-center gap-2">
            <span className="text-sm font-semibold text-slate-500">Remaining numbers</span>
            <div className="flex flex-wrap justify-center gap-3">
              <AnimatePresence>
                {remaining.map((n) => (
                  <motion.span
                    key={n}
                    layout
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    className="px-4 py-3 rounded-lg bg-slate-100 text-ink font-extrabold text-projector-sm"
                  >
                    {n.toLocaleString('en-IN')}
                  </motion.span>
                ))}
              </AnimatePresence>
              {remaining.length === 0 && (
                <span className="text-slate-400 text-sm">All placed!</span>
              )}
            </div>
          </div>

          <div className="flex flex-col items-center gap-2">
            <span className="text-sm font-semibold text-slate-500">
              Sorted so far ({mode === 'asc' ? 'ascending' : 'descending'})
            </span>
            <div className="flex flex-wrap justify-center items-center gap-2 min-h-14">
              <AnimatePresence>
                {placed.map((n, i) => (
                  <span key={n} className="flex items-center gap-2">
                    <motion.span
                      layout
                      initial={{ opacity: 0, y: -20 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="px-4 py-3 rounded-lg bg-primary text-white font-extrabold text-projector-sm"
                    >
                      {n.toLocaleString('en-IN')}
                    </motion.span>
                    {i < placed.length - 1 && (
                      <span className="text-projector-sm font-extrabold text-slate-400">
                        {mode === 'asc' ? '<' : '>'}
                      </span>
                    )}
                  </span>
                ))}
              </AnimatePresence>
            </div>
          </div>

          {reason && (
            <motion.p
              key={reason}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-projector-sm text-ink text-center max-w-2xl"
            >
              {reason}
            </motion.p>
          )}

          {isDone && (
            <p className="text-projector-sm text-primary font-bold text-center">
              Done! That's the full {mode === 'asc' ? 'ascending' : 'descending'} order.
            </p>
          )}
        </>
      )}

      <div className="flex items-center gap-3">
        {mode && !isDone && (
          <button
            onClick={placeNext}
            className="px-5 py-3 rounded-lg bg-primary text-white font-semibold hover:bg-primary-dark"
          >
            Place Next Number
          </button>
        )}
        <button
          onClick={reset}
          aria-label="Reset ordering"
          className="flex items-center gap-2 px-5 py-3 rounded-lg bg-slate-100 hover:bg-slate-200 font-semibold text-ink"
        >
          <RefreshCw size={20} /> Reset
        </button>
      </div>
    </div>
  )
}

export default NumberOrderReveal
