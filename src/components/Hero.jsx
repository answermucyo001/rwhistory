import { motion } from "framer-motion"
import { ChevronDown } from "lucide-react"
import { Link } from "react-router-dom"
import { images } from "../data/images"

export default function Hero() {
  return (
    <section className="relative h-screen min-h-[640px] w-full overflow-hidden flex items-center justify-center">
      {/* Parallax-ish background */}
      <motion.div
        initial={{ scale: 1.15 }}
        animate={{ scale: 1 }}
        transition={{ duration: 3, ease: "easeOut" }}
        className="absolute inset-0 bg-ink-950"
      >
        <img
          src={images.kigaliCbd.src}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(5,5,5,0.4)_0%,rgba(5,5,5,0.85)_75%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(5,5,5,0.6),rgba(5,5,5,0.97))]" />
        <div className="absolute inset-0 opacity-[0.06] bg-[url('data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%22100%22 height=%22100%22><rect width=%22100%22 height=%22100%22 fill=%22none%22 stroke=%22%23D4AF37%22 stroke-width=%220.5%22/></svg>')] bg-[length:60px_60px]" />
      </motion.div>

      <div className="relative z-10 text-center px-6 max-w-4xl">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-gold tracking-[0.3em] uppercase text-xs md:text-sm mb-4"
        >
          From History
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.9 }}
          className="font-display font-bold text-5xl sm:text-7xl md:text-8xl tracking-tight leading-none mb-4"
        >
          RWANDA
        </motion.h1>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.55, duration: 0.9 }}
          className="font-display text-2xl sm:text-3xl md:text-4xl text-paper-soft mb-6"
        >
          To Vision
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="text-gold/90 tracking-widest text-sm md:text-base mb-8"
        >
          1954 — 2026 — 2030
        </motion.p>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.95, duration: 0.8 }}
          className="text-paper-muted max-w-xl mx-auto mb-10 text-sm md:text-base"
        >
          Explore Rwanda's journey through history, culture, transformation and future aspirations.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link
            to="/history"
            className="px-7 py-3 bg-gold text-ink-950 font-semibold text-sm tracking-widest uppercase rounded-full hover:bg-gold-deep transition-colors"
          >
            Explore History
          </Link>
          <Link
            to="/vision-2030"
            className="px-7 py-3 border border-paper-muted/40 text-paper text-sm tracking-widest uppercase rounded-full hover:border-gold hover:text-gold transition-colors"
          >
            Discover Vision 2030
          </Link>
        </motion.div>
      </div>

      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-paper-muted text-[10px] tracking-[0.25em] uppercase"
      >
        <span>Scroll to explore</span>
        <ChevronDown size={16} className="text-gold" />
      </motion.div>

      <a
        href={images.kigaliCbd.commonsUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="absolute bottom-3 right-4 text-[9px] text-paper-muted/60 hover:text-gold transition-colors tracking-wide"
      >
        Photo: {images.kigaliCbd.credit}
      </a>
    </section>
  )
}
