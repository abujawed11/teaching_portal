export const roundingNumbersLesson = {
  id: 'rounding-numbers',
  title: 'Rounding Numbers',
  steps: [
    {
      type: 'intro',
      title: 'Rounding Numbers',
      text: 'Rounding replaces a number with a nearby "friendly" number — the nearest ten, hundred, or thousand — to make it easier to work with or estimate.',
    },
    {
      type: 'text',
      title: 'How Do We Round?',
      text: 'Find the two nearest "friendly" numbers on either side, then check which one the number is closer to. If it is exactly in the middle, we round up.',
    },
    {
      type: 'visual',
      component: 'RoundingNumberLine',
      title: 'Watch It Get Rounded',
    },
    {
      type: 'text',
      title: 'Trick: Just Look at One Digit',
      text: 'You don\'t need the whole number line every time. Look at the digit right after the place you\'re rounding to — 5 or more means round up, less than 5 means round down.',
    },
    {
      type: 'visual',
      component: 'CustomRounding',
      title: 'Try Your Own Number',
    },
    {
      type: 'question',
      question: 'Round 3,176 to the nearest hundred.',
      answer: '3,200',
      explanation: 'The digit after the Hundreds place is the Tens digit, 7. Since 7 is 5 or more, round up: 3,100 becomes 3,200.',
    },
    {
      type: 'question',
      question: 'Round 4,017 to the nearest thousand.',
      answer: '4,000',
      explanation: 'The digit after the Thousands place is the Hundreds digit, 0. Since 0 is less than 5, round down: stays at 4,000.',
    },
    {
      type: 'question',
      question: 'Round 8,203 to the nearest ten.',
      answer: '8,200',
      explanation: 'The digit after the Tens place is the Ones digit, 3. Since 3 is less than 5, round down to 8,200.',
    },
    {
      type: 'question',
      question: 'A shop had 6,999 rupees in sales. Round this to the nearest thousand to estimate quickly.',
      answer: '7,000',
      explanation: 'The Hundreds digit is 9, which is 5 or more, so round up: 6,999 rounds to 7,000.',
    },
    {
      type: 'summary',
      title: 'Summary',
      points: [
        'Rounding finds the nearest "friendly" ten, hundred, or thousand',
        'Compare distances to the lower and upper friendly numbers',
        'Look at the one digit right after the rounding place: 5 or more rounds up',
        'Exactly halfway always rounds up',
      ],
    },
  ],
}
