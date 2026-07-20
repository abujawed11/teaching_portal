import { useState, useCallback, useEffect, useRef } from 'react'

const CX = 220
const CY = 220
const R = 160

function angleFromPointer(svgEl, clientX, clientY) {
  const rect = svgEl.getBoundingClientRect()
  const scaleX = 440 / rect.width
  const scaleY = 300 / rect.height
  const x = (clientX - rect.left) * scaleX
  const y = (clientY - rect.top) * scaleY
  const dx = x - CX
  const dy = -(y - CY)
  let deg = (Math.atan2(dy, dx) * 180) / Math.PI
  if (deg < 0) deg += 360
  return Math.max(5, Math.min(175, Math.round(deg)))
}

function pointOnRay(deg, radius) {
  const rad = (deg * Math.PI) / 180
  return { x: CX + radius * Math.cos(rad), y: CY - radius * Math.sin(rad) }
}

function arcPath(fromDeg, toDeg, radius) {
  const start = pointOnRay(fromDeg, radius)
  const end = pointOnRay(toDeg, radius)
  const largeArc = toDeg - fromDeg > 180 ? 1 : 0
  return `M ${CX} ${CY} L ${start.x} ${start.y} A ${radius} ${radius} 0 ${largeArc} 0 ${end.x} ${end.y} Z`
}

function ReflexAngleDemo() {
  const svgRef = useRef(null)
  const [armAngle, setArmAngle] = useState(60)
  const [dragging, setDragging] = useState(false)
  const [showReflex, setShowReflex] = useState(false)

  const handleMove = useCallback((clientX, clientY) => {
    if (!svgRef.current) return
    setArmAngle(angleFromPointer(svgRef.current, clientX, clientY))
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

  const directAngle = armAngle
  const reflexAngle = 360 - armAngle
  const tip = pointOnRay(armAngle, R)
  const base = pointOnRay(0, R)

  return (
    <div className="flex flex-col items-center gap-6 w-full">
      <svg
        ref={svgRef}
        viewBox="0 0 440 300"
        className="w-full max-w-lg touch-none select-none"
      >
        <circle cx={CX} cy={CY} r={R} fill="none" stroke="#e2e8f0" strokeWidth={2} />

        {!showReflex ? (
          <path d={arcPath(0, directAngle, 45)} fill="#2563eb33" stroke="#2563eb" strokeWidth={2} />
        ) : (
          <path d={arcPath(directAngle, 360, 45)} fill="#f59e0b33" stroke="#d97706" strokeWidth={2} />
        )}

        <line x1={CX} y1={CY} x2={base.x} y2={base.y} stroke="#1e293b" strokeWidth={4} />
        <line x1={CX} y1={CY} x2={tip.x} y2={tip.y} stroke="#1e293b" strokeWidth={4} />

        <circle
          cx={tip.x} cy={tip.y} r={14} fill="#1e293b"
          className="cursor-grab active:cursor-grabbing"
          onPointerDown={(e) => { e.preventDefault(); setDragging(true) }}
        />
        <circle cx={CX} cy={CY} r={6} fill="#1e293b" />
      </svg>

      <p className="text-projector-sm text-ink text-center">
        {!showReflex ? (
          <>The angle you can see directly: <span className="font-extrabold text-primary">{directAngle}°</span></>
        ) : (
          <>Going the <span className="font-bold" style={{ color: '#d97706' }}>other way round</span> — the reflex angle: <span className="font-extrabold" style={{ color: '#d97706' }}>{reflexAngle}°</span></>
        )}
      </p>
      <p className="text-sm text-slate-500 text-center">
        Same two arms, same vertex — {directAngle}° + {reflexAngle}° = 360° (one full turn).
      </p>

      <div className="flex items-center gap-3">
        <button
          onClick={() => setShowReflex(false)}
          className={`px-5 py-3 rounded-lg font-semibold ${!showReflex ? 'bg-primary text-white' : 'bg-slate-100 text-ink hover:bg-slate-200'}`}
        >
          Show Small Angle
        </button>
        <button
          onClick={() => setShowReflex(true)}
          className={`px-5 py-3 rounded-lg font-semibold ${showReflex ? 'text-white' : 'bg-slate-100 text-ink hover:bg-slate-200'}`}
          style={showReflex ? { backgroundColor: '#d97706' } : undefined}
        >
          Show Reflex Angle
        </button>
      </div>
    </div>
  )
}

export default ReflexAngleDemo
