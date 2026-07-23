import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Button from '../common/Button.jsx'

const stages = [
  {
    id: 'evaporation',
    label: 'Evaporation',
    text: 'The Sun heats up water in oceans and rivers. It turns into invisible water vapour and rises into the sky.',
  },
  {
    id: 'condensation',
    label: 'Condensation',
    text: 'As the vapour rises higher, it cools down. It turns back into tiny water droplets, which gather together to form clouds.',
  },
  {
    id: 'precipitation',
    label: 'Precipitation',
    text: 'When clouds get heavy with water droplets, the water falls back down to Earth as rain, snow or hail.',
  },
  {
    id: 'collection',
    label: 'Collection',
    text: 'The rain flows down mountains and hills, filling rivers, lakes and oceans again — ready for the cycle to start all over.',
  },
]

const riverPath = 'M 285 145 C 268 165 302 180 285 200'

function WaterCycleDiagram() {
  const [index, setIndex] = useState(0)
  const stage = stages[index]

  const next = () => setIndex((i) => (i + 1) % stages.length)

  return (
    <div className="flex flex-col items-center gap-6 w-full">
      <svg viewBox="0 0 400 260" className="w-full max-w-md rounded-2xl bg-sky-50 border-2 border-slate-200">
        {/* Sky */}
        <rect x="0" y="0" width="400" height="260" fill="#f0f9ff" />

        {/* Sun */}
        <circle cx="55" cy="55" r="26" fill="#fcd34d" stroke="#f59e0b" strokeWidth="2" />

        {/* Mountain */}
        <polygon points="215,200 280,105 345,200" fill="#94a3b8" />
        <polygon points="260,140 280,105 300,140" fill="#f8fafc" />

        {/* Ocean */}
        <rect x="0" y="200" width="400" height="60" fill="#38bdf8" />

        {/* River / flow path down the mountain into the ocean */}
        <path d={riverPath} stroke="#0ea5e9" strokeWidth="4" fill="none" strokeLinecap="round" opacity="0.5" />

        {/* Evaporation arrows */}
        <AnimatePresence>
          {stage.id === 'evaporation' &&
            [80, 140, 200, 300, 360].map((x, i) => (
              <motion.text
                key={x}
                x={x}
                y={195}
                fontSize="22"
                fontWeight="bold"
                fill="#0284c7"
                textAnchor="middle"
                initial={{ opacity: 0, y: 195 }}
                animate={{ opacity: [0, 1, 0], y: 140 }}
                transition={{ duration: 1.6, repeat: Infinity, delay: i * 0.25 }}
              >
                ↑
              </motion.text>
            ))}
        </AnimatePresence>

        {/* Cloud (from condensation onward) */}
        <AnimatePresence>
          {index >= 1 && (
            <motion.g
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              <ellipse cx="250" cy="85" rx="28" ry="16" fill="#e2e8f0" />
              <ellipse cx="285" cy="78" rx="34" ry="20" fill="#f1f5f9" />
              <ellipse cx="320" cy="88" rx="26" ry="15" fill="#e2e8f0" />
            </motion.g>
          )}
        </AnimatePresence>

        {/* Precipitation raindrops */}
        <AnimatePresence>
          {stage.id === 'precipitation' &&
            [255, 275, 295, 315].map((x, i) => (
              <motion.line
                key={x}
                x1={x}
                x2={x - 6}
                y1={100}
                y2={112}
                stroke="#0284c7"
                strokeWidth="3"
                strokeLinecap="round"
                initial={{ opacity: 0, y: 0 }}
                animate={{ opacity: [0, 1, 0], y: 90 }}
                transition={{ duration: 1, repeat: Infinity, delay: i * 0.2 }}
              />
            ))}
        </AnimatePresence>

        {/* Collection flow highlight */}
        <AnimatePresence>
          {stage.id === 'collection' && (
            <motion.path
              d={riverPath}
              stroke="#0369a1"
              strokeWidth="5"
              fill="none"
              strokeLinecap="round"
              strokeDasharray="10 8"
              initial={{ opacity: 0, strokeDashoffset: 0 }}
              animate={{ opacity: 1, strokeDashoffset: -40 }}
              transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
            />
          )}
        </AnimatePresence>
      </svg>

      <div className="flex items-center gap-2">
        {stages.map((s, i) => (
          <div
            key={s.id}
            className={`w-3 h-3 rounded-full ${i === index ? 'bg-primary' : 'bg-slate-300'}`}
          />
        ))}
      </div>

      <motion.div
        key={stage.id}
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex flex-col items-center gap-2 max-w-xl text-center"
      >
        <h3 className="text-projector-sm font-bold text-primary">{stage.label}</h3>
        <p className="text-base sm:text-lg text-ink">{stage.text}</p>
      </motion.div>

      <Button onClick={next}>
        {index === stages.length - 1 ? 'Loop Back to Evaporation' : 'Next Stage'}
      </Button>
    </div>
  )
}

export default WaterCycleDiagram
