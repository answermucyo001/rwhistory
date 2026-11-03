import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { RotateCcw, ArrowRight, CheckCircle2, XCircle } from "lucide-react"
import { Link } from "react-router-dom"

const questions = [
  {
    q: "In what year did Rwanda gain independence from Belgium?",
    options: ["1959", "1962", "1973", "1994"],
    answer: 1,
    category: "Independence",
  },
  {
    q: "Who became Rwanda's first president at independence?",
    options: ["Paul Kagame", "Juvénal Habyarimana", "Grégoire Kayibanda", "Fred Rwigyema"],
    answer: 2,
    category: "History",
  },
  {
    q: "What is Rwanda's capital city?",
    options: ["Butare", "Musanze", "Kigali", "Gisenyi"],
    answer: 2,
    category: "Geography",
  },
  {
    q: "In what year did the coup that brought Juvénal Habyarimana to power occur?",
    options: ["1965", "1973", "1980", "1988"],
    answer: 1,
    category: "History",
  },
  {
    q: "When did the Rwandan Civil War begin with the RPF's incursion?",
    options: ["October 1988", "October 1990", "October 1992", "April 1994"],
    answer: 1,
    category: "1994",
  },
  {
    q: "Approximately how long did the 1994 genocide against the Tutsi last?",
    options: ["About 2 weeks", "About 100 days", "About 1 year", "About 5 years"],
    answer: 1,
    category: "1994",
  },
  {
    q: "What are Rwanda's community-based courts for genocide-related trials called?",
    options: ["Ubudehe", "Umuganda", "Gacaca", "Imihigo"],
    answer: 2,
    category: "Development",
  },
  {
    q: "What is Rwanda's national e-government platform called?",
    options: ["Irembo", "M-Pesa", "e-Kigali", "RwandaNet"],
    answer: 0,
    category: "Technology",
  },
  {
    q: "Which national park is best known for mountain gorilla tourism?",
    options: ["Akagera", "Nyungwe Forest", "Volcanoes National Park", "Gishwati-Mukura"],
    answer: 2,
    category: "Culture",
  },
  {
    q: "Vision 2050, Rwanda's long-term development strategy, ultimately targets what status?",
    options: ["Low-income", "Upper-middle then high-income", "Least developed", "No stated target"],
    answer: 1,
    category: "Future",
  },
]

export default function Quiz() {
  const [idx, setIdx] = useState(0)
  const [selected, setSelected] = useState(null)
  const [score, setScore] = useState(0)
  const [finished, setFinished] = useState(false)

  const current = questions[idx]

  const choose = (i) => {
    if (selected !== null) return
    setSelected(i)
    if (i === current.answer) setScore((s) => s + 1)
  }

  const next = () => {
    if (idx + 1 < questions.length) {
      setIdx((n) => n + 1)
      setSelected(null)
    } else {
      setFinished(true)
    }
  }

  const restart = () => {
    setIdx(0)
    setSelected(null)
    setScore(0)
    setFinished(false)
  }

  return (
    <div className="pt-32 pb-24 px-6 max-w-2xl mx-auto min-h-[70vh]">
      <div className="text-center mb-12">
        <p className="text-gold text-xs tracking-[0.3em] uppercase mb-3">Test Yourself</p>
        <h1 className="font-display text-3xl md:text-5xl font-bold">How Much Do You Know About Rwanda?</h1>
      </div>

      {!finished ? (
        <AnimatePresence mode="wait">
          <motion.div
            key={idx}
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -24 }}
            transition={{ duration: 0.3 }}
            className="bg-ink-800 border border-ink-600/60 rounded-2xl p-8"
          >
            <div className="flex justify-between items-center mb-6 text-xs tracking-widest uppercase">
              <span className="text-gold">{current.category}</span>
              <span className="text-paper-muted">Question {idx + 1} / {questions.length}</span>
            </div>

            <h2 className="font-display text-xl md:text-2xl font-bold mb-8">{current.q}</h2>

            <div className="space-y-3 mb-8">
              {current.options.map((opt, i) => {
                const isCorrect = i === current.answer
                const isChosen = i === selected
                let style = "border-ink-600 hover:border-gold/50"
                if (selected !== null) {
                  if (isCorrect) style = "border-gold bg-gold/10"
                  else if (isChosen) style = "border-red-500/60 bg-red-500/5"
                  else style = "border-ink-600 opacity-50"
                }
                return (
                  <button
                    key={i}
                    onClick={() => choose(i)}
                    className={`w-full flex items-center justify-between text-left px-5 py-3.5 rounded-lg border transition-colors ${style}`}
                  >
                    <span className="text-sm text-paper-soft">{opt}</span>
                    {selected !== null && isCorrect && <CheckCircle2 size={18} className="text-gold" />}
                    {selected !== null && isChosen && !isCorrect && <XCircle size={18} className="text-red-400" />}
                  </button>
                )
              })}
            </div>

            {selected !== null && (
              <button
                onClick={next}
                className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-gold text-ink-950 font-semibold text-sm tracking-widest uppercase rounded-full hover:bg-gold-deep transition-colors"
              >
                {idx + 1 < questions.length ? "Next Question" : "See Score"} <ArrowRight size={16} />
              </button>
            )}
          </motion.div>
        </AnimatePresence>
      ) : (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-ink-800 border border-ink-600/60 rounded-2xl p-10 text-center"
        >
          <p className="text-gold text-xs tracking-widest uppercase mb-3">Your Score</p>
          <p className="font-display text-6xl font-bold mb-6">
            {score} <span className="text-paper-muted text-2xl">/ {questions.length}</span>
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={restart}
              className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-gold/40 text-gold text-sm tracking-widest uppercase rounded-full hover:bg-gold/10 transition-colors"
            >
              <RotateCcw size={16} /> Try Again
            </button>
            <Link
              to="/history"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-gold text-ink-950 font-semibold text-sm tracking-widest uppercase rounded-full hover:bg-gold-deep transition-colors"
            >
              Explore History <ArrowRight size={16} />
            </Link>
          </div>
        </motion.div>
      )}
    </div>
  )
}
