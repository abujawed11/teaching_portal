import { useState } from 'react'
import { motion } from 'framer-motion'
import { RefreshCw } from 'lucide-react'

function FractionVisual({ denominator = 4 }) {
  const [shaded, setShaded] = useState(() => Array(denominator).fill(false))

  const toggle = (i) => setShaded((s) => s.map((v, idx) => (idx === i ? !v : v)))
  const reset = () => setShaded(Array(denominator).fill(false))

  const numerator = shaded.filter(Boolean).length

  return (
    <div className="flex flex-col items-center gap-8 w-full">
      <p className="text-projector-sm text-ink text-center">Click the parts to shade them</p>

      <div className="flex gap-1 w-full max-w-xl">
        {shaded.map((isShaded, i) => (
          <motion.button
            key={i}
            onClick={() => toggle(i)}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className={`flex-1 h-16 sm:h-20 rounded-md border-2 transition-colors
              ${isShaded ? 'bg-primary border-primary' : 'bg-slate-50 border-slate-300 hover:border-primary'}`}
            aria-label={`Part ${i + 1} of ${denominator}, ${isShaded ? 'shaded' : 'not shaded'}`}
          />
        ))}
      </div>

      <div className="flex flex-col items-center">
        <span className="text-projector-lg font-extrabold text-primary">{numerator}</span>
        <div className="w-12 h-1 bg-primary rounded-full my-1" />
        <span className="text-projector-lg font-extrabold text-primary">{denominator}</span>
      </div>

      <motion.p
        key={numerator}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-projector-sm text-ink text-center max-w-xl"
      >
        {numerator === 0
          ? `The whole is divided into ${denominator} equal parts. Click some parts to shade them.`
          : `${numerator} out of ${denominator} equal parts are shaded. We write this as the fraction ${numerator}/${denominator}. The bottom number (denominator) is the total equal parts; the top number (numerator) is how many are shaded.`}
      </motion.p>

      <button
        onClick={reset}
        aria-label="Reset shading"
        className="flex items-center gap-2 px-5 py-3 rounded-lg bg-slate-100 hover:bg-slate-200 font-semibold text-ink"
      >
        <RefreshCw size={20} /> Reset
      </button>
    </div>
  )
}

export default FractionVisual
