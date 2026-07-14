import { useNavigate, useParams } from 'react-router-dom'
import { topics } from '../data/topics.js'
import SelectionCard from '../components/common/SelectionCard.jsx'

function TopicSelectionPage() {
  const navigate = useNavigate()
  const { classId, subjectId, chapterId } = useParams()
  const topicList = topics[chapterId] ?? []

  return (
    <div className="min-h-screen flex flex-col items-center gap-10 p-8">
      <h1 className="text-projector-md font-extrabold text-primary text-center">
        Select a Topic
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full max-w-3xl">
        {topicList.map((t) => (
          <SelectionCard
            key={t.id}
            label={t.label}
            active={t.active}
            onClick={() =>
              navigate(
                `/class/${classId}/subject/${subjectId}/chapter/${chapterId}/topic/${t.id}`,
              )
            }
          />
        ))}
      </div>
    </div>
  )
}

export default TopicSelectionPage
