export const buildingBigNumbersLesson = {
  id: 'building-big-numbers',
  title: 'Building Big Numbers',
  steps: [
    {
      type: 'intro',
      title: 'A Lakh Varieties!',
      text: "Eshwarappa is a farmer in Chintamani, Karnataka. He overhears that India once had about a lakh varieties of rice — now only a handful remain.\n\nHis son Estu wonders: if he tried one new variety of rice every single day, would he even come close to tasting all of them in a 100-year lifetime?",
      analogy: 'Before we can answer that, we need to actually feel how big "one lakh" is. Let\'s build up to it, one step at a time.',
    },
    {
      type: 'text',
      title: 'Climbing Up to One Lakh',
      text: "Watch what happens every time we add 1 to the largest number with a certain number of digits — it jumps us into a whole new digit-family.\n\n999 + 1 = 1,000\n9,999 + 1 = 10,000\n99,999 + 1 = 1,00,000",
    },
    {
      type: 'visual',
      component: 'LakhSteppingStones',
      title: 'Reveal the Climb to One Lakh',
      text: 'Tap "Reveal Next Step" to watch each digit-family jump — then see the final skip-count into one lakh.',
    },
    {
      type: 'question',
      question: 'According to the 2011 Census, Chintamani\'s population was about 75,000. How much less than one lakh is that?',
      answer: '25,000 less than one lakh.',
      explanation: '1,00,000 − 75,000 = 25,000.',
    },
    {
      type: 'question',
      question: "Chintamani's estimated population in 2024 is 1,06,000. How much more than one lakh is that, and by how much did the population grow from 2011 to 2024?",
      answer: '1,06,000 is 6,000 more than one lakh. The population grew by 31,000 from 2011 to 2024.',
      explanation: '1,06,000 − 1,00,000 = 6,000. Growth: 1,06,000 − 75,000 = 31,000.',
    },
    {
      type: 'text',
      title: 'Getting a Feel for Big Heights',
      text: "Numbers on their own can be hard to picture. It helps to compare them to something familiar.\n\nSomu is 1 metre tall. Each floor of his building is about 4 times his height (4 m), so a 10-floor building is 40 m tall.\n\nNow compare that to two real places:\n• The Statue of Unity (Gujarat) — about 180 m tall\n• Kunchikal Waterfall (Karnataka) — drops about 450 m",
      analogy: "Instead of just saying '180 metres', we can say 'about 4.5 Somu-buildings tall' — that's a number you can actually picture.",
    },
    {
      type: 'visual',
      component: 'BenchmarkHeightComparator',
      title: 'Compare the Heights',
      text: "Tap each bar to see how many times taller it is than Somu's 40 m building.",
    },
    {
      type: 'question',
      question: "How many floors would Somu's building need to be as tall as the Kunchikal Waterfall (450 m)?",
      answer: 'About 113 floors.',
      explanation: 'Each floor is 4 m, so 450 m ÷ 4 m ≈ 112.5 — round up to 113 floors to reach or pass the waterfall\'s height.',
    },
    {
      type: 'text',
      title: 'Is One Lakh Big or Small?',
      text: "Eshwarappa asks his kids: is a lakh big or small? They disagree!\n\nRoxie says it's HUGE:\n• A lakh rice varieties is a lot to lose.\n• Living for 1 lakh days would mean living 274 years.\n• 1 lakh people standing shoulder to shoulder would stretch 38 km.\n\nEstu says it's not that big:\n• Ahmedabad's cricket stadium seats over 1 lakh people — in one building!\n• Most people have 80,000 to 1,20,000 hairs on their head.\n• Some fish lay almost a lakh eggs at once — some lay tens of lakhs!",
      analogy: 'Both are right — "big" and "small" depend entirely on what you compare a number to. There\'s no single correct answer here, just better and worse comparisons.',
    },
    {
      type: 'question',
      question: 'What do you think — is a lakh big or small? Pick a side and use one of Roxie\'s or Estu\'s facts (or one of your own) to defend it.',
      answer: 'There is no fixed right answer — this is a discussion question.',
      explanation: "A good answer picks a comparison and reasons from it, e.g. 'A lakh people barely fit in one stadium, so compared to a building, it\'s small — but compared to how many rice varieties one person could ever taste, it\'s enormous.'",
    },
    {
      type: 'text',
      title: 'Reading and Writing Big Numbers',
      text: "We already use a comma for 5-digit numbers like 45,830. As numbers grow past one lakh, we keep placing commas the same way — right between the ten-thousands place and the one-lakh place.\n\n12,78,830 is read as: twelve lakh seventy eight thousand eight hundred thirty.\n15,75,000 is read as: fifteen lakh seventy five thousand.",
      analogy: 'Read a big number lakh-group first, then thousand-group, then the last three digits — just like reading a sentence one chunk at a time.',
    },
    {
      type: 'visual',
      component: 'NumberNameReveal',
      title: 'Reveal the Number Name, Chunk by Chunk',
      text: 'Tap "Reveal Next Word" to build up the number name one comma-group at a time.',
      props: { number: 1278830 },
    },
    {
      type: 'visual',
      component: 'IndianNumberConverter',
      title: 'Try Your Own Numbers',
      text: 'Type any number and see it converted into words instantly.',
    },
    {
      type: 'question',
      question: 'Write 3,00,600 in words.',
      answer: 'Three lakh six hundred.',
    },
    {
      type: 'question',
      question: 'Write 5,04,085 in words.',
      answer: 'Five lakh four thousand eighty five.',
    },
    {
      type: 'question',
      question: 'Write 27,30,000 in words.',
      answer: 'Twenty seven lakh thirty thousand.',
    },
    {
      type: 'question',
      question: 'Write 70,53,138 in words.',
      answer: 'Seventy lakh fifty three thousand one hundred thirty eight.',
    },
    {
      type: 'question',
      question: 'Write the number for: "One lakh twenty three thousand four hundred and fifty six."',
      answer: '1,23,456',
    },
    {
      type: 'question',
      question: 'Write the number for: "Four lakh seven thousand seven hundred and four."',
      answer: '4,07,704',
    },
    {
      type: 'question',
      question: 'Write the number for: "Fifty lakhs five thousand and fifty."',
      answer: '50,05,050',
    },
    {
      type: 'question',
      question: 'Write the number for: "Ten lakhs two hundred and thirty five."',
      answer: '10,00,235',
    },
  ],
}
