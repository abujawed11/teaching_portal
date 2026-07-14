import { useNavigate, useParams } from 'react-router-dom'
import { subjects } from '../data/subjects.js'
import SelectionCard from '../components/common/SelectionCard.jsx'

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
          <SelectionCard
            key={s.id}
            label={s.label}
            active={s.active}
            onClick={() => navigate(`/class/${classId}/subject/${s.id}/chapter`)}
          />
        ))}
      </div>
    </div>
  )
}

export default SubjectSelectionPage
