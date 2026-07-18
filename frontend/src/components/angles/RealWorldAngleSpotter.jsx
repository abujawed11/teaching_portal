import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const scenes = [
  {
    id: 'bike',
    label: 'Bicycle Handlebar',
    vertex: { x: 150, y: 160 },
    arms: [{ x: 150, y: 60 }, { x: 260, y: 190 }],
  },
  {
    id: 'fence',
    label: 'Fence Lattice',
    vertex: { x: 150, y: 160 },
    arms: [{ x: 40, y: 60 }, { x: 260, y: 60 }],
  },
]

function RealWorldAngleSpotter() {
  const [sceneId, setSceneId] = useState('bike')
  const [revealed, setRevealed] = useState(false)
  const scene = scenes.find((s) => s.id === sceneId)

  const selectScene = (id) => {
    setSceneId(id)
    setRevealed(false)
  }

  return (
    <div className="flex flex-col items-center gap-6 w-full">
      <div className="flex flex-wrap justify-center gap-2">
        {scenes.map((s) => (
          <button
            key={s.id}
            onClick={() => selectScene(s.id)}
            className={`px-4 py-2 rounded-full text-sm sm:text-base font-semibold border-2 transition-colors
              ${s.id === sceneId ? 'border-primary bg-primary/10 text-primary' : 'border-slate-200 text-slate-500 hover:border-slate-300'}`}
          >
            {s.label}
          </button>
        ))}
      </div>

      <svg viewBox="0 0 300 220" className="w-full max-w-sm">
        <line x1={scene.vertex.x} y1={scene.vertex.y} x2={scene.arms[0].x} y2={scene.arms[0].y} stroke="#94a3b8" strokeWidth={5} strokeLinecap="round" />
        <line x1={scene.vertex.x} y1={scene.vertex.y} x2={scene.arms[1].x} y2={scene.arms[1].y} stroke="#94a3b8" strokeWidth={5} strokeLinecap="round" />

        <AnimatePresence>
          {revealed && (
            <motion.g initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
              <line x1={scene.vertex.x} y1={scene.vertex.y} x2={scene.arms[0].x} y2={scene.arms[0].y} stroke="#2563eb" strokeWidth={3} strokeDasharray="5 4" />
              <line x1={scene.vertex.x} y1={scene.vertex.y} x2={scene.arms[1].x} y2={scene.arms[1].y} stroke="#f59e0b" strokeWidth={3} strokeDasharray="5 4" />
              <circle cx={scene.vertex.x} cy={scene.vertex.y} r={8} fill="#1e293b" />
              <text x={scene.vertex.x - 45} y={scene.vertex.y + 5} fontSize={14} fontWeight="bold" fill="#1e293b">vertex</text>
            </motion.g>
          )}
        </AnimatePresence>
      </svg>

      <button
        onClick={() => setRevealed((v) => !v)}
        className="px-5 py-3 rounded-lg bg-primary text-white font-semibold hover:bg-primary-dark"
      >
        {revealed ? 'Hide the Angle' : 'Show the Angle'}
      </button>
    </div>
  )
}

export default RealWorldAngleSpotter
