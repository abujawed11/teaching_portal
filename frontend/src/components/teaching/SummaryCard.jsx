function SummaryCard({ title, points = [] }) {
  return (
    <div className="max-w-3xl w-full text-center space-y-6">
      {title && <h2 className="text-projector-md font-extrabold text-primary">{title}</h2>}
      <ul className="space-y-3">
        {points.map((point, i) => (
          <li key={i} className="text-projector-sm text-ink">
            {point}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default SummaryCard
