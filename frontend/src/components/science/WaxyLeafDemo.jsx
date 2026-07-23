import { useState } from 'react'
import { motion } from 'framer-motion'
import { RefreshCw } from 'lucide-react'
import Button from '../common/Button.jsx'

function WaxyLeafDemo() {
  const [dropped, setDropped] = useState(false)

  return (
    <div className="flex flex-col items-center gap-6 w-full">
      <p className="text-projector-sm text-ink text-center max-w-xl">
        What happens when a drop of water lands on plain paper — compared to paper coloured
        with a wax crayon?
      </p>

      <div className="flex gap-6 sm:gap-10">
        <div className="flex flex-col items-center gap-2">
          <div className="relative w-32 h-32 sm:w-36 sm:h-36 bg-amber-50 border-2 border-amber-200 rounded-lg overflow-hidden">
            {dropped && (
              <motion.div
                initial={{ scale: 0, opacity: 0.9 }}
                animate={{ scale: 2.6, opacity: 0.5 }}
                transition={{ duration: 0.8 }}
                className="absolute top-1/2 left-1/2 w-6 h-6 -translate-x-1/2 -translate-y-1/2 rounded-full bg-sky-400"
              />
            )}
          </div>
          <span className="text-sm sm:text-base font-semibold text-ink">Plain Paper</span>
        </div>

        <div className="flex flex-col items-center gap-2">
          <div className="relative w-32 h-32 sm:w-36 sm:h-36 bg-emerald-100 border-2 border-emerald-300 rounded-lg overflow-hidden">
            {dropped && (
              <motion.div
                initial={{ scale: 0, y: 0 }}
                animate={{ scale: 1, y: 0 }}
                transition={{ duration: 0.5, type: 'spring' }}
                className="absolute top-1/2 left-1/2 w-8 h-8 -translate-x-1/2 -translate-y-1/2 rounded-full bg-sky-400 border-2 border-sky-500 shadow-md"
              >
                <div className="absolute top-1 left-2 w-2 h-2 rounded-full bg-white/70" />
              </motion.div>
            )}
          </div>
          <span className="text-sm sm:text-base font-semibold text-ink">Wax-Crayon Paper</span>
        </div>
      </div>

      {!dropped ? (
        <Button onClick={() => setDropped(true)}>Add a Water Drop</Button>
      ) : (
        <button
          onClick={() => setDropped(false)}
          className="flex items-center gap-2 px-5 py-3 rounded-lg bg-slate-100 hover:bg-slate-200 font-semibold text-ink"
        >
          <RefreshCw size={20} /> Reset
        </button>
      )}

      {dropped && (
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-projector-sm text-ink text-center max-w-xl"
        >
          On plain paper, the water soaks in and spreads out. On the wax-crayon paper, the water
          stays as a neat round bead sitting on top — the wax stops it from soaking in. This is
          exactly why water beads up on a lotus leaf: a natural waxy coating keeps the leaf dry
          and healthy.
        </motion.p>
      )}
    </div>
  )
}

export default WaxyLeafDemo
