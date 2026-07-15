import { useNavigate } from 'react-router-dom'
import { Maximize, Minimize, X, ChevronLeft, ChevronRight } from 'lucide-react'
import { useFullscreen } from '../hooks/useFullscreen.js'
import BackButton from '../components/common/BackButton.jsx'
import Breadcrumb from '../components/common/Breadcrumb.jsx'

function LessonLayout({
  breadcrumb,
  backTo,
  children,
  currentStep,
  totalSteps,
  onPrevious,
  onNext,
}) {
  const navigate = useNavigate()
  const { isFullscreen, toggleFullscreen } = useFullscreen()
  const progress = totalSteps > 0 ? (currentStep / totalSteps) * 100 : 0

  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-white/80 backdrop-blur shadow-sm">
        <div className="flex items-center justify-between gap-4 px-6 py-4 flex-wrap">
          <div className="flex items-center gap-4 min-w-0">
            <BackButton to={backTo} />
            <Breadcrumb items={breadcrumb} />
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={toggleFullscreen}
              aria-label={isFullscreen ? 'Exit full-screen' : 'Enter full-screen'}
              className="p-2 rounded-lg hover:bg-slate-100 text-ink"
            >
              {isFullscreen ? <Minimize size={22} /> : <Maximize size={22} />}
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
            className="h-full bg-primary transition-all duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>
      </header>

      <main className="flex-1 flex items-center justify-center p-8">
        <div className="bg-white/80 backdrop-blur rounded-3xl shadow-xl shadow-slate-200/60 px-8 py-12 sm:px-14 w-full max-w-6xl flex items-center justify-center">
          {children}
        </div>
      </main>

      <footer className="bg-white/80 backdrop-blur shadow-sm flex items-center justify-between gap-4 px-6 py-4">
        <button
          onClick={onPrevious}
          disabled={currentStep <= 1}
          aria-label="Previous step"
          className="flex items-center gap-1 px-4 py-2 rounded-lg font-semibold text-ink
            hover:bg-slate-100 disabled:opacity-40 disabled:cursor-not-allowed"
        >
          <ChevronLeft size={20} /> Previous
        </button>

        <div className="text-sm sm:text-base font-medium text-slate-500">
          Step {currentStep} of {totalSteps}
        </div>

        <button
          onClick={onNext}
          disabled={currentStep >= totalSteps}
          aria-label="Next step"
          className="flex items-center gap-1 px-4 py-2 rounded-lg font-semibold text-ink
            hover:bg-slate-100 disabled:opacity-40 disabled:cursor-not-allowed"
        >
          Next <ChevronRight size={20} />
        </button>
      </footer>
    </div>
  )
}

export default LessonLayout
