import { useState } from "react"
import { ImageOff, ExternalLink } from "lucide-react"

/**
 * Reusable historical/cultural image card.
 *
 * If `image` (an entry from src/data/images.js) is provided, a real,
 * freely-licensed Wikimedia Commons photograph is rendered, with a visible
 * credit line and a link back to the Commons file page for full attribution.
 *
 * If no `image` is provided — or the remote file ever fails to load — the
 * card falls back to a labeled placeholder rather than fabricating or
 * misrepresenting an image, per this site's editorial rule against
 * inventing historical imagery.
 */
export default function ImageCard({ year, location, description, source, aspect = "aspect-[4/3]", image }) {
  const [failed, setFailed] = useState(false)
  const showImage = image && !failed

  return (
    <figure className="group rounded-lg overflow-hidden border border-ink-600/60 bg-ink-800">
      <div className={`relative ${aspect} bg-ink-700 overflow-hidden`}>
        {showImage ? (
          <img
            src={image.src}
            alt={image.alt}
            loading="lazy"
            onError={() => setFailed(true)}
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-2">
            <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_30%_20%,#D4AF37,transparent_60%)] group-hover:opacity-30 transition-opacity" />
            <ImageOff className="text-paper-muted" size={28} />
            <span className="text-paper-muted text-xs tracking-widest uppercase">Historical image unavailable</span>
          </div>
        )}
        {showImage && <div className="absolute inset-0 bg-gradient-to-t from-ink-950/40 via-transparent to-transparent pointer-events-none" />}
      </div>
      <figcaption className="p-4 space-y-1">
        <div className="flex items-center justify-between text-xs text-gold tracking-widest uppercase">
          <span>{year}</span>
          {location && <span className="text-paper-muted">{location}</span>}
        </div>
        {description && <p className="text-sm text-paper-soft">{description}</p>}
        {source && <p className="text-[11px] text-paper-muted italic">Source: {source}</p>}
        {showImage && (
          <a
            href={image.commonsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-[11px] text-paper-muted hover:text-gold transition-colors pt-1"
          >
            <ExternalLink size={10} />
            {image.credit}
          </a>
        )}
      </figcaption>
    </figure>
  )
}
