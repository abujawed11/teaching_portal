import { useState } from 'react'

const scenes = [
  { id: 'scissors', label: 'Scissors', image: '/images/angles/scissors.jpg' },
  { id: 'book', label: 'Open Book', image: '/images/angles/open-book.jpg' },
]

function RealWorldAngleSpotter() {
  const [sceneId, setSceneId] = useState('scissors')
  const scene = scenes.find((s) => s.id === sceneId)

  return (
    <div className="flex flex-col items-center gap-6 w-full">
      <div className="flex flex-wrap justify-center gap-2">
        {scenes.map((s) => (
          <button
            key={s.id}
            onClick={() => setSceneId(s.id)}
            className={`px-4 py-2 rounded-full text-sm sm:text-base font-semibold border-2 transition-colors
              ${s.id === sceneId ? 'border-primary bg-primary/10 text-primary' : 'border-slate-200 text-slate-500 hover:border-slate-300'}`}
          >
            {s.label}
          </button>
        ))}
      </div>

      <div className="w-full max-w-sm max-h-64 rounded-xl overflow-hidden border-2 border-slate-200 bg-slate-50 flex items-center justify-center">
        <img
          src={scene.image}
          alt={scene.label}
          className="w-full h-full object-contain"
        />
      </div>
    </div>
  )
}

export default RealWorldAngleSpotter
