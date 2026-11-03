import { Routes, Route, useLocation } from "react-router-dom"
import { AnimatePresence, motion } from "framer-motion"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import ScrollProgress from "./components/ScrollProgress"

import Home from "./pages/Home"
import History from "./pages/History"
import TimelinePage from "./pages/TimelinePage"
import Culture from "./pages/Culture"
import RwandaToday from "./pages/RwandaToday"
import MapPage from "./pages/MapPage"
import GalleryPage from "./pages/GalleryPage"
import Quiz from "./pages/Quiz"
import Vision2030 from "./pages/Vision2030"
import NotFound from "./pages/NotFound"

function PageWrapper({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
    >
      {children}
    </motion.div>
  )
}

export default function App() {
  const location = useLocation()

  return (
    <div className="min-h-screen bg-ink-950 text-paper flex flex-col">
      <ScrollProgress />
      <Navbar />
      <main className="flex-1">
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<PageWrapper><Home /></PageWrapper>} />
            <Route path="/history" element={<PageWrapper><History /></PageWrapper>} />
            <Route path="/timeline" element={<PageWrapper><TimelinePage /></PageWrapper>} />
            <Route path="/culture" element={<PageWrapper><Culture /></PageWrapper>} />
            <Route path="/today" element={<PageWrapper><RwandaToday /></PageWrapper>} />
            <Route path="/map" element={<PageWrapper><MapPage /></PageWrapper>} />
            <Route path="/gallery" element={<PageWrapper><GalleryPage /></PageWrapper>} />
            <Route path="/quiz" element={<PageWrapper><Quiz /></PageWrapper>} />
            <Route path="/vision-2030" element={<PageWrapper><Vision2030 /></PageWrapper>} />
            <Route path="*" element={<PageWrapper><NotFound /></PageWrapper>} />
          </Routes>
        </AnimatePresence>
      </main>
      <Footer />
    </div>
  )
}
