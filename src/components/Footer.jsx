import { Link } from "react-router-dom"

const links = [
  { to: "/history", label: "History" },
  { to: "/timeline", label: "Timeline" },
  { to: "/culture", label: "Culture" },
  { to: "/today", label: "Today" },
  { to: "/map", label: "Map" },
  { to: "/gallery", label: "Gallery" },
  { to: "/vision-2030", label: "Vision 2030" },
]

export default function Footer() {
  return (
    <footer className="bg-ink-950 border-t border-ink-600/50 pt-16 pb-10 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between gap-10 mb-12">
          <div>
            <h3 className="font-display font-bold text-2xl tracking-widest mb-2">RWANDA</h3>
            <p className="text-gold text-sm tracking-widest uppercase mb-1">From History to Vision</p>
            <p className="text-paper-muted text-sm">1954 — 2030</p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-10 gap-y-2">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                className="text-paper-soft text-sm hover:text-gold transition-colors gold-underline w-fit"
              >
                {l.label}
              </Link>
            ))}
          </div>
        </div>

        <div className="border-t border-ink-600/50 pt-6 flex flex-col md:flex-row justify-between gap-4">
          <p className="text-paper-muted text-xs max-w-2xl leading-relaxed">
            This website is an educational project. Historical information, photographs and
            statistics should be verified against authoritative sources.
          </p>
          <div className="flex gap-6 text-xs text-paper-muted">
            <span className="hover:text-gold transition-colors cursor-default">Sources</span>
            <span className="hover:text-gold transition-colors cursor-default">Educational Resources</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
