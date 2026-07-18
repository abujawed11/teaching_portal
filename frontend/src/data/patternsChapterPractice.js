export const patternsChapterPracticeLesson = {
  id: 'patterns-chapter-practice',
  title: 'Chapter Practice',
  steps: [
    {
      type: 'intro',
      title: 'Chapter 1 Practice: Patterns in Mathematics',
      text: 'Let\'s mix questions from every topic in this chapter — number sequences, picture proofs, and shape patterns.',
    },
    {
      type: 'question',
      question: 'What are the next three numbers in this sequence: 1, 4, 9, 16, 25, ...?',
      answer: '36, 49, 64',
      explanation: 'These are the Square numbers — each term is a counting number multiplied by itself: 6×6=36, 7×7=49, 8×8=64.',
    },
    {
      type: 'question',
      question: 'What is another name for the "Virahānka numbers," and what is their rule?',
      answer: 'Also called Fibonacci numbers. The rule: add the last two terms to get the next one.',
      explanation: 'Virahānka, an Indian scholar, described this rule centuries before Fibonacci.',
    },
    {
      type: 'question',
      question: 'The sequence 1, 7, 19, 37 goes up by 6, 12, 18 each time. What is the next number, and what is this sequence called?',
      answer: '61 — these are the Hexagonal numbers.',
      explanation: 'The jumps go up by 6 each time: after 18 comes 24, so 37 + 24 = 61.',
    },
    {
      type: 'question',
      question: 'What is the sum of the first 20 odd numbers (1 + 3 + 5 + ... up to the 20th odd number)?',
      answer: '400',
      explanation: 'The sum of the first n odd numbers is always n². Here, n = 20, so 20 × 20 = 400.',
    },
    {
      type: 'question',
      question: 'What is 1 + 2 + 3 + 4 + 5 + 4 + 3 + 2 + 1?',
      answer: '25',
      explanation: 'This is the "up and down" walk with a peak of 5, so the answer is 5² = 25.',
    },
    {
      type: 'question',
      question: 'Add the two triangular numbers 15 and 21. What kind of number do you get?',
      answer: '36 — a square number (6²).',
      explanation: 'Any two neighbouring triangular numbers always add up to a perfect square.',
    },
    {
      type: 'question',
      question: 'Multiply the triangular number 15 by 6 and add 1. What do you get, and what sequence is it from?',
      answer: '91 — it is the next hexagonal number after 61.',
      explanation: '(15 × 6) + 1 = 91. Triangular numbers × 6, plus 1, always gives hexagonal numbers.',
    },
    {
      type: 'question',
      question: 'A regular polygon has 9 sides. What is it called, and how many corners does it have?',
      answer: 'A nonagon, with 9 corners.',
      explanation: 'In any closed shape, the number of sides always equals the number of corners.',
    },
    {
      type: 'question',
      question: 'How many lines connect all the points in a Complete Graph with 7 points (K7)?',
      answer: '21',
      explanation: 'The number of lines in Kn is a triangular number: for n=7, that is 1+2+3+4+5+6 = 21.',
    },
    {
      type: 'question',
      question: 'After 3 rounds of "speed bumps," a Koch Snowflake has how many line segments?',
      answer: '192',
      explanation: 'Segments follow 3 × Powers of 4: 3, 12, 48, 192 — round 3 gives 192.',
    },
    {
      type: 'question',
      question: 'A triangle is subdivided so that its bottom row has 6 small triangles pointing up and 5 pointing down. How many small triangles are in the whole shape?',
      answer: '36',
      explanation: 'The bottom row is row 6, so the whole triangle has 6² = 36 small triangles in total.',
    },
    {
      type: 'summary',
      title: 'Chapter 1 Practice Complete',
      points: [
        'Naming and continuing number sequences',
        'Picture proofs: odd numbers and the "up and down" walk both build squares',
        'Sequence relations: triangular pairs → squares, triangular×6+1 → hexagonal, hexagonal sums → cubes',
        'Shape sequences: polygons, complete graphs, stacked triangles, and the Koch Snowflake',
      ],
    },
  ],
}
