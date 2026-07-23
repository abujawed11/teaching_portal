function RootCompare() {
  return (
    <div className="flex flex-col sm:flex-row justify-center items-center gap-8 sm:gap-14">
      <div className="flex flex-col items-center gap-2">
        <img
          src="/images/science/diversity-in-living-world/taproot.jpg"
          alt="A plant showing a taproot system — one main root with smaller side roots"
          className="w-72 sm:w-96 h-auto object-contain rounded-2xl shadow-lg shadow-slate-300/50 bg-white"
        />
        <p className="font-semibold text-ink">Taproot</p>
        <p className="text-sm text-slate-500 text-center max-w-[16rem]">
          One main root with small side roots — e.g. mustard, hibiscus
        </p>
      </div>
      <div className="flex flex-col items-center gap-2">
        <img
          src="/images/science/diversity-in-living-world/fibrous-roots.jpg"
          alt="A plant showing a fibrous root system — a bunch of similar thin roots"
          className="w-72 sm:w-96 h-auto object-contain rounded-2xl shadow-lg shadow-slate-300/50 bg-white"
        />
        <p className="font-semibold text-ink">Fibrous Roots</p>
        <p className="text-sm text-slate-500 text-center max-w-[16rem]">
          A bunch of similar, thin roots — e.g. common grass
        </p>
      </div>
    </div>
  )
}

export default RootCompare
