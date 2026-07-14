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
      type: 'text',
      title: 'What is Face Value?',
      text: 'Face Value is just the digit itself — it never changes, no matter where the digit is written.',
    },
    {
      type: 'visual',
      component: 'PlaceValueChart',
    },
    {
      type: 'text',
      title: 'What is Expanded Form?',
      text: 'Expanded Form breaks a number into the sum of its place values. Writing it back together the normal way is called Standard Form.',
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
      explanation: '5 is in the Thousands place, so its place value is 5 × 1,000 = 5,000.',
    },
    {
      type: 'question',
      question: 'What is the face value of 6 in 45,672?',
      answer: '6',
      explanation: 'Face value is just the digit itself, no matter where it is written.',
    },
    {
      type: 'question',
      question: 'Write 45,672 in expanded form.',
      answer: '40,000 + 5,000 + 600 + 70 + 2',
      explanation: 'Each digit is multiplied by its place value, then added together.',
    },
    {
      type: 'question',
      question: 'Which number is 40,000 + 5,000 + 600 + 70 + 2?',
      answer: '45,672',
      explanation: 'Adding the parts by place: 40,000 + 5,000 + 600 + 70 + 2 = 45,672.',
    },
    {
      type: 'summary',
      title: 'Summary',
      points: ['Digit', 'Place', 'Face Value', 'Place Value', 'Expanded Form'],
    },
  ],
}
