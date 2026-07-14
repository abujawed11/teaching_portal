import { useState } from 'react'
import { RefreshCw } from 'lucide-react'
import { groupForGroupIndex, GROUP_COLORS } from '../../utils/internationalGroupColors.js'
import InternationalGroupLegend from './InternationalGroupLegend.jsx'

// International grouping: groups of 3 digits from the right. Returns groups left to right.
function getGroups(number) {
  const groups = []
  let rest = String(number)

  while (rest.length > 3) {
    groups.unshift(rest.slice(-3))
    rest = rest.slice(0, -3)
  }
  if (rest.length > 0) groups.unshift(rest)

  return groups
}

// Returns segments to render, e.g. [{text: "74", group: null}, {text: "532", group: "thousand"}, {text: "618", group: "ones"}]
function buildSegments(groups, revealedFromRight) {
  const totalCommas = groups.length - 1
  const hideCount = totalCommas - revealedFromRight

  if (hideCount <= 0) {
    return groups.map((text, i) => ({ text, group: groupForGroupIndex(i, groups.length) }))
  }

  const mergedText = groups.slice(0, hideCount + 1).join('')
  const shownGroups = groups
    .slice(hideCount + 1)
    .map((text, i) => ({ text, group: groupForGroupIndex(hideCount + 1 + i, groups.length) }))

  return [{ text: mergedText, group: null }, ...shownGroups]
}

function InternationalCommaReveal({ number = 74532618 }) {
  const groups = getGroups(number)
  const totalCommas = groups.length - 1
  const [revealed, setRevealed] = useState(0)

  const revealNext = () => setRevealed((r) => Math.min(totalCommas, r + 1))
  const reset = () => setRevealed(0)

  return (
    <div className="flex flex-col items-center gap-8 w-full">
      <p className="text-projector-lg font-extrabold tabular-nums">
        {buildSegments(groups, revealed).map((segment, i, arr) => (
          <span key={i}>
            <span className={segment.group ? GROUP_COLORS[segment.group].text : 'text-ink'}>
              {segment.text}
            </span>
            {i < arr.length - 1 && <span className="text-ink">,</span>}
          </span>
        ))}
      </p>

      <InternationalGroupLegend />

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

export default InternationalCommaReveal
