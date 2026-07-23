import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { RefreshCw } from 'lucide-react'
import Button from '../common/Button.jsx'

const rows = [
  {
    topic: 'Breathing',
    land: 'Breathe air using lungs',
    water: 'Take in oxygen from water using gills',
  },
  {
    topic: 'Moving Around',
    land: 'Walk or run using legs',
    water: 'Swim using fins, or paddle with webbed feet',
  },
  {
    topic: 'Body Covering',
    land: 'Often have fur or feathers to stay warm',
    water: 'Often have smooth skin or scales to glide through water easily',
  },
]

function TraitRevealTable() {
  const [count, setCount] = useState(0)

  const next = () => setCount((c) => Math.min(c + 1, rows.length))
  const reset = () => setCount(0)

  return (
    <div className="flex flex-col items-center gap-6 w-full">
      <p className="text-projector-sm text-ink text-center max-w-xl">
        How are animals that live in water different from animals that live on land?
      </p>

      <div className="w-full max-w-2xl overflow-hidden rounded-xl border-2 border-slate-200">
        <div className="grid grid-cols-2 bg-slate-100 font-bold text-ink text-sm sm:text-base">
          <div className="px-3 py-2 border-r-2 border-slate-200">On Land</div>
          <div className="px-3 py-2">In Water</div>
        </div>
        <AnimatePresence>
          {rows.slice(0, count).map((row) => (
            <motion.div
              key={row.topic}
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              className="grid grid-cols-2 border-t-2 border-slate-100 text-sm sm:text-base"
            >
              <div className="px-3 py-3 border-r-2 border-slate-100 text-ink">{row.land}</div>
              <div className="px-3 py-3 text-ink">{row.water}</div>
            </motion.div>
          ))}
        </AnimatePresence>
        {count > 0 && (
          <div className="px-3 py-1.5 bg-slate-50 text-xs text-slate-400 text-center">
            {rows[count - 1].topic}
          </div>
        )}
      </div>

      {count < rows.length ? (
        <Button onClick={next}>Reveal Next Trait</Button>
      ) : (
        <button
          onClick={reset}
          className="flex items-center gap-2 px-5 py-3 rounded-lg bg-slate-100 hover:bg-slate-200 font-semibold text-ink"
        >
          <RefreshCw size={20} /> Reset
        </button>
      )}
    </div>
  )
}

export default TraitRevealTable
