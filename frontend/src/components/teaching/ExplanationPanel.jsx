function ExplanationPanel({ title, text, illustration }) {
  return (
    <div className="max-w-3xl flex flex-col items-center gap-6 text-center">
      {illustration}
      {title && <h2 className="text-projector-md font-extrabold text-primary">{title}</h2>}
      {text && <p className="text-projector-sm text-ink leading-relaxed">{text}</p>}
    </div>
  )
}

export default ExplanationPanel
