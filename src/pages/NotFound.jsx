import { Link } from "react-router-dom"

export default function NotFound() {
  return (
    <div className="pt-40 pb-24 px-6 text-center min-h-[60vh]">
      <p className="text-gold font-display text-6xl font-bold mb-4">404</p>
      <p className="text-paper-muted mb-8">This page doesn't exist yet.</p>
      <Link to="/" className="text-gold gold-underline text-sm uppercase tracking-widest">
        Return Home
      </Link>
    </div>
  )
}
