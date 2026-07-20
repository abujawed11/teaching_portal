import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { RefreshCw } from 'lucide-react'

const CX = 210
const CY = 240
const R = 150

function pointOnRay(deg, radius) {
  const rad = (deg * Math.PI) / 180
  return { x: CX + radius * Math.cos(rad), y: CY - radius * Math.sin(rad) }
}

function arcPath(fromDeg, toDeg, radius) {
  const start = pointOnRay(fromDeg, radius)
  const end = pointOnRay(toDeg, radius)
  return `M ${CX} ${CY} L ${start.x} ${start.y} A ${radius} ${radius} 0 0 0 ${end.x} ${end.y} Z`
}

function RightAngleMark({ deg }) {
  const size = 18
  const p1 = pointOnRay(deg - 90, size)
  const p2 = pointOnRay(deg, size)
  const corner = { x: p1.x + p2.x - CX, y: p1.y + p2.y - CY }
  return (
    <polyline
      points={`${p1.x},${p1.y} ${corner.x},${corner.y} ${p2.x},${p2.y}`}
      fill="none"
      stroke="#1e293b"
      strokeWidth={2}
    />
  )
}

function AngleBisectorFold({
  startAngle = 180,
  leftLabel = 'A',
  rightLabel = 'B',
  vertexLabel = 'O',
  creaseLabel = 'C',
}) {
  const [folded, setFolded] = useState(false)
  const half = startAngle / 2
  const isRightAngleResult = Math.abs(half - 90) < 0.01

  const armA = pointOnRay(startAngle, R)
  const armB = pointOnRay(0, R)

  return (
    <div className="flex flex-col items-center gap-6 w-full">
      <svg viewBox="0 0 420 280" className="w-full max-w-lg">
        <AnimatePresence>
          {folded && (
            <>
              <motion.path
                key="left"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                d={arcPath(half, startAngle, 45)}
                fill="#2563eb33"
              />
              <motion.path
                key="right"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                d={arcPath(0, half, 45)}
                fill="#f59e0b33"
              />
            </>
          )}
        </AnimatePresence>

        <line x1={CX} y1={CY} x2={armA.x} y2={armA.y} stroke="#1e293b" strokeWidth={4} />
        <line x1={CX} y1={CY} x2={armB.x} y2={armB.y} stroke="#1e293b" strokeWidth={4} />

        <AnimatePresence>
          {folded && (
            <motion.g initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} style={{ transformOrigin: `${CX}px ${CY}px` }}>
              {(() => {
                const crease = pointOnRay(half, R)
                return (
                  <line
                    x1={CX} y1={CY} x2={crease.x} y2={crease.y}
                    stroke="#dc2626" strokeWidth={3} strokeDasharray="7 5"
                  />
                )
              })()}
              {isRightAngleResult ? (
                <>
                  <RightAngleMark deg={half} />
                  <RightAngleMark deg={startAngle} />
                </>
              ) : null}
            </motion.g>
          )}
        </AnimatePresence>

        <circle cx={CX} cy={CY} r={6} fill="#1e293b" />
        <text x={CX - 9} y={CY + 28} fontSize={22} fontWeight="bold" fill="#1e293b">{vertexLabel}</text>
        <text x={armA.x - (armA.x < CX ? 28 : -10)} y={armA.y - 10} fontSize={22} fontWeight="bold" fill="#1e293b">{leftLabel}</text>
        <text x={armB.x - (armB.x < CX ? 28 : -10)} y={armB.y - 10} fontSize={22} fontWeight="bold" fill="#1e293b">{rightLabel}</text>
        {folded && (() => {
          const crease = pointOnRay(half, R)
          return (
            <text x={crease.x - (crease.x < CX ? 28 : -10)} y={crease.y - 10} fontSize={22} fontWeight="bold" fill="#dc2626">
              {creaseLabel}
            </text>
          )
        })()}
      </svg>

      <p className="text-projector-sm text-ink text-center">
        {!folded ? (
          <>The <span className="font-bold text-primary">{startAngle}°</span> angle {leftLabel}{vertexLabel}{rightLabel}, before folding.</>
        ) : isRightAngleResult ? (
          <>
            Folding {rightLabel}{vertexLabel} onto {leftLabel}{vertexLabel} gives crease {vertexLabel}{creaseLabel} —{' '}
            <span className="font-bold text-primary">∠{leftLabel}{vertexLabel}{creaseLabel} = ∠{creaseLabel}{vertexLabel}{rightLabel} = 90°</span>, two right angles!
          </>
        ) : (
          <>
            The crease {vertexLabel}{creaseLabel} splits the angle exactly in half:{' '}
            <span className="font-bold text-primary">∠{leftLabel}{vertexLabel}{creaseLabel} = ∠{creaseLabel}{vertexLabel}{rightLabel} = {half}°</span>
          </>
        )}
      </p>

      <div className="flex items-center gap-3">
        {!folded && (
          <button
            onClick={() => setFolded(true)}
            className="px-5 py-3 rounded-lg bg-primary text-white font-semibold hover:bg-primary-dark"
          >
            Fold in Half
          </button>
        )}
        <button
          onClick={() => setFolded(false)}
          aria-label="Reset"
          className="flex items-center gap-2 px-5 py-3 rounded-lg bg-slate-100 hover:bg-slate-200 font-semibold text-ink"
        >
          <RefreshCw size={20} /> Reset
        </button>
      </div>
    </div>
  )
}

export default AngleBisectorFold
