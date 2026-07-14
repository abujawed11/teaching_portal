import { useNavigate, useParams } from 'react-router-dom'
import { subjects } from '../data/subjects.js'

function SubjectSelectionPage() {
  const navigate = useNavigate()
  const { classId } = useParams()

  return (
    <div className="min-h-screen flex flex-col items-center gap-10 p-8">
      <h1 className="text-projector-md font-extrabold text-primary text-center">
        Class {classId}: Select a Subject
      </h1>

      <div className="grid grid-cols-2 gap-6 w-full max-w-2xl">
        {subjects.map((s) => (
          <button
            key={s.id}
            disabled={!s.active}
            onClick={() => s.active && navigate(`/class/${classId}/subject/${s.id}/chapter`)}
            className={`rounded-2xl p-10 text-projector-sm font-semibold shadow transition-colors
              ${
                s.active
                  ? 'bg-primary text-white hover:bg-primary-dark cursor-pointer'
                  : 'bg-slate-100 text-slate-400 cursor-not-allowed'
              }`}
          >
            {s.label}
            {!s.active && <div className="text-sm font-normal mt-2">Coming Soon</div>}
          </button>
        ))}
      </div>
    </div>
  )
}

export default SubjectSelectionPage
