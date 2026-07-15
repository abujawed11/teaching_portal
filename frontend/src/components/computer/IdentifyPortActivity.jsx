import { useState } from 'react'
import { RefreshCw, Check, X } from 'lucide-react'

const ports = [
  { id: 'usb', name: 'USB Port', image: '/images/computer/foundations/usb-port.jpg' },
  { id: 'hdmi', name: 'HDMI Port', image: '/images/computer/foundations/hdmi-port.jpg' },
  {
    id: 'ethernet',
    name: 'Ethernet (LAN) Port',
    image: '/images/computer/foundations/ethernet-port.jpg',
  },
  {
    id: 'audio',
    name: 'Audio (Headphone) Jack',
    image: '/images/computer/foundations/audio-jack.jpg',
  },
]

function IdentifyPortActivity() {
  const [index, setIndex] = useState(0)
  const [result, setResult] = useState(null)
  const [correctCount, setCorrectCount] = useState(0)

  const isDone = index >= ports.length
  const port = ports[index]

  const choose = (choiceId) => {
    if (result) return
    const isCorrect = choiceId === port.id
    setResult(isCorrect ? 'correct' : 'wrong')
    if (isCorrect) setCorrectCount((c) => c + 1)
  }

  const next = () => {
    setResult(null)
    setIndex((i) => i + 1)
  }

  const reset = () => {
    setIndex(0)
    setResult(null)
    setCorrectCount(0)
  }

  if (isDone) {
    return (
      <div className="flex flex-col items-center gap-6 text-center">
        <p className="text-projector-sm text-ink">
          You identified {correctCount} of {ports.length} ports correctly!
        </p>
        <button
          onClick={reset}
          className="flex items-center gap-2 px-5 py-3 rounded-lg bg-slate-100 hover:bg-slate-200 font-semibold text-ink"
        >
          <RefreshCw size={20} /> Try Again
        </button>
      </div>
    )
  }

  return (
    <div className="flex flex-col items-center gap-8 w-full">
      <img
        src={port.image}
        alt="Identify this port"
        className="w-80 h-56 object-cover rounded-2xl shadow-lg shadow-slate-300/50"
      />

      {result && (
        <p
          className={`flex items-center gap-2 font-bold text-projector-sm ${
            result === 'correct' ? 'text-success' : 'text-danger'
          }`}
        >
          {result === 'correct' ? <Check size={22} /> : <X size={22} />}
          {result === 'correct' ? 'Correct!' : `Not quite — this is the ${port.name}.`}
        </p>
      )}

      {!result ? (
        <div className="grid grid-cols-2 gap-4 w-full max-w-md">
          {ports.map((p) => (
            <button
              key={p.id}
              onClick={() => choose(p.id)}
              className="px-4 py-3 rounded-lg border-2 border-slate-300 hover:border-primary font-semibold text-ink"
            >
              {p.name}
            </button>
          ))}
        </div>
      ) : (
        <button
          onClick={next}
          className="px-6 py-3 rounded-lg bg-primary text-white font-semibold hover:bg-primary-dark"
        >
          Next Port
        </button>
      )}

      <p className="text-sm text-slate-400">
        Port {index + 1} of {ports.length}
      </p>
    </div>
  )
}

export default IdentifyPortActivity
