import { useState } from 'react'
import { Globe, Calculator, Gamepad2, RefreshCw, Check, X } from 'lucide-react'

const items = [
  {
    id: 'keyboard',
    label: 'Keyboard',
    type: 'hardware',
    image: '/images/computer/foundations/keyboard.jpg',
  },
  {
    id: 'mouse',
    label: 'Mouse',
    type: 'hardware',
    image: '/images/computer/foundations/mouse.jpg',
  },
  {
    id: 'monitor',
    label: 'Monitor',
    type: 'hardware',
    image: '/images/computer/foundations/monitor.jpg',
  },
  { id: 'browser', label: 'Web Browser', type: 'software', icon: Globe },
  { id: 'calculator', label: 'Calculator App', type: 'software', icon: Calculator },
  { id: 'game', label: 'A Game App', type: 'software', icon: Gamepad2 },
]

function HardwareSoftwareSort() {
  const [index, setIndex] = useState(0)
  const [result, setResult] = useState(null)
  const [correctCount, setCorrectCount] = useState(0)

  const isDone = index >= items.length
  const item = items[index]

  const choose = (choice) => {
    if (result) return
    const isCorrect = choice === item.type
    setResult(isCorrect ? 'correct' : 'wrong')
    if (isCorrect) setCorrectCount((c) => c + 1)
  }

  const next = () => {
    setResult(null)
    setIndex((i) => i + 1)
  }

  const reset = () => {
    setIndex(0)
    setResult(null)
    setCorrectCount(0)
  }

  if (isDone) {
    return (
      <div className="flex flex-col items-center gap-6 text-center">
        <p className="text-projector-sm text-ink">
          You sorted {correctCount} of {items.length} correctly!
        </p>
        <button
          onClick={reset}
          className="flex items-center gap-2 px-5 py-3 rounded-lg bg-slate-100 hover:bg-slate-200 font-semibold text-ink"
        >
          <RefreshCw size={20} /> Try Again
        </button>
      </div>
    )
  }

  const Icon = item.icon

  return (
    <div className="flex flex-col items-center gap-8 w-full">
      <div className="flex flex-col items-center gap-3">
        {item.image ? (
          <img
            src={item.image}
            alt={item.label}
            className="w-56 h-56 object-cover rounded-2xl shadow-lg shadow-slate-300/50"
          />
        ) : (
          <div className="w-56 h-56 flex items-center justify-center rounded-2xl bg-slate-100">
            <Icon size={80} className="text-slate-500" />
          </div>
        )}
        <p className="text-projector-sm font-bold text-ink">{item.label}</p>
      </div>

      {result && (
        <p
          className={`flex items-center gap-2 font-bold text-projector-sm ${
            result === 'correct' ? 'text-success' : 'text-danger'
          }`}
        >
          {result === 'correct' ? <Check size={22} /> : <X size={22} />}
          {result === 'correct' ? 'Correct!' : `Not quite — ${item.label} is ${item.type}.`}
        </p>
      )}

      <div className="flex items-center gap-4">
        {!result ? (
          <>
            <button
              onClick={() => choose('hardware')}
              className="px-6 py-3 rounded-lg bg-primary text-white font-semibold hover:bg-primary-dark"
            >
              Hardware
            </button>
            <button
              onClick={() => choose('software')}
              className="px-6 py-3 rounded-lg bg-accent text-white font-semibold hover:opacity-90"
            >
              Software
            </button>
          </>
        ) : (
          <button
            onClick={next}
            className="px-6 py-3 rounded-lg bg-primary text-white font-semibold hover:bg-primary-dark"
          >
            Next Item
          </button>
        )}
      </div>

      <p className="text-sm text-slate-400">
        Item {index + 1} of {items.length}
      </p>
    </div>
  )
}

export default HardwareSoftwareSort
