export const placeValueLesson = {
  id: 'place-value',
  title: 'Place Value',
  steps: [
    {
      type: 'intro',
      title: 'What is Place Value?',
      text: 'A digit gets its value from the place where it is written.',
    },
    {
      type: 'visual',
      component: 'PlaceValueChart',
    },
    {
      type: 'visual',
      component: 'ExpandedFormReveal',
      title: 'Expanded Form',
    },
    {
      type: 'example',
      title: 'Worked Example',
      problem: 'Find the place value of 8 in 38,451.',
      solution: 'Place: Thousands\nPlace Value: 8,000',
    },
    {
      type: 'visual',
      component: 'CustomNumberChart',
      title: 'Try Your Own Number',
    },
    {
      type: 'question',
      question: 'What is the place value of 5 in 45,672?',
      answer: '5,000',
    },
    {
      type: 'question',
      question: 'What is the face value of 6 in 45,672?',
      answer: '6',
    },
    {
      type: 'question',
      question: 'Write 45,672 in expanded form.',
      answer: '40,000 + 5,000 + 600 + 70 + 2',
    },
    {
      type: 'question',
      question: 'Which number is 40,000 + 5,000 + 600 + 70 + 2?',
      answer: '45,672',
    },
    {
      type: 'summary',
      title: 'Summary',
      points: ['Digit', 'Place', 'Face Value', 'Place Value', 'Expanded Form'],
    },
  ],
}
