export const shapeSequencesLesson = {
  id: 'shape-sequences',
  title: 'Patterns in Shapes',
  steps: [
    {
      type: 'intro',
      title: 'Patterns in Shapes',
      text: 'Numbers aren\'t the only place patterns hide — shapes grow in patterns too. This is called geometry.',
      analogy: 'Think of a shape sequence like a LEGO build guide — each step adds one more piece, following the same rule.',
    },
    {
      type: 'visual',
      component: 'RegularPolygonBuilder',
      title: 'Grow a Polygon',
    },
    {
      type: 'question',
      question: 'As the polygon grows, are the number of sides and the number of corners always equal? Why?',
      answer: 'Yes, always! Both follow the counting numbers starting at 3: 3, 4, 5, 6, 7, 8, 9, 10.',
      explanation: 'Every straight side has to end somewhere — and that "somewhere" is a corner. No extra corners, no missing ones.',
    },
    {
      type: 'visual',
      component: 'CompleteGraphBuilder',
      title: 'Connect the Dots (Complete Graphs)',
    },
    {
      type: 'question',
      question: 'The number of lines in K2, K3, K4, K5, K6 is 1, 3, 6, 10, 15. Which sequence is that?',
      answer: 'Triangular numbers!',
      explanation: 'Every new point has to connect to every point already there — one new line per existing point, just like adding a new row in a triangle.',
    },
    {
      type: 'text',
      title: 'Stacking Little Squares',
      text: '• Stack little squares into a bigger square → 1, 4, 9, 16, 25...\n• That is exactly the Square numbers sequence you already met!',
      analogy: 'Same LEGO pieces, same rule — just built into a shape instead of dots.',
    },
    {
      type: 'visual',
      component: 'StackedTriangleGrid',
      title: 'Stacking Little Triangles',
    },
    {
      type: 'text',
      title: 'Wait — Triangles Making Squares?',
      text: 'Split a triangle into rows of tiny triangles, and every row has an odd number of them (1, 3, 5, 7...) — some pointing up, some pointing down.',
      analogy: 'That is the exact same "odd numbers build a square" trick from last lesson — just wearing a triangle costume instead of a dot costume!',
    },
    {
      type: 'intro',
      title: 'Meet the Speed Bump',
      text: 'Here is one simple rule we are about to repeat again and again:\n\n• Take a straight line\n• Cut it into 3 equal pieces\n• Pop the middle piece up into a little triangle bump\n\nThat one line just became 4 shorter lines.',
    },
    {
      type: 'visual',
      component: 'SpeedBumpDemo',
      title: 'Try It Yourself',
    },
    {
      type: 'text',
      title: 'Now Do It to Every Side',
      text: '• Start with a triangle — it has 3 sides\n• Give all 3 sides a speed bump → 3 × 4 = 12 sides\n• Give all 12 sides a speed bump → 12 × 4 = 48 sides\n• Keep going... forever',
      analogy: 'It is the exact same trick from a moment ago — just done to every side at once, instead of just one.',
    },
    {
      type: 'visual',
      component: 'KochSnowflake',
      title: 'A Never-Ending Snowflake',
    },
    {
      type: 'example',
      title: 'Counting the Segments',
      problem: 'How many total line segments after each round of speed bumps?',
      solution: '3, 12, 48, 192, 768, ...\n\n• Each number is ×4 the one before\n• That is 3 × Powers of 4 (1, 4, 16, 64, 256...)',
    },
    {
      type: 'text',
      title: 'Fractals Are Everywhere',
      text: 'A shape that keeps adding bumps forever, at every zoom level, is called a fractal.',
      analogy: 'Real snowflakes, coastlines, mountain ranges, and even the branches inside your lungs all grow with this same "zoom in, find more bumps" trick!',
    },
    {
      type: 'summary',
      title: 'Summary',
      points: [
        'Geometry studies patterns in shapes, just like number theory studies patterns in numbers.',
        'Regular polygons: sides = corners = counting numbers starting at 3.',
        'Complete graphs: the number of connecting lines follows the triangular numbers.',
        'Stacked squares and stacked triangles both build the Square numbers sequence.',
        'The Koch Snowflake adds a "speed bump" to every line each step — segments always multiply by 4 (3 × Powers of 4).',
      ],
    },
  ],
}
