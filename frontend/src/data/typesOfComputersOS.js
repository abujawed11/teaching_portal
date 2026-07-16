export const typesOfComputersOSLesson = {
  id: 'types-of-computers-os',
  title: 'Types of Computers & Operating Systems',
  steps: [
    {
      type: 'intro',
      title: 'Types of Computers',
      text: 'Computers come in different shapes and sizes — desktops, laptops, tablets, and smartphones — but they all do the same basic job: Input, Process, Output, Storage.',
      images: [
        { src: '/images/computer/foundations/desktop-1.jpg', alt: 'A desktop computer', caption: 'Desktop' },
        { src: '/images/computer/foundations/laptop.jpg', alt: 'A laptop computer', caption: 'Laptop' },
        { src: '/images/computer/foundations/tablet.jpg', alt: 'A tablet', caption: 'Tablet' },
        {
          src: '/images/computer/foundations/smartphone-device.jpg',
          alt: 'A smartphone',
          caption: 'Smartphone',
        },
      ],
    },
    {
      type: 'text',
      title: 'Desktop vs. Laptop',
      text: 'A desktop computer stays in one place and usually has separate parts — a tower, a monitor, a keyboard, and a mouse. A laptop packs all of that into one portable case you can carry and use anywhere.',
    },
    {
      type: 'visual',
      component: 'ComparisonTable',
      title: 'Desktop vs. Laptop — Side by Side',
      props: {
        itemA: { label: 'Desktop', image: '/images/computer/foundations/desktop-1.jpg' },
        itemB: { label: 'Laptop', image: '/images/computer/foundations/laptop.jpg' },
        rows: [
          { label: 'Portability', a: 'Stays in one place', b: 'Carry it anywhere' },
          { label: 'Parts', a: 'Separate tower, monitor, keyboard, mouse', b: 'All-in-one case' },
          { label: 'Power', a: 'Plugged into the wall', b: 'Battery or plugged in' },
          { label: 'Best for', a: 'A permanent desk setup', b: 'Working on the go' },
        ],
      },
    },
    {
      type: 'text',
      title: 'Tablet vs. Smartphone',
      text: 'A tablet is a touchscreen computer — you tap and swipe instead of using a keyboard and mouse. A smartphone works the same way but is small enough to fit in your pocket, and can also make calls.',
    },
    {
      type: 'visual',
      component: 'ComparisonTable',
      title: 'Tablet vs. Smartphone — Side by Side',
      props: {
        itemA: { label: 'Tablet', image: '/images/computer/foundations/tablet.jpg' },
        itemB: { label: 'Smartphone', image: '/images/computer/foundations/smartphone-device.jpg' },
        rows: [
          { label: 'Screen size', a: 'Larger screen', b: 'Small, pocket-sized' },
          { label: 'Input', a: 'Touchscreen (tap & swipe)', b: 'Touchscreen (tap & swipe)' },
          { label: 'Phone calls', a: 'Usually no', b: 'Yes' },
          { label: 'Best for', a: 'Reading, watching, drawing', b: 'Calls, texts, apps on the go' },
        ],
      },
    },
    {
      type: 'visual',
      component: 'DeviceCategoryMatch',
      title: 'Match the Device',
    },
    {
      type: 'text',
      title: 'What Is an Operating System?',
      text: 'An Operating System (OS) is the main software that manages the whole computer — it lets you open apps, save files, and use the hardware. Every computer, tablet, and smartphone needs one to work. Common examples: Windows, macOS, and Linux for computers; Android and iOS for phones and tablets.',
    },
    {
      type: 'visual',
      component: 'TerminologyList',
      title: 'Basic Computer Terminology',
      props: {
        terms: [
          { term: 'Desktop', definition: 'The main screen you see when a computer starts, with icons and a background.' },
          { term: 'Icon', definition: 'A small picture that represents a file, folder, or app.' },
          { term: 'Window', definition: 'A box on the screen showing an open app or folder.' },
          { term: 'Menu', definition: 'A list of options you can choose from.' },
          { term: 'Cursor', definition: 'The pointer on screen that shows where you are clicking or typing.' },
          { term: 'App / Application', definition: 'A program that lets you do a specific task, like writing or browsing.' },
          { term: 'File', definition: 'A single saved item, like a document, photo, or song.' },
          { term: 'Folder', definition: 'A container used to keep related files organized together.' },
        ],
      },
    },
    {
      type: 'question',
      question: 'Which type of computer is the most portable — a desktop or a laptop?',
      answer: 'Laptop',
      explanation: 'A laptop packs everything into one case you can carry, while a desktop stays in one place.',
    },
    {
      type: 'question',
      question: 'Name two operating systems used on phones.',
      answer: 'Android and iOS',
      explanation: 'Android runs on many phone brands; iOS runs only on iPhones.',
    },
    {
      type: 'question',
      question: "What is an 'icon' on a computer screen?",
      answer: 'A small picture that represents a file, folder, or app.',
      explanation: 'Clicking or tapping an icon usually opens whatever it represents.',
    },
    {
      type: 'question',
      question: 'What do we call the software that manages the whole computer and lets you run other apps?',
      answer: 'Operating System (OS)',
      explanation: 'The OS is the main software every computer needs before it can run anything else.',
    },
    {
      type: 'summary',
      title: 'Summary',
      points: [
        'Desktop = stays in one place, separate parts',
        'Laptop = all-in-one, portable',
        'Tablet and Smartphone = touchscreen, most portable',
        'Operating System (OS) manages the whole computer — Windows, macOS, Linux, Android, iOS',
        'Basic terms: Desktop, Icon, Window, Menu, Cursor, App, File, Folder',
      ],
    },
  ],
}
