export const fractionsGreaterThanOneLesson = {
  id: 'fractions-greater-than-one',
  title: 'Fractions Greater Than 1',
  steps: [
    {
      type: 'intro',
      title: 'Fractions Greater Than 1',
      text: 'Sometimes we have more equal pieces than fit into one whole — like 5 pieces of half a paratha, which is more than one whole paratha.',
    },
    {
      type: 'text',
      title: 'Building Up Wholes',
      text: 'When enough same-size pieces are put together, they make a whole. Any extra pieces left over are the fraction part.',
    },
    {
      type: 'visual',
      component: 'MixedNumberReveal',
      title: 'Maa\'s Parathas',
      props: { denominator: 2, numerator: 5, itemName: 'paratha' },
    },
    {
      type: 'text',
      title: 'Reading it as a Mixed Number',
      text: 'A fraction greater than 1, like 5/2, can be written as a whole number plus a smaller fraction: 5/2 = 2 + 1/2 = 2 1/2. This is called a mixed number.',
    },
    {
      type: 'visual',
      component: 'MixedNumberLine',
      title: 'Placing It on the Number Line',
      props: { denominator: 2, numerator: 5 },
    },
    {
      type: 'example',
      title: 'Worked Example: Fourths',
      problem: 'Dadaji ate 9 pieces of 1/4 paratha. How many parathas did he eat?',
      solution: '9 pieces of 1/4 = 9/4. Dividing into groups of 4: 8 pieces make 2 wholes, with 1 piece left over. So 9/4 = 2 1/4 parathas.',
    },
    {
      type: 'text',
      title: 'Trick: Divide to Convert Quickly',
      text: 'To turn an improper fraction into a mixed number, just divide the numerator by the denominator. The quotient is the whole number part, and the remainder becomes the new numerator (denominator stays the same). For 9/4: 9 ÷ 4 = 2 remainder 1, so 9/4 = 2 1/4.',
    },
    {
      type: 'text',
      title: 'Going Back: Mixed Number to Improper Fraction',
      text: 'To reverse the process, multiply the whole number by the denominator, then add the numerator — that becomes the new numerator, over the same denominator. For 2 1/4: 2 × 4 + 1 = 9, so 2 1/4 = 9/4.',
    },
    {
      type: 'visual',
      component: 'CustomMixedNumber',
      title: 'Try Your Own Fraction',
    },
    {
      type: 'question',
      question: 'Radhika took 6 pieces of 1/2 paratha. How many parathas did she eat?',
      answer: '3',
      explanation: '6 pieces of 1/2 = 6/2. Dividing: 6 ÷ 2 = 3 with no remainder, so she ate exactly 3 parathas.',
    },
    {
      type: 'question',
      question: 'Dadiji had 7 pieces of 1/2 paratha. How many parathas did she eat?',
      answer: '3 1/2',
      explanation: '7 pieces of 1/2 = 7/2. Dividing: 7 ÷ 2 = 3 remainder 1, so 7/2 = 3 1/2 parathas.',
    },
    {
      type: 'question',
      question: 'A family shared pizzas cut into thirds. Raman ended up with 4 slices of 1/3. How much pizza does he have?',
      answer: '1 1/3',
      explanation: '4 pieces of 1/3 = 4/3. Dividing: 4 ÷ 3 = 1 remainder 1, so 4/3 = 1 1/3 pizzas.',
    },
    {
      type: 'question',
      question: 'Is 9/4 greater than 1 whole? How do you know without converting it?',
      answer: 'Yes',
      explanation: 'The numerator (9) is bigger than the denominator (4), so the fraction is greater than 1.',
    },
    {
      type: 'question',
      question: 'Convert 11/4 to a mixed number.',
      answer: '2 3/4',
      explanation: '11 ÷ 4 = 2 remainder 3, so 11/4 = 2 3/4.',
    },
    {
      type: 'question',
      question: 'Convert the mixed number 1 2/3 back into an improper fraction.',
      answer: '5/3',
      explanation: 'Multiply the whole number by the denominator and add the numerator: 1 × 3 + 2 = 5, so 1 2/3 = 5/3.',
    },
    {
      type: 'summary',
      title: 'Summary',
      points: [
        'A fraction is greater than 1 when the numerator is bigger than the denominator',
        'Group pieces into complete wholes; leftover pieces become the fraction part',
        'A mixed number is a whole number plus a fraction, like 2 1/2',
        'Divide the numerator by the denominator: quotient = whole part, remainder = new numerator',
        'To reverse it: multiply the whole number by the denominator, then add the numerator',
      ],
    },
  ],
}
