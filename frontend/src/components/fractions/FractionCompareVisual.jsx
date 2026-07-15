import { useState } from 'react'
import { motion } from 'framer-motion'
import { RefreshCw } from 'lucide-react'
import { compareFractions } from '../../utils/compareFractions.js'

function FractionBar({ numerator, denominator, revealed, label }) {
  const pct = (numerator / denominator) * 100
  return (
    <div className="flex flex-col items-center gap-2 w-full max-w-xs">
      <div className="w-full h-10 bg-slate-100 rounded-lg overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: revealed ? `${pct}%` : 0 }}
          transition={{ duration: 0.6 }}
          className="h-full bg-primary"
        />
      </div>
      <span className="text-projector-sm font-extrabold text-ink">{label}</span>
    </div>
  )
}

function reasoningFor(strategy, numeratorA, denominatorA, numeratorB, denominatorB, symbol) {
  const fracA = `${numeratorA}/${denominatorA}`
  const fracB = `${numeratorB}/${denominatorB}`

  switch (strategy) {
    case 'same-denominator':
      return `Both fractions have the same denominator (${denominatorA}), so just compare the numerators: ${numeratorA} ${symbol} ${numeratorB}. So ${fracA} ${symbol} ${fracB}.`
    case 'same-numerator': {
      const smallerDenom = denominatorA < denominatorB ? denominatorA : denominatorB
      return `Both fractions have the same numerator (${numeratorA}). Splitting a whole into ${smallerDenom} parts gives bigger pieces than splitting it into ${Math.max(denominatorA, denominatorB)} parts, so the fraction with the smaller denominator is greater. So ${fracA} ${symbol} ${fracB}.`
    }
    case 'reference-to-1': {
      const posA = numeratorA === denominatorA ? 'equal to' : numeratorA > denominatorA ? 'more than' : 'less than'
      const posB = numeratorB === denominatorB ? 'equal to' : numeratorB > denominatorB ? 'more than' : 'less than'
      return `${fracA} is ${posA} 1, and ${fracB} is ${posB} 1. So ${fracA} ${symbol} ${fracB}.`
    }
    case 'reference-to-half': {
      const posA = numeratorA * 2 === denominatorA ? 'equal to' : numeratorA * 2 > denominatorA ? 'more than' : 'less than'
      const posB = numeratorB * 2 === denominatorB ? 'equal to' : numeratorB * 2 > denominatorB ? 'more than' : 'less than'
      return `${fracA} is ${posA} half, and ${fracB} is ${posB} half. So ${fracA} ${symbol} ${fracB}.`
    }
    default:
      return `Cross-multiply: ${numeratorA} × ${denominatorB} vs ${numeratorB} × ${denominatorA}. So ${fracA} ${symbol} ${fracB}.`
  }
}

function FractionCompareVisual({ numeratorA, denominatorA, numeratorB, denominatorB, strategy = 'cross-multiply' }) {
  const [revealed, setRevealed] = useState(false)
  const symbol = compareFractions(numeratorA, denominatorA, numeratorB, denominatorB)

  const reveal = () => setRevealed(true)
  const reset = () => setRevealed(false)

  return (
    <div className="flex flex-col items-center gap-8 w-full">
      <div className="flex items-center gap-6 w-full max-w-2xl justify-center">
        <FractionBar numerator={numeratorA} denominator={denominatorA} revealed={revealed} label={`${numeratorA}/${denominatorA}`} />
        <span className="text-projector-lg font-extrabold text-primary">{revealed ? symbol : '?'}</span>
        <FractionBar numerator={numeratorB} denominator={denominatorB} revealed={revealed} label={`${numeratorB}/${denominatorB}`} />
      </div>

      {revealed && (
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-projector-sm text-ink text-center max-w-2xl"
        >
          {reasoningFor(strategy, numeratorA, denominatorA, numeratorB, denominatorB, symbol)}
        </motion.p>
      )}

      <div className="flex items-center gap-3">
        {!revealed && (
          <button
            onClick={reveal}
            className="px-5 py-3 rounded-lg bg-primary text-white font-semibold hover:bg-primary-dark"
          >
            Compare
          </button>
        )}
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

export default FractionCompareVisual
