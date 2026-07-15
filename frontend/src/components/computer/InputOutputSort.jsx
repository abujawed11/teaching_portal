import { useState } from 'react'
import { RefreshCw, Check, X } from 'lucide-react'

const items = [
  {
    id: 'keyboard',
    label: 'Keyboard',
    type: 'input',
    image: '/images/computer/foundations/keyboard.jpg',
  },
  {
    id: 'microphone',
    label: 'Microphone',
    type: 'input',
    image: '/images/computer/foundations/microphone.jpg',
  },
  {
    id: 'scanner',
    label: 'Scanner',
    type: 'input',
    image: '/images/computer/foundations/scanner.jpg',
  },
  {
    id: 'monitor',
    label: 'Monitor',
    type: 'output',
    image: '/images/computer/foundations/monitor.jpg',
  },
  {
    id: 'speaker',
    label: 'Speaker',
    type: 'output',
    image: '/images/computer/foundations/speaker.jpg',
  },
  {
    id: 'printer',
    label: 'Printer',
    type: 'output',
    image: '/images/computer/foundations/printer.jpg',
  },
]

function InputOutputSort() {
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

  return (
    <div className="flex flex-col items-center gap-8 w-full">
      <div className="flex flex-col items-center gap-3">
        <img
          src={item.image}
          alt={item.label}
          className="w-56 h-56 object-cover rounded-2xl shadow-lg shadow-slate-300/50"
        />
        <p className="text-projector-sm font-bold text-ink">{item.label}</p>
      </div>

      {result && (
        <p
          className={`flex items-center gap-2 font-bold text-projector-sm ${
            result === 'correct' ? 'text-success' : 'text-danger'
          }`}
        >
          {result === 'correct' ? <Check size={22} /> : <X size={22} />}
          {result === 'correct' ? 'Correct!' : `Not quite — ${item.label} is an ${item.type} device.`}
        </p>
      )}

      <div className="flex items-center gap-4">
        {!result ? (
          <>
            <button
              onClick={() => choose('input')}
              className="px-6 py-3 rounded-lg bg-primary text-white font-semibold hover:bg-primary-dark"
            >
              Input
            </button>
            <button
              onClick={() => choose('output')}
              className="px-6 py-3 rounded-lg bg-accent text-white font-semibold hover:opacity-90"
            >
              Output
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

export default InputOutputSort
