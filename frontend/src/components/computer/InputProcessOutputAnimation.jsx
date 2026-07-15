import { useState } from 'react'
import { motion } from 'framer-motion'
import { Keyboard, Cpu, Monitor, Save, ArrowRight, RefreshCw } from 'lucide-react'

const stages = [
  {
    key: 'input',
    icon: Keyboard,
    label: 'Input',
    detail: 'You press "7 + 5" on the keyboard.',
  },
  {
    key: 'process',
    icon: Cpu,
    label: 'Process',
    detail: 'The CPU (the "brain") works out the answer.',
  },
  {
    key: 'output',
    icon: Monitor,
    label: 'Output',
    detail: 'The screen shows the result: 12.',
  },
  {
    key: 'storage',
    icon: Save,
    label: 'Storage',
    detail: 'You save the file so it is still there next time.',
  },
]

function InputProcessOutputAnimation() {
  const [activeIndex, setActiveIndex] = useState(-1)
  const isDone = activeIndex === stages.length - 1

  const next = () => setActiveIndex((i) => Math.min(stages.length - 1, i + 1))
  const reset = () => setActiveIndex(-1)

  return (
    <div className="flex flex-col items-center gap-8 w-full">
      <div className="flex items-center justify-center gap-2 sm:gap-4 flex-wrap">
        {stages.map((stage, i) => {
          const Icon = stage.icon
          const isActive = i <= activeIndex
          return (
            <div key={stage.key} className="flex items-center gap-2 sm:gap-4">
              <motion.div
                animate={{
                  scale: isActive ? 1 : 0.92,
                  opacity: isActive ? 1 : 0.4,
                }}
                transition={{ duration: 0.3 }}
                className={`flex flex-col items-center gap-2 p-4 sm:p-5 rounded-2xl border-2 w-24 sm:w-28 ${
                  isActive ? 'border-primary bg-primary/10' : 'border-slate-200 bg-slate-50'
                }`}
              >
                <Icon size={32} className={isActive ? 'text-primary' : 'text-slate-400'} />
                <span
                  className={`text-sm sm:text-base font-bold ${
                    isActive ? 'text-primary' : 'text-slate-400'
                  }`}
                >
                  {stage.label}
                </span>
              </motion.div>
              {i < stages.length - 1 && (
                <ArrowRight
                  size={24}
                  className={i < activeIndex ? 'text-primary' : 'text-slate-300'}
                />
              )}
            </div>
          )
        })}
      </div>

      <p className="text-projector-sm text-ink text-center min-h-[2.5em]">
        {activeIndex === -1
          ? 'Click "Next Step" to see what happens when you use a computer.'
          : stages[activeIndex].detail}
      </p>

      <div className="flex items-center gap-3">
        {!isDone && (
          <button
            onClick={next}
            className="px-5 py-3 rounded-lg bg-primary text-white font-semibold hover:bg-primary-dark"
          >
            Next Step
          </button>
        )}
        <button
          onClick={reset}
          aria-label="Reset animation"
          className="flex items-center gap-2 px-5 py-3 rounded-lg bg-slate-100 hover:bg-slate-200 font-semibold text-ink"
        >
          <RefreshCw size={20} /> Reset
        </button>
      </div>
    </div>
  )
}

export default InputProcessOutputAnimation
