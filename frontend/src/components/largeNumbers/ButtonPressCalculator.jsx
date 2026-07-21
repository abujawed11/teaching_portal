import { useState } from 'react'
import { RefreshCw } from 'lucide-react'

function ButtonPressCalculator({ buttons = [1000], target = null, hint = null }) {
  const [counts, setCounts] = useState(() => Object.fromEntries(buttons.map((b) => [b, 0])))

  const total = buttons.reduce((sum, b) => sum + b * counts[b], 0)
  const totalClicks = buttons.reduce((sum, b) => sum + counts[b], 0)
  const reachedTarget = target !== null && total === target

  const press = (value) => setCounts((c) => ({ ...c, [value]: c[value] + 1 }))
  const unpress = (value) => setCounts((c) => ({ ...c, [value]: Math.max(0, c[value] - 1) }))
  const reset = () => setCounts(Object.fromEntries(buttons.map((b) => [b, 0])))

  return (
    <div className="flex flex-col items-center gap-6 w-full">
      {target !== null && (
        <p className="text-projector-sm font-semibold text-ink">
          Target: <span className="text-primary font-extrabold">{target.toLocaleString('en-IN')}</span>
        </p>
      )}
      {hint && <p className="text-base text-slate-500 max-w-xl text-center">{hint}</p>}

      <div className="flex flex-wrap items-center justify-center gap-3">
        {buttons.map((value) => (
          <div key={value} className="flex flex-col items-center gap-2">
            <button
              onClick={() => press(value)}
              className="px-5 py-4 rounded-xl bg-primary text-white font-extrabold text-lg sm:text-xl
                hover:bg-primary-dark active:scale-95 transition-transform shadow-md shadow-primary/20"
            >
              +{value.toLocaleString('en-IN')}
            </button>
            <div className="flex items-center gap-2">
              <button
                onClick={() => unpress(value)}
                disabled={counts[value] === 0}
                aria-label={`Undo one +${value} press`}
                className="w-7 h-7 rounded-full bg-slate-100 hover:bg-slate-200 text-ink font-bold
                  disabled:opacity-30 disabled:cursor-not-allowed"
              >
                −
              </button>
              <span className="text-sm font-semibold text-slate-500 min-w-[2rem] text-center">
                × {counts[value]}
              </span>
            </div>
          </div>
        ))}
      </div>

      <div
        className={`rounded-2xl px-8 py-5 text-center transition-colors ${
          reachedTarget ? 'bg-success/10' : 'bg-slate-50'
        }`}
      >
        <p className={`text-projector-md font-extrabold tabular-nums ${reachedTarget ? 'text-success' : 'text-ink'}`}>
          {total.toLocaleString('en-IN')}
        </p>
        <p className="text-sm text-slate-500 mt-1">
          {totalClicks} button {totalClicks === 1 ? 'click' : 'clicks'} so far
          {reachedTarget && ' — target reached! 🎉'}
        </p>
      </div>

      <button
        onClick={reset}
        className="flex items-center gap-2 px-5 py-3 rounded-lg bg-slate-100 hover:bg-slate-200 font-semibold text-ink"
      >
        <RefreshCw size={20} /> Reset
      </button>
    </div>
  )
}

export default ButtonPressCalculator
