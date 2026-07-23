import { useState } from 'react'
import { motion } from 'framer-motion'
import { PenOff, HelpCircle, Lightbulb, FlaskConical, XCircle, CheckCircle2, ClipboardCheck, RefreshCw } from 'lucide-react'
import Button from '../common/Button.jsx'

const stages = [
  {
    icon: PenOff,
    color: 'text-slate-500',
    title: 'Observe',
    text: 'Your pen has suddenly stopped writing!',
  },
  {
    icon: HelpCircle,
    color: 'text-primary',
    title: 'Question',
    text: '"Why did my pen stop writing?"',
  },
  {
    icon: Lightbulb,
    color: 'text-amber-500',
    title: 'Guess #1',
    text: 'Maybe the ink finished.',
  },
  {
    icon: FlaskConical,
    color: 'text-sky-500',
    title: 'Test #1',
    text: 'You open the pen and check the ink refill...',
    result: { icon: XCircle, color: 'text-red-500', text: 'Nope — the refill still has plenty of ink!' },
  },
  {
    icon: Lightbulb,
    color: 'text-amber-500',
    title: 'Guess #2',
    text: 'Hmm, that guess was wrong. Maybe the ink at the tip has dried up instead.',
  },
  {
    icon: FlaskConical,
    color: 'text-sky-500',
    title: 'Test #2',
    text: 'You scribble hard on some rough paper to loosen the tip...',
    result: { icon: CheckCircle2, color: 'text-success', text: 'It works! The ink really had dried up.' },
  },
  {
    icon: ClipboardCheck,
    color: 'text-primary',
    title: 'Analyse',
    text: 'Your second guess matched what actually happened — mystery solved! Notice the first guess being wrong wasn\'t a failure — it just meant trying the next guess.',
  },
]

function PenMysteryDemo() {
  const [index, setIndex] = useState(0)
  const stage = stages[index]
  const Icon = stage.icon

  const next = () => setIndex((i) => Math.min(i + 1, stages.length - 1))
  const reset = () => setIndex(0)

  return (
    <div className="flex flex-col items-center gap-6 w-full">
      <p className="text-projector-sm text-ink text-center max-w-xl">
        Let's solve a real mystery, step by step, using the scientific method.
      </p>

      <motion.div
        key={stage.title}
        initial={{ opacity: 0, scale: 0.85 }}
        animate={{ opacity: 1, scale: 1 }}
        className="flex flex-col items-center gap-3"
      >
        <Icon size={56} className={stage.color} />
        <span className="font-bold text-projector-sm text-primary">{stage.title}</span>
        <p className="text-projector-sm text-ink text-center max-w-xl">{stage.text}</p>

        {stage.result && (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex items-center gap-2 mt-1"
          >
            <stage.result.icon size={22} className={stage.result.color} />
            <span className={`font-semibold ${stage.result.color}`}>{stage.result.text}</span>
          </motion.div>
        )}
      </motion.div>

      {index < stages.length - 1 ? (
        <Button onClick={next}>Next</Button>
      ) : (
        <button
          onClick={reset}
          className="flex items-center gap-2 px-5 py-3 rounded-lg bg-slate-100 hover:bg-slate-200 font-semibold text-ink"
        >
          <RefreshCw size={20} /> Start Over
        </button>
      )}
    </div>
  )
}

export default PenMysteryDemo
