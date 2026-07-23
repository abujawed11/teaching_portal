import { useState } from 'react'
import { RefreshCw, Check, X } from 'lucide-react'

const items = [
  {
    id: 'mango',
    label: 'Mango',
    image: '/images/science/diversity-in-living-world/mango.jpg',
    clue: 'Tall, with a hard brown stem. Branches start high up.',
    group: 'tree',
  },
  {
    id: 'rose',
    label: 'Rose',
    image: '/images/science/diversity-in-living-world/rose.jpg',
    clue: 'Medium height, several woody stems branching close to the ground.',
    group: 'shrub',
  },
  {
    id: 'tomato',
    label: 'Tomato',
    image: '/images/science/diversity-in-living-world/tomato.jpg',
    clue: 'Short, with a soft green stem.',
    group: 'herb',
  },
  {
    id: 'neem',
    label: 'Neem',
    image: '/images/science/diversity-in-living-world/neem.jpg',
    clue: 'Tall, with a hard, thick brown stem.',
    group: 'tree',
  },
  {
    id: 'hibiscus',
    label: 'Hibiscus',
    image: '/images/science/diversity-in-living-world/hibiscus.jpg',
    clue: 'Medium height, hard woody stem branching near the ground.',
    group: 'shrub',
  },
  {
    id: 'tulsi',
    label: 'Tulsi',
    image: '/images/science/diversity-in-living-world/tulsi.jpg',
    clue: 'Short, with a soft, tender stem.',
    group: 'herb',
  },
]

const groupLabels = { tree: 'Tree', shrub: 'Shrub', herb: 'Herb' }

function PlantGroupSorter() {
  const [index, setIndex] = useState(0)
  const [result, setResult] = useState(null)
  const [correctCount, setCorrectCount] = useState(0)

  const isDone = index >= items.length
  const item = items[index]

  const choose = (group) => {
    if (result) return
    const isCorrect = group === item.group
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
          You classified {correctCount} of {items.length} plants correctly!
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
    <div className="flex flex-col items-center gap-6 w-full">
      <img
        src={item.image}
        alt={item.label}
        className="w-48 h-40 object-cover rounded-2xl shadow-lg shadow-slate-300/50 bg-white"
      />
      <div className="text-center">
        <p className="font-semibold text-ink text-projector-sm">{item.label}</p>
        <p className="text-sm sm:text-base text-slate-500">{item.clue}</p>
      </div>

      {result && (
        <p
          className={`flex items-center gap-2 font-bold text-projector-sm ${
            result === 'correct' ? 'text-success' : 'text-danger'
          }`}
        >
          {result === 'correct' ? <Check size={22} /> : <X size={22} />}
          {result === 'correct'
            ? 'Correct!'
            : `Not quite — ${item.label} is a ${groupLabels[item.group]}.`}
        </p>
      )}

      {!result ? (
        <div className="grid grid-cols-3 gap-3 w-full max-w-md">
          {Object.entries(groupLabels).map(([id, label]) => (
            <button
              key={id}
              onClick={() => choose(id)}
              className="px-4 py-3 rounded-lg border-2 border-slate-300 hover:border-primary font-semibold text-ink"
            >
              {label}
            </button>
          ))}
        </div>
      ) : (
        <button
          onClick={next}
          className="px-6 py-3 rounded-lg bg-primary text-white font-semibold hover:bg-primary-dark"
        >
          Next Plant
        </button>
      )}

      <p className="text-sm text-slate-400">
        Plant {index + 1} of {items.length}
      </p>
    </div>
  )
}

export default PlantGroupSorter
