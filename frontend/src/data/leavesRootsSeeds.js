export const leavesRootsSeedsLesson = {
  id: 'leaves-roots-seeds',
  title: 'Leaves, Roots & Seeds',
  steps: [
    {
      type: 'intro',
      title: 'Do All Plants Have the Same Roots?',
      text: "Look closely at the leaves of different plants. You'll notice thin lines running across them — these are veins. Do all plants have the same pattern of veins? And do all plants have the same kind of roots underground?",
    },
    {
      type: 'text',
      title: 'The Pattern of Veins: Venation',
      text: 'The pattern formed by veins on a leaf is called venation. There are two common types:\n\n• Reticulate venation — a net-like pattern around a thick middle vein\n• Parallel venation — veins that run alongside each other',
    },
    {
      type: 'visual',
      component: 'VenationCompare',
      title: 'Two Types of Venation',
    },
    {
      type: 'text',
      title: 'What About Roots?',
      text: 'Roots vary too! There are two common types:\n\n• Taproot — one thick main root, with smaller side roots branching off it\n• Fibrous roots — a bunch of thin roots, all about the same size, growing from the base of the stem',
    },
    {
      type: 'visual',
      component: 'RootCompare',
      title: 'Two Types of Roots',
    },
    {
      type: 'text',
      title: 'Is There a Connection?',
      text: "Here's an interesting question: if you know a plant's leaf venation, could you predict its root type? Let's test it out!",
    },
    {
      type: 'visual',
      component: 'LeafRootConnector',
      title: 'Predict the Root!',
    },
    {
      type: 'text',
      title: 'One More Clue: The Seed',
      text: "This pattern goes even deeper — right down to the seed! When a seed like a chickpea splits open, each half is called a cotyledon.",
    },
    {
      type: 'visual',
      component: 'SeedSplitDemo',
      title: 'Splitting Open a Seed',
    },
    {
      type: 'example',
      title: 'The Full Pattern',
      solution: 'DICOT plants (2 cotyledons) → reticulate venation → taproot. Example: chickpea, mustard.\n\nMONOCOT plants (1 cotyledon) → parallel venation → fibrous roots. Example: maize, wheat.',
    },
    {
      type: 'question',
      question: 'A new plant has parallel venation in its leaves. What kind of root would you predict it has, and how many cotyledons would its seed likely have?',
      answer: 'Fibrous roots, and 1 cotyledon (a monocot).',
      explanation: 'Parallel venation goes together with fibrous roots and a single cotyledon — this is the monocot pattern.',
    },
    {
      type: 'question',
      question: 'A radish plant has reticulate venation in its leaves. What kind of root would you expect it to have?',
      answer: 'A taproot',
      explanation: 'Reticulate venation goes together with taproots — this is the dicot pattern. (In fact, the radish we eat IS its taproot!)',
    },
    {
      type: 'question',
      question: 'What is a cotyledon?',
      answer: 'A part of a seed that splits off — dicots have 2, monocots have just 1.',
      explanation: 'Counting cotyledons is one of the clearest ways to tell dicots and monocots apart.',
    },
    {
      type: 'question',
      question: 'Name one plant with reticulate venation and one with parallel venation.',
      answer: 'Reticulate: e.g. hibiscus, chickpea, mustard. Parallel: e.g. banana, grass, wheat.',
      explanation: 'These are the exact examples used to introduce each venation type.',
    },
    {
      type: 'summary',
      title: 'Summary',
      points: [
        'Venation is the pattern of veins on a leaf — reticulate (net-like) or parallel',
        'Roots are either taproot (one main root) or fibrous (a bunch of thin roots)',
        'Cotyledons are the parts a seed splits into — dicots have 2, monocots have 1',
        'These three features follow a pattern together: dicots = reticulate + taproot; monocots = parallel + fibrous',
      ],
    },
  ],
}
