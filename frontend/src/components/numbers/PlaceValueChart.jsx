import { useState } from 'react'
import { motion } from 'framer-motion'

const COLUMN_LABELS = ['Ten Thousands', 'Thousands', 'Hundreds', 'Tens', 'Ones']
const PLACE_VALUES = [10000, 1000, 100, 10, 1]

function getColumns(number) {
  const digits = String(number).padStart(5, '0').split('').map(Number)
  return digits.map((digit, i) => ({
    digit,
    label: COLUMN_LABELS[i],
    placeValue: digit * PLACE_VALUES[i],
  }))
}

function PlaceValueChart({ number = 45672 }) {
  const columns = getColumns(number)
  const [selectedIndex, setSelectedIndex] = useState(null)
  const selected = selectedIndex !== null ? columns[selectedIndex] : null

  return (
    <div className="flex flex-col items-center gap-8 w-full">
      <div className="flex gap-2 sm:gap-4">
        {columns.map((col, i) => (
          <motion.button
            key={i}
            onClick={() => setSelectedIndex(i)}
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: i * 0.15 }}
            className={`flex flex-col items-center gap-2 rounded-xl px-3 sm:px-5 py-4 min-w-[70px] sm:min-w-[100px] transition-colors
              ${
                selectedIndex === i
                  ? 'bg-primary text-white'
                  : 'bg-slate-100 text-ink hover:bg-slate-200'
              }`}
          >
            <span className="text-xs sm:text-sm font-medium text-center">{col.label}</span>
            <span className="text-projector-md font-extrabold">{col.digit}</span>
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
        </motion.div>
      )}
    </div>
  )
}

export default PlaceValueChart
