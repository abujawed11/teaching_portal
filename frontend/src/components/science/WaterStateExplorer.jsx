import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Button from '../common/Button.jsx'

const states = [
  {
    id: 'solid',
    label: 'Solid (Ice)',
    color: 'bg-sky-100 border-sky-300',
    description: 'Water as ice — solid, keeps its own shape, feels cold and hard.',
  },
  {
    id: 'liquid',
    label: 'Liquid (Water)',
    color: 'bg-sky-300 border-sky-500',
    description: 'Water as a liquid — flows and takes the shape of whatever holds it.',
  },
  {
    id: 'vapour',
    label: 'Vapour (Steam)',
    color: 'bg-sky-50 border-sky-200',
    description: 'Water as vapour — an invisible gas that rises up into the air.',
  },
]

const transitionText = {
  'solid-liquid': 'Melting — heat turns solid ice into liquid water.',
  'liquid-vapour': 'Boiling / Evaporating — heat turns liquid water into vapour.',
  'liquid-solid': 'Freezing — cooling turns liquid water into solid ice.',
  'vapour-liquid': 'Condensing — cooling turns vapour back into liquid water.',
}

function WaterStateExplorer() {
  const [index, setIndex] = useState(1)
  const [lastTransition, setLastTransition] = useState(null)
  const current = states[index]

  const heat = () => {
    if (index >= states.length - 1) return
    setLastTransition(`${states[index].id}-${states[index + 1].id}`)
    setIndex((i) => i + 1)
  }

  const cool = () => {
    if (index <= 0) return
    setLastTransition(`${states[index].id}-${states[index - 1].id}`)
    setIndex((i) => i - 1)
  }

  return (
    <div className="flex flex-col items-center gap-8 w-full">
      <p className="text-projector-sm text-ink text-center max-w-xl">
        Water can change between three forms. Click Heat or Cool to see it change — and change
        back!
      </p>

      <div className="flex items-center gap-6 sm:gap-10">
        <Button variant="secondary" onClick={cool} disabled={index === 0}>
          Cool
        </Button>

        <AnimatePresence mode="wait">
          <motion.div
            key={current.id}
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.85 }}
            transition={{ duration: 0.3 }}
            className={`w-36 h-36 sm:w-44 sm:h-44 rounded-2xl border-4 flex items-center justify-center text-center px-3 text-projector-sm font-bold text-ink ${current.color}`}
          >
            {current.label}
          </motion.div>
        </AnimatePresence>

        <Button variant="secondary" onClick={heat} disabled={index === states.length - 1}>
          Heat
        </Button>
      </div>

      <motion.p
        key={current.id + (lastTransition ?? '')}
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-projector-sm text-ink text-center max-w-xl"
      >
        {lastTransition && transitionText[lastTransition]
          ? transitionText[lastTransition]
          : current.description}
      </motion.p>
    </div>
  )
}

export default WaterStateExplorer
