import { motion } from "framer-motion"
import { beforeHistory, timelineEvents } from "../data/timeline"
import { images } from "../data/images"
import ImageCard from "../components/ImageCard"
import { ShieldAlert } from "lucide-react"

const memorial = timelineEvents.find((e) => e.year === "1994")
const rebuildPeriods = [
  { range: "1994–2000", label: "REBUILD" },
  { range: "2000–2010", label: "RECONSTRUCT" },
  { range: "2010–2020", label: "MODERNIZE" },
  { range: "2020–2026", label: "DIGITAL TRANSFORMATION" },
  { range: "2026–2030", label: "FUTURE" },
]

function Section({ eyebrow, title, children }) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.55 }}
      className="py-20 px-6 max-w-5xl mx-auto"
    >
      <p className="text-gold text-xs tracking-[0.3em] uppercase mb-3">{eyebrow}</p>
      <h2 className="font-display text-3xl md:text-5xl font-bold mb-6">{title}</h2>
      {children}
    </motion.section>
  )
}

export default function History() {
  return (
    <div className="pt-24">
      {/* Before 1954 */}
      <Section eyebrow="Long Before This Timeline" title={beforeHistory.title}>
        <p className="text-paper-soft leading-relaxed mb-4">{beforeHistory.summary}</p>
        <p className="text-[11px] text-paper-muted italic">Source: {beforeHistory.source}</p>
      </Section>

      <div className="h-px bg-ink-600/50 max-w-5xl mx-auto" />

      {/* 1954-1962 */}
      <Section eyebrow="1954 – 1962" title="Toward Independence">
        <p className="text-paper-soft leading-relaxed mb-6">
          The final years of Belgian colonial rule saw growing political mobilization, the 1959
          "Social Revolution," and the eventual dissolution of the monarchy. On 1 July 1962, Rwanda
          became fully independent, with Grégoire Kayibanda as its first president.
        </p>
        <div className="grid sm:grid-cols-2 gap-6">
          <ImageCard year="1959" location="Rwanda" description="The Rwandan Revolution" source="Prunier (1995)" />
          <ImageCard year="1962" location="Kigali" description="Independence Day, 1 July 1962" source="U.S. Dept. of State, Office of the Historian" image={images.flag} />
        </div>
      </Section>

      <div className="h-px bg-ink-600/50 max-w-5xl mx-auto" />

      {/* 1962-1994 */}
      <Section eyebrow="1962 – 1994" title="Independence to Crisis">
        <p className="text-paper-soft leading-relaxed mb-4">
          The decades after independence were marked by significant political change, including
          the 1973 coup that brought Juvénal Habyarimana to power, periodic ethnic violence, and,
          from 1990, civil war between government forces and the Rwandan Patriotic Front (RPF).
          The Arusha Accords of 1993 attempted to establish a power-sharing peace, but tensions
          continued to escalate.
        </p>
        <p className="text-[11px] text-paper-muted italic">
          Source: Prunier, G. (1995). The Rwanda Crisis: History of a Genocide.
        </p>
      </Section>

      {/* 1994 Memorial */}
      <section className="py-24 px-6 bg-ink-900 border-y border-ink-600/50">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 text-gold text-xs tracking-widest uppercase border border-gold/30 bg-gold/5 rounded-full px-4 py-2 mb-6">
            <ShieldAlert size={14} />
            Presented with care and historical accuracy
          </div>
          <h2 className="font-display text-5xl md:text-7xl font-bold mb-4">1994</h2>
          <p className="text-gold tracking-[0.3em] uppercase text-sm mb-10">
            Remember · Understand · Learn · Rebuild
          </p>

          <div className="text-left space-y-6 text-paper-soft leading-relaxed">
            <p>
              <strong className="text-paper">Background & Escalation.</strong> Decades of colonial-era
              ethnic classification and post-independence political violence, combined with civil war
              from 1990, created the conditions for catastrophe. Extremist media and militia organizing
              intensified through 1993 and early 1994.
            </p>
            <p>
              <strong className="text-paper">The Genocide Against the Tutsi.</strong> On 6 April 1994,
              President Habyarimana's plane was shot down, and within hours a planned genocide against
              the Tutsi population began, also claiming the lives of moderate Hutu who opposed the
              violence. Over roughly 100 days, an estimated 1,000,000 people were killed.
            </p>
            <p>
              <strong className="text-paper">End of the Genocide.</strong> The Rwandan Patriotic Front
              (RPF) took control of Kigali on 4 July 1994 and the genocide was declared over by mid-July,
              though violence and mass displacement continued in its aftermath, including refugee crises
              in neighboring countries.
            </p>
            <p>
              <strong className="text-paper">Justice & Reconciliation.</strong> Accountability efforts
              included the UN's International Criminal Tribunal for Rwanda (ICTR, 1994–2015) and
              community-based Gacaca courts (2002–2012), which processed an estimated 1.9 million
              cases. The National Unity and Reconciliation Commission was established to support
              long-term healing.
            </p>
            <p>
              <strong className="text-paper">Lessons for Future Generations.</strong> 7 April is
              observed annually as Genocide Memorial Day, beginning a national period of mourning.
              Genocide education is now part of Rwanda's national curriculum, intended to help ensure
              such events are never repeated.
            </p>
          </div>

          <p className="text-[11px] text-paper-muted italic mt-8">
            Source: {memorial?.source}. For primary accounts, consult the Kigali Genocide Memorial
            and the UN Office on Genocide Prevention.
          </p>
        </div>
      </section>

      {/* After 1994 transformation */}
      <Section eyebrow="Rwanda After 1994" title="A Nation Rebuilding">
        <div className="grid sm:grid-cols-2 gap-6 mb-10">
          <ImageCard year="" location="Kigali" description="The Parliament building, Kigali" image={images.parliament} aspect="aspect-video" />
          <ImageCard year="" location="Kigali" description="Central Kigali" image={images.kigaliCbd} aspect="aspect-video" />
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4 mt-4">
          {rebuildPeriods.map((p, i) => (
            <motion.div
              key={p.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="bg-ink-800 border border-ink-600/60 rounded-xl p-5 text-center"
            >
              <p className="text-gold text-xs tracking-widest mb-2">{p.range}</p>
              <p className="font-display font-bold">{p.label}</p>
            </motion.div>
          ))}
        </div>
      </Section>
    </div>
  )
}
