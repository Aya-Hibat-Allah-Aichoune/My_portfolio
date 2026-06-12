import { motion } from "framer-motion"
import AyaAvatar from "../assets/Aya_avatar.png"

const featureVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: "easeOut" },
  },
}

const focusItems = [
  {
    title: "Data Science & Analytics",
    description:
      "Transforming raw data into insights through cleaning, visualization, and statistical analysis.",
  },
  {
    title: "Machine Learning Engineering",
    description:
      "Building predictive models, training pipelines, and deploying ML systems into production.",
  },
  {
    title: "AI Applications",
    description:
      "Developing intelligent solutions using NLP and Computer Vision for real-world impact.",
  },
]

const quickFacts = [
  { label: "Main Focus", value: "Data Science & Machine Learning" },
  { label: "AI Master", value: "Artificial Intelligence" },
  { label: "HPC Master", value: "High Performance Computing" },
  { label: "Specialization", value: "Data Science (Ongoing)" },
]

export default function About() {
  return (
    <section id="about" className="relative overflow-hidden py-24 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: 'var(--bg-primary)' }}>
      <div className="absolute inset-0 pointer-events-none" style={{
        backgroundImage: 'radial-gradient(circle at top left, rgba(236,72,153,0.12), transparent 24%), radial-gradient(circle at 60% 30%, rgba(236,72,153,0.08), transparent 22%)'
      }} />
      <div className="absolute inset-0 about-grid pointer-events-none" />

      <div className="relative max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 max-w-3xl"
        >
          <p className="inline-flex items-center gap-2 rounded-full border px-4 py-2 text-xs uppercase tracking-[0.36em] shadow-[0_0_40px_rgba(236,72,153,0.08)]" style={{ borderColor: 'var(--accent-pink)', backgroundColor: 'var(--glass-bg)', color: 'var(--accent-pink)' }}>
            About Me
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="grid gap-8 xl:grid-cols-[1.2fr_0.95fr]"
        >
          {/* Left Side */}
          <div className="space-y-6">
            <motion.div
              variants={featureVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="neon-border-card p-8"
            >
              <div className="flex flex-col gap-3">
                <p className="text-sm uppercase tracking-[0.32em] text-neon-pink/70">
                  Aya Hibat Allah Aichoune
                </p>

                <h3 className="text-3xl font-semibold" style={{ color: 'var(--text-primary)' }}>
                  Data Scientist focused on building intelligent ML solutions.
                </h3>

                <p className="leading-relaxed text-lg" style={{ color: 'var(--text-secondary)' }}>
                  Computer Systems Engineering graduate with a Master's in{" "}
                  <span className="font-semibold" style={{ color: 'var(--text-primary)' }}>Artificial Intelligence</span> and{" "}
                  <span className="font-semibold" style={{ color: 'var(--text-primary)' }}>High Performance Computing</span>.
                  Currently specializing in{" "}
                  <span className="font-semibold" style={{ color: 'var(--text-primary)' }}>Data Science</span>, with a strong focus
                  on machine learning, analytics, and building data-driven systems that solve real problems.
                </p>
              </div>

              {/* Personality & Focus */}
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                <motion.div
                  whileHover={{ y: -6 }}
                  className="group rounded-3xl border p-5 transition-all duration-300 cursor-pointer"
                  style={{ borderColor: 'var(--border-color)', backgroundColor: 'var(--glass-bg)' }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = 'var(--accent-pink)';
                    e.currentTarget.style.backgroundColor = 'var(--card-hover)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = 'var(--border-color)';
                    e.currentTarget.style.backgroundColor = 'var(--glass-bg)';
                  }}
                >
                  <p className="text-sm uppercase tracking-[0.32em]" style={{ color: 'var(--accent-pink)' }}>
                    Personality
                  </p>
                  <p className="mt-3 text-lg font-semibold" style={{ color: 'var(--text-primary)' }}>
                    Curious, analytical, and always learning through data.
                  </p>
                </motion.div>

                <motion.div
                  whileHover={{ y: -6 }}
                  className="group rounded-3xl border p-5 transition-all duration-300 cursor-pointer"
                  style={{ borderColor: 'var(--border-color)', backgroundColor: 'var(--glass-bg)' }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = 'var(--accent-pink)';
                    e.currentTarget.style.backgroundColor = 'var(--card-hover)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = 'var(--border-color)';
                    e.currentTarget.style.backgroundColor = 'var(--glass-bg)';
                  }}
                >
                  <p className="text-sm uppercase tracking-[0.32em]" style={{ color: 'var(--accent-pink)' }}>
                    Focus
                  </p>
                  <p className="mt-3 text-lg font-semibold" style={{ color: 'var(--text-primary)' }}>
                    Data Science • Machine Learning • AI Systems
                  </p>
                </motion.div>
              </div>
            </motion.div>

            {/* Focus Items */}
            <motion.div
              variants={featureVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="grid gap-5 sm:grid-cols-2"
            >
              {focusItems.map((item, index) => (
                <motion.div
                  key={item.title}
                  whileHover={{ y: -8 }}
                  className="group rounded-3xl border p-6 shadow-[0_12px_40px_rgba(0,0,0,0.1)] transition-all duration-300 cursor-pointer"
                  style={{ backgroundColor: 'var(--bg-secondary)', borderColor: 'var(--border-color)' }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = 'var(--accent-pink)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = 'var(--border-color)';
                  }}
                >
                  <p className="text-sm uppercase tracking-[0.32em]" style={{ color: 'var(--accent-pink)' }}>
                    {`0${index + 1}`}
                  </p>
                  <h4 className="mt-4 text-xl font-semibold" style={{ color: 'var(--text-primary)' }}>{item.title}</h4>
                  <p className="mt-3" style={{ color: 'var(--text-secondary)' }}>{item.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Right Side */}
          <motion.div
            variants={featureVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="relative rounded-[2.25rem] border p-6 shadow-[0_30px_90px_rgba(236,72,153,0.12)] before:absolute before:-top-8 before:-right-8 before:h-36 before:w-36 before:rounded-full before:bg-neon-pink/10 before:blur-3xl"
            style={{ backgroundColor: 'var(--bg-secondary)', borderColor: 'var(--border-color)' }}
          >
            <div className="absolute inset-x-6 top-6 h-full rounded-[1.75rem] border" style={{ borderColor: 'var(--border-color)', backgroundColor: 'var(--glass-bg)' }} />

            <div className="relative flex flex-col gap-6">
              {/* Avatar Card */}
              <div className="overflow-hidden rounded-[1.75rem] border p-1 shadow-[0_25px_80px_rgba(236,72,153,0.12)]" style={{ borderColor: 'var(--accent-pink)', backgroundColor: 'var(--bg-secondary)' }}>
                <div className="relative overflow-hidden rounded-[1.65rem] p-5" style={{ backgroundColor: 'var(--bg-tertiary)' }}>
                  <div className="absolute inset-x-0 top-0 h-0.5 bg-gradient-to-r from-neon-pink via-pink-300 to-white/70 opacity-70" />

                  <div>
                    <p className="text-sm uppercase tracking-[0.32em]" style={{ color: 'var(--accent-pink)' }}>
                      Data Scientist Profile
                    </p>
                    <p className="mt-2 text-sm" style={{ color: 'var(--text-secondary)' }}>
                      AI • ML • Analytics • Research
                    </p>
                  </div>

                  <div className="mt-6 overflow-hidden rounded-[1.5rem] border" style={{ backgroundColor: 'var(--bg-secondary)', borderColor: 'var(--border-color)' }}>
                    <img
                      src={AyaAvatar}
                      alt="Aya Avatar"
                      className="avatar-image w-full h-auto"
                    />
                  </div>
                </div>
              </div>

              {/* Quick Facts */}
              <div className="grid gap-4">
                {quickFacts.map((fact) => (
                  <motion.div
                    key={fact.label}
                    whileHover={{ x: 4 }}
                    className="rounded-3xl border p-5 transition-all duration-300 cursor-pointer"
                    style={{ backgroundColor: 'var(--bg-tertiary)', borderColor: 'var(--border-color)' }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = 'var(--accent-pink)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = 'var(--border-color)';
                    }}
                  >
                    <p className="text-sm uppercase tracking-[0.25em]" style={{ color: 'var(--accent-pink)' }}>
                      {fact.label}
                    </p>
                    <p className="mt-3 text-lg font-semibold" style={{ color: 'var(--text-primary)' }}>{fact.value}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
