# Digital Teaching Portal — Phase-wise Development Plan

## 1. Project Goal

Build a projector-friendly interactive teaching website for Mathematics and Science students from Classes 4 to 10.

The first release should focus only on Mathematics for Classes 5 to 8, beginning with:

**Class 5 → Chapter 1: Numbers**

The platform is primarily meant for live classroom teaching. The teacher will open the website on a laptop and project it onto a white screen using a projector.

The website should make concepts easier to understand through:

- Large, clear explanations
- Step-by-step animations
- Interactive demonstrations
- Teacher-controlled controls
- Practice questions
- Quizzes
- Printable homework
- Full-screen projector mode

This is not initially meant to be a complete school-management system. The first goal is to build an excellent interactive teaching experience.

---

## 2. Current Project Setup

The frontend has already been created using:

- Vite
- React
- JavaScript
- HTML
- CSS

Current folder:

```text
teaching_portal/
└── frontend/
    ├── public/
    ├── src/
    ├── package.json
    ├── vite.config.js
    └── ...
```

The Vite development server is already running successfully.

Command:

```bash
npm run dev
```

Local URL:

```text
http://localhost:5173
```

---

## 3. Main Users

### Primary user

The teacher, who will:

- Select class, subject, chapter, and topic
- Present lessons using a projector
- Control animations
- Reveal explanations step by step
- Start practice activities
- Show quiz questions
- Display answers when required
- Switch to full-screen mode

### Secondary users

Students, who will:

- Watch explanations
- Answer questions verbally or on paper
- Participate in interactive activities
- Solve quizzes
- Receive homework

Student accounts are not required in the first release.

---

## 4. Main Design Principles

The website must be designed for classroom projection.

### Visual requirements

- Large fonts
- Large buttons
- High contrast
- Minimal text per screen
- Clear spacing
- Clean layout
- Bright but professional visuals
- Responsive layout
- Proper display on laptops, projectors, tablets, and phones

### Teaching requirements

Every topic should follow this structure:

1. Topic introduction
2. Simple explanation
3. Visual demonstration
4. Teacher-controlled animation
5. Worked examples
6. Student practice
7. Quick quiz
8. Summary
9. Homework

### Important UX rules

- Do not autoplay long animations
- Teacher must control Next, Previous, Play, Pause, Reset
- Every animation should be replayable
- Every topic should support full-screen mode
- Avoid tiny controls
- Avoid unnecessary dashboard complexity
- Navigation should be simple enough to use while teaching

---

# 5. Recommended Technology Stack

## Frontend

- React
- Vite
- React Router
- Plain CSS or CSS Modules
- Framer Motion for animations
- Lucide React for icons

## Optional later libraries

- KaTeX or MathJax for equations
- Recharts for graphs
- html2canvas or jsPDF for worksheets
- Zustand or Context API for app state

## Backend

Do not build a backend in the first phase.

A backend can later be added using:

- Node.js
- Express
- MySQL

The backend will eventually support:

- Teacher login
- Student accounts
- Attendance
- Test scores
- Progress reports
- Homework tracking
- Parent dashboard

---

# 6. Proposed Folder Structure

```text
frontend/
├── public/
│   ├── images/
│   ├── icons/
│   └── worksheets/
│
├── src/
│   ├── assets/
│   │   ├── images/
│   │   └── animations/
│   │
│   ├── components/
│   │   ├── common/
│   │   │   ├── Header.jsx
│   │   │   ├── Sidebar.jsx
│   │   │   ├── PageTitle.jsx
│   │   │   ├── FullscreenButton.jsx
│   │   │   ├── NavigationButtons.jsx
│   │   │   ├── ProgressBar.jsx
│   │   │   └── Modal.jsx
│   │   │
│   │   ├── teaching/
│   │   │   ├── LessonCard.jsx
│   │   │   ├── ExplanationPanel.jsx
│   │   │   ├── AnimationControls.jsx
│   │   │   ├── ExampleCard.jsx
│   │   │   ├── PracticeQuestion.jsx
│   │   │   ├── QuizQuestion.jsx
│   │   │   └── SummaryCard.jsx
│   │   │
│   │   └── numbers/
│   │       ├── PlaceValueChart.jsx
│   │       ├── DigitHighlighter.jsx
│   │       ├── NumberSystemConverter.jsx
│   │       ├── CompareNumbers.jsx
│   │       ├── NumberOrdering.jsx
│   │       ├── NumberLine.jsx
│   │       └── RomanNumerals.jsx
│   │
│   ├── data/
│   │   ├── classes.js
│   │   ├── subjects.js
│   │   ├── chapters.js
│   │   ├── class5Numbers.js
│   │   └── quizzes.js
│   │
│   ├── hooks/
│   │   ├── useFullscreen.js
│   │   └── useLessonProgress.js
│   │
│   ├── layouts/
│   │   ├── MainLayout.jsx
│   │   └── LessonLayout.jsx
│   │
│   ├── pages/
│   │   ├── HomePage.jsx
│   │   ├── ClassSelectionPage.jsx
│   │   ├── SubjectSelectionPage.jsx
│   │   ├── ChapterSelectionPage.jsx
│   │   ├── LessonPage.jsx
│   │   ├── PracticePage.jsx
│   │   ├── QuizPage.jsx
│   │   └── NotFoundPage.jsx
│   │
│   ├── styles/
│   │   ├── variables.css
│   │   ├── global.css
│   │   ├── projector.css
│   │   └── print.css
│   │
│   ├── App.jsx
│   ├── main.jsx
│   └── routes.jsx
│
├── package.json
└── vite.config.js
```

The exact structure can be simplified initially, but components should remain reusable.

---

# 7. Application Navigation

The main flow should be:

```text
Home
→ Select Class
→ Select Subject
→ Select Chapter
→ Select Topic
→ Start Lesson
```

Example:

```text
Home
→ Class 5
→ Mathematics
→ Chapter 1: Numbers
→ Place Value
→ Start Lesson
```

The first release may show only Class 5 as active.

Classes 6, 7, and 8 may appear as “Coming Soon”.

---

# 8. Phase-wise Development Plan

## Phase 0 — Project Cleanup and Foundation

### Goal

Prepare the Vite project for structured development.

### Tasks

- Remove unnecessary Vite starter content
- Create a clean React application shell
- Install required packages
- Configure React Router
- Create global CSS variables
- Create basic color, font, and spacing system
- Add responsive design support
- Create reusable button styles
- Create full-screen support
- Add basic error boundary if needed
- Add ESLint-friendly code

### Suggested packages

```bash
npm install react-router-dom framer-motion lucide-react
```

### Deliverable

A clean application that opens without errors and shows a basic home page.

---

## Phase 1 — Core UI and Navigation

### Goal

Create the basic user interface for navigating classes, subjects, chapters, and topics.

### Pages

#### Home page

Include:

- Portal name
- Tagline
- “Start Teaching” button
- “Continue Last Lesson” placeholder
- Quick access to Class 5 Mathematics
- Projector mode button

#### Class selection page

Cards for:

- Class 4
- Class 5
- Class 6
- Class 7
- Class 8
- Class 9
- Class 10

Initially:

- Class 5 should be active
- Other classes may show “Coming Soon”

#### Subject selection page

Subjects:

- Mathematics
- Science

Initially:

- Mathematics active
- Science can show “Coming Soon”

#### Chapter selection page

For Class 5 Mathematics:

- Chapter 1: Numbers
- Other chapters shown as “Coming Soon”

#### Topic selection page

Topics under Chapter 1:

1. Place Value
2. Indian Number System
3. International Number System
4. Comparing Numbers
5. Ascending and Descending Order
6. Number Line
7. Roman Numerals
8. Chapter Practice
9. Chapter Quiz

### Deliverable

Teacher can navigate from home to any Chapter 1 topic.

---

## Phase 2 — Reusable Teaching Engine

### Goal

Create a reusable lesson system that can later support every topic and chapter.

### Required lesson controls

- Previous
- Next
- Play
- Pause
- Replay
- Reset
- Show answer
- Hide answer
- Full-screen
- Exit lesson

### Lesson screen layout

Suggested structure:

```text
Top bar
- Class
- Subject
- Chapter
- Topic
- Full-screen button

Main teaching area
- Title
- Explanation or animation
- Teacher controls

Bottom bar
- Previous
- Step number
- Next
```

### Reusable lesson step types

The system should support:

- Title step
- Text explanation
- Visual explanation
- Animated demonstration
- Worked example
- Student activity
- Question step
- Answer reveal
- Summary
- Homework

### Data-driven lessons

Lesson steps should preferably be stored as structured JavaScript data.

Example concept:

```js
{
  id: "place-value",
  title: "Place Value",
  steps: [
    {
      type: "intro",
      title: "What is Place Value?"
    },
    {
      type: "visual",
      component: "PlaceValueChart"
    },
    {
      type: "example",
      number: 45672
    }
  ]
}
```

Avoid hardcoding every lesson into one very large component.

### Deliverable

A reusable lesson player that can display multiple lesson step types.

---

## Phase 3 — Class 5 Chapter 1: Numbers

This is the first complete educational module.

---

### Module 3.1 — Place Value

#### Learning goals

Students should understand:

- Digit
- Place
- Place value
- Face value
- Expanded form
- Standard form

#### Interactive features

##### Place value chart

Display columns such as:

```text
Ten Thousands | Thousands | Hundreds | Tens | Ones
```

Use a sample number:

```text
45,672
```

When the teacher clicks a digit:

- Highlight the digit
- Highlight its column
- Show place name
- Show face value
- Show place value
- Show expanded value

Example:

```text
Digit: 4
Place: Ten Thousands
Face Value: 4
Place Value: 40,000
```

##### Digit animation

The digits should enter the place-value chart one by one.

##### Expanded-form animation

Show:

```text
45,672
= 40,000 + 5,000 + 600 + 70 + 2
```

Reveal one part at a time.

##### Custom number input

Teacher can enter a number and generate its place-value chart.

Validation should prevent unsupported or invalid input.

#### Practice

- Identify place value
- Identify face value
- Write expanded form
- Convert expanded form to standard form

#### Quiz

At least 10 questions with:

- Multiple choice
- Fill in the blank
- Show answer
- Next question
- Score

---

### Module 3.2 — Indian Number System

#### Learning goals

- Ones
- Tens
- Hundreds
- Thousands
- Ten thousands
- Lakhs
- Ten lakhs
- Crores
- Ten crores

#### Interactive features

- Indian place-value chart
- Comma-placement animation
- Number-name demonstration
- Number-building activity
- Number-name-to-number conversion
- Number-to-number-name conversion

Example:

```text
7,45,32,618
Seven crore forty-five lakh thirty-two thousand six hundred eighteen
```

#### Practice

- Insert commas
- Write number names
- Write numerals from number names
- Identify digit place value

---

### Module 3.3 — International Number System

#### Learning goals

- Ones
- Tens
- Hundreds
- Thousands
- Ten thousands
- Hundred thousands
- Millions
- Ten millions
- Hundred millions

#### Interactive features

- International place-value chart
- Comma-placement animation
- Side-by-side comparison with Indian system
- Number name demonstration

Example:

```text
74,532,618
Seventy-four million five hundred thirty-two thousand six hundred eighteen
```

#### Comparison tool

Show the same number in:

- Indian system
- International system

Highlight different comma positions.

---

### Module 3.4 — Comparing Numbers

#### Learning goals

Students should understand:

- Greater than
- Less than
- Equal to
- Comparing digit count
- Comparing place by place

#### Interactive features

- Animated comparison symbols
- Alligator-mouth visual may be used carefully for younger students
- Digit-by-digit comparison
- Highlight first different digit
- Teacher-generated custom comparison

Example:

```text
45,672 > 45,267
```

Animation should compare:

1. Number of digits
2. Highest place
3. First unequal place

#### Practice

- Choose correct symbol
- Select greater number
- Arrange two numbers

---

### Module 3.5 — Ascending and Descending Order

#### Learning goals

- Smallest to largest
- Largest to smallest
- Comparing multiple numbers

#### Interactive features

- Drag-and-drop number cards
- “Sort” animation
- Number cards moving into correct positions
- Teacher can enter custom numbers

#### Practice

- Arrange 3 numbers
- Arrange 4 numbers
- Arrange 5 numbers

---

### Module 3.6 — Number Line

#### Learning goals

- Position of numbers
- Moving left and right
- Greater and smaller numbers
- Number gaps
- Basic addition and subtraction movement

#### Interactive features

- Zoomable number line
- Movable pointer
- Jump animation
- Teacher chooses start and end
- Highlight numbers
- Show forward and backward movement

Example:

```text
Start at 5
Move 4 steps right
Reach 9
```

---

### Module 3.7 — Roman Numerals

#### Learning goals

Symbols:

```text
I = 1
V = 5
X = 10
L = 50
C = 100
```

Rules:

- Repetition
- Addition
- Subtraction
- Valid and invalid forms

#### Interactive features

- Roman numeral symbol cards
- Build-a-number activity
- Conversion animation
- Matching game
- Roman-to-Hindu-Arabic converter
- Hindu-Arabic-to-Roman converter

#### Initial scope

Support Roman numerals from 1 to 100.

#### Practice

- Convert numbers
- Find incorrect Roman numeral
- Match equivalent values

---

## Phase 4 — Practice and Quiz System

### Goal

Build reusable practice and quiz components.

### Practice modes

- Teacher demonstration mode
- Student attempt mode
- Timed challenge mode, later
- Random question mode

### Question types

- Multiple choice
- Fill in the blank
- True or false
- Match the following
- Arrange in order
- Drag and drop
- Click the correct digit
- Enter a number

### Quiz features

- Current question number
- Total questions
- Score
- Correct or incorrect feedback
- Explanation after answer
- Retry quiz
- Review answers
- Full-screen quiz mode

### Important

For classroom use, include a “Reveal Answer” button so the teacher can first ask students before displaying the answer.

---

## Phase 5 — Homework and Printable Worksheets

### Goal

Allow the teacher to generate or print homework.

### Features

- Topic-based worksheet
- Difficulty selection:
  - Easy
  - Medium
  - Hard
- Number of questions
- Student name field
- Date field
- Printable layout
- Separate answer key
- Print button

### Initial implementation

Use browser print styles.

No PDF backend is needed initially.

### Deliverable

Teacher can print a Place Value worksheet and answer key.

---

## Phase 6 — Projector Mode

### Goal

Optimize the application for live classroom projection.

### Features

- Browser full-screen mode
- Hide sidebar in projector mode
- Extra-large fonts
- Large controls
- High-contrast presentation
- Keyboard shortcuts

### Suggested shortcuts

```text
Right Arrow  → Next step
Left Arrow   → Previous step
Space        → Play/Pause animation
R            → Replay
A            → Show/Hide answer
F            → Full-screen
Esc          → Exit full-screen
```

### Deliverable

The teacher can operate most lessons without using the mouse repeatedly.

---

## Phase 7 — Teacher Utilities

### Goal

Add tools useful during live teaching.

### Features

- On-screen whiteboard
- Pen tool
- Eraser
- Clear board
- Basic calculator
- Timer
- Stopwatch
- Random student picker, later
- Quick notes
- Highlight pointer

These tools should open as overlays without leaving the lesson.

---

## Phase 8 — Science Demonstration Framework

Do this only after Class 5 Numbers is complete and tested.

### Goal

Prepare reusable components for Science.

### Potential components

- Labelled diagrams
- Process animations
- Before-and-after comparison
- Drag-and-drop labels
- Step-by-step experiments
- Interactive simulations
- Safety notes
- Science quiz

### Example topics

- States of matter
- Human body
- Force and motion
- Light
- Electricity
- Solar system
- Plants
- Food chain

---

## Phase 9 — Expand Mathematics Content

After Class 5 Chapter 1 is stable, expand in this order.

### Class 5

1. Numbers
2. Addition and Subtraction
3. Multiplication
4. Division
5. Factors and Multiples
6. Fractions
7. Decimals
8. Measurement
9. Time and Money
10. Geometry
11. Perimeter and Area
12. Data Handling
13. Patterns

### Class 6

1. Knowing Our Numbers
2. Whole Numbers
3. Factors and Multiples
4. Integers
5. Fractions
6. Decimals
7. Ratio and Proportion
8. Algebra
9. Basic Geometry
10. Mensuration
11. Symmetry
12. Data Handling

### Class 7

1. Integers
2. Fractions and Decimals
3. Rational Numbers
4. Simple Equations
5. Algebraic Expressions
6. Ratio and Proportion
7. Percentage
8. Profit and Loss
9. Lines and Angles
10. Triangles
11. Congruence
12. Perimeter and Area
13. Exponents
14. Data Handling

### Class 8

1. Rational Numbers
2. Linear Equations
3. Algebraic Expressions and Identities
4. Factorisation
5. Comparing Quantities
6. Exponents
7. Squares and Square Roots
8. Cubes and Cube Roots
9. Direct and Inverse Proportion
10. Quadrilaterals
11. Mensuration
12. Graphs
13. Data Handling

---

## Phase 10 — Backend and User Accounts

Start only after the educational frontend is proven useful.

### Backend stack

- Node.js
- Express
- MySQL
- JWT authentication
- bcrypt password hashing

### Features

#### Teacher account

- Login
- Save custom lessons
- Save quiz results
- Create worksheets
- Track chapter completion

#### Student account

- Login
- View homework
- Attempt quizzes
- View marks
- View progress

#### Parent dashboard

- Attendance
- Marks
- Weak topics
- Homework completion
- Monthly report

---

## Phase 11 — Attendance and Progress Tracking

### Features

- Add students
- Create batches
- Mark attendance
- Record test marks
- Track topic mastery
- Weak-topic detection
- Monthly progress report
- Export or print report

---

## Phase 12 — AI Features

Add only after the core platform works.

### Possible AI features

- Generate practice questions
- Generate worksheets
- Explain a topic at different difficulty levels
- Create lesson summaries
- Create homework
- Detect weak topics
- Student doubt assistant
- Translate explanations into Hindi or Urdu
- Generate parent progress messages

AI should support the teacher, not replace the structured lessons.

---

# 9. First Minimum Viable Product

The first MVP should contain only:

- Home page
- Class 5 selection
- Mathematics selection
- Chapter 1: Numbers
- Place Value lesson
- Animated place-value chart
- Teacher-controlled steps
- Practice questions
- 10-question quiz
- Full-screen projector mode
- Responsive design

Do not include in MVP:

- Authentication
- Backend
- Database
- Attendance
- Payments
- Parent dashboard
- AI doubt solving
- Multiple full chapters

The MVP is successful when the teacher can use the Place Value lesson in a real classroom.

---

# 10. First Lesson Detailed Screen Flow

## Lesson: Place Value

### Screen 1 — Title

```text
Class 5 Mathematics
Chapter 1: Numbers
Topic: Place Value
```

Button:

```text
Start Lesson
```

### Screen 2 — Meaning of digit

Explain with a large example.

```text
Number: 45,672
Digits: 4, 5, 6, 7, 2
```

### Screen 3 — Place-value chart

Animate each digit into its column.

### Screen 4 — Select a digit

Teacher clicks a digit.

Website shows:

- Digit
- Place
- Face value
- Place value

### Screen 5 — Expanded form

Reveal:

```text
40,000 + 5,000 + 600 + 70 + 2
```

one part at a time.

### Screen 6 — Worked example

Example:

```text
Find the place value of 8 in 38,451.
```

Teacher can reveal the solution step by step.

### Screen 7 — Student practice

Show one question without answer.

Button:

```text
Reveal Answer
```

### Screen 8 — Interactive custom number

Teacher enters a new number and demonstrates it.

### Screen 9 — Quick quiz

Five classroom questions.

### Screen 10 — Summary

Show:

- Digit
- Face value
- Place
- Place value
- Expanded form

### Screen 11 — Homework

Show or print homework.

---

# 11. Content Style Guidelines

### Language

Use simple English.

Later add language options:

- English
- Hindi
- Hinglish

### Explanation style

Avoid complex textbook wording.

Example:

Instead of:

> The positional value of a digit depends upon its location within the numeral.

Use:

> A digit gets its value from the place where it is written.

### Examples

Use familiar contexts:

- Money
- Cricket scores
- Shop prices
- Population
- Distance
- School marks
- Number of students

---

# 12. Animation Guidelines

Use animations only when they improve understanding.

### Good uses

- Moving digits into place-value columns
- Highlighting one place at a time
- Showing expanded form step by step
- Moving on a number line
- Sorting number cards
- Showing comparison digit by digit

### Avoid

- Decorative animations that distract students
- Fast motion
- Too many effects
- Long automatic sequences
- Animations that cannot be paused

### Animation controls

Every important animation should have:

- Play
- Pause
- Replay
- Next step
- Previous step
- Reset

---

# 13. Responsive and Projector Testing

Test at:

- 1366 × 768 laptop
- 1920 × 1080 projector
- 1280 × 720 projector
- Tablet
- Mobile

### Projector checks

- Is the smallest text readable from the back of the room?
- Are buttons large enough?
- Is contrast sufficient?
- Does full-screen work?
- Are animations smooth?
- Does the page work without scrolling during a lesson?
- Can the teacher use keyboard shortcuts?

---

# 14. Accessibility

- Use semantic HTML
- Add keyboard navigation
- Maintain good contrast
- Do not rely only on color
- Add text labels to icons
- Respect reduced-motion settings
- Make interactive elements focusable
- Use meaningful button names

---

# 15. Code Quality Rules

Claude should follow these rules while building:

- Use functional React components
- Keep components small and reusable
- Do not place the whole application in `App.jsx`
- Use meaningful names
- Avoid duplicate code
- Use data files for lessons and questions
- Add comments only where logic is not obvious
- Handle invalid user input
- Avoid unnecessary dependencies
- Keep styling consistent
- Ensure no console errors
- Ensure `npm run build` succeeds after every phase

---

# 16. Git Workflow

Initialize Git in the root project folder if not already initialized.

Suggested root:

```text
D:\react\teaching_portal
```

Recommended commits:

```text
chore: initialize teaching portal
feat: add core navigation
feat: add reusable lesson player
feat: add place value visualizer
feat: add place value practice
feat: add chapter quiz
feat: add projector mode
```

Commit after each stable phase.

---

# 17. Testing Checklist

## Functional

- Navigation works
- Back button works
- Lesson steps work
- Full-screen works
- Animation controls work
- Input validation works
- Quiz score works
- Reset works
- Print layout works

## Visual

- No text overflow
- No horizontal scrolling
- Buttons are readable
- Projector layout is clear
- Mobile layout remains usable

## Technical

```bash
npm run dev
npm run build
npm run lint
```

All should complete without errors.

---

# 18. Recommended Build Order for Claude

Claude should begin in this exact order:

1. Inspect the existing Vite project
2. Clean starter files
3. Install required dependencies
4. Create project folder structure
5. Build global design system
6. Configure routes
7. Build home page
8. Build class, subject, chapter, and topic selection
9. Build reusable lesson layout
10. Build lesson navigation controls
11. Build Place Value lesson
12. Build interactive place-value chart
13. Add custom number input
14. Add practice questions
15. Add quiz system
16. Add projector full-screen mode
17. Add keyboard shortcuts
18. Test responsiveness
19. Run production build
20. Update README with run instructions

Claude should not start backend work.

---

# 19. Instructions for Claude

Use this plan as the source of truth.

Start by inspecting the current project files.

Before making major changes:

1. Explain what you found.
2. State which phase you are starting.
3. List the files you plan to create or modify.

Then implement only the current phase.

After each phase:

1. Run the relevant checks.
2. Fix errors.
3. Summarize completed work.
4. List newly created or modified files.
5. Provide exact commands to run.
6. Wait for approval before starting the next major phase, unless explicitly told to continue automatically.

Do not add a backend, authentication, database, attendance system, payment system, or AI features during the MVP.

The immediate target is:

> A polished, projector-friendly Class 5 Mathematics Place Value lesson that can be used in a real coaching class.

---

# 20. Suggested Initial Claude Prompt

Use the following prompt with Claude after placing this file in the project root:

```text
Read the complete Plan.md file in the project root and treat it as the source of truth.

My project is an interactive digital teaching portal built with Vite, React, and JavaScript. I will use it during live coaching classes by projecting the website onto a white screen.

The long-term goal is to teach Mathematics and Science to Classes 4–10 using animations, interactive demonstrations, practice questions, quizzes, and printable homework.

For now, focus only on the MVP described in Plan.md:

Class 5 → Mathematics → Chapter 1: Numbers → Place Value.

First inspect the existing Vite project and explain the current structure. Then begin Phase 0 and Phase 1 only.

Follow these rules:
- Keep the UI projector-friendly.
- Use large fonts, large buttons, high contrast, and a clean layout.
- Use React Router.
- Use reusable components.
- Use Framer Motion only where animation improves learning.
- Do not build a backend.
- Do not add authentication, attendance, payments, parent dashboards, or AI.
- Do not put the whole app in App.jsx.
- Ensure npm run build succeeds.
- Before editing, tell me which files you will create or modify.
- After completing the phase, summarize the work and wait for my approval before continuing.
```

---

# 21. Definition of Success

The project is successful when:

- A student understands the concept more easily because of the visualization.
- The teacher can control every step while explaining.
- The content is readable on a projector.
- The lesson does not depend on internet access.
- The website is easy to extend with new chapters.
- The first Place Value module can be used in an actual class.
