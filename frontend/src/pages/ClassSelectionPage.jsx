import { useNavigate } from 'react-router-dom'
import { classes } from '../data/classes.js'
import SelectionCard from '../components/common/SelectionCard.jsx'
import PageHeader from '../components/common/PageHeader.jsx'

function ClassSelectionPage() {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen flex flex-col items-center gap-10 p-8">
      <PageHeader
        backTo="/"
        breadcrumb={[{ label: 'Home', to: '/' }]}
        title="Select a Class"
      />

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 w-full max-w-4xl">
        {classes.map((c) => (
          <SelectionCard
            key={c.id}
            label={c.label}
            active={c.active}
            onClick={() =>
              navigate(
                c.isCourse ? `/class/${c.id}/subject/${c.id}/chapter` : `/class/${c.id}/subject`,
              )
            }
          />
        ))}
      </div>
    </div>
  )
}

export default ClassSelectionPage
