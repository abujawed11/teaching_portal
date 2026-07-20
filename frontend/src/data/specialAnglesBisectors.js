export const specialAnglesBisectorsLesson = {
  id: 'special-angles-bisectors',
  title: 'Special Angles and Bisectors',
  steps: [
    {
      type: 'intro',
      title: 'Special Angles and Bisectors',
      text: 'Angles come in a few special families, based on how much turn they cover — and any angle can be split perfectly in half.',
      analogy: 'Think of a pizza: a "straight" cut across the middle, a "quarter" cut, and every size of slice in between.',
    },
    {
      type: 'text',
      title: 'The Straight Angle',
      text: '• When the two arms of an angle point in exactly opposite directions, they form one straight line\n• This is called a straight angle\n• Vidya\'s book cover makes one when it lies flat open on the table',
      analogy: 'Half of a full turn = one straight angle.',
    },
    {
      type: 'visual',
      component: 'AngleBisectorFold',
      title: 'Fold a Straight Angle in Half',
      props: { startAngle: 180 },
    },
    {
      type: 'text',
      title: 'The Right Angle',
      text: '• Folding a straight angle exactly in half gives two equal angles\n• Each of these is called a right angle\n• A right angle is marked with a small square ⬜ at the vertex, not a curve\n• Two lines meeting at a right angle are called perpendicular lines',
      analogy: 'The corner of a book, a window frame, or a piece of paper — all right angles.',
    },
    {
      type: 'question',
      question: 'How many right angles do the windows in your classroom contain? Can you spot any other right angles around you?',
      answer: 'Most classroom windows have 4 right angles — one at each corner.',
      explanation: 'Right angles are everywhere once you start looking: door frames, book corners, table edges, floor tiles.',
    },
    {
      type: 'text',
      title: 'Acute and Obtuse Angles',
      text: '• Angles smaller than a right angle (less than 90°) are called acute angles\n• Angles bigger than a right angle but smaller than a straight angle (between 90° and 180°) are called obtuse angles\n• "Acute" means sharp — an acute angle looks sharp and pointy\n• "Obtuse" means blunt — an obtuse angle looks wide and open',
    },
    {
      type: 'visual',
      component: 'AngleTypeGallery',
      title: 'Straight, Right, Acute, or Obtuse?',
    },
    {
      type: 'question',
      question: 'Classify each of these angle measures as acute, right, or obtuse: 40°, 90°, 120°, 15°, 179°.',
      answer: '40° acute, 90° right, 120° obtuse, 15° acute, 179° obtuse.',
      explanation: 'Anything under 90° is acute, exactly 90° is right, and anything between 90° and 180° is obtuse.',
    },
    {
      type: 'text',
      title: 'What is an Angle Bisector?',
      text: '• Bisecting an angle means splitting it into two exactly equal angles\n• The ray that does the splitting is called the angle bisector\n• This works for any angle, not just straight angles — fold any angle so one arm lands exactly on the other, and the crease is the bisector',
      analogy: 'Just like a straight angle folds into two right angles, any angle folds into two equal smaller angles.',
    },
    {
      type: 'visual',
      component: 'AngleBisectorFold',
      title: 'Bisecting a Smaller Angle',
      props: { startAngle: 80 },
    },
    {
      type: 'question',
      question: 'An angle measures 70°. If it is bisected, what will be the measure of each of the two new angles?',
      answer: '35° each.',
      explanation: 'Bisecting always splits an angle exactly in half: 70° ÷ 2 = 35°.',
    },
    {
      type: 'question',
      question: 'A bisector splits a right angle into two equal parts. What is the measure of each part, and what type of angle is each part?',
      answer: '45° each — both are acute angles.',
      explanation: '90° ÷ 2 = 45°, and 45° is less than 90°, so each half is acute — even though it came from bisecting a right angle.',
    },
    {
      type: 'example',
      title: 'Worked Example',
      problem: 'A straight angle AOB is bisected by ray OC. What is the measure of ∠AOC, and what type of angle is it?',
      solution: 'A straight angle measures 180°. Bisecting splits it exactly in half: 180° ÷ 2 = 90°. So ∠AOC = 90°, a right angle — this is exactly how a right angle is defined!',
    },
    {
      type: 'summary',
      title: 'Summary',
      points: [
        'A straight angle has its arms pointing in exactly opposite directions — it measures a half turn.',
        'Folding a straight angle exactly in half gives two right angles (marked with a small square, not a curve).',
        'Acute angles are smaller than a right angle; obtuse angles are bigger than a right angle but smaller than a straight angle.',
        'An angle bisector is a ray that splits any angle into two exactly equal angles.',
        'Bisecting works on every angle, not just straight ones — always divide the measure by 2.',
      ],
    },
  ],
}
