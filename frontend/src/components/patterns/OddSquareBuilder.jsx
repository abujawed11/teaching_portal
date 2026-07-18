import { useState } from 'react'
import { motion } from 'framer-motion'
import { RefreshCw } from 'lucide-react'

const CELL = 40
const GAP = 4

function OddSquareBuilder({ maxN = 6 }) {
  const [step, setStep] = useState(1)

  const oddNumbers = Array.from({ length: step }, (_, i) => 2 * i + 1)
  const latestOdd = oddNumbers[oddNumbers.length - 1]
  const sum = step * step
  const isDone = step === maxN

  const addNext = () => setStep((s) => Math.min(maxN, s + 1))
  const reset = () => setStep(1)

  const cells = []
  for (let row = 0; row < step; row++) {
    for (let col = 0; col < step; col++) {
      const band = Math.max(row, col) + 1
      cells.push({ row, col, band })
    }
  }

  const boardSize = step * CELL + (step - 1) * GAP

  return (
    <div className="flex flex-col items-center gap-8 w-full">
      <p className="text-projector-sm text-ink text-center">
        {oddNumbers.join(' + ')}
        {' = '}
        <span className="font-extrabold text-primary">{sum}</span>
        {step > 1 && <span className="text-slate-400"> = {step}²</span>}
      </p>

      <div
        className="relative"
        style={{ width: boardSize, height: boardSize }}
      >
        {cells.map(({ row, col, band }) => {
          const isNewest = band === step
          return (
            <motion.div
              key={`${row}-${col}`}
              initial={isNewest ? { opacity: 0, scale: 0.4 } : false}
              animate={{
                opacity: 1,
                scale: 1,
                backgroundColor: isNewest ? '#f59e0b' : '#2563eb',
              }}
              transition={{ duration: 0.35 }}
              className="absolute rounded-full"
              style={{
                width: CELL - 6,
                height: CELL - 6,
                left: col * (CELL + GAP),
                top: (step - 1 - row) * (CELL + GAP),
              }}
            />
          )
        })}
      </div>

      <p className="text-base sm:text-lg text-slate-500 text-center max-w-md min-h-8">
        {step === 1
          ? 'We start with 1 dot.'
          : `+ ${latestOdd} dots (a bottom row of ${step - 1}, a side column of ${step - 1}, and 1 corner dot = ${2 * (step - 1) + 1})`}
      </p>

      {isDone && (
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-projector-sm font-bold text-primary text-center"
        >
          Sum of the first {maxN} odd numbers = {maxN}² = {sum}
        </motion.p>
      )}

      <div className="flex items-center gap-3">
        {!isDone && (
          <button
            onClick={addNext}
            className="px-5 py-3 rounded-lg bg-primary text-white font-semibold hover:bg-primary-dark"
          >
            Add Next Odd Number
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

export default OddSquareBuilder
