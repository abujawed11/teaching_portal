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
  ],
}
