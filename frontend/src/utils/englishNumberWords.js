export const ONES = [
  '', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine',
  'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen',
  'seventeen', 'eighteen', 'nineteen',
]
export const TENS = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety']

export function twoDigitsToWords(n) {
  if (n === 0) return ''
  if (n < 20) return ONES[n]
  const tens = Math.floor(n / 10)
  const ones = n % 10
  return ones ? `${TENS[tens]}-${ONES[ones]}` : TENS[tens]
}

export function threeDigitsToWords(n) {
  const hundred = Math.floor(n / 100)
  const rest = n % 100
  const parts = []
  if (hundred) parts.push(`${ONES[hundred]} hundred`)
  if (rest) parts.push(twoDigitsToWords(rest))
  return parts.join(' ')
}
