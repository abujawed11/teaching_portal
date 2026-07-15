import { useState } from 'react'
import NumberOrderReveal from './NumberOrderReveal.jsx'

const MIN = 0
const MAX = 999999999
const MIN_COUNT = 2
const MAX_COUNT = 6

function parseAndValidate(raw) {
  const parts = raw
    .split(',')
    .map((p) => p.trim())
    .filter((p) => p !== '')

  if (parts.length < MIN_COUNT) return { error: `Enter at least ${MIN_COUNT} numbers, separated by commas.` }
  if (parts.length > MAX_COUNT) return { error: `Enter at most ${MAX_COUNT} numbers.` }

  const numbers = []
  for (const part of parts) {
    if (!/^\d+$/.test(part)) return { error: `"${part}" is not a whole number.` }
    const value = Number(part)
    if (value < MIN || value > MAX) return { error: `${part} must be between ${MIN} and ${MAX}.` }
    numbers.push(value)
  }

  if (new Set(numbers).size !== numbers.length) {
    return { error: 'Please enter different numbers (no repeats).' }
  }

  return { numbers }
}

function CustomNumberOrder() {
  const [input, setInput] = useState('45210, 9876, 51000, 6321, 45102')
  const [numbers, setNumbers] = useState([45210, 9876, 51000, 6321, 45102])
  const [error, setError] = useState(null)
  const [key, setKey] = useState(0)

  const handleSubmit = (e) => {
    e.preventDefault()
    const result = parseAndValidate(input)
    if (result.error) {
      setError(result.error)
      return
    }
    setError(null)
    setNumbers(result.numbers)
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
          value={input}
          onChange={(e) => setInput(e.target.value)}
          aria-label="Enter numbers separated by commas"
          placeholder="e.g. 4521, 987, 15000"
          className="text-projector-sm text-center px-4 py-2 rounded-lg border-2 border-slate-300
            focus:outline-none focus:border-primary w-80"
        />
        <button
          type="submit"
          className="px-5 py-3 rounded-lg bg-primary text-white font-semibold hover:bg-primary-dark"
        >
          Use These Numbers
        </button>
      </form>

      {error && <p className="text-danger font-semibold">{error}</p>}

      <NumberOrderReveal key={key} numbers={numbers} />
    </div>
  )
}

export default CustomNumberOrder
