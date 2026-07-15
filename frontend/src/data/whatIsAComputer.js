export const whatIsAComputerLesson = {
  id: 'what-is-a-computer',
  title: 'What Is a Computer?',
  steps: [
    {
      type: 'intro',
      title: 'What Is a Computer?',
      text: 'A computer is a machine that takes information, works on it, and gives us a result — quickly, and without getting tired.',
      image: {
        src: '/images/computer/foundations/what-is-a-computer-hero.jpg',
        alt: 'A desktop computer with monitor, keyboard, and mouse',
      },
    },
    {
      type: 'text',
      title: 'Where Do We See Computers?',
      text: 'Computers are all around us: in school labs, on our phones, inside ATMs, in smart TVs, and even in hospital machines. Anything that takes information and gives a result is doing the same basic job as a computer.',
      images: [
        {
          src: '/images/computer/foundations/where-school-lab.jpg',
          alt: 'Students using computers in a school computer lab',
          caption: 'School Lab',
        },
        {
          src: '/images/computer/foundations/where-atm.jpg',
          alt: 'A person using an ATM machine',
          caption: 'ATM',
        },
        {
          src: '/images/computer/foundations/where-smartphone.jpg',
          alt: 'A smartphone screen showing apps',
          caption: 'Smartphone',
        },
        {
          src: '/images/computer/foundations/where-smart-tv.jpg',
          alt: 'A smart TV showing an on-screen menu',
          caption: 'Smart TV',
        },
      ],
    },
    {
      type: 'text',
      title: 'What Does a Computer Do?',
      text: 'Every computer does the same four things, in order: it takes Input from you, Processes it, shows the Output, and can Store it to use again later.',
    },
    {
      type: 'visual',
      component: 'InputProcessOutputAnimation',
      title: 'Input → Process → Output → Storage',
    },
    {
      type: 'text',
      title: 'Meet the Hardware',
      text: 'Hardware is every part of the computer you can actually touch — the keyboard, the mouse, the screen, and the parts working inside the box.',
      image: {
        src: '/images/computer/foundations/hardware-parts-flatlay.jpg',
        alt: 'Computer hardware parts laid out — keyboard, mouse, monitor, and internal components',
      },
    },
    {
      type: 'text',
      title: 'Hardware vs. Software',
      text: 'Hardware is the physical machine. Software is the set of programs and apps that tell the hardware what to do — you can see and touch hardware, but you can only see software running on a screen.',
    },
    {
      type: 'visual',
      component: 'HardwareSoftwareSort',
      title: 'Sort It: Hardware or Software?',
    },
    {
      type: 'question',
      question: 'Name the four things every computer does, in order.',
      answer: 'Input, Process, Output, Storage',
      explanation: 'A computer takes Input, Processes it, shows the Output, and can Store it for later.',
    },
    {
      type: 'question',
      question: 'Is a keyboard hardware or software?',
      answer: 'Hardware',
      explanation: 'You can touch a keyboard — that makes it hardware.',
    },
    {
      type: 'question',
      question: 'Is a calculator app hardware or software?',
      answer: 'Software',
      explanation: 'A calculator app is a program that runs on the hardware — you can only see it, not touch it.',
    },
    {
      type: 'question',
      question: 'When you press keys to type a message, is that Input, Process, or Output?',
      answer: 'Input',
      explanation: 'Typing gives the computer information — that is the Input stage.',
    },
    {
      type: 'summary',
      title: 'Summary',
      points: [
        'A computer takes Input, Processes it, gives Output, and can Store it',
        'Computers are used everywhere — school labs, phones, ATMs, smart TVs',
        'Hardware = physical parts you can touch',
        'Software = programs and apps that run on the hardware',
      ],
    },
  ],
}
