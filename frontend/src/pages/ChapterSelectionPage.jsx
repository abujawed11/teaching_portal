import { useNavigate, useParams } from 'react-router-dom'
import { chapters } from '../data/chapters.js'
import SelectionCard from '../components/common/SelectionCard.jsx'

function ChapterSelectionPage() {
  const navigate = useNavigate()
  const { classId, subjectId } = useParams()
  const chapterList = chapters[subjectId] ?? []

  return (
    <div className="min-h-screen flex flex-col items-center gap-10 p-8">
      <h1 className="text-projector-md font-extrabold text-primary text-center">
        Select a Chapter
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full max-w-3xl">
        {chapterList.map((c) => (
          <SelectionCard
            key={c.id}
            label={c.label}
            active={c.active}
            onClick={() =>
              navigate(`/class/${classId}/subject/${subjectId}/chapter/${c.id}/topic`)
            }
          />
        ))}
      </div>
    </div>
  )
}

export default ChapterSelectionPage
