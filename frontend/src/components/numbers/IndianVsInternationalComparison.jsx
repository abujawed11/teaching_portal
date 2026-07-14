function IndianVsInternationalComparison({ number = 74532618 }) {
  return (
    <div className="flex flex-col items-center gap-8 w-full max-w-2xl">
      <div className="w-full bg-violet-50 rounded-2xl px-8 py-6 text-center space-y-2">
        <p className="text-sm font-semibold text-violet-700 uppercase tracking-wide">
          Indian System
        </p>
        <p className="text-projector-md font-extrabold text-violet-700 tabular-nums">
          {number.toLocaleString('en-IN')}
        </p>
      </div>

      <div className="w-full bg-emerald-50 rounded-2xl px-8 py-6 text-center space-y-2">
        <p className="text-sm font-semibold text-emerald-700 uppercase tracking-wide">
          International System
        </p>
        <p className="text-projector-md font-extrabold text-emerald-700 tabular-nums">
          {number.toLocaleString('en-US')}
        </p>
      </div>

      <p className="text-projector-sm text-slate-500 text-center">
        Same digits, different comma positions — Indian groups by 2 after the first 3 digits;
        International always groups by 3.
      </p>
    </div>
  )
}

export default IndianVsInternationalComparison
