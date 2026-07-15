import { useState } from 'react'
import FractionVisual from './FractionVisual.jsx'

const MIN = 2
const MAX = 12

function validate(value) {
  if (value.trim() === '') return 'Enter a number of parts.'
  if (!/^\d+$/.test(value.trim())) return 'Whole numbers only, please.'
  const parsed = Number(value)
  if (parsed < MIN || parsed > MAX) return `Enter a number of parts between ${MIN} and ${MAX}.`
  return null
}

function CustomFractionVisual() {
  const [input, setInput] = useState('4')
  const [denominator, setDenominator] = useState(4)
  const [error, setError] = useState(null)
  const [key, setKey] = useState(0)

  const handleSubmit = (e) => {
    e.preventDefault()
    const validationError = validate(input)
    if (validationError) {
      setError(validationError)
      return
    }
    setError(null)
    setDenominator(Number(input))
    setKey((k) => k + 1)
  }

  return (
    <div className="flex flex-col items-center gap-6 w-full">
      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row items-center gap-3">
        <input
          type="text"
          inputMode="numeric"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          aria-label="Enter the number of equal parts"
          placeholder="Number of parts"
          className="text-projector-sm text-center px-4 py-2 rounded-lg border-2 border-slate-300
            focus:outline-none focus:border-primary w-48"
        />
        <button
          type="submit"
          className="px-5 py-3 rounded-lg bg-primary text-white font-semibold hover:bg-primary-dark"
        >
          Divide the Whole
        </button>
      </form>

      {error && <p className="text-danger font-semibold">{error}</p>}

      <FractionVisual key={key} denominator={denominator} />
    </div>
  )
}

export default CustomFractionVisual
