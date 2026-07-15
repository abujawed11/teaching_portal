# Digital Teaching Portal — Phase-wise Development Plan

## 0. Progress Log

| Phase | Status |
|---|---|
| Phase 0 — Project Cleanup and Foundation | ✅ Done |
| Phase 1 — Core UI and Navigation | ✅ Done |
| Phase 2 — Reusable Teaching Engine | ✅ Done |
| Phase 3 — Class 5 Chapter 1: Numbers (Module 3.1 Place Value) | ✅ Done |
| Phase 3 — Module 3.2 Indian Number System | ✅ Done |
| Phase 3 — Module 3.3 International Number System | ✅ Done |
| Phase 3 — Module 3.4 Comparing Numbers | 🔶 In progress |
| Phase 3 — Modules 3.5–3.7 (remaining Numbers topics) | Not started |
| Phase 3 — Module 3.8 Rounding Numbers (nearest 10/100/1,000) | Not started |
| Phase 3 — Module 3.9 Addition & Subtraction of Large Numbers | Not started |
| Phase 3 — Module 3.10 Number Tricks & Puzzles | Not started |

### Decision: alignment with the actual current NCERT textbook (Maths Mela, 2025)

The teacher provided the real current NCERT Class 5 Maths textbook PDFs at `D:\react\teaching_portal\books` (**Maths Mela**, First Edition June 2025, built for NEP 2020 / NCF-SE 2023). It was checked against our Plan.md, and it differs from what Plan.md originally assumed (the older NCERT structure):

- There is **no chapter literally called "Numbers"** — the book is theme-woven (Chapter 1 "We the Travellers—I", Chapter 4 "We the Travellers—II", etc.), with numbers content folded into travel/real-world narratives.
- Numbers stay capped at **5 digits (Ones → Ten Thousands)** throughout the chapters checked (1 and 4). **Lakhs, Crores, and Millions are not taught in Grade 5 in this book at all** — no Indian-system vs. International-system distinction appears.
- Chapter 1 ("We the Travellers—I") covers: reading/writing numbers up to 5 digits, place value, expanded form, comparing numbers (place-value-chart based, digit-by-digit — matches our Module 3.4), ascending/descending order, and **rounding to nearest 10/100/1,000** (not previously in our plan).
- Chapter 4 ("We the Travellers—II") covers: **addition and subtraction of large numbers** with regrouping (not previously in our plan), heavy real-world word problems (travel distance, fuel, money/budgets), and several genuine **math tricks**: add-to-make-100/1,000 shortcut, quick subtract-9/99 tricks, consecutive-number-sum patterns, palindrome numbers, even/odd number patterns, and logic puzzles (river-crossing, pile-of-pebbles game, digit-swap-always-gives-9 trick, King's Horses perimeter illusion).

**Decision on scope, per discussion:** Modules 3.2 (Indian Number System) and 3.3 (International Number System) go beyond what this specific book teaches at Grade 5 — but they are **kept, not cut, and not deprioritized**. Per the user: a coaching class that only repeats the textbook gives parents/students no reason to attend over just reading the book at home. Teaching genuinely more — building a stronger number-sense foundation — is the coaching center's differentiator, so 3.2/3.3 get **equal priority and equal teaching rigor** as the NCERT-aligned modules, not "optional/skip-if-short-on-time" treatment.

To keep this differentiation *visible* (not just internal), and to avoid ever silently treating extra content as lower-priority: modules will be tagged in the UI (topic selection cards) as either **"NCERT Chapter"** or **"Beyond NCERT — Strong Foundation"** — a small badge, not a warning. This lets the teacher sequence lessons however makes sense pedagogically, while giving parents/students a visible reason the coaching content covers more than school. Not built yet — apply when Module 3.2/3.3's topic cards are next touched, and to any future enrichment module (e.g. 3.10 Number Tricks & Puzzles, which is also "Beyond NCERT" since it draws on genuine problem-solving depth, even though its individual tricks are lifted from the book itself).

New modules added to the Progress Log above as a result of this check (not yet built): **3.8 Rounding Numbers**, **3.9 Addition & Subtraction of Large Numbers**, **3.10 Number Tricks & Puzzles** (pulls together the puzzle/trick content from both chapters checked so far, feeding into [[Working agreement: tricks and shortcuts]] above).

Only Chapters 1 and 4 have been checked so far. Other chapters (Fractions, Angles as Turns, Far and Near, etc.) haven't been reviewed yet — worth checking before assuming the rest of Plan.md's Class 5 topic list (Phase 9) still matches.

### Chapters 2, 3, 5, 6, 7 reviewed (content notes only — not yet reconciled into Phase 9 topic list)

Checked against the actual book PDFs (`eemm102`–`eemm107.pdf`). Summary of what each covers, to fold into Phase 9 planning later:

- **Chapter 2 — Fractions**: equivalent fractions (via fraction-kit pieces, grids, number patterns), comparing fractions (same denominator, same numerator, using 1 as reference, using 1/2 as reference), fractions greater than 1 (mixed numbers via "parathas" context and number lines). No fraction addition/subtraction/multiplication yet in this chapter — comparison-focused.
- **Chapter 3 — Angles as Turns**: angles introduced entirely through the idea of "turns" (full/half/quarter turn), not protractor-degree measurement — acute/right/obtuse/straight angle via fractions of a turn (1/4, 1/8, 1/12 etc.), a paper-fan and circle-cutout "angle measuring tool" the students build themselves, clockwise vs. anti-clockwise, compass directions (N/S/E/W) combined with turns, clock minute-hand turns. No degree unit (°) at all — this is a fresh, non-protractor approach to angles that doesn't match any existing Plan.md geometry module description.
- **Chapter 5 — Far and Near (Measurement/Length)**: units cm/m/km and mm, conversions between them (10mm=1cm, 100cm=1m, 1000m=1km), double-number-line conversion drills, add/subtract/multiply/divide lengths with regrouping (real column-method worked examples), estimation, feet/inches as an informal secondary unit (1 inch ≈ 2cm 5mm). This is squarely Plan.md's Phase 9 "Measurement" topic (Class 5, item 8) — content is ready to map directly into that module when built.
- **Chapter 6 — The Dairy Farm (Multiplication)**: this chapter is a goldmine of exactly the kind of "genuine math shortcut tricks" the [[Working agreement: tricks and shortcuts]] section calls for — commutativity, ×10/×100/×1,000 place-shift patterns, doubling-and-halving strategy, nearest-multiple (round-and-adjust) strategy, area-model/distributive multiplication shown 3 ways (Nida's expanded grid, Kanti's/John's distributive column methods, "Mili's father's" standard algorithm), estimation, and several number-pattern puzzles (11×11, 111×111 palindrome patterns, 5×5/15×15/25×25 patterns, 9× digit-sum patterns). Directly feeds a future Class 5 "Multiplication" module (Phase 9, item 3) **and** should backfill 3.10 Number Tricks & Puzzles.
- **Chapter 7 — Shapes and Patterns**: hands-on paper-weaving patterns (over/under sequences), tessellation (which regular polygons tile without gaps: triangle/square/hexagon yes, pentagon/octagon no), triangle classification by sides (isosceles/equilateral/scalene) via paper-folding, quadrilateral classification (kite, parallelogram, rectangle — defined by equal-side/equal-angle relationships, discovered by cutting a rhombus into triangles), tangram, circle constructions (diameters → quadrilaterals, thread-art circle designs), cube/net activities, Platonic solids (icosahedron, dodecahedron) via nets, a logic puzzle. This is rich and matches/expands Plan.md's Phase 9 "Geometry" (Class 5, item 10) — much more hands-on/paper-craft-based than the existing Plan.md geometry description assumes.

**Not yet reviewed**: remaining chapters (book likely continues past 107 — chapter numbers/filenames not yet confirmed for Decimals, Perimeter and Area, Time and Money, Data Handling, Patterns, etc.). Per user instruction, stop reading further chapters for now — resume chapter review only when asked, reading at most 1–2 chapters at a time rather than in bulk, so each can be discussed and reconciled into this plan before moving on.

### Decision: Styling approach

The original plan specified "Plain CSS or CSS Modules". This was changed by decision:

> **Tailwind CSS v4** is used instead, configured via the CSS-first `@theme` block in `src/index.css` (no `tailwind.config.js` needed in v4). Reason: faster iteration for many small interactive components, and Tailwind's scale naturally enforces the large-font/high-contrast projector requirements once theme tokens are set.

Framer Motion is used as planned, for step-by-step teaching animations.

### Phase 0 — what was built

- Removed unused Vite starter assets (`react.svg`, `vite.svg`, `hero.png`) and empty `App.css`
- Installed `react-router-dom` and `framer-motion`
- `BrowserRouter` wired in `src/main.jsx`
- Folder structure created: `components/{common,teaching,numbers}`, `data`, `hooks`, `layouts`, `pages`
- Tailwind v4 `@theme` design tokens added in `src/index.css`: brand colors (`--color-primary`, `--color-accent`, `--color-success`, `--color-danger`, `--color-surface`, `--color-ink`) and projector-scale font sizes (`--font-size-projector-sm/md/lg/xl`)
- Base body styles (system font stack, base readable font size, high-contrast surface/ink colors)
- `src/hooks/useFullscreen.js` — full-screen enter/exit/toggle hook
- `src/components/common/Button.jsx` — reusable large, high-contrast button (primary/secondary/danger variants, focus-visible ring, disabled state)
- `src/components/common/ErrorBoundary.jsx` — app-wide error boundary, wired into `main.jsx`

### Phase 1 — what was built

Full navigation flow implemented: **Home → Class → Subject → Chapter → Topic**

- `src/pages/HomePage.jsx` — portal name, tagline, "Start Teaching", "Continue Last Lesson" (placeholder, disabled), quick access to Class 5 Mathematics, working Projector Mode fullscreen toggle
- `src/pages/ClassSelectionPage.jsx` + `src/data/classes.js` — Class 5 active, Classes 4/6–10 shown as "Coming Soon"
- `src/pages/SubjectSelectionPage.jsx` + `src/data/subjects.js` — Mathematics active, Science "Coming Soon"
- `src/pages/ChapterSelectionPage.jsx` + `src/data/chapters.js` — Chapter 1: Numbers active, other chapters "Coming Soon"
- `src/pages/TopicSelectionPage.jsx` + `src/data/topics.js` — Place Value active, other 8 topics under Chapter 1 "Coming Soon"
- `src/pages/NotFoundPage.jsx` — catch-all route (`*`), used since the Place Value lesson page itself isn't built yet (Phase 2/3)
- Routes wired in `src/App.jsx` using nested URL params (`/class/:classId/subject/:subjectId/chapter/:chapterId/topic`)

### Phase 2 — what was built

Data-driven, reusable lesson engine:

- `src/layouts/LessonLayout.jsx` — top bar (breadcrumb + fullscreen + exit), main content area, bottom bar (Previous / step counter / Next)
- `src/pages/LessonPage.jsx` — reads route params, loads a lesson by `topicId` from a lesson registry, steps through it
- `src/components/teaching/LessonStepRenderer.jsx` — switches on `step.type` and renders the right component; supports `intro`/`text`, `visual`/`animation` (via a component registry keyed by `step.component`), `example`, `activity`/`question`, `answer`, `summary`, `homework`
- Content components: `ExplanationPanel.jsx`, `ExampleCard.jsx`, `SummaryCard.jsx`, `PracticeQuestion.jsx` (with Reveal/Hide Answer)
- `src/components/teaching/AnimationControls.jsx` — reusable Play/Pause/Replay/Reset control bar
- `src/components/teaching/AnimatedStepDemo.jsx` — fallback demo animation for any `visual`/`animation` step whose real component isn't built yet
- Lessons are plain JS data objects (`src/data/class5Numbers.js`), per the plan's data-driven approach — no giant hardcoded components

### Phase 3, Module 3.1 — Place Value (what was built)

The first complete educational module, matching Plan.md §10 (Screens 1–11):

- `src/components/numbers/PlaceValueChart.jsx` — animated digit columns (Ten Thousands → Ones) for a sample number; clicking a digit shows Digit, Place, Face Value, Place Value, **and a "why" explanation line** (digit × place value = result)
- `src/components/numbers/ExpandedFormReveal.jsx` — reveals expanded-form parts one at a time on click (teacher-controlled, not autoplay), with Reset
- `src/components/numbers/CustomNumberChart.jsx` — teacher enters any number (0–99,999), with input validation (whole numbers only, in-range, clear error messages), regenerates the place-value chart
- `src/data/class5Numbers.js` — the full Place Value lesson: intro → chart → expanded form → worked example → custom number → 4 practice questions (place value, face value, expanded form, expanded-to-standard) → summary. Practice questions include a "Reveal Answer" button plus a short explanation shown alongside the answer
- `src/data/quizzes.js` + `src/pages/QuizPage.jsx` + `src/components/teaching/QuizQuestion.jsx` — 10-question chapter quiz (mix of multiple-choice and fill-in-the-blank), each question shows correct/incorrect feedback **and an explanation**, tracks score, gated "Next Question" until answered, final score screen with Retry Quiz, full-screen toggle
- "Take Quiz" button appears on the lesson's final (summary) step, linking to `.../topic/:topicId/quiz`

### Decision: explanations everywhere, not just quiz

Per discussion: since the teacher reads short on-screen English and explains live in Hindi, every answer-bearing moment (quiz questions, practice questions, and the Place Value Chart's digit click) now shows a short "why" explanation, not just the correct answer — reinforces understanding instead of just stating a fact.

### Visual design pass

The plan's "bright but professional visuals" requirement (§4) wasn't being met by the initial flat white/blue look, so a design pass was done across all built pages (not deferred to a later phase, since this is a baseline requirement, not projector-specific tuning):

- Global gradient-tinted background (`src/index.css`) instead of flat white
- `src/components/common/SelectionCard.jsx` — shared card style (hover lift, lock icon for "Coming Soon") used across Class/Subject/Chapter/Topic selection pages
- Home page redesigned with a frosted card, icon badge, and icons on buttons (`lucide-react`)
- Lesson and Quiz pages redesigned with frosted header/footer bars, a step-progress bar, and content inside a floating card

### Navigation: breadcrumb + Back button

Added because browser back-button-only navigation isn't practical for live classroom use:

- `src/components/common/BackButton.jsx`, `Breadcrumb.jsx`, `PageHeader.jsx` — a large Back button (goes up one level) plus a clickable breadcrumb trail (Home › Class 5 › Mathematics › ...), wired into all four selection pages, and also into the Lesson (`LessonLayout`) and Quiz (`QuizPage`) headers
- Final design for Lesson/Quiz headers: **Back button** = go up one level to the Topic selection page (`backTo` prop); **✕** = exit all the way to Home. Two distinct actions, not redundant.

### Bug fixes

- The "✕" exit button in `LessonLayout`/`QuizPage` was originally hardcoded to navigate to Home regardless of context; fixed, then further refined into the Back-button/✕ split described above.
- `PracticeQuestion`'s "Reveal Answer" state was leaking across lesson steps — clicking Next while an answer was revealed kept it revealed on the next question too, because React reused the same component instance. Fixed by giving `LessonStepRenderer` a `key={currentStepIndex}` in `LessonPage`, forcing a full remount (and state reset) on every step change.
- `QuizPage`'s fullscreen button used a text label ("Full-screen") while `LessonLayout`'s used an icon — inconsistent. Fixed to use the same Maximize/Minimize icon.
- `IndianPlaceValueChart`'s 9 columns wrapped onto two lines at some viewport widths (`flex-wrap`), breaking the layout. Fixed with `flex-nowrap` + horizontal scroll scoped to the chart only (not the whole page), plus smaller column sizing.

### Working agreement: content/UX improvements

Per user instruction: don't follow Plan.md rigidly — if an improvement is spotted while building (missing theory before a demo, a confusing flow, etc.), Claude should proactively suggest it, and the user decides whether to add it. Two examples already applied to the Place Value lesson:

- Added a "What is Face Value?" theory step (previously only Place Value had an intro, even though Face Value was tested in practice/quiz)
- Added a "What is Expanded Form?" theory step, which also introduces Standard Form as its counterpart, before the expanded-form reveal demo

### Working agreement: tricks and shortcuts

Per user instruction: wherever it fits naturally, add tricks to make lessons more attractive and memorable for students — not just memory/mnemonic tricks (e.g. the alligator-mouth trick for `>`/`<`, comma-grouping rhymes) but also genuine **math shortcut tricks** for solving problems faster (e.g. quick divisibility checks, fast multiplication tricks, estimation shortcuts). These should be added as small enhancements to existing steps, not separate heavyweight screens, and only where they don't get in the way of the core understand-first teaching flow. Not started yet — apply opportunistically module by module, and proactively suggest one when a natural fit is spotted (per the working agreement above), rather than treating it as a checklist to complete all at once.

Ideas already discussed, not yet built:
- Comparing Numbers: alligator/crocodile-mouth visual for `>`/`<` (mouth opens toward the bigger number)
- Indian vs. International systems: a "3-3-2 vs 3-3-3" comma-grouping rhyme
- Place Value: a "move left, multiply by 10" chant for reading the chart

### Phase 3, Module 3.2 — Indian Number System (what was built)

Mirrors the Place Value module's structure, per Plan.md §Module 3.2:

- `src/components/numbers/IndianPlaceValueChart.jsx` — 9-column chart (Ten Crore → One) with the same digit-click reveal + "why" explanation pattern as the Place Value chart
- `src/components/numbers/CommaPlacementReveal.jsx` — reveals Indian comma grouping one comma at a time (rightmost group of 3, then groups of 2), e.g. `74532618` → `74532,618` → `745,32,618` → `7,45,32,618`
- `src/components/numbers/NumberNameReveal.jsx` — reveals the number's word-name one phrase at a time (crore → lakh → thousand → ones)
- `src/components/numbers/IndianNumberConverter.jsx` — teacher enters any number (0–999,999,999, validated), sees it comma-formatted and read out in words ("Try Your Own Number")
- `src/utils/numberToIndianWords.js` — number-to-Indian-words conversion utility (reverse, words-to-number, not built yet — see below)
- `src/data/indianNumberSystem.js` — full lesson: intro → chart → comma theory + reveal → number-name theory + reveal → converter → 4 practice questions → summary
- `quizzes['indian-number-system']` — 10-question quiz, same engine as Place Value's quiz
- `topics.js` — "Indian Number System" marked active

### Decision: color-coded comma groups

Per discussion: the Place Value groupings (Crore/Lakh/Thousand/Ones) are now color-coded consistently across all three related components (chart, comma reveal, number-name reveal) using a shared mapping in `src/utils/indianGroupColors.js` — amber=Crore, violet=Lakh, emerald=Thousand, sky=Ones — plus a small `IndianGroupLegend.jsx` repeated near each. This ties the visual grouping, the comma placement, and the number name together so the concept reads as one system rather than three separate demos. Not yet applied to the Module 3.1 (English) Place Value Chart, which only has 5 uniform columns.

### Not yet built: number-name → numeral conversion

The plan calls for both directions ("Number-name-to-number conversion" and "Number-to-number-name conversion" — Module 3.2). Only the forward direction (number → words) is built; parsing typed English number-words back into a numeral would need a small parser and hasn't been built yet. Same gap applies to Module 3.3 below.

### Phase 3, Module 3.3 — International Number System (what was built)

Mirrors Module 3.2's structure, per Plan.md §Module 3.3:

- `src/components/numbers/InternationalPlaceValueChart.jsx` — 9-column chart (Hundred Million → One), grouped in 3s (Million/Thousand/Ones), color-coded with a legend
- `src/components/numbers/InternationalCommaReveal.jsx` — reveals International comma grouping one comma at a time (all groups of 3), e.g. `74532618` → `74532,618` → `74,532,618`
- `src/components/numbers/InternationalNumberNameReveal.jsx` — reveals the number's word-name one phrase at a time (million → thousand → hundreds)
- `src/components/numbers/IndianVsInternationalComparison.jsx` — shows the same number in both systems side by side, explaining the different comma positions
- `src/components/numbers/InternationalNumberConverter.jsx` — teacher enters any number, sees it comma-formatted + read in International words ("Try Your Own Number")
- `src/utils/englishNumberWords.js` — shared ones/tens-to-words helper extracted from the Indian words utility, reused by both Indian and International word converters (avoids duplicating that logic)
- `src/utils/numberToInternationalWords.js` + `src/utils/internationalGroupColors.js` — International-specific word conversion and group color mapping (amber=Million, violet=Thousand, emerald=Ones — 3 groups here vs. 4 for Indian)
- `src/data/internationalNumberSystem.js` — full lesson: intro → chart → comma theory + reveal → number-name theory + reveal → Indian vs. International comparison → converter → 4 practice questions (including cross-system conversion) → summary
- `quizzes['international-number-system']` — 10-question quiz, same engine as the other modules' quizzes
- `topics.js` — "International Number System" marked active

### Phase 3, Module 3.4 — Comparing Numbers (🔶 in progress)

Per Plan.md §Module 3.4. Done so far:

- `src/components/numbers/NumberComparisonReveal.jsx` — teacher-controlled, staged comparison of two numbers: (1) compare digit count first — if unequal, jumps straight to the result; (2) if equal length, reveals place-by-place and highlights the first differing digit; (3) shows the final `>`/`<`/`=` symbol with a plain-English explanation. Buttons: Compare Digit Count → Compare Place by Place → Show Result, plus Reset.
- `src/data/comparingNumbers.js` — lesson started (intro + the comparison demo using 45,672 vs 45,267), not finished
- `topics.js` — "Comparing Numbers" marked active
- Registered in `LessonStepRenderer`'s `visualComponents` map and `LessonPage`'s `lessonsByTopic` registry

**Still to do for this module:**
- Teacher-generated custom comparison (two number inputs + validation, similar to `CustomNumberChart`/`IndianNumberConverter` pattern) — reuse `NumberComparisonReveal` underneath
- 4 practice questions (choose correct symbol, select greater number, arrange two numbers) + summary step
- 10-question quiz in `quizzes.js` keyed `'comparing-numbers'`
- Optional: the plan mentions an "alligator-mouth visual" for younger students — skipped so far, not essential for Class 5

**Resume point:** continue from "teacher-generated custom comparison" above.

---

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
- ~~Plain CSS or CSS Modules~~ → **Tailwind CSS v4** (decision changed, see Progress Log)
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

## Phase 0 — Project Cleanup and Foundation ✅ Done

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

## Phase 1 — Core UI and Navigation ✅ Done

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

## Phase 2 — Reusable Teaching Engine ✅ Done

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

## Phase 3 — Class 5 Chapter 1: Numbers (Modules 3.1–3.3 ✅ Done; Modules 3.4–3.7 not started)

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
