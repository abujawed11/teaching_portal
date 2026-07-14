import { useState } from 'react'
import { motion } from 'framer-motion'
import { RefreshCw } from 'lucide-react'

function compareNumbers(a, b) {
  const strA = String(a)
  const strB = String(b)

  if (strA.length !== strB.length) {
    return {
      symbol: strA.length > strB.length ? '>' : '<',
      reason: 'digit-count',
      diffIndex: null,
    }
  }

  for (let i = 0; i < strA.length; i++) {
    if (strA[i] !== strB[i]) {
      return { symbol: strA[i] > strB[i] ? '>' : '<', reason: 'place', diffIndex: i }
    }
  }

  return { symbol: '=', reason: 'equal', diffIndex: null }
}

const STAGE_DIGIT_COUNT = 1
const STAGE_PLACE_BY_PLACE = 2
const STAGE_RESULT = 3

function NumberComparisonReveal({ numberA = 45672, numberB = 45267 }) {
  const strA = String(numberA)
  const strB = String(numberB)
  const comparison = compareNumbers(numberA, numberB)
  const sameLength = strA.length === strB.length
  const [stage, setStage] = useState(0)

  const nextStage = () => {
    if (stage === STAGE_DIGIT_COUNT && !sameLength) {
      setStage(STAGE_RESULT)
      return
    }
    setStage((s) => Math.min(STAGE_RESULT, s + 1))
  }
  const reset = () => setStage(0)

  const buttonLabel =
    stage === 0
      ? 'Compare Digit Count'
      : stage === STAGE_DIGIT_COUNT
        ? 'Compare Place by Place'
        : 'Show Result'

  return (
    <div className="flex flex-col items-center gap-8 w-full">
      <div className="flex items-center gap-6">
        <div className="flex flex-col items-center gap-2">
          {stage >= STAGE_DIGIT_COUNT && (
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-sm font-semibold text-slate-500"
            >
              {strA.length} digits
            </motion.span>
          )}
          <div className="flex gap-1">
            {strA.split('').map((digit, i) => (
              <span
                key={i}
                className={`w-10 h-12 sm:w-12 sm:h-14 flex items-center justify-center rounded-lg text-projector-sm font-extrabold transition-colors
                  ${
                    stage >= STAGE_PLACE_BY_PLACE && comparison.reason === 'place' && i === comparison.diffIndex
                      ? 'bg-primary text-white'
                      : 'bg-slate-100 text-ink'
                  }`}
              >
                {digit}
              </span>
            ))}
          </div>
        </div>

        <span className="text-projector-lg font-extrabold text-primary min-w-[2ch] text-center">
          {stage >= STAGE_RESULT ? comparison.symbol : '?'}
        </span>

        <div className="flex flex-col items-center gap-2">
          {stage >= STAGE_DIGIT_COUNT && (
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-sm font-semibold text-slate-500"
            >
              {strB.length} digits
            </motion.span>
          )}
          <div className="flex gap-1">
            {strB.split('').map((digit, i) => (
              <span
                key={i}
                className={`w-10 h-12 sm:w-12 sm:h-14 flex items-center justify-center rounded-lg text-projector-sm font-extrabold transition-colors
                  ${
                    stage >= STAGE_PLACE_BY_PLACE && comparison.reason === 'place' && i === comparison.diffIndex
                      ? 'bg-primary text-white'
                      : 'bg-slate-100 text-ink'
                  }`}
              >
                {digit}
              </span>
            ))}
          </div>
        </div>
      </div>

      {stage >= STAGE_RESULT && (
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-projector-sm text-ink text-center max-w-xl"
        >
          {comparison.reason === 'digit-count' &&
            `${strA.length !== strB.length ? (strA.length > strB.length ? numberA : numberB) : ''} has more digits, so it is the greater number.`}
          {comparison.reason === 'place' &&
            `Both numbers have the same digit count. The first different digit is at position ${comparison.diffIndex + 1} — that decides which number is greater.`}
          {comparison.reason === 'equal' && 'Every digit matches, so the two numbers are equal.'}
        </motion.p>
      )}

      <div className="flex items-center gap-3">
        <button
          onClick={nextStage}
          disabled={stage >= STAGE_RESULT}
          className="px-5 py-3 rounded-lg bg-primary text-white font-semibold hover:bg-primary-dark
            disabled:opacity-40 disabled:cursor-not-allowed"
        >
          {buttonLabel}
        </button>
        <button
          onClick={reset}
          aria-label="Reset comparison"
          className="flex items-center gap-2 px-5 py-3 rounded-lg bg-slate-100 hover:bg-slate-200 font-semibold text-ink"
        >
          <RefreshCw size={20} /> Reset
        </button>
      </div>
    </div>
  )
}

export default NumberComparisonReveal
