import { useState } from 'react'
import { motion } from 'framer-motion'
import { RefreshCw } from 'lucide-react'

const PLACE_LABELS = { 10: 'Tens', 100: 'Hundreds', 1000: 'Thousands' }

function roundInfo(number, place) {
  const lower = Math.floor(number / place) * place
  const upper = lower + place
  const distToLower = number - lower
  const distToUpper = upper - number
  const rounded = distToUpper <= distToLower ? upper : lower
  const nextDigit = Math.floor(number / (place / 10)) % 10
  return { lower, upper, distToLower, distToUpper, rounded, nextDigit }
}

function RoundingNumberLine({ number = 2346 }) {
  const [place, setPlace] = useState(null)
  const [stage, setStage] = useState(0)

  const choosePlace = (p) => {
    setPlace(p)
    setStage(1)
  }

  const nextStage = () => setStage((s) => Math.min(3, s + 1))
  const reset = () => {
    setPlace(null)
    setStage(0)
  }

  const info = place ? roundInfo(number, place) : null
  const pct = info ? (info.distToLower / place) * 100 : 0

  return (
    <div className="flex flex-col items-center gap-8 w-full">
      <p className="text-projector-md font-extrabold text-primary">{number.toLocaleString('en-IN')}</p>

      {!place && (
        <div className="flex items-center gap-4">
          {[10, 100, 1000].map((p) => (
            <button
              key={p}
              onClick={() => choosePlace(p)}
              className="px-5 py-3 rounded-lg bg-primary text-white font-semibold hover:bg-primary-dark"
            >
              Round to Nearest {p}
            </button>
          ))}
        </div>
      )}

      {place && info && (
        <>
          <div className="w-full max-w-xl flex flex-col gap-2">
            <div className="relative h-2 bg-slate-200 rounded-full mx-2">
              {[0, 50, 100].map((tickPct) => (
                <div
                  key={tickPct}
                  className="absolute top-1/2 -translate-y-1/2 w-1 h-4 bg-slate-400 rounded-full"
                  style={{ left: `${tickPct}%` }}
                />
              ))}
              <motion.div
                initial={{ left: '50%' }}
                animate={{ left: `${pct}%` }}
                transition={{ duration: 0.5 }}
                className="absolute -top-3 w-3 h-3 bg-primary rounded-full -translate-x-1/2"
              />
            </div>
            <div className="flex justify-between text-sm font-semibold text-slate-500">
              <span>{info.lower.toLocaleString('en-IN')}</span>
              <span>{(info.lower + place / 2).toLocaleString('en-IN')} (midpoint)</span>
              <span>{info.upper.toLocaleString('en-IN')}</span>
            </div>
          </div>

          {stage >= 2 && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center gap-8 text-projector-sm"
            >
              <span className={info.distToLower <= info.distToUpper ? 'font-extrabold text-primary' : 'text-slate-400'}>
                {info.distToLower} away from {info.lower.toLocaleString('en-IN')}
              </span>
              <span className={info.distToUpper < info.distToLower ? 'font-extrabold text-primary' : 'text-slate-400'}>
                {info.distToUpper} away from {info.upper.toLocaleString('en-IN')}
              </span>
            </motion.div>
          )}

          {stage >= 3 && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center space-y-2"
            >
              <p className="text-projector-sm text-ink">
                {number.toLocaleString('en-IN')} rounded to the nearest {PLACE_LABELS[place]} is{' '}
                <span className="font-extrabold text-primary">{info.rounded.toLocaleString('en-IN')}</span>
              </p>
              <p className="text-base text-slate-500 max-w-xl">
                Trick: look at the digit just to the right of the {PLACE_LABELS[place]} place — it's{' '}
                <span className="font-bold">{info.nextDigit}</span>. Since {info.nextDigit} is{' '}
                {info.nextDigit >= 5 ? 'more than or equal to 5, round up' : 'less than 5, round down'}.
              </p>
            </motion.div>
          )}
        </>
      )}

      <div className="flex items-center gap-3">
        {place && stage < 3 && (
          <button
            onClick={nextStage}
            className="px-5 py-3 rounded-lg bg-primary text-white font-semibold hover:bg-primary-dark"
          >
            {stage === 1 ? 'Compare Distances' : 'Round It'}
          </button>
        )}
        <button
          onClick={reset}
          aria-label="Reset rounding"
          className="flex items-center gap-2 px-5 py-3 rounded-lg bg-slate-100 hover:bg-slate-200 font-semibold text-ink"
        >
          <RefreshCw size={20} /> Reset
        </button>
      </div>
    </div>
  )
}

export default RoundingNumberLine
