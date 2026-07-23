import { useState } from 'react'
import { motion } from 'framer-motion'
import Button from '../common/Button.jsx'

function WaterProportionDemo() {
  const [revealed, setRevealed] = useState(false)

  return (
    <div className="flex flex-col items-center gap-8 w-full">
      <p className="text-projector-sm text-ink text-center max-w-xl">
        Imagine all the water on Earth filled this glass — oceans, rivers, ice, everything. How
        much of it would be freshwater — safe to drink and grow crops with?
      </p>

      <div className="flex items-end justify-center gap-10 sm:gap-16 min-h-[18rem]">
        <div className="flex flex-col items-center gap-3">
          <div className="w-28 sm:w-36 h-56 sm:h-72 rounded-b-2xl rounded-t-md border-4 border-slate-400 bg-sky-100 overflow-hidden flex items-end">
            <div className="w-full h-full bg-sky-500" />
          </div>
          <p className="text-base sm:text-lg font-bold text-ink">200 ml</p>
          <p className="text-sm text-slate-500 text-center">All the water on Earth</p>
        </div>

        <div className="flex flex-col items-center justify-end gap-3 h-56 sm:h-72">
          {!revealed ? (
            <div className="w-16 h-16 rounded-full border-4 border-dashed border-slate-300 flex items-center justify-center text-slate-400 text-3xl font-bold">
              ?
            </div>
          ) : (
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ type: 'spring', stiffness: 200, damping: 15 }}
              className="flex flex-col items-center gap-3"
            >
              <div className="w-24 h-5 rounded-full border-4 border-slate-400 bg-sky-500" />
              <p className="text-base sm:text-lg font-bold text-ink">5 ml</p>
              <p className="text-sm text-slate-500 text-center">
                Freshwater — just a teaspoon!
              </p>
            </motion.div>
          )}
        </div>
      </div>

      <Button onClick={() => setRevealed((v) => !v)}>
        {revealed ? 'Hide Freshwater Amount' : 'Reveal How Much is Freshwater'}
      </Button>

      {revealed && (
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-projector-sm text-ink text-center max-w-xl"
        >
          Out of the whole 200 ml glass, only about 5 ml — one teaspoon — is freshwater. Almost
          all of Earth's water is salty ocean water, which we cannot drink or use to grow crops.
        </motion.p>
      )}
    </div>
  )
}

export default WaterProportionDemo
