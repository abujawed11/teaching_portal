import { Play, Pause, RotateCcw, RefreshCw } from 'lucide-react'

function AnimationControls({ isPlaying, onPlay, onPause, onReplay, onReset }) {
  return (
    <div className="flex items-center gap-3">
      {isPlaying ? (
        <button
          onClick={onPause}
          aria-label="Pause animation"
          className="flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-100 hover:bg-slate-200 font-semibold text-ink"
        >
          <Pause size={20} /> Pause
        </button>
      ) : (
        <button
          onClick={onPlay}
          aria-label="Play animation"
          className="flex items-center gap-2 px-4 py-2 rounded-lg bg-primary text-white hover:bg-primary-dark font-semibold"
        >
          <Play size={20} /> Play
        </button>
      )}

      <button
        onClick={onReplay}
        aria-label="Replay animation"
        className="flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-100 hover:bg-slate-200 font-semibold text-ink"
      >
        <RotateCcw size={20} /> Replay
      </button>

      <button
        onClick={onReset}
        aria-label="Reset animation"
        className="flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-100 hover:bg-slate-200 font-semibold text-ink"
      >
        <RefreshCw size={20} /> Reset
      </button>
    </div>
  )
}

export default AnimationControls
