import { useNavigate, useParams } from 'react-router-dom'
import { chapters } from '../data/chapters.js'
import { subjects } from '../data/subjects.js'
import SelectionCard from '../components/common/SelectionCard.jsx'
import PageHeader from '../components/common/PageHeader.jsx'

function ChapterSelectionPage() {
  const navigate = useNavigate()
  const { classId, subjectId } = useParams()
  const chapterList = chapters[subjectId] ?? []
  const subjectLabel = subjects.find((s) => s.id === subjectId)?.label ?? subjectId

  return (
    <div className="min-h-screen flex flex-col items-center gap-10 p-8">
      <PageHeader
        backTo={`/class/${classId}/subject`}
        breadcrumb={[
          { label: 'Home', to: '/' },
          { label: `Class ${classId}`, to: '/class' },
          { label: subjectLabel, to: `/class/${classId}/subject` },
        ]}
        title="Select a Chapter"
      />

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
