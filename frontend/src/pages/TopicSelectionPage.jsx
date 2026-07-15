import { useNavigate, useParams } from 'react-router-dom'
import { topics } from '../data/topics.js'
import { chapters } from '../data/chapters.js'
import { subjects } from '../data/subjects.js'
import SelectionCard from '../components/common/SelectionCard.jsx'
import PageHeader from '../components/common/PageHeader.jsx'
import { buildBreadcrumb } from '../utils/navBreadcrumb.js'

function TopicSelectionPage() {
  const navigate = useNavigate()
  const { classId, subjectId, chapterId } = useParams()
  const topicList = topics[chapterId] ?? []
  const subjectLabel = subjects.find((s) => s.id === subjectId)?.label ?? subjectId
  const chapterLabel =
    (chapters[subjectId] ?? []).find((c) => c.id === chapterId)?.label ?? chapterId

  return (
    <div className="min-h-screen flex flex-col items-center gap-10 p-8">
      <PageHeader
        backTo={`/class/${classId}/subject/${subjectId}/chapter`}
        breadcrumb={buildBreadcrumb({ classId, subjectId, subjectLabel, chapterLabel })}
        title={subjectId === 'digital-skills' ? 'Select a Lesson' : 'Select a Topic'}
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full max-w-3xl">
        {topicList.map((t) => (
          <SelectionCard
            key={t.id}
            label={t.label}
            active={t.active}
            onClick={() =>
              navigate(
                `/class/${classId}/subject/${subjectId}/chapter/${chapterId}/topic/${t.id}${t.quizOnly ? '/quiz' : ''}`,
              )
            }
          />
        ))}
      </div>
    </div>
  )
}

export default TopicSelectionPage
