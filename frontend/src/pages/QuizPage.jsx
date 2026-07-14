import { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { X } from 'lucide-react'
import { quizzes } from '../data/quizzes.js'
import { subjects } from '../data/subjects.js'
import { chapters } from '../data/chapters.js'
import { topics } from '../data/topics.js'
import QuizQuestion from '../components/teaching/QuizQuestion.jsx'
import Button from '../components/common/Button.jsx'
import BackButton from '../components/common/BackButton.jsx'
import Breadcrumb from '../components/common/Breadcrumb.jsx'
import { useFullscreen } from '../hooks/useFullscreen.js'

function QuizPage() {
  const navigate = useNavigate()
  const { classId, subjectId, chapterId, topicId } = useParams()
  const { isFullscreen, toggleFullscreen } = useFullscreen()

  const subjectLabel = subjects.find((s) => s.id === subjectId)?.label ?? subjectId
  const chapterLabel =
    (chapters[subjectId] ?? []).find((c) => c.id === chapterId)?.label ?? chapterId
  const topicLabel = (topics[chapterId] ?? []).find((t) => t.id === topicId)?.label ?? topicId
  const topicListPath = `/class/${classId}/subject/${subjectId}/chapter/${chapterId}/topic`

  const breadcrumb = [
    { label: 'Home', to: '/' },
    { label: `Class ${classId}`, to: '/class' },
    { label: subjectLabel, to: `/class/${classId}/subject` },
    { label: chapterLabel, to: `/class/${classId}/subject/${subjectId}/chapter` },
    { label: topicLabel, to: topicListPath },
    { label: 'Quiz' },
  ]

  const questions = quizzes[topicId] ?? []
  const [currentIndex, setCurrentIndex] = useState(0)
  const [score, setScore] = useState(0)
  const [answeredThisQuestion, setAnsweredThisQuestion] = useState(false)

  if (questions.length === 0) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center gap-6 p-8 text-center">
        <h1 className="text-projector-md font-extrabold text-primary">Quiz Coming Soon</h1>
        <Button onClick={() => navigate('/')}>Back to Home</Button>
      </div>
    )
  }

  const isFinished = currentIndex >= questions.length

  const handleAnswered = (isCorrect) => {
    if (answeredThisQuestion) return
    setAnsweredThisQuestion(true)
    if (isCorrect) setScore((s) => s + 1)
  }

  const nextQuestion = () => {
    setCurrentIndex((i) => i + 1)
    setAnsweredThisQuestion(false)
  }

  const retry = () => {
    setCurrentIndex(0)
    setScore(0)
    setAnsweredThisQuestion(false)
  }

  const progress = ((isFinished ? questions.length : currentIndex) / questions.length) * 100

  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-white/80 backdrop-blur shadow-sm">
        <div className="flex items-center justify-between gap-4 px-6 py-4 flex-wrap">
          <div className="flex items-center gap-4 min-w-0">
            <BackButton to={topicListPath} />
            <Breadcrumb items={breadcrumb} />
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={toggleFullscreen}
              aria-label={isFullscreen ? 'Exit full-screen' : 'Enter full-screen'}
              className="text-sm font-medium text-slate-500 hover:text-ink"
            >
              {isFullscreen ? 'Exit Full-screen' : 'Full-screen'}
            </button>
            <button
              onClick={() => navigate('/')}
              aria-label="Exit to home"
              className="p-2 rounded-lg hover:bg-slate-100 text-ink"
            >
              <X size={22} />
            </button>
          </div>
        </div>
        <div className="h-1 bg-slate-100">
          <div
            className="h-full bg-accent transition-all duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>
      </header>

      <main className="flex-1 flex items-center justify-center p-8">
        <div className="bg-white/80 backdrop-blur rounded-3xl shadow-xl shadow-slate-200/60 px-8 py-12 sm:px-14 w-full max-w-4xl flex items-center justify-center">
          {isFinished ? (
            <div className="flex flex-col items-center gap-6 text-center">
              <h1 className="text-projector-md font-extrabold text-primary">Quiz Complete!</h1>
              <p className="text-projector-sm text-ink">
                Score: {score} / {questions.length}
              </p>
              <Button onClick={retry}>Retry Quiz</Button>
            </div>
          ) : (
            <QuizQuestion
              key={currentIndex}
              questionData={questions[currentIndex]}
              onAnswered={handleAnswered}
            />
          )}
        </div>
      </main>

      {!isFinished && (
        <footer className="bg-white/80 backdrop-blur shadow-sm flex items-center justify-between gap-4 px-6 py-4">
          <div className="text-sm sm:text-base font-medium text-slate-500">
            Question {currentIndex + 1} of {questions.length}
          </div>
          <div className="text-sm sm:text-base font-medium text-slate-500">Score: {score}</div>
          <button
            onClick={nextQuestion}
            disabled={!answeredThisQuestion}
            className="px-4 py-2 rounded-lg font-semibold text-ink hover:bg-slate-100
              disabled:opacity-40 disabled:cursor-not-allowed"
          >
            Next Question
          </button>
        </footer>
      )}
    </div>
  )
}

export default QuizPage
