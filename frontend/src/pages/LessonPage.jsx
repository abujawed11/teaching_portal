import { useParams, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import LessonLayout from '../layouts/LessonLayout.jsx'
import LessonStepRenderer from '../components/teaching/LessonStepRenderer.jsx'
import Button from '../components/common/Button.jsx'
import { placeValueLesson } from '../data/class5Numbers.js'
import { indianNumberSystemLesson } from '../data/indianNumberSystem.js'
import { internationalNumberSystemLesson } from '../data/internationalNumberSystem.js'
import { comparingNumbersLesson } from '../data/comparingNumbers.js'
import { ascendingDescendingOrderLesson } from '../data/ascendingDescendingOrder.js'
import { roundingNumbersLesson } from '../data/roundingNumbers.js'
import { numberLineLesson } from '../data/numberLine.js'
import { quizzes } from '../data/quizzes.js'
import { subjects } from '../data/subjects.js'
import { chapters } from '../data/chapters.js'

const lessonsByTopic = {
  'place-value': placeValueLesson,
  'indian-number-system': indianNumberSystemLesson,
  'international-number-system': internationalNumberSystemLesson,
  'comparing-numbers': comparingNumbersLesson,
  'ascending-descending-order': ascendingDescendingOrderLesson,
  'rounding-numbers': roundingNumbersLesson,
  'number-line': numberLineLesson,
}

function LessonPage() {
  const { classId, subjectId, chapterId, topicId } = useParams()
  const navigate = useNavigate()
  const [currentStepIndex, setCurrentStepIndex] = useState(0)

  const lesson = lessonsByTopic[topicId]
  const steps = lesson?.steps ?? []
  const totalSteps = steps.length
  const currentStep = steps[currentStepIndex]
  const isLastStep = currentStepIndex === totalSteps - 1
  const hasQuiz = Boolean(quizzes[topicId])

  const subjectLabel = subjects.find((s) => s.id === subjectId)?.label ?? subjectId
  const chapterLabel =
    (chapters[subjectId] ?? []).find((c) => c.id === chapterId)?.label ?? chapterId
  const topicListPath = `/class/${classId}/subject/${subjectId}/chapter/${chapterId}/topic`

  const breadcrumb = [
    { label: 'Home', to: '/' },
    { label: `Class ${classId}`, to: '/class' },
    { label: subjectLabel, to: `/class/${classId}/subject` },
    { label: chapterLabel, to: `/class/${classId}/subject/${subjectId}/chapter` },
    { label: lesson?.title ?? topicId },
  ]

  if (!lesson) {
    return (
      <LessonLayout breadcrumb={breadcrumb} backTo={topicListPath} currentStep={1} totalSteps={1}>
        <div className="text-center space-y-3">
          <h1 className="text-projector-md font-extrabold text-primary">Lesson Coming Soon</h1>
          <p className="text-projector-sm text-ink">This topic hasn't been built yet.</p>
        </div>
      </LessonLayout>
    )
  }

  return (
    <LessonLayout
      breadcrumb={breadcrumb}
      backTo={topicListPath}
      currentStep={currentStepIndex + 1}
      totalSteps={totalSteps}
      onPrevious={() => setCurrentStepIndex((s) => Math.max(0, s - 1))}
      onNext={() => setCurrentStepIndex((s) => Math.min(totalSteps - 1, s + 1))}
    >
      <div className="flex flex-col items-center gap-8">
        <LessonStepRenderer key={currentStepIndex} step={currentStep} />
        {isLastStep && hasQuiz && (
          <Button
            onClick={() =>
              navigate(
                `/class/${classId}/subject/${subjectId}/chapter/${chapterId}/topic/${topicId}/quiz`,
              )
            }
          >
            Take Quiz
          </Button>
        )}
      </div>
    </LessonLayout>
  )
}

export default LessonPage
