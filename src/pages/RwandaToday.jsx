import { motion } from "framer-motion"
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from "recharts"
import { todayStats, developmentJourney } from "../data/statistics"
import StatCard from "../components/StatCard"

// GDP (current US$, billions) — World Bank / Trading Economics compiled estimate
const gdpData = [
  { year: 2000, gdp: 2.07 },
  { year: 2005, gdp: 2.93 },
  { year: 2010, gdp: 6.12 },
  { year: 2015, gdp: 8.54 },
  { year: 2020, gdp: 10.17 },
  { year: 2024, gdp: 14.33 },
]

export default function RwandaToday() {
  return (
    <div className="pt-32 pb-24 px-6 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <p className="text-gold text-xs tracking-[0.3em] uppercase mb-3">Transform</p>
        <h1 className="font-display text-4xl md:text-6xl font-bold mb-4">Rwanda Today — 2026</h1>
        <p className="text-paper-muted max-w-2xl mx-auto">
          A data-driven look at where Rwanda stands now. Every figure below is sourced and dated —
          nothing here is invented.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
        {todayStats.map((s) => (
          <StatCard key={s.category} icon={s.icon} category={s.category} stats={s.stats} />
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="bg-ink-800 border border-ink-600/60 rounded-xl p-6 md:p-10 mb-20"
      >
        <h3 className="font-display text-2xl font-bold mb-1">GDP Growth, 2000–2024</h3>
        <p className="text-paper-muted text-sm mb-6">Current US$, billions · Source: World Bank / Trading Economics</p>
        <div className="h-72">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={gdpData}>
              <CartesianGrid stroke="#222222" vertical={false} />
              <XAxis dataKey="year" stroke="#A5A5A5" tick={{ fontSize: 12 }} />
              <YAxis stroke="#A5A5A5" tick={{ fontSize: 12 }} unit="B" />
              <Tooltip
                contentStyle={{ background: "#0D0D0D", border: "1px solid #333", borderRadius: 8 }}
                labelStyle={{ color: "#D4AF37" }}
              />
              <Line type="monotone" dataKey="gdp" stroke="#D4AF37" strokeWidth={2.5} dot={{ fill: "#D4AF37", r: 4 }} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </motion.div>

      <div>
        <h2 className="font-display text-3xl font-bold mb-8 text-center">The Development Journey</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {developmentJourney.map((d, i) => (
            <motion.div
              key={d.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="bg-ink-800 border border-ink-600/60 rounded-xl p-6"
            >
              <h3 className="font-display text-xl font-bold mb-4 text-gold">{d.title}</h3>
              <div className="space-y-3 text-sm">
                <p><span className="text-paper-muted uppercase text-xs tracking-widest mr-2">Past</span>{d.past}</p>
                <p><span className="text-paper-muted uppercase text-xs tracking-widest mr-2">Today</span>{d.today}</p>
                <p><span className="text-gold uppercase text-xs tracking-widest mr-2">Future</span>{d.future}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
