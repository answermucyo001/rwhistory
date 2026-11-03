import { motion } from "framer-motion"
import Timeline from "../components/Timeline"

export default function TimelinePage() {
  return (
    <div className="pt-32 pb-24 px-6 max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <p className="text-gold text-xs tracking-[0.3em] uppercase mb-3">Understand</p>
        <h1 className="font-display text-4xl md:text-6xl font-bold mb-4">The Timeline</h1>
        <p className="text-paper-muted max-w-2xl mx-auto">
          1954 → 1962 → 1973 → 1990 → 1994 → 2000 → 2010 → 2020 → 2026 → 2030. Select any year to explore
          its history, context and sources.
        </p>
      </motion.div>

      <Timeline />
    </div>
  )
}
