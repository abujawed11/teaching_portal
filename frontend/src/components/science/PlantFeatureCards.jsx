import { useState } from 'react'
import { RefreshCw } from 'lucide-react'

const plants = [
  {
    id: 'grass',
    label: 'Common Grass',
    image: '/images/science/diversity-in-living-world/grass.jpg',
    stem: 'Soft and thin',
    leaves: 'A single leaf grows alternately from different points on the stem',
    flowers: 'Tiny green flowers',
  },
  {
    id: 'tulsi',
    label: 'Tulsi (Holy Basil)',
    image: '/images/science/diversity-in-living-world/tulsi.jpg',
    stem: 'Hard and thin',
    leaves: 'A pair of leaves arranged opposite each other',
    flowers: 'Pinkish-purple',
  },
  {
    id: 'hibiscus',
    label: 'Hibiscus (Gudhal)',
    image: '/images/science/diversity-in-living-world/hibiscus.jpg',
    stem: 'Hard',
    leaves: 'Broad, pointed-tip leaves with a net-like vein pattern',
    flowers: 'Large, bright red (or pink/yellow)',
  },
  {
    id: 'neem',
    label: 'Neem',
    image: '/images/science/diversity-in-living-world/neem.jpg',
    stem: 'Hard and thick',
    leaves: 'Smooth-surfaced, narrow, pointed leaflets',
    flowers: 'Small, white, fragrant',
  },
]

function PlantFeatureCards() {
  const [revealedIds, setRevealedIds] = useState([])

  const toggle = (id) => {
    setRevealedIds((ids) => (ids.includes(id) ? ids.filter((i) => i !== id) : [...ids, id]))
  }

  const reset = () => setRevealedIds([])

  return (
    <div className="flex flex-col items-center gap-6 w-full">
      <p className="text-projector-sm text-ink text-center max-w-xl">
        Tap each plant to see how its stem, leaves and flowers are different.
      </p>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 w-full max-w-4xl">
        {plants.map((p) => {
          const isRevealed = revealedIds.includes(p.id)
          return (
            <button
              key={p.id}
              onClick={() => toggle(p.id)}
              className="flex flex-col rounded-xl overflow-hidden border-2 border-slate-200 hover:border-primary bg-white text-left transition-colors"
            >
              <img src={p.image} alt={p.label} className="w-full h-32 sm:h-36 object-cover" />
              <div className="p-2 flex flex-col gap-1">
                <span className="font-semibold text-ink text-xs sm:text-sm">{p.label}</span>
                {isRevealed ? (
                  <div className="flex flex-col gap-0.5 text-[11px] sm:text-xs text-slate-500">
                    <span>
                      <span className="font-semibold text-ink">Stem:</span> {p.stem}
                    </span>
                    <span>
                      <span className="font-semibold text-ink">Leaves:</span> {p.leaves}
                    </span>
                    <span>
                      <span className="font-semibold text-ink">Flowers:</span> {p.flowers}
                    </span>
                  </div>
                ) : (
                  <span className="text-[11px] sm:text-xs text-slate-400">Tap to reveal</span>
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

export default PlantFeatureCards
