import RootDiagram from './RootDiagram.jsx'

function RootCompare() {
  return (
    <div className="flex justify-center gap-10 sm:gap-16">
      <div className="flex flex-col items-center gap-2">
        <RootDiagram type="taproot" />
        <p className="font-semibold text-ink">Taproot</p>
        <p className="text-sm text-slate-500 text-center max-w-[10rem]">
          One main root with small side roots — e.g. mustard, hibiscus
        </p>
      </div>
      <div className="flex flex-col items-center gap-2">
        <RootDiagram type="fibrous" />
        <p className="font-semibold text-ink">Fibrous Roots</p>
        <p className="text-sm text-slate-500 text-center max-w-[10rem]">
          A bunch of similar, thin roots — e.g. common grass
        </p>
      </div>
    </div>
  )
}

export default RootCompare
