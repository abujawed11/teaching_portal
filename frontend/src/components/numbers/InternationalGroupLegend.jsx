import { GROUP_ORDER, GROUP_LABELS, GROUP_COLORS } from '../../utils/internationalGroupColors.js'

function InternationalGroupLegend() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-4">
      {GROUP_ORDER.map((group) => (
        <div key={group} className="flex items-center gap-2">
          <span className={`w-3 h-3 rounded-full ${GROUP_COLORS[group].dot}`} />
          <span className="text-sm text-slate-500">{GROUP_LABELS[group]}</span>
        </div>
      ))}
    </div>
  )
}

export default InternationalGroupLegend
