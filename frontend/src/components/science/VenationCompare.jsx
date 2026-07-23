function VenationCompare() {
  return (
    <div className="flex justify-center gap-8 sm:gap-14">
      <div className="flex flex-col items-center gap-2">
        <img
          src="/images/science/diversity-in-living-world/reticulate-venation.jpg"
          alt="A leaf showing reticulate (net-like) venation"
          className="w-36 h-40 sm:w-44 sm:h-48 object-cover rounded-2xl shadow-lg shadow-slate-300/50"
        />
        <p className="font-semibold text-ink">Reticulate Venation</p>
        <p className="text-sm text-slate-500 text-center max-w-[11rem]">
          Net-like pattern around a thick middle vein — e.g. hibiscus
        </p>
      </div>
      <div className="flex flex-col items-center gap-2">
        <img
          src="/images/science/diversity-in-living-world/parallel-venation.jpg"
          alt="A leaf showing parallel venation"
          className="w-36 h-40 sm:w-44 sm:h-48 object-cover rounded-2xl shadow-lg shadow-slate-300/50"
        />
        <p className="font-semibold text-ink">Parallel Venation</p>
        <p className="text-sm text-slate-500 text-center max-w-[11rem]">
          Veins run side by side — e.g. banana, grass
        </p>
      </div>
    </div>
  )
}

export default VenationCompare
