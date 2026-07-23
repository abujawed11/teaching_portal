import { useState } from 'react'
import { RefreshCw } from 'lucide-react'

const surfaces = [
  {
    id: 'concrete-road',
    label: 'Concrete Road',
    helps: false,
    fact: 'Concrete seals the ground. Rainwater cannot soak through it, so it mostly runs off instead.',
    preview: (
      <div className="w-full h-16 bg-slate-400 rounded-md relative overflow-hidden">
        <div className="absolute inset-y-1/2 inset-x-2 h-1 bg-amber-300 rounded-full" style={{ backgroundImage: 'repeating-linear-gradient(to right, #fcd34d 0 10px, transparent 10px 20px)' }} />
      </div>
    ),
  },
  {
    id: 'green-lawn',
    label: 'Green Lawn',
    helps: true,
    fact: 'Open soil under grass lets rainwater soak in easily, helping recharge groundwater.',
    preview: (
      <div className="w-full h-16 bg-emerald-400 rounded-md flex items-end justify-around px-2 pb-1">
        {[0, 1, 2, 3, 4, 5].map((i) => (
          <div key={i} className="w-0.5 h-4 bg-emerald-700 rounded-full" />
        ))}
      </div>
    ),
  },
  {
    id: 'paved-area',
    label: 'Paved Area',
    helps: false,
    fact: 'Tightly-fitted paving stones cover the soil, so very little rainwater can seep through.',
    preview: (
      <div className="w-full h-16 bg-slate-300 rounded-md grid grid-cols-4 grid-rows-2 gap-0.5 p-0.5">
        {Array.from({ length: 8 }).map((_, i) => (
          <div key={i} className="bg-slate-400 rounded-sm" />
        ))}
      </div>
    ),
  },
]

function RechargeSurfaceSort() {
  const [revealedIds, setRevealedIds] = useState([])

  const toggle = (id) => {
    setRevealedIds((ids) => (ids.includes(id) ? ids.filter((i) => i !== id) : [...ids, id]))
  }

  const reset = () => setRevealedIds([])

  return (
    <div className="flex flex-col items-center gap-6 w-full">
      <p className="text-projector-sm text-ink text-center max-w-xl">
        Which of these surfaces helps rainwater recharge the groundwater? Tap each to find out.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full max-w-2xl">
        {surfaces.map((s) => {
          const isRevealed = revealedIds.includes(s.id)
          return (
            <button
              key={s.id}
              onClick={() => toggle(s.id)}
              className="flex flex-col rounded-xl overflow-hidden border-2 border-slate-200 hover:border-primary bg-white text-left p-3 gap-2 transition-colors"
            >
              {s.preview}
              <span className="font-semibold text-ink text-sm sm:text-base">{s.label}</span>
              {isRevealed ? (
                <div className="flex flex-col gap-1">
                  <span
                    className={`inline-block w-fit px-2 py-0.5 rounded-full text-xs font-bold ${
                      s.helps ? 'bg-emerald-100 text-emerald-700' : 'bg-red-100 text-red-700'
                    }`}
                  >
                    {s.helps ? 'Helps Recharge' : 'Does Not Help'}
                  </span>
                  <span className="text-xs sm:text-sm text-slate-500">{s.fact}</span>
                </div>
              ) : (
                <span className="text-xs sm:text-sm text-slate-400">Tap to reveal</span>
              )}
            </button>
          )
        })}
      </div>

      <button
        onClick={reset}
        className="flex items-center gap-2 px-5 py-3 rounded-lg bg-slate-100 hover:bg-slate-200 font-semibold text-ink"
      >
        <RefreshCw size={20} /> Reset
      </button>
    </div>
  )
}

export default RechargeSurfaceSort
