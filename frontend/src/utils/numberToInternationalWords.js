import { threeDigitsToWords } from './englishNumberWords.js'

// Returns ordered phrase parts tagged with their comma-group,
// e.g. [{text: "Seventy-four million", group: "million"}, {text: "five hundred thirty-two thousand", group: "thousand"}, ...]
export function getInternationalWordPartsTagged(number) {
  let remaining = number
  const million = Math.floor(remaining / 1e6)
  remaining %= 1e6
  const thousand = Math.floor(remaining / 1e3)
  remaining %= 1e3
  const rest = remaining

  const parts = []
  if (million) parts.push({ text: `${threeDigitsToWords(million)} million`, group: 'million' })
  if (thousand) parts.push({ text: `${threeDigitsToWords(thousand)} thousand`, group: 'thousand' })
  if (rest) parts.push({ text: threeDigitsToWords(rest), group: 'ones' })

  if (parts.length === 0) return [{ text: 'zero', group: 'ones' }]

  parts[0] = { ...parts[0], text: parts[0].text.charAt(0).toUpperCase() + parts[0].text.slice(1) }
  return parts
}

export function getInternationalWordParts(number) {
  return getInternationalWordPartsTagged(number).map((part) => part.text)
}

export function numberToInternationalWords(number) {
  return getInternationalWordParts(number).join(' ')
}
