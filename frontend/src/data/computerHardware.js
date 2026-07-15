export const computerHardwareLesson = {
  id: 'computer-hardware',
  title: 'Computer Hardware Deep-Dive',
  steps: [
    {
      type: 'intro',
      title: 'Computer Hardware Deep-Dive',
      text: "Let's open up the computer and look closely at the parts working inside — the pieces that make everything happen.",
      image: {
        src: '/images/computer/foundations/computer-internals-hero.jpg',
        alt: 'The inside of a computer case showing its internal parts',
      },
    },
    {
      type: 'visual',
      component: 'ComputerPartsExplorer',
      title: 'Click a Part to Learn About It',
    },
    {
      type: 'text',
      title: 'Storage: HDD vs. SSD',
      text: 'Storage is where the computer keeps files even after it is turned off. An HDD (Hard Disk Drive) is older and slower, with spinning disks inside. An SSD (Solid State Drive) is newer, faster, and has no moving parts.',
      images: [
        {
          src: '/images/computer/foundations/hdd.jpg',
          alt: 'A hard disk drive (HDD)',
          caption: 'HDD',
        },
        {
          src: '/images/computer/foundations/ssd.jpg',
          alt: 'A solid state drive (SSD)',
          caption: 'SSD',
        },
      ],
    },
    {
      type: 'text',
      title: 'Ports: How Things Plug In',
      text: 'Ports are the sockets on the outside of a computer. Each one is shaped differently so the right cable always fits in the right place.',
    },
    {
      type: 'visual',
      component: 'IdentifyPortActivity',
      title: 'Identify the Port',
    },
    {
      type: 'question',
      question: 'What does the CPU do?',
      answer: "It carries out instructions and does calculations — it's the \"brain\" of the computer.",
      explanation: 'Every action a computer performs is worked out by the CPU.',
    },
    {
      type: 'question',
      question: 'Which type of storage has no moving parts and is faster: HDD or SSD?',
      answer: 'SSD',
      explanation: 'An SSD stores data electronically with no spinning disks, so it reads and writes much faster than an HDD.',
    },
    {
      type: 'question',
      question: 'What does RAM store, and what happens to it when the computer turns off?',
      answer: 'RAM stores what the computer is working on right now, and it clears when the computer turns off.',
      explanation: 'That is why unsaved work is lost if the computer loses power — it was only in RAM, not in storage.',
    },
    {
      type: 'question',
      question: 'What is a port used for?',
      answer: 'Plugging in cables and devices, like a mouse, monitor, or internet cable.',
      explanation: 'Each port is a different shape so the right cable always fits in the right place.',
    },
    {
      type: 'summary',
      title: 'Summary',
      points: [
        'CPU = the brain, carries out instructions',
        'RAM = short-term memory, clears when turned off',
        'Motherboard connects every part together',
        'GPU handles graphics, video, and games',
        'HDD and SSD are long-term storage — SSD is faster with no moving parts',
        'Ports let you plug in cables and devices',
      ],
    },
  ],
}
