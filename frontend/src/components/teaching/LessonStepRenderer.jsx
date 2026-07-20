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
import InputProcessOutputAnimation from '../computer/InputProcessOutputAnimation.jsx'
import HardwareSoftwareSort from '../computer/HardwareSoftwareSort.jsx'
import ComputerPartsExplorer from '../computer/ComputerPartsExplorer.jsx'
import IdentifyPortActivity from '../computer/IdentifyPortActivity.jsx'
import InputOutputSort from '../computer/InputOutputSort.jsx'
import DeviceCategoryMatch from '../computer/DeviceCategoryMatch.jsx'
import TerminologyList from '../computer/TerminologyList.jsx'
import ComparisonTable from '../computer/ComparisonTable.jsx'
import OSDeviceMatchDrag from '../computer/OSDeviceMatchDrag.jsx'
import PatternsEverywhereShowcase from '../patterns/PatternsEverywhereShowcase.jsx'
import OddSquareBuilder from '../patterns/OddSquareBuilder.jsx'
import SequenceExplorer from '../patterns/SequenceExplorer.jsx'
import TriangleSquareMorph from '../patterns/TriangleSquareMorph.jsx'
import RegularPolygonBuilder from '../patterns/RegularPolygonBuilder.jsx'
import CompleteGraphBuilder from '../patterns/CompleteGraphBuilder.jsx'
import KochSnowflake from '../patterns/KochSnowflake.jsx'
import StackedTriangleGrid from '../patterns/StackedTriangleGrid.jsx'
import SpeedBumpDemo from '../patterns/SpeedBumpDemo.jsx'
import ProtractorTool from '../angles/ProtractorTool.jsx'
import SegmentRayLineToggle from '../angles/SegmentRayLineToggle.jsx'
import RayNamingDiagram from '../angles/RayNamingDiagram.jsx'
import AngleRotationPlayground from '../angles/AngleRotationPlayground.jsx'
import AngleSuperimposeCompare from '../angles/AngleSuperimposeCompare.jsx'
import ArmLengthMythBuster from '../angles/ArmLengthMythBuster.jsx'
import AmbiguousAngleNamingDiagram from '../angles/AmbiguousAngleNamingDiagram.jsx'
import RealWorldAngleSpotter from '../angles/RealWorldAngleSpotter.jsx'
import RayFanDiagram from '../angles/RayFanDiagram.jsx'
import SharedRayAngleDiagram from '../angles/SharedRayAngleDiagram.jsx'
import FourPointLinesAnglesDiagram from '../angles/FourPointLinesAnglesDiagram.jsx'
import AngleBisectorFold from '../angles/AngleBisectorFold.jsx'
import AngleTypeGallery from '../angles/AngleTypeGallery.jsx'
import ReflexAngleDemo from '../angles/ReflexAngleDemo.jsx'
import UpDownDiamondBuilder from '../patterns/UpDownDiamondBuilder.jsx'

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
  InputProcessOutputAnimation,
  HardwareSoftwareSort,
  ComputerPartsExplorer,
  IdentifyPortActivity,
  InputOutputSort,
  DeviceCategoryMatch,
  TerminologyList,
  ComparisonTable,
  OSDeviceMatchDrag,
  PatternsEverywhereShowcase,
  OddSquareBuilder,
  SequenceExplorer,
  TriangleSquareMorph,
  RegularPolygonBuilder,
  CompleteGraphBuilder,
  KochSnowflake,
  StackedTriangleGrid,
  SpeedBumpDemo,
  ProtractorTool,
  SegmentRayLineToggle,
  RayNamingDiagram,
  AngleRotationPlayground,
  AngleSuperimposeCompare,
  ArmLengthMythBuster,
  AmbiguousAngleNamingDiagram,
  RealWorldAngleSpotter,
  RayFanDiagram,
  SharedRayAngleDiagram,
  FourPointLinesAnglesDiagram,
  AngleBisectorFold,
  AngleTypeGallery,
  ReflexAngleDemo,
  UpDownDiamondBuilder,
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
          image={step.image}
          images={step.images}
          analogy={step.analogy}
        />
      )
    }

    case 'visual':
    case 'animation': {
      const VisualComponent = visualComponents[step.component]
      return (
        <div className="flex flex-col items-center gap-5 w-full">
          {(step.title || step.text) && (
            <div className="text-center max-w-2xl">
              {step.title && <h3 className="text-projector-md font-bold text-ink mb-2">{step.title}</h3>}
              {step.text && <p className="text-projector-sm text-slate-600 whitespace-pre-line">{step.text}</p>}
            </div>
          )}
          {VisualComponent ? (
            <VisualComponent {...step.props} />
          ) : (
            <AnimatedStepDemo label={step.component ?? 'Animated Demo'} />
          )}
        </div>
      )
    }

    case 'example':
      return <ExampleCard title={step.title} problem={step.problem} solution={step.solution} />

    case 'activity':
    case 'question': {
      const VisualComponent = visualComponents[step.visual]
      const PromptVisualComponent = visualComponents[step.promptVisual]
      return (
        <PracticeQuestion
          question={step.question}
          answer={step.answer}
          explanation={step.explanation}
          visual={VisualComponent ? <VisualComponent {...step.visualProps} /> : null}
          promptVisual={PromptVisualComponent ? <PromptVisualComponent {...step.promptVisualProps} /> : null}
        />
      )
    }

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
