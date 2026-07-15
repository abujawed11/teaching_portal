export const numberLineLesson = {
  id: 'number-line',
  title: 'Number Line',
  steps: [
    {
      type: 'intro',
      title: 'The Number Line',
      text: 'A number line is a straight line where every point stands for a number — smaller numbers are on the left, larger numbers are on the right.',
    },
    {
      type: 'text',
      title: 'Position Tells Us Size',
      text: 'If a number is to the right of another number on the line, it is greater. If it is to the left, it is smaller.',
    },
    {
      type: 'visual',
      component: 'NumberLinePosition',
      title: 'Plot the Numbers',
    },
    {
      type: 'text',
      title: 'Addition and Subtraction as Movement',
      text: 'Adding a number means moving that many steps to the right (forward). Subtracting a number means moving that many steps to the left (backward).',
    },
    {
      type: 'visual',
      component: 'NumberLineJump',
      title: 'Watch the Jumps',
    },
    {
      type: 'text',
      title: 'Trick: Count the Gaps, Not the Ticks',
      text: 'When counting jumps on a number line, count the gaps between the numbers, not the tick marks themselves — it is easy to miscount by one if you count marks instead of steps.',
    },
    {
      type: 'visual',
      component: 'CustomNumberLineJump',
      title: 'Try Your Own Jump',
    },
    {
      type: 'question',
      question: 'On a number line, is 8 to the left or right of 3?',
      answer: 'To the right',
      explanation: '8 is greater than 3, so it sits to the right of 3 on the number line.',
    },
    {
      type: 'question',
      question: 'Start at 6 and move 5 steps forward. Where do you land?',
      answer: '11',
      explanation: 'Moving forward means adding: 6 + 5 = 11.',
    },
    {
      type: 'question',
      question: 'Start at 10 and move 4 steps backward. Where do you land?',
      answer: '6',
      explanation: 'Moving backward means subtracting: 10 − 4 = 6.',
    },
    {
      type: 'question',
      question: 'Which is smaller: the number 2 jumps to the left of 9, or the number 2 jumps to the right of 9?',
      answer: 'The number 2 jumps to the left of 9 (which is 7)',
      explanation: 'Moving left means subtracting, so 2 jumps left of 9 is 7 — smaller than 9. Moving right (11) would be larger.',
    },
    {
      type: 'summary',
      title: 'Summary',
      points: [
        'Numbers to the right are greater; numbers to the left are smaller',
        'Adding moves forward (right); subtracting moves backward (left)',
        'Count the gaps between numbers, not the tick marks',
        'The number line connects position, comparison, and arithmetic together',
      ],
    },
  ],
}
