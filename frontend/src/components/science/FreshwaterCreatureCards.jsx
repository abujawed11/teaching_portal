import { useState } from 'react'
import { RefreshCw } from 'lucide-react'

const creatures = [
  {
    id: 'dragonfly',
    label: 'Dragonfly',
    image: '/images/science/water-essence-of-life/dragonfly.jpg',
    fact: 'Flies fast and lays eggs near water. Eats mosquitoes.',
  },
  {
    id: 'water-scorpion',
    label: 'Water Scorpion',
    image: '/images/science/water-essence-of-life/water-scorpion.jpg',
    fact: 'An insect with pincers that lives underwater and breathes using a tail tube.',
  },
  {
    id: 'pond-heron',
    label: 'Pond Heron',
    image: '/images/science/water-essence-of-life/pond-heron.jpg',
    fact: 'A bird with long legs that stands very still to catch fish.',
  },
  {
    id: 'freshwater-turtle',
    label: 'Freshwater Turtle',
    image: '/images/science/water-essence-of-life/freshwater-turtle.jpg',
    fact: 'A soft-shelled turtle that lives in ponds and rivers.',
  },
  {
    id: 'water-snake',
    label: 'Water Snake',
    image: '/images/science/water-essence-of-life/water-snake.jpg',
    fact: 'A harmless water snake that eats fish and frogs.',
  },
  {
    id: 'reeds',
    label: 'Reeds (Edge Plants)',
    image: '/images/science/water-essence-of-life/reeds.jpg',
    fact: 'Tall, grass-like plants that grow along the edges of ponds.',
  },
  {
    id: 'lotus-water-lily',
    label: 'Lotus and Water Lily',
    image: '/images/science/water-essence-of-life/lotus-water-lily.jpg',
    fact: 'Rooted floating plants — their flowers float on water, but their roots stay in the pond bed.',
  },
  {
    id: 'water-hyacinth',
    label: 'Water Hyacinth',
    image: '/images/science/water-essence-of-life/water-hyacinth.jpg',
    fact: 'A free-floating plant that grows and spreads very fast across the water\'s surface.',
  },
]

function FreshwaterCreatureCards() {
  const [revealedIds, setRevealedIds] = useState([])

  const toggle = (id) => {
    setRevealedIds((ids) => (ids.includes(id) ? ids.filter((i) => i !== id) : [...ids, id]))
  }

  const reset = () => setRevealedIds([])

  return (
    <div className="flex flex-col items-center gap-6 w-full">
      <p className="text-projector-sm text-ink text-center max-w-xl">
        Meet some of the plants and animals that live in and around freshwater. Tap each to
        learn more.
      </p>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 w-full max-w-4xl">
        {creatures.map((c) => {
          const isRevealed = revealedIds.includes(c.id)
          return (
            <button
              key={c.id}
              onClick={() => toggle(c.id)}
              className="flex flex-col rounded-xl overflow-hidden border-2 border-slate-200 hover:border-primary bg-white text-left transition-colors"
            >
              <img src={c.image} alt={c.label} className="w-full h-32 sm:h-36 object-cover" />
              <div className="p-2 flex flex-col gap-1">
                <span className="font-semibold text-ink text-xs sm:text-sm">{c.label}</span>
                {isRevealed ? (
                  <span className="text-[11px] sm:text-xs text-slate-500">{c.fact}</span>
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

export default FreshwaterCreatureCards
