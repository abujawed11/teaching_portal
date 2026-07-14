const ONES = [
  '', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine',
  'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen',
  'seventeen', 'eighteen', 'nineteen',
]
const TENS = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety']

function twoDigitsToWords(n) {
  if (n === 0) return ''
  if (n < 20) return ONES[n]
  const tens = Math.floor(n / 10)
  const ones = n % 10
  return ones ? `${TENS[tens]}-${ONES[ones]}` : TENS[tens]
}

function threeDigitsToWords(n) {
  const hundred = Math.floor(n / 100)
  const rest = n % 100
  const parts = []
  if (hundred) parts.push(`${ONES[hundred]} hundred`)
  if (rest) parts.push(twoDigitsToWords(rest))
  return parts.join(' ')
}

// Returns ordered phrase parts, e.g. ["Seven crore", "forty-five lakh", "thirty-two thousand", "six hundred eighteen"]
export function getIndianWordParts(number) {
  let remaining = number
  const crore = Math.floor(remaining / 1e7)
  remaining %= 1e7
  const lakh = Math.floor(remaining / 1e5)
  remaining %= 1e5
  const thousand = Math.floor(remaining / 1e3)
  remaining %= 1e3
  const rest = remaining

  const parts = []
  if (crore) parts.push(`${twoDigitsToWords(crore)} crore`)
  if (lakh) parts.push(`${twoDigitsToWords(lakh)} lakh`)
  if (thousand) parts.push(`${twoDigitsToWords(thousand)} thousand`)
  if (rest) parts.push(threeDigitsToWords(rest))

  if (parts.length === 0) return ['zero']

  parts[0] = parts[0].charAt(0).toUpperCase() + parts[0].slice(1)
  return parts
}

export function numberToIndianWords(number) {
  return getIndianWordParts(number).join(' ')
}
