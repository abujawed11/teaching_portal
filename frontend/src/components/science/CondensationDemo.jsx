import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { RefreshCw } from 'lucide-react'
import Button from '../common/Button.jsx'

const STAGES = ['empty', 'ice-added', 'after-waiting']

const dropletPositions = [
  { top: '20%', left: '10%' },
  { top: '40%', left: '75%' },
  { top: '55%', left: '20%' },
  { top: '30%', left: '55%' },
  { top: '65%', left: '65%' },
]

function CondensationDemo() {
  const [stage, setStage] = useState(0)
  const stageId = STAGES[stage]

  const next = () => setStage((s) => Math.min(s + 1, STAGES.length - 1))
  const reset = () => setStage(0)

  return (
    <div className="flex flex-col items-center gap-8 w-full">
      <p className="text-projector-sm text-ink text-center max-w-xl">
        Take a steel glass and put some ice cubes in it. What happens?
      </p>

      <div className="relative w-40 h-44">
        <div className="absolute inset-x-0 bottom-0 w-40 h-40 rounded-b-2xl rounded-t-md border-4 border-slate-400 bg-slate-100 overflow-hidden flex items-end justify-center">
          {stageId !== 'empty' && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex flex-wrap gap-1 justify-center p-3"
            >
              {[0, 1, 2].map((i) => (
                <div
                  key={i}
                  className={`w-8 h-8 rounded-md border-2 border-sky-300 ${
                    stageId === 'after-waiting' ? 'bg-sky-100 opacity-60' : 'bg-sky-50'
                  }`}
                />
              ))}
            </motion.div>
          )}
        </div>

        <AnimatePresence>
          {stageId === 'after-waiting' &&
            dropletPositions.map((pos, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.1 }}
                className="absolute w-2.5 h-2.5 rounded-full bg-sky-400"
                style={pos}
              />
            ))}
        </AnimatePresence>
      </div>

      {stage < STAGES.length - 1 ? (
        <Button onClick={next}>
          {stageId === 'empty' ? 'Add Ice Cubes' : 'Wait a Few Minutes'}
        </Button>
      ) : (
        <button
          onClick={reset}
          className="flex items-center gap-2 px-5 py-3 rounded-lg bg-slate-100 hover:bg-slate-200 font-semibold text-ink"
        >
          <RefreshCw size={20} /> Reset
        </button>
      )}

      <motion.p
        key={stageId}
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-projector-sm text-ink text-center max-w-xl"
      >
        {stageId === 'empty' && 'An empty steel glass, at room temperature.'}
        {stageId === 'ice-added' &&
          'Ice cubes are inside the glass now, making it very cold. Nothing has happened on the outside — yet.'}
        {stageId === 'after-waiting' &&
          "Tiny water droplets have formed on the OUTSIDE of the glass, and the ice cubes are melting into water inside. The droplets aren't from the ice — they're from water vapour in the air outside cooling against the cold glass and turning back into liquid. This is called condensation."}
      </motion.p>
    </div>
  )
}

export default CondensationDemo
