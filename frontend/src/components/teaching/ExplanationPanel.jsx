function ExplanationPanel({ title, text }) {
  return (
    <div className="max-w-3xl text-center space-y-4">
      {title && <h2 className="text-projector-md font-extrabold text-primary">{title}</h2>}
      {text && <p className="text-projector-sm text-ink leading-relaxed">{text}</p>}
    </div>
  )
}

export default ExplanationPanel
