import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { RefreshCw } from 'lucide-react'
import Button from '../common/Button.jsx'

const STAGES = ['dry', 'soaked', 'drawn']

const stageText = {
  dry: 'Dry soil, with a well dug down into the ground. No water has fallen yet.',
  soaked:
    'Rain falls and slowly soaks through the soil and rock layers. It settles deep underground — this stored water is called groundwater.',
  drawn:
    'Wells, borewells, tube wells and handpumps are dug down to reach the groundwater, so it can be drawn back up for us to use.',
}

function GroundwaterSoakDemo() {
  const [stage, setStage] = useState(0)
  const stageId = STAGES[stage]

  const next = () => setStage((s) => Math.min(s + 1, STAGES.length - 1))
  const reset = () => setStage(0)

  const isSoaked = stageId === 'soaked' || stageId === 'drawn'
  const isDrawn = stageId === 'drawn'

  return (
    <div className="flex flex-col items-center gap-6 w-full">
      <p className="text-projector-sm text-ink text-center max-w-xl">
        What happens to rain after it falls onto the ground?
      </p>

      <div className="relative w-64 h-60">
        {/* Raindrop falling, stage 0 -> 1 */}
        <AnimatePresence>
          {stageId === 'dry' && (
            <motion.div
              initial={{ opacity: 0.6, y: -10 }}
              animate={{ opacity: [0.6, 1, 0], y: 40 }}
              transition={{ duration: 1.2, repeat: Infinity }}
              className="absolute left-10 top-0 text-sky-500 text-xl"
            >
              💧
            </motion.div>
          )}
        </AnimatePresence>

        {/* Soil layer */}
        <div className="absolute inset-x-0 top-0 h-16 bg-amber-800/70 rounded-t-lg" />
        {/* Rock/sand layer */}
        <div className="absolute inset-x-0 top-16 h-16 bg-amber-400/60" />
        {/* Water table / groundwater layer */}
        <motion.div
          animate={{ backgroundColor: isSoaked ? '#38bdf8' : '#e2e8f0' }}
          transition={{ duration: 0.6 }}
          className="absolute inset-x-0 top-32 bottom-0 rounded-b-lg"
        />

        {/* Well shaft */}
        <div className="absolute right-8 top-0 bottom-0 w-8 border-x-4 border-slate-500 bg-slate-100/40" />

        {/* Water rising in the well when drawn */}
        <AnimatePresence>
          {isDrawn && (
            <motion.div
              initial={{ opacity: 0, y: 0 }}
              animate={{ opacity: [0, 1, 0], y: -120 }}
              transition={{ duration: 1.4, repeat: Infinity }}
              className="absolute right-9 bottom-8 text-sky-600 font-bold text-lg"
            >
              ↑
            </motion.div>
          )}
        </AnimatePresence>

        {/* Handpump icon at the top of the well */}
        <div className="absolute right-6 -top-2 text-2xl">🚰</div>
      </div>

      <motion.p
        key={stageId}
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-projector-sm text-ink text-center max-w-xl"
      >
        {stageText[stageId]}
      </motion.p>

      {stage < STAGES.length - 1 ? (
        <Button onClick={next}>
          {stageId === 'dry' ? 'Let it Rain' : 'Draw Water Up with a Well'}
        </Button>
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

export default GroundwaterSoakDemo
