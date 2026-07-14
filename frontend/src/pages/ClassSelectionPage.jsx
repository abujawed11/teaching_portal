import { useNavigate } from 'react-router-dom'
import { classes } from '../data/classes.js'
import SelectionCard from '../components/common/SelectionCard.jsx'

function ClassSelectionPage() {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen flex flex-col items-center gap-10 p-8">
      <h1 className="text-projector-md font-extrabold text-primary text-center">
        Select a Class
      </h1>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 w-full max-w-4xl">
        {classes.map((c) => (
          <SelectionCard
            key={c.id}
            label={c.label}
            active={c.active}
            onClick={() => navigate(`/class/${c.id}/subject`)}
          />
        ))}
      </div>
    </div>
  )
}

export default ClassSelectionPage
