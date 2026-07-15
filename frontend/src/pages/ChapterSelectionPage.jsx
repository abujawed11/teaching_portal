import { useNavigate, useParams } from 'react-router-dom'
import { chapters } from '../data/chapters.js'
import { subjects } from '../data/subjects.js'
import SelectionCard from '../components/common/SelectionCard.jsx'
import PageHeader from '../components/common/PageHeader.jsx'
import { buildBreadcrumb, isCourseMode } from '../utils/navBreadcrumb.js'

function ChapterSelectionPage() {
  const navigate = useNavigate()
  const { classId, subjectId } = useParams()
  const chapterList = chapters[subjectId] ?? []
  const subjectLabel = subjects.find((s) => s.id === subjectId)?.label ?? subjectId
  const course = isCourseMode(classId, subjectId)

  return (
    <div className="min-h-screen flex flex-col items-center gap-10 p-8">
      <PageHeader
        backTo={course ? '/class' : `/class/${classId}/subject`}
        breadcrumb={buildBreadcrumb({ classId, subjectId, subjectLabel })}
        title={subjectId === 'digital-skills' ? 'Select a Level' : 'Select a Chapter'}
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
