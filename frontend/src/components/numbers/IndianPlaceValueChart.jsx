import { useState } from 'react'
import { motion } from 'framer-motion'

const COLUMN_LABELS = [
  'Ten Crore',
  'Crore',
  'Ten Lakh',
  'Lakh',
  'Ten Thousand',
  'Thousand',
  'Hundred',
  'Ten',
  'One',
]
const PLACE_VALUES = [1e8, 1e7, 1e6, 1e5, 1e4, 1e3, 100, 10, 1]

// Indian comma grouping: rightmost group of 3, then groups of 2 — add a visual gap before these column indices.
const GROUP_START_INDICES = new Set([2, 4, 6])

function getColumns(number) {
  const digits = String(number).padStart(9, '0').split('').map(Number)
  return digits.map((digit, i) => ({
    digit,
    label: COLUMN_LABELS[i],
    placeValue: digit * PLACE_VALUES[i],
  }))
}

function IndianPlaceValueChart({ number = 74532618 }) {
  const columns = getColumns(number)
  const [selectedIndex, setSelectedIndex] = useState(null)
  const selected = selectedIndex !== null ? columns[selectedIndex] : null

  return (
    <div className="flex flex-col items-center gap-8 w-full">
      <div className="flex flex-wrap justify-center gap-1">
        {columns.map((col, i) => (
          <motion.button
            key={i}
            onClick={() => setSelectedIndex(i)}
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            className={`flex flex-col items-center gap-2 rounded-xl px-2 sm:px-3 py-3 min-w-[56px] sm:min-w-[76px] transition-colors
              ${GROUP_START_INDICES.has(i) ? 'ml-3 sm:ml-5' : ''}
              ${
                selectedIndex === i
                  ? 'bg-primary text-white'
                  : 'bg-slate-100 text-ink hover:bg-slate-200'
              }`}
          >
            <span className="text-[0.65rem] sm:text-xs font-medium text-center leading-tight">
              {col.label}
            </span>
            <span className="text-projector-sm sm:text-projector-md font-extrabold">
              {col.digit}
            </span>
          </motion.button>
        ))}
      </div>

      {selected && (
        <motion.div
          key={selectedIndex}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="bg-slate-50 rounded-2xl px-8 py-6 text-center space-y-2"
        >
          <p className="text-projector-sm text-ink">
            Digit: <span className="font-bold text-primary">{selected.digit}</span>
          </p>
          <p className="text-projector-sm text-ink">
            Place: <span className="font-bold text-primary">{selected.label}</span>
          </p>
          <p className="text-projector-sm text-ink">
            Face Value: <span className="font-bold text-primary">{selected.digit}</span>
          </p>
          <p className="text-projector-sm text-ink">
            Place Value:{' '}
            <span className="font-bold text-primary">
              {selected.placeValue.toLocaleString('en-IN')}
            </span>
          </p>
          <p className="text-base text-slate-500 pt-2">
            This {selected.digit} is in the {selected.label} place, so it is worth {selected.digit}{' '}
            × {PLACE_VALUES[selectedIndex].toLocaleString('en-IN')} ={' '}
            {selected.placeValue.toLocaleString('en-IN')}.
          </p>
        </motion.div>
      )}
    </div>
  )
}

export default IndianPlaceValueChart
