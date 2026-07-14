export const GROUP_ORDER = ['million', 'thousand', 'ones']

export const GROUP_LABELS = {
  million: 'Million',
  thousand: 'Thousand',
  ones: 'Ones',
}

export const GROUP_COLORS = {
  million: { chip: 'bg-amber-100 text-amber-900 hover:bg-amber-200', text: 'text-amber-700', dot: 'bg-amber-400' },
  thousand: { chip: 'bg-violet-100 text-violet-900 hover:bg-violet-200', text: 'text-violet-700', dot: 'bg-violet-400' },
  ones: { chip: 'bg-emerald-100 text-emerald-900 hover:bg-emerald-200', text: 'text-emerald-700', dot: 'bg-emerald-400' },
}

// For the 9-column International place-value chart (Hundred Million..One), by column index.
export function groupForColumnIndex(i) {
  if (i <= 2) return 'million'
  if (i <= 5) return 'thousand'
  return 'ones'
}

// For a left-to-right comma-grouped digit array (all groups of 3) of length k, by group index (0 = leftmost).
export function groupForGroupIndex(index, totalGroups) {
  const distanceFromRight = totalGroups - 1 - index
  if (distanceFromRight === 0) return 'ones'
  if (distanceFromRight === 1) return 'thousand'
  return 'million'
}
