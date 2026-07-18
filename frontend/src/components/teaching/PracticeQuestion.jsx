import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Button from '../common/Button.jsx'

function PracticeQuestion({ question, answer, explanation, visual }) {
  const [showAnswer, setShowAnswer] = useState(false)

  return (
    <div className="max-w-3xl w-full flex flex-col items-center gap-8 text-center">
      <p className="text-projector-sm font-semibold text-ink">{question}</p>

      <Button onClick={() => setShowAnswer((v) => !v)}>
        {showAnswer ? 'Hide Answer' : 'Reveal Answer'}
      </Button>

      <AnimatePresence>
        {showAnswer && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="flex flex-col items-center gap-2"
          >
            <p className="text-projector-sm font-bold text-success">{answer}</p>
            {explanation && <p className="text-base text-slate-500 max-w-xl">{explanation}</p>}
            {visual && <div className="w-full mt-2">{visual}</div>}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default PracticeQuestion
