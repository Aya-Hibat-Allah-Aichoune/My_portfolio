import { motion } from 'framer-motion'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative border-t transition-colors duration-300" style={{ backgroundColor: 'var(--bg-secondary)', borderColor: 'var(--border-color)' }}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row justify-between items-center gap-8"
        >
          {/* Left Section */}
          <div>
            <h3 className="text-lg font-bold neon-text mb-2">Aya Aichoune</h3>
            <p className="text-sm transition-colors duration-300" style={{ color: 'var(--text-secondary)' }}>Data Scientist | AI Engineer</p>
          </div>

          {/* Center Section - Quick Links */}
          <div className="flex gap-8">
            {[
              { name: 'About', href: '#about' },
              { name: 'Skills', href: '#skills' },
              { name: 'Projects', href: '#projects' },
              { name: 'Contact', href: '#contact' },
            ].map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm hover:text-neon-pink transition-colors duration-300"
                style={{ color: 'var(--text-secondary)' }}
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Right Section - Social */}
          <div className="flex gap-4">
            {[
              { name: 'GitHub', icon: '💻', url: 'https://github.com' },
              { name: 'LinkedIn', icon: '🔗', url: 'https://linkedin.com' },
              { name: 'Email', icon: '✉️', url: 'mailto:hello@example.com' },
            ].map((social) => (
              <motion.a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                className="text-lg hover:text-neon-pink transition-colors duration-300"
                title={social.name}
              >
                {social.icon}
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-neon-pink/50 to-transparent my-8"></div>

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-sm transition-colors duration-300"
          style={{ color: 'var(--text-secondary)' }}
        >
          <p>
            © {currentYear} Aya Aichoune. Crafted with passion using React, Three.js & Tailwind CSS.
          </p>
        </motion.div>
      </div>
    </footer>
  )
}
