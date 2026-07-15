import { useState } from 'react'
import { motion } from 'framer-motion'
import { RefreshCw, Check } from 'lucide-react'

const PLACE_NAMES_FROM_ONES = [
  'Ones',
  'Tens',
  'Hundreds',
  'Thousands',
  'Ten Thousands',
  'Lakhs',
  'Ten Lakhs',
  'Crores',
  'Ten Crores',
]

function placeNameAt(index, length) {
  const fromRight = length - 1 - index
  return PLACE_NAMES_FROM_ONES[fromRight] ?? `Place ${fromRight + 1}`
}

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

const STAGE_START = 0
const STAGE_DIGIT_COUNT = 1
const STAGE_WALKING = 2
const STAGE_RESULT = 3

function NumberComparisonReveal({ numberA = 45672, numberB = 45267 }) {
  const strA = String(numberA)
  const strB = String(numberB)
  const comparison = compareNumbers(numberA, numberB)
  const sameLength = strA.length === strB.length

  const [stage, setStage] = useState(STAGE_START)
  const [walkIndex, setWalkIndex] = useState(-1)

  const lastWalkIndex =
    comparison.reason === 'place' ? comparison.diffIndex : strA.length - 1
  const isLastWalkStep = stage === STAGE_WALKING && walkIndex >= lastWalkIndex

  const nextStage = () => {
    if (stage === STAGE_START) {
      setStage(STAGE_DIGIT_COUNT)
      return
    }
    if (stage === STAGE_DIGIT_COUNT) {
      if (!sameLength) {
        setStage(STAGE_RESULT)
        return
      }
      setStage(STAGE_WALKING)
      setWalkIndex(0)
      return
    }
    if (stage === STAGE_WALKING) {
      if (isLastWalkStep) {
        setStage(STAGE_RESULT)
      } else {
        setWalkIndex((w) => w + 1)
      }
    }
  }

  const reset = () => {
    setStage(STAGE_START)
    setWalkIndex(-1)
  }

  const buttonLabel =
    stage === STAGE_START
      ? 'Compare Digit Count'
      : stage === STAGE_DIGIT_COUNT
        ? sameLength
          ? 'Compare Place by Place'
          : 'Show Result'
        : stage === STAGE_WALKING
          ? isLastWalkStep
            ? 'Show Result'
            : `Check the ${placeNameAt(walkIndex + 1, strA.length)} Place`
          : 'Show Result'

  const digitStyle = (i) => {
    if (stage < STAGE_WALKING) return 'bg-slate-100 text-ink'
    if (stage === STAGE_RESULT) {
      return comparison.reason === 'place' && i === comparison.diffIndex
        ? 'bg-primary text-white'
        : comparison.reason === 'equal'
          ? 'bg-emerald-100 text-ink'
          : 'bg-slate-100 text-ink'
    }
    // stage === STAGE_WALKING
    if (i < walkIndex) return 'bg-emerald-100 text-ink'
    if (i === walkIndex) {
      return comparison.reason === 'place' && i === comparison.diffIndex
        ? 'bg-primary text-white'
        : 'bg-amber-200 text-ink'
    }
    return 'bg-slate-100 text-ink'
  }

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
                className={`relative w-10 h-12 sm:w-12 sm:h-14 flex items-center justify-center rounded-lg text-projector-sm font-extrabold transition-colors ${digitStyle(i)}`}
              >
                {digit}
                {stage === STAGE_WALKING && i < walkIndex && (
                  <Check size={14} className="absolute -top-2 -right-2 text-emerald-600 bg-white rounded-full" />
                )}
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
                className={`relative w-10 h-12 sm:w-12 sm:h-14 flex items-center justify-center rounded-lg text-projector-sm font-extrabold transition-colors ${digitStyle(i)}`}
              >
                {digit}
                {stage === STAGE_WALKING && i < walkIndex && (
                  <Check size={14} className="absolute -top-2 -right-2 text-emerald-600 bg-white rounded-full" />
                )}
              </span>
            ))}
          </div>
        </div>
      </div>

      {stage === STAGE_DIGIT_COUNT && sameLength && (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-projector-sm text-ink text-center max-w-xl"
        >
          Both numbers have {strA.length} digits, so we can't decide yet — let's compare place by place,
          starting from the highest place on the left.
        </motion.p>
      )}

      {stage === STAGE_WALKING && (
        <motion.p
          key={walkIndex}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-projector-sm text-ink text-center max-w-xl"
        >
          {comparison.reason === 'place' && walkIndex === comparison.diffIndex
            ? `The ${placeNameAt(walkIndex, strA.length)} place is different (${strA[walkIndex]} vs ${strB[walkIndex]}) — this decides the answer.`
            : `${placeNameAt(walkIndex, strA.length)} place: ${strA[walkIndex]} = ${strB[walkIndex]}, same — move to the next place.`}
        </motion.p>
      )}

      {stage >= STAGE_RESULT && (
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-projector-sm text-ink text-center max-w-xl"
        >
          {comparison.reason === 'digit-count' &&
            `${strA.length !== strB.length ? (strA.length > strB.length ? numberA : numberB) : ''} has more digits, so it is the greater number.`}
          {comparison.reason === 'place' &&
            `Both numbers have the same digit count. The first different digit is in the ${placeNameAt(comparison.diffIndex, strA.length)} place — that decides which number is greater.`}
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
