import { useState } from 'react'

const parts = [
  {
    id: 'cpu',
    name: 'CPU',
    fullName: 'CPU (Central Processing Unit)',
    image: '/images/computer/foundations/cpu.jpg',
    role: 'The "brain" of the computer — it carries out instructions and does all the calculations.',
  },
  {
    id: 'ram',
    name: 'RAM',
    fullName: 'RAM (Random Access Memory)',
    image: '/images/computer/foundations/ram.jpg',
    role: 'Short-term memory — it holds what the computer is working on right now, and clears when the computer turns off.',
  },
  {
    id: 'motherboard',
    name: 'Motherboard',
    fullName: 'Motherboard',
    image: '/images/computer/foundations/motherboard.jpg',
    role: 'The main circuit board — it connects every other part so they can all talk to each other.',
  },
  {
    id: 'gpu',
    name: 'GPU',
    fullName: 'GPU (Graphics Processing Unit)',
    image: '/images/computer/foundations/gpu.jpg',
    role: 'Handles pictures, video, and games — anything that needs to draw fast-moving graphics on screen.',
  },
  {
    id: 'ports',
    name: 'Ports',
    fullName: 'Ports',
    image: '/images/computer/foundations/ports-overview.jpg',
    role: 'The sockets on the outside of the computer — they let you plug in a mouse, monitor, internet cable, and more.',
  },
]

function ComputerPartsExplorer() {
  const [selectedId, setSelectedId] = useState(null)
  const selected = parts.find((p) => p.id === selectedId)

  return (
    <div className="flex flex-col items-center gap-8 w-full">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-5 w-full">
        {parts.map((part) => (
          <button
            key={part.id}
            onClick={() => setSelectedId(part.id)}
            className={`flex flex-col items-center gap-3 p-4 rounded-2xl border-2 transition-colors ${
              selectedId === part.id
                ? 'border-primary bg-primary/10'
                : 'border-slate-200 hover:border-primary/50'
            }`}
          >
            <img
              src={part.image}
              alt={part.fullName}
              className="w-full aspect-square object-cover rounded-xl"
            />
            <span className="text-base sm:text-lg font-bold text-ink">{part.name}</span>
          </button>
        ))}
      </div>

      <div className="min-h-[6rem] flex items-center justify-center">
        {selected ? (
          <div className="max-w-xl text-center">
            <p className="text-projector-sm font-extrabold text-primary mb-2">{selected.fullName}</p>
            <p className="text-base sm:text-lg text-ink">{selected.role}</p>
          </div>
        ) : (
          <p className="text-slate-400 text-center">Click a part above to learn what it does.</p>
        )}
      </div>
    </div>
  )
}

export default ComputerPartsExplorer
