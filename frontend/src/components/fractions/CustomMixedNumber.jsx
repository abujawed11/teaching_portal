import { useState } from 'react'
import MixedNumberReveal from './MixedNumberReveal.jsx'
import MixedNumberLine from './MixedNumberLine.jsx'

const MAX_DENOMINATOR = 6
const MAX_NUMERATOR = 24

function validate(numRaw, denRaw) {
  if (numRaw.trim() === '' || denRaw.trim() === '') return 'Enter both a numerator and a denominator.'
  if (!/^\d+$/.test(numRaw.trim()) || !/^\d+$/.test(denRaw.trim())) return 'Whole numbers only, please.'

  const numerator = Number(numRaw)
  const denominator = Number(denRaw)

  if (denominator < 2 || denominator > MAX_DENOMINATOR) return `Denominator must be between 2 and ${MAX_DENOMINATOR}.`
  if (numerator <= denominator || numerator > MAX_NUMERATOR) return `Numerator must be more than the denominator and at most ${MAX_NUMERATOR}.`

  return null
}

function CustomMixedNumber() {
  const [numInput, setNumInput] = useState('7')
  const [denInput, setDenInput] = useState('2')
  const [fraction, setFraction] = useState({ numerator: 7, denominator: 2 })
  const [error, setError] = useState(null)
  const [key, setKey] = useState(0)

  const handleSubmit = (e) => {
    e.preventDefault()
    const validationError = validate(numInput, denInput)
    if (validationError) {
      setError(validationError)
      return
    }
    setError(null)
    setFraction({ numerator: Number(numInput), denominator: Number(denInput) })
    setKey((k) => k + 1)
  }

  return (
    <div className="flex flex-col items-center gap-6 w-full">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col sm:flex-row items-center gap-3 flex-wrap justify-center"
      >
        <input
          type="text"
          inputMode="numeric"
          value={numInput}
          onChange={(e) => setNumInput(e.target.value)}
          aria-label="Enter the numerator"
          placeholder="Numerator"
          className="text-projector-sm text-center px-4 py-2 rounded-lg border-2 border-slate-300
            focus:outline-none focus:border-primary w-32"
        />
        <span className="text-projector-sm font-extrabold text-slate-400">/</span>
        <input
          type="text"
          inputMode="numeric"
          value={denInput}
          onChange={(e) => setDenInput(e.target.value)}
          aria-label="Enter the denominator"
          placeholder="Denominator"
          className="text-projector-sm text-center px-4 py-2 rounded-lg border-2 border-slate-300
            focus:outline-none focus:border-primary w-32"
        />
        <button
          type="submit"
          className="px-5 py-3 rounded-lg bg-primary text-white font-semibold hover:bg-primary-dark"
        >
          Show This Fraction
        </button>
      </form>

      {error && <p className="text-danger font-semibold">{error}</p>}

      <MixedNumberReveal key={`reveal-${key}`} numerator={fraction.numerator} denominator={fraction.denominator} />
      <MixedNumberLine key={`line-${key}`} numerator={fraction.numerator} denominator={fraction.denominator} />
    </div>
  )
}

export default CustomMixedNumber
