import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { RefreshCw } from 'lucide-react'

const sequences = {
  counting: { label: 'Counting Numbers', valueOf: (n) => n, shape: 'row' },
  odd: { label: 'Odd Numbers', valueOf: (n) => 2 * n - 1, shape: 'row' },
  even: { label: 'Even Numbers', valueOf: (n) => 2 * n, shape: 'row' },
  triangular: { label: 'Triangular Numbers', valueOf: (n) => (n * (n + 1)) / 2, shape: 'triangle' },
  square: { label: 'Square Numbers', valueOf: (n) => n * n, shape: 'grid' },
}

const DOT = 22

function Dots({ shape, n }) {
  if (shape === 'triangle') {
    const rows = Array.from({ length: n }, (_, r) => r + 1)
    return (
      <div className="flex flex-col items-center gap-1.5">
        {rows.map((count, r) => (
          <div key={r} className="flex gap-1.5">
            {Array.from({ length: count }).map((_, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.4 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.25 }}
                className="rounded-full bg-primary"
                style={{ width: DOT, height: DOT }}
              />
            ))}
          </div>
        ))}
      </div>
    )
  }

  if (shape === 'grid') {
    const rows = Array.from({ length: n })
    return (
      <div className="flex flex-col gap-1.5">
        {rows.map((_, r) => (
          <div key={r} className="flex gap-1.5">
            {Array.from({ length: n }).map((_, c) => (
              <motion.div
                key={c}
                initial={{ opacity: 0, scale: 0.4 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.25 }}
                className="rounded-full bg-primary"
                style={{ width: DOT, height: DOT }}
              />
            ))}
          </div>
        ))}
      </div>
    )
  }

  return null
}

function SequenceRow({ id, n }) {
  const { valueOf } = sequences[id]
  const count = valueOf(n)
  return (
    <div className="flex flex-wrap justify-center gap-1.5 max-w-md">
      {Array.from({ length: count }).map((_, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, scale: 0.4 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.25 }}
          className="rounded-full bg-primary"
          style={{ width: DOT, height: DOT }}
        />
      ))}
    </div>
  )
}

function SequenceExplorer() {
  const [selectedId, setSelectedId] = useState('counting')
  const [n, setN] = useState(1)
  const maxN = 5
  const seq = sequences[selectedId]
  const values = Array.from({ length: n }, (_, i) => seq.valueOf(i + 1))
  const isDone = n === maxN

  const selectSequence = (id) => {
    setSelectedId(id)
    setN(1)
  }
  const next = () => setN((v) => Math.min(maxN, v + 1))
  const reset = () => setN(1)

  return (
    <div className="flex flex-col items-center gap-6 w-full">
      <div className="flex flex-wrap justify-center gap-2">
        {Object.entries(sequences).map(([id, s]) => (
          <button
            key={id}
            onClick={() => selectSequence(id)}
            className={`px-4 py-2 rounded-full text-sm sm:text-base font-semibold border-2 transition-colors
              ${id === selectedId ? 'border-primary bg-primary/10 text-primary' : 'border-slate-200 text-slate-500 hover:border-slate-300'}`}
          >
            {s.label}
          </button>
        ))}
      </div>

      <p className="text-projector-sm text-ink text-center">
        {values.join(', ')}
        {n < maxN && ', ...'}
      </p>

      <div className="min-h-32 flex items-center justify-center">
        <AnimatePresence mode="wait">
          <motion.div key={`${selectedId}-${n}`} initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            {seq.shape === 'row' ? (
              <SequenceRow id={selectedId} n={n} />
            ) : (
              <Dots shape={seq.shape} n={n} />
            )}
          </motion.div>
        </AnimatePresence>
      </div>

      <p className="text-base sm:text-lg text-slate-500 text-center">
        Term {n}: <span className="font-bold text-primary">{seq.valueOf(n)}</span> dots
      </p>

      <div className="flex items-center gap-3">
        {!isDone && (
          <button
            onClick={next}
            className="px-5 py-3 rounded-lg bg-primary text-white font-semibold hover:bg-primary-dark"
          >
            Show Next Term
          </button>
        )}
        <button
          onClick={reset}
          aria-label="Reset"
          className="flex items-center gap-2 px-5 py-3 rounded-lg bg-slate-100 hover:bg-slate-200 font-semibold text-ink"
        >
          <RefreshCw size={20} /> Reset
        </button>
      </div>
    </div>
  )
}

export default SequenceExplorer
