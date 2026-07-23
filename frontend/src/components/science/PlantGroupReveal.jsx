import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { RefreshCw } from 'lucide-react'
import Button from '../common/Button.jsx'

const groups = [
  {
    id: 'tree',
    label: 'Tree',
    example: 'e.g. Mango',
    height: 'Tall',
    stem: 'Hard, thick, brown, woody',
    branching: 'Branches start higher up on the stem',
  },
  {
    id: 'shrub',
    label: 'Shrub',
    example: 'e.g. Rose',
    height: 'Medium',
    stem: 'Hard but thinner than a tree, brown, woody',
    branching: 'Many stems branch very close to the ground',
  },
  {
    id: 'herb',
    label: 'Herb',
    example: 'e.g. Tomato',
    height: 'Short',
    stem: 'Soft and green',
    branching: 'Small and tender overall',
  },
]

function PlantGroupReveal() {
  const [count, setCount] = useState(1)

  const next = () => setCount((c) => Math.min(c + 1, groups.length))
  const reset = () => setCount(1)

  return (
    <div className="flex flex-col items-center gap-6 w-full">
      <p className="text-projector-sm text-ink text-center max-w-xl">
        Plants can be grouped by height and the kind of stem they have.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full max-w-3xl">
        <AnimatePresence>
          {groups.slice(0, count).map((g) => (
            <motion.div
              key={g.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex flex-col gap-2 rounded-xl border-2 border-primary bg-primary/5 p-4 text-left"
            >
              <span className="font-bold text-primary text-projector-sm">{g.label}</span>
              <span className="text-xs text-slate-400">{g.example}</span>
              <div className="text-sm text-ink flex flex-col gap-1 mt-1">
                <span>
                  <span className="font-semibold">Height:</span> {g.height}
                </span>
                <span>
                  <span className="font-semibold">Stem:</span> {g.stem}
                </span>
                <span>
                  <span className="font-semibold">Branching:</span> {g.branching}
                </span>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {count < groups.length ? (
        <Button onClick={next}>Show Next Group</Button>
      ) : (
        <button
          onClick={reset}
          className="flex items-center gap-2 px-5 py-3 rounded-lg bg-slate-100 hover:bg-slate-200 font-semibold text-ink"
        >
          <RefreshCw size={20} /> Start Over
        </button>
      )}
    </div>
  )
}

export default PlantGroupReveal
