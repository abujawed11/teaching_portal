export const anglesChapterPracticeLesson = {
  id: 'angles-chapter-practice',
  title: 'Chapter Practice',
  steps: [
    {
      type: 'intro',
      title: 'Chapter 2 Practice: Lines and Angles',
      text: 'Let\'s mix questions from every topic in this chapter — points, rays, angles, measuring, and real-world angles.',
    },
    {
      type: 'question',
      question: 'How many lines pass through a single point? How many lines pass through two fixed points?',
      answer: 'Through one point: infinitely many. Through two fixed points: exactly one.',
      explanation: 'One point leaves the direction free; two points pin the line down completely.',
    },
    {
      type: 'question',
      question: 'Ray XY starts at X. Can it also correctly be written as YX?',
      answer: 'No — "YX" would mean a ray starting at Y instead, heading the opposite way. A ray\'s name is not reversible.',
      explanation: 'This is different from a line segment, where XY = YX, since a segment has no direction, only two endpoints.',
    },
    {
      type: 'question',
      question: 'What is the vertex, and what are the arms, of the angle made by an open pair of scissors?',
      answer: 'The vertex is the pivot where the two blades are joined; the arms are the two blades themselves.',
      explanation: 'Any hinge-like real object works the same way — a fixed joint (vertex) with two moving parts (arms).',
    },
    {
      type: 'question',
      question: 'Two angles look almost the same size. What is the most reliable way to check which is bigger, without a protractor?',
      answer: 'Superimposition — trace one angle and lay it exactly on top of the other, matching up the vertices.',
      explanation: 'Eyeballing close angles is unreliable; lining up the vertex and arms directly settles it for sure.',
    },
    {
      type: 'question',
      question: 'A straight angle is folded exactly in half. What two angles does this always produce?',
      answer: 'Two equal right angles (90° each).',
      explanation: 'A straight angle is 180°; folding it exactly in half always gives 90° + 90°.',
    },
    {
      type: 'question',
      question: 'Classify these angle measures as acute, right, obtuse, straight, or reflex: 15°, 90°, 178°, 180°, 260°.',
      answer: '15° acute, 90° right, 178° obtuse, 180° straight, 260° reflex.',
      explanation: 'Under 90° is acute, exactly 90° is right, 90°–180° is obtuse, exactly 180° is straight, and 180°–360° is reflex.',
    },
    {
      type: 'question',
      question: 'A protractor\'s base arm sits on the LEFT-hand 0°. Which scale should you read for the other arm — the one increasing left→right, or right→left?',
      answer: 'The scale increasing left→right (the one whose 0° is on the left).',
      explanation: 'Always read the scale that starts at 0° exactly where your base arm is touching.',
    },
    {
      type: 'question',
      question: '∠AOB and ∠BOC sit together on a straight line AOC. If ∠AOB = 55°, what is ∠BOC?',
      answer: '125°.',
      explanation: 'Angles on a straight line always add up to 180°: 180° − 55° = 125°.',
    },
    {
      type: 'question',
      question: 'At 5 o\'clock, what is the angle between the clock hands, and is it acute, right, or obtuse?',
      answer: '150°, which is obtuse.',
      explanation: '5 hour-marks × 30° each = 150° — more than 90° but less than 180°.',
    },
    {
      type: 'question',
      question: 'For a door swinging open, what is the vertex of the angle it makes, and what are the arms?',
      answer: 'The vertex is the hinge; the arms are the door frame (fixed) and the door itself (moving).',
      explanation: 'A wider swing means a bigger angle at the same fixed hinge point.',
    },
    {
      type: 'summary',
      title: 'Chapter 2 Practice Complete',
      points: [
        'Points, lines, rays, and segments — and why ray names are not reversible',
        'Angles: vertex, arms, naming, and comparing by superimposition',
        'Straight, right, acute, obtuse, and reflex angles, and the angle bisector',
        'Measuring with a protractor, including reading the correct scale',
        'Spotting and reasoning about angles in real life — clocks, doors, swings, ramps, turns',
      ],
    },
  ],
}
