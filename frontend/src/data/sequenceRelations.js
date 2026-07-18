export const sequenceRelationsLesson = {
  id: 'sequence-relations',
  title: 'Relations Among Sequences',
  steps: [
    {
      type: 'intro',
      title: 'Relations Among Number Sequences',
      text: 'Sometimes, number sequences are related to each other in surprising ways. Let’s discover one of the most beautiful relationships in mathematics.',
    },
    {
      type: 'example',
      title: 'What Happens When We Add Up Odd Numbers?',
      solution: '1 = 1\n1 + 3 = 4\n1 + 3 + 5 = 9\n1 + 3 + 5 + 7 = 16\n1 + 3 + 5 + 7 + 9 = 25\n\nThis is a really beautiful pattern!',
    },
    {
      type: 'question',
      question: 'Why does this happen? Do you think it will happen forever?',
      answer: 'Yes — it happens forever! The sum of consecutive odd numbers, starting from 1, is always a perfect square.',
      explanation: "But why? Let's see it with a picture, not just believe it.",
    },
    {
      type: 'visual',
      component: 'OddSquareBuilder',
      title: 'A Picture Can Explain It',
      props: { maxN: 6 },
    },
    {
      type: 'example',
      title: 'Why It Works: Watch 9 Dots Grow into 16',
      problem: 'When the square grows from 3×3 (9 dots) to 4×4 (16 dots), where do the extra dots come from?',
      solution:
        '16 − 9 = 7 new dots. And 7 is the 4th odd number!\n\nHere is exactly where they go:\n• 3 new dots in a column on the right (as tall as the old square)\n• 3 new dots in a row on top (as wide as the old square)\n• 1 more dot in the corner where that row and column meet\n\n3 + 3 + 1 = 7',
    },
    {
      type: 'text',
      title: 'The Pattern Continues Forever',
      text: 'No matter how big the square gets, growing it by one more row and one more column always adds a new column, a new row of the same size, and one corner dot. That total is always odd — and it is always the very next odd number in the list. That is why adding up odd numbers, one after another, keeps building perfect squares forever.',
    },
    {
      type: 'question',
      question: 'By imagining a similar picture, what is the sum of the first 10 odd numbers?',
      answer: '100',
      explanation: 'The first 10 odd numbers build a 10×10 square, and 10 × 10 = 100.',
    },
    {
      type: 'question',
      question: 'Now, what is the sum of the first 100 odd numbers?',
      answer: '10,000',
      explanation: 'The first 100 odd numbers build a 100×100 square, and 100 × 100 = 10,000.',
    },
    {
      type: 'summary',
      title: 'Summary',
      points: [
        'Adding up consecutive odd numbers, starting from 1, always gives a perfect square.',
        'The sum of the first n odd numbers = n².',
        'The picture proof: each new odd number is an L-shaped band (a new row, a new column, and one corner dot) that grows the square by one more step.',
        'This shows why mathematics cares about explanations, not just patterns — the picture proves the rule works forever.',
      ],
    },
  ],
}
