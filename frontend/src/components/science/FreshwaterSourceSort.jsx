import { useState } from 'react'
import { RefreshCw } from 'lucide-react'

const sources = [
  {
    id: 'pond',
    label: 'Pond',
    image: '/images/science/water-essence-of-life/pond.jpg',
    type: 'freshwater',
    fact: 'Ponds collect rainwater and are home to fish, frogs and water plants.',
  },
  {
    id: 'ocean',
    label: 'Ocean',
    image: '/images/science/water-essence-of-life/ocean.jpg',
    type: 'saltwater',
    fact: 'Oceans hold most of Earth\'s water, but it is too salty to drink or water crops with.',
  },
  {
    id: 'glacier',
    label: 'Glacier',
    image: '/images/science/water-essence-of-life/glacier.jpg',
    type: 'freshwater',
    fact: 'Glaciers are huge blocks of frozen freshwater found on mountains and near the poles.',
  },
  {
    id: 'mountain-lake',
    label: 'Mountain Lake',
    image: '/images/science/water-essence-of-life/mountain-lake.jpg',
    type: 'freshwater',
    fact: 'Lakes fed by rain, rivers or melting snow are an important freshwater source.',
  },
  {
    id: 'groundwater-well',
    label: 'Well (Groundwater)',
    image: '/images/science/water-essence-of-life/groundwater-well.jpg',
    type: 'freshwater',
    fact: 'Rainwater that soaks into the ground is stored as groundwater and drawn up through wells.',
  },
  {
    id: 'river',
    label: 'River',
    image: '/images/science/water-essence-of-life/river.jpg',
    type: 'freshwater',
    fact: 'Rivers flow from mountains and hills, carrying freshwater across the land.',
  },
  {
    id: 'rain',
    label: 'Rain',
    image: '/images/science/water-essence-of-life/rain.jpg',
    type: 'freshwater',
    fact: 'Rain is freshwater falling from clouds — it fills ponds, rivers and recharges the ground.',
  },
]

function FreshwaterSourceSort() {
  const [revealedIds, setRevealedIds] = useState([])

  const toggle = (id) => {
    setRevealedIds((ids) => (ids.includes(id) ? ids.filter((i) => i !== id) : [...ids, id]))
  }

  const reset = () => setRevealedIds([])

  return (
    <div className="flex flex-col items-center gap-6 w-full">
      <p className="text-projector-sm text-ink text-center max-w-xl">
        Click each source to find out — is it freshwater or saltwater?
      </p>

      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 w-full max-w-4xl">
        {sources.map((s) => {
          const isRevealed = revealedIds.includes(s.id)
          return (
            <button
              key={s.id}
              onClick={() => toggle(s.id)}
              className="flex flex-col rounded-xl overflow-hidden border-2 border-slate-200 hover:border-primary bg-white text-left transition-colors"
            >
              <img src={s.image} alt={s.label} className="w-full h-28 sm:h-32 object-cover" />
              <div className="p-3 flex flex-col gap-1">
                <span className="font-semibold text-ink text-sm sm:text-base">{s.label}</span>
                {isRevealed ? (
                  <div className="flex flex-col gap-1">
                    <span
                      className={`inline-block w-fit px-2 py-0.5 rounded-full text-xs font-bold ${
                        s.type === 'freshwater'
                          ? 'bg-emerald-100 text-emerald-700'
                          : 'bg-amber-100 text-amber-700'
                      }`}
                    >
                      {s.type === 'freshwater' ? 'Freshwater' : 'Saltwater'}
                    </span>
                    <span className="text-xs sm:text-sm text-slate-500">{s.fact}</span>
                  </div>
                ) : (
                  <span className="text-xs sm:text-sm text-slate-400">Tap to reveal</span>
                )}
              </div>
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

export default FreshwaterSourceSort
