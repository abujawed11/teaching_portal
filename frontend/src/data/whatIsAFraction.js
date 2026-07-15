export const whatIsAFractionLesson = {
  id: 'what-is-a-fraction',
  title: 'What is a Fraction?',
  steps: [
    {
      type: 'intro',
      title: 'What is a Fraction?',
      text: 'A fraction shows a part of a whole that has been divided into equal parts — like a chocolate bar broken into equal pieces, or a pizza cut into slices.',
      illustration: 'PizzaFractionIllustration',
      illustrationProps: { numerator: 3, denominator: 4 },
    },
    {
      type: 'text',
      title: 'Numerator and Denominator',
      text: 'A fraction is written as one number over another. The bottom number (denominator) tells us how many equal parts the whole is divided into. The top number (numerator) tells us how many of those parts we are talking about.',
    },
    {
      type: 'visual',
      component: 'FractionVisual',
      title: 'Shade the Parts',
    },
    {
      type: 'text',
      title: 'Why "Equal" Parts Matter',
      text: 'The parts must all be the same size for a fraction to make sense. If a bar is cut into pieces of different sizes, we can\'t call one piece "one-fourth" just because there are 4 pieces.',
    },
    {
      type: 'visual',
      component: 'CustomFractionVisual',
      title: 'Try Your Own Fraction',
    },
    {
      type: 'question',
      question: 'A pizza is cut into 4 equal slices. You eat 3 slices. What fraction of the pizza did you eat?',
      answer: '3/4',
      explanation: 'The whole was divided into 4 equal parts (denominator), and 3 of them were eaten (numerator): 3/4.',
    },
    {
      type: 'question',
      question: 'In the fraction 5/8, what does the 8 tell us?',
      answer: 'The whole is divided into 8 equal parts',
      explanation: 'The bottom number (denominator) always tells us the total number of equal parts the whole is divided into.',
    },
    {
      type: 'question',
      question: 'In the fraction 5/8, what does the 5 tell us?',
      answer: '5 of those 8 equal parts are being counted',
      explanation: 'The top number (numerator) tells us how many of the equal parts we have or are counting.',
    },
    {
      type: 'question',
      question: 'A bar is divided into 6 equal parts, and 2 of them are shaded. Write this as a fraction.',
      answer: '2/6',
      explanation: '6 equal parts total (denominator), 2 shaded (numerator): 2/6.',
    },
    {
      type: 'summary',
      title: 'Summary',
      points: [
        'A fraction shows a part of a whole divided into equal parts',
        'Denominator (bottom number) = total equal parts',
        'Numerator (top number) = how many parts we have',
        'The parts must be equal in size for the fraction to make sense',
      ],
    },
  ],
}
