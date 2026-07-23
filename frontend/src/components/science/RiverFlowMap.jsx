import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const rivers = [
  { id: 'ganga', label: 'Ganga', sea: 'bay' },
  { id: 'brahmaputra', label: 'Brahmaputra', sea: 'bay' },
  { id: 'narmada', label: 'Narmada', sea: 'arabian' },
  { id: 'tapti', label: 'Tapti', sea: 'arabian' },
  { id: 'godavari', label: 'Godavari', sea: 'bay' },
  { id: 'krishna', label: 'Krishna', sea: 'bay' },
  { id: 'kaveri', label: 'Kaveri', sea: 'bay' },
]

const seaNames = {
  arabian: 'Arabian Sea',
  bay: 'Bay of Bengal',
}

// Positioned as % of the map image (viewBox 0 0 1000 1000), just offshore of the
// west coast (Gujarat/Maharashtra) and east coast (West Bengal/Odisha).
const seaMarkers = {
  arabian: { left: '11%', top: '62%' },
  bay: { left: '74%', top: '60%' },
}

function RiverFlowMap() {
  const [selectedId, setSelectedId] = useState(null)
  const selected = rivers.find((r) => r.id === selectedId)

  return (
    <div className="flex flex-col items-center gap-6 w-full">
      <p className="text-projector-sm text-ink text-center max-w-xl">
        Tap a river's name to see which sea it flows into.
      </p>

      <div className="flex flex-col sm:flex-row items-center gap-6 w-full max-w-2xl">
        <div className="relative w-56 sm:w-64 aspect-square shrink-0">
          <img
            src="/images/science/water-essence-of-life/india-map.svg"
            alt="Map of India"
            className="w-full h-full object-contain"
          />

          {Object.entries(seaMarkers).map(([seaId, pos]) => (
            <div
              key={seaId}
              className="absolute -translate-x-1/2 -translate-y-1/2 flex flex-col items-center"
              style={pos}
            >
              <div className="w-2.5 h-2.5 rounded-full bg-slate-300" />
              <span
                className={`text-[10px] sm:text-xs font-bold whitespace-nowrap mt-0.5 ${
                  selected?.sea === seaId ? 'text-sky-700' : 'text-slate-400'
                }`}
              >
                {seaNames[seaId]}
              </span>
            </div>
          ))}

          {/* Single highlight marker for whichever sea is selected — remounts (key=sea) on every
              change, so there is never more than one marker on screen at a time. */}
          <AnimatePresence>
            {selected && (
              <motion.div
                key={selected.sea}
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: [1, 1.4, 1], opacity: 1 }}
                exit={{ scale: 0, opacity: 0 }}
                transition={{ duration: 1, repeat: Infinity }}
                style={seaMarkers[selected.sea]}
                className="absolute -translate-x-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-sky-400 pointer-events-none"
              />
            )}
          </AnimatePresence>
        </div>

        <div className="flex flex-col gap-2 w-full">
          <div className="grid grid-cols-2 gap-2">
            {rivers.map((r) => (
              <button
                key={r.id}
                onClick={() => setSelectedId(r.id)}
                className={`px-3 py-2 rounded-lg border-2 font-semibold text-sm sm:text-base transition-colors ${
                  r.id === selectedId
                    ? 'border-primary bg-primary/10 text-primary'
                    : 'border-slate-200 text-ink hover:border-primary'
                }`}
              >
                {r.label}
              </button>
            ))}
          </div>

          {selected && (
            <motion.p
              key={selected.id}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-projector-sm text-ink text-center sm:text-left mt-2"
            >
              The <span className="font-bold">{selected.label}</span> flows towards the{' '}
              <span className="font-bold text-primary">{seaNames[selected.sea]}</span>.
            </motion.p>
          )}
        </div>
      </div>
    </div>
  )
}

export default RiverFlowMap
