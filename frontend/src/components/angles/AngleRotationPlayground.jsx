import { useState, useCallback, useEffect, useRef } from 'react'

const CX = 200
const CY = 230
const R = 150

function angleFromPointer(svgEl, clientX, clientY) {
  const rect = svgEl.getBoundingClientRect()
  const scaleX = 420 / rect.width
  const scaleY = 260 / rect.height
  const x = (clientX - rect.left) * scaleX
  const y = (clientY - rect.top) * scaleY
  const dx = x - CX
  const dy = -(y - CY)
  let deg = (Math.atan2(dy, dx) * 180) / Math.PI
  return Math.max(5, Math.min(175, Math.round(deg)))
}

function pointOnRay(deg, radius) {
  const rad = (deg * Math.PI) / 180
  return { x: CX + radius * Math.cos(rad), y: CY - radius * Math.sin(rad) }
}

function arcPath(deg) {
  const start = pointOnRay(0, 40)
  const end = pointOnRay(deg, 40)
  return `M ${CX} ${CY} L ${start.x} ${start.y} A 40 40 0 0 0 ${end.x} ${end.y} Z`
}

function AngleRotationPlayground() {
  const svgRef = useRef(null)
  const [angle, setAngle] = useState(40)
  const [dragging, setDragging] = useState(false)

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

  const tip = pointOnRay(angle, R)
  const base = pointOnRay(0, R)

  return (
    <div className="flex flex-col items-center gap-6 w-full">
      <svg ref={svgRef} viewBox="0 0 420 260" className="w-full max-w-lg touch-none select-none">
        <path d={arcPath(angle)} fill="#2563eb22" />

        <line x1={CX} y1={CY} x2={base.x} y2={base.y} stroke="#1e293b" strokeWidth={4} />
        <text x={base.x - 10} y={base.y + 22} fontSize={14} fill="#64748b">arm</text>

        <line x1={CX} y1={CY} x2={tip.x} y2={tip.y} stroke="#2563eb" strokeWidth={4} />
        <text x={tip.x - 10} y={tip.y - 12} fontSize={14} fill="#2563eb" fontWeight="bold">arm</text>

        <circle
          cx={tip.x} cy={tip.y} r={14} fill="#2563eb"
          className="cursor-grab active:cursor-grabbing"
          onPointerDown={(e) => { e.preventDefault(); setDragging(true) }}
        />

        <circle cx={CX} cy={CY} r={6} fill="#1e293b" />
        <text x={CX - 45} y={CY + 22} fontSize={14} fill="#64748b" fontWeight="bold">vertex</text>
      </svg>

      <p className="text-projector-sm text-ink text-center">
        Drag the blue arm — the <span className="font-bold text-primary">bigger the turn</span>, the bigger the angle!
      </p>
    </div>
  )
}

export default AngleRotationPlayground
