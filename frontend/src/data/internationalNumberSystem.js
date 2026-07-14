export const internationalNumberSystemLesson = {
  id: 'international-number-system',
  title: 'International Number System',
  steps: [
    {
      type: 'intro',
      title: 'The International Number System',
      text: 'Many countries group large numbers as Ones, Thousands, and Millions — with commas placed every 3 digits.',
    },
    {
      type: 'visual',
      component: 'InternationalPlaceValueChart',
    },
    {
      type: 'text',
      title: 'Placing the Commas',
      text: 'In the International system, every group has 3 digits — Ones, Thousands, and Millions.',
    },
    {
      type: 'visual',
      component: 'InternationalCommaReveal',
    },
    {
      type: 'text',
      title: 'Reading the Number',
      text: 'Once commas are placed, each group has its own name: million, thousand, and the last three digits are read as hundreds.',
    },
    {
      type: 'visual',
      component: 'InternationalNumberNameReveal',
    },
    {
      type: 'text',
      title: 'Indian vs. International',
      text: 'The same number can be written two different ways, depending on where the commas go.',
    },
    {
      type: 'visual',
      component: 'IndianVsInternationalComparison',
    },
    {
      type: 'visual',
      component: 'InternationalNumberConverter',
      title: 'Try Your Own Number',
    },
    {
      type: 'question',
      question: 'Insert commas correctly (International system): 5321789',
      answer: '5,321,789',
      explanation: 'International grouping is always 3 digits: 5,321,789.',
    },
    {
      type: 'question',
      question: 'Write the International number name of 2,045,000.',
      answer: 'Two million forty-five thousand',
      explanation: 'Read each group by its name: million, thousand.',
    },
    {
      type: 'question',
      question: 'Write 6,012,040 in the Indian system (with correct commas).',
      answer: '60,12,040',
      explanation: 'Regroup from the right: 3 digits, then groups of 2: 60,12,040.',
    },
    {
      type: 'question',
      question: 'In the International system, what comes after Thousand?',
      answer: 'Million',
      explanation: 'International groups are: Ones, Thousands, Millions — each group of 3 digits.',
    },
    {
      type: 'summary',
      title: 'Summary',
      points: [
        'International commas: groups of 3',
        'Groups: Ones, Thousands, Millions',
        'Number Name',
        'Indian vs. International comparison',
      ],
    },
  ],
}
