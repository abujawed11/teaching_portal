import { useState } from 'react'
import { Check, X, RefreshCw } from 'lucide-react'
import VenationDiagram from './VenationDiagram.jsx'
import RootDiagram from './RootDiagram.jsx'

const plants = [
  { id: 'chickpea', label: 'Chickpea (Chana)', venation: 'reticulate', root: 'taproot' },
  { id: 'wheat', label: 'Wheat', venation: 'parallel', root: 'fibrous' },
  { id: 'mustard', label: 'Mustard', venation: 'reticulate', root: 'taproot' },
  { id: 'lemongrass', label: 'Lemongrass', venation: 'parallel', root: 'fibrous' },
]

const rootLabels = { taproot: 'Taproot', fibrous: 'Fibrous Roots' }

function LeafRootConnector() {
  const [index, setIndex] = useState(0)
  const [guess, setGuess] = useState(null)

  const isDone = index >= plants.length
  const plant = plants[index]

  const choose = (root) => {
    if (guess) return
    setGuess(root)
  }

  const next = () => {
    setGuess(null)
    setIndex((i) => i + 1)
  }

  const reset = () => {
    setIndex(0)
    setGuess(null)
  }

  if (isDone) {
    return (
      <div className="flex flex-col items-center gap-6 text-center max-w-xl">
        <p className="text-projector-sm font-bold text-primary">The Pattern!</p>
        <p className="text-projector-sm text-ink">
          Plants with <span className="font-bold">reticulate (net-like) venation</span> tend to
          have a <span className="font-bold">taproot</span>. Plants with{' '}
          <span className="font-bold">parallel venation</span> tend to have{' '}
          <span className="font-bold">fibrous roots</span>.
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

  const isCorrect = guess === plant.root

  return (
    <div className="flex flex-col items-center gap-6 w-full">
      <p className="text-projector-sm text-ink text-center max-w-xl">
        Look at this plant's leaf venation. Can you predict what kind of root it has?
      </p>

      <div className="flex flex-col items-center gap-2">
        <VenationDiagram type={plant.venation} />
        <p className="font-semibold text-ink">{plant.label}</p>
        <p className="text-sm text-slate-500 capitalize">{plant.venation} venation</p>
      </div>

      {!guess ? (
        <div className="flex gap-3">
          <button
            onClick={() => choose('taproot')}
            className="px-4 py-3 rounded-lg border-2 border-slate-300 hover:border-primary font-semibold text-ink"
          >
            Taproot
          </button>
          <button
            onClick={() => choose('fibrous')}
            className="px-4 py-3 rounded-lg border-2 border-slate-300 hover:border-primary font-semibold text-ink"
          >
            Fibrous Roots
          </button>
        </div>
      ) : (
        <div className="flex flex-col items-center gap-3">
          <p
            className={`flex items-center gap-2 font-bold text-projector-sm ${
              isCorrect ? 'text-success' : 'text-danger'
            }`}
          >
            {isCorrect ? <Check size={22} /> : <X size={22} />}
            {isCorrect ? 'Correct!' : `Not quite — it actually has ${rootLabels[plant.root]}.`}
          </p>
          <RootDiagram type={plant.root} />
          <button
            onClick={next}
            className="px-6 py-3 rounded-lg bg-primary text-white font-semibold hover:bg-primary-dark"
          >
            Next Plant
          </button>
        </div>
      )}

      <p className="text-sm text-slate-400">
        Plant {index + 1} of {plants.length}
      </p>
    </div>
  )
}

export default LeafRootConnector
