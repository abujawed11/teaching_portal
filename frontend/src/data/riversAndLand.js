export const riversAndLandLesson = {
  id: 'rivers-and-land',
  title: 'Rivers and Land',
  steps: [
    {
      type: 'intro',
      title: 'Do You Ever Wonder How a River Flows?',
      text: 'Rivers, ponds and lakes are natural sources of freshwater too — surface water, sitting right there for us to see.\n\nA river often begins its journey high up in the mountains, and flows down across the land. But how does it "know" which way to go?',
    },
    {
      type: 'visual',
      component: 'TerrainFlowDemo',
      title: 'Follow the Flow',
    },
    {
      type: 'text',
      title: 'Water Follows the Land',
      text: 'Water flows, stops, or curves according to the shape of the land in its path. Over a very long time, the flow of water can also change the shape of the land itself.',
      analogy: 'Water is a bit lazy — it always looks for the easiest, lowest path downhill, just like a marble rolling down a bumpy slope.',
    },
    {
      type: 'question',
      question:
        'Discuss: Using what you just saw with the hill demo, why do you think some Indian rivers flow towards the Arabian Sea, while others flow towards the Bay of Bengal?',
      answer: 'It depends on which side of India\'s mountains and hills they start on.',
      explanation:
        'Just like water splitting down two sides of a hill, rivers that start on the western side of India\'s high ground flow west into the Arabian Sea, while rivers starting on the eastern side flow east into the Bay of Bengal.',
    },
    {
      type: 'question',
      question:
        'Do you know? One major Indian river, the Luni, does not reach any sea at all. Where does it end up instead?',
      answer: 'In the marshy lands of the Rann of Kutch, Gujarat.',
      explanation: 'The Luni starts in the Aravalli Range in Rajasthan and simply dries up and spreads into the marshy Rann of Kutch, rather than draining into a sea.',
    },
    {
      type: 'visual',
      component: 'RiverFlowMap',
      title: "Our Lifeline — Rivers of India",
    },
    {
      type: 'question',
      question:
        "Do you know? India's first water museum is in New Delhi. What is it called, and what does it celebrate?",
      answer: 'The Jal Shakti Museum — it celebrates India\'s water heritage and innovation.',
      explanation: 'It aims to inspire citizens to conserve water by showcasing India\'s long history of water management.',
    },
    {
      type: 'question',
      question: 'Which sea does the Ganga river flow towards?',
      answer: 'The Bay of Bengal',
      explanation: 'The Ganga flows from the north down across the country and empties into the Bay of Bengal.',
    },
    {
      type: 'question',
      question: 'Which sea does the Narmada river flow towards?',
      answer: 'The Arabian Sea',
      explanation: 'Unlike most major Indian rivers, the Narmada flows west into the Arabian Sea.',
    },
    {
      type: 'question',
      question: 'Name two rivers that flow towards the Bay of Bengal.',
      answer: 'Any two of: Ganga, Brahmaputra, Godavari, Krishna, Kaveri.',
      explanation: 'Most of peninsular India\'s major rivers flow east into the Bay of Bengal.',
    },
    {
      type: 'question',
      question: 'In the hill demo, did the water move in one straight line or spread out in different directions?',
      answer: 'It spread out in different directions.',
      explanation: 'Water follows whichever slope is lowest — on a hill with slopes on both sides, it naturally splits and flows both ways.',
    },
    {
      type: 'summary',
      title: 'Summary',
      points: [
        'Rivers begin in mountains and hills, and flow downhill across the land',
        'Water follows the shape of the land — it doesn\'t move in a straight line',
        'Depending on where they start, Indian rivers flow either to the Arabian Sea or the Bay of Bengal',
        'The Luni river is unusual — it never reaches a sea at all',
        'Next up: who actually lives in and around all this freshwater?',
      ],
    },
  ],
}
