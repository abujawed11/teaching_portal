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
import { chapterPracticeLesson } from '../data/chapterPractice.js'
import { whatIsAFractionLesson } from '../data/whatIsAFraction.js'
import { equivalentFractionsLesson } from '../data/equivalentFractions.js'
import { comparingFractionsLesson } from '../data/comparingFractions.js'
import { fractionsGreaterThanOneLesson } from '../data/fractionsGreaterThanOne.js'
import { whatIsAComputerLesson } from '../data/whatIsAComputer.js'
import { computerHardwareLesson } from '../data/computerHardware.js'
import { typesOfComputersOSLesson } from '../data/typesOfComputersOS.js'
import { foundationsPracticeLesson } from '../data/foundationsPractice.js'
import { whatIsMathematicsLesson } from '../data/whatIsMathematics.js'
import { sequenceRelationsLesson } from '../data/sequenceRelations.js'
import { numberSequencesLesson } from '../data/numberSequences.js'
import { shapeSequencesLesson } from '../data/shapeSequences.js'
import { patternsChapterPracticeLesson } from '../data/patternsChapterPractice.js'
import { pointsLinesRaysLesson } from '../data/pointsLinesRays.js'
import { whatIsAnAngleLesson } from '../data/whatIsAnAngle.js'
import { specialAnglesBisectorsLesson } from '../data/specialAnglesBisectors.js'
import { measuringAnglesLesson } from '../data/measuringAngles.js'
import { angleTypesRealWorldLesson } from '../data/angleTypesRealWorld.js'
import { anglesChapterPracticeLesson } from '../data/anglesChapterPractice.js'
import { buildingBigNumbersLesson } from '../data/buildingBigNumbers.js'
import { landOfTensLesson } from '../data/landOfTens.js'
import { freshwaterVsSaltwaterLesson } from '../data/freshwaterVsSaltwater.js'
import { formsOfWaterLesson } from '../data/formsOfWater.js'
import { waterCycleLesson } from '../data/waterCycle.js'
import { groundwaterLesson } from '../data/groundwater.js'
import { quizzes } from '../data/quizzes.js'
import { subjects } from '../data/subjects.js'
import { getChapterLabel } from '../data/chapters.js'
import { buildBreadcrumb } from '../utils/navBreadcrumb.js'

const lessonsByTopic = {
  'place-value': placeValueLesson,
  'indian-number-system': indianNumberSystemLesson,
  'international-number-system': internationalNumberSystemLesson,
  'comparing-numbers': comparingNumbersLesson,
  'ascending-descending-order': ascendingDescendingOrderLesson,
  'rounding-numbers': roundingNumbersLesson,
  'number-line': numberLineLesson,
  'chapter-practice': chapterPracticeLesson,
  'what-is-a-fraction': whatIsAFractionLesson,
  'equivalent-fractions': equivalentFractionsLesson,
  'comparing-fractions': comparingFractionsLesson,
  'fractions-greater-than-one': fractionsGreaterThanOneLesson,
  'what-is-a-computer': whatIsAComputerLesson,
  'computer-hardware': computerHardwareLesson,
  'types-of-computers-os': typesOfComputersOSLesson,
  'foundations-practice': foundationsPracticeLesson,
  'what-is-mathematics': whatIsMathematicsLesson,
  'sequence-relations': sequenceRelationsLesson,
  'number-sequences': numberSequencesLesson,
  'shape-sequences': shapeSequencesLesson,
  'patterns-chapter-practice': patternsChapterPracticeLesson,
  'points-lines-rays': pointsLinesRaysLesson,
  'what-is-an-angle': whatIsAnAngleLesson,
  'special-angles-bisectors': specialAnglesBisectorsLesson,
  'measuring-angles': measuringAnglesLesson,
  'angle-types-real-world': angleTypesRealWorldLesson,
  'angles-chapter-practice': anglesChapterPracticeLesson,
  'building-big-numbers': buildingBigNumbersLesson,
  'land-of-tens': landOfTensLesson,
  'freshwater-vs-saltwater': freshwaterVsSaltwaterLesson,
  'forms-of-water': formsOfWaterLesson,
  'water-cycle': waterCycleLesson,
  'groundwater': groundwaterLesson,
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
  const chapterLabel = getChapterLabel(classId, subjectId, chapterId)
  const topicListPath = `/class/${classId}/subject/${subjectId}/chapter/${chapterId}/topic`

  const breadcrumb = buildBreadcrumb({
    classId,
    subjectId,
    subjectLabel,
    chapterLabel,
    topicLabel: lesson?.title ?? topicId,
  })

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
