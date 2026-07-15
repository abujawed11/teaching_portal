import { motion } from 'framer-motion'

function MixedNumberLine({ denominator = 2, numerator = 5 }) {
  const maxWhole = Math.max(1, Math.ceil(numerator / denominator))
  const totalTicks = maxWhole * denominator
  const ticks = Array.from({ length: totalTicks + 1 }, (_, i) => i)
  const pct = (i) => (i / totalTicks) * 100

  return (
    <div className="flex flex-col items-center gap-8 w-full">
      <div className="w-[42rem] max-w-full px-4 pt-14 pb-16">
        <div className="relative h-2 bg-slate-200 rounded-full">
          {ticks.map((i) => {
            const isWhole = i % denominator === 0
            return (
              <div key={i} className="absolute top-1/2 -translate-y-1/2 flex flex-col items-center" style={{ left: `${pct(i)}%` }}>
                <div className={`-translate-x-1/2 ${isWhole ? 'w-1 h-5 bg-slate-500' : 'w-0.5 h-3 bg-slate-300'}`} />
                <span className={`mt-4 -translate-x-1/2 text-xs ${isWhole ? 'font-bold text-ink' : 'text-slate-400'}`}>
                  {isWhole ? i / denominator : `${i}/${denominator}`}
                </span>
              </div>
            )
          })}

          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="absolute flex flex-col items-center -translate-x-1/2 top-9"
            style={{ left: `${pct(numerator)}%` }}
          >
            <div className="w-3 h-3 rounded-full bg-primary mb-1" />
            <span className="text-xs font-extrabold text-primary whitespace-nowrap">
              {numerator}/{denominator}
            </span>
          </motion.div>
        </div>
      </div>

      <p className="text-projector-sm text-ink text-center max-w-xl">
        {numerator % denominator === 0
          ? `${numerator}/${denominator} sits exactly at ${numerator / denominator} on the number line.`
          : `${numerator}/${denominator} sits between ${Math.floor(numerator / denominator)} and ${Math.floor(numerator / denominator) + 1} on the number line.`}
      </p>
    </div>
  )
}

export default MixedNumberLine
