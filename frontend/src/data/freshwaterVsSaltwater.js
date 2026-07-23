export const freshwaterVsSaltwaterLesson = {
  id: 'freshwater-vs-saltwater',
  title: 'Freshwater vs. Saltwater',
  steps: [
    {
      type: 'intro',
      title: 'Water — The Essence of Life',
      text: "It is raining outside. Afreen watches the raindrops slide down the window and asks Jyoti, \"Where do you think all this water comes from, and where does it go?\"\n\nLet's follow the journey of water — starting with a question: how much water does Earth actually have?",
      illustration: 'WaterDropIllustration',
    },
    {
      type: 'text',
      title: 'Most of Earth\'s Water is Salty',
      text: "Earth's surface is mostly covered in water — but almost all of it is salty ocean water.\n\n• Salty water cannot be used for drinking\n• Salty water cannot be used to grow crops\n• Only a small leftover share is freshwater — the kind we actually depend on every day",
      analogy:
        'Imagine a huge water tank meant for a whole village, but almost all of it is locked away — only a tiny cup is left for everyone to share. That tiny cup is Earth\'s freshwater.',
    },
    {
      type: 'visual',
      component: 'WaterProportionDemo',
      title: 'How Much Freshwater is There, Really?',
    },
    {
      type: 'question',
      question:
        'Discuss: Do you think we can drink the water in the ocean? If not, what can ocean water still be used for?',
      answer:
        'We cannot drink ocean water — it is too salty and would harm our bodies. But it is still useful!',
      explanation:
        'Ocean water is used for things like producing salt (e.g. the salt pans of Gujarat), fishing, shipping and transport, and even generating some kinds of energy. It just cannot be used for drinking or watering crops without removing the salt first.',
    },
    {
      type: 'text',
      title: 'Where Do We Find Freshwater?',
      text: 'Freshwater comes from many places around us — not just taps! Some are easy to spot, and one is a trick — can you guess which source is NOT freshwater before you tap it?',
    },
    {
      type: 'visual',
      component: 'FreshwaterSourceSort',
      title: 'Spot the Freshwater Source',
    },
    {
      type: 'text',
      title: 'Do You Know?',
      text: 'The salt pans of Gujarat are vast flatlands where seawater is dried in the sun to collect salt — it is one of the largest salt-producing areas in India. This is a clever example of putting "useless" salty water to good use!',
    },
    {
      type: 'question',
      question: 'Why can most of the water on Earth NOT be used for drinking or farming?',
      answer: 'Because most of it is salty ocean water.',
      explanation:
        'Only a small fraction of Earth\'s water is freshwater. The rest is salty ocean water, which is unsafe to drink and would damage most crops if used for farming.',
    },
    {
      type: 'question',
      question: 'True or False: The ocean is a source of freshwater.',
      answer: 'False',
      explanation: 'The ocean is saltwater, not freshwater. Freshwater sources include rain, rivers, lakes, ponds, glaciers and groundwater.',
    },
    {
      type: 'question',
      question: 'Name three sources of freshwater.',
      answer: 'Any three of: rain, rivers, lakes, ponds, glaciers/ice, groundwater (wells)',
      explanation: 'All of these hold or provide freshwater that people, animals and plants can use.',
    },
    {
      type: 'question',
      question:
        'If all the water on Earth filled a 200 ml glass, about how much of it would be freshwater?',
      answer: 'About 5 ml — just a teaspoon',
      explanation:
        'This tiny amount shows just how limited freshwater really is compared to all the water on Earth, most of which is salty ocean water.',
    },
    {
      type: 'question',
      question: 'Even though we cannot drink ocean water, name one thing it is still useful for.',
      answer: 'Any one of: making salt, fishing, shipping/transport, generating energy',
      explanation:
        'Saltwater is not wasted — it plays a big role in food (salt, fish), travel (ships), and even electricity in some places.',
    },
    {
      type: 'summary',
      title: 'Summary',
      points: [
        'Most of Earth\'s water is salty ocean water — freshwater is a tiny, precious share',
        'Freshwater sources include rain, rivers, lakes, ponds, glaciers and groundwater',
        'Saltwater cannot be drunk or used for farming, but it is still useful (e.g. salt, fishing, transport)',
        'Because freshwater is so limited, it must be used and shared wisely',
      ],
    },
  ],
}
