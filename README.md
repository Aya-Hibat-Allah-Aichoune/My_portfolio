# Aya Aichoune - Data Science Portfolio
##  Tech Stack
- **Frontend Framework**: React 18+
- **Build Tool**: Vite (⚡ Lightning fast)
- **3D Graphics**: Three.js with React Three Fiber
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **3D Utilities**: @react-three/drei

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn
 
### Development Mode
```bash
npm run dev
```


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


### Update Personal Info
Edit the content in `src/sections/` files:
- Change name/title in `Hero.jsx`
- Update bio in `About.jsx`
- Modify skills in `Skills.jsx`
- Add your projects in `Projects.jsx`
- Update contact info in `Contact.jsx`


**Built with ❤️ using React, Three.js, and Tailwind CSS**

