export const comparingNumbersLesson = {
  id: 'comparing-numbers',
  title: 'Comparing Numbers',
  steps: [
    {
      type: 'intro',
      title: 'Comparing Numbers',
      text: 'We use ">", "<", and "=" to compare two numbers.',
    },
    {
      type: 'text',
      title: 'Step 1: Compare the Number of Digits',
      text: 'The number with more digits is always the bigger number. Example: 128 has 3 digits, 45 has 2 digits, so 128 > 45 — no need to look at the digits at all.',
    },
    {
      type: 'text',
      title: 'Step 2: What if Both Numbers Have the Same Number of Digits?',
      text: 'Then compare digit by digit, starting from the leftmost place (the highest place value). If those digits match, move one place to the right and compare again. The first place where the digits are different decides which number is greater.',
    },
    {
      type: 'visual',
      component: 'NumberComparisonReveal',
      title: 'Watch It Compared Step by Step',
    },
    {
      type: 'text',
      title: 'Trick: Spot the Bigger Number Fast',
      text: "Before comparing digit by digit, just count the digits first! A number with more digits is always bigger — no matter what those digits are. Example: 9,999 has 4 digits and 10,000 has 5 digits, so 10,000 is bigger even though every digit in 9,999 looks 'bigger'.",
    },
    {
      type: 'visual',
      component: 'CustomNumberComparison',
      title: 'Try Your Own Numbers',
    },
    {
      type: 'question',
      question: 'Compare using >, < or =: 38,451 ___ 38,415',
      answer: '38,451 > 38,415',
      explanation: 'Both have 5 digits and match up to the Tens place (38,4_ _). At the Tens place, 5 > 1, so 38,451 is greater.',
    },
    {
      type: 'question',
      question: 'Which is greater: 9,876 or 10,234?',
      answer: '10,234',
      explanation: '9,876 has 4 digits and 10,234 has 5 digits — the number with more digits is always greater.',
    },
    {
      type: 'question',
      question: 'Compare using >, < or =: 72,908 ___ 72,908',
      answer: '72,908 = 72,908',
      explanation: 'Every digit matches in every place, so the two numbers are equal.',
    },
    {
      type: 'question',
      question: 'Arrange in order: which is the smallest of 56,231, 56,213, and 56,321?',
      answer: '56,213',
      explanation: 'All three start with 56,2 or 56,3. Comparing place by place, 56,213 has the smallest digit (1) in the Tens place among the numbers that start with 56,2.',
    },
    {
      type: 'summary',
      title: 'Summary',
      points: [
        'Compare digit count first — more digits means a bigger number',
        'If digit counts are equal, compare place by place from the left',
        'The first place where digits differ decides the answer',
        'Use >, <, or = to show the comparison',
      ],
    },
  ],
}
