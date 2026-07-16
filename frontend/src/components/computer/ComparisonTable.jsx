function ComparisonTable({ itemA, itemB, rows = [] }) {
  return (
    <div className="w-full max-w-2xl overflow-x-auto">
      <table className="w-full border-separate border-spacing-0 rounded-2xl overflow-hidden shadow-lg shadow-slate-300/50">
        <thead>
          <tr>
            <th className="bg-slate-50 px-4 py-3 w-1/3" />
            <th className="bg-violet-50 px-4 py-4 text-center">
              {itemA.image && (
                <img
                  src={itemA.image}
                  alt={itemA.label}
                  className="w-16 h-16 object-contain rounded-xl mx-auto mb-2 shadow bg-white"
                />
              )}
              <p className="text-projector-sm font-bold text-violet-700">{itemA.label}</p>
            </th>
            <th className="bg-emerald-50 px-4 py-4 text-center">
              {itemB.image && (
                <img
                  src={itemB.image}
                  alt={itemB.label}
                  className="w-16 h-16 object-contain rounded-xl mx-auto mb-2 shadow bg-white"
                />
              )}
              <p className="text-projector-sm font-bold text-emerald-700">{itemB.label}</p>
            </th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={row.label}>
              <td
                className={`px-4 py-3 font-semibold text-ink text-sm ${
                  i % 2 === 0 ? 'bg-slate-50' : 'bg-white'
                }`}
              >
                {row.label}
              </td>
              <td
                className={`px-4 py-3 text-center text-ink text-sm ${
                  i % 2 === 0 ? 'bg-violet-50/50' : 'bg-white'
                }`}
              >
                {row.a}
              </td>
              <td
                className={`px-4 py-3 text-center text-ink text-sm ${
                  i % 2 === 0 ? 'bg-emerald-50/50' : 'bg-white'
                }`}
              >
                {row.b}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default ComparisonTable
