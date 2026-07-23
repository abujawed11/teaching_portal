export const waterCycleLesson = {
  id: 'water-cycle',
  title: 'The Water Cycle',
  steps: [
    {
      type: 'intro',
      title: 'Where Does the Vapour Go?',
      text: "We already learned that heat turns liquid water into vapour, and cooling turns vapour back into liquid.\n\nBut here's the big question — in nature, where does all that vapour actually go? Let's find out with an activity!",
    },
    {
      type: 'visual',
      component: 'WaterCycleBagDemo',
      title: 'A Water Cycle in a Bag',
    },
    {
      type: 'text',
      title: 'The Same Thing Happens in Nature',
      text: "The bag showed it on a tiny scale — but the exact same thing happens across the whole planet, all the time!\n\n• The Sun heats oceans, rivers and lakes\n• Water turns into vapour and rises into the sky\n• High up, it cools and forms clouds\n• Clouds get heavy and water falls back down as rain, snow or hail\n• That water flows back into rivers, lakes and oceans — and the whole thing starts again",
      analogy:
        'It\'s like water going round and round on a giant, never-ending water slide — up into the sky, then back down to Earth, again and again.',
    },
    {
      type: 'visual',
      component: 'WaterCycleDiagram',
      title: 'The Water Cycle, Step by Step',
    },
    {
      type: 'example',
      title: 'Definition',
      solution: 'This constant, circular movement of water in nature — evaporation, condensation, precipitation and collection, again and again — is called the WATER CYCLE.',
    },
    {
      type: 'question',
      question:
        'Do you know? There is a national park in Manipur famous for floating islands made of soil, vegetation and roots. What is it called, and why is it special?',
      answer: 'Keibul Lamjao National Park — the world\'s only floating national park.',
      explanation:
        'It floats on Loktak Lake on unique mats called "phumdis," and is home to the endangered Sangai deer. It\'s a great example of how closely life can depend on water and wetlands.',
    },
    {
      type: 'question',
      question: 'What causes water to evaporate from oceans, rivers and lakes?',
      answer: 'Heat from the Sun.',
      explanation: 'The Sun\'s heat gives water enough energy to turn from liquid into invisible vapour.',
    },
    {
      type: 'question',
      question: 'What happens to water vapour as it rises high into the sky?',
      answer: 'It cools down and condenses into tiny water droplets, which gather to form clouds.',
      explanation: 'Higher up, the air is colder, so vapour condenses — the same idea as droplets forming on a cold glass.',
    },
    {
      type: 'question',
      question: 'Name the three forms precipitation can take when it falls from clouds.',
      answer: 'Rain, snow and hail.',
      explanation: 'Which one falls depends on the temperature of the air the water passes through on its way down.',
    },
    {
      type: 'question',
      question:
        'Put these water cycle stages in the correct order: Precipitation, Evaporation, Condensation, Collection.',
      answer: 'Evaporation → Condensation → Precipitation → Collection',
      explanation: 'Water evaporates from the surface, condenses into clouds, falls back down as precipitation, and collects in rivers/lakes/oceans — and then the cycle repeats.',
    },
    {
      type: 'question',
      question: 'True or False: The water cycle happens once and then stops.',
      answer: 'False',
      explanation: 'The water cycle never stops — it is a continuous, repeating process that has been going on for billions of years.',
    },
    {
      type: 'summary',
      title: 'Summary',
      points: [
        'The water cycle has 4 stages: Evaporation, Condensation, Precipitation, Collection',
        'The Sun\'s heat drives the whole cycle by evaporating water from oceans and rivers',
        'Clouds form when rising vapour cools and condenses',
        'The cycle is continuous — it never stops, and the same water keeps moving through it',
        'Next up: not all rain stays on the surface — some soaks into the ground. Where does it go?',
      ],
    },
  ],
}
