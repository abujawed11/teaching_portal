import { useParams } from 'react-router-dom'
import { useState } from 'react'
import LessonLayout from '../layouts/LessonLayout.jsx'
import LessonStepRenderer from '../components/teaching/LessonStepRenderer.jsx'
import { placeValueLesson } from '../data/class5Numbers.js'

const lessonsByTopic = {
  'place-value': placeValueLesson,
}

function LessonPage() {
  const { classId, subjectId, chapterId, topicId } = useParams()
  const [currentStepIndex, setCurrentStepIndex] = useState(0)

  const lesson = lessonsByTopic[topicId]
  const steps = lesson?.steps ?? []
  const totalSteps = steps.length
  const currentStep = steps[currentStepIndex]

  const breadcrumb = `Class ${classId} • ${subjectId} • ${chapterId} • ${lesson?.title ?? topicId}`

  if (!lesson) {
    return (
      <LessonLayout breadcrumb={breadcrumb} currentStep={1} totalSteps={1}>
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
      currentStep={currentStepIndex + 1}
      totalSteps={totalSteps}
      onPrevious={() => setCurrentStepIndex((s) => Math.max(0, s - 1))}
      onNext={() => setCurrentStepIndex((s) => Math.min(totalSteps - 1, s + 1))}
    >
      <LessonStepRenderer step={currentStep} />
    </LessonLayout>
  )
}

export default LessonPage
