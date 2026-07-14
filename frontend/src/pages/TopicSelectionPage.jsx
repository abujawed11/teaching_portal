import { useNavigate, useParams } from 'react-router-dom'
import { topics } from '../data/topics.js'

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
          <button
            key={t.id}
            disabled={!t.active}
            onClick={() =>
              t.active &&
              navigate(
                `/class/${classId}/subject/${subjectId}/chapter/${chapterId}/topic/${t.id}`,
              )
            }
            className={`rounded-2xl p-6 text-projector-sm font-semibold shadow transition-colors text-center
              ${
                t.active
                  ? 'bg-primary text-white hover:bg-primary-dark cursor-pointer'
                  : 'bg-slate-100 text-slate-400 cursor-not-allowed'
              }`}
          >
            {t.label}
            {!t.active && <div className="text-sm font-normal mt-2">Coming Soon</div>}
          </button>
        ))}
      </div>
    </div>
  )
}

export default TopicSelectionPage
