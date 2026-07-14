import { useNavigate } from 'react-router-dom'
import { ChevronLeft } from 'lucide-react'

function BackButton({ to, label = 'Back' }) {
  const navigate = useNavigate()

  return (
    <button
      onClick={() => navigate(to)}
      aria-label={label}
      className="flex items-center gap-2 px-4 py-2 rounded-lg font-semibold text-ink hover:bg-slate-100 transition-colors"
    >
      <ChevronLeft size={22} /> {label}
    </button>
  )
}

export default BackButton
