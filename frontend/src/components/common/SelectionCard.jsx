import { Lock, ArrowRight } from 'lucide-react'

function SelectionCard({ label, active, onClick }) {
  return (
    <button
      disabled={!active}
      onClick={onClick}
      className={`group relative flex flex-col items-center justify-center gap-2 rounded-2xl p-8 text-projector-sm font-semibold text-center shadow-md transition-all
        ${
          active
            ? 'bg-white text-ink hover:-translate-y-1 hover:shadow-xl cursor-pointer border-2 border-transparent hover:border-primary'
            : 'bg-white/50 text-slate-400 cursor-not-allowed shadow-none'
        }`}
    >
      <span>{label}</span>
      {active ? (
        <ArrowRight
          size={20}
          className="text-primary opacity-0 group-hover:opacity-100 transition-opacity"
        />
      ) : (
        <span className="flex items-center gap-1 text-sm font-normal">
          <Lock size={14} /> Coming Soon
        </span>
      )}
    </button>
  )
}

export default SelectionCard
