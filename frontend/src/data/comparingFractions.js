export const comparingFractionsLesson = {
  id: 'comparing-fractions',
  title: 'Comparing Fractions',
  steps: [
    {
      type: 'intro',
      title: 'Comparing Fractions',
      text: 'There are several ways to compare fractions, depending on what the two fractions have in common. Remember: fractions can only be compared fairly when they come from the same-sized whole.',
    },
    {
      type: 'text',
      title: 'Strategy 1: Same Denominator',
      text: 'If two fractions have the same denominator, just compare the numerators — the bigger numerator means more equal-sized pieces, so it is the greater fraction.',
    },
    {
      type: 'visual',
      component: 'FractionCompareVisual',
      title: 'Sevi and Shami Share a Chikki',
      props: { numeratorA: 2, denominatorA: 3, numeratorB: 1, denominatorB: 3, strategy: 'same-denominator' },
    },
    {
      type: 'text',
      title: 'Strategy 2: Same Numerator',
      text: 'If two fractions have the same numerator, compare the denominators instead — the smaller denominator means bigger pieces (since the whole is cut into fewer parts), so it is the greater fraction.',
    },
    {
      type: 'visual',
      component: 'FractionCompareVisual',
      title: 'Who Ate More Paratha?',
      props: { numeratorA: 4, denominatorA: 6, numeratorB: 4, denominatorB: 5, strategy: 'same-numerator' },
    },
    {
      type: 'text',
      title: 'Strategy 3: Compare with Reference to 1 (a Whole)',
      text: 'First, how do you know if a fraction is more than, equal to, or less than 1 whole? Just compare the numerator and denominator directly: if the numerator is bigger, the fraction is more than 1 (like 8/6 — 8 is bigger than 6). If they are equal, the fraction equals exactly 1 (like 6/6). If the numerator is smaller, the fraction is less than 1 (like 7/8 — 7 is smaller than 8).',
    },
    {
      type: 'text',
      title: 'Using 1 as a Reference Point',
      text: 'Once you know whether each fraction is under, equal to, or over 1, comparing them is easy: if one fraction is under 1 and the other is over 1, you already know which is greater — no further comparison needed.',
    },
    {
      type: 'visual',
      component: 'FractionCompareVisual',
      title: 'Sevi and Shami, Once More',
      props: { numeratorA: 7, denominatorA: 8, numeratorB: 8, denominatorB: 6, strategy: 'reference-to-1' },
    },
    {
      type: 'text',
      title: 'Strategy 4: Compare with Reference to 1/2',
      text: 'How do you know if a fraction is more than, equal to, or less than half? Double the numerator and compare it to the denominator: if double the numerator is bigger than the denominator, the fraction is more than half (like 5/8 — double 5 is 10, which is more than 8). If double the numerator equals the denominator, the fraction is exactly half (like 3/6 — double 3 is 6). If double the numerator is smaller, the fraction is less than half.',
    },
    {
      type: 'text',
      title: 'Using 1/2 as a Reference Point',
      text: 'Once you know whether each fraction is under, equal to, or over half, you can compare them the same way as with 1 — this works even when neither fraction is close to a whole number.',
    },
    {
      type: 'visual',
      component: 'FractionCompareVisual',
      title: 'Comparing with Half as a Benchmark',
      props: { numeratorA: 5, denominatorA: 8, numeratorB: 3, denominatorB: 6, strategy: 'reference-to-half' },
    },
    {
      type: 'text',
      title: 'Trick: Pick the Fastest Strategy',
      text: 'Before comparing digit by digit or cross-multiplying, check for shortcuts first: same denominator? same numerator? one fraction obviously over 1 and the other under? one obviously over half and the other under? Only cross-multiply if none of these shortcuts apply.',
    },
    {
      type: 'visual',
      component: 'CustomFractionCompare',
      title: 'Try Your Own Fractions',
    },
    {
      type: 'question',
      question: 'Is 9/7 more than, less than, or equal to 1 whole?',
      answer: 'More than 1',
      explanation: 'The numerator (9) is bigger than the denominator (7), so 9/7 is more than 1 whole.',
    },
    {
      type: 'question',
      question: 'Is 3/8 more than, less than, or equal to 1/2?',
      answer: 'Less than 1/2',
      explanation: 'Double the numerator: 3 × 2 = 6, which is less than the denominator (8), so 3/8 is less than half.',
    },
    {
      type: 'question',
      question: 'Compare using < or >: 5/7 ___ 2/7',
      answer: '5/7 > 2/7',
      explanation: 'Same denominator (7) — compare numerators: 5 > 2, so 5/7 > 2/7.',
    },
    {
      type: 'question',
      question: 'Compare using < or >: 6/9 ___ 6/10',
      answer: '6/9 > 6/10',
      explanation: 'Same numerator (6) — the smaller denominator (9) means bigger pieces, so 6/9 > 6/10.',
    },
    {
      type: 'question',
      question: 'Compare using < or >: 6/6 ___ 19/12',
      answer: '6/6 < 19/12',
      explanation: '6/6 equals exactly 1, while 19/12 is more than 1 (19 > 12). So 6/6 < 19/12.',
    },
    {
      type: 'question',
      question: 'Compare using < or >: 3/9 ___ 4/7 (hint: think about halves)',
      answer: '3/9 < 4/7',
      explanation: '3/9 is less than half (3 × 2 = 6, which is less than 9), while 4/7 is more than half (4 × 2 = 8, which is more than 7). So 3/9 < 4/7.',
    },
    {
      type: 'summary',
      title: 'Summary',
      points: [
        'Fractions must come from the same-sized whole to compare fairly',
        'Same denominator: compare numerators directly',
        'Same numerator: smaller denominator means bigger pieces',
        'Numerator vs. denominator tells you if a fraction is under, equal to, or over 1',
        'Double the numerator vs. denominator tells you if a fraction is under, equal to, or over 1/2',
      ],
    },
  ],
}
