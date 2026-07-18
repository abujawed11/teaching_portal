import { useState } from 'react'
import { motion } from 'framer-motion'
import { RefreshCw } from 'lucide-react'

const VA = { x: 130, y: 210 }
const VB_START = { x: 380, y: 210 }
const L = 130
const ANGLE_A = 50
const ANGLE_B = 78

function armTip(vertex, deg, len) {
  const rad = (deg * Math.PI) / 180
  return { x: vertex.x + len * Math.cos(rad), y: vertex.y - len * Math.sin(rad) }
}

function AngleSuperimposeCompare() {
  const [superimposed, setSuperimposed] = useState(false)

  const aBase = armTip(VA, 0, L)
  const aSecond = armTip(VA, ANGLE_A, L)
  const bBaseLocal = armTip(VB_START, 0, L)
  const bSecondLocal = armTip(VB_START, ANGLE_B, L)

  const dx = superimposed ? VA.x - VB_START.x : 0
  const dy = superimposed ? VA.y - VB_START.y : 0

  const bigger = ANGLE_A > ANGLE_B ? 'A' : 'B'

  return (
    <div className="flex flex-col items-center gap-6 w-full">
      <svg viewBox="0 0 500 260" className="w-full max-w-xl">
        <line x1={VA.x} y1={VA.y} x2={aBase.x} y2={aBase.y} stroke="#1e293b" strokeWidth={3} />
        <line x1={VA.x} y1={VA.y} x2={aSecond.x} y2={aSecond.y} stroke="#2563eb" strokeWidth={4} />
        <circle cx={VA.x} cy={VA.y} r={5} fill="#1e293b" />
        <text x={VA.x - 10} y={VA.y + 22} fontSize={14} fill="#64748b">A</text>
        {superimposed && bigger === 'A' && (
          <motion.text initial={{ opacity: 0 }} animate={{ opacity: 1 }} x={aSecond.x + 5} y={aSecond.y - 5} fontSize={16} fill="#16a34a" fontWeight="bold">
            ✓ bigger!
          </motion.text>
        )}

        <motion.g animate={{ x: dx, y: dy }} transition={{ duration: 0.7, type: 'spring', bounce: 0.15 }}>
          <line x1={VB_START.x} y1={VB_START.y} x2={bBaseLocal.x} y2={bBaseLocal.y} stroke="#1e293b" strokeWidth={3} />
          <line x1={VB_START.x} y1={VB_START.y} x2={bSecondLocal.x} y2={bSecondLocal.y} stroke="#f59e0b" strokeWidth={4} />
          <circle cx={VB_START.x} cy={VB_START.y} r={5} fill="#1e293b" />
          <text x={VB_START.x - 10} y={VB_START.y + 22} fontSize={14} fill="#64748b">B</text>
          {superimposed && bigger === 'B' && (
            <motion.text initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { delay: 0.5 } }} x={bSecondLocal.x + 5} y={bSecondLocal.y - 5} fontSize={16} fill="#16a34a" fontWeight="bold">
              ✓ bigger!
            </motion.text>
          )}
        </motion.g>
      </svg>

      <p className="text-projector-sm text-ink text-center">
        {superimposed
          ? 'Same vertex, same base arm — now you can see which second arm sticks out further.'
          : 'Two separate angles. Which one is bigger? Hard to tell from here!'}
      </p>

      <div className="flex items-center gap-3">
        {!superimposed && (
          <button
            onClick={() => setSuperimposed(true)}
            className="px-5 py-3 rounded-lg bg-primary text-white font-semibold hover:bg-primary-dark"
          >
            Superimpose
          </button>
        )}
        <button
          onClick={() => setSuperimposed(false)}
          aria-label="Reset"
          className="flex items-center gap-2 px-5 py-3 rounded-lg bg-slate-100 hover:bg-slate-200 font-semibold text-ink"
        >
          <RefreshCw size={20} /> Reset
        </button>
      </div>
    </div>
  )
}

export default AngleSuperimposeCompare
