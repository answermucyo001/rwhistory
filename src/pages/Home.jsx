import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import Hero from "../components/Hero"
import Timeline from "../components/Timeline"
import { ArrowRight } from "lucide-react"

const journey = [
  { key: "REMEMBER", desc: "Explore Rwanda's history.", to: "/history" },
  { key: "UNDERSTAND", desc: "Understand important historical events and their context.", to: "/timeline" },
  { key: "TRANSFORM", desc: "Explore Rwanda's reconstruction and development.", to: "/today" },
  { key: "IMAGINE", desc: "Explore possibilities and aspirations for Rwanda's future.", to: "/vision-2030" },
  { key: "BUILD", desc: "Explore how citizens, especially young people, can contribute.", to: "/vision-2030" },
]

export default function Home() {
  return (
    <div>
      <Hero />

      {/* Past -> Present -> Future transition */}
      <section className="py-24 px-6 bg-ink-900 border-y border-ink-600/40">
        <div className="max-w-5xl mx-auto text-center">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-4 mb-6">
            {["PAST", "PRESENT", "FUTURE"].map((w, i) => (
              <div key={w} className="flex items-center gap-4">
                <motion.span
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15 }}
                  className="font-display text-2xl md:text-4xl tracking-widest text-paper"
                >
                  {w}
                </motion.span>
                {i < 2 && <ArrowRight className="text-gold hidden sm:block" size={22} />}
              </div>
            ))}
          </div>
          <p className="text-paper-muted max-w-xl mx-auto">
            A single, unbroken story — from the founding of the republic to the country Rwanda hopes to build.
          </p>
        </div>
      </section>

      {/* Journey structure */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-gold text-xs tracking-[0.3em] uppercase mb-3">The Journey</p>
          <h2 className="font-display text-3xl md:text-5xl font-bold">Five Chapters, One Story</h2>
        </div>

        <div className="grid md:grid-cols-5 gap-4">
          {journey.map((j, i) => (
            <motion.div
              key={j.key}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
            >
              <Link
                to={j.to}
                className="group block h-full bg-ink-800 border border-ink-600/60 rounded-xl p-6 hover:border-gold/50 transition-colors"
              >
                <span className="text-gold font-display text-xs tracking-widest">0{i + 1}</span>
                <h3 className="font-display text-xl font-bold my-3 group-hover:text-gold transition-colors">
                  {j.key}
                </h3>
                <p className="text-paper-muted text-sm leading-relaxed">{j.desc}</p>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Timeline preview */}
      <section className="py-24 px-6 bg-ink-900 border-t border-ink-600/40">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-gold text-xs tracking-[0.3em] uppercase mb-3">1954 — 2030</p>
            <h2 className="font-display text-3xl md:text-5xl font-bold mb-4">The Interactive Timeline</h2>
            <p className="text-paper-muted max-w-2xl mx-auto">
              Select a year to travel through Rwanda's modern history — from independence to the aspirations of 2030.
            </p>
          </div>
          <Timeline />
          <div className="text-center mt-12">
            <Link
              to="/timeline"
              className="inline-flex items-center gap-2 text-gold text-sm tracking-widest uppercase gold-underline"
            >
              Open Full Timeline <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
