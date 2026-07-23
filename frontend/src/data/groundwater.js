export const groundwaterLesson = {
  id: 'groundwater',
  title: 'Groundwater',
  steps: [
    {
      type: 'intro',
      title: 'What Happens to Rain After It Falls?',
      text: 'We\'ve followed water up into the sky and back down as rain. But once rain lands on the ground, where does it actually go?',
    },
    {
      type: 'text',
      title: 'Some Water Soaks Into the Ground',
      text: 'When it rains, some water is soaked up by the soil. This water sinks down, layer by layer, through soil and rock — and settles deep underground.',
      analogy: 'Think of the soil like a sponge sitting on a shelf — pour water on top, and it slowly soaks all the way down to the bottom.',
    },
    {
      type: 'visual',
      component: 'GroundwaterSoakDemo',
      title: 'Rain, Soil and Groundwater',
    },
    {
      type: 'example',
      title: 'Definition',
      solution: 'Water that gets stored deep underground is called GROUNDWATER. We dig wells, borewells, tube wells and handpumps to draw this water up for our use.',
    },
    {
      type: 'text',
      title: 'Not Every Surface Lets Water In',
      text: 'In cities with lots of concrete and paving, rainwater cannot soak into the ground easily — this stops groundwater from being recharged (refilled).',
    },
    {
      type: 'visual',
      component: 'RechargeSurfaceSort',
      title: 'Which Surfaces Help Groundwater Recharge?',
    },
    {
      type: 'question',
      question:
        'Do you know? Open, uncovered ground helps rainwater soak in. What are some ways people can help "return" more rainwater underground?',
      answer: 'Soak pits, ponds, human-made lakes, and planting more trees.',
      explanation:
        'All of these give rainwater a chance to sit on open soil long enough to seep down, instead of running off a hard, sealed surface.',
    },
    {
      type: 'question',
      question:
        "Do you know? India's tallest statue stands 182 metres tall. What is it called, and where is it?",
      answer: 'The Statue of Unity, in Gujarat.',
      explanation: 'It is also the tallest statue in the world — a fun fact from the same part of India famous for its salt pans!',
    },
    {
      type: 'question',
      question: 'What is groundwater?',
      answer: 'Water that soaks through soil and rock and gets stored deep underground.',
      explanation: 'Rain that isn\'t used on the surface slowly sinks down and collects underground as groundwater.',
    },
    {
      type: 'question',
      question: 'Name two ways people draw groundwater up for use.',
      answer: 'Any two of: wells, borewells, tube wells, handpumps.',
      explanation: 'All of these are dug deep enough to reach the stored groundwater and bring it back to the surface.',
    },
    {
      type: 'question',
      question: 'Why does a city full of concrete roads struggle with groundwater recharge?',
      answer: 'Concrete seals the ground, so rainwater cannot soak in — it mostly just runs off instead.',
      explanation: 'Without open soil to soak through, rain has no way to reach and refill the groundwater below.',
    },
    {
      type: 'question',
      question: 'Which would help groundwater recharge more — a paved parking lot or a park with open soil and trees?',
      answer: 'A park with open soil and trees.',
      explanation: 'Open soil lets rain seep down; trees and green spaces both use and help retain water, giving it more time to soak in.',
    },
    {
      type: 'summary',
      title: 'Summary',
      points: [
        'Some rainwater soaks into the ground and is stored underground as groundwater',
        'Wells, borewells, tube wells and handpumps draw groundwater back up for use',
        'Open soil, soak pits, ponds and trees help groundwater recharge',
        'Concrete and paved surfaces block rainwater from soaking in',
        'Next up: what happens to the water that stays on the surface — how do rivers flow?',
      ],
    },
  ],
}
