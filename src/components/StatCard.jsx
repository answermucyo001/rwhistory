import { useEffect, useRef, useState } from "react"
import { motion, useInView } from "framer-motion"
import * as Icons from "lucide-react"

function AnimatedNumber({ value }) {
  const match = value.match(/[\d.]+/)
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })
  const [display, setDisplay] = useState(match ? "0" : value)

  useEffect(() => {
    if (!inView || !match) return
    const target = parseFloat(match[0])
    const duration = 900
    const start = performance.now()
    const prefix = value.slice(0, match.index)
    const suffix = value.slice(match.index + match[0].length)
    let raf
    const step = (now) => {
      const p = Math.min((now - start) / duration, 1)
      const current = (target * p).toFixed(match[0].includes(".") ? 1 : 0)
      setDisplay(`${prefix}${current}${suffix}`)
      if (p < 1) raf = requestAnimationFrame(step)
    }
    raf = requestAnimationFrame(step)
    return () => cancelAnimationFrame(raf)
  }, [inView])

  return <span ref={ref}>{display}</span>
}

export default function StatCard({ icon, category, stats }) {
  const Icon = Icons[icon] || Icons.BarChart3
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5 }}
      className="bg-ink-800 border border-ink-600/60 rounded-xl p-6 hover:border-gold/40 transition-colors"
    >
      <div className="flex items-center gap-3 mb-5">
        <div className="p-2 rounded-lg bg-gold/10 text-gold">
          <Icon size={20} />
        </div>
        <h3 className="font-display text-lg tracking-wide">{category}</h3>
      </div>
      <div className="space-y-4">
        {stats.map((s) => (
          <div key={s.label} className="border-t border-ink-600/50 pt-3 first:border-0 first:pt-0">
            <div className="text-2xl font-display font-bold text-gold">
              <AnimatedNumber value={s.value} />
            </div>
            <div className="text-sm text-paper-soft">{s.label}</div>
            <div className="text-[11px] text-paper-muted mt-0.5">
              {s.year} · {s.source}
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  )
}
