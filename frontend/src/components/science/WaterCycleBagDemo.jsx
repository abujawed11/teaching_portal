import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { RefreshCw } from 'lucide-react'
import Button from '../common/Button.jsx'

const STAGES = ['start', 'in-sunlight', 'vapour-rising', 'raining-inside']

const stageInfo = {
  start: {
    button: 'Place the Bag in Sunlight',
    observe: 'A sealed bag with a little coloured water at the bottom, and a sun, cloud and tree drawn on it.',
    wonder: null,
    because: null,
  },
  'in-sunlight': {
    button: 'Wait a Few Hours...',
    observe: 'The water at the bottom heats up.',
    wonder: 'How does the water heat up?',
    because: 'Sunlight',
  },
  'vapour-rising': {
    button: 'Keep Watching the Bag',
    observe: 'Water droplets form on the inside of the cover, near the top of the bag.',
    wonder: 'Where did those droplets come from — nobody poured more water in!',
    because: 'The heated water turned into invisible vapour, rose up, and cooled back into liquid droplets when it touched the cooler plastic near the top.',
  },
  'raining-inside': {
    button: null,
    observe: 'The droplets grow bigger and heavier, then slide back down — just like rain!',
    wonder: null,
    because: 'This is a tiny water cycle, happening right inside the bag.',
  },
}

function WaterCycleBagDemo() {
  const [stage, setStage] = useState(0)
  const stageId = STAGES[stage]
  const info = stageInfo[stageId]

  const next = () => setStage((s) => Math.min(s + 1, STAGES.length - 1))
  const reset = () => setStage(0)

  const showVapour = stage >= 1
  const showDroplets = stage >= 2
  const isRaining = stage === 3

  return (
    <div className="flex flex-col items-center gap-6 w-full">
      <p className="text-projector-sm text-ink text-center max-w-xl">
        A class activity: seal some coloured water inside a clear bag, draw a sun and clouds on
        it, and place it in the sunlight.
      </p>

      <div className="relative w-56 h-56 sm:w-64 sm:h-64">
        {/* Sun */}
        <motion.div
          animate={{ opacity: showVapour ? 1 : 0.5, scale: showVapour ? 1.1 : 1 }}
          className="absolute top-1 right-1 w-10 h-10 rounded-full bg-amber-300 border-2 border-amber-400"
        />

        {/* Bag outline */}
        <div className="absolute inset-x-4 top-8 bottom-2 rounded-2xl border-4 border-slate-400 bg-sky-50/60 overflow-hidden">
          {/* Droplets on the inside of the cover */}
          <AnimatePresence>
            {showDroplets && (
              <div className="absolute inset-x-0 top-2 flex justify-center gap-3">
                {[0, 1, 2, 3].map((i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: -4 }}
                    animate={
                      isRaining
                        ? { opacity: [1, 1, 0], y: [0, 30, 70] }
                        : { opacity: 1, y: 0 }
                    }
                    transition={
                      isRaining
                        ? { duration: 1.2, delay: i * 0.15, repeat: Infinity, repeatDelay: 0.8 }
                        : { delay: i * 0.1 }
                    }
                    className="w-2 h-2 rounded-full bg-sky-500"
                  />
                ))}
              </div>
            )}
          </AnimatePresence>

          {/* Rising vapour arrows */}
          <AnimatePresence>
            {showVapour && !showDroplets && (
              <div className="absolute inset-x-0 bottom-10 flex justify-center gap-4">
                {[0, 1, 2].map((i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 0 }}
                    animate={{ opacity: [0, 1, 0], y: -30 }}
                    transition={{ duration: 1.4, repeat: Infinity, delay: i * 0.3 }}
                    className="text-sky-500 font-bold text-lg"
                  >
                    ↑
                  </motion.div>
                ))}
              </div>
            )}
          </AnimatePresence>

          {/* Water at the bottom */}
          <div className="absolute inset-x-0 bottom-0 h-10 bg-sky-400/70" />
        </div>
      </div>

      <div className="flex flex-col items-center gap-2 max-w-xl text-center">
        <p className="text-projector-sm font-semibold text-ink">
          <span className="text-primary">I Observe:</span> {info.observe}
        </p>
        {info.wonder && (
          <p className="text-base text-slate-500">
            <span className="font-semibold">I Wonder:</span> {info.wonder}
          </p>
        )}
        {info.because && (
          <p className="text-base text-success font-semibold">
            It is because of: {info.because}
          </p>
        )}
      </div>

      {info.button ? (
        <Button onClick={next}>{info.button}</Button>
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

export default WaterCycleBagDemo
