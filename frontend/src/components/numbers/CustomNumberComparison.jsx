import { useState } from 'react'
import NumberComparisonReveal from './NumberComparisonReveal.jsx'

const MIN = 0
const MAX = 999999999

function validate(value, label) {
  if (value.trim() === '') return `Enter ${label}.`
  if (!/^\d+$/.test(value.trim())) return `${label} must be a whole number.`
  const parsed = Number(value)
  if (parsed < MIN || parsed > MAX) return `${label} must be between ${MIN} and ${MAX}.`
  return null
}

function CustomNumberComparison() {
  const [inputA, setInputA] = useState('45672')
  const [inputB, setInputB] = useState('45267')
  const [pair, setPair] = useState({ a: 45672, b: 45267 })
  const [error, setError] = useState(null)
  const [key, setKey] = useState(0)

  const handleSubmit = (e) => {
    e.preventDefault()
    const errorA = validate(inputA, 'the first number')
    const errorB = validate(inputB, 'the second number')
    if (errorA || errorB) {
      setError(errorA ?? errorB)
      return
    }
    setError(null)
    setPair({ a: Number(inputA), b: Number(inputB) })
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
          value={inputA}
          onChange={(e) => setInputA(e.target.value)}
          aria-label="Enter the first number"
          placeholder="First number"
          className="text-projector-sm text-center px-4 py-2 rounded-lg border-2 border-slate-300
            focus:outline-none focus:border-primary w-48"
        />
        <span className="text-projector-sm font-extrabold text-slate-400">vs</span>
        <input
          type="text"
          inputMode="numeric"
          value={inputB}
          onChange={(e) => setInputB(e.target.value)}
          aria-label="Enter the second number"
          placeholder="Second number"
          className="text-projector-sm text-center px-4 py-2 rounded-lg border-2 border-slate-300
            focus:outline-none focus:border-primary w-48"
        />
        <button
          type="submit"
          className="px-5 py-3 rounded-lg bg-primary text-white font-semibold hover:bg-primary-dark"
        >
          Compare
        </button>
      </form>

      {error && <p className="text-danger font-semibold">{error}</p>}

      <NumberComparisonReveal key={key} numberA={pair.a} numberB={pair.b} />
    </div>
  )
}

export default CustomNumberComparison
