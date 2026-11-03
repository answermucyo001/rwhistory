import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { MapPin, X } from "lucide-react"

// Rwanda's five provinces — simplified, stylized positions for an illustrative
// (non-GIS-accurate) interactive panel. For precise cartography, consult an
// official geographic dataset.
const provinces = [
  {
    id: "kigali",
    name: "City of Kigali",
    cx: 50, cy: 48,
    info: "Rwanda's capital and largest city, and its political and economic center. Home to the Kigali Genocide Memorial and the Kigali Convention Centre.",
  },
  {
    id: "north",
    name: "Northern Province",
    cx: 44, cy: 20,
    info: "Home to Volcanoes National Park and mountain gorilla conservation tourism, near the city of Musanze.",
  },
  {
    id: "south",
    name: "Southern Province",
    cx: 40, cy: 70,
    info: "Location of the historic King's Palace Museum in Nyanza and the National University of Rwanda in Huye (Butare).",
  },
  {
    id: "east",
    name: "Eastern Province",
    cx: 75, cy: 45,
    info: "Home to Akagera National Park, savanna landscapes, and a significant share of Rwanda's agricultural land.",
  },
  {
    id: "west",
    name: "Western Province",
    cx: 15, cy: 45,
    info: "Borders Lake Kivu and includes Nyungwe Forest National Park, known for primate populations and biodiversity.",
  },
]

export default function MapPage() {
  const [active, setActive] = useState(null)

  return (
    <div className="pt-32 pb-24 px-6 max-w-6xl mx-auto">
      <div className="text-center mb-14">
        <p className="text-gold text-xs tracking-[0.3em] uppercase mb-3">Explore</p>
        <h1 className="font-display text-4xl md:text-6xl font-bold mb-4">Interactive Map</h1>
        <p className="text-paper-muted max-w-2xl mx-auto">
          Rwanda's five provinces, illustrated. Click a marker to learn more about each region.
        </p>
      </div>

      <div className="relative bg-ink-800 border border-ink-600/60 rounded-2xl p-6 md:p-10">
        <div className="relative aspect-[4/3] max-w-2xl mx-auto">
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <defs>
              <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
                <path d="M 10 0 L 0 0 0 10" fill="none" stroke="#222222" strokeWidth="0.3" />
              </pattern>
            </defs>
            <rect width="100" height="100" fill="url(#grid)" />
            {/* stylized outline, not geographically precise */}
            <path
              d="M 20 15 L 60 10 L 85 30 L 82 60 L 65 85 L 30 82 L 10 60 L 12 30 Z"
              fill="#0D0D0D"
              stroke="#D4AF37"
              strokeWidth="0.6"
              opacity="0.9"
            />
          </svg>

          {provinces.map((p) => (
            <button
              key={p.id}
              onClick={() => setActive(p)}
              style={{ left: `${p.cx}%`, top: `${p.cy}%` }}
              className="absolute -translate-x-1/2 -translate-y-1/2 group"
            >
              <span
                className={`flex items-center justify-center w-8 h-8 rounded-full border transition-all ${
                  active?.id === p.id
                    ? "bg-gold border-gold scale-110"
                    : "bg-ink-900 border-gold/50 group-hover:border-gold"
                }`}
              >
                <MapPin size={16} className={active?.id === p.id ? "text-ink-950" : "text-gold"} />
              </span>
              <span className="absolute top-9 left-1/2 -translate-x-1/2 whitespace-nowrap text-[10px] tracking-widest uppercase text-paper-muted group-hover:text-paper">
                {p.name.split(" ")[0]}
              </span>
            </button>
          ))}
        </div>

        <AnimatePresence>
          {active && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              className="mt-8 max-w-xl mx-auto bg-ink-900 border border-gold/20 rounded-xl p-6 relative"
            >
              <button
                onClick={() => setActive(null)}
                className="absolute top-4 right-4 text-paper-muted hover:text-gold"
                aria-label="Close"
              >
                <X size={16} />
              </button>
              <h3 className="font-display text-xl font-bold mb-2 text-gold">{active.name}</h3>
              <p className="text-paper-soft text-sm leading-relaxed">{active.info}</p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <p className="text-center text-[11px] text-paper-muted italic mt-6">
        Map is a stylized illustration for navigation purposes, not a precise geographic survey.
      </p>
    </div>
  )
}
