# 🚀 Aya Aichoune - Data Science Portfolio

A modern, visually impressive 3D portfolio website for a Data Scientist and AI Engineer. Built with cutting-edge technologies to showcase projects, skills, and expertise.

## ✨ Features

- **3D Interactive Background** - Animated 3D objects with floating particles powered by Three.js
- **Glassmorphism Design** - Modern frosted glass effect cards with smooth animations
- **Neon Noir Theme** - Dark futuristic aesthetic with vibrant neon purple and blue accents
- **Fully Responsive** - Seamless experience across desktop, tablet, and mobile devices
- **Smooth Animations** - Elegant transitions and scroll-based animations with Framer Motion
- **Performance Optimized** - Fast load times and smooth 60fps animations
- **Interactive Contact Form** - Functional form with validation
- **Mobile-Friendly Navigation** - Responsive mobile menu

## 🛠 Tech Stack

- **Frontend Framework**: React 18+
- **Build Tool**: Vite (⚡ Lightning fast)
- **3D Graphics**: Three.js with React Three Fiber
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **3D Utilities**: @react-three/drei

## 📦 Installation

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Setup Steps

1. **Clone or navigate to the project directory:**
```bash
cd /path/to/portfolio
```

2. **Install dependencies:**
```bash
npm install
```

This will install all required packages:
- react
- react-dom
- three
- @react-three/fiber
- @react-three/drei
- framer-motion
- tailwindcss
- And development dependencies

## 🚀 Running the Project

### Development Mode
```bash
npm run dev
```
The site will open automatically in your browser at `http://localhost:5173`

### Build for Production
```bash
npm run build
```
This generates an optimized production build in the `dist` directory.

### Preview Production Build
```bash
npm run preview
```
Preview the production build locally before deployment.

## 📁 Project Structure

```
portfolio/
├── src/
│   ├── components/
│   │   ├── Canvas3D.jsx          # 3D background with Three.js
│   │   ├── Navbar.jsx             # Navigation bar
│   │   └── Footer.jsx             # Footer component
│   ├── sections/
│   │   ├── Hero.jsx               # Hero section with CTA
│   │   ├── About.jsx              # About me section
│   │   ├── Skills.jsx             # Skills and expertise
│   │   ├── Projects.jsx           # Featured projects
│   │   └── Contact.jsx            # Contact form & info
│   ├── App.jsx                    # Main app component
│   ├── main.jsx                   # React entry point
│   └── index.css                  # Tailwind & custom styles
├── index.html                     # HTML entry point
├── vite.config.js                 # Vite configuration
├── tailwind.config.js             # Tailwind CSS config
├── postcss.config.js              # PostCSS config
├── package.json                   # Dependencies
└── .gitignore                     # Git ignore rules
```

## 🎨 Design System

### Colors
- **Background**: `#050505` (Noir Black)
- **Neon Purple**: `#A855F7`
- **Neon Blue**: `#06B6D4`
- **Neon Cyan**: `#00D9FF`
- **Neon Pink**: `#EC4899`

### Typography
- **Font Family**: Inter (Google Fonts)
- **Weights**: 300, 400, 500, 600, 700, 800, 900

### Components
- Glassmorphism cards with backdrop blur
- Neon glow effects and shadows
- Smooth transitions and hover states
- Responsive grid layouts

## 📄 Sections Overview

### Hero
- Animated 3D background with rotating octahedron
- Floating particle effects
- Call-to-action buttons
- Scroll indicator animation

### About
- Personal bio and achievements
- 4 highlight cards with icons
- Glass-morphism design
- Smooth reveal animations

### Skills
- Core competencies with animated progress bars
- Technical stack tags (30+ technologies)
- Tools & languages showcase
- Experience statistics

### Projects
- 6 featured project cards
- Hover animations and effects
- Tech stack display
- GitHub and demo links
- Gradient overlays on hover

### Contact
- Contact form with validation
- Responsive two-column layout
- Social media links
- Email and location info
- Success message feedback

## 🎯 Customization Guide

### Update Personal Info
Edit the content in `src/sections/` files:
- Change name/title in `Hero.jsx`
- Update bio in `About.jsx`
- Modify skills in `Skills.jsx`
- Add your projects in `Projects.jsx`
- Update contact info in `Contact.jsx`

### Modify Colors
Edit `tailwind.config.js`:
```javascript
colors: {
  neon: {
    purple: '#A855F7',
    blue: '#06B6D4',
    // Add or modify colors here
  }
}
```

### Adjust 3D Animation
Edit `src/components/Canvas3D.jsx`:
- Change geometry: `octahedronGeometry` → other Three.js geometries
- Adjust rotation speed
- Modify light positions and colors
- Change particle count

## 🚢 Deployment

### Vercel (Recommended)
```bash
npm i -g vercel
vercel
```

### Netlify
```bash
npm i -g netlify-cli
netlify deploy --prod --dir=dist
```

### GitHub Pages
Update `vite.config.js`:
```javascript
export default defineConfig({
  base: '/portfolio/',
  // ... rest of config
})
```

## 🔧 Development Tips

- Use Chrome DevTools to inspect responsive behavior
- Test animations performance on different devices
- Monitor 3D rendering performance in DevTools
- Use `npm run build` and `npm run preview` before deploying

## 📚 Resources

- [React Documentation](https://react.dev)
- [Three.js Documentation](https://threejs.org/docs)
- [React Three Fiber](https://docs.pmnd.rs/react-three-fiber)
- [Framer Motion](https://www.framer.com/motion)
- [Tailwind CSS](https://tailwindcss.com)
- [Vite Documentation](https://vitejs.dev)

## 📝 License

This project is open source and available under the MIT License.

## 💡 Tips for Best Results

1. **Performance**: The 3D background is optimized but disable it on very old devices if needed
2. **Mobile**: Test thoroughly on actual devices, not just browser emulation
3. **SEO**: Update meta tags in `index.html` with your actual information
4. **Social Links**: Replace placeholder URLs with your actual profiles
5. **Contact**: Update email and social links in `Contact.jsx` and `Footer.jsx`

## 🎓 Learning Resources

This portfolio is a great learning project for:
- React component architecture
- Three.js 3D graphics
- Tailwind CSS styling
- Framer Motion animations
- Responsive web design
- Web performance optimization

---

**Built with ❤️ using React, Three.js, and Tailwind CSS**

Start your dev server: `npm run dev` 🚀
