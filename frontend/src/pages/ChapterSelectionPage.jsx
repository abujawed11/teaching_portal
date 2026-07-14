import { useNavigate, useParams } from 'react-router-dom'
import { chapters } from '../data/chapters.js'

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
          <button
            key={c.id}
            disabled={!c.active}
            onClick={() =>
              c.active && navigate(`/class/${classId}/subject/${subjectId}/chapter/${c.id}/topic`)
            }
            className={`rounded-2xl p-8 text-projector-sm font-semibold shadow transition-colors text-center
              ${
                c.active
                  ? 'bg-primary text-white hover:bg-primary-dark cursor-pointer'
                  : 'bg-slate-100 text-slate-400 cursor-not-allowed'
              }`}
          >
            {c.label}
            {!c.active && <div className="text-sm font-normal mt-2">Coming Soon</div>}
          </button>
        ))}
      </div>
    </div>
  )
}

export default ChapterSelectionPage
