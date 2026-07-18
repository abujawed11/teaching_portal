export const numberSequencesLesson = {
  id: 'number-sequences',
  title: 'Number Sequences',
  steps: [
    {
      type: 'intro',
      title: 'Meet the Number Sequences',
      text: 'A number sequence is a list of numbers that follows one growing rule, forever.',
      analogy:
        'Think of each sequence as its own "number family" — every family has one house rule for how the next member is born!',
    },
    {
      type: 'text',
      title: 'Ten Sequences Worth Knowing',
      text: '• All 1\'s — 1, 1, 1, 1, ... (never changes!)\n• Counting numbers — 1, 2, 3, 4, ...\n• Odd numbers — 1, 3, 5, 7, ...\n• Even numbers — 2, 4, 6, 8, ...\n• Triangular numbers — 1, 3, 6, 10, ...\n• Squares — 1, 4, 9, 16, ...\n• Cubes — 1, 8, 27, 64, ...\n• Virahānka numbers — 1, 2, 3, 5, 8, 13, ...\n• Powers of 2 — 1, 2, 4, 8, 16, ...\n• Powers of 3 — 1, 3, 9, 27, 81, ...',
    },
    {
      type: 'text',
      title: 'Fun Fact: Virahānka Numbers',
      text: "You may know these as 'Fibonacci numbers' — but an Indian scholar named Virahānka described this exact rule centuries before Fibonacci!",
      analogy: 'The rule: every new number is just the last two added together. 5 + 8 = 13, then 8 + 13 = 21...',
    },
    {
      type: 'visual',
      component: 'SequenceExplorer',
      title: 'Watch a Sequence Grow',
    },
    {
      type: 'text',
      title: 'Powers of 2: The Doubling Sequence',
      text: '• 1, 2, 4, 8, 16, 32, 64 — every term is double the one before\n• Fold a sheet of paper in half again and again — the number of layers doubles: 1, 2, 4, 8...\n• Legend says a king once promised 1 grain of rice on square 1 of a chessboard, 2 on square 2, 4 on square 3... by square 64 he owed more rice than exists on Earth!',
      analogy: 'Doubling feels slow at first — but it explodes fast. That is the power of Powers of 2!',
    },
    {
      type: 'visual',
      component: 'TriangleSquareMorph',
      title: '36: One Number, Two Shapes',
    },
    {
      type: 'example',
      title: 'A New Shape: Hexagonal Numbers',
      problem: 'What do you call this sequence: 1, 7, 19, 37, ... ?',
      solution:
        "They're called hexagonal numbers — pictured as rings of dots forming a hexagon.\n\nLook at how much each jump grows:\n• 7 − 1 = 6\n• 19 − 7 = 12\n• 37 − 19 = 18\n\nEach jump is 6 more than the last!",
    },
    {
      type: 'question',
      question: 'Using that jump pattern, what is the next hexagonal number after 37?',
      answer: '61',
      explanation: 'The jumps go up by 6 each time: 6, 12, 18, then 24. So 37 + 24 = 61.',
    },
    {
      type: 'question',
      question: 'What is the rule for Even Numbers — how do you get from one term to the next?',
      answer: 'Start at 2, and add 2 each time: 2, 4, 6, 8, 10, ...',
      explanation: 'Every even number is 2 × (its position) — the 5th even number is 2 × 5 = 10.',
    },
    {
      type: 'summary',
      title: 'Summary',
      points: [
        'A number sequence follows one growing rule, forever.',
        'Ten key sequences: All 1\'s, Counting, Odd, Even, Triangular, Squares, Cubes, Virahānka, Powers of 2, Powers of 3.',
        'Pictures make sequences click — triangles, squares, and even a number that is both (36!).',
        'Virahānka numbers show India\'s deep roots in mathematics — the same rule as "Fibonacci," discovered first.',
      ],
    },
  ],
}
