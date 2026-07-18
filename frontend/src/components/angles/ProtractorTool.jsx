import { useState, useRef, useCallback, useEffect } from 'react'
import { RefreshCw } from 'lucide-react'

const CX = 260
const CY = 260
const R = 220

function angleFromPointer(svgEl, clientX, clientY) {
  const rect = svgEl.getBoundingClientRect()
  const scaleX = 520 / rect.width
  const scaleY = 300 / rect.height
  const x = (clientX - rect.left) * scaleX
  const y = (clientY - rect.top) * scaleY
  const dx = x - CX
  const dy = -(y - CY)
  let deg = (Math.atan2(dy, dx) * 180) / Math.PI
  return Math.max(0, Math.min(180, Math.round(deg)))
}

function pointOnRay(deg, radius) {
  const rad = (deg * Math.PI) / 180
  return {
    x: CX + radius * Math.cos(rad),
    y: CY - radius * Math.sin(rad),
  }
}

function arcPath(deg) {
  const start = pointOnRay(0, 50)
  const end = pointOnRay(deg, 50)
  const largeArc = deg > 180 ? 1 : 0
  return `M ${CX} ${CY} L ${start.x} ${start.y} A 50 50 0 ${largeArc} 0 ${end.x} ${end.y} Z`
}

function ProtractorTool({ mode = 'measure', initialAngle = 60, targetDegrees }) {
  const svgRef = useRef(null)
  const [angle, setAngle] = useState(initialAngle)
  const [dragging, setDragging] = useState(false)
  const [revealed, setRevealed] = useState(false)
  const [target] = useState(() => targetDegrees ?? Math.floor(Math.random() * 171) + 5)

  const showNumbers = mode === 'measure' || revealed

  const handleMove = useCallback((clientX, clientY) => {
    if (!svgRef.current) return
    setAngle(angleFromPointer(svgRef.current, clientX, clientY))
  }, [])

  useEffect(() => {
    if (!dragging) return
    const onMove = (e) => handleMove(e.touches ? e.touches[0].clientX : e.clientX, e.touches ? e.touches[0].clientY : e.clientY)
    const onUp = () => setDragging(false)
    window.addEventListener('pointermove', onMove)
    window.addEventListener('pointerup', onUp)
    return () => {
      window.removeEventListener('pointermove', onMove)
      window.removeEventListener('pointerup', onUp)
    }
  }, [dragging, handleMove])

  const tip = pointOnRay(angle, R + 15)
  const score = Math.abs(angle - target)

  const reset = () => {
    setAngle(initialAngle)
    setRevealed(false)
  }

  const ticks = []
  for (let d = 0; d <= 180; d += 10) {
    const isMajor = d % 30 === 0
    const inner = pointOnRay(d, R - (isMajor ? 25 : 15))
    const outer = pointOnRay(d, R)
    ticks.push({ d, inner, outer, isMajor })
  }

  return (
    <div className="flex flex-col items-center gap-6 w-full">
      <svg
        ref={svgRef}
        viewBox="0 0 520 300"
        className="w-full max-w-xl touch-none select-none"
      >
        <path
          d={`M ${CX - R} ${CY} A ${R} ${R} 0 0 1 ${CX + R} ${CY}`}
          fill="none"
          stroke="#94a3b8"
          strokeWidth={2}
        />

        {ticks.map(({ d, inner, outer, isMajor }) => (
          <g key={d}>
            <line x1={inner.x} y1={inner.y} x2={outer.x} y2={outer.y} stroke="#64748b" strokeWidth={isMajor ? 2 : 1} />
            {showNumbers && isMajor && (
              <text
                x={pointOnRay(d, R - 40).x}
                y={pointOnRay(d, R - 40).y}
                fontSize={13}
                textAnchor="middle"
                fill="#475569"
              >
                {d}°
              </text>
            )}
          </g>
        ))}

        <path d={arcPath(angle)} fill="#2563eb22" />

        <line x1={CX} y1={CY} x2={CX + R + 20} y2={CY} stroke="#1e293b" strokeWidth={3} />

        {mode === 'guess' && (() => {
          const targetTip = pointOnRay(target, R + 15)
          return (
            <line
              x1={CX}
              y1={CY}
              x2={targetTip.x}
              y2={targetTip.y}
              stroke="#dc2626"
              strokeWidth={3}
              strokeDasharray="6 5"
            />
          )
        })()}

        <line x1={CX} y1={CY} x2={tip.x} y2={tip.y} stroke="#2563eb" strokeWidth={3} />
        <circle
          cx={tip.x}
          cy={tip.y}
          r={14}
          fill="#2563eb"
          className="cursor-grab active:cursor-grabbing"
          onPointerDown={(e) => {
            e.preventDefault()
            setDragging(true)
          }}
        />

        <circle cx={CX} cy={CY} r={5} fill="#1e293b" />
      </svg>

      {showNumbers && (
        <p className="text-projector-sm text-ink text-center">
          Angle: <span className="font-extrabold text-primary">{angle}°</span>
        </p>
      )}

      {mode === 'guess' && !revealed && (
        <p className="text-projector-sm text-slate-500 text-center">
          Drag the blue arm to match the red dashed angle by eye, then reveal!
        </p>
      )}

      {mode === 'guess' && revealed && (
        <p className="text-projector-sm font-bold text-center text-primary">
          Target was {target}° — your guess was {angle}°. Score: {score} (lower is better!)
        </p>
      )}

      <div className="flex items-center gap-3">
        {mode === 'guess' && !revealed && (
          <button
            onClick={() => setRevealed(true)}
            className="px-5 py-3 rounded-lg bg-primary text-white font-semibold hover:bg-primary-dark"
          >
            Reveal
          </button>
        )}
        <button
          onClick={reset}
          aria-label="Reset"
          className="flex items-center gap-2 px-5 py-3 rounded-lg bg-slate-100 hover:bg-slate-200 font-semibold text-ink"
        >
          <RefreshCw size={20} /> Reset
        </button>
      </div>
    </div>
  )
}

export default ProtractorTool
