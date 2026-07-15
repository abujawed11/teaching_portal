export const PLACE_NAMES_FROM_ONES = [
  'Ones',
  'Tens',
  'Hundreds',
  'Thousands',
  'Ten Thousands',
  'Lakhs',
  'Ten Lakhs',
  'Crores',
  'Ten Crores',
]

export function placeNameAt(index, length) {
  const fromRight = length - 1 - index
  return PLACE_NAMES_FROM_ONES[fromRight] ?? `Place ${fromRight + 1}`
}

export function compareNumbers(a, b) {
  const strA = String(a)
  const strB = String(b)

  if (strA.length !== strB.length) {
    return {
      symbol: strA.length > strB.length ? '>' : '<',
      reason: 'digit-count',
      diffIndex: null,
    }
  }

  for (let i = 0; i < strA.length; i++) {
    if (strA[i] !== strB[i]) {
      return { symbol: strA[i] > strB[i] ? '>' : '<', reason: 'place', diffIndex: i }
    }
  }

  return { symbol: '=', reason: 'equal', diffIndex: null }
}
