import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { timelineEvents } from "../data/timeline"
import ImageCard from "./ImageCard"
import { AlertTriangle, Sparkles } from "lucide-react"

export default function Timeline({ compact = false }) {
  const [active, setActive] = useState(timelineEvents[5].year) // default: 1994

  const activeEvent = timelineEvents.find((e) => e.year === active)

  return (
    <div className="w-full">
      {/* Desktop horizontal rail */}
      <div className="hidden md:block relative">
        <div className="absolute top-5 left-0 right-0 h-px bg-ink-600" />
        <div className="flex justify-between relative">
          {timelineEvents.map((e) => (
            <button
              key={e.year}
              onClick={() => setActive(e.year)}
              className="group flex flex-col items-center gap-3 flex-1"
            >
              <span
                className={`w-3 h-3 rounded-full border transition-all duration-300 ${
                  active === e.year
                    ? "bg-gold border-gold scale-150 shadow-[0_0_12px_2px_rgba(212,175,55,0.6)]"
                    : "bg-ink-700 border-ink-500 group-hover:border-gold"
                }`}
              />
              <span
                className={`text-xs tracking-widest transition-colors ${
                  active === e.year ? "text-gold font-semibold" : "text-paper-muted group-hover:text-paper"
                }`}
              >
                {e.year}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Mobile vertical rail */}
      <div className="md:hidden flex gap-4 overflow-x-auto scrollbar-thin pb-3">
        {timelineEvents.map((e) => (
          <button
            key={e.year}
            onClick={() => setActive(e.year)}
            className={`shrink-0 px-4 py-2 rounded-full border text-xs tracking-widest transition-colors ${
              active === e.year
                ? "bg-gold text-ink-950 border-gold font-semibold"
                : "border-ink-600 text-paper-muted"
            }`}
          >
            {e.year}
          </button>
        ))}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={activeEvent.year}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -16 }}
          transition={{ duration: 0.35 }}
          className="mt-10 grid md:grid-cols-2 gap-8 items-start"
        >
          <ImageCard
            year={activeEvent.year}
            location={activeEvent.location}
            description={activeEvent.title}
            source={activeEvent.source}
            image={activeEvent.image}
            aspect="aspect-video"
          />

          <div>
            {activeEvent.sensitive && (
              <div className="flex items-center gap-2 text-xs text-gold/90 border border-gold/30 bg-gold/5 rounded-md px-3 py-2 mb-4">
                <AlertTriangle size={14} />
                Presented with care. See the dedicated 1994 memorial section for full context.
              </div>
            )}
            {activeEvent.speculative && (
              <div className="flex items-center gap-2 text-xs text-gold/90 border border-gold/30 bg-gold/5 rounded-md px-3 py-2 mb-4">
                <Sparkles size={14} />
                Forward-looking goals — not guaranteed outcomes.
              </div>
            )}
            <p className="text-gold text-xs tracking-[0.2em] uppercase mb-2">{activeEvent.year} · {activeEvent.location}</p>
            <h3 className="font-display text-3xl md:text-4xl font-bold mb-4">{activeEvent.title}</h3>
            <p className="text-paper-soft leading-relaxed mb-5">{activeEvent.summary}</p>
            <ul className="space-y-2 mb-5">
              {activeEvent.events.map((ev, i) => (
                <li key={i} className="flex gap-3 text-sm text-paper-soft">
                  <span className="text-gold mt-1">—</span>
                  <span>{ev}</span>
                </li>
              ))}
            </ul>
            <p className="text-[11px] text-paper-muted italic">Source: {activeEvent.source}</p>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  )
}
