import { useState } from 'react'
import { motion } from 'framer-motion'
import AnimationControls from './AnimationControls.jsx'

// Temporary stand-in for real Phase 3 visuals (e.g. PlaceValueChart) —
// proves AnimationControls actually drives a Framer Motion animation.
function AnimatedStepDemo({ label }) {
  const [isPlaying, setIsPlaying] = useState(false)
  const [playKey, setPlayKey] = useState(0)

  const replay = () => {
    setPlayKey((k) => k + 1)
    setIsPlaying(true)
  }

  const reset = () => {
    setPlayKey((k) => k + 1)
    setIsPlaying(false)
  }

  return (
    <div className="flex flex-col items-center gap-8">
      <div className="h-32 flex items-center justify-center">
        <motion.div
          key={playKey}
          className="px-8 py-6 rounded-2xl bg-primary text-white text-projector-sm font-bold"
          initial={{ opacity: 0, x: -80 }}
          animate={isPlaying ? { opacity: 1, x: 0 } : { opacity: 0.3, x: -80 }}
          transition={{ duration: 0.8 }}
        >
          {label}
        </motion.div>
      </div>

      <AnimationControls
        isPlaying={isPlaying}
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
        onReplay={replay}
        onReset={reset}
      />
    </div>
  )
}

export default AnimatedStepDemo
