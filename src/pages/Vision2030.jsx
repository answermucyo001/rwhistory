import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import * as Icons from "lucide-react"
import { visionCategories, vision2030Note } from "../data/vision2030"

function VisionCard({ item, i }) {
  const [open, setOpen] = useState(false)
  const Icon = Icons[item.icon] || Icons.Sparkles

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ delay: (i % 4) * 0.08, duration: 0.45 }}
      className="rounded-xl border border-gold/20 bg-gradient-to-b from-ink-800 to-ink-900 p-6 cursor-pointer hover:border-gold/50 transition-colors relative overflow-hidden"
      onClick={() => setOpen((o) => !o)}
    >
      <div className="absolute -right-8 -top-8 w-32 h-32 rounded-full bg-gold/5 blur-2xl" />
      <div className="relative flex items-center gap-3 mb-4">
        <div className="p-2 rounded-lg bg-gold/10 text-gold">
          <Icon size={20} />
        </div>
        <h3 className="font-display text-lg font-bold">{item.title}</h3>
      </div>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden relative space-y-3 text-sm"
          >
            <div>
              <p className="text-gold text-[11px] uppercase tracking-widest mb-1">Official Goal</p>
              <p className="text-paper-soft">{item.officialGoal}</p>
            </div>
            <div>
              <p className="text-paper-muted text-[11px] uppercase tracking-widest mb-1">Current Project</p>
              <p className="text-paper-soft">{item.currentProject}</p>
            </div>
            <div>
              <p className="text-paper-muted text-[11px] uppercase tracking-widest mb-1">Possible Future</p>
              <p className="text-paper-soft italic">{item.possibleFuture}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {!open && <p className="text-paper-muted text-xs">Tap to explore</p>}
    </motion.div>
  )
}

const hotspots = [
  { id: "tech", label: "Technology", q: "How could emerging technologies change services, education and businesses by 2030?" },
  { id: "edu", label: "Education", q: "How might digital learning and STEM investment reshape classrooms by 2030?" },
  { id: "health", label: "Health", q: "How could digital health tools expand access to care in coming years?" },
  { id: "transport", label: "Transport", q: "What could smart, sustainable transport look like in Rwandan cities?" },
  { id: "env", label: "Environment", q: "How might renewable energy and conservation continue to expand?" },
  { id: "biz", label: "Business", q: "What could a more diversified, innovation-driven economy look like?" },
]

function ImagineScene() {
  const [selected, setSelected] = useState(null)
  return (
    <div className="relative rounded-2xl border border-gold/20 bg-[radial-gradient(circle_at_50%_0%,#151515,#050505_70%)] p-10 md:p-16 overflow-hidden">
      <div className="absolute inset-0 opacity-[0.08] bg-[linear-gradient(#D4AF37_1px,transparent_1px),linear-gradient(90deg,#D4AF37_1px,transparent_1px)] bg-[length:48px_48px]" />
      <div className="relative text-center mb-10">
        <h3 className="font-display text-2xl md:text-3xl font-bold mb-2">Imagine Rwanda in 2030</h3>
        <p className="text-paper-muted text-sm">Select a hotspot to explore a future possibility.</p>
      </div>
      <div className="relative flex flex-wrap justify-center gap-3">
        {hotspots.map((h) => (
          <button
            key={h.id}
            onClick={() => setSelected(h)}
            className={`px-5 py-2.5 rounded-full border text-xs tracking-widest uppercase transition-colors ${
              selected?.id === h.id
                ? "bg-gold text-ink-950 border-gold font-semibold"
                : "border-gold/30 text-paper-soft hover:border-gold"
            }`}
          >
            {h.label}
          </button>
        ))}
      </div>
      <AnimatePresence mode="wait">
        {selected && (
          <motion.div
            key={selected.id}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            className="relative mt-8 max-w-xl mx-auto text-center bg-ink-900/70 border border-gold/20 rounded-xl p-6"
          >
            <p className="text-gold text-xs uppercase tracking-widest mb-2">{selected.label} · Speculative</p>
            <p className="text-paper-soft">{selected.q}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default function Vision2030() {
  return (
    <div className="pt-32 pb-24 px-6 max-w-7xl mx-auto bg-ink-950">
      <div className="text-center mb-6">
        <p className="text-gold text-xs tracking-[0.3em] uppercase mb-3">Imagine · Build</p>
        <h1 className="font-display text-4xl md:text-6xl font-bold mb-4">Rwanda 2030</h1>
        <p className="text-paper-muted max-w-2xl mx-auto">The Next Chapter</p>
      </div>

      <p className="text-center text-xs text-paper-muted max-w-2xl mx-auto mb-16 italic">
        {vision2030Note}
      </p>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-20">
        {visionCategories.map((c, i) => (
          <VisionCard key={c.id} item={c} i={i} />
        ))}
      </div>

      <ImagineScene />
    </div>
  )
}
