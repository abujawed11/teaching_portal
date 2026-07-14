import { useNavigate } from 'react-router-dom'
import Button from '../components/common/Button.jsx'
import { useFullscreen } from '../hooks/useFullscreen.js'

function HomePage() {
  const navigate = useNavigate()
  const { toggleFullscreen } = useFullscreen()

  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-10 p-8 text-center">
      <div className="space-y-3">
        <h1 className="text-projector-lg font-extrabold text-primary">Teaching Portal</h1>
        <p className="text-projector-sm text-ink">
          Interactive Maths & Science lessons for the classroom
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-4">
        <Button onClick={() => navigate('/class')}>Start Teaching</Button>
        <Button variant="secondary" disabled>
          Continue Last Lesson
        </Button>
      </div>

      <div className="flex flex-wrap justify-center gap-4">
        <Button variant="secondary" onClick={() => navigate('/class')}>
          Class 5 Mathematics: Numbers
        </Button>
        <Button variant="secondary" onClick={toggleFullscreen}>
          Projector Mode
        </Button>
      </div>
    </div>
  )
}

export default HomePage
