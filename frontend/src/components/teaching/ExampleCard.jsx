function ExampleCard({ title, problem, solution }) {
  return (
    <div className="max-w-3xl w-full bg-slate-50 border border-slate-200 rounded-2xl p-8 space-y-4 text-center">
      {title && <h2 className="text-projector-sm font-bold text-primary">{title}</h2>}
      {problem && <p className="text-projector-sm text-ink">{problem}</p>}
      {solution && (
        <p className="text-projector-sm font-semibold text-success whitespace-pre-line">
          {solution}
        </p>
      )}
    </div>
  )
}

export default ExampleCard
