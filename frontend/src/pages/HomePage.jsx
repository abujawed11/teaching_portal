import { useNavigate } from 'react-router-dom'
import { GraduationCap, Play, History, Maximize, Sparkles } from 'lucide-react'
import Button from '../components/common/Button.jsx'
import { useFullscreen } from '../hooks/useFullscreen.js'

function HomePage() {
  const navigate = useNavigate()
  const { toggleFullscreen } = useFullscreen()

  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-10 p-8 text-center">
      <div className="bg-white/80 backdrop-blur rounded-3xl shadow-xl shadow-slate-200/60 px-8 py-12 sm:px-16 sm:py-16 max-w-3xl w-full flex flex-col items-center gap-10">
        <div className="flex flex-col items-center gap-4">
          <div className="p-4 rounded-2xl bg-primary/10 text-primary">
            <GraduationCap size={48} strokeWidth={1.75} />
          </div>
          <h1 className="text-projector-lg font-extrabold text-primary">Teaching Portal</h1>
          <p className="text-projector-sm text-slate-500">
            Interactive Maths &amp; Science lessons for the classroom
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4">
          <Button onClick={() => navigate('/class')} className="flex items-center gap-2">
            <Play size={22} /> Start Teaching
          </Button>
          <Button variant="secondary" disabled className="flex items-center gap-2">
            <History size={22} /> Continue Last Lesson
          </Button>
        </div>

        <div className="w-full h-px bg-slate-200" />

        <div className="flex flex-wrap justify-center gap-4">
          <Button
            variant="secondary"
            onClick={() => navigate('/class')}
            className="flex items-center gap-2"
          >
            <Sparkles size={22} /> Class 5 Mathematics: Numbers
          </Button>
          <Button variant="secondary" onClick={toggleFullscreen} className="flex items-center gap-2">
            <Maximize size={22} /> Projector Mode
          </Button>
        </div>
      </div>
    </div>
  )
}

export default HomePage
