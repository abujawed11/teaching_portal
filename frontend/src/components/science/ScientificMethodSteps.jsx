import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Eye, HelpCircle, Lightbulb, FlaskConical, ClipboardCheck, RefreshCw } from 'lucide-react'
import Button from '../common/Button.jsx'

const steps = [
  {
    id: 'observe',
    label: 'Observe',
    icon: Eye,
    text: 'Notice something interesting, or something you don\'t understand.',
  },
  {
    id: 'question',
    label: 'Question',
    icon: HelpCircle,
    text: 'Wonder about it, and turn that curiosity into a question.',
  },
  {
    id: 'guess',
    label: 'Guess',
    icon: Lightbulb,
    text: 'Come up with a possible answer to your question.',
  },
  {
    id: 'test',
    label: 'Test',
    icon: FlaskConical,
    text: 'Try it out — through an experiment, or by observing more closely.',
  },
  {
    id: 'analyse',
    label: 'Analyse',
    icon: ClipboardCheck,
    text: 'Look at the result. Does it actually answer your question?',
  },
]

function ScientificMethodSteps() {
  const [count, setCount] = useState(1)

  const next = () => setCount((c) => Math.min(c + 1, steps.length))
  const reset = () => setCount(1)

  return (
    <div className="flex flex-col items-center gap-8 w-full">
      <p className="text-projector-sm text-ink text-center max-w-xl">
        Here are the 5 steps scientists (and everyone else!) use to find answers.
      </p>

      <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
        <AnimatePresence>
          {steps.slice(0, count).map((step, i) => {
            const Icon = step.icon
            return (
              <div key={step.id} className="flex items-center gap-2 sm:gap-3">
                {i > 0 && <span className="text-slate-300 text-xl">→</span>}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center gap-1 px-3 py-3 rounded-xl border-2 border-primary bg-primary/5 min-w-[6.5rem] text-center"
                >
                  <Icon size={26} className="text-primary" />
                  <span className="font-bold text-ink text-sm sm:text-base">{step.label}</span>
                </motion.div>
              </div>
            )
          })}
        </AnimatePresence>
      </div>

      <motion.p
        key={steps[count - 1].id}
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-projector-sm text-ink text-center max-w-xl"
      >
        <span className="font-bold text-primary">{steps[count - 1].label}:</span>{' '}
        {steps[count - 1].text}
      </motion.p>

      {count < steps.length ? (
        <Button onClick={next}>Next Step</Button>
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

export default ScientificMethodSteps
