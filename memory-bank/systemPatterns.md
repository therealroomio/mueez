# System Patterns: 4th Tale Inc Website

## Architecture Overview
The application follows a modern React SPA architecture with sophisticated animation layering and smooth user interactions.

## Key Technical Decisions

### Component Architecture
- **Page-Based Routing**: `/` (Home) and `/work` as main routes
- **Reusable Components**: Modular design with dedicated component folders
- **CSS Modules**: Component-specific styling with global shared styles
- **Asset Organization**: Structured public folder with categorized media

### Animation System
- **GSAP as Primary**: Complex scroll animations, hover effects, and transforms
- **Framer Motion**: Page transitions and layout animations
- **ScrollTrigger**: Scroll-based animation orchestration
- **SplitType**: Text animation character/word splitting
- **React Lenis**: Smooth scrolling foundation

### State Management
- **Local Component State**: React hooks for UI state
- **No Global State**: Simple application doesn't require Redux/Context
- **Route-Based State**: Different states per page component

## Design Patterns

### Animation Patterns
```javascript
// Scroll-triggered animations
gsap.timeline({
  scrollTrigger: {
    trigger: '.element',
    start: 'top 35%',
    end: 'bottom 75%',
    scrub: true
  }
});

// Hover interactions
element.addEventListener('mouseenter', () => {
  gsap.to(target, { scale: 1.2, duration: 0.5 });
});
```

### Component Structure
```
ComponentName/
├── ComponentName.jsx
├── ComponentName.css
└── (additional files)
```

### Asset Management
- **Categorized Assets**: Projects, team, work samples in dedicated folders
- **Optimized Images**: Multiple formats and sizes for different use cases
- **Video Integration**: Local video files with custom player controls

## Performance Patterns
- **Lazy Loading**: Components load as needed
- **Animation Cleanup**: Proper cleanup of GSAP timelines and ScrollTriggers
- **Mobile Optimization**: Responsive animations with device-specific logic
- **Asset Optimization**: Compressed images and efficient loading

## Component Relationships
- **App.jsx**: Main router with animation transitions
- **Home.jsx**: Primary page with complex scroll animations
- **Work.jsx**: Secondary page for detailed project showcase
- **NavBar**: Persistent navigation across routes
- **Cursor**: Custom cursor following mouse movement
- **VideoPlayer**: Custom video controls and playback
- **Transition**: Page transition animations

## Data Flow
- **Static Data**: Projects and content defined in JavaScript modules
- **Props-Based**: Data flows down through component props
- **Event-Driven**: User interactions trigger animations and state changes

## Development Patterns
- **Modern React**: Functional components with hooks
- **ESM Modules**: ES6 import/export syntax
- **Vite Build**: Fast development and optimized production builds
- **ESLint/Prettier**: Code quality and formatting standards 