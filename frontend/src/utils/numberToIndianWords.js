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

// Returns ordered phrase parts tagged with their comma-group,
// e.g. [{text: "Seven crore", group: "crore"}, {text: "forty-five lakh", group: "lakh"}, ...]
export function getIndianWordPartsTagged(number) {
  let remaining = number
  const crore = Math.floor(remaining / 1e7)
  remaining %= 1e7
  const lakh = Math.floor(remaining / 1e5)
  remaining %= 1e5
  const thousand = Math.floor(remaining / 1e3)
  remaining %= 1e3
  const rest = remaining

  const parts = []
  if (crore) parts.push({ text: `${twoDigitsToWords(crore)} crore`, group: 'crore' })
  if (lakh) parts.push({ text: `${twoDigitsToWords(lakh)} lakh`, group: 'lakh' })
  if (thousand) parts.push({ text: `${twoDigitsToWords(thousand)} thousand`, group: 'thousand' })
  if (rest) parts.push({ text: threeDigitsToWords(rest), group: 'ones' })

  if (parts.length === 0) return [{ text: 'zero', group: 'ones' }]

  parts[0] = { ...parts[0], text: parts[0].text.charAt(0).toUpperCase() + parts[0].text.slice(1) }
  return parts
}

export function getIndianWordParts(number) {
  return getIndianWordPartsTagged(number).map((part) => part.text)
}

export function numberToIndianWords(number) {
  return getIndianWordParts(number).join(' ')
}
