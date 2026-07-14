import { useNavigate } from 'react-router-dom'
import { classes } from '../data/classes.js'

function ClassSelectionPage() {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen flex flex-col items-center gap-10 p-8">
      <h1 className="text-projector-md font-extrabold text-primary text-center">
        Select a Class
      </h1>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 w-full max-w-4xl">
        {classes.map((c) => (
          <button
            key={c.id}
            disabled={!c.active}
            onClick={() => c.active && navigate(`/class/${c.id}/subject`)}
            className={`rounded-2xl p-8 text-projector-sm font-semibold shadow transition-colors
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

export default ClassSelectionPage
