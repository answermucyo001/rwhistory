import { useEffect, useState } from "react"
import { Link, NavLink } from "react-router-dom"
import { Menu, X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

const links = [
  { to: "/", label: "Home" },
  { to: "/history", label: "History" },
  { to: "/timeline", label: "Timeline" },
  { to: "/culture", label: "Culture" },
  { to: "/today", label: "Today" },
  { to: "/map", label: "Map" },
  { to: "/gallery", label: "Gallery" },
  { to: "/quiz", label: "Quiz" },
  { to: "/vision-2030", label: "2030" },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-ink-950/80 backdrop-blur-md border-b border-ink-600/50" : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 md:px-10 h-16 md:h-20 flex items-center justify-between">
        <Link to="/" className="font-display font-bold tracking-widest text-lg md:text-xl">
          RWANDA
        </Link>

        <ul className="hidden lg:flex items-center gap-8 text-sm tracking-wide">
          {links.map((l) => (
            <li key={l.to}>
              <NavLink
                to={l.to}
                className={({ isActive }) =>
                  `gold-underline uppercase text-xs tracking-widest transition-colors ${
                    isActive ? "text-gold" : "text-paper-soft hover:text-gold"
                  }`
                }
              >
                {l.label}
              </NavLink>
            </li>
          ))}
        </ul>

        <button
          aria-label="Toggle menu"
          onClick={() => setOpen((o) => !o)}
          className="lg:hidden text-paper hover:text-gold transition-colors"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="lg:hidden bg-ink-950/95 backdrop-blur-md border-b border-ink-600/50 overflow-hidden"
          >
            <ul className="flex flex-col px-6 py-4 gap-4">
              {links.map((l) => (
                <li key={l.to}>
                  <NavLink
                    to={l.to}
                    onClick={() => setOpen(false)}
                    className={({ isActive }) =>
                      `block uppercase text-sm tracking-widest py-1 ${
                        isActive ? "text-gold" : "text-paper-soft"
                      }`
                    }
                  >
                    {l.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
