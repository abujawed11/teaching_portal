export const formsOfWaterLesson = {
  id: 'forms-of-water',
  title: 'Forms of Water',
  steps: [
    {
      type: 'intro',
      title: 'Water Has Different Forms',
      text: "Jyoti was curious: \"Is there water in the air too? And is snow a form of water?\"\n\nWater doesn't always look the same. Sometimes it's a liquid, sometimes it's solid, and sometimes we can't even see it at all!",
    },
    {
      type: 'text',
      title: 'The Three Forms of Water',
      text: '• Liquid — water we can pour, like rain or the water in a glass\n• Solid — water frozen hard, like ice or snow\n• Vapour — water as an invisible gas floating in the air, like steam',
      analogy:
        'Think of water like a costume-changer — same water, just wearing a different "outfit" depending on how hot or cold it is.',
    },
    {
      type: 'visual',
      component: 'WaterStateExplorer',
      title: 'Explore the Three Forms',
    },
    {
      type: 'text',
      title: "Let's Try an Experiment",
      text: 'Here\'s something you can try at home: take a steel glass and drop in a few ice cubes. What do you think will happen — both inside the glass, and on the outside?',
    },
    {
      type: 'visual',
      component: 'CondensationDemo',
      title: 'Ice in a Steel Glass',
    },
    {
      type: 'question',
      question: 'Where do the water droplets on the OUTSIDE of the glass come from?',
      answer: 'From water vapour in the air, which cools down on the cold glass and turns back into liquid.',
      explanation:
        'This surprises a lot of people — the droplets are not leaking from the ice inside! Invisible water vapour in the air touches the cold glass, cools down, and condenses into tiny liquid droplets on the outside.',
    },
    {
      type: 'question',
      question: 'What happens to the ice cubes after they are left in the glass for some time?',
      answer: 'They melt and turn into liquid water.',
      explanation: 'The warmth of the room slowly melts the ice — solid water changes into liquid water.',
    },
    {
      type: 'question',
      question: 'If we heat water on a stove, what will happen to it?',
      answer: 'It will boil and turn into vapour (steam).',
      explanation: 'Heating gives water enough energy to escape as vapour — this is boiling, the fast version of evaporation.',
    },
    {
      type: 'text',
      title: 'You Don\'t Always Need a Stove',
      text: "Water can turn into vapour without boiling too! Leave a bowl of water out in the sunlight for a few days, and you'll notice the water level slowly drops — it's quietly evaporating into the air, even without any heat from a stove.",
    },
    {
      type: 'question',
      question: 'On a cold morning, you may see tiny drops of water on grass, even though it didn\'t rain. What are these called, and where do they come from?',
      answer: 'Dew — water vapour in the cool night air condenses on the cold grass.',
      explanation: 'Just like the steel glass, grass cools down at night, and water vapour in the air condenses onto it as dew.',
    },
    {
      type: 'question',
      question: 'A kettle is boiling on the stove. What form of water do you see rising from its spout?',
      answer: 'Vapour (steam)',
      explanation: 'The heat from the stove turns the liquid water into vapour, which rises as steam.',
    },
    {
      type: 'question',
      question: 'Snow is falling outside. What form of water is snow?',
      answer: 'Solid',
      explanation: 'Snow is frozen water — just like ice, but formed directly from vapour high up in cold clouds.',
    },
    {
      type: 'question',
      question: 'A glass of water is left uncovered on a table for a whole week. What do you expect to happen to the water level, and why?',
      answer: 'It will slowly go down, because the water is evaporating into the air.',
      explanation: 'Even without boiling, liquid water slowly turns into vapour over time — this is evaporation.',
    },
    {
      type: 'summary',
      title: 'Summary',
      points: [
        'Water has three forms: solid (ice), liquid (water) and vapour (steam)',
        'Heating causes melting (solid → liquid) and boiling/evaporating (liquid → vapour)',
        'Cooling causes freezing (liquid → solid) and condensing (vapour → liquid)',
        'These changes are reversible — the same water keeps changing form',
        'Next up: where does all that vapour go? Let\'s follow it — The Water Cycle!',
      ],
    },
  ],
}
