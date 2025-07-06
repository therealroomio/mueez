# Technical Context: 4th Tale Inc Website

## Technology Stack

### Core Framework
- **React 18.3.1**: Modern React with hooks, concurrent features
- **Vite 6.0.1**: Fast build tool with HMR (Hot Module Replacement)
- **React Router DOM 7.1.1**: Client-side routing with modern API

### Animation & Interaction
- **GSAP 3.12.5**: Professional animation library
  - ScrollTrigger plugin for scroll-based animations
  - Core animation engine for transforms and effects
- **Framer Motion 11.15.0**: React-specific animation library
  - Page transitions and layout animations
  - AnimatePresence for enter/exit animations
- **React Lenis 0.0.47**: Smooth scrolling implementation
- **SplitType 0.3.4**: Text splitting for character animations

### UI & Interaction
- **React Icons 5.4.0**: Icon library (HiArrowRight, RiArrowRightDownLine)
- **Lucide React 0.468.0**: Modern icon set
- **Three.js 0.171.0**: 3D graphics (likely for gradient effects)
- **dat.GUI 0.7.9**: Development controls and debugging

### Development Tools
- **ESLint 9.15.0**: Code linting with React-specific rules
- **Prettier 3.4.2**: Code formatting
- **TypeScript Types**: React and React-DOM type definitions
- **Vite Plugin React 4.3.4**: React integration for Vite

## Development Setup

### Installation
```bash
npm install
```

### Scripts
- `npm run dev`: Development server with HMR
- `npm run build`: Production build
- `npm run preview`: Preview production build
- `npm run lint`: Code linting

### Project Structure
```
src/
├── components/          # Reusable UI components
├── pages/              # Route components
├── assets/             # Static assets (fonts, images)
├── App.jsx             # Main application component
├── main.jsx            # React entry point
├── index.css           # Global styles
└── App.css             # App-specific styles
```

### Asset Organization
```
public/
├── cta/               # Call-to-action assets
├── marquee/           # Marquee animation frames
├── processes/         # Process icons
├── projects/          # Project images
├── team/              # Team member photos
├── work/              # Work samples
└── video/             # Video files
```

## Technical Constraints

### Performance Requirements
- Smooth 60fps animations across devices
- Fast initial load times
- Efficient asset loading and management
- Mobile-responsive animations

### Browser Support
- Modern browsers with ES6+ support
- WebGL support for Three.js features
- CSS Grid and Flexbox support
- Modern JavaScript features (async/await, modules)

## Development Environment
- **Node.js**: Latest LTS version
- **Package Manager**: npm (lock file present)
- **Code Style**: ESLint + Prettier configuration
- **Build Target**: Modern browsers (ES2020+)

## Key Dependencies Analysis
- **Animation Heavy**: Multiple animation libraries for different use cases
- **Modern React**: Latest React patterns and hooks
- **Performance Focused**: Vite for fast development and builds
- **Design System**: Custom CSS with component-specific styling
- **Asset Rich**: Significant image and video assets

## Configuration Files
- `vite.config.js`: Vite build configuration
- `eslint.config.js`: ESLint rules and React-specific settings
- `package.json`: Dependencies and scripts
- `.prettierrc`: Code formatting rules 