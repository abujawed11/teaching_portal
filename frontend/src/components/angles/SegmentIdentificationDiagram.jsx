import { useState } from 'react'

const POINTS = [
  { id: 'L', pos: { x: 30, y: 160 }, segments: ['A'] },
  { id: 'M', pos: { x: 130, y: 160 }, segments: ['A'] },
  { id: 'Q', pos: { x: 230, y: 160 }, segments: ['A', 'B'] },
  { id: 'R', pos: { x: 300, y: 60 }, segments: ['B', 'C'] },
  { id: 'P', pos: { x: 370, y: 160 }, segments: ['C'] },
]

const SEGMENTS = [
  { id: 'A', label: 'LQ', from: { x: 30, y: 160 }, to: { x: 230, y: 160 }, color: '#2563eb' },
  { id: 'B', label: 'QR', from: { x: 230, y: 160 }, to: { x: 300, y: 60 }, color: '#16a34a' },
  { id: 'C', label: 'RP', from: { x: 300, y: 60 }, to: { x: 370, y: 160 }, color: '#d97706' },
]

function SegmentIdentificationDiagram() {
  const [selected, setSelected] = useState(null)
  const point = POINTS.find((p) => p.id === selected)

  return (
    <div className="flex flex-col items-center gap-6 w-full">
      <svg viewBox="0 0 400 200" className="w-full max-w-lg">
        {SEGMENTS.map((s) => {
          const isActive = point?.segments.includes(s.id)
          return (
            <line
              key={s.id}
              x1={s.from.x} y1={s.from.y} x2={s.to.x} y2={s.to.y}
              stroke={s.color}
              strokeWidth={isActive ? 7 : 4}
              opacity={point ? (isActive ? 1 : 0.3) : 1}
            />
          )
        })}

        {POINTS.map((p) => (
          <g key={p.id} className="cursor-pointer" onClick={() => setSelected(p.id)}>
            <circle
              cx={p.pos.x} cy={p.pos.y}
              r={p.id === selected ? 11 : 8}
              fill={p.id === selected ? '#1e293b' : '#475569'}
              stroke="#fff"
              strokeWidth={2}
            />
            <text x={p.pos.x} y={p.pos.y - 16} fontSize={18} fontWeight="bold" textAnchor="middle" fill="#1e293b">
              {p.id}
            </text>
          </g>
        ))}
      </svg>

      <p className="text-projector-sm text-ink text-center min-h-[2.5rem]">
        {point ? (
          <>
            Point <span className="font-bold text-primary">{point.id}</span> lies on{' '}
            <span className="font-bold text-primary">{point.segments.length}</span> segment{point.segments.length > 1 ? 's' : ''}:{' '}
            {point.segments.map((sid) => SEGMENTS.find((s) => s.id === sid).label).join(' and ')}
          </>
        ) : (
          'Click any point to see which segment(s) it lies on.'
        )}
      </p>
    </div>
  )
}

export default SegmentIdentificationDiagram
