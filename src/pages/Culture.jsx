import { motion } from "framer-motion"
import { cultureItems } from "../data/culture"
import ImageCard from "../components/ImageCard"

export default function Culture() {
  return (
    <div className="pt-32 pb-24 px-6 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <p className="text-gold text-xs tracking-[0.3em] uppercase mb-3">Heritage</p>
        <h1 className="font-display text-4xl md:text-6xl font-bold mb-4">Culture Museum</h1>
        <p className="text-paper-muted max-w-2xl mx-auto">
          A living heritage — dance, craft, language and tradition that continues to shape Rwandan identity.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {cultureItems.map((c, i) => (
          <motion.div
            key={c.id}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ delay: (i % 3) * 0.1, duration: 0.5 }}
            className="bg-ink-800 border border-ink-600/60 rounded-xl overflow-hidden hover:border-gold/40 transition-colors"
          >
            <ImageCard year="" location="" description={c.title} aspect="aspect-[16/10]" image={c.image} />
            <div className="p-6">
              <h3 className="font-display text-xl font-bold mb-3">{c.title}</h3>
              <p className="text-paper-soft text-sm leading-relaxed mb-5">{c.description}</p>
              <div className="grid grid-cols-2 gap-3 text-xs">
                <div className="bg-ink-700/60 rounded-lg p-3">
                  <p className="text-paper-muted uppercase tracking-widest mb-1">Then</p>
                  <p className="text-paper-soft">{c.then}</p>
                </div>
                <div className="bg-gold/5 border border-gold/20 rounded-lg p-3">
                  <p className="text-gold uppercase tracking-widest mb-1">Today</p>
                  <p className="text-paper-soft">{c.now}</p>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
