import { useState } from 'react'
import { motion } from 'framer-motion'

const MAX_HEIGHT_M = 500
const CHART_PX = 340

const ITEMS = [
  {
    id: 'somu',
    label: "Somu's Building",
    heightM: 40,
    detail: "10 floors × 4 m (Somu is 1 m tall, each floor is about 4× his height)",
    color: 'bg-slate-400',
  },
  {
    id: 'statue',
    label: 'Statue of Unity',
    heightM: 180,
    detail: "180 m ≈ 4.5 × Somu's building — about 140 m taller",
    color: 'bg-amber-500',
  },
  {
    id: 'waterfall',
    label: 'Kunchikal Waterfall',
    heightM: 450,
    detail: "450 m ≈ 11.25 × Somu's building — about 410 m taller, roughly 113 floors!",
    color: 'bg-sky-500',
  },
]

function BenchmarkHeightComparator() {
  const [selected, setSelected] = useState(null)
  const active = ITEMS.find((item) => item.id === selected)

  return (
    <div className="flex flex-col items-center gap-6 w-full">
      <div className="flex flex-col items-center">
        <div className="flex items-end justify-center gap-6 sm:gap-10" style={{ height: CHART_PX }}>
          {ITEMS.map((item) => {
            const px = Math.max((item.heightM / MAX_HEIGHT_M) * CHART_PX, 6)
            return (
              <motion.button
                key={item.id}
                onClick={() => setSelected(item.id)}
                initial={{ height: 0 }}
                animate={{ height: px }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
                className={`w-14 sm:w-20 rounded-t-lg ${item.color} ${
                  selected === item.id ? 'ring-4 ring-primary ring-offset-2' : ''
                } flex items-start justify-center pt-1`}
              >
                <span className="text-white text-xs sm:text-sm font-bold">{item.heightM} m</span>
              </motion.button>
            )
          })}
        </div>

        <div className="flex justify-center gap-6 sm:gap-10 mt-2">
          {ITEMS.map((item) => (
            <span
              key={item.id}
              className="w-14 sm:w-20 text-xs sm:text-sm font-semibold text-ink text-center leading-tight"
            >
              {item.label}
            </span>
          ))}
        </div>
      </div>

      {active && (
        <motion.div
          key={active.id}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="bg-slate-50 rounded-2xl px-6 py-4 text-center max-w-xl"
        >
          <p className="text-projector-sm text-ink">{active.detail}</p>
        </motion.div>
      )}

      {!active && (
        <p className="text-base text-slate-400">Tap a bar to compare its height to Somu's building.</p>
      )}
    </div>
  )
}

export default BenchmarkHeightComparator
