import { motion } from "framer-motion"
import ImageCard from "../components/ImageCard"
import { timelineEvents } from "../data/timeline"
import { cultureItems } from "../data/culture"
import { images } from "../data/images"

export default function GalleryPage() {
  const items = [
    ...timelineEvents.map((e) => ({
      year: e.year, location: e.location, description: e.title, source: e.source, image: e.image,
    })),
    ...cultureItems.map((c) => ({
      year: "", location: "", description: c.title, source: "", image: c.image,
    })),
    { year: "", location: "Volcanoes National Park", description: "Mountain gorilla, Susa Group", source: "", image: images.mountainGorilla },
    { year: "", location: "Kigali", description: "Kigali street scene, 2016", source: "", image: images.kigaliStreet2016 },
  ]

  return (
    <div className="pt-32 pb-24 px-6 max-w-7xl mx-auto">
      <div className="text-center mb-14">
        <p className="text-gold text-xs tracking-[0.3em] uppercase mb-3">Archive</p>
        <h1 className="font-display text-4xl md:text-6xl font-bold mb-4">Gallery</h1>
        <p className="text-paper-muted max-w-2xl mx-auto">
          Photographs below are freely-licensed images from Wikimedia Commons, credited and linked
          back to their source. Where no verified image was available for a topic, the card shows a
          labeled placeholder rather than an invented or mismatched photo.
        </p>
      </div>

      <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
        {items.map((it, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ delay: (i % 6) * 0.05 }}
            className="break-inside-avoid"
          >
            <ImageCard {...it} />
          </motion.div>
        ))}
      </div>
    </div>
  )
}
