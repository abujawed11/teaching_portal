import { useState } from 'react'
import PlaceValueChart from './PlaceValueChart.jsx'

const MIN = 0
const MAX = 99999

function validate(value) {
  if (value.trim() === '') return 'Enter a number.'
  if (!/^\d+$/.test(value.trim())) return 'Whole numbers only, please.'
  const parsed = Number(value)
  if (parsed < MIN || parsed > MAX) return `Enter a number between ${MIN} and ${MAX}.`
  return null
}

function CustomNumberChart() {
  const [input, setInput] = useState('45672')
  const [number, setNumber] = useState(45672)
  const [error, setError] = useState(null)

  const handleSubmit = (e) => {
    e.preventDefault()
    const validationError = validate(input)
    if (validationError) {
      setError(validationError)
      return
    }
    setError(null)
    setNumber(Number(input))
  }

  return (
    <div className="flex flex-col items-center gap-6 w-full">
      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row items-center gap-3">
        <input
          type="text"
          inputMode="numeric"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          aria-label="Enter a number"
          placeholder="Enter a number"
          className="text-projector-sm text-center px-4 py-2 rounded-lg border-2 border-slate-300
            focus:outline-none focus:border-primary w-48"
        />
        <button
          type="submit"
          className="px-5 py-3 rounded-lg bg-primary text-white font-semibold hover:bg-primary-dark"
        >
          Show Chart
        </button>
      </form>

      {error && <p className="text-danger font-semibold">{error}</p>}

      <PlaceValueChart number={number} />
    </div>
  )
}

export default CustomNumberChart
