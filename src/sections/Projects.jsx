import { useState } from 'react'
import { motion } from 'framer-motion'

const ProjectCard = ({ project, idx }) => {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: idx * 0.1 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative h-full"
    >
      <div className="glass-card h-full flex flex-col overflow-hidden rounded-xl border p-6" style={{ backgroundColor: 'var(--bg-secondary)', borderColor: 'var(--border-color)' }}>
        {/* Gradient Background on Hover */}
        <motion.div
          animate={{ opacity: isHovered ? 1 : 0 }}
          className="absolute inset-0 bg-gradient-to-br from-neon-pink/10 to-white/10 pointer-events-none"
        />
        
        {/* Content */}
        <div className="relative z-10 flex flex-col h-full">
          {/* Project Header */}
          <div className="flex items-start justify-between mb-4">
            <h3 className="text-2xl font-bold text-neon-pink group-hover:text-neon-pink transition-colors duration-300">
              {project.title}
            </h3>
            <motion.svg
              animate={{ rotate: isHovered ? 45 : 0 }}
              className="w-6 h-6 text-neon-pink shrink-0 ml-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </motion.svg>
          </div>

          {/* Description */}
          <p className="mb-6 text-sm leading-relaxed flex-grow" style={{ color: 'var(--text-secondary)' }}>
            {project.description}
          </p>

          {/* Tech Stack */}
          <div className="mb-6">
            <p className="text-xs mb-2 font-semibold" style={{ color: 'var(--text-tertiary)' }}>Technologies:</p>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((tech, i) => (
                <span
                  key={i}
                  className="px-3 py-1 text-xs rounded-full border"
                  style={{
                    backgroundColor: 'var(--accent-pink)',
                    color: 'white',
                    borderColor: 'var(--accent-pink)'
                  }}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Links */}
          <div className="flex gap-3 pt-4 mt-auto" style={{ borderTop: '1px solid var(--border-color)' }}>
            {project.github && (
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-300 text-sm font-medium"
                style={{
                  backgroundColor: 'var(--accent-pink)',
                  color: 'white'
                }}
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v 3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
                GitHub
              </motion.a>
            )}
            {project.demo && (
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-300 text-sm font-medium"
                style={{
                  backgroundColor: 'var(--accent-pink)',
                  color: 'white'
                }}
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
                Demo
              </motion.a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default function Projects() {
const dataScienceProjects = [
    {
      title: 'Beauty Sales Dashboard',
      description: 'A modern Streamlit dashboard for tracking beauty product sales in real time. Features live metrics, product performance charts, and regional/city sales distribution.',
      tech: ['Python', 'Streamlit', 'Pandas', 'Plotly', 'PostgreSQL'],
      github: 'https://github.com/Aya-Hibat-Allah-Aichoune/Dashboard_live_sales',
      demo: '',
    }
,
    {
      title: 'ASOS Product Analysis',
      description: 'End-to-end exploratory data analysis and machine learning classification built on ASOS e-commerce data. Features comprehensive data preprocessing, feature engineering, and predictive modeling workflows.',
      tech: ['Python', 'Pandas', 'Scikit-Learn', 'Jupyter', 'EDA'],
      github: 'https://github.com/Aya-Hibat-Allah-Aichoune/Product_analysis', // Update this link if your repo name is different!
      demo: '',
    }, 
    {
  title: 'Sales Data Cleaning & Visualization Practice Project',
  description: 'This project demonstrates the end-to-end process of cleaning a messy sales dataset and extracting actionable business insights through data visualization. The raw dataset contained numerous inconsistencies, including missing values, mixed string/numeric formats, unstandardized dates, and variable text casing. These issues were systematically resolved using Python\'s pandas library.',
  tech: ['Python', 'Pandas', 'Data Cleaning', 'Matplotlib', 'Seaborn', 'Data Visualization'],
  github: 'https://github.com/Aya-Hibat-Allah-Aichoune/cleaning_messy_data_practice', 
  demo: '',
},

    {
      title: 'BRAINFO: AI EEG Diagnostics (Master\'s PFE)',
      description: 'My Master\'s Thesis (PFE) developing an advanced Brain-Computer Interface (BCI). It leverages deep learning to analyze real-time EEG data for diagnosing epilepsy, evaluating cognitive focus, and tracking sleep fatigue via a connected mobile app.',
      tech: ['Deep Learning', 'Python', 'EEG Analysis', 'BCI', 'Master\'s Thesis'],
      github: 'https://www.kaggle.com/code/ayaaichoune/tfm-2023', 
      demo: '',
    }

  ]

  const devProjects = [
    {
      title: 'Eduworky',
      description: 'A comprehensive mobile platform designed to simplify the management of educational, cultural, and training institutions. Architected for scale with seamless Firebase integration for high-performance synchronization.',
      tech: ['Flutter', 'Dart', 'Firebase', 'iOS / App Store'],
      github: '', 
      demo: 'https://apps.apple.com/es/app/eduworky/id6449506865',
    },
     {
    title: 'BrokkerSpot',
    description:
      'A real estate mobile application that connects users with brokers and property listings. Built with scalable architecture, real-time notifications, and advanced filtering for brokers and announcements. Includes chat initiation, grouped notifications, and Firebase Dynamic Links for sharing property details.',
    tech: [
      'Flutter',
      'Dart',
      'GetX',
      'Firebase',
      'REST API',
      'Firebase Dynamic Links',
      'Push Notifications',
    ],
    github: '', 
    demo: '',  
  },
  

  ]

  return (
    <section id="projects" className="relative py-20 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: 'var(--bg-primary)' }}>
      <div className="max-w-7xl mx-auto">
        {/* Main Section Title */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="neon-text">Featured Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-neon-pink to-white/70 mx-auto"></div>
          <p className="mt-4 text-lg" style={{ color: 'var(--text-secondary)' }}>
            Bridging the gap between intelligent data systems and seamless user experiences.
          </p>
        </motion.div>

        {/* --- DATA SCIENCE SECTION --- */}
        <div className="mb-24">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-4 mb-8"
          >
            <h3 className="text-3xl font-bold" style={{ color: 'var(--text-primary)' }}>
              Data Science & AI
            </h3>
            <div className="flex-grow h-px opacity-20" style={{ backgroundColor: 'var(--accent-pink)' }}></div>
          </motion.div>
          
          {dataScienceProjects.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {dataScienceProjects.map((project, idx) => (
                <ProjectCard key={`ds-${idx}`} project={project} idx={idx} />
              ))}
            </div>
          ) : (
            <p className="text-center italic opacity-60" style={{ color: 'var(--text-secondary)' }}>
              Data Science projects will be added here...
            </p>
          )}
        </div>

        {/* --- DEVELOPMENT SECTION --- */}
        <div>
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-4 mb-8"
          >
            <h3 className="text-3xl font-bold" style={{ color: 'var(--text-primary)' }}>
              Development
            </h3>
            <div className="flex-grow h-px opacity-20" style={{ backgroundColor: 'var(--accent-pink)' }}></div>
          </motion.div>

          {devProjects.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {devProjects.map((project, idx) => (
                <ProjectCard key={`dev-${idx}`} project={project} idx={idx} />
              ))}
            </div>
          ) : (
            <p className="text-center italic opacity-60" style={{ color: 'var(--text-secondary)' }}>
              Development projects will be added here...
            </p>
          )}
        </div>

      </div>
    </section>
  )
}