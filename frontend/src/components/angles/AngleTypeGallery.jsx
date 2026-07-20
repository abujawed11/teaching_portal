import { useState } from 'react'

const CX = 160
const CY = 190
const R = 130

function pointOnRay(deg, radius) {
  const rad = (deg * Math.PI) / 180
  return { x: CX + radius * Math.cos(rad), y: CY - radius * Math.sin(rad) }
}

function arcPath(deg, radius) {
  const start = pointOnRay(0, radius)
  const end = pointOnRay(deg, radius)
  const largeArc = deg > 180 ? 1 : 0
  return `M ${CX} ${CY} L ${start.x} ${start.y} A ${radius} ${radius} 0 ${largeArc} 0 ${end.x} ${end.y} Z`
}

const types = [
  { id: 'acute', label: 'Acute', deg: 50, range: 'Between 0° and 90°', color: '#2563eb' },
  { id: 'right', label: 'Right', deg: 90, range: 'Exactly 90°', color: '#16a34a' },
  { id: 'obtuse', label: 'Obtuse', deg: 130, range: 'Between 90° and 180°', color: '#f59e0b' },
  { id: 'straight', label: 'Straight', deg: 180, range: 'Exactly 180°', color: '#dc2626' },
]

function RightAngleMark() {
  return <polyline points="140,190 140,170 160,170" fill="none" stroke="#1e293b" strokeWidth={2} />
}

function AngleTypeGallery() {
  const [selected, setSelected] = useState('acute')
  const type = types.find((t) => t.id === selected)
  const tip = pointOnRay(type.deg, R)
  const base = pointOnRay(0, R)

  return (
    <div className="flex flex-col items-center gap-6 w-full">
      <div className="flex flex-wrap justify-center gap-2">
        {types.map((t) => (
          <button
            key={t.id}
            onClick={() => setSelected(t.id)}
            className={`px-4 py-2 rounded-full text-sm sm:text-base font-semibold border-2 transition-colors
              ${t.id === selected ? 'border-primary bg-primary/10 text-primary' : 'border-slate-200 text-slate-500 hover:border-slate-300'}`}
          >
            {t.label}
          </button>
        ))}
      </div>

      <svg viewBox="0 0 320 220" className="w-full max-w-md">
        <path d={arcPath(type.deg, 40)} fill={`${type.color}33`} />
        <line x1={CX} y1={CY} x2={base.x} y2={base.y} stroke="#1e293b" strokeWidth={4} />
        <line x1={CX} y1={CY} x2={tip.x} y2={tip.y} stroke="#1e293b" strokeWidth={4} />
        {type.id === 'right' && <RightAngleMark />}
        <circle cx={CX} cy={CY} r={6} fill="#1e293b" />
      </svg>

      <p className="text-projector-sm text-ink text-center">
        <span className="font-extrabold" style={{ color: type.color }}>{type.label} Angle</span> — {type.range}
        <br />
        <span className="text-base text-slate-500">Shown here at {type.deg}°.</span>
      </p>
    </div>
  )
}

export default AngleTypeGallery
