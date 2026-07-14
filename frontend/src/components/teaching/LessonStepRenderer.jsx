import ExplanationPanel from './ExplanationPanel.jsx'
import ExampleCard from './ExampleCard.jsx'
import SummaryCard from './SummaryCard.jsx'
import AnimatedStepDemo from './AnimatedStepDemo.jsx'
import PracticeQuestion from './PracticeQuestion.jsx'
import PlaceValueChart from '../numbers/PlaceValueChart.jsx'
import ExpandedFormReveal from '../numbers/ExpandedFormReveal.jsx'
import CustomNumberChart from '../numbers/CustomNumberChart.jsx'

const visualComponents = {
  PlaceValueChart,
  ExpandedFormReveal,
  CustomNumberChart,
}

// Visual/activity/question steps plug in real components here as they're built (Phase 3+).
const placeholder = (label) => (
  <div className="text-projector-sm text-slate-400 text-center">{label} — coming soon</div>
)

function LessonStepRenderer({ step }) {
  if (!step) return null

  switch (step.type) {
    case 'intro':
    case 'text':
      return <ExplanationPanel title={step.title} text={step.text} />

    case 'visual':
    case 'animation': {
      const VisualComponent = visualComponents[step.component]
      return VisualComponent ? (
        <VisualComponent {...step.props} />
      ) : (
        <AnimatedStepDemo label={step.component ?? 'Animated Demo'} />
      )
    }

    case 'example':
      return <ExampleCard title={step.title} problem={step.problem} solution={step.solution} />

    case 'activity':
    case 'question':
      return (
        <PracticeQuestion
          question={step.question}
          answer={step.answer}
          explanation={step.explanation}
        />
      )

    case 'answer':
      return placeholder('Answer reveal')

    case 'summary':
      return <SummaryCard title={step.title} points={step.points} />

    case 'homework':
      return placeholder('Homework')

    default:
      return placeholder(`Unknown step type: ${step.type}`)
  }
}

export default LessonStepRenderer
