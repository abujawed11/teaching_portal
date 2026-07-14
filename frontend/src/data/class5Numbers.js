export const placeValueLesson = {
  id: 'place-value',
  title: 'Place Value',
  steps: [
    {
      type: 'intro',
      title: 'What is Place Value?',
      text: 'A digit gets its value from the place where it is written.',
    },
    {
      type: 'visual',
      component: 'PlaceValueChart',
    },
    {
      type: 'example',
      title: 'Worked Example',
      problem: 'Find the place value of 8 in 38,451.',
      solution: 'Place: Thousands\nPlace Value: 8,000',
    },
    {
      type: 'summary',
      title: 'Summary',
      points: ['Digit', 'Place', 'Face Value', 'Place Value', 'Expanded Form'],
    },
  ],
}
