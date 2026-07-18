import { useState } from 'react'
import { motion } from 'framer-motion'

const CX = 210
const CY = 220
const DEG = 45
const SHORT = 70
const LONG = 170

function tip(len) {
  const rad = (DEG * Math.PI) / 180
  return { x: CX + len * Math.cos(rad), y: CY - len * Math.sin(rad) }
}

function ArmLengthMythBuster() {
  const [long, setLong] = useState(false)
  const len = long ? LONG : SHORT
  const t = tip(len)
  const base = { x: CX + len, y: CY }

  return (
    <div className="flex flex-col items-center gap-6 w-full">
      <svg viewBox="0 0 420 260" className="w-full max-w-lg">
        <path
          d={`M ${CX} ${CY} L ${CX + 35} ${CY} A 35 35 0 0 0 ${CX + 35 * Math.cos((DEG * Math.PI) / 180)} ${CY - 35 * Math.sin((DEG * Math.PI) / 180)} Z`}
          fill="#2563eb22"
        />
        <motion.line
          animate={{ x2: base.x, y2: base.y }}
          transition={{ duration: 0.4 }}
          x1={CX} y1={CY} stroke="#1e293b" strokeWidth={4}
        />
        <motion.line
          animate={{ x2: t.x, y2: t.y }}
          transition={{ duration: 0.4 }}
          x1={CX} y1={CY} stroke="#2563eb" strokeWidth={4}
        />
        <circle cx={CX} cy={CY} r={6} fill="#1e293b" />
      </svg>

      <p className="text-projector-sm font-semibold text-ink text-center">
        {long ? 'Long arms.' : 'Short arms.'} Same angle underneath — has it changed?
      </p>

      <button
        onClick={() => setLong((v) => !v)}
        className="px-5 py-3 rounded-lg bg-primary text-white font-semibold hover:bg-primary-dark"
      >
        {long ? 'Shrink the Arms' : 'Grow the Arms'}
      </button>
    </div>
  )
}

export default ArmLengthMythBuster
