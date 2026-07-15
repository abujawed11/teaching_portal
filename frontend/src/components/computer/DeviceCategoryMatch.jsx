import { useState } from 'react'
import { RefreshCw, Check, X } from 'lucide-react'

const items = [
  { id: 'desktop', label: 'Desktop Computer', image: '/images/computer/foundations/desktop.jpg' },
  { id: 'laptop', label: 'Laptop', image: '/images/computer/foundations/laptop.jpg' },
  { id: 'tablet', label: 'Tablet', image: '/images/computer/foundations/tablet.jpg' },
  {
    id: 'smartphone',
    label: 'Smartphone',
    image: '/images/computer/foundations/smartphone-device.jpg',
  },
]

function DeviceCategoryMatch() {
  const [index, setIndex] = useState(0)
  const [result, setResult] = useState(null)
  const [correctCount, setCorrectCount] = useState(0)

  const isDone = index >= items.length
  const item = items[index]

  const choose = (choiceId) => {
    if (result) return
    const isCorrect = choiceId === item.id
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
          You matched {correctCount} of {items.length} correctly!
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

  return (
    <div className="flex flex-col items-center gap-8 w-full">
      <img
        src={item.image}
        alt="Identify this device"
        className="w-64 h-64 object-cover rounded-2xl shadow-lg shadow-slate-300/50"
      />

      {result && (
        <p
          className={`flex items-center gap-2 font-bold text-projector-sm ${
            result === 'correct' ? 'text-success' : 'text-danger'
          }`}
        >
          {result === 'correct' ? <Check size={22} /> : <X size={22} />}
          {result === 'correct' ? 'Correct!' : `Not quite — this is a ${item.label}.`}
        </p>
      )}

      {!result ? (
        <div className="grid grid-cols-2 gap-4 w-full max-w-md">
          {items.map((opt) => (
            <button
              key={opt.id}
              onClick={() => choose(opt.id)}
              className="px-4 py-3 rounded-lg border-2 border-slate-300 hover:border-primary font-semibold text-ink"
            >
              {opt.label}
            </button>
          ))}
        </div>
      ) : (
        <button
          onClick={next}
          className="px-6 py-3 rounded-lg bg-primary text-white font-semibold hover:bg-primary-dark"
        >
          Next Device
        </button>
      )}

      <p className="text-sm text-slate-400">
        Device {index + 1} of {items.length}
      </p>
    </div>
  )
}

export default DeviceCategoryMatch
