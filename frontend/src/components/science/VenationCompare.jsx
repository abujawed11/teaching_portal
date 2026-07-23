import VenationDiagram from './VenationDiagram.jsx'

function VenationCompare() {
  return (
    <div className="flex justify-center gap-10 sm:gap-16">
      <div className="flex flex-col items-center gap-2">
        <VenationDiagram type="reticulate" />
        <p className="font-semibold text-ink">Reticulate Venation</p>
        <p className="text-sm text-slate-500 text-center max-w-[10rem]">
          Net-like pattern around a thick middle vein — e.g. hibiscus
        </p>
      </div>
      <div className="flex flex-col items-center gap-2">
        <VenationDiagram type="parallel" />
        <p className="font-semibold text-ink">Parallel Venation</p>
        <p className="text-sm text-slate-500 text-center max-w-[10rem]">
          Veins run side by side — e.g. banana, grass
        </p>
      </div>
    </div>
  )
}

export default VenationCompare
