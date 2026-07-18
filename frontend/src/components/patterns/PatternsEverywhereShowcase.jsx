import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Leaf, School, Moon, ShoppingCart, Gamepad2, CloudSun } from 'lucide-react'

const categories = [
  {
    id: 'nature',
    label: 'Nature',
    icon: Leaf,
    example: 'The petals of a flower, the spirals of a shell, and the stripes on a tiger all follow patterns.',
  },
  {
    id: 'home-school',
    label: 'Home & School',
    icon: School,
    example: 'A timetable, a tiled floor, and the rows of desks in a classroom are all patterns we use every day.',
  },
  {
    id: 'sky',
    label: 'Sun, Moon & Stars',
    icon: Moon,
    example: 'Day and night, the phases of the Moon, and the seasons repeat in a pattern the sky follows all year.',
  },
  {
    id: 'shopping-cooking',
    label: 'Shopping & Cooking',
    icon: ShoppingCart,
    example: 'Doubling a recipe, or working out change after a purchase, both use number patterns.',
  },
  {
    id: 'games',
    label: 'Games & Sports',
    icon: Gamepad2,
    example: 'Scoring patterns, turns in a game, and the path of a thrown ball all follow rules we can predict.',
  },
  {
    id: 'weather-tech',
    label: 'Weather & Technology',
    icon: CloudSun,
    example: 'Forecasting rain and the code that runs a mobile phone both depend on finding patterns in data.',
  },
]

function PatternsEverywhereShowcase() {
  const [selectedId, setSelectedId] = useState(null)
  const selected = categories.find((c) => c.id === selectedId)

  return (
    <div className="flex flex-col items-center gap-8 w-full">
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 w-full max-w-3xl">
        {categories.map((c) => {
          const Icon = c.icon
          const isSelected = c.id === selectedId
          return (
            <button
              key={c.id}
              onClick={() => setSelectedId(c.id)}
              className={`flex flex-col items-center gap-2 px-4 py-6 rounded-2xl border-2 transition-colors
                ${isSelected ? 'border-primary bg-primary/10' : 'border-slate-200 bg-white hover:border-slate-300'}`}
            >
              <Icon size={32} className={isSelected ? 'text-primary' : 'text-slate-400'} />
              <span className={`text-sm sm:text-base font-semibold ${isSelected ? 'text-primary' : 'text-ink'}`}>
                {c.label}
              </span>
            </button>
          )
        })}
      </div>

      <div className="min-h-20 flex items-center justify-center max-w-2xl">
        <AnimatePresence mode="wait">
          {selected ? (
            <motion.p
              key={selected.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="text-projector-sm text-ink text-center leading-relaxed"
            >
              {selected.example}
            </motion.p>
          ) : (
            <motion.p
              key="prompt"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-projector-sm text-slate-400 text-center"
            >
              Tap a category to see a pattern hiding inside it!
            </motion.p>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}

export default PatternsEverywhereShowcase
