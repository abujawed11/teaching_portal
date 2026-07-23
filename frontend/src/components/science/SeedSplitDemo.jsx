import { useState } from 'react'
import { motion } from 'framer-motion'
import { RefreshCw } from 'lucide-react'
import Button from '../common/Button.jsx'

function SeedSplitDemo() {
  const [opened, setOpened] = useState(false)

  return (
    <div className="flex flex-col items-center gap-6 w-full">
      <p className="text-projector-sm text-ink text-center max-w-xl">
        Chickpea and maize seeds were soaked in water for a few days. What happens when we open
        them up?
      </p>

      <div className="flex gap-10 sm:gap-16">
        <div className="flex flex-col items-center gap-2">
          <svg viewBox="0 0 100 80" width="120" height="96">
            {!opened ? (
              <ellipse cx="50" cy="40" rx="30" ry="26" fill="#fde68a" stroke="#d97706" strokeWidth="2" />
            ) : (
              <>
                <motion.ellipse
                  initial={{ x: 0 }}
                  animate={{ x: -8 }}
                  cx="42"
                  cy="40"
                  rx="22"
                  ry="26"
                  fill="#fde68a"
                  stroke="#d97706"
                  strokeWidth="2"
                />
                <motion.ellipse
                  initial={{ x: 0 }}
                  animate={{ x: 8 }}
                  cx="58"
                  cy="40"
                  rx="22"
                  ry="26"
                  fill="#fde68a"
                  stroke="#d97706"
                  strokeWidth="2"
                />
              </>
            )}
          </svg>
          <p className="font-semibold text-ink">Chickpea</p>
          {opened && <p className="text-sm text-success font-semibold">Splits into 2 cotyledons — a dicot!</p>}
        </div>

        <div className="flex flex-col items-center gap-2">
          <svg viewBox="0 0 100 80" width="120" height="96">
            <ellipse cx="50" cy="40" rx="26" ry="30" fill="#fef3c7" stroke="#d97706" strokeWidth="2" />
            {opened && (
              <motion.ellipse
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                cx="50"
                cy="40"
                rx="7"
                ry="22"
                fill="#fde68a"
                stroke="#d97706"
                strokeWidth="1.5"
              />
            )}
          </svg>
          <p className="font-semibold text-ink">Maize</p>
          {opened && <p className="text-sm text-success font-semibold">Just 1 thin cotyledon — a monocot!</p>}
        </div>
      </div>

      {!opened ? (
        <Button onClick={() => setOpened(true)}>Open the Seeds</Button>
      ) : (
        <button
          onClick={() => setOpened(false)}
          className="flex items-center gap-2 px-5 py-3 rounded-lg bg-slate-100 hover:bg-slate-200 font-semibold text-ink"
        >
          <RefreshCw size={20} /> Reset
        </button>
      )}

      {opened && (
        <p className="text-projector-sm text-ink text-center max-w-xl">
          Each part of a split seed is called a cotyledon. Plants with 2 cotyledons are called
          dicotyledons (dicots). Plants with just 1 cotyledon are called monocotyledons
          (monocots).
        </p>
      )}
    </div>
  )
}

export default SeedSplitDemo
