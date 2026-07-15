export const equivalentFractionsLesson = {
  id: 'equivalent-fractions',
  title: 'Equivalent Fractions',
  steps: [
    {
      type: 'intro',
      title: 'Equivalent Fractions',
      text: 'Equivalent fractions look different but stand for exactly the same amount — like 1/2 and 2/4 both meaning "half".',
    },
    {
      type: 'text',
      title: 'Fitting Smaller Pieces Into Bigger Ones',
      text: 'Imagine breaking 1/3 of a bar into sixths. How many 1/6 pieces fit exactly into 1/3? Since 1/3 = 2/6, it takes exactly 2 pieces of 1/6 to make up 1/3.',
    },
    {
      type: 'example',
      title: 'Worked Example',
      problem: 'How many 1/8 pieces fit into 1/4?',
      solution: '1/4 = 2/8, so it takes exactly 2 pieces of 1/8 to make up 1/4.',
    },
    {
      type: 'text',
      title: 'The Rule: Multiply Top and Bottom by the Same Number',
      text: 'If you multiply both the numerator and the denominator by the same number, the fraction\'s value does not change — you are just splitting each part into more, smaller equal pieces.',
    },
    {
      type: 'visual',
      component: 'EquivalentFractionsReveal',
      title: 'Watch the Parts Split',
    },
    {
      type: 'text',
      title: 'Trick: Cross-Multiply to Check',
      text: 'To check if two fractions are equivalent, cross-multiply: multiply the first numerator by the second denominator, and the second numerator by the first denominator. If both answers match, the fractions are equivalent.',
    },
    {
      type: 'example',
      title: 'Worked Example',
      problem: 'Are 2/3 and 6/9 equivalent?',
      solution: 'Cross-multiply: 2 × 9 = 18, and 3 × 6 = 18. Both equal 18, so 2/3 = 6/9.',
    },
    {
      type: 'visual',
      component: 'CustomEquivalentFractions',
      title: 'Try Your Own Fraction',
    },
    {
      type: 'question',
      question: 'How many 1/12 pieces fit into 1/3?',
      answer: '4',
      explanation: '1/3 = 4/12, so it takes exactly 4 pieces of 1/12 to make up 1/3.',
    },
    {
      type: 'question',
      question: 'How many 1/6 pieces fit into 1/2?',
      answer: '3',
      explanation: '1/2 = 3/6, so it takes exactly 3 pieces of 1/6 to make up 1/2.',
    },
    {
      type: 'question',
      question: 'Is 3/4 equivalent to 6/8? Use cross-multiplication to check.',
      answer: 'Yes',
      explanation: '3 × 8 = 24, and 4 × 6 = 24. Both equal 24, so 3/4 = 6/8.',
    },
    {
      type: 'question',
      question: 'Find an equivalent fraction for 2/5 by multiplying top and bottom by 3.',
      answer: '6/15',
      explanation: '2 × 3 = 6, and 5 × 3 = 15, so 2/5 = 6/15.',
    },
    {
      type: 'question',
      question: 'Is 5/6 equivalent to 7/9? Use cross-multiplication to check.',
      answer: 'No',
      explanation: '5 × 9 = 45, but 6 × 7 = 42. Since 45 ≠ 42, the fractions are not equivalent.',
    },
    {
      type: 'question',
      question: '3/6 can be simplified by dividing top and bottom by the same number. What is the simplest form?',
      answer: '1/2',
      explanation: 'Dividing both 3 and 6 by 3 gives 1/2 — simplifying is just the reverse of finding an equivalent fraction.',
    },
    {
      type: 'summary',
      title: 'Summary',
      points: [
        'Equivalent fractions represent the same amount, written differently',
        'Multiplying top and bottom by the same number keeps the value the same',
        'Cross-multiply to check if two fractions are equivalent',
        'Simplifying a fraction is dividing top and bottom by the same number',
      ],
    },
  ],
}
