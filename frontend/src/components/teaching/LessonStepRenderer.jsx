import ExplanationPanel from './ExplanationPanel.jsx'
import ExampleCard from './ExampleCard.jsx'
import SummaryCard from './SummaryCard.jsx'
import AnimatedStepDemo from './AnimatedStepDemo.jsx'
import PracticeQuestion from './PracticeQuestion.jsx'
import PlaceValueChart from '../numbers/PlaceValueChart.jsx'
import ExpandedFormReveal from '../numbers/ExpandedFormReveal.jsx'
import CustomNumberChart from '../numbers/CustomNumberChart.jsx'
import IndianPlaceValueChart from '../numbers/IndianPlaceValueChart.jsx'
import CommaPlacementReveal from '../numbers/CommaPlacementReveal.jsx'
import NumberNameReveal from '../numbers/NumberNameReveal.jsx'
import IndianNumberConverter from '../numbers/IndianNumberConverter.jsx'
import InternationalPlaceValueChart from '../numbers/InternationalPlaceValueChart.jsx'
import InternationalCommaReveal from '../numbers/InternationalCommaReveal.jsx'
import InternationalNumberNameReveal from '../numbers/InternationalNumberNameReveal.jsx'
import IndianVsInternationalComparison from '../numbers/IndianVsInternationalComparison.jsx'
import InternationalNumberConverter from '../numbers/InternationalNumberConverter.jsx'
import NumberComparisonReveal from '../numbers/NumberComparisonReveal.jsx'
import CustomNumberComparison from '../numbers/CustomNumberComparison.jsx'
import NumberOrderReveal from '../numbers/NumberOrderReveal.jsx'
import CustomNumberOrder from '../numbers/CustomNumberOrder.jsx'
import RoundingNumberLine from '../numbers/RoundingNumberLine.jsx'
import CustomRounding from '../numbers/CustomRounding.jsx'
import NumberLinePosition from '../numbers/NumberLinePosition.jsx'
import NumberLineJump from '../numbers/NumberLineJump.jsx'
import CustomNumberLineJump from '../numbers/CustomNumberLineJump.jsx'
import FractionVisual from '../fractions/FractionVisual.jsx'
import CustomFractionVisual from '../fractions/CustomFractionVisual.jsx'
import PizzaFractionIllustration from '../fractions/PizzaFractionIllustration.jsx'
import EquivalentFractionsReveal from '../fractions/EquivalentFractionsReveal.jsx'
import CustomEquivalentFractions from '../fractions/CustomEquivalentFractions.jsx'
import FractionCompareVisual from '../fractions/FractionCompareVisual.jsx'
import CustomFractionCompare from '../fractions/CustomFractionCompare.jsx'
import MixedNumberReveal from '../fractions/MixedNumberReveal.jsx'
import MixedNumberLine from '../fractions/MixedNumberLine.jsx'
import CustomMixedNumber from '../fractions/CustomMixedNumber.jsx'

const illustrationComponents = {
  PizzaFractionIllustration,
}

const visualComponents = {
  PlaceValueChart,
  ExpandedFormReveal,
  CustomNumberChart,
  IndianPlaceValueChart,
  CommaPlacementReveal,
  NumberNameReveal,
  IndianNumberConverter,
  InternationalPlaceValueChart,
  InternationalCommaReveal,
  InternationalNumberNameReveal,
  IndianVsInternationalComparison,
  InternationalNumberConverter,
  NumberComparisonReveal,
  CustomNumberComparison,
  NumberOrderReveal,
  CustomNumberOrder,
  RoundingNumberLine,
  CustomRounding,
  NumberLinePosition,
  NumberLineJump,
  CustomNumberLineJump,
  FractionVisual,
  CustomFractionVisual,
  EquivalentFractionsReveal,
  CustomEquivalentFractions,
  FractionCompareVisual,
  CustomFractionCompare,
  MixedNumberReveal,
  MixedNumberLine,
  CustomMixedNumber,
}

// Visual/activity/question steps plug in real components here as they're built (Phase 3+).
const placeholder = (label) => (
  <div className="text-projector-sm text-slate-400 text-center">{label} — coming soon</div>
)

function LessonStepRenderer({ step }) {
  if (!step) return null

  switch (step.type) {
    case 'intro':
    case 'text': {
      const IllustrationComponent = illustrationComponents[step.illustration]
      return (
        <ExplanationPanel
          title={step.title}
          text={step.text}
          illustration={IllustrationComponent ? <IllustrationComponent {...step.illustrationProps} /> : null}
        />
      )
    }

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
