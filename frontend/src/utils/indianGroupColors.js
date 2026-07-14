export const GROUP_ORDER = ['crore', 'lakh', 'thousand', 'ones']

export const GROUP_LABELS = {
  crore: 'Crore',
  lakh: 'Lakh',
  thousand: 'Thousand',
  ones: 'Ones',
}

export const GROUP_COLORS = {
  crore: { chip: 'bg-amber-100 text-amber-900 hover:bg-amber-200', text: 'text-amber-700', dot: 'bg-amber-400' },
  lakh: { chip: 'bg-violet-100 text-violet-900 hover:bg-violet-200', text: 'text-violet-700', dot: 'bg-violet-400' },
  thousand: { chip: 'bg-emerald-100 text-emerald-900 hover:bg-emerald-200', text: 'text-emerald-700', dot: 'bg-emerald-400' },
  ones: { chip: 'bg-sky-100 text-sky-900 hover:bg-sky-200', text: 'text-sky-700', dot: 'bg-sky-400' },
}

// For the 9-column Indian place-value chart (Ten Crore..One), by column index.
export function groupForColumnIndex(i) {
  if (i <= 1) return 'crore'
  if (i <= 3) return 'lakh'
  if (i <= 5) return 'thousand'
  return 'ones'
}

// For a left-to-right comma-grouped digit array of length k, by group index (0 = leftmost).
export function groupForGroupIndex(index, totalGroups) {
  const distanceFromRight = totalGroups - 1 - index
  if (distanceFromRight === 0) return 'ones'
  if (distanceFromRight === 1) return 'thousand'
  if (distanceFromRight === 2) return 'lakh'
  return 'crore'
}
