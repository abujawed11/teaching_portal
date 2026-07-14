export const indianNumberSystemLesson = {
  id: 'indian-number-system',
  title: 'Indian Number System',
  steps: [
    {
      type: 'intro',
      title: 'The Indian Number System',
      text: 'In India, large numbers are grouped as Ones, Thousands, Lakhs, and Crores — with commas placed to separate each group.',
    },
    {
      type: 'visual',
      component: 'IndianPlaceValueChart',
    },
    {
      type: 'text',
      title: 'Placing the Commas',
      text: 'Commas group digits so big numbers are easy to read: the first group from the right has 3 digits, then every group after that has 2 digits.',
    },
    {
      type: 'visual',
      component: 'CommaPlacementReveal',
    },
    {
      type: 'text',
      title: 'Reading the Number',
      text: 'Once commas are placed, each group has its own name: crore, lakh, thousand, and the last three digits are read as hundreds.',
    },
    {
      type: 'visual',
      component: 'NumberNameReveal',
    },
    {
      type: 'visual',
      component: 'IndianNumberConverter',
      title: 'Try Your Own Number',
    },
    {
      type: 'question',
      question: 'Insert commas correctly: 5321789',
      answer: '53,21,789',
      explanation: 'First group the rightmost 3 digits, then group every 2 digits after that.',
    },
    {
      type: 'question',
      question: 'Write the number name of 2,04,500.',
      answer: 'Two lakh four thousand five hundred',
      explanation: 'Read each comma-separated group by its name: lakh, thousand, then the rest.',
    },
    {
      type: 'question',
      question: 'Write the numeral for: Six crore twelve thousand forty.',
      answer: '6,00,12,040',
      explanation: 'Six crore = 6,00,00,000. Add twelve thousand and forty: 6,00,12,040.',
    },
    {
      type: 'question',
      question: 'In 9,45,10,236 what is the place of the digit 5?',
      answer: 'Lakh',
      explanation: 'Counting the groups from the right: 236 (ones/tens/hundreds), 10 (thousand group), 45 (lakh group) — 5 is in the Lakh place.',
    },
    {
      type: 'summary',
      title: 'Summary',
      points: [
        'Commas: 3 digits, then groups of 2',
        'Groups: Ones, Thousands, Lakhs, Crores',
        'Number Name',
        'Numeral from Number Name',
      ],
    },
  ],
}
