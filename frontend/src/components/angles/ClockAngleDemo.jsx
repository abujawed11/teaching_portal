import { useState } from 'react'
import { RefreshCw } from 'lucide-react'

const CX = 200
const CY = 200
const R = 160

const PRESET_HOURS = [1, 2, 4, 6]

function pointAtClockAngle(deg, radius) {
  const rad = (deg * Math.PI) / 180
  return { x: CX + radius * Math.sin(rad), y: CY - radius * Math.cos(rad) }
}

function ClockAngleDemo() {
  const [index, setIndex] = useState(0)
  const hour = PRESET_HOURS[index]

  const hourHandDeg = hour === 12 ? 0 : hour * 30
  const minuteHandDeg = 0
  const rawGap = Math.abs(hourHandDeg - minuteHandDeg)
  const angle = Math.min(rawGap, 360 - rawGap)

  const hourTip = pointAtClockAngle(hourHandDeg, R * 0.5)
  const minuteTip = pointAtClockAngle(minuteHandDeg, R * 0.8)

  const ticks = []
  for (let h = 1; h <= 12; h++) {
    const deg = h * 30
    const outer = pointAtClockAngle(deg, R)
    const inner = pointAtClockAngle(deg, R - 14)
    const label = pointAtClockAngle(deg, R - 30)
    ticks.push({ h, outer, inner, label })
  }

  return (
    <div className="flex flex-col items-center gap-6 w-full">
      <svg viewBox="0 0 400 400" className="w-full max-w-sm">
        <circle cx={CX} cy={CY} r={R} fill="#fff" stroke="#94a3b8" strokeWidth={3} />

        {ticks.map(({ h, outer, inner, label }) => (
          <g key={h}>
            <line x1={inner.x} y1={inner.y} x2={outer.x} y2={outer.y} stroke="#64748b" strokeWidth={2} />
            <text x={label.x} y={label.y + 5} fontSize={16} textAnchor="middle" fill="#334155" fontWeight="bold">
              {h}
            </text>
          </g>
        ))}

        <path
          d={`M ${CX} ${CY} L ${pointAtClockAngle(minuteHandDeg, 40).x} ${pointAtClockAngle(minuteHandDeg, 40).y} A 40 40 0 ${rawGap > 180 ? 1 : 0} 1 ${pointAtClockAngle(hourHandDeg, 40).x} ${pointAtClockAngle(hourHandDeg, 40).y} Z`}
          fill="#2563eb33"
        />

        <line x1={CX} y1={CY} x2={hourTip.x} y2={hourTip.y} stroke="#1e293b" strokeWidth={6} strokeLinecap="round" />
        <line x1={CX} y1={CY} x2={minuteTip.x} y2={minuteTip.y} stroke="#2563eb" strokeWidth={4} strokeLinecap="round" />
        <circle cx={CX} cy={CY} r={7} fill="#1e293b" />
      </svg>

      <p className="text-projector-sm text-ink text-center">
        At <span className="font-extrabold text-primary">{hour} o'clock</span>, the angle between the hands is{' '}
        <span className="font-extrabold text-primary">{angle}°</span>
      </p>
      <p className="text-sm text-slate-500 text-center max-w-md">
        Each hour-mark is 360° ÷ 12 = 30° apart. The hour hand sits {hour} marks from the minute hand, so the angle is{' '}
        {hour} × 30° = {angle}°{hour === 6 ? ' — a straight angle, since the hands point in opposite directions!' : '.'}
      </p>

      <div className="flex items-center gap-3">
        <button
          onClick={() => setIndex((i) => (i + 1) % PRESET_HOURS.length)}
          className="px-5 py-3 rounded-lg bg-primary text-white font-semibold hover:bg-primary-dark"
        >
          Next Time
        </button>
        <button
          onClick={() => setIndex(0)}
          aria-label="Reset"
          className="flex items-center gap-2 px-5 py-3 rounded-lg bg-slate-100 hover:bg-slate-200 font-semibold text-ink"
        >
          <RefreshCw size={20} /> Reset
        </button>
      </div>
    </div>
  )
}

export default ClockAngleDemo
