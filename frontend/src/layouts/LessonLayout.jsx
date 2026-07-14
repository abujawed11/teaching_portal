import { useNavigate } from 'react-router-dom'
import { Maximize, Minimize, ChevronLeft, ChevronRight, X } from 'lucide-react'
import { useFullscreen } from '../hooks/useFullscreen.js'

function LessonLayout({
  breadcrumb,
  children,
  currentStep,
  totalSteps,
  onPrevious,
  onNext,
}) {
  const navigate = useNavigate()
  const { isFullscreen, toggleFullscreen } = useFullscreen()

  return (
    <div className="min-h-screen flex flex-col">
      <header className="flex items-center justify-between gap-4 px-6 py-4 border-b border-slate-200">
        <div className="text-sm sm:text-base font-medium text-slate-500 truncate">
          {breadcrumb}
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
            aria-label="Exit lesson"
            className="p-2 rounded-lg hover:bg-slate-100 text-ink"
          >
            <X size={22} />
          </button>
        </div>
      </header>

      <main className="flex-1 flex items-center justify-center p-8">{children}</main>

      <footer className="flex items-center justify-between gap-4 px-6 py-4 border-t border-slate-200">
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
