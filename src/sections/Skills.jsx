import { motion } from "framer-motion";
const skills = [
  "Python",
  "Pandas",
  "NumPy",
  "TensorFlow",
  "PyTorch",
  "Scikit-learn ",
  "Machine Learning ",
  "Deep Learning ",
  "SQL ",
  "Data Cleaning",
  "Data Visualization",
  "Matplotlib",
  "Seaborn",
  "Computer Vision ",
  "OpenCV",
  "Jupyter Notebook",
  "Git / GitHub",
  "Docker ",
  "C++ ",
  "MPI / OpenMP ",
  "Flutter",
  "Dart",
  "Laravel",
  "PHP",
  "MySQL",
  "PostgreSQL",
  "Firebase",
];

const badges = ["Python", "Machine Learning", "SQL", "Computer Vision"];

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative overflow-hidden px-6 py-24 sm:px-10 lg:px-20"
      style={{ backgroundColor: 'var(--bg-primary)' }}
    >
      <div className="absolute inset-0 pointer-events-none" style={{
        backgroundImage: 'radial-gradient(circle at top left, rgba(236,72,153,0.12), transparent 22%), radial-gradient(circle at 80% 15%, rgba(255,255,255,0.06), transparent 18%)'
      }} />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-pink-400/30 via-transparent to-white/20" />

      <div className="relative z-10 mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p className="inline-flex rounded-full border px-4 py-2 text-xs uppercase tracking-[0.36em] shadow-[0_0_30px_rgba(236,72,153,0.08)]" style={{ borderColor: 'var(--border-color)', backgroundColor: 'var(--glass-bg)', color: 'var(--accent-pink)' }}>
            Data Science Toolkit
          </p>

          <h2 className="mt-6 text-4xl sm:text-5xl font-semibold tracking-tight" style={{ color: 'var(--text-primary)' }}>
            Data Science & AI Learning Stack
          </h2>

          <p className="mt-4 max-w-3xl text-sm sm:text-base" style={{ color: 'var(--text-secondary)' }}>
            I'm building strong foundations in data science, machine learning, and computer vision — while
            also having hands-on experience in mobile and full-stack development using Flutter and Laravel.
          </p>
        </motion.div>

        {/* Top Badges */}
        <div className="mt-10 flex flex-wrap gap-3">
          {badges.map((badge, index) => (
            <motion.span
              key={badge}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.05 * index }}
              className="inline-flex rounded-full border px-4 py-2 text-xs uppercase tracking-[0.34em] shadow-[0_10px_30px_rgba(0,0,0,0.1)]"
              style={{ borderColor: 'var(--border-color)', backgroundColor: 'var(--glass-bg)', color: 'var(--text-primary)' }}
            >
              {badge}
            </motion.span>
          ))}
        </div>

        <div className="mt-14 grid gap-8 xl:grid-cols-[0.9fr_1.1fr]">
          {/* Left Side */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="space-y-6"
          >
            <div className="rounded-[32px] border p-8 shadow-[0_40px_120px_rgba(15,23,42,0.12)] backdrop-blur-md" style={{ backgroundColor: 'var(--bg-secondary)', borderColor: 'var(--border-color)' }}>
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-xs uppercase tracking-[0.35em]" style={{ color: 'var(--accent-pink)' }}>
                    Core Focus
                  </p>
                  <h3 className="mt-3 text-2xl font-semibold" style={{ color: 'var(--text-primary)' }}>
                    Learning Data Science & AI through real projects.
                  </h3>
                </div>
                <div className="h-16 w-16 shrink-0 rounded-3xl bg-gradient-to-br from-pink-500 via-pink-300 to-white/10 shadow-[0_0_45px_rgba(236,72,153,0.18)]" />
              </div>

              <p className="mt-6 leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                I enjoy working on data analysis, training machine learning models, and exploring computer vision.
                I also apply my development background to build practical applications and deploy solutions.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {[
                {
                  title: "Machine Learning",
                  subtitle: "Learning classification, regression, and evaluation",
                },
                {
                  title: "Computer Vision",
                  subtitle: "Basic image processing using OpenCV",
                },
                {
                  title: "Data Analysis",
                  subtitle: "Cleaning datasets, visualization, and insights",
                },
                {
                  title: "HPC (Intro)",
                  subtitle: "Exploring parallel programming concepts",
                },
                {
                  title: "Full-Stack Experience",
                  subtitle: "Laravel APIs and backend basics",
                },
                {
                  title: "Mobile Development",
                  subtitle: "Flutter apps with real project experience",
                },
              ].map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.06 * index }}
                  className="rounded-2xl border p-6 shadow-[0_18px_60px_rgba(0,0,0,0.1)] hover:-translate-y-1 transition-all duration-300 backdrop-blur-sm cursor-pointer"
                  style={{ backgroundColor: 'var(--bg-secondary)', borderColor: 'var(--border-color)' }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = 'var(--accent-pink)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = 'var(--border-color)';
                  }}
                >
                  <p className="text-xs font-semibold uppercase tracking-[0.2em]" style={{ color: 'var(--accent-pink)' }}>
                    {item.title}
                  </p>
                  <p className="mt-3 text-sm" style={{ color: 'var(--text-secondary)' }}>{item.subtitle}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Side */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative flex flex-col rounded-[32px] border p-8 shadow-[0_30px_90px_rgba(15,23,42,0.12)] backdrop-blur-xl"
            style={{ backgroundColor: 'var(--bg-secondary)', borderColor: 'var(--border-color)' }}
          >
            <div className="absolute inset-x-6 top-6 h-px bg-gradient-to-r from-pink-400/40 via-transparent to-white/20" />

            <div className="mb-6 mt-4">
              <h4 className="text-lg font-medium" style={{ color: 'var(--text-primary)' }}>
                Tools & Technologies (Learning + Practice)
              </h4>
              <p className="mt-2 text-sm" style={{ color: 'var(--text-tertiary)' }}>
                Technologies I've used in projects and coursework.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill}
                  initial={{ opacity: 0, scale: 0.9, y: 10 }}
                  whileInView={{ opacity: 1, scale: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    delay: 0.03 * index,
                    type: "spring",
                    stiffness: 100,
                  }}
                  className="group cursor-default rounded-xl border px-5 py-3 shadow-lg transition-all duration-300 hover:-translate-y-1"
                  style={{ backgroundColor: 'var(--glass-bg)', borderColor: 'var(--border-color)' }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = 'var(--accent-pink)';
                    e.currentTarget.style.boxShadow = '0 0 25px rgba(236, 72, 153, 0.25)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = 'var(--border-color)';
                    e.currentTarget.style.boxShadow = '0 18px 60px rgba(0, 0, 0, 0.1)';
                  }}
                >
                  <span className="text-sm font-medium tracking-wide transition-colors" style={{ color: 'var(--text-primary)' }}>
                    {skill}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
