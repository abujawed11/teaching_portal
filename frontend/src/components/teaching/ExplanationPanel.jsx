function ExplanationPanel({ title, text, illustration, image, images }) {
  return (
    <div className="max-w-3xl flex flex-col items-center gap-6 text-center">
      {illustration}

      {image && (
        <img
          src={image.src}
          alt={image.alt}
          className="rounded-2xl shadow-lg shadow-slate-300/50 max-h-64 sm:max-h-80 w-auto object-contain"
        />
      )}

      {images && images.length > 0 && (
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 w-full">
          {images.map((img) => (
            <figure key={img.src} className="flex flex-col items-center gap-2">
              <img
                src={img.src}
                alt={img.alt}
                className="rounded-xl shadow-md shadow-slate-300/50 w-full h-24 sm:h-28 object-cover"
              />
              {img.caption && (
                <figcaption className="text-xs sm:text-sm text-slate-500">{img.caption}</figcaption>
              )}
            </figure>
          ))}
        </div>
      )}

      {title && <h2 className="text-projector-md font-extrabold text-primary">{title}</h2>}
      {text && <p className="text-projector-sm text-ink leading-relaxed">{text}</p>}
    </div>
  )
}

export default ExplanationPanel
