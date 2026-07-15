export const ascendingDescendingOrderLesson = {
  id: 'ascending-descending-order',
  title: 'Ascending and Descending Order',
  steps: [
    {
      type: 'intro',
      title: 'Ascending and Descending Order',
      text: 'Ascending order means smallest to largest. Descending order means largest to smallest.',
    },
    {
      type: 'text',
      title: 'How Do We Arrange Numbers?',
      text: 'We use the same comparing skills we already know — check digit count first, then compare place by place — to decide which number comes next.',
    },
    {
      type: 'visual',
      component: 'NumberOrderReveal',
      title: 'Watch the Numbers Get Sorted',
    },
    {
      type: 'text',
      title: 'Trick: Sort in One Pass',
      text: 'You don\'t need to compare every pair of numbers. Just repeatedly pick the smallest (or largest) number left over — that\'s enough to build the full order, one step at a time.',
    },
    {
      type: 'visual',
      component: 'CustomNumberOrder',
      title: 'Try Your Own Numbers',
    },
    {
      type: 'question',
      question: 'Arrange in ascending order: 7,845 | 784 | 78,450',
      answer: '784, 7,845, 78,450',
      explanation: 'Fewer digits means a smaller number: 784 (3 digits) < 7,845 (4 digits) < 78,450 (5 digits).',
    },
    {
      type: 'question',
      question: 'Arrange in descending order: 32,145 | 32,415 | 32,154',
      answer: '32,415, 32,154, 32,145',
      explanation: 'All three have 5 digits and start with 32. Comparing the Hundreds place: 32,415 (4) > 32,154 (1) = 32,145 (1). Then comparing Tens: 32,154 (5) > 32,145 (4).',
    },
    {
      type: 'question',
      question: 'Which number is the smallest: 9,999 or 10,001 or 999?',
      answer: '999',
      explanation: '999 has only 3 digits — the fewest — so it is the smallest, even though its digits look "big".',
    },
    {
      type: 'question',
      question: 'Arrange these test scores in ascending order: 456, 445, 465',
      answer: '445, 456, 465',
      explanation: 'All have 3 digits and start with 4. Comparing the Tens place: 445 (4) < 456 (5) < 465 (6).',
    },
    {
      type: 'summary',
      title: 'Summary',
      points: [
        'Ascending order: smallest to largest',
        'Descending order: largest to smallest',
        'Compare digit count first, then place by place',
        'Repeatedly pick the smallest (or largest) remaining number',
      ],
    },
  ],
}
