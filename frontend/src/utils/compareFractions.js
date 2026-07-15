export function compareFractions(numeratorA, denominatorA, numeratorB, denominatorB) {
  const left = numeratorA * denominatorB
  const right = numeratorB * denominatorA
  if (left === right) return '='
  return left > right ? '>' : '<'
}

export function detectStrategy(numeratorA, denominatorA, numeratorB, denominatorB) {
  if (denominatorA === denominatorB) return 'same-denominator'
  if (numeratorA === numeratorB) return 'same-numerator'
  const aVsOne = numeratorA === denominatorA ? '=' : numeratorA > denominatorA ? '>' : '<'
  const bVsOne = numeratorB === denominatorB ? '=' : numeratorB > denominatorB ? '>' : '<'
  if (aVsOne !== bVsOne) return 'reference-to-1'
  const aVsHalf = numeratorA * 2 === denominatorA ? '=' : numeratorA * 2 > denominatorA ? '>' : '<'
  const bVsHalf = numeratorB * 2 === denominatorB ? '=' : numeratorB * 2 > denominatorB ? '>' : '<'
  if (aVsHalf !== bVsHalf) return 'reference-to-half'
  return 'cross-multiply'
}
