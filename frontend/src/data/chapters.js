export const chapters = {
  5: {
    mathematics: [
      { id: 'numbers', label: 'Chapter 1: Numbers', active: true },
      { id: 'fractions', label: 'Chapter 2: Fractions', active: true },
      { id: 'addition-subtraction', label: 'Chapter 3: Addition and Subtraction', active: false },
      { id: 'multiplication', label: 'Chapter 4: Multiplication', active: false },
      { id: 'division', label: 'Chapter 5: Division', active: false },
    ],
    science: [
      { id: 'water-essence-of-life', label: 'Chapter 1: Water — The Essence of Life', active: true },
      { id: 'journey-of-a-river', label: 'Chapter 2: Journey of a River', active: false },
    ],
  },
  6: {
    mathematics: [
      { id: 'patterns-in-mathematics', label: 'Chapter 1: Patterns in Mathematics', active: true },
      { id: 'lines-and-angles', label: 'Chapter 2: Lines and Angles', active: true },
    ],
  },
  7: {
    mathematics: [
      { id: 'large-numbers-around-us', label: 'Chapter 1: Large Numbers Around Us', active: true },
    ],
  },
  'digital-skills': {
    'digital-skills': [
      { id: 'computer-foundations', label: 'Level 1: Computer Foundations', active: true },
      { id: 'windows-file-management', label: 'Level 2: Windows and File Management', active: false },
      { id: 'keyboard-mouse-typing', label: 'Level 3: Keyboard, Mouse and Typing Skills', active: false },
      { id: 'internet-web-skills', label: 'Level 4: Internet and Web Skills', active: false },
      { id: 'email-communication', label: 'Level 5: Email and Online Communication', active: false },
      { id: 'documents-word-processing', label: 'Level 6: Documents and Word Processing', active: false },
      { id: 'presentations', label: 'Level 7: Presentations', active: false },
      { id: 'spreadsheets', label: 'Level 8: Spreadsheets', active: false },
      { id: 'digital-creativity', label: 'Level 9: Digital Creativity', active: false },
      { id: 'ai-for-students', label: 'Level 10: Artificial Intelligence for Students', active: false },
      { id: 'cyber-safety', label: 'Level 11: Cyber Safety and Digital Citizenship', active: false },
      { id: 'programming-logic', label: 'Level 12: Programming Logic', active: false },
      { id: 'beginner-python', label: 'Level 13: Beginner Programming (Python)', active: false },
      { id: 'beginner-web-dev', label: 'Level 14: Beginner Website Development', active: false },
    ],
  },
}

export function getChapterList(classId, subjectId) {
  return chapters[classId]?.[subjectId] ?? []
}

export function getChapterLabel(classId, subjectId, chapterId) {
  return getChapterList(classId, subjectId).find((c) => c.id === chapterId)?.label ?? chapterId
}
