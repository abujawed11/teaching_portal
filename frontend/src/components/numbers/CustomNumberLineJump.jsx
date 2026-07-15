import { useState } from 'react'
import NumberLineJump from './NumberLineJump.jsx'

const MAX_START = 100
const MAX_AMOUNT = 20

function validate(startRaw, amountRaw, operation) {
  if (startRaw.trim() === '' || amountRaw.trim() === '') return 'Enter both a start number and a number of steps.'
  if (!/^\d+$/.test(startRaw.trim()) || !/^\d+$/.test(amountRaw.trim())) return 'Whole numbers only, please.'

  const start = Number(startRaw)
  const amount = Number(amountRaw)

  if (start < 0 || start > MAX_START) return `Start number must be between 0 and ${MAX_START}.`
  if (amount < 1 || amount > MAX_AMOUNT) return `Number of steps must be between 1 and ${MAX_AMOUNT}.`
  if (operation === 'subtract' && start - amount < 0) return 'That would go below zero — try a smaller number of steps.'

  return null
}

function CustomNumberLineJump() {
  const [startInput, setStartInput] = useState('5')
  const [amountInput, setAmountInput] = useState('4')
  const [operation, setOperation] = useState('add')
  const [config, setConfig] = useState({ start: 5, amount: 4, operation: 'add' })
  const [error, setError] = useState(null)
  const [key, setKey] = useState(0)

  const handleSubmit = (e) => {
    e.preventDefault()
    const validationError = validate(startInput, amountInput, operation)
    if (validationError) {
      setError(validationError)
      return
    }
    setError(null)
    setConfig({ start: Number(startInput), amount: Number(amountInput), operation })
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
          value={startInput}
          onChange={(e) => setStartInput(e.target.value)}
          aria-label="Enter the start number"
          placeholder="Start number"
          className="text-projector-sm text-center px-4 py-2 rounded-lg border-2 border-slate-300
            focus:outline-none focus:border-primary w-36"
        />
        <select
          value={operation}
          onChange={(e) => setOperation(e.target.value)}
          aria-label="Choose add or subtract"
          className="text-projector-sm px-4 py-2 rounded-lg border-2 border-slate-300 focus:outline-none focus:border-primary"
        >
          <option value="add">Add (move forward)</option>
          <option value="subtract">Subtract (move backward)</option>
        </select>
        <input
          type="text"
          inputMode="numeric"
          value={amountInput}
          onChange={(e) => setAmountInput(e.target.value)}
          aria-label="Enter the number of steps"
          placeholder="Steps"
          className="text-projector-sm text-center px-4 py-2 rounded-lg border-2 border-slate-300
            focus:outline-none focus:border-primary w-28"
        />
        <button
          type="submit"
          className="px-5 py-3 rounded-lg bg-primary text-white font-semibold hover:bg-primary-dark"
        >
          Show on Number Line
        </button>
      </form>

      {error && <p className="text-danger font-semibold">{error}</p>}

      <NumberLineJump key={key} start={config.start} amount={config.amount} operation={config.operation} />
    </div>
  )
}

export default CustomNumberLineJump
