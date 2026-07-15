import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { RefreshCw } from 'lucide-react'

function PieceGroup({ denominator, filled, isWhole }) {
  const segments = Array.from({ length: denominator }, (_, i) => i)
  return (
    <div className={`flex gap-0.5 p-1 rounded-md ${isWhole ? 'bg-primary/10' : ''}`}>
      {segments.map((i) => (
        <div
          key={i}
          className={`w-4 h-10 sm:w-5 sm:h-12 rounded-sm ${i < filled ? 'bg-primary' : 'bg-slate-100'}`}
        />
      ))}
    </div>
  )
}

function MixedNumberReveal({ denominator = 2, numerator = 5, itemName = 'paratha' }) {
  const [piecesAdded, setPiecesAdded] = useState(0)

  const addPiece = () => setPiecesAdded((p) => Math.min(numerator, p + 1))
  const reset = () => setPiecesAdded(0)

  const wholes = Math.floor(piecesAdded / denominator)
  const remainder = piecesAdded % denominator
  const isDone = piecesAdded === numerator

  const groups = Array.from({ length: wholes }, (_, i) => i)

  return (
    <div className="flex flex-col items-center gap-8 w-full">
      <div className="flex flex-wrap gap-3 justify-center items-center min-h-16">
        <AnimatePresence>
          {groups.map((i) => (
            <motion.div key={`whole-${i}`} initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}>
              <PieceGroup denominator={denominator} filled={denominator} isWhole />
            </motion.div>
          ))}
          {remainder > 0 && (
            <motion.div key="remainder" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}>
              <PieceGroup denominator={denominator} filled={remainder} isWhole={false} />
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <p className="text-projector-sm text-ink text-center">
        {piecesAdded} piece{piecesAdded === 1 ? '' : 's'} of 1/{denominator} added
        {wholes > 0 && ` — that's ${wholes} whole ${itemName}${wholes === 1 ? '' : 's'}${remainder > 0 ? ` and ${remainder}/${denominator} more` : ''}.`}
      </p>

      {isDone && (
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-projector-sm font-bold text-primary text-center"
        >
          {numerator}/{denominator} = {wholes}
          {remainder > 0 ? ` + ${remainder}/${denominator} = ${wholes} ${remainder}/${denominator}` : ''} {itemName}
          {wholes + (remainder > 0 ? 1 : 0) === 1 ? '' : 's'}
        </motion.p>
      )}

      <div className="flex items-center gap-3">
        {!isDone && (
          <button
            onClick={addPiece}
            className="px-5 py-3 rounded-lg bg-primary text-white font-semibold hover:bg-primary-dark"
          >
            Add Next Piece
          </button>
        )}
        <button
          onClick={reset}
          aria-label="Reset pieces"
          className="flex items-center gap-2 px-5 py-3 rounded-lg bg-slate-100 hover:bg-slate-200 font-semibold text-ink"
        >
          <RefreshCw size={20} /> Reset
        </button>
      </div>
    </div>
  )
}

export default MixedNumberReveal
