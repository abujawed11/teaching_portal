export const indianNumberSystemLesson = {
  id: 'indian-number-system',
  title: 'Indian Number System',
  steps: [
    {
      type: 'intro',
      title: 'The Indian Number System',
      text: 'In India, large numbers are grouped as Ones, Thousands, Lakhs, and Crores — with commas placed to separate each group.',
    },
    {
      type: 'visual',
      component: 'IndianPlaceValueChart',
    },
    {
      type: 'text',
      title: 'Placing the Commas',
      text: 'Commas group digits so big numbers are easy to read: the first group from the right has 3 digits, then every group after that has 2 digits.',
    },
    {
      type: 'visual',
      component: 'CommaPlacementReveal',
    },
    {
      type: 'text',
      title: 'Reading the Number',
      text: 'Once commas are placed, each group has its own name: crore, lakh, thousand, and the last three digits are read as hundreds.',
    },
    {
      type: 'visual',
      component: 'NumberNameReveal',
    },
  ],
}
