import { useRef, useState, useEffect } from 'react'
import { Monitor, Laptop, Server, Smartphone, RefreshCw } from 'lucide-react'

const leftItems = [
  { id: 'windows', label: 'Windows', target: 'pc' },
  { id: 'macos', label: 'macOS', target: 'macbook' },
  { id: 'linux', label: 'Linux', target: 'server' },
  { id: 'android', label: 'Android', target: 'android-phone' },
  { id: 'ios', label: 'iOS', target: 'iphone' },
]

// Order shuffled on purpose so it isn't just a straight row-to-row match.
const rightItems = [
  { id: 'macbook', label: 'MacBook', icon: Laptop },
  { id: 'iphone', label: 'iPhone', icon: Smartphone },
  { id: 'pc', label: 'PC / Desktop', icon: Monitor },
  { id: 'server', label: 'Server Computer', icon: Server },
  { id: 'android-phone', label: 'Android Phone', icon: Smartphone },
]

function anchorOf(container, el, side) {
  const c = container.getBoundingClientRect()
  const r = el.getBoundingClientRect()
  return {
    x: side === 'right' ? r.right - c.left : r.left - c.left,
    y: r.top - c.top + r.height / 2,
  }
}

function OSDeviceMatchDrag() {
  const containerRef = useRef(null)
  const leftRefs = useRef({})
  const rightRefs = useRef({})
  const [lines, setLines] = useState([])
  const [dragFrom, setDragFrom] = useState(null)
  const [dragPos, setDragPos] = useState(null)

  const attemptedIds = new Set(lines.map((l) => l.fromId))
  const isDone = attemptedIds.size === leftItems.length
  const correctCount = lines.filter((l) => l.correct).length

  useEffect(() => {
    if (!dragFrom) return undefined

    const onMove = (e) => {
      const c = containerRef.current.getBoundingClientRect()
      setDragPos({ x: e.clientX - c.left, y: e.clientY - c.top })
    }
    const onUp = (e) => {
      const el = document.elementFromPoint(e.clientX, e.clientY)
      const targetEl = el?.closest('[data-target-id]')
      if (targetEl) {
        const targetId = targetEl.getAttribute('data-target-id')
        const item = leftItems.find((i) => i.id === dragFrom)
        setLines((prev) => [
          ...prev,
          { fromId: dragFrom, toId: targetId, correct: item.target === targetId },
        ])
      }
      setDragFrom(null)
      setDragPos(null)
    }

    window.addEventListener('pointermove', onMove)
    window.addEventListener('pointerup', onUp)
    return () => {
      window.removeEventListener('pointermove', onMove)
      window.removeEventListener('pointerup', onUp)
    }
  }, [dragFrom])

  const startDrag = (e, itemId) => {
    if (attemptedIds.has(itemId)) return
    e.preventDefault()
    const c = containerRef.current.getBoundingClientRect()
    setDragFrom(itemId)
    setDragPos({ x: e.clientX - c.left, y: e.clientY - c.top })
  }

  const retry = () => {
    setLines([])
    setDragFrom(null)
    setDragPos(null)
  }

  const container = containerRef.current

  return (
    <div className="w-full max-w-2xl flex flex-col items-center gap-6">
      <p className="text-projector-sm text-ink text-center">
        Drag each Operating System to the device that usually runs it.
      </p>

      <div ref={containerRef} className="relative w-full select-none" style={{ touchAction: 'none' }}>
        <svg className="absolute inset-0 w-full h-full pointer-events-none">
          {lines.map((line, i) => {
            const fromEl = leftRefs.current[line.fromId]
            const toEl = rightRefs.current[line.toId]
            if (!fromEl || !toEl || !container) return null
            const a = anchorOf(container, fromEl, 'right')
            const b = anchorOf(container, toEl, 'left')
            return (
              <line
                key={i}
                x1={a.x}
                y1={a.y}
                x2={b.x}
                y2={b.y}
                stroke={line.correct ? '#16a34a' : '#dc2626'}
                strokeWidth={3}
                strokeLinecap="round"
              />
            )
          })}
          {dragFrom && dragPos && leftRefs.current[dragFrom] && container && (
            <line
              x1={anchorOf(container, leftRefs.current[dragFrom], 'right').x}
              y1={anchorOf(container, leftRefs.current[dragFrom], 'right').y}
              x2={dragPos.x}
              y2={dragPos.y}
              stroke="#94a3b8"
              strokeWidth={3}
              strokeDasharray="6 4"
              strokeLinecap="round"
            />
          )}
        </svg>

        <div className="flex justify-between gap-16">
          <div className="flex flex-col gap-4">
            {leftItems.map((item) => {
              const line = lines.find((l) => l.fromId === item.id)
              const state = line ? (line.correct ? 'correct' : 'wrong') : 'idle'
              return (
                <div
                  key={item.id}
                  ref={(el) => (leftRefs.current[item.id] = el)}
                  onPointerDown={(e) => startDrag(e, item.id)}
                  className={`px-5 py-3 rounded-lg border-2 font-semibold text-ink w-40 text-center ${
                    state === 'correct'
                      ? 'border-success bg-emerald-50 cursor-default'
                      : state === 'wrong'
                        ? 'border-danger bg-red-50 cursor-default'
                        : 'border-slate-300 bg-white cursor-grab active:cursor-grabbing hover:border-primary'
                  }`}
                >
                  {item.label}
                </div>
              )
            })}
          </div>

          <div className="flex flex-col items-start gap-4">
            {rightItems.map((item) => {
              const Icon = item.icon
              return (
                <div
                  key={item.id}
                  ref={(el) => (rightRefs.current[item.id] = el)}
                  data-target-id={item.id}
                  className="flex items-center gap-2 px-5 py-3 rounded-lg border-2 border-slate-300 bg-slate-50 font-semibold text-ink whitespace-nowrap"
                >
                  <Icon size={22} className="text-primary shrink-0" />
                  {item.label}
                </div>
              )
            })}
          </div>
        </div>
      </div>

      {isDone && (
        <p className="text-projector-sm text-ink text-center">
          You matched {correctCount} of {leftItems.length} correctly!
        </p>
      )}

      {lines.some((l) => !l.correct) && (
        <button
          onClick={retry}
          className="flex items-center gap-2 px-5 py-3 rounded-lg bg-slate-100 hover:bg-slate-200 font-semibold text-ink"
        >
          <RefreshCw size={20} /> Retry
        </button>
      )}
    </div>
  )
}

export default OSDeviceMatchDrag
