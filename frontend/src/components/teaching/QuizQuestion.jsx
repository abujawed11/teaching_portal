import { useState } from 'react'

const OPTION_LETTERS = ['a', 'b', 'c', 'd', 'e', 'f']

function normalize(value) {
  return value.trim().toLowerCase().replace(/\s+/g, '')
}

function QuizQuestion({ questionData, onAnswered }) {
  const [selected, setSelected] = useState(null)
  const [fillValue, setFillValue] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const isCorrect = (givenAnswer) => normalize(givenAnswer) === normalize(questionData.correctAnswer)

  const handleMcqSelect = (option) => {
    if (submitted) return
    setSelected(option)
    setSubmitted(true)
    onAnswered(isCorrect(option))
  }

  const handleFillSubmit = (e) => {
    e.preventDefault()
    if (submitted) return
    setSubmitted(true)
    onAnswered(isCorrect(fillValue))
  }

  return (
    <div className="max-w-3xl w-full flex flex-col items-center gap-8 text-center">
      <p className="text-projector-sm font-semibold text-ink">{questionData.question}</p>

      {questionData.type === 'mcq' ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
          {questionData.options.map((option, index) => {
            const isSelected = selected === option
            const showCorrect = submitted && normalize(option) === normalize(questionData.correctAnswer)
            const showWrong = submitted && isSelected && !showCorrect

            return (
              <button
                key={option}
                onClick={() => handleMcqSelect(option)}
                disabled={submitted}
                className={`flex items-center gap-3 px-5 py-4 rounded-xl text-projector-sm font-semibold border-2 transition-colors text-left
                  ${showCorrect ? 'bg-success text-white border-success' : ''}
                  ${showWrong ? 'bg-danger text-white border-danger' : ''}
                  ${
                    !submitted
                      ? 'border-slate-300 hover:border-primary'
                      : !showCorrect && !showWrong
                        ? 'border-slate-200 text-slate-400'
                        : ''
                  }`}
              >
                <span
                  className={`flex items-center justify-center shrink-0 w-8 h-8 rounded-full border-2 font-extrabold
                    ${showCorrect ? 'border-white text-white' : showWrong ? 'border-white text-white' : 'border-current'}`}
                >
                  {OPTION_LETTERS[index]}
                </span>
                <span>{option}</span>
              </button>
            )
          })}
        </div>
      ) : (
        <form onSubmit={handleFillSubmit} className="flex flex-col items-center gap-4 w-full">
          <input
            type="text"
            value={fillValue}
            onChange={(e) => setFillValue(e.target.value)}
            disabled={submitted}
            placeholder="Type your answer"
            className="text-projector-sm text-center px-4 py-2 rounded-lg border-2 border-slate-300
              focus:outline-none focus:border-primary w-full max-w-md disabled:bg-slate-100"
          />
          {!submitted && (
            <button
              type="submit"
              className="px-5 py-3 rounded-lg bg-primary text-white font-semibold hover:bg-primary-dark"
            >
              Submit
            </button>
          )}
        </form>
      )}

      {submitted && (
        <div className="flex flex-col items-center gap-2">
          <p className={`text-projector-sm font-bold ${isCorrect(questionData.type === 'mcq' ? selected : fillValue) ? 'text-success' : 'text-danger'}`}>
            {isCorrect(questionData.type === 'mcq' ? selected : fillValue)
              ? 'Correct!'
              : `Correct answer: ${questionData.correctAnswer}`}
          </p>
          {questionData.explanation && (
            <p className="text-base text-slate-500 max-w-xl">{questionData.explanation}</p>
          )}
        </div>
      )}
    </div>
  )
}

export default QuizQuestion
