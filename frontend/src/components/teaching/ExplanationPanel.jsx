import { Lightbulb } from 'lucide-react'

function ExplanationPanel({ title, text, illustration, image, images, analogy }) {
  return (
    <div className="flex flex-col items-center gap-6 text-center w-full">
      {illustration}

      {image && (
        <img
          src={image.src}
          alt={image.alt}
          className="rounded-2xl shadow-lg shadow-slate-300/50 max-h-80 sm:max-h-[26rem] w-auto object-contain"
        />
      )}

      {images && images.length > 0 && (
        <div className="flex flex-wrap justify-center gap-5 w-full max-w-5xl">
          {images.map((img) => (
            <figure key={img.src} className="flex flex-col items-center gap-2 w-48 sm:w-56">
              <img
                src={img.src}
                alt={img.alt}
                className="rounded-xl shadow-md shadow-slate-300/50 w-full aspect-square object-contain bg-white"
              />
              {img.caption && (
                <figcaption className="text-sm sm:text-base text-slate-500">{img.caption}</figcaption>
              )}
            </figure>
          ))}
        </div>
      )}

      <div className="max-w-3xl flex flex-col items-center gap-6">
        {title && <h2 className="text-projector-md font-extrabold text-primary">{title}</h2>}
        {text && (
          <p className="text-projector-sm text-ink leading-relaxed whitespace-pre-line">{text}</p>
        )}

        {analogy && (
          <div className="flex items-start gap-3 bg-amber-50 border border-amber-200 rounded-2xl px-5 py-4 text-left">
            <Lightbulb size={24} className="text-amber-500 shrink-0 mt-0.5" />
            <p className="text-base sm:text-lg text-ink leading-relaxed">
              <span className="font-bold text-amber-700">Think of it like this: </span>
              {analogy}
            </p>
          </div>
        )}
      </div>
    </div>
  )
}

export default ExplanationPanel
