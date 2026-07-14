import { useState } from 'react'
import { RefreshCw } from 'lucide-react'

// Indian grouping: rightmost group of 3 digits, then groups of 2. Returns groups left to right.
function getGroups(number) {
  const groups = []
  let rest = String(number)

  if (rest.length > 3) {
    groups.unshift(rest.slice(-3))
    rest = rest.slice(0, -3)
  } else {
    groups.unshift(rest)
    rest = ''
  }

  while (rest.length > 2) {
    groups.unshift(rest.slice(-2))
    rest = rest.slice(0, -2)
  }
  if (rest.length > 0) groups.unshift(rest)

  return groups
}

function formatWithReveal(groups, revealedFromRight) {
  const totalCommas = groups.length - 1
  const hideCount = totalCommas - revealedFromRight
  if (hideCount <= 0) return groups.join(',')

  const merged = groups.slice(0, hideCount + 1).join('')
  const shown = groups.slice(hideCount + 1)
  return [merged, ...shown].join(',')
}

function CommaPlacementReveal({ number = 74532618 }) {
  const groups = getGroups(number)
  const totalCommas = groups.length - 1
  const [revealed, setRevealed] = useState(0)

  const revealNext = () => setRevealed((r) => Math.min(totalCommas, r + 1))
  const reset = () => setRevealed(0)

  return (
    <div className="flex flex-col items-center gap-8 w-full">
      <p className="text-projector-lg font-extrabold text-primary tabular-nums">
        {formatWithReveal(groups, revealed)}
      </p>

      <div className="flex items-center gap-3">
        <button
          onClick={revealNext}
          disabled={revealed >= totalCommas}
          className="px-5 py-3 rounded-lg bg-primary text-white font-semibold hover:bg-primary-dark
            disabled:opacity-40 disabled:cursor-not-allowed"
        >
          Insert Next Comma
        </button>
        <button
          onClick={reset}
          aria-label="Reset comma placement"
          className="flex items-center gap-2 px-5 py-3 rounded-lg bg-slate-100 hover:bg-slate-200 font-semibold text-ink"
        >
          <RefreshCw size={20} /> Reset
        </button>
      </div>
    </div>
  )
}

export default CommaPlacementReveal
