export const pointsLinesRaysLesson = {
  id: 'points-lines-rays',
  title: 'Points, Lines and Rays',
  steps: [
    {
      type: 'intro',
      title: 'The Building Blocks of Geometry',
      text: 'Before words, you need letters. Before shapes, you need points, lines, and rays — the alphabet of geometry.',
    },
    {
      type: 'text',
      title: 'What is a Point?',
      text: 'A point marks a precise location — nothing more. No length, no width, no size.\n\n• The tip of a compass\n• A sharpened pencil tip\n• The point of a needle',
      analogy: 'A point is named with a single capital letter, like Point Z — just a label for "that exact spot."',
    },
    {
      type: 'text',
      title: 'What is a Line Segment?',
      text: 'Fold a piece of paper and unfold it — that crease is a line segment.\n\n• It has two fixed endpoints (say A and B)\n• It is the shortest path between them\n• Written as AB (or BA — same thing)',
    },
    {
      type: 'text',
      title: 'What is a Line?',
      text: 'Stretch that same segment forever in both directions, with no ends at all — that is a line.',
      analogy: 'You can never actually finish drawing one — it just keeps going. That is why every picture of a line is really just a preview of it.',
    },
    {
      type: 'text',
      title: 'What is a Ray?',
      text: 'A ray starts at one fixed point and shoots off forever — but only in one direction.\n\n• A lighthouse beam\n• A torch\'s light\n• Sun rays',
      analogy: 'Naming rule: always name the starting point first — ray AP means "starts at A, heads toward P."',
    },
    {
      type: 'visual',
      component: 'SegmentRayLineToggle',
      title: 'Same Two Points, Three Different Ideas',
    },
    {
      type: 'question',
      question: 'Rihan marked one point. How many different lines can he draw through it? Sheetal marked two points — how many lines can she draw through both of them?',
      answer: 'Rihan: infinitely many! Sheetal: exactly one.',
      explanation: 'One point can be on countless lines pointing in every direction. But two points pin a line down completely — there is only one straight path through both.',
    },
    {
      type: 'question',
      question: 'A ray is heading along one path — through T, then N, then B, in that order. Is ray "NB" the same as ray "TB"?',
      answer: 'No! TB and TN both start at T, so they name the same ray. But NB starts at N, a completely different starting point — it is a shorter ray, not the same one.',
      explanation: 'The very first letter in a ray\'s name always locks in where it starts — swap that letter and you get a different ray, even if it points the same way. Click each name below to see it for yourself.',
      visual: 'RayNamingDiagram',
    },
    {
      type: 'summary',
      title: 'Summary',
      points: [
        'A point marks a location — no size, named with a capital letter.',
        'A line segment has two fixed endpoints — the shortest path between them.',
        'A line extends forever in both directions — no endpoints at all.',
        'A ray starts at a fixed point and extends forever in just one direction.',
        'Any two points determine exactly one line through both of them.',
      ],
    },
  ],
}
