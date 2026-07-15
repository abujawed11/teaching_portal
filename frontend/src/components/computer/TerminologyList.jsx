function TerminologyList({ terms = [] }) {
  return (
    <div className="w-full max-w-2xl flex flex-col gap-4">
      {terms.map((t) => (
        <div
          key={t.term}
          className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-4 text-left border-b border-slate-100 pb-3"
        >
          <span className="text-projector-sm font-extrabold text-primary sm:w-44 shrink-0">
            {t.term}
          </span>
          <span className="text-base sm:text-lg text-ink">{t.definition}</span>
        </div>
      ))}
    </div>
  )
}

export default TerminologyList
