export const angleTypesRealWorldLesson = {
  id: 'angle-types-real-world',
  title: 'Angle Types in Real Life',
  steps: [
    {
      type: 'intro',
      title: 'Angle Types in Real Life',
      text: 'Angles aren\'t just on paper — they\'re hiding in clocks, doors, swings, ramps, even in the way you turn your body. Once you start looking, you\'ll see them everywhere.',
      analogy: 'Every time something opens, tilts, turns, or swings, there\'s an angle at work.',
    },
    {
      type: 'visual',
      component: 'ClockAngleDemo',
      title: 'The Angle Between Clock Hands',
      text: 'A clock face is a full turn (360°) split into 12 equal hour-marks. Click through a few times and watch how the angle between the hands changes.',
    },
    {
      type: 'question',
      question: 'What will the angle between the hands be at 9 o\'clock? (Hint: use the same 30°-per-mark idea — and remember, past 6 marks, count the shorter way round.)',
      answer: '90° — a right angle.',
      explanation: '9 marks × 30° = 270° the long way round, but the shorter way round is 360° − 270° = 90°. At 9 o\'clock, the hands point straight up and straight left — a right angle.',
    },
    {
      type: 'text',
      title: 'The Angle of a Door',
      text: '• A door swings open around its hinge — the hinge is the vertex\n• One arm is the door frame (fixed), the other arm is the door itself (moving)\n• A door open just a crack makes a small, acute angle\n• A door open all the way back against the wall can even make an obtuse or straight angle',
      analogy: 'Next time you open a door, picture the hinge as the vertex of an angle that\'s growing.',
    },
    {
      type: 'question',
      question: 'A door is opened until it is exactly perpendicular to the frame. What type of angle does it make?',
      answer: 'A right angle (90°).',
      explanation: 'Perpendicular means meeting at exactly 90° — the most common way we open doors for walking through.',
    },
    {
      type: 'text',
      title: 'The Angle of a Swing',
      text: 'Vidya is enjoying her time on a swing. She notices something interesting: the bigger the angle she swings through, the faster she goes.',
    },
    {
      type: 'question',
      question: 'On a swing, where is the vertex, and what are the two arms of the angle Vidya makes?',
      answer: 'The vertex is at the top, where the ropes are attached (the pivot). One arm is the rope hanging straight down (at rest); the other arm is the rope at the highest point of the swing.',
      explanation: 'The rope itself doesn\'t bend — it swings around the fixed pivot point at the top, the same way the arms of an angle swing around a fixed vertex.',
    },
    {
      type: 'text',
      title: 'The Angle of a Ramp',
      text: 'A toy with a slanting ramp: the steeper the ramp, the faster a ball rolls down it. An angle can describe exactly how steep it is.',
    },
    {
      type: 'question',
      question: 'For a ramp, what are the two arms of the angle that describes its steepness — and which one can you actually see?',
      answer: 'One arm is the ramp\'s slanted surface (visible); the other arm is the flat ground it\'s resting on (often invisible, but still there).',
      explanation: 'A steeper ramp means a bigger angle between the slanted surface and the ground — even though the ground-arm isn\'t drawn, it\'s always the reference for "how steep."',
    },
    {
      type: 'text',
      title: 'The Angle of a Turn',
      text: 'When an insect (or anything) rotates in place, the amount it turned can also be described using an angle.',
    },
    {
      type: 'question',
      question: 'An insect rotates to face a new direction. What is the vertex of this "turning" angle, and what are its two arms?',
      answer: 'The vertex is the insect\'s fixed position (the point it turns around). One arm is the direction it originally faced; the other arm is the direction it faces after turning.',
      explanation: 'This is the same "angle = amount of turn" idea from earlier — comparing a before-direction and an after-direction, both measured from the same fixed point.',
    },
    {
      type: 'question',
      question: 'Classify each real-life angle as acute, right, obtuse, or straight: a door opened a small crack, a door opened flat against the wall, a door opened exactly to make an "L" shape with the frame, a ramp propped up almost flat.',
      answer: 'Small crack: acute. Flat against the wall: straight. "L" shape with the frame: right. Ramp almost flat: acute.',
      explanation: 'A small opening or a low ramp means a small angle (acute). A right-angle "L" is exactly 90°. A door folded flat against the wall means the two arms point in opposite directions — a straight angle, 180°.',
    },
    {
      type: 'question',
      question: 'At 4 o\'clock, is the angle between the clock hands acute, right, or obtuse?',
      answer: 'Obtuse.',
      explanation: '4 marks × 30° = 120°, which is more than 90° but less than 180° — obtuse.',
    },
    {
      type: 'summary',
      title: 'Summary',
      points: [
        'Angles show up everywhere in real life: clock hands, doors, swings, ramps, and turns.',
        'A clock face is 360° split into 12 marks of 30° each — multiply the hour gap by 30° to find the angle between the hands.',
        'A door\'s hinge is the vertex; the frame and the door itself are the two arms.',
        'A swing\'s vertex is its top pivot; the "at rest" and "highest point" ropes are the two arms.',
        'A ramp\'s steepness is the angle between the slanted surface and the ground, even when the ground isn\'t drawn.',
        'A turn (like a rotating insect) is an angle between the before-direction and after-direction, both measured from the same fixed point.',
      ],
    },
  ],
}
