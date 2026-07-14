import { useNavigate } from 'react-router-dom'
import { ChevronRight } from 'lucide-react'

function Breadcrumb({ items = [] }) {
  const navigate = useNavigate()

  return (
    <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-sm sm:text-base flex-wrap">
      {items.map((item, i) => (
        <span key={i} className="flex items-center gap-2">
          {i > 0 && <ChevronRight size={14} className="text-slate-400" />}
          {item.to ? (
            <button
              onClick={() => navigate(item.to)}
              className="text-slate-500 hover:text-primary hover:underline transition-colors"
            >
              {item.label}
            </button>
          ) : (
            <span className="text-ink font-semibold">{item.label}</span>
          )}
        </span>
      ))}
    </nav>
  )
}

export default Breadcrumb
