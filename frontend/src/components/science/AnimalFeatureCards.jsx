import { useState } from 'react'
import { RefreshCw } from 'lucide-react'

const animals = [
  {
    id: 'crow',
    label: 'Crow',
    image: '/images/science/diversity-in-living-world/crow.jpg',
    place: 'Tree',
    food: 'Insects, scraps',
    movement: 'Flies and walks',
  },
  {
    id: 'ant',
    label: 'Ant',
    image: '/images/science/diversity-in-living-world/ant.jpg',
    place: 'Nest in soil or a burrow',
    food: 'Leaves, seeds and insects',
    movement: 'Walks on six legs',
  },
  {
    id: 'cow',
    label: 'Cow',
    image: '/images/science/diversity-in-living-world/cow.jpg',
    place: 'Open fields, sheds',
    food: 'Grasses and leaves',
    movement: 'Walks on four legs',
  },
]

function AnimalFeatureCards() {
  const [revealedIds, setRevealedIds] = useState([])

  const toggle = (id) => {
    setRevealedIds((ids) => (ids.includes(id) ? ids.filter((i) => i !== id) : [...ids, id]))
  }

  const reset = () => setRevealedIds([])

  return (
    <div className="flex flex-col items-center gap-6 w-full">
      <p className="text-projector-sm text-ink text-center max-w-xl">
        Tap each animal to see where it lives, what it eats, and how it moves.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full max-w-3xl">
        {animals.map((a) => {
          const isRevealed = revealedIds.includes(a.id)
          return (
            <button
              key={a.id}
              onClick={() => toggle(a.id)}
              className="flex flex-col rounded-xl overflow-hidden border-2 border-slate-200 hover:border-primary bg-white text-left transition-colors"
            >
              <img src={a.image} alt={a.label} className="w-full h-32 sm:h-36 object-cover" />
              <div className="p-3 flex flex-col gap-1">
                <span className="font-semibold text-ink text-sm sm:text-base">{a.label}</span>
                {isRevealed ? (
                  <div className="flex flex-col gap-0.5 text-xs sm:text-sm text-slate-500">
                    <span>
                      <span className="font-semibold text-ink">Lives:</span> {a.place}
                    </span>
                    <span>
                      <span className="font-semibold text-ink">Eats:</span> {a.food}
                    </span>
                    <span>
                      <span className="font-semibold text-ink">Moves:</span> {a.movement}
                    </span>
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

export default AnimalFeatureCards
