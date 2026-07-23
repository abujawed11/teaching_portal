import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight, RefreshCw, AlertTriangle } from 'lucide-react'
import Button from '../common/Button.jsx'

const chain = [
  { id: 'plant', label: 'Water Plant' },
  { id: 'small-fish', label: 'Small Fish' },
  { id: 'big-fish', label: 'Big Fish' },
  { id: 'heron', label: 'Pond Heron' },
]

function FoodChainBuilder() {
  const [built, setBuilt] = useState(1)
  const [fishRemoved, setFishRemoved] = useState(false)

  const isComplete = built === chain.length
  const next = () => setBuilt((b) => Math.min(b + 1, chain.length))
  const reset = () => {
    setBuilt(1)
    setFishRemoved(false)
  }

  return (
    <div className="flex flex-col items-center gap-6 w-full">
      <p className="text-projector-sm text-ink text-center max-w-xl">
        Who eats whom? Build the food chain one step at a time.
      </p>

      <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
        {chain.slice(0, built).map((link, i) => {
          const isRemoved = fishRemoved && link.id === 'small-fish'
          const isBroken = fishRemoved && link.id !== 'plant' && !isRemoved
          return (
            <div key={link.id} className="flex items-center gap-2 sm:gap-3">
              {i > 0 && (
                <ArrowRight
                  size={22}
                  className={fishRemoved && i >= 1 ? 'text-red-300' : 'text-slate-400'}
                />
              )}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className={`flex flex-col items-center gap-1 px-3 py-3 rounded-xl border-2 min-w-[7rem] text-center ${
                  isRemoved
                    ? 'border-red-300 bg-red-50'
                    : isBroken
                      ? 'border-slate-200 bg-slate-100 opacity-50'
                      : 'border-primary bg-primary/5'
                }`}
              >
                <span className="font-semibold text-ink text-sm sm:text-base">{link.label}</span>
                {isRemoved && (
                  <span className="flex items-center gap-1 text-xs text-red-600 font-bold">
                    <AlertTriangle size={14} /> Gone!
                  </span>
                )}
                {isBroken && !isRemoved && (
                  <span className="text-xs text-slate-400 font-semibold">No food!</span>
                )}
              </motion.div>
            </div>
          )
        })}
      </div>

      {!isComplete ? (
        <Button onClick={next}>
          {built === 1 ? 'What Eats the Water Plant?' : `Add the Next Link`}
        </Button>
      ) : !fishRemoved ? (
        <Button variant="danger" onClick={() => setFishRemoved(true)}>
          What If All the Small Fish Disappeared?
        </Button>
      ) : (
        <button
          onClick={reset}
          className="flex items-center gap-2 px-5 py-3 rounded-lg bg-slate-100 hover:bg-slate-200 font-semibold text-ink"
        >
          <RefreshCw size={20} /> Reset
        </button>
      )}

      <AnimatePresence>
        {fishRemoved && (
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-projector-sm text-ink text-center max-w-xl"
          >
            Without small fish, the big fish has nothing to eat — and without big fish, the pond
            heron goes hungry too. Every living thing in a pond depends on the others.
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  )
}

export default FoodChainBuilder
