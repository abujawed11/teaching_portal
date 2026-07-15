import { useState } from 'react'
import FractionCompareVisual from './FractionCompareVisual.jsx'
import { detectStrategy } from '../../utils/compareFractions.js'

const MAX_DENOMINATOR = 20

function validate(numRaw, denRaw, label) {
  if (numRaw.trim() === '' || denRaw.trim() === '') return `Enter both parts of ${label}.`
  if (!/^\d+$/.test(numRaw.trim()) || !/^\d+$/.test(denRaw.trim())) return 'Whole numbers only, please.'
  const numerator = Number(numRaw)
  const denominator = Number(denRaw)
  if (denominator < 1 || denominator > MAX_DENOMINATOR) return `Denominator must be between 1 and ${MAX_DENOMINATOR}.`
  if (numerator < 1) return 'Numerator must be at least 1.'
  return null
}

function CustomFractionCompare() {
  const [inputs, setInputs] = useState({ numA: '2', denA: '3', numB: '3', denB: '4' })
  const [fractions, setFractions] = useState({ numeratorA: 2, denominatorA: 3, numeratorB: 3, denominatorB: 4 })
  const [error, setError] = useState(null)
  const [key, setKey] = useState(0)

  const handleSubmit = (e) => {
    e.preventDefault()
    const errorA = validate(inputs.numA, inputs.denA, 'the first fraction')
    const errorB = validate(inputs.numB, inputs.denB, 'the second fraction')
    if (errorA || errorB) {
      setError(errorA ?? errorB)
      return
    }
    setError(null)
    setFractions({
      numeratorA: Number(inputs.numA),
      denominatorA: Number(inputs.denA),
      numeratorB: Number(inputs.numB),
      denominatorB: Number(inputs.denB),
    })
    setKey((k) => k + 1)
  }

  const strategy = detectStrategy(
    fractions.numeratorA,
    fractions.denominatorA,
    fractions.numeratorB,
    fractions.denominatorB,
  )

  return (
    <div className="flex flex-col items-center gap-6 w-full">
      <form onSubmit={handleSubmit} className="flex flex-col items-center gap-3">
        <div className="flex items-center gap-2">
          <input
            type="text"
            inputMode="numeric"
            value={inputs.numA}
            onChange={(e) => setInputs((s) => ({ ...s, numA: e.target.value }))}
            aria-label="First fraction numerator"
            className="text-projector-sm text-center px-3 py-2 rounded-lg border-2 border-slate-300 focus:outline-none focus:border-primary w-20"
          />
          <span>/</span>
          <input
            type="text"
            inputMode="numeric"
            value={inputs.denA}
            onChange={(e) => setInputs((s) => ({ ...s, denA: e.target.value }))}
            aria-label="First fraction denominator"
            className="text-projector-sm text-center px-3 py-2 rounded-lg border-2 border-slate-300 focus:outline-none focus:border-primary w-20"
          />
          <span className="mx-2 font-extrabold text-slate-400">vs</span>
          <input
            type="text"
            inputMode="numeric"
            value={inputs.numB}
            onChange={(e) => setInputs((s) => ({ ...s, numB: e.target.value }))}
            aria-label="Second fraction numerator"
            className="text-projector-sm text-center px-3 py-2 rounded-lg border-2 border-slate-300 focus:outline-none focus:border-primary w-20"
          />
          <span>/</span>
          <input
            type="text"
            inputMode="numeric"
            value={inputs.denB}
            onChange={(e) => setInputs((s) => ({ ...s, denB: e.target.value }))}
            aria-label="Second fraction denominator"
            className="text-projector-sm text-center px-3 py-2 rounded-lg border-2 border-slate-300 focus:outline-none focus:border-primary w-20"
          />
        </div>
        <button
          type="submit"
          className="px-5 py-3 rounded-lg bg-primary text-white font-semibold hover:bg-primary-dark"
        >
          Compare These Fractions
        </button>
      </form>

      {error && <p className="text-danger font-semibold">{error}</p>}

      <FractionCompareVisual
        key={key}
        numeratorA={fractions.numeratorA}
        denominatorA={fractions.denominatorA}
        numeratorB={fractions.numeratorB}
        denominatorB={fractions.denominatorB}
        strategy={strategy}
      />
    </div>
  )
}

export default CustomFractionCompare
