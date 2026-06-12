import { motion } from "framer-motion"
import Canvas3D from "../components/Canvas3D"

export default function Hero() {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    element?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16" style={{ backgroundColor: 'var(--bg-primary)' }}>
      {/* 3D Background */}
      <Canvas3D />

      {/* Matching Glowing Radial Gradients from About component */}
      <div className="absolute inset-0 pointer-events-none" style={{
        backgroundImage: 'radial-gradient(circle at top left, rgba(236,72,153,0.12), transparent 24%), radial-gradient(circle at 60% 30%, rgba(236,72,153,0.08), transparent 22%)'
      }} />
      
      {/* Matching Background Grid Overlay from About component */}
      <div className="absolute inset-0 about-grid pointer-events-none" />

      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8">
        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl font-bold mb-4 text-slate-950 dark:text-white"
        >
          <span className="neon-text">Aya Hibat Allah  Aichoune</span>
        </motion.h1>

        {/* Role */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl md:text-3xl font-medium mb-8 text-slate-800 dark:text-gray-300"
        >
          Junior Data Scientist <span className="text-neon-pink">|</span> ML & AI Learner
        </motion.p>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="max-w-2xl mx-auto text-lg mb-8 leading-relaxed text-slate-600 dark:text-gray-400"
        >
          Passionate about learning Data Science and Machine Learning through real projects.
          I focus on data analysis, model building, and understanding how AI systems work in practice.
          Currently building my skills in Python, ML, and data-driven problem solving.
        </motion.p>

        {/* Status badge */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mb-10"
        >
          <div className="flex items-center justify-center gap-2">
            <div className="w-4 h-4 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-sm font-medium text-slate-600 dark:text-gray-400">Online</span>
          </div>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
        >
          <button
            onClick={() => scrollToSection("projects")}
            className="button-primary"
          >
            View Projects
          </button>

          <button
            onClick={() => scrollToSection("about")}
            className="button-secondary"
          >
            About Me
          </button>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="mt-12"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex justify-center"
          >
            <svg
              className="w-6 h-6 text-neon-pink"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
          >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}