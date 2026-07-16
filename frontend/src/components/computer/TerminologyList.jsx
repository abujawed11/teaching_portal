import {
  Monitor,
  Image,
  AppWindow,
  Menu,
  MousePointer2,
  LayoutGrid,
  File,
  Folder,
} from 'lucide-react'

const iconMap = {
  Desktop: Monitor,
  Icon: Image,
  Window: AppWindow,
  Menu,
  Cursor: MousePointer2,
  'App / Application': LayoutGrid,
  File,
  Folder,
}

function TerminologyList({ terms = [] }) {
  return (
    <div className="w-full max-w-2xl flex flex-col gap-4">
      {terms.map((t) => {
        const TermIcon = iconMap[t.term]
        return (
          <div
            key={t.term}
            className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-4 text-left border-b border-slate-100 pb-3"
          >
            <span className="flex items-center gap-2 text-projector-sm font-extrabold text-primary sm:w-44 shrink-0">
              {TermIcon && <TermIcon size={22} className="shrink-0" />}
              {t.term}
            </span>
            <span className="text-base sm:text-lg text-ink">{t.definition}</span>
          </div>
        )
      })}
    </div>
  )
}

export default TerminologyList
